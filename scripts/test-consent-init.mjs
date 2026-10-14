// Built-site consent regression. Script requests are held while the SSG page
// paints; all non-local traffic is intercepted and no form is submitted.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
const {default:puppeteer}=await import(process.env.HELM_PUPPETEER_MODULE||'puppeteer-core');

const dist=path.resolve(process.env.HELM_TEST_DIST||'dist');
const reportPath=process.env.HELM_TEST_REPORT||'consent-init-test-report.json';
const key='helm-cookie-preferences-v2', legacyKey='helm-remarketing-consent-v1';
const exact="We use cookies to make our site work and to analyze how it's used. You can choose to accept all cookies or manage your preferences below.";
const prefs=(analytics,advertising)=>JSON.stringify({version:2,analytics,advertising,decided:true});
const cases=[
  {name:'first-visit',banner:true,analytics:false,advertising:false},
  {name:'returning-accepted',raw:prefs(true,true),banner:false,analytics:true,advertising:true},
  {name:'returning-rejected',raw:prefs(false,false),banner:false,analytics:false,advertising:false},
  {name:'returning-analytics-only',raw:prefs(true,false),banner:false,analytics:true,advertising:false},
  {name:'returning-advertising-only',raw:prefs(false,true),banner:false,analytics:false,advertising:true},
  {name:'invalid-json',raw:'{invalid',banner:true,analytics:false,advertising:false},
  {name:'invalid-types',raw:'{"version":2,"analytics":"true","advertising":true,"decided":true}',banner:true,analytics:false,advertising:false},
  {name:'invalid-null',raw:'null',banner:true,analytics:false,advertising:false},
  {name:'storage-unavailable',blocked:true,banner:true,analytics:false,advertising:false},
  {name:'legacy-rejected',legacy:'declined',banner:false,analytics:false,advertising:false},
  {name:'legacy-accepted-advertising-only',legacy:'accepted',banner:true,analytics:false,advertising:true},
  ...[[320,700],[697,374],[348,186],[1391,1000]].map(([width,height])=>({name:`first-visit-layout-${width}`,width,height,banner:true,analytics:false,advertising:false}))
].filter(c=>!process.env.HELM_CONSENT_CASE||c.name===process.env.HELM_CONSENT_CASE);
assert.ok(cases.length);
const mime={'.html':'text/html','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.woff2':'font/woff2'};
const server=http.createServer(async(req,res)=>{
  try{
    assert.equal(req.method,'GET');const url=new URL(req.url,'http://local');
    const file=path.resolve(dist,'.'+decodeURIComponent(url.pathname)+(url.pathname.endsWith('/')?'index.html':''));
    assert.ok(file.startsWith(dist+path.sep));const body=await fs.readFile(file);
    res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(body);
  }catch{res.writeHead(404);res.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const origin=process.env.HELM_TEST_ORIGIN||`http://127.0.0.1:${server.address().port}`;
const browser=await puppeteer.launch({headless:true,executablePath:process.env.HELM_CHROME||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const rows=[],failures=[];
try{
  for(const test of cases){
    const context=await browser.createBrowserContext(),page=await context.newPage();
    const errors=[],warnings=[],requests=[];let release;
    const gate=new Promise(resolve=>release=resolve);
    await page.setViewport({width:test.width||390,height:test.height||823});
    await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
    await page.evaluateOnNewDocument(({raw,legacy,blocked,key,legacyKey})=>{
      if(raw!==undefined)localStorage.setItem(key,raw);if(legacy)localStorage.setItem(legacyKey,legacy);
      window.__consentQA={reads:[],samples:[]};
      const get=Storage.prototype.getItem;
      Storage.prototype.getItem=function(name){
        if(name===key||name===legacyKey)window.__consentQA.reads.push(performance.now());
        if(blocked)throw new Error('Synthetic unavailable storage');return get.call(this,name);
      };
      if(blocked)Storage.prototype.setItem=function(){throw new Error('Synthetic unavailable storage')};
      const sample=()=>{
        const banner=document.querySelector('.ad-consent');
        window.__consentQA.samples.push({time:performance.now(),banner:Boolean(banner&&banner.checkVisibility()),panel:Boolean(document.querySelector('.cookie-dialog')?.open),reads:window.__consentQA.reads.length});
        requestAnimationFrame(sample);
      };requestAnimationFrame(sample);
    },{...test,key,legacyKey});
    page.on('pageerror',e=>errors.push(e.message));
    page.on('console',m=>{if(['error','warning'].includes(m.type())&&/hydrat|React error|server.render|did not match|nesting/i.test(m.text()))warnings.push(m.text())});
    await page.setRequestInterception(true);
    page.on('request',async r=>{
      try{
        const url=new URL(r.url());
        if(url.origin===origin&&r.method()==='GET'){
          if(r.resourceType()==='script')await gate;
          return await r.continue();
        }
        requests.push({url:r.url(),method:r.method(),resourceType:r.resourceType()});
        if(['www.googletagmanager.com','connect.facebook.net'].includes(url.hostname))return await r.respond({status:200,contentType:'text/javascript',body:'/* Synthetic SDK; no collection or cookies. */'});
        return await r.respond({status:204});
      }catch{/* Closing an isolated context can cancel a gated request. */}
    });
    const navigation=page.goto(origin+'/',{waitUntil:'domcontentloaded'}).catch(e=>{if(!e.message.includes('detached'))throw e});
    try{
      await page.waitForSelector('h1');await page.evaluate(()=>document.fonts.ready);
      await new Promise(resolve=>setTimeout(resolve,150));
      const before=await page.evaluate(()=>({banner:Boolean(document.querySelector('.ad-consent')),panel:Boolean(document.querySelector('.cookie-dialog')?.open),tracking:document.querySelectorAll('iframe[data-helm-tracking]').length,reads:window.__consentQA.reads.length,samples:window.__consentQA.samples}));
      assert.equal(before.banner,false,'Consent banner must be absent before hydration');assert.equal(before.panel,false);assert.equal(before.tracking,0);assert.equal(before.reads,0);assert.ok(before.samples.length>0);assert.ok(before.samples.every(s=>!s.banner&&!s.panel));assert.deepEqual(requests,[]);
      release();await navigation;
      await page.waitForFunction(()=>Object.keys(document.querySelector('.footer-privacy-button')||{}).some(k=>k.startsWith('__reactProps'))&&window.__consentQA.reads.length>0);
      await new Promise(resolve=>setTimeout(resolve,150));
      const after=await page.evaluate(()=>({banner:Boolean(document.querySelector('.ad-consent')),panel:Boolean(document.querySelector('.cookie-dialog')?.open),tracking:[...document.querySelectorAll('iframe[data-helm-tracking]')].map(e=>e.dataset.helmTracking).sort(),samples:window.__consentQA.samples,overflow:document.documentElement.scrollWidth>innerWidth}));
      assert.equal(after.banner,test.banner);assert.equal(after.panel,false);assert.equal(after.overflow,false);
      const expected=['analytics','advertising'].filter(category=>test[category]).sort();assert.deepEqual(after.tracking,expected);
      assert.ok(after.samples.filter(s=>s.reads===0).every(s=>!s.banner&&!s.panel),'No flash before preference resolution');
      if(!test.banner)assert.ok(after.samples.every(s=>!s.banner&&!s.panel),'Returning decided visitors must never see a banner');
      if(test.banner)assert.equal(await page.$eval('.ad-consent p',e=>e.textContent),exact);
      if(expected.length)await page.waitForFunction(categories=>categories.every(category=>{
        const frame=document.querySelector(`iframe[data-helm-tracking="${category}"]`);
        return Boolean(frame?.contentDocument?.querySelector(category==='analytics'?'script[src*="googletagmanager.com"]':'script[src*="connect.facebook.net"]'));
      }),{timeout:15000},expected);
      assert.equal(requests.some(r=>/googletagmanager/.test(r.url)),test.analytics);
      assert.equal(requests.some(r=>/connect.facebook.net/.test(r.url)),test.advertising);
      if(test.banner){
        const buttons=await page.$$('.ad-consent button');
        const manage=await Promise.all(buttons.map(async button=>({button,text:await button.evaluate(e=>e.textContent.trim())})));
        await manage.find(x=>x.text==='Manage preferences').button.focus();
      }else await page.focus('.footer-privacy-button');
      await page.keyboard.press('Enter');await page.waitForFunction(()=>document.querySelector('.cookie-dialog').open);
      const controls=await page.$$eval('.cookie-category input',es=>es.map(e=>({checked:e.checked,disabled:e.disabled})));
      assert.deepEqual(controls,[{checked:true,disabled:true},{checked:test.analytics,disabled:false},{checked:test.advertising,disabled:false}]);
      assert.equal(await page.evaluate(()=>document.activeElement.textContent.trim()),'Close');
      assert.equal(await page.evaluate(()=>document.querySelector('.cookie-dialog').scrollWidth>document.querySelector('.cookie-dialog').clientWidth),false);
      for(let i=0;i<9;i++){await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.querySelector('.cookie-dialog').contains(document.activeElement)),true)}
      await page.keyboard.press('Escape');
      await page.waitForFunction(expected=>!document.querySelector('.cookie-dialog').open&&document.activeElement.textContent.trim()===expected,{},test.banner?'Manage preferences':'Privacy choices');
      if(test.banner){
        const buttons=await page.$$('.ad-consent button');
        const reject=await Promise.all(buttons.map(async button=>({button,text:await button.evaluate(e=>e.textContent.trim())})));
        await reject.find(x=>x.text==='Reject optional').button.focus();await page.keyboard.press('Enter');
        await page.waitForFunction(()=>!document.querySelector('.ad-consent')&&!document.querySelector('iframe[data-helm-tracking]')&&document.activeElement.id==='main-content');
        await page.focus('.footer-privacy-button');await page.keyboard.press('Enter');await page.waitForFunction(()=>document.querySelector('.cookie-dialog').open);
        assert.deepEqual(await page.$$eval('.cookie-category input',es=>es.map(e=>e.checked)),[true,false,false]);
        await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('.cookie-dialog').open&&document.activeElement.classList.contains('footer-privacy-button'));
      }
      if(process.env.HELM_TEST_SCREENSHOTS&&test.name.startsWith('first-visit'))await page.screenshot({path:path.join(process.env.HELM_TEST_SCREENSHOTS,`cookie-flicker-${test.width||390}.png`)});
      assert.deepEqual(errors,[]);assert.deepEqual(warnings,[]);
      // Production can inject a Cloudflare browser-security challenge. It is
      // intercepted too; only that path is allowed beyond SDK GET requests.
      const securityRequests=requests.filter(r=>new URL(r.url).origin===origin&&new URL(r.url).pathname.startsWith('/cdn-cgi/challenge-platform/'));
      assert.ok(requests.every(r=>r.method==='GET'||securityRequests.includes(r)),'No form submissions or unexpected writes');
      rows.push({name:test.name,passed:true,width:test.width||390,height:test.height||823,preHydrationBanner:false,preferenceResolvedBeforeBanner:true,returningBannerNeverFlashes:!test.banner,expectedCategories:expected,reopenKeyboardPassed:true,rejectAndWithdrawalPassed:test.banner,securityChallengeRequestsIntercepted:securityRequests.length,overflow:false,errors,warnings});
    }catch(error){failures.push({name:test.name,error:error.stack,requests:requests.map(r=>({method:r.method,resourceType:r.resourceType,origin:new URL(r.url).origin,path:new URL(r.url).pathname.startsWith('/cdn-cgi/challenge-platform/')?'/cdn-cgi/challenge-platform/…':new URL(r.url).pathname}))});rows.push({name:test.name,passed:false,error:error.message});}
    finally{release();await context.close();await navigation.catch(()=>{});}
  }
  if(!process.env.HELM_CONSENT_CASE){
    const page=await browser.newPage();await page.setJavaScriptEnabled(false);await page.setRequestInterception(true);page.on('request',r=>new URL(r.url()).origin===origin?r.continue():r.abort());await page.goto(origin+'/');assert.equal(await page.$('.ad-consent'),null);assert.equal(await page.$('iframe[data-helm-tracking]'),null);assert.ok((await page.$eval('main',e=>e.textContent)).length>100);await page.close();
  }
}finally{await browser.close();server.closeAllConnections();server.close();}
await fs.writeFile(reportPath,JSON.stringify({passed:failures.length===0,cases:rows.length,origin,preHydrationScriptsHeld:true,allThirdPartyRequestsIntercepted:true,noFormsSubmitted:true,nativeZoom:'Headless viewport checks only',rows,failures},null,2));
console.log(`${failures.length?'FAILED':'Passed'} ${rows.length} consent initialization cases.`);
if(failures.length){console.error(JSON.stringify(failures,null,2));process.exitCode=1;}
