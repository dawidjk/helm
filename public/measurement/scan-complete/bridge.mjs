export const CONSENT_KEY = 'helm-remarketing-consent-v1';
export const COMMAND = 'helm:scan-completed';

export function validContext(win, doc, config) {
  return win.parent !== win && win.location.origin === config.bridgeOrigin &&
    win.location.pathname === '/measurement/scan-complete/' &&
    !win.location.search && !win.location.hash && doc.referrer === '' &&
    /^\d+$/.test(config.pixelId);
}

export function isCompletionCommand(event, win, config) {
  return event.origin === config.portalOrigin && event.source === win.parent &&
    event.data !== null && typeof event.data === 'object' &&
    !Array.isArray(event.data) && Object.keys(event.data).length === 1 &&
    event.data.type === COMMAND;
}

export function hasConsent(win) {
  try { return win.localStorage.getItem(CONSENT_KEY) === 'accepted'; }
  catch { return false; }
}

/** This isolated document never reads the parent location or report DOM. */
export function installBridge(win, doc, config) {
  if (!validContext(win, doc, config)) return () => {};
  let attempted = false;
  let stopped = false;
  let sdk;
  const ack = type => win.parent.postMessage({type}, config.portalOrigin);
  const revoke = () => {
    stopped = true;
    win.fbq?.('consent', 'revoke');
    for (const name of ['_fbp', '_fbc']) {
      for (const domain of ['', win.location.hostname, `.${win.location.hostname}`]) {
        doc.cookie = `${name}=;Max-Age=0;path=/;SameSite=Lax${domain ? `;domain=${domain}` : ''}`;
      }
    }
  };
  const onStorage = event => {
    if ((event.key === CONSENT_KEY || event.key === null) && !hasConsent(win)) revoke();
  };
  const onMessage = event => {
    if (attempted || !isCompletionCommand(event, win, config)) return;
    attempted = true;
    if (!hasConsent(win) || stopped) { ack('helm:measurement-denied'); return; }
    // Dedicated document; refuse a preexisting tracker rather than sharing it.
    if (win.fbq || win._fbq) { ack('helm:measurement-error'); return; }
    const fbq = (...args) => {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    };
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = '2.0';
    win.fbq = win._fbq = fbq;
    // Reflect the existing accepted choice; never write consent storage.
    fbq('consent', 'grant');
    fbq('set', 'autoConfig', false, config.pixelId);
    fbq('init', config.pixelId);
    sdk = doc.createElement('script');
    sdk.async = true;
    sdk.referrerPolicy = 'no-referrer';
    sdk.src = 'https://connect.facebook.net/en_US/fbevents.js';
    sdk.onload = () => {
      if (stopped || !hasConsent(win)) {
        revoke(); ack('helm:measurement-denied'); return;
      }
      fbq('trackCustom', config.eventName, {});
      ack('helm:measurement-queued'); // Call queued; does not prove Meta receipt.
    };
    sdk.onerror = () => ack('helm:measurement-error');
    doc.head.appendChild(sdk);
  };
  win.addEventListener('message', onMessage);
  win.addEventListener('storage', onStorage);
  return () => {
    revoke(); sdk?.remove();
    win.removeEventListener('message', onMessage);
    win.removeEventListener('storage', onStorage);
  };
}
