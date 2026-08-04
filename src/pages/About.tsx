import HeroBackdrop from '../components/HeroBackdrop';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {siteUrl} from '../lib/urls';
import {businessPhone, linkedInUrl, serviceAreaJsonLd} from '../lib/business';

export default function About() {
  return (
    <>
      <Meta
        title="About Helm: Security That Answers to Your Business"
        desc="Meet Helm Security, a leadership-led New Jersey company providing managed email security, AI scam readiness, and compliance support."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Helm Security LLC',
          url: siteUrl('/'),
          sameAs: [linkedInUrl],
          email: 'hello@helmsecured.com',
          telephone: businessPhone.e164,
          areaServed: serviceAreaJsonLd,
          address: {'@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US'},
          description:
            'Email security, AI scam defense, and compliance readiness for small and medium-sized businesses.',
          employee: [
            {
              '@type': 'Person',
              name: 'Kelly Kluszczynski',
              image: 'https://helmsecured.com/team/kelly-kluszczynski.png',
              jobTitle: 'Vice President, Growth & Partnerships',
            },
            {
              '@type': 'Person',
              name: 'Dawid Kluszczynski',
              image: 'https://helmsecured.com/team/dawid-kluszczynski.png',
              jobTitle: 'Vice President, Product & Delivery',
            },
          ],
        }}
      />
      <header className="hero lane brand-hero">
        <HeroBackdrop kind="brand-static" />
        <div className="wrap">
          <h1 className="reveal d1 hero-title-readable">
            We removed enterprise security&apos;s size requirement.
          </h1>
          <p className="sub reveal d2">
            Small and medium-sized businesses face email impersonation, payment fraud, and
            compliance demands without a dedicated security department. Helm
            gives them a clear, leadership-led path from finding to action.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band variant="raised">
        <div className="split">
          <div>
            <h3 className="observe">Who we are</h3>
            <p className="observe d1">
              Helm is a New Jersey company led by two vice presidents with
              complementary responsibilities: security operations and
              automation on one side, and growth, partnerships, and customer
              communication on the other.
            </p>
            <p className="observe d2">
              We designed Helm around one observation: small and medium-sized businesses don't
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
              <li className="observe d4">No fear selling. Every warning we give ends in a concrete, priced fix</li>
              <li className="observe d5">Automation-first: machines watch the logs, humans make the calls</li>
              {/* Restore when earned: Security+ is scheduled but not passed, and E&O/cyber
                  liability insurance is ON HOLD (see human_work.md). Do not publish either
                  claim before both are true.
              <li className="observe d5">CompTIA Security+ certified engineering, E&amp;O and cyber liability insured</li>
              */}
            </ul>
          </div>
        </div>
      </Band>

      <Band>
        <div className="band-head">
          <h2 className="observe d1">Two operating executives. No hidden bench.</h2>
          <p className="observe d2">
            When you hire Helm, you work directly with the two executives
            accountable for the result.
          </p>
        </div>
        <div className="founder-grid">
          <article className="founder-card observe">
            <img
              className="founder-portrait"
              src="/team/kelly-kluszczynski.png"
              alt="Kelly Kluszczynski, VP of Growth and Partnerships at Helm Security"
              loading="lazy"
            />
            <div>
              <h3>Kelly Kluszczynski</h3>
              <p className="founder-role">VP, Growth &amp; Partnerships</p>
              <p>
                Kelly leads discovery, customer communication, marketing, and
                partner relationships. She keeps every engagement tied to a
                business outcome and understandable to the people responsible
                for acting on it.
              </p>
            </div>
          </article>
          <article id="dawid-kluszczynski" className="founder-card observe d1">
            <img
              className="founder-portrait"
              src="/team/dawid-kluszczynski.png"
              alt="Dawid Kluszczynski, VP of Product and Delivery at Helm Security"
              loading="lazy"
            />
            <div>
              <h3>Dawid Kluszczynski</h3>
              <p className="founder-role">VP, Product &amp; Delivery</p>
              <p>
                Dawid designs Helm&apos;s services, automation, and technical
                delivery. He is the point of accountability from the first
                scan through deployment, documentation, and ongoing review.
              </p>
            </div>
          </article>
        </div>
        <p className="founder-note observe d2">
          Helm is intentionally leadership-led today. We use established
          security platforms for continuous monitoring, and we never imply
          that a large internal team is sitting behind the logo.
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
