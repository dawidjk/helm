const manufacturing = {
  slug: "manufacturing",
  backdrop: "aero",
  reportDomain: "precision-mfg.com",
  metaTitle: "CMMC Compliance for NJ Manufacturers & Defense Suppliers | Helm",
  metaDesc: "Fixed-fee CMMC Level 1 and Level 2 gap assessments for New Jersey manufacturers and defense subcontractors, scored against applicable NIST 800-171 requirements.",
  serviceType: "CMMC readiness and managed cybersecurity for New Jersey manufacturers",
  eyebrow: "NJ Manufacturers · Defense Suppliers",
  headline: "Know what your defense contract requires before you affirm it.",
  sub: "The wrong CMMC assumption can lead to unsupported answers or unnecessary work. Start with the contract clauses and the information your shop actually handles.",
  primaryCta: "Book a CMMC gap assessment",
  ctaMode: "book",
  statusChip: "CMMC Phase II paused July 2026 · Phase I self-assessments remain",
  regulatoryUpdate: {
    title: "Phase II paused, but current contract duties still matter.",
    changed: "The Department suspended CMMC Phase II requirements on July 13, 2026. That paused the planned expansion of third-party Level 2 certification requirements.",
    unchanged: "Phase I self-assessments remain in force. The Department says it will continue enforcing NIST SP 800-171 Revision 2 through self-assessments and selected government-led assessments. Existing DFARS duties, including applicable incident reporting, also remain contract driven."
  },
  pains: [
    {
      title: "Know what the contract requires",
      body: "A shop can bid on covered work and later discover that its systems or evidence do not support the required assessment. Review the solicitation, clauses, and information category before making the commitment."
    },
    {
      title: "Your score and affirmation need support",
      body: "If the SPRS number cannot be reproduced from the assessment file, the company may struggle to support it when a contracting officer or customer asks. A gap assessment shows what is implemented, what still needs evidence, and what remains open."
    },
    {
      title: "Internal review still takes real time",
      body: "The 110 requirements touch systems, policies, vendors, people, and daily shop workflows. A scoped assessment shows how much work is actually open before the company spends against a guess."
    }
  ],
  evidence: [
    {
      value: "Phase II paused",
      finding: "The Department suspended CMMC Phase II on July 13, 2026, but says Phase I self-assessments remain in force and NIST SP 800-171 Revision 2 is still enforced through self-assessments and selected government-led assessments.",
      source: "DoD CMMC program",
      href: "https://dodcio.defense.gov/CMMC/About/-DoD/"
    },
    {
      value: "110 requirements",
      finding: "The current Level 2 self-assessment covers 110 NIST SP 800-171 Revision 2 requirements every three years, with an annual affirmation. The contract and the information handled determine whether that scope applies.",
      source: "DoD CMMC program",
      href: "https://dodcio.defense.gov/CMMC/About/-DoD/"
    },
    {
      value: "3,600+",
      finding: "IC3 received more than 3,600 ransomware complaints in 2025 and identified critical manufacturing among the most targeted critical-infrastructure sectors. This is national reporting, not a count of New Jersey suppliers.",
      source: "FBI 2025 Internet Crime Report",
      href: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
    }
  ],
  planTitle: "Start with the contract, then protect the systems in scope.",
  planSub: "First establish what must be assessed. Then address the email and eligible workstations involved in the work.",
  steps: [
    {
      num: "1",
      title: "Helm Ready",
      body: "A fixed-fee CMMC gap assessment maps the agreed scope against the applicable requirements and delivers scored findings, evidence needs, and a prioritized roadmap. Helm prepares the work but does not certify it."
    },
    {
      num: "2",
      title: "Helm Watch",
      body: "Managed device protection watches covered Windows and Mac workstations around the clock, investigates suspicious activity, and isolates compromised devices when needed. Servers, shop-floor systems, and other device classes are separately scoped."
    },
    {
      num: "3",
      title: "Helm Mail",
      body: "Managed email-threat protection, suspicious-message triage, simulations, and awareness learning help protect the cloud-email workflows employees use to exchange bids, drawings, invoices, and contract information. Helm Mail is not a CMMC certification by itself."
    }
  ],
  proof: {
    title: "What the readiness work includes.",
    points: [
      "CMMC Level 1 & 2 gap assessments against NIST 800-171",
      "SPRS score calculation and submission support",
      "Scored findings and a prioritized remediation roadmap",
      "Managed protection for eligible Windows and Mac workstations",
      "Preparation kept separate from any formal assessor",
      "Fixed-fee assessment, with remediation scoped only after the gaps are known"
    ]
  },
  commonQuestions: [
    {
      question: "How do we know whether Level 1 or Level 2 applies?",
      answer: "Start with the information and the contract. FCI generally points to Level 1. CUI, including controlled drawings, specifications, and technical data, points to Level 2. Company size does not decide the level. Confirm the clauses and the information category with the prime in writing.",
      resource: { slug: "cmmc-level-1-vs-level-2", label: "Compare Level 1 and Level 2" }
    },
    {
      question: "What should support an SPRS score?",
      answer: "Keep the system boundary, current SSP, working papers, evidence references, assessment date, score calculation, and plan for unmet requirements together. Another qualified reviewer should be able to follow that file and reach the same result.",
      resource: { slug: "sprs-score-explained", label: "See how SPRS scoring works" }
    },
    {
      question: "What changed when CMMC Phase II was paused?",
      answer: "The planned Phase II expansion was suspended. Phase I self-assessments remain, and the Department says Revision 2 will still be enforced through self-assessments and selected government-led assessments. Treat any new solicitation or contract as the controlling document.",
      resource: { slug: "cmmc-deadline-checklist", label: "Use the current readiness checklist" }
    },
    {
      question: "What should a fixed-fee gap assessment deliver?",
      answer: "It should define the agreed boundary, test the applicable requirements, identify the evidence reviewed, score findings consistently, and separate immediate corrections from longer remediation. It should prepare the company to make an accurate representation, not certify the company.",
      resource: { slug: "ssp-poam-explained", label: "Review the core evidence documents" }
    }
  ],
  resources: [
    { slug: "cmmc-deadline-checklist", title: "CMMC Deadline Checklist for Small Defense Contractors", note: "Current requirements" },
    { slug: "sprs-score-explained", title: "SPRS Scores Explained", note: "Scoring and evidence" },
    { slug: "cmmc-level-1-vs-level-2", title: "CMMC Level 1 vs. Level 2", note: "Choose the right scope" }
  ],
  cta: {
    title: "Do your current records support the requirement in the contract?",
    sub: "A free 30-minute readiness call can clarify which requirement applies, what evidence to gather, and whether a fixed-fee assessment would be useful.",
    label: "Book the readiness call"
  }
};
const professionalServices = {
  slug: "professional-services",
  backdrop: "skyline",
  reportDomain: "riveralaw.com",
  metaTitle: "Cybersecurity for New Jersey Law Firms & CPAs | Helm",
  metaDesc: "Email impersonation checks, wire-fraud controls, and questionnaire readiness for New Jersey law and CPA firms. Start with a free domain scan.",
  eyebrow: "New Jersey Law Firms · CPA Firms",
  headline: "Protect the client information and payments your firm handles every day.",
  sub: "A compromised mailbox can redirect a payment, expose a confidential matter, or leave the firm unable to support an insurance or client-security answer.",
  primaryCta: "Get my free scan",
  pains: [
    {
      title: "Wire fraud targets your inbox",
      body: "An attacker can enter a real email thread and replace the account number on a closing, settlement, or tax payment. The message may look normal until the intended recipient says the money never arrived."
    },
    {
      title: "Your carrier is asking harder questions",
      body: "Cyber-insurance forms ask about MFA, email protection, staff training, backups, and incident response. If the answer on the form is broader than the control in place, the difference may surface during a claim."
    },
    {
      title: "Client questionnaires need evidence",
      body: "A client may ask how the firm protects email, payments, access, or incidents. Current inventories, settings, procedures, and test records give the firm an answer it can support."
    }
  ],
  evidence: [
    {
      value: "$3.05B",
      finding: "IC3 recorded 24,768 business-email-compromise complaints and $3.05 billion in reported losses during 2025. These are nationwide figures across all industries, not professional-services losses alone.",
      source: "FBI 2025 Internet Crime Report",
      href: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
    },
    {
      value: "29%",
      finding: "In the ABA's 2023 technology survey, 29% of respondents reported that their firm had experienced a security incident. The survey definition included events such as lost or stolen computers and smartphones, so it is broader than confirmed data breaches.",
      source: "ABA 2023 Cybersecurity TechReport",
      href: "https://www.americanbar.org/groups/law_practice/resources/tech-report/2023/2023-cybersecurity-techreport/"
    },
    {
      value: "Nearly 300",
      finding: "The IRS received nearly 300 tax-professional data-breach reports affecting up to 250,000 clients in the first half of 2025. The figure covers reported tax-professional breaches, not every accounting firm.",
      source: "IRS Security Summit",
      href: "https://www.irs.gov/newsroom/security-summit-irs-reminds-tax-pros-to-guard-against-identity-theft-as-summer-series-wraps-up"
    }
  ],
  planTitle: "Protect the inbox, the work devices, and the answers the firm signs.",
  planSub: "Each service addresses a specific part of the risk instead of treating every problem as the same security project.",
  steps: [
    {
      num: "1",
      title: "Helm Mail",
      body: "Managed email-threat protection, suspicious-message reporting and triage, simulations, and awareness learning for compatible Microsoft 365 and Google Workspace environments."
    },
    {
      num: "2",
      title: "Helm Watch",
      body: "Managed device protection watches covered Windows and Mac computers around the clock, investigates suspicious activity, and isolates compromised devices when needed."
    },
    {
      num: "3",
      title: "Helm Ready",
      body: "A fixed-fee assessment for cyber-insurance or client-questionnaire readiness. Any remediation follows under a separate written scope."
    }
  ],
  proof: {
    title: "What the firm can put in place and show.",
    points: [
      "Payment-instruction protocol designed to prevent unverified changes",
      "Questionnaire answers tied to documented controls and evidence",
      "Published scope and pricing before work begins",
      "Direct leadership involvement with clear vendor attribution"
    ]
  },
  resources: [
    { slug: "wire-fraud-prevention-law-firms", title: "Wire-Fraud Prevention for Law Firms", note: "Payment controls" },
    { slug: "wisp-checklist-accounting-firms", title: "WISP Checklist for Tax and Accounting Firms", note: "Build the required plan" },
    { slug: "cyber-insurance-questionnaire", title: "Cyber-Insurance Questionnaire Checklist", note: "Prepare your evidence" }
  ],
  cta: {
    title: "Could a criminal send a convincing message in your firm’s name?",
    sub: "The free automated scan checks the public email controls involved in domain impersonation and returns a plain-English report, usually in about a minute.",
    label: "Run the free scan"
  }
};
const lawFirms = {
  slug: "law-firms",
  backdrop: "legal",
  reportDomain: "riveralaw.com",
  metaTitle: "Cybersecurity for New Jersey Law Firms | Helm",
  metaDesc: "Managed email and device protection, wire-fraud controls, and security readiness for New Jersey law firms. Start with a free public-domain scan.",
  serviceType: "Managed cybersecurity for New Jersey law firms",
  eyebrow: "New Jersey Law Firms",
  headline: "Keep one compromised account from becoming a client or payment crisis.",
  sub: "Confidential matters move through email, laptops, cloud systems, and payment workflows. A failure in any one of them can expose client information or send money to the wrong account.",
  primaryCta: "Get my free scan",
  pains: [
    {
      title: "A real thread can carry a fake payment change",
      body: "An attacker who compromises a mailbox can study the matter and insert new wire instructions when the transfer is expected. Staff may see the real participants and history around the fraudulent change."
    },
    {
      title: "Client information travels with the lawyer",
      body: "Remote work and court appearances put confidential email and documents on laptops outside the office. If a device is lost without encryption or remains signed in, someone may be able to open client information before the firm can revoke access."
    },
    {
      title: "Clients and carriers expect supportable answers",
      body: "Security questionnaires and insurance applications ask which devices, accounts, and procedures are protected, monitored, and tested. The firm needs records that match the answer it signs."
    }
  ],
  evidence: [
    {
      value: "29%",
      finding: "ABA 2023 survey respondents said their firm had experienced a security incident. The survey definition included lost or stolen computers and smartphones, so this is broader than confirmed data breaches.",
      source: "ABA 2023 Cybersecurity TechReport",
      href: "https://www.americanbar.org/groups/law_practice/resources/tech-report/2023/2023-cybersecurity-techreport/"
    },
    {
      value: "About $3B",
      finding: "Reported Business Email Compromise losses across all IC3 complaints in 2025. This national figure covers many industries, not law firms alone.",
      source: "FBI 2025 Internet Crime Report",
      href: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
    },
    {
      value: "Reasonable care",
      finding: "New Jersey ethics guidance says attorneys should exercise reasonable care against unauthorized access to client information and use professional judgment to select safeguards for foreseeable attempts.",
      source: "New Jersey Courts, ACPE Opinion 701",
      href: "https://www.njcourts.gov/sites/default/files/notices/2006/03/ACPE_Opinion701_ElectronicStorage_12022005.pdf"
    }
  ],
  planTitle: "Protect the message, the device, and the decision to release money.",
  planSub: "Each layer addresses a different way a confidential matter or payment can be exposed.",
  steps: [
    {
      num: "1",
      title: "Helm Mail",
      body: "Managed filtering, phishing and impersonation protection, suspicious-message triage, simulations, and awareness learning help reduce the chance that a convincing message reaches a payment approver."
    },
    {
      num: "2",
      title: "Helm Watch",
      body: "A 24/7 security operations center monitors covered Windows and Mac devices, investigates suspicious activity, and isolates compromised devices before an incident spreads."
    },
    {
      num: "3",
      title: "Helm Ready",
      body: "A fixed-fee readiness assessment ties insurance and client-questionnaire answers to current controls, evidence, and a prioritized remediation plan."
    }
  ],
  proof: {
    title: "What the firm can put in place.",
    points: [
      "Email protection and employee learning managed as one service",
      "Round-the-clock monitoring for covered Windows and Mac devices",
      "Payment-verification procedures that require a known-good callback",
      "Questionnaire and insurance answers tied to evidence",
      "Published scope, prices, and account minimums"
    ]
  },
  commonQuestions: [
    {
      question: "What should happen when wire instructions change?",
      answer: "Pause the payment and call a known-good number already held in the matter file or engagement record. Do not use a number in the change request. Record who verified the instruction, when the call occurred, and who approved the release.",
      resource: { slug: "wire-fraud-prevention-law-firms", label: "Build the callback protocol" }
    },
    {
      question: "Does DMARC stop mailbox compromise?",
      answer: "No. DMARC helps receiving systems reject unauthorized mail sent as your exact domain. It does not stop an attacker using a compromised real mailbox or a lookalike domain. Firms still need mailbox protection, MFA, reporting, and a payment-verification process.",
      resource: { slug: "what-is-dmarc", label: "Understand what DMARC does" }
    },
    {
      question: "Which devices belong in the confidentiality scope?",
      answer: "Include every firm-owned or personally owned device that can reach client email, documents, billing, trust accounting, or saved sessions. Standard Helm Watch coverage applies to eligible Windows and Mac computers. Phones and tablets require separate identity, email, and device-management controls.",
      resource: { slug: "law-firm-device-security-checklist", label: "Use the device checklist" }
    },
    {
      question: "What evidence will a client or carrier expect?",
      answer: "Keep current inventories, configuration records, deployment status, training records, test results, incident contacts, and written payment procedures. If the policy describes a control that is not operating, correct the control or the answer before submitting it.",
      resource: { slug: "cyber-insurance-questionnaire", label: "Prepare supportable answers" }
    }
  ],
  resources: [
    { slug: "law-firm-device-security-checklist", title: "Law Firm Device Security Checklist", note: "Protect work beyond the office" },
    { slug: "wire-fraud-prevention-law-firms", title: "Wire Fraud Prevention for Law Firms", note: "Build a callback protocol" },
    { slug: "cyber-insurance-questionnaire", title: "Cyber-Insurance Questionnaire Checklist", note: "Prepare supportable answers" }
  ],
  cta: {
    title: "Could a client receive a convincing fake message from your domain?",
    sub: "The free scan checks public email controls involved in domain impersonation and reports the findings in plain English, usually in about a minute.",
    label: "Run the free scan"
  }
};
const accountingFirms = {
  slug: "accounting-firms",
  backdrop: "ledger",
  reportDomain: "northstarcpa.com",
  metaTitle: "Cybersecurity for New Jersey Accounting & Tax Firms | Helm",
  metaDesc: "Managed email and device protection plus WISP and security readiness for New Jersey CPA, accounting, and tax firms. Start with a free domain scan.",
  eyebrow: "New Jersey CPA · Accounting · Tax Firms",
  headline: "One compromised account can expose years of client tax data.",
  sub: "Identity, payroll, banking, and tax information move through email, workstations, portals, and vendor systems. The firm needs to protect those paths and keep its WISP aligned with the safeguards actually in place.",
  primaryCta: "Get my free scan",
  pains: [
    {
      title: "One account can expose hundreds of clients",
      body: "A compromised mailbox or work computer can expose tax documents, identity information, and client contacts. The same account can then be used to send believable requests to those clients."
    },
    {
      title: "Tax season compresses every decision",
      body: "During tax season, long hours, seasonal staff, urgent client messages, and document portals make a malicious attachment or sign-in request easier to mistake for routine work."
    },
    {
      title: "A WISP must describe the real practice",
      body: "A downloaded WISP may omit seasonal access, current vendors, or the systems holding client data. If the document promises safeguards that are not operating, the mismatch can create a problem during a breach or review."
    }
  ],
  evidence: [
    {
      value: "Nearly 300",
      finding: "Tax-professional data breaches were reported to the IRS during the first half of 2025.",
      source: "IRS Security Summit, August 2025",
      href: "https://www.irs.gov/newsroom/security-summit-irs-reminds-tax-pros-to-guard-against-identity-theft-as-summer-series-wraps-up"
    },
    {
      value: "Up to 250,000",
      finding: "Clients may have been affected by those first-half 2025 tax-professional breach reports, according to the same IRS release.",
      source: "IRS Security Summit, August 2025",
      href: "https://www.irs.gov/newsroom/security-summit-irs-reminds-tax-pros-to-guard-against-identity-theft-as-summer-series-wraps-up"
    },
    {
      value: "WISP required",
      finding: "The IRS says tax professionals are required by law to maintain a Written Information Security Plan that is appropriate to the practice.",
      source: "IRS WISP guidance",
      href: "https://www.irs.gov/newsroom/tax-professional-tips-for-creating-a-data-security-plan"
    },
    {
      value: "16 CFR 314",
      finding: "The FTC Safeguards Rule explicitly lists tax preparation firms among the examples of covered financial institutions and requires a written information-security program.",
      source: "FTC Safeguards Rule guidance",
      href: "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know"
    }
  ],
  planTitle: "Protect the work, then make the WISP match it.",
  planSub: "The records behind each control help the firm answer clients, insurers, and regulators without guessing.",
  steps: [
    {
      num: "1",
      title: "Helm Mail",
      body: "Managed filtering, phishing protection, suspicious-message triage, simulations, and awareness learning help defend the email path used for client documents, payment requests, and tax-season impersonation."
    },
    {
      num: "2",
      title: "Helm Watch",
      body: "Covered Windows and Mac devices receive 24/7 monitoring, human investigation, and containment when suspicious activity becomes a real threat."
    },
    {
      num: "3",
      title: "Helm Ready",
      body: "A fixed-fee readiness assessment reviews the controls and evidence behind a WISP, insurance application, or client security questionnaire. Remediation is separately scoped."
    }
  ],
  proof: {
    title: "What the firm can protect and document.",
    points: [
      "Managed protection for compatible Microsoft 365 or Google Workspace email",
      "Round-the-clock monitoring for covered Windows and Mac devices",
      "WISP findings tied to responsible owners and evidence",
      "Support for accurate insurance and client-questionnaire responses",
      "Published pricing and account minimums"
    ]
  },
  resources: [
    { slug: "wisp-checklist-accounting-firms", title: "WISP Checklist for Tax and Accounting Firms", note: "Build the required plan" },
    { slug: "employee-offboarding-checklist", title: "Employee Offboarding Security Checklist", note: "Close access cleanly" },
    { slug: "backup-testing-insurers", title: "What Insurers Mean by Tested Backups", note: "Support your answers" }
  ],
  cta: {
    title: "See what an outsider can learn from your domain.",
    sub: "The free scan checks public email and web configuration and returns a plain-English report, usually in about a minute.",
    label: "Run the free scan"
  }
};
const medicalPractices = {
  slug: "medical-practices",
  backdrop: "clinical",
  reportDomain: "harborfamilymedicine.com",
  metaTitle: "Cybersecurity & HIPAA Readiness for NJ Medical Practices | Helm",
  metaDesc: "Managed email and device protection plus HIPAA Security Rule readiness for independent New Jersey medical and dental practices.",
  eyebrow: "New Jersey Medical · Dental Practices",
  headline: "Know where patient information can be exposed before a device or account is compromised.",
  sub: "Patient information can appear in email, workstations, cloud systems, phones, backups, and vendor accounts. A smaller practice needs a complete view without trying to build its own security department.",
  primaryCta: "Book a HIPAA readiness call",
  ctaMode: "book",
  pains: [
    {
      title: "The EHR is not the whole risk analysis",
      body: "A practice that reviews only the EHR can miss patient information in email, imaging, billing, backups, tablets, phones, copiers, and vendor systems. Those gaps become harder to reconstruct after an incident."
    },
    {
      title: "A compromised device can stop the day",
      body: "Malicious activity on a front-desk or clinical workstation can expose patient information and interrupt scheduling, billing, communication, and care delivery at the same time."
    },
    {
      title: "HIPAA readiness needs evidence",
      body: "A risk analysis needs to show which systems were reviewed, what could go wrong, which safeguards exist, and who owns each unresolved issue. A completed checklist without those details leaves the practice unable to explain its decisions."
    }
  ],
  evidence: [
    {
      value: "102%",
      finding: "Increase in reports of large healthcare breaches from 2018 through 2023, according to HHS. This sector-wide figure includes organizations much larger than independent practices.",
      source: "HHS HIPAA Security Rule proposal",
      href: "https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/index.html"
    },
    {
      value: "1,002%",
      finding: "Increase in the number of individuals affected by reported large healthcare breaches from 2018 through 2023. HHS attributes much of the increase to hacking and ransomware.",
      source: "HHS HIPAA Security Rule proposal",
      href: "https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/index.html"
    },
    {
      value: "1 to 10 providers",
      finding: "The historical HHS definition used to design its small and medium practice Security Risk Assessment Tool. HHS cautions that the tool assists with risk analysis but does not itself establish compliance.",
      source: "HHS SRA Tool user guide",
      href: "https://www.hhs.gov/guidance/sites/default/files/hhs-guidance-documents//attachmenta-security_risk_assessment_tool_user_guide_v6.pdf"
    }
  ],
  planTitle: "Protect daily work and document what still needs attention.",
  planSub: "No single product covers the whole practice. Each service addresses a defined part of the risk analysis.",
  steps: [
    {
      num: "1",
      title: "Helm Mail",
      body: "Managed filtering, phishing protection, suspicious-message triage, simulations, and awareness learning protect compatible business email. Secure-message delivery and secure file transfer are not included and are separately scoped when required."
    },
    {
      num: "2",
      title: "Helm Watch",
      body: "A 24/7 security operations center monitors covered Windows and Mac workstations, investigates alerts, and isolates compromised devices. Phones, tablets, servers, and other device classes require separate scoping."
    },
    {
      num: "3",
      title: "Helm Ready",
      body: "A fixed-fee HIPAA Security Rule gap assessment reviews the agreed scope, documents findings, and produces a prioritized remediation roadmap. Helm does not certify HIPAA compliance."
    }
  ],
  proof: {
    title: "What each service covers, and what it does not.",
    points: [
      "Risk analysis work sized for smaller medical and dental practices",
      "Managed email protection without implying secure PHI delivery",
      "Round-the-clock monitoring for covered Windows and Mac workstations",
      "Documented findings and prioritized remediation decisions",
      "No claim that one tool or assessment makes a practice compliant"
    ]
  },
  resources: [
    { slug: "hipaa-risk-analysis-medical-practices", title: "HIPAA Risk Analysis for Medical Practices", note: "Scope the whole practice" },
    { slug: "hipaa-email-rules-small-practices", title: "HIPAA Email Rules for Small Practices", note: "Know when protection is not encryption" },
    { slug: "what-a-soc-actually-does", title: "What a 24/7 Security Operations Center Does", note: "Understand device monitoring" }
  ],
  cta: {
    title: "Does your last risk analysis include the systems you use today?",
    sub: "A short readiness call can clarify which systems belong in scope, what evidence already exists, and whether a fixed-fee assessment would be useful.",
    label: "Book the readiness call"
  }
};
const contractors = {
  slug: "contractors",
  backdrop: "construction",
  reportDomain: "summitbuilders.com",
  metaTitle: "Payment Fraud Protection for Contractors & Trades | Helm",
  metaDesc: "Reduce exposure to fake invoices and hijacked payment instructions. Practical email, payment-verification, and readiness support for contractors and trades.",
  eyebrow: "Contractors · Trades · Field Services",
  headline: "One changed bank account can turn a paid invoice into an unpaid bill.",
  sub: "A fake supplier or GC message can redirect the payment while the legitimate vendor still expects to be paid. Customers and insurers may also ask the contractor to show which security controls are in place.",
  primaryCta: "Get my free scan",
  pains: [
    {
      title: "Supplier invoice fraud",
      body: "An attacker can imitate a supplier or compromise a real email thread, then replace the bank details. By the time the supplier asks about the missing payment, recovery may depend on how quickly the bank is contacted."
    },
    {
      title: "GCs now require security",
      body: "Some general contractors and insurers ask subcontractors to document email, payment, access, or incident controls. An unsupported answer can delay a bid, renewal, or claim."
    },
    {
      title: "Field teams, office risk",
      body: "Estimators and office managers may review payment requests from phones and job sites. When several jobs are moving at once, a changed instruction can look like one more urgent item unless the callback rule is mandatory."
    }
  ],
  evidence: [
    {
      value: "17%",
      finding: "Contracting services, including electricians and general contractors, represented 17% of the more than 1,400 non-critical-sector ransomware complaints reported to IC3 in 2025.",
      source: "FBI 2025 Internet Crime Report",
      href: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
    },
    {
      value: "$3.05B",
      finding: "IC3 recorded $3.05 billion in reported business-email-compromise losses during 2025. The total covers all industries nationwide, not contractors alone.",
      source: "FBI 2025 Internet Crime Report",
      href: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
    },
    {
      value: "2 channels",
      finding: "The FBI recommends verifying requests to change account information through a secondary channel or two-factor authentication. A payment callback gives the change a check outside the message that requested it.",
      source: "FBI business-email-compromise guidance",
      href: "https://www.ic3.gov/PSA/2024/PSA240911"
    }
  ],
  planTitle: "Protect the payment request, the work device, and the answer on the form.",
  planSub: "Each service addresses a specific point where money, access, or a customer requirement can go wrong.",
  steps: [
    {
      num: "1",
      title: "Helm Mail",
      body: "Helm Mail combines managed phishing and impersonation protection with suspicious-message triage, simulations, and awareness learning for compatible Microsoft 365 and Google Workspace environments."
    },
    {
      num: "2",
      title: "Helm Watch",
      body: "Managed device protection watches covered Windows and Mac computers used for estimating, billing, and administration around the clock. Phones, tablets, servers, and other device classes are separately scoped."
    },
    {
      num: "3",
      title: "Helm Ready",
      body: "Helm Ready documents the controls you actually have and identifies unsupported answers before they reach a GC or carrier."
    }
  ],
  proof: {
    title: "What the contractor can put in place.",
    points: [
      "Helm Mail for compatible Microsoft 365 and Google Workspace environments",
      "Payment-verification protocol separately scoped to your approval process",
      "Device protection scoped to the actual covered fleet",
      "Published pricing and account minimums",
      "Readiness evidence sized to the questionnaire in front of you"
    ]
  },
  resources: [
    { slug: "vendor-email-compromise-contractors", title: "Vendor Email Compromise for Contractors", note: "Protect the payment chain" },
    { slug: "invoice-fraud-red-flags", title: "Invoice-Fraud Red Flags", note: "Verify changes" },
    { slug: "job-site-devices-public-wifi", title: "Job-Site Devices and Public Wi-Fi", note: "Reduce field risk" }
  ],
  cta: {
    title: "Could a supplier or customer receive a fake message in your name?",
    sub: "The free scan checks public email controls involved in domain impersonation and returns a plain-English report, usually in about a minute.",
    label: "Run the free scan"
  }
};
export {
  accountingFirms,
  contractors,
  lawFirms,
  manufacturing,
  medicalPractices,
  professionalServices
};
