const visualGroups = {
  identity: {
    src: '/images/resources/identity.svg',
    alt: 'Identity and access diagram showing a password, a strong authentication factor, and limited access as three security layers.',
    caption: 'Strong identity controls combine a safer sign-in with access limited to what each person needs.',
  },
  email: {
    src: '/images/resources/email-fraud.svg',
    alt: 'Email and payment fraud diagram showing three steps: inspect the sender, verify outside email, then approve.',
    caption: 'A verification step outside the email thread breaks the path from a convincing message to a bad payment.',
  },
  compliance: {
    src: '/images/resources/compliance.svg',
    alt: 'Compliance readiness diagram showing a requirement connected to a control, evidence, and a prioritized action.',
    caption: 'Readiness work turns requirements into controls, evidence, and owned next actions.',
  },
  resilience: {
    src: '/images/resources/resilience.svg',
    alt: 'Incident readiness diagram showing the sequence detect, contain, and recover.',
    caption: 'A useful security program prepares for detection, containment, and recovery before an incident begins.',
  },
  ai: {
    src: '/images/resources/ai-fraud.svg',
    alt: 'AI-enabled fraud diagram showing three steps: pause, verify identity through another channel, then approve.',
    caption: 'Urgency is a reason to pause and verify identity through a known, separate channel.',
  },
  field: {
    src: '/images/resources/field-security.svg',
    alt: 'Field security diagram showing a work device using a protected connection to reach the office.',
    caption: 'Field security protects the device, the connection, and the route back to company systems.',
  },
} as const;

const groupBySlug: Record<string, keyof typeof visualGroups> = {
  'mfa-methods-compared': 'identity',
  'm365-security-baseline': 'identity',
  'password-managers-small-teams': 'identity',
  'employee-offboarding-checklist': 'identity',
  'law-firm-device-security-checklist': 'field',
  'invoice-fraud-red-flags': 'email',
  'vendor-email-compromise-contractors': 'email',
  'wire-fraud-prevention-law-firms': 'email',
  'what-is-dmarc': 'email',
  'ai-phishing-red-flags': 'ai',
  'deepfake-ceo-fraud': 'ai',
  'shadow-ai-at-work': 'ai',
  'sprs-score-explained': 'compliance',
  'cmmc-level-1-vs-level-2': 'compliance',
  'cmmc-deadline-checklist': 'compliance',
  'hipaa-email-rules-small-practices': 'compliance',
  'hipaa-risk-analysis-medical-practices': 'compliance',
  'wisp-checklist-accounting-firms': 'compliance',
  'ssp-poam-explained': 'compliance',
  'cui-handling-shop-floor': 'compliance',
  'what-a-soc-actually-does': 'resilience',
  'cyber-insurance-claim-denied': 'resilience',
  'cyber-insurance-application-walkthrough': 'resilience',
  'backup-testing-insurers': 'resilience',
  'cyber-insurance-questionnaire': 'resilience',
  'pen-test-vs-vulnerability-scan': 'resilience',
  'incident-response-plan-small-business': 'resilience',
  'job-site-devices-public-wifi': 'field',
};

export default function ArticleVisual({slug}: {slug: string}) {
  const visual = visualGroups[groupBySlug[slug] ?? 'resilience'];

  return (
    <figure className="article-visual">
      <img src={visual.src} alt={visual.alt} width="1200" height="630" loading="lazy" />
      <figcaption>{visual.caption}</figcaption>
    </figure>
  );
}
