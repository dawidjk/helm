export const CONVERSION_EVENTS = [
  'scan_started',
  'findings_call_selected',
  'contact_submitted',
] as const;

export type ConversionEvent = (typeof CONVERSION_EVENTS)[number];

export interface Attribution {
  journeyId: string;
  source: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmContent: string | null;
  utmTerm: string | null;
  landingPath: string;
  referrerHost: string | null;
}

const JOURNEY_KEY = 'helm-marketing-journey';
const ATTRIBUTION_KEY = 'helm-marketing-attribution';
const MEASUREMENT_URL =
  import.meta.env.VITE_MEASUREMENT_URL ??
  'https://app.helmsecured.com/api/marketing/events';
const MAX_VALUE_LENGTH = 100;

function clean(value: string | null): string | null {
  const trimmed = value?.trim().slice(0, MAX_VALUE_LENGTH);
  return trimmed || null;
}

function journeyId(): string {
  const create = () => {
    if (typeof crypto.randomUUID === 'function') return crypto.randomUUID();
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const hex = [...bytes].map((value) => value.toString(16).padStart(2, '0'));
    return `${hex.slice(0, 4).join('')}-${hex.slice(4, 6).join('')}-${hex.slice(6, 8).join('')}-${hex.slice(8, 10).join('')}-${hex.slice(10).join('')}`;
  };
  try {
    const existing = sessionStorage.getItem(JOURNEY_KEY);
    if (existing) return existing;
    const created = create();
    sessionStorage.setItem(JOURNEY_KEY, created);
    return created;
  } catch {
    return create();
  }
}

function referrerHost(): string | null {
  if (!document.referrer) return null;
  try {
    const host = new URL(document.referrer).hostname.toLowerCase();
    return host === window.location.hostname.toLowerCase() ? null : clean(host);
  } catch {
    return null;
  }
}

/**
 * Return the first campaign attribution seen during this browser-tab journey.
 * Session storage is used only to keep UTM values across Helm pages. There is
 * no advertising identifier, cross-site cookie, fingerprint, or personal data.
 */
export function getAttribution(source?: string): Attribution {
  const params = new URLSearchParams(window.location.search);
  const current = {
    source: clean(source ?? params.get('src')),
    utmSource: clean(params.get('utm_source')),
    utmMedium: clean(params.get('utm_medium')),
    utmCampaign: clean(params.get('utm_campaign')),
    utmContent: clean(params.get('utm_content')),
    utmTerm: clean(params.get('utm_term')),
    landingPath: window.location.pathname.slice(0, 200),
    referrerHost: referrerHost(),
  };

  let stored: Partial<Attribution> = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) ?? '{}') as Partial<Attribution>;
  } catch {
    stored = {};
  }

  const attribution: Attribution = {
    journeyId: journeyId(),
    source: current.source ?? stored.source ?? null,
    utmSource: current.utmSource ?? stored.utmSource ?? null,
    utmMedium: current.utmMedium ?? stored.utmMedium ?? null,
    utmCampaign: current.utmCampaign ?? stored.utmCampaign ?? null,
    utmContent: current.utmContent ?? stored.utmContent ?? null,
    utmTerm: current.utmTerm ?? stored.utmTerm ?? null,
    landingPath: stored.landingPath ?? current.landingPath,
    referrerHost: stored.referrerHost ?? current.referrerHost,
  };

  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // Measurement still works for the current page if storage is unavailable.
  }
  return attribution;
}

/** Add the non-personal journey and campaign fields to an internal Helm URL. */
export function withAttribution(url: string, source?: string): string {
  const attribution = getAttribution(source);
  const target = new URL(url, window.location.origin);
  const fields: Record<string, string | null> = {
    j: attribution.journeyId,
    src: attribution.source,
    utm_source: attribution.utmSource,
    utm_medium: attribution.utmMedium,
    utm_campaign: attribution.utmCampaign,
    utm_content: attribution.utmContent,
    utm_term: attribution.utmTerm,
    lp: attribution.landingPath,
    rh: attribution.referrerHost,
  };
  for (const [key, value] of Object.entries(fields)) {
    if (value) target.searchParams.set(key, value);
  }
  return target.toString();
}

/**
 * Record a conversion without delaying navigation. The payload contains only a
 * random tab-scoped journey ID, page path, and campaign attribution.
 */
export function trackConversion(
  event: ConversionEvent,
  source?: string,
): void {
  const body = JSON.stringify({event, ...getAttribution(source)});
  try {
    if (
      navigator.sendBeacon(
        MEASUREMENT_URL,
        new Blob([body], {type: 'text/plain;charset=UTF-8'}),
      )
    ) {
      return;
    }
  } catch {
    // Fall through to a best-effort fetch.
  }
  void fetch(MEASUREMENT_URL, {
    method: 'POST',
    body,
    headers: {'Content-Type': 'text/plain;charset=UTF-8'},
    keepalive: true,
  }).catch(() => {
    // Measurement must never block the visitor's primary action.
  });
}
