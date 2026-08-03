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
  nist171: {
    title: 'NIST: Protecting Controlled Unclassified Information, SP 800-171 Rev. 3',
    href: 'https://nvlpubs.nist.gov/nistpubs/SpecialPublications/800-171r3/NIST.SP.800-171r3.html',
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
    href: 'https://www.fbi.gov/file-repository/2025_ic3report.pdf',
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
    sources: [sources.sprs, sources.nist171],
  },
  'password-managers-small-teams': {
    relatedSlugs: ['mfa-methods-compared', 'employee-offboarding-checklist', 'm365-security-baseline'],
    sources: [sources.cisaPasswords, sources.cisaMfa],
  },
  'cmmc-level-1-vs-level-2': {
    relatedSlugs: ['cmmc-deadline-checklist', 'sprs-score-explained', 'cui-handling-shop-floor'],
    sources: [sources.dodCmmc, sources.nist171],
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
    sources: [sources.dodCmmc, sources.dfars],
  },
  'job-site-devices-public-wifi': {
    relatedSlugs: ['vendor-email-compromise-contractors', 'invoice-fraud-red-flags', 'mfa-methods-compared'],
    sources: [sources.cisaTravel, sources.cisaMfa],
  },
  'employee-offboarding-checklist': {
    relatedSlugs: ['password-managers-small-teams', 'm365-security-baseline', 'incident-response-plan-small-business'],
    sources: [sources.nist171, sources.cisaPasswords],
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
    sources: [sources.nistSsp, sources.nist171],
  },
  'wire-fraud-prevention-law-firms': {
    relatedSlugs: ['invoice-fraud-red-flags', 'ai-phishing-red-flags', 'what-is-dmarc'],
    sources: [sources.fbiBec, sources.cisaPhishing],
  },
  'cui-handling-shop-floor': {
    relatedSlugs: ['cmmc-level-1-vs-level-2', 'ssp-poam-explained', 'sprs-score-explained'],
    sources: [sources.cuiRegistry, sources.nist171],
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
};
