import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import LeadForm from '../components/LeadForm';
import {canonicalPath, siteUrl} from '../lib/urls';
import {businessPhone, facebookUrl, instagramUrl, linkedInUrl, serviceAreaJsonLd} from '../lib/business';
import {productList} from './products';
import japandiHero from '../assets/variants/japandi-hero.webp';
import japandiHeroMobile from '../assets/brand/japandi-home-mobile-640.webp';
import {DirectionIcon, ScrollCue} from '../components/Site';

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
        desc="Complete managed security through Helm Core, with hands-on security program ownership through Helm Command for New Jersey small and medium-sized businesses."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Helm Security LLC',
          alternateName: 'Helm',
          url: siteUrl('/'),
          sameAs: [linkedInUrl, facebookUrl, instagramUrl],
          email: 'hello@helmsecured.com',
          telephone: businessPhone.e164,
          areaServed: serviceAreaJsonLd,
          address: {'@type': 'PostalAddress', addressRegion: 'NJ', addressCountry: 'US'},
          description: 'Complete managed security protection and security program ownership for small and medium-sized businesses.',
        }}
      />

      <header className="japandi-home-hero">
        <picture>
          <source media="(max-width: 700px)" srcSet={japandiHeroMobile} />
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
        </picture>
        <div className="japandi-home-shade" aria-hidden="true" />
        <div className="japandi-home-copy">
          <h1>Security with less noise.</h1>
          <p>
            Protect the email, devices, and business processes attackers use
            to steal money or sensitive information. Helm gives New Jersey
            businesses clear next steps and someone accountable for following through.
          </p>
          <Scan source="home hero" />
          <small>Free domain scan · no card · no required meeting</small>
        </div>
        <ScrollCue />
      </header>

      <section id="services" className="home-service-section" aria-labelledby="home-services-title">
        <div className="home-section-intro">
          <h2 id="home-services-title">Two ways to put someone in charge of security.</h2>
          <p>Choose Core for a complete, standardized security stack. Choose Command when leadership also needs a maintained roadmap, evidence, questionnaire response, and quarterly cadence.</p>
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
        <blockquote>When a customer or insurer asks what is protected, you should not have to guess.</blockquote>
        <div className="home-proof-list">
          <span>Cyber-insurance questionnaires</span>
          <span>Payment-verification protocols</span>
          <span>CMMC / NIST 800-171 gaps</span>
          <span>HIPAA-ready controls</span>
        </div>
      </section>

      <section className="home-industries-section">
        <h2>Start with the problem your business is dealing with.</h2>
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
