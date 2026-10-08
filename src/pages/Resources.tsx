import HeroBackdrop from '../components/HeroBackdrop';
import {Link} from 'react-router-dom';
import {canonicalPath} from '../lib/urls';
import {Band, CtaBand, DirectionIcon, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {articleCatalog as articles} from './articleCatalog';
type Article = (typeof articles)[number];
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
    description: 'Check the Microsoft 365 security settings your team needs.',
    slug: 'm365-security-baseline',
  },
  {
    title: 'Verify payment changes',
    description: 'Know what to check before accepting changed bank details.',
    slug: 'invoice-fraud-red-flags',
  },
  {
    title: 'Answer an insurer or customer',
    description: 'Work through security questions without guessing.',
    slug: 'cyber-insurance-questionnaire',
  },
  {
    title: 'Understand CMMC requirements',
    description: 'Check which CMMC level your defense contract requires.',
    slug: 'cmmc-level-1-vs-level-2',
  },
  {
    title: 'Plan a HIPAA risk analysis',
    description: 'Understand the security work a medical or dental practice needs to document.',
    slug: 'hipaa-risk-analysis-medical-practices',
  },
];

const guideGroups: GuideGroup[] = [
  {
    id: 'choose-security-partner',
    title: 'Choose a security provider and service model',
    description: 'Compare what each option covers, who handles the work, and what evidence you can expect.',
    slugs: [
      'managed-service-providers-new-jersey',
      'managed-service-provider-security-models',
      'cybersecurity-point-solutions-vs-managed-security',
      'cyber-insurance-cybersecurity-vendors',
      'email-security-gateway-managed-service',
      'managed-awareness-training-vs-diy',
      'iam-security-core-vs-command',
      'email-security-services-evaluation',
      'siem-software-managed-detection',
      'law-firm-managed-vs-in-house-security',
      'virtual-ciso-service-evaluation',
      'digital-risk-protection-services',
      'accounting-firms-core-vs-command',
      'google-workspace-security-managed-vs-diy',
      'managed-identity-threat-response',
    ],
  },
  {
    id: 'secure-everyday-work',
    title: 'Secure everyday accounts and devices',
    description: 'Protect email and devices, manage account access, and check how your team uses AI.',
    slugs: [
      'mfa-methods-compared',
      'dns-filtering-small-business',
      'network-hardening-small-business',
      'password-managers-small-teams',
      'what-a-soc-actually-does',
      'shadow-ai-at-work',
      'ai-phishing-red-flags',
      'job-site-devices-public-wifi',
      'employee-offboarding-checklist',
      'law-firm-device-security-checklist',
      'pen-test-vs-vulnerability-scan',
      'what-is-dmarc',
      'outlook-email-encryption-options',
      'managed-endpoint-protection-rollout',
      'zero-day-vs-known-vulnerabilities',
      'vulnerability-management-new-jersey',
      'check-website-security',
      'windows-defender-vs-managed-security',
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
      'intentional-insider-threats',
    ],
  },
  {
    id: 'prove-readiness',
    title: 'Prepare evidence for an insurer or customer',
    description: 'Prepare accurate answers and evidence for applications, renewals, questionnaires, and backup reviews.',
    slugs: [
      'cyber-insurance-claim-denied',
      'cyber-insurance-application-walkthrough',
      'backup-testing-insurers',
      'disaster-recovery-small-business',
      'wisp-checklist-accounting-firms',
      'cybersecurity-risk-assessment-tools',
      'microsoft-365-retention-vs-backup',
      'security-questionnaire-response-services',
      'google-workspace-retention-vs-backup',
      'cybersecurity-roadmap-milestones',
    ],
  },
  {
    id: 'evaluate-ai-workflows',
    title: 'Evaluate an internal AI workflow',
    description: 'Choose a task, check document access, and measure the work needed to produce an acceptable result.',
    slugs: [
      'choose-first-ai-workflow',
      'ai-access-business-documents',
      'measure-ai-time-savings',
    ],
  },
  {
    id: 'cmmc-and-hipaa',
    title: 'Work through CMMC and HIPAA requirements',
    description: 'Understand deadlines, security scores and required documents. Check the rules for handling regulated information.',
    slugs: [
      'sprs-score-explained',
      'hipaa-email-rules-small-practices',
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
            Start with the problem you need to solve.
          </h1>
          <p className="sub reveal d2">
            These guides explain what can go wrong, how security measures help,
            and what to do next without assuming you have a security team.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <div className="resources-index">
          <section className="resources-start" aria-labelledby="resources-start-title">
            <div className="resources-section-head">
              <h2 id="resources-start-title">What brought you here?</h2>
              <p>Choose the closest problem and start with one practical guide.</p>
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
                    <div className="resources-start-copy">
                      <h3>{choice.title}</h3>
                      <span>{choice.description}</span>
                    </div>
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
              <h2 id="resources-quiz-title">AI scam readiness quiz</h2>
              <p>Answer 10 questions and get a score and a list of gaps to address. No email address is required to see the result.</p>
            </div>
            <Link to="/quiz/" className="resource-feature-link">
              Take the 3-minute quiz <DirectionIcon />
            </Link>
          </aside>

          <section className="resources-library" aria-labelledby="resources-library-title">
            <div className="resources-section-head">
              <h2 id="resources-library-title">Browse every guide.</h2>
              <p>Choose what you need to protect, document, or prepare for.</p>
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
        title="Check your domain's public security settings."
        sub="The free email security scan checks public domain configuration and returns a plain-English report, usually in about a minute."
        source="resources cta"
      />
    </>
  );
}
