import type {Lane} from './LanePage';

export const manufacturing: Lane = {
  slug: 'manufacturing',
  backdrop: 'aero',
  reportDomain: 'precision-mfg.com',
  metaTitle: 'CMMC Compliance for NJ Manufacturers & Defense Suppliers | Helm',
  metaDesc:
    'Fixed-fee CMMC Level 1 and Level 2 gap assessments for New Jersey manufacturers and defense subcontractors, scored against applicable NIST 800-171 requirements.',
  eyebrow: 'NJ Manufacturers · Defense Suppliers',
  headline: 'Which CMMC requirement applies to your contract?',
  sub: 'Start with the contract clauses and the information you handle. Then assess the right scope, evidence, and remediation work.',
  primaryCta: 'Book a CMMC gap assessment',
  ctaMode: 'book',
  statusChip: 'Phase 2 certification suspended July 2026 · self-assessment still in force',
  regulatoryUpdate: {
    title: 'The deadline moved. The requirement did not.',
    changed: 'Third-party CMMC certification was suspended on July 13, 2026.',
    unchanged: 'Level 1 and Level 2 self-assessment were not, and neither were your SPRS score, your Affirming Official\'s annual affirmation, or DFARS 72-hour incident reporting. Same 110 NIST 800-171 requirements, now enforced through self-assessments and selected government-led assessments.',
  },
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
      body: 'NIST 800-171 has 110 requirements. Interpreting them across systems, policies, and evidence takes focused technical and business time. A gap assessment shows where that work is before you fund it.',
    },
  ],
  evidence: [
    {
      value: 'Phase II paused',
      finding: 'The Department suspended CMMC Phase II on July 13, 2026, but says Phase I self-assessments remain in force and NIST SP 800-171 Revision 2 is still enforced through self-assessments and selected government-led assessments.',
      source: 'DoD CMMC program',
      href: 'https://dodcio.defense.gov/CMMC/About/-DoD/',
    },
    {
      value: '110 requirements',
      finding: 'The current Level 2 self-assessment covers 110 NIST SP 800-171 Revision 2 requirements every three years, with an annual affirmation. The contract and the information handled determine whether that scope applies.',
      source: 'DoD CMMC program',
      href: 'https://dodcio.defense.gov/CMMC/About/-DoD/',
    },
    {
      value: '3,600+',
      finding: 'IC3 received more than 3,600 ransomware complaints in 2025 and identified critical manufacturing among the most targeted critical-infrastructure sectors. This is national reporting, not a count of New Jersey suppliers.',
      source: 'FBI 2025 Internet Crime Report',
      href: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf',
    },
  ],
  planTitle: 'Build the right security layers around the contract.',
  planSub: 'Start with scope and evidence, then protect the mail and eligible devices involved in the work.',
  steps: [
    {
      num: '1',
      title: 'Helm Ready',
      body: 'A fixed-fee CMMC gap assessment maps the agreed scope against the applicable requirements and delivers scored findings, evidence needs, and a prioritized roadmap. Helm prepares the work but does not certify it.',
    },
    {
      num: '2',
      title: 'Helm Watch',
      body: 'Managed device protection watches covered Windows and Mac workstations around the clock, investigates suspicious activity, and isolates compromised devices when needed. Servers, shop-floor systems, and other device classes are separately scoped.',
    },
    {
      num: '3',
      title: 'Helm Mail',
      body: 'Managed email-threat protection, suspicious-message triage, simulations, and awareness learning help protect the cloud-email workflows employees use to exchange bids, drawings, invoices, and contract information. Helm Mail is not a CMMC certification by itself.',
    },
  ],
  proof: {
    title: 'Built for the defense supply chain.',
    points: [
      'CMMC Level 1 & 2 gap assessments against NIST 800-171',
      'SPRS score calculation and submission support',
      'Scored findings and a prioritized remediation roadmap',
      'Managed protection for eligible Windows and Mac workstations',
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
  evidence: [
    {
      value: '$3.05B',
      finding: 'IC3 recorded 24,768 business-email-compromise complaints and $3.05 billion in reported losses during 2025. These are nationwide figures across all industries, not professional-services losses alone.',
      source: 'FBI 2025 Internet Crime Report',
      href: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf',
    },
    {
      value: '29%',
      finding: 'In the ABA\'s 2023 technology survey, 29% of respondents reported that their firm had experienced a security incident. The survey definition included events such as lost or stolen computers and smartphones, so it is broader than confirmed data breaches.',
      source: 'ABA 2023 Cybersecurity TechReport',
      href: 'https://www.americanbar.org/groups/law_practice/resources/tech-report/2023/2023-cybersecurity-techreport/',
    },
    {
      value: 'Nearly 300',
      finding: 'The IRS received nearly 300 tax-professional data-breach reports affecting up to 250,000 clients in the first half of 2025. The figure covers reported tax-professional breaches, not every accounting firm.',
      source: 'IRS Security Summit',
      href: 'https://www.irs.gov/newsroom/security-summit-irs-reminds-tax-pros-to-guard-against-identity-theft-as-summer-series-wraps-up',
    },
  ],
  planTitle: 'Protection that fits a practice.',
  planSub: 'Managed for you. Priced per seat. Explained in English.',
  steps: [
    {
      num: '1',
      title: 'Helm Mail',
      body: 'Managed email-threat protection, suspicious-message reporting and triage, simulations, and awareness learning for compatible Microsoft 365 and Google Workspace environments.',
    },
    {
      num: '2',
      title: 'Helm Watch',
      body: 'Managed device protection watches covered Windows and Mac computers around the clock, investigates suspicious activity, and isolates compromised devices when needed.',
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
    {slug: 'wisp-checklist-accounting-firms', title: 'WISP Checklist for Tax and Accounting Firms', note: 'Build the required plan'},
    {slug: 'cyber-insurance-questionnaire', title: 'Cyber-Insurance Questionnaire Checklist', note: 'Prepare your evidence'},
  ],
  cta: {
    title: 'Would your firm catch the fake wire request?',
    sub: 'A free automated scan shows whether your public email controls make impersonation easier: plain-English report, usually in about a minute.',
    label: 'Run the free scan',
  },
};

export const lawFirms: Lane = {
  slug: 'law-firms',
  backdrop: 'legal',
  reportDomain: 'riveralaw.com',
  metaTitle: 'Cybersecurity for New Jersey Law Firms | Helm',
  metaDesc:
    'Managed email and device protection, wire-fraud controls, and security readiness for New Jersey law firms. Start with a free public-domain scan.',
  eyebrow: 'New Jersey Law Firms',
  headline: 'Protect the case, the client, and the payment.',
  sub: 'Confidential matters move through email, laptops, cloud systems, and payment workflows. Helm helps smaller firms protect each path without building an internal security department.',
  primaryCta: 'Get my free scan',
  pains: [
    {
      title: 'A real thread can carry a fake payment change',
      body: 'An attacker who compromises email can study a matter, imitate the people involved, and insert new wire instructions at the moment a transfer is expected.',
    },
    {
      title: 'Client information travels with the lawyer',
      body: 'Remote work and court appearances put confidential email and documents on laptops outside the office. A lost, unmonitored, or compromised device can become a client-confidentiality problem.',
    },
    {
      title: 'Clients and carriers expect supportable answers',
      body: 'Security questionnaires and insurance applications ask what is actually protected, monitored, tested, and documented. The answer should match current evidence.',
    },
  ],
  evidence: [
    {
      value: '29%',
      finding: 'ABA 2023 survey respondents said their firm had experienced a security incident. The survey definition included lost or stolen computers and smartphones, so this is broader than confirmed data breaches.',
      source: 'ABA 2023 Cybersecurity TechReport',
      href: 'https://www.americanbar.org/groups/law_practice/resources/tech-report/2023/2023-cybersecurity-techreport/',
    },
    {
      value: 'About $3B',
      finding: 'Reported Business Email Compromise losses across all IC3 complaints in 2025. This national figure covers many industries, not law firms alone.',
      source: 'FBI 2025 Internet Crime Report',
      href: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf',
    },
    {
      value: 'Rule 1.6(c)',
      finding: 'The ABA Model Rule says lawyers should make reasonable efforts to prevent unauthorized disclosure of, or access to, information relating to a client representation.',
      source: 'ABA cybersecurity duties guidance',
      href: 'https://www.americanbar.org/groups/law_practice/resources/law-practice-today/2019/cybersecurity-attorneys-legal-ethical/',
    },
  ],
  planTitle: 'Cover the inbox, the device, and the evidence.',
  planSub: 'Three managed layers, each tied to a risk a law-firm owner can recognize.',
  steps: [
    {
      num: '1',
      title: 'Helm Mail',
      body: 'Managed filtering, phishing and impersonation protection, suspicious-message triage, simulations, and awareness learning help reduce the chance that a convincing message reaches a payment approver.',
    },
    {
      num: '2',
      title: 'Helm Watch',
      body: 'A 24/7 security operations center monitors covered Windows and Mac devices, investigates suspicious activity, and isolates compromised devices before an incident spreads.',
    },
    {
      num: '3',
      title: 'Helm Ready',
      body: 'A fixed-fee readiness assessment ties insurance and client-questionnaire answers to current controls, evidence, and a prioritized remediation plan.',
    },
  ],
  proof: {
    title: 'Security sized for a working law firm.',
    points: [
      'Email protection and employee learning managed as one service',
      'Round-the-clock monitoring for covered Windows and Mac devices',
      'Payment-verification procedures that require a known-good callback',
      'Questionnaire and insurance answers tied to evidence',
      'Published scope, prices, and account minimums',
    ],
  },
  resources: [
    {slug: 'law-firm-device-security-checklist', title: 'Law Firm Device Security Checklist', note: 'Protect work beyond the office'},
    {slug: 'wire-fraud-prevention-law-firms', title: 'Wire Fraud Prevention for Law Firms', note: 'Build a callback protocol'},
    {slug: 'cyber-insurance-questionnaire', title: 'Cyber-Insurance Questionnaire Checklist', note: 'Prepare supportable answers'},
  ],
  cta: {
    title: 'Could someone convincingly impersonate your firm?',
    sub: 'The free scan checks public email controls that influence domain impersonation and reports the findings in plain English, usually in about a minute.',
    label: 'Run the free scan',
  },
};

export const accountingFirms: Lane = {
  slug: 'accounting-firms',
  backdrop: 'ledger',
  reportDomain: 'northstarcpa.com',
  metaTitle: 'Cybersecurity for New Jersey Accounting & Tax Firms | Helm',
  metaDesc:
    'Managed email and device protection plus WISP and security readiness for New Jersey CPA, accounting, and tax firms. Start with a free domain scan.',
  eyebrow: 'New Jersey CPA · Accounting · Tax Firms',
  headline: 'Tax data makes every inbox and work device worth protecting.',
  sub: 'A small accounting practice can hold years of identity, payroll, banking, and tax information. Helm helps protect the systems carrying that data and document the safeguards the firm relies on.',
  primaryCta: 'Get my free scan',
  pains: [
    {
      title: 'One account can expose hundreds of clients',
      body: 'A compromised mailbox or work computer can give an attacker tax documents, identity information, client contacts, and a credible platform for follow-on fraud.',
    },
    {
      title: 'Tax season compresses every decision',
      body: 'Long hours, seasonal staff, urgent client messages, and document portals create more opportunities for a malicious attachment or sign-in request to look routine.',
    },
    {
      title: 'A WISP must describe the real practice',
      body: 'A written plan is useful only when its named safeguards, responsible people, service providers, testing, and response steps match what the firm actually does.',
    },
  ],
  evidence: [
    {
      value: 'Nearly 300',
      finding: 'Tax-professional data breaches were reported to the IRS during the first half of 2025.',
      source: 'IRS Security Summit, August 2025',
      href: 'https://www.irs.gov/newsroom/security-summit-irs-reminds-tax-pros-to-guard-against-identity-theft-as-summer-series-wraps-up',
    },
    {
      value: 'Up to 250,000',
      finding: 'Clients may have been affected by those first-half 2025 tax-professional breach reports, according to the same IRS release.',
      source: 'IRS Security Summit, August 2025',
      href: 'https://www.irs.gov/newsroom/security-summit-irs-reminds-tax-pros-to-guard-against-identity-theft-as-summer-series-wraps-up',
    },
    {
      value: 'WISP required',
      finding: 'The IRS says tax professionals are required by law to maintain a Written Information Security Plan that is appropriate to the practice.',
      source: 'IRS WISP guidance',
      href: 'https://www.irs.gov/newsroom/tax-professional-tips-for-creating-a-data-security-plan',
    },
    {
      value: '16 CFR 314',
      finding: 'The FTC Safeguards Rule explicitly lists tax preparation firms among the examples of covered financial institutions and requires a written information-security program.',
      source: 'FTC Safeguards Rule guidance',
      href: 'https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know',
    },
  ],
  planTitle: 'Protect the work and document the safeguards.',
  planSub: 'The same controls that reduce risk should also make the WISP and client answers more accurate.',
  steps: [
    {
      num: '1',
      title: 'Helm Mail',
      body: 'Managed filtering, phishing protection, suspicious-message triage, simulations, and awareness learning help defend the email path used for client documents, payment requests, and tax-season impersonation.',
    },
    {
      num: '2',
      title: 'Helm Watch',
      body: 'Covered Windows and Mac devices receive 24/7 monitoring, human investigation, and containment when suspicious activity becomes a real threat.',
    },
    {
      num: '3',
      title: 'Helm Ready',
      body: 'A fixed-fee readiness assessment reviews the controls and evidence behind a WISP, insurance application, or client security questionnaire. Remediation is separately scoped.',
    },
  ],
  proof: {
    title: 'A practical security baseline for tax and accounting work.',
    points: [
      'Managed protection for compatible Microsoft 365 or Google Workspace email',
      'Round-the-clock monitoring for covered Windows and Mac devices',
      'WISP findings tied to responsible owners and evidence',
      'Support for accurate insurance and client-questionnaire responses',
      'Published pricing and account minimums',
    ],
  },
  resources: [
    {slug: 'wisp-checklist-accounting-firms', title: 'WISP Checklist for Tax and Accounting Firms', note: 'Build the required plan'},
    {slug: 'employee-offboarding-checklist', title: 'Employee Offboarding Security Checklist', note: 'Close access cleanly'},
    {slug: 'backup-testing-insurers', title: 'What Insurers Mean by Tested Backups', note: 'Support your answers'},
  ],
  cta: {
    title: 'Start with the public controls around your domain.',
    sub: 'The free scan checks email and web configuration visible from the outside and returns a plain-English report, usually in about a minute.',
    label: 'Run the free scan',
  },
};

export const medicalPractices: Lane = {
  slug: 'medical-practices',
  backdrop: 'clinical',
  reportDomain: 'harborfamilymedicine.com',
  metaTitle: 'Cybersecurity & HIPAA Readiness for NJ Medical Practices | Helm',
  metaDesc:
    'Managed email and device protection plus HIPAA Security Rule readiness for independent New Jersey medical and dental practices.',
  eyebrow: 'New Jersey Medical · Dental Practices',
  headline: 'Protect patient information without turning the practice into a security department.',
  sub: 'Patient care depends on email, workstations, cloud systems, and vendors staying available and trustworthy. Helm helps smaller practices identify risk, protect everyday work, and document the next steps.',
  primaryCta: 'Book a HIPAA readiness call',
  ctaMode: 'book',
  pains: [
    {
      title: 'The EHR is not the whole risk analysis',
      body: 'Electronic patient information can also appear in email, workstations, imaging workflows, billing systems, backups, tablets, phones, copiers, and vendor systems.',
    },
    {
      title: 'A compromised device can stop the day',
      body: 'Malicious activity on a front-desk or clinical workstation can threaten patient information and interrupt scheduling, billing, communication, and care delivery.',
    },
    {
      title: 'HIPAA readiness needs evidence',
      body: 'A risk analysis should identify the systems, threats, vulnerabilities, current safeguards, responsible owners, and documented remediation decisions across the practice.',
    },
  ],
  evidence: [
    {
      value: '102%',
      finding: 'Increase in reports of large healthcare breaches from 2018 through 2023, according to HHS. This sector-wide figure includes organizations much larger than independent practices.',
      source: 'HHS HIPAA Security Rule proposal',
      href: 'https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/index.html',
    },
    {
      value: '1,002%',
      finding: 'Increase in the number of individuals affected by reported large healthcare breaches from 2018 through 2023. HHS attributes much of the increase to hacking and ransomware.',
      source: 'HHS HIPAA Security Rule proposal',
      href: 'https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/index.html',
    },
    {
      value: '1 to 10 providers',
      finding: 'The historical HHS definition used to design its small and medium practice Security Risk Assessment Tool. HHS cautions that the tool assists with risk analysis but does not itself establish compliance.',
      source: 'HHS SRA Tool user guide',
      href: 'https://www.hhs.gov/guidance/sites/default/files/hhs-guidance-documents//attachmenta-security_risk_assessment_tool_user_guide_v6.pdf',
    },
  ],
  planTitle: 'Protect daily work, then document what remains.',
  planSub: 'HIPAA readiness is broader than a product. These services cover specific parts of the practice risk picture.',
  steps: [
    {
      num: '1',
      title: 'Helm Mail',
      body: 'Managed filtering, phishing protection, suspicious-message triage, simulations, and awareness learning protect compatible business email. Secure-message delivery and secure file transfer are not included and are separately scoped when required.',
    },
    {
      num: '2',
      title: 'Helm Watch',
      body: 'A 24/7 security operations center monitors covered Windows and Mac workstations, investigates alerts, and isolates compromised devices. Phones, tablets, servers, and other device classes require separate scoping.',
    },
    {
      num: '3',
      title: 'Helm Ready',
      body: 'A fixed-fee HIPAA Security Rule gap assessment reviews the agreed scope, documents findings, and produces a prioritized remediation roadmap. Helm does not certify HIPAA compliance.',
    },
  ],
  proof: {
    title: 'Clear scope for an independent practice.',
    points: [
      'Risk analysis work sized for smaller medical and dental practices',
      'Managed email protection without implying secure PHI delivery',
      'Round-the-clock monitoring for covered Windows and Mac workstations',
      'Documented findings and prioritized remediation decisions',
      'No claim that one tool or assessment makes a practice compliant',
    ],
  },
  resources: [
    {slug: 'hipaa-risk-analysis-medical-practices', title: 'HIPAA Risk Analysis for Medical Practices', note: 'Scope the whole practice'},
    {slug: 'hipaa-email-rules-small-practices', title: 'HIPAA Email Rules for Small Practices', note: 'Know when protection is not encryption'},
    {slug: 'what-a-soc-actually-does', title: 'What a 24/7 Security Operations Center Does', note: 'Understand device monitoring'},
  ],
  cta: {
    title: 'Is your last HIPAA risk analysis still accurate?',
    sub: 'Use a short readiness call to clarify the systems in scope, the evidence already available, and whether a fixed-fee assessment is the right next step.',
    label: 'Book the readiness call',
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
  evidence: [
    {
      value: '17%',
      finding: 'Contracting services, including electricians and general contractors, represented 17% of the more than 1,400 non-critical-sector ransomware complaints reported to IC3 in 2025.',
      source: 'FBI 2025 Internet Crime Report',
      href: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf',
    },
    {
      value: '$3.05B',
      finding: 'IC3 recorded $3.05 billion in reported business-email-compromise losses during 2025. The total covers all industries nationwide, not contractors alone.',
      source: 'FBI 2025 Internet Crime Report',
      href: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf',
    },
    {
      value: '2 channels',
      finding: 'The FBI recommends verifying requests to change account information through a secondary channel or two-factor authentication. A payment callback gives the change a check outside the message that requested it.',
      source: 'FBI business-email-compromise guidance',
      href: 'https://www.ic3.gov/PSA/2024/PSA240911',
    },
  ],
  planTitle: 'Protect the inbox, the device, and the proof.',
  planSub: 'Three managed layers for payment workflows, covered computers, and the evidence a customer or insurer requests.',
  steps: [
    {
      num: '1',
      title: 'Helm Mail',
      body: 'Helm Mail combines managed phishing and impersonation protection with suspicious-message triage, simulations, and awareness learning for compatible Microsoft 365 and Google Workspace environments.',
    },
    {
      num: '2',
      title: 'Helm Watch',
      body: 'Managed device protection watches covered Windows and Mac computers used for estimating, billing, and administration around the clock. Phones, tablets, servers, and other device classes are separately scoped.',
    },
    {
      num: '3',
      title: 'Helm Ready',
      body: 'Helm Ready documents the controls you actually have and identifies unsupported answers before they reach a GC or carrier.',
    },
  ],
  proof: {
    title: 'Built for how the trades actually run.',
    points: [
      'Helm Mail for compatible Microsoft 365 and Google Workspace environments',
      'Payment-verification protocol separately scoped to your approval process',
      'Device protection scoped to the actual covered fleet',
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
