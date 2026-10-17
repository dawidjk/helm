import {BOOKING_CLICK_BROWSER_RELEASE_APPROVED, BOOKING_CLICK_CONSENT_VERSION} from './bookingClickConfig';
export const PREFERENCES_KEY = 'helm-cookie-preferences-v2';
export const LEGACY_AD_KEY = 'helm-remarketing-consent-v1';
export const PREFERENCES_EVENT = 'helm:cookie-preferences';
export const ANALYTICS_SCOPE = 'ga4-hubspot-v1';
export type CookiePreferences = {version: 2; analytics: boolean; advertising: boolean; decided: boolean; analyticsScope?: typeof ANALYTICS_SCOPE; bookingAdvertisingScope?: typeof BOOKING_CLICK_CONSENT_VERSION; bookingAdvertisingChoiceId?: string};
const empty = (): CookiePreferences => ({version: 2, analytics: false, advertising: false, decided: false});
let volatile: CookiePreferences | null = null;
let volatileRequired = false;
// undefined means storage could not be read after the failed write. In that
// case only a successful explicit local save can replace the page's decision.
let failedWritePrimaryChoiceId: string | null | undefined;
function storedPreferences(): CookiePreferences | null {
  const raw = localStorage.getItem(PREFERENCES_KEY);
  if (!raw) return null;
  let value: unknown;
  try {value = JSON.parse(raw);} catch {return null;}
  if (!value || typeof value !== 'object' || !('version' in value) || value.version !== 2 ||
    !('analytics' in value) || typeof value.analytics !== 'boolean' || !('advertising' in value) || typeof value.advertising !== 'boolean' ||
    !('decided' in value) || value.decided !== true) return null;
  return {version: 2, analytics: value.analytics, advertising: value.advertising, decided: true,
    ...('analyticsScope' in value && value.analyticsScope === ANALYTICS_SCOPE ? {analyticsScope: ANALYTICS_SCOPE} : {}),
    ...('bookingAdvertisingScope' in value && value.bookingAdvertisingScope === BOOKING_CLICK_CONSENT_VERSION ? {bookingAdvertisingScope: BOOKING_CLICK_CONSENT_VERSION} : {}),
    ...('bookingAdvertisingChoiceId' in value && typeof value.bookingAdvertisingChoiceId === 'string' && /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value.bookingAdvertisingChoiceId) ? {bookingAdvertisingChoiceId: value.bookingAdvertisingChoiceId.toLowerCase()} : {})};
}
export function getCookiePreferences(): CookiePreferences {
  if (typeof window === 'undefined') return empty();
  try {
    const stored = storedPreferences();
    if (volatile && volatileRequired) {
      // Read actual primary storage, never a storage-event payload or the
      // compatibility key. Also check on reads so missed events cannot conceal
      // a subsequent explicit primary choice with a fresh valid identity.
      if (failedWritePrimaryChoiceId === undefined || !stored?.bookingAdvertisingChoiceId || stored.bookingAdvertisingChoiceId === failedWritePrimaryChoiceId) return {...volatile};
      volatile = null; volatileRequired = false; failedWritePrimaryChoiceId = undefined;
    }
    if (stored) return stored;
    if (volatile) return {...volatile};
    const legacy = localStorage.getItem(LEGACY_AD_KEY);
    // An existing advertising permission never grants analytics permission.
    // Keep earlier opt-outs without prompting visitors to reverse them.
    return {version: 2, analytics: false, advertising: legacy === 'accepted', decided: legacy === 'declined'};
  } catch { return volatile ? {...volatile} : empty(); }
}
export function setCookiePreferences(analytics: boolean, advertising: boolean, bookingDisclosureVersion?: typeof BOOKING_CLICK_CONSENT_VERSION): void {
  let bookingAdvertisingChoiceId: string | undefined;
  if (bookingDisclosureVersion === BOOKING_CLICK_CONSENT_VERSION) {
    try {bookingAdvertisingChoiceId = crypto.randomUUID();} catch { /* No fresh choice identity means click measurement stays off. */ }
  }
  volatile = {version: 2, analytics, advertising, decided: true, analyticsScope: ANALYTICS_SCOPE,
    ...(advertising && bookingAdvertisingChoiceId ? {bookingAdvertisingScope: BOOKING_CLICK_CONSENT_VERSION} : {}),
    ...(bookingAdvertisingChoiceId ? {bookingAdvertisingChoiceId} : {})};
  try {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(volatile));
    volatileRequired = false; failedWritePrimaryChoiceId = undefined;
  } catch {
    volatileRequired = true;
    // Freeze the primary identity remaining after the failed write. Legacy,
    // clear, stale and unrelated events cannot erase the newer local choice.
    try {failedWritePrimaryChoiceId = storedPreferences()?.bookingAdvertisingChoiceId ?? null;} catch {failedWritePrimaryChoiceId = undefined;}
    delete volatile.bookingAdvertisingScope; delete volatile.bookingAdvertisingChoiceId;
  }
  // A compatibility-write failure does not undo a successful primary save.
  // Existing consent-aware public scan bridge reads this advertising-only key.
  try {localStorage.setItem(LEGACY_AD_KEY, advertising ? 'accepted' : 'declined');} catch { /* Current page uses the primary decision above. */ }
  document.dispatchEvent(new Event(PREFERENCES_EVENT));
}
export function syncCookiePreferencesFromStorage(event: Pick<StorageEvent, 'key'>): boolean {
  if (event.key !== PREFERENCES_KEY && event.key !== LEGACY_AD_KEY && event.key !== null) return false;
  // Both listeners use the same policy. getCookiePreferences alone validates
  // whether primary storage contains a subsequent choice; an event grants none.
  if (!volatileRequired) volatile = null;
  return true;
}
export function analyticsAllowed(): boolean { return getCookiePreferences().analytics; }
export function needsAnalyticsChoiceRefresh(): boolean {
  const preferences = getCookiePreferences();
  return preferences.analytics && preferences.analyticsScope !== ANALYTICS_SCOPE;
}
export function hubspotAnalyticsAllowed(): boolean {
  const preferences = getCookiePreferences();
  return preferences.analytics && preferences.analyticsScope === ANALYTICS_SCOPE;
}
export function needsBookingAdvertisingChoiceRefresh(): boolean {
  const preferences = getCookiePreferences();
  return BOOKING_CLICK_BROWSER_RELEASE_APPROVED && preferences.advertising &&
    (preferences.bookingAdvertisingScope !== BOOKING_CLICK_CONSENT_VERSION || !preferences.bookingAdvertisingChoiceId);
}
