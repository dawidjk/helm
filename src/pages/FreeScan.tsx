import {Band, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import LeadForm from '../components/LeadForm';
import PanelVisual from '../components/PanelVisual';
import HeroBackdrop from '../components/HeroBackdrop';

export default function FreeScan() {
  return (
    <>
      <Meta
        title="Free Email Security Scan: Plain-English Report | Helm"
        desc="Free automated scan of public SPF, common DKIM selectors, DMARC, MX, DNSSEC, HTTPS certificate, MTA-STS, TLS-RPT, and limited SMTP signals. No login required."
        path="/free-scan"
      />
      <header className="hero">
        <HeroBackdrop kind="cyber" />
        <div className="wrap">
          <div className="eyebrow reveal">Free · No meeting · Usually about a minute</div>
          <h1 className="reveal d1" style={{maxWidth: '18ch'}}>
            Check the public signals behind email impersonation.
          </h1>
          <p className="sub reveal d2">
            Enter your work email. The scan checks your company's public domain
            configuration and returns a scored, plain-English report, usually
            in about a minute.
          </p>
          <div className="hero-ctas reveal d3">
            <LeadForm source="free-scan page" cta="Run my free scan" compact />
          </div>
          <div className="hero-note reveal d3">No credit card. No required meeting. Your report usually appears in about a minute.</div>
        </div>
        <ScrollCue />
      </header>

      <Band variant="raised">
        <div className="split">
          <div>
            <h3 className="observe">What the report covers</h3>
            <ul className="check-list">
              <li className="observe d1">Does your DMARC policy tell receivers to reject authentication failures?</li>
              <li className="observe d2">What does your SPF record authorize, and is DKIM visible under common selectors?</li>
              <li className="observe d3">Can the scanner reach your website over HTTPS with a current certificate?</li>
              <li className="observe d1">Are MTA-STS and TLS-RPT mail-transport records published?</li>
              <li className="observe d2">Findings grouped by category, with plain-English impact and next steps</li>
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
            <p>Usually in about a minute, written for a business owner, not an IT department.</p>
          </li>
          <li className="observe d2">
            <div className="step-dot">2</div>
            <h3>We explain the gaps</h3>
            <p>If the scan finds at least two visible gaps, we send a short follow-up sequence tied to your report.</p>
          </li>
          <li className="observe d3">
            <div className="step-dot">3</div>
            <h3>You decide what happens next</h3>
            <p>Fix the findings yourself, ask us for help, or unsubscribe from the follow-up at any time.</p>
          </li>
        </ol>
      </Band>
    </>
  );
}
