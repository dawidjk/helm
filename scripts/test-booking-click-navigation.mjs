// Headless, localhost-only fixture uses the actual recorder module with a
// fake transport that never finishes the click request. No provider network.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import http from 'node:http';
import ts from 'typescript';
const {default:puppeteer}=await import(process.env.HELM_PUPPETEER_MODULE||'puppeteer-core');
const moduleCode = ts.transpileModule(await fs.readFile('src/lib/bookingClickRecorder.ts','utf8'), {compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ES2022}}).outputText;
let origin;
const server=http.createServer((request,response)=>{
  const pathname=new URL(request.url,origin).pathname;
  if(pathname==='/recorder.js'){response.writeHead(200,{'Content-Type':'text/javascript'});response.end(moduleCode);return;}
  if(pathname==='/schedule/'){response.writeHead(200,{'Content-Type':'text/html'});response.end('<!doctype html><title>Local schedule fixture</title>');return;}
  response.writeHead(200,{'Content-Type':'text/html'});response.end(`<!doctype html><title>Booking navigation fixture</title>
  <a id="book" href="${origin}/schedule/" target="_blank" rel="noopener noreferrer" referrerpolicy="no-referrer">Book a call</a>
  <script type="module">import {createBookingClickRecorder} from '/recorder.js';
  window.calls=[];window.prevented=null;window.allowed=true;
  const recorder=createBookingClickRecorder({enabled:()=>true,allowed:()=>window.allowed,choiceId:()=> 'native-fixture-choice-1',now:Date.now,uuid:()=>crypto.randomUUID(),
    origin:()=> 'https://helmsecured.com',path:()=>'/pricing/',cookie:()=>'',consentVersion:'website-booking-click-meta-v1',retry:()=>Promise.resolve(),
    fetch:async(url,init)=>{window.calls.push({url,method:init.method,body:init.body});
      if(url.endsWith('/consent'))return new Response(JSON.stringify({active:true,generation:1,csrf:'synthetic',challenge:'synthetic'}),{status:200});
      return new Promise(()=>{});}});
  for(const type of ['click','auxclick'])document.querySelector('#book').addEventListener(type,event=>{recorder.click(event);window.prevented=event.defaultPrevented;});
  window.fixtureReady=true;</script>`);
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));origin=`http://127.0.0.1:${server.address().port}`;
const browser=await puppeteer.launch({headless:true,executablePath:process.env.HELM_CHROME||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args:['--disable-background-networking','--host-resolver-rules=MAP * ~NOTFOUND, EXCLUDE 127.0.0.1']});
const rows=[];
try{
 for(const mode of ['primary','middle','keyboard','denied','no-javascript']){
  const context=await browser.createBrowserContext(),page=await context.newPage();
  await page.setRequestInterception(true);page.on('request',r=>new URL(r.url()).origin===origin?r.continue():r.abort());
  if(mode==='no-javascript')await page.setJavaScriptEnabled(false);
  await page.goto(origin+'/',{waitUntil:'networkidle0'});
  if(mode!=='no-javascript')await page.waitForFunction(()=>window.fixtureReady);
  if(mode==='denied')await page.evaluate(()=>{window.allowed=false;});
  const before=await page.$eval('#book',a=>({href:a.href,target:a.target,rel:a.rel,referrerPolicy:a.referrerPolicy}));
  // noopener deliberately removes opener identity; select the new page in
  // this isolated fixture context instead of expecting an opener relationship.
  const popupPromise=browser.waitForTarget(t=>t.browserContext()===context&&t!==page.target()&&t.type()==='page',{timeout:3000});
  if(mode==='keyboard'){await page.focus('#book');await page.keyboard.press('Enter');}
  else await page.click('#book',{button:mode==='middle'?'middle':'left'});
  const target=await popupPromise,popup=await target.page();await popup.waitForFunction(()=>location.pathname==='/schedule/',{timeout:3000});
  assert.equal(popup.url(),before.href);assert.equal(page.url(),origin+'/');assert.equal(before.target,'_blank');
  assert.equal(before.rel,'noopener noreferrer');assert.equal(before.referrerPolicy,'no-referrer');
  if(mode!=='no-javascript'){
    await page.waitForFunction(expected=>window.calls.filter(c=>!c.url.endsWith('/consent')).length===expected,{},mode==='denied'?0:1);
    const state=await page.evaluate(()=>({prevented:window.prevented,calls:window.calls}));assert.equal(state.prevented,false);
    if(mode==='denied')assert.deepEqual(state.calls,[]);
    else {assert.equal(state.calls.length,2);assert.equal(JSON.parse(state.calls[1].body).sourcePath,'/pricing/');}
  }
  rows.push({mode,passed:true,unchangedHref:true,immediateNativeBlank:true,postNeverResolved:!['denied','no-javascript'].includes(mode),externalRequests:0});
  await context.close();
 }
}finally{await browser.close();server.closeAllConnections();server.close();}
await fs.writeFile(process.env.HELM_BOOKING_CLICK_NAV_REPORT||'../booking-click-measurement-evidence/website-navigation-tests.json',JSON.stringify({passed:true,fixture:'actual recorder with localhost schedule and mocked provider transport',rows},null,2)+'\n');
console.log(`Passed ${rows.length} native booking-navigation checks; no external network`);
