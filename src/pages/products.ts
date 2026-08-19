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
    metaTitle: 'Helm Mail: Managed Email and Human-Risk Security',
    tagline: 'Protect the inbox. Prepare the person.',
    desc: 'Layered email and human-risk security for compatible Microsoft 365 and Google Workspace environments. Helm combines mail-flow filtering, threat-informed phishing and impersonation protection, employee reporting and triage, ongoing simulations, and awareness training in one managed service.',
    bestFor: 'businesses that want email-threat protection, phishing response, and ongoing employee readiness managed together',
    metaDesc:
      'Layered email filtering, phishing protection, triage, simulations, and awareness learning at $50/user/month with a $1,000 monthly account minimum.',
    price: '$50 / protected user / month',
    term: '12-month initial term',
    priceDetail: '$1,000 monthly account minimum, equivalent to 20 protected users. Setup and ongoing Helm management included. 12-month initial term.',
    features: [
      {
        title: 'Two layers of email defense',
        body: 'Mail-flow filtering handles malicious, suspicious, and unwanted messages while a second detection layer focuses on phishing, business-email compromise, impersonation, and coordinated campaigns.',
      },
      {
        title: 'Report, triage, and remove',
        body: 'Employees can report suspicious messages from Outlook or Gmail. Helm Mail triages them, removes confirmed malicious messages, and gives people plain-English feedback.',
      },
      {
        title: 'Training connected to real threats',
        body: 'Managed simulations and awareness learning use reporting and campaign signals to reinforce the behaviors attackers are actually testing, with Helm review and reporting.',
      },
    ],
    how: [
      {num: '1', title: 'Connect', body: 'We confirm compatibility, connect the detection layer, and configure the appropriate mail-flow protection for your Microsoft 365 or Google Workspace environment. Your mailboxes stay where they are.'},
      {num: '2', title: 'Protect and prepare', body: 'Filtering, threat detection, employee reporting, automated triage, simulations, and awareness learning are configured as one managed program.'},
      {num: '3', title: 'Improve', body: 'Helm reviews notable threats and human-risk trends, then turns them into practical recommendations and management reporting.'},
    ],
    faqs: [
      {q: 'Do we need to migrate our email?', a: 'No. Your mailboxes stay in Microsoft 365 or Google Workspace. Helm configures the appropriate filtering and detection connections for your environment; the exact mail-flow and DNS changes are confirmed before deployment.'},
      {q: 'Does Helm Mail include security-awareness training?', a: 'Yes. Ongoing phishing simulations, awareness learning, employee reporting, and triage are part of Helm Mail. The separate Helm Aware workshop is for teams that need an AI-use policy, live scam-readiness session, and payment-verification protocol.'},
      {q: 'Does this include encrypted email or secure file transfer?', a: 'No. Helm Mail does not include a secure-message portal, encrypted outbound delivery, or secure file transfer. If your legal, healthcare, or financial workflow requires those capabilities, Helm will identify and scope a separate solution before you buy.'},
      {q: 'Is there a minimum monthly charge?', a: 'Yes. Helm Mail is $50 per protected user per month with a $1,000 monthly account minimum, equivalent to 20 protected users. The service has a 12-month initial term.'},
    ],
  },
  {
    slug: 'helm-aware',
    ctaMode: 'book',
    motif: 'aware',
    name: 'Helm Aware',
    metaTitle: 'Helm Aware: AI Scam Readiness Workshop',
    tagline: 'Make the next scam less convincing.',
    desc: 'A fixed-fee working session that turns AI-enabled fraud into practical controls: a shadow-AI review, live scam training, a written AI-use policy, and a payment-verification protocol your team can use immediately.',
    bestFor: 'leadership teams that need an AI-use policy, payment-verification process, and practical live scam training',
    metaDesc:
      'A fixed-fee AI scam readiness workshop for small and medium-sized businesses, including policy, training, and a payment-verification protocol.',
    price: '$2,500 to $4,000 fixed fee',
    term: 'Fixed fee',
    priceDetail: 'No subscription required. Targeted executive deepfake drills are separately authorized add-ons from $1,500.',
    features: [
      {
        title: 'See where AI is already in the business',
        body: 'A focused shadow-AI review identifies the tools employees use, the information they place into them, and the decisions that need clearer boundaries.',
      },
      {
        title: 'Practice the scams that move money',
        body: 'A live session uses realistic voice-clone, deepfake, impersonation, and payment-change examples so leaders and approvers know what to verify.',
      },
      {
        title: 'Leave with usable controls',
        body: 'Helm delivers a written AI acceptable-use policy and a payment-verification protocol sized to how your organization actually approves money movement.',
      },
    ],
    how: [
      {num: '1', title: 'Discover', body: 'We map payment approvals, sensitive AI use, and the people most likely to receive high-consequence requests.'},
      {num: '2', title: 'Workshop', body: 'Helm runs the live scam-readiness session and works through the decisions your policy and callback protocol must cover.'},
      {num: '3', title: 'Put it in writing', body: 'You receive the agreed AI-use policy, payment-verification protocol, and practical next actions. Any targeted drill is separately approved.'},
    ],
    faqs: [
      {q: 'Is this a subscription?', a: 'No. Helm Aware is a fixed-fee workshop and deliverable set. Ongoing simulations and awareness learning are included in Helm Mail.'},
      {q: 'What do we receive?', a: 'The standard engagement includes a shadow-AI review, live scam-readiness workshop, written AI acceptable-use policy, payment-verification protocol, and prioritized next actions.'},
      {q: 'Are executive deepfake drills included?', a: 'No. Targeted executive drills require separate written authorization and start at $1,500. Remediation, HR enforcement, and additional advisory work are also separately scoped.'},
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
    metaTitle: 'Helm Watch: 24/7 Managed Device Protection',
    tagline: '24/7 detection and response, without the 24/7 payroll.',
    desc: 'Managed device protection for small and medium-sized businesses: a round-the-clock security operations center watches each covered user\'s eligible devices, investigates alerts, and isolates compromised devices before an incident spreads.',
    bestFor: 'businesses that want 24/7 monitoring and response for up to two eligible Windows or Mac workstations per covered user',
    metaDesc:
      'Managed device detection and response with 24/7 monitoring, human-triaged alerts, and containment from $40 per user monthly for up to two eligible devices.',
    price: '$40 / user / month',
    term: 'Month to month',
    priceDetail: '$200 monthly account minimum. Includes up to two eligible Windows or Mac workstations per covered user. Servers and other device classes are separately scoped. Managed device detection and response only at launch, with a 24/7 security operations center monitoring covered devices.',
    features: [
      {
        title: 'A SOC on duty when you are not',
        body: 'Most of the damage in a breach happens at night, on weekends, and over holidays, when nobody is at a desk to notice. A 24/7 security operations center watches your covered devices so an attack at 3 a.m. gets a response at 3 a.m.',
      },
      {
        title: 'Response, not just another alert',
        body: 'Antivirus tells you something happened. Helm Watch does something about it: suspicious activity is investigated by human analysts, and a compromised device gets isolated before the problem spreads to the rest of your network.',
      },
      {
        title: 'You only hear about what matters',
        body: 'Alerts are triaged by analysts, not forwarded raw to your inbox. When something is real, you get a plain-English account of what happened and what was done, plus a quarterly summary useful for insurance and customer diligence.',
      },
    ],
    how: [
      {num: '1', title: 'Deploy', body: 'A lightweight security agent is installed on covered Windows and Mac devices using the rollout method agreed during qualification.'},
      {num: '2', title: 'Watch', body: 'The SOC monitors around the clock; human analysts investigate anything suspicious and discard the noise.'},
      {num: '3', title: 'Respond', body: 'Real threats get contained, compromised machines isolated, and you get a plain-English account of what happened.'},
    ],
    faqs: [
      {q: 'Do we need to replace our antivirus?', a: 'Usually yes, and that is a good thing: the security agent covers what antivirus does and adds detection and response on top. We sort out the specifics during deployment so nothing overlaps or conflicts.'},
      {q: 'What happens when you find something?', a: 'Human analysts investigate first, so false alarms die quietly. Real incidents get contained, the affected device is isolated if needed, and you get a plain-English explanation of what happened and what was done.'},
      {q: 'Does Helm staff the overnight SOC?', a: 'No. A specialist security operations center provides the 24/7 monitoring and containment behind Helm Watch. Helm handles deployment, account management, customer communication, and business-hours follow-up.'},
      {q: 'Does Helm Watch protect phones and tablets?', a: 'Not through the standard Helm Watch security agent. The service includes up to two eligible Windows or Mac workstations per covered user. Phones and tablets need separate identity, email, and device-management controls, which Helm will identify and scope before you buy.'},
      {q: 'Can you deploy to Macs?', a: 'Yes. Small Mac fleets can use the validated guided installation path. Larger fleets use the client\'s existing mobile device management platform and the current deployment profile. The client\'s authorized IT owner or MSP pushes the profile and package, and Helm verifies the required permissions and agent readiness after deployment.'},
      {q: 'Does Helm Watch include identity monitoring, SIEM, or awareness training?', a: 'No. Helm Watch focuses on managed device detection and response. Ongoing awareness training and phishing simulations are included in Helm Mail; identity monitoring and SIEM are not included.'},
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
