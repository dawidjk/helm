import type {MotifKind} from '../components/ProductMotif';

export type Product = {
  slug: string;
  motif: MotifKind;
  name: string;
  metaTitle: string;
  tagline: string;
  desc: string;
  bestFor: string;
  metaDesc: string;
  price: string;
  priceDetail: string;
  /**
   * Commitment term shown beside the price (e.g. "Month to month",
   * "12-month initial term", "Fixed fee"). Must restate a published term,
   * never introduce one.
   */
  term: string;
  pricingOptions?: {
    name: string;
    price: string;
    term: string;
    detail: string;
  }[];
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
  /**
   * Design-partner offers may be described publicly, but do not expose a
   * checkout path or a public rate until their commercial gates are cleared.
   */
  commercialState?: 'available' | 'design-partner';
};

export const productList: Product[] = [
  {
    slug: 'helm-command',
    ctaMode: 'book',
    commercialState: 'design-partner',
    motif: 'command',
    name: 'Helm Command',
    metaTitle: 'Helm Command: Managed Security Program Leadership',
    tagline: 'One accountable owner for the security work.',
    desc: 'A maintained security program for 50 to 249 employee organizations that already have IT but lack someone accountable for risk, roadmap, evidence, and follow-through. Helm coordinates the work without taking over help desk or general IT.',
    bestFor: '50 to 249 employee organizations with an incumbent IT provider or internal IT capability but no accountable security-program owner',
    metaDesc:
      'Helm Command provides managed security program leadership, risk and roadmap management, evidence readiness, and incumbent IT coordination for qualified design partners.',
    price: 'Qualified design partners',
    term: 'Early access',
    priceDetail: 'Scope and pricing are confirmed after a fit and complexity review. Paid delivery begins only after the agreement and insurance gates clear.',
    features: [
      {
        title: 'A maintained risk register and 12-month roadmap',
        body: 'Security work is prioritized, assigned, and kept current so important decisions do not disappear into an assessment report or an IT ticket queue.',
      },
      {
        title: 'Evidence that stays ready',
        body: 'Helm maintains agreed control evidence and drafts bounded questionnaire and insurance responses from what can actually be verified. Your organization keeps ownership of every attestation.',
      },
      {
        title: 'Leadership cadence and incident readiness',
        body: 'Quarterly leadership reviews, an annual tabletop, and a documented incident-coordination path keep executives, internal IT, and incumbent providers working from the same plan.',
      },
      {
        title: 'Coordination without an IT takeover',
        body: 'Helm owns the security program and follows through with the people doing the work. Help desk, general administration, procurement, and routine IT operations stay with your existing provider or internal team.',
      },
    ],
    how: [
      {num: '1', title: 'Qualify', body: 'We confirm the business trigger, executive sponsor, existing IT ownership, environment, and whether the program can fit both sides without creating an open-ended support relationship.'},
      {num: '2', title: 'Establish', body: 'We baseline responsibilities, risks, evidence, incident contacts, and the first 12-month roadmap, then agree on owners and due dates.'},
      {num: '3', title: 'Maintain', body: 'Helm runs the monthly, quarterly, annual, and event-driven cadence while your IT provider and internal owners perform the operational changes assigned to them.'},
    ],
    faqs: [
      {q: 'Does Helm Command replace our MSP or internal IT team?', a: 'No. Command is the accountable security-program layer. Your MSP or internal IT team keeps responsibility for help desk, administration, patching, procurement, backup operations, and other routine IT work.'},
      {q: 'What is included?', a: 'The standard program includes a maintained risk and decision register, a prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance-readiness support, quarterly leadership reviews, an annual tabletop, and coordination with the named IT owner.'},
      {q: 'Is Helm Command available now?', a: 'Qualified design-partner conversations are open now. Paid delivery begins only after the final service agreement and insurance prerequisites are complete.'},
      {q: 'Why is there no published price yet?', a: 'Command is priced by operating complexity, required control coverage, and coordination load rather than headcount alone. We confirm the scope and price after a fit review while the design-partner offer is being validated.'},
      {q: 'Does Command include 24/7 support?', a: 'No. Covered security products may include vendor-operated 24/7 monitoring when stated, but Command does not include Helm-operated 24/7 support, forensic response, breach counsel, or unlimited advisory work.'},
    ],
  },
  {
    slug: 'helm-mail',
    motif: 'mail',
    name: 'Helm Mail',
    metaTitle: 'Helm Mail: Managed Email Security for Small and Medium Businesses',
    tagline: 'Email fraud, stopped cold.',
    desc: 'Managed email security for small and medium-sized businesses using a compatible Microsoft 365 or Google Workspace environment. We configure and monitor the appropriate filtering path, help your team handle suspicious messages, and report the result in plain English.',
    bestFor: 'businesses using a compatible Microsoft 365 or Google Workspace environment that want managed filtering',
    metaDesc:
      'Managed email security for small and medium-sized businesses using compatible Microsoft 365 or Google Workspace environments, from $25/user/month with a $300 monthly account minimum.',
    price: '$25 / user / month',
    term: 'Month to month',
    priceDetail: '$300 monthly account minimum. Available for compatible Microsoft 365 and Google Workspace environments, with setup and ongoing management included.',
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
      {num: '1', title: 'Qualify', body: 'We confirm your email environment and the appropriate MailProtector deployment path, then agree on a deployment window and rollback plan.'},
      {num: '2', title: 'Protect', body: 'MailProtector filtering is deployed and verified without changing your addresses or migrating mailboxes.'},
      {num: '3', title: 'Report', body: 'Quarterly plain-English report delivered and walked through with you.'},
    ],
    faqs: [
      {q: 'Do we need to migrate our email?', a: 'No. Helm Mail works with compatible Microsoft 365 and Google Workspace environments without changing your addresses or migrating mailboxes. We confirm compatibility, select the appropriate MailProtector deployment path, and agree on the mail-flow change and rollback plan before rollout.'},
      {q: 'Do you support Google Workspace?', a: 'Yes. Compatible Google Workspace environments use MailProtector CloudFilter, which routes mail through the filtering gateway. This requires planned DNS and Google Workspace mail-routing changes, with verification and rollback steps agreed before activation.'},
      {q: 'Is there a minimum monthly charge?', a: 'Yes. Helm Mail is $25 per user per month with a $300 monthly account minimum, equivalent to 12 users at the published unit price.'},
    ],
  },
  {
    slug: 'helm-aware',
    ctaMode: 'book',
    motif: 'aware',
    name: 'Helm Aware',
    metaTitle: 'Helm Aware: Managed Security Awareness Training',
    tagline: 'Make the next scam less convincing.',
    desc: 'Managed monthly learning and phishing shaped by active threat profiles Huntress researchers see every day, with clear Helm reporting and review. Add the fixed-fee workshop when your team also needs AI-use and payment-verification controls.',
    bestFor: 'teams that need managed monthly learning and phishing, an AI scam readiness workshop, or both',
    metaDesc:
      'Managed security awareness training and phishing simulations for small and medium-sized businesses at $10 per active learner per month, plus fixed-fee AI scam readiness workshops.',
    price: '$10 / active learner / month',
    term: 'Month to month',
    priceDetail: 'No customer account minimum. Setup included. Month to month.',
    pricingOptions: [
      {
        name: 'Helm Aware Managed',
        price: '$10 / active learner / month',
        term: 'Month to month',
        detail: 'No customer account minimum. Setup included. Month to month.',
      },
      {
        name: 'Helm Aware Workshop',
        price: '$2,500 to $4,000 fixed fee',
        term: 'Fixed fee',
        detail: 'A separate project. No Managed subscription is required. Executive deepfake drills are separately authorized add-ons from $1,500.',
      },
    ],
    features: [
      {
        title: 'Threat-informed training every month',
        body: 'Huntress manages the monthly learning and phishing cadence using relevant threat profiles its researchers are seeing in active attacks, instead of recycling last year’s generic examples.',
      },
      {
        title: 'Coaching, reminders, and clear reporting',
        body: 'Automatic follow-up keeps assigned learning moving. Helm provides a monthly report, standard program-data API access, and a 30-minute management review each quarter.',
      },
      {
        title: 'A workshop when process needs fixing',
        body: 'The separate fixed-fee workshop adds a shadow-AI review, live scam training, an AI acceptable-use policy, and a payment-verification protocol for the people who move money.',
      },
    ],
    how: [
      {num: '1', title: 'Activate', body: 'We confirm the active learner list, contacts, and launch date, then configure the managed program and invitations.'},
      {num: '2', title: 'Train and test', body: 'Huntress runs monthly learning and managed phishing, with automatic coaching, reminders, and follow-up.'},
      {num: '3', title: 'Review', body: 'Helm delivers a monthly report and meets with management for 30 minutes each quarter to turn trends into practical next steps.'},
    ],
    faqs: [
      {q: 'Is there a minimum number of learners?', a: 'No. Helm Aware Managed is $10 per active learner per month with no customer account minimum and month-to-month service.'},
      {q: 'What is included in Managed?', a: 'Huntress-managed monthly learning and phishing, automatic coaching and reminders, a monthly report, standard program-data API access, and a 30-minute Helm management review each quarter.'},
      {q: 'Is the workshop required?', a: 'No. Managed and the fixed-fee workshop can be purchased separately. The workshop is useful when you also need a shadow-AI review, AI acceptable-use policy, live scam training, and payment-verification protocol.'},
      {q: 'Are custom campaigns or executive deepfake drills included?', a: 'No. Custom campaigns, executive deepfake drills, remediation, HR enforcement, and additional advisory work require separate written scope. Targeted executive drills start at $1,500.'},
    ],
  },
  {
    slug: 'helm-ready',
    ctaMode: 'book',
    motif: 'ready',
    name: 'Helm Ready',
    metaTitle: 'Helm Ready: Cyber Insurance and CMMC Readiness',
    tagline: 'Pass the questionnaire. Win the contract.',
    desc: 'Fixed-fee compliance readiness: cyber-insurance questionnaires, CMMC/NIST 800-171 gap assessments, and HIPAA controls, remediated, documented, and defended in plain English.',
    bestFor: 'businesses preparing for cyber-insurance, CMMC, or HIPAA readiness work',
    metaDesc:
      'Fixed-fee cyber insurance, CMMC, and HIPAA readiness for small and medium-sized businesses, with documented findings and a prioritized roadmap.',
    price: '$2,500 to $7,500 fixed fee',
    term: 'Fixed fee',
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
      {q: 'Can you certify us for CMMC?', a: 'No. A formal certification assessment, when required, is performed by an independent accredited C3PAO. Helm Ready documents your current state and prioritized gaps; Helm Security does not certify or promise an assessor relationship.'},
      {q: 'What does fixed-fee mean?', a: 'One price, agreed before work starts, based on your size and target framework. No hourly meters, no surprise invoices.'},
      {q: 'Can you help with an insurance questionnaire?', a: 'Yes. We verify each answer against the controls actually in place, identify gaps, and organize supporting evidence. Coverage decisions remain with your insurer and the policy language.'},
    ],
  },
  {
    slug: 'helm-watch',
    motif: 'watch',
    name: 'Helm Watch',
    metaTitle: 'Helm Watch: 24/7 Managed Endpoint Detection',
    tagline: '24/7 detection and response, without the 24/7 payroll.',
    desc: 'Managed detection and response for small and medium-sized businesses: a round-the-clock security operations center watches each covered user\'s eligible devices, investigates alerts, and isolates compromised endpoints before an incident spreads.',
    bestFor: 'businesses that want 24/7 monitoring and response for up to two eligible Windows or Mac workstations per covered user',
    metaDesc:
      'Managed endpoint detection and response with Huntress 24/7 SOC monitoring, human-triaged alerts, and containment from $40 per user monthly for up to two eligible devices.',
    price: '$40 / user / month',
    term: 'Month to month',
    priceDetail: '$200 monthly account minimum. Includes up to two eligible Windows or Mac workstations per covered user. Servers and other device classes are separately scoped. EDR-only at launch, with a Huntress SOC monitoring covered endpoints.',
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
      {q: 'Which devices are included?', a: 'Each covered user includes up to two eligible Windows or Mac workstations. Servers, shared infrastructure, mobile devices, and specialized endpoints are not included automatically and are separately scoped when needed. We confirm the covered user and device roster before deployment.'},
      {q: 'Can you deploy to Macs?', a: 'Yes. Small Mac fleets can use the validated guided installation path. Larger fleets use the client\'s existing mobile device management platform and the current Huntress deployment profile. The client\'s authorized IT owner or MSP pushes the profile and package, and Helm verifies the required permissions and agent readiness after deployment.'},
      {q: 'Does Helm Watch include identity monitoring, SIEM, or awareness training?', a: 'No. Helm Watch is EDR-only. Managed awareness training is available separately through Helm Aware Managed; identity monitoring and SIEM are not included.'},
    ],
  },
];

/**
 * Contact-form choices are derived from the published product catalog so a
 * product rename or addition cannot leave the enquiry form behind. Products
 * with separately purchasable pricing options expose each option directly.
 */
export const contactInterests = [
  ...productList.flatMap((product) =>
    product.pricingOptions?.map((option) => option.name) ?? [product.name],
  ),
  'Not sure — help me choose',
];
