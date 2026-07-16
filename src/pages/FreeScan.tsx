import {Band, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import LeadForm from '../components/LeadForm';
import PanelVisual from '../components/PanelVisual';
import HeroBackdrop from '../components/HeroBackdrop';

export default function FreeScan() {
  return (
    <>
      <Meta
        title="Free Email Security Scan: Instant Report | Helm"
        desc="Free automated scan of your email domain: SPF, DKIM, DMARC, and HTTPS posture. Plain-English, scored report in about a minute. No meeting, no sales call."
        path="/free-scan"
      />
      <header className="hero">
        <HeroBackdrop kind="cyber" />
        <div className="wrap">
          <div className="eyebrow reveal">Free · No meeting · Instant results</div>
          <h1 className="reveal d1" style={{maxWidth: '18ch'}}>
            See your business the way a scammer does.
          </h1>
          <p className="sub reveal d2">
            Enter your work email. The scan runs immediately against your
            company's domain, and you see your scored report right away: SPF,
            DKIM, DMARC, and HTTPS posture, in plain English.
          </p>
          <div className="hero-ctas reveal d3">
            <LeadForm source="free-scan page" cta="Run my free scan" compact />
          </div>
          <div className="hero-note reveal d3">No credit card. No sales sequence. Your report appears immediately.</div>
        </div>
        <ScrollCue />
      </header>

      <Band variant="raised">
        <div className="split">
          <div>
            <h3 className="observe">What the report covers</h3>
            <ul className="check-list">
              <li className="observe d1">Can criminals send email as your exact domain? (DMARC enforcement)</li>
              <li className="observe d2">Are your legitimate senders authorized? (SPF / DKIM health)</li>
              <li className="observe d3">Is your site's HTTPS certificate and web security posture solid?</li>
              <li className="observe d1">Plain-English read on MTA-STS and TLS-RPT mail transport protections</li>
              <li className="observe d2">The three fixes that matter most, in priority order</li>
            </ul>
          </div>
          <PanelVisual domain="yourcompany.com" />
        </div>
      </Band>

      <Band>
        <div className="band-head observe">
          <h2>What happens after</h2>
        </div>
        <ol className="steps-flow">
          <li className="observe d1">
            <div className="step-dot">1</div>
            <h3>Your report appears</h3>
            <p>In about a minute, written for a business owner, not an IT department.</p>
          </li>
          <li className="observe d2">
            <div className="step-dot">2</div>
            <h3>You decide</h3>
            <p>Fix the findings yourself with the report's guidance, or ask us to. No obligation either way.</p>
          </li>
          <li className="observe d3">
            <div className="step-dot">3</div>
            <h3>That's it</h3>
            <p>No drip campaign, no weekly follow-up calls. One report, one optional conversation.</p>
          </li>
        </ol>
      </Band>
    </>
  );
}
