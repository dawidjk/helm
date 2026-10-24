import type {ArticleSupport} from './articleSupport';

export const refreshedArticleSupport: Record<string, ArticleSupport> = {
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
  "ai-access-business-documents": {
  "relatedSlugs": [
    "choose-first-ai-workflow",
    "measure-ai-time-savings",
    "shadow-ai-at-work"
  ],
  "sources": [
    {
      "title": "Microsoft’s Copilot privacy documentation",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy"
    },
    {
      "title": "Microsoft’s retention documentation",
      "href": "https://learn.microsoft.com/en-us/purview/retention-policies-copilot"
    },
    {
      "title": "Microsoft’s web-search documentation",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access"
    }
  ]
},
  "ai-phishing-red-flags": {
  "relatedSlugs": [
    "deepfake-ceo-fraud",
    "shadow-ai-at-work",
    "invoice-fraud-red-flags"
  ],
  "sources": [
    {
      "title": "FBI's December 2024 AI-fraud advisory",
      "href": "https://www.ic3.gov/PSA/2024/PSA241203"
    },
    {
      "title": "FBI BEC guidance",
      "href": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
    }
  ]
},
  "backup-testing-insurers": {
  "relatedSlugs": [
    "cyber-insurance-questionnaire",
    "incident-response-plan-small-business",
    "cyber-insurance-claim-denied"
  ],
  "sources": [
    {
      "title": "FTC’s cyber insurance guidance",
      "href": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
    },
    {
      "title": "CISA StopRansomware guide",
      "href": "https://www.cisa.gov/stopransomware/ransomware-guide"
    },
    {
      "title": "contingency planning guide",
      "href": "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Professional Services",
      "href": "/professional-services/"
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
    },
    {
      "title": "Mozilla TLS documentation",
      "href": "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security"
    },
    {
      "title": "Mozilla HTTP Observatory FAQ",
      "href": "https://developer.mozilla.org/en-US/observatory/docs/faq"
    },
    {
      "title": "NIST Cybersecurity Framework 2.0",
      "href": "https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf"
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
      "title": "NIST’s AI Risk Management Framework Playbook",
      "href": "https://airc.nist.gov/airmf-resources/playbook/map/"
    },
    {
      "title": "NIST’s measurement guidance",
      "href": "https://airc.nist.gov/airmf-resources/playbook/measure/"
    }
  ]
},
  "cmmc-deadline-checklist": {
    "relatedSlugs": [
      "cmmc-level-1-vs-level-2",
      "sprs-score-explained",
      "ssp-poam-explained"
    ],
    "sources": [
      {
        "title": "DOJ MORSECORP settlement announcement",
        "href": "https://www.justice.gov/opa/pr/defense-contractor-morsecorp-inc-agrees-pay-46-million-settle-cybersecurity-fraud"
      },
      {
        "title": "current CMMC overview",
        "href": "https://dodcio.defense.gov/cmmc/About/"
      },
      {
        "title": "NARA CUI Registry",
        "href": "https://www.archives.gov/cui/registry/category-list"
      },
      {
        "title": "DFARS 252.204-7012",
        "href": "https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting.?searchTerms=252.204-7012"
      }
    ]
  },
  "cmmc-level-1-vs-level-2": {
    "relatedSlugs": [
      "cmmc-deadline-checklist",
      "sprs-score-explained",
      "cui-handling-shop-floor"
    ],
    "sources": [
      {
        "title": "FAR 52.204-21",
        "href": "https://www.acquisition.gov/far/52.204-21"
      },
      {
        "title": "NARA CUI Registry",
        "href": "https://www.archives.gov/cui/registry/category-list"
      },
      {
        "title": "department CMMC overview",
        "href": "https://dodcio.defense.gov/cmmc/About/"
      }
    ]
  },
  "cui-handling-shop-floor": {
  "relatedSlugs": [
    "cmmc-level-1-vs-level-2",
    "ssp-poam-explained",
    "sprs-score-explained"
  ],
  "sources": [
    {
      "title": "NARA controlled technical information category",
      "href": "https://www.archives.gov/cui/registry/category-detail/controlled-technical-info.html"
    },
    {
      "title": "DFARS 252.204-7012",
      "href": "https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting.?searchTerms=252.204-7012"
    },
    {
      "title": "NARA CUI Registry",
      "href": "https://www.archives.gov/cui/registry/category-list"
    },
    {
      "title": "FAR 52.204-21",
      "href": "https://www.acquisition.gov/far/52.204-21"
    },
    {
      "title": "NIST SP 800-171 Revision 2",
      "href": "https://csrc.nist.gov/pubs/sp/800/171/r2/upd1/final"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Manufacturing & Defense",
      "href": "/manufacturing/"
    }
  ]
},
  "cyber-insurance-application-walkthrough": {
  "relatedSlugs": [
    "cyber-insurance-questionnaire",
    "cyber-insurance-claim-denied",
    "backup-testing-insurers"
  ],
  "sources": [
    {
      "title": "FTC recommends discussing cyber-insurance coverage needs with the insurance agent",
      "href": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
    },
    {
      "title": "Microsoft: Configure the multifactor authentication registration policy",
      "href": "https://learn.microsoft.com/en-us/entra/id-protection/howto-identity-protection-configure-mfa-policy"
    },
    {
      "title": "Microsoft: Ransomware attack recovery plan",
      "href": "https://learn.microsoft.com/en-us/security/ransomware/protect-against-ransomware-phase1"
    },
    {
      "title": "AWS: Locking objects with Object Lock",
      "href": "https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Professional Services",
      "href": "/professional-services/"
    }
  ]
},
  "cyber-insurance-claim-denied": {
  "relatedSlugs": [
    "cyber-insurance-application-walkthrough",
    "cyber-insurance-questionnaire",
    "backup-testing-insurers"
  ],
  "sources": [
    {
      "title": "FTC's cyber-insurance guidance",
      "href": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
    },
    {
      "title": "NAIC: 2026 Report on the Cybersecurity Insurance Market",
      "href": "https://content.naic.org/resource-center/2026-report-cybersecurity-insurance-market"
    },
    {
      "title": "NIST SP 800-61 Rev. 3: Incident Response Recommendations and Considerations for Cybersecurity Risk Management",
      "href": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf"
    },
    {
      "title": "FBI: Business Email Compromise",
      "href": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
    },
    {
      "title": "CISA and partner agencies: #StopRansomware Guide, May 2023",
      "href": "https://www.ic3.gov/CSA/2023/230523.pdf"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Professional Services",
      "href": "/professional-services/"
    }
  ]
},
  "cyber-insurance-questionnaire": {
  "relatedSlugs": [
    "cyber-insurance-application-walkthrough",
    "cyber-insurance-claim-denied",
    "backup-testing-insurers"
  ],
  "sources": [
    {
      "title": "FTC cyber-insurance guidance",
      "href": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Professional Services",
      "href": "/professional-services/"
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
      "title": "NIST's guidance on building a cybersecurity team",
      "href": "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/building-your-team"
    },
    {
      "title": "NIST Cybersecurity Framework 2.0: Small Business Quick-Start Guide",
      "href": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1300.pdf"
    }
  ],
  "relatedLinks": [
    {
      "title": "Secure AI Adoption consulting (separately scoped)",
      "href": "/secure-ai-adoption/"
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
    },
    {
      "title": "FIRST: CVSS v4.0 User Guide",
      "href": "https://www.first.org/cvss/v4.0/user-guide"
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
    },
    {
      "title": "NIST Cybersecurity Framework frequently asked questions",
      "href": "https://www.nist.gov/cyberframework/faqs"
    }
  ]
},
  "deepfake-ceo-fraud": {
  "relatedSlugs": [
    "ai-phishing-red-flags",
    "shadow-ai-at-work",
    "wire-fraud-prevention-law-firms"
  ],
  "sources": [
    {
      "title": "Hong Kong government reply to the Legislative Council",
      "href": "https://www.info.gov.hk/gia/general/202406/26/P2024062600192.htm"
    },
    {
      "title": "FBI's guidance on AI-enabled financial fraud",
      "href": "https://www.ic3.gov/PSA/2024/PSA241203"
    },
    {
      "title": "FBI's business email compromise guidance",
      "href": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
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
    },
    {
      "title": "Have I Been Pwned: Frequently Asked Questions",
      "href": "https://haveibeenpwned.com/faqs"
    },
    {
      "title": "ICANN: DNS Abuse Mitigation Program",
      "href": "https://www.icann.org/dnsabuse"
    },
    {
      "title": "Microsoft: Revoke user access in Microsoft Entra ID",
      "href": "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access"
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
    },
    {
      "title": "email protection stack",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/protection-stack-microsoft-defender-for-office365"
    },
    {
      "title": "What Is DMARC? A Plain-English Guide for Business Owners",
      "href": "/resources/what-is-dmarc/"
    },
    {
      "title": "Helm for Professional services",
      "href": "/professional-services/"
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
    },
    {
      "title": "Safe Links",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/safe-links-about"
    },
    {
      "title": "Safe Attachments",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/safe-attachments-about"
    }
  ]
},
  "employee-offboarding-checklist": {
  "relatedSlugs": [
    "password-managers-small-teams",
    "m365-security-baseline",
    "incident-response-plan-small-business"
  ],
  "sources": [
    {
      "title": "former-employee guidance",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee?view=o365-worldwide"
    },
    {
      "title": "access-revocation documentation",
      "href": "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access"
    },
    {
      "title": "Offboard a team member",
      "href": "https://support.1password.com/offboarding/"
    },
    {
      "title": "How to Wipe Only Corporate Data From Intune-Managed Apps",
      "href": "https://learn.microsoft.com/en-us/intune/app-management/protection/wipe-corporate-data"
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
    },
    {
      "title": "hold guidance",
      "href": "https://knowledge.workspace.google.com/vault/holds/get-started-with-holds-in-google-vault"
    },
    {
      "title": "preserving Vault data when switching editions",
      "href": "https://knowledge.workspace.google.com/admin/vault/preserve-vault-data-when-switching-editions"
    },
    {
      "title": "Backup Testing: Evidence to Prepare for Cyber Insurance Questions",
      "href": "/resources/backup-testing-insurers/"
    },
    {
      "title": "Helm for Professional services",
      "href": "/professional-services/"
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
    },
    {
      "title": "Shadow AI: What Employees Paste into Chatbots When Nobody Is Looking",
      "href": "/resources/shadow-ai-at-work/"
    },
    {
      "title": "Helm for Professional services",
      "href": "/professional-services/"
    }
  ]
},
  "hipaa-email-rules-small-practices": {
  "relatedSlugs": [
    "m365-security-baseline",
    "mfa-methods-compared",
    "incident-response-plan-small-business"
  ],
  "sources": [
    {
      "title": "email guidance",
      "href": "https://www.hhs.gov/hipaa/for-professionals/faq/does-the-security-rule-allow-for-sending-electronic-phi-in-an-email/index.html"
    },
    {
      "title": "encryption FAQ",
      "href": "https://www.hhs.gov/hipaa/for-professionals/faq/is-the-use-of-encryption-mandatory-in-the-security-rule/index.html"
    },
    {
      "title": "cloud-computing guidance",
      "href": "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html"
    },
    {
      "title": "limited conduit exception",
      "href": "https://www.hhs.gov/hipaa/for-professionals/faq/can-a-csp-be-considered-to-be-a-conduit-like-the-postal-service-and-therefore-not-a-business-associate-that-must-comply-with-the-hipaa-rules/index.html"
    },
    {
      "title": "individual access FAQ",
      "href": "https://www.hhs.gov/hipaa/for-professionals/faq/do-individuals-have-the-right-under-hipaa-to-have/index.html"
    },
    {
      "title": "patient email guidance",
      "href": "https://www.hhs.gov/hipaa/for-professionals/faq/does-hipaa-permit-health-care-providers-to-use-email-to-discuss-health-issues-with-patients/index.html"
    },
    {
      "title": "Security Rule proposal page",
      "href": "https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/index.html"
    },
    {
      "title": "HHS notice about the related court order",
      "href": "https://www.hhs.gov/hipaa/court-order-right-of-access/index.html"
    },
    {
      "title": "Breach Notification Rule",
      "href": "https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Professional Services",
      "href": "/professional-services/"
    }
  ]
},
  "hipaa-risk-analysis-medical-practices": {
  "relatedSlugs": [
    "hipaa-email-rules-small-practices",
    "what-a-soc-actually-does",
    "incident-response-plan-small-business"
  ],
  "sources": [
    {
      "title": "HHS risk-analysis guidance",
      "href": "https://www.hhs.gov/hipaa/for-professionals/security/guidance/guidance-risk-analysis/index.html"
    },
    {
      "title": "HealthIT.gov guidance",
      "href": "https://healthit.gov/privacy-security/health-it-privacy-and-security-resources-providers/"
    },
    {
      "title": "user guide",
      "href": "https://www.healthit.gov/sites/default/files/page/2024-10/SRA_Tool_User_Guide_Version_3_5_Final.pdf"
    },
    {
      "title": "risk-analysis and management paper",
      "href": "https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/administrative/securityrule/riskassessment.pdf"
    },
    {
      "title": "Current SRA tool and user guide",
      "href": "https://healthit.gov/privacy-security/security-risk-assessment-tool/"
    },
    {
      "title": "HHS Security Rule summary",
      "href": "https://www.hhs.gov/hipaa/for-professionals/security/laws-regulations/index.html"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Medical Practices",
      "href": "/medical-practices/"
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
    },
    {
      "title": "Microsoft application provisioning",
      "href": "https://learn.microsoft.com/en-us/entra/identity/app-provisioning/user-provisioning"
    },
    {
      "title": "Microsoft access-revocation guidance",
      "href": "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access"
    },
    {
      "title": "Microsoft emergency-access guidance",
      "href": "https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access"
    },
    {
      "title": "Microsoft permissions and consent overview",
      "href": "https://learn.microsoft.com/en-us/entra/identity-platform/permissions-consent-overview"
    },
    {
      "title": "NIST SP 800-61 Revision 3",
      "href": "https://nvlpubs.nist.gov/nistpubs/specialpublications/nist.sp.800-61r3.pdf"
    },
    {
      "title": "Employee Offboarding Checklist: Accounts, Devices and Business Continuity",
      "href": "/resources/employee-offboarding-checklist/"
    },
    {
      "title": "Helm for Professional services",
      "href": "/professional-services/"
    }
  ]
},
  "incident-response-plan-small-business": {
  "relatedSlugs": [
    "backup-testing-insurers",
    "what-a-soc-actually-does",
    "employee-offboarding-checklist"
  ],
  "sources": [
    {
      "title": "FTC’s cyber insurance guidance",
      "href": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
    },
    {
      "title": "FBI business email compromise guidance",
      "href": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
    },
    {
      "title": "CISA StopRansomware guide",
      "href": "https://www.cisa.gov/stopransomware/ransomware-guide"
    },
    {
      "title": "incident response publication, SP 800-61 Revision 3",
      "href": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
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
      "href": "https://www.cisa.gov/sites/default/files/publications/Insider%20Threat%20Mitigation%20Guide_Final_508.pdf",
      "note": ", November 2020."
    },
    {
      "title": "NIST SP 800-61 Rev. 3",
      "href": "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf",
      "note": ", April 2025."
    },
    {
      "title": "Revoke user access in Microsoft Entra ID",
      "href": "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access",
      "note": ", updated June 19, 2026."
    }
  ]
},
  "invoice-fraud-red-flags": {
  "relatedSlugs": [
    "vendor-email-compromise-contractors",
    "wire-fraud-prevention-law-firms",
    "what-is-dmarc"
  ],
  "sources": [
    {
      "title": "FBI 2025 IC3 Annual Report, pages 7 and 8",
      "href": "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
    },
    {
      "title": "FBI business email compromise guidance",
      "href": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
    },
    {
      "title": "Vendor Email Compromise: When Your Supplier's Invoice Is Actually a Scam",
      "href": "/resources/vendor-email-compromise-contractors/"
    },
    {
      "title": "Wire Fraud Prevention for Law Firms: The Callback Protocol",
      "href": "/resources/wire-fraud-prevention-law-firms/"
    },
    {
      "title": "What Is DMARC? A Plain-English Guide for Business Owners",
      "href": "/resources/what-is-dmarc/"
    },
    {
      "title": "How Helm works",
      "href": "/"
    }
  ]
},
  "job-site-devices-public-wifi": {
  "relatedSlugs": [
    "vendor-email-compromise-contractors",
    "invoice-fraud-red-flags",
    "mfa-methods-compared"
  ],
  "sources": [
    {
      "title": "Microsoft Intune device management",
      "href": "https://learn.microsoft.com/en-us/intune/fundamentals/what-is-intune"
    },
    {
      "title": "Google endpoint management overview",
      "href": "https://knowledge.workspace.google.com/admin/devices/overview-manage-devices-with-google-endpoint-management"
    },
    {
      "title": "FTC explains",
      "href": "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Contractors & Trades",
      "href": "/contractors/"
    }
  ]
},
  "law-firm-device-security-checklist": {
  "relatedSlugs": [
    "wire-fraud-prevention-law-firms",
    "what-a-soc-actually-does",
    "employee-offboarding-checklist"
  ],
  "sources": [
    {
      "title": "ABA Model Rule 1.6(c)",
      "href": "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_6_confidentiality_of_information/"
    },
    {
      "title": "BitLocker",
      "href": "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/"
    },
    {
      "title": "FileVault",
      "href": "https://support.apple.com/guide/deployment/intro-to-filevault-dep82064ec40/web"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Law Firms",
      "href": "/law-firms/"
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
  "m365-security-baseline": {
  "relatedSlugs": [
    "mfa-methods-compared",
    "employee-offboarding-checklist",
    "what-is-dmarc"
  ],
  "sources": [
    {
      "title": "Microsoft shared-mailbox access and permissions",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/admin/email/about-shared-mailboxes?view=o365-worldwide#access-and-permissions"
    },
    {
      "title": "Microsoft security defaults",
      "href": "https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults"
    },
    {
      "title": "Microsoft documents external-forwarding controls",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/outbound-spam-policies-external-email-forwarding"
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
    },
    {
      "title": "NIST Phish Scale User Guide",
      "href": "https://csrc.nist.gov/pubs/tn/2276/final"
    },
    {
      "title": "Wire Fraud Prevention for Law Firms: The Callback Protocol",
      "href": "/resources/wire-fraud-prevention-law-firms/"
    },
    {
      "title": "Helm for Professional services",
      "href": "/professional-services/"
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
    },
    {
      "title": "minimum endpoint requirements",
      "href": "https://learn.microsoft.com/en-us/defender-endpoint/minimum-requirements"
    },
    {
      "title": "Incident Response Plan for Small and Medium Businesses: The First Decisions",
      "href": "/resources/incident-response-plan-small-business/"
    },
    {
      "title": "Helm for Professional services",
      "href": "/professional-services/"
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
    },
    {
      "title": "What are risk detections?",
      "href": "https://learn.microsoft.com/en-us/entra/id-protection/concept-identity-protection-risks"
    },
    {
      "title": "Revoke user access in Microsoft Entra ID",
      "href": "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access"
    },
    {
      "title": "What are workload identities?",
      "href": "https://learn.microsoft.com/en-us/entra/workload-id/workload-identities-overview"
    },
    {
      "title": "Manage guest access with access reviews",
      "href": "https://learn.microsoft.com/en-us/entra/id-governance/manage-guest-access-with-access-reviews"
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
      "title": "NIST’s AI RMF Playbook",
      "href": "https://airc.nist.gov/airmf-resources/playbook/map/"
    },
    {
      "title": "NIST’s measurement guidance",
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
      "title": "Microsoft authentication overview",
      "href": "https://learn.microsoft.com/en-us/entra/identity/authentication/overview-authentication"
    },
    {
      "title": "OATH token documentation",
      "href": "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-oath-tokens"
    },
    {
      "title": "Microsoft number-matching guidance",
      "href": "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match"
    },
    {
      "title": "Microsoft passkey documentation",
      "href": "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passkeys-fido2"
    },
    {
      "title": "deployment prerequisites",
      "href": "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-plan-prerequisites-phishing-resistant-passwordless-authentication"
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
  "outlook-email-encryption-options": {
  "relatedSlugs": [
    "hipaa-email-rules-small-practices"
  ],
  "sources": [
    {
      "title": "Microsoft email-encryption comparison",
      "href": "https://learn.microsoft.com/en-us/purview/email-encryption"
    },
    {
      "title": "Purview Message Encryption overview",
      "href": "https://learn.microsoft.com/en-us/purview/ome"
    },
    {
      "title": "HIPAA Email Rules for Small Practices: What Addressable Means in Operation",
      "href": "/resources/hipaa-email-rules-small-practices/"
    },
    {
      "title": "Helm for Professional services",
      "href": "/professional-services/"
    }
  ]
},
  "password-managers-small-teams": {
  "relatedSlugs": [
    "mfa-methods-compared",
    "employee-offboarding-checklist",
    "m365-security-baseline"
  ],
  "sources": [
    {
      "title": "CISA password-manager guidance",
      "href": "https://www.cisa.gov/resources-tools/training/cyb3rsmrt-use-password-manager-create-and-remember-strong-passwords"
    },
    {
      "title": "1Password: Offboard a team member",
      "href": "https://support.1password.com/offboarding/"
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
  "shadow-ai-at-work": {
  "relatedSlugs": [
    "ai-phishing-red-flags",
    "deepfake-ceo-fraud",
    "incident-response-plan-small-business"
  ],
  "sources": [
    {
      "title": "Generative AI Profile",
      "href": "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
    },
    {
      "title": "Enterprise privacy at OpenAI",
      "href": "https://openai.com/enterprise-privacy/"
    },
    {
      "title": "Data, Privacy, and Security for Microsoft Copilot",
      "href": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy"
    },
    {
      "title": "Chat and file retention in ChatGPT",
      "href": "https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt"
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
    },
    {
      "title": "small-business logging guidance",
      "href": "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/use-logging-on-business-systems"
    },
    {
      "title": "What a SOC Actually Does: Monitoring, Investigation and Response",
      "href": "/resources/what-a-soc-actually-does/"
    },
    {
      "title": "Helm for Professional services",
      "href": "/professional-services/"
    }
  ]
},
  "sprs-score-explained": {
  "relatedSlugs": [
    "cmmc-level-1-vs-level-2",
    "cmmc-deadline-checklist",
    "ssp-poam-explained"
  ],
  "sources": [
    {
      "title": "NIST SP 800-171 DoD Assessment Methodology",
      "href": "https://www.acq.osd.mil/asda/dpc/cp/cyber/docs/safeguarding/NIST-SP-800-171-Assessment-Methodology-Version-1.2.1-6.24.2020.pdf"
    },
    {
      "title": "DOJ settlement announcement",
      "href": "https://www.justice.gov/opa/pr/defense-contractor-morsecorp-inc-agrees-pay-46-million-settle-cybersecurity-fraud"
    },
    {
      "title": "DFARS 252.204-7020",
      "href": "https://www.acquisition.gov/dfars/252.204-7020-nist-sp-800-171dod-assessment-requirements."
    },
    {
      "title": "CMMC Level 1 vs Level 2: Which One Does Your Shop Actually Need?",
      "href": "/resources/cmmc-level-1-vs-level-2/"
    },
    {
      "title": "CMMC After the Phase 2 Suspension: A 12-Step Checklist for Manufacturers",
      "href": "/resources/cmmc-deadline-checklist/"
    },
    {
      "title": "SSP and POA&M Explained: The Evidence Behind CMMC Readiness",
      "href": "/resources/ssp-poam-explained/"
    },
    {
      "title": "Helm for Manufacturing & Defense",
      "href": "/manufacturing/"
    }
  ]
},
  "ssp-poam-explained": {
    "relatedSlugs": [
      "sprs-score-explained",
      "cmmc-level-1-vs-level-2",
      "cmmc-deadline-checklist"
    ],
    "sources": [
      {
        "title": "NIST SP 800-171 Revision 2",
        "href": "https://csrc.nist.gov/pubs/sp/800/171/r2/upd1/final"
      },
      {
        "title": "CMMC guidance",
        "href": "https://dodcio.defense.gov/cmmc/About/"
      },
      {
        "title": "DFARS assessment clause",
        "href": "https://www.acquisition.gov/dfars/252.204-7020-nist-sp-800-171dod-assessment-requirements."
      }
    ]
  },
  "vendor-email-compromise-contractors": {
  "relatedSlugs": [
    "invoice-fraud-red-flags",
    "job-site-devices-public-wifi",
    "what-is-dmarc"
  ],
  "sources": [
    {
      "title": "FBI business email compromise guidance",
      "href": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Contractors & Trades",
      "href": "/contractors/"
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
    },
    {
      "title": "Comparing Managed Service Provider Models: Standard Security Stack versus Full Program Ownership",
      "href": "/resources/managed-service-provider-security-models/"
    },
    {
      "title": "Helm for Professional services",
      "href": "/professional-services/"
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
    },
    {
      "title": "patch-management guide",
      "href": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
    },
    {
      "title": "Penetration Testing vs Vulnerability Scanning: What Your Business Should Buy",
      "href": "/resources/pen-test-vs-vulnerability-scan/"
    },
    {
      "title": "Helm for Professional services",
      "href": "/professional-services/"
    }
  ]
},
  "what-a-soc-actually-does": {
  "relatedSlugs": [
    "incident-response-plan-small-business",
    "backup-testing-insurers",
    "pen-test-vs-vulnerability-scan"
  ],
  "sources": [
    {
      "title": "logging guidance for small businesses",
      "href": "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/use-logging-on-business-systems"
    },
    {
      "title": "incident-response guidance",
      "href": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
    },
    {
      "title": "Incident Response Plan for Small and Medium Businesses: The First Decisions",
      "href": "/resources/incident-response-plan-small-business/"
    },
    {
      "title": "Backup Testing: Evidence to Prepare for Cyber Insurance Questions",
      "href": "/resources/backup-testing-insurers/"
    },
    {
      "title": "Penetration Testing vs Vulnerability Scanning: What Your Business Should Buy",
      "href": "/resources/pen-test-vs-vulnerability-scan/"
    },
    {
      "title": "How Helm works",
      "href": "/"
    }
  ]
},
  "what-is-dmarc": {
  "relatedSlugs": [
    "invoice-fraud-red-flags",
    "vendor-email-compromise-contractors",
    "wire-fraud-prevention-law-firms"
  ],
  "sources": [
    {
      "title": "current IETF DMARC standard",
      "href": "https://datatracker.ietf.org/doc/html/rfc9989"
    },
    {
      "title": "Microsoft’s deployment guidance",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure"
    },
    {
      "title": "aggregate reporting standard",
      "href": "https://datatracker.ietf.org/doc/html/rfc9990"
    },
    {
      "title": "FBI’s business email compromise guidance",
      "href": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
    },
    {
      "title": "Google’s header instructions",
      "href": "https://support.google.com/mail/answer/29436?hl=en"
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
    },
    {
      "title": "What is Microsoft Defender for Business?",
      "href": "https://learn.microsoft.com/en-us/defender-business/mdb-overview"
    }
  ]
},
  "wire-fraud-prevention-law-firms": {
  "relatedSlugs": [
    "invoice-fraud-red-flags",
    "ai-phishing-red-flags",
    "what-is-dmarc"
  ],
  "sources": [
    {
      "title": "2025 Internet Crime Report",
      "href": "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
    },
    {
      "title": "FBI business email compromise guidance",
      "href": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Law Firms",
      "href": "/law-firms/"
    }
  ]
},
  "wisp-checklist-accounting-firms": {
  "relatedSlugs": [
    "employee-offboarding-checklist",
    "backup-testing-insurers",
    "m365-security-baseline"
  ],
  "sources": [
    {
      "title": "IRS WISP guidance",
      "href": "https://www.irs.gov/newsroom/tips-to-help-tax-professionals-protect-client-information"
    },
    {
      "title": "FTC Safeguards Rule guidance",
      "href": "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know"
    },
    {
      "title": "IRS Publication 5708",
      "href": "https://www.irs.gov/pub/irs-pdf/p5708.pdf"
    }
  ],
  "relatedLinks": [
    {
      "title": "Helm for Accounting Firms",
      "href": "/accounting-firms/"
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
    },
    {
      "title": "preventive maintenance",
      "href": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
    }
  ]
}
};
