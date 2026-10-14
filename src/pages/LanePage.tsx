import {Link} from 'react-router-dom';
import {ActionLink, Band, CtaBand, DirectionIcon, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import HeroBackdrop, {type BackdropKind} from '../components/HeroBackdrop';
import LeadForm from '../components/LeadForm';
import PanelVisual from '../components/PanelVisual';
import {canonicalPath, siteUrl} from '../lib/urls';
import {laneBuyerCopy} from './laneBuyerCopy';
import './LanePage.css';

export type Lane = {
  slug: string;
  backdrop: BackdropKind;
  reportDomain: string;
  metaTitle: string;
  metaDesc: string;
  metaKeywords?: string[];
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
  const buyerCopy = laneBuyerCopy[lane.slug];
  const sectionCopy = buyerCopy?.sectionCopy;
  return (
    <>
      <Meta
        keywords={lane.metaKeywords}
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
            See <Link to="/pricing/">published pricing</Link> for Helm Core and Helm Command
          </div>
        </div>
        <ScrollCue />
      </header>

      {buyerCopy && (
        <>
          <Band>
            <div className="band-head lane-buyer-head">
              <h2>{buyerCopy.selection.title}</h2>
            </div>
            <div className="lane-buyer-copy">
              {buyerCopy.selection.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              <ul className="lane-buyer-links">
                {buyerCopy.selection.links.map(link => <li key={link.to}><Link to={link.to}>{link.label}</Link></li>)}
              </ul>
            </div>
          </Band>
          <Band variant="raised">
            <div className="band-head lane-buyer-head">
              <h2 id={`${lane.slug}-responsibility-title`}>{buyerCopy.responsibility.title}</h2>
              <p>{buyerCopy.responsibility.intro}</p>
            </div>
            <p className="lane-table-hint" id={`${lane.slug}-responsibility-hint`}>On a narrow screen, scroll the table sideways to compare the columns. Keyboard users can focus the table and use the arrow keys.</p>
            <div className="lane-responsibility-scroll" data-focus-clearance role="region" aria-labelledby={`${lane.slug}-responsibility-title`} aria-describedby={`${lane.slug}-responsibility-hint`} tabIndex={0}>
              <table className="lane-responsibility-table">
                <caption>{buyerCopy.responsibility.caption}</caption>
                <thead><tr>{buyerCopy.responsibility.headers.map(header => <th key={header} scope="col">{header}</th>)}</tr></thead>
                <tbody>{buyerCopy.responsibility.rows.map(row => (
                  <tr key={row[0]}><th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td></tr>
                ))}</tbody>
              </table>
            </div>
            <p className="lane-buyer-followup"><Link to={buyerCopy.responsibility.link.to}>{buyerCopy.responsibility.link.label}</Link></p>
          </Band>
        </>
      )}

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
            <h2 className="observe">{sectionCopy?.evidence.title ?? 'What published sources show.'}</h2>
            <p className="observe d1">{sectionCopy?.evidence.intro ?? 'Read each finding with its source and scope. National figures do not establish your firm’s likelihood of an incident.'}</p>
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

      {buyerCopy?.duty && (
        <Band variant="raised">
          <div className="band-head lane-buyer-head"><h2>{buyerCopy.duty.title}</h2></div>
          <div className="lane-buyer-copy">
            <p>{buyerCopy.duty.text}</p>
            <ul className="lane-buyer-links">
              {buyerCopy.duty.links.map(link => <li key={link.to}><a href={link.to}>{link.label}</a></li>)}
            </ul>
          </div>
        </Band>
      )}

      <Band>
        <div className="band-head">
          <h2 className="observe">{lane.planTitle}</h2>
          <p className="observe d1">{lane.planSub}</p>
        </div>
        {buyerCopy ? (
          <div className="lane-buyer-services">
            {buyerCopy.services.map(service => (
              <section key={service.title}>
                <h3>{service.title}</h3>
                {service.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                <Link to={service.link.to}>{service.link.label}</Link>
              </section>
            ))}
          </div>
        ) : <ol className="steps-flow">
          {[
            {
              num: '1',
              title: 'Helm Core',
              body: 'Covered email, device, identity, backup, awareness, and digital risk protection managed as one standardized service, with a clear monthly report.',
            },
            {
              num: '2',
              title: 'Helm Command',
              body: 'The covered Core stack plus vCISO leadership: a maintained risk register, 12-month roadmap, evidence upkeep, bounded questionnaire responses, quarterly leadership reviews and coordination with existing IT.',
            },
          ].map((step, index) => (
            <li key={step.num} className={`observe d${index + 1}`}>
              <div className="step-dot">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>}
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
          <PanelVisual />
        </div>
      </Band>

      {lane.commonQuestions && (
        <Band>
          <div className="band-head lane-questions-head">
            <h2 className="observe">{sectionCopy?.questions.title ?? 'Questions to answer before choosing a service.'}</h2>
            {(!sectionCopy?.questions || sectionCopy.questions.intro) && <p className="observe d1">{sectionCopy?.questions.intro ?? 'The answer determines which systems, people, and evidence belong in scope.'}</p>}
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
          <h2 className="observe">{sectionCopy?.resources.title ?? 'Guides for the problem in front of you.'}</h2>
          {(!sectionCopy?.resources || sectionCopy.resources.intro) && <p className="observe d1">{sectionCopy?.resources.intro ?? 'Start with the closest question and use the related guide for the next step.'}</p>}
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
