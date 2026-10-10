// Built-site regression suite. Every non-local request is intercepted; no
// contact request, portal navigation, scan, or analytics request reaches a server.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import {gzipSync} from 'node:zlib';

const {default: puppeteer} = await import(process.env.HELM_PUPPETEER_MODULE || 'puppeteer-core');
const dist = path.resolve('dist');
const reportPath = process.env.HELM_TEST_REPORT || 'hydration-test-report.json';
const mode = process.argv[2] || 'all';
const rows = [], failures = [];
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2'};
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    assert.equal(req.method, 'GET');
    assert.equal(url.searchParams.has('email'), false);
    const decoded = decodeURIComponent(url.pathname);
    const file = path.resolve(dist, '.' + decoded + (decoded.endsWith('/') ? 'index.html' : ''));
    assert.ok(file.startsWith(dist + path.sep));
    const body = await fs.readFile(file);
    res.writeHead(200, {'Content-Type':mime[path.extname(file)] || 'application/octet-stream','Content-Encoding':'gzip','Cache-Control':'no-store'});
    res.end(gzipSync(body));
  } catch { res.writeHead(404,{'Content-Type':'text/html'}); res.end(await fs.readFile(path.join(dist,'404.html')).catch(()=>'Build the static fixture before running tests.')); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = process.env.HELM_TEST_ORIGIN || `http://127.0.0.1:${server.address().port}`;
const browser = await puppeteer.launch({headless:true, executablePath:process.env.HELM_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
process.once('SIGINT',async()=>{await browser.close();server.closeAllConnections();server.close();process.exit(130);});
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function fixture(route, {consent='unknown',theme='auto',slow=false,hold=false,future=false}={}) {
  const context = await browser.createBrowserContext(), page = await context.newPage();
  await page.setViewport({width:412,height:823,deviceScaleFactor:1.75,isMobile:true,hasTouch:true});
  await page.emulateMediaFeatures([{name:'prefers-color-scheme',value:theme==='dark'?'dark':'light'}]);
  await page.evaluateOnNewDocument(({consent,theme,future}) => {
    if(consent!=='unknown') localStorage.setItem('helm-remarketing-consent-v1',consent);
    localStorage.setItem('helm-theme',theme);
    if(future) {
      const NativeDate = Date;
      window.Date = class extends NativeDate {constructor(...args){super(...(args.length?args:['2030-01-01T12:00:00Z']));}};
    }
  }, {consent,theme,future});
  if(slow) {
    const c = await page.createCDPSession();
    await c.send('Emulation.setCPUThrottlingRate',{rate:4});
    await c.send('Network.emulateNetworkConditions',{offline:false,latency:150,downloadThroughput:200000,uploadThroughput:85000,connectionType:'cellular4g'});
  }
  const errors=[],warnings=[],blocked=[],navigations=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(['warning','error'].includes(m.type()) && /hydrat|React error|server.render|did not match|nesting/i.test(m.text())) warnings.push(m.text());});
  let release; const gate = new Promise(resolve=>release=resolve); if(!hold) release();
  let firstNavigation=true;
  await page.setRequestInterception(true);
  page.on('request',async request=>{
    try {
      const url = new URL(request.url());
      if(request.isNavigationRequest()) {
        if(firstNavigation && request.url()===origin+route) firstNavigation=false;
        else {
          navigations.push({origin:url.origin,path:url.pathname,email:url.searchParams.get('email'),src:url.searchParams.get('src'),method:request.method()});
          // A synthetic 204 leaves the current page intact for duplicate checks.
          await request.respond({status:204}); return;
        }
      }
      if(url.origin===origin && request.method()==='GET' && !url.searchParams.has('email')) {
        if(request.resourceType()==='script') await gate;
        await request.continue();
      } else {blocked.push({origin:url.origin,path:url.pathname,method:request.method()}); await request.abort();}
    } catch(e) {errors.push(e.message);}
  });
  const navigation=page.goto(origin+route,{waitUntil:'domcontentloaded'});
  await page.waitForSelector('h1');
  await page.evaluate(()=>{window.__originalHeading=document.querySelector('h1');});
  return {page,errors,warnings,blocked,navigations,release,navigation,close:()=>context.close()};
}
async function hydrated(f) {
  f.release(); await f.navigation;
  await f.page.waitForFunction(()=>window.__VITE_REACT_SSG_CONTEXT__ && Object.keys(document.querySelector('.nav-burger,.error-search')||{}).some(k=>k.startsWith('__reactProps')), {timeout:20000});
  await sleep(120);
}
async function test(name, fn) {
  try {const detail=await fn();rows.push({name,passed:true,...detail});}
  catch(e) {failures.push({name,error:e.stack});rows.push({name,passed:false,error:e.message});}
}
function noErrors(f) {assert.deepEqual(f.errors,[]);assert.deepEqual(f.warnings,[]);}
async function routes(dir=dist) {
  const result=[];
  for(const entry of await fs.readdir(dir,{withFileTypes:true})) {
    const file=path.join(dir,entry.name);
    if(entry.isDirectory()) result.push(...await routes(file));
    else if(entry.name==='index.html' && (await fs.readFile(file,'utf8')).includes('data-server-rendered')) {
      const relative=path.relative(dist,path.dirname(file)).split(path.sep).join('/');result.push(relative?`/${relative}/`:'/');
    }
  }
  return result;
}
try {
  if(['all','routes','blog'].includes(mode)) {
    const selectedRoutes=(await routes()).filter(route=>mode!=='blog'||route.startsWith('/blog/'));
    const tasks=selectedRoutes.flatMap(route=>['unknown','declined','accepted'].flatMap(consent=>['auto','light','dark'].map(theme=>({route,consent,theme}))));
    let next=0;
    await Promise.all(Array.from({length:3},async()=>{
      while(next<tasks.length) {
        const {route,consent,theme}=tasks[next++];
        await test(`direct ${route} ${consent} ${theme}`,async()=>{
          const f=await fixture(route,{consent,theme});
          try {
            await hydrated(f);noErrors(f);
            const state=await f.page.evaluate(()=>({sameHeading:window.__originalHeading===document.querySelector('h1'),mode:localStorage.getItem('helm-theme'),appliedTheme:document.documentElement.dataset.theme,canonical:document.querySelector('link[rel=canonical]')?.href,pageViews:(window.fbq?.queue||[]).filter(a=>a[0]==='track'&&a[1]==='PageView').length}));
            assert.ok(state.sameHeading); assert.equal(state.mode,theme);
            // Astryx represents system/Auto by removing the HTML attribute.
            assert.equal(state.appliedTheme,theme==='auto'?undefined:theme);
            assert.equal(state.canonical,route==='/404/'?undefined:`https://helmsecured.com${route}`);
            assert.equal(state.pageViews,route==='/404/'?0:consent==='accepted'?1:0);
            return {route,consent,theme,state};
          } finally {await f.close();}
        });
      }
    }));
    await test('Capture detects a deliberate hydration mismatch',async()=>{
      const f=await fixture('/',{hold:true});
      try {await f.page.evaluate(()=>document.querySelector('h1').textContent='Intentional test mismatch');await hydrated(f);assert.ok(f.errors.some(e=>/418|hydration/i.test(e))||f.warnings.length);return {detected:true};}finally{await f.close();}
    });
    await test('Cached build across New Year hydrates before updating copyright',async()=>{
      const f=await fixture('/',{future:true});
      try {await hydrated(f);noErrors(f);assert.match(await f.page.$eval('.footer-bottom',e=>e.textContent),/2030/);return {};}finally{await f.close();}
    });
  }
  if(['all','404'].includes(mode)) {
    for(const route of ['/not-a-real-product/','/resources/not-a-real-resource/','/blog/not-a-real-post/','/resources/meraki-october-2026-security-update/','/one/two/']) for(const consent of ['unknown','declined','accepted']) for(const theme of ['auto','light','dark']) await test(`404 fallback ${route} ${consent} ${theme}`,async()=>{
      const f=await fixture(route,{consent,theme});
      try {
        await hydrated(f);noErrors(f);
        const state=await f.page.evaluate(()=>({sameHeading:window.__originalHeading===document.querySelector('h1'),heading:document.querySelector('h1').textContent,title:document.title,robots:document.querySelector('meta[name=robots]')?.content,canonical:document.querySelector('link[rel=canonical]')?.href}));
        assert.ok(state.sameHeading);assert.equal(state.title,'Page Not Found | Helm Security');assert.equal(state.robots,'noindex, follow');assert.equal(state.canonical,undefined);
        return {route,consent,theme,state};
      }finally{await f.close();}
    });
    await test('404 search and recovery navigate to a generated page',async()=>{
      const f=await fixture('/one/two/');
      try{await hydrated(f);await f.page.focus('#error-page-search');await f.page.keyboard.type('pricing');await f.page.evaluate(()=>scrollTo({top:400,behavior:'instant'}));await f.page.keyboard.press('Enter');await f.page.waitForFunction(()=>location.pathname==='/pricing/');await f.page.waitForFunction(()=>scrollY===0);await sleep(200);noErrors(f);assert.equal(await f.page.$eval('link[rel=canonical]',e=>e.href),'https://helmsecured.com/pricing/');return {};}finally{await f.close();}
    });
    await test('Early 404 search preserves input/focus and replays one submit',async()=>{
      const f=await fixture('/one/two/',{hold:true,slow:true});
      try{await f.page.focus('#error-page-search');await f.page.keyboard.type('pricing');await f.page.keyboard.press('Enter');await f.page.keyboard.press('Enter');f.release();await f.navigation;await f.page.waitForFunction(()=>location.pathname==='/pricing/');await sleep(200);noErrors(f);assert.equal(f.navigations.length,0);assert.equal(await f.page.$eval('link[rel=canonical]',e=>e.href),'https://helmsecured.com/pricing/');return {nativeNavigationBlocked:true};}finally{await f.close();}
    });
    await test('Early 404 search text and focus survive without submission',async()=>{
      const f=await fixture('/one/two/',{hold:true,slow:true});
      try{await f.page.focus('#error-page-search');await f.page.keyboard.type('pricing');await hydrated(f);noErrors(f);const state=await f.page.$eval('#error-page-search',e=>({value:e.value,focus:e===document.activeElement}));assert.equal(state.value,'pricing');assert.equal(state.focus,true);return {state};}finally{await f.close();}
    });
  }
  if(['all','forms'].includes(mode)) {
    for(const route of ['/','/helm-core/','/free-scan/']) for(const consent of ['unknown','declined','accepted']) for(const scenario of ['early-business','early-personal','early-invalid','typed-early-submit-late','typed-late-submit-late']) {
      await test(`form ${route} ${consent} ${scenario}`,async()=>{
        const f=await fixture(route,{consent,slow:true,hold:true});
        try {
          await f.page.waitForSelector('.lead-form input[type=email]');
          const email=scenario==='early-personal'?'probe@gmail.com':scenario==='early-invalid'?'invalid':'probe@example.invalid';
          if(scenario==='typed-late-submit-late') await hydrated(f);
          await f.page.focus('.lead-form input[type=email]');await f.page.keyboard.type(email);
          const before=await f.page.$eval('.lead-form input',e=>({value:e.value,focused:e===document.activeElement}));assert.equal(before.value,email);
          if(scenario.startsWith('early-')) {await f.page.keyboard.press('Enter');await f.page.keyboard.press('Enter');}
          await hydrated(f);
          if(!scenario.startsWith('early-')) {await f.page.keyboard.press('Enter');await f.page.keyboard.press('Enter');}
          await sleep(250);noErrors(f);
          const state=await f.page.$eval('.lead-form',form=>({value:form.querySelector('input').value,error:form.querySelector('[role=alert]')?.textContent,disabled:form.querySelector('input').disabled,focused:form.querySelector('input')===document.activeElement}));
          if(scenario==='early-invalid') {assert.equal(f.navigations.length,0);assert.equal(state.value,email);assert.equal(state.focused,true);}
          else if(scenario==='early-personal') {assert.equal(f.navigations.length,0);assert.match(state.error,/personal inbox/);assert.equal(state.value,email);assert.equal(state.focused,true);}
          else {assert.equal(f.navigations.length,1);assert.equal(f.navigations[0].origin,'https://app.helmsecured.com');assert.equal(f.navigations[0].path,'/scan/auto');assert.equal(f.navigations[0].email,email);assert.ok(f.navigations[0].src);assert.equal(state.disabled,true);}
          assert.equal(f.blocked.some(r=>r.method==='POST' && r.path!=='/api/marketing/events'),false);
          return {route,consent,scenario,state,interceptedNavigations:f.navigations,blockedRequests:f.blocked};
        } finally {await f.close();}
      });
    }
    await test('Contact early input, selection and focus survive; no unprotected submit',async()=>{
      const f=await fixture('/contact/?service=helm-core',{consent:'accepted',hold:true});
      try {
        await f.page.waitForSelector('.contact-form');await f.page.select('select[name=interest]','Secure AI Adoption');
        await f.page.focus('input[name=company]');await f.page.keyboard.type('Example fixture');
        await f.page.focus('input[name=email]');await f.page.keyboard.type('probe@example.invalid');
        await f.page.focus('input[name=name]');await f.page.keyboard.type('Synthetic tester');
        await f.page.evaluate(()=>document.querySelector('.contact-form').requestSubmit());
        await hydrated(f);noErrors(f);
        const state=await f.page.evaluate(()=>({name:document.querySelector('input[name=name]').value,interest:document.querySelector('select[name=interest]').value,focused:document.activeElement?.name}));
        assert.equal(state.name,'Synthetic tester');assert.equal(state.interest,'Secure AI Adoption');assert.equal(state.focused,'name');assert.equal(f.navigations.length,0);assert.equal(f.blocked.some(r=>r.method==='POST'),false);return {state};
      }finally{await f.close();}
    });
  }
  if(['all','interactions','blog'].includes(mode)) {
    for(const route of ['/','/helm-core/']) for(const consent of ['unknown','declined','accepted']) await test(`early scroll/input ${route} ${consent}`,async()=>{
      const f=await fixture(route,{consent,slow:true,hold:true});
      try {
        await f.page.focus('.lead-form input');await f.page.keyboard.type('probe@example.invalid');
        await f.page.evaluate(()=>window.scrollTo({top:500,behavior:'instant'}));const before=await f.page.evaluate(()=>scrollY);
        await hydrated(f);noErrors(f);const state=await f.page.evaluate(()=>({scroll:scrollY,value:document.querySelector('.lead-form input').value,focus:document.querySelector('.lead-form input')===document.activeElement}));
        assert.ok(Math.abs(state.scroll-before)<4);assert.equal(state.value,'probe@example.invalid');assert.equal(state.focus,true);
        await f.page.click('.nav-burger');await f.page.waitForFunction(()=>document.querySelector('main').inert);
        await f.page.keyboard.press('Escape');await f.page.waitForFunction(()=>!document.querySelector('main').inert&&getComputedStyle(document.body).overflow!=='hidden');return {state};
      }finally{await f.close();}
    });
    await test('Blog post navigation keeps evergreen Resources separate',async()=>{
      const f=await fixture('/blog/',{consent:'declined'});
      try {
        await hydrated(f);
        await f.page.click('.blog-post');
        await f.page.waitForFunction(()=>location.pathname==='/blog/meraki-october-2026-security-update/');
        await f.page.waitForFunction(()=>document.querySelector('.article-body'));
        assert.equal(await f.page.$eval('link[rel=canonical]',e=>e.href),'https://helmsecured.com/blog/meraki-october-2026-security-update/');
        assert.equal(await f.page.$eval('.article-meta a',e=>e.textContent),'Blog');
        assert.equal(await f.page.$eval('.article-meta a[href="/about/#dawid-kluszczynski"]',e=>e.textContent),'Dawid Kluszczynski');
        assert.equal(await f.page.$('.article-quick-answer'),null);
        assert.equal(await f.page.$('.article-on-page'),null);
        assert.equal(await f.page.$eval('meta[name="author"]',e=>e.content),'Dawid Kluszczynski');
        await f.page.goBack();await f.page.waitForFunction(()=>location.pathname==='/blog/');
        await f.page.waitForSelector('.blog-resources-link a');
        await f.page.focus('.blog-resources-link a');await f.page.keyboard.press('Enter');
        await f.page.waitForFunction(()=>location.pathname==='/resources/');
        await f.page.waitForFunction(()=>document.querySelector('.resources-library'));
        assert.equal(await f.page.$('a[href="/resources/meraki-october-2026-security-update/"]'),null);
        await f.page.click('.nav-burger');await f.page.waitForFunction(()=>document.querySelector('.nav-drawer'));
        await f.page.click('.nav-drawer a[href="/blog/"]');await f.page.waitForFunction(()=>location.pathname==='/blog/'&&!document.querySelector('.nav-drawer'));
        noErrors(f);return {};
      }finally{await f.close();}
    });
    await test('Client route navigation, lazy loader, history and scroll reset',async()=>{
      const f=await fixture('/',{consent:'declined',theme:'dark'});
      try {
        await hydrated(f);await f.page.evaluate(()=>scrollTo({top:500,behavior:'instant'}));
        for(const route of ['/helm-core/','/resources/','/contact/']) {
          await f.page.evaluate(route=>document.querySelector(`a[href="${route}"]`).click(),route);
          await f.page.waitForFunction(route=>location.pathname===route,{},route);await sleep(200);
          await f.page.waitForFunction(()=>scrollY===0);assert.ok(await f.page.$('h1'));
        }
        await f.page.goBack();await f.page.waitForFunction(()=>location.pathname==='/resources/');await sleep(200);noErrors(f);return {};
      }finally{await f.close();}
    });
  }
} finally {
  await browser.close();await new Promise(resolve=>server.close(resolve));
  await fs.writeFile(reportPath,JSON.stringify({origin,mode,passed:rows.filter(r=>r.passed).length,failed:failures.length,rows,failures},null,2));
}
console.log(JSON.stringify({mode,passed:rows.filter(r=>r.passed).length,failed:failures.length,reportPath}));
if(failures.length) {for(const failure of failures) console.error(failure.name, failure.error);process.exitCode=1;}
