import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const medicalProposalArticle: Article = {
  "slug": "compare-cybersecurity-proposals-medical-practice",
  "title": "How to compare cybersecurity proposals for a medical practice",
  "metaTitle": "Compare Medical Practice Cybersecurity Proposals | Helm",
  "metaDesc": "Compare medical-practice security proposals by clinical workflow, written coverage, response duties and total cost. Includes a proposal comparison worksheet.",
  "date": "2026-10-15",
  "readMin": 9,
  "lane": "Medical and dental practices",
  "laneTo": "/medical-practices/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "ctaMode": "book",
  "intro": "Investigating an alert and restoring a front-desk workstation are different commitments. A cybersecurity proposal needs to explain who owns each, even when another provider will handle the recovery.",
  "lead": [
    "Use this hypothetical with each bidder: a covered front-desk workstation raises a serious alert after closing. The responder considers isolating it, and the next clinic depends on access to the electronic health record (EHR). Ask the bidder and your retained IT provider to follow the event together and point to the commitments in the proposed contract.",
    "For an independent medical or dental practice, compare those answers against the same list of systems and patient-information workflows. An important exclusion can be acceptable when another provider has agreed to handle it. Resolve missing clinical coverage, response ownership and material costs before treating an offer as ready to sign."
  ],
  "takeaway": "",
  "sections": [
    {
      "h": "Give bidders the same practice brief",
      "ps": [
        {
          "text": "Keep patient records, credentials and sensitive system details out of an initial vendor inquiry. HHS's risk-analysis guidance covers all electronic protected health information, or ePHI, a regulated organization creates, receives, maintains or transmits. Use the practice's analysis to identify what this purchase needs to address. The HIPAA risk-analysis guide explains that broader review.",
          "links": [
            {
              "phrase": "HHS's risk-analysis guidance",
              "to": "https://www.hhs.gov/hipaa/for-professionals/security/guidance/guidance-risk-analysis/index.html",
              "start": 97
            },
            {
              "phrase": "HIPAA risk-analysis guide",
              "to": "/resources/hipaa-risk-analysis-medical-practices/",
              "start": 336
            }
          ]
        },
        "Prepare the brief with IT and someone who understands clinical operations. Include staff groups, locations and remote access, then describe the systems supporting each workflow. Distinguish an EHR hosted by its vendor from a practice-managed server or workstation used to reach it. A quote for protecting the workstation leaves the EHR service itself to be addressed.",
        "Ask every bidder to return the same brief marked included, separately priced, excluded or unanswered. For an exclusion, record the provider that will handle the work and whether it has accepted that responsibility. Keep a question open when the answer is only an assumption about another vendor.",
        {
          "table": {
            "caption": "Practice details to carry into every proposal",
            "headers": [
              "Workflow",
              "Detail the bidder needs",
              "Coverage to establish"
            ],
            "rows": [
              [
                "Front desk and scheduling",
                "Shared workstations, individual accounts and remote access",
                "Which computers and identities qualify for protection"
              ],
              [
                "EHR and clinical records",
                "Hosting arrangement, access route and responsible vendor",
                "Boundary between access-device protection and EHR operation"
              ],
              [
                "Referrals and billing",
                "Approved message, fax, portal and file-transfer routes",
                "Services covered at each handoff"
              ],
              [
                "Imaging and clinical equipment",
                "Equipment classes and their support providers",
                "Explicit exclusions and the qualified support route"
              ],
              [
                "Recovery",
                "Cloud files, mail, EHR data and other essential records",
                "Separate recovery responsibility for each workload"
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Check the BAA against the proposed services",
      "ps": [
        {
          "text": "HHS's cloud guidance explains that a cloud provider maintaining ePHI on behalf of a covered entity or business associate is a business associate even without the decryption key. It also discusses service-level agreements alongside business associate agreements, or BAAs. Have the appropriate adviser assess the actual relationship and agreements.",
          "links": [
            {
              "phrase": "HHS's cloud guidance",
              "to": "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html",
              "start": 0
            }
          ]
        },
        "Match the offer's legal entity and covered services, including backup and support access, to the applicable agreements. Record which party contracts with subcontractors handling ePHI. Check the service schedule for restoration duties; the BAA alone leaves operational details to be confirmed."
      ]
    },
    {
      "h": "Separate incoming email protection from outgoing PHI delivery",
      "ps": [
        "A proposal headed email security may describe phishing detection and reported-message triage. For a referral or patient message, you also need to establish how information reaches the intended recipient, who administers that delivery method and how staff get help when it fails. Ask for separate answers for incoming threats and outgoing patient information.",
        "Compare the exact licensed service, configuration work, staff instructions and support included for each exchange. If a secure portal or protected delivery product is priced separately, carry its implementation and ongoing charges into the comparison. Include the work IT and the practice will retain, such as administering the service and approving the procedure staff follow.",
        {
          "text": "The HIPAA email guide explains safeguard decisions and patient-request procedures. Use it with the practice's responsible advisers when reviewing a delivery workflow. During a vendor demonstration, use harmless sample content and approved test recipients so staff can see how opening, replying and failed delivery would work.",
          "links": [
            {
              "phrase": "HIPAA email guide",
              "to": "/resources/hipaa-email-rules-small-practices/",
              "start": 4
            }
          ]
        }
      ]
    },
    {
      "h": "Keep EHR and medical-device exclusions visible",
      "ps": [
        "Require a separate answer for vendor-hosted EHR services, practice servers, imaging systems and clinical equipment. A supported Windows computer and a medical device running Windows should not be treated as interchangeable entries in the quote. Ask whether protection is supported on the actual equipment and who can approve any proposed change.",
        "Have the manufacturer or qualified device-support provider review monitoring agents, updates, isolation and other changes affecting clinical equipment with the practice's clinical lead. Do not use the proposal review to make those changes yourself. Record the approved support route and any remaining work before accepting a coverage claim.",
        "For an excluded EHR or imaging service, ask its provider how incidents and outages reach the practice and its other responders. Put the contact and agreed recovery role next to the exclusion. A cybersecurity provider can coordinate a handoff only within the access and authority the parties have agreed."
      ]
    },
    {
      "h": "Walk through an interruption after the practice closes",
      "ps": [
        "With the scope in writing, return to the front-desk exercise. Trace each handoff and check whether the proposed contract assigns the work:",
        {
          "list": [
            "Monitoring and investigation: establish who receives the alert, which system it can investigate and whether a human reviews it after hours.",
            "Containment: confirm the responder's authority, supported actions and any approval needed. Agree who reaches the practice's decision-maker if the usual contact cannot answer.",
            "Recovery: identify who repairs or rebuilds the workstation, who restores each affected workload and who confirms that staff can use the result. Check any separately billed response work.",
            "Clinical operations: the practice's authorized clinical lead decides how the approved downtime procedure applies. Establish how that person can reach the technical responders without relying on the affected system.",
            "Notification: distinguish the provider's alert to the practice from decisions about patient, regulator or insurer notices. Record the practice contact and advisers who assess those obligations and the contractual reporting commitments they need to review."
          ]
        },
        "Record acknowledgement, investigation and recovery commitments separately, with their hours and conditions. A rapid acknowledgement leaves the time to useful action unresolved unless the agreement explains it. If the exercise stops because nobody owns the next step, request a revised proposal or a written agreement from the missing provider."
      ]
    },
    {
      "h": "Request examples that let you check the promised work",
      "ps": [
        "Ask for a redacted sample showing a covered computer, an exception and the action assigned to the practice or IT. Follow one entry through the proposed reporting process, from a computer that stops reporting to the person assigned to check it. Confirm who follows up and what evidence shows protection is working again.",
        "For a proposal that includes a HIPAA assessment, request its exact scope, deliverables and reviewer role. For recurring governance, check which records the provider maintains and what triggers an update. A one-time assessment and ongoing evidence upkeep should have separate commitments when they are sold as separate work.",
        "For recovery, request the list of backed-up workloads and an agreed way to verify a usable restore. Keep EHR and imaging recovery separate from business-email backup. With the relevant system owners, agree how a safe test will be authorized and who will act on a failed result."
      ]
    },
    {
      "h": "Compare the full financial commitment",
      "ps": [
        "Carry the common brief into the price comparison. If one proposal counts users and another counts devices, have each bidder price the same population. Include shared clinical workstations and any separately supported equipment. Check minimum charges and how growth changes the fee.",
        "Show the first year and the full proposed initial term separately. Include onboarding, additional licenses, secure delivery and recovery services outside the security package. Add retained IT costs and approved projects, with annual adjustments where applicable. Leave an unknown amount marked unquoted; a blank cost cell can make an incomplete proposal appear cheaper.",
        "Before signing, confirm renewal and notice dates, early termination charges, export arrangements and transition assistance. Ask how reports and configuration records reach the incoming provider, which party removes access and how protection continues during the change. Have the appropriate adviser review contractual provisions affecting the practice's obligations and access to its information.",
        {
          "text": "For the wider choice between a standard protection service and program leadership, use the provider-model comparison. The New Jersey MSP guide also has a general vendor scorecard. This guide's companion worksheet records medical coverage and contract answers across proposals without assigning a vendor ranking.",
          "links": [
            {
              "phrase": "provider-model comparison",
              "to": "/resources/managed-service-provider-security-models/",
              "start": 91
            },
            {
              "phrase": "New Jersey MSP guide",
              "to": "/resources/managed-service-providers-new-jersey/",
              "start": 122
            }
          ]
        }
      ]
    },
    {
      "h": "Where Helm fits in the comparison",
      "ps": [
        {
          "text": "Helm Core supplies managed protection for supported email, workstations and identity platforms, with cloud productivity backup, awareness learning, digital risk protection and a monthly report. Your practice keeps its IT provider. Servers, phones, network equipment and medical devices require separate written scope. Core's email-threat service excludes secure-message portals, encrypted outbound delivery and secure file transfer.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/",
              "start": 0
            }
          ]
        },
        {
          "text": "Helm Command adds virtual chief information security officer (vCISO) leadership, a risk register and 12-month roadmap, evidence upkeep, bounded questionnaire support, quarterly reviews, an annual tabletop and IT coordination. Your practice approves final representations. Help desk, routine patching and administration remain with IT; hands-on remediation, forensic response and breach counsel need their responsible provider or separate written scope.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/",
              "start": 0
            }
          ]
        },
        {
          "text": "Helm's Terms say covered detection and automated containment run continuously through security partners. Helm's human follow-up follows the service order. Confirm the contacts and hours in your proposal. Helm does not certify HIPAA compliance. Review current pricing and the written scope against your completed worksheet before deciding whether the service fits.",
          "links": [
            {
              "phrase": "Helm's Terms",
              "to": "/terms/",
              "start": 0
            },
            {
              "phrase": "current pricing",
              "to": "/pricing/",
              "start": 251
            }
          ]
        }
      ]
    },
    {
      "h": "Complete the comparison before choosing a provider",
      "ps": [
        {
          "text": "Use the proposal comparison worksheet with the practice's IT and clinical owners. Start with the common brief, then complete one commitment record for each bidder. The final comparison carries the status and written reference for each requirement across the proposals. Keep detailed evidence in its approved location and reference it in the worksheet.",
          "links": [
            {
              "phrase": "proposal comparison worksheet",
              "to": "/downloads/Helm_Medical_Cybersecurity_Proposal_Comparison_Worksheet.pdf",
              "start": 8
            }
          ]
        },
        "Decide which unresolved items must be settled before signature. An excluded imaging system may be covered by an existing specialist agreement; an unassigned recovery task needs further work. Record the responsible provider's acceptance, any additional cost and the practice's decision. Request the revised contract language when a sales discussion changes the offer.",
        "Keep the completed comparison with the accepted proposal. During onboarding, check that the agreed systems were enrolled, contacts are reachable and retained responsibilities were accepted. Set the first review date around the actual onboarding plan, with any unfinished work still visible."
      ]
    }
  ],
  "consultation": {
    "title": "Discuss the coverage your practice needs",
    "sub": "Bring your system categories, current IT arrangement and open proposal questions to a fit conversation. Keep patient records and credentials out of the booking details.",
    "label": "Book a fit conversation",
    "to": "/book/",
    "secondary": {
      "label": "Helm for medical and dental practices",
      "to": "/medical-practices/"
    }
  },
  "updated": "2026-10-24"
};

export const medicalProposalArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "hipaa-risk-analysis-medical-practices",
    "hipaa-email-rules-small-practices",
    "managed-service-provider-security-models",
    "cybersecurity-point-solutions-vs-managed-security"
  ],
  "sources": [
    {
      "title": "HHS: Risk analysis",
      "href": "https://www.hhs.gov/hipaa/for-professionals/security/guidance/guidance-risk-analysis/index.html"
    },
    {
      "title": "HHS: Cloud computing guidance",
      "href": "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html"
    },
    {
      "title": "Helm Core: Current service scope",
      "href": "https://helmsecured.com/helm-core/"
    },
    {
      "title": "Helm Command: Current service scope",
      "href": "https://helmsecured.com/helm-command/"
    },
    {
      "title": "Helm: Terms of Service",
      "href": "https://helmsecured.com/terms/"
    },
    {
      "title": "Helm Core: Current service scope",
      "href": "/helm-core/"
    },
    {
      "title": "Helm Command: Current service scope",
      "href": "/helm-command/"
    },
    {
      "title": "Helm: Terms of Service",
      "href": "/terms/"
    }
  ]
};
