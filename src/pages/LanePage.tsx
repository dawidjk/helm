import {Link} from 'react-router-dom';
import {ActionLink, Band, CtaBand, DirectionIcon, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import HeroBackdrop, {type BackdropKind} from '../components/HeroBackdrop';
import LeadForm from '../components/LeadForm';
import PanelVisual from '../components/PanelVisual';
import {canonicalPath, siteUrl} from '../lib/urls';
import './LanePage.css';

export type Lane = {
  slug: string;
  backdrop: BackdropKind;
  reportDomain: string;
  metaTitle: string;
  metaDesc: string;
  serviceType?: string;
  eyebrow: string;
  headline: string;
  sub: string;
  primaryCta: string;
  /**
   * How the hero and bottom-band CTAs behave. 'scan' (default) renders the
   * email-in LeadForm that runs the instant domain scan; 'book' renders a
   * button to /contact for engagement-style offers (e.g. a CMMC gap
   * assessment) where an automatic domain scan is the wrong response.
   */
  ctaMode?: 'scan' | 'book';
  statusChip?: string;
  regulatoryUpdate?: {
    title: string;
    changed: string;
    unchanged: string;
  };
  pains: {title: string; body: string}[];
  evidence?: {
    value: string;
    finding: string;
    source: string;
    href: string;
  }[];
  planTitle: string;
  planSub: string;
  steps: {num: string; title: string; body: string}[];
  proof: {title: string; points: string[]};
  commonQuestions?: {
    question: string;
    answer: string;
    resource?: {slug: string; label: string};
  }[];
  resources: {slug: string; title: string; note: string}[];
  cta: {title: string; sub: string; label: string};
};

function StatusChip({text}: {text: string}) {
  return (
    <div className="deadline-chip-row reveal">
      <span className="deadline-chip">{text}</span>
    </div>
  );
}

export default function LanePage({lane}: {lane: Lane}) {
  return (
    <>
      <Meta
        title={lane.metaTitle}
        desc={lane.metaDesc}
        path={`/${lane.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: lane.metaTitle.split(' | ')[0],
              serviceType: lane.serviceType || 'Managed cybersecurity services',
              description: lane.metaDesc,
              url: siteUrl(`/${lane.slug}`),
              provider: {
                '@type': 'Organization',
                name: 'Helm Security LLC',
                url: siteUrl('/'),
              },
              areaServed: {'@type': 'State', name: 'New Jersey'},
              audience: {'@type': 'BusinessAudience', audienceType: lane.eyebrow},
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {'@type': 'ListItem', position: 1, name: 'Industries', item: siteUrl('/')},
                {'@type': 'ListItem', position: 2, name: lane.eyebrow, item: siteUrl(`/${lane.slug}`)},
              ],
            },
          ],
        }}
      />
      <header className={`hero lane lane-hero hero-fit-dense${lane.regulatoryUpdate ? ' lane-hero-decision' : ''}`}>
        <HeroBackdrop kind={lane.backdrop} />
        <div className="wrap">
          {lane.statusChip && !lane.regulatoryUpdate && <StatusChip text={lane.statusChip} />}
          <h1 className="reveal d1 hero-title-readable">
            {lane.headline}
          </h1>
          <div className="lane-hero-mobile-scene reveal d2" aria-hidden>
            <HeroBackdrop kind={lane.backdrop} />
          </div>
          <p className="sub reveal d2">
            <strong className="lane-audience">{lane.eyebrow}.</strong> {lane.sub}
          </p>
          <div className="hero-ctas reveal d3">
            {lane.ctaMode === 'book' ? (
              <ActionLink to="/contact/" label={lane.primaryCta} />
            ) : (
              <LeadForm source={`${lane.slug} hero`} cta={lane.primaryCta} compact />
            )}
          </div>
          <div className="hero-note reveal d3">
            See <Link to="/pricing/">published pricing</Link> for Helm Mail, Aware, Ready, and Watch
          </div>
        </div>
        <ScrollCue />
      </header>

      {lane.regulatoryUpdate && (
        <section className="lane-regulatory-update" aria-labelledby={`${lane.slug}-regulatory-update-title`}>
          <div className="wrap lane-regulatory-update-inner">
            <header className="lane-regulatory-update-head">
              {lane.statusChip && <StatusChip text={lane.statusChip} />}
              <h2 id={`${lane.slug}-regulatory-update-title`}>{lane.regulatoryUpdate.title}</h2>
            </header>
            <div className="lane-regulatory-ledger">
              <div>
                <h3>What changed</h3>
                <p>{lane.regulatoryUpdate.changed}</p>
              </div>
              <div>
                <h3>What did not</h3>
                <p>{lane.regulatoryUpdate.unchanged}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <Band variant="raised">
        <div className="band-head observe">
          <h2>What can go wrong</h2>
        </div>
        <div className="risk-list">
          {lane.pains.map((p) => (
            <div key={p.title} className="risk-item observe">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </Band>

      {lane.evidence && (
        <Band>
          <div className="band-head lane-evidence-head">
            <h2 className="observe">What published sources show.</h2>
            <p className="observe d1">The figures and guidance below include the limits needed to read them accurately.</p>
          </div>
          <div className="lane-evidence-list">
            {lane.evidence.map((item, i) => (
              <article key={`${item.value}-${item.source}`} className={`lane-evidence-row observe d${Math.min(i + 1, 5)}`}>
                <strong className="lane-evidence-value">{item.value}</strong>
                <p>{item.finding}</p>
                <a href={item.href}>{item.source}</a>
              </article>
            ))}
          </div>
        </Band>
      )}

      <Band>
        <div className="band-head">
          <h2 className="observe">{lane.planTitle}</h2>
          <p className="observe d1">{lane.planSub}</p>
        </div>
        <ol className="steps-flow">
          {lane.steps.map((s, i) => (
            <li key={s.num} className={`observe d${Math.min(i + 1, 5)}`}>
              <div className="step-dot">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </Band>

      <Band variant="raised">
        <div className="split">
          <div>
            <h3 className="observe">{lane.proof.title}</h3>
            <ul className="check-list">
              {lane.proof.points.map((pt, i) => (
                <li key={pt} className={`observe d${Math.min(i + 1, 5)}`}>{pt}</li>
              ))}
            </ul>
          </div>
          <PanelVisual domain={lane.reportDomain} />
        </div>
      </Band>

      {lane.commonQuestions && (
        <Band>
          <div className="band-head lane-questions-head">
            <h2 className="observe">Questions to answer before choosing a service.</h2>
            <p className="observe d1">The answer determines which systems, people, and evidence belong in scope.</p>
          </div>
          <div className="lane-question-list">
            {lane.commonQuestions.map((item, index) => (
              <article key={item.question} className={`lane-question-row observe d${Math.min(index + 1, 5)}`}>
                <h3>{item.question}</h3>
                <div>
                  <p>{item.answer}</p>
                  {item.resource && (
                    <Link to={canonicalPath(`/resources/${item.resource.slug}`)}>{item.resource.label}</Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </Band>
      )}

      <Band variant={lane.commonQuestions ? 'raised' : undefined}>
        <div className="band-head">
          <h2 className="observe">Guides for the problem in front of you.</h2>
          <p className="observe d1">Start with the closest question and use the related guide for the next step.</p>
        </div>
        <div className="lane-strip">
          {lane.resources.map((resource, i) => (
            <Link
              key={resource.slug}
              to={canonicalPath(`/resources/${resource.slug}`)}
              className={`lane-row observe d${Math.min(i + 1, 5)}`}
            >
              <div>
                <div className="lane-title">{resource.title}</div>
              </div>
              <div className="lane-side">
                <span className="lane-note">{resource.note}</span>
                <DirectionIcon className="lane-arrow" />
              </div>
            </Link>
          ))}
        </div>
      </Band>

      <CtaBand
        title={lane.cta.title}
        sub={lane.cta.sub}
        cta={lane.cta.label}
        source={`${lane.slug} cta band`}
        mode={lane.ctaMode}
      />
    </>
  );
}
