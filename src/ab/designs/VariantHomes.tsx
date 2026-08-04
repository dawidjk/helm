import {Link} from 'react-router-dom';
import Meta from '../../components/Meta';
import LeadForm from '../../components/LeadForm';
import HeroVideo from '../../components/HeroVideo';
import {canonicalPath, siteUrl} from '../../lib/urls';
import {businessPhone, linkedInUrl, serviceAreaJsonLd} from '../../lib/business';
import {productList} from '../../pages/products';
import japandiHero from '../../assets/variants/japandi-hero.webp';
import akariHero from '../../assets/variants/akari-hero.webp';
import japandiHeroVideo from '../../assets/variants/videos/japandi-hero.mp4';
import akariHeroVideo from '../../assets/variants/videos/akari-hero.mp4';
import './variant-homes.css';

const lanes = [
  {to: '/manufacturing', name: 'Manufacturing & defense', promise: 'CMMC without the panic'},
  {to: '/professional-services', name: 'Law, CPA & medical', promise: 'Client trust is the product'},
  {to: '/contractors', name: 'Contractors & trades', promise: 'Stop the fake-invoice loss'},
];

function HomeMeta() {
  return (
    <Meta
      title="Helm: Cybersecurity for New Jersey Small and Medium Businesses"
      desc="Leadership-led New Jersey security for small and medium-sized businesses: email fraud protection, AI scam readiness, compliance projects, 24/7 endpoint monitoring, and a free domain scan."
      path="/"
      jsonLd={{
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Helm Security LLC',
        alternateName: 'Helm',
        url: siteUrl('/'),
        sameAs: [linkedInUrl],
        email: 'hello@helmsecured.com',
        telephone: businessPhone.e164,
        areaServed: serviceAreaJsonLd,
        address: {'@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US'},
        description: 'Email security, AI scam defense, and compliance readiness for small and medium-sized businesses.',
      }}
    />
  );
}

function Scan({source}: {source: string}) {
  return (
    <div className="vh-scan">
      <LeadForm source={source} cta="Get my free scan" compact />
    </div>
  );
}

function ServiceLink({index}: {index: number}) {
  const service = productList[index];
  return (
    <Link className="vh-service" to={canonicalPath(`/${service.slug}`)}>
      <span className="vh-service-name">{service.name}</span>
      <strong>{service.tagline}</strong>
      <span className="vh-service-price">{service.price}</span>
      <span className="vh-arrow" aria-hidden="true">→</span>
    </Link>
  );
}

function LaneLinks() {
  return (
    <nav className="vh-lanes" aria-label="Industry pages">
      {lanes.map((lane) => (
        <Link key={lane.to} to={canonicalPath(lane.to)}>
          <span>{lane.name}</span>
          <strong>{lane.promise}</strong>
          <span aria-hidden="true">↗</span>
        </Link>
      ))}
    </nav>
  );
}

export function JapandiHome() {
  return (
    <main className="variant-home vh-japandi">
      <HomeMeta />
      <header className="vj-hero">
        <HeroVideo src={japandiHeroVideo} poster={japandiHero} className="vj-film" />
        <div className="vj-copy">
          <h1>Security with less noise.</h1>
          <p>
            Practical protection for New Jersey businesses. Clear decisions,
            thoughtful controls, and a steady hand when the stakes are high.
          </p>
          <Scan source="variant japandi hero" />
          <small>Free email-domain scan · plain-English report in about a minute</small>
        </div>
      </header>

      <section className="vj-services" aria-labelledby="vj-services-title">
        <div className="vj-intro">
          <h2 id="vj-services-title">Four services. One steady hand.</h2>
          <p>Recurring protection where it belongs. Fixed-fee projects where the work has a finish line.</p>
        </div>
        <div className="vj-service-list">{productList.map((_, index) => <ServiceLink index={index} key={index} />)}</div>
      </section>

      <section className="vj-proof">
        <blockquote>“Prove you’re protected” should have a clear, useful answer.</blockquote>
        <div>
          <span>Cyber-insurance questionnaires</span>
          <span>Payment-verification protocols</span>
          <span>CMMC / NIST 800-171 gaps</span>
          <span>HIPAA-ready controls</span>
        </div>
      </section>

      <section className="vj-industries">
        <h2>Built for the way your business actually works.</h2>
        <LaneLinks />
      </section>

      <section className="vj-close">
        <h2>Find out where you stand.</h2>
        <p>The first look is free. No meeting required.</p>
        <Scan source="variant japandi close" />
      </section>
    </main>
  );
}

export function AkariHome() {
  return (
    <main className="variant-home vh-akari">
      <HomeMeta />
      <header className="va-hero">
        <HeroVideo src={akariHeroVideo} poster={akariHero} className="va-film" />
        <div className="va-shade" />
        <div className="va-copy">
          <h1>Clarity in the dark.</h1>
          <p>Helm turns security noise into a small number of useful decisions—for your team, your customers, and the people asking for proof.</p>
          <Scan source="variant akari hero" />
          <small>Free email-domain scan · report in about a minute</small>
        </div>
      </header>

      <section className="va-services" aria-labelledby="va-services-title">
        <div className="va-heading"><h2 id="va-services-title">Protection, shaped around the work.</h2><p>Four focused services, with ownership and plain-English follow-through.</p></div>
        <div className="va-orbit">
          {productList.map((service) => (
            <Link key={service.slug} to={canonicalPath(`/${service.slug}`)}>
              <span>{service.name}</span><strong>{service.tagline}</strong><small>{service.price}</small><b aria-hidden="true">→</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="va-proof">
        <div className="va-glow" aria-hidden="true" />
        <div><h2>When someone asks, the answer is ready.</h2><p>Insurance questionnaires, payment protocols, compliance evidence, and endpoint response—kept understandable enough to use.</p></div>
        <div className="va-facts"><span><b>$0</b> first scan</span><span><b>~1 min</b> report</span><span><b>24/7</b> SOC</span></div>
      </section>
      <LaneLinks />
    </main>
  );
}
