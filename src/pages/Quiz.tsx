import HeroBackdrop from '../components/HeroBackdrop';
import {Band, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import QuizWidget from '../components/QuizWidget';

export default function Quiz() {
  return (
    <>
      <Meta
        title="AI Scam Readiness Quiz: Score Your Business | Helm"
        desc="10 questions, about 3 minutes. Score how exposed your business is to AI-powered scams and get a plain-English action plan."
        path="/quiz"
      />
      <header className="hero lane">
        <HeroBackdrop kind="cyber" />
        <div className="wrap">
          <div className="eyebrow reveal">Free · 10 questions · About 3 minutes</div>
          <h1 className="reveal d1" style={{maxWidth: '18ch'}}>
            How exposed is your business to AI-powered scams?
          </h1>
          <p className="sub reveal d2">
            Answer 10 quick questions about payment verification, training,
            and email security. You get a score out of 100 and a
            plain-English list of what to fix first, no email address
            required to see your result.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band variant="raised">
        <QuizWidget />
      </Band>
    </>
  );
}
