/** Reviewed copy data. LanePage integration and release checks are separate. */
export type LaneBuyerCopy = {
  selection: {title: string; paragraphs: string[]; links: {label: string; to: string}[]};
  responsibility: {
    title: string;
    intro: string;
    caption: string;
    headers: [string, string, string];
    rows: [string, string, string][];
    link: {label: string; to: string};
  };
  duty?: {title: string; text: string; links: {label: string; to: string}[]};
  services: {title: string; paragraphs: string[]; link: {label: string; to: string}}[];
  sectionCopy?: {
    evidence: {title: string; intro: string};
    questions: {title: string; intro?: string};
    resources: {title: string; intro?: string};
  };
};

export const laneBuyerCopy: Partial<Record<string, LaneBuyerCopy>> = {
  "law-firms": {
    "selection": {
      "title": "What should a 50-person New Jersey law firm look for?",
      "paragraphs": [
        "Look for a provider that can show which accounts and computers it protects, who investigates alerts after hours and what action it is authorized to take. Check how it works with IT on document and practice-management systems and recovery, and who at the firm makes confidentiality decisions. The proposal should make those responsibilities clear.",
        "Ask the provider to walk through a hypothetical mailbox compromise. Have it explain what it can inspect, when it contacts the firm and which tasks pass to IT, a specialist responder or counsel. Compare that explanation with the service order and a redacted deliverable."
      ],
      "links": [
        {
          "label": "Compare in-house and managed security for law firms",
          "to": "/resources/law-firm-managed-vs-in-house-security/"
        }
      ]
    },
    "responsibility": {
      "title": "Who handles the work with Helm?",
      "intro": "Specialist vendor security teams provide continuous monitoring and containment within the covered services. Helm manages deployment, coordinates with your IT provider and prepares reports. Helm reviews and acts on alerts Monday through Friday, 9 a.m. to 5 p.m. Eastern, excluding federal holidays.",
      "caption": "Responsibilities to confirm in the service order",
      "headers": [
        "Work",
        "What Helm covers",
        "Your firm, IT and other providers"
      ],
      "rows": [
        [
          "Email and supported identities",
          "Core manages covered email protection and supported identity monitoring.",
          "IT administers accounts, permissions and MFA settings. The firm approves access and exceptions."
        ],
        [
          "Eligible Windows and Mac workstations",
          "Vendor security teams investigate threats and can contain covered devices. Helm manages deployment and reporting.",
          "IT patches and administers devices, configures encryption and handles routine remediation. Phones, tablets, servers and network equipment need separate scope."
        ],
        [
          "Document, practice-management and trust-accounting systems",
          "Any protection beyond covered email, identities and workstations needs a separate agreement.",
          "IT or the application provider manages permissions, updates and application recovery. The firm approves matter access and retention."
        ],
        [
          "Backup and recovery",
          "Core backs up supported Microsoft 365 or Google Workspace data.",
          "IT handles backups outside Helm’s covered service. Agree who will perform restores; application recovery and wider business continuity need their own scope."
        ],
        [
          "Incident authority and handoff",
          "Containment depends on the authority agreed with the firm and what the platform supports. Helm coordinates security exceptions with the IT contact.",
          "The firm appoints decision-makers and backup contacts. IT or a separately engaged responder handles recovery. Leadership and counsel make business and notification decisions."
        ],
        [
          "Security program and client answers",
          "Core supplies a monthly report. Command adds a maintained risk register and roadmap, keeps evidence current and provides questionnaire help within agreed limits.",
          "Partners remain responsible for client commitments and final attestations. IT supplies technical records and carries out assigned changes."
        ]
      ],
      "link": {
        "label": "Review Helm’s service delivery, data handling and current gaps",
        "to": "/trust/"
      }
    },
    "duty": {
      "title": "Confidentiality decisions stay with the firm",
      "text": "New Jersey RPC 1.6(f) requires reasonable efforts to prevent inadvertent or unauthorized disclosure of, or unauthorized access to, information relating to client representation. The responsible lawyer should assess the safeguards the firm needs for its circumstances and client commitments.",
      "links": [
        {
          "label": "New Jersey Rules of Professional Conduct",
          "to": "https://www.njcourts.gov/sites/default/files/rpc.pdf"
        },
        {
          "label": "New Jersey Supreme Court guidance quoting RPC 1.6(f)",
          "to": "https://dspace.njstatelib.org/server/api/core/bitstreams/6e8ead0d-65f0-45ed-a465-1b0764665da6/content"
        },
        {
          "label": "ACPE Opinion 701: electronic client files (Rutgers Law Library copy)",
          "to": "https://njlaw.rutgers.edu/ethics/pdfs/acp701_1.pdf"
        }
      ]
    },
    "services": [
      {
        "title": "Helm Core",
        "paragraphs": [
          "For a 50-person firm whose partners and IT provider already handle security decisions, evidence and follow-up, Core is the standard option to consider. It includes managed email, device and supported identity protection, cloud productivity backup, awareness learning and simulations, digital risk protection and an automated monthly report.",
          "Core costs $125 per covered user per month, with a $2,500 monthly account minimum. It includes up to two eligible Windows or Mac workstations per covered user; additional eligible workstations are $12 each per month."
        ],
        "link": {
          "label": "Review Core coverage and terms",
          "to": "/helm-core/"
        }
      },
      {
        "title": "Helm Command",
        "paragraphs": [
          "Command adds ongoing security-program leadership to the covered Core stack for qualified organizations with 75 to 250 people. Helm maintains the risk register, 12-month roadmap and evidence, drafts bounded questionnaire and insurance responses, leads quarterly reviews and an annual tabletop, and coordinates with existing IT.",
          "Pricing starts at $10,000 per month. The final quote depends on covered users and agreed scope. If your firm needs help maintaining its program, describe that work in the fit discussion so we can confirm what the service would cover."
        ],
        "link": {
          "label": "Review Command scope and terms",
          "to": "/helm-command/"
        }
      }
    ],
    "sectionCopy": {
      "evidence": {
        "title": "What the published sources show",
        "intro": "The ABA survey covers law firms; the FBI loss figure spans many industries. Neither gives the likelihood of an incident at your firm."
      },
      "questions": {
        "title": "Questions to answer with your firm and IT provider"
      },
      "resources": {
        "title": "Related guides"
      }
    }
  },
  "accounting-firms": {
    "selection": {
      "title": "What should an accounting or tax firm ask a security provider?",
      "paragraphs": [
        "Ask how the service covers permanent and seasonal staff, which systems holding client information it can monitor and what happens to filing work if it isolates a covered workstation or restricts a supported account. The proposal should say who will maintain the WISP and answer client or vendor questionnaires, and how your firm and IT provider will handle the work that stays with them.",
        "Before onboarding, check proposed changes against the filing calendar and test a recovery or access handoff with harmless records. Include tax software, payroll systems and document portals outside your main email platform. Ask their administrators to confirm how those applications are protected, who has access and who handles recovery."
      ],
      "links": [
        {
          "label": "Compare Core and Command for accounting firms",
          "to": "/resources/accounting-firms-core-vs-command/"
        }
      ]
    },
    "responsibility": {
      "title": "Who handles the work with Helm?",
      "intro": "Specialist vendor security teams provide continuous monitoring and containment within the covered services. Helm manages deployment, coordinates with your IT provider and prepares reports. Helm reviews and acts on alerts Monday through Friday, 9 a.m. to 5 p.m. Eastern, excluding federal holidays.",
      "caption": "Responsibilities to confirm before tax-season onboarding",
      "headers": [
        "Work",
        "What Helm covers",
        "Your firm, IT and other providers"
      ],
      "rows": [
        [
          "Email, supported identities and seasonal access",
          "Core manages covered email protection and supported identity monitoring.",
          "The firm approves seasonal access and end dates. IT sets up accounts, permissions and MFA, and removes access when it ends."
        ],
        [
          "Eligible Windows and Mac workstations",
          "Vendor security teams investigate threats and can contain covered devices. Helm manages deployment and reporting.",
          "IT maintains the inventory, patches and administers devices, configures encryption and performs routine remediation. Phones, tablets, servers and network equipment need separate scope."
        ],
        [
          "Tax software, payroll systems and client portals",
          "Any protection beyond covered email, identities and workstations needs a separate agreement.",
          "IT or the application provider handles application access, updates and recovery. The firm approves how client information is used and shared."
        ],
        [
          "Backup and filing continuity",
          "Core backs up supported Microsoft 365 or Google Workspace data.",
          "Agree who will restore the data for each system. IT or the application provider handles application and server recovery; partners decide which deadline-sensitive work resumes first."
        ],
        [
          "WISP and evidence of safeguards",
          "Core supplies a monthly report. Command adds risk planning, keeps evidence current and coordinates work within its agreed scope.",
          "The firm remains accountable for its program and agrees who will keep the WISP current. IT supplies control records and carries out assigned changes."
        ],
        [
          "Client, vendor and insurance questionnaires",
          "Command drafts questionnaire responses within agreed limits, using verified program evidence. The service order sets the volume and turnaround.",
          "The firm reviews and approves the final answers. IT and application providers supply facts about the systems they administer."
        ],
        [
          "Incident authority and handoff",
          "Containment depends on the authority agreed with the firm and what the platform supports. Helm coordinates security exceptions with the IT contact.",
          "The firm appoints a decision-maker and an alternate for busy periods. IT or a separately engaged responder handles recovery. Leadership and advisers handle decisions about communications and reporting duties."
        ]
      ],
      "link": {
        "label": "Review Helm’s service delivery, data handling and current gaps",
        "to": "/trust/"
      }
    },
    "services": [
      {
        "title": "Helm Core",
        "paragraphs": [
          "Core is the standard fit for firms with 20 to 75 people that already have someone responsible for the WISP, security decisions and follow-up with IT. It includes managed email, device and supported identity protection, cloud productivity backup, awareness learning and simulations, digital risk protection and an automated monthly report.",
          "Core costs $125 per covered user per month, with a $2,500 monthly account minimum. It includes up to two eligible Windows or Mac workstations per covered user; additional eligible workstations are $12 each per month. Check who is covered as seasonal staff join and leave."
        ],
        "link": {
          "label": "Review Core coverage and terms",
          "to": "/helm-core/"
        }
      },
      {
        "title": "Helm Command",
        "paragraphs": [
          "Command is designed for qualified organizations with 75 to 250 people that need ongoing security-program leadership. It includes the covered Core stack, a maintained risk register, 12-month roadmap, evidence upkeep, bounded questionnaire and insurance responses, quarterly leadership reviews, an annual tabletop and coordination with existing IT.",
          "Pricing starts at $10,000 per month. The final quote depends on covered users and agreed scope. Bring a redacted questionnaire or an unfinished WISP task to the fit discussion so we can check what the service would cover."
        ],
        "link": {
          "label": "Review Command scope and terms",
          "to": "/helm-command/"
        }
      }
    ],
    "sectionCopy": {
      "evidence": {
        "title": "What the published sources show",
        "intro": "The IRS figures are reports from the first half of 2025. They do not give the likelihood of a breach at your firm."
      },
      "questions": {
        "title": "Questions to answer with your firm and IT provider"
      },
      "resources": {
        "title": "Related guides"
      }
    }
  }
};
