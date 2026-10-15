export const PREFERENCES_KEY = 'helm-cookie-preferences-v2';
export const LEGACY_AD_KEY = 'helm-remarketing-consent-v1';
export const PREFERENCES_EVENT = 'helm:cookie-preferences';
export const ANALYTICS_SCOPE = 'ga4-hubspot-v1';
export type CookiePreferences = {version: 2; analytics: boolean; advertising: boolean; decided: boolean; analyticsScope?: typeof ANALYTICS_SCOPE};
const empty = (): CookiePreferences => ({version: 2, analytics: false, advertising: false, decided: false});
let volatile: CookiePreferences | null = null;
export function getCookiePreferences(): CookiePreferences {
  if (typeof window === 'undefined') return empty();
  try {
    const raw = localStorage.getItem(PREFERENCES_KEY);
    if (raw) {
      const value = JSON.parse(raw);
      if (value.version === 2 && typeof value.analytics === 'boolean' && typeof value.advertising === 'boolean' && value.decided === true)
        return {version: 2, analytics: value.analytics, advertising: value.advertising, decided: true, ...(value.analyticsScope === ANALYTICS_SCOPE ? {analyticsScope: ANALYTICS_SCOPE} : {})};
    }
    if (volatile) return {...volatile};
    const legacy = localStorage.getItem(LEGACY_AD_KEY);
    // An existing advertising permission never grants analytics permission.
    // Keep earlier opt-outs without prompting visitors to reverse them.
    return {version: 2, analytics: false, advertising: legacy === 'accepted', decided: legacy === 'declined'};
  } catch { return volatile ? {...volatile} : empty(); }
}
export function setCookiePreferences(analytics: boolean, advertising: boolean): void {
  volatile = {version: 2, analytics, advertising, decided: true, analyticsScope: ANALYTICS_SCOPE};
  try {
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(volatile));
    // Existing consent-aware public scan bridge reads this advertising-only key.
    localStorage.setItem(LEGACY_AD_KEY, advertising ? 'accepted' : 'declined');
  } catch { /* Apply the selection in this document even when storage is blocked. */ }
  document.dispatchEvent(new Event(PREFERENCES_EVENT));
}
export function resetVolatilePreferences(): void { volatile = null; }
export function analyticsAllowed(): boolean { return getCookiePreferences().analytics; }
export function needsAnalyticsChoiceRefresh(): boolean {
  const preferences = getCookiePreferences();
  return preferences.analytics && preferences.analyticsScope !== ANALYTICS_SCOPE;
}
export function hubspotAnalyticsAllowed(): boolean {
  const preferences = getCookiePreferences();
  return preferences.analytics && preferences.analyticsScope === ANALYTICS_SCOPE;
}
