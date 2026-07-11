import {useEffect, useState} from 'react';
import {Band, CtaBand} from '../components/Site';
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
  deadline?: {iso: string; label: string};
  pains: {title: string; body: string}[];
  planTitle: string;
  planSub: string;
  steps: {num: string; title: string; body: string}[];
  proof: {title: string; points: string[]};
  cta: {title: string; sub: string; label: string};
};

function formatDeadlineDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'});
}

function DeadlineChip({deadline}: {deadline: {iso: string; label: string}}) {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(`${deadline.iso}T00:00:00Z`).getTime();
    const diffDays = Math.ceil((target - Date.now()) / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays);
  }, [deadline.iso]);

  const fallbackText = `${deadline.label}: ${formatDeadlineDate(deadline.iso)}`;
  const text = daysLeft !== null && daysLeft > 0 ? `${deadline.label} in ${daysLeft} days` : fallbackText;

  return (
    <div className="deadline-chip-row reveal">
      <span className="deadline-chip">{text}</span>
    </div>
  );
}

export default function LanePage({lane}: {lane: Lane}) {
  return (
    <>
      <Meta title={lane.metaTitle} desc={lane.metaDesc} path={`/${lane.slug}`} />
      <header className="hero lane">
        <HeroBackdrop kind={lane.backdrop} />
        <div className="wrap">
          {lane.deadline && <DeadlineChip deadline={lane.deadline} />}
          <div className="eyebrow reveal">{lane.eyebrow}</div>
          <h1 className="reveal d1" style={{maxWidth: '20ch'}}>
            {lane.headline}
          </h1>
          <p className="sub reveal d2">{lane.sub}</p>
          <div className="hero-ctas reveal d3">
            <LeadForm source={`${lane.slug} hero`} cta={lane.primaryCta} compact />
          </div>
        </div>
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
        <div className="band-head observe">
          <h2>{lane.planTitle}</h2>
          <p>{lane.planSub}</p>
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
          <div className="observe">
            <h3>{lane.proof.title}</h3>
            <ul className="check-list">
              {lane.proof.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
          <PanelVisual domain={lane.reportDomain} />
        </div>
      </Band>

      <CtaBand title={lane.cta.title} sub={lane.cta.sub} cta={lane.cta.label} source={`${lane.slug} cta band`} />
    </>
  );
}
