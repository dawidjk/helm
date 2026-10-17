import {commandReadiness} from './commandReadiness';
import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import LeadForm from '../components/LeadForm';
import {canonicalPath, siteUrl} from '../lib/urls';
import {organizationJsonLd} from '../lib/business';
import {productList} from './products';
import japandiHero from '../assets/variants/japandi-hero.webp';
import japandiHeroMobile from '../assets/brand/japandi-home-mobile-640.webp';
import {BookCallLink, DirectionIcon, ScrollCue} from '../components/Site';
import {BOOKING_DESTINATION} from '../lib/booking';
import {trackBookingClick} from '../lib/bookingClickMeasurement';
import './SecureAiAdoption.css';
import PanelVisual from '../components/PanelVisual';
import OwnerPortrait from '../components/OwnerPortrait';
import './HomeRefinements.css';

const lanes = [
  {to: '/manufacturing', name: 'Manufacturing & defense', promise: 'Plan for CMMC requirements'},
  {to: '/professional-services', name: 'Law & accounting firms', promise: 'Protect client information'},
  {to: '/medical-practices', name: 'Medical & dental practices', promise: 'Plan for HIPAA security needs'},
  {to: '/contractors', name: 'Contractors & trades', promise: 'Verify supplier payment changes'},
];

function Scan({source}: {source: string}) {
  return (
    <div className="home-scan">
      <LeadForm source={source} cta="Get my free scan" compact
        secondaryAction={<BookCallLink size="sm" className="booking-secondary-action" />} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="home-japandi">
      <Meta
        title="Cybersecurity Services for New Jersey Businesses | Helm"
        desc="New Jersey cybersecurity services alongside your existing IT. Helm Core manages protection; Command adds vCISO leadership and evidence upkeep."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': siteUrl('/#website'),
              name: 'Helm Security',
              alternateName: 'Helm',
              url: siteUrl('/'),
              publisher: {'@id': siteUrl('/#organization')},
            },
            organizationJsonLd,
          ],
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
          <h1>Cybersecurity for New Jersey businesses.</h1>
          <p>
            Helm protects your email, devices, and accounts alongside your existing IT team.
            Get managed cybersecurity with Core, or add virtual security leadership
            and evidence upkeep with Command.
          </p>
          <BookCallLink />
        </div>
        <ScrollCue />
      </header>

      <section className="home-owner-intro" aria-labelledby="home-owner-title">
        <OwnerPortrait className="home-owner-portrait" sizes="(max-width: 700px) 200px, 240px" />
        <div>
          <h2 id="home-owner-title">Kelly and Dawid Kluszczynski</h2>
          <p>You’ll work directly with Helm’s co-owners from the first conversation through delivery and follow-up.</p>
          <Link className="home-detail-link" to="/about/">About Kelly and Dawid <DirectionIcon /></Link>
        </div>
      </section>

      <section id="services" className="home-service-section" aria-labelledby="home-services-title">
        <div className="home-section-intro">
          <h2 id="home-services-title">Managed protection and security leadership.</h2>
          <p>Core manages the security layer alongside your IT team. With Command, you also have an ongoing owner for your security program. We agree on scope and responsibilities in writing.</p>
        </div>
        <div className="home-comparison">
          <div className="home-service-list">
            {productList.map((service) => (
              <article className="home-service-summary" key={service.slug}>
                <h3><Link to={canonicalPath(`/${service.slug}`)}>{service.name} <DirectionIcon /></Link></h3>
                <p className="home-service-fit">{service.slug === 'helm-core'
                  ? 'For businesses that need managed protection while their IT team handles daily operations.'
                  : "For firms that need someone to keep the security roadmap and evidence current and hold leadership reviews."}</p>
                <p>{service.slug === 'helm-core'
                  ? "Core includes managed email, device and identity protection, supported cloud backup, awareness training and digital risk monitoring. You receive one monthly security report."
                  : 'Everything in Core, plus virtual chief information security officer (vCISO) leadership, a risk register and a 12-month roadmap. Includes questionnaire responses within agreed limits, quarterly reviews and an annual tabletop exercise.'}</p>
                <p className="home-service-price">{service.price}</p>
                <p className="home-service-terms">{service.slug === 'helm-core'
                  ? '$2,500 monthly minimum. 12-month term or 36-month price lock.'
                  : 'Final quotes depend on covered users and agreed scope. 36-month initial term. Price adjusts 6% on each service anniversary.'}</p>
                <Link className="home-detail-link" to={canonicalPath(`/${service.slug}`)}>Explore {service.name} <DirectionIcon /></Link>
              </article>
            ))}
            <article className="home-service-summary">
              <h3><Link to="/helm-command/#soc-2-readiness">{commandReadiness.title} <DirectionIcon /></Link></h3>
              <p className="home-service-fit">{commandReadiness.status}</p>
              <p>{commandReadiness.description}</p>
              <p className="home-service-terms">{commandReadiness.boundary}</p>
              <Link className="home-detail-link" to="/helm-command/#soc-2-readiness">Read about SOC 2 readiness <DirectionIcon /></Link>
            </article>
          </div>
          <p className="home-it-responsibility">Your IT provider remains responsible for help desk, administration, patching and routine remediation. Helm manages the security work included in your service order.</p>
          <div className="home-comparison-links">
            <Link to="/pricing/">Compare pricing and scope <DirectionIcon /></Link>
            <a href={BOOKING_DESTINATION ?? undefined} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" onClick={event => trackBookingClick(event.nativeEvent, 'home_command')} onAuxClick={event => trackBookingClick(event.nativeEvent, 'home_command')}>Discuss Command <DirectionIcon external /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
          <section className="home-onboarding" aria-labelledby="home-onboarding-title">
            <h3 id="home-onboarding-title">How work starts</h3>
            <ol>
              <li><strong>Confirm the fit.</strong> Review the platforms you use, the users and devices to be covered, your business needs, and who handles your IT.</li>
              <li><strong>Agree on the scope.</strong> Document deliverables, pricing and responsibilities before work begins.</li>
              <li><strong>Deploy and establish the baseline.</strong> Set up the covered protections and start monthly reporting. Command also includes quarterly leadership reviews.</li>
            </ol>
          </section>
        </div>
      </section>

      <section className="home-ai-section" aria-labelledby="home-ai-title">
        <h2 id="home-ai-title">Secure AI Adoption</h2>
        <div>
          <p>Secure AI Adoption is a separate consulting engagement for New Jersey professional-services firms. We evaluate one recurring internal workflow and review the tools and data it needs to decide whether a pilot is appropriate. Staff effort, time spent checking the work, and software costs help you decide what to keep.</p>
          <p>Pricing quoted after scoping. Any pilot has a separate scope.</p>
          <div className="home-ai-links">
            <Link to="/secure-ai-adoption/">Explore Secure AI Adoption <DirectionIcon /></Link>
            <a href={BOOKING_DESTINATION ?? undefined} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" onClick={event => trackBookingClick(event.nativeEvent, 'home_ai')} onAuxClick={event => trackBookingClick(event.nativeEvent, 'home_ai')}>Discuss an AI workflow <DirectionIcon external /><span className="sr-only"> (opens in a new tab)</span></a>
          </div>
        </div>
      </section>

      <section className="home-proof-section">
        <blockquote>You should be able to explain what is protected when a customer or insurer asks.</blockquote>
        <div className="home-proof-list">
          <span>Cyber-insurance questionnaires</span>
          <span>Payment-verification protocols</span>
          <Link to="/manufacturing/">CMMC / NIST 800-171 gaps</Link>
          <Link to="/medical-practices/">HIPAA security planning</Link>
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

      <section className="home-close-section home-scan-preview">
        <div>
          <h2>See what your public domain shows.</h2>
          <p>The free scan checks public email and web configuration. Confirm your domain in the portal to see the findings and next steps.</p>
          <Scan source="home close" />
          <Link className="home-detail-link" to="/free-scan/">What the scan checks <DirectionIcon /></Link>
        </div>
        <PanelVisual />
      </section>
      <section className="home-region" aria-labelledby="home-region-title">
        <h2 id="home-region-title">Serving businesses in New Jersey.</h2>
        <p>Based in New Jersey, Helm works alongside your existing IT team. Start with your industry’s needs: <Link to="/professional-services/">professional services</Link>, <Link to="/manufacturing/">manufacturing and defense</Link>, or <Link to="/contractors/">contractors and trades</Link>.</p>
        <Link className="home-detail-link" to="/service-areas/">Service areas <DirectionIcon /></Link>
      </section>
    </div>
  );
}
