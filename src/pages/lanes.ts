import type {Lane} from './LanePage';

export const manufacturing: Lane = {
  slug: 'manufacturing',
  metaKeywords: ['CMMC gap assessment New Jersey', 'CMMC readiness for manufacturers', 'NIST 800-171 gap assessment', 'SPRS score support', 'defense supplier cybersecurity'],
  backdrop: 'aero',
  reportDomain: 'precision-mfg.com',
  metaTitle: 'CMMC Compliance for NJ Manufacturers & Defense Suppliers | Helm',
  metaDesc:
    'Fixed-fee CMMC Level 1 and Level 2 gap assessments for New Jersey manufacturers and defense subcontractors, scored against applicable NIST 800-171 requirements.',
  serviceType: 'CMMC readiness and managed cybersecurity for New Jersey manufacturers',
  eyebrow: 'NJ Manufacturers · Defense Suppliers',
  headline: 'Know what your defense contract requires before you affirm it.',
  sub: 'The wrong CMMC assumption can lead to unsupported answers or unnecessary work. Start with the contract clauses and the information your shop actually handles.',
  primaryCta: 'Book a CMMC gap assessment',
  ctaMode: 'book',
  statusChip: 'CMMC Phase II paused July 2026 · Phase I self-assessments remain',
  regulatoryUpdate: {
    title: 'Phase II paused, but current contract duties still matter.',
    changed: 'The Department suspended CMMC Phase II requirements on July 13, 2026. That paused the planned expansion of third-party Level 2 certification requirements.',
    unchanged: "Phase I self-assessments remain in force. The Department says it will continue enforcing NIST SP 800-171 Revision 2 through self-assessments and selected government-led assessments. Your contract also determines which existing DFARS duties apply, including incident reporting.",
  },
  pains: [
    {
      title: 'Know what the contract requires',
      body: "Before committing to covered work, review the solicitation, clauses, and information category. A shop that bids first can later discover that its systems or evidence do not support the required assessment.",
    },
    {
      title: 'Your score and affirmation need support',
      body: "A contracting officer or customer may ask how the company arrived at its SPRS number. If the assessment file cannot reproduce it, the company may struggle to support the answer. A gap assessment shows which requirements are implemented, which still need evidence, and which remain open.",
    },
    {
      title: 'Internal review still takes real time',
      body: "The 110 requirements reach into systems, policies, vendors, people, and daily shop workflows. A scoped assessment identifies what remains to be done, giving the company a basis for budgeting that work.",
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
      finding: 'IC3 received more than 3,600 ransomware complaints in 2025 and identified critical manufacturing among the most targeted critical-infrastructure sectors. These complaints include international reports and do not count New Jersey suppliers separately.',
      source: 'FBI 2025 Internet Crime Report',
      href: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf',
    },
  ],
  planTitle: 'Start with the contract, then protect the systems in scope.',
  planSub: 'First establish what must be assessed. Then address the email and eligible workstations involved in the work.',
  proof: {
    title: 'What the readiness work includes.',
    points: [
      'CMMC Level 1 & 2 gap assessments against NIST 800-171',
      'SPRS score calculation and submission support',
      'Scored findings and a prioritized remediation roadmap',
      'Managed protection for eligible Windows and Mac workstations',
      'Preparation kept separate from any formal assessor',
      'Fixed-fee assessment, with remediation scoped only after the gaps are known',
    ],
  },
  commonQuestions: [
    {
      question: 'How do we know whether Level 1 or Level 2 applies?',
      answer: "The level depends on the information you handle and the contract. FCI generally points to Level 1; CUI, including controlled drawings, specifications, and technical data, points to Level 2. Company size does not decide the level. Confirm the clauses and the information category with the prime in writing.",
      resource: {slug: 'cmmc-level-1-vs-level-2', label: 'Compare Level 1 and Level 2'},
    },
    {
      question: 'What should support an SPRS score?',
      answer: "Another qualified reviewer should be able to follow the assessment file and reach the same result. Keep the system boundary, current SSP, working papers, evidence references, assessment date, score calculation, and plan for unmet requirements together so the reviewer can trace the score.",
      resource: {slug: 'sprs-score-explained', label: 'See how SPRS scoring works'},
    },
    {
      question: 'What changed when CMMC Phase II was paused?',
      answer: "The planned Phase II expansion was suspended. Phase I self-assessments remain, and the Department says Revision 2 will still be enforced through self-assessments and selected government-led assessments. Use any new solicitation or contract as the controlling document.",
      resource: {slug: 'cmmc-deadline-checklist', label: 'Use the current readiness checklist'},
    },
    {
      question: 'What should a fixed-fee gap assessment deliver?',
      answer: "The assessment should define the agreed boundary and test the applicable requirements. Its findings should identify the evidence reviewed, use consistent scoring, and distinguish immediate corrections from longer remediation. That work prepares the company to make an accurate representation; it does not certify the company.",
      resource: {slug: 'ssp-poam-explained', label: 'Review the core evidence documents'},
    },
  ],
  resources: [
    {slug: 'cmmc-deadline-checklist', title: 'CMMC Deadline Checklist for Small Defense Contractors', note: 'Current requirements'},
    {slug: 'sprs-score-explained', title: 'SPRS Scores Explained', note: 'Scoring and evidence'},
    {slug: 'cmmc-level-1-vs-level-2', title: 'CMMC Level 1 vs. Level 2', note: 'Choose the right scope'},
  ],
  cta: {
    title: 'Do your current records support the requirement in the contract?',
    sub: 'A free 30-minute readiness call can clarify which requirement applies, what evidence to gather, and whether a fixed-fee assessment would be useful.',
    label: 'Book the readiness call',
  },
};

export const professionalServices: Lane = {
  slug: 'professional-services',
  metaKeywords: ['professional services cybersecurity New Jersey', 'law firm cybersecurity', 'CPA firm cybersecurity', 'managed cybersecurity', 'cyber insurance security controls'],
  backdrop: 'skyline',
  reportDomain: 'riveralaw.com',
  metaTitle: 'Cybersecurity for New Jersey Law Firms & CPAs | Helm',
  metaDesc:
    'Email impersonation checks, wire-fraud controls, and questionnaire readiness for New Jersey law and CPA firms. Start with a free domain scan.',
  eyebrow: 'New Jersey Law Firms · CPA Firms',
  headline: 'Protect the client information and payments your firm handles every day.',
  sub: "A compromised mailbox can redirect a payment, expose a confidential matter, or leave the firm unable to support an answer to an insurer or a client’s security questionnaire.",
  primaryCta: 'Get my free scan',
  industryLinks: [
    {to: '/law-firms/', label: 'Law firms', note: 'Client information and payment changes'},
    {to: '/accounting-firms/', label: 'Accounting and tax firms', note: 'Taxpayer data and written security plans'},
  ],
  pains: [
    {
      title: 'Wire fraud targets your inbox',
      body: 'An attacker can enter a real email thread and replace the account number on a closing, settlement, or tax payment. The message may look normal until the intended recipient says the money never arrived.',
    },
    {
      title: "Insurance answers need to match your controls",
      body: "Cyber-insurance forms ask about multi-factor authentication (MFA), email protection, staff training, backups, and incident response. An answer may describe more protection than the firm actually has. That mismatch may surface during a claim.",
    },
    {
      title: 'Client questionnaires need evidence',
      body: "A client may ask how the firm protects email and access, verifies payments, or responds to incidents. To support those answers, the firm needs current inventories, settings, procedures, and test records.",
    },
  ],
  evidence: [
    {
      value: '$3.05B',
      finding: 'IC3 recorded 24,768 business-email-compromise complaints and $3.05 billion in reported losses during 2025. These figures cover complaints across all industries, including international reports, rather than professional-services losses alone.',
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
  planTitle: "Protect daily work and support the answers your firm signs.",
  planSub: "Helm Core provides managed protection. Helm Command adds virtual chief information security officer (vCISO) leadership and evidence upkeep so you can support the security answers you give to clients and insurers.",
  proof: {
    title: "What you can put in place and show.",
    points: [
      'Payment-instruction protocol designed to prevent unverified changes',
      'Questionnaire answers tied to documented controls and evidence',
      "Published service scope and a written quote before work begins",
      'Direct leadership involvement with clear vendor attribution',
    ],
  },
  resources: [
    {slug: 'wire-fraud-prevention-law-firms', title: 'Wire-Fraud Prevention for Law Firms', note: 'Payment controls'},
    {slug: 'wisp-checklist-accounting-firms', title: 'WISP Checklist for Tax and Accounting Firms', note: 'Build the required plan'},
    {slug: 'cyber-insurance-questionnaire', title: 'Cyber-Insurance Questionnaire Checklist', note: 'Prepare your evidence'},
  ],
  cta: {
    title: 'Could a criminal send a convincing message in your firm’s name?',
    sub: 'The free automated scan checks the public email controls involved in domain impersonation and returns a plain-English report, usually in about a minute.',
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
  serviceType: 'Managed cybersecurity for New Jersey law firms',
  eyebrow: 'New Jersey Law Firms',
  headline: 'Cybersecurity for your law firm, alongside your existing IT team.',
  sub: "Helm manages protection for covered email, supported identities and eligible Windows and Mac workstations. Your IT provider handles everyday administration. Before choosing a service, confirm who can act on a suspicious account, restore access to matter files and help answer client security questionnaires.",
  primaryCta: 'Get my free scan',
  pains: [
    {
      title: 'A real thread can carry a fake payment change',
      body: "An attacker who compromises a mailbox can study the matter, then insert new wire instructions when the transfer is expected. The real participants and earlier messages are still there, which can make the fraudulent change look like part of the conversation.",
    },
    {
      title: 'Client information travels with the lawyer',
      body: "Confidential email and documents go with lawyers to court appearances and remote work. If a laptop is lost without encryption or remains signed in, someone may be able to open client information before the firm can revoke access.",
    },
    {
      title: 'Clients and carriers expect supportable answers',
      body: "Security questionnaires and insurance applications ask which devices, accounts, and procedures are protected, monitored, and tested. Before signing an answer, the firm needs records that show those controls are in place.",
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
      finding: 'Reported Business Email Compromise losses across all IC3 complaints in 2025. This total covers complaints across many industries, including international reports, rather than law firms alone.',
      source: 'FBI 2025 Internet Crime Report',
      href: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf',
    },
    {
      value: 'Reasonable care',
      finding: "In its 2006 opinion on electronic client files, New Jersey’s ethics committee calls for reasonable care against unauthorized access and professional judgment about safeguards for foreseeable attempts.",
      source: 'New Jersey Courts, ACPE Opinion 701',
      href: 'https://www.njcourts.gov/sites/default/files/notices/2006/03/ACPE_Opinion701_ElectronicStorage_12022005.pdf',
    },
  ],
  planTitle: "Where Core and Command fit",
  planSub: 'Start with the work your firm and IT provider already handle, then compare the scope you need help covering.',
  proof: {
    title: "What you can review before signing",
    points: [
      'Published service scope, prices and account minimums',
      'A sample scan report and a redacted deliverable',
      'The statement of work for the services being considered',
      'Who provides the monitoring and which platforms are covered',
      'Helm’s published data-handling practices and current control gaps',
    ],
  },
  commonQuestions: [
    {
      question: 'What should happen when wire instructions change?',
      answer: 'Pause the payment and call a known-good number already held in the matter file or engagement record. Do not use a number in the change request. Record who verified the instruction, when the call occurred, and who approved the release.',
      resource: {slug: 'wire-fraud-prevention-law-firms', label: 'Build the callback protocol'},
    },
    {
      question: 'Does DMARC stop mailbox compromise?',
      answer: "No. DMARC helps receiving systems reject unauthorized mail sent as your exact domain. A compromised real mailbox or a lookalike domain falls outside that protection, so firms still need mailbox protection, MFA, reporting, and a payment-verification process.",
      resource: {slug: 'what-is-dmarc', label: 'Understand what DMARC does'},
    },
    {
      question: 'Which devices belong in the confidentiality scope?',
      answer: 'Include every firm-owned or personally owned device that can reach client email, documents, billing, trust accounting, or saved sessions. Standard Helm Core coverage applies to eligible Windows and Mac computers. Phones and tablets require separate identity, email, and device-management controls.',
      resource: {slug: 'law-firm-device-security-checklist', label: 'Use the device checklist'},
    },
    {
      question: 'What evidence will a client or carrier expect?',
      answer: "Keep current inventories, configuration records, deployment status, training records, test results, incident contacts, and written payment procedures. Before submitting an answer, check that each control described in the policy is operating. If it is not, correct the control or the answer.",
      resource: {slug: 'cyber-insurance-questionnaire', label: 'Prepare supportable answers'},
    },
  ],
  resources: [
    {slug: 'law-firm-device-security-checklist', title: 'Law Firm Device Security Checklist', note: 'Protect work beyond the office'},
    {slug: 'wire-fraud-prevention-law-firms', title: 'Wire Fraud Prevention for Law Firms', note: 'Build a callback protocol'},
    {slug: 'cyber-insurance-questionnaire', title: 'Cyber-Insurance Questionnaire Checklist', note: 'Prepare supportable answers'},
  ],
  cta: {
    title: 'Could a client receive a convincing fake message from your domain?',
    sub: 'The free scan checks public email controls involved in domain impersonation and reports the findings in plain English, usually in about a minute.',
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
  headline: 'Protect client financial data through tax season and beyond.',
  sub: "Helm manages protection for covered email, supported identities and eligible Windows and Mac workstations alongside your existing IT provider. Review seasonal access, client portals and recovery together so your Written Information Security Plan (WISP) reflects the safeguards your firm uses.",
  primaryCta: 'Get my free scan',
  pains: [
    {
      title: 'One account can expose hundreds of clients',
      body: "A compromised mailbox or work computer can expose tax documents, identity information, and client contacts. An attacker may also use that account to send requests that look legitimate to those clients.",
    },
    {
      title: "Tax season makes malicious requests harder to spot",
      body: "During tax season, long hours and seasonal staff add to the pressure of urgent client messages and document portals. A malicious attachment or sign-in request can be easier to mistake for routine work in that setting.",
    },
    {
      title: 'A WISP must describe the real practice',
      body: "A downloaded WISP may leave out seasonal access, current vendors, or the systems holding client data. That mismatch can cause problems during a breach or review if the plan describes safeguards that are not actually operating.",
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
      href: 'https://www.irs.gov/newsroom/irs-security-summit-remind-tax-pros-they-need-a-written-information-security-plan-to-protect-client-data',
    },
    {
      value: '16 CFR 314',
      finding: 'The FTC Safeguards Rule lists tax preparation firms among covered financial institutions and requires a written security program. Applicability follows the firm’s activities; have the responsible adviser confirm which provisions apply.',
      source: 'FTC Safeguards Rule guidance',
      href: 'https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know',
    },
  ],
  planTitle: "Choose a service your firm can sustain through tax season",
  planSub: 'Review who keeps the WISP and evidence current when partners and staff are focused on filing work.',
  proof: {
    title: "What you can review before signing",
    points: [
      'Published service scope, prices and account minimums',
      'A sample scan report and a redacted deliverable',
      'The statement of work for the services being considered',
      'Who provides the monitoring and which platforms are covered',
      'Helm’s published data-handling practices and current control gaps',
    ],
  },
  commonQuestions: [
    {
      question: 'What should we check before tax season?',
      answer: "Check the account and device inventory against your permanent and seasonal staff list. Confirm who approves temporary access, who removes it after the engagement and which devices are covered. Agree with IT when changes can be made and what to recover first, before filing deadlines make those decisions urgent.",
      resource: {slug: 'employee-offboarding-checklist', label: 'Plan access removal and handover'},
    },
    {
      question: 'How do we know the WISP reflects our practice?',
      answer: "Trace one client engagement through intake, document exchange, preparation, filing and storage. Check the systems, providers and safeguards at each step against the plan. For any unresolved gap, agree who will handle it, their next action and what evidence will show it is closed.",
      resource: {slug: 'wisp-checklist-accounting-firms', label: 'Review the WISP checklist'},
    },
    {
      question: 'What should support a client or vendor security questionnaire?',
      answer: "Keep each question with its response, the systems and people it covers, the requested period and dated evidence. Check the records for controls operated by IT and application services, and leave unsupported claims unresolved. Review and approve the completed answers, including how any gaps are explained.",
      resource: {slug: 'cyber-insurance-questionnaire', label: 'Review the questionnaire evidence checklist'},
    },
  ],
  resources: [
    {slug: 'wisp-checklist-accounting-firms', title: 'WISP Checklist for Tax and Accounting Firms', note: 'Review the plan and safeguards'},
    {slug: 'employee-offboarding-checklist', title: 'Employee Offboarding Security Checklist', note: 'Close access cleanly'},
    {slug: 'backup-testing-insurers', title: 'What Insurers Mean by Tested Backups', note: 'Support your answers'},
  ],
  cta: {
    title: 'See what an outsider can learn from your domain.',
    sub: 'The free scan checks public email and web configuration and returns a plain-English report, usually in about a minute.',
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
  headline: 'Know where patient information can be exposed before a device or account is compromised.',
  sub: 'Patient information can appear in email, workstations, cloud systems, phones, backups, and vendor accounts. A smaller practice needs a complete view without trying to build its own security department.',
  primaryCta: 'Book a HIPAA readiness call',
  ctaMode: 'book',
  pains: [
    {
      title: "Patient information extends beyond the EHR",
      body: "The electronic health record (EHR) is one place to look for patient information. Email, imaging, billing, backups, tablets, phones, copiers, and vendor systems can hold it too. A risk analysis limited to the EHR can miss those systems, leaving gaps that are harder to reconstruct after an incident.",
    },
    {
      title: 'A compromised device can stop the day',
      body: 'Malicious activity on a front-desk or clinical workstation can expose patient information and interrupt scheduling, billing, communication, and care delivery at the same time.',
    },
    {
      title: 'HIPAA readiness needs evidence',
      body: "To explain its risk-analysis decisions, a practice needs a record of which systems were reviewed, what could go wrong, which safeguards exist, and who owns each unresolved issue. A completed checklist without those details leaves those decisions unexplained.",
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
      finding: "HHS used this historical definition when designing its Security Risk Assessment Tool for small and medium practices. The tool helps with risk analysis, but HHS cautions that using it does not itself establish compliance.",
      source: 'HHS SRA Tool user guide',
      href: 'https://www.hhs.gov/guidance/sites/default/files/hhs-guidance-documents//attachmenta-security_risk_assessment_tool_user_guide_v6.pdf',
    },
  ],
  planTitle: 'Protect daily work and document what still needs attention.',
  planSub: 'No single product covers the whole practice. Each service addresses a defined part of the risk analysis.',
  proof: {
    title: 'What each service covers, and what it does not.',
    points: [
      'Risk analysis work sized for smaller medical and dental practices',
      'Managed email protection without implying secure PHI delivery',
      'Round-the-clock monitoring for covered Windows and Mac workstations',
      'Documented findings and prioritized remediation decisions',
      'No claim that one tool or assessment makes a practice compliant',
    ],
  },
  commonQuestions: [
    {
      "question": "Does Core cover sending patient information by email?",
      "answer": "Core's email protection checks for threats such as phishing and impersonation. It excludes secure-message portals, encrypted outbound delivery and secure file transfer. Your practice approves the patient-information workflow with its advisers, while IT administers the email system. Confirm any separate delivery service and its support before relying on it."
    },
    {
      "question": "How do Helm and our IT provider handle an after-hours alert?",
      "answer": "For Core and Command, security partners run covered detection and automated containment continuously. Helm's human follow-up follows the service order; its published hours are Monday through Friday, 9 a.m. to 5 p.m. Eastern, excluding federal holidays. Your IT provider keeps help desk, patching, administration and routine remediation. Confirm containment authority, recovery ownership and IT availability before signing."
    },
    {
      "question": "What do we get from a separately scoped assessment?",
      "answer": "A gap assessment can provide documented findings and a prioritized roadmap. Agree the systems and workflows to review, the evidence needed and the deliverables in the written scope. Remediation is separately authorized, so confirm who will carry out the recommended changes."
    }
  ],
  resources: [
    {slug: 'hipaa-risk-analysis-medical-practices', title: 'HIPAA Risk Analysis for Medical Practices', note: 'Scope the whole practice'},
    {slug: 'hipaa-email-rules-small-practices', title: 'HIPAA Email Rules for Small Practices', note: 'Know when protection is not encryption'},
    {slug: 'what-a-soc-actually-does', title: 'What a 24/7 Security Operations Center Does', note: 'Understand device monitoring'},
  ],
  cta: {
    title: 'Does your last risk analysis include the systems you use today?',
    sub: 'A short readiness call can clarify which systems belong in scope, what evidence already exists, and whether a fixed-fee assessment would be useful.',
    label: 'Book the readiness call',
  },
};

export const contractors: Lane = {
  slug: 'contractors',
  backdrop: 'construction',
  reportDomain: 'summitbuilders.com',
  metaTitle: 'Cybersecurity for NJ Contractors & Trades | Helm',
  metaDesc:
    'Reduce exposure to fake invoices and hijacked payment instructions. Practical email, payment-verification, and readiness support for contractors and trades.',
  eyebrow: 'Contractors · Trades · Field Services',
  headline: 'One changed bank account can turn a paid invoice into an unpaid bill.',
  sub: "A fake supplier or GC message can redirect the payment while the legitimate vendor still expects to be paid. Customers and insurers may also ask you to show which security controls are in place.",
  primaryCta: 'Get my free scan',
  pains: [
    {
      title: 'Supplier invoice fraud',
      body: "An attacker can pose as a supplier or take over a real email thread to replace the bank details. The supplier may then ask why the payment has not arrived. Recovery can depend on how quickly the bank is contacted.",
    },
    {
      title: "Security questions from GCs and insurers",
      body: "Some general contractors and insurers ask subcontractors to document their controls for email, payments, access, or incidents. If you cannot support the answer with evidence, a bid, renewal, or claim can be delayed.",
    },
    {
      title: 'Field teams, office risk',
      body: "Estimators and office managers may review payment requests on phones while at job sites. With several jobs moving at once, changed instructions can look like another urgent task. Requiring staff to verify the change by phone gives it a separate check.",
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
      finding: 'IC3 recorded $3.05 billion in reported business-email-compromise losses during 2025. The total covers complaints across all industries, including international reports, rather than contractors alone.',
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
  planTitle: "Protect payment requests and covered devices. Document the controls customers ask about.",
  planSub: "Each service addresses a specific risk to money or access, or helps you answer a customer’s security requirements.",
  proof: {
    title: "Protection and readiness for your contracting business",
    points: [
      'Helm Core for compatible Microsoft 365 and Google Workspace environments',
      'Payment-verification protocol separately scoped to your approval process',
      'Device protection scoped to the actual covered fleet',
      'Published pricing and account minimums',
      "Readiness evidence scoped to the questionnaire you need to answer",
    ],
  },
  commonQuestions: [
    {
      "question": "Who verifies a supplier's changed bank details?",
      "answer": "Your staff are responsible for verifying the change and approving payment. Confirm changed bank details with an authorized supplier contact at a number already in your records. Helm can help define the verification protocol under a separate written scope for your approval process."
    },
    {
      "question": "Are job-site phones and tablets included in Helm Core?",
      "answer": "Phones and tablets need separate written scope. Core includes up to two eligible Windows or Mac workstations per covered user. Before you sign, Helm confirms the covered devices and any exclusions."
    },
    {
      "question": "What stays with our current IT provider?",
      "answer": "Your IT provider or internal team keeps responsibility for help desk, patching, administration, procurement and routine remediation unless a separate written scope says otherwise. Helm manages the defined security layer and coordinates exceptions with your named IT contact."
    }
  ],
  resources: [
    {slug: 'vendor-email-compromise-contractors', title: 'Vendor Email Compromise for Contractors', note: 'Protect the payment chain'},
    {slug: 'invoice-fraud-red-flags', title: 'Invoice-Fraud Red Flags', note: 'Verify changes'},
    {slug: 'job-site-devices-public-wifi', title: 'Job-Site Devices and Public Wi-Fi', note: 'Reduce field risk'},
  ],
  cta: {
    title: 'Could a supplier or customer receive a fake message in your name?',
    sub: 'The free scan checks public email controls involved in domain impersonation and returns a plain-English report, usually in about a minute.',
    label: 'Run the free scan',
  },
};
