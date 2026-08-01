import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {trackConversion, withAttribution} from '../lib/measurement';

/** Portal origin the protected scan flow navigates to. Override in .env for local dev. */
export const PORTAL_URL = import.meta.env.VITE_PORTAL_URL ?? 'https://app.helmsecured.com';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * One-field lead capture: work email in, protected scan form next.
 * On submit, validates the email client-side, then navigates the top-level
 * window to the portal's scan entry route. The portal derives and pre-fills
 * the business domain, then requires its Turnstile-protected POST before any
 * scan work begins. The visitor leaves this page, so there is no success state
 * to manage here, only busy (while navigating) and an inline error for an
 * invalid email.
 */
export default function LeadForm({
  source,
  cta = 'Get my free scan',
  compact = false,
}: {
  source: string;
  cta?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'error'>('idle');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === 'busy') return;

    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setState('error');
      return;
    }

    setState('busy');
    trackConversion('scan_started', source);
    const url = new URL('/scan/auto', PORTAL_URL);
    url.searchParams.set('email', trimmed);
    url.searchParams.set('followup', '1');
    const attributedUrl = withAttribution(url.toString(), source);
    // Full top-level navigation (not a fetch): the visitor leaves this page
    // and lands on the protected scan form in the portal.
    window.location.href = attributedUrl;
  };

  return (
    <form className={`lead-form${compact ? ' compact' : ''}`} onSubmit={onSubmit}>
      <label htmlFor="lead-email" className="sr-only">Work email</label>
      <input
        id="lead-email"
        type="email"
        name="email"
        required
        placeholder="Work email"
        autoComplete="email"
        aria-label="Work email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={state === 'busy'}
      />
      <Button
        label={state === 'busy' ? 'Opening secure scan...' : cta}
        variant="primary"
        size={compact ? 'md' : 'lg'}
        type="submit"
        isLoading={state === 'busy'}
      />
      {state === 'error' && (
        <div className="lead-form-error" role="alert">
          Enter a valid work email address to run your scan.
        </div>
      )}
      <p className="lead-form-consent">
        By requesting the scan, you agree to receive your report and a short
        email follow-up about the findings. Unsubscribe at any time.
      </p>
    </form>
  );
}
