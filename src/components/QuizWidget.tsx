import {useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@astryxdesign/core/Button';
import {BookCallLink} from './Site';
import {bookingCallCopy} from '../pages/bookingCallCopy';
import {quizPriorities} from '../lib/quizPriorities';

type Option = {label: string; points: number};
type Question = {id: string; category: string; text: string; options: Option[]};

/**
 * Ported verbatim (ids, categories, question text, option labels, and point
 * values) from assets/marketing/ai_scam_readiness_quiz.html. Do not edit the
 * content below without updating the source quiz to match.
 */
const QUESTIONS: Question[] = [
  {
    id: 'payment_verification',
    category: 'Payment verification',
    text: 'When someone requests a payment or a change to payment details by email, what happens?',
    options: [
      {label: 'We verify by phone using a known number before sending any money', points: 10},
      {label: 'We usually check, but it depends who is asking', points: 5},
      {label: 'We act on the email as written', points: 0},
    ],
  },
  {
    id: 'wire_approval',
    category: 'Wire transfer approvals',
    text: 'How many people need to approve a wire transfer or large ACH payment before it goes out?',
    options: [
      {label: 'Two or more people, with one independent of the request', points: 10},
      {label: 'One person, but they double-check unusual requests', points: 5},
      {label: 'One person can approve and send without a second check', points: 0},
    ],
  },
  {
    id: 'deepfake_awareness',
    category: 'Deepfake awareness',
    text: 'Has your team been shown real examples of AI voice-clone or deepfake video scams?',
    options: [
      {label: 'Yes, with a live or recorded training session', points: 10},
      {label: 'We have talked about it informally', points: 5},
      {label: 'No, this has never come up', points: 0},
    ],
  },
  {
    id: 'mfa',
    category: 'Multi-factor authentication',
    text: 'Is multi-factor authentication (MFA) required for company email and financial accounts?',
    options: [
      {label: "Yes, required for all company email and financial accounts", points: 10},
      {label: 'Required for some accounts or some employees', points: 5},
      {label: 'Not required, or we are not sure', points: 0},
    ],
  },
  {
    id: 'email_auth',
    category: 'Email authentication (DMARC/SPF/DKIM)',
    text: "Do you know whether SPF, DKIM, and DMARC are configured to help receivers identify unauthorized email using your company domain?",
    options: [
      {label: "Yes, SPF and DKIM are configured, and DMARC requests quarantine or rejection", points: 10},
      {label: 'Some are set up, or we are not fully sure', points: 5},
      {label: 'No, or we do not know what these are', points: 0},
    ],
  },
  {
    id: 'ai_tool_policy',
    category: 'AI tool policy',
    text: 'Do you have a written policy on which AI tools (ChatGPT, Copilot, notetakers, etc.) employees can use and what data they can enter?',
    options: [
      {label: 'Yes, a written policy exists and employees know it', points: 10},
      {label: 'We have informal guidance but nothing written', points: 5},
      {label: "We do not have a policy for staff AI use", points: 0},
    ],
  },
  {
    id: 'training_cadence',
    category: 'Training cadence',
    text: 'How often does your team get security or scam-awareness training?',
    options: [
      {label: 'Ongoing, at least quarterly', points: 10},
      {label: 'Once, when someone was hired, or rarely', points: 5},
      {label: 'Never', points: 0},
    ],
  },
  {
    id: 'vendor_bank_change',
    category: 'Vendor bank-change handling',
    text: 'If a vendor emails to say their bank account changed, what is your process?',
    options: [
      {label: 'We call the vendor directly, using a number we already have on file, to confirm', points: 10},
      {label: 'We might email back to confirm, but that is it', points: 5},
      {label: 'We update our records and pay as instructed', points: 0},
    ],
  },
  {
    id: 'insurance_questionnaire',
    category: 'Cyber insurance questionnaire status',
    text: 'Where do you stand on your cyber insurance security questionnaire (if you have a policy)?',
    options: [
      {label: 'We have completed it and meet the requirements it lists', points: 10},
      {label: 'We have a policy but have not reviewed the questionnaire closely', points: 5},
      {label: 'We do not have cyber coverage or have not looked at this', points: 0},
    ],
  },
  {
    id: 'incident_plan',
    category: 'Incident response plan',
    text: 'If you discovered a fraudulent transfer or compromised email account today, would your team know whom to call and what not to touch?',
    options: [
      {label: 'Yes, we have a written incident plan and know the first steps', points: 10},
      {label: 'Somewhat, we would figure it out', points: 5},
      {label: 'No, we have no plan', points: 0},
    ],
  },
];

type TierKey = 'risk' | 'exposed' | 'prepared';

type Tier = {
  key: TierKey;
  label: string;
  headline: string;
  copy: string;
};

/** Tier thresholds ported verbatim: <=40 At Risk, <=70 Exposed, else Prepared. */
function getTier(score: number): Tier {
  if (score <= 40) {
    return {
      key: 'risk',
      label: 'Fewer practices reported',
      headline: 'Start with the gaps in your answers',
      copy: "Your answers report several missing or uncertain practices. Start with the three priorities below and check the records for each practice before deciding what needs to change. The check has not inspected your systems.",
    };
  }
  if (score <= 70) {
    return {
      key: 'exposed',
      label: 'Mixed practices reported',
      headline: 'Review the exceptions your answers identify',
      copy: "Your answers report a mix of established, partial and uncertain practices. Confirm how the reported processes work and who owns the remaining exceptions. These results are based on your answers, without technical verification.",
    };
  }
  return {
    key: 'prepared',
    label: 'More practices reported',
    headline: 'Confirm and maintain the practices you reported',
    copy: "Your answers report more established practices. Check any gaps first, then confirm that the processes still work as staff, vendors and tools change. A higher answer total does not verify a control or establish protection from compromise.",
  };
}

/** Breakdown flags ported verbatim: 10 = Strong, 5 = Partial, 0 = Gap. */
function flagFor(points: number): {text: string; cls: string} {
  if (points >= 10) return {text: 'Practice reported', cls: 'quiz-flag-good'};
  if (points >= 5) return {text: 'Partial or uncertain', cls: 'quiz-flag-warn'};
  return {text: 'Not reported', cls: 'quiz-flag-bad'};
}

/**
 * AI Scam Readiness Quiz, ported from the static HTML version to a stateful
 * React component. State lives in useState only (no localStorage, no
 * network calls): everything resets on reload, same as the original.
 */
export default function QuizWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() => Array(QUESTIONS.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const contentHeading = useRef<HTMLHeadingElement>(null);
  const hasNavigated = useRef(false);

  useEffect(() => {
    if (hasNavigated.current) contentHeading.current?.focus();
  }, [currentIndex, submitted]);

  const question = QUESTIONS[currentIndex];
  const isLast = currentIndex === QUESTIONS.length - 1;
  const selectedIndex = answers[currentIndex];

  const selectOption = (optIndex: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optIndex;
      return next;
    });
  };

  const goBack = () => {
    if (currentIndex > 0) {
      hasNavigated.current = true;
      setCurrentIndex((i) => i - 1);
    }
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    hasNavigated.current = true;
    if (isLast) {
      setSubmitted(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
  };

  if (submitted) {
    const score = answers.reduce<number>((sum, optIndex, i) => {
      if (optIndex === null) return sum;
      return sum + QUESTIONS[i].options[optIndex].points;
    }, 0);
    const tier = getTier(score);
    const priorities = quizPriorities(QUESTIONS.map((q,i)=>({id:q.id,points:answers[i] === null ? 0 : q.options[answers[i]!].points})));

    return (
      <div className="quiz-root">
        <div className="quiz-card quiz-results">
          <div className="quiz-results-head">
            <div className={`quiz-tier-badge quiz-tier-${tier.key}`}>{tier.label}</div>
            <div className={`quiz-score-circle quiz-score-circle-${tier.key}`}>
              <div className="quiz-score-num">{score}</div>
              <div className="quiz-score-max">answer points / 100</div>
            </div>
            <h2 ref={contentHeading} tabIndex={-1} className="quiz-tier-headline">{tier.headline}</h2>
            <p className="quiz-tier-copy">{tier.copy}</p>
          </div>

          <div className="quiz-recommendation">
            <h3 className="quiz-recommendation-title">Three priorities from your answers</h3>
            <ol>
              {priorities.map(p=>(<li key={p.id}><h4>{p.title}</h4><p>{p.action} <Link to={p.to}>{p.guide}</Link>.</p></li>))}
            </ol>
          </div>

          <div className="quiz-breakdown">
            <h3 className="quiz-breakdown-title">What to review</h3>
            <div className="quiz-breakdown-list">
              {QUESTIONS.map((q, i) => {
                const optIndex = answers[i];
                const points = optIndex === null ? 0 : q.options[optIndex].points;
                const flag = flagFor(points);
                return (
                  <div className="quiz-breakdown-item" key={q.id}>
                    <span className="quiz-breakdown-category">{q.category}</span>
                    <span className={`quiz-flag ${flag.cls}`}>{flag.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="quiz-cta">
            <p className="quiz-cta-intro">
              {bookingCallCopy.sub}
            </p>
            <BookCallLink />
          </div>

          <p className="quiz-fine-print">
            This is a summary of your answers, not a technical audit, certification
            or probability of compromise. No systems or documents were inspected.
          </p>
        </div>
      </div>
    );
  }

  const progressPct = (currentIndex / QUESTIONS.length) * 100;

  return (
    <div className="quiz-root">
      <div className="quiz-card">
        <div className="quiz-progress-label">
          Question {currentIndex + 1} of {QUESTIONS.length}
        </div>
        <div
          className="quiz-progress-track"
          role="progressbar"
          aria-valuenow={Math.round(progressPct)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Quiz progress"
        >
          <div
            className="quiz-progress-fill"
            style={{transform: `scaleX(${progressPct / 100})`}}
          />
        </div>

        <div className="quiz-question">
          <div className="quiz-question-category">{question.category}</div>
          <h2 ref={contentHeading} tabIndex={-1} className="quiz-question-text">{question.text}</h2>
          <div className="quiz-options">
            {question.options.map((opt, optIndex) => (
              <button
                key={opt.label}
                type="button"
                className={`quiz-option-btn${selectedIndex === optIndex ? ' quiz-selected' : ''}`}
                onClick={() => selectOption(optIndex)}
                aria-pressed={selectedIndex === optIndex}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="quiz-nav-row">
          <Button label="Back" variant="secondary" onClick={goBack} isDisabled={currentIndex === 0} />
          <Button
            label={isLast ? 'See my results' : 'Next'}
            variant="primary"
            onClick={goNext}
            isDisabled={selectedIndex === null}
          />
        </div>
      </div>
    </div>
  );
}
