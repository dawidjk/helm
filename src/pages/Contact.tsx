import HeroBackdrop from '../components/HeroBackdrop';
import {useEffect, useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Band, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {getAttribution, trackConversion} from '../lib/measurement';

// FormSubmit endpoint for this general contact form. LeadForm (the one-field
// scan capture form) no longer uses FormSubmit: it navigates straight to the
// portal's auto-scan route instead.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/hello@helmsecured.com';

const interests = [
  'Email security (Helm Mail)',
  'AI scam defense (Helm Aware)',
  'Compliance: CMMC / HIPAA / cyber insurance (Helm Ready)',
  'Not sure yet, tell me what I need',
];

export default function Contact() {
  const [state, setState] = useState<'idle' | 'busy' | 'sent' | 'error'>('idle');
  const [intent, setIntent] = useState<string | null>(null);
  const sent = state === 'sent';

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
    setState('busy');
    try {
      const body = new FormData(e.currentTarget);
      const attribution = getAttribution(intent ? undefined : 'contact page');
      body.set('journey_id', attribution.journeyId);
      body.set('source', attribution.source ?? '');
      body.set('utm_source', attribution.utmSource ?? '');
      body.set('utm_medium', attribution.utmMedium ?? '');
      body.set('utm_campaign', attribution.utmCampaign ?? '');
      body.set('utm_content', attribution.utmContent ?? '');
      body.set('utm_term', attribution.utmTerm ?? '');
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {Accept: 'application/json'},
        body,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      trackConversion('contact_submitted', intent ? undefined : 'contact page');
      setState('sent');
    } catch {
      setState('error');
    }
  };

  return (
    <>
      <Meta
        title="Contact Helm: Talk to a Founder"
        desc="Contact Helm about email security, AI scam defense, or compliance readiness. Tell us about your business and get a direct response from a founder."
        path="/contact"
      />
      <header className="hero lane">
        <HeroBackdrop kind="rain" />
        <div className="wrap">
          <h1 className="reveal" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
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
        {sent ? (
          <div className="contact-done reveal" role="status">
            <h3>✓ Message received.</h3>
            <p>A founder will reply during business hours from hello@helmsecured.com.</p>
          </div>
        ) : (
          <form className="contact-form observe in" onSubmit={onSubmit}>
            <input type="hidden" name="_subject" value="Lead: full contact form" />
            <input type="hidden" name="_template" value="table" />

            <div className="cf-row">
              <label>
                Name
                <input type="text" name="name" required autoComplete="name" placeholder="Jane Rivera" />
              </label>
              <label>
                Company
                <input type="text" name="company" required autoComplete="organization" placeholder="Rivera Machining Co." />
              </label>
            </div>

            <div className="cf-row">
              <label>
                Work email
                <input type="email" name="email" required autoComplete="email" placeholder="jane@company.com" />
              </label>
              <label>
                Phone <span className="cf-opt">(optional)</span>
                <input type="tel" name="phone" autoComplete="tel" placeholder="(555) 555-5555" />
              </label>
            </div>

            <label>
              What do you need help with?
              <select name="interest" required defaultValue="">
                <option value="" disabled>
                  Choose one…
                </option>
                {interests.map((o) => (
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
                placeholder="Team size, deadlines, what your insurer or customer is asking for…"
              />
            </label>

            <div className="cf-actions">
              <Button
                label={state === 'busy' ? 'Sending…' : 'Send message'}
                variant="primary"
                size="lg"
                type="submit"
              />
              <span className="cf-note">A founder reviews every message.</span>
            </div>
            {state === 'error' && (
              <div className="lead-form-error" role="alert">
                Something went wrong. Email us directly:{' '}
                <a href="mailto:hello@helmsecured.com">hello@helmsecured.com</a>
              </div>
            )}
          </form>
        )}
      </Band>
    </>
  );
}
