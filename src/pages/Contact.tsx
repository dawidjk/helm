import {useState} from 'react';
import {Button} from '@astryxdesign/core/Button';
import {Band} from '../components/Site';
import Meta from '../components/Meta';

const interests = [
  'Email security (Helm Mail)',
  'AI scam defense (Helm Aware)',
  'Compliance — CMMC / HIPAA / cyber insurance (Helm Ready)',
  'Not sure yet — tell me what I need',
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <Meta
        title="Contact Helm — A Human Replies in One Business Day"
        desc="Contact Helm about email security, AI scam defense, or compliance readiness. Tell us about your business and get a straight answer within one business day."
        path="/contact"
      />
      <header className="hero lane" style={{padding: '88px 0 56px'}}>
        <div className="wrap">
          <h1 className="reveal" style={{fontSize: 'clamp(36px, 5vw, 56px)'}}>
            Talk to a human.
          </h1>
          <p className="sub reveal d1">
            Tell us a little about your business and we'll come back within one
            business day with a straight answer — not a sales sequence.
          </p>
        </div>
      </header>

      <Band>
        {sent ? (
          <div className="contact-done" role="status">
            <h3>✓ Message received.</h3>
            <p>We'll reply within one business day from hello@helmsecured.com.</p>
          </div>
        ) : (
          <form
            className="contact-form observe in"
            action="https://formsubmit.co/hello@helmsecured.com"
            method="POST"
            target="_blank"
            onSubmit={() => setSent(true)}
          >
            <input type="hidden" name="_subject" value="Lead — full contact form" />
            <input type="hidden" name="_captcha" value="false" />
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
              <Button label="Send message" variant="primary" size="lg" type="submit" />
              <span className="cf-note">No newsletter. No drip campaign. Just a reply.</span>
            </div>
          </form>
        )}
      </Band>
    </>
  );
}
