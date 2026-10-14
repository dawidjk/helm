/** Public settings only. Populate after the owner and booking form are verified. */
export type VerifiedBookingSettings = {
  provider: 'google-appointments';
  publicUrl: string;
  verifiedAt: string;
  durationMinutes: number;
  timeZone: 'America/New_York';
  companySizeRequired: boolean;
  discussionOptional: boolean;
};

// Owner-supplied public schedule, checked anonymously on 2026-10-14.
// Current provider form has first/last name and email only. Do not claim the
// proposed qualification questions are configured until they are verified.
export const verifiedBookingSettings: VerifiedBookingSettings | null = {
  provider: 'google-appointments',
  publicUrl: 'https://calendar.app.google/RFsRMyZcxgechAbj7',
  verifiedAt: '2026-10-14T22:45:08Z',
  durationMinutes: 30,
  timeZone: 'America/New_York',
  companySizeRequired: false,
  discussionOptional: false,
};

export function verifiedBookingUrl(settings: VerifiedBookingSettings | null): string | null {
  if (!settings || !settings.verifiedAt || settings.durationMinutes <= 0 ||
      settings.timeZone !== 'America/New_York') return null;
  try {
    const url = new URL(settings.publicUrl);
    const publicSchedule = (url.hostname === 'calendar.google.com' &&
      /^\/(?:calendar\/(?:u\/\d+\/)?)?appointments\/schedules\/[a-zA-Z0-9_-]+\/?$/.test(url.pathname)) ||
      (url.hostname === 'calendar.app.google' && /^\/[a-zA-Z0-9_-]+\/?$/.test(url.pathname));
    if (settings.provider !== 'google-appointments' || !publicSchedule ||
        url.protocol !== 'https:' || url.username || url.password || url.port ||
        url.search || url.hash) return null;
    return url.href;
  } catch {
    return null;
  }
}

export const BOOKING_PATH = '/book/';
export const BOOKING_PREVIEW_PATH = '/booking-preview/calendar/';
export const BOOKING_PREVIEW_ENABLED = import.meta.env.DEV && import.meta.env.VITE_BOOKING_PREVIEW === '1';
export const PUBLIC_BOOKING_URL = verifiedBookingUrl(verifiedBookingSettings);
export const BOOKING_ENABLED = Boolean(PUBLIC_BOOKING_URL) || BOOKING_PREVIEW_ENABLED;

// No prefill, report token, domain, email, discussion or attribution parameters.
export const BOOKING_DESTINATION = BOOKING_PREVIEW_ENABLED ? BOOKING_PREVIEW_PATH : PUBLIC_BOOKING_URL;
