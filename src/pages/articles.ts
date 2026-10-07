import type {Paragraph, LinkedParagraph} from '../lib/richText';
export type {Paragraph, LinkedParagraph};

export type Article = {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDesc: string;
  date: string;
  updated?: string;
  readMin: number;
  lane: string;
  laneTo: string;
  intro: Paragraph;
  lead?: Paragraph[];
  readingLayout?: boolean;
  sections: {h: string; ps: (Paragraph | {list: Paragraph[]; ordered?: boolean})[]; table?: {caption: string; headers: string[]; rows: string[][]}}[];
  takeaway: string;
  organizationByline?: boolean;
  hideVisual?: boolean;
  consultation?: {title: string; sub: string; label: string; to: string};
  /**
   * 'scan' (default) sends the reader to the free domain scan CTA.
   * 'book' sends compliance-research readers (cyber-insurance, HIPAA topics)
   * straight to booking a call instead, since they have already self-selected
   * into a consultative buying intent a scan doesn't serve.
   * 'book-cmmc' is the same book CTA carrying the manufacturing lane's own
   * wording, which names the 110 controls and a prime contractor. Use it only
   * on articles whose reader is a defense contractor; see ctaCopy.ts.
   */
  ctaMode?: 'scan' | 'book' | 'book-cmmc';
};

export const articles: Article[] = [
{
  "slug": "cybersecurity-point-solutions-vs-managed-security",
  "title": "Cybersecurity Point Solutions vs Managed Security for NJ SMBs",
  "metaTitle": "Point Solutions vs Managed Security for NJ SMBs | Helm",
  "metaDesc": "Compare separate security tools with Helm Core and Command. Map coverage, response duties and questionnaire evidence before choosing managed security.",
  "date": "2026-10-06",
  "readMin": 5,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Your accounting firm has an email filter, endpoint protection and a backup subscription. A customer then asks who investigates suspicious activity and whether every laptop is covered. The invoices show what you bought. Answering the customer requires coverage records and named responsibilities.",
  "lead": [
    "That is the buying decision behind cybersecurity point solutions versus managed security: which protections do you need, and who will operate them and keep the evidence current? For a New Jersey business with existing IT, start with the work falling between contracts."
  ],
  "takeaway": "Keep a point solution when it addresses a defined gap and has an operating owner. Consider a standardized managed stack when protection needs consistent coverage. Add program ownership when recurring risk, evidence and leadership decisions need coordination.",
  "sections": [
    {
      "h": "What a cybersecurity point solution does",
      "ps": [
        "A point solution addresses a particular security job, such as filtering email, detecting threats on endpoints or backing up cloud data. You can buy it directly or through a provider. Its operating model matters: the subscription may supply software, managed investigation or a combination, depending on the agreement.",
        "Separate tools can be a sensible choice when your IT team has the expertise and time to maintain them. Check compatibility, overlapping licenses and the handoff between products. An email alert that suggests a compromised account may also require an identity review and a decision about access.",
        {
          "text": "NIST's guidance on building a cybersecurity team recommends starting with the outcomes you need and documenting the provider's service level, responsibilities and expectations. Use those responsibilities to compare proposals before comparing product names.",
          "links": [
            {
              "phrase": "NIST's guidance on building a cybersecurity team",
              "to": "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/building-your-team"
            }
          ]
        }
      ]
    },
    {
      "h": "Find the gaps between tools and operating work",
      "ps": [
        "Review one recent task with your existing IT provider: a reported phishing email, an unprotected laptop or a customer questionnaire. Follow it from the initial request to closure. Identify where somebody had to guess who owned the next step.",
        {
          "list": [
            "For email, name who reviews reported messages, approves exceptions and escalates a suspected account compromise.",
            "For endpoints, reconcile the device inventory with protection records. Assign investigation and containment separately from patching and routine administration.",
            "For evidence, identify who checks the scope and date of each record, records exceptions and gets approval for a questionnaire answer."
          ]
        },
        "Fewer notifications alone do not establish better protection. Ask a managed provider to show how an alert becomes an investigation, an authorized response and a record of the outcome. Confirm what appears in reporting and which decisions still reach your business."
      ]
    },
    {
      "h": "Compare Helm Core, Helm Command and AI consulting",
      "ps": [
        "Helm is a New Jersey managed cybersecurity provider that works alongside your existing IT team. Its two recurring services address different operating needs. Secure AI Adoption consulting is a separate engagement for a specific workflow."
      ],
      "table": {
        "caption": "Match the service to the work that needs an owner",
        "headers": [
          "Option",
          "Covered work",
          "Work your firm retains"
        ],
        "rows": [
          [
            "Helm Core",
            "Standardized security stack and monthly reporting; standard fit is 20 to 75 people.",
            "Wider program priorities, evidence coordination and routine IT."
          ],
          [
            "Helm Command",
            "Covered Core stack plus risk register, roadmap, evidence upkeep, bounded questionnaire responses and quarterly leadership reviews; qualified fit is 75 to 250 people.",
            "Final attestations, spending and risk decisions. Existing IT implements assigned routine work."
          ],
          [
            "Secure AI Adoption consulting",
            "Assessment of one internal workflow, its effort and cost, and tool and data requirements; any pilot is separately scoped.",
            "Workflow approval, authorized data access and acceptance of outputs. Wider rollout requires separate scope."
          ]
        ]
      }
    },
    {
      "h": "Choose the stack or the program owner",
      "ps": [
        {
          "text": "Helm Core includes managed email protection, device detection and response, supported identity protection, cloud productivity backup, awareness learning and simulations, digital risk protection and one monthly security report. Specialist vendor teams provide the continuous monitoring behind covered capabilities. Core does not include quarterly leadership reviews or open-ended advisory work.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        "Consider a hypothetical 30-person CPA firm whose partner owns its security plan and whose IT provider maintains its systems. If those owners can manage priorities and evidence, Core may fit the need for a defined security layer. The firm should first confirm supported platforms, eligible workstations and exclusions.",
        {
          "text": "Helm Command adds ongoing program ownership: a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded customer and insurance responses, quarterly leadership reviews, an annual tabletop and IT coordination. A hypothetical 100-person professional-services firm with recurring questionnaires and unresolved cross-team work could evaluate that scope.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        "Both examples are illustrative, not customer results. Helm retains a security-only role. Help desk, procurement, administration and routine patching stay with existing IT. Servers, phones, networks, specialized systems, forensic response and hands-on remediation require separate written scope unless expressly included."
      ]
    },
    {
      "h": "Test the evidence before signing a questionnaire",
      "ps": [
        "For a question about endpoint protection, start with the population the question covers. Compare a current device inventory with protection deployment records and list any exceptions. A report covering eligible workstations cannot support an answer about every server and mobile device.",
        "Keep the question, evidence reference, date, technical reviewer and approved answer together. For a backup question, check covered data and the relevant restore-test record. A written policy needs operating evidence behind its claims.",
        "A quarterly review can track unresolved gaps, owners and deadlines so the same unanswered question does not return at renewal. Command supports that cadence and bounded response work. The client approves every final attestation; customers and insurers decide whether the evidence meets their requirements."
      ]
    },
    {
      "h": "Use a buyer checklist and start with a bounded review",
      "ps": [
        {
          "list": [
            "List users, email and identity platforms, eligible devices and critical data. Name the existing IT owner.",
            "Ask each provider for a coverage map, sample report and response handoff with authority and escalation clearly assigned.",
            "Request a fictional evidence example and identify who validates it before a questionnaire answer is submitted.",
            "Compare total contract cost, term, response scope, questionnaire limits, separately billed work and exit arrangements.",
            "Choose a first review date and define what must be verified before onboarding is complete."
          ],
          "ordered": true
        },
        {
          "text": "If your team is considering an AI tool for client-document work, review the workflow and data access before a pilot. Helm's Secure AI Adoption consulting is separately scoped; it is not a feature automatically included in Core or Command.",
          "links": [
            {
              "phrase": "Secure AI Adoption consulting",
              "to": "/professional-services/"
            }
          ]
        },
        {
          "text": "Start with Helm's free public-domain scan for a domain you control. It checks publicly reachable email and web configuration without credentials. Bring the findings and your responsibility map to a fit conversation. The scan is a limited external check, not an internal assessment or compliance determination.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        },
        "If fit or scope needs deeper investigation, agree on bounded paid discovery before the work begins. Finish with a named owner, written next step and review date."
      ]
    }
  ]
},
{
  "slug": "email-security-gateway-managed-service",
  "title": "Email security gateway versus managed gateway service: choosing the right model for your SMB",
  "metaTitle": "Email Security Gateway vs Managed Service | Helm",
  "metaDesc": "Compare gateway deployment, filtering features, quarantine ownership and managed service scope before choosing email protection.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "An email security gateway checks messages before they reach your staff. A managed gateway service adds people and operating responsibilities around that technology. For a New Jersey firm with an existing IT provider, the buying decision depends on who will maintain the filters, review reports and handle messages that need a judgment call.",
  "lead": [
    "A blocked attachment and a delayed client email can arrive in the same quarantine queue. Someone needs to distinguish them and respond within the firm's agreed working hours."
  ],
  "takeaway": "Compare gateway deployment, filtering features, quarantine ownership and managed service scope before choosing email protection.",
  "sections": [
    {
      "h": "Compare the deployment before the service contract",
      "ps": [
        "A gateway can run on infrastructure your IT team maintains or as a cloud service through which your mail is routed. Other email-security products connect to a cloud mailbox platform instead of sitting in front of it. Ask the provider to draw the proposed mail flow and identify which traffic it can inspect, including internal messages and mail from business applications.",
        {
          "text": "Features need the same scrutiny. Microsoft describes Safe Links as URL scanning and rewriting with checks when a user clicks, while Safe Attachments examines attachments for threats. Those are examples of specific protections, with licensing and policy requirements. They do not establish what another vendor includes. Microsoft Safe Links, Microsoft Safe Attachments.",
          "links": [
            {
              "phrase": "Microsoft Safe Links",
              "to": "https://learn.microsoft.com/en-us/defender-office-365/safe-links-about"
            },
            {
              "phrase": "Microsoft Safe Attachments",
              "to": "https://learn.microsoft.com/en-us/defender-office-365/safe-attachments-about"
            }
          ]
        },
        {
          "text": "Ask for separate explanations of impersonation checks, malicious-file inspection, link handling and quarantine. Sender authentication also matters, but it answers a different question. Use Helm's DMARC guide to review domain authentication with your IT owner.",
          "links": [
            {
              "phrase": "DMARC guide",
              "to": "/resources/what-is-dmarc/"
            }
          ]
        }
      ]
    },
    {
      "h": "Decide who operates the queue",
      "ps": [
        "With a software-only purchase, your firm or IT provider usually needs to configure policies, handle exceptions and review suspicious messages. A managed service should define which of those tasks the provider performs and which still need your approval.",
        "Consider a hypothetical 40-person CPA firm receiving tax documents from unfamiliar clients. Its team needs a safe way to request release of a legitimate file without creating a permanent exception for an entire sender domain. During evaluation, ask the vendor to demonstrate that request, the review decision and the resulting record.",
        "Use these questions in the proposal review:",
        {
          "list": [
            "Which mailboxes, domains and message routes are covered?",
            "Who reviews user-reported messages and quarantine requests?",
            "How are exceptions approved, limited and revisited?",
            "What happens if filtering interrupts mail delivery?",
            "Which events trigger account investigation or an incident handoff?"
          ],
          "ordered": false
        },
        "A pilot should include normal client correspondence, automated billing messages and shared mailboxes. Agree on how to measure delivery delays and review workload before changing mail routing across the firm."
      ]
    },
    {
      "h": "Fit the service into existing IT",
      "ps": [
        {
          "text": "Helm Core includes managed email protection within a defined security stack, alongside device, supported identity, backup, awareness and digital-risk protection, with monthly reporting. It is intended for a standard 20 to 75-person fit and costs $125 per covered user per month, with a $2,500 minimum.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Helm Command adds program responsibilities such as a risk register, roadmap, evidence upkeep, bounded questionnaire responses and quarterly leadership reviews. Existing IT retains administration, patching and routine remediation. Neither tier should be read as a promise to replace every mail-system administrator or investigate every incident without a written scope.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Start by reviewing your current email contract and naming the owner of each unanswered question. Helm's free public-domain scan can check public email and web configuration. Internal mailbox coverage and gateway operations need a separate scope conversation.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "managed-awareness-training-vs-diy",
  "title": "Managed cyber security awareness training programs versus DIY: choosing the right path for your SMB",
  "metaTitle": "Managed Awareness Training vs DIY for SMBs | Helm",
  "metaDesc": "Choose awareness training by the business decisions employees need to practice, the work your team can maintain and the evidence you need.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "A training subscription gives employees access to lessons. Your firm still needs to decide what they should learn, when they should learn it and how to respond when someone reports a suspicious message. That work determines whether a DIY program is manageable or a managed service would help.",
  "lead": [
    "For a professional-services firm, training should follow the work. Staff who approve payments need to practice verifying bank-detail changes. People handling client records need to know which sharing methods are approved and where to report an accidental disclosure."
  ],
  "takeaway": "Choose awareness training by the business decisions employees need to practice, the work your team can maintain and the evidence you need.",
  "sections": [
    {
      "h": "Build around decisions employees make",
      "ps": [
        {
          "text": "NIST's learning-program guidance emphasizes behavior change and regular evaluation. It offers a lifecycle approach that organizations can adapt rather than a single annual course. NIST SP 800-50 Revision 1.",
          "links": [
            {
              "phrase": "NIST SP 800-50 Revision 1",
              "to": "https://csrc.nist.gov/pubs/sp/800/50/r1/final"
            }
          ]
        },
        "Choose a small set of business tasks and write down the expected behavior for each. For example, a hypothetical New Jersey accounting firm could ask its payment team to verify changed instructions through a known contact, while its tax team practices reporting an unexpected document-sharing request. Neither exercise requires exposing actual client information.",
        "A training calendar should include onboarding, refreshers and reminders after a process changes. Choose frequency based on your staff's work and the risks you are addressing. There is no universal simulation cadence that proves a firm is secure."
      ]
    },
    {
      "h": "Compare the work each model leaves with you",
      "ps": [
        "DIY can fit a firm with a named owner who can maintain the employee roster, assign material, follow up on missed lessons and discuss results with IT. Budget for that person's time as well as the subscription.",
        "A managed provider may supply learning content, simulations and reporting. Ask whether it also handles enrollment changes, adapts material for different roles and reviews recurring mistakes. Confirm those responsibilities in the service order rather than assuming that the word managed includes them.",
        "Measure more than clicks on a simulated message. Review whether employees report suspicious requests, how quickly reports reach the right person and whether a payment or sharing procedure is followed. Completion records show that a lesson was assigned and finished; they do not establish that every employee will respond correctly under pressure."
      ]
    },
    {
      "h": "Keep evidence proportionate",
      "ps": [
        "For a customer questionnaire, retain the training policy, covered staff list, dated assignment and completion records, and a description of follow-up. Explain exclusions, including contractors or staff on leave. Restrict access to individual results and agree on how long to retain them.",
        "Before choosing a vendor, request a sample report with fictional data. Check that an authorized reviewer can distinguish overdue training from a failed simulation and can export the relevant evidence. Ask how the provider handles an employee's report of a genuine incident during an exercise.",
        {
          "text": "Helm's Core service includes awareness learning and simulations in its standardized protection stack, with a monthly security report. Command adds evidence upkeep and program coordination, including a quarterly leadership cadence. These services operate alongside existing IT, and Core does not include open-ended security leadership work.",
          "links": [
            {
              "phrase": "Core service",
              "to": "/helm-core/"
            },
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Use the wire-fraud callback guide when turning payment training into a written procedure. For firms considering Helm, the free public-domain scan offers an initial view of public configuration; it does not measure employee awareness. Bring your roster, current training records and reporting procedure to a separate fit discussion.",
          "links": [
            {
              "phrase": "wire-fraud callback guide",
              "to": "/resources/wire-fraud-prevention-law-firms/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "iam-security-core-vs-command",
  "title": "IAM Cyber Security for SMBs: How Helm Core Compares to Helm Command",
  "metaTitle": "IAM Security: Helm Core vs Command for SMBs | Helm",
  "metaDesc": "Identity protection, access administration and program ownership need distinct owners. Compare supported coverage and evidence before choosing a tier.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Identity and access management, or IAM, determines who can use your systems and what they can do after signing in. For a growing firm, that includes employees, outside advisers, application integrations and administrator accounts.",
  "lead": [
    {
      "text": "Microsoft distinguishes authentication, which verifies identity, from authorization, which grants access. Multifactor authentication helps with the first task. A permission review addresses the second. A firm needs both. Microsoft IAM concepts.",
      "links": [
        {
          "phrase": "Microsoft IAM concepts",
          "to": "https://learn.microsoft.com/en-us/entra/fundamentals/identity-fundamental-concepts"
        }
      ]
    }
  ],
  "takeaway": "Identity protection, access administration and program ownership need distinct owners. Compare supported coverage and evidence before choosing a tier.",
  "sections": [
    {
      "h": "Review access by business role",
      "ps": [
        "Begin with the systems holding client information or allowing money to move. Ask your IT owner for the account list, administrator roles, guest access and connected applications. Have the responsible business manager confirm who needs access and at what level.",
        "A hypothetical 60-person consulting firm might find that an employee who changed departments still has access to a former client's shared workspace. The correction starts with the business owner confirming the required access. IT then changes the permissions and records completion. An identity-alert service alone would not settle that decision.",
        "Single sign-on can simplify access across supported applications, but it does not automatically remove unnecessary permissions. Privileged access also needs separate attention: define who can administer systems, why they need that power and how their actions are reviewed."
      ]
    },
    {
      "h": "Separate protection from administration",
      "ps": [
        "Helm Core includes supported identity protection as part of its defined stack. That description does not promise administration of every directory, SSO deployment, privileged-access system or joiner-and-leaver workflow. Confirm supported platforms, required licensing and the actions authorized under the service order.",
        "Your existing IT team retains routine administration. HR or another business owner must tell IT when someone joins, changes roles or leaves. Managers approve access requirements; a named executive accepts exceptions that carry business risk.",
        {
          "text": "Helm Command adds the covered Core stack plus program ownership: a maintained risk register, prioritized roadmap, evidence upkeep, bounded questionnaire responses and quarterly leadership reviews. It can coordinate assigned access-control work with your named IT owner. It does not make Helm the administrator of every application or transfer final attestations away from the client. Compare the written scopes for Core and Command.",
          "links": [
            {
              "phrase": "Core",
              "to": "/helm-core/"
            },
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        }
      ]
    },
    {
      "h": "Ask for evidence of the workflow",
      "ps": [
        {
          "text": "A useful access review records the system, reviewer, date, approved roles and unresolved exceptions. For an offboarding example, request evidence that access was revoked in the relevant systems, including those outside the main identity platform. Use the existing employee offboarding checklist for the detailed handoff.",
          "links": [
            {
              "phrase": "employee offboarding checklist",
              "to": "/resources/employee-offboarding-checklist/"
            }
          ]
        },
        "When evaluating an identity-security provider, ask:",
        {
          "list": [
            "Which users, privileged accounts and applications are supported?",
            "Who can disable an account, and under what authority?",
            "Who reviews permissions that are technically valid but unnecessary?",
            "What evidence remains after an access change?"
          ],
          "ordered": false
        },
        "Before answering a questionnaire with a blanket claim about MFA or access reviews, check the actual population and exceptions. Keep the answer narrower when some systems remain outside the control.",
        {
          "text": "Helm's free public-domain scan does not inspect your tenant or user permissions. A fit conversation should establish what identity protection is supported and what administrative work stays with IT. For New Jersey professional-services firms, that division is the starting point for an accountable access program.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            },
            {
              "phrase": "New Jersey professional-services firms",
              "to": "/professional-services/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "outlook-email-encryption-options",
  "title": "S/MIME vs Office 365 Message Encryption vs TLS: Choosing the Right Outlook Encryption for Your Company",
  "metaTitle": "Outlook Encryption: S/MIME, Purview and TLS | Helm",
  "metaDesc": "Choose Outlook encryption around recipient access and required protection. Have existing IT verify licensing and test the full exchange.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Before choosing Outlook encryption, identify who needs to read the message and what protection should remain after delivery. Sending a tax document to an individual client creates different requirements from exchanging files with a business that mandates certificates.",
  "lead": [
    {
      "text": "Microsoft now uses the name Microsoft Purview Message Encryption for its message-encryption service. The selected title retains the older Office 365 wording that buyers may recognize. Availability depends on your subscription, configuration and client support. Microsoft email-encryption comparison.",
      "links": [
        {
          "phrase": "Microsoft email-encryption comparison",
          "to": "https://learn.microsoft.com/en-us/purview/email-encryption"
        }
      ]
    }
  ],
  "takeaway": "Choose Outlook encryption around recipient access and required protection. Have existing IT verify licensing and test the full exchange.",
  "sections": [
    {
      "h": "Match the method to the exchange",
      "ps": [
        "TLS protects the connection used to carry mail between servers. It does not give the sender persistent control over a recipient's copy after delivery. Ask IT whether a particular partner connection requires enforced TLS and how a failed connection is handled.",
        {
          "text": "Purview Message Encryption provides a way to send protected messages to external recipients, with recipient access handled through supported sign-in or passcode experiences. S/MIME uses certificates and keys for message encryption and digital signatures. Both parties' setup matters when choosing S/MIME. These methods serve different operational requirements; combining several on one message can create compatibility problems. Microsoft's comparison and cautions.",
          "links": [
            {
              "phrase": "Microsoft's comparison and cautions",
              "to": "https://learn.microsoft.com/en-us/purview/email-encryption"
            }
          ]
        },
        "Decide which method fits the recipient population before writing a firm-wide policy. A certificate-based workflow may be appropriate for a partner that requires it, while individual clients may need a simpler access experience."
      ]
    },
    {
      "h": "Test the full exchange with harmless files",
      "ps": [
        "Ask your existing IT provider to prepare a test using non-sensitive sample data. Send from the Outlook versions employees use and receive on the clients and devices your recipients are likely to use. Include the reply, attachment access and the handling of an incorrectly addressed message.",
        "During the pilot:",
        {
          "list": [
            "Confirm the licensed feature and policy applying to the sender.",
            "Check that the intended recipient can open the message and reply.",
            "Test the configured restrictions instead of assuming the word encrypted prevents forwarding.",
            "Record what users should do when protection is unavailable or a certificate expires.",
            "Have the business owner approve the workflow before client data is used."
          ],
          "ordered": true
        },
        "Avoid giving employees a fallback that silently sends sensitive files without the agreed protection. Provide an approved alternative, such as an appropriately configured client portal, while IT resolves the failure."
      ]
    },
    {
      "h": "Keep the claim narrower than the evidence",
      "ps": [
        "A successful test shows that a particular workflow worked for the tested clients and configuration. It does not certify all messages, attachments or devices. Keep dated test results, the policy scope and exception records. Have counsel or the responsible compliance adviser determine whether the workflow meets applicable obligations; this article does not establish that encryption alone satisfies them.",
        {
          "text": "Helm's Core service includes managed email protection. That protects against defined email threats and does not promise tenant encryption administration, certificate management or legal compliance. Command adds evidence and program coordination within its written scope, while existing IT performs administration.",
          "links": [
            {
              "phrase": "Core",
              "to": "/helm-core/"
            },
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "For a separate discussion of healthcare obligations, read the scoped HIPAA email guide. For other professional-services workflows, start by asking IT to identify the current encryption method and demonstrate one external exchange. Helm's free public-domain scan checks public configuration and cannot verify the confidentiality of internal or encrypted messages.",
          "links": [
            {
              "phrase": "HIPAA email guide",
              "to": "/resources/hipaa-email-rules-small-practices/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "email-security-services-evaluation",
  "title": "How to evaluate email security services for small businesses: checklist and vendor questions",
  "metaTitle": "How to Evaluate Email Security Services | Helm",
  "metaDesc": "Evaluate email security services through coverage, report handling, containment authority, escalation and the work retained by existing IT.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "An email security proposal should explain what happens after a suspicious message reaches an employee. Filtering matters, but the service also needs a route for reports, a person or team authorized to act and a handoff when the problem extends into an account or payment.",
  "lead": [
    "For a firm with existing IT, review those responsibilities before comparing the monthly price. Two offers can list similar tools while leaving very different amounts of work with your staff."
  ],
  "takeaway": "Evaluate email security services through coverage, report handling, containment authority, escalation and the work retained by existing IT.",
  "sections": [
    {
      "h": "Walk through one incident before signing",
      "ps": [
        "Give each vendor the same hypothetical scenario: an employee at a New Jersey professional-services firm reports a message requesting a bank-detail change, then says they entered their password on the linked page. Ask the vendor to explain who receives the report, checks the message, investigates the account and informs your business contact.",
        "Request the boundaries around containment. A provider may be authorized to take particular actions on a covered account, while restoration, payment recovery, forensic investigation or legal advice require other parties. Agree on the handoff and contact method before an incident occurs.",
        {
          "text": "The FTC advises businesses to train staff to recognize impersonation and verify requests rather than act under pressure. Pair technical filtering with a business approval procedure for payments. FTC small-business scam guidance, Helm's callback procedure.",
          "links": [
            {
              "phrase": "FTC small-business scam guidance",
              "to": "https://www.ftc.gov/business-guidance/resources/scams-your-small-business-guide-business"
            },
            {
              "phrase": "Helm's callback procedure",
              "to": "/resources/wire-fraud-prevention-law-firms/"
            }
          ]
        }
      ]
    },
    {
      "h": "Review coverage and everyday work",
      "ps": [
        "Ask for a mailbox and domain coverage schedule, including shared accounts and third-party senders. Have IT confirm how the service connects to your platform and which protections overlap with existing subscriptions.",
        "Then request written answers to these vendor questions:",
        {
          "list": [
            "Who reviews user-reported messages, and during which hours?",
            "Who approves quarantine releases and changes to filtering exceptions?",
            "Which account actions can the provider take without waiting for approval?",
            "What triggers escalation to IT, leadership or a separately retained responder?",
            "What can the firm export when changing providers?",
            "Which onboarding, licensing and out-of-scope charges are separate?"
          ],
          "ordered": false
        },
        "A sample report should show covered services, relevant events and unresolved exceptions. A large blocked-message count alone does not tell you whether the right people investigated a credential compromise."
      ]
    },
    {
      "h": "Distinguish stack coverage from program ownership",
      "ps": [
        "Helm Core includes managed email protection alongside device detection and response, supported identity protection, cloud productivity backup, awareness learning and simulations, digital-risk protection and monthly reporting. It is a standardized service for a typical 20 to 75-person fit.",
        {
          "text": "Helm Command includes the covered Core stack and adds risk, roadmap, evidence and leadership responsibilities. Bounded questionnaire and insurance responses help organize support for particular answers; the client still approves final attestations. Review Core and Command for scope and current commercial terms.",
          "links": [
            {
              "phrase": "Core",
              "to": "/helm-core/"
            },
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        },
        "Specialist vendor teams provide continuous monitoring and containment behind covered capabilities. Helm does not staff its own 24/7 SOC. Existing IT retains administration and routine remediation; specialist incident work needs written scope.",
        {
          "text": "For a questionnaire, tie each answer to dated evidence and its coverage. Identify excluded mailboxes and any unresolved policies rather than answering for the whole organization based on one console screenshot. Use the insurance questionnaire guide for that review.",
          "links": [
            {
              "phrase": "insurance questionnaire guide",
              "to": "/resources/cyber-insurance-questionnaire/"
            }
          ]
        },
        {
          "text": "The first step is to assemble your current contract, mailbox inventory and escalation contacts. Helm's free public-domain scan can add public email and web findings to that conversation, but it cannot establish internal mail-service coverage.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "managed-endpoint-protection-rollout",
  "title": "How to Implement Endpoint Security Protection with a Managed Service: Assessment, Rollout, and Ongoing Evidence",
  "metaTitle": "Managed Endpoint Protection: Rollout and Evidence | Helm",
  "metaDesc": "Reconcile eligible devices, pilot the protection, test escalation and keep current coverage evidence. Confirm exclusions before rollout.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Endpoint protection starts with knowing which devices employees use. A provider cannot establish coverage from the employee count alone: one person may use two laptops, a temporary worker may use a personal device and a shared workstation may have no clear owner.",
  "lead": [
    "Before choosing a managed service, reconcile the device inventory with your IT provider. Record the operating system, owner, business use and whether the device can run the proposed protection."
  ],
  "takeaway": "Reconcile eligible devices, pilot the protection, test escalation and keep current coverage evidence. Confirm exclusions before rollout.",
  "sections": [
    {
      "h": "Agree on the device population",
      "ps": [
        {
          "text": "Endpoint detection and response, or EDR, helps detect activity on supported devices and gives responders investigation and response capabilities. Product availability differs by operating system, licensing and configuration. Microsoft's endpoint documentation illustrates why deployment planning must include platform requirements and a pilot. Microsoft Defender for Endpoint.",
          "links": [
            {
              "phrase": "Microsoft Defender for Endpoint",
              "to": "https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint"
            }
          ]
        },
        "Ask the proposed provider to identify eligible devices and exclusions in writing. Phones, servers, network equipment and specialized systems need their own coverage decision. An agent installed on employee laptops does not prove that all those systems are protected.",
        "Existing IT also needs to settle conflicts with current security software, update requirements and deployment permissions. Keep those administrative tasks assigned rather than leaving them between providers."
      ]
    },
    {
      "h": "Roll out with a measurable acceptance check",
      "ps": [
        "A hypothetical 50-person New Jersey consulting firm could pilot protection with staff who use different applications and work locations. The purpose is to discover deployment problems before extending the rollout, not to claim that a small pilot proves protection against every attack.",
        "Agree on these acceptance checks:",
        {
          "list": [
            "Each eligible device appears in the inventory and the protection console.",
            "The device reports current health rather than merely an old installation record.",
            "The authorized team demonstrates a safe test of the alert and escalation path.",
            "IT confirms that essential business applications still work.",
            "The owner records excluded or failed devices with a next action."
          ],
          "ordered": true
        },
        {
          "text": "Specify who can isolate a device, how staff receive instructions and who restores normal operations. Containment and hands-on recovery are separate responsibilities. Use the incident-response guide to prepare the wider business handoff.",
          "links": [
            {
              "phrase": "incident-response guide",
              "to": "/resources/incident-response-plan-small-business/"
            }
          ]
        }
      ]
    },
    {
      "h": "Keep coverage evidence current",
      "ps": [
        "After onboarding, compare the current inventory with reporting devices. Track stale devices and new starters rather than treating rollout completion as permanent coverage. Keep dated reports, exceptions and authorized response records in a restricted evidence location.",
        "For a customer questionnaire, use the eligible device population and the actual reporting coverage. If some devices are excluded, disclose the scope instead of answering that all endpoints are monitored.",
        {
          "text": "Helm Core includes up to two eligible Windows or Mac workstations per covered user; additional eligible workstations cost $12 per month. Device detection and response is part of its standardized security stack. Servers, phones, tablets and specialized systems require separate written scope. Helm Core.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Helm Command adds program ownership and evidence upkeep to the covered stack, with coordination through your named IT owner. Existing IT keeps patching, administration, procurement and routine remediation. Specialist vendor teams provide continuous monitoring and containment for covered capabilities. Helm Command.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Bring a current device list to the fit discussion. Helm's free public-domain scan checks public email and web configuration; it does not inspect endpoint health or substitute for the device assessment needed before rollout.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "zero-day-vs-known-vulnerabilities",
  "title": "Zero-Day vs Known Vulnerabilities: How Patch Management, Threat Intelligence, and Managed Services Reduce Your Risk",
  "metaTitle": "Zero-Day vs Known Vulnerabilities: SMB Response | Helm",
  "metaDesc": "Use the affected product inventory and vendor advisory to choose mitigation, patching and incident escalation with your existing IT owner.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": {
    "text": "A zero-day vulnerability is a software or hardware weakness unknown to its vendor. An attacker may exploit it before the vendor has a fix ready. A known vulnerability has already been identified, though the affected system may still be unpatched. The terms describe the state of knowledge and repair, not a guarantee about how damaging an attack will be. CISA vulnerability-reporting definitions.",
    "links": [
      {
        "phrase": "CISA vulnerability-reporting definitions",
        "to": "https://www.cisa.gov/sites/default/files/publications/guide-vulnerability-reporting-americas-election-admins_508.pdf"
      }
    ]
  },
  "lead": [
    "For a professional-services firm, the immediate question is whether the affected product is in use, exposed and holding information or access the business depends on."
  ],
  "takeaway": "Use the affected product inventory and vendor advisory to choose mitigation, patching and incident escalation with your existing IT owner.",
  "sections": [
    {
      "h": "Respond to the advisory with an inventory",
      "ps": [
        {
          "text": "Microsoft's March 2021 report on HAFNIUM described exploitation of on-premises Exchange Server vulnerabilities and released security updates. That public example shows why identifying the exact product and deployment matters: an advisory about one environment should not be treated as proof that every similarly named cloud service is affected. Microsoft's Exchange report.",
          "links": [
            {
              "phrase": "Microsoft's Exchange report",
              "to": "https://www.microsoft.com/en-us/security/blog/2021/03/02/hafnium-targeting-exchange-servers/"
            }
          ]
        },
        "Have your IT provider maintain a list of internet-facing systems and their owners. When an advisory appears, IT should establish which versions are affected, read the vendor's instructions and document the immediate action. If a patch is unavailable, use the vendor's supported mitigation where appropriate. Restricting access or disabling an affected feature may interrupt work, so leadership needs to approve the business consequence.",
        "A temporary filtering rule, sometimes described as virtual patching, only addresses the traffic or exploit path it covers. Ask the responsible specialist what it blocks, what remains exposed and when it should be removed. Do not assume it repairs the software."
      ]
    },
    {
      "h": "Separate prevention from incident response",
      "ps": [
        "Patching closes an identified weakness. It does not prove that a system was never compromised. If the advisory or your monitoring indicates possible exploitation, follow the incident plan and involve the authorized responder before destroying logs or rebuilding affected systems.",
        {
          "text": "Use threat information as an input to prioritization. CISA's Known Exploited Vulnerabilities catalog identifies vulnerabilities with observed exploitation; it can help IT prioritize applicable findings. Absence from the catalog does not establish safety. CISA KEV catalog.",
          "links": [
            {
              "phrase": "CISA KEV catalog",
              "to": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
            }
          ]
        },
        "For a hypothetical New Jersey firm using a vulnerable remote-access appliance, the work record should show the version check, mitigation or patch, verification and any incident escalation. The appliance's owner performs that work even if a separate provider monitors employee laptops."
      ]
    },
    {
      "h": "Confirm the managed-service boundary",
      "ps": [
        {
          "text": "Helm's Core service includes device detection and response and supported identity protection within a defined stack. Specialist vendor teams provide continuous monitoring and containment for covered capabilities. This does not mean every zero-day exploit will be detected or that servers and network appliances are covered by default.",
          "links": [
            {
              "phrase": "Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Command adds risk, roadmap, evidence and coordination responsibilities, including quarterly leadership reviews. Existing IT retains patching and routine remediation; forensic response and hands-on recovery require separate written scope.",
          "links": [
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Review the first-hour incident guide with your IT owner and name who monitors vendor advisories. Helm's free public-domain scan checks public email and web configuration. It cannot certify that your internal systems are free of unknown vulnerabilities.",
          "links": [
            {
              "phrase": "first-hour incident guide",
              "to": "/resources/incident-response-plan-small-business/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "vulnerability-management-new-jersey",
  "title": "How to build a vulnerability management program for small businesses in New Jersey",
  "metaTitle": "Vulnerability Management for New Jersey SMBs | Helm",
  "metaDesc": "Build a finding-to-action workflow with authorized scope, risk-based priority, responsible IT owners and verified closure evidence.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "A vulnerability program needs a way to move a finding from discovery to verified action. A scanner report can identify a possible weakness, but it leaves several business decisions open: whether the finding is accurate, who owns the affected system and how quickly the firm should act.",
  "lead": [
    "Start with those responsibilities before buying another scan subscription. For a firm with existing IT, the program should make that provider's work visible and give leadership a route to resolve exceptions."
  ],
  "takeaway": "Build a finding-to-action workflow with authorized scope, risk-based priority, responsible IT owners and verified closure evidence.",
  "sections": [
    {
      "h": "Establish the scope and permission to scan",
      "ps": [
        "List devices, applications, cloud services and public-facing systems with an owner for each. Identify which assets the proposed scanner can examine and which require another method. Obtain authorization before scanning and agree on the timing, particularly for systems whose availability affects client work.",
        {
          "text": "A public scan, an authenticated internal scan and a penetration test answer different questions. Use the existing penetration-test and vulnerability-scan comparison when defining the engagement.",
          "links": [
            {
              "phrase": "penetration-test and vulnerability-scan comparison",
              "to": "/resources/pen-test-vs-vulnerability-scan/"
            }
          ]
        }
      ]
    },
    {
      "h": "Prioritize applicable findings",
      "ps": [
        {
          "text": "Ask IT to validate the affected version and exposure before assigning a task. Consider exploitation evidence, internet access, business importance and available mitigations alongside the scanner's severity rating. CISA recommends using its Known Exploited Vulnerabilities catalog as an input to vulnerability prioritization. Its federal deadlines should not be presented as a universal deadline for private New Jersey firms. CISA KEV catalog.",
          "links": [
            {
              "phrase": "CISA KEV catalog",
              "to": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
            }
          ]
        },
        "A hypothetical accounting firm might have an exposed remote-access system and a less consequential application on an isolated test device. The two findings can require different urgency even when their numerical ratings look similar.",
        "For each confirmed finding, record the asset, evidence, responsible IT owner, planned action, target date and verification method. If the firm postpones a fix, leadership should record the reason, temporary safeguards and a date to reconsider the decision."
      ]
    },
    {
      "h": "Close findings with a check",
      "ps": [
        "A completed patch ticket is useful evidence, but verify the result through the appropriate version check, rescan or configuration review. Keep any failed deployment or remaining exposure open. Set a regular review cadence that matches your environment and add checks after meaningful system changes.",
        "Report unresolved high-priority findings and aging exceptions, not just the number of scans run. For questionnaires, identify the scanned population and dates. A clean report on one public website does not support a claim about all internal devices.",
        {
          "text": "Helm's Core provides a defined protection stack and monthly reporting. It is not a standalone vulnerability-scanning or patch-management service. Command adds a risk register, roadmap, evidence upkeep and coordination with the named IT owner. IT performs patching and routine remediation; scanning engagements and work outside covered services need written scope.",
          "links": [
            {
              "phrase": "Core",
              "to": "/helm-core/"
            },
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Begin with a meeting between the business owner and IT to agree on the asset list and finding-to-ticket workflow. Helm's free public-domain scan can contribute limited public configuration findings. It does not replace the authorized assessment needed to establish a vulnerability-management baseline.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "check-website-security",
  "title": "How to check website security: a simple step-by-step checklist for New Jersey small businesses",
  "metaTitle": "How to Check Website Security for Your Business | Helm",
  "metaDesc": "Combine public website checks with administrator evidence about updates, access and recovery. A public scan cannot assess every internal control.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "A website can use HTTPS and still have an outdated content-management system, excessive administrator access or an untested backup. Checking website security therefore needs two views: what an outside visitor can observe and what the website owner can verify inside the hosting and administration systems.",
  "lead": [
    "For a professional-services firm, identify the owner of the public website and any separate client portal first. They may have different providers, data and recovery arrangements."
  ],
  "takeaway": "Combine public website checks with administrator evidence about updates, access and recovery. A public scan cannot assess every internal control.",
  "sections": [
    {
      "h": "Check the public surface",
      "ps": [
        {
          "text": "Open the firm's actual domain and confirm that the browser does not report a certificate error. Ask the website administrator to review HTTPS behavior and relevant security headers. HSTS tells supporting browsers to use HTTPS for a host after receiving the policy; Content Security Policy controls which resources a page may load under its configured rules. Neither header proves the application is free of vulnerabilities. Mozilla HSTS documentation, Mozilla CSP documentation.",
          "links": [
            {
              "phrase": "Mozilla HSTS documentation",
              "to": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security"
            },
            {
              "phrase": "Mozilla CSP documentation",
              "to": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy"
            }
          ]
        },
        "A public scanner can help identify observable configuration issues. Check its data-handling terms and use it only on domains you own or are authorized to assess. Keep the scan date and scope with the result. A rating should lead to a review of specific findings rather than an unsupported assurance that the site is safe."
      ]
    },
    {
      "h": "Ask the owner to verify internal controls",
      "ps": [
        "Send these questions to your website or IT provider:",
        {
          "list": [
            "Which CMS, plugins and custom applications are in use, and who updates them?",
            "Which accounts can administer the site, and how is access protected?",
            "What information do forms collect, and where does it go?",
            "What does the backup cover, and when was a restore tested?",
            "Who investigates a suspected compromise and restores the site?"
          ],
          "ordered": true
        },
        "These answers usually require access to systems a public scanner cannot see. Request dated evidence where a customer questionnaire depends on the answer. Avoid sharing administrator credentials through a form to obtain a generic scan."
      ]
    },
    {
      "h": "Assign findings to the right provider",
      "ps": [
        "A hypothetical New Jersey consulting firm might receive a report showing a missing header while its hosting provider discovers an unsupported plugin. The website administrator should evaluate both findings, decide the appropriate changes and test the site afterward. Applying a copied header policy without testing can break forms or other legitimate features.",
        "Keep confirmed weaknesses, responsible owners, target dates and closure evidence together. If a finding involves possible client-data exposure, use the incident process and get the appropriate legal and specialist advice before making external claims.",
        {
          "text": "Helm's free public-domain scan checks public email and web configuration. It cannot inspect CMS administration, internal access, backup restores or all application vulnerabilities. It is not a penetration test or compliance certification.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        },
        {
          "text": "Core provides defined email, device, supported identity, backup, awareness and digital-risk protection. Command adds program coordination and evidence upkeep. Neither description promises website hosting or blanket remediation of scan findings; your website owner and existing IT remain responsible for their assigned work.",
          "links": [
            {
              "phrase": "Core",
              "to": "/helm-core/"
            },
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Start with the public scan and the five owner questions. Use the scanner comparison if your site handles sensitive information or needs a deeper authorized assessment.",
          "links": [
            {
              "phrase": "scanner comparison",
              "to": "/resources/pen-test-vs-vulnerability-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "windows-defender-vs-managed-security",
  "title": "Windows Defender vs Managed Endpoint Security: Which Is Right for Your New Jersey Business",
  "metaTitle": "Windows Defender vs Managed Endpoint Security | Helm",
  "metaDesc": "Check the exact Defender product, active licenses and reporting devices. Then compare who investigates alerts and performs authorized response.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Microsoft Defender Antivirus is built into Windows. Whether it is enough for your business depends on the controls around it and the work your firm needs someone to perform. A working antivirus engine does not answer who reviews an alert, checks missing devices or authorizes containment after hours.",
  "lead": [
    "First clarify the product name. Defender Antivirus, Defender for Business and Defender for Endpoint are different parts of Microsoft's product family. A proposal that says only Defender leaves licensing, management and response responsibilities unclear."
  ],
  "takeaway": "Check the exact Defender product, active licenses and reporting devices. Then compare who investigates alerts and performs authorized response.",
  "sections": [
    {
      "h": "Check the existing protection before replacing it",
      "ps": [
        {
          "text": "Microsoft documents Defender Antivirus as built into Windows and as a component that works with Defender for Endpoint. Its business endpoint products add capabilities under their respective licenses and configurations. This makes a blanket claim that Defender has no centralized management or EDR misleading. Microsoft Defender Antivirus, Microsoft Defender for Endpoint.",
          "links": [
            {
              "phrase": "Microsoft Defender Antivirus",
              "to": "https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-antivirus-windows"
            },
            {
              "phrase": "Microsoft Defender for Endpoint",
              "to": "https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint"
            }
          ]
        },
        "Ask your IT provider which subscriptions are active, which devices are enrolled and which settings are applied. Confirm the population against the device inventory. If a device stopped reporting last month, a dashboard showing its old enrollment is insufficient evidence of current coverage."
      ]
    },
    {
      "h": "Compare the operating models",
      "ps": [
        "An internally operated business endpoint platform can fit a firm whose IT team has the time, skills and authority to maintain it and handle incidents. Budget for that work and confirm who covers absences and out-of-hours events.",
        "A managed detection service adds defined investigation and response responsibilities. Ask which activities are included, which are automated and which require approval. Product quality and service coverage are separate questions, so request evidence for both rather than accepting a vendor's claim that one brand is always enough or never enough.",
        "Consider a hypothetical 35-person New Jersey law firm. A partner's laptop raises an alert during a client deadline. The firm needs to know who assesses the alert, whether that team can isolate the device and who helps the partner continue work. Adding another antivirus product without deciding those responsibilities leaves the incident handoff unresolved.",
        "Before signing, confirm supported operating systems, device exclusions, monitoring coverage, containment authority and the escalation route. Ask for a sample report and a safe demonstration of the response workflow."
      ]
    },
    {
      "h": "Fit Helm to the uncovered work",
      "ps": [
        {
          "text": "Helm Core includes device detection and response within a standardized security stack. Coverage includes up to two eligible Windows or Mac workstations per covered user. Phones, servers, tablets and network equipment require separate written scope.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Specialist vendor teams provide continuous monitoring and containment behind covered capabilities; Helm does not staff its own 24/7 SOC. Existing IT retains patching, administration and routine remediation. Command adds evidence upkeep, risk and roadmap ownership, leadership reviews and IT coordination rather than unlimited incident recovery.",
          "links": [
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Use the device-security checklist to review practical device controls and the SOC guide to evaluate the response service. Start with your inventory and existing licenses. Helm's free public-domain scan cannot determine whether Defender is correctly configured on internal laptops.",
          "links": [
            {
              "phrase": "device-security checklist",
              "to": "/resources/law-firm-device-security-checklist/"
            },
            {
              "phrase": "SOC guide",
              "to": "/resources/what-a-soc-actually-does/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "siem-software-managed-detection",
  "title": "How small businesses in New Jersey should evaluate SIEM security software and managed detection services",
  "metaTitle": "SIEM Software vs Managed Detection for SMBs | Helm",
  "metaDesc": "Choose SIEM around a defined detection use case, required data and staffed response. Compare ongoing costs and ownership before buying software.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Security information and event management software, or SIEM, collects and analyzes security events across connected systems. It can help a team connect activity that would be harder to understand in separate consoles. The firm still needs people, permissions and procedures to investigate the resulting alerts.",
  "lead": [
    {
      "text": "Microsoft Sentinel illustrates that separation with data connectors, analytics, investigation features and response automation. The available platform capabilities do not establish that a particular buyer has connected the right data or staffed the response workflow. Microsoft Sentinel overview.",
      "links": [
        {
          "phrase": "Microsoft Sentinel overview",
          "to": "https://learn.microsoft.com/en-us/azure/sentinel/overview"
        }
      ]
    }
  ],
  "takeaway": "Choose SIEM around a defined detection use case, required data and staffed response. Compare ongoing costs and ownership before buying software.",
  "sections": [
    {
      "h": "Begin with a detection question",
      "ps": [
        "Ask what your firm needs to detect that its current services cannot adequately address. For example, a hypothetical New Jersey consulting firm might need to investigate a suspicious cloud sign-in alongside activity on a covered laptop. Determine whether existing tools can already support that investigation before buying a separate log platform.",
        "Map the data required for the proposed use case. Identify who owns each source, whether collection needs additional licensing and whether the provider can detect a failed connector. Keeping logs from one system does not establish visibility across the business."
      ]
    },
    {
      "h": "Price the work around the software",
      "ps": [
        "A SIEM proposal should explain ingestion and storage charges, retention, connector setup, tuning and investigation. Ask how costs change when more systems or higher log volumes are added. Include the time your IT provider must spend maintaining integrations.",
        "During evaluation, request a demonstration using fictional data. Follow an event through collection, detection, investigation and authorized action. Check what happens when the event is harmless and who adjusts the rule afterward.",
        "Use these procurement questions:",
        {
          "list": [
            "Which sources and detection use cases are included?",
            "Who maintains connectors and notices missing telemetry?",
            "Which alerts receive human review, during which coverage hours?",
            "Who can contain a device or account, and what approval is required?",
            "What log retention and export rights does the firm have?",
            "Which response work costs extra?"
          ],
          "ordered": false
        },
        "A managed SIEM service can operate a platform for you. A managed detection service may instead use a defined security stack to investigate covered threats. Compare the written sources and actions rather than assuming those labels promise identical coverage."
      ]
    },
    {
      "h": "Avoid buying an unassigned queue",
      "ps": [
        {
          "text": "An alert forwarded to a shared mailbox needs an owner. Agree on the escalation contact, backup contact and authority for urgent action. Use Helm's SOC guide for the broader distinction between an alert and a response.",
          "links": [
            {
              "phrase": "SOC guide",
              "to": "/resources/what-a-soc-actually-does/"
            }
          ]
        },
        {
          "text": "Helm's Core includes device detection and response and other defined protections. It is not advertised as a standalone SIEM service or universal log-ingestion platform. Specialist vendor teams operate the continuous monitoring and containment behind covered capabilities.",
          "links": [
            {
              "phrase": "Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Command adds program ownership, evidence upkeep, bounded questionnaire responses and coordination with existing IT. A need for unrelated log sources, long-term forensic retention or specialized investigation should receive a separate scope decision.",
          "links": [
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Start with one detection use case and ask your IT provider to map current visibility. Helm's free public-domain scan provides limited public configuration findings, not an assessment of your internal logging or SIEM coverage.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "intentional-insider-threats",
  "title": "What Business Owners Need to Know About Intentional Insider Threats",
  "metaTitle": "Intentional Insider Threats: Access and Response | Helm",
  "metaDesc": "Limit access, document sensitive approvals and review events through an authorized process. Unusual activity alone does not prove malicious intent.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": {
    "text": "An insider can have legitimate access and still use it in a way the firm has not authorized. Intentional misuse can involve deliberately sharing confidential files, changing records or bypassing an approval process. CISA also distinguishes intentional actions from malicious intent: a deliberate action is not automatically an attempt to harm the organization. CISA Insider Threat Mitigation Guide.",
    "links": [
      {
        "phrase": "CISA Insider Threat Mitigation Guide",
        "to": "https://www.cisa.gov/sites/default/files/publications/Insider%20Threat%20Mitigation%20Guide_Final_508.pdf"
      }
    ]
  },
  "lead": [
    "For a small business, the practical focus is access and process evidence. An unusual download or failed sign-in needs context; it is not proof that an employee is malicious."
  ],
  "takeaway": "Limit access, document sensitive approvals and review events through an authorized process. Unusual activity alone does not prove malicious intent.",
  "sections": [
    {
      "h": "Limit what an account can do",
      "ps": [
        "Have business managers approve access based on the work people perform. Existing IT should implement the permissions, restrict administrator access and remove access when roles change. Review guest accounts and application access as well as employees.",
        {
          "text": "Payment changes and sensitive exports need a documented approval route. Where the business can support it, separate the person requesting a change from the person approving it. Use the existing offboarding checklist to coordinate HR, managers and IT rather than rebuilding that workflow here.",
          "links": [
            {
              "phrase": "offboarding checklist",
              "to": "/resources/employee-offboarding-checklist/"
            }
          ]
        },
        "Consider a hypothetical professional-services firm preparing for an employee departure. The manager identifies client matters that need reassignment; IT removes access at the approved time and records completion. That routine process is appropriate regardless of anyone's speculation about the employee's intentions."
      ]
    },
    {
      "h": "Review events through an authorized process",
      "ps": [
        "Decide in advance which records the firm may collect, who may review them and how long they should be retained. Keep access proportionate and obtain legal advice on employment, privacy and notice requirements that apply to your circumstances.",
        "If an event raises concern, have the authorized reviewer establish the account, action, system and business context. Preserve relevant records and document the source and time. Limit circulation to people who need the information. Avoid employee suspicion scores, psychological profiles or informal accusations.",
        "Containment may be necessary to protect data, but the firm should distinguish a protective access restriction from a conclusion about misconduct. Counsel, HR and any separately retained investigator should direct their respective decisions. A security-alert vendor should not be treated as the firm's employment-law adviser."
      ]
    },
    {
      "h": "Confirm what a provider can support",
      "ps": [
        {
          "text": "Helm's Core includes defined email, device and supported identity protection. Covered monitoring can contribute relevant events, but it does not promise surveillance of every employee action or a forensic investigation.",
          "links": [
            {
              "phrase": "Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Command adds risk, roadmap, evidence upkeep and coordination responsibilities. Evidence upkeep for a security program is not an unbounded investigative evidence-collection service. Hands-on forensic response, breach counsel and specialized systems require separate written scope. Existing IT retains administration and routine remediation.",
          "links": [
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        },
        "Automation deserves an access review too. A workflow that can read client files or send messages needs a named owner and bounded permissions. Helm's Secure AI Adoption consulting is a separate scoped service; consider it when evaluating a specific AI workflow, rather than as a general insider-investigation product.",
        {
          "text": "Begin with one sensitive business process and review its access and approvals with IT. Helm's free public-domain scan cannot assess insider intent or internal access. The incident-response guide can help the firm prepare the authorized business handoff before an event occurs.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            },
            {
              "phrase": "incident-response guide",
              "to": "/resources/incident-response-plan-small-business/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "law-firm-managed-vs-in-house-security",
  "title": "In-House vs Managed Cybersecurity for Law Firms: Pros, Cons, and Budget-Friendly Choices",
  "metaTitle": "Law Firm Cybersecurity: In-House vs Managed | Helm",
  "metaDesc": "Compare law-firm security responsibilities, coverage and evidence alongside existing IT. The firm retains professional and business decisions.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Law firms",
  "laneTo": "/law-firms/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "A law firm can keep its existing IT provider and add security expertise without outsourcing every technology decision. The choice is how to cover security operations and program leadership while preserving clear responsibility for client information.",
  "lead": [
    {
      "text": "New Jersey RPC 1.6(f) requires reasonable efforts to prevent inadvertent or unauthorized disclosure of, or access to, information relating to client representation. It does not prescribe a particular vendor or certify a service package as sufficient. Have the firm's responsible lawyer assess the applicable duties and circumstances. New Jersey Rules of Professional Conduct.",
      "links": [
        {
          "phrase": "New Jersey Rules of Professional Conduct",
          "to": "https://www.njcourts.gov/sites/default/files/rpc.pdf"
        }
      ]
    }
  ],
  "takeaway": "Compare law-firm security responsibilities, coverage and evidence alongside existing IT. The firm retains professional and business decisions.",
  "sections": [
    {
      "h": "Compare responsibilities before staffing models",
      "ps": [
        "In-house security can give a firm direct knowledge of its systems and priorities. It also requires enough time, specialist capability and coverage for the work assigned. If one administrator handles both routine tickets and incident review, confirm how those responsibilities compete during a busy period or absence.",
        "A managed provider can supply defined protection and specialist coverage. The firm still needs an internal decision-maker, an IT owner and a written route for incidents, exceptions and spending approvals. Outsourcing a service does not transfer the firm's professional responsibilities.",
        {
          "text": "For a hypothetical 45-person New Jersey practice, begin with the business processes that expose client files or move money. Review email reports, laptop coverage, access to matter files and payment-change approvals. Use the existing device checklist and callback protocol for the detailed procedures.",
          "links": [
            {
              "phrase": "device checklist",
              "to": "/resources/law-firm-device-security-checklist/"
            },
            {
              "phrase": "callback protocol",
              "to": "/resources/wire-fraud-prevention-law-firms/"
            }
          ]
        }
      ]
    },
    {
      "h": "Budget for the uncovered work",
      "ps": [
        "Compare proposals against the same account and device population. Include existing subscriptions, onboarding work, IT time, training and specialist response exclusions. Avoid comparing a software license with a managed-service price as though both buy the same responsibilities.",
        {
          "text": "Helm Core is a standardized service for a typical 20 to 75-person fit, at $125 per covered user per month with a $2,500 minimum. It includes email, device, supported identity, cloud productivity backup, awareness and digital-risk protection, with monthly reporting. Core scope and terms.",
          "links": [
            {
              "phrase": "Core scope and terms",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Helm Command is intended for a qualified 75 to 250-person organization that needs program ownership. Its $8,000 to $15,000 monthly range is confirmed after a fit and complexity review. It adds a risk register, prioritized roadmap, evidence upkeep, bounded questionnaire responses, quarterly leadership reviews and an annual tabletop to the covered stack. Command scope and terms.",
          "links": [
            {
              "phrase": "Command scope and terms",
              "to": "/helm-command/"
            }
          ]
        },
        "Existing IT retains help desk, administration, patching and routine remediation. Specialist vendor teams provide continuous monitoring and containment for covered capabilities. Forensic response, breach counsel and hands-on recovery require separate written scope."
      ]
    },
    {
      "h": "Prepare the questionnaire and incident handoff",
      "ps": [
        "For a client review, map each answer to a dated record and its coverage. Check that training completion, device coverage and access-review claims include their exceptions. The firm approves final representations; an evidence folder does not guarantee acceptance.",
        {
          "text": "If an employee reports a suspected compromise, route it to the authorized responder and preserve relevant records. Leadership and counsel should direct business and notification decisions. Use the incident-response guide to establish contacts before an event.",
          "links": [
            {
              "phrase": "incident-response guide",
              "to": "/resources/incident-response-plan-small-business/"
            }
          ]
        },
        {
          "text": "Review the law-firm service page with your IT owner. Helm's free public-domain scan checks public email and web configuration; internal coverage and professional obligations need a separate discussion.",
          "links": [
            {
              "phrase": "law-firm service page",
              "to": "/law-firms/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "cybersecurity-risk-assessment-tools",
  "title": "How to evaluate a cybersecurity risk assessment tool for small businesses",
  "metaTitle": "How to Evaluate Cybersecurity Assessment Tools | Helm",
  "metaDesc": "Choose an assessment tool that distinguishes evidence from assertions and connects findings to business impact, owners and decisions.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "A risk assessment tool should help your firm explain what could go wrong, why the business would care and who will act. A vulnerability scanner contributes technical findings, but it cannot decide the business impact of losing access to a tax application during filing season or exposing a client's matter files.",
  "lead": [
    {
      "text": "NIST's risk-assessment guidance considers threats, vulnerabilities, likelihood and impact, with preparation, assessment and maintenance over time. It provides a method rather than a claim that one automated score establishes risk. NIST SP 800-30 Revision 1.",
      "links": [
        {
          "phrase": "NIST SP 800-30 Revision 1",
          "to": "https://csrc.nist.gov/pubs/sp/800/30/r1/final"
        }
      ]
    }
  ],
  "takeaway": "Choose an assessment tool that distinguishes evidence from assertions and connects findings to business impact, owners and decisions.",
  "sections": [
    {
      "h": "Check what the tool observes",
      "ps": [
        "Ask which inputs come from live systems, which are uploaded documents and which are self-reported answers. A tool may combine several methods, but the reviewer needs to distinguish them. Record the assessed population and the date of each input.",
        "A hypothetical 80-person New Jersey consulting firm might use a tool that checks public configuration and collects staff answers about backups. The public checks may be observable; the backup answer still needs evidence from the responsible IT owner. A single score should not hide that difference.",
        "Asset discovery, scanning, questionnaire collection and evidence storage can all be useful, but no tool needs every feature to fit every assessment. Choose the capabilities that support your defined scope and protect the information being collected."
      ]
    },
    {
      "h": "Test the output before purchasing",
      "ps": [
        "Request a sample assessment with fictional data and follow one finding through the report. Check whether it identifies the source, limitations, business impact and responsible action. Ask whether you can correct an inaccurate input without losing the review history.",
        "Use these evaluation questions:",
        {
          "list": [
            "Can the reviewer distinguish observed evidence from an unchecked assertion?",
            "Does the score show its assumptions and method?",
            "Can findings be assigned to IT owners with target dates?",
            "Does the tool retain decisions and exceptions without exposing sensitive records unnecessarily?",
            "Can you export your data and evidence when leaving the service?"
          ],
          "ordered": false
        },
        "Review access controls, data location, retention and integration permissions before uploading confidential documents. An evidence-management tool itself needs a scope and access decision."
      ]
    },
    {
      "h": "Convert results into a decision record",
      "ps": [
        "For each material risk, record the affected business process, supporting evidence, proposed treatment and accountable owner. Leadership decides which risks to accept and what to fund. IT implements assigned technical changes. Review the result when systems or business requirements change.",
        {
          "text": "Helm's Core provides a defined protection stack and monthly reporting; it is not a complete enterprise risk assessment. Command adds a risk register, prioritized roadmap, evidence upkeep and leadership cadence, coordinating with your existing IT provider. It does not issue audit opinions or compliance certifications.",
          "links": [
            {
              "phrase": "Core",
              "to": "/helm-core/"
            },
            {
              "phrase": "Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Use the scanner comparison to define any technical testing and the questionnaire guide to connect answers with evidence. Helm's free public-domain scan supplies limited public email and web findings. Deeper discovery, when required to confirm fit and scope, is a separate bounded paid engagement rather than a free internal assessment.",
          "links": [
            {
              "phrase": "scanner comparison",
              "to": "/resources/pen-test-vs-vulnerability-scan/"
            },
            {
              "phrase": "questionnaire guide",
              "to": "/resources/cyber-insurance-questionnaire/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "virtual-ciso-service-evaluation",
  "title": "How to Choose a Virtual CISO Service That Delivers Roadmaps, Evidence, and Quarterly Accountability",
  "metaTitle": "Choosing Virtual CISO Services for Your SMB | Helm",
  "metaDesc": "Buy defined security-leadership deliverables, meeting cadence and evidence responsibilities. Confirm limits and retain final business approvals.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "A virtual chief information security officer service supplies security-leadership work without a full-time executive appointment. Providers use the label for different scopes, so compare deliverables and decision rights before comparing the title.",
  "lead": [
    "For a professional-services firm with existing IT, the engagement should explain who maintains the risk view, recommends priorities, tracks evidence and brings unresolved decisions to leadership."
  ],
  "takeaway": "Buy defined security-leadership deliverables, meeting cadence and evidence responsibilities. Confirm limits and retain final business approvals.",
  "sections": [
    {
      "h": "Buy a defined leadership role",
      "ps": [
        "Ask the provider to describe the work it performs each month and what happens at a leadership review. Request a sample risk register and roadmap with fictional data. Look for business consequences, accountable owners and decisions that need approval rather than a list of recommended tools.",
        {
          "text": "NIST's Small Business Quick-Start Guide provides a way to organize cybersecurity across governance and operational activities. Use it as a discussion structure, not as certification that a vCISO service meets every obligation. NIST SP 1300.",
          "links": [
            {
              "phrase": "NIST SP 1300",
              "to": "https://csrc.nist.gov/pubs/sp/1300/final"
            }
          ]
        },
        "A hypothetical 100-person New Jersey accounting firm may need to decide how to fund stronger access controls, prepare customer responses and address an unresolved restore-test gap. Its adviser should present the evidence and options. Partners approve the spending and risk decisions; IT performs the assigned administrative work."
      ]
    },
    {
      "h": "Set limits around cadence and evidence",
      "ps": [
        "Agree on how many meetings, questionnaires and hours of coordination the service covers. Define what counts as an urgent escalation and who covers a provider absence. Specialist incident response, legal advice and independent assessments need explicit treatment in the contract.",
        "For evidence, ask who requests records from IT, checks their dates and coverage, and follows up when a claim lacks support. The firm should approve every external representation. An adviser can help prepare an answer without becoming the authority that certifies it.",
        "The roadmap should identify dependencies and costs beyond the advisory fee. A recommendation to change access policies may need licenses and implementation time; a recovery improvement may need a separate backup or response engagement."
      ]
    },
    {
      "h": "Compare Helm's two scopes",
      "ps": [
        {
          "text": "Helm Core is a standardized protection stack with monthly reporting. It does not include quarterly leadership reviews or open-ended vCISO work. It fits firms that can retain program decisions and coordination internally. Helm Core.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Helm Command provides managed security-program ownership: the covered Core stack, a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance responses, quarterly leadership reviews, an annual tabletop and IT coordination. Its published range is $8,000 to $15,000 per month after fit and complexity review. Compare that written scope with a prospective vCISO engagement rather than assuming the services are interchangeable. Helm Command.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        "Existing IT retains help desk, patching, administration, procurement and routine remediation. The client retains final attestations and business decisions. Command does not provide unlimited specialist work merely because it owns the security-program cadence.",
        {
          "text": "Bring one unfinished security decision and a recent questionnaire to your evaluation meeting, with sensitive details shared only through an approved process. The managed-provider models guide can help compare stack coverage with program ownership. Helm's free public-domain scan is a limited public check, not the risk assessment needed to build an entire roadmap.",
          "links": [
            {
              "phrase": "managed-provider models guide",
              "to": "/resources/managed-service-provider-security-models/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "digital-risk-protection-services",
  "title": "How to evaluate and implement digital risk protection services on a budget for small businesses",
  "metaTitle": "Digital Risk Protection Services: SMB Buyer Guide | Helm",
  "metaDesc": "Scope the public assets and sources a service monitors, then confirm who reviews findings and what response assistance is included.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Digital risk protection services look for defined external exposures, such as impersonation of a business or exposed credentials. Coverage varies by provider, monitored assets and data sources. Ask what the service can observe and what action follows a finding before treating the label as coverage of everything outside your network.",
  "lead": [
    "For a New Jersey professional-services firm, begin with the domains, public identities and online services clients use to recognize you."
  ],
  "takeaway": "Scope the public assets and sources a service monitors, then confirm who reviews findings and what response assistance is included.",
  "sections": [
    {
      "h": "Choose the assets that matter",
      "ps": [
        "List the firm's approved domains and client-facing accounts. Identify who can confirm whether a reported page, account or message is authorized. Keep the initial scope small enough that someone can review and act on findings.",
        {
          "text": "The FTC describes how impersonation scams use trusted identities and pressure to obtain payment or information. External monitoring can contribute signals, but staff still need a way to verify requests independently. FTC business-impersonation guidance.",
          "links": [
            {
              "phrase": "FTC business-impersonation guidance",
              "to": "https://consumer.ftc.gov/features/pass-it-on/impersonator-scams/business-impersonator-scams"
            }
          ]
        },
        "A hypothetical accounting firm might learn about a lookalike website using its name. The authorized reviewer should preserve relevant evidence without submitting credentials to the suspected site, confirm the impersonation and identify the appropriate hosting, registrar or platform reporting route."
      ]
    },
    {
      "h": "Ask what happens after detection",
      "ps": [
        "Some services send notifications; others help prepare abuse reports or coordinate defined response actions. Takedown depends on the relevant platform and evidence, so a provider should not promise that every impersonation will disappear on demand.",
        "For an exposed-credential alert, have IT verify the affected account and take the approved access actions. The alert alone does not prove a current account compromise or establish the completeness of the exposed information. Keep the investigation proportionate and involve the authorized responder when evidence suggests a wider incident.",
        "Ask prospective vendors:",
        {
          "list": [
            "Which domains, accounts and sources are monitored?",
            "How does a reviewer check a possible match?",
            "Who receives the alert and takes the next action?",
            "Does the price include assistance with reports or only detection?",
            "What evidence and export rights remain with the firm?"
          ],
          "ordered": false
        },
        "Evaluate the workload as well as the subscription. A low-cost service that produces unreviewed notifications can leave the important work with an already busy administrator."
      ]
    },
    {
      "h": "Connect external findings with existing controls",
      "ps": [
        {
          "text": "Helm Core includes digital-risk protection within its defined stack, alongside email, device, supported identity, backup and awareness protection. Confirm the monitored assets and response scope before relying on that coverage. Helm Core.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Helm Command adds a risk register, roadmap, evidence upkeep and coordination with the named IT owner. These responsibilities can help track an unresolved external finding and its owner; they do not guarantee takedowns or include unlimited forensic, legal or administrative work. Helm Command.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Use the DMARC guide for your own domain's authentication and the invoice-fraud guide for verification procedures. Those controls address related problems without replacing external-risk review.",
          "links": [
            {
              "phrase": "DMARC guide",
              "to": "/resources/what-is-dmarc/"
            },
            {
              "phrase": "invoice-fraud guide",
              "to": "/resources/invoice-fraud-red-flags/"
            }
          ]
        },
        {
          "text": "Start by identifying approved public assets and naming the response owner. Helm's free public-domain scan checks public email and web configuration. It does not search every external data source or establish that your brand and credentials have never been misused.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "accounting-firms-core-vs-command",
  "title": "Choosing between a standardized stack and full program ownership: Helm Core vs Helm Command for accounting firms",
  "metaTitle": "Accounting Firm Security: Core vs Command | Helm",
  "metaDesc": "Choose a standardized stack when program work already has an owner. Compare Command when recurring risk, evidence and coordination need ownership.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Accounting firms",
  "laneTo": "/accounting-firms/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "An accounting firm can have security tools in place and still struggle to show who reviews the controls, tracks exceptions and prepares customer answers. Choosing between a standardized protection stack and program ownership depends on whether those responsibilities already have an owner.",
  "lead": [
    {
      "text": "For New Jersey accounting and tax firms, begin with client information, payment workflows and the systems supporting time-sensitive work. Keep the detailed written-plan review in the existing WISP checklist.",
      "links": [
        {
          "phrase": "WISP checklist",
          "to": "/resources/wisp-checklist-accounting-firms/"
        }
      ]
    }
  ],
  "takeaway": "Choose a standardized stack when program work already has an owner. Compare Command when recurring risk, evidence and coordination need ownership.",
  "sections": [
    {
      "h": "Establish the obligations for your practice",
      "ps": [
        {
          "text": "The IRS states that professional tax preparers must create and implement security plans to protect client data. The FTC's Safeguards Rule applies to covered financial institutions, including tax preparation firms; some provisions have limited exemptions. Applicability depends on the firm's activities and the rule, not simply the word accounting in its name. Have the responsible adviser confirm the firm's obligations. IRS client-data guidance, FTC Safeguards Rule guidance.",
          "links": [
            {
              "phrase": "IRS client-data guidance",
              "to": "https://www.irs.gov/tax-professionals/protect-your-clients-protect-yourself"
            },
            {
              "phrase": "FTC Safeguards Rule guidance",
              "to": "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know"
            }
          ]
        },
        "Assign a firm owner for the program and identify which records IT must provide. A written plan should describe the firm's actual practices and remaining work rather than language copied from a vendor's brochure."
      ]
    },
    {
      "h": "Choose a stack when the program already has an owner",
      "ps": [
        {
          "text": "Helm Core includes managed email protection, device detection and response, supported identity protection, cloud productivity backup, awareness learning and simulations, digital-risk protection and monthly reporting. Its standard fit is 20 to 75 people, at $125 per covered user per month with a $2,500 minimum. Helm Core.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        "A hypothetical 30-person CPA firm may have a partner who owns the WISP and an IT provider that implements assigned changes. Core can cover the defined security layer while those owners maintain program decisions. It does not add quarterly leadership reviews or open-ended questionnaire work.",
        "Review eligible devices and supported platforms before comparing price. The workstation allowance does not include every phone, server or network device. Existing IT retains patching, administration, procurement and routine remediation."
      ]
    },
    {
      "h": "Choose program ownership when coordination is missing",
      "ps": [
        {
          "text": "Helm Command includes the covered Core stack plus a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance responses, quarterly leadership reviews, an annual tabletop and IT coordination. Its $8,000 to $15,000 monthly range is confirmed after a fit and complexity review for a qualified 75 to 250-person organization. Helm Command.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        "That scope addresses recurring decisions and evidence work. It does not guarantee compliance, insurer approval or completion of every recommended fix. The firm approves final attestations and business decisions; the responsible IT owner implements assigned administrative work."
      ]
    },
    {
      "h": "Review one workflow before choosing",
      "ps": [
        {
          "text": "Select a process such as staff departure, a payment-change request or recovery of a deleted client file. Ask who operates each step and what dated record supports completion. Use the offboarding checklist and backup-testing guide for those procedures.",
          "links": [
            {
              "phrase": "offboarding checklist",
              "to": "/resources/employee-offboarding-checklist/"
            },
            {
              "phrase": "backup-testing guide",
              "to": "/resources/backup-testing-insurers/"
            }
          ]
        },
        {
          "text": "Review the accounting-firm page with existing IT. Helm's free public-domain scan checks public email and web configuration; it cannot assess the firm's full WISP or certify internal controls. Use the findings as a starting point for a scoped fit conversation.",
          "links": [
            {
              "phrase": "accounting-firm page",
              "to": "/accounting-firms/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "google-workspace-security-managed-vs-diy",
  "title": "Managed Google Workspace Security vs DIY: Which Is Right for Your SMB",
  "metaTitle": "Google Workspace Security: Managed vs DIY | Helm",
  "metaDesc": "Review your Workspace edition, administrator access and sharing controls. Confirm supported protection and the administration retained by IT.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Google Workspace security involves more than Gmail filtering. Administrator access, file sharing, connected applications and recovery arrangements all affect how client information is handled. A firm can manage these responsibilities through existing IT or add a security provider for defined protection and program work.",
  "lead": [
    "Start by identifying your Workspace edition and current settings. Features available in one edition or configuration should not be assumed to exist in another."
  ],
  "takeaway": "Review your Workspace edition, administrator access and sharing controls. Confirm supported protection and the administration retained by IT.",
  "sections": [
    {
      "h": "Review the Google-specific controls",
      "ps": [
        {
          "text": "Google's small-business checklist covers two-step verification, administrator safeguards, Gmail protections and file-sharing controls. Firms with more demanding requirements may need the larger-business guidance even when their employee count is small. Google Workspace security checklist.",
          "links": [
            {
              "phrase": "Google Workspace security checklist",
              "to": "https://knowledge.workspace.google.com/admin/security/security-checklist-for-small-businesses-1-100-users?hl=en"
            }
          ]
        },
        "Have your IT owner review the administrator population, authentication enforcement and recovery arrangements. Check who can share client files outside the firm, whether guests still need their access and which applications have permission to use Workspace data.",
        "If a proposal includes contextual access policies, data-loss prevention or expanded audit capabilities, ask for the exact edition and license requirements. Confirm the proposed feature in your environment before including it in a customer answer. Device administration is a separate responsibility from detecting threats on supported workstations."
      ]
    },
    {
      "h": "Compare effort and authority",
      "ps": [
        "DIY can fit a firm whose IT team maintains the tenant and has time to review security events and evidence. Budget for that work, including roster changes, permissions and policy exceptions.",
        "A managed provider should identify supported Workspace capabilities and the response actions it is authorized to perform. Ask who maintains tenant settings, who investigates a suspicious account and who handles recovery or an unavailable device. Do not assume a service labeled Workspace security includes all administration or all Google products.",
        "A hypothetical 55-person New Jersey consulting firm could start with a client-sharing workflow. IT verifies the current Drive permissions, the business manager approves the intended recipients and the security owner records any exceptions. This connects a technical setting to a business decision without claiming that a configuration alone proves compliance."
      ]
    },
    {
      "h": "Confirm Helm's fit in writing",
      "ps": [
        {
          "text": "Helm Core includes a defined email, device, supported identity, cloud productivity backup, awareness and digital-risk stack with monthly reporting. Supported Google services and workloads must be confirmed during fit review rather than inferred from the overall product description. Helm Core.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Helm Command adds a risk register, roadmap, evidence upkeep, bounded questionnaire response and leadership cadence. Existing IT retains tenant administration, patching and routine remediation. Command coordinates assigned work; it does not promise unrestricted Workspace hardening or universal recovery. Helm Command.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "For an AI workflow using Workspace information, review the permissions, data handling and approved use before a pilot. Helm's Secure AI Adoption consulting is a separate scoped service, not an included configuration feature or approval of every Gemini or third-party integration. The existing shadow-AI guide explains the business review.",
          "links": [
            {
              "phrase": "shadow-AI guide",
              "to": "/resources/shadow-ai-at-work/"
            }
          ]
        },
        {
          "text": "Collect your edition, user population, application list and current sharing rules for the fit discussion. Helm's free public-domain scan checks public email and web configuration, without inspecting your Workspace tenant. It cannot verify internal permissions, backup coverage or all licensed controls.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "microsoft-365-retention-vs-backup",
  "title": "Microsoft 365 Native Retention vs Third-Party Backup: Which Is Right for Your Small Business",
  "metaTitle": "Microsoft 365 Retention vs Backup for SMBs | Helm",
  "metaDesc": "Microsoft offers retention, recovery and native backup. Compare workload coverage, restore requirements and operating duties before choosing a service.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Microsoft 365 has retention, recovery and native backup capabilities. Choosing a backup approach starts with the data you need to recover and the recovery process your business can operate. A claim that Microsoft has no backup is an inadequate basis for a purchase.",
  "lead": [
    {
      "text": "Retention and backup serve related but different purposes. Retention policies can preserve or delete content according to configured rules. Microsoft 365 Backup is a separate recovery product, covering supported SharePoint sites, OneDrive accounts and Exchange mailboxes. Licensing, billing and configuration need their own review. Microsoft Purview retention, Microsoft 365 Backup overview.",
      "links": [
        {
          "phrase": "Microsoft Purview retention",
          "to": "https://learn.microsoft.com/en-us/purview/retention"
        },
        {
          "phrase": "Microsoft 365 Backup overview",
          "to": "https://learn.microsoft.com/en-us/microsoft-365/backup/backup-overview"
        }
      ]
    }
  ],
  "takeaway": "Microsoft offers retention, recovery and native backup. Compare workload coverage, restore requirements and operating duties before choosing a service.",
  "sections": [
    {
      "h": "Compare recovery requirements by workload",
      "ps": [
        "Ask your IT owner to list the mailboxes, accounts, sites and other business data the firm depends on. Include shared data and departing employees. Then identify which native or third-party product covers each item and where coverage stops.",
        "Do not assume a product that covers mailbox data also restores every Teams conversation, application configuration or connected service. Read the current workload and restore documentation for the particular product. Check whether permissions, versions and other needed information return with the content.",
        "A hypothetical 40-person New Jersey accounting firm could define one recovery requirement for a deleted client file and another for widespread damage to a shared document site. The firm should evaluate both, including how a restore might affect legitimate changes made after the chosen recovery point."
      ]
    },
    {
      "h": "Test the operator as well as the product",
      "ps": [
        "Choose non-sensitive sample data and arrange a controlled restore through the provider authorized to perform it. Record the source, recovery point, restored destination and result. Confirm that the business owner can use the returned data.",
        "During vendor evaluation, ask:",
        {
          "list": [
            "Which workloads and users are protected, and how are new ones enrolled?",
            "What retention and recovery points apply?",
            "Who can change or delete backup policies?",
            "Who authorizes and performs restores?",
            "What recovery work, testing and charges are included?",
            "What happens to recoverability when the contract ends?"
          ],
          "ordered": false
        },
        "Separate a provider's recovery objective from a guarantee. Actual restoration depends on the supported workload, amount of data, scenario and configured service. Keep exceptions and failed tests visible rather than recording only successful jobs."
      ]
    },
    {
      "h": "Confirm the managed-service scope",
      "ps": [
        {
          "text": "Helm Core includes cloud productivity backup within its defined protection stack. Covered Microsoft workloads, restore responsibilities and test duties must be confirmed in the service order. It does not mean every Microsoft 365 asset is backed up or that every recovery task is included. Helm Core.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Helm Command adds evidence upkeep, roadmap ownership and coordination with the named IT owner. Existing IT retains backup operations outside covered services, routine administration and remediation. Specialist recovery work needs separate written scope. Helm Command.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Use the backup-testing guide to prepare support for questionnaire answers. Start by documenting one important restore scenario and its responsible operator. Helm's free public-domain scan cannot inspect your tenant, backup policies or restore history.",
          "links": [
            {
              "phrase": "backup-testing guide",
              "to": "/resources/backup-testing-insurers/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "security-questionnaire-response-services",
  "title": "Security questionnaire response services versus DIY: what SMBs should consider",
  "metaTitle": "Security Questionnaire Services vs DIY | Helm",
  "metaDesc": "Map questionnaire answers to current scoped evidence. A response service can help draft and organize; your firm approves every final representation.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "A client questionnaire can ask for broad assurances while your evidence covers only part of the business. The response process needs someone to notice that mismatch before an answer is approved.",
  "lead": [
    "DIY can work when the firm has an owner who understands its controls, can obtain evidence from IT and has time to manage reviews. A response service can help organize that work, but the customer still owns every final representation."
  ],
  "takeaway": "Map questionnaire answers to current scoped evidence. A response service can help draft and organize; your firm approves every final representation.",
  "sections": [
    {
      "h": "Start with the question's scope",
      "ps": [
        "Record who is asking, which service or business unit they are assessing, the deadline and the expected approval process. Different questionnaires can use similar language to ask about different populations. A question about all production systems should not be answered using a report covering only employee laptops.",
        "For each question, identify the responsible control owner and supporting record. Mark an answer as unsupported when evidence is missing. If a control is planned or partially deployed, say so and explain the relevant scope rather than converting a roadmap item into a present-tense claim.",
        {
          "text": "The FTC's guidance for covered financial institutions includes evaluating service providers and overseeing safeguards. That is one reason a customer may request evidence; it does not mean every questionnaire has the same legal basis or response requirements. FTC Safeguards Rule guidance.",
          "links": [
            {
              "phrase": "FTC Safeguards Rule guidance",
              "to": "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know"
            }
          ]
        }
      ]
    },
    {
      "h": "Maintain a reviewed answer library",
      "ps": [
        "Store approved answers with their scope, evidence date, reviewer and conditions for reuse. A template can shorten drafting, but the control owner should check it against current systems and the new question. Retire answers when configurations, providers or coverage change.",
        "A hypothetical 90-person New Jersey consultancy might reuse an answer describing endpoint coverage. Before the next submission, it needs to check newly acquired devices and any contractors outside the service. Reusing last quarter's answer without that check could overstate the current control.",
        "Keep supporting evidence in an approved restricted location and share only what the requesting party is entitled to receive. Redact confidential details where appropriate and confirm the recipient's secure transfer process."
      ]
    },
    {
      "h": "Define the service limit",
      "ps": [
        "Ask a response provider which formats, volumes and deadlines it covers. Clarify whether it drafts answers, maps controls, requests evidence, handles follow-up questions or reviews contract commitments. Legal interpretation and independent assurance need their own responsible advisers.",
        {
          "text": "Helm Command includes bounded client questionnaire and insurance responses, evidence upkeep and coordination with your named IT owner. That work is part of a managed program rather than an unlimited standalone response desk. The firm reviews and approves final attestations. Helm Command.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Helm Core provides a defined protection stack and monthly reporting. It does not include Command's questionnaire scope or full program-evidence ownership. Helm Core.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Review the managed-provider models guide when deciding who should own recurring evidence work. For insurer-specific questions, use the separate insurance application walkthrough.",
          "links": [
            {
              "phrase": "managed-provider models guide",
              "to": "/resources/managed-service-provider-security-models/"
            },
            {
              "phrase": "insurance application walkthrough",
              "to": "/resources/cyber-insurance-application-walkthrough/"
            }
          ]
        },
        {
          "text": "Begin by assigning one questionnaire owner and identifying the evidence gaps in the next request. Helm's free public-domain scan checks limited public configuration; it cannot support blanket claims about internal access, training, backup or response coverage.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "managed-identity-threat-response",
  "title": "Key capabilities to look for in a managed identity threat detection and response provider",
  "metaTitle": "Managed Identity Threat Response: Buyer Checklist | Helm",
  "metaDesc": "Confirm supported identity platforms, available signals and written response authority. Keep administration, recovery and specialist duties assigned.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Identity threat detection and response looks for signs that an account or sign-in may be compromised and supports defined action. It is different from the routine work of creating accounts, approving permissions and removing access when staff leave.",
  "lead": [
    "A firm buying the service should ask which identity platforms are supported, what signals are available and what the provider can do when it finds a suspicious event."
  ],
  "takeaway": "Confirm supported identity platforms, available signals and written response authority. Keep administration, recovery and specialist duties assigned.",
  "sections": [
    {
      "h": "Check the signals and their limits",
      "ps": [
        {
          "text": "Microsoft Entra ID Protection is one example of a product that detects identity risks and supports investigation and policy-based actions. Available detections, reporting and policies depend on licensing and configuration. A product's capabilities do not establish what a particular managed provider has deployed or is authorized to operate. Microsoft Entra ID Protection.",
          "links": [
            {
              "phrase": "Microsoft Entra ID Protection",
              "to": "https://learn.microsoft.com/en-us/entra/id-protection/overview-identity-protection"
            }
          ]
        },
        "Ask for the covered account population and data sources. Include administrator accounts, guests and any application identities relevant to your service. Identify where logs are missing or where a system sits outside the supported platform.",
        "A suspicious sign-in is a signal for review, not automatic proof of compromise. A hypothetical New Jersey consultant traveling to a client site could generate unusual activity. The provider needs enough context to assess the event without ignoring a genuine account takeover."
      ]
    },
    {
      "h": "Require a written response path",
      "ps": [
        "Have the vendor demonstrate a fictional incident from detection to escalation. Establish who checks the event, who contacts the user through a trusted route and which actions can occur automatically.",
        "Depending on the platform and authority, actions may include restricting an account or requiring additional verification. Ask specifically about session handling and connected applications. A password reset should not be presented as proof that all active access everywhere has ended.",
        "Agree on the handoff to existing IT for administrative changes and recovery. Forensic investigation, client notification and legal decisions need their own owners. Keep a record of the signal, reviewer, authorized action and unresolved questions.",
        "Use these evaluation criteria:",
        {
          "list": [
            "The provider names supported platforms and excluded identities.",
            "The contract states monitoring coverage and escalation contacts.",
            "Response permissions are explicit and proportionate.",
            "Evidence records show coverage and actions without unnecessary data disclosure.",
            "The firm knows who restores access and handles work outside the service."
          ],
          "ordered": false
        }
      ]
    },
    {
      "h": "Confirm Helm's supported scope",
      "ps": [
        {
          "text": "Helm Core includes supported identity protection inside its standardized security stack. Confirm the relevant platform, account coverage and containment authority during fit review. Specialist vendor teams provide continuous monitoring and containment behind covered capabilities; Helm does not staff its own 24/7 SOC. Helm Core.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Helm Command adds risk, roadmap, evidence upkeep, bounded questionnaire responses and program coordination. It does not promise universal session revocation, unrestricted tenant administration or forensic remediation. Existing IT retains routine administration and remediation. Helm Command.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "Use the offboarding guide for the separate account-lifecycle workflow and the incident-response guide for the wider handoff. Bring your identity platforms and current response contacts to a fit discussion. Helm's free public-domain scan cannot inspect internal identity telemetry or prove that accounts have not been compromised.",
          "links": [
            {
              "phrase": "offboarding guide",
              "to": "/resources/employee-offboarding-checklist/"
            },
            {
              "phrase": "incident-response guide",
              "to": "/resources/incident-response-plan-small-business/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "google-workspace-retention-vs-backup",
  "title": "Google Workspace Native Retention vs Managed Backup Services: Choosing the Right Fit for Your Business",
  "metaTitle": "Google Workspace Retention vs Managed Backup | Helm",
  "metaDesc": "Compare Google recovery and Vault retention with your restore requirements. Confirm each protected workload and the authorized restore operator.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "Google Workspace provides retention and recovery features, but each has a particular scope. Your firm needs to know whether it can recover the information required for client work and who will perform the restore.",
  "lead": [
    {
      "text": "Google explicitly states that Vault is not designed as a backup or archive tool. Its exports support legal discovery, with limits that differ from an operational backup workflow. Treating Vault as a substitute for every restore requirement can leave gaps. Google Vault FAQ.",
      "links": [
        {
          "phrase": "Google Vault FAQ",
          "to": "https://knowledge.workspace.google.com/vault/getting-started/google-vault-faq?hl=en"
        }
      ]
    }
  ],
  "takeaway": "Compare Google recovery and Vault retention with your restore requirements. Confirm each protected workload and the authorized restore operator.",
  "sections": [
    {
      "h": "Review native recovery before adding a service",
      "ps": [
        {
          "text": "Ask your Workspace administrator to document the current edition, retention rules and recovery methods for the data the business uses. Google documents a limited administrator recovery window for deleted Drive data and describes restrictions on the recovery process. Check the current documentation and the specific loss event instead of assuming every deleted item can be restored indefinitely. Google Drive administrator recovery.",
          "links": [
            {
              "phrase": "Google Drive administrator recovery",
              "to": "https://knowledge.workspace.google.com/admin/drive/recover-deleted-files-and-folders-for-drive-users?hl=en"
            }
          ]
        },
        "Separate personal Drive content, shared drives, Gmail and other workloads in the inventory. Calendar, Contacts and Chat need explicit coverage decisions. A vendor that backs up one workload should not be assumed to protect all of them."
      ]
    },
    {
      "h": "Compare the restoration process",
      "ps": [
        "A hypothetical 35-person New Jersey firm could define a test around recovery of a deleted client folder. The authorized administrator should restore non-sensitive sample data and check that the expected files and access arrangements are usable afterward. Test sharing and permissions rather than assuming a successful content restore returns every working relationship.",
        "Ask prospective backup providers:",
        {
          "list": [
            "Which Workspace workloads and account types are covered?",
            "How are new users and shared data included?",
            "What recovery points and retention periods apply?",
            "Who authorizes, performs and verifies a restore?",
            "What happens when the source account is deleted or licensing changes?",
            "How can the firm recover or export data at contract end?"
          ],
          "ordered": false
        },
        "A recovery-time objective is a target for an agreed scenario. Confirm the assumptions behind it and the charges for work outside the standard process. Record failed tests and excluded data alongside successful results."
      ]
    },
    {
      "h": "Verify the managed scope in writing",
      "ps": [
        {
          "text": "Helm Core includes cloud productivity backup within its defined protection stack. Supported Google workloads, provider capabilities, restore duties and test responsibilities must be confirmed in writing. The service description does not promise backup of every Gmail, Drive, Calendar, Contacts or Chat asset. Helm Core.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Helm Command adds program ownership, evidence upkeep and IT coordination. Existing IT retains tenant administration and backup operations outside covered services. Specialized recovery or remediation needs separate scope. Helm Command.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        {
          "text": "For a customer answer, state the protected population, workload and test date rather than saying all Workspace data is backed up based on one console. Use the backup-testing guide for the evidence discussion.",
          "links": [
            {
              "phrase": "backup-testing guide",
              "to": "/resources/backup-testing-insurers/"
            }
          ]
        },
        {
          "text": "Start with a workload inventory and one controlled restore test. Helm's free public-domain scan checks public email and web configuration, not Workspace retention rules or recoverability. Bring the inventory and test responsibilities to a separate fit conversation.",
          "links": [
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "cybersecurity-roadmap-milestones",
  "title": "Key milestones to include in a cybersecurity roadmap for New Jersey professional-services firms",
  "metaTitle": "Cybersecurity Roadmap Milestones for NJ Firms | Helm",
  "metaDesc": "Build a roadmap with a checked baseline, dependencies, responsible owners and acceptance evidence. Leadership approves priorities and risk decisions.",
  "date": "2026-10-06",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "A cybersecurity roadmap should show which work comes next, who will perform it and how the firm will know it is complete. A list of recommended tools leaves those decisions open.",
  "lead": [
    {
      "text": "For a New Jersey professional-services firm with existing IT, connect the roadmap to client information, business continuity and the evidence customers request. NIST's small-business guidance offers a structure for organizing cybersecurity work; use it to identify gaps without treating the framework as a certification. NIST Small Business Quick-Start Guide.",
      "links": [
        {
          "phrase": "NIST Small Business Quick-Start Guide",
          "to": "https://csrc.nist.gov/pubs/sp/1300/final"
        }
      ]
    }
  ],
  "takeaway": "Build a roadmap with a checked baseline, dependencies, responsible owners and acceptance evidence. Leadership approves priorities and risk decisions.",
  "sections": [
    {
      "h": "Establish a baseline with known limits",
      "ps": [
        "The first milestone is an agreed description of systems, responsibilities and existing controls. Record what has been checked, what is self-reported and what remains unknown. Identify contractual or regulatory requirements with the responsible adviser before labeling a gap as a compliance failure.",
        "A public-domain scan can contribute observable configuration findings. It cannot establish internal access, device coverage or restore capability. Deeper discovery should have a signed scope, authorized access and defined deliverables."
      ]
    },
    {
      "h": "Sequence work around dependencies",
      "ps": [
        "Choose priorities by business impact, exposure and the ability to act. An access-policy change may require new licensing, enrollment or a recovery procedure before rollout. A backup improvement needs a clear workload inventory and an authorized restore operator.",
        "For a hypothetical 85-person New Jersey consulting firm, a roadmap could begin by confirming client-file access owners, then assign the relevant permission changes to IT and arrange a controlled restore test for an important shared workspace. This is a planning example, not a Helm client outcome or a universal sequence.",
        "Each milestone should identify the responsible person, expected cost or budget decision, dependencies, target date and acceptance evidence. If implementation depends on IT or another vendor, obtain that owner's agreement before presenting the date as committed."
      ]
    },
    {
      "h": "Add evidence and leadership decisions",
      "ps": [
        "A milestone closes when the agreed acceptance check passes. Installation records, configuration exports, training records and restore-test results support different claims; choose the evidence that matches the change and store sensitive records appropriately.",
        "At a leadership review, address completed work, missed dates and decisions requiring approval. Keep deferred risks visible with a reason and reconsideration date. Update the roadmap when systems, staff or client obligations change instead of repeatedly circulating the original plan."
      ]
    },
    {
      "h": "Choose the right ownership level",
      "ps": [
        {
          "text": "Helm Core supplies a standardized protection stack and monthly reporting. It does not include a maintained roadmap or quarterly leadership reviews. Helm Core.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        {
          "text": "Helm Command includes the covered Core stack, a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire responses, quarterly leadership reviews, an annual tabletop and coordination with the named IT owner. Its $8,000 to $15,000 monthly range is confirmed after fit and complexity review. Helm Command.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        "Program ownership does not mean Helm implements every recommendation. Existing IT retains administration, patching, procurement and routine remediation; specialist work needs separate written scope. Leadership retains final business and risk decisions.",
        {
          "text": "Use the managed-provider models guide to compare those responsibilities. Start with one unfinished security action and name its owner and completion evidence. Helm's free public-domain scan can supply limited public findings; an internal assessment and roadmap require a separately defined engagement.",
          "links": [
            {
              "phrase": "managed-provider models guide",
              "to": "/resources/managed-service-provider-security-models/"
            },
            {
              "phrase": "free public-domain scan",
              "to": "/free-scan/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "cyber-insurance-cybersecurity-vendors",
  "title": "How to evaluate and select a cybersecurity partner that proves your controls to insurers",
  "metaTitle": "Cyber Insurance: Choosing a Cybersecurity Partner | Helm",
  "metaDesc": "Compare cybersecurity vendors for New Jersey SMB cyber insurance: controls, evidence, response duties, costs, timelines, and a practical selection checklist.",
  "date": "2026-10-06",
  "readMin": 10,
  "lane": "All industries",
  "laneTo": "/",
  "organizationByline": true,
  "hideVisual": true,
  "intro": "Your cyber insurance renewal arrives with questions about multifactor authentication, device monitoring, and backups. Your IT provider says the tools are installed. The insurer asks what is covered and whether the controls actually work. Choosing a cybersecurity partner starts with that gap: who operates the controls, who verifies the evidence, and who helps your business explain the answers?",
  "takeaway": "Start with your broker’s current application and any quote conditions. Hire for the work you need: protection, program leadership, incident response, independent assessment, or evidence upkeep. Ask for dated, scoped deliverables and confirm the insurer’s requirements before paying for a report. Better controls can support underwriting, but no cybersecurity vendor can promise a lower premium or coverage approval.",
  "sections": [
    {
      "h": "What insurers look for, and what better rates really mean",
      "ps": [
        {
          "text": "Travelers lists MFA, endpoint detection and response, backup arrangements, email filtering, encryption, and remote-access controls among common quote conditions for its Corvus Smart Cyber and Smart Tech E&O products. A condition, sometimes called a subjectivity, can require work before the policy is bound. It is not a universal checklist for every carrier.",
          "links": [
            {
              "phrase": "Travelers lists",
              "to": "https://www.travelers.com/cyber-knowledge/cyber-risk-services/what-are-common-subjectivities-to-cyber-and-tech-eo-policies"
            }
          ]
        },
        {
          "text": "Travelers’ readiness guidance also recommends keeping systems updated, maintaining an incident response plan, and backing up data. Use these as starting questions, then read the definitions in your own application. A cloud email backup does not establish recoverability for a separate server or tax application.",
          "links": [
            {
              "phrase": "Travelers’ readiness guidance",
              "to": "https://www.travelers.com/resources/business-topics/cyber-security/cyber-security-best-practices"
            }
          ]
        },
        "Ask your broker which gaps affect eligibility, which affect the quote, and what evidence the underwriter wants. Disclose your actual operations, revenue, information handled, and incident history as requested. Give the technical questions to someone who can verify them; keep the business representations with the authorized signer.",
        "Compare quotes on the same coverage limits, retention, sublimits, exclusions, and services. A lower premium with less useful coverage may be a worse purchase. Ask the broker to explain changes in writing. Measure the security service against reduced exposure and work completed, rather than assuming a premium saving will pay its fee."
      ]
    },
    {
      "h": "Match the vendor category to the missing work",
      "ps": [
        "Provider labels overlap. One firm may perform several roles, while another supplies only software. Ask what it will operate, what it will document, and what your existing IT team must still complete.",
        "Managed security service providers (MSSPs) run defined protections and monitoring. A virtual chief information security officer (vCISO) provides security leadership and an agreed program cadence. Neither label automatically includes forensic investigation, independent certification, or hands-on IT remediation."
      ],
      "table": {
        "caption": "Five provider roles to compare against your insurance requirements",
        "headers": [
          "Provider type",
          "Work to request",
          "Deliverable to examine"
        ],
        "rows": [
          [
            "MSSP",
            "Operate covered email, endpoint, identity, and monitoring controls.",
            "Covered inventory, deployment report, exceptions, and escalation responsibilities."
          ],
          [
            "vCISO or program consultant",
            "Own agreed risks, priorities, policy upkeep, and leadership decisions.",
            "Risk register, roadmap, responsibility map, and response-plan review."
          ],
          [
            "Incident response (IR) firm",
            "Provide separately agreed investigation, containment, and recovery assistance.",
            "Retainer scope, response commitments, included hours, and insurer coordination path."
          ],
          [
            "Compliance assessor",
            "Evaluate a named standard or conduct a defined independent assessment.",
            "Report with criteria, scope, test dates, findings, and limitations."
          ],
          [
            "Evidence-management provider",
            "Maintain records and map evidence to questionnaire answers.",
            "Dated evidence register with owners, exceptions, review status, and export process."
          ]
        ]
      }
    },
    {
      "h": "Request evidence the underwriter can evaluate",
      "ps": [
        "There is no evidence package every insurer accepts. Before buying an assessment, have your broker confirm the required control, systems in scope, acceptable proof, submission channel, and deadline. The examples below are practical deliverables to discuss with the underwriter, not preapproved insurance documents.",
        "MFA: request a dated configuration export or coverage report tied to the account inventory. It should distinguish email, remote access, administrator access, and other applications the question names. Record exceptions and compensating measures; do not turn partial coverage into an unqualified “yes.”",
        "Endpoint monitoring: request the product and service tier, covered-device inventory, recent reporting status, and who investigates and contains a threat. Compare those records with the full device list. Identify unsupported computers, servers, or other equipment outside the contract.",
        "Backup and recovery: request the covered data, retention, access protections, and a dated restore-test record. A useful record states what was restored, whether it was usable, and any unresolved problem. Include critical business applications separately from email-platform backup.",
        "Incident readiness: request a response plan with contacts, authority, escalation steps, and the carrier notification path. Ask for a tabletop record showing who participated, what decisions were tested, and which follow-up tasks remain. Agree who updates the plan after staff or provider changes."
      ]
    },
    {
      "h": "Read vendor attestations for their actual scope",
      "ps": [
        "A vendor’s statement can confirm the service it delivers to your business: covered systems, control settings, monitoring responsibilities, dates, and known exceptions. Request the person responsible for the statement and the records supporting it. The wording should answer the specific question, not repeat a marketing claim.",
        "A vendor’s own certification or assurance report concerns the scope described in that report. It does not demonstrate that your accounts all require MFA, your backups restore, or your excluded server is monitored. Ask an assessor to explain exactly what it examined and whether its report meets the underwriter’s request.",
        "Your organization reviews and owns the final application. Keep the submitted answers, evidence references, technical reviewer, business approver, and date together. If a control is incomplete, explain the gap through the insurer’s process instead of borrowing a vendor’s attestation to hide it."
      ]
    },
    {
      "h": "A practical vendor evaluation checklist",
      "ps": [
        "First, give every bidder the same user count, device inventory, platforms, locations, current IT owner, application questions, and renewal date. Ask it to mark each requirement as included, excluded, or separately priced.",
        "Second, request one redacted deliverable that links a questionnaire answer to a dated operating record. Ask who gathers the evidence, who checks completeness, how exceptions are recorded, and what happens when an account or device stops reporting.",
        "Third, walk through a fictional compromised-account event. Name the monitoring team, containment authority, business contact, IT remediation owner, and insurer notification contact. For an IR retainer, have the broker check carrier panel requirements and consent terms before you commit. Ask whether work must be authorized through the carrier’s breach hotline.",
        "Fourth, inspect access and exit arrangements. Ask how the provider secures administrator access, which subcontractors participate, where evidence is stored, and how your firm receives its records when the agreement ends.",
        "Fifth, compare total cost and service limits. Include onboarding, licenses, extra devices, questionnaire volume, response expectations, project work, travel, annual increases, renewal notice, and exit support. Name who executes remediation; a roadmap alone does not complete it.",
        {
          "text": "Use the downloadable vendor evaluation scorecard to organize the comparison. Add the specific insurer requirement beside each relevant criterion and record unanswered questions with an owner and due date. Resolve essential coverage or evidence gaps before signing.",
          "links": [
            {
              "phrase": "vendor evaluation scorecard",
              "to": "/downloads/Helm_MSP_Vendor_Evaluation_Scorecard.pdf"
            }
          ]
        }
      ]
    },
    {
      "h": "Plan the renewal work before the deadline",
      "ps": [
        {
          "text": "For Coalition’s Standard Renewal process, the carrier sends application materials 90 days before expiration and describes an updated quote at least 30 days before expiration. Requirements vary by renewal path and account. Ask your broker for your own schedule rather than assuming another carrier follows those dates.",
          "links": [
            {
              "phrase": "Coalition’s Standard Renewal process",
              "to": "https://help.coalitioninc.com/hc/en-us/articles/6959642379547-How-do-Cyber-renewals-work-at-Coalition"
            }
          ]
        },
        "For planning, a small firm could reserve the first one to two weeks for inventory, application review, and gathering existing evidence. The next two to six weeks could cover agreed control changes and validation. Reserve a further one to two weeks for technical review, signer approval, and broker follow-up. These are illustrative scheduling allowances, not typical market averages or a Helm deployment promise.",
        "Legacy systems, missing administrative access, procurement, and several providers can extend the work. If renewal is close, tell the broker which controls are complete and which remain open, with proposed dates. Do not represent scheduled work as already implemented.",
        "After submission, keep evidence current. Record new devices, changed access, unresolved alerts, restore tests, and completed remediation. Otherwise the next renewal begins with another scramble to reconstruct the year."
      ]
    },
    {
      "h": "Budget for protection, leadership, and separate projects",
      "ps": [
        "An assessment, an ongoing service, and an emergency retainer buy different work. Ask for separate prices for discovery, recurring operation, implementation projects, and specialist response. There is no reliable single “typical SMB cost” without a system inventory and written scope.",
        {
          "text": "As a published reference point checked in October 2026, vCISO.com lists advisory engagements from $3,000 per month and managed engagements from $5,000 per month. These are that vendor’s starting prices, not market averages or a like-for-like quote for a protection stack.",
          "links": [
            {
              "phrase": "vCISO.com lists",
              "to": "https://www.vciso.com/pricing"
            }
          ]
        },
        "Helm’s published prices provide another concrete reference. Core costs $125 per covered user per month with a $2,500 monthly minimum. For 35 covered users, the base recurring cost is $4,375 per month, or $52,500 over 12 months, before separately scoped work or additional workstations. Keep existing general-IT costs in the budget.",
        "Command costs $8,000 to $15,000 per month after fit and complexity review, including its covered protection stack and program scope. The first 12 months therefore total $96,000 to $180,000 at the starting monthly price. Its initial term is 36 months, with a 6% adjustment on each service anniversary.",
        "For IR firms and independent assessors, request a written quote. Check whether a retainer purchases availability, prepaid hours, or both; how after-hours rates work; and whether unused hours expire. Evidence software may also need a person to collect and verify records. Avoid paying twice for services already included through your insurer."
      ]
    },
    {
      "h": "Where Helm Core and Helm Command fit",
      "ps": [
        {
          "text": "Helm Core fits a standard 20 to 75-person organization that needs managed email protection, device detection and response, supported identity protection, cloud productivity backup, awareness learning and simulations, digital-risk protection, and a monthly report. It provides the security stack while a named IT owner continues general IT.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        },
        "Core includes up to two eligible Windows or Mac workstations per covered user; extra eligible workstations cost $12 each per month. Choose a 12-month initial term or a 36-month lock on the starting per-user price and minimum. Quarterly leadership reviews and open-ended vCISO work are outside Core.",
        {
          "text": "Helm Command fits a qualified 75 to 250-person organization that also needs ongoing program ownership. It adds a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance response, quarterly leadership reviews, an annual tabletop, and coordination with the named IT owner. Response volume and turnaround belong in the written scope.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        },
        "Specialist vendor teams provide continuous monitoring and containment for covered capabilities. Helm does not staff its own 24/7 SOC. Help desk, administration, procurement, patching, and general IT remain with the existing provider or internal team. Servers, phones, tablets, network equipment, specialized systems, forensic response, breach counsel, and hands-on remediation need separate written scope unless expressly included.",
        "Consider Helm when those defined responsibilities match your gap. Command helps prepare responses from verified program evidence; your business owns final attestations. Helm does not issue certifications, insurer approvals, or guarantees of premium savings."
      ]
    },
    {
      "h": "A New Jersey example: separate the control gap from the paperwork",
      "ps": [
        "Consider a hypothetical 35-person accounting firm in Freehold renewing cyber insurance before tax season. Its MSP runs IT, but the firm cannot show whether all remote-access accounts require MFA or when its tax-software backup was last restored. This is an illustrative case, not a Helm customer story.",
        "The partner asks the broker for the application definitions and evidence requirements. The MSP checks remote access, records exceptions, and tests the tax-system restore. A security provider documents the covered email and workstation protections. The partner then reviews the answers against those records before submission.",
        "Core could fit the covered protection needs if a named owner handles the wider program and questionnaire work. If recurring evidence and risk coordination require ongoing ownership, review the program-service scope and fit; do not assume that one renewal question means the firm needs Command. No insurance quote, discount, or customer outcome is asserted in this example."
      ]
    },
    {
      "h": "Start with the question you need answered",
      "ps": [
        {
          "text": "Helm’s free scan checks publicly reachable email and web configuration for a domain you control, without credentials. It offers a limited initial view; it is not a free internal security assessment, device audit, or proof that you meet an insurer’s controls.",
          "links": [
            {
              "phrase": "free scan",
              "to": "/free-scan/"
            }
          ]
        },
        "Bring the scan findings, application questions, deadline, and current IT responsibilities to a fit conversation. If fit or scope cannot responsibly be confirmed from that conversation, Helm’s bounded paid discovery costs $2,500 to $7,500 and is credited to the first service year if you proceed.",
        {
          "text": "If your immediate need is insurance evidence, discuss the required scope with Helm and your broker. Begin with the actual application and the work needed to answer it accurately. That gives each provider a defined job and your business a reviewable next step.",
          "links": [
            {
              "phrase": "discuss the required scope with Helm",
              "to": "/contact/"
            }
          ]
        }
      ]
    }
  ]
},
  {
    "slug": "managed-service-provider-security-models",
    "title": "Comparing Managed Service Provider Models: Standard Security Stack versus Full Program Ownership",
    "metaTitle": "MSP Security Models: Standard Stack vs Program Ownership | Helm",
    "metaDesc": "Compare cybersecurity service models for New Jersey SMBs: coverage, incident duties, evidence, onboarding, and how Helm Core and Helm Command differ.",
    "date": "2026-10-06",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "organizationByline": true,
    "hideVisual": true,
    "intro": "Two managed service providers can propose similar security tools and offer very different services. One manages the protection stack and sends a monthly report. Another also keeps the risk register current, follows up on assigned work, and prepares evidence for customer questionnaires. For a New Jersey business comparing proposals, that difference affects who does the work after onboarding and what leadership still needs to manage.",
    "takeaway": "A standardized security stack fits a business that needs defined protection and has someone to own the wider security program. Full program ownership adds an agreed cadence for risks, evidence, priorities, and leadership decisions. In both models, write down the covered systems, response duties, exclusions, and responsibilities your business retains.",
    "sections": [
      {
        "h": "What managed service providers do for small and medium businesses",
        "ps": [
          "An MSP manages agreed technology services for a recurring fee. General IT work often includes help desk support, account administration, patching, devices, and networks. Cybersecurity work may be bundled into that agreement or delivered by a separate security-focused provider. Ask which work the proposed contract covers.",
          {
            "text": "NIST’s outsourcing guidance recommends starting with the outcomes you need and documenting responsibilities in the agreement. If your existing IT provider handles daily operations well, you may need a security layer alongside it. If nobody owns routine IT, a security service alone will leave that work unassigned.",
            "links": [
              {
                "phrase": "NIST’s outsourcing guidance",
                "to": "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/building-your-team"
              }
            ]
          }
        ]
      },
      {
        "h": "Standard stack versus full program ownership",
        "ps": [
          "A standardized stack covers a defined set of security services through a repeatable deployment and reporting process. It can suit a firm with supported platforms, a clear IT owner, and manageable reporting needs. The business still needs someone to decide priorities and coordinate work outside the service.",
          "Full program ownership adds an ongoing management role. The provider maintains the agreed risk register and roadmap, organizes evidence, prepares bounded questionnaire responses, and brings decisions to leadership. Your business still approves spending, accepts risks, and signs its own representations. “Full” describes the agreed security-program role; the contract must name its limits."
        ],
        "table": {
          "caption": "Compare the responsibilities, then check them against each proposal",
          "headers": [
            "Responsibility",
            "Standard security stack",
            "Full program ownership"
          ],
          "rows": [
            [
              "Protection",
              "Operates defined controls for covered users and systems.",
              "Includes the covered protection stack."
            ],
            [
              "Priorities",
              "Business or its named owner manages wider priorities.",
              "Provider maintains an agreed risk register and roadmap."
            ],
            [
              "Reporting",
              "Service activity and exceptions on an agreed schedule.",
              "Service reporting plus leadership reviews and tracked decisions."
            ],
            [
              "Questionnaires",
              "Check whether evidence help is included or separately scoped.",
              "Defined evidence upkeep and bounded response support."
            ],
            [
              "Remediation",
              "Assigned to the responsible IT team or separately authorized.",
              "Provider coordinates assigned work; execution remains with the named owner."
            ],
            [
              "Business accountability",
              "Client approves scope, risks, and final attestations.",
              "Client retains those approvals and final attestations."
            ]
          ]
        }
      },
      {
        "h": "Cybersecurity coverage to check in either model",
        "ps": [
          "Email protection: confirm which mailboxes and platforms are covered, how filtering and impersonation detection work, and how employees report a suspicious message. Ask who investigates those reports and how a payment-change request reaches the person authorized to verify it.",
          "Endpoint protection: get a list of supported computers and exclusions. A proposal that covers Windows and Mac workstations may leave servers, phones, tablets, or specialized equipment outside scope. Compare deployment records with your device inventory rather than assuming every device is protected.",
          "Monitoring: identify the team that reviews activity, its operating hours, and the systems it can see. Ask what triggers an escalation and what happens when a device stops reporting. “24/7 monitoring” does not by itself describe your provider’s human follow-up hours.",
          "Incident response: distinguish detection, investigation, containment, recovery, forensic work, and legal support. Ask who can isolate a workstation, disable access, contact leadership, and authorize separately billed work. Walk through a suspicious-login scenario with both your IT and security providers.",
          {
            "text": "The joint MSP security advisory calls for contracts that assign security responsibilities clearly. Include the provider’s access to your environment in that conversation: administrator accounts, multifactor authentication, access logs, and removal of access when the agreement ends.",
            "links": [
              {
                "phrase": "joint MSP security advisory",
                "to": "https://media.defense.gov/2022/May/11/2002994383/0/0/0/CSA_Protecting_Against_Cyber_Threats_to_MSPs_and_their_Customers_05112022.PDF"
              }
            ]
          },
          "Backup and staff learning: confirm the data covered by backup, retention, and restore responsibilities. Request a dated restore demonstration. For awareness training and phishing simulations, ask who schedules them and follows up on missed participation."
        ]
      },
      {
        "h": "Evidence for customer and insurer questionnaires",
        "ps": [
          "Ask a bidder to show a redacted example of how it supports one questionnaire answer. A useful example connects the question to a control, the systems in scope, a dated record, and any exceptions. It also names the technical reviewer and business approver.",
          "For example, a statement about device monitoring needs a covered-device inventory and deployment evidence for those devices. A statement about multifactor authentication needs evidence for the accounts and applications the question names. A policy or a tool invoice alone leaves implementation unverified.",
          "Agree where the records live, who updates them, how often they are reviewed, and how much questionnaire work is included. Record turnaround expectations and volume limits. Your authorized signer reviews the final answer; the vendor’s draft does not transfer responsibility for it."
        ]
      },
      {
        "h": "Helm Core and Helm Command as New Jersey examples",
        "ps": [
          "Helm is a security-focused New Jersey provider. Its clients keep their existing MSP or internal IT team for help desk, routine administration, patching, procurement, and general IT. Both Helm tiers depend on a named IT owner and written service boundaries.",
          {
            "text": "Helm Core illustrates the standardized model for organizations with 20 to 75 people. It combines managed email protection, device detection and response, supported identity protection, cloud productivity backup, awareness learning and simulations, digital-risk protection, and one monthly security report. Quarterly leadership reviews and open-ended advisory work are outside Core.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          "Core costs $125 per covered user per month with a $2,500 monthly account minimum. It includes up to two eligible Windows or Mac workstations per covered user; additional eligible workstations cost $12 each per month. Choose a 12-month initial term or a 36-month lock on the starting per-user price and minimum.",
          {
            "text": "Helm Command illustrates the program model for organizations with 75 to 250 people. It includes the covered Core stack plus a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance response, quarterly leadership reviews, an annual tabletop, and coordination with the IT owner.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command/"
              }
            ]
          },
          "Command costs $8,000 to $15,000 per month after fit and complexity review. Its initial term is 36 months, with a 6% adjustment on each service anniversary. At the overlapping 75-person boundary, the work required helps determine fit. Headcount is one input.",
          "Specialist vendor teams provide continuous monitoring and containment for covered capabilities. Helm does not staff its own 24/7 security operations center. Servers, phones, tablets, network equipment, specialized systems, forensic response, breach counsel, and hands-on remediation require separate written scope unless expressly included. Helm does not issue certifications or guarantee customer, regulatory, or insurance decisions."
        ]
      },
      {
        "h": "Which model fits your firm?",
        "ps": [
          "Consider a hypothetical 40-person accounting firm in Freehold. Its MSP runs IT, a partner owns security priorities, and the firm needs consistent protection and a monthly service report. A standardized stack may fit if the systems and exclusions are acceptable.",
          "Now consider a hypothetical 110-person professional-services firm in New Brunswick. Its operations team spends time gathering evidence, questionnaire deadlines compete with remediation, and leaders need a recurring forum to decide priorities. Program ownership may address that coordination work. These examples are illustrative, not Helm customer stories.",
          "Before choosing the larger service, name the work it would take off someone’s plate. If you cannot identify who currently maintains the risks, evidence, and roadmap, settle that responsibility explicitly. If you already have an effective internal security owner, check whether the standardized service provides what that person needs."
        ]
      },
      {
        "h": "A vendor evaluation checklist you can use in a meeting",
        "ps": [
          "Bring the same user count, locations, platforms, device inventory, critical applications, and customer deadlines to every bidder. Ask each to return a coverage list and responsibility map. Have them explain how they would handle an alert involving a system outside the standard scope.",
          "Compare support hours, monitoring hours, containment authority, reporting cadence, questionnaire limits, and who completes remediation. Request redacted reporting and evidence examples. Ask how the provider protects its own administrator access and which subcontractors participate in delivery.",
          "Check the full economics: onboarding, minimum fees, extra devices, projects, annual adjustments, renewal notice, and exit support. Record unanswered questions with an owner and due date. Resolve critical gaps before signing.",
          {
            "text": "Use the downloadable vendor evaluation scorecard to compare eight criteria on a 0 to 2 evidence scale. The same scorecard works for both models. Treat the scores as prompts for discussion and verify the contract before making a decision.",
            "links": [
              {
                "phrase": "vendor evaluation scorecard",
                "to": "/downloads/Helm_MSP_Vendor_Evaluation_Scorecard.pdf"
              }
            ]
          }
        ]
      },
      {
        "h": "What onboarding should establish",
        "ps": [
          "Before granting access, agree the users and systems in scope, administrative permissions, business contacts, and incident escalation path. Confirm how your current IT provider will participate and who can authorize changes.",
          "After deployment, reconcile the covered inventory with the planned scope, record exclusions, and check the reporting and employee-reporting paths. Agree who resolves failed deployments and when the first service report arrives. These are acceptance checks to request, not a promise of a particular deployment timeline.",
          "For program ownership, also establish the initial risk register, evidence location, roadmap, leadership-review schedule, and rules for accepting risks. Name the business sponsor who can make decisions and the IT owner who carries out assigned work."
        ]
      },
      {
        "h": "Choose a first step based on the question you need answered",
        "ps": [
          {
            "text": "Helm’s free scan checks publicly reachable email and web configuration for a domain you control, without credentials. Use it for an initial view of that public configuration. It is not an internal security assessment, a device audit, or a compliance determination.",
            "links": [
              {
                "phrase": "free scan",
                "to": "/free-scan/"
              }
            ]
          },
          "Bring the findings and your service requirements to a fit conversation. If Helm cannot responsibly confirm fit or scope from the initial conversation, separately scoped paid discovery costs $2,500 to $7,500 and is credited to the first service year if you proceed.",
          {
            "text": "For an accounting, law, insurance, or other professional-services firm evaluating AI, Secure AI Adoption consulting reviews one internal workflow, its effort and cost, and its tool and data requirements. Any pilot has a separate scope for one workflow on one approved platform. Pricing is quoted after scoping; this consulting is separate from Core and Command.",
            "links": [
              {
                "phrase": "Secure AI Adoption",
                "to": "/secure-ai-adoption/"
              }
            ]
          },
          "Keep client records and sensitive information out of an exploratory inquiry. Describe the work you need covered, who owns IT today, and the next deadline. That gives the provider a starting point for an agreed next step."
        ]
      }
    ]
  },
  {
    "slug": "managed-service-providers-new-jersey",
    "title": "Seven signs your company needs a managed service provider, and what to do next",
    "metaTitle": "Managed Service Providers in New Jersey: 7 Signs | Helm",
    "metaDesc": "Compare general MSPs and security-focused providers, check seven buying signals, and download a vendor scorecard for your New Jersey small or midsized business.",
    "date": "2026-10-06",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "organizationByline": true,
    "hideVisual": true,
    "intro": "Managed service providers help businesses run defined technology services under an ongoing agreement. For a small or midsized New Jersey business, the useful question is which work needs an accountable owner: everyday IT support, cybersecurity, or both. A slow help desk and an unanswered customer security questionnaire can point to different needs.",
    "takeaway": "Choose a general MSP when everyday IT needs ongoing ownership. Choose a security-focused provider when your IT works but protection, monitoring, or security evidence needs attention. Use a written responsibility map to make the two work together. Compare actual coverage, response duties, evidence, and total contract cost before choosing a tier.",
    "sections": [
      {
        "h": "General MSPs and security-focused providers: what is the difference?",
        "ps": [
          "A general managed service provider, or MSP, commonly handles help desk support, account administration, device management, patching, networks, and other IT operations. Some include substantial security services. Others offer only a limited baseline. The label alone does not establish coverage.",
          "A managed security service provider, or MSSP, focuses on security controls and their operation. That can include email protection, device and identity monitoring, investigation, and defined containment. A security-program service can add risk tracking, evidence upkeep, and leadership reviews. Neither label promises that someone will fix a printer or restore every business application.",
          {
            "text": "NIST’s guidance on building a cybersecurity team recommends setting clear outcomes, comparing quotes, and documenting service expectations. Start with the work your business needs, then ask each vendor to explain which team owns it.",
            "links": [
              {
                "phrase": "NIST’s guidance on building a cybersecurity team",
                "to": "https://www.nist.gov/itl/smallbusinesscyber/guidance-topic/building-your-team"
              }
            ]
          },
          "For example, a hypothetical 35-person accounting firm in Morristown may have reliable IT support but no clear owner for monitoring suspicious account activity. It may need a security provider alongside its MSP. A hypothetical 25-person engineering firm in Edison with unreliable laptops and no patching owner may need general IT management first. These are illustrative scenarios, not Helm customer stories."
        ]
      },
      {
        "h": "1. Routine IT problems keep interrupting billable work",
        "ps": [
          "Employees repeatedly lose access, wait for device repairs, or work around the same application issue. An office manager has become the unofficial IT dispatcher. Track the recurring problems, affected staff, and time lost over two weeks.",
          "Ask a general MSP for its support hours, escalation process, onsite arrangements, and responsibility for the applications you depend on. Separate response time from resolution time. A New Jersey address can make an onsite visit easier, but you still need the availability and travel charges in writing."
        ]
      },
      {
        "h": "2. Nobody can show a current list of accounts and devices",
        "ps": [
          "You cannot confidently identify which laptops reach company email, who has administrator access, or whether a departed employee still has an active session. More software will not solve an ownership gap by itself.",
          "Ask the IT owner to reconcile users, devices, administrators, and shared accounts. Agree who approves new access, who removes it, and how completion is recorded. For a seasonal tax team, include temporary staff and personally owned devices that access firm information."
        ]
      },
      {
        "h": "3. Security tools exist, but the response path is unclear",
        "ps": [
          "You pay for protection but cannot answer who reviews an alert, who can isolate a device, or who calls leadership outside business hours. Tool deployment and an operated security service are different commitments.",
          "Ask for the covered systems, monitoring hours, named monitoring provider, containment authority, escalation contacts, and exclusions. Request a walkthrough of a fictional suspicious-login event. Have the vendor explain what its team does, what your MSP does, and what requires separate authorization."
        ]
      },
      {
        "h": "4. A customer or insurer asks questions you cannot evidence",
        "ps": [
          "An application asks whether multifactor authentication covers all relevant accounts or whether devices are monitored. Your team has a policy, a sales brochure, and a screenshot from last year, but no verified answer for today’s environment.",
          "Pick the next real questionnaire and map each answer to a dated record, system boundary, owner, and known exception. A provider that maintains evidence may help when these requests recur. You still need an authorized business reviewer to approve the final submission."
        ]
      },
      {
        "h": "5. Backups have never been demonstrated through a restore",
        "ps": [
          "A successful backup notification does not tell you how quickly the business can recover a usable file or application. Ask which data is backed up, how long it is retained, who can restore it, and which systems are excluded.",
          "Arrange an authorized restore test for a representative business file and document the result. If the critical system is a tax application, server, or industry platform, check its recovery arrangements separately from Microsoft 365 or Google Workspace backup. Assign an owner and agree an acceptable interruption before discussing service tiers."
        ]
      },
      {
        "h": "6. Growth has outpaced the informal IT arrangement",
        "ps": [
          "New locations, remote staff, and more demanding customers introduce work that one helpful employee or an occasional contractor cannot reliably coordinate. Tasks remain open because each person assumes another provider owns them.",
          "Write a responsibility map for help desk, patching, account changes, monitoring, backup, incident response, and evidence. For every task, name the operator, business approver, escalation contact, and completion record. Ask bidders to mark what they include, exclude, or subcontract."
        ]
      },
      {
        "h": "7. Staff are using AI without agreed data and review rules",
        "ps": [
          "Employees are summarizing documents or drafting client work with tools the firm has never reviewed. An accounting, law, or insurance firm needs to know which inputs are permitted, who approves connected access, and who checks outputs before use.",
          {
            "text": "Helm’s Secure AI Adoption consulting reviews one internal workflow, its effort and cost, and its tool and data requirements before recommending whether to pilot. Any pilot is separately scoped for one workflow on one approved platform. Pricing is quoted after scoping, and this consulting is separate from Helm Core and Helm Command.",
            "links": [
              {
                "phrase": "Secure AI Adoption",
                "to": "/secure-ai-adoption/"
              }
            ]
          },
          "Begin with public, synthetic, or explicitly approved low-sensitivity material. Keep client records out of an exploratory inquiry. A workflow review is useful when the uncertainty concerns data access and human checks; it does not replace routine IT ownership or managed cybersecurity."
        ]
      },
      {
        "h": "Common service tiers and the responsibilities behind them",
        "ps": [
          "Tier names are vendor-specific. A common general-IT progression is reactive support, recurring managed IT, then a broader package with security or advisory services. Reactive support handles authorized individual jobs. Managed IT adds agreed ongoing tasks. A more expensive package is useful only when its written duties match a business need.",
          "Helm illustrates a different model: two security tiers alongside the existing IT owner. Helm remains a security-focused provider. Clients retain help desk, routine administration, procurement, patching, and general IT unless a separate written scope says otherwise.",
          {
            "text": "Helm Core is the standardized model for organizations with 20 to 75 people. It includes managed email protection, device detection and response, supported identity protection, cloud productivity backup, awareness learning and simulations, digital-risk protection, and a monthly report. It costs $125 per covered user per month with a $2,500 monthly account minimum.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          "Core includes up to two eligible Windows or Mac workstations per covered user. Additional eligible workstations cost $12 each per month. Clients choose a 12-month initial term or a 36-month lock on the starting per-user price and account minimum. Core does not include quarterly leadership reviews or open-ended security advisory work.",
          {
            "text": "Helm Command is the program-ownership model for organizations with 75 to 250 people. It includes the covered Core stack plus a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance response, quarterly leadership reviews, an annual tabletop, and coordination with the named IT owner.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command/"
              }
            ]
          },
          "Command costs $8,000 to $15,000 per month after fit and complexity review, with a 36-month initial term and a 6% adjustment on each service anniversary. Scope and complexity determine fit, particularly at the overlapping 75-person boundary. Specialist vendor teams provide continuous monitoring and containment for covered capabilities; Helm does not staff its own 24/7 security operations center.",
          "Servers, phones, tablets, network equipment, specialized systems, forensic response, breach counsel, and hands-on remediation require separate written scope unless expressly included. In a hypothetical 45-person Princeton accounting firm, Core could provide standardized protection while its MSP runs IT. A hypothetical 120-person Newark professional-services firm with recurring questionnaires may need Command’s program cadence. Headcount alone does not settle either decision."
        ]
      },
      {
        "h": "How to validate evidence before answering a questionnaire",
        "ps": [
          "Start with the exact question and its definitions. Identify the systems, users, locations, and date the answer covers. “MFA is enabled” is incomplete if the question also covers administrator accounts, remote access, or an application outside the email platform.",
          "Collect a current configuration export or other appropriate record, check it against the account or device inventory, and record exceptions. For backups, include the covered data and a dated restore result. For monitoring, include deployment coverage and the agreed response responsibilities. A policy states intent; operating records show what happened.",
          "Have the technical owner verify the evidence and the authorized business signer approve the answer. If a required control is absent or uncertain, use the form’s explanation process and document the gap. Keep the submitted answer, evidence reference, reviewer, and date together in a controlled location. Share only what the recipient needs through an approved channel.",
          "Helm Command supports bounded questionnaire and insurance responses from verified program evidence. The client owns final attestations. Helm does not issue certifications, audit opinions, insurer decisions, or regulatory approvals."
        ]
      },
      {
        "h": "A practical New Jersey buyer checklist and downloadable scorecard",
        "ps": [
          "Before requesting quotes, list your users, work locations, email platform, critical applications, current IT owner, next customer or insurance deadline, and the three problems you most need solved. Decide whether you need general IT, a security layer, or both.",
          "Give each shortlisted vendor the same scope. Ask for a sample redacted report, a responsibility map, an incident-escalation walkthrough, an explanation of how it protects its own access to your systems, and the full contract economics. Compare onboarding, minimums, extra devices, onsite work, separately billed projects, annual adjustments, renewal notice, and exit support.",
          {
            "text": "Download the one-page vendor evaluation scorecard (PDF). It compares eight criteria using a 0 to 2 evidence scale and includes a space for unresolved gaps and the next decision. Use one copy per vendor. A score helps organize judgment; it is not a certification or a substitute for reading the agreement.",
            "links": [
              {
                "phrase": "vendor evaluation scorecard (PDF)",
                "to": "/downloads/Helm_MSP_Vendor_Evaluation_Scorecard.pdf"
              }
            ]
          },
          {
            "text": "If you want an initial view of Helm’s free offering, start with the free scan. It checks publicly reachable email and web configuration for a domain you control without credentials. It is a limited starting check, not an internal security assessment, device audit, or compliance determination.",
            "links": [
              {
                "phrase": "free scan",
                "to": "/free-scan/"
              }
            ]
          },
          "Bring the findings and your responsibility map to a fit conversation with the relevant IT or security provider. When Helm cannot responsibly confirm fit or scope from the initial conversation, bounded paid discovery costs $2,500 to $7,500 and is credited to the first service year if you proceed. End that conversation with a named owner, written next step, and date."
        ]
      }
    ]
  },
  {
    "slug": "choose-first-ai-workflow",
    "title": "How to choose your first AI workflow",
    "metaTitle": "How to Choose Your First AI Workflow | Helm",
    "metaDesc": "Choose a repeatable internal AI task with an owner, approved inputs, a review process, and a measurable outcome before committing to a pilot.",
    "date": "2026-10-01",
    "readMin": 4,
    "lane": "All industries",
    "laneTo": "/",
    "organizationByline": true,
    "hideVisual": true,
    "consultation": {
      "title": "Discuss one internal workflow.",
      "sub": "Tell us who does the task and what takes time today. Keep client records and sensitive information out of the inquiry.",
      "label": "Discuss an AI workflow",
      "to": "/contact/?service=secure-ai-adoption"
    },
    "intro": "For a New Jersey accounting, law, insurance, or financial-services firm, a useful first AI question is specific: which recurring internal task takes time, and could an approved tool help? Pick a task you can describe and measure before buying licenses or connecting business documents.",
    "takeaway": "Choose a frequent internal task with reliable inputs, a named reviewer, and mistakes that are easy to detect and correct. Compare the complete task, including checking time, before deciding whether a pilot deserves a separate scope.",
    "sections": [
      {
        "h": "Define the task and its owner",
        "ps": [
          "Write down the starting input and the finished output. “Help with administration” is too broad. “Draft an internal onboarding checklist from the current approved procedures” gives staff something they can test. Name the person who owns those procedures and can accept or reject the draft.",
          {
            "text": "NIST’s AI Risk Management Framework Playbook recommends documenting the intended purpose, expected benefits, costs, and human oversight. For a first workflow, put those decisions on one page before discussing tools.",
            "links": [
              {
                "phrase": "NIST’s AI Risk Management Framework Playbook",
                "to": "https://airc.nist.gov/airmf-resources/playbook/map/"
              }
            ]
          },
          "Bring your existing IT provider into the discussion early. The workflow owner decides what useful work looks like; IT checks the proposed platform, accounts, permissions, and configuration. Agree who can approve changes."
        ]
      },
      {
        "h": "Measure frequency and current effort",
        "ps": [
          "Count how often the task happens in a normal month, including seasonal differences. Record several completed examples: preparation, drafting, checking, corrections, and handoff. A task that takes ten minutes twice a year has little time available to recover the effort of setup and testing.",
          "Choose an outcome you can observe. For a checklist, that might mean all required steps appear in the correct order, no unsupported steps are added, and a staff member spends less total time producing an approved version. Faster drafting alone is an incomplete measure."
        ]
      },
      {
        "h": "Check the inputs and the cost of mistakes",
        "ps": [
          "Use public, synthetic, or explicitly approved low-sensitivity material first. Confirm that procedures are current, readable, and consistent. If staff disagree about which version is authoritative, settle that before asking AI to summarize it. Document cleanup may solve more of the problem than a new tool.",
          "Ask what happens if the output is wrong and who would notice. An internal draft that an experienced manager can compare with a short source document is a better first candidate than a decision affecting a client’s money or legal rights. Keep autonomous legal, financial, medical, and hiring decisions outside this pilot.",
          {
            "text": "Assign review time to someone who understands the work. NIST’s measurement guidance calls for testing whether a system is fit for its purpose and defining acceptable performance limits. A confident-looking answer is not a quality check.",
            "links": [
              {
                "phrase": "NIST’s measurement guidance",
                "to": "https://airc.nist.gov/airmf-resources/playbook/measure/"
              }
            ]
          }
        ]
      },
      {
        "h": "Hypothetical example: an internal checklist",
        "ps": [
          "Imagine a 45-person New Jersey accounting firm that regularly adapts internal onboarding checklists for different staff roles. Its operations manager has approved procedure documents with no client records. The proposed test asks one approved platform to draft a role-specific checklist from those documents.",
          "The manager checks every instruction against the source, marks omissions and invented steps, and records the minutes spent preparing, reviewing, and correcting each draft. Nothing goes to new staff until approved. The example describes a possible test, not a Helm client or a measured result."
        ]
      },
      {
        "h": "Decide whether a pilot is justified",
        "ps": [
          "A pilot may add little value when the task rarely occurs, the inputs change constantly, or checking the output takes as long as doing the work. Stop before testing if there is no accountable reviewer, no approved data set, or no way to recognize an unacceptable result. A standard template or a clearer procedure may be sufficient.",
          {
            "text": "Helm’s Secure AI Adoption assessment reviews one workflow, its effort and cost, and the tool and data requirements before recommending whether to pilot. Any pilot is separately scoped for one workflow on one approved platform, with pricing quoted after scoping. Managed cybersecurity remains Helm’s primary offering.",
            "links": [
              {
                "phrase": "Secure AI Adoption",
                "to": "/secure-ai-adoption/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "ai-access-business-documents",
    "title": "What to check before giving AI access to business documents",
    "metaTitle": "AI Access to Business Documents: What to Check | Helm",
    "metaDesc": "Review document permissions, client confidentiality, retention, training use, connected services, and human checks before approving an AI workflow.",
    "date": "2026-10-01",
    "readMin": 4,
    "lane": "All industries",
    "laneTo": "/",
    "organizationByline": true,
    "hideVisual": true,
    "consultation": {
      "title": "Discuss one internal workflow.",
      "sub": "Tell us who does the task and what takes time today. Keep client records and sensitive information out of the inquiry.",
      "label": "Discuss an AI workflow",
      "to": "/contact/?service=secure-ai-adoption"
    },
    "intro": "Before an AI tool can summarize a folder, someone must decide whether it should have access to that folder. For a professional-services firm, the answer depends on the documents, the task, the people using the tool, and the services receiving the data. A business subscription alone does not approve the use.",
    "takeaway": "Review access, confidentiality, storage, model-training terms, and connected services separately. Start with approved low-sensitivity material and require a person to check the output before it is used.",
    "sections": [
      {
        "h": "Define the documents and permitted use",
        "ps": [
          "Name the workflow, document owner, intended users, and expected output. Identify confidential client information, personal information, and material subject to contractual restrictions. Have the responsible person confirm what the firm is allowed to process and share. This decision should happen before an upload or connection.",
          "For example, a law firm could first test an internal checklist using approved office procedures with no matter files. An insurance agency could use synthetic correspondence instead of policyholder records. Removing a client’s name may leave identifying facts elsewhere, so do not treat a quick redaction as automatic approval."
        ]
      },
      {
        "h": "Review permissions with the existing IT provider",
        "ps": [
          {
            "text": "Microsoft’s Copilot privacy documentation says it surfaces organizational information the individual user has permission to view. That makes existing access important: an overly broad folder permission can expose material to someone who should not see it, even when the AI tool follows that permission.",
            "links": [
              {
                "phrase": "Microsoft’s Copilot privacy documentation",
                "to": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy"
              }
            ]
          },
          "Ask your IT provider to inspect group membership, shared links, guest access, and the permissions requested by each connection. Prefer the smallest approved document set that can answer the question. Confirm whether a connection can only read or can also create, edit, send, or delete information.",
          "Write down who approves access and who removes it when the test ends or a staff member leaves. Test with a normal staff account, not only an administrator’s account."
        ]
      },
      {
        "h": "Separate training terms from retention",
        "ps": [
          {
            "text": "Microsoft states that prompts, responses, and information accessed through Microsoft Graph are not used to train foundation models. The same documentation says Copilot stores interaction data, including prompts and responses. “Not used for model training” does not mean “not stored.”",
            "links": [
              {
                "phrase": "The same documentation",
                "to": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy"
              }
            ]
          },
          {
            "text": "Microsoft’s retention documentation also explains that retention policies and holds can affect permanent deletion. Deleting an item from the visible chat history is not sufficient evidence that every retained copy is gone.",
            "links": [
              {
                "phrase": "Microsoft’s retention documentation",
                "to": "https://learn.microsoft.com/en-us/purview/retention-policies-copilot"
              }
            ]
          },
          "For the exact product and license under consideration, record what is stored, where it is processed, who can retrieve it, how long it remains, and what deletion does. Check files, prompts, outputs, and logs separately. Ask IT to verify which controls your subscription actually includes and how they are configured."
        ]
      },
      {
        "h": "Check connected services and human review",
        "ps": [
          {
            "text": "Connections, agents, and web search can introduce additional data handling. Microsoft’s web-search documentation says Copilot can send generated queries to Bing, informed by the prompt and, in some circumstances, document content. Review this setting even if the intended task only concerns internal documents.",
            "links": [
              {
                "phrase": "Microsoft’s web-search documentation",
                "to": "https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access"
              }
            ]
          },
          {
            "text": "Microsoft also directs customers to review an agent’s privacy statement and terms. Record each approved connection and its recipient, purpose, permissions, and deletion process. Leave unnecessary connections disabled.",
            "links": [
              {
                "phrase": "an agent’s privacy statement and terms",
                "to": "https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy"
              }
            ]
          },
          "Assign someone to compare outputs with the source documents. A summary that drops an exception, misstates a deadline, or combines two clients’ details can be unusable even if the access settings are correct. Keep drafts internal until that review is complete."
        ]
      },
      {
        "h": "Record the approval before testing",
        "ps": [
          "Keep a short record of the approved platform and license, permitted documents, users, reviewer, retention settings, and stop conditions. Revisit it when a connection, permission, vendor term, or workflow changes. Begin with public, synthetic, or explicitly approved low-sensitivity data; confidential client files are not the default.",
          {
            "text": "Helm’s Secure AI Adoption assessment can review these questions alongside your existing IT provider before recommending a pilot. Any pilot has a separate scope for one workflow on one approved platform. Deliverables and pricing are agreed after scoping; company-wide rollout and ongoing support require separate scoping.",
            "links": [
              {
                "phrase": "Secure AI Adoption",
                "to": "/secure-ai-adoption/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "measure-ai-time-savings",
    "title": "Is AI saving your team time? Count the checking and corrections",
    "metaTitle": "Measuring AI Time Savings: Review and Corrections | Helm",
    "metaDesc": "Compare the whole task with and without AI, including preparation, checking, corrections, software costs, and maintenance. Includes a hypothetical example.",
    "date": "2026-10-01",
    "readMin": 4,
    "lane": "All industries",
    "laneTo": "/",
    "organizationByline": true,
    "hideVisual": true,
    "consultation": {
      "title": "Discuss one internal workflow.",
      "sub": "Tell us who does the task and what takes time today. Keep client records and sensitive information out of the inquiry.",
      "label": "Discuss an AI workflow",
      "to": "/contact/?service=secure-ai-adoption"
    },
    "intro": "A draft produced in seconds can still take twenty minutes to check. Before renewing AI licenses or expanding a pilot, measure the time required to produce usable work. For a firm with an existing IT provider, the comparison should include staff review, software fees, and the effort needed to keep the workflow working.",
    "takeaway": "Compare complete, accepted outputs at the same quality standard. Record preparation, checking, corrections, fees, and maintenance. Time freed for other work is useful capacity; it becomes cash savings or revenue only when a separate business change produces that result.",
    "sections": [
      {
        "h": "Measure the existing task first",
        "ps": [
          "Choose one recurring internal task and define when it is finished. Record several examples without AI, including difficult cases. Count time spent finding source material, doing the work, checking it, correcting it, and handing it over. Use the same acceptance criteria during the pilot.",
          {
            "text": "NIST’s AI RMF Playbook calls for comparing expected benefits and costs with appropriate benchmarks. Your own completed work provides a more relevant starting point than a vendor’s demonstration.",
            "links": [
              {
                "phrase": "NIST’s AI RMF Playbook",
                "to": "https://airc.nist.gov/airmf-resources/playbook/map/"
              }
            ]
          },
          "If one person prepares the work and a partner reviews it, record both people’s minutes and agreed labor-cost assumptions. Keep elapsed waiting time separate from active staff time. A quicker response does not necessarily use fewer paid hours."
        ]
      },
      {
        "h": "Hypothetical worked example: twenty internal checklists",
        "ps": [
          "This illustration is not a customer result, a Helm quote, or a vendor price. Assume a firm produces twenty internal checklists per month from approved procedures. Without AI, each takes thirty minutes, including its normal review. At an assumed loaded labor cost of $40 per hour, ten hours of work cost $400.",
          "With AI, assume each checklist needs six minutes to prepare inputs, two minutes to generate and handle the draft, eight minutes to review, and four minutes to correct. That is twenty minutes per accepted checklist, or 400 minutes for twenty checklists.",
          "Add sixty minutes per month to update instructions and test changes. Total staff time is now 460 minutes, or seven hours and forty minutes. At the same $40 hourly assumption, labor costs $306.67. An assumed $30 monthly software allocation brings the recurring process cost to $336.67, compared with $400 before AI.",
          "The difference is two hours and twenty minutes of staff capacity and $63.33 in modeled monthly process cost. If setup also requires a one-time $180 of effort, the first month costs $516.67, which is $116.67 more than the original process. Include any actual consulting or additional licensing fees separately."
        ]
      },
      {
        "h": "Check what the numbers leave out",
        "ps": [
          "Record failed attempts and drafts that staff abandon. Otherwise, measuring only the successful outputs overstates the benefit. Check whether review shifted from an administrator to a more expensive partner, whether usage charges vary, and whether maintenance takes longer as source documents change.",
          "The example’s $63.33 is not automatically money back in the bank. Salaried staff may cost the same after the change. Cash savings require a reduction in an actual expense, such as overtime. Additional revenue requires demand, available billable work, and work that is completed and paid for. Identify how the freed time will be used before assigning revenue to it."
        ]
      },
      {
        "h": "Agree when to continue, change, or stop",
        "ps": [
          {
            "text": "NIST’s measurement guidance recommends defining acceptable performance limits and checking results over time. Set the criteria before testing so the decision does not depend on one impressive draft.",
            "links": [
              {
                "phrase": "NIST’s measurement guidance",
                "to": "https://airc.nist.gov/airmf-resources/playbook/measure/"
              }
            ]
          },
          "Continue when accepted outputs meet the agreed quality standard, approved data handling remains intact, and total effort and cost justify continued use across representative tasks. Change the instructions, source material, or task boundary when a specific, fixable problem explains the result, then test again.",
          "Stop when material mistakes remain hard to detect, review consumes the expected time gain, costs exceed the agreed limit, or staff need unapproved data or access to make the task work. Keep a usable manual procedure."
        ]
      },
      {
        "h": "Scope the measurement before expanding",
        "ps": [
          {
            "text": "Helm’s Secure AI Adoption assessment documents one workflow’s current effort and cost before recommending whether to pilot. A separately scoped pilot can compare output quality, checking time, corrections, and software costs on one approved platform. Pricing follows scoping. Production integrations, wider rollout, and ongoing support need separate scopes.",
            "links": [
              {
                "phrase": "Secure AI Adoption",
                "to": "/secure-ai-adoption/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "slug": "mfa-methods-compared",
    "title": "MFA methods compared: SMS, TOTP, push, and passkeys",
    "metaTitle": "MFA Compared: SMS, TOTP, Push, and Passkeys | Helm",
    "metaDesc": "Compare MFA phishing resistance, daily use, and account recovery. Plan SMS, TOTP, push, passkeys, and security keys with your existing IT provider.",
    "date": "2026-07-17",
    "updated": "2026-10-01",
    "readMin": 5,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "An authenticator app can generate a code, request approval, or hold a passkey. Those are different sign-in methods with different protections. When reviewing MFA with your IT provider, ask which method is enforced on each account, how people recover access, and whether weaker alternatives remain available.",
    "takeaway": "SMS, authenticator-generated TOTP codes, and push approvals with number matching are not phishing-resistant. Passkeys and FIDO2 security keys provide phishing-resistant sign-in. Prioritize administrators and payment approvers, and test recovery before expanding the rollout.",
    "consultation": {
      "title": "Review your account protection.",
      "sub": "Discuss MFA coverage, recovery, and responsibilities with Helm and your existing IT provider.",
      "label": "Discuss account protection",
      "to": "/contact/?intent=findings-call&src=article%20mfa-methods-compared"
    },
    "sections": [
      {
        "h": "SMS codes",
        "ps": [
          {
            "text": "SMS sends a one-time code to a phone number. It is familiar and does not require an authenticator app, but a fake sign-in page can capture and relay the code. Microsoft’s authentication overview distinguishes these phishable methods from passkeys and other phishing-resistant options.",
            "links": [
              {
                "phrase": "Microsoft’s authentication overview",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/overview-authentication"
              }
            ]
          },
          "SMS also depends on control of the phone number. A lost phone, changed number, or fraudulent number transfer can create access or security problems. Ask IT how recovery works before keeping SMS as a fallback. For administrators and payment approvers, plan a stronger supported method rather than relying on text messages."
        ]
      },
      {
        "h": "Authenticator-generated TOTP codes",
        "ps": [
          {
            "text": "Time-based one-time passwords, or TOTP codes, are generated by an app from a registered secret and the time. Microsoft’s OATH documentation describes this separately from push notifications. Generating a code does not require delivery over the mobile network, but entering it into a phishing site can still let an attacker relay it. TOTP is not phishing-resistant.",
            "links": [
              {
                "phrase": "Microsoft’s OATH documentation",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-oath-tokens"
              }
            ]
          },
          "The user opens the app and types the current code. Push fatigue does not describe this process: there is no approval notification to accept. When replacing a phone, follow the app and account provider’s supported transfer or recovery procedure. Have IT verify recovery before the old device is erased, and protect any recovery codes as credentials."
        ]
      },
      {
        "h": "Push approvals, including number matching",
        "ps": [
          "Push authentication asks a user to approve a sign-in on a registered device. Repeated unsolicited prompts can pressure someone into approving an attacker’s attempt. Staff should reject and report requests they did not initiate.",
          {
            "text": "Number matching requires the user to match the sign-in request with a number, reducing accidental approval. Microsoft’s number-matching guidance describes the current Authenticator behavior, including differences for sign-ins on the same phone. Test the actual apps your staff use.",
            "links": [
              {
                "phrase": "Microsoft’s number-matching guidance",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match"
              }
            ]
          },
          "Number matching is not phishing-resistant: a phishing interaction can still relay the sign-in process. Push is convenient when the registered phone and its connection are available, but lost phones or unavailable notifications need a documented recovery path. Re-register replacement devices through a verified process."
        ]
      },
      {
        "h": "Phishing-resistant passkeys and FIDO2 security keys",
        "ps": [
          {
            "text": "Passkeys use cryptographic credentials bound to the legitimate service, so a lookalike website cannot collect a reusable code. Microsoft documents both device-bound passkeys, including FIDO2 security keys, and synced passkeys. The provider and your organization’s policy determine which options are available.",
            "links": [
              {
                "phrase": "Microsoft documents both device-bound passkeys",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passkeys-fido2"
              }
            ]
          },
          "A person typically unlocks a passkey with a device PIN or biometric check. A separate security key can be carried between compatible devices. Confirm browser, device, and application support, including any USB or NFC requirements. This protects the sign-in; it does not make every action after sign-in safe.",
          "Plan for lost keys and replaced devices. Device-bound credentials may need a separately registered backup; synced credentials depend on the passkey provider’s account and recovery controls. Agree with IT which backup methods are acceptable so recovery does not quietly reintroduce a weak sign-in route."
        ]
      },
      {
        "h": "Roll out with your existing IT provider",
        "ps": [
          {
            "text": "Inventory accounts and authentication policies with your IT provider. Prioritize administrator access and people who approve payments. Microsoft’s deployment guidance recommends planning and piloting phishing-resistant authentication; test enrollment, everyday sign-in, and recovery on representative devices before broad enforcement.",
            "links": [
              {
                "phrase": "Microsoft’s deployment guidance",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-plan-prerequisites-phishing-resistant-passwordless-authentication"
              }
            ]
          },
          "Budget staff time for enrollment and help-desk recovery. Agree who verifies a locked-out employee’s identity, who can reset a method, and how emergency administrator access is controlled and tested. Record exceptions and remove weaker methods when the stronger method and recovery process are ready.",
          {
            "text": "Helm Core includes supported identity protection as part of managed cybersecurity. Discuss the division of responsibilities with Helm and your current IT provider before changing account policies.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          }
        ]
      },
      {
        "h": "What the public scan can and cannot show",
        "ps": [
          {
            "text": "Helm’s free public domain scan checks public email and web configuration: SPF, common DKIM selectors, DMARC, MX, DNSSEC, HTTPS certificate information, MTA-STS, TLS-RPT, and limited SMTP signals. It does not sign in to your systems or verify internal MFA enrollment, enforcement, or coverage. That requires an authorized account and policy review with your IT provider.",
            "links": [
              {
                "phrase": "free public domain scan",
                "to": "/free-scan/"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    slug: 'm365-security-baseline',
    title: 'The Microsoft 365 Security Baseline You Can Set This Week',
    metaDesc:
      'A practical Microsoft 365 security checklist for small and medium-sized businesses: MFA everywhere, no legacy authentication, separate admin accounts, and the forwarding rules attackers rely on after a breach.',
    date: '2026-07-16',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'A stolen Microsoft 365 password can expose years of email, give an attacker a convincing way to impersonate your staff, and let them quietly forward future messages outside the company. Many of the settings that prevent this are already included in the license you pay for. They just need to be configured and checked.',
    sections: [
      {
        h: 'Lock the front door first',
        ps: [
          'Start with multi-factor authentication for the people who can access your mail. Review the owner’s account, administrator accounts, vendor accounts, and the users with delegated access to shared mailboxes. Keep direct sign-in blocked for shared mailbox accounts; people should access them through their own authorized accounts.',
          {text: 'Legacy authentication does not support MFA. Have your IT owner verify that legacy authentication is blocked in your tenant and check for any applications or devices that still depend on it before changing settings. Microsoft security defaults include this protection and are enabled on new tenants by default. More complex environments may use Conditional Access instead. Review the current configuration rather than assuming your tenant is unprotected. This complements the managed email protection in Helm Core.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
          'Separate your admin accounts from the mailbox someone checks every day. An account with global admin rights should not also be the account that opens attachments and clicks links, because compromising one compromises both.',
        ],
      },
      {
        h: 'Close what attackers do after they get in',
        ps: [
          'Turn on external-sender tagging so every message from outside the company carries a visible warning. It is a small banner, and it is one of the few controls that helps on the exact kind of email that slips past filtering: a message from a real but unfamiliar outside address.',
          'Review mail-forwarding rules on a schedule, not just after something goes wrong. A common move after a mailbox compromise is a silent auto-forward rule that sends every future message to an outside address, quietly, with no further sign-in needed. Most business owners have never checked whether one exists in their own tenant.',
        ],
      },
      {
        h: 'Make your own domain hard to fake',
        ps: [
          'SPF, DKIM, and DMARC are DNS records, not Microsoft settings, but they belong on the same checklist because they determine whether someone can send email that looks like it came from you. Without them in place, your own domain can be used against your customers and vendors, not just against you.',
          {text: 'A free scan of your domain usually checks all three in about a minute and tells you, in plain English, what is missing.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Start with MFA, disable legacy authentication, separate everyday and administrator accounts, and check for forwarding rules. Then review the public records that help stop people from impersonating your domain.',
  },
  {
    slug: 'sprs-score-explained',
    metaTitle: "SPRS Score Explained: Scoring and Supporting Evidence | Helm",
    ctaMode: 'book-cmmc',
    title: 'SPRS Score Explained: What the Number Means and How to Support It',
    metaDesc:
      'How the NIST 800-171 DoD Assessment Methodology produces an SPRS score from -203 to 110, who can access it, and what evidence should support it.',
    date: '2026-07-15',
    updated: '2026-08-18',
    readMin: 6,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'An SPRS score can affect whether a defense contractor is eligible for covered work. If the number cannot be traced back to the systems assessed and the evidence reviewed, the company may struggle to support it when a contracting officer, customer, or government reviewer asks. A defensible score starts with a clear boundary and a calculation another qualified person can reproduce.',
    sections: [
      {
        h: 'What the score actually measures',
        ps: [
          'The NIST SP 800-171 DoD Assessment Methodology starts at 110 and subtracts the assigned value of each requirement that has not been implemented. The score can fall as low as negative 203 because some unmet requirements subtract three or five points while others subtract one.',
          'The score is a summary of implementation against the assessment methodology. It is not a general security grade and it does not prove that every system in the company was included. The system boundary and the System Security Plan determine what the number actually describes.',
        ],
      },
      {
        h: 'Who can access the score',
        ps: [
          'DFARS requires contracting officers to verify that a current summary-level score is posted for covered contractor information systems relevant to an award. Authorized representatives of the contractor can view their own score, and authorized DoD personnel can access posted assessment results.',
          'A prime contractor does not automatically receive unrestricted access to every subcontractor score. It may still require confirmation that a current assessment exists before awarding a covered subcontract. Treat the exact solicitation, contract, and flowdown language as the controlling instruction.',
        ],
      },
      {
        h: 'Why an honest number matters more than a high one',
        ps: [
          'A low, well-supported score gives the company an accurate starting point and an owned remediation plan. An inflated score creates a mismatch between the representation and the evidence.',
          'In a 2025 settlement, the Department of Justice said MORSECORP had submitted a score of 104 before a later third-party review calculated negative 142. The company agreed to pay $4.6 million to resolve False Claims Act allegations tied to cybersecurity requirements. That case is a useful warning: document the actual boundary and calculation, and do not treat a target score as the answer you need to reach on paper.',
        ],
      },
      {
        h: 'What should be in the assessment file',
        ps: [
          'Keep the current System Security Plan, a diagram or inventory defining the assessed boundary, control-by-control working papers, links to evidence, the calculation worksheet, the completion date, and the expected date for implementing unmet requirements. If more than one SSP exists, keep the score tied to the correct system and CAGE codes.',
          'The file should let another qualified reviewer follow the same methodology and understand why each requirement was marked met or not met. A screenshot without context or a policy without operating evidence is rarely enough by itself.',
        ],
      },
      {
        h: 'How to raise it without guessing',
        ps: [
          {text: 'Start with a gap assessment scored against all 110 controls. It shows which requirements are supported, which are not, and which gaps have the largest effect on the score.', links: [{phrase: 'gap assessment', to: '/helm-command'}]},
          'Use the methodology to understand which unmet requirements subtract the most points, but do not optimize the number while ignoring the system boundary or lower-weight requirements. Remediate, collect the new evidence, recalculate, and update the score through the authorized process when the assessment record changes.',
        ],
      },
    ],
    takeaway:
      'Calculate the score from a documented system boundary and keep the working papers that support every deduction. When a control or the environment changes, update the evidence and the assessment record instead of leaving an old number in place.',
  },
  {
    slug: 'password-managers-small-teams',
    metaTitle: "Password Managers vs Browser Passwords for Small Teams | Helm",
    title: 'Password Managers for Small Teams: What a Vault Adds Over Browser-Saved Passwords',
    metaDesc:
      'Why password reuse is the most common small-team security failure, what a shared password vault adds beyond browser-saved logins, and the order to roll one out across your team.',
    date: '2026-07-14',
    updated: '2026-08-18',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Shared passwords often end up in a spreadsheet, a browser, or a message thread because the team needs a quick way to get into an account. The trouble appears when someone leaves or one reused password is exposed in an unrelated breach. The company then has to find every account that person knew before the access can be closed.',
    sections: [
      {
        h: 'How one reused password opens several accounts',
        ps: [
          'Password reuse across services is the single most common way a small team\'s accounts get compromised. Not a sophisticated attack, just the same password used on the company email, a vendor portal, and a personal account somewhere else.',
          'The mechanism is called credential stuffing. Attackers take lists of usernames and passwords leaked from breaches that have nothing to do with your business, then automatically try those same combinations against email, banking, and admin logins everywhere else. A breach at a site you have never heard of can unlock an account you actually care about.',
        ],
      },
      {
        h: 'What a vault adds that browser-saved passwords do not',
        ps: [
          'Saving passwords in the browser beats reusing the same one everywhere, but it stops at the individual. It does not solve the problem every small team has: shared logins for the utility portal, the company social accounts, and an admin console that more than one person needs into.',
          'Without a shared vault, those logins tend to live in a spreadsheet or a sticky note, and whoever set them up is often the only one who remembers where. A team vault adds access control over who can see which credential, instant revocation the day someone leaves instead of a slow password-reset scramble, generated unique passwords instead of reused ones, and flagging of passwords that are weak or already reused elsewhere.',
          'That revocation piece matters more than it sounds. Without a vault, a departed employee routinely keeps working access to shared accounts long after their last day, simply because nobody remembered every login they knew.',
        ],
      },
      {
        h: 'Master password, MFA, and the order to roll it out',
        ps: [
          'The vault is only as strong as its master password, so make it a long passphrase, several unrelated words strung together, rather than a short password with a symbol swapped in. Pair that master password with MFA on the vault itself.',
          'A vault does not replace MFA on the underlying accounts. Turn MFA on for email, banking, and admin logins the same as you would without a vault; the vault manages the password, not the second factor.',
          {text: 'Roll it out in order rather than all at once: admin and financial accounts first, since those carry the most risk, then the shared credentials living in spreadsheets and sticky notes, then everyone else\'s individual logins. Pairing the rollout with a short explanation of how credential stuffing actually works, the kind of thing covered in ongoing security awareness training, cuts down on people quietly going back to old habits.', links: [{phrase: 'ongoing security awareness training', to: '/helm-core'}]},
          {text: 'After the passwords and shared accounts are under control, check the public email records that affect domain impersonation. The free scan usually reports on those records in about a minute.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'A team vault makes it possible to use a different password for every service and remove someone from shared accounts in one place. Start with administrator, financial, and shared logins before moving the rest of the team.',
  },
  {
    slug: 'cmmc-level-1-vs-level-2',
    metaTitle: "CMMC Level 1 vs Level 2: Which Do You Need? | Helm",
    ctaMode: 'book-cmmc',
    title: 'CMMC Level 1 vs Level 2: Which One Does Your Shop Actually Need?',
    metaDesc:
      'CMMC Level 1 and Level 2 require very different things. How to tell which one applies to your shop based on your contracts, not your headcount.',
    date: '2026-07-13',
    updated: '2026-08-18',
    readMin: 6,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'Choosing the wrong CMMC level can send a shop down two expensive paths: building controls it was never asked to maintain, or affirming readiness for a contract while important requirements remain unmet. The answer comes from the contract clauses and the information the shop handles, not from its headcount.',
    sections: [
      {
        h: 'The question that decides everything: FCI or CUI?',
        ps: [
          'Federal Contract Information (FCI) is the everyday paperwork of doing business with the government: purchase orders, quotes, basic correspondence about a contract that is not intended for public release. If that is the extent of what crosses your desk, you are in FCI territory.',
          'Controlled Unclassified Information (CUI) is a different tier: drawings marked with a distribution statement, engineering specs, technical data packages, anything the government has identified as needing safeguarding beyond FCI. If a prime emails you a marked drawing or a technical data package, you are now handling CUI, whether or not anyone said so out loud.',
        ],
      },
      {
        h: 'What each level actually requires',
        ps: [
          'Level 1 covers the 15 basic safeguarding requirements of FAR 52.204-21. It is self-assessed annually, with an executive affirmation that the requirements are in place. There is no third-party assessor at Level 1.',
          'Level 2 covers 110 requirements in NIST SP 800-171 Revision 2. Under the Phase I rules now in force, Level 2 uses a self-assessment every three years with an annual affirmation. The Department suspended the planned Phase II expansion on July 13, 2026, including the broader use of third-party Level 2 certification requirements. It says Revision 2 will continue to be enforced through self-assessments and selected government-led assessments during the review.',
          'The jump from Level 1 to Level 2 is not a small increment. Level 2 requires a defined system boundary, a current System Security Plan, control-level evidence, a score, and ongoing ownership of the requirements that apply to the CUI environment.',
        ],
      },
      {
        h: 'How to tell which one applies to you',
        ps: [
          'The clauses in your contract tell you directly: look for DFARS 252.204-7012, 7019, 7020, and 7021. Their presence, and how they are flowed down, points to whether you are being asked to handle CUI or only FCI.',
          'When the contract language is ambiguous, ask your prime in writing which category your work falls into and keep the answer on file. Do not guess, and do not assume.',
          {text: 'Do not assume Level 1 just because you are a small shop. Company size has no bearing on the requirement: a ten-person shop machining a part from a marked drawing is handling CUI just like a thousand-person prime. A gap assessment against the full control set tells you where you actually stand before an assessor does.', links: [{phrase: 'small shop', to: '/manufacturing'}, {phrase: 'gap assessment', to: '/helm-command'}]},
        ],
      },
      {
        h: 'What to collect before a readiness review',
        ps: [
          'Bring the relevant solicitation and contract clauses, every cybersecurity flowdown received from a prime, representative files or markings, a list of systems that store or transmit the information, and any current SPRS assessment or System Security Plan. That is enough to start a boundary and applicability discussion without pretending the answer comes from a generic checklist.',
          'Record the conclusion and the person or contract source that supports it. If the prime clarifies the information category or required level, keep that written answer with the contract file so the same question does not have to be reconstructed at the next bid or renewal.',
        ],
      },
    ],
    takeaway:
      'Review the clauses and determine whether the work involves FCI or CUI. If the contract is unclear, get the prime contractor’s answer in writing before deciding which requirements to assess.',
  },
  {
    slug: 'invoice-fraud-red-flags',
    metaTitle: "Invoice Fraud Red Flags: Check Before You Pay | Helm",
    title: 'Invoice Fraud Red Flags: What to Check Before You Pay a Vendor',
    metaDesc:
      'The red flags that separate a legitimate vendor payment change from an invoice fraud attempt, and the callback habit that catches it every time.',
    date: '2026-07-12',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Invoice fraud succeeds when a familiar vendor appears to change its banking details and the payment goes out before anyone calls to confirm. The invoice may use the right amount, project, logo, and contact name. One altered account number is enough to send the money to a criminal.',
    sections: [
      {
        h: 'Why this is worth ten minutes of your attention',
        ps: [
          'Vendor impersonation and business email compromise are consistently among the costliest categories of internet crime reported to the FBI each year. The exact numbers move year to year, but the pattern does not: this is one of the most common ways businesses lose money to fraud, not a rare or exotic scam.',
          'The classic version targets a relationship you already have. An email arrives that looks like it is from a vendor you already pay, asking you to update their banking details before the next invoice goes out.',
        ],
      },
      {
        h: 'The red flags, in order of how often they show up',
        ps: [
          'New banking details on an existing vendor relationship are the strongest warning by themselves. Urgency, late-fee pressure, a new contact, a one-character change in the sender domain, or a reply-to address that differs from the display name give you more reasons to stop the payment and verify the request.',
          'One more flag matters as much as the others: any request to keep the change quiet, skip your normal approval process, or move fast because something is time-sensitive. Legitimate vendors do not ask you to bypass your own controls.',
        ],
      },
      {
        h: 'Confirm the change before the money moves',
        ps: [
          'Call back a known number from your own records, never a number in the email itself, before changing any payment details. This single habit defeats nearly every version of this scam, because the fraudster cannot answer a call placed to the vendor\'s real office.',
          'Add dual approval above a set dollar threshold so no single person can push a payment change through alone, even under pressure. Between the callback and the second set of eyes, both the easy version of this scam and the more convincing one get caught.',
        ],
      },
      {
        h: 'Protect your own name too',
        ps: [
          {text: 'The same scam runs in the other direction: someone spoofs your domain and sends a fake invoice or a fake banking change to your own customers. DMARC and proper email authentication make your domain much harder to fake, which protects your customers and your reputation at the same time.', links: [{phrase: 'DMARC and proper email authentication', to: '/helm-core'}]},
          {text: 'A free scan of your domain checks whether the related public authentication records are published and how they are configured.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Treat every change to vendor banking details as unverified until someone calls a known number from the company’s existing records. Add a second approver for larger payments and protect your own domain from being used in the same scam.',
  },
  {
    slug: 'what-a-soc-actually-does',
    metaTitle: "What a SOC Does: Monitoring, Investigation, and Response | Helm",
    title: 'What a SOC Actually Does (and Why an Alert Is Not the Same as a Response)',
    metaDesc:
      'What a security operations center actually does around the clock, why EDR software alone still needs a human behind it, and the questions to ask before buying a managed SOC subscription.',
    date: '2026-07-11',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'Security software can raise an alert at 2 a.m., but the alert does not investigate itself. If nobody reviews it until the office opens, an attacker may have hours to spread, steal data, or disable systems. A security operations center provides the people who investigate those alerts and take action around the clock.',
    sections: [
      {
        h: 'An alert is not the same as a response',
        ps: [
          'EDR software detects suspicious activity and raises an alert. A person still needs to decide whether the alert is harmless or an active attack and then take the appropriate action. That decision may be needed in the afternoon, overnight, or during a holiday.',
          'A SOC is the team that does that watching, triaging, and containing. Left alone, an EDR alert just sits in a dashboard until someone with the right access opens it, reads it, and acts.',
        ],
      },
      {
        h: 'Why continuous coverage is hard to build yourself',
        ps: [
          'Watching alerts around the clock is not a part-time job for one person. It takes multiple analysts covering different shifts so someone is always awake and paying attention, which is a staffing commitment that is simply out of reach for most small and medium-sized businesses on their own.',
          'Attackers know this, and they plan around it. Nights, weekends, and holidays are not random timing, they are deliberately chosen because fewer people are watching. Attackers also commonly sit quietly inside a network for a while before doing anything visible, which is exactly the kind of activity that only shows up if someone is actually looking.',
        ],
      },
      {
        h: 'What a managed SOC actually buys you',
        ps: [
          'A managed detection and response service uses one security operations team to monitor many customers. That gives a smaller business round-the-clock coverage without hiring enough analysts to staff every shift itself.',
          {text: 'Helm Core provides 24/7 managed detection and response for covered devices, giving a smaller business access to human analysts without having to staff overnight and weekend shifts itself.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
          'Before signing with any provider, ask who investigates an alert and whether that team can isolate an infected machine or only send a notification. Also ask how and when your company will be contacted when the activity is real.',
          {text: 'A free scan of your domain can identify public email-security gaps worth discussing before you compare broader monitoring services.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Before buying monitoring, ask who investigates an alert, whether that team can isolate a device, and how your company will be contacted. Those answers determine whether you are buying a response or another dashboard to check.',
  },
  {
    slug: 'cyber-insurance-claim-denied',
    metaTitle: "Why Cyber Insurance Claims Get Denied | Helm",
    ctaMode: 'book',
    title: 'Why Cyber Insurance Claims Get Denied (and How to Keep Yours Payable)',
    metaDesc:
      'Cyber insurance claims get denied for reasons that trace back to the application, not the incident. The four common denial paths and how to keep your policy payable.',
    date: '2026-07-09',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'A business usually discovers a problem with its cyber-insurance application after an incident, when the carrier compares the answers on the form with the controls that were actually running. If MFA, backups, or training were overstated, the company can face a denied claim or even lose the policy when it needs the coverage most.',
    sections: [
      {
        h: 'The four common denial paths',
        ps: [
          'Application misrepresentation happens when an answer on the questionnaire does not match reality when the form is signed. A second problem occurs when a control was in place at renewal but stopped working before the incident.',
          'Policies also contain reporting deadlines and exclusions. Missing a notice window can jeopardize coverage, and some losses, including specific fraud scenarios, may be outside the policy from the start.',
          'Application misrepresentation is not hypothetical. In Travelers v. International Control Services (2022), the carrier sought rescission of the policy over a misrepresentation about multi-factor authentication on the application, and the policy was rescinded by agreement. The lesson generalizes well beyond that one case: what you wrote on the form has to be true.',
        ],
      },
      {
        h: 'When a control changes after renewal',
        ps: [
          'It is easy to treat the application as a snapshot: true on the day you signed it, close enough after that. Carriers do not see it that way. The answers are warranties that are expected to remain true for the entire policy year, not a one-time disclosure.',
          'A control that was working at renewal but stopped months later can still create a coverage problem. At claim time, the carrier will look at whether the control was operating when the incident happened, not only when the application was signed.',
        ],
      },
      {
        h: 'Keep it payable',
        ps: [
          'Keep an evidence folder, not just a memory of good intentions: training logs, backup-test records, MFA screenshots, dated and organized. When a claim is filed, this folder is what turns "we believe we were compliant" into proof.',
          {text: 'Carriers may check technical basics such as public email authentication. A free scan of your own domain reports how those public records are configured before a questionnaire or review.', links: [{phrase: 'free scan', to: '/free-scan'}]},
          {text: 'Re-verify your answers at every renewal instead of rolling over last year\'s form, and remediate gaps at a fixed fee rather than letting them sit until the next application asks again.', links: [{phrase: 'remediate gaps at a fixed fee', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Check that every application answer remains true throughout the policy year and keep dated evidence to support it. If a control stops working, fix it and document what happened before a future claim forces the issue.',
  },
  {
    slug: 'vendor-email-compromise-contractors',
    metaTitle: "Vendor Email Compromise: Spotting Supplier Invoice Scams | Helm",
    title: 'Vendor Email Compromise: When Your Supplier\'s Invoice Is Actually a Scam',
    metaDesc:
      'How fraudsters compromise or spoof a supplier or general contractor to redirect payment on a real invoice, and the callback and DMARC controls that stop it before the money moves.',
    date: '2026-07-08',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Contractors & Trades',
    laneTo: '/contractors',
    intro:
      'A fake supplier invoice may include the correct job number, amount, letterhead, and contact name because the attacker has been reading a real email thread. Only the bank account has changed. If the office pays it without calling the supplier, the job can be complete while the legitimate invoice is still unpaid.',
    sections: [
      {
        h: 'How the scam actually runs',
        ps: [
          {text: 'A fraudster compromises or convincingly spoofs the email of a supplier or a general contractor somewhere in your job, then waits for the moment an invoice or a payment is naturally due. Mid-job is the ideal window: enough trust has built up between the parties that an "updated banking details" email does not raise an eyebrow.', links: [{phrase: 'general contractor', to: '/contractors'}]},
          'The email itself usually is not sloppy. It references the actual job, the actual amount owed, sometimes an actual person\'s name pulled from a real thread the attacker has been reading. The only change is a routing number and an account number, and that change is the entire scam.',
        ],
      },
      {
        h: 'The control that stops it: callback, no exceptions',
        ps: [
          'Any new or changed banking instruction, on any invoice, from any supplier or GC, gets verified with a phone call to a number you already had on file, never a number provided in the email making the change. That single rule stops nearly every version of this scam, because the fraudster cannot answer a call to a real supplier\'s real office.',
          'The rule has to survive urgency to be worth having. A scam that arrives with a tight deadline, a threat to hold up the job, or pressure from someone posing as a decision-maker is testing whether the rule bends. Write it down as a rule with no exceptions, not a habit, so nobody on your crew has to make that judgment call alone under pressure.',
        ],
      },
      {
        h: 'Protect your own name too',
        ps: [
          {text: 'The same scam runs in the other direction: someone spoofs your company\'s domain and sends a fake invoice to one of your own customers. DMARC on your domain, set up correctly, is what stops your business name from being used to defraud the people who trust you.', links: [{phrase: 'DMARC on your domain', to: '/helm-core'}]},
          {text: 'Lookalike domains are the other half of this: a supplier name spelled with a swapped letter or a different ending, close enough to pass a fast read on a phone screen. The free scan does not search for lookalike registrations, but it does report how your own public email authentication is configured.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Call a supplier using a number already in your records before accepting new banking details. Keep that rule in place even when a deadline is tight, and protect your own domain so customers are less likely to receive the same request in your name.',
  },
  {
    slug: 'shadow-ai-at-work',
    metaTitle: "Shadow AI at Work: Chatbots and Company Data | Helm",
    title: 'Shadow AI: What Employees Paste into Chatbots When Nobody Is Looking',
    metaDesc:
      'Employees may paste client data and contract terms into AI chatbots the company never approved. Learn what can go wrong and how a practical AI-use policy helps.',
    date: '2026-07-07',
    updated: '2026-08-18',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'An employee who wants help summarizing a contract or cleaning up a client email may paste it into a public chatbot without realizing the information has now left the company’s approved systems. The employee is usually trying to work faster, not break a rule. If the company has never explained what is safe to share, people will make that decision on their own.',
    sections: [
      {
        h: 'What shadow AI actually is',
        ps: [
          'Shadow AI is a chatbot or AI tool used on company information without approval or review. Employees reach for these tools because they can draft an email, summarize a document, or clean up code quickly. Without an approved option, convenience often decides which tool gets used.',
          'Blanket bans do not work here. Block the tool on the office network and employees route around it on their phones or personal laptops, often with company data still attached, just further from any oversight than before.',
        ],
      },
      {
        h: 'What can leave the company through a prompt',
        ps: [
          'The obvious risk is client data and contract terms typed straight into a prompt: names, numbers, terms that were never meant to leave the building, now sitting inside a third party\'s system.',
          'Less obvious is what happens to that data afterward. Some tools retain inputs or use them to improve their models, depending on the account type and settings, often without the employee ever checking which applies to them. Add a personal account with weak or no additional protections holding company information, and the exposure compounds.',
          'The output creates another problem when it is copied into a client deliverable or used for a decision without review. A confident answer can still be wrong.',
        ],
      },
      {
        h: 'Give employees a safe way to use it',
        ps: [
          'A short acceptable-use policy that says plainly what can and cannot go into a prompt closes most of the gap on its own, because most employees want to do the right thing once they know what it is.',
          {text: 'Give employees a short list of approved tools so they have a practical alternative. A periodic audit can then show whether the tools used in daily work still match the policy.', links: [{phrase: 'periodic audit', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Give employees an approved option and a short list of information that must never go into a public chatbot. Then check which tools are actually being used so the policy keeps pace with the work.',
  },
  {
    slug: 'cyber-insurance-application-walkthrough',
    metaTitle: "Cyber Insurance Application: A Practical Walkthrough | Helm",
    ctaMode: 'book',
    title: 'Walking Through a Cyber Insurance Application Without Tripping Over Your Own Answers',
    metaDesc:
      'What a cyber insurance application actually asks, why the answers are treated as sworn statements rather than a survey, and the order to work through it in.',
    date: '2026-07-06',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'A quick “yes” on a cyber-insurance application can become an expensive problem later. After an incident, the carrier can compare that answer with configuration records, training logs, and backup tests. If the evidence shows the control was only partly deployed, the claim may be disputed when the business is already dealing with the loss.',
    sections: [
      {
        h: 'What the application actually asks',
        ps: [
          'The questions usually cover MFA for email, remote access, and administrator accounts; device detection and response; protected backups and tested restores; patching; security awareness training; and incident response.',
          'Read the qualifiers carefully. “MFA on email” and “MFA on every remote and administrator account” are not the same answer. “We have backups” also does not answer whether they are isolated or have been restored successfully.',
          'Carriers ask because each control can limit the size of a loss. The wording matters, however, because “MFA enabled” may mean every account to an underwriter and only most accounts to the person filling out the form.',
        ],
      },
      {
        h: 'Why the answers matter more than a form usually does',
        ps: [
          'Your answers are treated as attestations the insurer is entitled to rely on, not a rough self-assessment. Answer inaccurately, even without meaning to mislead anyone, and you risk denial of a future claim or rescission of the policy entirely. Carriers have litigated cases specifically over MFA misstatements on applications, which is a sign of how closely this particular answer gets checked.',
          'Answer for what is running today, not what the company plans to finish next month. If MFA is enabled on most accounts but not all of them, an unqualified “yes” can give the carrier grounds to challenge a later claim.',
        ],
      },
      {
        h: 'The right order: fix or document first, answer second',
        ps: [
          'Work through the questions in this order: fix the gap if you can before you answer, or if you cannot fix it in time, document honestly what you actually have in place and why. Answering first and hoping to close the gap later is backwards, and it is the version of this that gets found out at the worst possible time.',
          'Gather your evidence as you go: screenshots of MFA settings, backup and restore logs, your written policies. Keep it all in one place. If a claim is ever filed, that folder is what turns your answers from a claim into proof.',
        ],
      },
      {
        h: 'Start weeks before renewal, not the night before',
        ps: [
          'Better, more accurate answers generally translate into better premiums and more carrier options, because you are giving underwriters a clearer, more complete picture to price against rather than a vague one they have to price cautiously.',
          {text: 'None of this works on the night before renewal. Start weeks ahead so there is actually time to close a gap instead of just noting it, and treat the review as part of your ongoing professional services security program rather than a once-a-year scramble.', links: [{phrase: 'professional services security program', to: '/professional-services'}]},
          {text: 'A readiness review checks the controls before the application is signed, leaving time to fix incomplete deployment or document an accurate answer.', links: [{phrase: 'readiness review', to: '/helm-command'}]},
          {text: 'A free scan of your domain is a fast way to see where a few of those answers already stand.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Start several weeks before renewal. Verify each answer, save the supporting evidence, and either fix an incomplete control or describe it accurately before signing the form.',
  },
  {
    slug: 'hipaa-email-rules-small-practices',
    metaTitle: "HIPAA Email Rules: Addressable Safeguards Explained | Helm",
    ctaMode: 'book',
    title: 'HIPAA Email Rules for Small Practices: What "Addressable" Actually Means',
    metaDesc:
      'What the HIPAA Security Rule actually requires for email containing PHI, why an addressable specification is not the same as optional, and the baseline that keeps a small practice covered.',
    date: '2026-07-05',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'Emailing patient information to the wrong person, through a personal account, or without the safeguards the practice selected can create a breach investigation and a difficult patient conversation. HIPAA does not ban email, but the practice needs a documented way to protect electronic patient information while it is being sent.',
    sections: [
      {
        h: 'What the Security Rule requires, and what "addressable" means',
        ps: [
          'The HIPAA Security Rule requires safeguards for electronic PHI while it is in transit, meaning while it is moving between you and someone else, not just while it sits on a server.',
          'Encryption in transit is listed as an "addressable" specification, and that word gets misread constantly. Addressable does not mean optional. It means you either implement it, or you document a specific, reasonable alternative and the reasoning behind choosing it. Skipping it with no documentation is not a valid third option.',
        ],
      },
      {
        h: 'The business associate agreement you cannot skip',
        ps: [
          'Any email provider that stores or transmits ePHI on your behalf needs a business associate agreement, a BAA, in place before that PHI ever touches their system.',
          'Free consumer email accounts do not offer a BAA. Google Workspace and Microsoft 365 business plans can support one, so patient information should stay in a properly configured business tenant rather than a personal account.',
          {text: 'Helm Core adds phishing and impersonation protection for compatible business tenants, but it does not include encrypted-message delivery or secure file transfer. Helm Command can separately assess the practice\'s email and HIPAA safeguards before any remediation or secure-email solution is proposed.', links: [{phrase: 'Helm Core', to: '/helm-core'}, {phrase: 'Helm Command', to: '/helm-command'}]},
        ],
      },
      {
        h: 'The patient exception, and the baseline that covers you',
        ps: [
          'A patient can ask to receive their own information by unencrypted email, and the practice may honor that request after warning them plainly of the risk. That exception applies to the patient\'s own records going to the patient, not to PHI moving between staff, referring providers, or billing.',
          'A message containing PHI that goes to the wrong recipient may trigger a breach analysis even when the mistake was accidental. Safeguards and staff training need to be in place before someone selects the wrong address, not added after the message is gone.',
          'A practical baseline includes business email under a signed BAA, MFA on every mailbox, an approved secure-delivery method when the workflow requires it, staff training, and no PHI sent through personal accounts.',
          {text: 'A HIPAA gap assessment can show where a professional services practice meets that baseline and where the documented workflow or evidence is incomplete.', links: [{phrase: 'HIPAA gap assessment', to: '/helm-command'}, {phrase: 'professional services practice', to: '/professional-services'}]},
        ],
      },
    ],
    takeaway:
      'Use business email covered by a signed BAA, require MFA, train staff on when secure delivery is needed, and keep patient information out of personal accounts. If the practice chooses an alternative to an addressable safeguard, document why it is reasonable.',
  },
  {
    slug: 'ai-phishing-red-flags',
    title: 'AI Phishing: Why "Look for the Typos" Is Dead Advice',
    metaDesc:
      'AI-written phishing emails are fluent, personalized, and sent at scale. Why the old typo-spotting advice no longer works, and the controls that still stop the attack.',
    date: '2026-07-03',
    updated: '2026-08-18',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'A polished phishing email can now match a colleague’s tone, mention a real vendor, and arrive without the spelling mistakes employees were taught to notice. If training still depends on spotting bad grammar, a convincing message can reach the payment or login step before anyone sees a warning sign.',
    sections: [
      {
        h: 'What changed',
        ps: [
          'A large language model writes fluent, grammatically correct email in seconds, in whatever tone the attacker asks for. It can pull public details, a job title, a recent announcement, a vendor name, and weave them into a message that reads like it was written by someone who actually knows your business.',
          'None of this requires the attacker to be skilled. It requires a prompt. The old tells, the awkward phrasing, the formatting that looked slightly off, are simply gone, and they were never a reliable defense to begin with, only a convenient one.',
        ],
      },
      {
        h: 'What still works',
        ps: [
          {text: 'Technical controls do not care how fluent the email is. Domain authentication and DMARC, paired with filtering that inspects the message itself rather than trying to judge the writer\'s intent, catch what a careful reading no longer can.', links: [{phrase: 'Domain authentication and DMARC', to: '/helm-core'}]},
          {text: 'Check your own domain first: a free scan reports how your public email authentication is configured, which helps identify gaps worth fixing before an impersonation attempt.', links: [{phrase: 'free scan', to: '/free-scan'}]},
          {text: 'Process controls hold up just as well. A callback protocol for any new or changed payment instruction, verified by phone to a known-good number, stops the fraud regardless of how convincing the email or the voice on the other end sounds.', links: [{phrase: 'callback protocol', to: '/helm-command'}]},
        ],
      },
      {
        h: 'Train people to report quickly',
        ps: [
          'Stop training people to detect perfectly. Train them to report fast instead: the moment something feels slightly off, forwarding it to security costs nothing and catches attacks no amount of careful reading would have caught.',
          'Celebrate the reports, including the false alarms, and never punish someone for clicking. An employee who is afraid to admit a mistake sits on it, and that silence is far more costly than the click itself.',
        ],
      },
    ],
    takeaway:
      'Stop asking employees to judge an email by its grammar. Make suspicious messages easy to report, protect the domain and mailbox, and verify payment changes through a known phone number.',
  },
  {
    slug: 'cmmc-deadline-checklist',
    metaTitle: "CMMC Phase 2 Suspension: Manufacturer Checklist | Helm",
    ctaMode: 'book-cmmc',
    title: 'CMMC After the Phase 2 Suspension: A 12-Step Checklist for Manufacturers',
    metaDesc:
      'CMMC Phase II was suspended in July 2026. Phase I self-assessments remain. A 12-step readiness checklist for manufacturers and defense subcontractors.',
    date: '2026-07-25',
    updated: '2026-08-18',
    readMin: 7,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'The July 2026 suspension of CMMC Phase II did not erase the cybersecurity requirements already appearing in defense contracts. A manufacturer that stops its readiness work may still face a self-assessment, an unsupported SPRS score, or a customer asking for evidence the shop cannot produce. The practical response is to confirm the contract, keep the assessment current, and avoid spending against a deadline or assessment route that no longer applies.',
    sections: [
      {
        h: 'Steps 1 to 4: Know where you stand',
        ps: [
          'First, confirm your level. Contractors handling Federal Contract Information may fall under Level 1 and its 15 basic safeguarding requirements. If the agreed scope processes, stores, or transmits Controlled Unclassified Information, Level 2 and the 110 Revision 2 requirements may apply. Confirm the information category and the clauses rather than deciding from company size.',
          'Second, locate your CUI. You cannot protect what you have not mapped. Walk every place technical data lives: file servers, email, CAD stations, the quoting inbox, that USB drive in the shop office.',
          'Third, calculate the SPRS score honestly when the assessment requirement applies. Keep the boundary, methodology, working papers, and evidence that reproduce the number. The Department of Justice has resolved False Claims Act allegations involving unsupported cybersecurity representations, including a case centered on a large mismatch between a submitted score and a later assessment.',
          {text: 'Fourth, run a gap assessment against the applicable control set. The useful deliverable is a scored, evidence-linked list that separates what is implemented, what is not proven, and what still needs remediation.', links: [{phrase: 'gap assessment', to: '/helm-command'}]},
        ],
      },
      {
        h: 'Steps 5 to 9: Close the gaps that matter',
        ps: [
          'Five: implement multi-factor authentication where the requirement and system design call for it, and preserve the configuration evidence. Six: identify where approved cryptography is required to protect CUI and verify the actual product, mode, and boundary rather than relying on a marketing label. Seven: limit access so each role reaches only the CUI and systems needed for its work.',
          'Eight: write and rehearse the incident response process, including the contract-driven reporting path. Nine: keep the System Security Plan current and maintain an owned remediation record for unmet requirements. Generic templates are not evidence that the described control is operating.',
        ],
      },
      {
        h: 'Steps 10 to 12: Stay ready without wasting the year',
        ps: [
          'Ten: do not reserve a third-party assessment solely because of the former Phase II date. Recheck the current DoD guidance and the specific solicitation or contract before committing to an assessment route. Eleven: run an internal mock assessment anyway because the underlying Revision 2 requirements and evidence work remain relevant.',
          'Twelve: assign recurring maintenance. Review access changes, evidence, open remediation, the SSP, and assessment dates on a schedule. A score and policy set can become inaccurate when systems, people, vendors, or the CUI boundary change.',
        ],
      },
    ],
    takeaway:
      'Confirm what the current contract requires before changing course. Keep the system boundary, assessment, score, and supporting evidence current while DoD reviews the next phase of the program.',
  },
  {
    slug: 'job-site-devices-public-wifi',
    metaTitle: "Job Site Devices and Public Wi-Fi: Contractor Risks | Helm",
    title: 'Job Site Devices and Public Wi-Fi: What Actually Puts a Contractor at Risk',
    metaDesc:
      'Why public Wi-Fi is not the real risk for contractors working out of a truck or a job site, what is, and the basic mobile device settings that stop a lost phone from becoming a full account takeover.',
    date: '2026-06-30',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Contractors & Trades',
    laneTo: '/contractors',
    intro:
      'The more likely job-site problem is not someone quietly reading encrypted traffic on public Wi-Fi. It is a lost phone with email still open, a shared tablet signed in as the owner, or a fake hotspot that captures a password. Any of those can expose job details, payment messages, and the accounts used to run the business.',
    sections: [
      {
        h: 'The Wi-Fi myth, and what replaced it',
        ps: [
          'With HTTPS now standard on nearly every site you actually use, someone snooping on coffee shop or job site Wi-Fi is a much smaller risk than the old folklore suggests. That specific fear is mostly out of date.',
          'The real Wi-Fi risks are fake hotspots set up to look like the real network, and captive-portal lookalike pages designed to harvest a login the moment someone types it in. A phone\'s own hotspot is safer than connecting to any public network at all, and it is usually just as easy.',
        ],
      },
      {
        h: 'The device itself is the real exposure',
        ps: [
          'A lost or stolen phone or tablet that is logged into an email account with no screen lock is not a minor inconvenience, it is a full account takeover the moment it leaves someone\'s hands.',
          'Microsoft 365 and Google Workspace business plans can include basic mobile device management features such as requiring a screen lock, encrypting the device, and remotely wiping a lost device. Those controls are part of your productivity tenant, not Helm Core itself, and the available features depend on your license.',
          {text: 'A shared job-site tablet signed straight into the owner\'s mailbox is a standing risk for any contractor, because everyone who touches that tablet effectively has the owner\'s access. Give it its own limited account instead of the owner\'s login.', links: [{phrase: 'any contractor', to: '/contractors'}]},
        ],
      },
      {
        h: 'One rule that has to survive the field',
        ps: [
          'Never approve a banking or payment-detail change from the field, no matter how the request arrives or how urgent it sounds. Call back a known number from the office first, every time, before anything changes.',
          {text: 'None of this replaces basic email security either. A free scan reports how your domain\'s public authentication records are configured, which is worth knowing before a crew member is troubleshooting it from a truck.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Require screen locks and encryption, give shared tablets limited accounts, and use a phone hotspot when the available network looks questionable. Never approve changed payment instructions from the field without calling a known number.',
  },
  {
    slug: 'employee-offboarding-checklist',
    metaTitle: "Employee Offboarding Checklist: Accounts and Devices | Helm",
    title: 'The Employee Offboarding Checklist Most Companies Run From Memory (and Miss)',
    metaDesc:
      'A written employee offboarding checklist covering account access, sessions, shared credentials, devices, and the SaaS accounts most companies forget to close.',
    date: '2026-06-29',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'When an employee leaves, their access does not disappear with them. Email may still be open on a phone, browser sessions can remain active, and shared passwords may continue to work. If those accounts are closed gradually over the next week, a former employee or anyone using one of their devices can still read company information or act in the company’s name. A same-day checklist prevents that access from being forgotten.',
    sections: [
      {
        h: 'Same day, not sometime this week',
        ps: [
          'Suspend the account on the person’s last day instead of deleting it. The former employee loses the ability to sign in immediately, while the company keeps the email and files coworkers may still need.',
        ],
      },
      {
        h: 'A password reset alone does not end access',
        ps: [
          'Resetting the password does not always close sessions that are already active on a phone, laptop, or browser. Revoke those sessions and remove registered MFA devices so an already signed-in device cannot continue opening company email or files.',
          'Check for auto-forwarding rules the person may have set up, intentionally or not. A forwarding rule quietly sending copies of future mail to a personal account is one of the easiest things to miss and one of the most useful things for an attacker, or a disgruntled former employee, to have left behind.',
        ],
      },
      {
        h: 'The credentials nobody remembers to rotate',
        ps: [
          'Rotate any shared credential the person knew: the office Wi-Fi password, company social media logins, banking portal access, and any other shared login used across the team. If it was shared, assume it needs to change the moment someone with access leaves.',
        ],
      },
      {
        h: 'Devices, personal phones, and the account nobody thinks about',
        ps: [
          'Collect company-owned devices and remove company data or work profiles from any personal phone that had them installed. This step is easy to remember for a laptop and easy to forget for a phone that only ever had the company email app on it.',
          'The most commonly missed item on the entire list is third-party SaaS accounts created outside your main login system: a tool someone signed up for directly with a company card, never connected to single sign-on, that nobody else on the team knew existed.',
          'If the team needs continuity on the mailbox itself, convert it to a shared mailbox rather than leaving it as an active individual login. That keeps the history accessible without keeping an account open that does not need to be.',
        ],
      },
      {
        h: 'Run it from a checklist, not from memory',
        ps: [
          {text: 'Put these steps on one checklist with a named owner and a completion time. Ongoing security awareness training can reinforce why managers, IT, and payroll need to start the process together instead of assuming someone else handled it.', links: [{phrase: 'Ongoing security awareness training', to: '/helm-core'}]},
          {text: 'A free scan of your domain is a good companion check while you are reviewing access controls, since it shows some of the same exposure an attacker, or a departing employee, would be looking for.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'On the employee’s last day, suspend the main account, revoke active sessions, remove MFA devices, rotate shared passwords, collect equipment, and close separately created apps. Give one person responsibility for confirming the list is complete.',
  },
  {
    slug: 'backup-testing-insurers',
    ctaMode: 'book',
    title: 'Backup Testing: What Cyber Insurers Actually Want to See',
    metaDesc:
      'Cyber insurance questionnaires now ask about offline and immutable backups, encryption, and tested restores, not just whether you back up. The 3-2-1 rule and how to document restore tests.',
    date: '2026-06-27',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'A backup can report “successful” every night and still fail when ransomware shuts down the business. It may be reachable from the infected network, missing important data, or impossible to restore within a useful amount of time. Cyber insurers ask about offline copies and restore tests because the existence of a backup does not prove the company can recover.',
    sections: [
      {
        h: 'What the questionnaire is really asking',
        ps: [
          {text: 'Modern cyber insurance applications separate backup questions that were once combined. They may ask whether a copy is offline or immutable, whether it is encrypted, and whether the business has completed a recent restore test. “We back up nightly” does not answer those questions.', links: [{phrase: 'cyber insurance', to: '/professional-services'}]},
          'The 3-2-1 rule is the shorthand carriers are checking for even when they do not spell it out: three copies of your data, on two different types of media, with one copy offline or otherwise out of reach of whatever compromised the network. A single backup sitting on the same network as everything else fails this on the first question.',
        ],
      },
      {
        h: 'Test whether the data can actually be restored',
        ps: [
          'Backups fail quietly. A job that has been "completing successfully" for a year can still be backing up a corrupted database, missing a folder that got excluded by accident, or writing to a drive that filled up months ago and has been silently failing since. You do not find out until the day you need it.',
          'A restore test answers the only question that matters: if your network went down right now, could you actually get the data back, in a usable form, in a reasonable amount of time. Everything else on the questionnaire is a proxy for that one fact.',
        ],
      },
      {
        h: 'Document it, because attestations are warranties',
        ps: [
          'Insurers may rely on the backup answers throughout the policy year. If the process was working at renewal but later stopped being tested or protected, the company may have trouble supporting its application when a claim is reviewed.',
          {text: 'Document quarterly restore tests: date, what was restored, how long it took, who verified it. That log is what turns "we believe our backups work" into proof at claim time. It is worth checking your email authentication with the same discipline; a free scan reports the public records a reviewer can query today.', links: [{phrase: 'free scan', to: '/free-scan'}]},
          {text: 'If quarterly restore tests are not happening yet, building the schedule and the documentation around them is a fixed, contained piece of work, not an open-ended project.', links: [{phrase: 'fixed, contained piece of work', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Keep an offline or immutable copy and test a real restore on a schedule. Record what was restored, how long it took, who checked it, and what had to be fixed afterward.',
  },
  {
    slug: 'cyber-insurance-questionnaire',
    metaTitle: "How to Answer a Cyber Insurance Questionnaire | Helm",
    ctaMode: 'book',
    title: 'How to Answer a Cyber Insurance Questionnaire (Without Voiding Your Coverage)',
    metaDesc:
      'Cyber insurance questionnaires decide your premium, and whether your claim gets paid. What the 12 common questions mean and how to answer them truthfully.',
    date: '2026-06-24',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Professional Services',
    laneTo: '/professional-services',
    intro:
      'The cyber-insurance questionnaire can determine both the price of the policy and whether the coverage holds up after an incident. An optimistic answer about MFA, backups, or training may seem harmless during renewal, but it can be compared with technical records when the business files a claim.',
    sections: [
      {
        h: 'The questions that actually move your premium',
        ps: [
          'Carriers commonly ask about MFA, device detection, offline or immutable backups, restore tests, email filtering, security awareness training, incident response, and payment verification.',
          'Check whether each question applies to every relevant account, device, or employee. A control that covers only part of the business may require a qualified answer.',
          {text: 'MFA is one of the controls carriers examine closely. If it is only partly deployed, identify the uncovered accounts and finish the rollout before answering “yes.”', links: [{phrase: 'MFA', to: '/helm-core'}]},
        ],
      },
      {
        h: 'The trap: answering what you wish were true',
        ps: [
          '"Do you conduct regular security awareness training?" A lunch presentation two years ago is a no. "Are backups tested?" Having backups is not the question; restoring from them on a schedule is. Optimistic answers feel harmless at renewal time and catastrophic at claim time.',
          'The right approach: answer truthfully today, fix the gaps, then update the answers. Most carriers will re-quote mid-cycle for material security improvements: brokers do this routinely.',
        ],
      },
      {
        h: 'Turn the questionnaire into a roadmap',
        ps: [
          {text: 'Treat every “no” or partial answer as a decision: fix the control before signing, describe the limitation accurately, or ask the broker how it affects coverage. A remediation pass can organize that work. Keep screenshots, training logs, and backup-test records together so the answer can be supported later.', links: [{phrase: 'remediation pass', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Verify every answer before signing, fix or accurately disclose incomplete controls, and save the evidence in one place. Helm Command can help assess and organize the gaps under a fixed scope.',
  },
  {
    slug: 'ssp-poam-explained',
    metaTitle: "SSP and POA&M: Evidence for CMMC Readiness | Helm",
    ctaMode: 'book-cmmc',
    title: 'SSP and POA&M Explained: The Evidence Behind CMMC Readiness',
    metaDesc:
      'What an SSP and POA&M document under NIST 800-171, how they support a defensible assessment, and how the Phase II suspension changes the certification context.',
    date: '2026-06-20',
    updated: '2026-08-18',
    readMin: 6,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'A shop can have policies, screenshots, and a high SPRS score and still be unable to show which systems were assessed or who is fixing an unmet requirement. The System Security Plan describes the environment and safeguards as they exist today. The Plan of Action and Milestones records the work that remains, who owns it, and when it is expected to be complete.',
    sections: [
      {
        h: 'What each document actually is',
        ps: [
          'The System Security Plan, required by NIST SP 800-171 Revision 2 requirement 3.12.4, describes the system boundary, operating environment, how the security requirements are implemented, and the connections to other systems. It should name the real tools, roles, locations, and processes inside the assessed scope.',
          'The Plan of Action and Milestones, addressed by requirement 3.12.2, tracks security weaknesses or deficiencies, the work required to correct them, the responsible owner, resources, milestones, and completion dates. A POA&M with no owner, evidence target, or date is a list, not an operating plan.',
          {text: 'Together they are the paper trail behind your gap assessment: the SSP shows where you stand today, and the POA&M shows the work still ahead, scored against the same 110 controls.', links: [{phrase: 'gap assessment', to: '/helm-command'}]},
        ],
      },
      {
        h: 'Why a reviewer starts with the SSP',
        ps: [
          'A reviewer needs to know which people, systems, facilities, and connections are in scope before a control can be tested. A generic SSP cannot answer that question. If the document describes tools the shop does not use or leaves out the quoting mailbox and CAD workstations that hold CUI, the assessment starts from the wrong boundary.',
          'A useful SSP connects each requirement to the people, technology, procedure, and evidence behind it. It also records dependencies and exceptions so a reviewer can compare the document with the way the shop actually works.',
        ],
      },
      {
        h: 'What the Phase II suspension changes',
        ps: [
          'The Department suspended CMMC Phase II on July 13, 2026. That means the planned expansion of third-party Level 2 certification and its conditional-certification path should not be presented as the current default route. Phase I self-assessment requirements remain in force, and the Department says Revision 2 will continue to be enforced through self-assessments and selected government-led assessments.',
          'The POA&M still matters. The DFARS assessment process asks for the date when all requirements are expected to be implemented, and a real remediation plan is how leadership manages that answer. Treat any future conditional-certification rules as subject to the outcome of the current program review and the contract in front of you.',
        ],
      },
      {
        h: 'How the documents are used',
        ps: [
          'A current SSP lets the company explain its boundary and implementation consistently to leadership, primes, technical reviewers, and government assessors. A maintained POA&M lets the same group see what remains open, what evidence will close it, who owns it, and whether the expected completion date is still credible.',
          {text: 'Use both documents during the gap assessment, not after it. Findings should update the SSP where the description is wrong and create or revise POA&M work where a requirement is not fully implemented.', links: [{phrase: 'gap assessment', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Keep the SSP aligned with the systems and workflows in scope, and give every POA&M item an owner, target date, and evidence needed for closure. Update both documents when the environment or implementation changes.',
  },
  {
    slug: 'wire-fraud-prevention-law-firms',
    metaTitle: "Wire Fraud Prevention for Law Firms: Callbacks | Helm",
    title: 'Wire Fraud Prevention for Law Firms: The Callback Protocol',
    metaDesc:
      'A practical known-number callback protocol for law firms handling changed wire instructions, including approvals, evidence, testing, and immediate response steps.',
    date: '2026-06-17',
    updated: '2026-08-18',
    readMin: 6,
    lane: 'Law Firms',
    laneTo: '/law-firms',
    intro:
      'A closing or settlement can put a large transfer, several parties, and a hard deadline into one email thread. If a criminal compromises that thread and changes the account number, staff may release the funds before the real client or title company knows anything changed. A known-number callback gives the firm a way to verify the instruction outside the email conversation.',
    sections: [
      {
        h: 'Why the email can look completely legitimate',
        ps: [
          'The FBI describes business email compromise as a request that appears to come from a known source. In a legal payment workflow, the attacker can wait for a real transaction and then introduce a changed account number, a new beneficiary, or pressure to release funds before a deadline.',
          'Grammar, logos, signatures, and reply history are weak evidence. A message sent from a compromised real mailbox may pass normal email-authentication checks. The control therefore cannot depend on a staff member noticing a visual clue that may not exist.',
        ],
      },
      {
        h: 'Write the payment rule before the matter becomes urgent',
        ps: [
          'At intake or the start of the payment process, record a known-good phone number for every party authorized to give or change instructions. Store it in the matter file or another controlled record. Do not wait for a change request to decide which number is trustworthy.',
          'Name the roles that can receive instructions, perform the callback, approve a release, and resolve an exception. Set a dual-approval threshold based on the firm\'s transaction profile and insurer or client requirements. The rule should also state that urgency, seniority, and a familiar voice do not waive verification.',
        ],
      },
      {
        h: 'The callback protocol',
        ps: [
          {text: 'Pause any new or changed payment instruction. Call the known-good number already held in the file, not a number contained in the request. Ask the authorized person to confirm the beneficiary, financial institution, routing details, account information, and reason for the change. Then record the verifier, time, number used, result, and approver before releasing the payment.', links: [{phrase: 'payment instruction', to: '/helm-command'}]},
          'Test the procedure with an authorized simulation and include the awkward cases: a partner asks to skip the rule, the usual contact is unavailable, or the change arrives minutes before a cutoff. The drill should test whether the process survives pressure, not whether one person can spot a fake email.',
        ],
      },
      {
        h: 'What email controls can and cannot do',
        ps: [
          {text: 'SPF, DKIM, and DMARC can make unauthorized use of the firm\'s exact domain harder. Managed filtering, threat protection, reporting, and triage can reduce the malicious messages that reach staff. Neither control can make a payment change trustworthy, and neither stops every request sent from a compromised real account or a convincing lookalike domain.', links: [{phrase: 'Managed filtering', to: '/helm-core'}]},
          'Use technical controls to reduce exposure and the callback to authorize the money. Keeping those jobs separate prevents the firm from treating an email-security pass as approval of a financial instruction.',
        ],
      },
      {
        h: 'If a transfer has already been sent',
        ps: [
          'Contact the sending financial institution immediately and ask it to contact the receiving institution. Report the event to the FBI Internet Crime Complaint Center, preserve the original messages and headers, and record the timeline without altering the affected mailbox or device more than necessary.',
          'Follow the firm\'s incident plan for insurer, counsel, client, law-enforcement, and professional-responsibility decisions. The right notification path depends on the facts and jurisdiction, so preserve what happened and involve the appropriate advisers instead of making an early conclusion about exposure.',
        ],
      },
    ],
    takeaway:
      'Record trusted phone numbers before the payment becomes urgent. Call one of those numbers for every new or changed instruction, require the appropriate approval, and keep a log showing who verified the transfer.',
  },
  {
    slug: 'cui-handling-shop-floor',
    metaTitle: "CUI Handling Rules for the Shop Floor | Helm",
    ctaMode: 'book-cmmc',
    title: 'Explaining CUI to Your Shop Floor: The Rules That Actually Matter',
    metaDesc:
      'A plain-English explanation of FCI and CUI for shop floor staff, the handling rules that keep drawings and specs safe, and why fast internal reporting matters under DFARS.',
    date: '2026-06-16',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'Manufacturing & Defense',
    laneTo: '/manufacturing',
    intro:
      'A machinist can undo a carefully written CUI program by taking one phone photo of a drawing, emailing a file home, or leaving a marked print where a visitor can see it. That usually happens because the shop explained the policy without explaining what employees should do during the workday. Floor rules need to be short, specific, and easy to follow when production is moving.',
    sections: [
      {
        h: 'FCI and CUI, in terms that make sense on the floor',
        ps: [
          'Federal Contract Information, FCI, is information provided by or generated for the government under a contract and not meant for public release. It covers a lot of the everyday paperwork of doing government work.',
          'Controlled Unclassified Information, CUI, is a stricter category that requires safeguarding under law, regulation, or policy. For a machine shop, this usually means controlled technical information: drawings, specs, and models tied to a specific part or program. If a document has a distribution statement or a marking on it, treat it as CUI until someone tells you otherwise.',
        ],
      },
      {
        h: 'The floor rules that keep it safe',
        ps: [
          'No photos of drawings or parts on personal phones, ever, even for a quick reference or to text a coworker. Never email specs to a personal email account to work on at home. Access is need-to-know: if a print is not for your job, it is not for you to look at.',
          'Keep marked documents in controlled storage instead of leaving them on a workbench or board where a visitor can see them. Employees also need to know whom to tell when a print is left out or a file goes to the wrong place. Prompt internal reporting gives the company time to meet its contract-driven response duties.',
        ],
      },
      {
        h: 'Why fast reporting is not optional',
        ps: [
          'DFARS 252.204-7012 requires reporting cyber incidents affecting covered defense information to the Department of Defense within 72 hours. That clock does not wait for someone to notice weeks later. An employee who tells a supervisor the same day something looks wrong is the only way that deadline gets met.',
        ],
      },
      {
        h: 'This training is part of the program, not an extra',
        ps: [
          {text: 'NIST 800-171 compliance includes awareness and training requirements. A shop can configure technical controls and still leave a requirement unsupported if the employees handling controlled drawings were never taught the applicable rules.', links: [{phrase: 'NIST 800-171 compliance', to: '/helm-command'}]},
          {text: 'A readiness assessment for manufacturing and defense shops can review the technical controls and the floor-level training against the same agreed scope.', links: [{phrase: 'manufacturing and defense shops', to: '/manufacturing'}, {phrase: 'readiness assessment', to: '/helm-command'}]},
          {text: 'Use training that reflects the drawings, workstations, removable media, and reporting path employees actually encounter. Ongoing security awareness training can reinforce those decisions without relying on a generic annual slide deck.', links: [{phrase: 'Ongoing security awareness training', to: '/helm-core'}]},
        ],
      },
    ],
    takeaway:
      'Teach employees how to recognize marked information, where it may be stored, who may access it, and whom to call when something goes wrong. Make the rules part of normal shop work, including phones, paper drawings, email, shared stations, and visitors.',
  },
  {
    slug: 'pen-test-vs-vulnerability-scan',
    metaTitle: "Penetration Test vs Vulnerability Scan: Costs and Scope | Helm",
    title: 'Penetration Test vs Vulnerability Scan: What You Are Actually Paying For',
    metaDesc:
      'A vulnerability scan and a penetration test are not the same service. What each one actually delivers, how to spot a rebranded scan sold at pen test prices, and which one most small and medium-sized businesses need first.',
    date: '2026-06-13',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'A company can pay penetration-test prices and receive little more than an automated list of known vulnerabilities. That leaves leadership with a long report but no clear answer about what an attacker could actually reach. The proposal and deliverables should make clear whether people will attempt exploitation or software will only scan for known weaknesses.',
    sections: [
      {
        h: 'Two different services, often sold under one name',
        ps: [
          'A vulnerability scan is automated. Software enumerates known weaknesses across your systems, it is inexpensive to run, and it belongs on a schedule rather than as a one-time event.',
          'A penetration test is people, not software, attempting to actually exploit and chain those weaknesses together the way a real attacker would. It is scoped to specific systems, it takes days rather than minutes, and it is priced accordingly.',
        ],
      },
      {
        h: 'How to spot a scan wearing a pen test\'s price tag',
        ps: [
          'A "penetration test" quoted at scan prices is usually a rebranded automated scan with a different cover page. Before buying, ask for the methodology being used, who actually performs the testing, and a sample report from prior work.',
          'The deliverables show what was performed. A scan usually produces a list of detected weaknesses. A penetration test should explain which paths were attempted, what could be reached, what evidence supports the finding, and which fixes matter first.',
        ],
      },
      {
        h: 'Which one to buy first',
        ps: [
          'Most small and medium-sized businesses get more value out of fixing what a scan already shows, MFA gaps, missing patches, weak email authentication, before paying for a scoped penetration test on top of it. Insurers and compliance frameworks frequently only require a scan in the first place.',
          {text: 'The free scan is an automated external check of your public domain. If it identifies basic gaps, address those before paying for deeper testing. A readiness engagement can help organize that cleanup and determine whether a penetration test is the next useful step.', links: [{phrase: 'free scan', to: '/free-scan'}, {phrase: 'readiness engagement', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Ask who will perform the work, whether exploitation is included, which systems are in scope, and what the final report will show. Fix known basic weaknesses first so a later penetration test can spend its time on the paths an automated scan cannot answer.',
  },
  {
    slug: 'what-is-dmarc',
    title: 'What Is DMARC? A Plain-English Guide for Business Owners',
    metaDesc:
      'DMARC stops criminals from sending email as your domain. What SPF, DKIM, and DMARC actually do, why "p=none" means unprotected, and how to check your domain in 30 seconds.',
    date: '2026-06-10',
    updated: '2026-08-18',
    readMin: 4,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'If someone can send a convincing invoice from your company’s domain, a customer may pay the criminal and call you only after the real invoice becomes overdue. SPF, DKIM, and DMARC help receiving mail systems separate authorized messages from unauthorized ones sent in your name.',
    sections: [
      {
        h: 'SPF, DKIM, DMARC: the sixty-second version',
        ps: [
          'SPF is a public list of servers allowed to send email for your domain. DKIM is a cryptographic signature proving a message really came from you and was not altered. DMARC is the policy that ties them together: it tells receiving mail servers what to do when a message fails those checks: nothing (p=none), quarantine it, or reject it outright.',
          'The catch: most businesses that have DMARC at all run it at p=none, monitoring mode. That is a smoke detector with the alarm disconnected. Criminals can still send email as your exact domain, and receiving servers have been told to deliver it anyway.',
        ],
      },
      {
        h: 'Why it matters to your business specifically',
        ps: [
          {text: 'A criminal can use spoofed email to send a fake invoice that appears to come from your company. If a customer pays it, your team may have to help untangle the fraud even though the message was not sent from your mailbox. Enforced DMARC can make unauthorized use of the exact domain harder and can support delivery of legitimate mail.', links: [{phrase: 'Enforced DMARC', to: '/helm-core'}]},
          'Getting to enforcement takes care: flip to p=reject carelessly and you can block your own invoices sent through QuickBooks or your marketing platform. The path is: inventory every service that sends as your domain, authorize each one in SPF/DKIM, watch the reports, then enforce.',
        ],
      },
    ],
    takeaway:
      'Check which services send email for your domain, make sure each one is authenticated, and move DMARC toward enforcement only after legitimate senders are accounted for. The free scan shows what your public records currently publish.',
  },
  {
    slug: 'incident-response-plan-small-business',
    metaTitle: "Incident Response Plan for Small and Medium Businesses | Helm",
    title: 'The First Hour After Ransomware or a Wire Fraud Email: An Incident Response Plan for Small and Medium Businesses',
    metaDesc:
      'What to do, who to call, and what not to touch in the first hour after ransomware or a business email compromise, plus why a one-page incident response plan beats a binder nobody reads.',
    date: '2026-06-06',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'The first person to notice ransomware or a fraudulent transfer can accidentally make the situation worse by shutting down a device, deleting a message, or calling a vendor the insurer has not approved. A one-page incident plan tells that person what not to touch, who has authority, and which call comes first.',
    sections: [
      {
        h: 'What not to touch',
        ps: [
          'Do not power off an encrypted machine or wipe and reimage it before anyone has looked at it. It feels like the responsible move, and it can destroy the evidence a forensic investigator needs to figure out how the attacker got in and whether they are still inside.',
          'Do not pay a ransom demand, negotiate with an attacker, or promise anything on your own. That decision, if it is even on the table, belongs with counsel and your carrier, not with whoever answered the first call.',
          'Do not send a company-wide email about the incident from the same system that might be compromised. If a mailbox is involved, assume the attacker may still be reading it.',
        ],
      },
      {
        h: 'Who to call, and in what order',
        ps: [
          'Call your cyber insurance carrier before you call your own IT vendor. This is the step that trips up businesses that otherwise did everything right. Carriers maintain a panel of approved forensic and breach-response vendors and breach counsel, and going outside that panel, even with good intentions, can jeopardize coverage for the exact costs you were counting on the policy to pay.',
          'Your carrier can typically be reached by phone at any hour, and the number should already be on your one-page plan, not searched for during the incident. Once they are looped in, they will direct you to the panel vendor for forensics and, if needed, breach counsel to manage notification obligations.',
          'Only after that call should you loop in your everyday IT vendor, and even then, in a supporting role directed by the carrier\'s panel, not leading the response. A good IT vendor knows this and will not be offended by it.',
        ],
      },
      {
        h: 'Why a one-page plan beats a binder',
        ps: [
          'A fifty-page incident response binder is a document nobody reads twice, usually written once for an insurance application and never opened again. In an actual incident, nobody has time to find the right page.',
          'A one-page plan should list the carrier number, reporting deadline, decision owner, and the first actions employees must avoid. That is enough to guide the opening call while the fuller response plan covers the work that follows.',
          {text: 'A readiness workshop can help build and rehearse both pieces before an incident.', links: [{phrase: 'readiness workshop', to: '/helm-command'}]},
          {text: 'A free scan completed ahead of time also records the public email-authentication signals the response team may need if a mailbox or impersonation attempt is involved.', links: [{phrase: 'free scan', to: '/free-scan'}]},
        ],
      },
    ],
    takeaway:
      'Put the carrier’s number, decision owner, reporting deadline, and first instructions on one page. Train employees to preserve the evidence and use the approved response path before anyone starts cleaning up.',
  },
  {
    slug: 'deepfake-ceo-fraud',
    metaTitle: "Deepfake CEO Fraud: Cases and Prevention Controls | Helm",
    title: 'Deepfake CEO Fraud: Real Cases and the Controls That Stop It',
    metaDesc:
      'Voice cloning needs three seconds of audio. Real deepfake fraud cases, including a $25M video-call heist, and the two controls that stop synthetic executives.',
    date: '2026-06-03',
    updated: '2026-08-18',
    readMin: 5,
    lane: 'All industries',
    laneTo: '/',
    intro:
      'A familiar voice is no longer proof that a payment request came from the owner. Criminals can clone public audio and use it to pressure an employee into sending money before there is time to ask questions. The loss happens because the company treats recognition as authorization.',
    sections: [
      {
        h: 'How little the attacker needs',
        ps: [
          'Three seconds of audio, a voicemail greeting, a conference talk, a social clip, trains a usable voice clone. Your executives\' voices are already public. The attack that follows is not sophisticated: a phone call to accounts payable that sounds exactly like the owner, urgent and plausible: "I\'m boarding a flight, the acquisition closes today, wire the deposit now, keep it quiet."',
          'Smaller businesses are the growth market, not the exception. A $40K fraudulent transfer from a 30-person contractor is easier to execute and rarely makes the news: the playbook is identical.',
        ],
      },
      {
        h: 'Do not make employees judge whether a voice is real',
        ps: [
          '"Listen for robotic artifacts" was 2023 advice. Current voice synthesis passes casual inspection, and video is close behind. Any defense that depends on a stressed employee out-detecting a synthetic voice in real time will eventually fail.',
          {text: 'The controls that work are procedural, because procedure does not care how good the fake is. One: a payment-verification protocol, meaning every new or changed payment instruction gets a callback to a known-good number, no exceptions, including "the CEO" personally. Two: an authorized simulation, testing the process against a realistic impersonation request and coaching on any gap. Helm Command installs the protocol and trains the team; targeted drills are separately scoped.', links: [{phrase: 'payment-verification protocol', to: '/helm-command'}, {phrase: 'Helm Command', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Require a callback to a known number and a second approval for high-consequence payment changes, even when the request sounds like the owner. Helm Command can help write and rehearse that process.',
  },
  {
    slug: 'law-firm-device-security-checklist',
    metaTitle: "Law Firm Device Security: Laptops and Remote Work | Helm",
    title: 'Law Firm Device Security Checklist: Laptops, Remote Work, and Lost Devices',
    metaDesc:
      'A practical device security checklist for small law firms covering inventory, monitoring, encryption, remote work, lost devices, and evidence for clients and insurers.',
    date: '2026-08-18',
    readMin: 6,
    lane: 'Law Firms',
    laneTo: '/law-firms',
    intro:
      'A lost laptop can give someone access to client email, case files, billing, trust-accounting systems, and saved browser sessions. Law-firm devices leave the office every day for court, travel, and remote work, so office-network security alone does not protect the information on them.',
    sections: [
      {
        h: 'Why the device belongs in the confidentiality conversation',
        ps: [
          'ABA Model Rule 1.6(c) calls for reasonable efforts to prevent unauthorized disclosure of, or access to, information relating to a client representation. The ABA describes that as a risk-based duty, which means the sensitivity of the information, the likelihood of exposure, and the practical safeguards available all matter.',
          'The ABA 2023 Cybersecurity TechReport found that 29 percent of respondents said their firm had experienced a security incident. The survey definition included events such as lost or stolen computers and smartphones, so the figure should not be read as 29 percent confirmed data breaches. It does show why device loss and compromise belong in the same risk discussion as hacking.',
        ],
      },
      {
        h: 'Start with a device inventory that names an owner',
        ps: [
          'List every firm-owned Windows and Mac computer, who uses it, what operating system it runs, whether storage encryption is enabled, whether security updates install automatically, and whether the firm can see when its security software stops checking in. Include shared reception computers and seldom-used loaners, not only partner laptops.',
          'Record which systems each device can reach. If a laptop can open email, document management, billing, trust accounting, and cloud storage, losing it may require immediate session revocation and a review of client information that could have been accessible. A kiosk with no saved credentials creates a different level of exposure.',
        ],
      },
      {
        h: 'Apply a baseline that can be checked',
        ps: [
          'Require a screen lock, full-disk encryption, supported operating systems, automatic security updates, separate administrator access, multi-factor authentication, and a managed security service that can investigate suspicious behavior. CISA ransomware guidance recommends centrally managed protection and detection-and-response coverage across organizational assets.',
          {text: 'Helm Core provides round-the-clock monitoring, human investigation, and containment for covered Windows and Mac devices. That does not replace patching, backups, identity controls, or a written incident plan, but it closes the gap between an alert appearing and someone qualified acting on it.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
        ],
      },
      {
        h: 'Write the lost-device procedure before a laptop disappears',
        ps: [
          'The procedure should name one person to call, how to disable the user account and revoke active sessions, how to determine what client information may have been accessible, and when counsel, the insurer, affected clients, or other parties must be consulted. Preserve facts and timestamps instead of guessing whether exposure occurred.',
          'Phones and tablets need their own identity, email, and device-management controls. Standard Helm Core coverage does not install the same security agent on iOS or Android, so a complete firm plan must address those devices separately.',
        ],
      },
      {
        h: 'Keep evidence that the checklist is operating',
        ps: [
          'A policy alone cannot show that a device was encrypted, monitored, or updated. Keep a current inventory, deployment status, encryption status, update records, incident contacts, and evidence that departed users were removed. Review exceptions instead of allowing them to become permanent.',
          {text: 'If a client or carrier asks whether every device is protected, the defensible answer is the current inventory plus the evidence behind it. Helm Command can help turn those questions into a documented gap list and an owned remediation plan.', links: [{phrase: 'Helm Command', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Keep a current device inventory, require encryption and screen locks, monitor covered computers, and write down what happens when a device is lost. Address phones and tablets separately instead of assuming laptop protection covers them.',
  },
  {
    slug: 'wisp-checklist-accounting-firms',
    title: 'WISP Checklist for Tax and Accounting Firms',
    metaDesc:
      'What a Written Information Security Plan should contain for a small tax or accounting firm, with IRS and FTC requirements translated into an operating checklist.',
    date: '2026-08-18',
    readMin: 6,
    lane: 'Accounting Firms',
    laneTo: '/accounting-firms',
    intro:
      'A generic Written Information Security Plan can create a second problem during a breach or review: it may claim safeguards that the firm never implemented and omit the systems that actually hold client tax data. The IRS requires tax professionals to maintain a WISP, and the FTC Safeguards Rule includes tax-preparation firms. The document needs to describe the practice as it operates today.',
    ctaMode: 'book',
    sections: [
      {
        h: 'Why the plan needs current facts',
        ps: [
          'The IRS reported nearly 300 tax-professional data breaches in the first half of 2025, potentially affecting as many as 250,000 clients. Those are reported incidents, not an estimate of every breach, and they cover tax professionals nationally. The scale shows how one compromised practice can expose far more people than its employee count suggests.',
          'A WISP should be appropriate to the size and complexity of the firm and the sensitivity of the customer information it handles. A five-person tax practice does not need the bureaucracy of a national firm, but it does need a plan that accurately describes its own safeguards.',
        ],
      },
      {
        h: 'Name the coordinator and the information in scope',
        ps: [
          'Assign one person to coordinate the information-security program, even if security is not that person’s full-time role. Give that owner the authority to maintain the plan, collect evidence, follow up on exceptions, and coordinate service providers.',
          'Inventory the customer information the firm receives and where it moves: email, portals, tax software, workstations, shared drives, payroll systems, cloud storage, backups, paper records, and vendor platforms. Include seasonal staff and remote work because the plan must cover the way the firm actually operates during its busiest months.',
        ],
      },
      {
        h: 'Assess risk and match each safeguard to it',
        ps: [
          'For each system or workflow, identify the plausible threat, the weakness that could be exploited, the current safeguard, and what remains unresolved. Common examples include mailbox takeover, malicious attachments, stolen passwords, unsupported computers, excessive access, untested backups, and former workers whose accounts remain active.',
          {text: 'Helm Core includes managed email protection, suspicious-message triage, simulations, and awareness learning. Specialist vendor security teams provide continuous investigation and containment for covered Windows and Mac devices; Helm manages deployment, coordination, and reporting. Core does not replace the WISP. Its covered controls and operating records can support the statements in the plan.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
        ],
      },
      {
        h: 'Document service providers, testing, and response',
        ps: [
          'The IRS checklist includes selecting service providers that maintain safeguards for customer information. Record what each provider handles, the relevant contract or assurance evidence, the responsible internal owner, and how the relationship is reviewed.',
          'State how the firm checks whether safeguards still work. That can include account reviews, device-coverage checks, training records, backup restoration tests, phishing reporting, and an annual tabletop. Add a response path for a suspected breach that names the insurer, legal contacts, technology providers, and IRS and state reporting steps.',
        ],
      },
      {
        h: 'Keep the WISP evergreen',
        ps: [
          'Review the plan after meaningful technology, staffing, vendor, or workflow changes and after any security incident. Record the review date and decisions made, including risks accepted temporarily and the person responsible for closing each gap.',
          {text: 'Helm Command can assess the plan against the practice that exists today, identify statements that lack evidence, and produce a prioritized remediation roadmap. Remediation is a separate decision after the gaps are known.', links: [{phrase: 'Helm Command', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Name the person responsible for the WISP, map where client information moves, connect each risk to a safeguard, and document testing, vendors, and incident response. When the document and the practice disagree, correct the control or update the plan.',
  },
  {
    slug: 'hipaa-risk-analysis-medical-practices',
    title: 'HIPAA Security Risk Analysis for Small Medical Practices',
    metaDesc:
      'How a small medical or dental practice can scope and document a HIPAA Security Rule risk analysis across email, devices, EHR access, vendors, and daily workflows.',
    date: '2026-08-18',
    readMin: 7,
    lane: 'Medical Practices',
    laneTo: '/medical-practices',
    intro:
      'A practice that reviews only the EHR can miss patient information in email, billing, imaging, backups, phones, and vendor accounts. Those blind spots matter when a device is lost or an account is compromised because the practice may not know what information was accessible. A HIPAA risk analysis should follow electronic patient information through the systems and workflows the practice actually uses.',
    ctaMode: 'book',
    sections: [
      {
        h: 'Start with scope, not a checklist score',
        ps: [
          'HHS says the analysis covers all electronic protected health information the organization creates, receives, maintains, or transmits. The EHR is only one system. Email, billing, imaging, scheduling, backups, file shares, cloud services, copiers, workstations, laptops, tablets, phones, and vendor access can all enter scope.',
          'HealthIT.gov specifically warns providers not to limit the analysis to the EHR and says to include devices that can access EHR data, including tablets and a practice manager’s mobile phone. A system does not need to store a permanent copy of patient information to create access risk.',
        ],
      },
      {
        h: 'Use the small-practice tools for their intended purpose',
        ps: [
          'The HHS Security Risk Assessment Tool was designed for smaller practices. Its user guide says the historical small-to-medium definition used for the tool is one to ten healthcare providers. HHS also makes clear that completing the tool does not by itself establish compliance.',
          'A tool can organize the work, but the evidence still has to describe the practice. Record each system, the information involved, who can access it, where it is used, the threats and vulnerabilities, existing safeguards, likelihood, impact, and the decision made about remediation.',
        ],
      },
      {
        h: 'Treat email and work devices as different control layers',
        ps: [
          {text: 'Helm Core can protect compatible business email from phishing and impersonation while providing employee reporting, triage, simulations, and awareness learning. It does not include a secure-message portal, encrypted outbound delivery, or secure file transfer, so any workflow that sends patient information may require a separately scoped secure delivery solution.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
          {text: 'Helm Core provides 24/7 monitoring, investigation, and containment for covered Windows and Mac workstations. It does not cover every technology in a practice. Phones, tablets, servers, medical devices, identity systems, networks, and vendor platforms must be addressed elsewhere in the risk analysis and separately scoped where protection is needed.', links: [{phrase: 'Helm Core', to: '/helm-core'}]},
        ],
      },
      {
        h: 'Turn findings into owned decisions',
        ps: [
          'A risk analysis is an input to risk management. For each finding, name the corrective action, owner, expected evidence, target date, and any interim safeguard. If the practice decides that a particular measure is not reasonable and appropriate, document the rationale and any equivalent measure rather than treating the requirement as optional.',
          'Prioritize issues that combine sensitive information, broad access, weak detection, and meaningful operational impact. A front-desk workstation with EHR, email, and billing access may deserve attention before a rarely used system with tightly limited access, even if both appear on the inventory.',
        ],
      },
      {
        h: 'Revisit the analysis when the practice changes',
        ps: [
          'HHS describes risk analysis as an ongoing process. Review it when the practice changes an EHR or billing vendor, opens a location, adopts telehealth, adds remote work, changes email systems, brings in a new device class, or experiences an incident. Keep the previous analysis and document what changed.',
          {text: 'Helm Command provides a fixed-fee HIPAA Security Rule gap assessment for an agreed scope, with documented findings and a prioritized roadmap. It supports readiness and remediation planning, but Helm does not certify that a practice is HIPAA compliant.', links: [{phrase: 'Helm Command', to: '/helm-command'}]},
        ],
      },
    ],
    takeaway:
      'Map every place electronic patient information is stored or accessible, record the current safeguards and unresolved risks, and give each corrective action an owner and date. Revisit the analysis when the practice changes systems, vendors, locations, devices, or workflows.',
  },
];
