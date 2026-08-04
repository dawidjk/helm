import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import LeadForm from '../components/LeadForm';
import {canonicalPath, siteUrl} from '../lib/urls';
import {businessPhone, linkedInUrl, serviceAreaJsonLd} from '../lib/business';
import {productList} from './products';
import japandiHero from '../assets/variants/japandi-hero.webp';
import {DirectionIcon} from '../components/Site';

const lanes = [
  {to: '/manufacturing', name: 'Manufacturing & defense', promise: 'CMMC without the panic'},
  {to: '/professional-services', name: 'Law, CPA & medical', promise: 'Client trust is the product'},
  {to: '/contractors', name: 'Contractors & trades', promise: 'Stop the fake-invoice loss'},
];

function Scan({source}: {source: string}) {
  return (
    <div className="home-scan">
      <LeadForm source={source} cta="Get my free scan" compact />
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-japandi">
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

      <header className="japandi-home-hero">
        <img
          src={japandiHero}
          className="japandi-home-art"
          alt="Deep-pine sculptural helm beside mineral-paper forms in a quiet interior"
          width="1672"
          height="941"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="japandi-home-shade" aria-hidden="true" />
        <div className="japandi-home-copy">
          <h1>Security with less noise.</h1>
          <p>
            Practical protection for New Jersey businesses. Clear decisions,
            thoughtful controls, and a steady hand when the stakes are high.
          </p>
          <Scan source="home hero" />
          <small>Free email-domain scan · no credit card or required meeting</small>
        </div>
      </header>

      <section id="services" className="home-service-section" aria-labelledby="home-services-title">
        <div className="home-section-intro">
          <h2 id="home-services-title">Four services. One steady hand.</h2>
          <p>Recurring protection where it belongs. Fixed-fee projects where the work has a finish line.</p>
        </div>
        <div className="home-service-list">
          {productList.map((service) => (
            <Link key={service.slug} to={canonicalPath(`/${service.slug}`)} className="home-service-link">
              <span className="home-service-name">{service.name}</span>
              <strong>{service.tagline}</strong>
              <span className="home-service-price">{service.price}</span>
              <DirectionIcon className="home-service-arrow" />
            </Link>
          ))}
        </div>
      </section>

      <section className="home-proof-section">
        <blockquote>“Prove you’re protected” should have a clear, useful answer.</blockquote>
        <div className="home-proof-list">
          <span>Cyber-insurance questionnaires</span>
          <span>Payment-verification protocols</span>
          <span>CMMC / NIST 800-171 gaps</span>
          <span>HIPAA-ready controls</span>
        </div>
      </section>

      <section className="home-industries-section">
        <h2>Built for the way your business actually works.</h2>
        <nav className="home-industry-links" aria-label="Industry pages">
          {lanes.map((lane) => (
            <Link key={lane.to} to={canonicalPath(lane.to)}>
              <span>{lane.name}</span>
              <strong>{lane.promise}</strong>
              <DirectionIcon />
            </Link>
          ))}
        </nav>
      </section>

      <section className="home-close-section">
        <h2>Find out where you stand.</h2>
        <p>The first look is free. No meeting required.</p>
        <Scan source="home close" />
      </section>
    </div>
  );
}
