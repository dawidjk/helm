import HeroBackdrop from '../components/HeroBackdrop';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';

export default function About() {
  return (
    <>
      <Meta
        title="About Helm: Security That Answers to Your Business"
        desc="Helm (HelmSecure LLC) is a founder-led New Jersey security company providing practical email security, AI scam readiness, and compliance support at published starting prices."
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
          founder: [
            {
              '@type': 'Person',
              name: 'Kelly Kluszczynski',
              image: 'https://helmsecured.com/team/kelly-kluszczynski.png',
              jobTitle: 'Co-Founder, Growth & Partnerships',
            },
            {
              '@type': 'Person',
              name: 'Dawid Kluszczynski',
              image: 'https://helmsecured.com/team/dawid-kluszczynski.png',
              jobTitle: 'Co-Founder, Product & Delivery',
            },
          ],
        }}
      />
      <header className="hero lane">
        <HeroBackdrop kind="rain" />
        <div className="wrap">
          <div className="eyebrow reveal">About Helm</div>
          <h1 className="reveal d1" style={{maxWidth: '20ch'}}>
            Enterprise security had a size requirement. We removed it.
          </h1>
          <p className="sub reveal d2">
            Small businesses face email impersonation, payment fraud, and
            compliance demands without a dedicated security department. Helm
            gives them a clear, founder-led path from finding to action.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band variant="raised">
        <div className="split">
          <div>
            <h3 className="observe">Who we are</h3>
            <p className="observe d1">
              Helm is a New Jersey company built by two founders with
              complementary responsibilities: security operations and
              automation on one side, and growth, partnerships, and customer
              communication on the other.
            </p>
            <p className="observe d2">
              We designed Helm around one observation: small businesses don't
              need more security products. They need someone accountable for
              the outcome, at a price that's published, in language that
              doesn't require translation.
            </p>
          </div>
          <div>
            <h3 className="observe">How we operate</h3>
            <ul className="check-list">
              <li className="observe d1">Plain English, always. If you need a glossary, we've failed</li>
              <li className="observe d2">Published starting prices and scope bands, confirmed in writing before work starts</li>
              <li className="observe d3">Honest architecture: our monitoring is backed by 24/7 security operations partners, and we say so</li>
              <li className="observe d1">No fear selling. Every warning we give ends in a concrete, priced fix</li>
              <li className="observe d2">Automation-first: machines watch the logs, humans make the calls</li>
              {/* Restore when earned: Security+ is scheduled but not passed, and E&O/cyber
                  liability insurance is ON HOLD (see human_work.md). Do not publish either
                  claim before both are true.
              <li className="observe d3">CompTIA Security+ certified engineering, E&amp;O and cyber liability insured</li>
              */}
            </ul>
          </div>
        </div>
      </Band>

      <Band>
        <div className="band-head">
          <div className="eyebrow observe">The founders</div>
          <h2 className="observe d1">A husband-and-wife company. No hidden bench.</h2>
          <p className="observe d2">
            When you hire Helm, you work directly with the two people who own
            the company and are accountable for the result.
          </p>
        </div>
        <div className="founder-grid">
          <article className="founder-card observe">
            <img
              className="founder-portrait"
              src="/team/kelly-kluszczynski.png"
              alt="Kelly Kluszczynski, Co-Founder of Helm Security"
              loading="lazy"
            />
            <div>
              <div className="kicker">Co-Founder · Growth &amp; Partnerships</div>
              <h3>Kelly Kluszczynski</h3>
              <p>
                Kelly leads discovery, customer communication, marketing, and
                partner relationships. She keeps every engagement tied to a
                business outcome and understandable to the people responsible
                for acting on it.
              </p>
            </div>
          </article>
          <article className="founder-card observe d1">
            <img
              className="founder-portrait"
              src="/team/dawid-kluszczynski.png"
              alt="Dawid Kluszczynski, Co-Founder of Helm Security"
              loading="lazy"
            />
            <div>
              <div className="kicker">Co-Founder · Product &amp; Delivery</div>
              <h3>Dawid Kluszczynski</h3>
              <p>
                Dawid designs Helm&apos;s services, automation, and technical
                delivery. He is the point of accountability from the first
                scan through deployment, documentation, and ongoing review.
              </p>
            </div>
          </article>
        </div>
        <p className="founder-note observe d2">
          Helm is intentionally founder-led today. We use established security
          platforms for continuous monitoring, and we never imply that a large
          internal team is sitting behind the logo.
        </p>
      </Band>

      <Band variant="raised">
        <div className="band-head">
          <h2 className="observe">Why "Helm"</h2>
          <p className="observe d1">
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
