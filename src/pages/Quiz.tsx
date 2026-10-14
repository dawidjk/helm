import BrandHeroBackdrop from '../components/BrandHeroBackdrop';
import {Band, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import QuizWidget from '../components/QuizWidget';

export default function Quiz() {
  return (
    <>
      <Meta
        title="Email and Scam Security Check | Helm"
        desc="Answer ten questions about email, payment checks and scam-response procedures. See three priorities based on your answers, without an email gate."
        path="/quiz"
      />
      <header className="hero lane brand-hero">
        <BrandHeroBackdrop />
        <div className="wrap">
          <h1 className="reveal d1 hero-title-compact">
            Email and Scam Security Check
          </h1>
          <p className="sub reveal d2">
            Answer ten questions about payment verification, email security
            and related procedures. Your results summarize your answers and
            suggest three things to review. You can see them without providing
            an email address.
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
