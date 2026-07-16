import HeroBackdrop from '../components/HeroBackdrop';
import {Link} from 'react-router-dom';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {articles} from './articles';

export default function Resources() {
  return (
    <>
      <Meta
        title="Resources: Plain-English Security Guides | Helm"
        desc="Plain-English guides on CMMC deadlines, cyber insurance questionnaires, wire fraud prevention, DMARC, and deepfake scams, written for business owners, not IT departments."
        path="/resources"
      />
      <header className="hero lane">
        <HeroBackdrop kind="rain" />
        <div className="wrap">
          <div className="eyebrow reveal">Resources</div>
          <h1 className="reveal d1" style={{maxWidth: '18ch'}}>
            Security, translated.
          </h1>
          <p className="sub reveal d2">
            Guides written for the person who signs the checks: no jargon, no
            fear-mongering, every article ends in something you can do.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <div className="lane-strip">
          {articles.map((a, i) => (
            <Link key={a.slug} to={`/resources/${a.slug}`} className={`lane-row observe d${(i % 3) + 1}`}>
              <div>
                <div className="kicker">{a.lane}</div>
                <div className="lane-title">{a.title}</div>
              </div>
              <div className="lane-side">
                <span className="lane-note">{a.readMin} min read</span>
                <span className="lane-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </Band>

      <CtaBand
        title="Reading is free. So is the scan."
        sub="The free email security scan turns theory into your actual numbers: instant report."
        source="resources cta"
      />
    </>
  );
}
