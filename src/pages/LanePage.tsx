import {Link} from 'react-router-dom';
import {Button} from '@astryxdesign/core/Button';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import HeroBackdrop, {type BackdropKind} from '../components/HeroBackdrop';
import LeadForm from '../components/LeadForm';
import PanelVisual from '../components/PanelVisual';

export type Lane = {
  slug: string;
  backdrop: BackdropKind;
  reportDomain: string;
  metaTitle: string;
  metaDesc: string;
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
  pains: {title: string; body: string}[];
  planTitle: string;
  planSub: string;
  steps: {num: string; title: string; body: string}[];
  proof: {title: string; points: string[]};
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
          '@type': 'BreadcrumbList',
          itemListElement: [
            {'@type': 'ListItem', position: 1, name: 'Industries', item: 'https://helmsecured.com'},
            {'@type': 'ListItem', position: 2, name: lane.eyebrow, item: `https://helmsecured.com/${lane.slug}`},
          ],
        }}
      />
      <header className="hero lane">
        <HeroBackdrop kind={lane.backdrop} />
        <div className="wrap">
          {lane.statusChip && <StatusChip text={lane.statusChip} />}
          <div className="eyebrow reveal">{lane.eyebrow}</div>
          <h1 className="reveal d1" style={{maxWidth: '20ch'}}>
            {lane.headline}
          </h1>
          <p className="sub reveal d2">{lane.sub}</p>
          <div className="hero-ctas reveal d3">
            {lane.ctaMode === 'book' ? (
              <Link to="/contact">
                <Button label={lane.primaryCta} variant="primary" size="lg" />
              </Link>
            ) : (
              <LeadForm source={`${lane.slug} hero`} cta={lane.primaryCta} compact />
            )}
          </div>
          <div className="hero-note reveal d3">
            See <Link to="/pricing" style={{color: 'light-dark(#0c7a44, #AAE2C4)'}}>published pricing</Link> for Helm Mail, Aware, Ready, and Watch
          </div>
        </div>
        <ScrollCue />
      </header>

      <Band variant="raised">
        <div className="band-head observe">
          <h2>What's actually at risk</h2>
        </div>
        <div className="risk-list">
          {lane.pains.map((p, i) => (
            <div key={p.title} className={`risk-item observe d${i + 1}`}>
              <div className="risk-index">{String(i + 1).padStart(2, '0')}</div>
              <div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="band-head">
          <h2 className="observe">{lane.planTitle}</h2>
          <p className="observe d1">{lane.planSub}</p>
        </div>
        <ol className="steps-flow">
          {lane.steps.map((s, i) => (
            <li key={s.num} className={`observe d${i + 1}`}>
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
                <li key={pt} className={`observe d${(i % 3) + 1}`}>{pt}</li>
              ))}
            </ul>
          </div>
          <PanelVisual domain={lane.reportDomain} />
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
