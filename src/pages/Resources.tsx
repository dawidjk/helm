import HeroBackdrop from '../components/HeroBackdrop';
import {Link} from 'react-router-dom';
import {canonicalPath} from '../lib/urls';
import {Band, CtaBand, DirectionIcon, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {articles} from './articles';

export default function Resources() {
  return (
    <>
      <Meta
        title="Resources: Plain-English Security Guides | Helm"
        desc="Plain-English guides on CMMC, cyber insurance, wire fraud, DMARC, and AI scams for small and medium-sized business owners and managers."
        path="/resources"
      />
      <header className="hero lane brand-hero">
        <HeroBackdrop kind="brand-static" />
        <div className="wrap">
          <h1 className="reveal d1 hero-title-compact">
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
        <div className="resource-feature observe">
          <div>
            <h2>AI Scam Readiness Quiz</h2>
            <p>Answer 10 questions and get a score plus a prioritized action plan. No email address is required to see the result.</p>
          </div>
          <Link to="/quiz/" className="resource-feature-link">
            Take the 3-minute quiz <DirectionIcon />
          </Link>
        </div>
        <div className="lane-strip">
          {articles.map((a, i) => (
            <Link key={a.slug} to={canonicalPath(`/resources/${a.slug}`)} className={`lane-row observe d${Math.min(i + 1, 5)}`}>
              <div>
                <div className="lane-meta">{a.lane}</div>
                <div className="lane-title">{a.title}</div>
              </div>
              <div className="lane-side">
                <span className="lane-note">{a.readMin} min read</span>
                <DirectionIcon className="lane-arrow" />
              </div>
            </Link>
          ))}
        </div>
      </Band>

      <CtaBand
        title="Reading is free. So is the scan."
        sub="The free email security scan turns theory into findings from your own public domain configuration: report usually in about a minute."
        source="resources cta"
      />
    </>
  );
}
