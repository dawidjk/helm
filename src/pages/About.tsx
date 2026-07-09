import {Band, CtaBand} from '../components/Site';
import Meta from '../components/Meta';

export default function About() {
  return (
    <>
      <Meta
        title="About Helm: Security That Answers to Your Business"
        desc="Helm (HelmSecure LLC) is a New Jersey security company bringing enterprise-grade email security, AI scam defense, and compliance readiness to small businesses, in plain English, at published prices."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'HelmSecure LLC',
          url: 'https://helmsecured.com',
          email: 'hello@helmsecured.com',
          address: {'@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US'},
          description:
            'Email security, AI scam defense, and compliance readiness for small businesses.',
        }}
      />
      <header className="hero lane">
        <div className="wrap">
          <div className="eyebrow reveal">About Helm</div>
          <h1 className="reveal d1" style={{maxWidth: '20ch'}}>
            Enterprise security had a size requirement. We removed it.
          </h1>
          <p className="sub reveal d2">
            Helm exists because a 20-person machine shop faces the same
            criminals as a Fortune 500, with none of the same defenses, and
            none of the budget for a security department.
          </p>
        </div>
      </header>

      <Band variant="raised">
        <div className="split">
          <div className="observe">
            <h3>Who we are</h3>
            <p>
              Helm is a New Jersey company built by two people who watched the
              same story repeat: an engineer who spent years automating
              security operations at scale, and a sales leader who spent years
              hearing business owners say "we're too small to be a target,"
              right up until the wire cleared.
            </p>
            <p>
              We designed Helm around one observation: small businesses don't
              need more security products. They need someone accountable for
              the outcome, at a price that's published, in language that
              doesn't require translation.
            </p>
          </div>
          <div className="observe d1">
            <h3>How we operate</h3>
            <ul className="check-list">
              <li>Plain English, always. If you need a glossary, we've failed</li>
              <li>Published fixed pricing. Every customer pays the same rate</li>
              <li>Honest architecture: our monitoring is backed by 24/7 security operations partners, and we say so</li>
              <li>No fear selling. Every warning we give ends in a concrete, priced fix</li>
              <li>Automation-first: machines watch the logs, humans make the calls</li>
              <li>CompTIA Security+ certified engineering, E&amp;O and cyber liability insured</li>
            </ul>
          </div>
        </div>
      </Band>

      <Band>
        <div className="band-head observe">
          <h2>Why "Helm"</h2>
          <p>
            The helm is the one place on a ship where you can see everything
            and steer. That's the product: not another alarm going off
            somewhere below deck, but a steady hand and a clear view, so you can
            run your business while someone competent watches the water.
          </p>
        </div>
      </Band>

      <CtaBand
        title="Start with the free scan."
        sub="It's the fastest way to see how we work: real findings, plain English, no pressure."
        source="about cta"
      />
    </>
  );
}
