import {Band, CtaBand} from '../components/Site';
import Meta from '../components/Meta';

const faqs = [
  {
    q: 'We have an IT person. Why do we need Helm?',
    a: 'IT keeps things running; security keeps things from being stolen. They are different disciplines with different tooling. We work alongside your IT person or MSP constantly: they usually become our biggest advocate, because we take the 2 a.m. security worry off their plate.',
  },
  {
    q: 'Are we really a target? We only have 15 employees.',
    a: 'Small businesses are the primary target, not the exception. Criminals automate their targeting, and a 15-person firm with weaker defenses and a real bank account is better economics than a hardened enterprise. Most business email compromise losses come from companies under 100 employees.',
  },
  {
    q: 'What does the free scan actually check?',
    a: 'Your email domain\'s public security posture: whether DMARC prevents criminals from sending as your domain, SPF/DKIM health, lookalike domains registered to impersonate you, and whether employee credentials appear in known breach data. It is automated, external, and touches nothing inside your systems.',
  },
  {
    q: 'Do you do 24/7 monitoring yourselves?',
    a: 'Monitoring behind Helm products runs 24/7 through established security operations partners whose entire business is round-the-clock detection and response. We are transparent about this: it is how a small business gets enterprise-grade coverage without paying for an in-house night shift.',
  },
  {
    q: 'How is pricing structured?',
    a: 'Published on our pricing page, identical for every customer. Monthly subscriptions on auto-pay with no setup or cancellation fees; compliance projects are fixed-fee, scoped in writing before work begins. We do not do custom quotes.',
  },
  {
    q: 'Can you get us CMMC certified?',
    a: 'Formal CMMC certification is performed only by independent C3PAOs. We get you assessment-ready (gap assessment, remediation, documentation) and hand you to a certified assessment partner. Anyone who claims to sell certification directly is misrepresenting the process.',
  },
  {
    q: 'What happens if we get hit while working with you?',
    a: 'You call us and we handle response alongside our 24/7 partners: containment, recovery, and the insurer conversation. The documentation we maintain for you is exactly what makes a cyber-insurance claim succeed.',
  },
  {
    q: 'How fast can we start?',
    a: 'The free scan takes 24 hours. Helm Mail deploys in under two hours on Microsoft 365 or Google Workspace. Compliance projects start within two weeks of scoping.',
  },
];

export default function Faq() {
  return (
    <>
      <Meta
        title="FAQ: Straight Answers | Helm"
        desc="Straight answers about Helm: what the free email security scan checks, how pricing works, CMMC certification facts, 24/7 monitoring, and how fast deployment is."
        path="/faq"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: {'@type': 'Answer', text: f.a},
          })),
        }}
      />
      <header className="hero lane" style={{padding: '96px 0 56px'}}>
        <div className="wrap">
          <div className="eyebrow reveal">FAQ</div>
          <h1 className="reveal d1">Straight answers.</h1>
          <p className="sub reveal d2">
            The questions business owners actually ask us, answered the way
            we'd answer them across a table.
          </p>
        </div>
      </header>

      <Band>
        <div className="faq-list">
          {faqs.map((f) => (
            <div key={f.q} className="faq-item observe">
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </Band>

      <CtaBand
        title="Question not here?"
        sub="Email us or use the contact form: a human replies within one business day."
        source="faq cta"
      />
    </>
  );
}
