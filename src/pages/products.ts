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
    tagline: 'Keep important security work from getting lost between teams.',
    desc: 'Security decisions often get split across IT tickets, insurance forms, vendor projects, and leadership meetings. When nobody owns the whole list, overdue work can stay open until a customer, insurer, or incident exposes it. Helm Command keeps the risks, decisions, evidence, and follow-up in one managed program without taking over help desk or general IT.',
    bestFor: '50 to 249 employee organizations with an incumbent IT provider or internal IT capability but no accountable security-program owner',
    metaDesc:
      'Helm Command provides managed security program leadership, risk and roadmap management, evidence readiness, and incumbent IT coordination for qualified design partners.',
    price: 'Qualified design partners',
    term: 'Early access',
    priceDetail: 'Scope and pricing are confirmed after a fit and complexity review. Paid delivery begins only after the agreement and insurance gates clear.',
    features: [
      {
        title: 'A maintained risk register and 12-month roadmap',
        body: 'Each important security issue has an owner, a due date, and a reason it matters. Helm keeps the list current so unfinished work does not disappear into an old assessment or a crowded IT queue.',
      },
      {
        title: 'Evidence that stays ready',
        body: 'When a customer or insurer asks what is protected, the answer should not depend on memory. Helm maintains the agreed evidence and drafts responses from what can be verified. Your organization still reviews and owns every attestation.',
      },
      {
        title: 'Leadership cadence and incident readiness',
        body: 'Quarterly reviews, an annual tabletop, and a written incident path give leaders, internal IT, and outside providers the same plan to follow before a serious problem forces them to coordinate under pressure.',
      },
      {
        title: 'Coordination without an IT takeover',
        body: 'Helm follows the security work through with the people responsible for completing it. Your existing provider or internal team still handles help desk, administration, procurement, and routine IT operations.',
      },
    ],
    how: [
      {num: '1', title: 'Confirm the fit', body: 'We review why the program is needed, who sponsors it, who owns IT today, and whether the work can be clearly bounded for both sides.'},
      {num: '2', title: 'Build the working plan', body: 'We document responsibilities, current risks, available evidence, incident contacts, and the first 12-month roadmap. Every action receives an owner and due date.'},
      {num: '3', title: 'Keep it moving', body: 'Helm runs the agreed monthly, quarterly, annual, and event-driven reviews while the named IT and business owners complete the operational changes assigned to them.'},
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
    desc: 'A convincing email can lead an employee to enter a password, open a malicious file, or approve a fraudulent payment. Helm Mail combines filtering, phishing and impersonation protection, employee reporting, triage, simulations, and awareness learning in one managed service for compatible Microsoft 365 and Google Workspace environments.',
    bestFor: 'businesses that want email-threat protection, phishing response, and ongoing employee readiness managed together',
    metaDesc:
      'Layered email filtering, phishing protection, triage, simulations, and awareness learning at $50/user/month with a $1,000 monthly account minimum.',
    price: '$50 / protected user / month',
    term: '12-month initial term',
    priceDetail: '$1,000 monthly account minimum, equivalent to 20 protected users. Setup and ongoing Helm management included. 12-month initial term.',
    features: [
      {
        title: 'Two layers of email defense',
        body: 'Mail-flow filtering blocks malicious, suspicious, and unwanted messages. A second detection layer looks for phishing, business-email compromise, impersonation, and related campaigns that can otherwise appear to be ordinary business email.',
      },
      {
        title: 'Report, triage, and remove',
        body: 'Employees report suspicious messages from Outlook or Gmail instead of deciding alone. Helm Mail triages the report, removes confirmed malicious messages, and explains the result in plain English.',
      },
      {
        title: 'Training connected to real threats',
        body: 'Managed simulations and awareness learning reinforce the decisions attackers are testing, including suspicious sign-ins, payment changes, and urgent requests. Helm reviews the results and reports what needs attention.',
      },
    ],
    how: [
      {num: '1', title: 'Connect', body: 'We confirm compatibility, connect the detection layer, and configure the appropriate mail-flow protection for your Microsoft 365 or Google Workspace environment. Your mailboxes stay where they are.'},
      {num: '2', title: 'Protect and prepare', body: 'We configure filtering, threat detection, employee reporting, triage, simulations, and awareness learning as one program.'},
      {num: '3', title: 'Review what happens', body: 'Helm reviews notable threats and employee-reporting patterns, then explains what happened and what the business should adjust.'},
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
    tagline: 'Give your team a process that a convincing scam cannot bypass.',
    desc: 'A cloned voice or polished email can sound completely legitimate. If the business has no rule for checking payment changes or sensitive AI use, employees have to make high-consequence decisions on their own. Helm Aware is a fixed-fee working session that produces an AI-use policy, live scam training, and a payment-verification protocol the team can use immediately.',
    bestFor: 'leadership teams that need an AI-use policy, payment-verification process, and practical live scam training',
    metaDesc:
      'A fixed-fee AI scam readiness workshop for small and medium-sized businesses, including policy, training, and a payment-verification protocol.',
    price: '$2,500 to $4,000 fixed fee',
    term: 'Fixed fee',
    priceDetail: 'No subscription required. Targeted executive deepfake drills are separately authorized add-ons from $1,500.',
    features: [
      {
        title: 'See where AI is already in the business',
        body: 'A focused review identifies which AI tools employees use, what information they put into them, and where the lack of a clear rule could expose client or company information.',
      },
      {
        title: 'Practice the scams that move money',
        body: 'A live session walks through realistic voice-clone, deepfake, impersonation, and payment-change requests so leaders and approvers know when to stop and how to verify them.',
      },
      {
        title: 'Leave with usable controls',
        body: 'You receive a written AI acceptable-use policy and a payment-verification protocol that reflects how your organization actually approves and releases money.',
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
    tagline: 'Know which answers you can support before you sign.',
    desc: 'An unsupported answer on an insurance form, CMMC assessment, or customer questionnaire can create a problem when the evidence is reviewed. Helm Ready is fixed-fee readiness work that identifies what is in place, what is missing, and what needs to be documented before the business makes a representation.',
    bestFor: 'businesses preparing for cyber-insurance, CMMC, or HIPAA readiness work',
    metaDesc:
      'Fixed-fee cyber insurance, CMMC, and HIPAA readiness for small and medium-sized businesses, with documented findings and a prioritized roadmap.',
    price: '$2,500 to $7,500 fixed fee',
    term: 'Fixed fee',
    priceDetail: 'Insurance readiness and CMMC Level 1 from $2,500. HIPAA or full CMMC Level 2 gap assessments typically $5,000 to $7,500.',
    features: [
      {
        title: 'Cyber-insurance questionnaire, answered',
        body: 'We verify the common control questions, identify incomplete answers, and organize the evidence behind what the business can support. Any remediation is agreed separately after the gaps are known.',
      },
      {
        title: 'CMMC / NIST 800-171 gap assessment',
        body: 'For Level 2, the agreed scope is assessed against all 110 requirements and each finding is tied to evidence. Remediation and any formal C3PAO assessment remain separate so the preparation work is not confused with certification.',
      },
      {
        title: 'HIPAA for practices without an IT department',
        body: 'The assessment follows electronic patient information through the systems and workflows used by the practice, then documents the safeguards, gaps, and next decisions without pretending one checklist establishes compliance.',
      },
    ],
    how: [
      {num: '1', title: 'Assess', body: 'We review the agreed systems, requirements, and available evidence, then document what is implemented and what cannot yet be supported.'},
      {num: '2', title: 'Plan', body: 'You receive a prioritized roadmap that names the evidence needed, the responsible owner, and the next practical step for each finding.'},
      {num: '3', title: 'Decide what to fix', body: 'After the assessment, you can address the findings internally or ask Helm to scope specific implementation work separately.'},
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
    desc: 'An alert that appears overnight can sit untouched until morning while an attacker moves to another device or account. Helm Watch gives covered Windows and Mac workstations round-the-clock monitoring, human investigation, and containment when suspicious activity becomes a real threat.',
    bestFor: 'businesses that want 24/7 monitoring and response for up to two eligible Windows or Mac workstations per covered user',
    metaDesc:
      'Managed device detection and response with 24/7 monitoring, human-triaged alerts, and containment from $40 per user monthly for up to two eligible devices.',
    price: '$40 / user / month',
    term: 'Month to month',
    priceDetail: '$200 monthly account minimum. Includes up to two eligible Windows or Mac workstations per covered user. Servers and other device classes are separately scoped. Managed device detection and response only at launch, with a 24/7 security operations center monitoring covered devices.',
    features: [
      {
        title: 'A SOC on duty when you are not',
        body: 'Security alerts do not wait for office hours. A 24/7 security operations center watches covered devices overnight, on weekends, and on holidays so suspicious activity can be investigated when it happens.',
      },
      {
        title: 'Response, not just another alert',
        body: 'Human analysts investigate suspicious activity instead of forwarding every raw alert to the customer. If a covered device is compromised, they can isolate it to help keep the activity from spreading.',
      },
      {
        title: 'You only hear about what matters',
        body: 'Analysts discard false alarms and escalate activity that needs attention. When something is real, you receive a plain-English explanation of what happened, what was done, and what needs to happen next.',
      },
    ],
    how: [
      {num: '1', title: 'Deploy', body: 'A lightweight security agent is installed on covered Windows and Mac devices using the rollout method agreed during qualification.'},
      {num: '2', title: 'Watch', body: 'The security operations center monitors the covered devices around the clock. Human analysts investigate suspicious activity and discard false alarms.'},
      {num: '3', title: 'Respond', body: 'When the activity is malicious, the response may include isolating the affected device. You receive a plain-English account of the incident and the action taken.'},
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
  'Not sure, help me choose',
];
