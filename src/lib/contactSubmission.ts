const KEY = 'helm-contact-attempt-v1';
let current: {fingerprint: string; id: string; createdAt: number} | null = null;
/** Keep an opaque attempt ID across retries; never persist form entries. */
export async function contactSubmissionId(payload: Record<string, unknown>): Promise<string> {
  const canonical = Object.fromEntries(Object.entries(payload).filter(([key]) => key !== 'turnstileToken').map(([key, value]) => [key, typeof value === 'string' ? (key === 'email' ? value.trim().toLowerCase() : value.trim()) : value]));
  const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(JSON.stringify(canonical)));
  const fingerprint = [...new Uint8Array(bytes)].map(n => n.toString(16).padStart(2, '0')).join('');
  try { current = JSON.parse(sessionStorage.getItem(KEY) ?? 'null') ?? current; } catch { /* In-memory fallback. */ }
  if (!current || current.fingerprint !== fingerprint || Date.now() - current.createdAt > 24 * 60 * 60 * 1000) {
    current = {fingerprint, id: crypto.randomUUID(), createdAt: Date.now()};
    try { sessionStorage.setItem(KEY, JSON.stringify(current)); } catch { /* In-memory fallback. */ }
  }
  return current.id;
}
const emitted = new Set<string>();
declare global { interface Window { gtag?: (...args: unknown[]) => void; } }
/** Existing Google tag owns consent. Do not load tags, grant consent, send
 * form entries, user IDs, UTM strings, or a URL query in this success event. */
export function trackContactSuccess(id: string): void {
  if (emitted.has(id)) return;
  let previous: string | null = null;
  try { previous = sessionStorage.getItem('helm-contact-success-v1'); } catch { /* In-memory fallback. */ }
  if (previous === id) return;
  emitted.add(id);
  try { sessionStorage.setItem('helm-contact-success-v1', id); } catch { /* In-memory fallback. */ }
  try {
    window.gtag?.('event', 'generate_lead', {
      lead_source: 'website_contact', form_id: 'helm_contact',
      page_location: window.location.origin + '/contact/',
      page_referrer: '', event_id: id,
    });
  } catch { /* Analytics must never turn an accepted inquiry into an error. */ }
}
