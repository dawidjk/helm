import HeroBackdrop from '../components/HeroBackdrop';
import {useEffect, useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Band, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {getAttribution, trackConversion} from '../lib/measurement';
import Turnstile from '../components/Turnstile';
import {contactInterests} from './products';
import {businessPhone, serviceAreaText} from '../lib/business';

const CONTACT_ENDPOINT =
  import.meta.env.VITE_CONTACT_URL ??
  'https://app.helmsecured.com/api/contact';

export default function Contact() {
  const [state, setState] = useState<'idle' | 'busy' | 'sent' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [intent, setIntent] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const [turnstileTimedOut, setTurnstileTimedOut] = useState(false);
  const sent = state === 'sent';

  // The Send button stays disabled until Turnstile hands over a token. While
  // that is pending, say so; if no token arrives in a reasonable window (slow
  // network, privacy extension blocking the script), surface the email
  // fallback instead of leaving a silently dead button.
  useEffect(() => {
    if (turnstileToken) {
      setTurnstileTimedOut(false);
      return;
    }
    const timer = window.setTimeout(() => setTurnstileTimedOut(true), 15000);
    return () => window.clearTimeout(timer);
  }, [turnstileToken, turnstileResetKey]);

  useEffect(() => {
    const requestedIntent = new URLSearchParams(window.location.search).get('intent');
    setIntent(requestedIntent);
    if (requestedIntent === 'findings-call') {
      trackConversion('findings_call_selected');
    }
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === 'busy') return;
    setErrorMessage('');
    setState('busy');
    try {
      const body = new FormData(e.currentTarget);
      const attribution = getAttribution(intent ? undefined : 'contact page');
      const payload = {
        name: body.get('name'),
        company: body.get('company'),
        email: body.get('email'),
        phone: body.get('phone'),
        interest: body.get('interest'),
        message: body.get('message'),
        turnstileToken,
        journeyId: attribution.journeyId,
        source: attribution.source,
        utmSource: attribution.utmSource,
        utmMedium: attribution.utmMedium,
        utmCampaign: attribution.utmCampaign,
        utmContent: attribution.utmContent,
        utmTerm: attribution.utmTerm,
      };
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const response = (await res.json().catch(() => null)) as
          | {error?: unknown}
          | null;
        throw new Error(
          typeof response?.error === 'string'
            ? response.error
            : 'Something went wrong. Please try again.',
        );
      }
      trackConversion('contact_submitted', intent ? undefined : 'contact page');
      setState('sent');
    } catch (error) {
      // The single-use token may already be spent; require a fresh challenge
      // before the visitor can retry, whether the failure was HTTP or network.
      setTurnstileToken('');
      setTurnstileResetKey((value) => value + 1);
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      );
      setState('error');
    }
  };

  return (
    <>
      <Meta
        title="Contact Helm: Talk to a Founder"
        desc="Contact Helm about email security, AI scam defense, or compliance readiness in Monmouth, Ocean, and Middlesex counties, New Jersey."
        path="/contact"
      />
      <header className="hero lane brand-hero">
        <HeroBackdrop kind="brand-static" />
        <div className="wrap">
          <h1 className="reveal hero-h1-sm">
            Talk to a human.
          </h1>
          <p className="sub reveal d1">
            Tell us a little about your business. A founder will respond during
            business hours with a straight answer.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <div className="contact-public-details observe in" aria-label="Helm contact details">
          <div>
            <span>Call</span>
            <a href={`tel:${businessPhone.e164}`}>{businessPhone.display}</a>
          </div>
          <div>
            <span>Email</span>
            <a href="mailto:hello@helmsecured.com">hello@helmsecured.com</a>
          </div>
          <div>
            <span>Service area</span>
            <strong>{serviceAreaText}</strong>
          </div>
        </div>
        {sent ? (
          <div className="contact-done reveal" role="status">
            <h3>✓ Message received.</h3>
            <p>A founder will reply during business hours from hello@helmsecured.com.</p>
          </div>
        ) : (
          <form className="contact-form observe in" onSubmit={onSubmit}>
            <div className="cf-row">
              <label>
                Name
                <input type="text" name="name" required maxLength={100} autoComplete="name" placeholder="Jane Rivera" />
              </label>
              <label>
                Company
                <input type="text" name="company" required maxLength={150} autoComplete="organization" placeholder="Rivera Machining Co." />
              </label>
            </div>

            <div className="cf-row">
              <label>
                Work email
                <input type="email" name="email" required maxLength={254} autoComplete="email" placeholder="jane@company.com" />
              </label>
              <label>
                Phone <span className="cf-opt">(optional)</span>
                <input type="tel" name="phone" maxLength={50} autoComplete="tel" placeholder="(555) 555-5555" />
              </label>
            </div>

            <label>
              What do you need help with?
              <select name="interest" required defaultValue="">
                <option value="" disabled>
                  Choose one…
                </option>
                {contactInterests.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Anything else we should know? <span className="cf-opt">(optional)</span>
              <textarea
                name="message"
                rows={5}
                maxLength={2000}
                placeholder="Team size, deadlines, what your insurer or customer is asking for…"
              />
            </label>

            <div className="cf-actions">
              <Button
                label={state === 'busy' ? 'Sending…' : 'Send message'}
                variant="primary"
                size="lg"
                type="submit"
                isDisabled={state === 'busy' || !turnstileToken}
              />
              <Turnstile
                action="marketing_contact"
                onToken={setTurnstileToken}
                resetKey={turnstileResetKey}
              />
              <span className="cf-note" role="status" aria-live="polite">
                {turnstileToken || turnstileTimedOut
                  ? 'A founder reviews every message.'
                  : 'Verifying you’re human… Send unlocks in a moment.'}
              </span>
            </div>
            {!turnstileToken && turnstileTimedOut && (
              <div className="lead-form-error" role="alert">
                Verification is taking longer than usual. If no check appeared
                above, a privacy extension or slow connection may be blocking
                it — you can email us directly instead:{' '}
                <a href="mailto:hello@helmsecured.com">hello@helmsecured.com</a>
              </div>
            )}
            {state === 'error' && (
              <div className="lead-form-error" role="alert">
                {errorMessage} Email us directly:{' '}
                <a href="mailto:hello@helmsecured.com">hello@helmsecured.com</a>
              </div>
            )}
          </form>
        )}
      </Band>
    </>
  );
}
