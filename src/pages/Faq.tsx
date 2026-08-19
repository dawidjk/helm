import HeroBackdrop from '../components/HeroBackdrop';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {renderParagraph, paragraphText, type Paragraph} from '../lib/richText';

const faqs: {q: string; a: Paragraph}[] = [
  {
    q: 'We have an IT person. Why do we need Helm?',
    a: 'Your IT person or MSP keeps systems running. Helm focuses on the defined security work in your agreement, such as email filtering, device monitoring, or readiness documentation. We can work alongside an existing provider, with responsibilities written down before work begins.',
  },
  {
    q: 'Are we really a target? We only have 15 employees.',
    a: 'An attacker does not need to research the company for weeks. Public domain checks and impersonation attempts can be automated, and a smaller team may have fewer people available to notice or respond. The free scan shows the same public domain configuration that anyone on the internet can query.',
  },
  {
    q: 'What does the free scan actually check?',
    a: 'Your domain\'s public security posture: SPF, DKIM, DMARC, mail routing, DNSSEC, mail-transport policies, website certificate status, and a limited unauthenticated mail-server check. It does not search breach datasets or lookalike-domain registrations. It is automated, external, and touches nothing inside your systems.',
  },
  {
    q: 'Do you do 24/7 monitoring yourselves?',
    a: 'Monitoring behind Helm products runs 24/7 through established security operations partners whose entire business is round-the-clock detection and response. We are transparent about this: it gives a small or medium-sized business continuous coverage without asking its own staff to run an overnight security operation.',
  },
  {
    q: 'How is pricing structured?',
    a: {
      text: 'Helm Mail is $50 per protected user per month with a $1,000 account minimum, equivalent to 20 users, and a 12-month initial term. It includes managed email-threat protection, phishing reporting and triage, simulations, and awareness learning. Helm Watch is $40 per covered user per month with a $200 account minimum and includes up to two eligible Windows or Mac workstations per covered user. Helm Aware and Helm Ready are fixed-fee projects within published ranges. Work outside the written scope is priced separately.',
      links: [{phrase: 'pricing page', to: '/pricing'}],
    },
  },
  {
    q: 'Can you get us CMMC certified?',
    a: {
      text: 'Formal CMMC certification is performed only by an authorized independent C3PAO when one is required. Helm Ready can document your current state, identify gaps, and help organize remediation. Helm does not certify your business or promise a particular assessment outcome.',
      links: [{phrase: 'gap assessment', to: '/helm-ready'}],
    },
  },
  {
    q: 'What happens if we get hit while working with you?',
    a: 'We follow the escalation and response responsibilities in your signed agreement. Huntress provides continuous monitoring and active containment for devices covered by Helm Watch; Helm follow-up is during business hours and best effort outside them unless your agreement says otherwise. Broader recovery, legal, insurance, and forensic work is not automatically included.',
  },
  {
    q: 'How fast can we start?',
    a: {
      text: 'The free scan usually returns in about a minute. Helm Mail is scheduled after we confirm your email environment, select the appropriate deployment path, and agree on a rollback window. Project start dates are confirmed in the statement of work.',
      links: [
        {phrase: 'free scan', to: '/free-scan'},
        {phrase: 'Helm Mail', to: '/helm-mail'},
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
        <HeroBackdrop kind="brand-static" />
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

      <CtaBand
        title="Question not here?"
        sub="Email us or use the contact form. A Helm executive responds during business hours."
        source="faq cta"
      />
    </>
  );
}
