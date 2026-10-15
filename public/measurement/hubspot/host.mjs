// Loaded only after Helm's current Analytics choice. No parent DOM or forms
// are read by this adapter; only an authenticated path/title message is used.
import publishedPages from './published-pages.mjs';
window.helmTrackingActive = true;
const originalFetch = window.fetch.bind(window);
window.fetch = (...args) => window.helmTrackingActive ? originalFetch(...args) : Promise.reject(new DOMException('Optional measurement stopped', 'AbortError'));
const originalBeacon = navigator.sendBeacon.bind(navigator);
navigator.sendBeacon = (...args) => window.helmTrackingActive ? originalBeacon(...args) : false;
const originalSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function (...args) { if (window.helmTrackingActive) return originalSend.apply(this, args); this.abort(); };

window._hsq = [];
window._hsp = [];
window.disableHubSpotCookieBanner = true;
// HubSpot advertising stays denied even if the separate Helm Meta choice is
// granted. This frame cannot start a second managed advertising Pixel.
window._hsp.push(['setHubSpotConsent', {analytics: false, advertisement: false, functionality: false}]);
let initialized = false, token = '', path = '', sdkPath = '', ready = false, timer;
const validPath = value => typeof value === 'string' && Object.hasOwn(publishedPages, value);
const updatePath = next => {
  history.replaceState(null, '', next);
  const title = document.createElement('textarea');
  title.innerHTML = publishedPages[next];
  document.title = title.value;
};
window.helmStopHubspot = () => {
  window.helmTrackingActive = false;
  clearInterval(timer);
  // A second, stricter policy intersects the original policy. It also blocks
  // Image-based/unload requests, which cookie deletion/fetch wrappers cannot.
  const deny = document.createElement('meta');
  deny.httpEquiv = 'Content-Security-Policy';
  deny.content = "default-src 'none'; script-src 'none'; connect-src 'none'; img-src 'none'; frame-src 'none'; form-action 'none'";
  document.head.appendChild(deny);
  try { window._hsq.push(['doNotTrack']); } catch { /* Teardown still applies. */ }
  try {
    window._hsp.push(['setHubSpotConsent', {analytics: false, advertisement: false, functionality: false}]);
    window._hsp.push(['revokeCookieConsent']);
  } catch { /* The caller removes the entire SDK document next. */ }
};

window.addEventListener('message', event => {
  if (!window.helmTrackingActive || parent === window || event.source !== parent || event.origin !== location.origin || !event.data || typeof event.data !== 'object') return;
  const m = event.data;
  if (!initialized && m.type === 'helm:tracking-init' && m.category === 'hubspot' && m.id === '247620820' && typeof m.token === 'string' && /^[0-9a-f-]{36}$/i.test(m.token) && validPath(m.path)) {
    initialized = true; token = m.token; path = m.path; sdkPath = path;
    updatePath(path);
    window._hsp.push(['setHubSpotConsent', {analytics: true, advertisement: false, functionality: false}]);
    window._hsq.push(['doNotTrack', {track: true}]);
    window._hsq.push(['setPath', path]);
    const script = document.createElement('script');
    script.id = 'hs-script-loader'; script.async = true; script.defer = true;
    script.referrerPolicy = 'no-referrer'; script.src = 'https://js-na2.hs-scripts.com/247620820.js';
    document.head.appendChild(script);
    let attempts = 0;
    timer = setInterval(() => {
      if (!window.helmTrackingActive || ++attempts > 100) { clearInterval(timer); return; }
      if (window._hsq.push !== Array.prototype.push) { ready = true; sdkPath = path; clearInterval(timer); }
    }, 100);
    return;
  }
  if (!initialized || m.token !== token || m.type !== 'helm:tracking-event' || m.name !== 'page_view' || !validPath(m.path) || m.path === path) return;
  path = m.path; updatePath(path);
  ready = ready || window._hsq.push !== Array.prototype.push;
  window._hsq.push(['setPath', path]);
  // The SDK owns its first view. Only later SPA changes add a manual view.
  if (ready && path !== sdkPath) window._hsq.push(['trackPageView']);
  sdkPath = path;
});
