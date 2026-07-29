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
      title: 'Lose the contract, lose the shop',
      body: 'Primes are already flowing CMMC requirements down to subs. No certification means you can be dropped from bids you have won for years.',
    },
    {
      title: 'A wrong score is False Claims Act exposure',
      body: 'Primes can see your SPRS score, and your Affirming Official signs the annual affirmation personally. During the suspension the Department says it will enforce NIST 800-171 through self-assessments and selected government-led assessments, which is not a softer review than a C3PAO would have run.',
    },
    {
      title: 'DIY compliance burns the year',
      body: 'NIST 800-171 has 110 controls. Interpreting them internally costs engineering time you need on the floor, and gets rejected when done wrong.',
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
  metaTitle: 'Cybersecurity for Law Firms, CPAs & Medical Practices | Helm',
  metaDesc:
    'Wire fraud defense, HIPAA readiness, and cyber-insurance questionnaire remediation for law firms, accounting firms, and dental/medical practices. Per-seat pricing, plain English.',
  eyebrow: 'Law · CPA · Dental & Medical',
  headline: 'Your clients trust you with everything. Keep it that way.',
  sub: 'Wire fraud, HIPAA exposure, and cyber-insurance questionnaires now decide which firms clients and carriers trust. One spoofed email can move client money, and no malpractice policy covers the reputation.',
  primaryCta: 'Get a free email security assessment',
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
      title: 'HIPAA fines don’t care about size',
      body: 'Dental and medical practices carry the same breach-notification duties as hospital systems, with none of the security staff.',
    },
  ],
  planTitle: 'Protection that fits a practice.',
  planSub: 'Managed for you. Priced per seat. Explained in English.',
  steps: [
    {
      num: '1',
      title: 'Helm Mail',
      body: 'Managed MailProtector filtering for compatible Microsoft 365 tenants, configured and reviewed by Helm.',
    },
    {
      num: '2',
      title: 'Helm Aware',
      body: 'A fixed-fee workshop for the people who move money: live scam training, an AI-use policy, and a payment-verification protocol. Any executive drill is scoped separately.',
    },
    {
      num: '3',
      title: 'Helm Ready',
      body: 'A fixed-fee assessment for cyber-insurance, client questionnaires, or HIPAA readiness. Any remediation follows under a separate written scope.',
    },
  ],
  proof: {
    title: 'What your carrier and your clients see.',
    points: [
      'Payment-instruction protocol designed to prevent unverified changes',
      'Questionnaire answers tied to actual evidence',
      'HIPAA Security Rule gaps documented and prioritized',
      'Published scope and pricing before work begins',
      'Founder-led delivery with clear vendor attribution',
    ],
  },
  cta: {
    title: 'Would your firm catch the fake wire request?',
    sub: 'Free automated scan of your email domain shows exactly how easily you can be impersonated: plain-English report in about a minute.',
    label: 'Run the free scan',
  },
};

export const contractors: Lane = {
  slug: 'contractors',
  backdrop: 'construction',
  reportDomain: 'summitbuilders.com',
  metaTitle: 'Payment Fraud Protection for Contractors & Trades | Helm',
  metaDesc:
    'Stop fake invoices and hijacked payment instructions. Email fraud protection and GC-ready security attestations built for contractors, subs, and field-service businesses.',
  eyebrow: 'Contractors · Trades · Field Services',
  headline: 'One fake invoice can wipe out a job’s profit.',
  sub: 'Spoofed supplier invoices, hijacked payment instructions, and fake GC emails can turn routine payment changes into expensive mistakes. Some GCs and insurers also ask subcontractors to document basic security controls.',
  primaryCta: 'Get a free fraud-exposure check',
  pains: [
    {
      title: 'Supplier invoice fraud',
      body: 'Attackers watch a real email thread, then send an "updated bank details" note from a lookalike domain. The money leaves and doesn’t come back.',
    },
    {
      title: 'GCs now require security',
      body: 'Some general contractors and insurers ask subcontractors to document email, payment, access, or incident controls. It is better to know what you can support before the form arrives.',
    },
    {
      title: 'Field teams, office risk',
      body: 'Estimators and office managers approve payments from phones and job sites, exactly where phishing works best.',
    },
  ],
  planTitle: 'Simple controls that stop real losses.',
  planSub: 'No IT department needed. We run it; you build.',
  steps: [
    {
      num: '1',
      title: 'Lock the inbox',
      body: 'Helm Mail blocks lookalike-domain and spoofed-invoice email before your office manager ever sees it.',
    },
    {
      num: '2',
      title: 'Verify every payment change',
      body: 'A dead-simple callback protocol for changed bank details: the single control that defeats invoice fraud, AI or not.',
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
      'Helm Mail for compatible Microsoft 365 tenants',
      'Payment-verification protocol customized to your approval process',
      'Endpoint protection scoped to the actual covered fleet',
      'Published pricing and account minimums',
      'Readiness evidence sized to the questionnaire in front of you',
    ],
  },
  cta: {
    title: 'How exposed is your payment chain?',
    sub: 'Free scan shows whether scammers can impersonate your company to your GCs and suppliers: report in about a minute.',
    label: 'Run the free check',
  },
};
