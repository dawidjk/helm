import {getCookiePreferences, syncCookiePreferencesFromStorage, PREFERENCES_EVENT} from './cookiePreferences';
import {BOOKING_PREVIEW_ENABLED} from './booking';
import {BOOKING_CLICK_BROWSER_RELEASE_APPROVED, BOOKING_CLICK_CONSENT_VERSION} from './bookingClickConfig';
import {createBookingClickRecorder, type BookingPlacement} from './bookingClickRecorder';
let recorder: ReturnType<typeof createBookingClickRecorder> | null = null;
function current() {
  if (!recorder) recorder = createBookingClickRecorder({
    enabled: () => BOOKING_CLICK_BROWSER_RELEASE_APPROVED && !BOOKING_PREVIEW_ENABLED,
    allowed: () => {const p = getCookiePreferences(); return p.decided && p.advertising && p.bookingAdvertisingScope === BOOKING_CLICK_CONSENT_VERSION;},
    choiceId: () => getCookiePreferences().bookingAdvertisingChoiceId ?? null,
    fetch: (...args) => fetch(...args), now: Date.now, uuid: () => crypto.randomUUID(),
    origin: () => location.origin, path: () => location.pathname, cookie: () => document.cookie,
    consentVersion: BOOKING_CLICK_CONSENT_VERSION, retry: () => new Promise(resolve => setTimeout(resolve, 1_000)),
  });
  return recorder;
}
export function recordBookingAdvertisingChoice(accepted: boolean): void {current().choice(accepted);}
export function trackBookingClick(event: MouseEvent, placement: BookingPlacement = 'book_call_link'): void {current().click(event, placement);}
export function watchBookingClickPreferences(): () => void {
  const invalidate = () => recorder?.invalidate();
  const storage = (event: StorageEvent) => {
    if (syncCookiePreferencesFromStorage(event)) invalidate();
  };
  document.addEventListener(PREFERENCES_EVENT, invalidate); window.addEventListener('storage', storage);
  return () => {document.removeEventListener(PREFERENCES_EVENT, invalidate); window.removeEventListener('storage', storage);};
}
