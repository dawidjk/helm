import {getCookiePreferences, hubspotAnalyticsAllowed} from './cookiePreferences';
export type TrackingCategory = 'analytics' | 'advertising';
type TrackingHost = TrackingCategory | 'hubspot';
const ids = {analytics: 'G-TQ4HE1LY2F', advertising: import.meta.env.VITE_META_PIXEL_ID?.trim() ?? '', hubspot: '247620820'};
type Host = {element: HTMLIFrameElement; token: string; ready: boolean; queue: Record<string, unknown>[]; lastPath: string};
const hosts = new Map<TrackingHost, Host>();
function allowed(category: TrackingHost): boolean { return category === 'hubspot' ? hubspotAnalyticsAllowed() : getCookiePreferences()[category] && Boolean(ids[category]); }
function send(host: Host, data: Record<string, unknown>): void {
  if (host.ready) host.element.contentWindow?.postMessage({...data, token: host.token}, window.location.origin);
  else host.queue.push(data);
}
function start(category: TrackingHost): Host | null {
  if (!allowed(category)) return null;
  const existing = hosts.get(category); if (existing) return existing;
  const element = document.createElement('iframe');
  element.src = category === 'hubspot' ? '/measurement/hubspot/' : '/measurement/site-tracking/'; element.hidden = true; element.tabIndex = -1;
  element.title = category === 'hubspot' ? 'Optional HubSpot analytics' : category === 'analytics' ? 'Optional analytics' : 'Optional advertising';
  element.dataset.helmTracking = category; element.referrerPolicy = 'no-referrer';
  const host: Host = {element, token: crypto.randomUUID(), ready: false, queue: [], lastPath: ''};
  hosts.set(category, host);
  element.addEventListener('load', () => {
    if (hosts.get(category) !== host || !allowed(category)) return;
    host.ready = true;
    send(host, {type: 'helm:tracking-init', category, id: ids[category], path: window.location.pathname, title: document.title.slice(0, 200)});
    for (const message of host.queue.splice(0)) send(host, message);
  }, {once: true});
  document.body.appendChild(element); return host;
}
function expireCookie(name: string): void {
  for (const domain of ['', ...window.location.hostname.split('.').map((_, i, parts) => i < parts.length - 1 ? `.${parts.slice(i).join('.')}` : '').filter(Boolean)])
    document.cookie = `${name}=;Max-Age=0;path=/;SameSite=Lax${domain ? `;domain=${domain}` : ''}`;
}
export function stopTrackingCategory(category: TrackingCategory): void {
  if (category === 'analytics') stopHost('hubspot');
  stopHost(category);
}
function stopHost(category: TrackingHost): void {
  const host = hosts.get(category); hosts.delete(category);
  // Discard the SDK document and its timers, rather than leaving a revoked SDK alive.
  if (host) {
    const context = host.element.contentWindow as (Window & {helmTrackingActive?: boolean; helmStopHubspot?: () => void}) | null;
    try {if (context) {context.helmStopHubspot?.(); context.helmTrackingActive = false; context.stop();}} catch { /* Disposal still applies if an SDK navigated its context. */ }
    host.element.remove();
  }
  const names = document.cookie.split(';').map(c => c.split('=')[0].trim());
  for (const name of names) if (category === 'hubspot' ? /^(hubspotutk|__hstc|__hssc|__hssrc|__hs_opt_out|__hs_initial_opt_in|__hs_cookie_cat_pref)$/.test(name) : category === 'analytics' ? /^_ga(?:_|$)|^_gid$|^_gat/.test(name) : /^_fb[pc]$/.test(name)) expireCookie(name);
  if (category === 'analytics') {
    try { for (const key of ['helm-marketing-journey', 'helm-marketing-attribution', 'helm-contact-success-v1']) sessionStorage.removeItem(key); } catch { /* Optional storage may be blocked. */ }
  }
}
export function syncTrackingPreferences(): void {
  if (!allowed('hubspot')) stopHost('hubspot');
  for (const category of ['analytics', 'advertising'] as const) {
    if (!allowed(category)) stopTrackingCategory(category);
  }
}
export function trackPage(category: TrackingCategory, path: string): void {
  trackHostPage(category, path);
  if (category === 'analytics') trackHostPage('hubspot', path);
}
function trackHostPage(category: TrackingHost, path: string): void {
  const host = start(category); if (!host || host.lastPath === path) return;
  host.lastPath = path; send(host, {type: 'helm:tracking-event', name: 'page_view', path, title: document.title.slice(0, 200)});
}
export function trackAcceptedContact(category: TrackingCategory, id?: string): void {
  const host = start(category); if (host) send(host, {type: 'helm:tracking-event', name: 'generate_lead', path: '/contact/', ...(id ? {id} : {})});
}
