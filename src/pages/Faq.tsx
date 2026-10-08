import BrandHeroBackdrop from '../components/BrandHeroBackdrop';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {renderParagraph, paragraphText, type Paragraph} from '../lib/richText';

const faqs: {q: string; a: Paragraph}[] = [
  {
    q: 'We have an IT person. Why do we need Helm?',
    a: "Your IT person or MSP keeps systems running, including help desk, administration, patching, procurement, and routine remediation. Helm owns the security program defined in your agreement. Before work begins, we write down who is responsible for what.",
  },
  {
    q: 'Are we really a target? We only have 15 employees.',
    a: "Public domain checks and impersonation attempts can be automated, so an attacker does not need to spend weeks researching your company. A smaller team may also have fewer people available to notice or respond. The free scan shows the same public domain configuration that anyone on the internet can query.",
  },
  {
    q: 'What does the free scan actually check?',
    a: "The scan checks your domain's public security configuration: SPF, DKIM, DMARC, mail routing, DNSSEC, mail-transport policies, website certificate status, and a limited unauthenticated mail-server check. These automated checks run from outside your systems and touch nothing inside them. The scan does not search breach datasets or lookalike-domain registrations.",
  },
  {
    q: 'Do you do 24/7 monitoring yourselves?',
    a: "Specialist vendor security operations teams provide 24/7 monitoring and containment within the covered service scope. Helm manages deployment, coordination and reporting. Your agreement sets out which systems are covered and when Helm provides follow-up.",
  },
  {
    q: 'How is pricing structured?',
    a: {
      text: 'Helm Core is $125 per covered user per month with a $2,500 monthly account minimum. Choose a 12-month Core term at the current rate or a 36-month Core term that locks the starting price for all three years. Helm Command is $8,000 to $15,000 per month after a fit and complexity review, with a 36-month initial term and a 6% adjustment on each service anniversary. Work outside the written scope is priced separately. See the pricing page for details.',
      links: [{phrase: 'pricing page', to: '/pricing'}],
    },
  },
  {
    q: 'Can you get us CMMC certified?',
    a: {
      text: 'Helm Command can document your current state, identify gaps, and help organize remediation. Helm does not certify your business or promise an assessment outcome. The required assessment route depends on the level and contract: Level 2 may use self-assessment or an authorized C3PAO, while Level 3 uses the government assessment route.',
      links: [{phrase: 'Helm Command', to: '/helm-command'}],
    },
  },
  {
    q: 'What happens if we get hit while working with you?',
    a: 'We follow the escalation and response responsibilities in your signed agreement. Specialist security operations partners provide continuous monitoring and containment within the covered Core or Command scope. Helm provides follow-up during the operating window in your agreement. Broader recovery, legal, insurance, and forensic work is not automatically included.',
  },
  {
    q: 'How fast can we start?',
    a: {
      text: "The free scan usually returns in about a minute. Core and Command start after we confirm the covered users, systems, provider responsibilities, deployment path, and rollback plan. Your service order sets out the start date.",
      links: [
        {phrase: 'free scan', to: '/free-scan'},
        {phrase: 'Core and Command', to: '/pricing'},
      ],
    },
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
            acceptedAnswer: {'@type': 'Answer', text: paragraphText(f.a)},
          })),
        }}
      />
      <header className="hero lane brand-hero">
        <BrandHeroBackdrop />
        <div className="wrap">
          <h1 className="reveal d1">Straight answers.</h1>
          <p className="sub reveal d2">
            Direct answers about what Helm does, what it costs, and where the
            service stops.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <h2 className="sr-only">Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div key={f.q} className={`faq-item observe d${Math.min(i + 1, 5)}`}>
              <h3>{f.q}</h3>
              <p>{renderParagraph(f.a)}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <p>For a question about your business, <a href="/contact/">contact Helm</a>.</p>
      </Band>

      <CtaBand
        title="Question not here?"
        sub="Use the contact link above for a question; a Helm executive responds during business hours. The optional scan checks public domain configuration."
        source="faq cta"
      />
    </>
  );
}
