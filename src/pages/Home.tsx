import {Link} from 'react-router-dom';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import HeroBackdrop from '../components/HeroBackdrop';
import LeadForm from '../components/LeadForm';
import PanelVisual from '../components/PanelVisual';
import ProductMotif, {type MotifKind} from '../components/ProductMotif';

const products: {motif: MotifKind; kicker: string; title: string; body: string; price: string}[] = [
  {
    motif: 'mail',
    kicker: 'Helm Mail',
    title: 'Email fraud, stopped cold.',
    body: 'Managed Microsoft 365 email filtering, review, and a real escalation path for suspicious messages. Helm configures the platform and explains what matters.',
    price: 'From $15 per user / month',
  },
  {
    motif: 'aware',
    kicker: 'Helm Aware',
    title: 'Make the scam fail at the process.',
    body: 'Shadow-AI review, acceptable-use policy, live training, and a payment-verification protocol built for voice cloning and synthetic video.',
    price: 'Fixed-fee workshop from $2,500',
  },
  {
    motif: 'ready',
    kicker: 'Helm Ready',
    title: 'Pass the questionnaire. Win the contract.',
    body: 'Cyber-insurance readiness, HIPAA, and CMMC gap assessments: fixed fee, plain English, done in weeks. When your insurer or a prime contractor asks the 12 hard questions, you have the answers.',
    price: 'Fixed-fee projects from $2,500',
  },
  {
    motif: 'watch',
    kicker: 'Helm Watch',
    title: '24/7 endpoint monitoring.',
    body: 'Huntress-backed managed EDR for Windows and Mac endpoints, with human-triaged alerts, active containment, and plain-English follow-up from Helm.',
    price: 'From $15 per endpoint / month',
  },
];

const laneLinks = [
  {
    to: '/manufacturing',
    kicker: 'Manufacturing & Defense',
    title: 'CMMC without the panic',
    note: 'Self-assessment still required',
  },
  {
    to: '/professional-services',
    kicker: 'Law · CPA · Medical',
    title: 'Client trust is the product',
    note: 'Wire fraud · HIPAA · insurance',
  },
  {
    to: '/contractors',
    kicker: 'Contractors & Trades',
    title: 'Stop the fake-invoice loss',
    note: 'BEC · GC requirements',
  },
];

export default function Home() {
  return (
    <>
      <Meta
        title="Helm: Email Security & AI Scam Defense for Small Business"
        desc="Enterprise-grade email security, AI scam defense, and compliance readiness for small businesses, plain English, published pricing, backed by 24/7 security operations. Free email security scan with instant results."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'HelmSecure LLC',
          alternateName: 'Helm',
          url: 'https://helmsecured.com',
          email: 'hello@helmsecured.com',
          address: {'@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US'},
          description: 'Email security, AI scam defense, and compliance readiness for small businesses.',
        }}
      />
      <header className="hero">
        <HeroBackdrop kind="cyber" />
        <div className="wrap">
          <div className="eyebrow reveal">Security · Compliance · Peace of mind</div>
          <h1 className="reveal d1">Take the helm of your security.</h1>
          <p className="sub reveal d2">
            Enterprise-grade protection, sized and priced for real businesses:
            law firms, manufacturers, medical offices, and the trades. No
            jargon, no bloat, no 40-page reports you'll never read.
          </p>
          <div className="hero-ctas reveal d3">
            <LeadForm source="home hero" cta="Get my free scan" compact />
          </div>
          <div className="hero-note reveal d3">
            Free automated email-security scan · instant plain-English report · no meeting
          </div>
        </div>
        <ScrollCue />
      </header>

      <Band id="products" variant="raised">
        <div className="band-head">
          <h2 className="observe">Four services. One steady hand.</h2>
          <p className="observe d1">
            Recurring protection where it belongs, fixed-fee projects where
            the work has a finish line, and plain English throughout.
          </p>
        </div>
        <div className="product-grid four">
          {products.map((p, i) => (
            <div key={p.kicker} className={`product-tile observe d${i + 1}`}>
              <ProductMotif kind={p.motif} />
              <div className="kicker">{p.kicker}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <div className="price">{p.price}</div>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="split">
          <div>
            <h3 className="observe">Built for the questions you're actually being asked.</h3>
            <p className="observe d1">
              Your cyber insurer, your biggest customer, and your bank are all
              asking the same thing: prove you're protected. We make the
              answer yes.
            </p>
            <ul className="check-list">
              <li className="observe d2">Cyber-insurance questionnaires answered and remediated</li>
              <li className="observe d3">Wire-fraud and payment-verification protocols that hold up</li>
              <li className="observe d1">CMMC / NIST 800-171 gap assessments against all 110 controls</li>
              <li className="observe d2">HIPAA-ready controls for medical and dental practices</li>
            </ul>
          </div>
          <PanelVisual />
        </div>
      </Band>

      <Band variant="raised">
        <div className="band-head observe">
          <h2>The numbers behind the urgency.</h2>
        </div>
        <div className="stats">
          <div className="stat observe">
            <div className="num">$2.9B+</div>
            <div className="lbl">lost to business email compromise in a single year; most victims are small businesses</div>
          </div>
          <div className="stat observe d1">
            <div className="num">72 hrs</div>
            <div className="lbl">to report a cyber incident under DFARS 252.204-7012, a requirement the CMMC suspension did not touch</div>
          </div>
          <div className="stat observe d2">
            <div className="num">24/7</div>
            <div className="lbl">Huntress SOC monitoring behind Helm Watch, without staffing your own night shift</div>
          </div>
        </div>
      </Band>

      <Band>
        <div className="band-head">
          <h2 className="observe">Your industry, your language.</h2>
          <p className="observe d1">Same protection underneath. A pitch that speaks to your world.</p>
        </div>
        <div className="lane-strip">
          {laneLinks.map((l, i) => (
            <Link key={l.to} to={l.to} className={`lane-row observe d${(i % 3) + 1}`}>
              <div>
                <div className="kicker">{l.kicker}</div>
                <div className="lane-title">{l.title}</div>
              </div>
              <div className="lane-side">
                <span className="lane-note">{l.note}</span>
                <span className="lane-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </Band>

      <CtaBand
        title="Find out where you stand. Free."
        sub="We run an automated scan of your email domain and show you a plain-English report of exactly what a scammer sees, in about a minute, no meeting required."
        source="home cta band"
      />
    </>
  );
}
