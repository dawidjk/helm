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
  term: string;
  features: {title: string; body: string}[];
  how: {num: string; title: string; body: string}[];
  faqs: {q: string; a: string}[];
  ctaMode?: 'scan' | 'book';
};

export const productList: Product[] = [
  {
    slug: 'helm-core',
    motif: 'core',
    name: 'Helm Core',
    metaTitle: 'Helm Core: Complete Managed Security Protection',
    tagline: 'The security stack your business needs, managed as one service.',
    desc: 'Helm Core combines email protection, managed detection and response, identity protection, cloud backup, security awareness, and digital risk protection in one per-user service. Your existing IT provider keeps the help desk and routine IT. Helm runs the security layer and gives you one clear monthly report.',
    bestFor: 'organizations with 20 to 75 people that need complete, standardized protection without adding another high-touch consulting relationship',
    metaDesc:
      'Helm Core combines email, device, identity, backup, awareness, and digital risk protection for $125 per user each month with a $2,500 monthly minimum.',
    price: '$125 / user / month',
    term: '12 months or 36-month price lock',
    priceDetail: '$2,500 monthly account minimum. Choose a 12-month initial term at the current rate or lock the starting per-user price and account minimum for a 36-month initial term. Includes up to two eligible Windows or Mac workstations per covered user. Additional eligible workstations are $12 each per month.',
    features: [
      {
        title: 'Email and human-risk protection',
        body: 'Managed filtering, phishing and impersonation detection, employee reporting, triage, simulations, and awareness learning protect both the inbox and the person making the decision.',
      },
      {
        title: 'Device and identity monitoring',
        body: 'A vendor-operated 24/7 security operations center monitors covered Windows and Mac workstations and supported identity activity, investigates real threats, and can contain covered devices when required.',
      },
      {
        title: 'Cloud backup and digital risk protection',
        body: 'Supported Microsoft 365 or Google Workspace data is backed up, while external monitoring looks for impersonation, lookalike domains, and other public risks tied to your organization.',
      },
      {
        title: 'One monthly security report',
        body: 'Helm brings the available signals into one automated monthly view so leaders can see what is covered, what changed, and which action belongs with the business or its IT provider.',
      },
    ],
    how: [
      {num: '1', title: 'Confirm the standard fit', body: 'We confirm user count, supported email and identity platforms, covered workstations, current IT ownership, and any exclusions before an order is signed.'},
      {num: '2', title: 'Deploy the protection', body: 'Helm follows a standardized onboarding runbook across the security platforms, records the covered scope, and provides the first evidence baseline.'},
      {num: '3', title: 'Monitor and report', body: 'The platforms operate continuously within their stated scope. Helm reviews exceptions and sends one monthly report. Quarterly leadership reviews and open-ended advisory work are not included.'},
    ],
    faqs: [
      {q: 'Does Helm Core replace our MSP or internal IT team?', a: 'No. Your existing IT provider or internal team keeps responsibility for help desk, patching, administration, procurement, routine remediation, and general IT operations. Helm manages the defined security layer and coordinates exceptions with the named IT contact.'},
      {q: 'What is included?', a: 'Core includes managed email protection, device detection and response, supported identity protection, cloud productivity backup, security-awareness learning and simulations, digital risk protection, and an automated monthly security report.'},
      {q: 'How many devices are included?', a: 'Core includes up to two eligible Windows or Mac workstations per covered user. Additional eligible workstations are $12 each per month. Servers, phones, tablets, network equipment, and specialized systems require separate written scope.'},
      {q: 'Does Helm staff the 24/7 security operations center?', a: 'No. Specialist vendor security operations teams provide the continuous monitoring and containment behind the covered services. Helm owns deployment, account management, coordination, and the reporting relationship.'},
      {q: 'Does Core include quarterly reviews or a vCISO?', a: 'No. Core is intentionally standardized and low touch. Choose Helm Command when the organization needs a maintained risk register, leadership cadence, roadmap, questionnaire response, or ongoing security-program ownership.'},
    ],
  },
  {
    slug: 'helm-command',
    ctaMode: 'book',
    motif: 'command',
    name: 'Helm Command',
    metaTitle: 'Helm Command: Managed Security Program Ownership',
    tagline: 'One accountable owner for the security program.',
    desc: 'Helm Command combines the complete Helm Core protection stack with hands-on security-program leadership. Helm maintains the risks, roadmap, evidence, questionnaire responses, and leadership cadence while your existing provider or internal team continues to run general IT and completes assigned remediation.',
    bestFor: 'organizations with 75 to 250 people that need an accountable security-program owner, executive cadence, and evidence that stays ready',
    metaDesc:
      'Helm Command combines managed protection with risk, roadmap, evidence, questionnaire, and leadership ownership from $8,000 to $15,000 per month.',
    price: '$8,000 to $15,000 / month',
    term: '36-month initial term',
    priceDetail: 'All-in monthly pricing is confirmed after a fit and complexity review. The price includes the covered Helm Core stack and adjusts 6% on each service anniversary. Implementation scope and any separately authorized remediation are written before work starts.',
    features: [
      {
        title: 'Everything in Helm Core',
        body: 'Email, device, identity, backup, awareness, and digital risk protection are managed as the operating foundation, with the exact covered users, devices, platforms, and exclusions documented in the order.',
      },
      {
        title: 'A maintained risk register and 12-month roadmap',
        body: 'Each important security issue has an owner, due date, business reason, and evidence status. Helm keeps the working plan current so unresolved work does not disappear into an old assessment or crowded IT queue.',
      },
      {
        title: 'Questionnaire and insurance response with evidence',
        body: 'Helm drafts bounded client security questionnaires and annual insurance responses from verified program evidence. Your organization reviews and owns every final representation. Turnaround and volume are defined in the service order.',
      },
      {
        title: 'Quarterly leadership cadence and incident readiness',
        body: 'Quarterly reviews, an annual tabletop, and a written incident path keep leaders, internal IT, and outside providers working from the same priorities before a serious event forces coordination under pressure.',
      },
      {
        title: 'Coordination without an IT takeover',
        body: 'Helm follows security actions through with the responsible teams. Your existing provider or internal staff still owns help desk, administration, patching, procurement, and routine remediation unless a separate written scope says otherwise.',
      },
    ],
    how: [
      {num: '1', title: 'Confirm the fit', body: 'We review the business pressure, leadership sponsor, current IT owner, required frameworks, systems in scope, and coordination load. Both sides agree on boundaries before detailed design.'},
      {num: '2', title: 'Build the program baseline', body: 'Helm deploys the covered Core stack, documents responsibilities and evidence, establishes the risk register, and sequences the first 12-month roadmap.'},
      {num: '3', title: 'Run the cadence', body: 'Helm maintains the evidence and roadmap, prepares the agreed questionnaire responses, leads quarterly leadership reviews, and tracks assigned remediation to a named owner.'},
    ],
    faqs: [
      {q: 'Does Helm Command replace our MSP or internal IT team?', a: 'No. Command is the accountable security-program layer. Your MSP or internal IT team keeps responsibility for help desk, administration, patching, procurement, backup operations outside the covered service, and other routine IT work.'},
      {q: 'What is included?', a: 'Command includes the covered Helm Core stack, a maintained risk and decision register, a prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance response, quarterly leadership reviews, an annual tabletop, and coordination with the named IT owner.'},
      {q: 'Why is Command priced as a range?', a: 'The work depends on operating complexity, required control coverage, locations, systems, and coordination load rather than headcount alone. Helm confirms one all-in monthly price after the fit review.'},
      {q: 'Does Helm certify compliance or guarantee an insurance outcome?', a: 'No. Helm helps document the current program, evidence, and gaps. Independent assessors, regulators, insurers, and customers make their own decisions, and your organization owns every final attestation.'},
      {q: 'Does Command include unlimited support or remediation?', a: 'No. Command includes the written program cadence and coordination scope. Help desk, forensic response, breach counsel, routine IT work, and hands-on remediation remain with the responsible provider or require a separate written authorization.'},
    ],
  },
];

export const contactInterests = [
  ...productList.map((product) => product.name),
  'Paid discovery for Core or Command',
  'Not sure, help me choose',
];
