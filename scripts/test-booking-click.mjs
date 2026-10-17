// Local mocks only. No browser SDK, portal, Meta, Calendar or CRM calls.
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import ts from 'typescript';
const code = await fs.readFile('src/lib/bookingClickRecorder.ts', 'utf8');
const compiled = ts.transpileModule(code, {compilerOptions: {target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS}}).outputText;
const sandbox = {exports: {}, Response, Set, JSON, Number, Promise, AbortController, DOMException, setTimeout, clearTimeout}; vm.runInNewContext(compiled, sandbox);
const {createBookingClickRecorder} = sandbox.exports;
const rows = [];
const pause = () => new Promise(resolve => setImmediate(resolve));
const drain = async () => {for (let i = 0; i < 12; i++) await pause();};
const event = {isTrusted: true, defaultPrevented: false, type: 'click', button: 0, preventDefault() {throw new Error('Navigation was blocked');}};
const version = 'website-booking-click-meta-v1';
function fixture(overrides = {}) {
  const calls = [], f = {enabled: true, allowed: true, active: true, time: 1800000000000, path: '/pricing/', sequence: 0};
  const options = {
    enabled: () => f.enabled, allowed: () => f.allowed, choiceId: () => 'synthetic-choice-1', now: () => f.time,
    uuid: () => `00000000-0000-4000-8000-${String(++f.sequence).padStart(12, '0')}`,
    origin: () => 'https://helmsecured.com', path: () => f.path,
    cookie: () => '_fbp=fb.1.1800000000000.12345; _fbc=fb.1.1800000000000.synthetic_click; email=person@example.invalid',
    consentVersion: version, retry: async () => {f.time += 1000;},
    fetch: async (url, init) => {
      calls.push({url, init});
      return new Response(JSON.stringify(url.endsWith('/consent') ? {active: f.active, generation: 1, csrf: 'synthetic-csrf', challenge: 'synthetic-challenge'} : {state: 'sent'}), {status: url.endsWith('/consent') ? 200 : 202});
    }, ...overrides,
  };
  return {...f, f, calls, options, recorder: createBookingClickRecorder(options), posts: () => calls.filter(x => !x.url.endsWith('/consent'))};
}
async function check(name, fn) {try {await fn(); rows.push({name, passed: true});} catch (e) {rows.push({name, passed: false, error: e.stack});}}
await check('constructor and page-load create no consent request or event', async () => {const x = fixture(); await drain(); assert.equal(x.calls.length, 0);});
await check('denied, stale-scope, analytics-only and disabled skip without reading identifiers', async () => {
  for (const key of ['enabled', 'allowed']) {const x = fixture({cookie: () => {throw new Error('Must not read');}}); x.f[key] = false; x.recorder.click(event); await drain(); assert.equal(x.calls.length, 0);}
});
await check('each real activation gets an independent event ID and frozen time', async () => {
  const x = fixture(); assert.equal(x.recorder.click(event), undefined); x.f.time += 1000; x.recorder.click(event); await drain();
  const bodies = x.posts().map(c => JSON.parse(c.init.body)); assert.equal(bodies.length, 2); assert.notEqual(bodies[0].eventId, bodies[1].eventId);
  assert.equal(bodies[0].clickedAt, 1800000000000); assert.equal(bodies[1].clickedAt, 1800000001000);
});
await check('missing active server receipt never becomes a grant or click event', async () => {
  const x = fixture(); x.f.active = false; x.recorder.click(event); await drain(); assert.equal(x.posts().length, 0); assert.ok(x.calls.every(c => c.init.method === 'GET'));
});
await check('synthetic, canceled, right-click, pointerdown and duplicate keydown are excluded', async () => {
  const x = fixture();
  for (const changed of [{isTrusted: false}, {defaultPrevented: true}, {button: 2}, {type: 'pointerdown'}, {type: 'keydown'}]) x.recorder.click({...event, ...changed});
  await drain(); assert.equal(x.calls.length, 0);
});
await check('trusted middle auxclick and keyboard-generated click count once each', async () => {
  const x = fixture(); x.recorder.click({...event, type: 'auxclick', button: 1}); x.recorder.click(event); await drain(); assert.equal(x.posts().length, 2);
});
await check('retry uses byte-identical payload, actual original time and same ID', async () => {
  const x = fixture(); let attempt = 0;
  const fetch = x.options.fetch;
  x.options.fetch = async (url, init) => {if (!url.endsWith('/consent') && ++attempt === 1) {x.calls.push({url, init}); return new Response('{}', {status: 503});} return fetch(url, init);};
  const recorder = createBookingClickRecorder(x.options); recorder.click(event); await drain();
  assert.equal(x.posts().length, 2); assert.equal(x.posts()[0].init.body, x.posts()[1].init.body); assert.equal(JSON.parse(x.posts()[1].init.body).clickedAt, 1800000000000);
});
await check('429 and consent failure are not retried', async () => {
  for (const status of [400, 403, 409, 429]) {const x = fixture(); const fetch = x.options.fetch;
    x.options.fetch = async (url, init) => url.endsWith('/consent') ? fetch(url, init) : (x.calls.push({url, init}), new Response('{}', {status}));
    createBookingClickRecorder(x.options).click(event); await drain(); assert.equal(x.posts().length, 1);}
});
await check('withdrawal during pending bootstrap cancels the click', async () => {
  const x = fixture(); let release;
  const fetch = x.options.fetch;
  x.options.fetch = async (url, init) => {await new Promise(resolve => {release = resolve;}); return fetch(url, init);};
  const recorder = createBookingClickRecorder(x.options); recorder.click(event); await drain(); x.f.allowed = false; release(); await drain(); assert.equal(x.posts().length, 0);
});
await check('withdrawal before retry prevents a second click request', async () => {
  const x = fixture(); const fetch = x.options.fetch;
  x.options.fetch = async (url, init) => {if (url.endsWith('/consent')) return fetch(url, init); x.calls.push({url, init}); x.f.allowed = false; return new Response('{}', {status: 503});};
  createBookingClickRecorder(x.options).click(event); await drain(); assert.equal(x.posts().length, 1);
});
await check('exact client allowlist excludes user fields, raw URLs, query/hash and referrer', async () => {
  const x = fixture(); x.recorder.click(event, 'cta_band'); await drain(); const c = x.posts()[0], body = JSON.parse(c.init.body);
  assert.deepEqual(Object.keys(body).sort(), ['action','clickedAt','consentGeneration','eventId','fbc','fbp','placement','sourcePath','version']);
  assert.equal(body.sourcePath, '/pricing/'); assert.equal(body.placement, 'cta_band'); assert.equal(c.init.keepalive, true); assert.equal(c.init.credentials, 'include');
  assert.ok(!c.init.body.includes('person@example.invalid')); assert.ok(!c.init.body.includes('https://'));
});
await check('malformed/duplicate Meta cookies are omitted rather than repaired or invented', async () => {
  const x = fixture({cookie: () => '_fbp=invalid; _fbc=fb.1.1800000000000.a; _fbc=fb.1.1800000000000.b'}); x.recorder.click(event); await drain();
  const body = JSON.parse(x.posts()[0].init.body); assert.equal(body.fbp, undefined); assert.equal(body.fbc, undefined);
});
await check('unsafe source paths and nonproduction website origins never dispatch', async () => {
  for (const value of ['/pricing/?email=person@example.invalid', '/pricing/#secret', '/person@example.invalid/', '//foreign.invalid/']) {const x = fixture(); x.f.path = value; x.recorder.click(event); await drain(); assert.equal(x.calls.length, 0);}
  const x = fixture({origin: () => 'https://evil.invalid'}); x.recorder.click(event); await drain(); assert.equal(x.calls.length, 0);
});
await check('explicit grant and decline use separate ordered consent calls; no click is fabricated', async () => {
  const x = fixture(); x.recorder.choice(true); await drain(); x.f.allowed = false; x.recorder.choice(false); await drain();
  const choices = x.calls.filter(c => c.url.endsWith('/consent') && c.init.method === 'POST').map(c => JSON.parse(c.init.body));
  assert.deepEqual(choices.map(c => c.decision), ['accepted','declined']); assert.ok(choices.every(c => c.disclosureVersion === version)); assert.equal(x.posts().length, 0);
});
await check('reviewed release flag is explicit and existing analytics scope is unchanged', async () => {
  assert.match(await fs.readFile('src/lib/bookingClickConfig.ts','utf8'), /BOOKING_CLICK_BROWSER_RELEASE_APPROVED = true/);
  const preferences = await fs.readFile('src/lib/cookiePreferences.ts','utf8'); assert.match(preferences, /ANALYTICS_SCOPE = 'ga4-hubspot-v1'/);
  assert.match(preferences, /bookingDisclosureVersion === BOOKING_CLICK_CONSENT_VERSION/);
});
await fs.writeFile(process.env.HELM_BOOKING_CLICK_REPORT || '../booking-click-measurement-evidence/website-mock-tests.json', JSON.stringify({passed: rows.every(r=>r.passed), cases: rows.length, network: 'mocked only', rows},null,2)+'\n');
for (const r of rows.filter(r=>!r.passed)) console.error(r.name, r.error);
console.log(`${rows.filter(r=>r.passed).length}/${rows.length} booking-click browser mock checks passed`);
if (rows.some(r=>!r.passed)) process.exitCode = 1;
