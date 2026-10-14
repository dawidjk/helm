import type {ConversionEvent} from './measurement';
import {getCookiePreferences, setCookiePreferences} from './cookiePreferences';
import {stopTrackingCategory, trackAcceptedContact, trackPage} from './trackingFrames';
export function isRemarketingConfigured(): boolean { return Boolean(import.meta.env.VITE_META_PIXEL_ID?.trim()); }
export function getRemarketingConsent(): 'accepted' | 'declined' | null {
  const preference = getCookiePreferences();
  return preference.advertising ? 'accepted' : preference.decided ? 'declined' : null;
}
export function setRemarketingConsent(choice: 'accepted' | 'declined'): void {
  setCookiePreferences(getCookiePreferences().analytics, choice === 'accepted');
}
export function trackMetaPageView(path: string): void { trackPage('advertising', path); }
export function trackMetaConversion(event: ConversionEvent): void {
  if (event === 'contact_submitted') trackAcceptedContact('advertising');
}
export function stopMetaTracking(): void { stopTrackingCategory('advertising'); }
export function openPrivacyChoices(): void {
  if (typeof document !== 'undefined') document.dispatchEvent(new Event('helm:privacy-choices'));
}
