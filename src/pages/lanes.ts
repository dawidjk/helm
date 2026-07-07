import type {Lane} from './LanePage';

export const manufacturing: Lane = {
  slug: 'manufacturing',
  backdrop: 'aero',
  reportDomain: 'precision-mfg.com',
  metaTitle: 'CMMC Compliance for NJ Manufacturers & Defense Suppliers | Helm',
  metaDesc:
    'CMMC Level 1 & 2 gap assessments for New Jersey manufacturers and defense subcontractors. Fixed fee, assessment-ready in weeks — ahead of the Nov 10, 2026 enforcement deadline.',
  eyebrow: 'NJ Manufacturers · Defense Suppliers',
  headline: 'CMMC certified, before your competitors are.',
  sub: 'CMMC Phase 2 enforcement starts November 10, 2026 — and fewer than 2% of the ~80,000 companies in the defense supply chain are certified. Assessors are booked 3–6 months out. If you supply a prime, the clock is already running.',
  primaryCta: 'Book a CMMC gap assessment',
  pains: [
    {
      title: 'Lose the contract, lose the shop',
      body: 'Primes are already flowing CMMC requirements down to subs. No certification means you can be dropped from bids you have won for years.',
    },
    {
      title: 'The assessor backlog is real',
      body: 'Certified assessors are scheduling months out. Companies that start after the deadline hits will wait at the back of the line while orders go elsewhere.',
    },
    {
      title: 'DIY compliance burns the year',
      body: 'NIST 800-171 has 110 controls. Interpreting them internally costs engineering time you need on the floor — and gets rejected when done wrong.',
    },
  ],
  planTitle: 'Weeks to ready. Not quarters.',
  planSub: 'A fixed-fee path from "no idea where we stand" to assessment-ready.',
  steps: [
    {
      num: '1',
      title: 'Gap assessment',
      body: 'We map your environment against all 110 NIST 800-171 controls and hand you a scored, prioritized gap report in plain English. Fixed fee, ~2 weeks.',
    },
    {
      num: '2',
      title: 'Remediation sprint',
      body: 'We fix the gaps — policies, technical controls, evidence collection — with your team in the loop, not on the hook.',
    },
    {
      num: '3',
      title: 'Certification & upkeep',
      body: 'We hand you to a certified assessor (C3PAO) ready to pass, then keep your score maintained monthly so recertification is a non-event.',
    },
  ],
  proof: {
    title: 'Built for the defense supply chain.',
    points: [
      'CMMC Level 1 & 2 gap assessments against NIST 800-171',
      'SPRS score calculation and submission support',
      'Partnered with certified C3PAOs for the formal assessment',
      'Monthly managed compliance so the score never decays',
      'Fixed-fee pricing — no open-ended consulting meters',
    ],
  },
  cta: {
    title: 'Where do you stand on all 110 controls?',
    sub: 'Get a free 30-minute readiness call and leave with your three biggest gaps identified — before an assessor or a prime finds them for you.',
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
  sub: 'Wire fraud, HIPAA exposure, and cyber-insurance questionnaires now decide which firms clients and carriers trust. One spoofed email can move client money — and no malpractice policy covers the reputation.',
  primaryCta: 'Get a free email security assessment',
  pains: [
    {
      title: 'Wire fraud targets your inbox',
      body: 'Attackers impersonate partners and title companies to redirect closings, settlements, and tax payments. Firms have lost six figures on a single email.',
    },
    {
      title: 'Your carrier is asking harder questions',
      body: 'Cyber-insurance renewals now demand MFA, email security, and training — answer wrong and premiums spike or coverage vanishes when you need it.',
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
      body: 'Managed email security stops the spoofed-partner wire request before anyone sees it, plus training that keeps staff sharp against AI-written scams.',
    },
    {
      num: '2',
      title: 'Helm Aware',
      body: 'Deepfake and AI-scam drills for the people who move money — could your bookkeeper tell if that call from a partner was cloned audio?',
    },
    {
      num: '3',
      title: 'Helm Ready',
      body: 'We answer your cyber-insurance questionnaire, remediate the gaps, and build HIPAA-ready controls — fixed fee, audit-ready evidence.',
    },
  ],
  proof: {
    title: 'What your carrier and your clients see.',
    points: [
      'Verified payment-instruction protocol that stops wire redirects',
      'Cyber-insurance questionnaire answered and defensible',
      'HIPAA security-rule controls with documented evidence',
      'Quarterly report you can show clients and partners',
      'Per-seat pricing — a 12-person firm pays like a 12-person firm',
    ],
  },
  cta: {
    title: 'Would your firm catch the fake wire request?',
    sub: 'Free automated scan of your email domain shows exactly how easily you can be impersonated — plain-English report in 24 hours.',
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
  sub: 'Payment fraud is the #1 cyber threat to contractors: spoofed supplier invoices, hijacked payment instructions, and fake GC emails. Meanwhile GCs and insurers increasingly require proof of security before you can bid or bind coverage.',
  primaryCta: 'Get a free fraud-exposure check',
  pains: [
    {
      title: 'Supplier invoice fraud',
      body: 'Attackers watch a real email thread, then send a "updated bank details" note from a lookalike domain. The money leaves and doesn’t come back.',
    },
    {
      title: 'GCs now require security',
      body: 'Bigger general contractors are pushing cyber requirements down to subs — no proof, no bid. It’s becoming as standard as insurance certs.',
    },
    {
      title: 'Field teams, office risk',
      body: 'Estimators and office managers approve payments from phones and job sites — exactly where phishing works best.',
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
      body: 'A dead-simple callback protocol for changed bank details — the single control that defeats invoice fraud, AI or not.',
    },
    {
      num: '3',
      title: 'Prove it to GCs & insurers',
      body: 'A one-page security attestation you can hand to any GC or carrier, backed by real controls we maintain monthly.',
    },
  ],
  proof: {
    title: 'Built for how the trades actually run.',
    points: [
      'Works with the email you already have — Microsoft 365 or Google',
      'Nothing for field crews to install or learn',
      'Payment-verification protocol in one laminated page',
      'Monthly flat pricing that scales with office headcount, not trucks',
      'Proof-of-security docs for GC prequalification packets',
    ],
  },
  cta: {
    title: 'How exposed is your payment chain?',
    sub: 'Free scan shows whether scammers can impersonate your company to your GCs and suppliers — report in 24 hours.',
    label: 'Run the free check',
  },
};
