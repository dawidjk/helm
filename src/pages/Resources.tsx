import HeroBackdrop from '../components/HeroBackdrop';
import {Link} from 'react-router-dom';
import {canonicalPath} from '../lib/urls';
import {Band, CtaBand, DirectionIcon, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {articles, type Article} from './articles';
import './Resources.css';

type StartChoice = {
  title: string;
  description: string;
  slug: string;
};

type GuideGroup = {
  id: string;
  title: string;
  description: string;
  slugs: string[];
};

const startChoices: StartChoice[] = [
  {
    title: 'Protect email and accounts',
    description: 'Set a practical Microsoft 365 security baseline.',
    slug: 'm365-security-baseline',
  },
  {
    title: 'Stop payment fraud',
    description: 'Know what to check before accepting changed bank details.',
    slug: 'invoice-fraud-red-flags',
  },
  {
    title: 'Answer an insurer or customer',
    description: 'Work through security questions without guessing.',
    slug: 'cyber-insurance-questionnaire',
  },
  {
    title: 'Meet CMMC or HIPAA requirements',
    description: 'Start with the requirement that applies to your business.',
    slug: 'cmmc-level-1-vs-level-2',
  },
];

const guideGroups: GuideGroup[] = [
  {
    id: 'secure-everyday-work',
    title: 'Secure everyday accounts and devices',
    description: 'Email, identity, device security, AI-use, and access decisions for the systems your team uses every day.',
    slugs: [
      'mfa-methods-compared',
      'password-managers-small-teams',
      'what-a-soc-actually-does',
      'shadow-ai-at-work',
      'ai-phishing-red-flags',
      'job-site-devices-public-wifi',
      'employee-offboarding-checklist',
      'law-firm-device-security-checklist',
      'pen-test-vs-vulnerability-scan',
      'what-is-dmarc',
    ],
  },
  {
    id: 'prevent-and-respond-to-fraud',
    title: 'Prevent fraud and respond when something happens',
    description: 'Practical checks and response steps for vendor email compromise, wire fraud, ransomware, and deepfakes.',
    slugs: [
      'vendor-email-compromise-contractors',
      'wire-fraud-prevention-law-firms',
      'incident-response-plan-small-business',
      'deepfake-ceo-fraud',
    ],
  },
  {
    id: 'prove-readiness',
    title: 'Prove readiness to an insurer or customer',
    description: 'Prepare accurate answers and evidence for applications, renewals, questionnaires, and backup reviews.',
    slugs: [
      'cyber-insurance-claim-denied',
      'cyber-insurance-application-walkthrough',
      'backup-testing-insurers',
      'wisp-checklist-accounting-firms',
    ],
  },
  {
    id: 'cmmc-and-hipaa',
    title: 'Work through CMMC and HIPAA requirements',
    description: 'Understand the deadlines, scores, documents, and handling rules behind the requirement in front of you.',
    slugs: [
      'sprs-score-explained',
      'hipaa-email-rules-small-practices',
      'hipaa-risk-analysis-medical-practices',
      'cmmc-deadline-checklist',
      'ssp-poam-explained',
      'cui-handling-shop-floor',
    ],
  },
];

const articlesBySlug = new Map(articles.map((article) => [article.slug, article]));

function articleFor(slug: string): Article {
  const article = articlesBySlug.get(slug);
  if (!article) throw new Error(`Unknown resource article: ${slug}`);
  return article;
}

const listedSlugs = [
  ...startChoices.map((choice) => choice.slug),
  ...guideGroups.flatMap((group) => group.slugs),
];

if (import.meta.env.DEV) {
  const uniqueSlugs = new Set(listedSlugs);
  if (uniqueSlugs.size !== listedSlugs.length || uniqueSlugs.size !== articles.length) {
    throw new Error('Resources decision groups must include every article exactly once.');
  }
}

function GuideLink({article, className}: {article: Article; className: string}) {
  return (
    <Link to={canonicalPath(`/resources/${article.slug}`)} className={className}>
      <span className="resources-guide-copy">
        <span className="resources-guide-title">{article.title}</span>
        <span className="resources-guide-lane">{article.lane}</span>
      </span>
      <span className="resources-guide-side">
        <span>{article.readMin} min read</span>
        <DirectionIcon />
      </span>
    </Link>
  );
}

export default function Resources() {
  return (
    <>
      <Meta
        title="Resources: Plain-English Security Guides | Helm"
        desc="Plain-English guides on CMMC, cyber insurance, wire fraud, DMARC, and AI scams for small and medium-sized business owners and managers."
        path="/resources"
      />
      <header className="hero lane brand-hero resources-hero">
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
        <div className="resources-index">
          <section className="resources-start" aria-labelledby="resources-start-title">
            <div className="resources-section-head">
              <h2 id="resources-start-title">Start with the decision in front of you.</h2>
              <p>Choose the closest task. Each path begins with one practical guide.</p>
            </div>
            <div className="resources-start-list">
              {startChoices.map((choice) => {
                const article = articleFor(choice.slug);
                return (
                  <Link
                    key={choice.slug}
                    to={canonicalPath(`/resources/${article.slug}`)}
                    className="resources-start-link"
                  >
                    <span className="resources-start-copy">
                      <h3>{choice.title}</h3>
                      <span>{choice.description}</span>
                    </span>
                    <span className="resources-start-side">
                      <span>{article.readMin} min read</span>
                      <DirectionIcon />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          <aside className="resource-feature" aria-labelledby="resources-quiz-title">
            <div>
              <h2 id="resources-quiz-title">AI Scam Readiness Quiz</h2>
              <p>Answer 10 questions and get a score plus a prioritized action plan. No email address is required to see the result.</p>
            </div>
            <Link to="/quiz/" className="resource-feature-link">
              Take the 3-minute quiz <DirectionIcon />
            </Link>
          </aside>

          <section className="resources-library" aria-labelledby="resources-library-title">
            <div className="resources-section-head">
              <h2 id="resources-library-title">Browse the full guide library.</h2>
              <p>Open the task that matches what you need to protect, prove, or prepare for.</p>
            </div>
            <div className="resources-groups">
              {guideGroups.map((group) => (
                <section className="resources-group" key={group.id} aria-labelledby={`${group.id}-title`}>
                  <div className="resources-group-intro">
                    <h3 id={`${group.id}-title`}>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                  <details>
                    <summary>
                      <span>Browse {group.slugs.length} guides</span>
                      <DirectionIcon className="resources-group-arrow" />
                    </summary>
                    <div className="resources-group-links">
                      {group.slugs.map((slug) => (
                        <GuideLink key={slug} article={articleFor(slug)} className="resources-guide-link" />
                      ))}
                    </div>
                  </details>
                </section>
              ))}
            </div>
          </section>
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
