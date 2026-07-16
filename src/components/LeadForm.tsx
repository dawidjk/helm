import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';

/** Portal origin the auto-scan flow navigates to. Override in .env for local dev. */
export const PORTAL_URL = import.meta.env.VITE_PORTAL_URL ?? 'https://app.helmsecured.com';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * One-field lead capture: work email in, live scan report out.
 * On submit, validates the email client-side, then navigates the top-level
 * window straight to the portal's auto-scan route, which derives the domain
 * from the email and lands the visitor on their scored report, no
 * intermediate scan form. The visitor leaves this page, so there is no
 * success state to manage here, only busy (while navigating) and an inline
 * error for an invalid email.
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
    const url = `${PORTAL_URL}/scan/auto?email=${encodeURIComponent(trimmed)}&src=${encodeURIComponent(source)}`;
    // Full top-level navigation (not a fetch): the visitor leaves this page
    // and lands on their live scan report in the portal.
    window.location.href = url;
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
        label={state === 'busy' ? 'Opening your scan...' : cta}
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
    </form>
  );
}
