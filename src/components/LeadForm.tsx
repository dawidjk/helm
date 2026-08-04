import {useId, useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {trackConversion, withAttribution} from '../lib/measurement';
import './LeadForm.css';

/** Portal origin the protected scan flow navigates to. Override in .env for local dev. */
export const PORTAL_URL = import.meta.env.VITE_PORTAL_URL ?? 'https://app.helmsecured.com';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Known personal-mailbox providers. The scan reads the company domain behind
 * the address, so a personal inbox would send the visitor off to scan
 * gmail.com and get a useless report. Only well-known consumer providers are
 * listed; an unrecognized domain is assumed to be a business and passes.
 */
const PERSONAL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'aol.com',
  'icloud.com',
  'me.com',
  'proton.me',
  'protonmail.com',
]);

/**
 * One-field lead capture: work email in, protected scan form next.
 * On submit, validates the email client-side, then navigates the top-level
 * window to the portal's scan entry route. The portal derives and pre-fills
 * the business domain, then requires its Turnstile-protected POST before any
 * scan work begins. The visitor leaves this page, so there is no success state
 * to manage here, only busy (while navigating) and inline messages for an
 * invalid email or a personal mailbox.
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
  const inputId = useId();
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'busy' | 'error' | 'personal'>('idle');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === 'busy') return;

    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setState('error');
      return;
    }

    const domain = trimmed.slice(trimmed.lastIndexOf('@') + 1).toLowerCase();
    if (PERSONAL_DOMAINS.has(domain)) {
      setState('personal');
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
      <label htmlFor={inputId} className="sr-only">Work email</label>
      <input
        id={inputId}
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
        label={state === 'busy' ? 'Opening our secure portal…' : cta}
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
      {state === 'personal' && (
        <div className="lead-form-error" role="alert">
          That looks like a personal inbox. The scan checks your company's
          domain — the part after the @ — so enter your work email to get a
          report about your business.
        </div>
      )}
      <div className="lead-form-disclosure">
        <p className="lead-form-next">
          <strong>What happens next:</strong> Confirm your domain on our secure
          portal. Your report usually follows in about a minute.
        </p>
        <p className="lead-form-consent">
          By requesting the scan, you agree to receive your report and a short
          email follow-up about the findings. Unsubscribe at any time.
        </p>
      </div>
    </form>
  );
}
