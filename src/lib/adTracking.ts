import type {ConversionEvent} from './measurement';

const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID?.trim() ?? '';
const CONSENT_KEY = 'helm-remarketing-consent-v1';

type ConsentChoice = 'accepted' | 'declined';
type MetaPixelFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq?: MetaPixelFunction;
    _fbq?: MetaPixelFunction;
  }
}

let initialized = false;
let lastPagePath = '';

export function isRemarketingConfigured(): boolean {
  return META_PIXEL_ID.length > 0;
}

export function getRemarketingConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    return stored === 'accepted' || stored === 'declined' ? stored : null;
  } catch {
    return null;
  }
}

export function setRemarketingConsent(choice: ConsentChoice): void {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // The choice still applies for the current page if storage is unavailable.
  }
}

function metaPixel(): MetaPixelFunction {
  if (window.fbq) return window.fbq;

  const fbq = ((...args: unknown[]) => {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }
    fbq.queue?.push(args);
  }) as MetaPixelFunction;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = '2.0';
  window.fbq = fbq;
  window._fbq = fbq;
  return fbq;
}

function ensureMetaPixel(): boolean {
  if (
    !isRemarketingConfigured() ||
    getRemarketingConsent() !== 'accepted' ||
    typeof document === 'undefined'
  ) {
    return false;
  }
  if (initialized) {
    window.fbq?.('consent', 'grant');
    return true;
  }

  const fbq = metaPixel();
  if (!document.getElementById('helm-meta-pixel')) {
    const script = document.createElement('script');
    script.id = 'helm-meta-pixel';
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }
  fbq('consent', 'grant');
  fbq('init', META_PIXEL_ID);
  initialized = true;
  return true;
}

export function trackMetaPageView(path: string): void {
  if (!ensureMetaPixel() || path === lastPagePath) return;
  lastPagePath = path;
  window.fbq?.('track', 'PageView');
}

export function trackMetaConversion(event: ConversionEvent): void {
  if (!ensureMetaPixel()) return;

  switch (event) {
    case 'scan_started':
      window.fbq?.('trackCustom', 'ScanStarted');
      break;
    case 'findings_call_selected':
      window.fbq?.('track', 'Schedule');
      break;
    case 'contact_submitted':
      window.fbq?.('track', 'Contact');
      break;
  }
}

function expireCookie(name: string, domain?: string): void {
  const domainPart = domain ? `;domain=${domain}` : '';
  document.cookie = `${name}=;Max-Age=0;path=/${domainPart};SameSite=Lax`;
}

export function stopMetaTracking(): void {
  lastPagePath = '';
  if (typeof document === 'undefined') return;
  window.fbq?.('consent', 'revoke');
  for (const name of ['_fbp', '_fbc']) {
    expireCookie(name);
    expireCookie(name, window.location.hostname);
    expireCookie(name, `.${window.location.hostname}`);
  }
}

export function openPrivacyChoices(): void {
  if (typeof document !== 'undefined') {
    document.dispatchEvent(new Event('helm:privacy-choices'));
  }
}
