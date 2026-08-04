import type {Lane} from './LanePage';

export const manufacturing: Lane = {
  slug: 'manufacturing',
  backdrop: 'aero',
  reportDomain: 'precision-mfg.com',
  metaTitle: 'CMMC Compliance for NJ Manufacturers & Defense Suppliers | Helm',
  metaDesc:
    'Fixed-fee CMMC Level 1 and Level 2 gap assessments for New Jersey manufacturers and defense subcontractors, scored against applicable NIST 800-171 requirements.',
  eyebrow: 'NJ Manufacturers · Defense Suppliers',
  headline: 'The deadline moved. The requirement did not.',
  sub: 'Third-party CMMC certification was suspended on July 13, 2026. Level 1 and Level 2 self-assessment were not, and neither were your SPRS score, your Affirming Official\'s annual affirmation, or DFARS 72-hour incident reporting. Same 110 NIST 800-171 requirements, now enforced through self-assessments and selected government-led assessments.',
  primaryCta: 'Book a CMMC gap assessment',
  ctaMode: 'book',
  statusChip: 'Phase 2 certification suspended July 2026 · self-assessment still in force',
  pains: [
    {
      title: 'Know what the contract requires',
      body: 'Cybersecurity requirements can appear in solicitations and contract clauses. Before you bid or affirm, know which requirement applies and whether your current evidence supports it.',
    },
    {
      title: 'Your score and affirmation need support',
      body: 'An SPRS score and annual affirmation should be tied to current evidence. A gap assessment separates what is implemented, what still needs proof, and what belongs in a remediation plan.',
    },
    {
      title: 'Internal review still takes real time',
      body: 'NIST 800-171 has 110 controls. Interpreting them across systems, policies, and evidence takes focused technical and business time. A gap assessment shows where that work is before you fund it.',
    },
  ],
  planTitle: 'Know the gap before you fund the fix.',
  planSub: 'A fixed-fee assessment with scored findings, evidence needs, and a prioritized roadmap.',
  steps: [
    {
      num: '1',
      title: 'Gap assessment',
      body: 'We map the agreed scope against the applicable requirements and deliver a scored, prioritized gap report in plain English.',
    },
    {
      num: '2',
      title: 'Separate remediation scope',
      body: 'After the gaps are known, you decide what to handle internally and what to scope separately with Helm or another provider.',
    },
    {
      num: '3',
      title: 'Independent assessment when required',
      body: 'If a contract calls for formal certification, the assessment remains separate from Helm\'s preparation and remediation work.',
    },
  ],
  proof: {
    title: 'Built for the defense supply chain.',
    points: [
      'CMMC Level 1 & 2 gap assessments against NIST 800-171',
      'SPRS score calculation and submission support',
      'Scored findings and a prioritized remediation roadmap',
      'Preparation kept separate from any formal assessor',
      'Fixed-fee assessment, with remediation scoped only after the gaps are known',
    ],
  },
  resources: [
    {slug: 'cmmc-deadline-checklist', title: 'CMMC Deadline Checklist for Small Defense Contractors', note: 'Current requirements'},
    {slug: 'sprs-score-explained', title: 'SPRS Scores Explained', note: 'Scoring and evidence'},
    {slug: 'cmmc-level-1-vs-level-2', title: 'CMMC Level 1 vs. Level 2', note: 'Choose the right scope'},
  ],
  cta: {
    title: 'Where do you stand on all 110 controls?',
    sub: 'Use a free 30-minute readiness call to clarify which requirement applies, what evidence to gather, and whether a fixed-fee assessment is the right next step.',
    label: 'Book the readiness call',
  },
};

export const professionalServices: Lane = {
  slug: 'professional-services',
  backdrop: 'skyline',
  reportDomain: 'riveralaw.com',
  metaTitle: 'Cybersecurity for New Jersey Law Firms & CPAs | Helm',
  metaDesc:
    'Email impersonation checks, wire-fraud controls, and questionnaire readiness for New Jersey law and CPA firms. Start with a free domain scan.',
  eyebrow: 'New Jersey Law Firms · CPA Firms',
  headline: 'Your clients trust you with everything. Keep it that way.',
  sub: 'Wire fraud, sensitive client records, and security questionnaires shape which firms clients and carriers trust. One spoofed email can redirect client money or expose a confidential matter.',
  primaryCta: 'Get my free scan',
  pains: [
    {
      title: 'Wire fraud targets your inbox',
      body: 'Attackers impersonate partners and title companies to redirect closings, settlements, and tax payments. One convincing message can turn a routine payment into a recovery and liability problem.',
    },
    {
      title: 'Your carrier is asking harder questions',
      body: 'Cyber-insurance forms commonly ask about controls such as MFA, email authentication, staff readiness, and incident response. An answer should be accurate and supported, not guessed.',
    },
    {
      title: 'Client questionnaires need evidence',
      body: 'A client may ask how you protect email, payments, access, or incidents. A defensible answer is tied to a control and a record, not a guess made before a deadline.',
    },
  ],
  planTitle: 'Protection that fits a practice.',
  planSub: 'Managed for you. Priced per seat. Explained in English.',
  steps: [
    {
      num: '1',
      title: 'Helm Mail',
      body: 'Managed MailProtector filtering for Microsoft 365, Google Workspace, and other business email providers, configured and reviewed by Helm.',
    },
    {
      num: '2',
      title: 'Helm Aware',
      body: 'Managed monthly learning and phishing for the whole team, with a separate fixed-fee workshop when payment approvers also need an AI-use policy and payment-verification protocol.',
    },
    {
      num: '3',
      title: 'Helm Ready',
      body: 'A fixed-fee assessment for cyber-insurance or client-questionnaire readiness. Any remediation follows under a separate written scope.',
    },
  ],
  proof: {
    title: 'What your carrier and your clients see.',
    points: [
      'Payment-instruction protocol designed to prevent unverified changes',
      'Questionnaire answers tied to documented controls and evidence',
      'Published scope and pricing before work begins',
      'Direct leadership involvement with clear vendor attribution',
    ],
  },
  resources: [
    {slug: 'wire-fraud-prevention-law-firms', title: 'Wire-Fraud Prevention for Law Firms', note: 'Payment controls'},
    {slug: 'cyber-insurance-questionnaire', title: 'Cyber-Insurance Questionnaire Checklist', note: 'Prepare your evidence'},
    {slug: 'ai-phishing-red-flags', title: 'AI Phishing Red Flags', note: 'Train the team'},
  ],
  cta: {
    title: 'Would your firm catch the fake wire request?',
    sub: 'A free automated scan shows whether your public email controls make impersonation easier: plain-English report, usually in about a minute.',
    label: 'Run the free scan',
  },
};

export const contractors: Lane = {
  slug: 'contractors',
  backdrop: 'construction',
  reportDomain: 'summitbuilders.com',
  metaTitle: 'Payment Fraud Protection for Contractors & Trades | Helm',
  metaDesc:
    'Reduce exposure to fake invoices and hijacked payment instructions. Practical email, payment-verification, and readiness support for contractors and trades.',
  eyebrow: 'Contractors · Trades · Field Services',
  headline: 'One fake invoice can wipe out a job’s profit.',
  sub: 'Spoofed supplier invoices, hijacked payment instructions, and fake GC emails can turn routine payment changes into expensive mistakes. Some GCs and insurers also ask subcontractors to document basic security controls.',
  primaryCta: 'Get my free scan',
  pains: [
    {
      title: 'Supplier invoice fraud',
      body: 'Attackers can imitate a supplier or compromise a real thread, then send changed bank details. Once a transfer is sent, recovery can be difficult and time-sensitive.',
    },
    {
      title: 'GCs now require security',
      body: 'Some general contractors and insurers ask subcontractors to document email, payment, access, or incident controls. It is better to know what you can support before the form arrives.',
    },
    {
      title: 'Field teams, office risk',
      body: 'Estimators and office managers may review payment requests from phones and job sites, where context switching can make a changed instruction harder to verify.',
    },
  ],
  planTitle: 'Simple controls that reduce payment risk.',
  planSub: 'Clear responsibilities for the inbox, payment changes, and the evidence a customer or insurer requests.',
  steps: [
    {
      num: '1',
      title: 'Lock the inbox',
      body: 'Helm Mail adds managed filtering for Microsoft 365, Google Workspace, and other business email providers, with configuration and review handled by Helm.',
    },
    {
      num: '2',
      title: 'Verify every payment change',
      body: 'A written callback protocol adds an out-of-band check before changed bank details are approved, even when the request looks convincing.',
    },
    {
      num: '3',
      title: 'Prove it to GCs & insurers',
      body: 'Helm Ready documents the controls you actually have and identifies unsupported answers before they reach a GC or carrier.',
    },
  ],
  proof: {
    title: 'Built for how the trades actually run.',
    points: [
      'Helm Mail for Microsoft 365, Google Workspace, and other business email providers',
      'Payment-verification protocol customized to your approval process',
      'Endpoint protection scoped to the actual covered fleet',
      'Published pricing and account minimums',
      'Readiness evidence sized to the questionnaire in front of you',
    ],
  },
  resources: [
    {slug: 'vendor-email-compromise-contractors', title: 'Vendor Email Compromise for Contractors', note: 'Protect the payment chain'},
    {slug: 'invoice-fraud-red-flags', title: 'Invoice-Fraud Red Flags', note: 'Verify changes'},
    {slug: 'job-site-devices-public-wifi', title: 'Job-Site Devices and Public Wi-Fi', note: 'Reduce field risk'},
  ],
  cta: {
    title: 'How exposed is your payment chain?',
    sub: 'A free scan checks the public email controls involved in impersonation: plain-English report, usually in about a minute.',
    label: 'Run the free scan',
  },
};
