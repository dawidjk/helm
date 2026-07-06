import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';

/**
 * One-field lead capture: work email in, domain scan out.
 * Posts to FormSubmit (no backend needed). First submission triggers a
 * one-time activation email to hello@helmsecured.com — click it once.
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
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="lead-form-done" role="status">
        ✓ Got it — your report will hit your inbox within 24 hours.
      </div>
    );
  }

  return (
    <form
      className={`lead-form${compact ? ' compact' : ''}`}
      action="https://formsubmit.co/hello@helmsecured.com"
      method="POST"
      target="_blank"
      onSubmit={() => setSent(true)}
    >
      <input type="hidden" name="_subject" value={`Lead — free scan request (${source})`} />
      <input type="hidden" name="_captcha" value="false" />
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
      <Button label={cta} variant="primary" size={compact ? 'md' : 'lg'} type="submit" />
    </form>
  );
}
