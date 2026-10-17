export type BookingPlacement = 'book_call_link' | 'nav_desktop' | 'nav_mobile' | 'footer' | 'cta_band' | 'home_command' | 'home_ai' | 'book_primary';
type State = {active: boolean; generation: number; csrf: string; challenge: string};
export interface BookingClickRecorderOptions {
  enabled: () => boolean; allowed: () => boolean; fetch: typeof fetch; now: () => number; uuid: () => string;
  origin: () => string; path: () => string; cookie: () => string; consentVersion: string;
  choiceId: () => string | null; retry: () => Promise<void>; requestTimeoutMs?: number;
}
const endpoint = 'https://app.helmsecured.com/api/marketing/booking-click';
const origins = new Set(['https://helmsecured.com', 'https://www.helmsecured.com']);
function cookieIds(cookie: string) {
  const output: {fbp?: string; fbc?: string} = {};
  for (const [name, key] of [['_fbp', 'fbp'], ['_fbc', 'fbc']] as const) {
    const values = cookie.split(';').map(v => v.trim()).filter(v => v.startsWith(name + '=')).map(v => v.slice(name.length + 1));
    if (values.length !== 1 || values[0].length > 512) continue;
    const valid = key === 'fbp' ? /^fb\.[0-9]\.[0-9]{13}\.[0-9]+$/ : /^fb\.[0-9]\.[0-9]{13}\.[A-Za-z0-9_-]+$/;
    if (valid.test(values[0])) output[key] = values[0];
  }
  return output;
}
export function createBookingClickRecorder(options: BookingClickRecorderOptions) {
  let state: State | null = null, revision = 0, choiceTail: Promise<void> = Promise.resolve();
  let choiceController: AbortController | null = null;
  const pendingClicks = new Set<() => void>();
  const enabled = () => options.enabled() && origins.has(options.origin());
  const allowed = () => enabled() && options.allowed();
  async function request<T>(url: string, init: RequestInit, parent: AbortSignal, read: (response: Response) => Promise<T>): Promise<T> {
    if (parent.aborted) throw new DOMException('Consent operation canceled', 'AbortError');
    const controller = new AbortController();
    let rejectAbort!: (reason: Error) => void;
    const canceled = new Promise<never>((_, reject) => {rejectAbort = reject;});
    const abort = () => {controller.abort(); rejectAbort(new DOMException('Consent operation canceled', 'AbortError'));};
    const timer = setTimeout(abort, options.requestTimeoutMs ?? 4_000);
    parent.addEventListener('abort', abort, {once: true});
    try {
      // Promise deadline is intentional: even a transport that ignores the
      // signal cannot keep a later withdrawal behind this operation forever.
      return await Promise.race([options.fetch(url, {...init, signal: controller.signal}).then(read), canceled]);
    } finally {clearTimeout(timer); parent.removeEventListener('abort', abort);}
  }
  async function bootstrap(signal: AbortSignal): Promise<State> {
    const s = await request(endpoint + '/consent', {method: 'GET', credentials: 'include', cache: 'no-store', keepalive: true}, signal, async response => {
      if (!response.ok) throw new Error('consent_unavailable'); return await response.json() as State;
    });
    if (typeof s.active !== 'boolean' || !Number.isSafeInteger(s.generation) || typeof s.csrf !== 'string' || !s.csrf || typeof s.challenge !== 'string') throw new Error('invalid_receipt');
    return s;
  }
  function invalidate(): void {
    revision++; state = null; choiceController?.abort();
    for (const cancel of pendingClicks) cancel();
    pendingClicks.clear();
  }
  function choice(accepted: boolean): void {
    invalidate(); const current = revision;
    if (!enabled()) return;
    const controller = new AbortController(); choiceController = controller;
    // Preserve explicit choice order across slow requests. Withdrawal cancels
    // local dispatch immediately, then revokes any earlier in-flight grant.
    choiceTail = choiceTail.catch(() => {}).then(async () => {
      if (controller.signal.aborted || current !== revision) return;
      const session = await bootstrap(controller.signal);
      if (accepted && (current !== revision || !allowed())) return;
      const result = await request(endpoint + '/consent', {method: 'POST', credentials: 'include', keepalive: true,
        headers: {'Content-Type': 'application/json', 'X-Helm-Booking-CSRF': session.csrf},
        body: JSON.stringify({version: 1, action: 'booking_click_advertising_choice', decision: accepted ? 'accepted' : 'declined',
          disclosureVersion: options.consentVersion, challenge: session.challenge})}, controller.signal, async response => {
        if (!response.ok) throw new Error('consent_unavailable'); return await response.json() as {active: boolean; generation: number};
      });
      if (current === revision) state = {...session, ...result};
    }).catch(() => {if (current === revision) state = null;}).finally(() => {if (choiceController === controller) choiceController = null;});
  }
  function click(event: {isTrusted: boolean; defaultPrevented: boolean; button: number; type: string}, placement: BookingPlacement = 'book_call_link'): void {
    if (!allowed() || !event.isTrusted || event.defaultPrevented ||
      !((event.type === 'click' && event.button === 0) || (event.type === 'auxclick' && event.button === 1))) return;
    const sourcePath = options.path();
    if (sourcePath.length > 200 || !/^\/(?:[a-z0-9-]+\/)*$/.test(sourcePath)) return;
    const choiceId = options.choiceId(); if (!choiceId) return;
    const current = revision, eventId = options.uuid(), clickedAt = options.now(), controller = new AbortController();
    let ids: {fbp?: string; fbc?: string} = {}; try {ids = cookieIds(options.cookie());} catch { /* IP/UA matching needs no browser cookie. */ }
    let body = '';
    const cancel = () => {controller.abort(); ids = {}; body = '';}; pendingClicks.add(cancel);
    const stillAllowed = () => !controller.signal.aborted && current === revision && allowed() && options.choiceId() === choiceId;
    void (async () => {
      await choiceTail; if (!stillAllowed()) return;
      const receipt = state ?? await bootstrap(controller.signal); if (!stillAllowed() || !receipt.active || receipt.generation < 1) return;
      state = receipt;
      body = JSON.stringify({version: 1, action: 'booking_click', eventId, clickedAt, sourcePath, placement, consentGeneration: receipt.generation, ...ids}); ids = {};
      for (let attempt = 0; attempt < 2 && stillAllowed() && options.now() - clickedAt <= 60_000; attempt++) {
        try {
          const response = await request(endpoint, {method: 'POST', body, credentials: 'include', keepalive: true,
            headers: {'Content-Type': 'application/json', 'X-Helm-Booking-CSRF': receipt.csrf}}, controller.signal, async response => response);
          if (response.status < 500) return;
        } catch { /* A retry keeps the same event/time; server claims prevent resends. */ }
        if (attempt === 0 && stillAllowed()) await options.retry();
      }
    })().catch(() => { /* Optional measurement cannot affect navigation. */ }).finally(() => {pendingClicks.delete(cancel); cancel();});
  }
  return {choice, click, invalidate};
}
