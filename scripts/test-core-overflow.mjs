// Full-page regression: measure text fragments as well as boxes. A clipped
// wrapper can conceal words even when document.scrollWidth looks correct.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';

const {default: puppeteer} = await import(process.env.HELM_PUPPETEER_MODULE || 'puppeteer-core');
const dist = path.resolve(process.env.HELM_CORE_DIST || 'dist');
const output = process.env.HELM_TEST_REPORT || 'core-overflow-report.json';
const mime = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.woff2':'font/woff2','.webp':'image/webp','.svg':'image/svg+xml'};
const server = http.createServer(async (req, res) => {
  try {
    assert.equal(req.method, 'GET');
    const url = new URL(req.url, 'http://localhost');
    assert.ok(!url.pathname.startsWith('/api/'));
    let file = path.resolve(dist, '.' + decodeURIComponent(url.pathname));
    assert.ok(file.startsWith(dist + path.sep));
    if ((await fs.stat(file)).isDirectory()) file = path.join(file, 'index.html');
    res.writeHead(200, {'Content-Type':mime[path.extname(file)] || 'application/octet-stream'});
    res.end(await fs.readFile(file));
  } catch { res.writeHead(404); res.end('Not found'); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await puppeteer.launch({headless:true, pipe:true, executablePath:process.env.HELM_CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const rows = [];

function measure() {
  const viewport = document.documentElement.clientWidth;
  const name = e => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + (typeof e.className === 'string' ? '.' + e.className.trim().split(/\s+/).join('.') : '');
  const hidden = e => !e.getClientRects().length || getComputedStyle(e).visibility === 'hidden' || e.closest('[aria-hidden="true"],svg,.sr-only') || Boolean(e.closest('.core-report-table thead') && getComputedStyle(e.closest('thead')).position === 'absolute' && e.closest('thead').clientWidth <= 2);
  const clipped = [], outside = [];
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || !node.textContent.trim() || hidden(parent) || ['STYLE','SCRIPT','NOSCRIPT'].includes(parent.tagName)) continue;
    const range = document.createRange();
    range.selectNodeContents(node);
    for (const rect of range.getClientRects()) {
      if (!rect.width || !rect.height) continue;
      const detail = {text:node.textContent.trim().slice(0,100), parent:name(parent), left:rect.left, right:rect.right};
      if (rect.left < -.75 || rect.right > viewport + .75) outside.push(detail);
      for (let ancestor = parent; ancestor && ancestor !== document.body; ancestor = ancestor.parentElement) {
        const style = getComputedStyle(ancestor), box = ancestor.getBoundingClientRect();
        const clipX = ancestor.clientWidth > 2 && ['hidden','clip'].includes(style.overflowX) && (rect.left < box.left - .75 || rect.right > box.right + .75);
        const clipY = ancestor.clientHeight > 2 && ['hidden','clip'].includes(style.overflowY) && (rect.top < box.top - .75 || rect.bottom > box.bottom + .75);
        if (clipX || clipY) { clipped.push({...detail, wrapper:name(ancestor)}); break; }
      }
    }
  }
  const images = [...document.querySelectorAll('main img')].filter(e => !e.closest('[aria-hidden="true"],.hero-backdrop')).map(e => ({src:e.getAttribute('src'), width:e.getBoundingClientRect().width, naturalWidth:e.naturalWidth}));
  return {viewport, innerWidth, visualWidth:visualViewport?.width, documentWidth:document.documentElement.scrollWidth, outside, clipped, images, fonts:document.fonts.status, reportRows:document.querySelectorAll('.core-report-table tbody tr').length};
}
function check(metrics) {
  assert.equal(metrics.documentWidth, metrics.viewport, 'document overflows');
  assert.deepEqual(metrics.outside, [], 'text extends outside the layout viewport');
  assert.deepEqual(metrics.clipped, [], 'text clipped by a hidden wrapper');
  assert.equal(metrics.reportRows, 6);
}
const sizes = [[320,568],[375,667],[390,844],[393,852],[414,896],[430,932],[568,320],[667,375],[744,340],[844,390],[852,393],[932,430],[768,1024],[1024,768],[1440,900]];
const jobs = sizes.flatMap(([width,height]) => ['light','dark'].flatMap(theme => [1,2].map(scale => ({width,height,theme,scale,consent:'off',javascript:true,fonts:true}))));
for (const theme of ['light','dark']) {
  for (const [width,height] of [[390,844],[844,390]]) jobs.push({width,height,theme,scale:1,consent:'fresh',javascript:true,fonts:true,interactive:true});
  for (const scale of [1,2]) jobs.push({width:320,height:568,theme,scale,consent:'off',javascript:true,fonts:false});
  for (const [width,height] of [[320,568],[844,390]]) jobs.push({width,height,theme,scale:1,consent:'off',javascript:false,fonts:true});
}
try {
  for (const job of jobs) {
    const context = await browser.createBrowserContext(), page = await context.newPage(), row = {...job};
    try {
      await page.setViewport({width:job.width,height:job.height,isMobile:job.width<1000,hasTouch:job.width<1000,deviceScaleFactor:1});
      await page.setJavaScriptEnabled(job.javascript);
      await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'},{name:'prefers-color-scheme',value:job.theme}]);
      await page.evaluateOnNewDocument(job => {
        localStorage.setItem('helm-theme',job.theme);
        if (job.consent === 'off') localStorage.setItem('helm-cookie-preferences-v2',JSON.stringify({version:2,decided:true,analytics:false,advertising:false}));
      }, job);
      await page.setRequestInterception(true);
      page.on('request', req => req.url().startsWith(origin) && req.method() === 'GET' && !new URL(req.url()).pathname.startsWith('/api/') && (job.fonts || !req.url().includes('.woff')) ? req.continue() : req.abort());
      assert.equal((await page.goto(origin+'/helm-core/',{waitUntil:'networkidle0'})).status(),200);
      if (job.javascript) await page.evaluate(() => document.fonts.ready);
      if (job.scale === 2) await page.evaluate(() => {
        const sizes = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,dt,dd,th,td,a,button,label,caption,.hero-note')].map(e => [e,getComputedStyle(e).fontSize]);
        for (const [e,size] of sizes) e.style.fontSize = `${parseFloat(size)*2}px`;
      });
      row.initial = await page.evaluate(measure); check(row.initial);
      if (job.javascript) {
        await page.evaluate(() => document.querySelector('#monthly-report').scrollIntoView());
        row.report = await page.evaluate(measure); check(row.report);
        await page.$eval('.core-report-jump', e => e.click());
        row.followUp = await page.evaluate(measure); check(row.followUp);
      }
      if (job.interactive) {
        await page.click('.nav-burger'); row.menu = await page.evaluate(measure); check(row.menu);
        await page.click('.nav-burger');
        await page.click('.ad-consent button:last-child');
        await page.click('.footer-privacy-button');
        row.preferences = await page.evaluate(measure); check(row.preferences);
        await page.keyboard.press('Escape');
        await page.setViewport({width:job.width,height:Math.max(260,job.height-100),isMobile:true,hasTouch:true,deviceScaleFactor:1});
        row.shorterViewport = await page.evaluate(measure); check(row.shorterViewport);
      }
      if (job.javascript) {
        await page.keyboard.press('Tab');
        row.footerFocus = [];
        for (const control of await page.$$('.footer-theme .theme-choice, .footer-col a')) {
          await control.focus();
          await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
          const focus = await control.evaluate(e => {
            const box = e.getBoundingClientRect(), style = getComputedStyle(e);
            return {label:e.textContent.trim(),top:box.top,bottom:box.bottom,left:box.left,right:box.right,height:box.height,viewport:document.documentElement.clientWidth,windowHeight:innerHeight,nav:document.querySelector('.site-nav').getBoundingClientRect().bottom,outline:style.outlineStyle,outlineWidth:style.outlineWidth};
          });
          assert.ok(focus.left >= 0 && focus.right <= focus.viewport + .75, 'footer focus extends horizontally');
          assert.ok(focus.outline !== 'none' && parseFloat(focus.outlineWidth) >= 2, 'footer focus indicator');
          if (focus.height + 12 <= focus.windowHeight - focus.nav) assert.ok(focus.top >= focus.nav + 5 && focus.bottom <= focus.windowHeight - 4, 'footer focus clearance');
          row.footerFocus.push(focus);
        }
      }
      row.passed = true;
    } catch (error) { row.passed = false; row.error = error.message; }
    finally { rows.push(row); await context.close(); await fs.writeFile(output, JSON.stringify({complete:false,rows},null,2)); }
  }
} finally { await browser.close(); server.closeAllConnections(); await new Promise(resolve => server.close(resolve)); }
const result = {at:new Date().toISOString(),passed:rows.every(r=>r.passed),cases:rows.length,rows,physicalDevice:false,textScale:'computed text sizes doubled; not browser zoom',network:'GET-only loopback; external requests and submissions blocked'};
await fs.writeFile(output,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({...result,rows:rows.filter(r=>!r.passed)}));
process.exit(result.passed ? 0 : 1);
