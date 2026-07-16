import type {MotifKind} from '../components/ProductMotif';

export type Product = {
  slug: string;
  motif: MotifKind;
  name: string;
  tagline: string;
  desc: string;
  metaDesc: string;
  price: string;
  priceDetail: string;
  features: {title: string; body: string}[];
  how: {num: string; title: string; body: string}[];
  faqs: {q: string; a: string}[];
};

export const productList: Product[] = [
  {
    slug: 'helm-mail',
    motif: 'mail',
    name: 'Helm Mail',
    tagline: 'Email fraud, stopped cold.',
    desc: 'Managed email security and phishing defense for small businesses. We filter what reaches your team, train them on what gets through, and report it all in plain English.',
    metaDesc:
      'Managed email security for small business: phishing, spoofing, and invoice fraud protection from $15/user/month. Deployed in a day on Microsoft 365 or Google Workspace.',
    price: '$15 / user / month',
    priceDetail: 'Deployed on your existing Microsoft 365 or Google Workspace. No hardware, no migration.',
    features: [
      {
        title: 'Managed filtering that actually gets managed',
        body: 'Enterprise-grade email security tuned continuously by us: lookalike domains, spoofed executives, malicious attachments, and payment-fraud patterns blocked before anyone sees them.',
      },
      {
        title: 'Training built for the AI era',
        body: 'Monthly phishing simulations including AI-written lures and deepfake scenarios. Your team learns on realistic fakes, not 2015-era Nigerian-prince examples.',
      },
      {
        title: 'A quarterly report you can hand to your insurer',
        body: 'Blocked threats, click rates, training completion: one page, plain English. Exactly what cyber-insurance carriers and enterprise customers ask to see.',
      },
    ],
    how: [
      {num: '1', title: 'Connect', body: 'Scripted deployment on M365 or Google Workspace, under two hours, no downtime.'},
      {num: '2', title: 'Protect', body: 'Filtering goes live immediately; the first phishing simulation goes out within two weeks.'},
      {num: '3', title: 'Report', body: 'Quarterly plain-English report delivered and walked through with you.'},
    ],
    faqs: [
      {q: 'Do we need to switch email providers?', a: 'No. Helm Mail layers on top of Microsoft 365 or Google Workspace. Nothing about your email addresses or workflow changes.'},
      {q: 'How fast is deployment?', a: 'Under two hours for most businesses, fully scripted, with zero downtime.'},
      {q: 'Is there a minimum seat count?', a: 'No hard minimum: pricing works out best at 10+ seats, but we serve smaller teams too.'},
    ],
  },
  {
    slug: 'helm-aware',
    motif: 'aware',
    name: 'Helm Aware',
    tagline: 'AI scams can’t fool a trained team.',
    desc: 'The AI-scam defense program: shadow-AI audit, acceptable-use policy, deepfake drills, and a payment-verification protocol that stops wire fraud whether the scammer is human or synthetic.',
    metaDesc:
      'AI scam defense for business: deepfake fraud training, shadow-AI audit, and acceptable-use policy. Workshop from $1,500 plus quarterly threat refreshes.',
    price: '$1,500–3,000 workshop + $350 / month',
    priceDetail: 'Fixed-fee workshop to start; monthly subscription keeps training and policies current as threats evolve.',
    features: [
      {
        title: 'Shadow-AI audit',
        body: 'We find out what AI tools your employees actually paste company data into (ChatGPT, meeting notetakers, browser extensions) and show you the exposure in black and white.',
      },
      {
        title: 'Deepfake & voice-clone drills',
        body: 'Live simulation: could your controller tell if that urgent call from the CEO was cloned audio? Your money-movers practice on realistic fakes before a criminal tries a real one.',
      },
      {
        title: 'The controls that actually stop wire fraud',
        body: 'AI acceptable-use policy your insurer will ask for, plus a dead-simple payment-verification protocol, the single control that defeats invoice fraud, AI or not.',
      },
    ],
    how: [
      {num: '1', title: 'Audit', body: 'Shadow-AI discovery across your M365/Google environment, about two hours, mostly automated.'},
      {num: '2', title: 'Train', body: 'Half-day workshop with deepfake drills for executives and everyone who moves money.'},
      {num: '3', title: 'Refresh', body: 'Quarterly 30-minute threat briefings keep your team ahead of the newest scams.'},
    ],
    faqs: [
      {q: 'Is this just a lunch-and-learn?', a: 'No. It ends with deployed controls: a signed acceptable-use policy, a payment-verification protocol in force, and a tested team. Awareness is a byproduct.'},
      {q: 'Do you sell AI tools?', a: 'No. We sell defense against AI-powered scams. Every recommendation is a concrete, deliverable control, no hype.'},
      {q: 'Who should attend the workshop?', a: 'Executives, finance/bookkeeping, and anyone who can approve a payment or change banking details. Typically 5–15 people.'},
    ],
  },
  {
    slug: 'helm-ready',
    motif: 'ready',
    name: 'Helm Ready',
    tagline: 'Pass the questionnaire. Win the contract.',
    desc: 'Fixed-fee compliance readiness: cyber-insurance questionnaires, CMMC/NIST 800-171 gap assessments, and HIPAA controls, remediated, documented, and defended in plain English.',
    metaDesc:
      'Cyber insurance questionnaire help, CMMC gap assessment, and HIPAA readiness for small business. Fixed-fee projects from $2,500: answers your carrier and primes will accept.',
    price: '$2,500–7,500 fixed fee + optional $500–1,500 / month managed',
    priceDetail: 'Scoped and priced before we start. Monthly managed compliance keeps your posture from decaying after the project.',
    features: [
      {
        title: 'Cyber-insurance questionnaire, answered',
        body: 'We answer the 12 hard questions accurately, fix the gaps that would have been "no," and give you documentation that holds up at claim time, when it actually matters.',
      },
      {
        title: 'CMMC / NIST 800-171 gap assessment',
        body: 'All 110 controls scored and prioritized in about two weeks. Remediation sprint follows, then a certified C3PAO partner handles the formal assessment.',
      },
      {
        title: 'HIPAA for practices without an IT department',
        body: 'Security-rule controls with documented evidence, sized for dental and medical offices: the same obligations as a hospital, without the hospital budget.',
      },
    ],
    how: [
      {num: '1', title: 'Assess', body: 'Gap assessment against your target framework: scored, prioritized, plain English.'},
      {num: '2', title: 'Remediate', body: 'We close the gaps: policies, technical controls, evidence collection.'},
      {num: '3', title: 'Maintain', body: 'Optional monthly management so next year’s renewal or audit is a non-event.'},
    ],
    faqs: [
      {q: 'Can you certify us for CMMC?', a: 'Certification is performed by independent C3PAOs; anyone who says otherwise is misleading you. We get you assessment-ready and hand you to a certified partner.'},
      {q: 'What does fixed-fee mean?', a: 'One price, agreed before work starts, based on your size and target framework. No hourly meters, no surprise invoices.'},
      {q: 'Our insurer denied a claim before. Can you help?', a: 'That is exactly the failure mode we prevent: answers on the questionnaire that don’t match reality. We make your answers true, then document the proof.'},
    ],
  },
];
