import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';

export const FORM_ENDPOINT = 'https://formsubmit.co/ajax/hello@helmsecured.com';

/**
 * One-field lead capture: work email in, domain scan out.
 * Submits via FormSubmit's AJAX endpoint (no backend needed).
 * NOTE: the very first submission triggers a one-time activation email to
 * hello@helmsecured.com. Click that link once and all future sends work.
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
  const [state, setState] = useState<'idle' | 'busy' | 'sent' | 'error'>('idle');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === 'busy') return;
    setState('busy');
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {Accept: 'application/json'},
        body: new FormData(e.currentTarget),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState('sent');
    } catch {
      setState('error');
    }
  };

  if (state === 'sent') {
    return (
      <div className="lead-form-done" role="status">
        ✓ Got it. Your report will hit your inbox within 24 hours.
      </div>
    );
  }

  return (
    <form className={`lead-form${compact ? ' compact' : ''}`} onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value={`Lead: free scan request (${source})`} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="page" value={source} />
      <input
        type="email"
        name="email"
        required
        placeholder="Work email"
        autoComplete="email"
        aria-label="Work email"
      />
      <Button
        label={state === 'busy' ? 'Sending…' : cta}
        variant="primary"
        size={compact ? 'md' : 'lg'}
        type="submit"
      />
      {state === 'error' && (
        <div className="lead-form-error" role="alert">
          Something went wrong. Email us directly:{' '}
          <a href="mailto:hello@helmsecured.com?subject=Free%20scan%20request">hello@helmsecured.com</a>
        </div>
      )}
    </form>
  );
}
