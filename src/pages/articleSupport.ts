import {googleMeetRecapArticle, googleMeetRecapArticleSupport} from './googleMeetRecapArticle';
import {beyondTrustArticle, beyondTrustArticleSupport} from './beyondTrustArticle';
import {aiProposalsArticle, aiProposalsArticleSupport} from './aiProposalsArticle';
import {medicalProposalArticle, medicalProposalArticleSupport} from './medicalProposalArticle';
import {ciscoEmailArticle, ciscoEmailArticleSupport} from './ciscoEmailArticle';
import {refreshedArticleSupport} from './refreshedArticleSupport';
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
  [googleMeetRecapArticle.slug]: googleMeetRecapArticleSupport,
  [aiProposalsArticle.slug]: aiProposalsArticleSupport,
  [beyondTrustArticle.slug]: beyondTrustArticleSupport,
  [medicalProposalArticle.slug]: medicalProposalArticleSupport,
  [ciscoEmailArticle.slug]: ciscoEmailArticleSupport,
  "retest-ai-workflow-changes": {
  "relatedSlugs": [
    "choose-first-ai-workflow",
    "ai-access-business-documents",
    "measure-ai-time-savings"
  ],
  "sources": [
    {
      "title": "NIST: AI RMF Playbook, Manage",
      "href": "https://airc.nist.gov/airmf-resources/playbook/manage/"
    },
    {
      "title": "NIST: AI RMF Playbook, Measure",
      "href": "https://airc.nist.gov/airmf-resources/playbook/measure/"
    },
    {
      "title": "NIST: Generative AI Profile",
      "href": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf"
    },
    {
      "title": "Anthropic: Demystifying evals for AI agents",
      "href": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents"
    }
  ]
},

  "fix-dmarc-monitoring-policy": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "Microsoft’s deployment guidance",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure"
    },
    {
      "title": "Google Workspace’s guidance",
      "href": "https://knowledge.workspace.google.com/admin/security/set-up-dmarc"
    },
    {
      "title": "Microsoft: DKIM setup and domain flyout",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dkim-configure"
    },
    {
      "title": "cPanel: Zone Editor and DNS record management",
      "href": "https://docs.cpanel.net/cpanel/domains/zone-editor/"
    },
    {
      "title": "Namecheap: cPanel Zone Editor and MX screenshot examples",
      "href": "https://www.namecheap.com/support/knowledgebase/article.aspx/9256/29/how-to-edit-dns-zone-in-cpanel/"
    },
    {
      "title": "current DMARC standard's interoperability guidance",
      "href": "https://datatracker.ietf.org/doc/html/rfc9989#section-7.4"
    },
    {
      "title": "Google Admin Toolbox Dig",
      "href": "https://toolbox.googleapps.com/apps/dig/"
    },
    {
      "title": "Cloudflare's nameserver documentation",
      "href": "https://developers.cloudflare.com/dns/nameservers/"
    },
    {
      "title": "Microsoft's header instructions",
      "href": "https://support.microsoft.com/en-us/outlook/view-internet-message-headers-in-outlook"
    },
    {
      "title": "Google's DKIM instructions",
      "href": "https://knowledge.workspace.google.com/admin/security/set-up-dkim"
    },
    {
      "title": "Cloudflare's editor instructions",
      "href": "https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/"
    },
    {
      "title": "GoDaddy's TXT instructions",
      "href": "https://www.godaddy.com/en/help/add-a-txt-record-19232"
    },
    {
      "title": "ISC's dig manual",
      "href": "https://bind9.readthedocs.io/en/stable/manpages.html#dig-dns-lookup-utility"
    },
    {
      "title": "RFC 9989's tag definitions",
      "href": "https://datatracker.ietf.org/doc/html/rfc9989#section-4.7"
    }
  ]
},
  "fix-dmarc-reporting": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "aggregate-reporting standard",
      "href": "https://datatracker.ietf.org/doc/html/rfc9990"
    },
    {
      "title": "Microsoft: DMARC setup for custom domains",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure"
    },
    {
      "title": "Microsoft: Domains screenshot and DNS setup example",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/dns/create-dns-records-at-godaddy?view=o365-worldwide"
    },
    {
      "title": "cPanel: Zone Editor and DNS record management",
      "href": "https://docs.cpanel.net/cpanel/domains/zone-editor/"
    },
    {
      "title": "Namecheap: cPanel Zone Editor and MX screenshot examples",
      "href": "https://www.namecheap.com/support/knowledgebase/article.aspx/9256/29/how-to-edit-dns-zone-in-cpanel/"
    },
    {
      "title": "Google's report guidance",
      "href": "https://knowledge.workspace.google.com/admin/security/about-dmarc-reports"
    },
    {
      "title": "Google's account instructions",
      "href": "https://knowledge.workspace.google.com/admin/users/add-an-account-for-a-new-user"
    },
    {
      "title": "Microsoft's shared-mailbox instructions",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/email/create-a-shared-mailbox?view=o365-worldwide"
    },
    {
      "title": "Google Admin Toolbox Dig",
      "href": "https://toolbox.googleapps.com/apps/dig/"
    },
    {
      "title": "Cloudflare's nameserver guidance",
      "href": "https://developers.cloudflare.com/dns/nameservers/"
    },
    {
      "title": "Google's DMARC setup guidance",
      "href": "https://knowledge.workspace.google.com/admin/security/set-up-dmarc"
    },
    {
      "title": "DMARC standard",
      "href": "https://datatracker.ietf.org/doc/html/rfc9989"
    },
    {
      "title": "aggregate-reporting standard's external-destination procedure",
      "href": "https://datatracker.ietf.org/doc/html/rfc9990#section-4"
    },
    {
      "title": "Cloudflare's record instructions",
      "href": "https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/"
    },
    {
      "title": "TXT record instructions",
      "href": "https://www.godaddy.com/en/help/add-a-txt-record-19232"
    },
    {
      "title": "ISC's dig documentation",
      "href": "https://bind9.readthedocs.io/en/stable/manpages.html#dig-dns-lookup-utility"
    }
  ]
},
  "verify-dkim-signing": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "Google Workspace’s DKIM instructions",
      "href": "https://knowledge.workspace.google.com/admin/security/set-up-dkim"
    },
    {
      "title": "Microsoft: DKIM setup and domain flyout",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dkim-configure"
    },
    {
      "title": "cPanel: Email Deliverability, prerequisites and record handling",
      "href": "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/"
    },
    {
      "title": "Namecheap: cPanel SPF and DKIM screenshot examples",
      "href": "https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool-spf-dkim-and-dmarc-records/"
    },
    {
      "title": "DKIM standard",
      "href": "https://datatracker.ietf.org/doc/html/rfc6376"
    },
    {
      "title": "Microsoft's header instructions",
      "href": "https://support.microsoft.com/en-us/outlook/view-internet-message-headers-in-outlook"
    },
    {
      "title": "Google Admin Toolbox Dig",
      "href": "https://toolbox.googleapps.com/apps/dig/"
    },
    {
      "title": "Cloudflare's nameserver documentation",
      "href": "https://developers.cloudflare.com/dns/nameservers/"
    },
    {
      "title": "Cloudflare's email troubleshooting guidance",
      "href": "https://developers.cloudflare.com/dns/troubleshooting/email-issues/"
    },
    {
      "title": "Cloudflare's record editor",
      "href": "https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/"
    },
    {
      "title": "GoDaddy's TXT instructions",
      "href": "https://www.godaddy.com/en/help/add-a-txt-record-19232"
    },
    {
      "title": "Zone Editor documentation",
      "href": "https://docs.cpanel.net/cpanel/domains/zone-editor/"
    },
    {
      "title": "Google's DKIM troubleshooting instructions",
      "href": "https://knowledge.workspace.google.com/admin/security/troubleshoot-dkim-issues"
    },
    {
      "title": "ISC's dig manual",
      "href": "https://bind9.readthedocs.io/en/stable/manpages.html#dig-dns-lookup-utility"
    },
    {
      "title": "Cloudflare's flattening controls",
      "href": "https://developers.cloudflare.com/dns/cname-flattening/set-up-cname-flattening/"
    }
  ]
},
  "review-spf-softfail": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "SPF standard",
      "href": "https://datatracker.ietf.org/doc/html/rfc7208"
    },
    {
      "title": "Microsoft’s SPF setup guide",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure"
    },
    {
      "title": "Microsoft: domain setup and required DNS records",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide"
    },
    {
      "title": "Microsoft: Domains screenshot and DNS setup example",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/dns/create-dns-records-at-godaddy?view=o365-worldwide"
    },
    {
      "title": "cPanel: Email Deliverability, prerequisites and record handling",
      "href": "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/"
    },
    {
      "title": "Namecheap: cPanel SPF and DKIM screenshot examples",
      "href": "https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool-spf-dkim-and-dmarc-records/"
    },
    {
      "title": "Google Workspace: supported SPF setup and softfail recommendation",
      "href": "https://knowledge.workspace.google.com/admin/security/set-up-spf"
    },
    {
      "title": "Google Workspace: troubleshoot SPF and forwarding",
      "href": "https://knowledge.workspace.google.com/admin/security/troubleshoot-spf-issues"
    },
    {
      "title": "Gmail: read a received message's full headers",
      "href": "https://support.google.com/mail/answer/29436"
    },
    {
      "title": "Google Admin Toolbox: browser-based DNS lookup",
      "href": "https://toolbox.googleapps.com/apps/dig/"
    },
    {
      "title": "Cloudflare: nameservers and authoritative DNS",
      "href": "https://www.cloudflare.com/learning/dns/dns-records/dns-ns-record/"
    },
    {
      "title": "Cloudflare: DNS time to live and caching",
      "href": "https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/"
    },
    {
      "title": "RFC 7489: DMARC domain alignment",
      "href": "https://datatracker.ietf.org/doc/html/rfc7489"
    },
    {
      "title": "RFC 8601: trusted receiver Authentication-Results",
      "href": "https://datatracker.ietf.org/doc/html/rfc8601"
    }
  ]
},
  "fix-spf-record": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "Microsoft’s SPF setup guide",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure"
    },
    {
      "title": "RFC 7208",
      "href": "https://datatracker.ietf.org/doc/html/rfc7208"
    },
    {
      "title": "Microsoft: domain setup and required DNS records",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide"
    },
    {
      "title": "Microsoft: Domains screenshot and DNS setup example",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/dns/create-dns-records-at-godaddy?view=o365-worldwide"
    },
    {
      "title": "cPanel: Email Deliverability, prerequisites and record handling",
      "href": "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/"
    },
    {
      "title": "Namecheap: cPanel SPF and DKIM screenshot examples",
      "href": "https://www.namecheap.com/support/knowledgebase/article.aspx/9214/31/cpanel-email-deliverability-tool-spf-dkim-and-dmarc-records/"
    },
    {
      "title": "Google Workspace: set up SPF",
      "href": "https://knowledge.workspace.google.com/admin/security/set-up-spf"
    },
    {
      "title": "Google Workspace: SPF troubleshooting and message checks",
      "href": "https://knowledge.workspace.google.com/admin/security/troubleshoot-spf-issues"
    },
    {
      "title": "Google Workspace: SPF record mechanisms and modifiers",
      "href": "https://knowledge.workspace.google.com/admin/security/about-spf-records"
    },
    {
      "title": "Google Admin Toolbox: Check MX and SPF",
      "href": "https://toolbox.googleapps.com/apps/checkmx/"
    },
    {
      "title": "Gmail: read a received message's full headers",
      "href": "https://support.google.com/mail/answer/29436"
    },
    {
      "title": "cPanel: create and edit DNS records",
      "href": "https://docs.cpanel.net/cpanel/domains/zone-editor/"
    },
    {
      "title": "Google Admin Toolbox: browser-based DNS lookup",
      "href": "https://toolbox.googleapps.com/apps/dig/"
    },
    {
      "title": "Cloudflare: nameservers and authoritative DNS",
      "href": "https://www.cloudflare.com/learning/dns/dns-records/dns-ns-record/"
    },
    {
      "title": "Cloudflare: DNS time to live and caching",
      "href": "https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/"
    },
    {
      "title": "RFC 7489: DMARC domain alignment",
      "href": "https://datatracker.ietf.org/doc/html/rfc7489"
    },
    {
      "title": "RFC 8601: trusted receiver Authentication-Results",
      "href": "https://datatracker.ietf.org/doc/html/rfc8601"
    },
    {
      "title": "Kitterman: SPF syntax and sending-path testing forms",
      "href": "https://www.kitterman.com/spf/validate.html"
    }
  ]
},
  "enable-dnssec-safely": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "DNSSEC introduction",
      "href": "https://datatracker.ietf.org/doc/html/rfc4033"
    },
    {
      "title": "current DNSSEC instructions",
      "href": "https://developers.cloudflare.com/dns/dnssec/"
    },
    {
      "title": "Cloudflare: DNSSEC validation, dig and troubleshooting",
      "href": "https://developers.cloudflare.com/dns/dnssec/troubleshooting/"
    },
    {
      "title": "Namecheap: DNSSEC delegation for external nameservers",
      "href": "https://www.namecheap.com/support/knowledgebase/article.aspx/9722/2232/managing-dnssec-for-domains-pointed-to-custom-dns/"
    },
    {
      "title": "Google Admin Toolbox: browser-based DNS lookup",
      "href": "https://toolbox.googleapps.com/apps/dig/"
    },
    {
      "title": "Cloudflare: nameservers and authoritative DNS",
      "href": "https://www.cloudflare.com/learning/dns/dns-records/dns-ns-record/"
    },
    {
      "title": "Cloudflare: DNS time to live and caching",
      "href": "https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/"
    },
    {
      "title": "DNSViz: analyze and refresh a DNSSEC chain",
      "href": "https://dnsviz.net/"
    },
    {
      "title": "Cloudflare: public resolver addresses",
      "href": "https://developers.cloudflare.com/1.1.1.1/ip-addresses/"
    },
    {
      "title": "Google Public DNS: resolver addresses",
      "href": "https://developers.google.com/speed/public-dns/docs/using"
    },
    {
      "title": "Google Public DNS: DNSSEC validation",
      "href": "https://developers.google.com/speed/public-dns/docs/security"
    }
  ]
},
  "set-up-mta-sts": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "Microsoft’s MTA-STS guidance",
      "href": "https://learn.microsoft.com/en-us/exchange/security-and-compliance/enhance-mail-flow-using-strict-transport-security"
    },
    {
      "title": "MTA-STS standard",
      "href": "https://datatracker.ietf.org/doc/html/rfc8461"
    },
    {
      "title": "Google’s configuration check",
      "href": "https://knowledge.workspace.google.com/admin/gmail/advanced/check-your-mta-sts-configuration"
    },
    {
      "title": "Google’s policy instructions",
      "href": "https://knowledge.workspace.google.com/admin/gmail/advanced/create-an-mta-sts-policy"
    },
    {
      "title": "Google’s publishing instructions",
      "href": "https://knowledge.workspace.google.com/admin/gmail/advanced/publish-your-mta-sts-policy"
    },
    {
      "title": "Zone Editor documentation",
      "href": "https://docs.cpanel.net/cpanel/domains/zone-editor/"
    },
    {
      "title": "Cloudflare’s DNS record instructions",
      "href": "https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/"
    },
    {
      "title": "Namecheap: cPanel Zone Editor screenshot example",
      "href": "https://www.namecheap.com/support/knowledgebase/article.aspx/9256/29/how-to-edit-dns-zone-in-cpanel/"
    },
    {
      "title": "Microsoft: retrieve domain-specific DNS records",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide"
    },
    {
      "title": "ISC BIND: dig DNS lookup options",
      "href": "https://bind9.readthedocs.io/en/latest/manpages.html#dig-dns-lookup-utility"
    },
    {
      "title": "IETF: Null MX for domains accepting no mail",
      "href": "https://datatracker.ietf.org/doc/html/rfc7505"
    },
    {
      "title": "IETF: SMTP domain syntax",
      "href": "https://datatracker.ietf.org/doc/html/rfc5321"
    }
  ]
},
  "set-up-tls-reporting": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "TLS-RPT",
      "href": "https://datatracker.ietf.org/doc/html/rfc8460"
    },
    {
      "title": "Microsoft’s shared-mailbox instructions",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/email/create-a-shared-mailbox?view=o365-worldwide"
    },
    {
      "title": "Google’s user-creation instructions",
      "href": "https://knowledge.workspace.google.com/admin/users/add-an-account-for-a-new-user"
    },
    {
      "title": "CPanel Email Accounts instructions",
      "href": "https://docs.cpanel.net/cpanel/email/email-accounts/"
    },
    {
      "title": "CPanel Zone Editor documentation",
      "href": "https://docs.cpanel.net/cpanel/domains/zone-editor/"
    },
    {
      "title": "Cloudflare DNS instructions",
      "href": "https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/"
    },
    {
      "title": "Google’s TLS reporting instructions",
      "href": "https://knowledge.workspace.google.com/admin/gmail/advanced/turn-on-mta-sts-and-tls-reporting"
    },
    {
      "title": "Namecheap: cPanel Zone Editor screenshot example",
      "href": "https://www.namecheap.com/support/knowledgebase/article.aspx/9256/29/how-to-edit-dns-zone-in-cpanel/"
    },
    {
      "title": "cPanel: create a mailbox and select storage quota",
      "href": "https://docs.cpanel.net/cpanel/email/create-an-email-account/"
    },
    {
      "title": "ISC BIND: dig DNS lookup options",
      "href": "https://bind9.readthedocs.io/en/latest/manpages.html#dig-dns-lookup-utility"
    },
    {
      "title": "IETF: DNS aliases and CNAME coexistence",
      "href": "https://datatracker.ietf.org/doc/html/rfc1034"
    }
  ]
},
  "fix-mx-mail-routing": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "SMTP’s routing standard",
      "href": "https://datatracker.ietf.org/doc/html/rfc5321"
    },
    {
      "title": "Microsoft: domain setup and required DNS records",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide"
    },
    {
      "title": "Microsoft: Domains screenshot and DNS setup example",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/dns/create-dns-records-at-godaddy?view=o365-worldwide"
    },
    {
      "title": "cPanel: local and remote Email Routing",
      "href": "https://docs.cpanel.net/cpanel/email/email-routing/"
    },
    {
      "title": "Namecheap: cPanel Zone Editor and MX screenshot examples",
      "href": "https://www.namecheap.com/support/knowledgebase/article.aspx/9256/29/how-to-edit-dns-zone-in-cpanel/"
    },
    {
      "title": "RFC 7505: null MX and domains that accept no mail",
      "href": "https://datatracker.ietf.org/doc/html/rfc7505"
    },
    {
      "title": "Google Workspace: MX setup and Gmail activation",
      "href": "https://knowledge.workspace.google.com/admin/domains/set-up-mx-records-for-google-workspace"
    },
    {
      "title": "cPanel: create and edit DNS records",
      "href": "https://docs.cpanel.net/cpanel/domains/zone-editor/"
    },
    {
      "title": "Google Admin Toolbox: browser-based DNS lookup",
      "href": "https://toolbox.googleapps.com/apps/dig/"
    },
    {
      "title": "Cloudflare: nameservers and authoritative DNS",
      "href": "https://www.cloudflare.com/learning/dns/dns-records/dns-ns-record/"
    },
    {
      "title": "Cloudflare: DNS time to live and caching",
      "href": "https://developers.cloudflare.com/dns/manage-dns-records/reference/ttl/"
    }
  ]
},
  "investigate-smtp-check": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "SMTP TLS standard",
      "href": "https://datatracker.ietf.org/doc/html/rfc3207"
    },
    {
      "title": "Microsoft’s message-trace instructions",
      "href": "https://learn.microsoft.com/en-us/exchange/monitoring/trace-an-email-message/message-trace-modern-eac"
    },
    {
      "title": "CPanel’s Track Delivery instructions",
      "href": "https://docs.cpanel.net/cpanel/email/track-delivery/"
    },
    {
      "title": "Google’s header instructions",
      "href": "https://support.google.com/mail/answer/29436?hl=en"
    },
    {
      "title": "IETF: SMTP routing, replies and mail-server behavior",
      "href": "https://datatracker.ietf.org/doc/html/rfc5321"
    },
    {
      "title": "IETF: Null MX for domains accepting no mail",
      "href": "https://datatracker.ietf.org/doc/html/rfc7505"
    },
    {
      "title": "ISC BIND: dig DNS lookup options",
      "href": "https://bind9.readthedocs.io/en/latest/manpages.html#dig-dns-lookup-utility"
    },
    {
      "title": "Google: find messages with Email Log Search",
      "href": "https://knowledge.workspace.google.com/admin/support/troubleshooting/find-messages-with-email-log-search"
    },
    {
      "title": "Google: investigate mail missing from one sender",
      "href": "https://knowledge.workspace.google.com/admin/support/troubleshooting/not-receiving-email-from-one-sender"
    }
  ]
},
  "fix-website-https": {
  "relatedSlugs": [
    "what-is-dmarc",
    "check-website-security"
  ],
  "sources": [
    {
      "title": "TLS protects a connection and authenticates its endpoint",
      "href": "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security"
    },
    {
      "title": "Let’s Encrypt’s challenge documentation",
      "href": "https://letsencrypt.org/docs/challenge-types/"
    },
    {
      "title": "CPanel’s status instructions",
      "href": "https://docs.cpanel.net/cpanel/security/ssl-tls-status/"
    },
    {
      "title": "CPanel’s SSL/TLS instructions",
      "href": "https://docs.cpanel.net/cpanel/security/ssl-tls/"
    },
    {
      "title": "Cloudflare’s Full (strict) instructions",
      "href": "https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/"
    },
    {
      "title": "Cloudflare error 526",
      "href": "https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-526/"
    },
    {
      "title": "MDN’s mixed-content documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Mixed_content"
    },
    {
      "title": "MDN’s HSTS documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security"
    },
    {
      "title": "Cloudflare: Origin CA and browser trust",
      "href": "https://developers.cloudflare.com/ssl/origin-configuration/origin-ca/"
    },
    {
      "title": "cPanel: AutoSSL checks and logs in WHM",
      "href": "https://docs.cpanel.net/whm/ssl-tls/manage-autossl/"
    },
    {
      "title": "Cloudflare: general SSL errors",
      "href": "https://developers.cloudflare.com/ssl/troubleshooting/general-ssl-errors/"
    },
    {
      "title": "curl: protocol restrictions, redirect limits and response headers",
      "href": "https://curl.se/docs/manpage.html"
    }
  ]
}
,


  "ivanti-connect-secure-october-2026-exploitation": {
    "relatedSlugs": [
      "zero-day-vs-known-vulnerabilities",
      "vulnerability-management-new-jersey",
      "incident-response-plan-small-business"
    ],
    "sources": [
      {
        "title": "Known Exploited Vulnerabilities catalog",
        "href": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog?field_cve=CVE-2026-104935"
      },
      {
        "title": "Ivanti-authored vulnerability record",
        "href": "https://raw.githubusercontent.com/CVEProject/cvelistV5/main/cves/2026/104xxx/CVE-2026-104935.json"
      },
      {
        "title": "October 13 investigation",
        "href": "https://www.volexity.com/blog/2026/10/13/a-series-of-unauthenticated-events-chained-exploitation-of-ivanti-connect-secure-zero-days/"
      },
      {
        "title": "Ivanti advisory",
        "href": "https://hub.ivanti.com/s/article/Security-Advisory-Ivanti-Connect-Secure-CVE-2026-104935"
      }
    ]
  },
  "windows-shell-october-2026-update": {
    "relatedSlugs": [
      "zero-day-vs-known-vulnerabilities",
      "vulnerability-management-new-jersey",
      "incident-response-plan-small-business"
    ],
    "sources": [
      {
        "title": "Microsoft’s advisory",
        "href": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96951"
      },
      {
        "title": "October release data",
        "href": "https://api.msrc.microsoft.com/cvrf/v3.0/cvrf/2026-Oct"
      },
      {
        "title": "protection associated with files from the internet",
        "href": "https://support.microsoft.com/en-us/windows/security/information-about-the-attachment-manager-in-microsoft-windows"
      },
      {
        "title": "Microsoft-authored CVE record",
        "href": "https://raw.githubusercontent.com/CVEProject/cvelistV5/main/cves/2026/96xxx/CVE-2026-96951.json"
      }
    ]
  }
,
  'meraki-october-2026-security-update': {
  "relatedSlugs": [
    "vulnerability-management-new-jersey",
    "network-hardening-small-business",
    "zero-day-vs-known-vulnerabilities"
  ],
  "sources": [
    {
      "title": "Cisco: Meraki Security Hardening Release, October 2026",
      "href": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-hardening-meraki-os-drbEX9GH"
    },
    {
      "title": "Cisco Meraki: Managing Firmware Upgrades",
      "href": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Managing_Firmware_Upgrades"
    },
    {
      "title": "Cisco Meraki: Firmware Release Process",
      "href": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Meraki_Firmware_Release_Process"
    },
    {
      "title": "Cisco Meraki: Switching Firmware Upgrades",
      "href": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Meraki_Switching_Firmware_Upgrades"
    }
  ]
},
"cybersecurity-point-solutions-vs-managed-security": {
  "relatedSlugs": [
    "managed-service-provider-security-models",
    "security-questionnaire-response-services",
    "managed-service-providers-new-jersey"
  ],
  "sources": [
    {
      "title": "NIST: Building Your Small Business Cybersecurity Team",
      "href": "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/building-your-team"
    }
  ]
},
  "email-security-gateway-managed-service": {
  "relatedSlugs": [
    "what-is-dmarc"
  ],
  "sources": [
    {
      "title": "Microsoft Safe Links",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/safe-links-about"
    },
    {
      "title": "Microsoft Safe Attachments",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/safe-attachments-about"
    }
  ]
},
  "managed-awareness-training-vs-diy": {
  "relatedSlugs": [
    "wire-fraud-prevention-law-firms"
  ],
  "sources": [
    {
      "title": "NIST SP 800-50 Revision 1",
      "href": "https://csrc.nist.gov/pubs/sp/800/50/r1/final"
    }
  ]
},
  "iam-security-core-vs-command": {
  "relatedSlugs": [
    "employee-offboarding-checklist"
  ],
  "sources": [
    {
      "title": "Microsoft IAM concepts",
      "href": "https://learn.microsoft.com/en-us/entra/fundamentals/identity-fundamental-concepts"
    }
  ]
},
  "outlook-email-encryption-options": {
  "relatedSlugs": [
    "hipaa-email-rules-small-practices"
  ],
  "sources": [
    {
      "title": "Microsoft email-encryption comparison",
      "href": "https://learn.microsoft.com/en-us/purview/email-encryption"
    }
  ]
},
  "email-security-services-evaluation": {
  "relatedSlugs": [
    "wire-fraud-prevention-law-firms",
    "cyber-insurance-questionnaire"
  ],
  "sources": [
    {
      "title": "FTC small-business scam guidance",
      "href": "https://www.ftc.gov/business-guidance/resources/scams-your-small-business-guide-business"
    }
  ]
},
  "managed-endpoint-protection-rollout": {
  "relatedSlugs": [
    "incident-response-plan-small-business"
  ],
  "sources": [
    {
      "title": "Microsoft Defender for Endpoint",
      "href": "https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint"
    }
  ]
},
  "zero-day-vs-known-vulnerabilities": {
  "relatedSlugs": [
    "incident-response-plan-small-business"
  ],
  "sources": [
    {
      "title": "CISA vulnerability-reporting definitions",
      "href": "https://www.cisa.gov/sites/default/files/publications/guide-vulnerability-reporting-americas-election-admins_508.pdf"
    },
    {
      "title": "Microsoft's Exchange report",
      "href": "https://www.microsoft.com/en-us/security/blog/2021/03/02/hafnium-targeting-exchange-servers/"
    },
    {
      "title": "CISA KEV catalog",
      "href": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
    }
  ]
},
  "vulnerability-management-new-jersey": {
  "relatedSlugs": [
    "pen-test-vs-vulnerability-scan"
  ],
  "sources": [
    {
      "title": "CISA KEV catalog",
      "href": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
    }
  ]
},
  "check-website-security": {
  "relatedSlugs": [
    "pen-test-vs-vulnerability-scan"
  ],
  "sources": [
    {
      "title": "Mozilla HSTS documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security"
    },
    {
      "title": "Mozilla CSP documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy"
    }
  ]
},
  "windows-defender-vs-managed-security": {
  "relatedSlugs": [
    "law-firm-device-security-checklist",
    "what-a-soc-actually-does"
  ],
  "sources": [
    {
      "title": "Microsoft Defender Antivirus",
      "href": "https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows"
    },
    {
      "title": "Microsoft Defender for Endpoint",
      "href": "https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint"
    }
  ]
},
  "siem-software-managed-detection": {
  "relatedSlugs": [
    "what-a-soc-actually-does"
  ],
  "sources": [
    {
      "title": "Microsoft Sentinel overview",
      "href": "https://learn.microsoft.com/en-us/azure/sentinel/overview"
    }
  ]
},
  "intentional-insider-threats": {
  "relatedSlugs": [
    "employee-offboarding-checklist",
    "incident-response-plan-small-business"
  ],
  "sources": [
    {
      "title": "CISA Insider Threat Mitigation Guide",
      "href": "https://www.cisa.gov/sites/default/files/publications/Insider%20Threat%20Mitigation%20Guide_Final_508.pdf"
    }
  ]
},
  "law-firm-managed-vs-in-house-security": {
  "relatedSlugs": [
    "law-firm-device-security-checklist",
    "wire-fraud-prevention-law-firms",
    "incident-response-plan-small-business"
  ],
  "sources": [
    {
      "title": "New Jersey Rules of Professional Conduct",
      "href": "https://www.njcourts.gov/sites/default/files/rpc.pdf"
    }
  ]
},
  "cybersecurity-risk-assessment-tools": {
  "relatedSlugs": [
    "pen-test-vs-vulnerability-scan",
    "cyber-insurance-questionnaire"
  ],
  "sources": [
    {
      "title": "NIST SP 800-30 Revision 1",
      "href": "https://csrc.nist.gov/pubs/sp/800/30/r1/final"
    }
  ]
},
  "virtual-ciso-service-evaluation": {
  "relatedSlugs": [
    "managed-service-provider-security-models"
  ],
  "sources": [
    {
      "title": "NIST SP 1300",
      "href": "https://csrc.nist.gov/pubs/sp/1300/final"
    }
  ]
},
  "digital-risk-protection-services": {
  "relatedSlugs": [
    "what-is-dmarc",
    "invoice-fraud-red-flags"
  ],
  "sources": [
    {
      "title": "FTC business-impersonation guidance",
      "href": "https://consumer.ftc.gov/features/pass-it-on/impersonator-scams/business-impersonator-scams"
    }
  ]
},
  "accounting-firms-core-vs-command": {
  "relatedSlugs": [
    "wisp-checklist-accounting-firms",
    "employee-offboarding-checklist",
    "backup-testing-insurers"
  ],
  "sources": [
    {
      "title": "IRS client-data guidance",
      "href": "https://www.irs.gov/tax-professionals/protect-your-clients-protect-yourself"
    },
    {
      "title": "FTC Safeguards Rule guidance",
      "href": "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know"
    }
  ]
},
  "google-workspace-security-managed-vs-diy": {
  "relatedSlugs": [
    "shadow-ai-at-work"
  ],
  "sources": [
    {
      "title": "Google Workspace security checklist",
      "href": "https://knowledge.workspace.google.com/admin/security/security-checklist-for-small-businesses-1-100-users?hl=en"
    }
  ]
},
  "microsoft-365-retention-vs-backup": {
  "relatedSlugs": [
    "backup-testing-insurers"
  ],
  "sources": [
    {
      "title": "Microsoft Purview retention",
      "href": "https://learn.microsoft.com/en-us/purview/retention"
    },
    {
      "title": "Microsoft 365 Backup overview",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/backup/backup-overview"
    }
  ]
},
  "security-questionnaire-response-services": {
  "relatedSlugs": [
    "managed-service-provider-security-models",
    "cyber-insurance-application-walkthrough"
  ],
  "sources": [
    {
      "title": "FTC Safeguards Rule guidance",
      "href": "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know"
    }
  ]
},
  "managed-identity-threat-response": {
  "relatedSlugs": [
    "employee-offboarding-checklist",
    "incident-response-plan-small-business"
  ],
  "sources": [
    {
      "title": "Microsoft Entra ID Protection",
      "href": "https://learn.microsoft.com/en-us/entra/id-protection/overview-identity-protection"
    }
  ]
},
  "google-workspace-retention-vs-backup": {
  "relatedSlugs": [
    "backup-testing-insurers"
  ],
  "sources": [
    {
      "title": "Google Vault FAQ",
      "href": "https://knowledge.workspace.google.com/vault/getting-started/google-vault-faq?hl=en"
    },
    {
      "title": "Google Drive administrator recovery",
      "href": "https://knowledge.workspace.google.com/admin/drive/recover-deleted-files-and-folders-for-drive-users?hl=en"
    }
  ]
},
  "cybersecurity-roadmap-milestones": {
  "relatedSlugs": [
    "managed-service-provider-security-models"
  ],
  "sources": [
    {
      "title": "NIST Small Business Quick-Start Guide",
      "href": "https://csrc.nist.gov/pubs/sp/1300/final"
    }
  ]
},
"cyber-insurance-cybersecurity-vendors": {
  "relatedSlugs": [
    "cyber-insurance-application-walkthrough",
    "managed-service-provider-security-models",
    "backup-testing-insurers"
  ],
  "sources": [
    {
      "title": "Travelers: Common cyber insurance quote conditions",
      "href": "https://www.travelers.com/cyber-knowledge/cyber-risk-services/what-are-common-subjectivities-to-cyber-and-tech-eo-policies"
    },
    {
      "title": "Travelers: Five cyber readiness practices",
      "href": "https://www.travelers.com/resources/business-topics/cyber-security/cyber-security-best-practices"
    },
    {
      "title": "Coalition: Cyber renewal paths and timelines",
      "href": "https://help.coalitioninc.com/hc/en-us/articles/6959642379547-How-do-Cyber-renewals-work-at-Coalition"
    },
    {
      "title": "FTC: Cyber insurance coverage questions for small businesses",
      "href": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
    },
    {
      "title": "vCISO.com: Published engagement price baselines",
      "href": "https://www.vciso.com/pricing"
    },
    {
      "title": "Helm: Core scope and commercial terms",
      "href": "https://helmsecured.com/helm-core/"
    },
    {
      "title": "Helm: Command scope and commercial terms",
      "href": "https://helmsecured.com/helm-command/"
    },
    {
      "title": "Helm: Free public-domain scan limitations",
      "href": "https://helmsecured.com/terms/"
    }
  ]
},
  "managed-service-provider-security-models": {
    relatedSlugs: ["managed-service-providers-new-jersey", "cyber-insurance-application-walkthrough", "choose-first-ai-workflow"],
    sources: [
      {title: "NIST: Building Your Small Business’s Cybersecurity Team", href: "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/building-your-team"},
      {title: "CISA and partner agencies: Protecting MSPs and their customers", href: "https://media.defense.gov/2022/May/11/2002994383/0/0/0/CSA_Protecting_Against_Cyber_Threats_to_MSPs_and_their_Customers_05112022.PDF"},
      {title: "Helm: Core service scope and terms", href: "https://helmsecured.com/helm-core/"},
      {title: "Helm: Command service scope and terms", href: "https://helmsecured.com/helm-command/"},
      {title: "Helm: Secure AI Adoption consulting", href: "https://helmsecured.com/secure-ai-adoption/"},
      {title: "Helm: Scope of the free public-domain scan", href: "https://helmsecured.com/terms/"},
    ],
  },
  "managed-service-providers-new-jersey": {
    "relatedSlugs": [
      "managed-service-provider-security-models",
      "what-a-soc-actually-does",
      "cyber-insurance-application-walkthrough",
      "choose-first-ai-workflow"
    ],
    "sources": [
      {
        "title": "NIST: Building Your Small Business’s Cybersecurity Team",
        "href": "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/building-your-team"
      },
      {
        "title": "CISA and partner agencies: Protecting MSPs and their customers",
        "href": "https://media.defense.gov/2022/May/11/2002994383/0/0/0/CSA_Protecting_Against_Cyber_Threats_to_MSPs_and_their_Customers_05112022.PDF"
      },
      {
        "title": "Helm: Core service scope and terms",
        "href": "https://helmsecured.com/helm-core/"
      },
      {
        "title": "Helm: Command service scope and terms",
        "href": "https://helmsecured.com/helm-command/"
      },
      {
        "title": "Helm: Secure AI Adoption consulting",
        "href": "https://helmsecured.com/secure-ai-adoption/"
      },
      {
        "title": "Helm: Scope of the free public-domain scan",
        "href": "https://helmsecured.com/terms/"
      }
    ]
  },
  "choose-first-ai-workflow": {
    "relatedSlugs": [
      "ai-access-business-documents",
      "measure-ai-time-savings",
      "shadow-ai-at-work"
    ],
    "sources": [
      {
        "title": "NIST AI RMF Playbook: Map",
        "href": "https://airc.nist.gov/airmf-resources/playbook/map/"
      },
      {
        "title": "NIST AI RMF Playbook: Measure",
        "href": "https://airc.nist.gov/airmf-resources/playbook/measure/"
      }
    ]
  },
  "ai-access-business-documents": {
    "relatedSlugs": [
      "choose-first-ai-workflow",
      "measure-ai-time-savings",
      "shadow-ai-at-work"
    ],
    "sources": [
      {
        "title": "Microsoft: Copilot data, privacy, and security",
        "href": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy"
      },
      {
        "title": "Microsoft: Retention for Copilot and AI apps",
        "href": "https://learn.microsoft.com/en-us/purview/retention-policies-copilot"
      },
      {
        "title": "Microsoft: Copilot web-search data handling",
        "href": "https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access"
      }
    ]
  },
  "measure-ai-time-savings": {
    "relatedSlugs": [
      "choose-first-ai-workflow",
      "ai-access-business-documents",
      "shadow-ai-at-work"
    ],
    "sources": [
      {
        "title": "NIST AI RMF Playbook: Map",
        "href": "https://airc.nist.gov/airmf-resources/playbook/map/"
      },
      {
        "title": "NIST AI RMF Playbook: Measure",
        "href": "https://airc.nist.gov/airmf-resources/playbook/measure/"
      }
    ]
  },
  "mfa-methods-compared": {
    "relatedSlugs": [
      "m365-security-baseline",
      "password-managers-small-teams",
      "employee-offboarding-checklist"
    ],
    "sources": [
      {
        "title": "Microsoft: Authentication overview",
        "href": "https://learn.microsoft.com/en-us/entra/identity/authentication/overview-authentication"
      },
      {
        "title": "Microsoft: OATH tokens and TOTP",
        "href": "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-oath-tokens"
      },
      {
        "title": "Microsoft: Number matching in Authenticator",
        "href": "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match"
      },
      {
        "title": "Microsoft: Passkeys and FIDO2",
        "href": "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passkeys-fido2"
      },
      {
        "title": "Microsoft: Plan a phishing-resistant authentication deployment",
        "href": "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-plan-prerequisites-phishing-resistant-passwordless-authentication"
      }
    ]
  },
  'm365-security-baseline': {
    relatedSlugs: ['mfa-methods-compared', 'employee-offboarding-checklist', 'what-is-dmarc'],
    sources: [sources.microsoftDefaults, sources.microsoftBaseline, {title: 'Microsoft: About shared mailboxes in Microsoft 365', href: 'https://learn.microsoft.com/en-us/microsoft-365/admin/email/about-shared-mailboxes?view=o365-worldwide'}],
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

  "pen-test-vs-vulnerability-scan": {
    "relatedSlugs": [
      "vulnerability-management-new-jersey",
      "cybersecurity-risk-assessment-tools",
      "network-hardening-small-business"
    ],
    "sources": [
      {
        "title": "NIST's technical testing guide",
        "href": "https://csrc.nist.gov/pubs/sp/800/115/final"
      }
    ]
  },
  "dns-filtering-small-business": {
    "relatedSlugs": [
      "network-hardening-small-business",
      "mfa-methods-compared",
      "email-security-services-evaluation"
    ],
    "sources": [
      {
        "title": "Cloudflare's DNS filtering documentation",
        "href": "https://developers.cloudflare.com/cloudflare-one/traffic-policies/get-started/dns/"
      }
    ]
  },
  "network-hardening-small-business": {
    "relatedSlugs": [
      "dns-filtering-small-business",
      "employee-offboarding-checklist",
      "vulnerability-management-new-jersey"
    ],
    "sources": [
      {
        "title": "CISA's infrastructure hardening guidance",
        "href": "https://www.cisa.gov/resources-tools/resources/enhanced-visibility-and-hardening-guidance-communications-infrastructure"
      },
      {
        "title": "CISA recommends phishing-resistant MFA",
        "href": "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication"
      }
    ]
  },
  "disaster-recovery-small-business": {
    "relatedSlugs": [
      "backup-testing-insurers",
      "microsoft-365-retention-vs-backup",
      "incident-response-plan-small-business"
    ],
    "sources": [
      {
        "title": "NIST's contingency planning guide",
        "href": "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"
      },
      {
        "title": "CISA's ransomware guidance",
        "href": "https://www.cisa.gov/stopransomware/ransomware-guide"
      }
    ]
  },

  ...refreshedArticleSupport,
};
