export type ArticleSource = {
  title: string;
  href: string;
};

export type ArticleSupport = {
  relatedSlugs: string[];
  sources: ArticleSource[];
};

const sources = {
  cisaMfa: {
    title: 'CISA: Require Multifactor Authentication',
    href: 'https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication',
  },
  microsoftDefaults: {
    title: 'Microsoft: Security defaults in Microsoft Entra ID',
    href: 'https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults',
  },
  microsoftBaseline: {
    title: 'Microsoft: Baseline security mode settings',
    href: 'https://learn.microsoft.com/en-us/microsoft-365/baseline-security-mode/baseline-security-mode-settings?view=o365-worldwide',
  },
  dodCmmc: {
    title: 'U.S. Department of Defense: About CMMC',
    href: 'https://dodcio.defense.gov/CMMC/About/-DoD/',
  },
  sprs: {
    title: 'U.S. Department of Defense: Supplier Performance Risk System',
    href: 'https://www.acq.osd.mil/asda/dpc/cp/cyber/sprs.html',
  },
  dfars: {
    title: 'U.S. Department of Defense: DFARS Subpart 204.76',
    href: 'https://www.acq.osd.mil/dpap/dars/dfars/html/current/204_76.htm',
  },
  nist171r2: {
    title: 'NIST: Protecting Controlled Unclassified Information, SP 800-171 Rev. 2',
    href: 'https://csrc.nist.gov/pubs/sp/800/171/r2/upd1/final',
  },
  dodAssessmentMethodology: {
    title: 'U.S. Department of Defense: NIST SP 800-171 DoD Assessment Methodology',
    href: 'https://www.acq.osd.mil/asda/dpc/cp/cyber/docs/safeguarding/NIST-SP-800-171-Assessment-Methodology-Version-1.2.1-6.24.2020.pdf',
  },
  dfars7020: {
    title: 'Acquisition.gov: DFARS 252.204-7020 assessment requirements',
    href: 'https://www.acquisition.gov/dfars/252.204-7020-nist-sp-800-171dod-assessment-requirements.',
  },
  dojMorse: {
    title: 'U.S. Department of Justice: MORSECORP cybersecurity settlement',
    href: 'https://www.justice.gov/opa/pr/defense-contractor-morsecorp-inc-agrees-pay-46-million-settle-cybersecurity-fraud',
  },
  nist115: {
    title: 'NIST: Technical Guide to Information Security Testing and Assessment',
    href: 'https://csrc.nist.gov/pubs/sp/800/115/final',
  },
  nistSsp: {
    title: 'NIST: Developing Security Plans for Information Systems',
    href: 'https://csrc.nist.gov/pubs/sp/800/18/r2/final',
  },
  nistAi: {
    title: 'NIST: AI Risk Management Framework',
    href: 'https://www.nist.gov/itl/ai-risk-management-framework',
  },
  nistCsf: {
    title: 'NIST: Cybersecurity Framework',
    href: 'https://www.nist.gov/cyberframework',
  },
  cuiRegistry: {
    title: 'National Archives: CUI Registry category list',
    href: 'https://www.archives.gov/cui/registry/category-list',
  },
  cisaPasswords: {
    title: 'CISA: Use a password manager',
    href: 'https://www.cisa.gov/resources-tools/training/cyb3rsmrt-use-password-manager-create-and-remember-strong-passwords',
  },
  cisaPhishing: {
    title: 'CISA: Recognize and report phishing',
    href: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing',
  },
  cisaTravel: {
    title: 'CISA: Traveling with internet-enabled devices',
    href: 'https://www.cisa.gov/news-events/news/holiday-traveling-personal-internet-enabled-devices',
  },
  cisaRansomware: {
    title: 'CISA: StopRansomware Guide',
    href: 'https://www.cisa.gov/stopransomware/ransomware-guide',
  },
  fbiBec: {
    title: 'FBI: Business Email Compromise',
    href: 'https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/business-email-compromise',
  },
  fbiIc3: {
    title: 'FBI: 2025 Internet Crime Report',
    href: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf',
  },
  ftcInsurance: {
    title: 'FTC: Cyber insurance for small business',
    href: 'https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance',
  },
  nyDfsInsurance: {
    title: 'New York DFS: Cyber Insurance Risk Framework',
    href: 'https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2021_02',
  },
  hhsEmail: {
    title: 'HHS: Sending electronic protected health information by email',
    href: 'https://www.hhs.gov/hipaa/for-professionals/faq/2006/does-the-security-rule-allow-for-sending-electronic-phi-in-an-email/index.html',
  },
  hhsRisk: {
    title: 'HHS: HIPAA Security Rule risk analysis guidance',
    href: 'https://www.hhs.gov/hipaa/for-professionals/security/guidance/guidance-risk-analysis/index.html',
  },
  abaTechReport: {
    title: 'ABA: 2023 Cybersecurity TechReport',
    href: 'https://www.americanbar.org/groups/law_practice/resources/tech-report/2023/2023-cybersecurity-techreport/',
  },
  abaCyberDuties: {
    title: 'ABA: Cybersecurity legal and ethical duties for attorneys',
    href: 'https://www.americanbar.org/groups/law_practice/resources/law-practice-today/2019/cybersecurity-attorneys-legal-ethical/',
  },
  abaSecureCommunications: {
    title: 'ABA: Formal Opinion 477R on securing protected client information',
    href: 'https://www.americanbar.org/products/ecd/chapter/348777154/',
  },
  njReasonableCare: {
    title: 'New Jersey Courts: Opinion 701 on reasonable care for client information',
    href: 'https://www.njcourts.gov/sites/default/files/notices/2006/03/ACPE_Opinion701_ElectronicStorage_12022005.pdf',
  },
  irsWisp: {
    title: 'IRS: Tax professionals are required to maintain a WISP',
    href: 'https://www.irs.gov/newsroom/tax-professional-tips-for-creating-a-data-security-plan',
  },
  irsTaxBreaches2025: {
    title: 'IRS: First-half 2025 tax-professional breach reports',
    href: 'https://www.irs.gov/newsroom/security-summit-irs-reminds-tax-pros-to-guard-against-identity-theft-as-summer-series-wraps-up',
  },
  ftcSafeguards: {
    title: 'FTC: Safeguards Rule guidance for covered businesses',
    href: 'https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know',
  },
  hhsNprm: {
    title: 'HHS: HIPAA Security Rule proposed update and breach trends',
    href: 'https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/index.html',
  },
  hhsSraGuide: {
    title: 'HHS: Security Risk Assessment Tool user guide for smaller practices',
    href: 'https://www.hhs.gov/guidance/sites/default/files/hhs-guidance-documents//attachmenta-security_risk_assessment_tool_user_guide_v6.pdf',
  },
  healthItProviderResources: {
    title: 'HealthIT.gov: Privacy and security resources for providers',
    href: 'https://healthit.gov/privacy-security/health-it-privacy-and-security-resources-providers/',
  },
  dmarc: {
    title: 'IETF: DMARC standard, RFC 9989',
    href: 'https://datatracker.ietf.org/doc/html/rfc9989',
  },
} satisfies Record<string, ArticleSource>;

export const articleSupport: Record<string, ArticleSupport> = {
  'mfa-methods-compared': {
    relatedSlugs: ['m365-security-baseline', 'password-managers-small-teams', 'employee-offboarding-checklist'],
    sources: [sources.cisaMfa, sources.microsoftDefaults],
  },
  'm365-security-baseline': {
    relatedSlugs: ['mfa-methods-compared', 'employee-offboarding-checklist', 'what-is-dmarc'],
    sources: [sources.microsoftDefaults, sources.microsoftBaseline],
  },
  'sprs-score-explained': {
    relatedSlugs: ['cmmc-level-1-vs-level-2', 'cmmc-deadline-checklist', 'ssp-poam-explained'],
    sources: [sources.dodAssessmentMethodology, sources.dfars7020, sources.dojMorse],
  },
  'password-managers-small-teams': {
    relatedSlugs: ['mfa-methods-compared', 'employee-offboarding-checklist', 'm365-security-baseline'],
    sources: [sources.cisaPasswords, sources.cisaMfa],
  },
  'cmmc-level-1-vs-level-2': {
    relatedSlugs: ['cmmc-deadline-checklist', 'sprs-score-explained', 'cui-handling-shop-floor'],
    sources: [sources.dodCmmc, sources.nist171r2, sources.dfars7020],
  },
  'invoice-fraud-red-flags': {
    relatedSlugs: ['vendor-email-compromise-contractors', 'wire-fraud-prevention-law-firms', 'what-is-dmarc'],
    sources: [sources.fbiBec, sources.cisaPhishing],
  },
  'what-a-soc-actually-does': {
    relatedSlugs: ['incident-response-plan-small-business', 'backup-testing-insurers', 'pen-test-vs-vulnerability-scan'],
    sources: [sources.nistCsf, sources.cisaRansomware],
  },
  'cyber-insurance-claim-denied': {
    relatedSlugs: ['cyber-insurance-application-walkthrough', 'cyber-insurance-questionnaire', 'backup-testing-insurers'],
    sources: [sources.ftcInsurance, sources.nyDfsInsurance],
  },
  'vendor-email-compromise-contractors': {
    relatedSlugs: ['invoice-fraud-red-flags', 'job-site-devices-public-wifi', 'what-is-dmarc'],
    sources: [sources.fbiBec, sources.cisaPhishing],
  },
  'shadow-ai-at-work': {
    relatedSlugs: ['ai-phishing-red-flags', 'deepfake-ceo-fraud', 'incident-response-plan-small-business'],
    sources: [sources.nistAi, sources.nistCsf],
  },
  'cyber-insurance-application-walkthrough': {
    relatedSlugs: ['cyber-insurance-questionnaire', 'cyber-insurance-claim-denied', 'backup-testing-insurers'],
    sources: [sources.ftcInsurance, sources.nyDfsInsurance],
  },
  'hipaa-email-rules-small-practices': {
    relatedSlugs: ['m365-security-baseline', 'mfa-methods-compared', 'incident-response-plan-small-business'],
    sources: [sources.hhsEmail, sources.hhsRisk],
  },
  'ai-phishing-red-flags': {
    relatedSlugs: ['deepfake-ceo-fraud', 'shadow-ai-at-work', 'invoice-fraud-red-flags'],
    sources: [sources.cisaPhishing, sources.fbiIc3],
  },
  'cmmc-deadline-checklist': {
    relatedSlugs: ['cmmc-level-1-vs-level-2', 'sprs-score-explained', 'ssp-poam-explained'],
    sources: [sources.dodCmmc, sources.dfars7020, sources.dojMorse],
  },
  'job-site-devices-public-wifi': {
    relatedSlugs: ['vendor-email-compromise-contractors', 'invoice-fraud-red-flags', 'mfa-methods-compared'],
    sources: [sources.cisaTravel, sources.cisaMfa],
  },
  'employee-offboarding-checklist': {
    relatedSlugs: ['password-managers-small-teams', 'm365-security-baseline', 'incident-response-plan-small-business'],
    sources: [sources.nist171r2, sources.cisaPasswords],
  },
  'backup-testing-insurers': {
    relatedSlugs: ['cyber-insurance-questionnaire', 'incident-response-plan-small-business', 'cyber-insurance-claim-denied'],
    sources: [sources.cisaRansomware, sources.ftcInsurance],
  },
  'cyber-insurance-questionnaire': {
    relatedSlugs: ['cyber-insurance-application-walkthrough', 'cyber-insurance-claim-denied', 'backup-testing-insurers'],
    sources: [sources.ftcInsurance, sources.nyDfsInsurance],
  },
  'ssp-poam-explained': {
    relatedSlugs: ['sprs-score-explained', 'cmmc-level-1-vs-level-2', 'cmmc-deadline-checklist'],
    sources: [sources.dodCmmc, sources.nist171r2, sources.nistSsp],
  },
  'wire-fraud-prevention-law-firms': {
    relatedSlugs: ['invoice-fraud-red-flags', 'ai-phishing-red-flags', 'what-is-dmarc'],
    sources: [sources.fbiBec, sources.abaSecureCommunications, sources.njReasonableCare],
  },
  'cui-handling-shop-floor': {
    relatedSlugs: ['cmmc-level-1-vs-level-2', 'ssp-poam-explained', 'sprs-score-explained'],
    sources: [sources.cuiRegistry, sources.nist171r2],
  },
  'pen-test-vs-vulnerability-scan': {
    relatedSlugs: ['what-a-soc-actually-does', 'incident-response-plan-small-business', 'cyber-insurance-questionnaire'],
    sources: [sources.nist115, sources.nistCsf],
  },
  'what-is-dmarc': {
    relatedSlugs: ['invoice-fraud-red-flags', 'vendor-email-compromise-contractors', 'wire-fraud-prevention-law-firms'],
    sources: [sources.dmarc, sources.fbiBec],
  },
  'incident-response-plan-small-business': {
    relatedSlugs: ['backup-testing-insurers', 'what-a-soc-actually-does', 'employee-offboarding-checklist'],
    sources: [sources.cisaRansomware, sources.nistCsf],
  },
  'deepfake-ceo-fraud': {
    relatedSlugs: ['ai-phishing-red-flags', 'shadow-ai-at-work', 'wire-fraud-prevention-law-firms'],
    sources: [sources.fbiIc3, sources.nistAi],
  },
  'law-firm-device-security-checklist': {
    relatedSlugs: ['wire-fraud-prevention-law-firms', 'what-a-soc-actually-does', 'employee-offboarding-checklist'],
    sources: [sources.abaTechReport, sources.abaCyberDuties, sources.abaSecureCommunications, sources.njReasonableCare, sources.cisaRansomware],
  },
  'wisp-checklist-accounting-firms': {
    relatedSlugs: ['employee-offboarding-checklist', 'backup-testing-insurers', 'm365-security-baseline'],
    sources: [sources.irsWisp, sources.irsTaxBreaches2025, sources.ftcSafeguards],
  },
  'hipaa-risk-analysis-medical-practices': {
    relatedSlugs: ['hipaa-email-rules-small-practices', 'what-a-soc-actually-does', 'incident-response-plan-small-business'],
    sources: [sources.hhsRisk, sources.hhsSraGuide, sources.healthItProviderResources, sources.hhsNprm],
  },
};
