import HeroBackdrop from '../components/HeroBackdrop';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {siteUrl} from '../lib/urls';
import {businessPhone, facebookUrl, instagramUrl, linkedInUrl, serviceAreaJsonLd} from '../lib/business';

export default function About() {
  return (
    <>
      <Meta
        title="About Helm: Security That Answers to Your Business"
        desc="Meet the New Jersey team behind Helm Core managed protection and Helm Command vCISO leadership. See how we work alongside your existing IT."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': siteUrl('/#organization'),
          alternateName: ['Helm Security', 'Helm'],
          logo: {'@type': 'ImageObject', url: siteUrl('/favicon.png'), width: 2048, height: 2048},
          name: 'Helm Security LLC',
          url: siteUrl('/'),
          sameAs: [linkedInUrl, facebookUrl, instagramUrl],
          email: 'hello@helmsecured.com',
          telephone: businessPhone.e164,
          areaServed: serviceAreaJsonLd,
          address: {'@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US'},
          description:
            'Managed cybersecurity alongside existing IT, with security-program leadership through Helm Command.',
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
            Clear security help for businesses without a security department.
          </h1>
          <p className="sub reveal d2">
            A small business can lose money through one changed invoice, expose
            client information through one account, or lose a contract because
            it cannot back up an answer to a security question. Helm helps identify the problem,
            choose a practical response, and follow the work through.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band variant="raised">
        <h2 className="sr-only">How Helm works</h2>
        <div className="split">
          <div>
            <h3 className="observe">Who we are</h3>
            <p className="observe d1">
              Helm is a New Jersey company run by Kelly and Dawid Kluszczynski.
              Dawid leads the technical delivery. Kelly leads customer
              communication, growth, and partnerships.
            </p>
            <p className="observe d2">
              Small and medium-sized businesses already have plenty of tools and alerts. They still need to know which issues matter, who should fix them, and whether the work is complete. Helm is designed to make those responsibilities clear, with explanations in plain language and the price and scope stated up front.
            </p>
          </div>
          <div>
            <h3 className="observe">How we operate</h3>
            <ul className="check-list">
              <li className="observe d1">Plain English, with technical terms explained when you need them</li>
              <li className="observe d2">Published starting prices and scope ranges, confirmed in writing before work starts</li>
              <li className="observe d3">24/7 monitoring supplied by disclosed security operations partners</li>
              <li className="observe d4">Findings explained with practical next steps and a written scope for paid work</li>
              <li className="observe d5">Automated monitoring with people responsible for investigation and decisions</li>
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
          <h2 className="observe d1">You work directly with the two people running Helm.</h2>
          <p className="observe d2">
            Kelly and Dawid stay involved from the first conversation through
            delivery and follow-up.
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
                partner relationships. She makes sure the work addresses the
                reason the customer came to Helm and that the next step is clear.
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
                delivery. He follows the work from the first scan through
                deployment, documentation, and ongoing review.
              </p>
            </div>
          </article>
        </div>
        <p className="founder-note observe d2">
          Helm is a two-person company today. Where the service scope includes continuous monitoring, established security platforms provide it. We explain which work those platforms perform and which work Helm performs.
        </p>
      </Band>

      <Band variant="raised">
        <div className="band-head">
          <h2 className="observe">Why "Helm"</h2>
          <p className="observe d1">
            A ship's helm lets the person steering set direction. The name reflects what we want security reporting to help you do: understand the issue and decide what needs attention, with a clear owner for the next step.
          </p>
        </div>
      </Band>

      <CtaBand
        title="Start with the free scan."
        sub="Review your public email and web configuration, with findings and next steps explained in plain English."
        source="about cta"
      />
    </>
  );
}
