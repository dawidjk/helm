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
  /**
   * 'scan' (default) sends the reader to the free domain scan CTA.
   * 'book' sends the reader straight to booking a call instead, for
   * consultative offers (a workshop or a fixed-fee project) where an
   * automated scan is the wrong next step.
   */
  ctaMode?: 'scan' | 'book';
};

export const productList: Product[] = [
  {
    slug: 'helm-mail',
    motif: 'mail',
    name: 'Helm Mail',
    tagline: 'Email fraud, stopped cold.',
    desc: 'Managed email security for small businesses on Microsoft 365. We configure and monitor the filtering layer, help your team handle suspicious messages, and report the result in plain English.',
    metaDesc:
      'Managed email security for small business on Microsoft 365: phishing, spoofing, and invoice fraud protection from $15/user/month.',
    price: '$15 / user / month',
    priceDetail: '$300 monthly account minimum. Microsoft 365 only at launch. Setup and ongoing management included.',
    features: [
      {
        title: 'Managed filtering that actually gets managed',
        body: 'MailProtector filtering configured and reviewed by Helm for phishing, spoofing, malicious attachments, and payment-fraud patterns.',
      },
      {
        title: 'A real escalation path',
        body: 'Your team has somewhere to send a suspicious message and gets a plain-English answer instead of another dashboard to interpret.',
      },
      {
        title: 'Plain-English quarterly review',
        body: 'Filtering activity, notable events, and recommended changes summarized in a format useful for management, insurance renewals, and customer diligence.',
      },
    ],
    how: [
      {num: '1', title: 'Qualify', body: 'We confirm your Microsoft 365 tenant is compatible and agree on a deployment window and rollback plan.'},
      {num: '2', title: 'Protect', body: 'MailProtector filtering is deployed and verified without changing your addresses or migrating mailboxes.'},
      {num: '3', title: 'Report', body: 'Quarterly plain-English report delivered and walked through with you.'},
    ],
    faqs: [
      {q: 'Do we need to switch email providers?', a: 'No. Helm Mail layers on top of a compatible Microsoft 365 tenant. Nothing about your email addresses or daily workflow changes.'},
      {q: 'Do you support Google Workspace?', a: 'Not at launch. MailProtector is developing its Google Workspace offering, but we will not sell that deployment until the product and our rollout process are ready.'},
      {q: 'Is there a minimum seat count?', a: 'There is no hard seat minimum, but there is a $300 monthly account minimum because the managed filtering platform carries an account-level cost.'},
    ],
  },
  {
    slug: 'helm-aware',
    ctaMode: 'book',
    motif: 'aware',
    name: 'Helm Aware',
    tagline: 'Make the scam fail at the process.',
    desc: 'A fixed-scope AI scam readiness workshop: shadow-AI review, an acceptable-use policy, live staff training, and a payment-verification protocol that works even when the voice or video looks real.',
    metaDesc:
      'AI scam readiness for business: live deepfake fraud training, shadow-AI review, acceptable-use policy, and payment-verification controls. Fixed-fee workshop from $2,500.',
    price: '$2,500 to $4,000 fixed-fee workshop',
    priceDetail: 'No recurring subscription required. Executive deepfake drills are available as a separately authorized add-on from $1,500.',
    features: [
      {
        title: 'Shadow-AI audit',
        body: 'We find out what AI tools your employees actually paste company data into (ChatGPT, meeting notetakers, browser extensions) and show you the exposure in black and white.',
      },
      {
        title: 'Live training for modern impersonation',
        body: 'Executives, finance staff, and other money-movers learn how voice cloning, synthetic video, and ordinary social engineering defeat trust-based processes.',
      },
      {
        title: 'The controls that actually stop wire fraud',
        body: 'AI acceptable-use policy your insurer will ask for, plus a dead-simple payment-verification protocol, the single control that defeats invoice fraud, AI or not.',
      },
    ],
    how: [
      {num: '1', title: 'Review', body: 'Read-only shadow-AI discovery and interviews show where unapproved tools and risky habits may exist.'},
      {num: '2', title: 'Train', body: 'A live workshop explains current impersonation scams and rehearses the verification process with the people who move money.'},
      {num: '3', title: 'Install the controls', body: 'We customize the acceptable-use policy and payment-verification protocol, assign owners, and leave you with an action list.'},
    ],
    faqs: [
      {q: 'Is this just a lunch-and-learn?', a: 'No. It ends with practical controls: a customized acceptable-use policy, a payment-verification protocol, trained staff, and a written action list.'},
      {q: 'Is the executive deepfake drill included?', a: 'No. A targeted drill requires separate written sponsor authorization, client HR or legal approval, scheduling, and a debrief. It is scoped separately from $1,500 after the workshop.'},
      {q: 'Do you sell AI tools?', a: 'No. We sell defense against AI-powered scams. Every recommendation is a concrete, deliverable control, no hype.'},
      {q: 'Who should attend the workshop?', a: 'Executives, finance/bookkeeping, and anyone who can approve a payment or change banking details. Typically 5 to 15 people.'},
    ],
  },
  {
    slug: 'helm-ready',
    ctaMode: 'book',
    motif: 'ready',
    name: 'Helm Ready',
    tagline: 'Pass the questionnaire. Win the contract.',
    desc: 'Fixed-fee compliance readiness: cyber-insurance questionnaires, CMMC/NIST 800-171 gap assessments, and HIPAA controls, remediated, documented, and defended in plain English.',
    metaDesc:
      'Cyber insurance questionnaire help, CMMC gap assessment, and HIPAA readiness for small business. Fixed-fee projects from $2,500: answers your carrier and primes will accept.',
    price: '$2,500 to $7,500 fixed fee',
    priceDetail: 'Insurance readiness and CMMC Level 1 from $2,500. HIPAA or full CMMC Level 2 gap assessments typically $5,000 to $7,500.',
    features: [
      {
        title: 'Cyber-insurance questionnaire, answered',
        body: 'We answer the 12 hard questions accurately, fix the gaps that would have been "no," and give you documentation that holds up at claim time, when it actually matters.',
      },
      {
        title: 'CMMC / NIST 800-171 gap assessment',
        body: 'For Level 2, all 110 requirements are scored and prioritized. Remediation and any formal C3PAO assessment are separate engagements, so preparation and certification stay independent.',
      },
      {
        title: 'HIPAA for practices without an IT department',
        body: 'Security-rule controls with documented evidence, sized for dental and medical offices: the same obligations as a hospital, without the hospital budget.',
      },
    ],
    how: [
      {num: '1', title: 'Assess', body: 'Gap assessment against your target framework: scored, prioritized, plain English.'},
      {num: '2', title: 'Plan', body: 'You receive a prioritized roadmap with evidence needs, owners, and practical next steps.'},
      {num: '3', title: 'Remediate', body: 'If you want implementation help, we scope that work separately after the assessment exposes the real gaps.'},
    ],
    faqs: [
      {q: 'Can you certify us for CMMC?', a: 'Certification is performed by independent C3PAOs; anyone who says otherwise is misleading you. We get you assessment-ready and hand you to a certified partner.'},
      {q: 'What does fixed-fee mean?', a: 'One price, agreed before work starts, based on your size and target framework. No hourly meters, no surprise invoices.'},
      {q: 'Can you help with an insurance questionnaire?', a: 'Yes. We verify each answer against the controls actually in place, identify gaps, and organize supporting evidence. Coverage decisions remain with your insurer and the policy language.'},
    ],
  },
  {
    slug: 'helm-watch',
    motif: 'watch',
    name: 'Helm Watch',
    tagline: '24/7 detection and response, without the 24/7 payroll.',
    desc: 'Managed detection and response for small business endpoints: a round-the-clock security operations center watches every machine, investigates alerts, and isolates compromised endpoints before an incident spreads.',
    metaDesc:
      'Managed detection and response (MDR) for small business: 24/7 SOC monitoring, human-triaged alerts, and endpoint isolation from $15/endpoint/month. No hardware, no new staff.',
    price: '$15 / endpoint / month',
    priceDetail: '$150 monthly account minimum. EDR-only at launch, with a Huntress SOC monitoring covered Windows and Mac endpoints.',
    features: [
      {
        title: 'A SOC on duty when you are not',
        body: 'Most of the damage in a breach happens at night, on weekends, and over holidays, when nobody is at a desk to notice. A 24/7 security operations center watches your endpoints so an attack at 3 a.m. gets a response at 3 a.m.',
      },
      {
        title: 'Response, not just another alert',
        body: 'Antivirus tells you something happened. MDR does something about it: suspicious activity is investigated by human analysts, and a compromised endpoint gets isolated before the problem spreads to the rest of your network.',
      },
      {
        title: 'You only hear about what matters',
        body: 'Alerts are triaged by analysts, not forwarded raw to your inbox. When something is real, you get a plain-English account of what happened and what was done, plus a quarterly summary useful for insurance and customer diligence.',
      },
    ],
    how: [
      {num: '1', title: 'Deploy', body: 'A lightweight EDR agent is installed on covered Windows and Mac endpoints using the rollout method agreed during qualification.'},
      {num: '2', title: 'Watch', body: 'The SOC monitors around the clock; human analysts investigate anything suspicious and discard the noise.'},
      {num: '3', title: 'Respond', body: 'Real threats get contained, compromised machines isolated, and you get a plain-English account of what happened.'},
    ],
    faqs: [
      {q: 'Do we need to replace our antivirus?', a: 'Usually yes, and that is a good thing: the EDR agent covers what antivirus does and adds detection and response on top. We sort out the specifics during deployment so nothing overlaps or conflicts.'},
      {q: 'What happens when you find something?', a: 'Human analysts investigate first, so false alarms die quietly. Real incidents get contained, the affected endpoint isolated if needed, and you get a plain-English explanation of what happened and what was done.'},
      {q: 'Does Helm staff the overnight SOC?', a: 'No. Huntress provides the 24/7 SOC monitoring and containment behind Helm Watch. Helm handles deployment, account management, customer communication, and business-hours follow-up.'},
      {q: 'Does Helm Watch include identity monitoring, SIEM, or awareness training?', a: 'Not at launch. Helm Watch is EDR-only until those additional Huntress products are commercially and operationally ready for Helm customers.'},
    ],
  },
];
