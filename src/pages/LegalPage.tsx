import HeroBackdrop from '../components/HeroBackdrop';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import type {LegalDoc} from './legal';

export default function LegalPage({doc}: {doc: LegalDoc}) {
  return (
    <>
      <Meta
        title={doc.metaTitle}
        desc={doc.metaDesc}
        path={`/${doc.slug}`}
      />
      <header className="hero lane">
        <HeroBackdrop kind="rain" />
        <div className="wrap">
          <div className="eyebrow reveal">{doc.eyebrow}</div>
          <h1 className="reveal d1">{doc.heading}</h1>
          <p className="sub reveal d2">{doc.sub}</p>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <div className="legal-doc">
          <p className="legal-effective">Effective {doc.effective}</p>

          {doc.intro.map((p, i) => (
            <p key={i} className="legal-intro">
              {p}
            </p>
          ))}

          {doc.sections.map((s) => (
            <section key={s.h} className="legal-section observe">
              <h2>{s.h}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </Band>

      <CtaBand
        title="Something here unclear?"
        sub="Ask us before you sign. A human replies within one business day."
        source={`${doc.slug} cta`}
      />
    </>
  );
}
