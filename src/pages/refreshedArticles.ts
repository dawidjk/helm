import type {Article} from './articles';

// Source manuscripts: assets/marketing/resource-depth-refresh-2026-10-07/.
export const refreshedArticles: Article[] = [
  {
    "slug": "accounting-firms-core-vs-command",
    "title": "Choosing between a standardized stack and full program ownership: Helm Core vs Helm Command for accounting firms",
    "metaTitle": "Accounting Firm Security: Core vs Command | Helm",
    "metaDesc": "Choose a standardized stack when program work already has an owner. Compare Command when recurring risk, evidence and coordination need ownership.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "text": "Helm Core includes managed email protection, device detection and response, supported identity protection, cloud productivity backup, awareness learning and simulations, digital-risk protection and monthly reporting. Its standard fit is 20 to 75 people, at $125 per covered user per month with a $2,500 minimum.",
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
            "text": "Helm Command includes the covered Core stack plus a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance responses, quarterly leadership reviews, an annual tabletop and IT coordination. Its $8,000 to $15,000 monthly range is confirmed after a fit and complexity review for a qualified 75 to 250-person organization.",
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
      },
      {
        "h": "Map the systems behind the client workflow",
        "ps": [
          "An accounting firm's information can extend beyond its email platform. List tax and accounting applications, document portals, shared storage and the devices used by staff. Include temporary workers and outside specialists deliberately. A protection report for the primary tenant cannot establish coverage of an independent client portal.",
          "For each important workflow, name its business owner and technical administrator. The owner explains how staff use the information and what interruption would affect. IT identifies access, configuration and recovery dependencies. That shared view helps define which parts of a proposed security service are relevant.",
          "Review one client-document journey from receipt through retention or disposal. Identify approved transfer methods, where working copies are created and who can access them. Use fictional records for any demonstration. The exercise should expose an unclear handoff without spreading actual taxpayer or client data.",
          "Record unknowns as work to resolve. If nobody can confirm who administers a specialist application, assign that question before claiming it is protected. Service fit depends on supported platforms and a usable operating arrangement, not only employee count."
        ]
      },
      {
        "h": "Separate a written plan from operating evidence",
        "ps": [
          "A written plan records the firm's intended safeguards and responsibilities. Evidence helps establish what is operating within a defined population and period. Keep them connected: a procedure about staff departures should have an owner and records showing how completed departures were handled.",
          "Review broad statements before using them externally. An assertion that all devices are protected needs a device population and deployment evidence. A statement that backups are tested needs a workload, test date and result. A purchased subscription or annual policy approval supports a different claim.",
          "Keep exceptions visible. An unsupported device, a delayed access change or a recovery test awaiting IT needs an owner and next action. Do not remove the exception from a customer response merely because the firm intends to correct it. Future work belongs in the roadmap until verified.",
          "Use the detailed WISP resource with the responsible adviser for rule-specific decisions. This service comparison cannot determine every firm's legal obligations. The practical buying question is who will maintain the program record, check evidence and bring unresolved gaps to the person authorized to decide."
        ]
      },
      {
        "h": "Assess whether internal ownership is sustainable",
        "ps": [
          "A partner can own the security program without personally administering every system. The role needs a routine for receiving information, making decisions and following up with IT. Ask how much time the partner can actually allocate and who covers the role during an absence.",
          "For a hypothetical 30-person practice, internal ownership could work if IT supplies current records, a manager maintains the exception list and partners resolve spending decisions. Core would supply the defined protection layer. This example describes an operating arrangement, not a claim that size alone determines the correct service.",
          "Test the arrangement during a demanding period. If every questionnaire is postponed until after filing deadlines, identify whether the problem is missing evidence, limited review time or unclear approval. Those constraints may require different solutions. Adding more tools will not automatically provide an evidence owner.",
          "Discuss the same issue with a larger firm before assuming it needs Command. Some larger organizations have a capable internal program function. Others have recurring gaps across several teams. Evaluate the work and complexity against the qualified fit instead of treating the user-count ranges as automatic tier boundaries."
        ]
      },
      {
        "h": "Price the two models over the same scope",
        "ps": [
          "At the published Core rate, a fictional 30-covered-user calculation is $3,750 per month before separately scoped work or applicable charges. A smaller calculation below $2,500 would still be subject to the published minimum. Neither example is a quote; supported platforms, coverage and written terms need confirmation.",
          "Compare that recurring stack cost with Command's program scope rather than subtracting one price from the other and calling the difference an advisory fee. Command is reviewed for fit and complexity. Its service order should describe the covered population, coordination, evidence work and questionnaire limits.",
          "Put retained IT charges, transition work, licensing changes and specialist exclusions in the same worksheet. Confirm contract duration, renewal terms and price changes using the proposal. Do not assume that a monthly figure means the service can be canceled month to month.",
          "Avoid assigning a cash value to every hour saved unless the cost actually changes. Reduced evidence-chasing may free partner or IT capacity. That can support the business case, but label it as capacity and use the firm's own time records if you quantify it."
        ]
      },
      {
        "h": "Plan changes around the accounting calendar",
        "ps": [
          "Ask IT which periods make disruptive changes difficult and which controls can be improved safely before them. Some urgent findings still require prompt action. The calendar informs sequencing; it should not become an automatic reason to defer every security task until the quiet season.",
          "For an access change, check the required license, enrollment and recovery procedure before rollout. For a backup change, confirm workload coverage and arrange an authorized restore check. Name who can approve the implementation window and what evidence will show completion.",
          "At onboarding, reconcile eligible users and devices with the service records. Document unsupported applications and any separate protection. Establish a trusted reporting route and an escalation contact who can act when the principal partner is unavailable.",
          "Set an early review to resolve onboarding exceptions. A signed contract is not the acceptance test for coverage. Review actual deployment, reporting access and the handoff to existing IT. Keep the firm's responsibility map available for new staff and changes in providers."
        ]
      },
      {
        "h": "Use a specific unfinished task to make the decision",
        "ps": [
          "Bring a redacted questionnaire, a pending restore test or an unresolved access review to the fit discussion. Ask who would do each step under Core and under Command. Identify where the firm's own owner or IT provider must act and where separately scoped work is required.",
          "Request a fictional sample monthly report and, for Command, a sample risk record and leadership agenda. Check whether they help the partners approve work and understand exceptions. The useful output is an operating decision, not a larger pile of documents.",
          "Choose the arrangement whose retained responsibilities your firm can sustain. Record the next review date, the person accountable for it and the evidence expected. Revisit the choice when client requirements, staff structure or supported systems change.",
          "For seasonal staffing, check onboarding and departure dates against the covered roster. Assign who approves temporary access and who verifies removal after the engagement. Keep this task visible even when the permanent headcount does not change."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "ai-access-business-documents",
    "title": "What to check before giving AI access to business documents",
    "metaTitle": "AI Access to Business Documents: What to Check | Helm",
    "metaDesc": "Review document permissions, client confidentiality, retention, training use, connected services, and human checks before approving an AI workflow.",
    "date": "2026-10-01",
    "readMin": 8,
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
      },
      {
        "h": "Draw the data path before approving a connection",
        "ps": [
          "List the source repository, the person initiating the task, the AI platform and any connected services. Record where an input, generated response and interaction log may be stored. Add the person receiving the finished output. This simple map prevents a review from focusing only on the original folder while overlooking the copied summary.",
          "Distinguish a manual upload from an ongoing connection. An upload supplies selected material; a connection may make additional documents discoverable over time. Ask whether it indexes content, follows changes or requests permissions beyond the test folder. Confirm the behavior for the exact product rather than assuming all connectors operate alike.",
          "Review actions separately from reading. A connection able to edit records, send messages or delete files has a different consequence from one that retrieves information for a draft. Leave actions outside the approved purpose disabled where the platform allows it. If the requested permissions cannot be limited appropriately, reconsider the connection.",
          "Include other recipients in the review. An approved platform does not automatically approve every third-party agent or integration available inside it. Record each service’s purpose and data handling before enabling it for company information."
        ]
      },
      {
        "h": "Check permissions as an ordinary user",
        "ps": [
          "Choose test accounts that represent the intended users. Ask IT to inspect which documents each account can find through normal access and through the proposed AI workflow. An administrator’s successful test tells you little about whether an ordinary employee can see only the material intended for that role.",
          "Look at group membership, inherited folder permissions, broadly shared links and guest access. Resolve unnecessary access at the source instead of expecting a prompt instruction to serve as a permission boundary. Telling a tool not to reveal a file is weaker than removing access the user should not have.",
          "For an illustrative test, create a set of approved dummy documents with clearly different access rules. Confirm that a permitted user can retrieve the intended material and that an account without permission cannot retrieve it. Keep the test controlled; do not use real confidential files to find out whether access isolation works.",
          "Record the account, expected result and observed result. If the result is unexpected, stop the connection and investigate with IT. Do not broaden permissions to make the demonstration succeed before the document owner has approved that change."
        ]
      },
      {
        "h": "Decide which source is authoritative",
        "ps": [
          "An AI tool can summarize an obsolete document accurately and still produce the wrong business instruction. Before connecting a folder, identify current procedures, superseded versions and drafts. Give each approved document an owner and a review date where appropriate.",
          "Keep source references in the output when the platform supports them, then verify the references. A link to a document does not prove that the claim next to it appears there. The reviewer should check the actual passage and any surrounding exception that changes its meaning.",
          "For a policy summary, define which document controls when sources conflict. Resolve that conflict with the responsible owner before using the generated answer. Do not ask the model to decide which legal obligation or company rule should prevail based only on its preferred wording.",
          "Also consider what belongs in the output. A summary may expose sensitive information to a wider audience than the original document. Its destination needs an access review too, particularly if staff intend to paste it into email, chat or a shared presentation."
        ]
      },
      {
        "h": "Keep a usable approval record",
        "ps": [
          "Record the platform, account type, permitted data, purpose, users and reviewer. Note the configuration checked, the sources used to assess vendor terms and the date of review. Assign someone to reopen the decision when the workflow or connected service changes.",
          "The record should answer several separate questions: is the firm allowed to provide the data, does the product support the required controls, are those controls configured, and has the intended use been approved? A procurement approval or business subscription answers only part of that review.",
          "Keep contractual or professional-confidentiality questions with the responsible adviser. The operational reviewer can identify that a document contains client records or contractual restrictions. They should not quietly resolve uncertain disclosure rights by assuming that an enterprise license makes every use acceptable.",
          "Define stop conditions in advance. Unexpected access, an unapproved recipient, uncertain retention or output that exposes information to the wrong audience should trigger a review. Staff need a named contact and a practical way to stop using the workflow while that happens."
        ]
      },
      {
        "h": "Plan removal before adding access",
        "ps": [
          "Write down how the organization disconnects the source, revokes the integration and removes unnecessary account permissions when the test ends. Confirm what happens to any indexed or uploaded content under the platform’s documented controls. Disconnecting a source and deleting retained copies are separate questions.",
          "Check offboarding as well. Removing an employee from a source folder may not address information they previously copied into prompts or outputs. Your retention, account and incident processes should account for those records without promising that every copy can be instantly erased.",
          "Test the removal procedure using approved dummy material. Ask IT to confirm that the access grant is gone and that the account can no longer retrieve the intended source. Record any remaining retention dependency rather than declaring deletion complete from a disappearing button or chat entry.",
          "Keep the review proportional to the task. A narrow test using synthetic information needs a smaller approval record than an ongoing connection to a business repository. The purpose is to make the real data movement and responsibilities clear, so the firm can make an informed decision before granting access."
        ]
      }
    ],
    "lead": [],
    "updated": "2026-10-07",
    "readingLayout": true
  },
  {
    "slug": "ai-phishing-red-flags",
    "title": "AI Phishing: Verification Beyond Typos",
    "metaDesc": "Verify the action behind a polished message. Review account protection, payment checks, reporting and harmless training scenarios with the assigned owners.",
    "date": "2026-07-03",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A well-written message can still ask an employee to hand over credentials, disclose client information or move money without authorization. Grammar and presentation may supply clues, but they do not establish whether the requested action is legitimate. Staff need a way to verify the action through an approved route.",
    "sections": [
      {
        "h": "Start with what the message asks you to do",
        "ps": [
          "Identify the requested action before evaluating the writing. Does it ask for a password, an authentication approval, an attachment upload, a payment change or access to a new application? Determine whether that action belongs in the firm's normal workflow and whether the sender has the relevant authority.",
          "An expected invoice and an unexpected banking change are different decisions even when they arrive in the same thread. A familiar client requesting a file and an unfamiliar destination for that file also require separate consideration. The message's context can be accurate while the requested next step is unauthorized.",
          "Give employees concrete questions: was this action expected, where is the approved record and which trusted contact can confirm it? They should not have to infer intent from a writing style or decide whether an AI model produced the text. A suspicious request can be reported without identifying the technology behind it."
        ]
      },
      {
        "h": "Keep useful clues in their proper place",
        "ps": [
          "Unexpected urgency, secrecy, a new destination or pressure to bypass approval can justify a pause. So can an unusual attachment, changed domain or request for information unrelated to the task. These are clues requiring verification, not a formula that identifies every malicious message.",
          "A message with no obvious clues may still be fraudulent if it comes from a compromised real account. Conversely, a legitimate client may write hurriedly or make a spelling mistake. Avoid training staff to approve polished messages and reject imperfect ones. Teach the action and verification rule that applies in either case.",
          "On a phone, a display name or shortened link can make a mismatch harder to notice. Use an approved application or independently saved address for the task where possible. A link's appearance alone should not become authorization to enter credentials or upload confidential files."
        ]
      },
      {
        "h": "Verify through an established route",
        "ps": [
          "For an account or login issue, open the approved application directly or use the organization's known support route. Do not supply a password in response to an email asking IT to check it. Have the administrator define how legitimate support requests are communicated so staff can compare an unusual request with that procedure.",
          {
            "text": "For a payment instruction, call a trusted number established outside the request and confirm the relevant details with an authorized person. Follow the documented approval rule before release. The invoice-fraud guide explains that process and the records connecting verification to the executed payment.",
            "links": [
              {
                "phrase": "invoice-fraud guide",
                "to": "/resources/invoice-fraud-red-flags/"
              }
            ]
          },
          "For a sensitive document request, confirm the recipient, purpose and approved exchange. A genuine outside party can still ask for a route the firm has not approved. Staff need a person who can resolve that business decision and a usable alternative when the proposed method is unsuitable."
        ]
      },
      {
        "h": "Distinguish authentication from trust",
        "ps": [
          "SPF, DKIM and DMARC help receivers evaluate authentication and policy for a domain under their configuration. They do not decide whether the contents of a message are honest. A compromised legitimate account can send a fraudulent instruction that passes authentication.",
          {
            "text": "Use the DMARC resource to understand the checks and their limits. Do not tell employees that a passing authentication result makes a payment change safe. Authentication, account protection and transaction approval perform different jobs.",
            "links": [
              {
                "phrase": "DMARC resource",
                "to": "/resources/what-is-dmarc/"
              }
            ]
          },
          "Likewise, an external-sender label identifies a message from outside the organization under the configured behavior. It does not establish that every external message is dangerous or that an unlabeled message is safe. Explain the label's purpose without asking it to carry a broader trust decision."
        ]
      },
      {
        "h": "Use account protection to reduce exposure",
        "ps": [
          "Have IT review authentication enforcement and allowed methods for the relevant accounts. Stronger methods can reduce particular attack paths while requiring an operating plan for enrollment and recovery. Check administrative, vendor and independent application accounts as appropriate to the firm's environment.",
          {
            "text": "The MFA comparison distinguishes method capabilities. A general statement that the firm has MFA should be supported by the actual policy and account population. Exceptions and alternate access paths matter when the control is being evaluated.",
            "links": [
              {
                "phrase": "MFA comparison",
                "to": "/resources/mfa-methods-compared/"
              }
            ]
          },
          "For an unexpected authentication prompt, staff should follow the approved reporting procedure rather than repeatedly approving to make it disappear. The authorized team needs the context and relevant event information. Do not ask employees to share authentication codes or passwords to demonstrate what happened."
        ]
      },
      {
        "h": "Make reporting easy enough to use",
        "ps": [
          "Give staff one clear reporting route for suspicious messages and requests. Explain what information to provide and what to do while waiting. A process that requires employees to diagnose the threat before reporting can discourage useful early reports.",
          "Avoid forwarding live suspicious attachments across the firm for opinions. Use the platform's approved reporting function or the route established by IT and the security provider. Preserve the original information in a way the authorized team can use without unnecessary redistribution.",
          "Provide feedback when appropriate. An employee who reports a legitimate but confusing message may reveal a workflow that needs clearer instructions. An employee who reports after clicking still supplies useful information. The response should focus on prompt fact gathering and corrective action."
        ]
      },
      {
        "h": "Train around the business decision",
        "ps": [
          "Use harmless training materials reflecting the firm's actual tasks. A tax practice can test document exchange; a contractor can test supplier changes; a law firm can test matter-related payment instructions. The useful measure is whether staff follow the intended verification and reporting steps.",
          "Do not present a single simulation score as a complete security rating. Outcomes depend on the scenario, population and conditions. Record what was tested, how participants responded and what correction is needed. Use the result to improve the process rather than claim that all future phishing will be stopped."
        ],
        "table": {
          "caption": "Train around the business decision",
          "headers": [
            "Scenario",
            "Decision to practice"
          ],
          "rows": [
            [
              "Password-expiry message",
              "Use the known application or support route"
            ],
            [
              "Updated supplier bank details",
              "Verify independently and obtain required approval"
            ],
            [
              "Unexpected document portal",
              "Confirm purpose, recipient and approved exchange"
            ],
            [
              "Unrequested authentication prompt",
              "Report through the approved account-security route"
            ],
            [
              "Executive request for secrecy",
              "Apply the established authority and exception process"
            ]
          ]
        }
      },
      {
        "h": "Respond when an action has already occurred",
        "ps": [
          "Ask the employee to report promptly and describe the action: opening a message, following a link, entering credentials, approving a prompt, uploading information or releasing money. Those actions can require different responses. Preserve the available facts without assuming every click caused compromise or every lack of symptoms means no issue.",
          {
            "text": "Authorized IT and security teams should assess the affected account or device and perform supported containment. The business response owner handles finance, insurer and adviser contacts when relevant. Use the incident-response guide to connect those duties.",
            "links": [
              {
                "phrase": "incident-response guide",
                "to": "/resources/incident-response-plan-small-business/"
              }
            ]
          },
          {
            "text": "For a suspected fraudulent transfer, immediate bank contact is time-sensitive. The FBI BEC guidance describes that response and IC3 reporting. Do not delay the financial action while determining whether the message was generated by AI.",
            "links": [
              {
                "phrase": "FBI BEC guidance",
                "to": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
              }
            ]
          }
        ]
      },
      {
        "h": "Review the workflow after a useful report",
        "ps": [
          "A convincing request may succeed because the firm has no trusted contact record, unclear approval authority or an unavailable approved exchange. Fix that specific gap. Adding another warning poster does not supply the missing contact or decision-maker.",
          "Review the reporting and response handoff with IT and the security provider. Confirm the covered service, required information and urgent contact route. A filtering product that blocks some mail does not necessarily investigate every employee report or perform account recovery. Those duties need written scope.",
          "Keep technical changes and staff instructions aligned. If IT introduces a new sign-in process, tell staff how legitimate prompts appear and where to obtain help. An unexplained rollout can resemble the unusual messages training asks employees to question."
        ]
      },
      {
        "h": "Fit the service to the needed work",
        "ps": [
          {
            "text": "Helm Core includes defined email protection, suspicious-message reporting and triage, awareness learning and simulations, alongside covered device and supported identity protection. Specialist vendor teams provide continuous investigation and containment behind covered capabilities. Confirm platform and population support during fit review.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Command adds program, evidence and IT coordination within written scope. Existing IT retains administration and routine remediation; specialist incident recovery needs separate scope. Helm's free public-domain scan checks limited public configuration and cannot assess every message, account or employee action. Start by reviewing one high-consequence workflow and its verification route.",
            "links": [
              {
                "phrase": "Command",
                "to": "/helm-command/"
              },
              {
                "phrase": "free public-domain scan",
                "to": "/free-scan/"
              }
            ]
          }
        ]
      },
      {
        "h": "Record the action without collecting passwords",
        "ps": [
          "A useful report identifies the message time, apparent sender, requested action and what the employee actually did. Record whether a link was opened, credentials were entered, a prompt was approved, information was uploaded or money was released. The authorized team can then choose the relevant investigation instead of responding to a vague statement that someone clicked something.",
          "Do not request the employee's password or authentication code as evidence. Use the approved platform records and reporting method. If the employee cannot supply every detail immediately, record what is known and the next fact-finding step. Accurate uncertainty is more useful than a confident assumption about whether the account was affected. Keep sensitive client content and investigation records in the approved restricted location."
        ]
      }
    ],
    "takeaway": "Use writing and context as clues, then verify the requested action through an approved route. Protect accounts, make reporting easy and test the business decision staff must make.",
    "lead": [
      {
        "text": "The FBI's December 2024 AI-fraud advisory explains that generated text can make fraudulent messages more convincing and reduce language errors. It does not mean every polished message uses AI or that ordinary phishing indicators are useless. The practical response is to combine those indicators with independent verification and a clear reporting process.",
        "links": [
          {
            "phrase": "FBI's December 2024 AI-fraud advisory",
            "to": "https://www.ic3.gov/PSA/2024/PSA241203"
          }
        ]
      }
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true,
    "metaTitle": "AI Phishing: Verification Beyond Typos | Helm"
  },
  {
    "slug": "backup-testing-insurers",
    "ctaMode": "book",
    "title": "Backup Testing: Evidence to Prepare for Cyber Insurance Questions",
    "metaDesc": "Prepare backup evidence for insurance questions. Scope restore tests, verify usable recovery, record exceptions and match answers to the actual policy wording.",
    "date": "2026-06-27",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Professional Services",
    "laneTo": "/professional-services",
    "intro": "A backup job can complete successfully without proving that the business can recover. It may protect only part of the information, depend on an unavailable administrator or take longer to restore than the business can tolerate. A useful restore test makes those limits visible before an incident.",
    "sections": [
      {
        "h": "Start with the application wording",
        "ps": [
          "Read the question carefully and define its scope with the broker where necessary. Does it refer to all critical information, particular systems or a specific testing period? Does it ask for offline storage, immutability, encryption or separation of administrative access? Those are different characteristics.",
          "Ask the existing IT provider or backup owner to identify the configuration that answers each part. Record the systems included, the date checked and the relevant evidence. If a service covers cloud email and documents, do not use it to answer a question about server, application or device recovery unless those systems are actually covered.",
          "Keep unknowns visible. If the form provides only yes or no and the true answer requires qualification, request clarification through the broker rather than making the scope sound broader than it is. The organization submitting the application owns the final representation.",
          {
            "text": "Review coverage and response terms alongside the technical questions. The FTC’s cyber insurance guidance recommends discussing the company’s needs and coverage with its insurance agent. Backup evidence is one part of that discussion, not a substitute for reviewing the policy.",
            "links": [
              {
                "phrase": "FTC’s cyber insurance guidance",
                "to": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
              }
            ]
          }
        ]
      },
      {
        "h": "Separate the protection characteristics",
        "ps": [
          "An offline copy is not continuously reachable through the ordinary network connection. An immutable arrangement restricts changes or deletion for a configured period under its supported controls. Encryption protects data through a different mechanism. None of these labels alone proves that the business can restore the required information.",
          "Ask who can change the protection settings, delete copies or shorten retention. Identify which credentials control the backup system and whether compromise of ordinary production access could affect recovery copies. The answer depends on the actual implementation, not the feature name on a proposal.",
          {
            "text": "CISA recommends offline, encrypted backups of critical data and regular testing of backup availability and integrity in a recovery scenario. That is useful general guidance, not a universal insurance condition. CISA StopRansomware guide.",
            "links": [
              {
                "phrase": "CISA StopRansomware guide",
                "to": "https://www.cisa.gov/stopransomware/ransomware-guide"
              }
            ]
          },
          "Record the limits. An immutable copy can still contain incomplete or unusable information. An offline copy can be out of date. A cloud service can depend on account access that staff cannot recover during a disruption. A restore test should investigate those dependencies rather than assuming the storage label resolves them."
        ]
      },
      {
        "h": "Define what the business needs back",
        "ps": [
          "Identify the processes that cannot operate without the information: client delivery, payroll, billing or access to working documents. Ask each process owner which systems and records it depends on. Include the sequence in which those dependencies need to return.",
          {
            "text": "Set a recovery time objective for the process and a recovery point objective for acceptable information loss. These are planning targets, not measured performance. NIST’s contingency planning guide explains the relationship between business impact, priorities and recovery planning.",
            "links": [
              {
                "phrase": "contingency planning guide",
                "to": "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"
              }
            ]
          },
          "For example, a firm may tolerate a short interruption in an archive but need current billing information before the next payment run. That is an illustrative distinction, not a prescribed target. The owners should choose the limits from the business consequences and compare them with the systems’ real capabilities.",
          "Do not set an ambitious target merely to make an application answer look strong. If current recovery capability falls short, record the gap, owner and planned action. That is more useful than confusing a desired outcome with a tested one."
        ]
      },
      {
        "h": "Scope a restore test safely",
        "ps": [
          "Select the system or data set, recovery point, test destination and success criteria. Obtain authorization from the relevant owners. Use an isolated or otherwise approved destination that avoids overwriting production information or exposing sensitive records to an unnecessary audience.",
          "Identify who will perform the restore and who will validate the result. The technical operator can confirm that files or an application were recovered. The business reviewer should confirm that the result is usable for the intended work. Both observations belong in the test record.",
          "Include access and dependencies. The test may require backup credentials, encryption keys, licenses, application software or a vendor response. Verify that authorized staff can obtain them through a documented route. A recovery plan that depends on the unavailable employee’s personal account needs correction.",
          "State what the test excludes. Recovering one file does not demonstrate full system recovery. A successful application restore in an existing environment does not establish that the environment can be rebuilt from scratch. Scope clarity makes the evidence credible and helps select the next test."
        ]
      },
      {
        "h": "Measure actual recovery and usability",
        "ps": [
          "Record when the test begins, when the selected information is available and when the business reviewer accepts it. Note active effort and delays where they explain the result. Compare the observed time with the relevant target without hiding dependencies that were supplied in advance.",
          "Check completeness and the chosen recovery point. Verify that expected records are present and readable. For an application, use approved functional checks with the application owner rather than declaring success because the service starts or a folder contains files.",
          "Look at permissions and destination security. A restore can recover content while applying access incorrectly. Confirm that the result is available to the intended users and protected from others. Keep any test copies under the required data-handling and retention process.",
          "Document failures and corrections. If the backup was missing a folder or the operator lacked required access, do not erase the failed result after fixing it. Retain the original observation, corrective action and retest outcome. That history shows what changed and supports a more accurate application answer."
        ]
      },
      {
        "h": "A restore-test evidence record",
        "ps": [
          "Keep sensitive configuration, credentials and live customer information in their approved systems. A leadership or insurance summary can reference evidence without copying unrestricted technical detail into a widely shared document."
        ],
        "table": {
          "caption": "A restore-test evidence record",
          "headers": [
            "Record field",
            "What to include"
          ],
          "rows": [
            [
              "Authorization and scope",
              "Approved system, data set and test destination"
            ],
            [
              "Recovery point",
              "Selected copy and information date"
            ],
            [
              "Protection reviewed",
              "Relevant backup settings and administrative boundaries"
            ],
            [
              "Timing",
              "Start, availability and accepted completion"
            ],
            [
              "Validation",
              "Technical checks and business reviewer’s result"
            ],
            [
              "Exceptions",
              "Missing data, access problems or excluded dependencies"
            ],
            [
              "Follow-up",
              "Owner, target date and retest evidence"
            ]
          ]
        }
      },
      {
        "h": "An illustrative incomplete test",
        "ps": [
          "Suppose a firm restores a client document successfully in a test folder. This is an illustrative example, not a Helm result. The file recovery confirms that particular content could be retrieved from the selected copy. It does not show whether the firm can operate its client-delivery process after losing identity access and its main application.",
          "The next test should address the remaining dependencies appropriate to the business priority. The firm may need to verify authorized recovery access, restore an application data set or test the handover to a business reviewer. It should not repeat the same easy file restore and describe repetition as broader recovery proof.",
          "The insurance answer should reflect the actual test. If the application asks whether critical systems are tested, the team needs to reconcile that wording with the systems covered and disclose unresolved gaps through the appropriate channel."
        ]
      },
      {
        "h": "Close the test without leaving new exposure",
        "ps": [
          "Decide how the restored test copy will be removed or retained after validation. Record its location, permitted users and disposal owner. A successful test should not leave client information in an unmanaged folder that was created only for the exercise.",
          "Check temporary accounts and permissions too. Remove unnecessary access through the approved process, and retain the evidence summary in its intended record. If the team needs a test environment for future exercises, assign ongoing ownership and a data-handling rule. That makes the next exercise easier without allowing temporary recovery arrangements to become unreviewed production systems."
        ]
      },
      {
        "h": "Set the schedule from the risk and requirements",
        "ps": [
          "Choose a frequency that reflects system changes, business priorities and any applicable policy or contract conditions. There is no general rule that every insurer requires quarterly tests. A major platform change can justify a new test before the ordinary review date.",
          "Include changes in data locations, permissions, backup configuration and recovery personnel. A test performed before a migration may not represent the current environment. Record which changes require the owner to reopen the recovery review.",
          "Keep test completion and corrective actions in the reporting process. A calendar entry alone does not show that the exercise occurred. An unresolved failed test should remain visible until it has a responsible owner and an accepted correction."
        ]
      },
      {
        "h": "Know the service boundary",
        "ps": [
          "Ask each provider which systems it protects and what recovery assistance is included. Cloud productivity backup should not be presented as a complete disaster recovery service. Routine IT administration, application recovery and broader continuity planning need assigned owners.",
          "Helm’s managed security scope includes covered cloud productivity backup. Discuss the specific coverage, evidence and division of responsibilities alongside your existing IT provider. If broader recovery work is needed, establish a separate written scope rather than assuming it is part of a security subscription."
        ]
      }
    ],
    "takeaway": "Answer backup questions from the actual configuration and test record. Define the business recovery need, test an authorized restore, validate usability and retain exceptions and corrections. Match the evidence to the insurer’s exact wording without promising coverage.",
    "lead": [
      "When an insurance application asks about backups, answer the exact question using current evidence. The form may distinguish protection of backup copies, restore testing and recovery arrangements. Requirements differ by insurer and policy. A technical report supports an answer; it does not guarantee coverage or establish that every carrier wants the same test frequency."
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true,
    "metaTitle": "Backup Testing for Cyber Insurance Questions | Helm"
  },
  {
    "slug": "check-website-security",
    "title": "How to check website security: a simple step-by-step checklist for New Jersey small businesses",
    "metaTitle": "How to Check Website Security for Your Business | Helm",
    "metaDesc": "Combine public website checks with administrator evidence about updates, access and recovery. A public scan cannot assess every internal control.",
    "date": "2026-10-06",
    "readMin": 8,
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
      },
      {
        "h": "Separate the brochure site from client systems",
        "ps": [
          "A public marketing website may collect a name and email address, while a client portal handles confidential documents. Map them separately. Identify the actual domain, hosting provider, administrator, application owner and data destination for each. An assessment of the marketing site does not establish that a separate portal is secure.",
          "List important third-party components, including forms, appointment tools, analytics and embedded content. Ask who approved each component and who maintains the integration. A form displayed on your site may send information to another provider. The visitor's experience alone does not reveal that data path.",
          "Check the authoritative administrative contacts. Know who owns the domain registration and hosting account, how renewal notices arrive and who can approve a change. A former agency's account should not be the firm's only route to essential access. Resolve ownership through the authorized provider rather than sharing a password among employees."
        ]
      },
      {
        "h": "Check the ordinary visitor experience first",
        "ps": [
          "Open the correct site through a trusted address on an updated browser. Check that the intended domain loads and that the browser does not show a certificate warning. Follow common routes such as the contact page and client-portal link. Record unexpected redirects, changed content or unfamiliar destinations for the website owner to investigate.",
          "Use harmless sample data if the owner authorizes a form test. Confirm where the submission arrives and who can access it. Avoid entering real client information into a test. Check whether an attachment is necessary and whether the business has approved the handling of uploaded files.",
          "HTTPS protects a connection under the relevant protocol and configuration. It does not establish that the receiving business is trustworthy, that the application lacks flaws or that the information will be handled appropriately after submission. Staff should not treat a padlock as approval to upload confidential documents to an unfamiliar site."
        ]
      },
      {
        "h": "Interpret headers as specific controls",
        "ps": [
          {
            "text": "Mozilla's HSTS documentation explains how a supporting browser applies a received HTTPS policy. Content Security Policy defines rules for permitted page resources and related behavior. Ask the administrator to evaluate these controls for the actual application.",
            "links": [
              {
                "phrase": "Mozilla's HSTS documentation",
                "to": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security"
              },
              {
                "phrase": "Content Security Policy",
                "to": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy"
              }
            ]
          },
          "A copied policy can block a legitimate form, image or integration. Have the administrator test proposed changes using a controlled process. The right result is an appropriate policy that works with required business functions, not simply a higher score from one scanner.",
          "When a report identifies a missing header, record the relevant purpose and the proposed action. Avoid treating every warning as equally urgent or assuming every suggested header applies to every deployment. A website owner should explain a material exception with enough detail for the business to understand it."
        ]
      },
      {
        "h": "Ask for evidence behind updates and access",
        "ps": [
          "For a content-management system, ask who reviews platform, theme and plugin updates. Identify unsupported components and unnecessary extensions. Removing an unused component can be preferable to maintaining it indefinitely, but the administrator should confirm dependencies before changing production.",
          "Review accounts when employees and agencies change. Each administrative account should have an owner and a reason for its privileges. Ask how the provider removes access and preserves any required records. A shared login obscures who made a change and can complicate departure handling."
        ],
        "table": {
          "caption": "Ask for evidence behind updates and access",
          "headers": [
            "Area",
            "Evidence the owner can provide",
            "Limitation to keep in view"
          ],
          "rows": [
            [
              "Platform maintenance",
              "Current supported version and update responsibility",
              "A version check does not assess every custom function"
            ],
            [
              "Administrator access",
              "Account list, approved roles and authentication settings",
              "A public scanner cannot see all administrative access"
            ],
            [
              "Forms and integrations",
              "Data destinations, access and approved handling",
              "Visible HTTPS does not establish downstream handling"
            ],
            [
              "Recovery",
              "Covered data, operator and a usable restore test",
              "A successful backup job is not a full restore test"
            ],
            [
              "Incident handling",
              "Contact route, authority and response responsibilities",
              "A monitoring label does not define recovery work"
            ]
          ]
        }
      },
      {
        "h": "Examine forms as a business workflow",
        "ps": [
          "Identify what each form requests and why. If the website only needs enough information to arrange a consultation, collecting a detailed confidential narrative may create unnecessary handling work. Decide the appropriate information with the business owner and provide a suitable route for anything more sensitive.",
          "Check who receives submissions, how they are stored and how long they remain under the firm's approved process. Include email notifications and copies held by the form provider. Do not assume deleting a notification removes every submitted copy. Product behavior and contractual terms need their own review.",
          "Test error and success messages with harmless information. A visitor should know whether the submission worked and what to expect next. Avoid exposing internal technical details or echoing sensitive content unnecessarily. Useful confirmation can be concise while giving the visitor a clear next step."
        ]
      },
      {
        "h": "Verify a recovery route before changing the site",
        "ps": [
          "Ask what the backup includes: application content, uploaded files, database and any necessary configuration. Determine what remains outside it, such as a third-party form service or domain account. Name the person permitted to authorize and perform a restore.",
          "Use a non-production or otherwise approved test to demonstrate that the site can return to a usable state. Check pages, forms and important integrations after recovery. Restoring files without a working database or required configuration may not restore the business function.",
          "For a change, agree on rollback and the point at which the administrator should use it. A header adjustment, update or plugin removal can affect client-facing behavior. Keep the change record and observed test result so a later failure can be traced without relying on memory."
        ]
      },
      {
        "h": "Handle suspected compromise differently from routine findings",
        "ps": [
          "Unexpected administrator accounts, unauthorized content or suspicious redirects require investigation by the authorized owner and responder. Preserve relevant information and follow the firm's incident process. Do not repeatedly edit the site to make a symptom disappear while the underlying access remains unexplained.",
          "If client information may be affected, have the appropriate advisers assess the facts and obligations. A public report cannot determine every disclosure requirement. Communicate confirmed information through the approved route and avoid declaring the issue harmless before the investigation supports that conclusion.",
          "Routine findings should still have owners and closure evidence. An unsupported component may need replacement, while a configuration warning may need testing and adjustment. Assign the work to the website provider responsible for that system. A security coordinator can track the decision without becoming the hosting administrator."
        ]
      },
      {
        "h": "Repeat checks after meaningful changes",
        "ps": [
          "Revisit the public surface and owner evidence after a hosting migration, major application update, new form or provider transition. Record the date and scope of the review. A result obtained before the change may no longer describe the live site.",
          "For customer answers, explain what was checked and which provider supplies the internal evidence. A clean public result supports a limited statement about observed configuration. A broader answer about access, maintenance or recoverability needs the corresponding administrative records and test evidence."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "choose-first-ai-workflow",
    "title": "How to choose your first AI workflow",
    "metaTitle": "How to Choose Your First AI Workflow | Helm",
    "metaDesc": "Choose a repeatable internal AI task with an owner, approved inputs, a review process, and a measurable outcome before committing to a pilot.",
    "date": "2026-10-01",
    "readMin": 8,
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
      },
      {
        "h": "Compare a few candidates using the same questions",
        "ps": [
          "Begin with the work rather than a product demonstration. Ask staff for recurring tasks that involve preparing an internal draft, organizing approved information or turning a current procedure into a usable format. Limit the first discussion to a few candidates so you can inspect their inputs and outputs properly.",
          "For each candidate, ask how often it happens, how long it takes, which information it requires and who can recognize an incorrect result. Also ask whether a simpler fix exists. A standard template, a better search function or removal of duplicate approval steps may solve the problem with less maintenance.",
          "Use a comparison table rather than a precise-looking score with invented weights. A weak candidate should not become acceptable because it earned enough points elsewhere. Unapproved data, no competent reviewer or an inability to detect a serious error are reasons to stop and resolve the issue before testing.",
          "This is a suggested selection method, not a research finding about the best task for every firm. It makes the tradeoffs visible before anyone buys software or grants access."
        ],
        "table": {
          "caption": "Compare a few candidates using the same questions",
          "headers": [
            "Candidate question",
            "Stronger first-test characteristics",
            "Reason to resolve the issue first"
          ],
          "rows": [
            [
              "Does it recur?",
              "Enough repeated work to observe results",
              "Too few examples to evaluate the benefit"
            ],
            [
              "Are the inputs usable?",
              "Current approved material with an owner",
              "Conflicting versions or confidential records without approval"
            ],
            [
              "Can the output be checked?",
              "Reviewer can compare it with clear criteria",
              "Accuracy depends on expertise nobody has assigned"
            ],
            [
              "What can go wrong?",
              "Errors remain internal and can be corrected",
              "Output triggers an action before review"
            ],
            [
              "Can the manual process continue?",
              "Staff retain the existing procedure",
              "A failed test would interrupt essential work"
            ]
          ]
        }
      },
      {
        "h": "Define an accepted output before the pilot",
        "ps": [
          "Specify what a reviewer will accept. For an onboarding checklist, that may mean all required steps appear, the sequence reflects the approved procedure and links point to the right documents. Include the exceptions that matter, such as a different approval route for a particular staff role.",
          "Define unacceptable results separately. An invented requirement, a missing mandatory check or information taken from an unapproved source should not pass simply because most of the draft looks useful. Decide whether an error requires correction, rejection of the output or suspension of the test.",
          "Keep the reviewer’s assessment distinct from the tool’s own explanation. Asking an AI system whether its answer is accurate does not provide an independent quality check. The person accepting the work needs access to the authoritative sources and enough time to compare them.",
          "Use the same criteria for the existing process. Otherwise, an AI draft can appear faster because it is being held to a lower standard. A fair comparison includes the work needed to reach the same accepted output, not just the time to generate text."
        ]
      },
      {
        "h": "Scope a test that answers a decision",
        "ps": [
          "Write a short test brief with the task, approved platform, permitted inputs, intended users and reviewer. State the decision the test will support: continue with this workflow, modify it or keep the manual process. Avoid an open-ended instruction to explore what the tool can do.",
          "Choose examples that reflect ordinary variation. Include a routine case and a case with a known exception. Keep the examples approved for the platform and avoid importing client data just to make a demonstration feel realistic. Synthetic material can test the workflow without reproducing a live matter or account.",
          "Record the platform and relevant settings at the time of testing. If instructions, source files or configuration change during the pilot, record that change. Otherwise, a better result may be attributed to the model when staff actually repaired the source procedure.",
          "Limit actions as well as data. A tool that drafts a checklist should not also send it, update a business record or approve a transaction unless that action has been separately evaluated and authorized. Read-only drafting is easier to assess than a workflow whose mistakes immediately alter other systems."
        ]
      },
      {
        "h": "Assign the work after the demonstration",
        "ps": [
          "The task owner decides whether the output is useful. The document owner keeps the sources current. The existing IT provider reviews supported accounts, access, configuration and the proposed platform. Leadership approves the business purpose and cost. One person may hold several roles, but the responsibilities still need to be explicit.",
          "Agree who updates the instructions when a procedure changes. Include the staff time needed to check that the change did not break the workflow. A demonstration can be successful while the operating model remains too expensive or unclear to sustain.",
          "Plan staff training around the actual task. Show what information is permitted, how to start the workflow, what must be checked and how to report a failure. A broad presentation on AI capabilities will not substitute for those practical steps.",
          "Do not make continued access dependent on one person’s personal account. Confirm business ownership and offboarding with IT. If the employee who ran the pilot leaves, the organization should still know where the approved sources, instructions and decision record belong."
        ]
      },
      {
        "h": "Make the continuation decision from the record",
        "ps": [
          "Summarize accepted outputs, rejected outputs, total staff time and recurring costs. Explain failures rather than hiding them in an average. If the tool handles straightforward cases but fails on important exceptions, state that boundary in the decision.",
          "Separate useful capacity from a financial return. Ten minutes saved does not become revenue unless the business has suitable work for that time and completes it. A pilot can still be worthwhile for consistency or reduced administrative delay, but those benefits should be named and measured honestly.",
          "If the test is stopped, preserve what it taught you. The firm may have discovered outdated procedures, excessive folder access or an unnecessary approval step. Fixing those issues can improve the manual process without committing to the AI workflow.",
          "If the test continues, define the next scope and review point. Do not turn success on one internal checklist into approval for client advice, autonomous decisions or company-wide connections. Each extension changes the data, consequences or people involved and deserves its own assessment."
        ]
      }
    ],
    "lead": [],
    "updated": "2026-10-07",
    "readingLayout": true
  },
  {
    "slug": "cmmc-deadline-checklist",
    "metaTitle": "CMMC Phase 2 Suspension: Manufacturer Checklist | Helm",
    "ctaMode": "book-cmmc",
    "title": "CMMC After the Phase 2 Suspension: A 12-Step Checklist for Manufacturers",
    "metaDesc": "CMMC Phase II was suspended in July 2026. Phase I self-assessments remain. A 12-step readiness checklist for manufacturers and defense subcontractors.",
    "date": "2026-07-25",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Manufacturing & Defense",
    "laneTo": "/manufacturing",
    "intro": "The July 2026 suspension of CMMC Phase II did not erase the cybersecurity requirements already appearing in defense contracts. A manufacturer that stops its readiness work may still face a self-assessment, an unsupported SPRS score, or a customer asking for evidence the shop cannot produce. The practical response is to confirm the contract, keep the assessment current, and avoid spending against a deadline or assessment route that no longer applies.",
    "sections": [
      {
        "h": "Check the current program status",
        "ps": [
          {
            "text": "The Department’s current CMMC overview confirms the July 13, 2026 Phase II suspension and continued Phase I requirements. This article was reviewed October 7, 2026. Recheck official guidance and the actual contract before making a timing or assessment commitment.",
            "links": [
              {
                "phrase": "current CMMC overview",
                "to": "https://dodcio.defense.gov/cmmc/About/"
              }
            ]
          }
        ]
      },
      {
        "h": "Steps 1 to 4: Know where you stand",
        "ps": [
          "First, confirm your level. Contractors handling Federal Contract Information may fall under Level 1 and its 15 basic safeguarding requirements. If the agreed scope processes, stores, or transmits Controlled Unclassified Information, Level 2 and the 110 Revision 2 requirements may apply. Confirm the information category and the clauses rather than deciding from company size.",
          "Second, locate your CUI. You cannot protect what you have not mapped. Walk every place technical data lives: file servers, email, CAD stations, the quoting inbox, that USB drive in the shop office.",
          "Third, calculate the SPRS score honestly when the assessment requirement applies. Keep the boundary, methodology, working papers, and evidence that reproduce the number. The Department of Justice has resolved False Claims Act allegations involving unsupported cybersecurity representations, including a case centered on a large mismatch between a submitted score and a later assessment.",
          {
            "text": "Fourth, run a gap assessment against the applicable control set. The useful deliverable is a scored, evidence-linked list that separates what is implemented, what is not proven, and what still needs remediation.",
            "links": [
              {
                "phrase": "gap assessment",
                "to": "/helm-command"
              }
            ]
          }
        ]
      },
      {
        "h": "Steps 5 to 9: Close the gaps that matter",
        "ps": [
          "Five: implement multi-factor authentication where the requirement and system design call for it, and preserve the configuration evidence. Six: identify where approved cryptography is required to protect CUI and verify the actual product, mode, and boundary rather than relying on a marketing label. Seven: limit access so each role reaches only the CUI and systems needed for its work.",
          "Eight: write and rehearse the incident response process, including the contract-driven reporting path. Nine: keep the System Security Plan current and maintain an owned remediation record for unmet requirements. Generic templates are not evidence that the described control is operating."
        ]
      },
      {
        "h": "Steps 10 to 12: Stay ready without wasting the year",
        "ps": [
          "Ten: do not reserve a third-party assessment solely because of the former Phase II date. Recheck the current DoD guidance and the specific solicitation or contract before committing to an assessment route. Eleven: run an internal mock assessment anyway because the underlying Revision 2 requirements and evidence work remain relevant.",
          "Twelve: assign recurring maintenance. Review access changes, evidence, open remediation, the SSP, and assessment dates on a schedule. A score and policy set can become inaccurate when systems, people, vendors, or the CUI boundary change."
        ]
      },
      {
        "h": "Turn the checklist into a working record",
        "ps": [
          "Give each step an owner, evidence reference, status and next action. Separate complete work from work that is implemented but not yet verified. A checklist with twelve ticks and no supporting records is difficult to use during an assessment or a customer inquiry.",
          "Record the source of the requirement. It may be a contract clause, a current program instruction or a specific customer request. If you cannot establish why a task is needed, resolve the scope question before spending against a deadline. If the task is required, record what demonstrates completion rather than assuming a policy title is enough.",
          "Use dates that represent real decisions. The contract’s due date, an internal remediation target and the next review date are different. Label them so leadership can see which delays affect a contractual obligation and which affect the firm’s own improvement plan."
        ]
      },
      {
        "h": "Read contracts before scheduling assessments",
        "ps": [
          "Collect the solicitation, award, modifications and subcontract flowdowns. Ask the responsible contract owner to identify the safeguarding, assessment and affirmation instructions relevant to the proposed work. Record written clarification from the prime or contracting contact where needed.",
          "Do not assume every purchase order has the same requirements because it comes from the same customer. The information, service and contract terms can differ. Maintain a review route for new work so a change in scope is identified before the shop begins handling new material.",
          "An assessment proposal should specify its purpose and authority. A readiness review, mock assessment and government or authorized assessment are different engagements. Clarify which result the customer requires and which result the provider can actually deliver."
        ]
      },
      {
        "h": "Map the shop’s real data handling",
        "ps": [
          {
            "text": "Review receipt, engineering, production, storage and transmission with the people doing the work. Identify controlled information using the applicable contract and category guidance, including the NARA CUI Registry. Do not determine the category solely from file extension or headcount.",
            "links": [
              {
                "phrase": "NARA CUI Registry",
                "to": "https://www.archives.gov/cui/registry/category-list"
              }
            ]
          },
          "Include paper, removable media and workstations as well as the main file server. Ask what happens when a machine needs a program file, a drawing must be printed or a supervisor works remotely. Those everyday paths can change the assessed boundary.",
          "Resolve undocumented shortcuts. If a staff member uses a personal account because the approved transfer method is too slow, the firm needs an operational correction. Writing that the shortcut is prohibited does not show that the process now works without it."
        ]
      },
      {
        "h": "Inspect implementation before collecting screenshots",
        "ps": [
          "Identify the requirement, the intended safeguard and the evidence needed to evaluate it. Ask the responsible owner to demonstrate the control in the assessed environment. Evidence collection should follow that question rather than begin with every export the tools can produce.",
          "Keep the relevant standard and version clear. The Department’s program instructions and contract determine the assessment context; the existence of a newer NIST publication does not automatically change the current contract obligation. Retain the basis for the version selected in the review record.",
          "Evaluate provider dependencies. If a vendor supplies a control, determine what remains the shop’s responsibility and which evidence is available. A service description alone may not show that the relevant users, systems or information are covered."
        ]
      },
      {
        "h": "Sequence remediation around dependencies",
        "ps": [
          "Some work should happen before other corrections can be verified. For example, an inaccurate user or device inventory can make coverage evidence unreliable. A business workflow change can affect the scope of later technical implementation. Identify those dependencies before assigning isolated due dates.",
          "Set closure criteria with a qualified reviewer. Buying a tool or approving a policy is often an intermediate milestone. The item should close when the implementation and appropriate evidence support the requirement, with any remaining limitation clearly recorded.",
          "Track interim arrangements. If a correction will take time, record the current state, permitted safeguard and person responsible for the decision. Do not imply that a documented plan automatically makes every unmet requirement acceptable under CMMC or the contract."
        ]
      },
      {
        "h": "Rehearse the incident reporting path",
        "ps": [
          {
            "text": "Review applicable incident duties before an event occurs. DFARS 252.204-7012 includes a rapid-reporting requirement for covered cyber incidents and other related obligations. The exact scope matters; not every operational mistake has the same reporting route.",
            "links": [
              {
                "phrase": "DFARS 252.204-7012",
                "to": "https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting.?searchTerms=252.204-7012"
              }
            ]
          },
          "Staff need a prompt internal reporting process and a trusted contact. The designated incident owner evaluates the event with the appropriate responders and advisers. Confirm access to the required reporting route and any prerequisites rather than discovering them during the incident.",
          "Use a fictional exercise to test who receives the report, who authorizes action and how the relevant records are preserved. Record delays and missing responsibilities, then correct the plan. Keep live findings and incident evidence in their approved restricted systems."
        ]
      },
      {
        "h": "Check a proposed change against the checklist",
        "ps": [
          "Use an approved fictional example to test whether the owners can maintain readiness: a shop adds a new workstation that will display controlled information. Ask who approves it, updates the inventory, confirms access and checks the effect on the SSP and evidence. No live system change is needed for this exercise.",
          "The useful result is a clear sequence and named owners. If the device can be bought and used before anyone considers the information boundary, improve the procurement and onboarding process. If documentation is updated but coverage remains unknown, assign the technical verification. This links the checklist to daily decisions instead of reserving it for assessment season."
        ]
      },
      {
        "h": "Review readiness with leadership",
        "ps": [
          "Present the current scope, supported requirements, open items and decisions needed. Explain the consequences of unresolved work using the contract and qualified review, not invented urgency. Leadership should understand what it will affirm and which evidence supports that conclusion.",
          "Keep customer responses consistent with the assessment file. A questionnaire should not say the environment is fully implemented when the remediation record still shows relevant deficiencies. Seek clarification if the customer’s answer choices cannot represent the actual state truthfully.",
          "Retain the review record and the authorized submission confirmation where applicable. An assessment number is useful only when the shop can connect it to the boundary, date, method and supporting evidence."
        ]
      },
      {
        "h": "Make maintenance part of production changes",
        "ps": [
          "Add a security-scope review to new systems, providers, locations and information workflows. Identify whether the change affects the SSP, evidence or assessment record. The person approving the change should know who performs that review.",
          "Check recurring assessment and affirmation dates through the current applicable instructions. Keep a named owner and backup for the record. Do not rely on a calendar reminder controlled by an employee whose departure would leave the obligation unassigned.",
          "Helm can support a scoped readiness discussion alongside the existing IT provider. The firm retains its final attestations and business decisions. Readiness work helps organize and improve the evidence; it does not provide a certification or guarantee an award."
        ]
      }
    ],
    "takeaway": "Confirm what the current contract requires before changing course. Keep the system boundary, assessment, score, and supporting evidence current while DoD reviews the next phase of the program.",
    "lead": [],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "cmmc-level-1-vs-level-2",
    "metaTitle": "CMMC Level 1 vs Level 2: Which Do You Need? | Helm",
    "ctaMode": "book-cmmc",
    "title": "CMMC Level 1 vs Level 2: Which One Does Your Shop Actually Need?",
    "metaDesc": "CMMC Level 1 and Level 2 require very different things. How to tell which one applies to your shop based on your contracts, not your headcount.",
    "date": "2026-07-13",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Manufacturing & Defense",
    "laneTo": "/manufacturing",
    "intro": "Choosing the wrong CMMC level can send a shop down two expensive paths: building controls it was never asked to maintain, or affirming readiness for a contract while important requirements remain unmet. The answer comes from the contract clauses and the information the shop handles, not from its headcount.",
    "sections": [
      {
        "h": "The question that decides everything: FCI or CUI?",
        "ps": [
          {
            "text": "Federal Contract Information (FCI) covers certain information provided by or generated for the government under a contract that is not intended for public release. The definition excludes public information and simple transactional information needed to process payments. Use the actual definition rather than treating every government-related document as FCI. FAR 52.204-21.",
            "links": [
              {
                "phrase": "FAR 52.204-21",
                "to": "https://www.acquisition.gov/far/52.204-21"
              }
            ]
          },
          {
            "text": "Controlled Unclassified Information (CUI) has safeguarding or dissemination controls based on law, regulation or government-wide policy. A drawing or technical package may contain CUI, but a file type or marking should not be treated as a complete applicability analysis. Check the relevant category and seek written clarification where the information or contract is unclear. NARA CUI Registry.",
            "links": [
              {
                "phrase": "NARA CUI Registry",
                "to": "https://www.archives.gov/cui/registry/category-list"
              }
            ]
          }
        ]
      },
      {
        "h": "What each level actually requires",
        "ps": [
          "Level 1 covers the 15 basic safeguarding requirements of FAR 52.204-21. It is self-assessed annually, with an executive affirmation that the requirements are in place. There is no third-party assessor at Level 1.",
          {
            "text": "The current department CMMC overview states that implementation is paused in Phase I after the July 13, 2026 Phase II suspension. It describes Level 2 self-assessment every three years and annual affirmation against 110 NIST SP 800-171 Revision 2 requirements. Confirm current contract instructions before choosing an assessment route.",
            "links": [
              {
                "phrase": "department CMMC overview",
                "to": "https://dodcio.defense.gov/cmmc/About/"
              }
            ]
          },
          "The jump from Level 1 to Level 2 is not a small increment. Level 2 requires a defined system boundary, a current System Security Plan, control-level evidence, a score, and ongoing ownership of the requirements that apply to the CUI environment."
        ]
      },
      {
        "h": "How to tell which one applies to you",
        "ps": [
          "The clauses in your contract tell you directly: look for DFARS 252.204-7012, 7019, 7020, and 7021. Their presence, and how they are flowed down, points to whether you are being asked to handle CUI or only FCI.",
          "When the contract language is ambiguous, ask your prime in writing which category your work falls into and keep the answer on file. Do not guess, and do not assume.",
          {
            "text": "Do not assume Level 1 just because you are a small shop. Company size has no bearing on the requirement: a ten-person shop processing confirmed CUI has safeguarding responsibilities despite its small headcount. A gap assessment against the full control set tells you where you actually stand before an assessor does.",
            "links": [
              {
                "phrase": "small shop",
                "to": "/manufacturing"
              },
              {
                "phrase": "gap assessment",
                "to": "/helm-command"
              }
            ]
          }
        ]
      },
      {
        "h": "What to collect before a readiness review",
        "ps": [
          "Bring the relevant solicitation and contract clauses, every cybersecurity flowdown received from a prime, representative files or markings, a list of systems that store or transmit the information, and any current SPRS assessment or System Security Plan. That is enough to start a boundary and applicability discussion without pretending the answer comes from a generic checklist.",
          "Record the conclusion and the person or contract source that supports it. If the prime clarifies the information category or required level, keep that written answer with the contract file so the same question does not have to be reconstructed at the next bid or renewal."
        ]
      },
      {
        "h": "Separate the information category from the assessment route",
        "ps": [
          "First determine which information the work involves. Then establish the contract’s safeguarding and assessment instructions. These decisions are related, but one does not replace the other. A prime’s statement that a project includes CUI does not by itself give you every detail needed to choose an assessment route.",
          "Keep the solicitation, award, modifications and flowdowns together. Note the required level, affected environment, relevant dates and responsible contact. If a newer instruction changes the requirement, retain the earlier record and explain what supersedes it. The shop should be able to show why it followed a particular route at the time.",
          "Ask for clarification when the contract and customer questionnaire appear inconsistent. Do not resolve the discrepancy by choosing the less expensive answer or the answer a tool recommends. The contracting relationship and current official guidance should inform the decision, with appropriate expert advice where needed."
        ]
      },
      {
        "h": "Walk the information flow through the shop",
        "ps": [
          "Trace a representative approved workflow from receipt to disposal. Identify where employees download files, where engineering works, which workstations display technical information and how records reach production. Include email, file shares, remote access and external services used along the way.",
          "Use representative file descriptions or approved samples during scoping. Do not send live controlled information through an ordinary marketing inquiry. A readiness conversation can establish how an authorized review will handle the material without collecting it prematurely.",
          "Compare the documented process with what staff actually do. A policy may state that files stay in one environment while an employee uses a general quoting mailbox or removable media. That discrepancy affects the boundary and needs resolution before an assessment conclusion is reliable.",
          "Keep the map current. A new supplier portal, shop-floor workstation or remote working arrangement can change where information is processed or accessible. Assign someone to review the effect before the change becomes part of normal production."
        ]
      },
      {
        "h": "What Level 1 preparation should produce",
        "ps": [
          "Level 1 preparation should identify the systems that handle FCI, the owners responsible for the relevant safeguards and evidence supporting the applicable requirements. It should also explain how the organization reviews changes and prepares its self-assessment and affirmation.",
          {
            "text": "Use the fifteen requirements in FAR 52.204-21 as the relevant source rather than a provider’s abbreviated checklist. An installed security product may support part of the work, but responsibility for access, physical handling and other operating practices still needs an owner.",
            "links": [
              {
                "phrase": "FAR 52.204-21",
                "to": "https://www.acquisition.gov/far/52.204-21"
              }
            ]
          },
          "Do not assume a small shop has no physical or administrative evidence to maintain. Identify who controls visitor access, how employees receive permissions and how information is handled on devices and media. The scope should follow the actual environment.",
          "Self-assessment means the organization owns the conclusion. External assistance can help gather and evaluate evidence, but leadership should understand what it is affirming and the basis for that representation. A consultant’s worksheet does not transfer the organization’s responsibility."
        ]
      },
      {
        "h": "What Level 2 preparation adds",
        "ps": [
          "A Level 2 review needs a clear CUI environment and evidence against the applicable requirements. The SSP should describe how the environment operates, including connections and provider dependencies. The assessment record should explain the conclusions rather than merely collect screenshots.",
          "Identify where business decisions are needed. Some corrections may involve access, training, service selection or workflow changes. Others may require technical implementation by the existing IT owner. Funding and scheduling should account for those dependencies before anyone promises a completion date.",
          "Maintain a remediation record for unmet requirements. Do not treat an open item as automatically permitted for the required assessment status. The applicable rules limit how deficiencies may be handled. Obtain a qualified review of those conditions before leadership makes an affirmation.",
          "Avoid counting products as requirements. An endpoint tool, backup service or awareness platform supplies a capability. The requirement may also depend on coverage, configuration, operation and evidence. The reviewer needs to evaluate that implementation in the assessed environment."
        ]
      },
      {
        "h": "An illustrative boundary decision",
        "ps": [
          "Consider a manufacturer that plans to receive confirmed CUI in a restricted environment. This is an illustrative scenario, not a Helm customer design. The shop wants employees outside that environment to handle ordinary business administration without accessing the controlled files.",
          "The decision requires more than creating a restricted folder. The team must inspect the people, devices, email paths, connections and services involved. If a drawing is routinely copied to an ordinary workstation for production, the claimed separation needs review. A qualified scoping exercise should determine what actually belongs in the assessed boundary.",
          "The scenario does not prescribe a particular enclave architecture. It shows why scope follows real information movement and dependencies. A design can reduce unnecessary exposure only when its operational rules are supported and maintained."
        ]
      },
      {
        "h": "Compare proposals by responsibility and evidence",
        "ps": [
          "Ask a provider to identify the scope it will evaluate, the standard and version it will use, the evidence it needs and the deliverable you receive. Require it to distinguish readiness assistance from an authorized assessment or certification service.",
          "Clarify implementation duties. Who changes account policies, manages the devices, maintains physical controls and updates procedures? A report of gaps does not establish that the provider will remediate them. Get the boundary of its service in writing.",
          "Also clarify maintenance after the initial project. The business needs someone to update the SSP, review changes, retain evidence and track the appropriate assessment and affirmation dates. A one-time policy set does not supply ongoing ownership."
        ],
        "table": {
          "caption": "Compare proposals by responsibility and evidence",
          "headers": [
            "Decision",
            "Evidence to request"
          ],
          "rows": [
            [
              "Information category",
              "Contract references and written clarification where needed"
            ],
            [
              "Required level and route",
              "Current instructions applicable to the work"
            ],
            [
              "System boundary",
              "Workflow and system inventory reviewed by qualified people"
            ],
            [
              "Current implementation",
              "Requirement-level conclusions with supporting evidence"
            ],
            [
              "Remaining work",
              "Owners, dependencies, closure criteria and target dates"
            ]
          ]
        }
      },
      {
        "h": "Make the next step bounded",
        "ps": [
          "Begin with a contract and information-category review, then define the environment to be assessed. That prevents a generic full-company project from becoming the default before anyone knows what the work requires.",
          "Helm can discuss readiness support for an agreed scope alongside your existing IT provider. The organization retains final attestations and business decisions. Helm does not issue CMMC certifications, government assessment decisions or regulatory approvals."
        ]
      }
    ],
    "takeaway": "Review the clauses and determine whether the work involves FCI or CUI. If the contract is unclear, get the prime contractor’s answer in writing before deciding which requirements to assess.",
    "lead": [],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "cui-handling-shop-floor",
    "metaTitle": "CUI Handling Rules for the Shop Floor | Helm",
    "ctaMode": "book-cmmc",
    "title": "Explaining CUI to Your Shop Floor: The Rules That Actually Matter",
    "metaDesc": "A plain-English explanation of FCI and CUI for shop floor staff, the handling rules that keep drawings and specs safe, and why fast internal reporting matters under DFARS.",
    "date": "2026-06-16",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Manufacturing & Defense",
    "laneTo": "/manufacturing",
    "intro": "A machinist can undo a carefully written CUI program by taking one phone photo of a drawing, emailing a file home, or leaving a marked print where a visitor can see it. That usually happens because the shop explained the policy without explaining what employees should do during the workday. Floor rules need to be short, specific, and easy to follow when production is moving.",
    "sections": [
      {
        "h": "FCI and CUI, in terms that make sense on the floor",
        "ps": [
          "Federal Contract Information, FCI, is information provided by or generated for the government under a contract and not meant for public release. It covers a lot of the everyday paperwork of doing government work.",
          {
            "text": "Controlled Unclassified Information, CUI, requires safeguarding or dissemination controls based on law, regulation or government-wide policy. Controlled technical information can include relevant drawings, specifications and models, but not every drawing is automatically CUI. Use the contract, applicable category and authorized clarification to establish handling. If a marking is unclear, hold distribution and ask the designated information owner. NARA controlled technical information category.",
            "links": [
              {
                "phrase": "NARA controlled technical information category",
                "to": "https://www.archives.gov/cui/registry/category-detail/controlled-technical-info.html"
              }
            ]
          }
        ]
      },
      {
        "h": "The floor rules that keep it safe",
        "ps": [
          "No photos of drawings or parts on personal phones, ever, even for a quick reference or to text a coworker. Never email specs to a personal email account to work on at home. Access is need-to-know: if a print is not for your job, it is not for you to look at.",
          "Keep marked documents in controlled storage instead of leaving them on a workbench or board where a visitor can see them. Employees also need to know whom to tell when a print is left out or a file goes to the wrong place. Prompt internal reporting gives the company time to meet its contract-driven response duties."
        ]
      },
      {
        "h": "Why fast reporting is not optional",
        "ps": [
          {
            "text": "DFARS 252.204-7012 requires rapid reporting, defined as within 72 hours of discovery, for cyber incidents within the clause’s scope. The designated response owner evaluates applicability and carries out required reporting. Employees should report concerns promptly through the internal route rather than deciding alone whether a misplaced print or suspicious message triggers a government report.",
            "links": [
              {
                "phrase": "DFARS 252.204-7012",
                "to": "https://www.acquisition.gov/dfars/252.204-7012-safeguarding-covered-defense-information-and-cyber-incident-reporting.?searchTerms=252.204-7012"
              }
            ]
          }
        ]
      },
      {
        "h": "This training is part of the program, not an extra",
        "ps": [
          {
            "text": "NIST 800-171 compliance includes awareness and training requirements. A shop can configure technical controls and still leave a requirement unsupported if the employees handling controlled drawings were never taught the applicable rules.",
            "links": [
              {
                "phrase": "NIST 800-171 compliance",
                "to": "/helm-command"
              }
            ]
          },
          {
            "text": "A readiness assessment for manufacturing and defense shops can review the technical controls and the floor-level training against the same agreed scope.",
            "links": [
              {
                "phrase": "readiness assessment",
                "to": "/helm-command"
              },
              {
                "phrase": "manufacturing and defense shops",
                "to": "/manufacturing"
              }
            ]
          },
          {
            "text": "Use training that reflects the drawings, workstations, removable media, and reporting path employees actually encounter. Ongoing security awareness training can reinforce those decisions without relying on a generic annual slide deck.",
            "links": [
              {
                "phrase": "Ongoing security awareness training",
                "to": "/helm-core"
              }
            ]
          }
        ]
      },
      {
        "h": "Explain the approved route for every ordinary task",
        "ps": [
          "Staff need more than prohibitions. Show how to obtain an approved print, display a drawing at the workstation, transfer a required file and return or dispose of the material. A rule against personal phones is more usable when there is a supported way to record the business information the employee actually needs.",
          "Name the contact for an uncertain task. An employee should be able to pause a transfer or photo request and obtain an answer without improvising a new channel. Supervisors need to support that pause when production pressure makes the shortcut attractive.",
          "Review the procedure with employees doing the work. Ask where the instructions are slow, ambiguous or impossible to follow with the available equipment. Correct the workflow instead of relying on a signed training form to establish that every task can be performed safely.",
          "Keep the approved process consistent with the assessed boundary. A transfer method that moves controlled information into an unreviewed account can undermine the separation the program depends on. The information owner and IT provider should approve changes together."
        ]
      },
      {
        "h": "Control paper drawings and visitor exposure",
        "ps": [
          "Identify where prints are issued, used, stored and returned. Make the authorized storage location accessible to the staff who need it, while preventing unnecessary access. Do not rely on employees remembering to hide a print only when a visitor arrives.",
          "Review walkways, visitor routes and work areas where drawings or screens may be visible. The relevant manager should understand the access rules and escort procedure. A visitor’s familiarity with the shop does not establish authorization to view controlled information.",
          "Set a supported disposal process. Employees should know which material must be returned, retained or destroyed through an approved method. Avoid using an ordinary bin for sensitive prints just because the job has finished. Confirm the handling rule with the information owner rather than deciding from the paper’s age.",
          "Check copies as well as originals. A marked master drawing can be controlled while an untracked copy remains on a clipboard. Teach employees to recognize the information and handling instruction, not merely a particular folder color or cover sheet."
        ]
      },
      {
        "h": "Review shared stations and removable media",
        "ps": [
          "Determine who is authorized to use each workstation and which information it may handle. Follow the approved sign-in and screen-lock procedure. Do not leave an administrator’s session open for convenience or share credentials when the system supports named access.",
          "Record how program files or technical information reach equipment. If removable media is part of the approved workflow, identify the permitted media, handling procedure and owner. Personal or unknown drives should not become the default when a supported transfer path is unavailable.",
          "Some shop equipment has different technical capabilities from an office laptop. Have qualified staff evaluate those constraints and document the approved arrangement. Do not instruct a machinist to install an unfamiliar tool or alter a machine controller simply to satisfy a generic checklist.",
          "Include support providers in the review. A vendor with remote access or maintenance access may affect the information boundary. Confirm the permitted work, access route and responsibilities before a technician begins, rather than treating maintenance as automatically outside the program."
        ]
      },
      {
        "h": "Handle uncertain markings without guessing",
        "ps": [
          "A staff member does not need to be an information-classification specialist to recognize that a document needs review. Give them examples approved by the information owner, explain the relevant markings and identify the escalation contact. Use dummy or authorized training material.",
          "If a file arrives without a clear instruction but appears to contain controlled project information, pause onward distribution and seek clarification. An absent marking is not a sufficient reason to publish or email it broadly. Equally, the firm should not permanently classify every technical file as CUI without establishing the basis.",
          {
            "text": "Retain written clarification with the contract or information record. The NARA CUI Registry provides category references; the project’s authorized parties should resolve how the material is identified and handled in the actual work.",
            "links": [
              {
                "phrase": "NARA CUI Registry",
                "to": "https://www.archives.gov/cui/registry/category-list"
              }
            ]
          },
          "Teach what to do while waiting. Staff should know the approved storage location and whether production may continue with the available information. That prevents a scope question from being silently resolved through an improvised copy or personal email."
        ]
      },
      {
        "h": "An illustrative request for a photo",
        "ps": [
          "Imagine a supervisor asking an employee to text a drawing photo to a colleague at another location. This is an illustrative exercise, not a Helm incident. The employee recognizes that the drawing has controlled handling instructions and pauses the request.",
          "The employee uses the approved internal contact to ask how the information may be transferred. The authorized owner checks the recipient, destination and supported transfer method. If the request is legitimate, it can proceed through that method; urgency alone does not authorize a personal account or device.",
          "Use this exercise to test whether staff can identify both the restriction and the useful alternative. A training session that ends only with “do not take photos” may leave the underlying business task unresolved."
        ]
      },
      {
        "h": "Record training that reflects the work",
        "ps": [
          "Document the audience, subjects, approved examples and completion date. Include the reporting route, physical handling and relevant device or media practices. The record should show what staff were taught, while the supervisor’s review checks whether the process works in practice.",
          "Revisit training when the shop changes equipment, receives a new kind of controlled information or adopts a new transfer route. A generic annual course can supplement those instructions, but it does not establish that employees understand a site-specific production procedure.",
          "Invite questions and track recurring confusion. If several employees cannot identify where a print belongs, fix the storage instruction and signage. If a vendor repeatedly asks for an unapproved transfer, address the vendor process with the responsible manager."
        ]
      },
      {
        "h": "A floor-level handling table",
        "ps": [
          "Keep the instructions near the work, with a named contact and a supported alternative. The goal is a process employees can follow during production, supported by the broader security program and contractual review.",
          "Ask a new employee to explain the reporting route and find the approved storage location during onboarding. Resolve any ambiguity before they begin handling the information independently."
        ],
        "table": {
          "caption": "A floor-level handling table",
          "headers": [
            "Situation",
            "Employee action",
            "Responsible follow-up"
          ],
          "rows": [
            [
              "Unclear marking or recipient",
              "Pause onward distribution and ask",
              "Information owner clarifies handling"
            ],
            [
              "Drawing needed at another location",
              "Use the approved request route",
              "Owner verifies recipient and transfer method"
            ],
            [
              "Print left in an exposed area",
              "Secure it as instructed and report",
              "Supervisor reviews exposure and corrective action"
            ],
            [
              "Unexpected device or media request",
              "Stop and check the procedure",
              "IT and process owner evaluate the request"
            ],
            [
              "Suspected loss or unauthorized access",
              "Report promptly through the internal route",
              "Incident owner evaluates response and reporting duties"
            ]
          ]
        }
      }
    ],
    "takeaway": "Teach employees how to recognize marked information, where it may be stored, who may access it, and whom to call when something goes wrong. Make the rules part of normal shop work, including phones, paper drawings, email, shared stations, and visitors.",
    "lead": [],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "cyber-insurance-application-walkthrough",
    "metaTitle": "Cyber Insurance Application: A Practical Walkthrough | Helm",
    "ctaMode": "book",
    "title": "A Cyber Insurance Application Walkthrough: From Questions to Supported Answers",
    "metaDesc": "Prepare a supported cyber insurance application: assign owners, verify control scope, resolve exceptions and retain the final submission and evidence.",
    "date": "2026-07-06",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Professional Services",
    "laneTo": "/professional-services",
    "intro": "An insurance application asks the firm to describe its business and controls. The difficult part is often gathering reliable facts across finance, IT, security and leadership. A rushed answer can confuse a purchased feature with a deployed control, or an intended improvement with the state of the business today.",
    "sections": [
      {
        "h": "Step 1: Obtain the complete current request",
        "ps": [
          "Ask the broker for the application, supplements, instructions, due date and any requested evidence. Confirm which entity and operations the submission covers. A form for one company may not adequately describe related entities, locations or acquired operations. Establish the intended scope before asking technical staff to answer.",
          "Save a controlled working copy. Preserve the original question wording and any definitions. Rephrasing a question in a task list can lose qualifiers such as every account, remote access or the previous reporting period. Link each assigned task to the exact question so the respondent can see what is being asked.",
          "Name a coordinator, the business approver and technical respondents. The coordinator tracks missing answers and evidence. Technical owners establish the actual settings and population. Leadership approves business representations and the submission. The broker handles underwriting clarification and the coverage discussion."
        ]
      },
      {
        "h": "Step 2: Define the business population",
        "ps": [
          "Confirm employee and contractor counts using the requested definition and date. Identify seasonal staff, remote workers and locations where relevant. Keep user counts separate from device counts. One person may use several devices, and a shared workstation may serve several people.",
          "List important systems and providers. Include business email, identity, remote access, devices, client portals, backup and critical applications. Identify which systems are operated by outside suppliers and who can request evidence from them. The internal IT provider may not administer every application used by the firm.",
          "If the form asks about revenue, records or business activities, route those questions to the appropriate business owner. Technical staff should not estimate financial information from a user list. Similarly, finance should not infer authentication coverage because a software subscription appears on an invoice."
        ]
      },
      {
        "h": "Step 3: Assign each question to evidence",
        "ps": [
          "These are illustrative categories, not a claim that every insurer asks the same questions. Follow the current form. Where several owners contribute, have the coordinator reconcile the answer rather than combine conflicting statements in the final submission.",
          "For each response, capture the source, date, reviewer and relevant scope. If the answer relies on a provider's report, retain the report or approved reference. Keep restricted evidence in its authorized location and use a controlled link in the working record. Avoid copying sensitive account lists into broadly shared documents."
        ],
        "table": {
          "caption": "Step 3: Assign each question to evidence",
          "headers": [
            "Question area",
            "Likely fact owner",
            "Evidence to examine"
          ],
          "rows": [
            [
              "Business operations",
              "Leadership or finance",
              "Current entity, activity and financial records"
            ],
            [
              "Authentication",
              "Identity and application administrators",
              "Policies, account population and exceptions"
            ],
            [
              "Endpoint protection",
              "IT and the covered security provider",
              "Eligible inventory, reporting health and service scope"
            ],
            [
              "Recovery",
              "Backup operator and business data owner",
              "Workload coverage and usable restore results"
            ],
            [
              "Training",
              "Program owner",
              "Assigned population, completion and exceptions"
            ],
            [
              "Incident response",
              "Authorized business response owner",
              "Approved plan, contacts and exercise records"
            ]
          ]
        }
      },
      {
        "h": "Step 4: Verify authentication qualifiers",
        "ps": [
          "Read whether the question concerns email, remote access, privileged accounts, all users or a named system. Those populations differ. Ask the responsible administrator to identify where MFA is required, the methods allowed and any exceptions. Enrollment in an authentication method is not always evidence of enforcement on the access path being asked about.",
          "Review independent applications as well as the main tenant where the question requires it. A firm may enforce MFA for email yet have a separately administered business application. Record what was checked and what remains unknown. Ask the broker how a qualified answer should be represented when the form offers only a yes-or-no box.",
          "Do not change an answer to yes because a rollout is scheduled. If the work finishes before submission, verify the completed state and date the evidence. If it does not, describe the current limitation through the approved submission route. A plan and an implemented control are different facts."
        ]
      },
      {
        "h": "Step 5: Verify devices and recovery",
        "ps": [
          "For endpoint questions, compare the relevant inventory with the service's reporting population. Identify excluded devices, unsupported platforms and stale reporting. A device purchased this week may not yet meet acceptance criteria. A retired device may still appear in a console. Resolve those differences before using a coverage percentage.",
          "For backup questions, distinguish a successful capture from a successful restore. Identify the covered workload, recovery point and test result. If the form asks about isolation or immutability, have the operator explain the configured mechanism and its limits. Do not treat encryption, isolation and immutability as interchangeable terms.",
          {
            "text": "Use the backup-testing resource to prepare evidence. Check whether the requested test frequency or scope comes from the actual application or policy. Avoid applying an invented universal insurer schedule to a firm whose requirement is different.",
            "links": [
              {
                "phrase": "backup-testing resource",
                "to": "/resources/backup-testing-insurers/"
              }
            ]
          }
        ]
      },
      {
        "h": "Step 6: Resolve incomplete and ambiguous answers",
        "ps": [
          "Create a short exception list. Each entry should identify the question, confirmed limitation, owner, proposed action and target date. Decide whether the firm can complete and verify the work before submission. Some changes require testing or a planned interruption and cannot responsibly be promised for the following day.",
          "For wording uncertainty, send the exact question and a factual description to the broker through the approved route. Ask for written clarification where the interpretation matters. A salesperson's informal assurance about what a carrier usually means is weaker than a specific recorded answer to the current question.",
          "Do not hide an exception in an attachment that the final answer contradicts. Ensure the form, supplements and supporting explanation are consistent. The authorized signer should know what is incomplete and how it is represented. Keep the broker's response with the package."
        ]
      },
      {
        "h": "Step 7: Review the final submission as one document",
        "ps": [
          "Read the complete application after individual contributors finish. Check dates, entity names, counts and repeated questions. The same control may appear in several sections with different wording. Confirm that the responses consistently describe the actual environment without dropping a meaningful qualifier.",
          "Separate statements about current operation from commitments about future work. If a commitment is included, identify who approved it and what evidence will demonstrate completion. Review any related requirements with the broker and appropriate adviser before treating a technical task date as a contractual promise.",
          "Save the exact signed version, supplements, evidence references and submission record. A later review should not have to reconstruct what was sent from a folder of drafts. Use access controls suitable for the business and technical information in the package."
        ]
      },
      {
        "h": "Step 8: Review the resulting offer and policy",
        "ps": [
          {
            "text": "The application process does not end with submission. Ask the broker to explain the offer, coverage, limits, retentions, endorsements and significant conditions. The FTC recommends discussing cyber-insurance coverage needs with the insurance agent. Apply that discussion to the firm's actual scenarios and proposed wording.",
            "links": [
              {
                "phrase": "FTC recommends discussing cyber-insurance coverage needs with the insurance agent",
                "to": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
              }
            ]
          },
          "Confirm the incident reporting route and authorized contacts. Ask how urgent response, provider engagement and consent requirements operate under the proposed policy. Record those instructions in the response plan once the policy is bound. Do not rely solely on the brochure supplied at the start of the sale.",
          "If the issued documents differ from what the firm expected, resolve the difference promptly through the broker. Keep the final policy and endorsements with the submission record. Coverage interpretation belongs with the appropriate adviser, supported by the facts the firm has gathered."
        ]
      },
      {
        "h": "Step 9: Keep the evidence current after renewal",
        "ps": [
          "Assign the unresolved control tasks and follow their completion. Record meaningful changes to the environment, including new applications, acquisitions, provider changes and changes in authentication or backup coverage. Ask the broker how such changes should be handled under the particular arrangement.",
          "Keep previous submissions and dated evidence. Do not overwrite last year's record with this year's settings. A historical answer may need historical support. Retain the records under the firm's approved policy and keep restricted operational details in their authorized system.",
          {
            "text": "Helm Command can support evidence upkeep, a risk register, roadmap and bounded questionnaire responses within its written service. Existing IT maintains technical administration and remediation. The broker and authorized business signer retain insurance decisions. A separate assessment or specialist engagement needs its own agreed scope. Start the review with enough time to gather facts, resolve uncertainty and verify completed changes before signing.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command/"
              }
            ]
          }
        ]
      },
      {
        "h": "Check an illustrative partial answer",
        "ps": [
          "Suppose a hypothetical firm has 45 email users and has verified enforcement for 43. Two accounts remain outside the policy because their workflow needs investigation. That is a partial deployment, even if all 45 people received enrollment instructions. The coordinator should record the actual population, exceptions and technical owner's next action.",
          "If those accounts are brought into scope before signing, retain the verification date and final state. If they remain excluded, ask the broker how to represent the limitation in this form. Do not replace the factual answer with a promise to finish later. Keep the written clarification and the authorized signer's decision with the submission so another reviewer can understand how the final answer was reached."
        ]
      }
    ],
    "takeaway": "Preserve the exact questions, assign factual owners and verify the relevant population. Resolve exceptions openly, review the final package as a whole and retain the signed submission with dated supporting evidence.",
    "lead": [
      "Use this walkthrough to organize the submission. The insurer's actual form, definitions and policy documents govern the questions you must answer. Ask your broker to clarify ambiguous wording and have the authorized signer review the final package. Security evidence helps support the facts; it does not promise a particular premium or coverage decision."
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "cyber-insurance-claim-denied",
    "metaTitle": "Cyber Insurance Claim Disputes: Evidence and Review | Helm",
    "ctaMode": "book",
    "title": "Cyber Insurance Claim Disputes: Coverage, Evidence and the Questions to Resolve",
    "metaDesc": "Organize policy documents, application answers and dated control evidence when cyber coverage is questioned. Coordinate with the broker and coverage adviser.",
    "date": "2026-07-09",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Professional Services",
    "laneTo": "/professional-services",
    "intro": "A cyber incident creates urgent operational decisions. A coverage dispute adds another task: establishing what the policy says, what happened and what records support the claim. Good security records can help explain the facts, but they cannot guarantee payment or replace a review of the actual contract.",
    "sections": [
      {
        "h": "Begin with the policy and the asserted reason",
        "ps": [
          "If an insurer raises a concern, obtain the relevant correspondence and policy documents. Distinguish a request for information, a reservation about coverage and a formal denial. Ask the broker and appropriate counsel to identify the issue and the deadline for responding. Do not infer the legal effect of a letter from its subject line alone.",
          "Collect the policy in force, endorsements, declarations, application, supplements and any relevant written clarification. Keep the final submitted versions, not merely an early draft held by an employee. An endorsement or definition can change how a general coverage description applies. The team reviewing the matter needs the complete contract.",
          "Create a chronology using confirmed dates. Record discovery, initial response, notice to the insurer, provider engagements and material communications. Separate the time an event occurred from the time the firm learned about it. If a date remains uncertain, mark it as uncertain and identify the source being checked."
        ]
      },
      {
        "h": "Distinguish different coverage questions",
        "ps": [
          {
            "text": "The FTC's cyber-insurance guidance recommends discussing the firm's coverage needs with its insurance agent. That purchasing discussion is also a reason to keep the final wording available to the response team. A sales summary about cyber coverage does not establish how a particular loss will be treated.",
            "links": [
              {
                "phrase": "FTC's cyber-insurance guidance",
                "to": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
              }
            ]
          }
        ],
        "table": {
          "caption": "Distinguish different coverage questions",
          "headers": [
            "Question",
            "Record to examine",
            "Who should interpret it"
          ],
          "rows": [
            [
              "Is this type of loss within the purchased coverage?",
              "Coverage provisions, definitions and endorsements",
              "Broker and coverage adviser"
            ],
            [
              "Does a limit or retention apply?",
              "Declarations, sublimits and relevant terms",
              "Broker and insurer, with counsel where needed"
            ],
            [
              "Were notice and engagement requirements followed?",
              "Policy wording and response chronology",
              "Authorized response team and coverage adviser"
            ],
            [
              "Does an application answer match the environment?",
              "Submitted answer and dated control evidence",
              "Technical owner supplies facts; adviser assesses effect"
            ],
            [
              "Does an exclusion or condition affect the claim?",
              "Asserted provision and event evidence",
              "Coverage counsel and insurer"
            ]
          ]
        }
      },
      {
        "h": "Check the event against the purchased coverage",
        "ps": [
          "A fraudulent transfer, a ransomware interruption and a claim from an affected client may raise different coverage questions. Ask the adviser to map the actual event to the relevant provisions. Do not assume every loss involving email falls under the same cyber policy section or that another business policy automatically fills a gap.",
          "Review amounts and categories separately. A policy can have an overall limit while particular coverage has a sublimit or other condition. Identify the provision supporting each part of the requested claim. Keep financial documentation linked to the event and avoid combining unrelated business costs without explanation.",
          "Before renewal, use representative scenarios in the broker discussion. Ask how the proposed policy would address a vendor banking change, interruption of a critical application or a third-party demand. These are questions for the broker and insurer, not statements that the scenarios are covered. Record any written clarification with the final policy."
        ]
      },
      {
        "h": "Preserve evidence of the environment at the relevant time",
        "ps": [
          "If an application answer is questioned, collect records that describe the environment when the answer was given and when the event occurred. A screenshot taken after remediation may demonstrate the current state but not the earlier one. Label dates and sources accurately so the reviewing team can distinguish them.",
          "For authentication, identify the account population, policy scope and recorded exceptions. For device protection, identify eligible and reporting devices. For backups, identify covered workloads and actual restore evidence. The relevant facts depend on the disputed question; avoid sending an unorganized archive of every security document.",
          "A technical owner should state what the record shows and what it does not. For example, an enrollment report may establish which devices were registered but not whether every device was reporting during the incident. A planned rollout does not establish completed deployment. Precise facts help the adviser assess the issue without an exaggerated assurance."
        ]
      },
      {
        "h": "Keep response obligations available before an event",
        "ps": [
          "Review the policy's notice, cooperation, consent and provider provisions with the broker before an incident. Record the breach hotline, reporting route and people authorized to engage help. Ask how urgent containment and separately retained services should be handled under the particular wording. Do not assume the same procedure applies to every insurer.",
          "The operational plan should also identify urgent actions outside insurance. For a suspected fraudulent transfer, bank contact can be time-sensitive. For active spread, authorized technical containment may be urgent. Assign parallel work where appropriate, while the responsible person follows the policy's reporting process. A coverage question should not become a reason to leave those duties unassigned.",
          "Keep contacts available outside the systems likely to be affected. A hotline stored only in an inaccessible mailbox may delay the response. Test the contact list in a planned exercise using the agreed route, without creating a false claim or emergency."
        ]
      },
      {
        "h": "Document costs and decisions as work occurs",
        "ps": [
          "Maintain an incident expense record with invoices, engagement scope, authorization and the relationship to the event. Keep business interruption records according to the advice received, including the source of any estimate. Separate confirmed amounts from forecasts and avoid presenting a preliminary estimate as a settled loss.",
          "Record why a provider was engaged and who approved the work. If consent or a panel arrangement matters under the policy, retain the relevant communication. A later reviewer should be able to follow the decision without reconstructing it from scattered messages.",
          "For technical recovery, retain the action timeline and results in the approved restricted system. Logs, customer details and security findings should not be copied into ordinary marketing or broadly shared operating documents. The claim team needs controlled access to appropriate evidence, not unrestricted redistribution."
        ]
      },
      {
        "h": "Respond to a concern with a factual package",
        "ps": [
          "Ask the reviewing adviser to specify the requested information. Organize the response around that issue: the relevant question or provision, the submitted answer, supporting records and unresolved facts. Avoid argumentative speculation about the attacker's intent or the insurer's motives.",
          "If a record is missing, state that limitation and the next fact-finding step. Do not recreate a historical test log as though it existed at the time. A retrospective explanation can be labeled as such and supported by available records. Preserving that distinction protects the usefulness of the evidence.",
          "Keep one controlled version of the response package and record what was submitted, when and by whom. Route material legal or coverage conclusions through the appropriate adviser. Different employees independently answering the same question can create inconsistencies that complicate an otherwise straightforward review."
        ]
      },
      {
        "h": "Correct gaps without rewriting history",
        "ps": [
          "An incident may reveal incomplete authentication, missing devices, weak payment verification or an untested recovery process. Fixing the gap can improve the current operating position, but it does not alter the historical record. Date the change and retain the before-and-after evidence as appropriate.",
          "Assign corrective work to the responsible IT or business owner. A security coordinator can track the work and collect evidence, while the authorized administrator makes technical changes. If specialist recovery or forensic services are needed, establish their scope and authority separately.",
          "Review whether the findings affect statements in customer questionnaires, policies or future applications. Obtain advice on any required update rather than assuming the firm can leave old statements unchanged. The goal is a current, supportable representation of the environment."
        ]
      },
      {
        "h": "Prepare a more useful renewal review",
        "ps": [
          "Before the next renewal, compare the actual business with the policy and application. Include new services, changed workflows, acquisitions and material changes in the protected population. Ask the broker how those facts should be reflected. Accurate information does not guarantee a lower premium or an available policy; it supports a clearer underwriting discussion.",
          {
            "text": "Use the application walkthrough for the submission process and the questionnaire guide for technical answer evidence. Review the incident-response plan for bank, insurer and provider handoffs. Each answers a different operational question.",
            "links": [
              {
                "phrase": "application walkthrough",
                "to": "/resources/cyber-insurance-application-walkthrough/"
              },
              {
                "phrase": "questionnaire guide",
                "to": "/resources/cyber-insurance-questionnaire/"
              },
              {
                "phrase": "incident-response plan",
                "to": "/resources/incident-response-plan-small-business/"
              }
            ]
          },
          {
            "text": "Helm Command provides evidence upkeep, risk and roadmap ownership and bounded questionnaire assistance within its written scope. It does not sell insurance, interpret coverage as legal counsel or guarantee claim payment. Existing IT supplies and maintains the relevant technical controls; the broker and advisers handle policy decisions. Confirm any assessment or specialist work separately before relying on it.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command/"
              }
            ]
          }
        ]
      },
      {
        "h": "Separate a control problem from a coverage conclusion",
        "ps": [
          "Consider a hypothetical firm that discovers an excluded administrator account after an incident. The technical review should identify the account, its access, the applicable policy and the time the exception existed. It should also establish what role, if any, that account played in the event. Those are factual questions requiring evidence.",
          "The coverage review then considers the actual application, policy terms and applicable law. The technical exception alone does not answer every legal question, and a statement that the event used another account does not automatically resolve the dispute. Keep the analyses connected without conflating them. Give the adviser the dated facts and relevant documents, then follow the agreed response process and deadlines."
        ]
      }
    ],
    "takeaway": "Keep the complete policy, submitted application and dated control evidence together. When coverage is questioned, identify the asserted issue, preserve the facts and coordinate the response with the broker and appropriate coverage adviser.",
    "lead": [
      "This guide is for business owners preparing their records and response process. Your broker, insurer and coverage counsel determine how policy wording and applicable law affect a particular loss. Avoid treating a general article about denied claims as a prediction that one missing control automatically defeats every policy."
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "cyber-insurance-questionnaire",
    "metaTitle": "How to Answer a Cyber Insurance Questionnaire | Helm",
    "ctaMode": "book",
    "title": "How to Answer a Cyber Insurance Questionnaire with Evidence",
    "metaDesc": "Review twelve control areas against your actual cyber insurance questions. Verify population, configuration and records before the authorized signer submits.",
    "date": "2026-06-24",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Professional Services",
    "laneTo": "/professional-services",
    "intro": "A cyber-insurance questionnaire should describe the controls your business actually operates. The useful answer is not the most reassuring one. It is the answer supported by the relevant population, configuration, records and date. If the control is incomplete, explain that limitation through the route approved by your broker.",
    "sections": [
      {
        "h": "1. Multi-factor authentication",
        "ps": [
          "Identify which accounts and access paths the question covers. Email, remote access, administrators and independent business applications may require separate checks. Ask the authorized administrator to show enforcement and exceptions for that population. A user who registered a second factor may still have an access path where it is not required.",
          {
            "text": "Record the allowed methods if the form asks. SMS, app codes, push approval and phishing-resistant credentials have different properties. Avoid calling every method phishing resistant. Use the MFA comparison to prepare questions for IT, then answer for the method and policy actually operating.",
            "links": [
              {
                "phrase": "MFA comparison",
                "to": "/resources/mfa-methods-compared/"
              }
            ]
          },
          "If some accounts remain excluded, do not infer that most means all. Ask the broker how to provide the qualified answer. If deployment finishes before signing, verify the completed state and keep dated evidence. A scheduled task is not completed enforcement."
        ]
      },
      {
        "h": "2. Endpoint detection and response",
        "ps": [
          "Confirm the eligible population, installed protection and current reporting health. A console with old device entries may not represent active coverage. Compare it with the current inventory and resolve devices that are missing, duplicated or stale.",
          "Ask what investigation and response service operates around the product. If the question asks about continuous monitoring, identify the function and covered devices. Continuous collection, analyst review and authorized containment are different claims. Keep the written service boundary with the evidence.",
          "Phones, tablets, servers and specialist systems need their own coverage decisions. Do not answer for every endpoint based on employee laptop protection when the relevant population is broader. State supported and excluded systems as the form requires."
        ]
      },
      {
        "h": "3. Backup coverage",
        "ps": [
          "List the important workloads and the recovery method for each. Email, file storage, business applications and local systems may have different products and operators. A user count or subscription invoice does not establish that every workload is protected.",
          "Check enrollment of new users and shared data. Identify exclusions and unsuccessful captures. Ask the operator to show the actual protected population and relevant recovery points. Do not claim all data is backed up when the inventory includes an unsupported application.",
          {
            "text": "Keep preservation and restoration separate. Retention or legal holds can serve important purposes while differing from operational backup. Review the Microsoft 365 comparison or Google Workspace comparison when those platforms are relevant.",
            "links": [
              {
                "phrase": "Microsoft 365 comparison",
                "to": "/resources/microsoft-365-retention-vs-backup/"
              },
              {
                "phrase": "Google Workspace comparison",
                "to": "/resources/google-workspace-retention-vs-backup/"
              }
            ]
          }
        ]
      },
      {
        "h": "4. Isolation, immutability and encryption",
        "ps": [
          "Read which mechanism the question requests. Encryption concerns protection under a cryptographic arrangement. Isolation concerns separation or access. Immutability concerns restrictions on alteration or deletion under a particular configuration. One does not automatically establish the others.",
          "Ask the backup operator for the configured mechanism, administrator access and relevant retention behavior. If a proposed answer depends on a provider capability, confirm it is enabled for your covered data. Avoid treating a product's available feature as proof of your deployment.",
          "Record any exceptions and the evidence source. Have the broker clarify ambiguous wording rather than choosing the interpretation that produces the easiest yes. The actual form and any policy requirement need the specific answer."
        ]
      },
      {
        "h": "5. Restore testing",
        "ps": [
          "A successful backup job is evidence of a capture process, not proof that the business can recover usable work. Identify the scenario tested, recovery point, operator, destination and result. Have the data owner confirm the returned information can be used.",
          {
            "text": "State the actual test date and scope. If only one workload was tested, do not describe it as a full-business recovery exercise. Failed steps and manual repairs belong in the record. Use the restore-testing guide to define a bounded test.",
            "links": [
              {
                "phrase": "restore-testing guide",
                "to": "/resources/backup-testing-insurers/"
              }
            ]
          },
          "Follow the requested frequency if the application or policy specifies one. Otherwise, describe the firm's real procedure and obtain clarification where needed. Do not invent a universal quarterly requirement or label an old test recent without checking the requested period."
        ]
      },
      {
        "h": "6. Patching and vulnerability management",
        "ps": [
          "Ask IT which systems are maintained, how important findings are prioritized and how completed updates are verified. Include unsupported products and externally operated systems. An automated update setting does not establish that every applicable update completed successfully.",
          "For a vulnerability-management question, retain the assessed scope and finding-to-action record. A public website scan does not cover all internal devices. A closed ticket needs evidence relevant to the finding, such as a version check or appropriate reassessment.",
          {
            "text": "Use the vulnerability-management guide to assign validation, action and exceptions. The questionnaire answer should describe the maintained process and its population, with any limitations disclosed through the agreed route.",
            "links": [
              {
                "phrase": "vulnerability-management guide",
                "to": "/resources/vulnerability-management-new-jersey/"
              }
            ]
          }
        ]
      },
      {
        "h": "7. Email security",
        "ps": [
          "Identify the platform, protection configuration and covered mail flow. Filtering, impersonation protection, link inspection and attachment handling may have different scope. Ask who investigates employee reports and how a suspicious account is handled.",
          "Do not treat SPF, DKIM or DMARC as protection against every fraudulent message. These controls concern authentication and policy under their configured rules. A compromised legitimate mailbox can still send a fraudulent request. Payment authorization needs its own independent process.",
          {
            "text": "If the form asks about encryption or secure exchange, check that specific workflow. Inbound threat filtering does not establish encrypted delivery of confidential files. Use the email-service evaluation to separate the capabilities.",
            "links": [
              {
                "phrase": "email-service evaluation",
                "to": "/resources/email-security-services-evaluation/"
              }
            ]
          }
        ]
      },
      {
        "h": "8. Security awareness training",
        "ps": [
          "Identify who is assigned training, when it occurs and what records exist. Include seasonal workers and new starters where the question requires them. A license purchased for the staff is different from completed learning.",
          "Keep overdue assignments and documented exceptions visible. If the form asks about simulations, describe the actual program rather than assuming any training counts. A simulation result is one measure of participation and behavior, not a guarantee that employees will recognize every attack.",
          "Ask the program owner for the relevant period and population. Avoid applying a categorical rule that one past presentation always means no or that any recent session always means yes. The question's wording and the firm's actual practice determine the response."
        ]
      },
      {
        "h": "9. Incident response",
        "ps": [
          "Find the approved plan and confirm its contacts, authority and business handoffs. A document written for a prior provider arrangement may not describe the current response. Check how staff report a concern and how the primary and backup contacts reach authorized help.",
          "If an exercise is requested, retain the scenario, date, participants, observed decisions and corrective actions. Attendance alone does not show that every response duty was tested. State the actual scope and result.",
          {
            "text": "Include urgent financial and continuity decisions where relevant. The incident-response guide connects technical containment with bank, insurer and adviser contacts. Policy-specific notice and engagement requirements should be reviewed with the broker.",
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
        "h": "10. Payment verification",
        "ps": [
          "Ask the business owner how new or changed banking instructions are independently verified. A callback should use a trusted number established outside the suspicious request, with an authorized person confirming the relevant instruction. Email appearance alone is weak authorization evidence.",
          "Identify the required approvers, exception process and record connecting verification to the transfer executed. A prior verification of a different account should not silently authorize a later change. Test the process with harmless scenarios that include deadline pressure.",
          "Keep the evidence limited to the appropriate controlled records. A general training completion log does not establish that a particular financial instruction was verified. Describe the actual business procedure rather than a security-product feature."
        ]
      },
      {
        "h": "11. Access reviews and departures",
        "ps": [
          "Confirm who owns account and permission reviews, what population is checked and how findings are resolved. Include independent applications, provider access and relevant shared identities. Blocking the main email account may not end every separate application session or integration.",
          {
            "text": "For departures, retain the approved sequence for access removal, ownership transfer and records preservation. Deleting an account before reviewing a hold or retention requirement can create a separate problem. The offboarding checklist explains the handoff.",
            "links": [
              {
                "phrase": "offboarding checklist",
                "to": "/resources/employee-offboarding-checklist/"
              }
            ]
          },
          "Answer for completed operation, not the existence of a template. If the firm has a procedure but cannot establish whether recent departures followed it, record that uncertainty and assign the review before making a broad claim."
        ]
      },
      {
        "h": "12. Vendor dependencies and oversight",
        "ps": [
          "Identify providers holding business information or operating important systems. Record the service owner, relevant assurance evidence and incident contact. A supplier's product name does not establish what safeguards apply to your account.",
          "Where the form asks about review or contractual terms, inspect the actual record. Ask the appropriate adviser to interpret obligations. Technical staff can supply facts about access and coverage without making unsupported legal conclusions.",
          {
            "text": "The FTC cyber-insurance guidance encourages a discussion with the agent about coverage needs. Include important supplier dependencies in that discussion rather than assuming they are covered by a general cyber label.",
            "links": [
              {
                "phrase": "FTC cyber-insurance guidance",
                "to": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
              }
            ]
          }
        ]
      },
      {
        "h": "Keep the answer and evidence connected",
        "ps": [
          "For each question, retain the exact wording, response, population, date, evidence reference and reviewer. Resolve contradictory statements before the authorized signer approves the package. Keep the final submitted version and written broker clarifications, with restricted supporting records in their approved location.",
          {
            "text": "Helm Command supports evidence upkeep and bounded questionnaire assistance under its written scope. Existing IT supplies and maintains technical controls; the broker and signer retain insurance decisions. A supported submission improves the factual record, without guaranteeing pricing, issuance or claim payment.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command/"
              }
            ]
          }
        ]
      }
    ],
    "takeaway": "Answer the exact question for the actual population and period. Verify deployment and operating records, disclose incomplete controls through the approved route and save the final response with its supporting evidence.",
    "lead": [
      {
        "text": "Forms differ. Read the actual question, definition and requested period before using this guide. The examples below are an evidence checklist, not a universal insurer form or a legal interpretation of coverage. The application walkthrough explains how to coordinate the complete submission; this resource focuses on the technical and operating questions.",
        "links": [
          {
            "phrase": "application walkthrough",
            "to": "/resources/cyber-insurance-application-walkthrough/"
          }
        ]
      }
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "cybersecurity-point-solutions-vs-managed-security",
    "title": "Cybersecurity Point Solutions vs Managed Security for NJ SMBs",
    "metaTitle": "Point Solutions vs Managed Security for NJ SMBs | Helm",
    "metaDesc": "Compare separate security tools with Helm Core and Command. Map coverage, response duties and questionnaire evidence before choosing managed security.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "text": "NIST's guidance on building a cybersecurity team includes resources for discussing internal and outsourced security roles. For procurement, we recommend a written responsibility map: the outcomes you need, provider commitments and work retained by your team. Use it to compare proposals before comparing product names.",
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
            ],
            "ordered": false
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
          "caption": "Compare Helm Core, Helm Command and AI consulting",
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
      },
      {
        "h": "Price the operating work alongside the subscription",
        "ps": [
          "Build one comparison worksheet for the same users, systems and coverage period. Separate recurring fees from implementation, transition and work retained by IT. A cheaper license can be a reasonable purchase if your team has capacity to operate it. A managed proposal can be reasonable if its included work replaces a task you would otherwise need to fund. Neither conclusion follows from the monthly price alone.",
          "Use a hypothetical email-protection evaluation. Proposal A supplies filtering and a dashboard. Proposal B also includes investigation of supported alerts and a defined escalation route. Before comparing cost, ask who reviews employee reports in each model, who makes allow-list changes and who handles an account suspected of sending fraudulent messages. Those are different jobs. Confirm the provider's actual commitments instead of assigning value to a marketing label.",
          "Keep retained labor visible without pretending every saved hour becomes cash. If IT spends fewer hours reviewing routine notifications, that may free time for patching or recovery tests. It does not automatically reduce the IT invoice. Ask the IT owner which work would change, then use that answer in the business case."
        ]
      },
      {
        "h": "Make onboarding and replacement part of the purchase",
        "ps": [
          "A replacement service needs a transition plan. Inventory the current agents, mail-routing settings, licenses and administrators before scheduling removal. Confirm whether the new tool can coexist during a limited transition and who will approve changes. Avoid creating a protection gap merely to meet a preferred billing date.",
          "Ask for acceptance evidence. For endpoints, that could mean reconciling eligible devices against active deployment records and investigating missing entries. For email, it could mean confirming routing and testing the approved reporting path with harmless messages. For backup, identify the workload and perform an authorized restore check. The checks depend on the service; a single onboarding-complete email does not answer all three questions.",
          "Agree on an exit process while both parties have time to discuss it. Name who can export reports, transfer administrative access, remove agents and document outstanding incidents. Identify records that the business must retain and any charges for transition help. Your firm should be able to understand its coverage after a provider changes."
        ]
      },
      {
        "h": "Reassess when the business changes",
        "ps": [
          "Set review triggers as well as a calendar date. An acquisition, new client requirement, cloud-platform migration or large increase in contractors can change the population a service needs to cover. A stack that fits today may leave new identities or applications outside its scope tomorrow.",
          "Bring the responsibility map back to each review. Close a gap by assigning the task, funding it where needed and checking completion. Buying another dashboard is useful only when its information reaches someone authorized to act. The result you want is a clear operating record: covered population, assigned work, current exceptions and the next decision the business must make.",
          "Ask who owns an alert that crosses products. The email provider may identify the message while another team investigates account access. Record the transfer, acceptance and next action so both sides can tell whether the handoff succeeded."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "cybersecurity-risk-assessment-tools",
    "title": "How to evaluate a cybersecurity risk assessment tool for small businesses",
    "metaTitle": "How to Evaluate Cybersecurity Assessment Tools | Helm",
    "metaDesc": "Choose an assessment tool that distinguishes evidence from assertions and connects findings to business impact, owners and decisions.",
    "date": "2026-10-06",
    "readMin": 8,
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
      },
      {
        "h": "Define the assessment before selecting software",
        "ps": [
          "Write the decision the assessment needs to support. A firm deciding which recovery improvements to fund needs different evidence from a firm preparing a customer response. Both can use a risk tool, but the assessment scope should explain the business process, affected systems, intended reviewers and limits.",
          "Include the time period and population. If an assessment covers the main office and email tenant, identify a newly acquired office or specialist application that remains outside it. Record exclusions in the report where a decision-maker will see them. A narrow assessment can be useful when its conclusions remain narrow.",
          "Agree on access and testing authority. A questionnaire, a document review and authenticated technical testing expose different information and can affect systems differently. Obtain approval for the actual work rather than treating acceptance of a sales demonstration as permission to inspect production accounts.",
          "Set a delivery requirement that survives the software purchase. Your firm should receive findings, evidence references, limitations and decisions in a form it can retain. If the only output is a dashboard that disappears when the subscription ends, the tool may not support the record you need."
        ]
      },
      {
        "h": "Distinguish a technical finding from a business risk",
        "ps": [
          "A scanner might identify outdated software on a device. The reviewer still needs to confirm whether the finding is accurate, whether the device is exposed and what work it supports. A business consequence could be interruption of a client-facing workflow, unauthorized access to records or loss of an important dependency.",
          "The assessment should show the reasoning between the technical observation and that consequence. Existing controls may change the analysis, while missing information may leave uncertainty. Ask whether the tool allows a reviewer to record both. A ranking that hides these judgments can make dissimilar findings appear equivalent.",
          "For a hypothetical firm, a confirmed weakness on an internet-facing service used for client exchange may warrant faster attention than an uncertain finding on an isolated test device. That comparison depends on the actual facts. Do not turn the example into a universal scoring rule or an excuse to ignore internal systems.",
          "Keep risk treatment separate from finding validation. IT may establish that a scanner result was inaccurate; leadership may decide to accept a real exposure for a limited period. Those are different outcomes and should produce different records. The tool should preserve why a finding was closed or deferred."
        ]
      },
      {
        "h": "Test the scoring method with two contrasting scenarios",
        "ps": [
          "Ask the vendor to explain what produces a high score. Is it a count of missing questionnaire answers, severity of technical findings, a framework mapping or a calculated model? Identify which inputs are estimates and who supplies them. A precise-looking number can still depend on uncertain assumptions.",
          "Try a fictional case with good documentation but a confirmed operational gap, then one with working controls but missing evidence. Check whether the output distinguishes the two. Both require action, but the first may need a control improvement while the second may need verification and recordkeeping.",
          "If the tool uses categories such as high, medium and low, ask for their definitions. Review whether different assessors would apply them consistently enough for your decisions. Preserve the method used at the time of the assessment so a later rating can be interpreted properly.",
          "Avoid comparing scores across products as though they share a scale. Even within one product, a scope change can affect the result. When reporting progress, explain whether a real finding was resolved, evidence was supplied or the scoring method changed. Those explanations are more useful than an unexplained rise in a dashboard number."
        ]
      },
      {
        "h": "Check evidence handling and reviewer access",
        "ps": [
          "An assessment platform can become a collection point for system details, policies and sensitive screenshots. Determine which records must be uploaded and which can remain in an approved repository with a reference. Redact unnecessary names and details where that still supports the review.",
          "Inspect permissions using a harmless sample workspace. Confirm which users can read evidence, edit findings, approve decisions and export records. Separate the ability to submit an answer from the authority to approve it. Ask how the platform records changes and handles a departing reviewer.",
          "Review integration requests with IT. A connector may need broader access than a manual evidence upload. Ask what it reads, whether it can change systems and how access is removed at the end of the engagement. Confirm supported platforms and required licensing before treating automated collection as included coverage.",
          "Discuss data retention, vendor access and exit arrangements. Establish what happens to uploaded material, backups and shared links when a workspace is closed. Use the firm's own contractual and information-handling requirements to review the vendor's terms; do not assume a compliance badge settles every data decision."
        ]
      },
      {
        "h": "Connect the report to assigned work and revisit it",
        "ps": [
          "For each material item, the report should name the finding, affected business process, supporting evidence and uncertainty. Add the proposed action, owner, dependencies and the person who can approve spending or accept residual risk. A recommendation without an implementation owner remains unfinished work.",
          "Define what closes the item. If the recommendation is to improve recovery, purchase of a backup subscription is not the same as a successful restore check. If the recommendation is stronger access control, a written policy is not proof of enforcement. Match completion evidence to the claim.",
          "Set review triggers. Changes in applications, suppliers, staff access or customer requirements may invalidate an earlier assumption. A new incident or confirmed technical finding can also justify reassessment. Review scope and evidence dates before reusing last year's report.",
          "At the purchasing decision, choose the tool that supports your review process and available owners. A smaller tool with transparent inputs and usable exports may fit better than a larger platform nobody can maintain. The assessment's value lies in the decisions and verified work it supports, not the number of automated checks advertised."
        ]
      },
      {
        "h": "Keep findings usable when the tool changes",
        "ps": [
          "Ask for a sample export before purchase and open it with the intended reviewer. Check that evidence references, owners, decisions and limitations remain understandable outside the dashboard. A spreadsheet of unexplained scores may be technically exportable without preserving a useful assessment.",
          "Test how a corrected input appears in the record. Retain the original observation, correction and reviewer where needed to explain the change. That history helps distinguish a resolved exposure from a reporting error when leadership revisits the assessment.",
          "Confirm that a new assessment can reference earlier decisions without silently replacing their evidence dates."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "cybersecurity-roadmap-milestones",
    "title": "Key milestones to include in a cybersecurity roadmap for New Jersey professional-services firms",
    "metaTitle": "Cybersecurity Roadmap Milestones for NJ Firms | Helm",
    "metaDesc": "Build a roadmap with a checked baseline, dependencies, responsible owners and acceptance evidence. Leadership approves priorities and risk decisions.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "text": "Helm Core supplies a standardized protection stack and monthly reporting. It does not include a maintained roadmap or quarterly leadership reviews.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Helm Command includes the covered Core stack, a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire responses, quarterly leadership reviews, an annual tabletop and coordination with the named IT owner. Its $8,000 to $15,000 monthly range is confirmed after fit and complexity review.",
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
      },
      {
        "h": "Write milestones with acceptance checks",
        "ps": [
          "A milestone should describe a result that can be checked. Compare deploy endpoint protection with reconcile all eligible workstations against active protection records and resolve documented exceptions. The second description identifies the population and gives the owner a way to demonstrate completion.",
          "For each milestone, record the business reason, accountable owner, implementing party, dependencies, target date and acceptance evidence. Include the approver for spending or disruption. Keep a short description of what remains outside scope so closure does not imply a broader claim.",
          "Ask the implementing owner to review the plan before leadership approves the date. A security adviser can recommend work but cannot commit another vendor's resources without agreement. If a dependency has no confirmed date, label the target as provisional and record the decision needed.",
          "Store evidence references with the milestone rather than copying sensitive exports into a widely shared roadmap. Leadership needs enough information to understand completion; detailed technical records can remain in an approved restricted system with access for the responsible reviewer."
        ]
      },
      {
        "h": "Use a staged plan without inventing universal deadlines",
        "ps": [
          "The first stage establishes facts and immediate decisions. Confirm important systems, owners, supported protection and known exceptions. Address urgent confirmed exposure through the appropriate operating route instead of waiting for a quarterly planning meeting. Record unknowns that require further authorized discovery.",
          "The next stage implements agreed priorities with dependencies checked. An access change may need enrollment and recovery preparation. A device rollout may need compatibility testing and an approved installation window. A backup improvement may require workload mapping before a meaningful restore test can occur.",
          "A later stage verifies results and maintains them. Reconcile coverage, review acceptance evidence and check whether the original business consequence has changed. Decide which records need periodic review and which changes trigger an earlier check. The roadmap becomes a maintained operating record rather than a one-time project list.",
          "These stages do not prescribe a 30-, 60- or 90-day deadline for every firm. Sequence and dates depend on exposure, business constraints and available owners. When using an illustrative schedule, label it as a planning assumption until the implementing parties commit to it."
        ]
      },
      {
        "h": "Keep urgent work and long-term improvements connected",
        "ps": [
          "A new confirmed finding can require work outside the planned sequence. Route it to the appropriate owner, assess its business consequence and document the decision. Update the roadmap if resources or dependencies shift. Do not preserve an attractive timeline at the expense of a more urgent operating need.",
          "At the same time, avoid treating every notification as grounds to abandon the program. The responsible reviewer should distinguish confirmed urgent work from uncertain signals and routine maintenance. Record why a priority changed so leadership can understand the tradeoff.",
          "Keep incident response separate from roadmap governance. A suspected active compromise requires the agreed notification, containment and investigation route. The planning record can capture resulting improvements later. A milestone discussion is not a substitute for authorized response.",
          "Coordinate with IT's maintenance schedule. Routine patching and administration remain with their operating owner, but material exceptions may require leadership decisions. The roadmap should highlight those decisions without pretending to replace every technical task queue."
        ]
      },
      {
        "h": "Plan a recovery milestone around usable work",
        "ps": [
          "Choose an important workflow and identify the data and systems it depends on. Define what a successful authorized recovery check would demonstrate and who can perform it. Obtain the business owner's acceptance criteria before the test, especially where timing or data currency matters.",
          "A hypothetical firm might test recovery of a defined shared workspace into a controlled location, then verify that selected files can be opened and used by an authorized reviewer. That result supports a limited claim about the tested workload and conditions. It does not establish that every application can be recovered in the same time.",
          "Record the test date, workload, result, limitations and actions arising. If the result fails an acceptance check, keep the milestone open or create a clearly linked corrective item. Purchasing a backup product cannot substitute for the verification the milestone requires.",
          "Check which recovery duties sit outside the security service. IT may need to restore applications or rebuild systems, while specialist response and business notification have other owners. Include those dependencies in the plan before presenting recovery improvement as completed coverage."
        ]
      },
      {
        "h": "Make evidence and exception reviews explicit milestones",
        "ps": [
          "Build a record of the claims the firm regularly makes to customers and insurers. Identify the control owner, evidence location, date and covered population. Schedule a review of unsupported or stale claims before the next submission rather than treating questionnaire drafting as an isolated task.",
          "An exception review should produce decisions. For each material gap, leadership can approve treatment, request more information or accept a defined risk with conditions and a review date. Record the rationale and responsible person. Acceptance is not the same as technical resolution.",
          "Set triggers for reconsideration. A new client requirement, platform change or failed control check may invalidate the original decision. The owner should know when to bring it back to leadership. An exception without a trigger can remain open unnoticed long after its justification changes.",
          "Use summaries for governance and controlled references for supporting records. The roadmap should be readable by decision-makers without circulating credentials, incident details or unnecessary personal information. Evidence quality includes handling the record appropriately."
        ]
      },
      {
        "h": "Measure progress through verified outcomes",
        "ps": [
          "Report completed milestones against their acceptance checks, not only tasks moved to a finished column. Explain outstanding dependencies, missed dates and decisions awaiting approval. If scope changes, show the new population or requirement so comparisons remain meaningful.",
          "Use numbers only when they describe something measured. For example, a fictional coverage check could record 48 of 50 eligible devices reconciled, with two exceptions assigned to IT. That is 96 percent of the stated population at the check date. It is not a security score or a claim about excluded systems.",
          "Avoid treating planned spending, meeting attendance or document count as proof of risk reduction. They may describe activity, but the report should connect work to verified changes and remaining uncertainty. Leadership can then decide whether the investment addresses the business problem.",
          "At the next review, carry forward unresolved decisions with current owners and dates. Retire superseded work with a reason rather than deleting its history. A useful roadmap makes the next action clear and preserves enough context to explain why the firm chose it."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "deepfake-ceo-fraud",
    "metaTitle": "Deepfake Executive Fraud: Cases and Verification | Helm",
    "title": "Deepfake Executive Fraud: Real Cases and Verification Steps",
    "metaDesc": "Review dated official deepfake fraud cases and build trusted verification, payment approval and reporting procedures for unusual executive requests.",
    "date": "2026-06-03",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A payment request can sound like a familiar executive and still be unauthorized. Synthetic or manipulated audio and video can make an impersonation more convincing, but the underlying business problem is familiar: someone asks an employee to move money or disclose information outside the approved process.",
    "sections": [
      {
        "h": "What the reported cases establish",
        "ps": [
          {
            "text": "In a June 26, 2024 Hong Kong government reply to the Legislative Council, the Secretary for Security described a January case involving a fabricated video conference with an apparent UK chief financial officer. The reply said the conference was prerecorded, involved no interaction with the victim and was followed by messaging instructions. The reported loss was about HK$200 million transferred to five accounts.",
            "links": [
              {
                "phrase": "Hong Kong government reply to the Legislative Council",
                "to": "https://www.info.gov.hk/gia/general/202406/26/P2024062600192.htm"
              }
            ]
          },
          "The same official reply described a separate May 20, 2024 report involving an apparent chief financial officer, a roughly thirty-minute conference and a transfer of nearly HK$4 million. It said publicly available video material had been altered. Both matters were described as under investigation at the time of the reply. These are dated official reports, not a prediction of losses at small New Jersey firms.",
          "The cases illustrate a limitation of familiar appearance as an authorization check. They do not establish that every executive impersonation uses AI, that every video call is fake or that a particular number of seconds of audio will reliably produce a convincing clone. Avoid importing those unsupported claims into staff training."
        ]
      },
      {
        "h": "Separate identity confidence from approval",
        "ps": [
          "Seeing a face or hearing a voice can increase a person's confidence about identity. It does not establish that the requested payment has the required business authorization. The firm needs a process connecting a verified person, an approved purpose, the actual beneficiary and the person permitted to release funds.",
          "A real executive can also make a mistaken request or use an account that has been compromised. Apply the financial rule consistently rather than creating a special exception for apparently authentic senior requests. The control should survive both impersonation and ordinary errors.",
          "Document the instruction being approved. If the beneficiary changes after approval, the prior decision should not silently authorize the replacement. A callback about one account and a later payment to another account are different events. Keep the verification record connected to the instruction actually executed."
        ]
      },
      {
        "h": "Establish the trusted route in advance",
        "ps": [
          "Record approved contact details for executives and outside parties involved in sensitive instructions. Obtain them through an established business process, not from the unusual request being evaluated. Name an alternate route for an unavailable primary contact and restrict who can change the trusted record.",
          "For an unusual transfer, use that route to reach the authorized person and confirm the relevant details. Do not rely on calling a number supplied in the request, joining a new meeting link from the same message or replying to the same potentially compromised thread. Those steps may remain under the requester's control.",
          {
            "text": "The FBI's guidance on AI-enabled financial fraud describes synthetic text, audio and video used in fraud and recommends independent verification. The business procedure should turn that guidance into a repeatable action. Employees need to know which record and contact to use, not merely that deepfakes exist.",
            "links": [
              {
                "phrase": "FBI's guidance on AI-enabled financial fraud",
                "to": "https://www.ic3.gov/PSA/2024/PSA241203"
              }
            ]
          }
        ]
      },
      {
        "h": "Make the approval chain visible",
        "ps": [
          "Set thresholds and approvers around the firm's actual transaction profile and applicable terms. This is an operating framework, not a universal legal requirement for every business. Ask the relevant finance and legal advisers to review the rule where client funds or regulated transactions are involved.",
          "Keep verification evidence proportionate. The firm can reference a controlled payment instruction rather than copying full banking details into every status message. Record who verified, which trusted contact source was used, what was confirmed and who approved release. Limit access to the people who need it."
        ],
        "table": {
          "caption": "Make the approval chain visible",
          "headers": [
            "Stage",
            "Decision to record"
          ],
          "rows": [
            [
              "Receive the request",
              "Identify the stated purpose, amount and beneficiary"
            ],
            [
              "Compare with the expected process",
              "Establish whether the request is new, changed or unusual"
            ],
            [
              "Verify through the trusted route",
              "Confirm the authorized person's instruction independently"
            ],
            [
              "Obtain required approval",
              "Apply the firm's documented approval authority"
            ],
            [
              "Release and reconcile",
              "Connect execution to the verified instruction"
            ],
            [
              "Handle an exception",
              "Record the authorized decision and required safeguards"
            ]
          ]
        }
      },
      {
        "h": "Plan for executive pressure",
        "ps": [
          "A fraud attempt may use urgency, confidentiality or status to discourage a check. A legitimate urgent request can create the same pressure. The process therefore needs a rule for the situation, not a prediction about whether the requester sounds suspicious.",
          "Leadership should tell staff that pausing for the approved verification is expected. If an executive asks for an exception, identify the authorized exception route and evidence. Staff should not have to decide alone whether a senior person's apparent instruction overrides a financial control.",
          "Plan for an unavailable executive near a payment cutoff. Use the established alternate route or hold the release until authorized verification is complete. Decide that approach before the deadline. A procedure with no workable alternative can become an undocumented bypass at the moment it matters."
        ]
      },
      {
        "h": "Avoid making visual clues the primary control",
        "ps": [
          "Audio artifacts, unnatural movement or an inconsistent background may justify caution, but their absence does not verify a request. Product capabilities and attack methods change. Staff should not be expected to perform media forensics while answering a client call or processing a payment.",
          "Likewise, a polished message does not prove AI involvement. Ordinary account compromise and conventional impersonation can produce convincing requests. Report the suspicious action and available evidence, rather than requiring the employee to identify the generation technology.",
          "If the firm evaluates a media-detection product, ask about its tested conditions, limitations and false results. Keep it separate from the authorization procedure. A confidence score from a detector should not become permission to release funds without the required verification."
        ]
      },
      {
        "h": "Protect the accounts used for instructions",
        "ps": [
          {
            "text": "Review authentication, privileged access and reporting for email and messaging accounts used in finance. Use the MFA resource to compare methods and enforcement with IT. A familiar account can be compromised, so technical account protection and independent financial approval should support different parts of the process.",
            "links": [
              {
                "phrase": "MFA resource",
                "to": "/resources/mfa-methods-compared/"
              }
            ]
          },
          "Review access to shared financial records and trusted contact lists. An attacker who can alter those records may affect the verification route. Assign the owner who approves changes and the administrator who implements permissions. Record meaningful changes and review departures.",
          "External exposure review may also identify impersonation using the firm's name. A report can support investigation and platform reporting, but it does not guarantee rapid removal of every fake account. Confirm the relevant service's monitored assets and response scope before relying on it."
        ]
      },
      {
        "h": "Test a transaction rather than a fake-video contest",
        "ps": [
          "Use a harmless exercise in which an apparent senior request introduces a new beneficiary and a tight deadline. Ask staff to show the trusted contact, verification, approvals and decision. Include the payment operator and alternate approver so the exercise reaches execution authority.",
          "Do not use real client banking details or send an unannounced synthetic executive recording outside the agreed exercise scope. The purpose is to test the financial process and reporting route, with approved participants and materials. Record the actual steps and any missing authority.",
          "Correct the specific gap afterward. An unavailable trusted number needs a maintained contact. An ambiguous approval rule needs a leadership decision. A person who lacks access to the approved record needs an appropriate access arrangement. Repeat the affected step once the correction is implemented."
        ]
      },
      {
        "h": "Act promptly if money has moved",
        "ps": [
          {
            "text": "The FBI's business email compromise guidance advises immediate financial-institution contact and reporting to IC3. Record the transfer details, contact times and reference numbers. Do not wait for a final determination that AI was used before taking the financial response step.",
            "links": [
              {
                "phrase": "FBI's business email compromise guidance",
                "to": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
              }
            ]
          },
          "Use the incident plan to assign parallel work. Finance handles bank communication; authorized IT and security teams investigate relevant account activity; leadership involves the insurer and appropriate advisers. Preserve the messages, meeting information and timeline through the approved evidence process.",
          "Communicate confirmed facts through trusted channels. Avoid declaring that a familiar employee authorized the transfer merely because the recording resembles that person. The investigation and coverage review need evidence, not an early narrative built around a convincing appearance.",
          {
            "text": "Helm Core supplies defined protections for supported email, device and identity capabilities. Command adds program and evidence coordination within written scope. Neither service authenticates every executive instruction or guarantees fraud prevention. Finance owns payment authorization, existing IT administers systems, and specialist incident work needs separately agreed scope.",
            "links": [
              {
                "phrase": "Helm Core",
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
        "h": "Protect the trusted contact record",
        "ps": [
          "Assign an owner for executive and supplier contact details used in verification. A change to that record should follow an approved process with independent confirmation, rather than an edit prompted by the same unusual payment request. Record who approved the change and its effective date.",
          "Review the record when a person changes roles or leaves. Test the alternate contact during a planned exercise. A verification rule can fail when the stored number is stale or the alternate person has no authority. Maintaining the trusted route is an operating duty in its own right, with an owner and evidence, rather than a one-time setup task."
        ]
      }
    ],
    "takeaway": "Use a trusted route, verify the actual instruction and apply the required approvals. A familiar face, voice or account should support context without replacing the firm's authorization process.",
    "lead": [
      "The firm should not depend on staff proving that a voice or video is artificial. Give them an independent verification route and authority to pause an unusual request. Apply that route to the transaction, even when the request arrives through a recognizable account or appears to involve senior leadership."
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "digital-risk-protection-services",
    "title": "How to evaluate and implement digital risk protection services on a budget for small businesses",
    "metaTitle": "Digital Risk Protection Services: SMB Buyer Guide | Helm",
    "metaDesc": "Scope the public assets and sources a service monitors, then confirm who reviews findings and what response assistance is included.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "text": "Helm Core includes digital-risk protection within its defined stack, alongside email, device, supported identity, backup and awareness protection. Confirm the monitored assets and response scope before relying on that coverage.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Helm Command adds a risk register, roadmap, evidence upkeep and coordination with the named IT owner. These responsibilities can help track an unresolved external finding and its owner; they do not guarantee takedowns or include unlimited forensic, legal or administrative work.",
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
      },
      {
        "h": "Define the external problem you want to observe",
        "ps": [
          "Separate business impersonation, lookalike domains, exposed credentials and other proposed monitoring categories. Ask which of them the service actually supports. A broad product label can hide a narrow source list or a response process that consists only of sending notifications.",
          "Identify the assets clients use to recognize the firm: approved domains, public accounts, brand names and relevant contact points. Keep a record of legitimate assets and their owners. The reviewer needs that record to distinguish an impersonation from an authorized campaign or a newly created provider page.",
          "Start with the highest-consequence client interactions. If customers receive payment instructions by email, impersonation affecting that route may require a financial-verification review as well as an external report. If the firm relies on a public account for announcements, identify who can confirm a fake account and approve communication about it."
        ]
      },
      {
        "h": "Examine source coverage and freshness",
        "ps": [
          "Ask where the service obtains observations and what sources remain outside its coverage. Determine how often observations are collected, when the customer is notified and what information accompanies a possible match. Do not assume a service searches the entire internet, every private forum or every credential collection.",
          "For a reported exposure, distinguish the observation date from the date the underlying information may have originated. An old credential finding can still warrant an access review, while not proving that the password is current. Have IT assess the affected account and existing safeguards through the approved process.",
          "Request a representative report with fictional or appropriately sanitized data. Check whether it gives the reviewer enough information to identify the asset, source, time and proposed next step. An alert containing only a frightening category and no context for a decision can create work without a clear decision."
        ]
      },
      {
        "h": "Keep validation separate from detection",
        "ps": [
          "A possible match needs an authorized reviewer. The firm may use a similar domain legitimately, have an approved third-party campaign or share a name with another organization. Establish the facts before making an accusation or submitting a takedown request.",
          "For a suspected malicious site, preserve relevant observations without entering credentials, downloading unknown files or interacting unnecessarily. Use authorized specialists where technical investigation is needed. The business owner can confirm branding and authorization while the specialist handles the appropriate technical assessment.",
          "For credentials, do not test a reported password by trying to log in as the employee. Have the authorized administrator assess the account, use the approved access actions and determine whether incident investigation is warranted. A finding can prompt protection without proving a current compromise."
        ]
      },
      {
        "h": "Compare response assistance in detail",
        "ps": [
          "A takedown request depends on the relevant platform, evidence and process. Confirm whether the service submits requests, supplies templates or only identifies the reporting route. Avoid treating assistance as a guarantee that every site or account will be removed within a fixed period.",
          "Ask how rejected or unanswered reports are handled. Identify the business escalation owner and any legal or specialist work that requires separate engagement. A subscription should not conceal the remaining duty in an undefined instruction to contact support."
        ],
        "table": {
          "caption": "Compare response assistance in detail",
          "headers": [
            "Service stage",
            "Procurement question"
          ],
          "rows": [
            [
              "Discovery",
              "Which assets and sources are monitored?"
            ],
            [
              "Validation",
              "Who checks a match and obtains business context?"
            ],
            [
              "Escalation",
              "Who receives the finding and what action is expected?"
            ],
            [
              "Reporting",
              "Does the provider help prepare and submit platform reports?"
            ],
            [
              "Follow-up",
              "Who checks whether the issue remains visible?"
            ],
            [
              "Closure",
              "What evidence supports the disposition?"
            ]
          ]
        }
      },
      {
        "h": "Connect a finding to internal access",
        "ps": [
          "An exposed-credential notification may require a password reset, authentication review, session action or an investigation depending on the facts. Have IT apply the actual platform procedure and record the result. Do not assume changing one password invalidates every copied secret or independent application session.",
          {
            "text": "Use the password-manager guide and MFA comparison to review the relevant operating controls. Keep the account population and enforcement evidence current. The external finding does not replace that internal work.",
            "links": [
              {
                "phrase": "password-manager guide",
                "to": "/resources/password-managers-small-teams/"
              },
              {
                "phrase": "MFA comparison",
                "to": "/resources/mfa-methods-compared/"
              }
            ]
          },
          "An impersonation may require staff or client communication through trusted channels. The responsible business owner and advisers should approve what is said. Explain confirmed facts and the verification action the recipient should take, without spreading a live malicious link more widely than necessary."
        ]
      },
      {
        "h": "Estimate the work, not only the subscription",
        "ps": [
          "Count the assets and monitoring categories proposed. Ask how price changes with new domains or public identities. Include validation, reporting assistance, follow-up and records access in the comparison. A lower fee can leave more work with the customer.",
          "Estimate the internal time using a representative report or pilot. Treat the estimate as an assumption, not a promised saving. Identify who reviews findings and who performs related IT or business changes. An affordable service still needs enough operating capacity to act on meaningful results.",
          "Avoid measuring value by notification volume alone. More notifications can reflect broader scope, duplicate observations or false matches. Track the dispositions that matter: confirmed issue, legitimate asset, unresolved finding or completed supported action. State the counting rules so leadership understands the report."
        ]
      },
      {
        "h": "Run a bounded onboarding check",
        "ps": [
          "Provide the approved asset list and confirm enrollment with the provider. Check ownership and naming variations carefully. A missing important domain can leave a coverage gap even when other assets are monitored successfully.",
          "Use harmless examples or provider-supplied sample findings to test routing and review. Identify who confirms the business context, prepares the response and tracks the result. Do not register a confusing live lookalike or publish fake customer-facing material merely to create a test without a separately approved plan.",
          "Record acceptance criteria and unresolved exclusions. The initial check should establish that the agreed assets, reporting and response route are set up. It does not prove that every possible external misuse will be found."
        ]
      },
      {
        "h": "Maintain assets and evidence as the business changes",
        "ps": [
          "Update the list after a rebrand, acquisition, new public account or campaign domain. Identify legitimate temporary assets and their end date. The monitoring reviewer should not have to guess whether a newly observed page belongs to the firm.",
          "Keep findings and sensitive account information in an approved restricted location. General operating records can identify the process and responsible owner without copying exposed credentials or live incident details. Confirm export and retention arrangements if the service ends.",
          "For leadership, report significant unresolved issues, response status and coverage changes. State limitations clearly. A quiet reporting period means no relevant findings were reported under the configured service; it does not establish that the firm's name or credentials have never been misused."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "email-security-gateway-managed-service",
    "title": "Email security gateway versus managed gateway service: choosing the right model for your SMB",
    "metaTitle": "Email Security Gateway vs Managed Service | Helm",
    "metaDesc": "Compare gateway deployment, filtering features, quarantine ownership and managed service scope before choosing email protection.",
    "date": "2026-10-06",
    "readMin": 8,
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
      },
      {
        "h": "Map every relevant mail route",
        "ps": [
          "Begin with the main email platform, domains and accounts, including shared mailboxes. Add the services that send on behalf of the business, such as invoicing, appointment reminders and marketing tools. The provider should explain which routes its product inspects and which remain outside that inspection.",
          "Ask what happens to messages exchanged inside the organization. A gateway placed on an external mail route may have a different view from a product integrated with the mailbox platform. Do not assume either deployment is universally better. Compare the visibility and actions available in the actual proposed configuration.",
          {
            "text": "Review the connection with the existing IT provider. Identify who owns routing, authentication records and recovery from a delivery problem. Microsoft documents configuration considerations for its own email protection stack; another product needs its own supported design and review.",
            "links": [
              {
                "phrase": "email protection stack",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/protection-stack-microsoft-defender-for-office365"
              }
            ]
          },
          "Keep a dated coverage record. A service added after onboarding should trigger a review of routing and protection instead of relying on the original inventory. This is especially useful when a department buys a tool without involving the email administrator."
        ]
      },
      {
        "h": "Demonstrate the handling of an ordinary false positive",
        "ps": [
          "Ask the provider to show how a staff member requests review of a legitimate message that has been held. Use approved harmless test content. The demonstration should cover the request, the reviewer’s decision, the release and the record left behind.",
          "Confirm whether users can release particular messages themselves and which items require an administrator or security review. The answer should reflect the configured policy, not a product’s maximum possible capabilities. A business needs a usable way to receive legitimate documents without making every employee responsible for judging unfamiliar attachments.",
          "Discuss the approved exception process. A temporary adjustment for one message is different from permanently trusting a sender or domain. Record who may approve each type, how its scope is limited and when it is revisited. Broad exceptions can change the protection well beyond the delivery problem that prompted them.",
          "Define a response expectation for business-critical messages within the actual service hours. A label such as managed or continuous monitoring does not itself establish how quickly a held invoice or client document will be reviewed. Ask how staff escalate a delay and what happens outside the normal queue."
        ]
      },
      {
        "h": "Evaluate a report of credential entry",
        "ps": [
          "Filtering and account response require different decisions. If an employee reports entering credentials through a suspicious link, ask who receives the report and who investigates the account. Identify which containment actions are authorized and which must be performed by the tenant administrator or another responder.",
          "Keep the incident handoff concrete. The provider should identify the business contact, alternate communication route and information needed for escalation. An email-security service may remove messages without supplying full forensic investigation or recovery. Those boundaries should be clear before the incident.",
          "Review payment-related reports separately. A provider’s technical analysis cannot authorize a vendor bank change. Finance should use its established verification and approval process regardless of whether the message was quarantined, released or authenticated successfully.",
          "Use one agreed fictional scenario in the proposal review so vendors explain comparable responsibilities. Record unanswered questions and resolve them in the service scope. A product demonstration is weaker evidence than a written assignment of the work your staff will otherwise inherit."
        ]
      },
      {
        "h": "Plan the routing change as a business change",
        "ps": [
          "Agree an onboarding sequence with IT and the service provider. Identify test mailboxes, senders, expected behavior and acceptance criteria. Keep the previous configuration and the authorized recovery procedure available to the people carrying out the change.",
          "Test normal correspondence and business-generated messages. Include shared mailboxes and the external recipients involved in important workflows. The pilot should identify delivery effects as well as threat-handling capabilities. Do not test with live harmful files or unapproved phishing activity.",
          "Give employees the reporting and quarantine-review instructions before the change. Identify whom they contact if expected mail is missing. A short notice stating that protection has improved does not help them recover an urgently needed client attachment.",
          "Confirm who checks the first results and signs off the rollout. If the initial test exposes a coverage or compatibility issue, correct it before expanding. An unfinished onboarding task should remain visible rather than being absorbed into an assumption that the managed provider handles everything."
        ]
      },
      {
        "h": "Compare the complete operating cost",
        "ps": [
          "Include software, onboarding, configuration and the staff time left with the business or existing IT provider. Ask about separate charges for incident work, special mail flows and recovery. A lower subscription price may leave more recurring work with your team; a higher price may still exclude duties you expected.",
          "Request a sample report that explains coverage, relevant events and unresolved exceptions. Counts of blocked messages can help describe activity, but they do not establish that the service prevented a particular loss or investigated every account issue.",
          "Also review how you leave the service. Identify who changes routing, exports the agreed records and removes access granted to the provider. Keep the business’s control of its domain and tenant clear. A service should not make ownership ambiguous simply because it operates a protection layer."
        ]
      },
      {
        "h": "A responsibility comparison",
        "ps": [
          "Use the comparison to identify work rather than assume a vendor performs a task because its proposal says managed. Obtain the specific responsibilities in writing and revisit them when your mail platform or business workflows change."
        ],
        "table": {
          "caption": "A responsibility comparison",
          "headers": [
            "Responsibility",
            "Software-only arrangement",
            "Managed arrangement to confirm"
          ],
          "rows": [
            [
              "Mail-flow configuration",
              "Existing IT or internal administrator",
              "Named implementation owner and handoff"
            ],
            [
              "Quarantine review",
              "Assigned internal or IT staff",
              "Covered queue, hours and release authority"
            ],
            [
              "Policy exceptions",
              "Internal approval and maintenance",
              "Defined approvals, scope and review dates"
            ],
            [
              "Account incident",
              "Separate authorized response route",
              "Supported containment and escalation boundary"
            ],
            [
              "Business payment decision",
              "Finance’s approved process",
              "Finance still owns authorization"
            ]
          ]
        }
      },
      {
        "h": "Check the release procedure during a pilot",
        "ps": [
          "Use harmless test messages to examine what happens when a legitimate message is quarantined. Ask who can request a release, who can approve it and how the decision is recorded. A rule that lets every user release every suspicious attachment deserves a specific review; an overly restrictive rule also needs a workable route for time-sensitive client mail.",
          "Confirm how the provider explains a release decision and handles repeated false positives. A broad allow-list added to solve one delivery problem may weaken protection for later messages. Require an owner, reason and review date for material exceptions. Test the user support path as well as message detection, because an inaccessible quarantine can interrupt business even when the filtering engine is operating as configured."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "email-security-services-evaluation",
    "title": "How to evaluate email security services for small businesses: checklist and vendor questions",
    "metaTitle": "How to Evaluate Email Security Services | Helm",
    "metaDesc": "Evaluate email security services through coverage, report handling, containment authority, escalation and the work retained by existing IT.",
    "date": "2026-10-06",
    "readMin": 8,
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
                "phrase": "Command",
                "to": "/helm-command/"
              },
              {
                "phrase": "Core",
                "to": "/helm-core/"
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
      },
      {
        "h": "Build a coverage schedule you can verify",
        "ps": [
          "List active domains, mailboxes and shared accounts with the existing IT provider. Identify which are licensed, enrolled and protected under the proposed service. Include third-party sending services and important external mail routes. The provider should describe exclusions in a form leadership can understand.",
          "Separate the purchased capability from its configured coverage. A firm may hold licenses while leaving a mailbox outside a policy or a supported integration unfinished. Ask what evidence will show that onboarding is complete for the population in scope.",
          "Review changes after onboarding. Who adds new users, checks shared mailboxes and reviews a new sending application? A responsibility table should identify the owner of each event. Otherwise, coverage can drift while the service report continues to describe the original population.",
          "Keep a date on the schedule. For a customer or insurer response, the firm needs to establish what was covered when the answer was prepared, including unresolved exceptions. An undated statement that email security is enabled is too broad to answer a detailed coverage question."
        ]
      },
      {
        "h": "Ask vendors to distinguish the protections",
        "ps": [
          "Require plain descriptions of sender authentication, impersonation handling, malicious-file inspection, link protection and post-delivery response. These capabilities address different conditions. A product’s feature list should not be summarized as a promise that phishing cannot reach staff.",
          {
            "text": "Microsoft’s Safe Links and Safe Attachments documentation illustrates why feature and policy details matter. Those references describe Microsoft capabilities; they do not prove that another vendor supplies equivalent protection or that the relevant licenses and policies are configured in your tenant.",
            "links": [
              {
                "phrase": "Safe Links",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/safe-links-about"
              },
              {
                "phrase": "Safe Attachments",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/safe-attachments-about"
              }
            ]
          },
          "Ask which inspection routes the service supports and which actions it can take after delivery. If a proposal mentions identity or device response, establish whether those capabilities are included in the same written scope. Do not infer them from a general claim about an integrated platform.",
          "Evaluate the result against the business’s actual workflows. A professional-services firm needs to receive legitimate documents, report uncertainty and escalate suspected account compromise. The useful vendor comparison explains how those jobs are performed, including the limits."
        ]
      },
      {
        "h": "Inspect the user-reporting route",
        "ps": [
          "Ask for a demonstration using approved harmless messages. A staff member should be able to report a concern through the configured process, and the assigned reviewer should receive the information needed to assess it. Confirm what feedback the employee gets and where further questions go.",
          "Test a report made after the employee clicked or entered credentials. The service should explain its escalation boundary rather than treating every report as a message-classification exercise. Someone must own the account investigation and authorized containment work.",
          "Check the alternate route when the main account is unavailable or suspected to be compromised. An employee locked out of email still needs a trusted way to report what happened. Record that contact before relying exclusively on an in-mailbox button.",
          "Measure report handling through records and unresolved cases. A fast acknowledgement is not the same as a completed investigation. Ask what the monthly report will show about decisions, escalation and work still waiting on the firm or its IT provider."
        ]
      },
      {
        "h": "Examine exception authority",
        "ps": [
          "Filtering can interrupt legitimate work, and exceptions can weaken protection if they are broader than necessary. Ask who reviews requests, who approves changes and how the change is limited. Staff should not need to guess whether to release an unfamiliar file simply because a deadline is approaching.",
          "Request an example of the record kept for an exception. It should show the reason, scope, approver and review date where applicable. A permanent whole-domain exception created for one delayed message deserves more scrutiny than a narrowly approved release.",
          "Clarify whether the business can change policy directly and how the provider is informed. If several administrators operate independently, the service needs a way to identify changes that affect coverage. An agreed process avoids a dispute later about who disabled a relevant protection.",
          "Include removal of outdated exceptions in maintenance. A review should distinguish justified ongoing arrangements from changes that no longer serve a business purpose. Leave unresolved limitations visible in the report rather than hiding them behind a general protected status."
        ]
      },
      {
        "h": "Compare service scope with the people available",
        "ps": [
          "Ask which team provides monitoring, review and containment. Confirm hours, escalation routes and supported actions through the written agreement. A vendor-operated continuous service and a locally staffed provider are different delivery arrangements; the firm should know the model without assuming one from the branding.",
          "Review the existing IT contract alongside the security proposal. Identify tenant administration, routine remediation, licensing and recovery duties. If both providers assume the other owns a task, resolve the gap before onboarding rather than during an incident.",
          "Ask how the business authorizes actions that can interrupt work. Some containment may be pre-authorized within a defined scope. Other decisions need leadership or the administrator. Record both the authority and the backup contact so the service is usable outside an ordinary working day.",
          "Distinguish full incident response from the covered security service. Specialized forensics, legal advice, bank recovery and broader restoration may require other parties and approvals. A clear handoff is part of a credible proposal."
        ]
      },
      {
        "h": "Review evidence and exit arrangements",
        "ps": [
          "Request a sample of the information the firm can retain for its own governance and questionnaires. Coverage dates, relevant configuration evidence and a record of response decisions are more useful than a marketing statement that the tools are enterprise-grade.",
          "Agree who prepares evidence and who approves external answers. The provider can help organize support, but the client owns final attestations. Sensitive technical records and live findings should be shared only through the approved route with the appropriate audience.",
          "At contract end, confirm how routing, access and relevant records are handed over. Identify who removes provider integrations and checks that mail delivery remains functional. The organization should retain control of its tenant and public domain records throughout the change."
        ]
      },
      {
        "h": "A vendor evaluation record",
        "ps": [
          "Give vendors the same questions and evaluate the answers against your staff capacity. The better fit is the service whose responsibilities match the work you need performed and whose limits the business can manage."
        ],
        "table": {
          "caption": "A vendor evaluation record",
          "headers": [
            "Question",
            "Evidence to request"
          ],
          "rows": [
            [
              "What is covered?",
              "Dated mailbox, domain and route schedule"
            ],
            [
              "Who handles reports?",
              "Demonstrated reporting and escalation process"
            ],
            [
              "Who may change policy?",
              "Written authority and exception record"
            ],
            [
              "What can be contained?",
              "Supported actions and approval limits"
            ],
            [
              "What remains with IT?",
              "Responsibility assignment in both agreements"
            ],
            [
              "How does the firm leave?",
              "Access removal, routing and record handover procedure"
            ]
          ]
        }
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "employee-offboarding-checklist",
    "metaTitle": "Employee Offboarding Checklist: Accounts and Devices | Helm",
    "title": "Employee Offboarding Checklist: Accounts, Devices and Business Continuity",
    "metaDesc": "A written employee offboarding checklist covering account access, sessions, shared credentials, devices, and the SaaS accounts most companies forget to close.",
    "date": "2026-06-29",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "When an employee leaves, the company needs to end their access while preserving the work it is entitled and required to keep. Those are separate tasks. Deleting an account too early can disrupt records and handover; disabling only the main email account can leave other applications accessible.",
    "sections": [
      {
        "h": "Start with an authorized request and a precise time",
        "ps": [
          "HR or the responsible manager should identify the person, employment status, departure time and approved access changes. Confirm the request through your established process. IT should not act on an unverified email that could itself be an impersonation attempt.",
          "Specify whether access ends immediately or at an agreed time after handover. A scheduled departure gives the business an opportunity to transfer responsibilities before access closes. An urgent departure may require containment first and a more careful evidence review. The coordinator should know which process applies without distributing the reason to unnecessary recipients.",
          "Name a backup coordinator. An offboarding request should not wait until the one person who normally handles it returns from leave. Record where the checklist and approved contact details are held so the process can begin when the main collaboration system is unavailable."
        ]
      },
      {
        "h": "Inventory the access that needs to end",
        "ps": [
          "Begin with the identity provider, email and cloud documents, then check payroll, finance, customer systems, remote access and specialist applications. Include systems purchased by a department and accounts that do not use single sign-on. The departing person’s manager and application owners can help identify those services.",
          "Review administrator accounts separately from everyday accounts. Include secondary accounts, vendor portals, password-manager access and remote support tools. Do not assume that blocking the person’s ordinary sign-in covers every identity they used.",
          "Also identify physical and operational access: keys, badges, company phones, security keys and any equipment in their possession. Your checklist should state who records each item, who collects it and how an unreturned device is escalated. Avoid marking everything complete because a laptop was handed back.",
          "Keep the inventory useful after the departure. A gap discovered during offboarding is often a reason to improve onboarding and account ownership records. The next checklist should begin from a maintained inventory rather than another search through receipts and message history."
        ]
      },
      {
        "h": "Block sign-in and address existing sessions",
        "ps": [
          {
            "text": "Have the authorized administrator follow the platform’s documented access-removal process. Microsoft’s former-employee guidance separates access blocking, data preservation, device handling and mailbox continuity. It is a sequence of responsibilities, not a single delete button.",
            "links": [
              {
                "phrase": "former-employee guidance",
                "to": "https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/remove-former-employee?view=o365-worldwide"
              }
            ]
          },
          {
            "text": "A password reset alone does not establish that every active application session has ended. Microsoft’s access-revocation documentation explains that token and application behavior affect when access is lost. Ask IT to account for the identity provider and the individual services involved.",
            "links": [
              {
                "phrase": "access-revocation documentation",
                "to": "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access"
              }
            ]
          },
          "Record the blocking and session-revocation actions with their completion times. Review registered authentication methods, recovery routes and application access as appropriate. Verify that the former user cannot obtain a reset through the ordinary help desk without the required authorization.",
          "For a hybrid environment, identify where account administration is authoritative. An action in the cloud may not be the complete procedure for a synchronized identity. The administrator should confirm the supported steps and any propagation limits rather than promising that every session ends instantly."
        ]
      },
      {
        "h": "Preserve records before deleting accounts or licenses",
        "ps": [
          "Ask the responsible business owner which records need to remain available and whether a legal or regulatory retention requirement applies. Get appropriate advice for holds or disputed departures. Do not let a license-saving exercise decide the fate of records the firm must preserve.",
          "Transfer ownership of work that would otherwise depend on the departing person. Examples include shared documents, scheduled reports, service subscriptions and approval queues. Check whether a business process uses that person’s account to run an integration. Reassign it through a supported arrangement instead of leaving the former employee’s identity active indefinitely.",
          "Limit access to preserved mail and files. A successor may need particular business records without needing unrestricted access to every message. Use approved permissions and document the purpose. Access to a former employee’s mailbox deserves the same care as access to other sensitive company information.",
          "Do not treat retention and backup as interchangeable. Confirm what your actual retention settings, holds and backup service cover before deleting information. If the administrator cannot establish the consequences, keep the deletion decision open while resolving that uncertainty."
        ]
      },
      {
        "h": "Handle mailbox continuity deliberately",
        "ps": [
          "Decide who handles new messages, which address remains available and how external contacts will be informed. A shared mailbox or approved forwarding arrangement may support continuity, depending on the platform and license requirements. The original user’s sign-in should not remain the business’s long-term handover mechanism.",
          "Review existing forwarding rules and delegates. Remove unauthorized external destinations and unnecessary access through the approved process. Preserve relevant evidence if a suspicious rule may be part of an incident, rather than erasing it without a record.",
          "Set a review date for any continuity arrangement. Mailbox access that was useful during handover can become unnecessary months later. Record the person who will reassess it, including whether the address should continue receiving mail or be retired.",
          "Explain the new contact route to staff and customers as appropriate. Clear ownership reduces the pressure to reactivate a departed person’s login because a client sent an urgent request to the old address."
        ]
      },
      {
        "h": "Remove shared credentials and other access paths",
        "ps": [
          "Removing a person from a password vault does not erase credentials they already knew or copied. Rotate shared secrets that remain usable, particularly for important accounts. Where a service supports individual users, replace shared access with named accounts and appropriate permissions.",
          "Check API keys, tokens and other access grants with the application owner. Some belong to a business integration and should be reassigned or replaced safely rather than revoked without understanding the dependency. Others may be personal grants that no longer have a business purpose.",
          "Review remote access, trusted devices and third-party applications. Ask each owner to confirm completion in their own system. A central identity action is useful evidence but does not automatically cover independently administered services.",
          "Document exceptions with an owner and a deadline. If a credential cannot be changed immediately because it supports a critical process, leadership needs to understand the exposure and approve the interim arrangement. An unresolved dependency should remain visible rather than disappearing into a checked box."
        ]
      },
      {
        "h": "Collect devices without destroying needed evidence",
        "ps": [
          "Record company-owned devices, accessories and security keys against the asset inventory. Have IT verify their condition and follow the organization’s reissue procedure. Preserve information or evidence when an investigation or hold requires it before wiping the device.",
          "For personal devices, use only the authorized work-data removal procedure supported by your management setup and applicable agreements. Do not promise that the company can selectively erase every unmanaged copy. Confirm what is actually enrolled and which controls are available.",
          "If equipment is not returned, escalate through the established personnel and asset process. Ask IT about supported access blocking or management actions. Keep the technical response coordinated with the business owner rather than assuming a remote command resolves possession, data and employment issues together."
        ]
      },
      {
        "h": "A checklist with evidence fields",
        "ps": [
          "Adapt these fields to your existing ticketing or personnel process. The record should show what was done, by whom and when. It does not need to repeat private employment details to prove that an account action occurred."
        ],
        "table": {
          "caption": "A checklist with evidence fields",
          "headers": [
            "Workstream",
            "Responsible owner",
            "Completion evidence"
          ],
          "rows": [
            [
              "Authorized timing",
              "HR or manager",
              "Approved request and effective time"
            ],
            [
              "Identity and sessions",
              "Existing IT provider",
              "Actions, systems covered and verification"
            ],
            [
              "Separate applications",
              "Application owners",
              "Access-removal records and unresolved exceptions"
            ],
            [
              "Data preservation",
              "Business owner with IT",
              "Retention decision and approved successor access"
            ],
            [
              "Shared credentials",
              "Relevant service owner",
              "Rotation or replacement record"
            ],
            [
              "Devices and physical access",
              "Asset and facilities owners",
              "Returned items, removed access and exceptions"
            ]
          ]
        }
      },
      {
        "h": "Rehearse a departure without changing real access",
        "ps": [
          "Use an approved tabletop exercise with a fictional employee and a representative list of systems. Ask the coordinator to locate the request process, contact each owner and explain what completion evidence would be retained. Do not disable a real account simply to make the exercise realistic.",
          "Include one dependency, such as an automated report owned by the employee, and one separate application outside single sign-on. Check whether the team identifies the handover and access-removal work without prompting. Record any missing owner, unclear timing or unsupported recovery claim, then update the checklist. This tests the process before a real departure creates time pressure."
        ]
      },
      {
        "h": "Verify completion and improve the inventory",
        "ps": [
          "The coordinator should reconcile the checklist with the original access inventory. Ask owners to identify anything incomplete, including records awaiting retention advice or integrations awaiting reassignment. Keep each exception assigned until it is resolved.",
          "Review offboarding as a process, not as evidence that every departure is suspicious. Look for recurring gaps: late requests, unknown SaaS accounts, missing device records or unclear ownership. Fix those upstream so the next departure is easier to handle correctly.",
          "Helm can discuss account-protection responsibilities alongside your existing IT provider. Routine administration and employee account changes remain with the named IT owner unless a separate written scope states otherwise. A public domain scan cannot verify that an employee has been offboarded."
        ]
      }
    ],
    "takeaway": "Authorize the departure time, inventory access, block sign-in and address sessions. Preserve required records, transfer business ownership, remove remaining access paths and verify the evidence. Keep unresolved exceptions assigned rather than declaring completion from one account change.",
    "lead": [
      "Use a written checklist with an authorized departure time, a named coordinator and owners for the technical actions. The process should cover normal resignations, urgent departures, contractors and role changes. Keep sensitive personnel information within the people who need it to carry out the work."
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "google-workspace-retention-vs-backup",
    "title": "Google Workspace Native Retention vs Managed Backup Services: Choosing the Right Fit for Your Business",
    "metaTitle": "Google Workspace Retention vs Managed Backup | Helm",
    "metaDesc": "Compare Google recovery and Vault retention with your restore requirements. Confirm each protected workload and the authorized restore operator.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "text": "Helm Core includes cloud productivity backup within its defined protection stack. Supported Google workloads, provider capabilities, restore duties and test responsibilities must be confirmed in writing. The service description does not promise backup of every Gmail, Drive, Calendar, Contacts or Chat asset.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Helm Command adds program ownership, evidence upkeep and IT coordination. Existing IT retains tenant administration and backup operations outside covered services. Specialized recovery or remediation needs separate scope.",
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
      },
      {
        "h": "Inventory the information that keeps client work moving",
        "ps": [
          "List business information by workload and owner. Gmail correspondence, files in individual Drive accounts and documents in shared drives can have different access and recovery arrangements. Also identify Calendar, Contacts, Chat and any applications using Workspace information. The inventory should state the recovery method for each important workload rather than treating a user license as proof of complete coverage.",
          "Ask business owners where the authoritative copy lives. A project document may be shared through Drive while its signed final version belongs in a different records system. A spreadsheet may feed an accounting application that has its own recovery needs. Mapping that relationship prevents a firm from restoring the visible file while overlooking the system required to use it.",
          "Include external ownership. A file visible in a user's Drive may belong to another organization. Visibility alone does not establish that your backup service can capture or restore it. Confirm product capabilities for the actual ownership and sharing arrangement. If the information is essential, agree with the data owner on an appropriate authoritative copy and recovery responsibility."
        ]
      },
      {
        "h": "Use retention, holds and backup for their stated purposes",
        "ps": [
          {
            "text": "Google's Vault FAQ distinguishes Vault's discovery function from backup. Its hold guidance explains preservation under holds. These capabilities require the appropriate setup and administration. An export useful for a discovery process should not automatically be treated as a routine restore of a functioning mailbox or shared folder.",
            "links": [
              {
                "phrase": "Vault FAQ",
                "to": "https://knowledge.workspace.google.com/vault/getting-started/google-vault-faq?hl=en"
              },
              {
                "phrase": "hold guidance",
                "to": "https://knowledge.workspace.google.com/vault/holds/get-started-with-holds-in-google-vault"
              }
            ]
          },
          "Have the responsible records adviser determine preservation requirements and the authorized administrator implement them. Keep a hold decision separate from a service cancellation or ordinary departure task. A person completing an offboarding checklist should not have to infer whether records may be deleted. The decision and its owner need to be recorded before the account changes."
        ],
        "table": {
          "caption": "Use retention, holds and backup for their stated purposes",
          "headers": [
            "Mechanism",
            "Intended operating question",
            "Check before relying on it"
          ],
          "rows": [
            [
              "Workspace recovery feature",
              "Can an administrator reverse this supported deletion?",
              "The event, recovery window, account state and available method"
            ],
            [
              "Vault retention",
              "Which supported records remain under a configured retention rule?",
              "The applicable data type, rule, edition and licensing"
            ],
            [
              "Vault hold",
              "Which applicable data must be preserved for a matter?",
              "The hold scope, authorized owner and release process"
            ],
            [
              "Managed backup",
              "Can the operator return covered information to a usable destination?",
              "Workload coverage, recovery points, permissions and restore evidence"
            ]
          ]
        }
      },
      {
        "h": "Review account and edition changes before making them",
        "ps": [
          {
            "text": "Recoverability can depend on account state and licensing. Google publishes guidance on preserving Vault data when switching editions. Review that guidance with the actual proposed change. Do not assume that a lower-cost edition retains every capability or that previously retained information will remain accessible after relevant licenses are removed.",
            "links": [
              {
                "phrase": "preserving Vault data when switching editions",
                "to": "https://knowledge.workspace.google.com/admin/vault/preserve-vault-data-when-switching-editions"
              }
            ]
          },
          "Apply the same review to employee departures. Before deleting an account, determine who needs business records, who should receive ownership and whether a preservation obligation applies. Confirm what happens to backup coverage and access after the source account is changed. Record the approved sequence so the people responsible for account administration and records handling work from the same plan.",
          "These are change-management decisions, not reasons to retain every account indefinitely. Keeping accounts active without an owner can create other access and cost problems. Choose a documented disposition supported by the current product capabilities and the firm's requirements. Verify it using non-sensitive test records when a new procedure is introduced."
        ]
      },
      {
        "h": "Compare providers using a representative restore",
        "ps": [
          "A useful pilot starts with a realistic request. Suppose a consulting team needs a deleted client folder containing several documents and a spreadsheet. The operator should locate the relevant recovery point, restore to the approved destination and ask the business owner to check the result. That example is hypothetical; its purpose is to define what must be demonstrated.",
          "Check the folder structure, usable content, ownership and intended access. If the service restores content but requires separate permission repair, record that work and its owner. Ask how a restore affects documents edited after the selected recovery point. Decide how the team will reconcile current work before allowing a broad restore over an active workspace.",
          "Also evaluate the request process. Who can authorize a restore containing sensitive client information? Can an ordinary user restore their own covered data, or is an administrator required? Where is the activity recorded? A provider's feature list does not answer whether the firm can carry out this process safely during a busy period."
        ]
      },
      {
        "h": "Examine coverage changes and missed captures",
        "ps": [
          "Ask how the service identifies new users, shared drives and other covered objects. Determine whether enrollment is automatic, whether an administrator approves additions and what an excluded object looks like in reporting. A new shared drive created for a client should trigger a coverage decision when the work begins.",
          "Review unsuccessful captures and unresolved exclusions. A green status for currently enrolled objects may say nothing about an important object that was never enrolled. Compare the protection inventory with the business inventory. Give each exception an owner and a decision date. Do not let a reporting dashboard replace that comparison.",
          "Ask the provider how the firm is notified when access permissions expire or a connection fails. Confirm the support route and the evidence available to establish the last usable recovery point. Coverage reporting should identify what was protected and what needs action, rather than offering a percentage without a clear denominator."
        ]
      },
      {
        "h": "Protect the ability to recover",
        "ps": [
          "Document who administers production Workspace and who administers the backup service. Review whether the same identity controls both and what additional protections apply. Ask how recovery access is retained if the main administrator is unavailable or the production tenant cannot be used. These questions identify dependencies; they do not establish that one architecture eliminates every attack path.",
          "Store the recovery contact list and approved procedure somewhere the response team can reach during the scenario it covers. Include provider escalation, business authorization and any specialist support that must be separately engaged. Test the contact route during a planned exercise, with harmless sample data and agreed boundaries."
        ]
      },
      {
        "h": "Measure evidence rather than reassurance",
        "ps": [
          "For each test, retain the workload, requested item, recovery point, destination, authorization, operator and result. State whether the business owner confirmed usability. Record the elapsed time and any manual repairs. An incomplete restore provides useful evidence about a gap when the gap is assigned and followed up.",
          "Leadership can then distinguish a purchased capability from demonstrated recovery. Report the important covered workloads, the most recent meaningful test and the unresolved exceptions. For a customer or insurer answer, respond to the exact wording and state the scope. A broad assertion that all Google data is backed up is difficult to defend when the inventory includes unsupported workloads or externally owned files."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "google-workspace-security-managed-vs-diy",
    "title": "Managed Google Workspace Security vs DIY: Which Is Right for Your SMB",
    "metaTitle": "Google Workspace Security: Managed vs DIY | Helm",
    "metaDesc": "Review your Workspace edition, administrator access and sharing controls. Confirm supported protection and the administration retained by IT.",
    "date": "2026-10-06",
    "readMin": 9,
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
            "text": "Helm Core includes a defined email, device, supported identity, cloud productivity backup, awareness and digital-risk stack with monthly reporting. Supported Google services and workloads must be confirmed during fit review rather than inferred from the overall product description.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Helm Command adds a risk register, roadmap, evidence upkeep, bounded questionnaire response and leadership cadence. Existing IT retains tenant administration, patching and routine remediation. Command coordinates assigned work; it does not promise unrestricted Workspace hardening or universal recovery.",
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
      },
      {
        "h": "Turn a broad security label into assigned work",
        "ps": [
          "The choice is not simply whether to buy another tool. The firm needs several kinds of work: administration, business approval of access, monitoring of supported threats, investigation, response and evidence upkeep. Some can remain with existing IT while a managed security provider performs a defined subset. Start by assigning those duties before comparing prices.",
          "Tenant administration includes creating accounts, managing groups, changing settings and supporting users. A security investigation may require reviewing an account event and coordinating an authorized containment step. The business owner decides whether an employee or outside collaborator should have access to a client's information. A provider cannot infer that business decision from a technical log alone.",
          "Write a responsibility map for the scenarios that recur. A suspicious sign-in, an accidentally public file, a departing employee and a failed backup each need a named first contact and next action. Ask prospective providers to explain which of these scenarios their service covers, which they coordinate and which remain with IT. A shared map is more useful than a statement that everyone works together."
        ]
      },
      {
        "h": "Examine privileged access first",
        "ps": [
          "List administrative roles and their assigned accounts. Confirm why each person needs the role and whether the account is still in use. Separate ordinary daily work from privileged administration where the approved operating model supports it. Review authentication and recovery for those accounts, including how the firm maintains access if the usual administrator is unavailable.",
          {
            "text": "Google's security checklist provides a starting point for administrator and authentication safeguards. Apply it to the current edition and environment. A checked box in an assessment is weaker evidence than the setting, account population and exception record supporting it.",
            "links": [
              {
                "phrase": "security checklist",
                "to": "https://knowledge.workspace.google.com/admin/security/security-checklist-for-small-businesses-1-100-users?hl=en"
              }
            ]
          },
          "For a provider account, record the permitted purpose and administrative scope. Know who can approve a new privilege or remove an old one. When the provider relationship changes, include its accounts, connected applications and recovery arrangements in the transition plan. Removing the main contact from a mailing list does not revoke technical access."
        ]
      },
      {
        "h": "Review sharing through actual client workflows",
        "ps": [
          "Begin with one representative engagement. Identify the folder or shared drive, its owner, the internal team and the external recipients. Check whether access comes through individual invitations, groups, links or inherited permissions. Ask the business owner whether those recipients still need access and whether the current arrangement matches the client agreement.",
          "Some externally shared information is necessary for the service the firm provides. The goal is a controlled decision about that sharing. If the firm requires a restricted exchange, give staff an approved way to complete it. A rule that interrupts client work without a usable alternative often creates an exception outside the documented process.",
          "Set an owner for reviewing guest access when the engagement closes or changes. Test what happens when an external person changes roles or an internal employee leaves. Confirm which permissions the administrator can revoke and which information has already been downloaded or otherwise copied. Access removal limits future access; it does not retrieve every copy previously obtained."
        ]
      },
      {
        "h": "Inventory connected applications",
        "ps": [
          "Workspace information may be accessible through applications that users or administrators have connected. Ask IT to inventory the permitted integrations and the data they can access. Identify the business owner, approved purpose and current need for each. An application name that sounds familiar is not enough to justify broad access.",
          "Review how an integration is approved, changed and removed. Include the handling of shared service identities or tokens, if present in the particular setup. Determine whether removing an employee also ends the integration's access or whether a separate action is required. Product behavior varies, so test the actual arrangement rather than relying on a generic departure checklist.",
          "An AI tool connected to mail or documents needs the same business review, with additional attention to the proposed use and data handling. Give employees a route to request a useful tool and supply an approved alternative when possible. Prohibiting an application without addressing the underlying task leaves the reason for its use unresolved."
        ]
      },
      {
        "h": "Compare DIY and managed operation fairly",
        "ps": [
          "DIY should include the time spent carrying out the work. Managed service comparisons should include the duties that stay with IT. Avoid comparing a provider fee with a zero-cost internal model that assumes an employee investigates events, maintains settings and prepares evidence in spare time. Record the assumptions without inventing a market rate or guaranteed savings.",
          "A firm with capable internal IT may need specialist detection and escalation rather than replacement administration. Another may need a clearer program owner because work crosses several vendors. The appropriate arrangement depends on the missing duty. Buying overlapping tools will not fix an unassigned approval or an unclear response authority."
        ],
        "table": {
          "caption": "Compare DIY and managed operation fairly",
          "headers": [
            "Operating area",
            "Evidence to request from existing IT",
            "Evidence to request from a proposed provider"
          ],
          "rows": [
            [
              "Administration",
              "Account, privilege and change procedures",
              "The tenant changes included and the access required"
            ],
            [
              "Threat investigation",
              "Supported events, available hours and escalation path",
              "Covered signals, investigation scope and authorized actions"
            ],
            [
              "Sharing review",
              "Owner approvals and unresolved exceptions",
              "Whether the service evaluates permissions or only provides advice"
            ],
            [
              "Recovery",
              "Covered workloads, operator and test result",
              "Included backup and restoration duties, with exclusions"
            ],
            [
              "Evidence",
              "Current records and named maintainers",
              "Reporting, evidence upkeep and any questionnaire limits"
            ]
          ]
        }
      },
      {
        "h": "Test the handoff before an incident",
        "ps": [
          "Use a harmless scenario: an employee reports an unexpected account prompt, or a client folder appears to have broader sharing than intended. Ask the relevant teams to explain the first action, required evidence and authorized change. Record the handoff from the reporting employee to IT, security and the business owner.",
          "The exercise should reveal where an approval is needed and who can provide it. A provider may identify a suspicious event yet lack permission to suspend an account. IT may be able to change a permission but need the business owner to decide whether the collaborator belongs in the engagement. Resolve those boundaries in advance.",
          "For continuous monitoring claims, ask what data is monitored, what hours the investigating service operates and what happens when no customer contact answers. Do not interpret a service name as proof that every Workspace event is collected or that every response is automatic. Coverage and authority belong in the service description."
        ]
      },
      {
        "h": "Give leadership a short, useful report",
        "ps": [
          "Summarize privileged access, significant sharing exceptions, unresolved application approvals and the status of important recovery tests. State what changed, what remains open and who owns the next action. Include dates and supporting records where available. A long dashboard without an assigned decision can obscure the work that matters.",
          "Review the operating map when licensing, providers or client requirements change. A control that was unavailable in one edition may become available later; a new feature may also require a deliberate configuration decision. Keep the evaluation current and specific. The purpose of a managed arrangement is to complete agreed work with clear accountability, not to substitute a security label for that work."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "hipaa-email-rules-small-practices",
    "metaTitle": "HIPAA Email Rules: Addressable Safeguards Explained | Helm",
    "ctaMode": "book",
    "title": "HIPAA Email Rules for Small Practices: What Addressable Means in Operation",
    "metaDesc": "Review HIPAA email safeguards, addressable decisions, provider roles and patient access requests. Test the approved workflow and plan for misdirected messages.",
    "date": "2026-07-05",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Professional Services",
    "laneTo": "/professional-services",
    "intro": "A small medical practice needs an approved way to send electronic protected health information, or ePHI. Choosing an email platform is only part of the decision. The practice also needs to know who may send information, which recipient and purpose are appropriate, how the exchange is protected and what happens when a message is misdirected.",
    "sections": [
      {
        "h": "Read addressable as a documented assessment",
        "ps": [
          {
            "text": "HHS says an addressable encryption specification must be implemented when the risk assessment determines it is reasonable and appropriate. If it is not, the entity documents the determination and uses an equivalent alternative when reasonable and appropriate. HHS also explains the situation in which the standard can otherwise be met and the rationale for not implementing either is documented. See the encryption FAQ.",
            "links": [
              {
                "phrase": "encryption FAQ",
                "to": "https://www.hhs.gov/hipaa/for-professionals/faq/is-the-use-of-encryption-mandatory-in-the-security-rule/index.html"
              }
            ]
          },
          "That explanation is more precise than saying encryption is optional or that every alternative automatically satisfies the rule. The practice needs a decision supported by its circumstances. A staff member's preference for a familiar app is not a documented assessment of the workflow.",
          "Have the responsible security owner and adviser record the chosen method and reasoning. IT confirms its technical behavior. The record should explain the population, information and exchange being assessed. Avoid a general statement that all practice email is compliant without identifying the configuration and use it describes."
        ]
      },
      {
        "h": "Map the exchange before selecting protection",
        "ps": [
          "List the common exchanges: messages to patients, referrals, billing, internal coordination and transfers to service providers. Identify the sender, recipient, information, purpose and authoritative record for each. A patient access request and an internal staff message can need different procedures.",
          "Ask where attachments originate and where copies remain. A scan can be held on a workstation before being attached; the sent message can remain in a mailbox; the recipient may save a separate copy. The transmission control does not settle every storage and access decision along that path.",
          "Reduce unnecessary information through the approved business process. If a scheduling message does not need a detailed clinical attachment, do not add one because the workflow makes it convenient. Have the responsible adviser determine what may be shared for the actual purpose, rather than expecting staff to improvise a legal judgment."
        ]
      },
      {
        "h": "Review the provider relationship",
        "ps": [
          {
            "text": "HHS's cloud-computing guidance addresses business-associate arrangements for cloud providers handling ePHI. A provider maintaining the data can be a business associate even if it lacks the decryption key. A business-associate agreement, or BAA, does not by itself establish the adequacy of every setting and use.",
            "links": [
              {
                "phrase": "cloud-computing guidance",
                "to": "https://www.hhs.gov/hipaa/for-professionals/special-topics/health-information-technology/cloud-computing/index.html"
              }
            ]
          },
          "Keep the selected service, applicable agreement and responsible contact in the vendor record. Confirm the services covered by the agreement rather than assuming every consumer or add-on product from the same company is included. Ask IT to identify integrations that handle the information outside the main mail platform.",
          {
            "text": "HHS describes a limited conduit exception for transmission without storage beyond temporary storage incidental to transmission. Do not reduce that distinction to a claim that every company transmitting any message always needs the same agreement. Have the appropriate adviser assess the provider's actual role and service.",
            "links": [
              {
                "phrase": "limited conduit exception",
                "to": "https://www.hhs.gov/hipaa/for-professionals/faq/can-a-csp-be-considered-to-be-a-conduit-like-the-postal-service-and-therefore-not-a-business-associate-that-must-comply-with-the-hipaa-rules/index.html"
              }
            ]
          }
        ]
      },
      {
        "h": "Distinguish protection layers",
        "ps": [
          "Inbound phishing protection can reduce some malicious mail while doing a different job from protected outbound delivery. MFA helps control account access while doing a different job from confirming the intended recipient. Treat each as part of the workflow rather than assuming one product answers every question.",
          {
            "text": "For platform-specific choices, use the Outlook encryption comparison with IT. Ask the administrator to demonstrate the actual method available in the practice's subscription. A feature name on a product page is not evidence that staff are using the configured workflow.",
            "links": [
              {
                "phrase": "Outlook encryption comparison",
                "to": "/resources/outlook-email-encryption-options/"
              }
            ]
          }
        ],
        "table": {
          "caption": "Distinguish protection layers",
          "headers": [
            "Layer",
            "Question for the practice"
          ],
          "rows": [
            [
              "Mailbox access",
              "Who can sign in, which authentication is required and which exceptions exist?"
            ],
            [
              "Message transport",
              "What protects the connection for the intended exchange?"
            ],
            [
              "Message or portal protection",
              "How does the authorized external recipient obtain access?"
            ],
            [
              "Recipient verification",
              "How is the address confirmed before sensitive information is sent?"
            ],
            [
              "Records handling",
              "Where do sent messages and attachments remain under the approved process?"
            ],
            [
              "Incident handling",
              "Who assesses a misdirected message or suspected account compromise?"
            ]
          ]
        }
      },
      {
        "h": "Test patient and external access with harmless data",
        "ps": [
          "Before using a new exchange for patient information, pilot it with non-sensitive samples and approved test recipients. Include common mail clients and mobile access where relevant. Test opening, replying, attachment handling and failed access. Record what staff and recipients need to do.",
          "Give the front desk a support route that does not require a patient to disclose a password or send screenshots containing health information. If access fails, provide an approved alternative. A difficult exchange should lead to a support decision rather than an unrecorded switch to a personal account.",
          "Check protection claims that matter to the selected workflow. If the practice relies on restrictions or access withdrawal, test their supported behavior and limits. Withdrawing supported access does not retrieve information already read or copied. The business process should account for authorized recipients and appropriate use."
        ]
      },
      {
        "h": "Handle patient requests through the right procedure",
        "ps": [
          {
            "text": "HHS explains that individuals may request copies of their own PHI by unencrypted email under the right-of-access framework. The practice provides a brief risk warning and confirms the individual still wants that method. See the individual access FAQ, including its notice about the related court order.",
            "links": [
              {
                "phrase": "individual access FAQ",
                "to": "https://www.hhs.gov/hipaa/for-professionals/faq/do-individuals-have-the-right-under-hipaa-to-have/index.html"
              }
            ]
          },
          "Have the privacy owner define how staff recognize and record that request. Confirm the recipient and follow the approved warning and confirmation procedure. Do not treat the patient's preference as general permission for all unrelated internal or provider exchanges. The context and purpose remain important.",
          "Keep staff instructions short and specific. They should know who reviews an unusual request, how the patient's decision is recorded and what approved route is used. Employees should not have to interpret an access-rights dispute at the front desk without support."
        ]
      },
      {
        "h": "Prevent address mistakes through a usable process",
        "ps": [
          {
            "text": "HHS's patient email guidance discusses precautions such as checking an address and confirming it before sending information. Build those precautions into the actual workflow. A rule written in a policy but omitted from staff instructions may not affect daily behavior.",
            "links": [
              {
                "phrase": "patient email guidance",
                "to": "https://www.hhs.gov/hipaa/for-professionals/faq/does-hipaa-permit-health-care-providers-to-use-email-to-discuss-health-issues-with-patients/index.html"
              }
            ]
          },
          "For a new recipient, use the approved trusted record and confirmation process. Be careful with autocomplete, similar names and forwarded threads. Check the attachment as well as the address: the correct recipient with another patient's file is still an error needing assessment.",
          "Use harmless training examples that match the practice's work. Test whether employees pause and obtain help when a request conflicts with the procedure. The aim is a repeatable action, not a promise that training eliminates every mistake."
        ]
      },
      {
        "h": "Respond to a misdirected message promptly",
        "ps": [
          "Tell staff whom to contact and what information to preserve. Record the intended recipient, actual recipient, message time, information involved and any supported containment action. Use an approved reporting route instead of forwarding the sensitive content to a broad group for opinions.",
          "The responsible team assesses the facts and any notification obligations. Avoid declaring that an accidental message is automatically a reportable breach, or automatically harmless because access was withdrawn. The determination needs the applicable rules and evidence, with appropriate professional advice.",
          "For a suspected compromised mailbox, involve authorized IT and security teams. They may need to examine account access and relevant settings while the practice manages communications through trusted channels. Containment, evidence and patient-facing decisions require coordinated owners."
        ]
      },
      {
        "h": "Keep evidence that matches the chosen workflow",
        "ps": [
          "Retain the approved procedure, configuration reference, pilot result and staff instructions in the practice's controlled records. Identify the reviewer and date. If the procedure permits several exchanges, state the purpose and population for each rather than combining them under one broad claim.",
          "Review exceptions separately. A patient-request record, an unavailable recipient and a technical failure are different situations with different decisions. Give each a responsible owner and a supported disposition. An exception should not silently become the default method for later messages.",
          "For a customer or partner question, answer with the relevant workflow and evidence. Using a business email platform is a starting fact, not a complete explanation of recipient verification, protection and incident handling. The useful answer shows what the practice approved and what was actually tested."
        ]
      },
      {
        "h": "Maintain the decision as the practice changes",
        "ps": [
          "Revisit the workflow after changing mail platforms, protection policies, providers, licensing or common recipient groups. Keep the prior decision and record the change. A test performed before a material configuration change may not describe the current exchange.",
          {
            "text": "This article follows the HHS guidance checked on October 7, 2026. HHS's Security Rule proposal page describes proposed changes; proposed provisions should not be presented as established requirements merely because they appear in a draft. Have the responsible adviser confirm the applicable rule and effective dates during review.",
            "links": [
              {
                "phrase": "Security Rule proposal page",
                "to": "https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/index.html"
              }
            ]
          },
          {
            "text": "Helm Core provides defined email-threat protection for compatible environments. It does not include a secure-message portal, encrypted outbound delivery or secure file transfer. Command supports program coordination and evidence within written scope; a HIPAA assessment or secure-delivery implementation requires a separate scope decision. Existing IT administers the tenant, while the practice retains its privacy and compliance decisions.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              },
              {
                "phrase": "Command",
                "to": "/helm-command/"
              }
            ]
          }
        ]
      }
    ],
    "takeaway": "Map the exchange, document the safeguard decision and test the approved recipient experience. Keep provider arrangements, patient-request procedures and misdirected-message handling aligned with the practice's actual workflow.",
    "lead": [
      {
        "text": "HHS explains that the Security Rule does not expressly prohibit email, while access, integrity and transmission safeguards still apply. Use its email guidance and the practice's risk analysis to assess the workflow. This article supplies an operating checklist; the responsible privacy, security and legal advisers determine the practice's specific obligations.",
        "links": [
          {
            "phrase": "email guidance",
            "to": "https://www.hhs.gov/hipaa/for-professionals/faq/does-the-security-rule-allow-for-sending-electronic-phi-in-an-email/index.html"
          }
        ]
      }
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "hipaa-risk-analysis-medical-practices",
    "title": "HIPAA Security Risk Analysis for Small Medical Practices",
    "metaDesc": "How a small medical or dental practice can scope and document a HIPAA Security Rule risk analysis across email, devices, EHR access, vendors, and daily workflows.",
    "date": "2026-08-18",
    "readMin": 8,
    "lane": "Medical Practices",
    "laneTo": "/medical-practices",
    "intro": "A practice that reviews only the EHR can miss patient information in email, billing, imaging, backups, phones, and vendor accounts. Those blind spots matter when a device is lost or an account is compromised because the practice may not know what information was accessible. A HIPAA risk analysis should follow electronic patient information through the systems and workflows the practice actually uses.",
    "ctaMode": "book",
    "sections": [
      {
        "h": "Start with scope, not a checklist score",
        "ps": [
          {
            "text": "HHS risk-analysis guidance says the analysis covers all electronic protected health information the organization creates, receives, maintains, or transmits. The EHR is only one system. Email, billing, imaging, scheduling, backups, file shares, cloud services, copiers, workstations, laptops, tablets, phones, and vendor access can all enter scope.",
            "links": [
              {
                "phrase": "HHS risk-analysis guidance",
                "to": "https://www.hhs.gov/hipaa/for-professionals/security/guidance/guidance-risk-analysis/index.html"
              }
            ]
          },
          {
            "text": "HealthIT.gov guidance warns providers not to limit the analysis to the EHR. Include devices and workflows that can access the information, with actual use confirmed by the practice. A system does not need to store a permanent copy of patient information to create access risk.",
            "links": [
              {
                "phrase": "HealthIT.gov guidance",
                "to": "https://healthit.gov/privacy-security/health-it-privacy-and-security-resources-providers/"
              }
            ]
          }
        ]
      },
      {
        "h": "Use the small-practice tools for their intended purpose",
        "ps": [
          {
            "text": "The Security Risk Assessment Tool can help organize the review. Its user guide explains that using the tool is neither required nor a guarantee of compliance. Check the current release and use it for its stated purpose.",
            "links": [
              {
                "phrase": "user guide",
                "to": "https://www.healthit.gov/sites/default/files/page/2024-10/SRA_Tool_User_Guide_Version_3_5_Final.pdf"
              }
            ]
          },
          "A tool can organize the work, but the evidence still has to describe the practice. Record each system, the information involved, who can access it, where it is used, the threats and vulnerabilities, existing safeguards, likelihood, impact, and the decision made about remediation."
        ]
      },
      {
        "h": "Treat email and work devices as different control layers",
        "ps": [
          {
            "text": "Helm Core can protect compatible business email from phishing and impersonation while providing employee reporting, triage, simulations, and awareness learning. It does not include a secure-message portal, encrypted outbound delivery, or secure file transfer, so any workflow that sends patient information may require a separately scoped secure delivery solution.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core"
              }
            ]
          },
          {
            "text": "Helm Core provides 24/7 monitoring, investigation, and containment for covered Windows and Mac workstations. It does not cover every technology in a practice. Phones, tablets, servers, medical devices, networks and vendor platforms need separate coverage decisions. Supported identity capabilities must be confirmed during fit review; they should not be assumed to cover every practice identity system.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core"
              }
            ]
          }
        ]
      },
      {
        "h": "Turn findings into owned decisions",
        "ps": [
          "A risk analysis is an input to risk management. For each finding, name the corrective action, owner, expected evidence, target date, and any interim safeguard. If the practice decides that a particular measure is not reasonable and appropriate, document the rationale and any equivalent measure rather than treating the requirement as optional.",
          "Prioritize issues that combine sensitive information, broad access, weak detection, and meaningful operational impact. A front-desk workstation with EHR, email, and billing access may deserve attention before a rarely used system with tightly limited access, even if both appear on the inventory."
        ]
      },
      {
        "h": "Revisit the analysis when the practice changes",
        "ps": [
          "HHS describes risk analysis as an ongoing process. Review it when the practice changes an EHR or billing vendor, opens a location, adopts telehealth, adds remote work, changes email systems, brings in a new device class, or experiences an incident. Keep the previous analysis and document what changed.",
          {
            "text": "Helm Command provides a fixed-fee HIPAA Security Rule gap assessment for an agreed scope, with documented findings and a prioritized roadmap. It supports readiness and remediation planning, but Helm does not certify that a practice is HIPAA compliant.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command"
              }
            ]
          }
        ]
      },
      {
        "h": "Follow a patient-information workflow",
        "ps": [
          "Choose a representative workflow and trace the information through it. A referral can pass through a fax service, a mailbox, a downloaded file, the EHR and a billing process. Identify the people and providers at each point. Do not stop at the system the practice considers most important if other steps handle the same information.",
          "Ask staff to describe what they actually do when the approved route is unavailable. A workaround may create a temporary copy or send information to a different service. Use that account to identify a gap and an approved alternative, rather than writing a procedure that assumes the workaround never occurs.",
          "Include access without permanent local storage. A device used to view patient information can still be lost, shared or accessed by an unauthorized person. Record the actual access arrangement, authentication and relevant session behavior. Have IT verify the technical facts supporting the review."
        ]
      },
      {
        "h": "Describe threats and vulnerabilities separately",
        "ps": [
          "A threat describes a potential cause of harm; a vulnerability describes a weakness that could make harm possible. For example, theft of a laptop is a threat scenario, while an inadequate access or data-protection arrangement may be a relevant weakness. Keep those ideas separate enough to identify an appropriate safeguard.",
          "Evaluate confidentiality, integrity and availability. A practice can lose access to a critical application without confirmed disclosure of patient information. Incorrect or unavailable records can affect the work needed to provide care. The analysis should consider those consequences rather than reduce every scenario to a stolen-data narrative.",
          "State the evidence and uncertainty. If the team has not verified a device setting, record that as an open fact-finding task. Do not give the control credit merely because the platform can support it. Likewise, do not assume a weakness exists solely because one reviewer has not yet seen the evidence."
        ]
      },
      {
        "h": "Use a consistent decision record",
        "ps": [
          "This is an illustrative format rather than a required scoring method. Use an approach appropriate to the practice and consistent enough to compare findings. A numerical rating without reasoning can hide the important differences between two scenarios.",
          "For a hypothetical practice, an unavailable imaging workflow might create a different operational consequence from a temporarily inaccessible administrative spreadsheet. Establish the actual dependency with the business owner. Avoid copying another organization's ratings without checking whether its workflow and safeguards resemble yours."
        ],
        "table": {
          "caption": "Use a consistent decision record",
          "headers": [
            "Record field",
            "Purpose"
          ],
          "rows": [
            [
              "System or workflow",
              "Identifies where the information and access occur"
            ],
            [
              "Information and owner",
              "Establishes the business context and responsible person"
            ],
            [
              "Threat and weakness",
              "Explains the scenario being assessed"
            ],
            [
              "Current safeguard",
              "Describes the implemented control and supporting evidence"
            ],
            [
              "Likelihood and impact reasoning",
              "Makes the assessment understandable to another reviewer"
            ],
            [
              "Unresolved issue",
              "Distinguishes a gap from a completed safeguard"
            ],
            [
              "Action and owner",
              "Gives the finding a route to an accountable decision"
            ]
          ]
        }
      },
      {
        "h": "Evaluate vendors without outsourcing the decision",
        "ps": [
          "The EHR provider can supply product and service information, but the practice needs its own analysis of the environment and use. Review other providers with relevant information or access, including billing, cloud storage, remote support and messaging. Identify the service owner and the applicable agreement or assurance evidence.",
          "Ask what the vendor operates and what configuration remains with the practice or IT. A shared responsibility should be described in concrete tasks. Who creates users, reviews privileges, removes departed staff and handles an urgent incident? A general statement that the provider is secure does not allocate those duties.",
          "When the service changes, review the information path and access arrangements before the change is complete. Keep the incident contact and data-handling responsibilities current. Preserve restricted agreements and evidence in their approved systems, with controlled references in the analysis."
        ]
      },
      {
        "h": "Move findings into risk management",
        "ps": [
          "The analysis identifies and evaluates concerns; risk management assigns and follows decisions about them. For a technical gap, name the authorized IT owner and expected completion evidence. For a workflow gap, name the business decision-maker. Some findings need both.",
          "Record temporary safeguards and review dates when work cannot finish immediately. Have the appropriate adviser assess any related obligation. An internal acceptance of a risk does not automatically satisfy an external requirement or make an unsupported statement accurate.",
          "Verify the action before closing the finding. A backup task needs evidence relevant to usable recovery, while an access task needs evidence of the approved permissions or enforcement. A purchase order or completed ticket may support the record but does not always establish the intended result."
        ]
      },
      {
        "h": "Keep clinical and business continuity connected",
        "ps": [
          "Ask what staff do when the EHR, messaging or another important service is unavailable. Identify approved downtime procedures and the people authorized to invoke them. Keep the information and contacts accessible during the scenario they address. A plan available only through the unavailable system creates a dependency worth recording.",
          "Use a tabletop with harmless records to examine the handoff. Who reports the issue, who assesses it, who coordinates with the provider and who approves the operational workaround? Involve the people responsible for patient-facing work so the exercise reflects actual use.",
          "Record missing authority, unclear contacts and unavailable information. Assign corrections and check the affected step afterward. A tabletop does not certify compliance; it supplies evidence about how the selected procedure worked under the tested conditions."
        ]
      },
      {
        "h": "Maintain a dated, reviewable analysis",
        "ps": [
          "Retain the scope, participants, evidence references, findings and decisions. Separate current observations from planned changes. Keep prior versions according to the practice's records process so changes can be understood. Access should reflect the sensitive operational information involved.",
          {
            "text": "HHS describes analysis and management as ongoing activities and does not prescribe one universal frequency for every environment. Its risk-analysis and management paper discusses review as circumstances change. Choose a documented cadence and change triggers suited to the practice, with the responsible adviser's input.",
            "links": [
              {
                "phrase": "risk-analysis and management paper",
                "to": "https://www.hhs.gov/sites/default/files/ocr/privacy/hipaa/administrative/securityrule/riskassessment.pdf"
              }
            ]
          },
          "Track new services, locations, device classes and remote workflows. Review after incidents and relevant test failures. A new control may reduce one exposure while creating another dependency. Update the analysis to reflect the implemented state, and make the next business decision clear to leadership."
        ]
      }
    ],
    "takeaway": "Map every place electronic patient information is stored or accessible, record the current safeguards and unresolved risks, and give each corrective action an owner and date. Revisit the analysis when the practice changes systems, vendors, locations, devices, or workflows.",
    "lead": [],
    "updated": "2026-10-07",
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "iam-security-core-vs-command",
    "title": "IAM Cyber Security for SMBs: How Helm Core Compares to Helm Command",
    "metaTitle": "IAM Security: Helm Core vs Command for SMBs | Helm",
    "metaDesc": "Identity protection, access administration and program ownership need distinct owners. Compare supported coverage and evidence before choosing a tier.",
    "date": "2026-10-06",
    "readMin": 8,
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
                "phrase": "Command",
                "to": "/helm-command/"
              },
              {
                "phrase": "Core",
                "to": "/helm-core/"
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
      },
      {
        "h": "Build an access record that managers can review",
        "ps": [
          "Start with the business application, not a generic list of names. Record its purpose, the information it holds, the owner who can approve access and the administrator who can change it. Include shared workspaces, client portals and specialist applications alongside the primary email platform. Some systems may not use your central identity provider.",
          "For each role, describe the work that requires access. A billing employee may need invoice records without needing every client document. A project lead may need a specific engagement workspace without permanent access to all matters. The business manager makes that distinction; IT can explain how the application represents it through groups and permissions.",
          "Ask the reviewer to resolve exceptions rather than sign a long export without guidance. Highlight privileged roles, former staff, accounts without a known owner and access that differs from the approved role. Keep the original evidence date and record the review decision separately. An access review is not complete merely because someone opened the file.",
          "Use account identifiers and system records where necessary, but limit who receives the detailed export. The working record may expose sensitive organizational information. Leadership can review unresolved decisions without receiving every account and permission detail in an ordinary meeting attachment."
        ]
      },
      {
        "h": "Follow a role change through all affected systems",
        "ps": [
          "An employee moving teams needs an access decision even when their account stays active. HR or the manager should identify the effective date and new responsibilities. The application owners determine which existing permissions should remain, which should end and which new access should begin.",
          "IT then implements the approved changes in the relevant systems. A central group update may reach some applications automatically, while others need a separate action. Check the actual integration rather than assuming that single sign-on means all permissions follow the employee's role. Record systems that could not be changed on time and the temporary control, if any.",
          "Verify the result using the application's own view of access where possible. A completed ticket supports the workflow, but it should point to what changed. If a manager approves a temporary overlap during a handover, record its purpose and expiry. Someone must revisit the exception when the handover ends.",
          "For departures, include sessions, credentials, devices and applications outside the central directory. Follow the dedicated offboarding procedure with IT because access removal has platform-specific limits. Do not treat a disabled primary account as a universal claim about every independent application or copied document."
        ]
      },
      {
        "h": "Treat administrator and application access separately",
        "ps": [
          "An administrator can make changes that ordinary users cannot. Identify which tasks require that power and which accounts possess it. Ask IT how routine work is separated from privileged work, how recovery is handled and what records support review of important changes. Confirm platform support before buying a privileged-access product.",
          "Keep emergency access deliberate. Define when it can be used, who authorizes it and how its use is reviewed. Store any recovery material through an approved process. A recovery account that is never checked can fail when needed; an exception left open without review can undermine the intended access policy.",
          "Connected applications create another form of access. An integration may read files, send mail or act through permissions granted by a user or administrator. Review who authorized it, why the business needs it and which data it can reach. Removing a user's ordinary group membership may not resolve every application permission.",
          "For non-human identities, name a business and technical owner. Explain how credentials or permissions are reviewed and what happens if the integration is replaced. Confirm whether these identities are included in the purchased protection service. Coverage of employee sign-ins does not establish coverage of every application identity."
        ]
      },
      {
        "h": "Prepare for a protective action that interrupts work",
        "ps": [
          "Identity protection can require a prompt decision about suspicious access. Before an incident, agree on who can restrict an account, how the employee will be contacted and who restores access. The communication route should still work if email or the main account is unavailable.",
          "Discuss the business consequence of a restriction without using it as a reason to leave every account active. A partner may be preparing for a hearing or a controller may be completing payroll. The response owner needs a way to reach leadership and provide an approved alternative while the event is assessed.",
          "Separate containment from recovery. Restricting an account may reduce ongoing access, but it does not determine what happened, repair every affected application or complete any required notification. Existing IT handles assigned administrative work; specialist investigation and legal decisions need explicit owners and scope.",
          "Use a fictional account event in the vendor evaluation. Ask the provider to explain the evidence available, permitted action, escalation record and handoff. A clear answer is more useful than a promise to stop all account takeover. The demonstration should make unsupported platforms and authority limits visible."
        ]
      },
      {
        "h": "Use the service decision to assign remaining work",
        "ps": [
          "Core may suit a firm that already has managers approving access, IT maintaining account lifecycles and a business owner tracking exceptions. Confirm the supported protection population and monthly reporting before onboarding. Keep the work outside that stack in the firm's own operating plan.",
          "Command may suit a firm whose access problems recur because priorities, evidence and follow-up have no consistent owner. Program coordination can maintain the decision record and bring unresolved issues to leadership. It still depends on managers making access decisions and IT implementing the changes it owns.",
          "At the fit meeting, bring a redacted example of one access change, one exception and one question you cannot currently answer. Use them to test the scope. Finish with a responsibility map covering approvals, administration, protective actions, evidence and recovery. That map should remain useful whichever provider or service tier the firm chooses."
        ]
      },
      {
        "h": "Review access exceptions before they become defaults",
        "ps": [
          "Give a temporary permission an owner, purpose and review date. Ask the manager to confirm whether the original need still exists. If it does, approve the continued access explicitly; if it does not, assign removal to IT and verify the relevant system.",
          "Include inherited permissions in the review. An application may grant access through a group or shared workspace rather than a direct user setting. The reviewer needs the effective access picture before concluding that a change removed the permission."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "incident-response-plan-small-business",
    "metaTitle": "Incident Response Plan for Small and Medium Businesses | Helm",
    "title": "Incident Response Plan for Small and Medium Businesses: The First Decisions",
    "metaDesc": "Build a usable incident response plan with trusted contacts, containment authority, evidence handling, bank and insurer reporting, and recovery responsibilities.",
    "date": "2026-06-06",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "The first person to notice a suspicious transfer or encrypted files needs a clear way to report it. They should not have to decide alone whether to wipe a device, notify every customer or negotiate with an attacker. A useful incident response plan assigns those decisions before the business is under pressure.",
    "sections": [
      {
        "h": "Prepare the contact list before you need it",
        "ps": [
          "Name the internal incident coordinator and their backup. Record the existing IT provider, security response contact, insurer or broker reporting route, appropriate legal adviser and the bank’s fraud contact. Include service hours and the escalation route when the first contact does not answer.",
          "Store an approved copy where the team can reach it without relying entirely on company email or the affected device. Verify the phone numbers through established sources. A contact list full of names without a way to reach them outside the normal system will fail precisely when the system is unavailable.",
          {
            "text": "For insured businesses, review the actual policy and response arrangements with the broker before an incident. Identify notice requirements and any approval needed for vendors or expenses. The FTC’s cyber insurance guidance highlights response support and breach hotlines as matters to discuss when evaluating coverage. Your policy’s terms govern your situation.",
            "links": [
              {
                "phrase": "FTC’s cyber insurance guidance",
                "to": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
              }
            ]
          }
        ]
      },
      {
        "h": "Give employees a reporting instruction they can follow",
        "ps": [
          "Tell staff how to report a suspected incident and what basic facts to provide: the time, affected account or device, what they observed and whether money or sensitive information may be involved. Use a reporting route that still works if email is suspected to be compromised.",
          "Avoid asking ordinary users to investigate unfamiliar files, run cleanup tools or forward sensitive evidence to a broad group. Their task is to raise the concern and follow the approved opening instructions. The response team decides which additional information to collect.",
          "Do not require employees to prove that an incident has occurred before reporting. Uncertainty is expected at the beginning. The coordinator can triage a suspicious event while preserving the distinction between what is known, what is suspected and what remains unconfirmed.",
          "Record the initial report and create a timeline. A simple chronology helps responders reconcile actions later, especially when several people are making calls or changing access. Use an approved incident record with appropriate access restrictions."
        ]
      },
      {
        "h": "Respond according to the immediate harm",
        "ps": [
          {
            "text": "A fraudulent transfer needs a rapid banking response. Contact the financial institution immediately and ask for its fraud and recovery process. The FBI also directs victims to report business email compromise to IC3. Recovery is uncertain, so do not wait for a complete technical investigation before contacting the bank. FBI business email compromise guidance.",
            "links": [
              {
                "phrase": "FBI business email compromise guidance",
                "to": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
              }
            ]
          },
          {
            "text": "Suspected ransomware needs containment coordinated with the authorized technical responder. CISA advises isolating affected systems and notes that powering down may be necessary if they cannot be disconnected, while also affecting volatile evidence. The older blanket instruction never to power off is too absolute. Use the CISA StopRansomware guide and your responder’s instructions for the actual situation.",
            "links": [
              {
                "phrase": "CISA StopRansomware guide",
                "to": "https://www.cisa.gov/stopransomware/ransomware-guide"
              }
            ]
          },
          "An account compromise may require access revocation, investigation of rules and permissions, and review of affected messages or files. The authorized administrator should use the platform-specific procedure. Changing a password does not by itself establish that every application session or other access grant is gone.",
          "These workstreams can proceed in parallel. Notify the insurer through the required route while urgent containment or bank reporting is underway. Avoid delaying an immediate harm-reduction action solely because the plan lists another contact first."
        ]
      },
      {
        "h": "Preserve evidence without improvising forensics",
        "ps": [
          "Keep the original suspicious message, transaction information and the reported timeline. Record technical actions taken, by whom and at what time. The responder should direct collection of logs, device evidence and other material appropriate to the incident.",
          "Do not wipe, reimage or restore an affected system casually. Those changes can remove information needed to understand the incident. Equally, do not let an instruction to preserve evidence become a reason to leave active harm uncontained. The response team must balance containment, evidence and business safety.",
          "Keep evidence in an approved location with controlled access. Avoid uploading live incident details, customer records or credentials to an unapproved collaboration tool. If the usual system is compromised, use the alternate arrangement established in the plan.",
          "Ask the responder what evidence the organization should retain and who is authorized to receive it. Counsel can advise on legal considerations and reporting duties. Technical staff should not make unsupported promises about privilege, confidentiality or notification outcomes."
        ]
      },
      {
        "h": "Assign decision authority",
        "ps": [
          "Identify who can authorize system isolation, engage a vendor, approve response expenditure and accept business downtime. Name backups for those people. A responder who knows what needs to happen still needs an authorized route to obtain the decision.",
          "Separate technical findings from business decisions. The response team may establish which systems are affected and which recovery options are available. Leadership decides priorities with the relevant technical, legal and insurance advice. Keep the rationale in the incident record.",
          "Requests involving ransom, negotiation or other payments need specialist review and appropriate authority. An employee should not respond independently to an attacker’s demand. The plan should direct those requests to the designated leadership and advisers without promising that any payment or recovery route is available or acceptable.",
          "Make the approval process usable outside ordinary hours. Record how the responder reaches the backup decision-maker and which bounded actions are already authorized. Waiting for a person whose contact details exist only inside an inaccessible mailbox is an avoidable planning gap."
        ]
      },
      {
        "h": "Keep communications factual and controlled",
        "ps": [
          "Use the alternate communication route if the normal channel may be compromised. Assume that an attacker with access to a mailbox could read messages sent through it until the responders establish otherwise. Confirm participants and access before discussing sensitive details.",
          "Assign one person to coordinate staff updates. Explain what employees should do, which systems are unavailable and where to report new observations. Avoid speculative statements about the cause, scope or safety of information before the investigation supports them.",
          "Customer, regulator and contractual notices require a separate review of applicable duties and known facts. Do not issue a blanket statement that no data was accessed merely because encryption was the first visible symptom. The investigation may need to evaluate access, copying and other activity.",
          "Keep a record of communications and approvals. An incident response plan should help the organization speak accurately as its understanding changes, not force an early conclusion that later evidence contradicts."
        ]
      },
      {
        "h": "Recover a business process, not just a file",
        "ps": [
          "Define the essential processes and their dependencies before an incident. Restoring a document is not enough if staff cannot sign in, the application is unavailable or the restored environment still contains the entry point used by the attacker.",
          "Agree the sequence with the responders and system owners. Validate restored information, access and application behavior before returning a process to normal use. Preserve the evidence and work through the required technical checks rather than restoring every backup into the affected environment immediately.",
          {
            "text": "NIST’s current incident response publication, SP 800-61 Revision 3, places preparation, response and recovery within broader cybersecurity risk management. For a small business, the practical implication is to connect the incident plan to account administration, backup testing, vendor responsibilities and leadership decisions.",
            "links": [
              {
                "phrase": "incident response publication, SP 800-61 Revision 3",
                "to": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
              }
            ]
          },
          "Record workarounds and the risks they introduce. A temporary manual payment process or alternate file-sharing method should have an owner and limits. Retire it when the approved system returns, so emergency access does not become permanent by accident."
        ]
      },
      {
        "h": "A first-actions planning table",
        "ps": [
          "Adapt the table to your actual systems and contracts. It is a planning aid, not an instruction to execute unfamiliar technical actions without authorization."
        ],
        "table": {
          "caption": "A first-actions planning table",
          "headers": [
            "Event reported",
            "Immediate workstream",
            "Decisions to coordinate"
          ],
          "rows": [
            [
              "Suspected fraudulent payment",
              "Bank fraud process and evidence preservation",
              "Payment records, reporting and account investigation"
            ],
            [
              "Encrypted files or active ransomware",
              "Authorized containment and technical response",
              "Isolation, evidence collection and recovery priorities"
            ],
            [
              "Suspicious account activity",
              "Platform-specific access response",
              "Sessions, permissions, affected information and communications"
            ],
            [
              "Lost device with business access",
              "Device and account review",
              "Supported management actions and information exposure"
            ]
          ]
        }
      },
      {
        "h": "Rehearse the opening decisions",
        "ps": [
          "Run a tabletop using a clearly labeled fictional scenario. Ask staff to locate the contact list, report the event and identify the decision-maker. Have the team explain how it would communicate if email were unavailable and how bank or insurer reporting would proceed.",
          "Record missing contacts, ambiguous authority and unsupported assumptions. Assign each correction and update the plan. A useful exercise produces practical changes, not just attendance evidence. Helm Command includes an annual tabletop within its agreed security-program scope; response and recovery responsibilities still need to be documented with your existing IT provider and other responders.",
          "After a real incident, conduct an appropriate lessons review with the people who owned the response. Compare the plan with the actions actually taken, identify delays and assign changes. Preserve relevant incident records under the approved retention process. Recheck contact details and responsibilities after a provider change rather than waiting for another emergency."
        ]
      }
    ],
    "takeaway": "Prepare trusted contacts, clear reporting and named decision authority. Match urgent actions to the harm, coordinate technical and insurance work, preserve appropriate evidence and test the process before an incident.",
    "lead": [
      "Keep an opening checklist short enough to use during a disruption, backed by procedures for investigation, communications and recovery. The plan should identify authorized responders, an alternate communication route and the contacts needed for the type of incident. The correct first action depends on what is happening; one universal call order does not fit every event."
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "intentional-insider-threats",
    "title": "What Business Owners Need to Know About Intentional Insider Threats",
    "metaTitle": "Intentional Insider Threats: Access and Response | Helm",
    "metaDesc": "Limit access, document sensitive approvals and review events through an authorized process. Unusual activity alone does not prove malicious intent.",
    "date": "2026-10-06",
    "readMin": 8,
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
      },
      {
        "h": "Start with the sensitive process",
        "ps": [
          "Choose a process where an unauthorized action would matter: client-file export, payment approval, account administration or changes to an authoritative record. Identify who can perform the action and why. Include employees, contractors, provider accounts and integrations. The relevant access may extend beyond the staff roster.",
          "Have the business owner approve the purpose and population. Existing IT verifies the technical permission and implements changes. A security reviewer can help identify a gap without deciding every business relationship. Keeping those roles distinct prevents a technical team from having to infer whether someone belongs on a client matter.",
          "Record normal changes in responsibility. A person moving to a new role may no longer need old permissions even while remaining employed. Review inherited groups, guests and independent applications. An ordinary role-change procedure reduces unnecessary access without suggesting misconduct."
        ]
      },
      {
        "h": "Make high-consequence actions reviewable",
        "ps": [
          "For a sensitive export or financial change, identify the requester, approver and operator. Where appropriate, separate those duties and retain the record connecting the approval to the actual action. A request approved for one purpose should not silently authorize a broader export or a different beneficiary.",
          "Plan the exception process. Staff need a route when a legitimate deadline conflicts with the ordinary procedure. The authorized owner should decide the exception and required evidence. An informal instruction from a senior person should not leave a junior employee responsible for inventing a control under pressure.",
          "Check integrations that can perform the same action. A workflow or service identity may have access unavailable to ordinary users. Review its owner, approved purpose and removal process. An employee access review that ignores automation can miss part of the authority over the information."
        ]
      },
      {
        "h": "Use records proportionately",
        "ps": [
          "Obtain advice about monitoring, employment, privacy and notice requirements before introducing a collection process. The lawful and proportionate arrangement depends on the circumstances. Do not turn a general security recommendation into permission to monitor every employee action or collect information unrelated to a defined purpose.",
          "Keep access to the records restricted. A broad discussion of an employee's activity can harm the person and compromise the investigation. The response team should know who may view, preserve and share the information. A restricted fact-finding record should not become an informal office narrative."
        ],
        "table": {
          "caption": "Use records proportionately",
          "headers": [
            "Review question",
            "Evidence to establish"
          ],
          "rows": [
            [
              "Which account acted?",
              "The recorded identity and relevant authentication context"
            ],
            [
              "What action occurred?",
              "The system event and affected information or object"
            ],
            [
              "Was the action authorized?",
              "Applicable business approval and procedure"
            ],
            [
              "What is the business context?",
              "Role, task and explanation from the appropriate owner"
            ],
            [
              "Is urgent restriction needed?",
              "The facts supporting a protective decision"
            ],
            [
              "Who determines misconduct?",
              "Authorized HR, counsel or separately retained investigation role"
            ]
          ]
        }
      },
      {
        "h": "Interpret an event in context",
        "ps": [
          "An unusually large download may support a question, but it can also reflect an approved project, migration or backup task. Establish the system, account, time and information before drawing a conclusion. Compare the event with the relevant business approval and obtain the necessary context through the authorized route.",
          "A deliberate action is not automatically proof of malicious intent. An employee may misunderstand a rule or choose a shortcut that creates harm. The response should still address unauthorized access or handling, while the appropriate people assess intent and employment consequences. Technical logs alone may not settle that distinction.",
          "Avoid personality-based profiles or unsupported suspicion scores. Describe the observed action and relevant evidence. If facts are missing, record the uncertainty and the next investigation step. A precise statement that an export occurred without a located approval is stronger than a speculative claim about why a person did it."
        ]
      },
      {
        "h": "Preserve the facts before routine cleanup",
        "ps": [
          "If the event needs investigation, obtain the authorized preservation instructions before deleting accounts, resetting systems or clearing relevant records. Ordinary remediation can alter evidence. The responsible responder and advisers should determine what must be retained and how.",
          "Record source, collection time, reviewer and the action taken. Keep original information where the approved process requires it, with controlled access. Do not copy live findings, employee information or client data into general operating documents simply to make them easier to find.",
          "A protective restriction may be necessary before all facts are known. Record its purpose and authority separately from any conclusion about misconduct. This distinction supports a controlled response: limiting possible harm while the authorized review continues."
        ]
      },
      {
        "h": "Keep departures operationally consistent",
        "ps": [
          {
            "text": "Use the offboarding process for approved timing, access removal, records preservation and ownership transfer. The procedure should work for routine departures without a presumption of wrongdoing. A consistent process also makes unusual exceptions easier to identify.",
            "links": [
              {
                "phrase": "offboarding process",
                "to": "/resources/employee-offboarding-checklist/"
              }
            ]
          },
          "Review accounts outside the main tenant, provider relationships and integrations. Blocking one account may not end every session or revoke every credential. Have IT verify the actual platform behavior and record unresolved access. Retain business continuity tasks such as reassignment of client matters alongside the access work.",
          "Do not delete information merely to make a departure appear complete. Counsel or the records owner should determine relevant preservation and disposition. The person carrying out account administration needs a clear instruction, not an assumption that all former-worker data can immediately be removed."
        ]
      },
      {
        "h": "Test the process without targeting a person",
        "ps": [
          "Use a hypothetical scenario involving an unexpected client-file export from an approved account. Ask the team to show the authorization record, relevant logs, reviewer and protective decision route. Keep the exercise materials harmless and the scope agreed in advance.",
          "Include IT, the business owner and the appropriate response roles. A security service may supply an event while HR or counsel handles another part of the decision. Test whether information reaches those roles through the approved channel, with access limited to the people who need it.",
          "Record unclear authority and missing evidence. Assign a correction such as a better approval record, a maintained access inventory or a known preservation contact. Repeat the affected step after the correction. The exercise tests the procedure; it does not demonstrate that the firm can infer every insider's intent."
        ]
      },
      {
        "h": "Report the program gap to leadership",
        "ps": [
          "Leadership needs to know about unassigned approvals, excessive access and unresolved exceptions. Provide the business consequence and the decision required, with restricted individual details shared only when authorized and necessary. A general program report can describe the gap without circulating investigation material.",
          "Review changes in systems and workflows. A new export feature or automated integration can expand authority even when the employee count stays the same. Update the responsibility map and test the relevant approval route. The useful program is maintained access and a lawful, evidence-led response, rather than a broad promise to detect every intentional act."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "invoice-fraud-red-flags",
    "metaTitle": "Invoice Fraud Red Flags: Check Before You Pay | Helm",
    "title": "Invoice Fraud Red Flags: What to Check Before You Pay a Vendor",
    "metaDesc": "Verify vendor banking changes, separate approvals and retain evidence. Learn invoice fraud warning signs and what to do after a fraudulent transfer.",
    "date": "2026-07-12",
    "updated": "2026-10-07",
    "readMin": 9,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A fraudulent invoice can contain the correct project, amount and contact name. A payment-change request can arrive inside a familiar email conversation. Accuracy in those details does not prove that the bank account belongs to your vendor.",
    "sections": [
      {
        "h": "What the reported losses tell us",
        "ps": [
          {
            "text": "The FBI’s 2025 IC3 report lists 24,768 business email compromise complaints and $3,046,598,558 in reported losses. That category includes several forms of fraud, not just fake invoices. These are reported complaint figures, not a measure of every business affected or the probability that your next invoice is fraudulent. They do establish that payment-related impersonation deserves an explicit control. FBI 2025 IC3 Annual Report, pages 7 and 8.",
            "links": [
              {
                "phrase": "FBI 2025 IC3 Annual Report, pages 7 and 8",
                "to": "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
              }
            ]
          },
          "Use the figures to justify reviewing your workflow, not to create an unsupported estimate of your own exposure. Your business has more useful local evidence: how many banking changes occur, how often staff bypass verification, which payment routes can be recalled and whether anyone checks exceptions."
        ]
      },
      {
        "h": "The request is the first red flag",
        "ps": [
          "Any change to an existing vendor’s bank account should trigger verification, even if the message has no spelling errors or suspicious attachment. A change may be legitimate. It still alters where your money will go and should not be approved only because it arrived from an apparently familiar sender.",
          "Other warning signs include an unexpected contact, a different reply-to address, a slightly altered domain, pressure to pay before a deadline or a request to keep the transaction confidential. These observations help staff decide what to investigate. They are not a ranked list of indicators proven to appear in a particular order.",
          "Also look for changes in the workflow. A vendor who usually submits invoices through a portal suddenly asks for a direct wire. A manager requests approval through a personal email address. A caller insists the ordinary approver is unavailable. Pause the exception and use the process your business established before the request arrived."
        ]
      },
      {
        "h": "Why a familiar thread is insufficient evidence",
        "ps": [
          {
            "text": "An attacker may imitate a vendor’s identity or gain access to a real mailbox. The FBI describes spoofing, targeted phishing and compromised information as routes used in business email compromise. A legitimate-looking thread can therefore carry an illegitimate instruction. FBI business email compromise guidance.",
            "links": [
              {
                "phrase": "FBI business email compromise guidance",
                "to": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
              }
            ]
          },
          "For the payment reviewer, the consequence is practical: do not treat the conversation history as independent confirmation. Replying to the same email asks the same channel to vouch for itself. Calling a number newly supplied in that message creates a similar problem.",
          "Your verification route should come from records already held by the business or a separately validated vendor-onboarding process. If the existing contact information is outdated, resolve that gap through an approved procedure. Do not substitute the new email’s phone number simply to clear the payment queue."
        ]
      },
      {
        "h": "Verify the bank change separately from the invoice",
        "ps": [
          "Keep two decisions distinct. One is whether your business owes the vendor the amount billed. The other is whether the new destination is authorized. Purchase orders, delivery records and contract terms help establish the first. They do not establish the second.",
          "Call an established vendor contact through a known number. Explain that your company received a change request and ask the contact to confirm the intended change through your approved process. Avoid volunteering every new detail first; ask the contact to describe the request so the conversation supplies independent information.",
          "Record who was reached, which established number was used, the date, the result and the reviewer. Keep the evidence in the normal finance system with suitable access restrictions. Do not scatter banking details into broad chat channels or an unprotected shared spreadsheet.",
          "A callback reduces risk but cannot guarantee success. Contact records can be wrong, someone can be deceived and a real vendor can have a compromised process. Support the callback with approval separation, restricted access to vendor records and a review of unusual transactions. The objective is several checks that can catch different failures."
        ]
      },
      {
        "h": "Separate record changes from payment approval",
        "ps": [
          "If one person can amend a vendor record and release the payment without review, a convincing request has only one decision point to pass. Establish a second review for banking changes and apply your business’s approval rules to payment release.",
          "The second reviewer should see the verification record and the proposed destination, not merely a forwarded statement that the first reviewer checked it. Decide which changes always require independent approval. Banking amendments may deserve that treatment even when the next payment is below the usual spending threshold.",
          "Review permissions in the payment and accounting systems with their owners. Identify who can add vendors, edit bank details, approve changes and release payments. A written procedure is weaker if the system allows a busy employee to complete all steps with no review or audit trail.",
          "For a small finance team, document how an owner or another authorized person supplies the second check. Avoid pretending a two-person process exists when holidays, sickness or month-end pressure routinely reduce it to one. Define how a payment waits when the required reviewer is unavailable."
        ]
      },
      {
        "h": "A payment-change decision table",
        "ps": [
          "This is a workflow example, not a substitute for your bank’s requirements or your company’s approval policy. Adapt the evidence fields to the systems you already use so employees can follow it during normal work."
        ],
        "table": {
          "caption": "A payment-change decision table",
          "headers": [
            "Situation",
            "Appropriate next action",
            "Evidence to retain"
          ],
          "rows": [
            [
              "Established vendor requests new banking details",
              "Hold the change and verify through a known contact",
              "Contact route, confirmation and independent approval"
            ],
            [
              "Request arrives from a new contact",
              "Validate the contact’s authority separately",
              "Existing vendor owner’s confirmation"
            ],
            [
              "Manager asks to bypass normal checks",
              "Apply the approved exception process",
              "Named approver, reason and compensating checks"
            ],
            [
              "Email and callback give conflicting answers",
              "Keep the payment on hold and escalate",
              "Conflicting details and escalation record"
            ],
            [
              "Money has already been sent",
              "Contact the financial institution immediately",
              "Transaction reference, time and response instructions"
            ]
          ]
        }
      },
      {
        "h": "An illustrative month-end example",
        "ps": [
          "Consider a company with a regular supplier and an invoice due at month end. This is an illustrative scenario, not a Helm customer incident. The reviewer receives a message in the usual thread saying the supplier has changed banks and payment must arrive that afternoon.",
          "The amount matches the purchase order. The invoice layout looks right. Those details support the underlying payable, but the new account remains unverified. The reviewer holds the banking change and contacts the supplier using the established record. The reviewer then records the outcome and requests the required second approval.",
          "If the supplier cannot be reached, the deadline does not convert an unknown destination into an authorized one. Escalate to the business owner using the written exception procedure. That person can address the commercial consequence of a delay without quietly discarding the verification requirement."
        ]
      },
      {
        "h": "Prepare staff for pressure, including from leadership",
        "ps": [
          "Give employees explicit permission to stop a payment when verification is incomplete. A policy signed by leadership is useful only if leadership follows it during urgent transactions. A request from an owner should not automatically bypass the checks imposed on a vendor.",
          "Practice the actual steps with finance staff. Use a clearly labeled exercise, approved test details and no real transfer. Test whether staff can locate the established contact record, reach the second approver and document a held payment. Review the difficulty they encounter rather than measuring only whether they identified a suspicious phrase.",
          "Teach the reporting route alongside the red flags. Employees need to know who takes over an uncertain request and how to preserve the message. Avoid punishing someone for raising a concern that turns out to be legitimate. That would discourage the next report, including one with stronger evidence."
        ]
      },
      {
        "h": "If you discover a fraudulent transfer",
        "ps": [
          {
            "text": "Contact your financial institution immediately and request its fraud-response process. The FBI advises asking it to contact the institution receiving the transfer and reporting business email compromise to IC3. Recovery is uncertain; quick reporting should not be described as a guarantee. FBI reporting guidance.",
            "links": [
              {
                "phrase": "FBI reporting guidance",
                "to": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
              }
            ]
          },
          "Preserve the original messages, transaction reference, beneficiary details and a timeline of what happened. Notify the appropriate internal owner and follow your incident plan. If there is reason to suspect mailbox compromise, bring the authorized IT and security responders into the investigation.",
          "Keep the banking response and technical response coordinated. Recalling a payment does not resolve a compromised account. Resetting a password does not address an already completed transfer. Record who owns each workstream so neither is assumed to be handled by the other team."
        ]
      },
      {
        "h": "Protect messages sent in your name",
        "ps": [
          {
            "text": "The same fraud can target your customers through impersonation of your company. Maintain SPF, DKIM and DMARC for the services that legitimately send mail on your behalf. Our DMARC guide explains the sender inventory and enforcement process.",
            "links": [
              {
                "phrase": "DMARC guide",
                "to": "/resources/what-is-dmarc/"
              }
            ]
          },
          "Authentication addresses a defined part of the problem. It does not prevent every lookalike domain, display-name impersonation or message sent from a compromised legitimate mailbox. Tell customers how banking changes will be communicated and verified. Do not ask them to rely on an email signature as proof.",
          {
            "text": "Review the accounts involved in invoices and payment instructions with your existing IT provider. Confirm MFA coverage, administrative access and how suspicious activity is reported. Helm’s public domain scan can check published email configuration; it cannot verify your internal finance approvals or account policies.",
            "links": [
              {
                "phrase": "public domain scan",
                "to": "/free-scan/"
              }
            ]
          }
        ]
      },
      {
        "h": "Measure whether the process is actually followed",
        "ps": [
          "Track the number of banking changes, the number with completed independent verification and unresolved exceptions. Review a sample of records to confirm the evidence exists. A checklist marked complete without a contact route or approval record tells you little about whether the control operated.",
          "Ask finance staff which step causes delays. Fix inaccessible contact records, unclear approvers or missing backup coverage. Those operational details often decide whether a sound policy survives a busy payment run."
        ]
      }
    ],
    "takeaway": "Verify every vendor banking change through an established contact route before updating records or releasing money. Retain the evidence, separate approval responsibilities and escalate incomplete checks. If a fraudulent transfer occurs, contact the bank immediately and follow the incident process.",
    "lead": [
      "Treat changes to payment instructions as a separate verification event. The person reviewing the invoice should be able to confirm the change through an established contact route, obtain the required approval and leave a record before money moves. Email protection helps reduce exposure, but the payment process must still work when a convincing message gets through."
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "job-site-devices-public-wifi",
    "metaTitle": "Job Site Devices and Public Wi-Fi: Contractor Risks | Helm",
    "title": "Job Site Devices and Public Wi-Fi: What Actually Puts a Contractor at Risk",
    "metaDesc": "Review field connections, shared-device access, offline work and lost-device response. Confirm mobile capabilities and payment approval duties with IT.",
    "date": "2026-06-30",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Contractors & Trades",
    "laneTo": "/contractors",
    "intro": "Job-site work can involve public networks, lost devices, shared tablets and accounts that remain signed in. Any of those can expose job details, payment messages, and the accounts used to run the business.",
    "sections": [
      {
        "h": "Treat the connection and the destination separately",
        "ps": [
          {
            "text": "The FTC explains that widespread encryption has changed public-Wi-Fi risk, while an encrypted connection to a scam site still sends information to the scammer. HTTPS protects the connection; it does not verify the business purpose of a request.",
            "links": [
              {
                "phrase": "FTC explains",
                "to": "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know"
              }
            ]
          },
          "An unfamiliar hotspot or login page needs review before credentials are entered. Use the approved connection method, such as a maintained company hotspot, when the available network is unsuitable. The hotspot still needs appropriate configuration and does not make a malicious destination trustworthy."
        ]
      },
      {
        "h": "The device itself is the real exposure",
        "ps": [
          "A lost device with an accessible mail session can expose business messages and related account access. The actual consequences depend on the device, session state and safeguards; assess the facts rather than automatically declaring a full takeover.",
          "Microsoft 365 and Google Workspace business plans can include basic mobile device management features such as requiring a screen lock, encrypting the device, and remotely wiping a lost device. Those controls are part of your productivity tenant, not Helm Core itself, and the available features depend on your license.",
          {
            "text": "A shared job-site tablet signed straight into the owner's mailbox is a standing risk for any contractor, because everyone who touches that tablet effectively has the owner's access. Give it its own limited account instead of the owner's login.",
            "links": [
              {
                "phrase": "any contractor",
                "to": "/contractors"
              }
            ]
          }
        ]
      },
      {
        "h": "One rule that has to survive the field",
        "ps": [
          "Do not release a new or changed payment instruction without the firm's independent verification and required approval. Use a trusted number already in the approved record. Field staff should route the request to the authorized payment owner rather than improvising a change under pressure.",
          {
            "text": "None of this replaces basic email security either. A free scan reports how your domain's public authentication records are configured, which is worth knowing before a crew member is troubleshooting it from a truck.",
            "links": [
              {
                "phrase": "free scan",
                "to": "/free-scan"
              }
            ]
          }
        ]
      },
      {
        "h": "Inventory the devices used outside the office",
        "ps": [
          "List crew phones, shared tablets, office laptops used in the field and any loaner devices. Identify the owner, operating system, business accounts and the person responsible for maintenance. Include personally owned equipment if it is permitted to access company information. A device list limited to office computers will miss part of the work.",
          "Record which systems each device can reach. A tablet used only to display an approved job drawing differs from a phone with the owner's email, supplier messages and payment authority. Keep the access decision tied to the role. Convenience should not give every crew member access to every business account.",
          "Decide who verifies the setup before a device is issued. Check the approved account, screen lock, supported software and reporting or management arrangement. A device handed out during a busy morning still needs an acceptance check. Record the exceptions rather than assuming field equipment is outside the security process."
        ]
      },
      {
        "h": "Give shared devices a defined access model",
        "ps": [
          "Avoid signing a shared tablet into a senior person's ordinary account. Establish an approved model with IT that supports the work and limits access. Depending on the platform and application, that may involve individual users, a managed shared-device arrangement or another supported configuration. A generic shared account is not appropriate for every application.",
          "Check what happens at a handover. Can the next user see previous messages, downloaded files or saved sessions? Does the application support the intended separation? Test with harmless records before the tablet is used across jobs. Include the process for clearing or transferring the work under the approved records procedure.",
          "Assign an owner for charging, updates and return. A device that never reaches the maintenance process can remain in use with old software or missing protection. Schedule the work around actual field use, with an approved fallback when the device is unavailable."
        ]
      },
      {
        "h": "Treat captive portals as an unfamiliar request",
        "ps": [
          "A public connection may open a page requesting agreement or other information. Staff should know that the company does not authorize entering business account passwords into an arbitrary network page. If a prompt is unexpected, use the approved connection or ask for help through the known support route.",
          "Opening the business application directly can avoid following a link from an unverified message. It does not remove the need to use the right account and protect access. Give staff the approved application and saved address during provisioning so they are not searching under deadline pressure.",
          "Do not disable browser certificate warnings to make a site load. Ask the authorized owner to investigate. A field workaround that changes a security setting can outlast the immediate connection problem and affect later work."
        ]
      },
      {
        "h": "Set device and account safeguards together",
        "ps": [
          "Microsoft and Google management capabilities depend on the actual subscription, platform and enrollment. Ask IT to demonstrate the supported action on a test device. Do not assume the firm can remotely wipe every personal phone or that a wipe request always succeeds.",
          "Keep device protection separate from account response. Removing a work account or revoking a session may affect a different part of the exposure from locking a device. The appropriate actions depend on the platform and event. The authorized team should record what was done and what remains uncertain."
        ],
        "table": {
          "caption": "Set device and account safeguards together",
          "headers": [
            "Area",
            "Question for IT and the business owner"
          ],
          "rows": [
            [
              "Screen access",
              "What lock and inactivity behavior is required and verified?"
            ],
            [
              "Storage",
              "What encryption applies to the device and relevant information?"
            ],
            [
              "Account access",
              "Which users, authentication and session arrangements are approved?"
            ],
            [
              "Management",
              "Which devices can be managed and which actions are supported?"
            ],
            [
              "Recovery",
              "Who handles a lost device and an unavailable account?"
            ],
            [
              "Business continuity",
              "What approved alternative keeps essential job work moving?"
            ]
          ]
        }
      },
      {
        "h": "Write a lost-device procedure staff can use",
        "ps": [
          "Give the crew one contact and an alternate for reporting loss promptly. Ask for the device identity, last known location, time and business use. Tell staff how to report when the missing phone was their normal communication device. Keep a contact route available outside the affected account.",
          "Authorized IT should assess supported locking, access restriction and session actions. The business owner identifies important job information and client dependencies. Preserve the timeline and relevant facts before making unsupported statements about disclosure or recovery.",
          "If client information or payment access may be affected, use the incident plan and appropriate advisers. A device found later may still need a review before returning to ordinary use. Record the disposition rather than closing the report solely because the hardware reappeared."
        ]
      },
      {
        "h": "Separate job progress from payment changes",
        "ps": [
          "A crew member may confirm that materials arrived or work was completed. That does not automatically authorize a new supplier bank account. Keep the operational confirmation and financial instruction in their assigned workflows.",
          {
            "text": "Route changed banking details to the person maintaining trusted supplier records. Use independent verification and the required approval before release. The vendor-email resource explains the supplier handoff. A familiar job number and accurate invoice amount should not replace it.",
            "links": [
              {
                "phrase": "vendor-email resource",
                "to": "/resources/vendor-email-compromise-contractors/"
              }
            ]
          },
          "Prepare for a request claiming that payment must change immediately to prevent a delay. The firm needs a leadership-supported pause and alternate route. Staff should not have to trade off the job deadline against a financial rule without the authorized decision-maker."
        ]
      },
      {
        "h": "Confirm what the security service covers",
        "ps": [
          {
            "text": "Helm Core covers eligible Windows and Mac workstations within its defined device service. Phones, tablets, servers and network equipment require separate written scope; they should not be inferred from covered laptop monitoring. Existing IT handles administration and routine remediation.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Command adds program and evidence coordination within its written service. It can help track an unresolved device decision and owner, without promising universal mobile management or recovery. Confirm the support model for the actual field devices during fit review.",
            "links": [
              {
                "phrase": "Command",
                "to": "/helm-command/"
              }
            ]
          },
          "Start with one shared-device handover and one lost-device exercise using harmless data. Test whether staff can reach the right contact, IT can perform the supported action and the business can continue essential work. Those results give a more useful picture than an unverified statement that public Wi-Fi is safe or that every mobile device is protected."
        ]
      },
      {
        "h": "Plan for unavailable connectivity",
        "ps": [
          "Identify which job information must be available when the approved connection fails. A drawing, schedule or safety document may have an authorized offline process, while payment changes still belong with the financial owner. Decide that distinction before a crew loses connectivity.",
          "If approved documents are downloaded for field use, record where they may be stored and how current versions are identified. A local copy can become outdated when the office revises the job record. Give staff a way to confirm the current version and return completed information through the approved route.",
          "Avoid making a borrowed personal device the automatic substitute. Ask the authorized owner whether it meets the required access arrangement, and use a defined fallback if it does not. The need to keep work moving is real, but the substitute should have a business decision behind it.",
          "Include the offline process in the device handover test. Staff should show what remains available, where new information is recorded and how it returns to the authoritative system. Record any manual reconciliation needed so the firm does not mistake a working field copy for a complete central record."
        ]
      }
    ],
    "takeaway": "Require screen locks and encryption, give shared tablets limited accounts, and use a phone hotspot when the available network looks questionable. Never approve changed payment instructions from the field without calling a known number.",
    "lead": [],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "law-firm-device-security-checklist",
    "metaTitle": "Law Firm Device Security: Laptops and Remote Work | Helm",
    "title": "Law Firm Device Security Checklist: Laptops, Remote Work, and Lost Devices",
    "metaDesc": "A practical device security checklist for small law firms covering inventory, monitoring, encryption, remote work, lost devices, and evidence for clients and insurers.",
    "date": "2026-08-18",
    "readMin": 8,
    "lane": "Law Firms",
    "laneTo": "/law-firms",
    "intro": "A lost laptop can give someone access to client email, case files, billing, trust-accounting systems, and saved browser sessions. Law-firm devices leave the office every day for court, travel, and remote work, so office-network security alone does not protect the information on them.",
    "sections": [
      {
        "h": "Why the device belongs in the confidentiality conversation",
        "ps": [
          {
            "text": "ABA Model Rule 1.6(c) calls for reasonable efforts to prevent inadvertent or unauthorized disclosure or access. Model rules are not a substitute for the rules adopted in the relevant jurisdiction or the firm’s client commitments. Have the responsible adviser determine the applicable duties.",
            "links": [
              {
                "phrase": "ABA Model Rule 1.6(c)",
                "to": "https://www.americanbar.org/groups/professional_responsibility/publications/model_rules_of_professional_conduct/rule_1_6_confidentiality_of_information/"
              }
            ]
          },
          "For the device review, use the firm’s actual information and access. Identify local files, saved sessions and the systems a device can reach. A public survey cannot determine whether this firm’s laptop was encrypted or which matter information was available on it."
        ]
      },
      {
        "h": "Start with a device inventory that names an owner",
        "ps": [
          "List every firm-owned Windows and Mac computer, who uses it, what operating system it runs, whether storage encryption is enabled, whether security updates install automatically, and whether the firm can see when its security software stops checking in. Include shared reception computers and seldom-used loaners, not only partner laptops.",
          "Record which systems each device can reach. If a laptop can open email, document management, billing, trust accounting, and cloud storage, losing it may require immediate session revocation and a review of client information that could have been accessible. A kiosk with no saved credentials creates a different level of exposure."
        ]
      },
      {
        "h": "Apply a baseline that can be checked",
        "ps": [
          "Require a screen lock, full-disk encryption, supported operating systems, automatic security updates, separate administrator access, multi-factor authentication, and a managed security service that can investigate suspicious behavior. Match protection to the supported platform and the firm’s requirements.",
          {
            "text": "Helm Core provides round-the-clock monitoring, human investigation, and containment for covered Windows and Mac devices. That does not replace patching, backups, identity controls, or a written incident plan, but it closes the gap between an alert appearing and someone qualified acting on it.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core"
              }
            ]
          }
        ]
      },
      {
        "h": "Write the lost-device procedure before a laptop disappears",
        "ps": [
          "The procedure should name one person to call, how to disable the user account and revoke active sessions, how to determine what client information may have been accessible, and when counsel, the insurer, affected clients, or other parties must be consulted. Preserve facts and timestamps instead of guessing whether exposure occurred.",
          "Phones and tablets need their own identity, email, and device-management controls. Standard Helm Core coverage does not install the same security agent on iOS or Android, so a complete firm plan must address those devices separately."
        ]
      },
      {
        "h": "Keep evidence that the checklist is operating",
        "ps": [
          "A policy alone cannot show that a device was encrypted, monitored, or updated. Keep a current inventory, deployment status, encryption status, update records, incident contacts, and evidence that departed users were removed. Review exceptions instead of allowing them to become permanent.",
          {
            "text": "If a client or carrier asks whether every device is protected, the defensible answer is the current inventory plus the evidence behind it. Helm Command can help turn those questions into a documented gap list and an owned remediation plan.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command"
              }
            ]
          }
        ]
      },
      {
        "h": "Map devices to matter access",
        "ps": [
          "Identify the systems each device uses, including email, document management, billing, trust accounting and client exchange. Record whether information is downloaded locally or viewed through a controlled application. Both can create access considerations, but the relevant safeguards and response actions can differ.",
          "Have the matter owner approve the business need for access. IT verifies the technical permission and device state. A person who handles one engagement should not inherit access to every matter solely because the device is firm owned. Review role changes and outside collaborators through the appropriate access process.",
          "Include temporary and loaner equipment. A laptop issued for court or travel can retain files or sessions after return. Define the approved handover, cleanup and preservation process with IT and the records owner. Test it using harmless matter-like files rather than exposing real client records in a demonstration."
        ]
      },
      {
        "h": "Verify encryption and recovery access",
        "ps": [
          {
            "text": "Microsoft documents BitLocker and Apple documents FileVault for supported device arrangements. Have IT confirm the actual encryption state and recovery-key handling. The product's availability is different from verified protection on the particular device.",
            "links": [
              {
                "phrase": "BitLocker",
                "to": "https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/"
              },
              {
                "phrase": "FileVault",
                "to": "https://support.apple.com/guide/deployment/intro-to-filevault-dep82064ec40/web"
              }
            ]
          },
          "Keep recovery information in the approved restricted location. An encrypted laptop can become an availability problem when nobody authorized can recover access. Define who can obtain a recovery key, how access is recorded and how the arrangement is transferred when providers change.",
          "Encryption addresses stored information under its operating conditions. It does not by itself prevent an authorized session from viewing data or eliminate every consequence of a lost unlocked device. The incident assessment needs the actual state, access and information involved."
        ]
      },
      {
        "h": "Review supported software and local privileges",
        "ps": [
          "Ask IT to identify unsupported operating systems and important applications. Record who handles updates and how failed installations are found. A device set to update automatically may still need verification after a failure or restart dependency. Keep exceptions assigned rather than assuming the setting proves completion.",
          "Review local administrator access according to the approved operating model. Staff may need specialist software, but the firm should establish a supported installation route instead of distributing unnecessary privileges. Record the reason and owner for an exception.",
          "Coordinate protection changes with business applications. A representative pilot should include the firm's document and practice-management tools. If an exclusion is needed, have the authorized team evaluate its scope and consequences. A broad exception added during a deadline can remain after the original issue has disappeared."
        ]
      },
      {
        "h": "Make remote work a defined arrangement",
        "ps": [
          "Identify approved devices, connection methods and document exchange. Staff should know where matter files belong and what to do if the intended service is unavailable. An unreviewed personal account should not become the fallback for a failed business workflow.",
          "Review screen exposure and physical handling during travel or shared-space work. These are practical operating decisions, not claims that one accessory establishes confidentiality. Give employees instructions appropriate to the environments where they work and a reporting route for an unexpected situation.",
          "For home or mobile access, ask IT which device and identity controls apply. A workstation agent does not establish management of every phone or tablet. Record the separate mobile arrangement and its supported lost-device actions."
        ]
      },
      {
        "h": "Prepare the first lost-device decisions",
        "ps": [
          "Record the last known location, time, device state and relevant user actions. If some facts are unknown, state them as unknown. Do not automatically declare a disclosure or dismiss the event because the device was encrypted. The applicable assessment needs the facts and professional judgment.",
          "Supported remote actions can have limitations. A device may be offline, an application may retain a separate session or a personal device may not be enrolled. Ask IT to record the action requested and the result actually observed. A submitted wipe request is not always proof of completed wiping."
        ],
        "table": {
          "caption": "Prepare the first lost-device decisions",
          "headers": [
            "Question",
            "Owner to identify"
          ],
          "rows": [
            [
              "Which device and user are involved?",
              "Inventory owner and reporting employee"
            ],
            [
              "What information and systems may be accessible?",
              "Matter owners, IT and authorized responder"
            ],
            [
              "Which account or device actions are supported?",
              "Authorized IT and security service"
            ],
            [
              "What records must be preserved?",
              "Response owner and appropriate advisers"
            ],
            [
              "How will essential work continue?",
              "Business owner and existing IT"
            ],
            [
              "Which communications or notifications apply?",
              "Leadership and the responsible advisers"
            ]
          ]
        }
      },
      {
        "h": "Test the handoff using harmless records",
        "ps": [
          "Run a short tabletop around a missing travel laptop. Ask staff to find the inventory, identify matter access, reach the authorized team and show the decision route. Include the business continuity owner so the exercise covers the work that must continue after containment.",
          "Record missing information and ambiguous authority. A device without an owner needs an inventory correction. An unavailable contact needs an alternate. An unclear client communication decision needs the responsible adviser's involvement. Assign the correction and verify the affected step afterward.",
          "Keep exercise records separate from actual incident findings. A hypothetical scenario should not appear in a client response as a real event or as proof that every loss has been tested. State the exercise date, scope and observed result."
        ]
      },
      {
        "h": "Keep coverage claims bounded",
        "ps": [
          "Compare the current inventory with reporting protection and device-management records. Explain stale or excluded devices and name the next action. Retired entries should not inflate a coverage percentage. New equipment should receive the acceptance check before ordinary use.",
          "For a client or insurer question, answer for the relevant population and control. Encryption, endpoint detection, mobile management and recovery are separate facts. Keep the supporting date and evidence reference with the response.",
          {
            "text": "Helm Core covers up to two eligible Windows or Mac workstations per covered user under its standard device scope. Phones, tablets, servers and network equipment need separate written scope. Helm Command adds evidence and program coordination; existing IT retains administration and routine remediation. Specialist forensic work and hands-on recovery require a separately agreed engagement. Use the endpoint rollout guide to plan acceptance and the incident plan for the wider handoff.",
            "links": [
              {
                "phrase": "endpoint rollout guide",
                "to": "/resources/managed-endpoint-protection-rollout/"
              },
              {
                "phrase": "incident plan",
                "to": "/resources/incident-response-plan-small-business/"
              }
            ]
          }
        ]
      },
      {
        "h": "Give staff a support path after containment",
        "ps": [
          "A partner whose laptop is isolated needs to know whom to call and which approved alternative is available. Existing IT should coordinate the replacement or recovery arrangement with the response team. Avoid reconnecting a device solely to meet a deadline while its status remains unresolved.",
          "Record the business handoff and the conditions for returning the device to ordinary use. Security containment, matter continuity and hardware repair are related tasks with different owners. A clear route lets staff continue approved work while the authorized teams resolve the technical situation."
        ]
      }
    ],
    "takeaway": "Keep a current device inventory, require encryption and screen locks, monitor covered computers, and write down what happens when a device is lost. Address phones and tablets separately instead of assuming laptop protection covers them.",
    "lead": [],
    "updated": "2026-10-07",
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "law-firm-managed-vs-in-house-security",
    "title": "In-House vs Managed Cybersecurity for Law Firms: Pros, Cons, and Budget-Friendly Choices",
    "metaTitle": "Law Firm Cybersecurity: In-House vs Managed | Helm",
    "metaDesc": "Compare law-firm security responsibilities, coverage and evidence alongside existing IT. The firm retains professional and business decisions.",
    "date": "2026-10-06",
    "readMin": 8,
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
      },
      {
        "h": "Identify the work the firm actually needs covered",
        "ps": [
          "Begin with a few important workflows: receiving client documents, sharing matter files, approving payments and working away from the office. For each, identify the systems, people and records involved. Include document-management and practice-management platforms that sit outside the main email tenant.",
          "Then separate security operations from technology administration. Reviewing a suspicious endpoint alert is different from applying a routine update. Coordinating evidence for a client review is different from investigating an active compromise. A staff member or provider may perform more than one role, but each assignment needs enough time, authority and skill.",
          "Ask the firm's responsible lawyer to identify the duties and client commitments relevant to the practice. A client may require safeguards or evidence beyond your standard operating approach. Record what the firm agreed to provide and who checks the requirement before accepting new work. A vendor brochure is not the firm's analysis of those commitments.",
          "Use the resulting list as the procurement scope. The objective is to find an operating arrangement for the work, not to select a staffing model first and hope it covers everything. Keep unknown applications and unresolved responsibilities visible until they are checked."
        ]
      },
      {
        "h": "Evaluate the internal option with realistic coverage",
        "ps": [
          "An internal security role can bring context: how the firm handles urgent filings, which systems contain sensitive matters and who can approve disruptive changes. That context helps prioritize work and explain consequences. It still requires access to appropriate tools, training and outside specialist help when the task exceeds the person's role.",
          "Write a role description with recurring responsibilities and an escalation route. Include evidence maintenance and coordination with existing IT if those duties belong to the role. Avoid assigning a complete security program to someone whose available time only covers a few hours of review each month.",
          "Discuss holidays, illness and simultaneous demands. If the same person handles a system outage and a suspicious account event, who provides the second response? Compare the actual after-hours arrangement with the protection the firm needs. An internal employee is not automatically continuously available, and a managed contract is not automatically comprehensive.",
          "For costing, use the firm's own compensation assumptions and recruitment information. Include benefits, coverage, tools, training and any external support the internal role still needs. There is no universal staffing figure that establishes which option is cheaper for every practice."
        ]
      },
      {
        "h": "Evaluate a provider through a fictional incident",
        "ps": [
          "Give each prospective provider the same harmless scenario. An employee reports an unexpected sign-in and a message sent from their account. Ask which covered signals the provider can inspect, what it can restrict and how it contacts the firm. Do not send actual client material as part of a sales exercise.",
          "Ask what happens next. Who investigates connected applications and mailbox changes? Who preserves the relevant records? Who coordinates with the firm's IT administrator, insurer and counsel? Which steps are included and which require a separately engaged responder? Keep the explanation consistent with the service order.",
          "Clarify response authority before signing. A provider may be authorized to isolate a covered workstation or restrict a supported account under defined conditions. Leadership needs to understand the effect on work and the route for restoration. A broad phrase such as proactive response should not substitute for that discussion.",
          "Request a fictional report showing the event, evidence, action, escalation and remaining uncertainty. It should support a useful handoff without exposing unnecessary client content. Confirm who receives reports and how sensitive records are transferred and retained."
        ]
      },
      {
        "h": "Compare a common budget population",
        "ps": [
          "A proposal priced by user and a proposal priced by device need a shared worksheet. List covered staff, eligible workstations, outside advisers, servers, phones and specialist systems. Mark excluded items and ask who protects or administers them. Compare the same period, contract term and expected work.",
          "Using Core's published rate, a hypothetical 30-covered-user firm would calculate 30 multiplied by $125, or $3,750 per month before any separately scoped work or applicable charges. The example is arithmetic, not a quote or an assertion that the firm qualifies. Fit, platform support and written terms still need review.",
          "Put one-time transition work and retained IT work beside recurring fees. Identify overlapping subscriptions that could be removed only after coverage is confirmed. Do not count a license saving while the old service is still required, and do not assume every hour freed from alert review reduces the existing IT bill.",
          "Compare exit costs and access transfer as well. The firm should be able to recover its own reports and maintain continuity if the arrangement ends. Ask who removes agents, changes routing, transfers administrative rights and records open issues during the transition."
        ]
      },
      {
        "h": "Use a combined model when responsibilities are clear",
        "ps": [
          "Some firms retain internal program leadership and use a managed provider for defined operational coverage. Others keep their existing IT provider for administration and add security-program coordination. These combinations can fit when the contracts and internal assignments join up.",
          "Name a firm contact with authority to make decisions and a backup contact who can act during an absence. Keep an operating responsibility map with the security provider, IT owner and business leadership. Resolve ambiguous handoffs before an event, especially account containment, recovery, evidence preparation and client communication.",
          "Review the arrangement after a material change in the practice. A merger, a new office or a client with different requirements can change the covered population. Reconcile account and device records rather than relying on the original onboarding count. Confirm new applications against the scope.",
          "The first review should test completion of specific work: verified eligible-device coverage, an exercised reporting route, a current contact list and approved handling of unresolved exceptions. Later reviews should show what changed and which decisions remain. That gives the partners a basis for evaluating the service beyond the number of tools in its stack."
        ]
      },
      {
        "h": "Check the arrangement against a new matter",
        "ps": [
          "Before accepting a client's security commitment, identify whether the current arrangement can support it. Ask the responsible lawyer and IT owner to review the requested population, evidence and deadline. A contractual promise may require work beyond the managed stack or internal role.",
          "Record any additional work with its cost and implementing owner. Confirm it before the firm represents that the requirement is met. This prevents a service-selection decision from becoming an unsupported promise in a later client agreement."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "m365-security-baseline",
    "title": "Microsoft 365 Security Baseline: Access, Mail and Recovery",
    "metaDesc": "Review tenant authentication, privileged access, mail forwarding, connected applications and recovery with IT. Record evidence, exceptions and assigned changes.",
    "date": "2026-07-16",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A stolen Microsoft 365 password can expose years of email, give an attacker a convincing way to impersonate your staff, and let them quietly forward future messages outside the company. Available controls depend on licensing and configuration. Have the authorized IT owner review the current tenant and plan changes around actual business dependencies.",
    "sections": [
      {
        "h": "Lock the front door first",
        "ps": [
          "Start with multi-factor authentication for the people who can access your mail. Review the owner’s account, administrator accounts, vendor accounts, and the users with delegated access to shared mailboxes. Keep direct sign-in blocked for shared mailbox accounts; people should access them through their own authorized accounts.",
          {
            "text": "Legacy authentication does not support MFA. Have your IT owner verify that legacy authentication is blocked in your tenant and check for any applications or devices that still depend on it before changing settings. Microsoft security defaults provide preconfigured protections. More complex environments may use licensed Conditional Access policies instead. Review the current configuration rather than assuming your tenant is unprotected. This complements the managed email protection in Helm Core.",
            "links": [
              {
                "phrase": "Microsoft security defaults",
                "to": "https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults"
              },
              {
                "phrase": "Helm Core",
                "to": "/helm-core"
              }
            ]
          },
          "Separate your admin accounts from the mailbox someone checks every day. Review whether administrative work and ordinary mail use have appropriately separated access. A compromised privileged account can affect far more than its own mailbox."
        ]
      },
      {
        "h": "Close what attackers do after they get in",
        "ps": [
          "Turn on external-sender tagging so every message from outside the company carries a visible warning. Treat the label as context about the configured sender boundary, not proof that an external message is malicious or an internal message is safe.",
          {
            "text": "Review mail-forwarding rules on a schedule, not just after something goes wrong. Review configured forwarding and relevant mailbox rules with IT. Microsoft documents external-forwarding controls; verify the actual settings and authorized exceptions.",
            "links": [
              {
                "phrase": "Microsoft documents external-forwarding controls",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/outbound-spam-policies-external-email-forwarding"
              }
            ]
          }
        ]
      },
      {
        "h": "Make your own domain hard to fake",
        "ps": [
          {
            "text": "SPF, DKIM and DMARC involve public DNS and the sending platform configuration. They support authentication and policy for the firm’s domain; they do not verify the honesty of every message. Use the DMARC guide to inventory legitimate senders and plan enforcement.",
            "links": [
              {
                "phrase": "DMARC guide",
                "to": "/resources/what-is-dmarc/"
              }
            ]
          },
          {
            "text": "A free public-domain scan can examine public authentication configuration. It cannot inspect tenant policies or verify every internal control.",
            "links": [
              {
                "phrase": "free public-domain scan",
                "to": "/free-scan/"
              }
            ]
          }
        ]
      },
      {
        "h": "Establish the current state before changing it",
        "ps": [
          "Ask IT for the actual tenant, subscriptions, user population, administrator roles and significant integrations. Include independently administered business applications where they affect the workflow. A license list tells you what may be available; configuration evidence tells you what the organization uses.",
          "Record whether security defaults, Conditional Access or another supported arrangement supplies the relevant protection. Do not assume a per-user MFA status alone describes enforcement. Ask the administrator to explain how the policy applies to the account and access path being reviewed.",
          "Preserve a dated baseline and an approved change plan. Identify the business owner who can authorize interruption and the IT owner who implements the change. Avoid asking a non-technical employee to toggle settings from an article while the firm has unreviewed application dependencies."
        ]
      },
      {
        "h": "Review privileged and provider accounts",
        "ps": [
          "List administrative roles and the accounts holding them. Confirm why each privilege is needed, who owns the account and how it is protected. Review provider access alongside employee access. A supplier account may have substantial authority even if it does not appear on the staff roster.",
          "Establish an approved recovery arrangement for administrative access. The firm needs a way to regain control when the usual administrator is unavailable, with appropriate protection and restricted records. Test the supported process through authorized IT, without exposing emergency credentials in an ordinary document.",
          "When a provider changes, include its identities and integrations in the handover. Removing a former contact from the support list does not remove technical access. Record the actual revocation and the owner responsible for verifying it."
        ]
      },
      {
        "h": "Plan authentication around dependencies",
        "ps": [
          "Review applications, devices and services that rely on existing sign-in behavior. A multifunction device, older client or integration may need a supported migration before a policy change. Identify the dependency, current guidance and approved alternative with IT. Keep any temporary exception visible and time bounded.",
          "Pilot significant changes with representative users and harmless work. Confirm the sign-in, recovery and business application experience. Staff should know which prompts are legitimate and how to obtain help. An unexplained authentication rollout can create confusion with the suspicious prompts training asks them to report.",
          "Do not disable one protection while assuming the replacement automatically applies. Have the administrator verify the actual policy state and relevant population. Record the acceptance evidence after the change, including unresolved exceptions and supported fallback arrangements."
        ]
      },
      {
        "h": "Check mail access and forwarding",
        "ps": [
          "Review who can access shared and delegated mailboxes. Business managers approve the need; IT implements the permissions. Include accounts created for old projects and outside support. Confirm the current owner and purpose rather than carrying access forward indefinitely.",
          "For external forwarding, identify the destination, purpose and approving owner. A blanket allow-list should not be the first response to one delivery problem. Check the supported controls and test the legitimate workflow using harmless messages. Preserve the exception and next review date if it remains necessary.",
          "If an unexpected rule or forwarding destination is discovered, have the authorized team investigate rather than simply deleting the symptom. It may be an old approved configuration, an error or evidence relevant to an account incident. Preserve the facts and use the incident process when the evidence warrants it."
        ]
      },
      {
        "h": "Review connected applications and shared files",
        "ps": [
          "Identify applications permitted to access tenant information and their approved purpose. Ask who granted the access, what it permits and how it is removed. An employee departure may not remove every integration, shared identity or independently administered application relationship.",
          "Review a representative client-sharing workflow. Identify the site or folder, internal users, guests and link behavior. Ask the business owner whether the current recipients still need access. Do not assume a broadly shared folder is appropriate because the platform supports that sharing setting.",
          {
            "text": "For AI features connected to organizational documents, examine the data boundary and underlying permissions. Use the document-access guide for that review. A purchased business AI subscription is not blanket approval to process every client record.",
            "links": [
              {
                "phrase": "document-access guide",
                "to": "/resources/ai-access-business-documents/"
              }
            ]
          }
        ]
      },
      {
        "h": "Connect the baseline to recovery and response",
        "ps": [
          {
            "text": "Check recovery for the data the business depends on. Microsoft offers retention, recovery and a native backup product with distinct purposes and scope. The Microsoft 365 backup comparison helps define the decision. Do not rely on the outdated claim that Microsoft offers no backup.",
            "links": [
              {
                "phrase": "Microsoft 365 backup comparison",
                "to": "/resources/microsoft-365-retention-vs-backup/"
              }
            ]
          },
          "Maintain contacts outside the tenant for an incident that affects tenant access. Name the person who can authorize supported account action and the team handling wider business response. Blocking an account, revoking sessions and repairing the business workflow may involve different responsibilities."
        ],
        "table": {
          "caption": "Connect the baseline to recovery and response",
          "headers": [
            "Area",
            "Acceptance evidence"
          ],
          "rows": [
            [
              "Authentication",
              "Relevant policy, account population and recorded exceptions"
            ],
            [
              "Privileged access",
              "Approved roles, account owners and recovery arrangement"
            ],
            [
              "Mail handling",
              "Delegation and forwarding decisions with tested behavior"
            ],
            [
              "Application access",
              "Permitted integrations, owners and removal process"
            ],
            [
              "Recovery",
              "Covered workloads and a usable restore test"
            ],
            [
              "Incident response",
              "Trusted contacts and authorized containment handoff"
            ]
          ]
        }
      },
      {
        "h": "Make the first review produce assigned work",
        "ps": [
          "Start with the important accounts and workflows, then document any broader scope still pending. A review of administrators and email does not establish that every application is covered. Give unknowns and exceptions owners rather than burying them under an overall security score.",
          "Prioritize changes using actual exposure, business consequence and applicable requirements. Some can be completed through routine administration; others need licensing, testing or a separate engagement. Record those dependencies so leadership can make the required decision.",
          {
            "text": "Helm Core supplies defined protection for compatible email, devices and supported identity capabilities. Command adds program ownership, evidence upkeep and IT coordination within written scope. Existing IT retains tenant administration, patching and routine remediation. A tenant-hardening or specialist recovery project requires a separate scope decision. Bring the current baseline and unresolved duties to a fit review rather than assuming a service label includes every Microsoft setting.",
            "links": [
              {
                "phrase": "Helm Core",
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
        "h": "Include one recovery acceptance check",
        "ps": [
          "Choose a harmless sample from an important covered workload and define the requested recovery point and destination. Have the authorized operator carry out the restore and the business owner confirm usability. Record the source, time, action and result. If manual permission repair or reconciliation is required, include that work in the record.",
          "The test should reflect the recovery method actually purchased and configured. A mailbox retention rule, a native recovery feature and a separate backup service can support different tasks. Do not present an export obtained for records discovery as proof that a complete working environment can be restored.",
          "Keep failed steps assigned. If the operator cannot find the needed point, the firm has learned about a specific limitation. Determine whether the issue is coverage, configuration, retention, authorization or the requested scenario. A red result with an owner provides more useful evidence than an unexplained green dashboard."
        ]
      },
      {
        "h": "Record what the public review cannot see",
        "ps": [
          "Public DNS and website checks can supply limited observations, but they cannot inspect internal administrator roles, application grants, sharing decisions or restore tests. Keep the public result separate from the tenant baseline. A missing record may need IT attention; a clean public result should not close the internal review.",
          "For leadership, state the assessed tenant areas and remaining scope. Date the evidence and identify next actions. This makes a staged review understandable without implying that the first week's work established complete coverage of the business."
        ]
      }
    ],
    "takeaway": "Start with MFA, disable legacy authentication, separate everyday and administrator accounts, and check for forwarding rules. Then review the public records that help stop people from impersonating your domain.",
    "lead": [],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true,
    "metaTitle": "Microsoft 365 Security Baseline: Access and Mail | Helm"
  },
  {
    "slug": "managed-awareness-training-vs-diy",
    "title": "Managed cyber security awareness training programs versus DIY: choosing the right path for your SMB",
    "metaTitle": "Managed Awareness Training vs DIY for SMBs | Helm",
    "metaDesc": "Choose awareness training by the business decisions employees need to practice, the work your team can maintain and the evidence you need.",
    "date": "2026-10-06",
    "readMin": 8,
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
      },
      {
        "h": "Design an exercise around a real procedure",
        "ps": [
          "Choose one action before choosing the training format. If staff regularly receive bank-detail changes, define what must happen before anyone edits the payment record. An exercise should let the employee practice that route, including finding the approved contact and recording verification. If the contact list is missing, a reminder to be vigilant cannot repair the process.",
          "Use fictional suppliers, clients and documents. Set boundaries with the business owner and IT so a simulation does not invite employees to upload confidential files, enter working credentials or contact actual customers. A controlled exercise should create a learning opportunity without introducing an avoidable operational problem.",
          "Make the reporting step usable. Staff should know where to send a suspicious message and what to include. The receiver needs a procedure for sorting training messages from real reports. If a participant encounters a genuine threat during the campaign, pause the exercise for that person and route the report through the incident process.",
          "Discuss the result in practical terms. Ask which step was confusing, whether the employee had access to the approved procedure and what the firm will change. The discussion can reveal an unclear instruction or a missing approval route. Treat those findings as process work instead of assuming that a failed exercise proves an employee was careless."
        ]
      },
      {
        "h": "Assign learning by role without creating a maintenance burden",
        "ps": [
          "Keep a common foundation for all staff, then add material for work with different consequences. Finance needs payment verification. IT needs privileged-account and response procedures. Managers need access approvals and escalation responsibilities. Client-facing teams need approved sharing methods and a way to report a mistake quickly.",
          "Begin with a few role groups your firm can maintain. A complicated assignment scheme will drift if nobody updates it when roles change. Record who receives the starter material, who gets additional lessons and who maintains the mapping. Ask a managed vendor how the roster is reconciled and which changes still require the firm's approval.",
          "Include temporary staff and contractors deliberately. Some may use your accounts and handle client records; others may only need a short briefing on a specific process. Determine what access and work they actually have. Do not mark every external person trained because a policy says contractors are included.",
          "Check accessibility and working conditions. A lesson that assumes desktop access may be awkward for staff working from a job site. Allow an approved alternative when someone needs it, and record completion consistently. Translate a technical instruction into the actual screen or contact the employee should use, with IT checking that the instruction remains current."
        ]
      },
      {
        "h": "Read training metrics without overstating the result",
        "ps": [
          "A completion percentage needs a denominator and a date. Suppose a fictional firm assigns a lesson to 40 active employees and 36 finish by the deadline. Completion is 90 percent for that assignment. If five contractors were never assigned, the number does not describe those contractors. Keep exclusions visible so a customer can understand what the record supports.",
          "Simulation results also need context. Compare campaigns cautiously when the message difficulty, audience or reporting method changes. A lower click rate on an easier campaign is not proof that the program improved. A high reporting rate is useful only if reports arrive where they can be reviewed and acted on.",
          "Use a small set of measures your team can explain: assigned population, completion by due date, unresolved follow-up, reports reaching the right route and practice of the chosen procedure. Define what each measure means before presenting it to leadership. Avoid collecting individual results that nobody needs to make a decision.",
          "Separate learning metrics from business outcomes. Training can support better decisions, but the exercise does not establish how many real attacks were prevented or how much financial loss was avoided. Report what was observed and what changed. If evidence is incomplete, keep that limitation in the report rather than filling the gap with a success claim."
        ]
      },
      {
        "h": "Compare the full maintenance cost",
        "ps": [
          "For DIY, list the subscription cost alongside the time needed for roster updates, assignments, support, follow-up and evidence preparation. Ask the named owner whether that work fits their ordinary workload. Cover absences and decide who approves material when the owner leaves the role.",
          "For a managed service, request a written division of work. The provider might operate the platform while your firm still owns role assignments, policy changes and employee discussions. Check whether custom material is included, how many campaigns are covered and how overdue work is escalated. A sample monthly report should show actions as well as percentages.",
          "Review data handling before signing. Training records can contain employee names, email addresses and individual results. Confirm access permissions, exports, retention and the process for removing former staff. Ask how the vendor uses that data and what remains available when the subscription ends. This review is part of buying the service, not a reason to circulate individual scores widely.",
          "Compare proposals over the same population and period. Include onboarding, recurring fees and any separately scoped customization. Do not count all staff time saved as a budget reduction unless the firm can demonstrate that the cost actually changes. Capacity freed for client work can still be useful; describe it as capacity."
        ]
      },
      {
        "h": "Start with one cycle and a review decision",
        "ps": [
          "Before rollout, verify the roster and test the reporting route with IT. Assign one relevant lesson and one harmless practice scenario. Tell participants how to report a concern, who receives the result and where they can get help. The firm should be able to explain the exercise without surprising employees about the use of their data.",
          "After the cycle, review overdue assignments, confusing steps and unresolved reports. Give each process improvement an owner and a completion check. Decide whether your internal owner can maintain the next cycle or whether a defined managed scope would solve a demonstrated workload gap. That decision is more useful than buying a larger library of lessons that nobody has time to administer.",
          "Keep the procedure available after the lesson. An employee should be able to find the reporting contact or payment-verification steps during ordinary work, without reopening an entire course."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "managed-endpoint-protection-rollout",
    "title": "How to Implement Endpoint Security Protection with a Managed Service: Assessment, Rollout, and Ongoing Evidence",
    "metaTitle": "Managed Endpoint Protection: Rollout and Evidence | Helm",
    "metaDesc": "Reconcile eligible devices, pilot the protection, test escalation and keep current coverage evidence. Confirm exclusions before rollout.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "text": "Helm Core includes up to two eligible Windows or Mac workstations per covered user; additional eligible workstations cost $12 per month. Device detection and response is part of its standardized security stack. Servers, phones, tablets and specialized systems require separate written scope.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Helm Command adds program ownership and evidence upkeep to the covered stack, with coordination through your named IT owner. Existing IT keeps patching, administration, procurement and routine remediation. Specialist vendor teams provide continuous monitoring and containment for covered capabilities.",
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
      },
      {
        "h": "Reconcile devices before estimating coverage",
        "ps": [
          "Use more than one inventory source. IT may have a procurement list, a device-management report and an endpoint console with different populations. Compare them by a stable device identifier where possible. Device names can change or be reused, so a name alone may cause a retired laptop and its replacement to appear interchangeable.",
          "Record the device owner, business role, operating system, support status and last reporting time. Identify shared workstations and spare laptops separately. Ask how personal devices are handled when they access company information. If they are outside the managed service, record the approved access arrangement and the business owner accepting that boundary.",
          "Resolve ambiguous entries before declaring a percentage covered. A total of 60 installed agents means little if the inventory contains 70 eligible devices and several agents belong to retired equipment. Define the numerator as the eligible devices currently meeting the agreed acceptance criteria, and the denominator as the agreed eligible population. Report unknown and excluded devices separately."
        ]
      },
      {
        "h": "Make the pilot representative",
        "ps": [
          "Choose devices that reflect the work the firm performs. Include different supported operating systems, remote workers and employees using important specialist applications. A tax practice may need a sample using its preparation software; a law firm may need one using its document system. Use ordinary business tasks and harmless sample files to check compatibility.",
          "Ask IT and the security provider to agree on existing protection before installation. Two security products may have a supported coexistence arrangement, or one may need to be removed under a planned migration. Do not instruct employees to uninstall protection themselves. Have the authorized administrator review vendor guidance, confirm deployment prerequisites and prepare a rollback path.",
          {
            "text": "Microsoft publishes minimum endpoint requirements and platform guidance. Use the documentation for the product being deployed rather than assuming every operating system receives identical capabilities. The provider should identify the functions it will actually use on each eligible platform.",
            "links": [
              {
                "phrase": "minimum endpoint requirements",
                "to": "https://learn.microsoft.com/en-us/defender-endpoint/minimum-requirements"
              }
            ]
          },
          "During the pilot, ask users about application failures, excessive prompts and performance changes. Have IT investigate the specific cause before adding an exception. An exclusion applied to a whole folder or application can affect future detection, so record the rationale and scope. A functioning business application and a functioning security agent are both acceptance requirements."
        ]
      },
      {
        "h": "Define the response boundary in advance",
        "ps": [
          "A provider should explain which actions it can take without waiting for a new approval. Isolation may interrupt an employee's access but limit an incident's spread. Leadership must understand that tradeoff when agreeing to the service. Define any special treatment for devices supporting critical work and document the escalation route for an unavailable contact.",
          "Keep business recovery distinct from containment. A security team that isolates a laptop may not be responsible for supplying a replacement, reinstalling applications or restoring all data. Ask who performs those tasks and whether the cost is included. Employees need one clear instruction for reporting trouble, even when several providers perform the underlying work."
        ],
        "table": {
          "caption": "Define the response boundary in advance",
          "headers": [
            "Event",
            "Decision needed",
            "Owner to identify"
          ],
          "rows": [
            [
              "Device fails to enroll",
              "Repair deployment or record a justified exclusion",
              "Existing IT and the deployment provider"
            ],
            [
              "Device stops reporting",
              "Establish whether it is retired, unavailable or unhealthy",
              "Inventory owner and authorized administrator"
            ],
            [
              "Suspicious activity detected",
              "Investigate within covered capabilities",
              "The named monitoring and response service"
            ],
            [
              "Device isolation considered",
              "Apply the approved containment authority",
              "Authorized responder and business escalation contact"
            ],
            [
              "Device needs rebuilding",
              "Preserve required evidence and restore business use",
              "Existing IT or separately engaged recovery specialist"
            ]
          ]
        }
      },
      {
        "h": "Test the alert route safely",
        "ps": [
          "Arrange a vendor-supported, non-destructive test with authorization from the relevant teams. The purpose is to show that a covered signal reaches the appropriate service, the service handles it and the agreed contact receives the escalation. Do not improvise a malware experiment on a production device or treat one test as proof of every detection rule.",
          "Record the test device, expected behavior, observed event, handling and contact result. If the provider's system treats the sample automatically, distinguish that from an analyst investigation. If a human review is part of the contracted service, ask how the exercise demonstrates that part of the workflow or request the appropriate supporting process evidence.",
          "Check what happens when the first contact does not answer. Test the backup route during the planned exercise, without creating a false emergency. Confirm that contact information is available to the provider and that the firm knows how to reach the service outside office hours. Resolve missing authority before moving the wider population into production."
        ]
      },
      {
        "h": "Expand in controlled groups",
        "ps": [
          "After the pilot meets acceptance criteria, deploy in groups that IT can support. Record which group is scheduled, which users need assistance and which devices remain unresolved. Coordinate changes that affect business applications with their owners. A rushed company-wide installation can leave a large backlog of unhealthy devices even when the deployment system reports that the package was delivered.",
          "At each stage, compare the current inventory with the protection console. Investigate duplicate entries, devices that have not checked in and unexpected exclusions. Require a completed acceptance record for each group. The completion date should reflect the agreed coverage check rather than the date the installer was first pushed.",
          "Prepare staff communication before rollout. Explain what employees may notice, whom to contact and what to do if a device becomes isolated. Avoid overwhelming users with console terminology. They need to know how to keep client work moving through approved support, and how to preserve the situation for investigation when a security event occurs."
        ]
      },
      {
        "h": "Maintain the enrollment and departure process",
        "ps": [
          "Make protection acceptance part of provisioning a new eligible device. Decide who checks enrollment before the device is handed to the employee. Include replacement devices, loaners and new acquisitions. A rollout project ends; the inventory process continues as the business changes.",
          "For a retired device, coordinate endpoint removal with the approved retirement and records process. Do not remove protection merely to clear a stale dashboard entry while the device remains in use. Confirm its disposition and any data-handling requirements. Retain the needed historical evidence in the approved location rather than relying on an active console entry forever.",
          "For periodic reporting, explain uncovered eligible devices and aging exceptions. Show who owns each next action and when it will be reviewed. A useful report helps leadership resolve a specific gap, such as an unsupported device that needs replacement, rather than presenting an unexplained score. For customer answers, preserve the report date and the population behind any coverage statement."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "managed-identity-threat-response",
    "title": "Key capabilities to look for in a managed identity threat detection and response provider",
    "metaTitle": "Managed Identity Threat Response: Buyer Checklist | Helm",
    "metaDesc": "Confirm supported identity platforms, available signals and written response authority. Keep administration, recovery and specialist duties assigned.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "text": "Helm Core includes supported identity protection inside its standardized security stack. Confirm the relevant platform, account coverage and containment authority during fit review. Specialist vendor teams provide continuous monitoring and containment behind covered capabilities; Helm does not staff its own 24/7 SOC.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Helm Command adds risk, roadmap, evidence upkeep, bounded questionnaire responses and program coordination. It does not promise universal session revocation, unrestricted tenant administration or forensic remediation. Existing IT retains routine administration and remediation.",
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
      },
      {
        "h": "Ask what the provider can actually observe",
        "ps": [
          "Start with an identity inventory: primary directory, independent applications, privileged accounts, guests and relevant application identities. Confirm which of these the service supports. A proposal describing protection for your main email platform may leave specialist applications outside the monitored population.",
          "Request a data-source map. Ask which sign-in records, risk signals or application events reach the provider, how quickly they become available and which require additional licensing. Mark unavailable data rather than implying that a single integration provides a complete account history.",
          "Ask how coverage is checked after onboarding. An enabled connector does not establish that every intended account is included or that the necessary records are arriving. The provider should explain how it detects a collection problem and which contact receives the resulting exception.",
          "Keep technical and business context separate. The provider can review a suspicious event, while the firm may need to confirm whether travel, a new integration or an approved role change explains it. Establish a trusted route for that context that does not rely entirely on a potentially compromised account."
        ]
      },
      {
        "h": "Distinguish detection, investigation and action",
        "ps": [
          "A detection can identify unusual or risky activity. Investigation evaluates the available evidence and uncertainty. Action uses permitted controls to reduce exposure or support recovery. Ask the provider to show where each step occurs and which are automated versus reviewed by an analyst.",
          "Use a fictional account event in the demonstration. Ask what triggered it, what additional records are available and how the provider determines the next step. If the evidence is inconclusive, ask how that uncertainty is recorded and escalated rather than forcing the event into a confirmed-compromise category.",
          "Clarify response commitments. Monitoring coverage, acknowledgment, investigation and containment are different measures. The contract should say what a stated response time refers to and which conditions affect it. A fast acknowledgment is not the same as resolution of the account event.",
          "Ask who receives an escalation when the primary contact is unavailable. Leadership should know when it must decide and what authority the provider already has. Keep emergency contacts current and test a harmless notification route before relying on it during an event."
        ]
      },
      {
        "h": "Define containment authority and its limits",
        "ps": [
          "Write the actions the provider may take on supported accounts and the conditions for taking them. Depending on platform and agreement, a service might restrict access, require additional verification or hand the action to IT. Avoid assuming that a product capability is automatically an authorized managed-service action.",
          "Discuss session handling explicitly. Different applications and authentication arrangements may react differently to an account restriction or credential change. Ask what is checked, what may persist and who addresses independent applications. A password reset alone should not support a claim that every session and permission has ended.",
          "Include business continuity in the route. A restricted account can interrupt urgent work. Identify who approves an alternative working method and who confirms that access can safely return. Do not weaken a response rule ad hoc because the affected employee is senior or handling an important deadline.",
          "Ask how the service avoids restoring access without resolving the identified concern. Recovery may require IT changes, verification of credentials or specialist work outside the contract. The response record should state what was done and what remains open, with ownership assigned."
        ]
      },
      {
        "h": "Evaluate privileged, guest and application identities",
        "ps": [
          "Privileged accounts deserve a separate coverage question because they can make broader changes. Confirm whether their signals are included, how important events are escalated and which recovery procedures exist. Do not assume ordinary-user coverage automatically includes every administrator or emergency account.",
          "Guests can hold access to shared workspaces without belonging to the employee roster. Ask who reviews their permissions and who removes them when collaboration ends. That is an access-governance responsibility even when the threat service can observe some of their activity.",
          "Application identities and integrations need technical owners. They may use permissions or credentials that differ from employee sign-ins. Ask whether the service supports the relevant identity type and signals. Where it does not, record the retained review and response task with IT.",
          "Keep these distinctions in questionnaire answers. A supported account-protection service cannot justify a universal claim about all identities unless the population and evidence support it. Describe exclusions rather than treating them as a minor detail hidden in a contract attachment."
        ]
      },
      {
        "h": "Read a sample report as an operating record",
        "ps": [
          "A useful event record identifies the affected account, observed signal, reviewer, time, permitted action and escalation. It distinguishes confirmed facts from unresolved questions. Ask for a fictional example so the firm can assess the record without exposing another customer's information.",
          "Monthly reporting should also help reveal coverage problems and outstanding work. Ask whether it shows unsupported accounts, collection failures or administrative actions awaiting IT. A count of alerts alone does not establish whether the service population remains correct.",
          "Confirm access and retention for detailed records. Identity events can contain personal and organizational information. Limit distribution to people who need it, with summaries for broader leadership review. Agree on secure transfer when another responder or counsel requires relevant records.",
          "Check exit arrangements. Your firm should know how to obtain its permitted reports, transfer integrations and revoke provider access at the end of the engagement. Preserve records needed under the firm's own policy without keeping an old provider connected indefinitely."
        ]
      },
      {
        "h": "Test the handoff and maintain it",
        "ps": [
          "Before relying on the service, run a harmless tabletop with the firm contact, provider and IT. Walk through notification, authorized restriction, evidence handling and restoration. Identify steps that depend on a separately engaged incident responder or legal adviser.",
          "Give each uncovered step an owner. If the test reveals that nobody can administer an independent application after hours, resolve that responsibility directly. More identity alerts will not supply the missing authority. Record a realistic route and any remaining limitation.",
          "Review the map when the firm changes platforms, acquires accounts or adds integrations. A well-defined service still needs an accurate population and current contacts. Choose a provider that can explain those boundaries and demonstrate a usable response path for the coverage it actually offers.",
          "For recurring false positives, ask how the provider reviews an exception and limits its scope. A broad suppression can hide a later event with different facts. Record who approves the change, what activity it affects and when it will be reconsidered. Keep ordinary troubleshooting separate from authority to disable an important detection."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "measure-ai-time-savings",
    "title": "Is AI saving your team time? Count the checking and corrections",
    "metaTitle": "Measuring AI Time Savings: Review and Corrections | Helm",
    "metaDesc": "Compare the whole task with and without AI, including preparation, checking, corrections, software costs, and maintenance. Includes a hypothetical example.",
    "date": "2026-10-01",
    "readMin": 8,
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
        ],
        "figure": {
          "src": "/images/resources/ai-time-savings-example.svg",
          "alt": "Illustrative monthly staff time: 600 minutes without AI versus 400 minutes of AI-assisted checklist work plus 60 minutes of maintenance, for a total of 460 minutes.",
          "caption": "Hypothetical example using the assumptions in this article. The 140-minute difference is staff capacity, not automatically cash savings. Setup and software fees are separate."
        }
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
      },
      {
        "h": "Use a complete-task measurement sheet",
        "ps": [
          "Record an identifier for each task, the input type, the person doing the work and whether the result was accepted. Avoid storing confidential task content in a measurement sheet when an identifier and approved category are sufficient. Record the timing fields consistently so different employees do not count different parts of the job.",
          "Use active staff minutes for labor calculations. Track elapsed turnaround separately if response speed matters to the business. If a task takes two days because it waits for approval but uses twenty minutes of staff time, those are different measures with different possible improvements."
        ],
        "table": {
          "caption": "Use a complete-task measurement sheet",
          "headers": [
            "Field",
            "What to capture",
            "Why it matters"
          ],
          "rows": [
            [
              "Preparation",
              "Finding, checking and arranging approved inputs",
              "Work can move upstream without disappearing"
            ],
            [
              "Production",
              "Manual work or AI interaction, including retries",
              "A successful final attempt may hide earlier effort"
            ],
            [
              "Review",
              "Checking facts, completeness and source references",
              "Fast drafting can require expensive supervision"
            ],
            [
              "Correction",
              "Repairing the output and checking the repair",
              "Quality failures consume staff capacity"
            ],
            [
              "Handoff",
              "Formatting, approval and delivery",
              "The task ends when the result is usable"
            ],
            [
              "Maintenance",
              "Updating instructions, sources and tests",
              "Recurring upkeep changes the monthly benefit"
            ]
          ]
        }
      },
      {
        "h": "Compare like work and include failures",
        "ps": [
          "Choose tasks with comparable scope and difficulty. Comparing an easy AI-assisted example with the hardest manual case will exaggerate the benefit. If the task varies substantially, group routine and exception cases before reporting their results.",
          "Keep failed attempts in the sample. If a generated draft is abandoned and the employee completes the task manually, count both the attempted AI work and the manual completion. The accepted output still consumed that time. Mark the reason for rejection so the team can see whether the problem is correctable.",
          "Record changes made during testing. Staff may improve a template, clean a source folder or remove an unnecessary approval. Those changes can reduce time independently of AI. Keep them visible and, where practical, compare the improved manual process as well.",
          "Avoid presenting a small pilot as a universal productivity finding. State the number and type of examples, the people involved and the observation period. Explain which work was not tested. Readers should be able to see the limits before deciding whether the result applies to their team."
        ]
      },
      {
        "h": "Calculate the full recurring cost",
        "ps": [
          "The basic comparison is baseline task volume multiplied by baseline staff time, versus the assisted task volume multiplied by assisted staff time, plus maintenance. Convert minutes to hours before applying labor-cost assumptions. Include each role separately when their costs differ.",
          "Add the software cost attributable to the workflow. If a license supports several tasks, use a stated allocation method instead of quietly assigning the full fee or none of it. Include usage-based charges and any incremental storage or integration costs that actually apply.",
          "Keep one-time setup separate from recurring operation. Training, configuration, initial source cleanup and external assistance may make the first month more expensive even when the later process is cheaper. Show that distinction so leadership can decide whether the expected duration of use justifies the setup cost.",
          "Do not call an assumption a measured result. In the checklist illustration above, the time, labor rate, software allocation and setup amount are hypothetical. In a real pilot, label which fields were observed and which were estimated. A useful spreadsheet makes those differences visible rather than burying them in a single return percentage."
        ]
      },
      {
        "h": "Test how sensitive the decision is",
        "ps": [
          "Change the assumptions that are most uncertain. What if monthly volume is lower, review takes longer or maintenance increases after a procedure update? Recalculate the result using those alternatives. If a modest change removes the expected benefit, the decision needs more evidence before expansion.",
          "Consider the reviewer’s availability. A process may save an administrator time while consuming a partner’s scarce attention. Even if the modeled labor cost appears acceptable, the firm may prefer to preserve the partner’s capacity for work that cannot be delegated.",
          "Check whether the tool reduces errors or creates a new review burden. Use a defined error category and a consistent acceptance standard. Do not assign a financial value to every prevented mistake unless the firm has a defensible basis for that estimate. Reporting fewer corrections can be useful without pretending to know the cost of an avoided incident.",
          "Look at the distribution as well as the average. A workflow with several easy successes and one long failure can have acceptable average time while being unreliable for a deadline-sensitive task. Explain those exceptions in the decision record."
        ]
      },
      {
        "h": "Decide what to do with the freed capacity",
        "ps": [
          "Name the work that will use any time released. It might be responding to clients sooner, reducing a backlog or completing a recurring administrative task that currently slips. Measure that second outcome separately from the drafting improvement.",
          "Cash savings require an actual expense change. Revenue requires suitable demand, completed work and collection. A firm should not count the same freed hour as both avoided payroll and new billable income. Keep the business mechanism explicit before assigning a dollar benefit.",
          "Set the next review date if the workflow continues. Compare results after staff training settles and after relevant tool or source changes. Preserve the manual procedure so a failed update does not force the team to accept poor output merely because the old process has been lost."
        ]
      }
    ],
    "lead": [],
    "updated": "2026-10-07",
    "readingLayout": true
  },
  {
    "slug": "mfa-methods-compared",
    "title": "MFA Methods Compared: SMS, TOTP, Push and Passkeys",
    "metaTitle": "MFA Compared: SMS, TOTP, Push, and Passkeys | Helm",
    "metaDesc": "Compare MFA phishing resistance, daily use, and account recovery. Plan SMS, TOTP, push, passkeys, and security keys with your existing IT provider.",
    "date": "2026-07-17",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "An authenticator app can generate a code, request approval or hold a passkey. Those are different sign-in methods with different protections. When reviewing multifactor authentication with your IT provider, ask which method is enforced on each account, how people recover access and whether weaker alternatives remain available.",
    "takeaway": "Prioritize high-impact accounts, distinguish the actual authentication methods and test recovery before enforcement. Passkeys and FIDO2 keys provide phishing-resistant sign-in where supported. Remove or document weaker paths so the rollout’s protection matches the policy.",
    "consultation": {
      "title": "Review your account protection.",
      "sub": "Discuss MFA coverage, recovery, and responsibilities with Helm and your existing IT provider.",
      "label": "Discuss account protection",
      "to": "/contact/?intent=findings-call&src=article%20mfa-methods-compared"
    },
    "sections": [
      {
        "h": "Start with the accounts and the work they permit",
        "ps": [
          "List the systems that matter to the business: email, cloud documents, payroll, finance, remote access and administrator portals. Identify the account owner and the effect of unauthorized access. Prioritize administrators and people who can approve payments, alter customer instructions or access sensitive records.",
          "Ask IT to distinguish enrollment from enforcement. Someone registering an authenticator does not prove that every sign-in path requires it. Review the policies, exclusions and applications that accept other methods. Confirm whether an account can choose a weaker alternative after a stronger method has been registered.",
          "Record shared accounts and service identities separately. A human MFA rollout does not automatically solve applications that connect without an interactive person. Those access paths need an appropriate technical review. Do not remove a working integration blindly, but do assign an owner and a plan for any unsupported arrangement."
        ]
      },
      {
        "h": "SMS codes",
        "ps": [
          {
            "text": "SMS sends a code to a phone number. It is familiar, but control of that number becomes part of account security. Microsoft classifies SMS as a phishable authentication method: an attacker can collect or relay the code through a fraudulent interaction. Microsoft authentication overview.",
            "links": [
              {
                "phrase": "Microsoft authentication overview",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/overview-authentication"
              }
            ]
          },
          "Consider the operational dependencies before using it. Employees change numbers, travel where service is unreliable and replace phones. A number may be personal rather than company-managed. Ask how the organization removes an old number, verifies a new one and avoids sending recovery information to a departed employee.",
          "SMS may remain a supported option in a particular application while a stronger method is introduced. Record why that exception exists and when it will be reviewed. Avoid describing it as equivalent to phishing-resistant authentication simply because both satisfy an MFA prompt.",
          "For high-impact accounts, ask the platform owner which stronger supported method is available. The answer may require a license, policy or application change. Get that information before committing leadership to a rollout date."
        ]
      },
      {
        "h": "Authenticator-generated TOTP codes",
        "ps": [
          {
            "text": "Time-based one-time passwords, or TOTP codes, are generated from a registered secret and the time. They are different from push notifications. A user opens the app and enters the displayed code. Microsoft’s OATH token documentation describes the mechanism and supported options.",
            "links": [
              {
                "phrase": "OATH token documentation",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-oath-tokens"
              }
            ]
          },
          "A generated code does not depend on receiving a text message, but it can still be entered into a fraudulent sign-in page. TOTP is not phishing-resistant. Staff should begin sign-in through a known application or established address rather than trusting a login request because it asks for an authenticator code.",
          "The enrollment secret and recovery codes need careful handling. Do not place them in a broadly accessible document or email them around the team. Agree where authorized recovery information belongs and who can access it. Copying a secret into several places may make recovery convenient while creating uncontrolled credentials.",
          "Before replacing a phone, follow the app and account provider’s supported transfer procedure. Test access on the replacement device before wiping the old one. If a phone is lost, use the documented recovery process rather than asking a colleague to share access to their own account."
        ]
      },
      {
        "h": "Push approvals and number matching",
        "ps": [
          "Push authentication asks the user to approve a request on a registered device. Unsolicited prompts should be rejected and reported. A person who did not initiate the sign-in should not approve a notification simply to make repeated requests stop.",
          {
            "text": "Number matching asks the person to connect the approval to the initiating sign-in. It reduces accidental approval, but it is not phishing-resistant. The actual experience can vary by application and device. Microsoft documents specific same-device behavior for mobile apps, so test the applications your staff use. Microsoft number-matching guidance.",
            "links": [
              {
                "phrase": "Microsoft number-matching guidance",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match"
              }
            ]
          },
          "Give staff a clear response to an unexpected prompt: deny it, avoid interacting with the accompanying message and report the time and account involved. Your support team should know who investigates repeated requests. Do not leave employees deciding whether a notification was legitimate based only on the caller’s claimed identity.",
          "Also test availability. A person may have a working laptop but a phone without connectivity. A mobile restriction or replacement device can interrupt approval. Build the approved recovery route into the rollout rather than creating an informal fallback after the first lockout."
        ]
      },
      {
        "h": "Passkeys and FIDO2 security keys",
        "ps": [
          {
            "text": "Passkeys use public-key cryptography bound to the legitimate service. That provides phishing-resistant sign-in because a lookalike site cannot collect a reusable credential for the real service. Microsoft documents device-bound and synced passkey options, subject to provider support and organizational policy. Microsoft passkey documentation.",
            "links": [
              {
                "phrase": "Microsoft passkey documentation",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passkeys-fido2"
              }
            ]
          },
          "A user normally unlocks a passkey with a PIN or biometric check. A separate security key can work across compatible devices. Test the relevant browsers, workstations and mobile devices, including physical connector or NFC requirements. A supported method in one application does not establish support across every application the employee uses.",
          "Choose the storage arrangement deliberately. A device-bound credential and a credential synced through a provider account have different recovery dependencies. Ask who controls the provider account, which devices may hold credentials and what happens when employment ends. Keep personal convenience and business access governance in the same discussion.",
          "Register acceptable backup methods before an employee needs them. If a security key is lost, the support team should follow a verified process and remove the lost credential as appropriate. A spare key sitting in an uncontrolled drawer is an asset-management problem as well as a recovery arrangement.",
          "Phishing resistance protects the authentication step. It does not make a compromised endpoint trustworthy, prevent every session theft or validate a payment request after sign-in. Continue the other controls around devices, permissions and business approvals."
        ]
      },
      {
        "h": "A practical comparison",
        "ps": [
          "Use the table to start a deployment conversation. It is not a product ranking detached from your environment. Your IT provider should confirm support, policy enforcement and recovery for the actual accounts in scope."
        ],
        "table": {
          "caption": "A practical comparison",
          "headers": [
            "Method",
            "Phishing-resistant?",
            "Daily dependency",
            "Recovery issue to plan"
          ],
          "rows": [
            [
              "SMS",
              "No",
              "Access to the registered number",
              "Number replacement and verified resets"
            ],
            [
              "TOTP code",
              "No",
              "Registered authenticator or token",
              "Protected secrets and device transfer"
            ],
            [
              "Push with number matching",
              "No",
              "Registered device and supported interaction",
              "Lost phone, connectivity and re-registration"
            ],
            [
              "Passkey or FIDO2 key",
              "Yes, for the supported sign-in",
              "Compatible credential, device and application",
              "Backup credential and provider-specific recovery"
            ]
          ]
        }
      },
      {
        "h": "Treat recovery as a security decision",
        "ps": [
          "Document how support verifies a locked-out employee. An incoming caller’s knowledge of a name, job title or manager is not sufficient by itself. Use an approved process that can establish identity through trusted records and the appropriate authorization.",
          "Limit who can reset methods and review those actions. A reset can change the person who controls future sign-ins. Retain enough evidence to investigate an unexpected change without collecting unnecessary sensitive information in the ticket.",
          "Emergency administrator access needs its own plan. Identify the accounts, permitted use, protection and review process with your IT provider. Test the arrangement safely. An account created for emergencies should not become the everyday workaround for policies that users find inconvenient.",
          "Practice a lost-phone or lost-key scenario before broad enforcement. Confirm the authorized person can regain access and that an unauthorized requester cannot obtain a reset by applying pressure. Record gaps, correct them and repeat only the affected part of the test."
        ]
      },
      {
        "h": "Pilot with representative users",
        "ps": [
          "Select a small group covering the business’s device and application combinations. Include an administrator, a payment approver, an ordinary office user and a remote or mobile user where relevant. These are suggested roles for coverage, not a required pilot size.",
          {
            "text": "Microsoft recommends planning and piloting phishing-resistant authentication rather than relying on registration alone. Its deployment prerequisites provide platform-specific considerations. Use that guidance alongside your own application inventory.",
            "links": [
              {
                "phrase": "deployment prerequisites",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-plan-prerequisites-phishing-resistant-passwordless-authentication"
              }
            ]
          },
          "Test enrollment, ordinary sign-in, replacement devices, supported backup methods and offboarding. Log the exceptions with their business impact. If a critical application cannot use the planned method, identify the alternative protection and the person accepting that exception before the wider rollout.",
          "Communicate the expected prompts and support route in plain language. Staff need to know what they will do differently and where to get help. Avoid issuing a policy change without enrollment time or help-desk coverage, then allowing informal exceptions to compensate for the disruption."
        ]
      },
      {
        "h": "Measure enforcement and exceptions",
        "ps": [
          "Track the accounts in scope, those with the required method enforced and those with documented exceptions. Separate administrators from ordinary users so high-impact gaps are visible. State the measurement date and the systems included.",
          "Review method resets, unexplained prompts and applications that still accept weaker authentication. An enrollment percentage alone hides those details. The useful leadership report explains what remains exposed, who owns the next action and when the exception will be reconsidered.",
          "Revisit the inventory after staff changes, acquisitions, new applications or changes in device policy. MFA is maintained through account lifecycle work. Your existing IT provider should remain involved in administration and policy changes; agree the security review responsibilities with Helm if managed identity protection is in scope."
        ]
      },
      {
        "h": "What a public scan cannot verify",
        "ps": [
          {
            "text": "Helm’s free public domain scan reviews public email and web configuration. It does not sign in to your tenant or establish internal MFA enrollment, enforcement, recovery or coverage. Those questions require an authorized account and policy review.",
            "links": [
              {
                "phrase": "free public domain scan",
                "to": "/free-scan/"
              }
            ]
          }
        ]
      }
    ],
    "lead": [
      "For a business owner, the decision includes everyday use and recovery as well as security. A method that staff cannot enroll or use on supported devices will produce exceptions. A strong method with an easy-to-abuse reset procedure leaves a different opening. Plan both before enforcing a change across the company."
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "microsoft-365-retention-vs-backup",
    "title": "Microsoft 365 Native Retention vs Third-Party Backup: Which Is Right for Your Small Business",
    "metaTitle": "Microsoft 365 Retention vs Backup for SMBs | Helm",
    "metaDesc": "Microsoft offers retention, recovery and native backup. Compare workload coverage, restore requirements and operating duties before choosing a service.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "text": "Helm Core includes cloud productivity backup within its defined protection stack. Covered Microsoft workloads, restore responsibilities and test duties must be confirmed in the service order. It does not mean every Microsoft 365 asset is backed up or that every recovery task is included.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Helm Command adds evidence upkeep, roadmap ownership and coordination with the named IT owner. Existing IT retains backup operations outside covered services, routine administration and remediation. Specialist recovery work needs separate written scope.",
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
      },
      {
        "h": "Start with the recovery event",
        "ps": [
          "A deleted email, an overwritten spreadsheet and widespread changes to a document site are different recovery problems. Write down the event you need to handle before comparing products. Identify the affected business process, the data owner and how much disruption the firm could tolerate. Ask what usable recovery would look like to the person who must resume client work.",
          "For a deleted client file, that may mean finding a particular earlier version and returning it with the right access. For a damaged site, it may mean coordinating a broader recovery and reconciling work completed after the selected point. For an employee departure, it may mean retaining the required business records while transferring ownership. One successful file recovery does not establish that all three scenarios are covered.",
          "Create a workload map using actual tenant records. Include active and shared mailboxes, OneDrive accounts, SharePoint sites and the applications that rely on them. Identify other information separately: business application databases, local files, identity configuration and records held in external services. Where a product does not cover a workload, name the alternative recovery method or record the gap. A count of licensed users is not a complete data inventory."
        ]
      },
      {
        "h": "Separate preservation from restoring operations",
        "ps": [
          "Retention may serve legal, records-management or business requirements. Restoration serves the immediate question of getting usable work back. Those purposes overlap, but they are not interchangeable. A preserved copy may require a particular search or export process; a restored operational copy may not satisfy a preservation requirement. The responsible records adviser and IT owner should approve their respective requirements.",
          {
            "text": "Microsoft's retention documentation describes preservation and deletion behavior. Use it to verify the configured feature, then check the tenant's actual settings. Do not infer that an unconfigured policy protects your data merely because the subscription offers it. Similarly, a recovery feature needs the required setup, permissions and covered data before an operator can rely on it.",
            "links": [
              {
                "phrase": "retention documentation",
                "to": "https://learn.microsoft.com/en-us/purview/retention"
              }
            ]
          }
        ],
        "table": {
          "caption": "Separate preservation from restoring operations",
          "headers": [
            "Capability",
            "Question it helps answer",
            "Question still to test"
          ],
          "rows": [
            [
              "Retention policy or label",
              "Which content should be retained or deleted under a configured rule?",
              "Can the business restore the needed information to a usable working location?"
            ],
            [
              "Native recovery feature",
              "Can an administrator recover this supported item after this event?",
              "What limits, prerequisites and recovery windows apply?"
            ],
            [
              "Microsoft 365 Backup",
              "Can the configured service recover a covered workload from an available point?",
              "Does the selected restore method meet the firm's scenario and operating needs?"
            ],
            [
              "Third-party backup",
              "What supported data and recovery options does this provider offer?",
              "Are enrollment, access, restoration and exit arrangements verified?"
            ]
          ]
        }
      },
      {
        "h": "Evaluate native and third-party backup on the same basis",
        "ps": [
          {
            "text": "Microsoft documents a dedicated Microsoft 365 Backup service. Evaluate it alongside third-party options using the same scenarios. Avoid a comparison in which one product is judged on its best supported workload and the other is judged on an unrelated edge case. Request current documentation for the proposed configuration and capture the assumptions in the decision record.",
            "links": [
              {
                "phrase": "Microsoft 365 Backup service",
                "to": "https://learn.microsoft.com/en-us/microsoft-365/backup/backup-overview"
              }
            ]
          },
          "For each option, examine recovery points, protected workloads, restore granularity, administrative access and billing. Ask how the service discovers new mailboxes or sites and whether an administrator must approve them. Determine how it handles inactive accounts and changes in licensing. A firm can purchase a capable product yet leave an important new site outside coverage if enrollment duties are unclear.",
          "Also ask what the provider means by independence. Where is recovery data stored? Which identities can administer it? Can a compromise of the production administrator also affect recovery controls? These are evaluation questions, not an assumption that any particular architecture is immune to compromise. Request the current security and recovery documentation, then identify the remaining failure modes that matter to your firm."
        ]
      },
      {
        "h": "Design a restore test that demonstrates usability",
        "ps": [
          "Select non-sensitive sample data from a representative covered workload. Give the operator a clear recovery request: the item, approximate time, requested destination and business approver. Record how the operator finds the available recovery point and confirms that the request is authorized. Avoid using a privileged administrator's own sample as the only test if ordinary business requests follow a different process.",
          "After restoration, the business owner should open the returned content and verify what matters. Does the file contain the expected information? Can the intended users access it? Are important versions or metadata present where required? Does the chosen destination avoid overwriting good current work? Record a failed step as a finding rather than declaring success because the console reports completion.",
          "Measure elapsed recovery time separately from hands-on labor. Waiting for authorization, locating the right point, restoring data and checking the result are different components. This distinction helps identify whether the bottleneck is a product limitation, an operating decision or missing information. An advertised restoration speed cannot tell the firm how quickly its own request will be authorized and verified."
        ]
      },
      {
        "h": "Protect recovery decisions from everyday access",
        "ps": [
          "Name the people permitted to request a restore and the people permitted to perform it. They may be different. A restore can expose old content or replace current content, so permission to use a shared site should not automatically become permission to restore its historical contents. Keep a record of the request, authorization, operator and result.",
          "Review administrative access when staff or providers change. Ask how recovery duties continue if the usual operator is unavailable. Keep support and escalation contacts accessible outside the affected tenant. Test the agreed contact route during a planned exercise. A recovery plan stored only in the account that has just been locked out creates an avoidable dependency."
        ]
      },
      {
        "h": "Make the purchasing record specific",
        "ps": [
          "The decision record should name the covered workloads, recovery scenarios, selected service, responsible operator and outstanding exceptions. Attach the actual test evidence and current commercial terms. Record any difference between the firm's target and the capability demonstrated in the pilot. A known limitation with an owner is more useful than a blanket statement that the firm is fully backed up.",
          "Review that record after a new application, acquisition, substantial site change or provider transition. Confirm that the service order still matches the environment. Before cancelling a service, agree on data access, any required export, administrative handover and the date at which recovery access ends. A smooth move requires those decisions while the current service is still available.",
          "For leadership, report coverage and restore evidence in plain language. State which important workloads are covered, which scenario was tested and what remains unresolved. Do not turn a successful job count into a claim that every business recovery will succeed. The evidence should support a bounded answer about the configured service and the scenarios you have actually examined."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "outlook-email-encryption-options",
    "title": "S/MIME vs Office 365 Message Encryption vs TLS: Choosing the Right Outlook Encryption for Your Company",
    "metaTitle": "Outlook Encryption: S/MIME, Purview and TLS | Helm",
    "metaDesc": "Choose Outlook encryption around recipient access and required protection. Have existing IT verify licensing and test the full exchange.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "ordered": false
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
      },
      {
        "h": "Define what you are trying to protect",
        "ps": [
          "Start with the business exchange, not the setting in Outlook. Who is the sender? Who is the intended recipient? Is the attachment a routine invoice, a tax return, a health record or information subject to a contractual restriction? Does the recipient need to edit it, forward it to a colleague or retain it in a matter file? These questions identify the access and handling requirements that a technical control must support.",
          "Encryption cannot correct a recipient selected from the wrong autocomplete entry. A well-protected message sent to the wrong authorized address still creates a business problem. Use a recipient confirmation step for sensitive exchanges, especially the first message to a new client or a thread involving several outside parties. Agree on the approved address through a trusted channel before sending the actual document.",
          "Likewise, a password written in the same email as an attached protected file should not be treated as a separate verification channel. Decide how the recipient receives any access information, who can help when access fails and what records the firm needs to retain. Give employees a specific procedure they can follow during a deadline, rather than telling them simply to encrypt sensitive mail."
        ]
      },
      {
        "h": "Compare the operational burden",
        "ps": [
          "This is an operating comparison, not a ranking of cryptographic strength. The appropriate choice depends on the required protection and a workflow the firm can maintain. A method that staff repeatedly bypass because external recipients cannot open it needs investigation. Making access easier should mean fixing the approved workflow, not quietly dropping the protection.",
          {
            "text": "Microsoft distinguishes these encryption methods in its email encryption guidance. Keep that product description separate from your own conclusions about client obligations. The person responsible for the engagement should document why the chosen exchange is appropriate, while IT confirms that the proposed technical behavior actually occurs.",
            "links": [
              {
                "phrase": "email encryption guidance",
                "to": "https://learn.microsoft.com/en-us/purview/email-encryption"
              }
            ]
          }
        ],
        "table": {
          "caption": "Compare the operational burden",
          "headers": [
            "Method",
            "Decision to make",
            "Operating work to assign"
          ],
          "rows": [
            [
              "TLS",
              "Whether the connection to a particular partner must meet an enforced transport requirement",
              "Configure the connection, monitor failures and decide the approved fallback"
            ],
            [
              "Purview Message Encryption",
              "Which recipients and messages need supported message protection",
              "Confirm licensing, policy behavior, recipient access and permitted restrictions"
            ],
            [
              "S/MIME",
              "Whether the exchange requires certificates and compatible recipients",
              "Manage certificate issuance, renewal, keys, support and departure procedures"
            ],
            [
              "Approved client portal",
              "Whether a controlled document exchange better fits the task",
              "Manage invitations, permissions, access expiration and the authoritative document copy"
            ]
          ]
        }
      },
      {
        "h": "Build a realistic recipient pilot",
        "ps": [
          "A hypothetical accounting practice might send test messages to three outside recipients: someone using a personal webmail account, a client using Outlook at another company and a client who opens mail primarily on a phone. Give each a harmless sample attachment and ask them to complete the actual task. Opening the message is only the first part of the test. They also need to locate the file, read it, reply and understand where the completed document should go.",
          "Record what each recipient sees. An employee should be able to explain the sign-in or passcode step without asking the client to send a password or a screenshot containing confidential information. Provide a support route for failed access. Confirm whether the recipient needs an account, whether the invitation can expire and whether the chosen device supports the workflow. The results should guide the instructions given to staff and clients.",
          "Include a forwarding test only with approved test accounts. If a proposed restriction matters to the business, test that specific restriction on the selected message type. Do not infer that every attachment remains under the sender's control because the original message carried a protection label. A recipient can also take notes or photograph visible information. Plan the exchange around an authorized recipient and an appropriate use of the information."
        ]
      },
      {
        "h": "Understand revocation before relying on it",
        "ps": [
          {
            "text": "Microsoft describes external recipient experiences and additional capabilities in the Purview Message Encryption overview. Some advanced controls depend on the licensed feature and how the recipient accesses the protected message. A statement that the firm can revoke any email after delivery is too broad. Have IT demonstrate the exact scenario before making it part of an incident procedure or a client promise.",
            "links": [
              {
                "phrase": "Purview Message Encryption overview",
                "to": "https://learn.microsoft.com/en-us/purview/ome"
              }
            ]
          },
          "Document the difference between withdrawing supported access and recovering information already read, copied or downloaded. If a message goes to an unintended recipient, follow the firm's incident process even when an access control is available. Preserve the delivery information, attempt the supported containment action and have the responsible adviser assess the disclosure. A successful technical action does not settle every business or notification question.",
          "The same discipline applies to expired certificates and lost keys. Ask who owns certificate renewal, who receives advance warnings and what happens to old protected messages when an employee leaves. Test access to a retained sample under the approved succession arrangement. Keep recovery duties with the authorized administrator, with access limited to the people who need them."
        ]
      },
      {
        "h": "Give staff a short operating rule",
        "ps": [
          "Translate the configuration into a decision employees can use. For example: client tax documents go through the approved exchange; the recipient address is confirmed before the first send; a failed protection step goes to the named support contact; and staff use the approved alternative while the issue is resolved. This is an illustrative rule, not a universal legal requirement. Your actual rule should reflect the firm's data, clients and engagement terms.",
          "Separate routine support from a suspected disclosure. A client who cannot open a test file needs assistance. A confidential attachment sent to the wrong person needs an incident decision. Employees should know which contact handles each situation and what information to provide. Avoid requiring them to diagnose encryption technology before asking for help."
        ]
      },
      {
        "h": "Keep evidence that answers the real question",
        "ps": [
          "A useful record contains the selected method, licensed population, policy scope, pilot date and tested recipient scenarios. Include the business approval and any unresolved exceptions. Recheck the workflow after a meaningful change, such as a different mail client, licensing change, new recipient population or new protection policy. Review frequency should follow the business requirement and the rate of change rather than an unsupported claim that every organization must test on one schedule.",
          "If a client questionnaire asks whether sensitive messages are encrypted, explain the relevant scope and exceptions. Saying that the firm uses Microsoft 365 does not answer that question. A supported answer describes which exchanges receive which protection, how employees select the workflow and who verifies its operation. This makes the answer useful to the client and defensible for the firm."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "password-managers-small-teams",
    "metaTitle": "Password Managers vs Browser Passwords for Small Teams | Helm",
    "title": "Password Managers for Small Teams: What a Business Vault Adds",
    "metaDesc": "Compare business password vaults and browser storage. Review shared access, unique credentials, MFA, recovery and offboarding before rolling out a tool.",
    "date": "2026-07-14",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A small team may store shared passwords in a browser, spreadsheet or message thread because someone needs quick access to a vendor portal. The arrangement becomes difficult to control when that person leaves, the password is reused or nobody knows who owns the account.",
    "sections": [
      {
        "h": "Start by identifying where passwords still matter",
        "ps": [
          "Inventory important accounts and their owners. Include email administration, finance, payroll, website management, social accounts and specialist vendor portals. Separate individual accounts, shared logins and credentials used by applications. Each needs an appropriate access arrangement.",
          "Prefer individual users where the service supports them. A vault should not become a reason to share a powerful administrator account among several people. Named access usually makes permissions and activity easier to attribute. Use shared credentials only where there is a justified business need and the service permits the arrangement.",
          "Record accounts that already support stronger sign-in methods. A password manager can be part of the access system without being the answer to every account. Ask your existing IT provider how single sign-on, passkeys, MFA and the vault fit together before buying overlapping capabilities."
        ]
      },
      {
        "h": "Why unique passwords are useful",
        "ps": [
          "If the same password is used in several services, its exposure in one place creates a risk elsewhere. Attackers can try known username-and-password combinations against other accounts. Avoiding reuse limits that particular connection between unrelated services.",
          {
            "text": "CISA recommends long, random, unique passwords and a password manager protected by MFA. Its guidance explains why remembering a large collection of strong passwords manually is impractical. CISA password-manager guidance.",
            "links": [
              {
                "phrase": "CISA password-manager guidance",
                "to": "https://www.cisa.gov/resources-tools/training/cyb3rsmrt-use-password-manager-create-and-remember-strong-passwords"
              }
            ]
          },
          "Apply that principle to actual company accounts. Replacing the password in one portal while leaving the same value in several others does not resolve reuse. Establish which accounts were affected, change them through their supported procedures and confirm that the updated credentials are stored in the approved place.",
          "Do not describe a password manager as preventing every account compromise. A phishing interaction, compromised device, weak recovery route or excessive permission can create a separate problem. Unique passwords reduce one exposure while other access controls address the rest."
        ]
      },
      {
        "h": "Browser storage and business vaults answer different needs",
        "ps": [
          "Browser password storage can make unique passwords easier for an individual to use. Its suitability for the company depends on management features, account ownership and the browser environment. Avoid a blanket claim that browser storage is always insecure or always sufficient.",
          "For a team, inspect how the proposed system handles shared items, permissions, administrative recovery and removal of users. Ask whether the business can retain access when the employee who created an item leaves. Confirm what the chosen plan actually includes and which features require additional configuration.",
          "This is a selection checklist, not a promise that any particular product supports every row. Require a demonstration using a test account before relying on a feature for production credentials."
        ],
        "table": {
          "caption": "Browser storage and business vaults answer different needs",
          "headers": [
            "Business question",
            "What to inspect in the proposed tool"
          ],
          "rows": [
            [
              "Who owns the credential?",
              "Business account ownership and item location"
            ],
            [
              "Who can use it?",
              "Group, collection or item permissions"
            ],
            [
              "Who can change access?",
              "Administrator roles and approval procedure"
            ],
            [
              "Can the firm recover access?",
              "Supported recovery and emergency administration"
            ],
            [
              "What happens at departure?",
              "User removal, shared-secret rotation and retained records"
            ],
            [
              "Can changes be reviewed?",
              "Available logs, export controls and reporting"
            ]
          ]
        }
      },
      {
        "h": "Protect the vault’s own access",
        "ps": [
          "The vault becomes an important business account because it contains access to other systems. Configure its authentication according to the provider’s supported controls and your organization’s requirements. Use a strong, unique master credential where the product requires one, and enable the supported MFA method.",
          "Review recovery with IT. Identify who can reset or recover an employee’s vault access, how that requester’s identity is verified and which actions are recorded. A helpful support process should not allow someone to obtain access simply by claiming urgency or knowledge of a colleague’s job title.",
          "Manage administrator privileges separately from ordinary vault use. Give only the necessary people administrative roles, document why they need them and review those assignments. Ensure an authorized backup administrator exists so the company is not dependent on one employee’s availability.",
          "Test recovery with approved dummy credentials before storing critical access. Record what the business would do if the main administrator lost their device or became unavailable. Keep recovery materials in an appropriate protected location rather than placing them in the same broadly shared folder the vault was meant to replace."
        ]
      },
      {
        "h": "Design shared access carefully",
        "ps": [
          "Organize items by business responsibility. Finance may need billing portals without needing website administration. Marketing may need social accounts without needing payroll. Grant access according to the work people perform instead of putting every credential in one company-wide collection.",
          "Give each shared item an owner. That person maintains the account details, confirms authorized users and coordinates changes. Include a brief description of the service and its purpose, but avoid putting unnecessary sensitive information into item notes.",
          "Do not assume a user who can use a credential cannot retain it. Product restrictions may limit viewing or copying, but your security decision needs to account for the credential’s actual exposure. If a shared password was known or could have been copied, removal from the vault does not make that old password stop working at the service.",
          "Plan rotation after a relevant departure or suspected exposure. Test the updated credential and any dependent integration. A changed password that silently breaks a scheduled business process creates pressure to restore the old value, so include the service owner in the work."
        ]
      },
      {
        "h": "Migrate in a controlled order",
        "ps": [
          "Start with a small set of important accounts and representative users. Confirm the browser or application integration works on supported devices. Teach staff how to save, retrieve and update credentials without sending them through chat.",
          "Check imported records before broad use. An old spreadsheet may contain duplicate items, wrong URLs, abandoned accounts or credentials that nobody has tested. Importing it into a vault improves storage but does not establish that its contents are current or authorized.",
          "Generate new unique passwords through the service’s supported change process. Confirm the account still works, the vault contains the current value and unnecessary old copies are handled under your records policy. Avoid keeping a second unprotected spreadsheet indefinitely as a convenience backup.",
          "Move the remaining accounts in manageable groups. Staff should know where to report a missing item and who approves new shared access. Give the help desk a practical recovery procedure before enforcing a tool change across the team."
        ]
      },
      {
        "h": "Keep MFA on the underlying services",
        "ps": [
          "Vault MFA protects access to the vault. It does not automatically require MFA when someone signs in to a banking portal or email system using a stored password. Review the underlying account’s authentication separately.",
          {
            "text": "Our MFA comparison guide explains the differences among SMS, authenticator codes, push approvals and phishing-resistant passkeys. Choose supported methods with IT and test recovery before removing existing routes.",
            "links": [
              {
                "phrase": "MFA comparison guide",
                "to": "/resources/mfa-methods-compared/"
              }
            ]
          },
          "Also examine whether storing a second-factor secret alongside the password fits the account’s risk and your policy. Convenience and factor separation need a deliberate decision, especially for administrative and financial access. Do not assume every item should be stored in the same arrangement merely because the tool offers that option."
        ]
      },
      {
        "h": "An illustrative offboarding example",
        "ps": [
          "Imagine that two staff members share a vendor portal because it does not support separate users. This is an illustrative example, not a Helm customer result. The departing employee has been removed from the company vault, but the vendor portal password remains unchanged.",
          "The company has removed future access to the vault item. It has not invalidated a password the employee previously saw or copied. The service owner needs to change the portal credential, test it and confirm that the remaining authorized employee can use it. If separate users become available, review whether the shared arrangement can be retired.",
          "The same review should cover recovery email addresses and phone numbers. A company-controlled password is insufficient if the account can still be recovered through the departed employee’s personal address. Ownership includes the reset route as well as the secret."
        ]
      },
      {
        "h": "Review the vault as an ongoing system",
        "ps": [
          "Check administrator assignments, shared-item membership and unresolved account owners on a schedule appropriate to the business. Revisit them after departures, role changes and new service purchases. Use available logs where supported to investigate unexpected changes.",
          "Measure progress through the accounts brought under an approved process, not just the number of vault licenses issued. Useful evidence includes identified owners, unique credentials, tested recovery and completed rotation when required. Record gaps rather than treating an installed extension as completion.",
          "Ask staff whether they still use an informal backup store because something is missing from the approved system. Resolve that friction directly. Otherwise, the visible vault can look well maintained while the passwords people actually use remain elsewhere.",
          "Helm can discuss account-protection priorities alongside your existing IT provider. Routine account administration and vault configuration remain with the agreed IT owner unless separately scoped. Choose and maintain the access system as part of your broader identity work."
        ]
      }
    ],
    "takeaway": "Use unique credentials, prefer named accounts and inspect the business controls in the chosen vault. Protect vault access, test recovery and rotate shared secrets when required. Removing a user from a vault does not invalidate passwords they already knew.",
    "lead": [
      "A business password manager can help staff create unique credentials and govern shared access. The useful comparison with browser-saved passwords is about the organization’s needs: account ownership, permissions, recovery, offboarding and evidence. Evaluate those capabilities in the exact product and plan rather than assuming every vault provides the same controls."
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "security-questionnaire-response-services",
    "title": "Security questionnaire response services versus DIY: what SMBs should consider",
    "metaTitle": "Security Questionnaire Services vs DIY | Helm",
    "metaDesc": "Map questionnaire answers to current scoped evidence. A response service can help draft and organize; your firm approves every final representation.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "text": "Helm Command includes bounded client questionnaire and insurance responses, evidence upkeep and coordination with your named IT owner. That work is part of a managed program rather than an unlimited standalone response desk. The firm reviews and approves final attestations.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command/"
              }
            ]
          },
          {
            "text": "Helm Core provides a defined protection stack and monthly reporting. It does not include Command's questionnaire scope or full program-evidence ownership.",
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
      },
      {
        "h": "Build a response record before drafting answers",
        "ps": [
          "Give the questionnaire an owner who can manage the deadline and approval route. Record the requesting organization, intended service, business unit, questionnaire version and due date. Confirm whether the request includes attachments, a portal submission or follow-up calls. These details affect the work required.",
          "Route legal and commercial commitments to the responsible reviewer. Some questions ask about an existing control; others ask the firm to agree to a future obligation. An answer about current practice should not accidentally accept a new service level or notification deadline. A response writer needs a way to escalate that distinction.",
          "Break the request into control areas and assign reviewers. IT may validate access and device records. A business owner may confirm payment procedures or staff training. Counsel may need to review an obligation or disclosure. Keep one coordinator so the final answers do not contradict each other.",
          "Store the working version in an approved location with access limited to the reviewers. Agree on naming and version control before emailing copies around. If the requester changes a question, preserve the change and recheck the answer. The approved final response should be identifiable later."
        ]
      },
      {
        "h": "Match evidence to the wording of the question",
        "ps": [
          "Read the subject, population and time period. A question asking whether all staff receive annual training differs from one asking whether training is available. A question about recovery tests differs from one about backup deployment. Identify the claim the answer would make before selecting a supporting record.",
          "Use a fictional endpoint question to test the process. If the report shows 70 eligible workstations but the firm has additional servers and phones, it may support an answer about those workstations. It cannot alone support a claim that every company device receives the same protection. Ask the control owner to explain the uncovered population.",
          "For a yes-or-no form, review whether a qualified answer or comment is permitted. Do not choose yes merely because there is no comfortable option for partial coverage. Ask the requester to clarify the expected treatment of exceptions, and have the authorized firm reviewer approve the resulting answer.",
          "Treat unavailable evidence as an unresolved question. The firm may have a working control whose record has not yet been collected, or it may lack the control entirely. Investigate before writing a definitive answer. These situations require different next steps and should not be merged into a generic pending status."
        ]
      },
      {
        "h": "Keep the answer library reusable and accountable",
        "ps": [
          "Store each approved answer with the question it addresses, covered systems, evidence reference, date, control owner and approver. Add limitations that affect reuse. If an answer describes a particular provider's service, identify the service and population rather than presenting it as universal protection.",
          "Set review triggers. A platform migration, acquisition, licensing change or revised policy can make a previously accurate answer stale. The owner should retire or revise affected entries. A library that only grows can accumulate inconsistent statements across questionnaires.",
          "Do not preserve an unsupported answer just because a customer previously accepted it. Acceptance does not validate the control. When an earlier response appears inaccurate, bring it to the authorized business and legal reviewers to determine the appropriate action. The response service should flag the issue rather than improvise a correction to an external party.",
          "Use automation cautiously. A tool can suggest a relevant library entry, but a reviewer must check the wording, scope and current evidence. Do not upload restricted records to an unapproved AI tool to speed drafting. The firm's data-handling rules apply to the response workflow itself."
        ]
      },
      {
        "h": "Share enough evidence without exposing unnecessary detail",
        "ps": [
          "Ask what the requester needs to establish. A dated summary may answer a question without requiring a full configuration export. Where detailed evidence is necessary, confirm the recipient's authority and approved transfer method. Use redaction when it preserves the relevant claim.",
          "Keep credentials, working tokens and unrelated client records out of evidence packages. Screenshots can reveal more than their author intended, including names, account identifiers and infrastructure details. Have the responsible reviewer inspect the material before sharing it.",
          "Record what was sent, to whom, when and for which purpose. If access is provided through a controlled link, confirm its permissions and review or expiry arrangements. Do not assume a confidentiality agreement makes every disclosure proportionate or eliminates the need for access controls.",
          "Retain the approved response and the evidence references under the firm's policy. Supporting records may remain in a separate restricted system. The response coordinator should know where they are without making unnecessary copies in a general marketing or sales folder."
        ]
      },
      {
        "h": "Compare DIY and managed work against the next request",
        "ps": [
          "For DIY, identify available reviewer time and a backup coordinator. Ask whether IT can deliver evidence before the deadline and whether leadership can approve exceptions. A response library reduces repeated drafting, but it does not remove technical validation or business approval.",
          "For a service, ask the provider to work through a harmless sample question. Check what it drafts, what it verifies and what it sends back to your team for confirmation. Ask how it handles conflicting evidence and an answer that requires a legal decision. The provider should make uncertainty visible.",
          "Agree on included volume and turnaround before an urgent request arrives. Define how long questionnaires are counted, what follow-up is covered and whether portal entry is included. A per-question allowance may differ from a per-questionnaire allowance. Confirm the actual measure in the service order.",
          "Keep emergency incident work distinct from questionnaire deadlines. A suspected active compromise belongs in the incident route, even if the customer also asks for a written update. The response coordinator should not treat drafting an answer as a substitute for authorized containment and investigation."
        ]
      },
      {
        "h": "Close the process with approval and improvement",
        "ps": [
          "Before submission, check consistency across answers and attachments. Confirm evidence dates, qualification wording and the authorized signer. Retain the exact approved version so later follow-up can refer to what was represented. Any submission through the customer's portal should match that version.",
          "After submission, record unanswered follow-ups and control gaps that surfaced. Assign operational work separately from editorial work. A response service can improve the record, but a missing restore test or incomplete deployment still needs its operating owner.",
          "At the next review, measure the process you can observe: requests completed, evidence still missing, review delays and corrections required. Do not claim that faster drafting proves stronger security or guarantees a contract award. Use the record to decide whether your internal process is sustainable or a bounded service would help."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "shadow-ai-at-work",
    "metaTitle": "Shadow AI at Work: Chatbots and Company Data | Helm",
    "title": "Shadow AI: What Employees Paste into Chatbots When Nobody Is Looking",
    "metaDesc": "Employees may paste client data and contract terms into AI chatbots the company never approved. Learn what can go wrong and how a practical AI-use policy helps.",
    "date": "2026-07-07",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "An employee who wants help summarizing a contract or cleaning up a client email may paste it into a public chatbot without realizing the information has now left the company’s approved systems. The employee may be trying to complete a useful task without a reviewed tool. If the company has never explained what is safe to share, people will make that decision on their own.",
    "sections": [
      {
        "h": "What shadow AI actually is",
        "ps": [
          "Shadow AI is a chatbot or AI tool used on company information without approval or review. Employees reach for these tools because they can draft an email, summarize a document, or clean up code quickly. Without an approved option, convenience often decides which tool gets used.",
          "A restriction needs a defined purpose, an approved alternative where appropriate and a route for requesting a useful tool. Network blocking alone does not establish whether company information is being used through personal accounts or other devices."
        ]
      },
      {
        "h": "What can leave the company through a prompt",
        "ps": [
          "The obvious risk is client data and contract terms typed straight into a prompt: names, numbers, terms that were never meant to leave the building, now sitting inside a third party's system.",
          "Less obvious is what happens to that data afterward. Some tools retain inputs or use them to improve their models, depending on the account type and settings, often without the employee ever checking which applies to them. Add a personal account with weak or no additional protections holding company information, and the exposure compounds.",
          "The output creates another problem when it is copied into a client deliverable or used for a decision without review. A confident answer can still be wrong."
        ]
      },
      {
        "h": "Give employees a safe way to use it",
        "ps": [
          "A short acceptable-use policy should explain the approved purposes, permitted information, review duty and reporting route. Support it with a maintained tool inventory and practical instructions, then check whether use matches the decision.",
          {
            "text": "Give employees a short list of approved tools so they have a practical alternative. A periodic audit can then show whether the tools used in daily work still match the policy.",
            "links": [
              {
                "phrase": "periodic audit",
                "to": "/helm-command"
              }
            ]
          }
        ]
      },
      {
        "h": "Ask what task the employee is trying to complete",
        "ps": [
          "Begin with the work: summarizing a file, drafting correspondence, comparing documents or preparing an internal checklist. Ask what information the task requires and what output is expected. A tool review is easier to conduct when it concerns one defined use rather than a vague request to approve AI for the entire business.",
          "Collect examples using synthetic or otherwise approved information. Do not ask an employee to demonstrate an unreviewed tool by uploading a real client document. A review should establish the data boundary before the pilot. If a confidential input is unnecessary for the task, remove that dependency through the workflow design.",
          {
            "text": "Use the first-workflow guide to compare candidate tasks. The shadow-AI review has a different purpose: finding and governing actual use, including tools the business has not yet examined. Connect the review to a workable approval route so useful demand is not left unresolved.",
            "links": [
              {
                "phrase": "first-workflow guide",
                "to": "/resources/choose-first-ai-workflow/"
              }
            ]
          }
        ]
      },
      {
        "h": "Build a tool inventory with a business owner",
        "ps": [
          "Record the tool, account type, intended use, users, information permitted and connected systems. Identify the business owner and the person reviewing technical access. Include browser extensions, embedded application features and integrations, not only standalone chatbots. Staff may describe a familiar business application without realizing a new AI feature changes the information path.",
          "Ask employees about use in a straightforward way. Explain that the inventory is intended to clarify approved work and resolve gaps. Avoid claiming that a particular percentage of staff must be using unapproved tools without evidence. Use the firm's own records and interviews, with lawful and proportionate technical review where authorized.",
          "Separate an approved tool from an approved use. A business subscription may be suitable for one internal task while a client-data use requires another decision. Record the purpose and boundary so employees do not extend a narrow pilot into broad document access without review."
        ]
      },
      {
        "h": "Review the information path and terms",
        "ps": [
          "Check what the selected service receives, stores and returns under the actual subscription and settings. Identify retention, training use, access, deletion and relevant contractual terms. A statement that prompts are not used for model training does not mean they are never stored or processed by another service.",
          {
            "text": "For connected documents, review existing permissions and the integration's scope. The AI document-access guide explains that part of the assessment. A connector that respects user access can still surface information shared too broadly in the underlying system. The permission problem needs its own owner.",
            "links": [
              {
                "phrase": "AI document-access guide",
                "to": "/resources/ai-access-business-documents/"
              }
            ]
          },
          {
            "text": "NIST's Generative AI Profile identifies risks including data privacy and information integrity. Use those categories to prompt a specific review, then document the actual tool and task. The framework is not certification that a particular service or workflow is safe.",
            "links": [
              {
                "phrase": "Generative AI Profile",
                "to": "https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence"
              }
            ]
          }
        ]
      },
      {
        "h": "Make the policy useful during a deadline",
        "ps": [
          "Use concrete examples from the firm. An internal outline based on approved public text differs from uploading a client's confidential contract. Removing a name does not necessarily make a document non-identifying. Ask the responsible information owner to approve the actual input, especially where context can identify a client.",
          "Give staff an approved fallback when the tool is unavailable. That may be the existing manual process rather than another chatbot. The procedure should prevent a technical failure from silently changing the service receiving company information."
        ],
        "table": {
          "caption": "Make the policy useful during a deadline",
          "headers": [
            "Policy decision",
            "What staff need to know"
          ],
          "rows": [
            [
              "Permitted task",
              "The business use that has been approved"
            ],
            [
              "Permitted information",
              "The input types and restrictions applying to that use"
            ],
            [
              "Approved account",
              "The subscription and account through which work occurs"
            ],
            [
              "Review duty",
              "Who checks output and what must be verified"
            ],
            [
              "New tool request",
              "Where staff send the task and proposed tool for review"
            ],
            [
              "Possible disclosure",
              "Whom to contact and which facts to preserve"
            ]
          ]
        }
      },
      {
        "h": "Assign output review before use",
        "ps": [
          "Decide who is accountable for the finished work. An AI draft can contain incorrect facts, unsupported conclusions or missing context. Review should fit the task: a source check for factual claims, a calculation check for numbers or a qualified professional's review for specialist work.",
          "Keep the draft and approval stages distinct. Do not allow generated correspondence to be sent or a financial decision to be executed automatically merely because the initial summarization task was approved. A broader action capability requires a separate assessment of authority and consequences.",
          {
            "text": "Measure the work actually needed for review and corrections. The time-savings resource includes those costs in a hypothetical model. Avoid calling a faster first draft a measured business saving when someone else spends additional time repairing it.",
            "links": [
              {
                "phrase": "time-savings resource",
                "to": "/resources/measure-ai-time-savings/"
              }
            ]
          }
        ]
      },
      {
        "h": "Respond when information may have been uploaded",
        "ps": [
          "Ask for the tool, account, date, input type and action taken. Preserve the relevant facts through the approved process without asking the employee to reproduce the disclosure. Do not upload the same material again to help a reviewer understand it.",
          "Have the responsible information owner, IT and appropriate advisers assess what happened. Check the actual service's retention and deletion options and their limitations. Deleting a visible chat may not remove every retained copy under the product's terms or other applicable preservation requirements. Obtain the provider information relevant to the actual event.",
          "Record any supported access or deletion action with its date and observed result. Keep conclusions about client, regulatory or contractual duties with the authorized advisers. A technical action can help contain a situation without settling every notification decision."
        ]
      },
      {
        "h": "Maintain approval after the pilot",
        "ps": [
          "Revisit the decision when the subscription, integration, data category or action changes. A new connector or automated sending capability can change the workflow even if the product name remains the same. Require the owner to identify the change and obtain the appropriate review.",
          "Review the inventory at a cadence the firm can sustain. Retire unused tools and remove approved access through the authorized administrator. For departures, include relevant AI accounts and integrations in the offboarding process. Company work should not remain dependent on a former employee's personal subscription.",
          {
            "text": "Helm's Secure AI Adoption consulting is a separate scoped service focused on an agreed workflow. Core and Command do not automatically approve every AI tool or include unrestricted integration work. Start with the task, information boundary and reviewer, then decide whether a pilot can demonstrate a useful result within those limits.",
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
        "h": "Give a new-tool request a clear disposition",
        "ps": [
          "Use a short request record containing the task, proposed account, intended users, input information and desired output. Ask for a harmless sample where it helps clarify the work. The reviewer then checks the business need, information handling, technical access and human approval needed for the finished result.",
          "Assign one of several explicit outcomes: approved for the defined use, approved for a bounded pilot, awaiting information or declined with an explanation. Record the owner and any review date. Avoid a vague approval that employees interpret as permission to connect the whole document library.",
          "If the request is declined, explain the actual unresolved condition and the approved way to complete the work. That may be a different tool, synthetic data for a test or the existing manual process. A clear disposition helps the employee act without guessing whether silence means approval.",
          "Track outstanding requests alongside actual use. An approval route that never produces a decision can leave the underlying demand unresolved. Leadership can then decide whether the bottleneck is missing information, review capacity or a business requirement the proposed tool cannot meet."
        ]
      }
    ],
    "takeaway": "Give employees an approved option and a short list of information that must never go into a public chatbot. Then check which tools are actually being used so the policy keeps pace with the work.",
    "lead": [],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "siem-software-managed-detection",
    "title": "How small businesses in New Jersey should evaluate SIEM security software and managed detection services",
    "metaTitle": "SIEM Software vs Managed Detection for SMBs | Helm",
    "metaDesc": "Choose SIEM around a defined detection use case, required data and staffed response. Compare ongoing costs and ownership before buying software.",
    "date": "2026-10-06",
    "readMin": 8,
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
      },
      {
        "h": "Define one investigation you need to perform",
        "ps": [
          "A detection question should describe the event and the decision. For example, the firm may need to assess an unusual account sign-in and determine whether related activity occurred on a covered device. Identify the data required, the investigator and the response action that would follow a confirmed finding. That is more useful than a general request for visibility into everything.",
          "Map the sources to their owners. The identity administrator, endpoint provider and application owner may have different access arrangements. Ask whether the current services can already supply the required investigation. A separate SIEM may be appropriate, but duplication adds cost when it does not close a defined gap.",
          "Document what remains outside the use case. If the service only ingests identity and endpoint events, it should not be described as monitoring every business application. Additional sources can be considered later under a deliberate scope decision. Begin with a use case the firm can operate and verify."
        ]
      },
      {
        "h": "Evaluate the collection pipeline",
        "ps": [
          "A data connector needs permission, configuration and ongoing health checks. Ask the proposed operator how it confirms that expected events arrive. A connector shown as configured does not establish that the required event types are current and complete enough for the detection.",
          "Check how the operator handles a missing source, expired access or a changed log format. Assign the provider contact responsible for repairing the connection. A detection rule can continue to exist while the data needed to trigger it has stopped arriving.",
          {
            "text": "CISA's small-business logging guidance recommends establishing logging and monitoring with IT. For procurement, turn that general guidance into specific source, retention and ownership questions. Keeping logs and investigating them are related duties with separate acceptance criteria.",
            "links": [
              {
                "phrase": "small-business logging guidance",
                "to": "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/use-logging-on-business-systems"
              }
            ]
          }
        ]
      },
      {
        "h": "Separate logs, detections and incidents",
        "ps": [
          "An alert count can increase because more data is collected, a rule changes or activity increases. It is not automatically a count of attacks. Ask how the operator classifies outcomes and documents significant decisions. Leadership reporting should state what required action and what remains unresolved.",
          "A dashboard may contain many events that do not require a business response. The operating model needs a way to distinguish noise from a meaningful escalation. Ask who tunes rules, how that tuning is reviewed and how the provider avoids hiding important activity while reducing unnecessary alerts."
        ],
        "table": {
          "caption": "Separate logs, detections and incidents",
          "headers": [
            "Item",
            "What it represents",
            "Question to ask"
          ],
          "rows": [
            [
              "Log event",
              "A record from a connected source",
              "Is the required data arriving and retained?"
            ],
            [
              "Detection rule",
              "Logic intended to identify relevant activity",
              "What scenario does it cover and who maintains it?"
            ],
            [
              "Alert",
              "A result needing handling under the service",
              "Who reviews it and within what operating coverage?"
            ],
            [
              "Investigation",
              "Assessment of evidence and context",
              "Which sources and actions can the investigator use?"
            ],
            [
              "Incident",
              "A situation requiring an assigned response",
              "Who authorizes containment and coordinates recovery?"
            ]
          ]
        }
      },
      {
        "h": "Review the investigation service",
        "ps": [
          "Have the provider describe a representative covered investigation. What information is available to the analyst? What contextual questions go to the customer? Which actions can the service perform directly? Does the service end at notification, or include supported containment under agreed authority?",
          "Do not treat every product integration as a promise that the provider will use it for your account. Ask for the sources and capabilities included in the written service. If a response requires an IT change, establish the handoff and the information IT receives.",
          "For a proposed round-the-clock service, confirm the team and function operating continuously. A platform that receives events at all hours differs from a staffed investigation service. Clarify the escalation route when the customer contact is unavailable and the authority for urgent action. These distinctions should be understandable before the contract is signed."
        ]
      },
      {
        "h": "Make retention a business decision",
        "ps": [
          "Identify why particular logs need to be retained: operational investigation, a client requirement or an applicable records obligation. Then check which data, storage tier and retrieval process the proposal supplies. A general statement that logs are kept does not identify whether an investigator can access the necessary history when needed.",
          "Ask how exports work and who can authorize them. Logs can contain sensitive identifiers and activity details, so access and sharing need an approved process. Do not send unrestricted event exports to an ordinary sales inbox to obtain a product opinion.",
          "Clarify data access when the service ends. Determine what can be exported, in what form, at what cost and before what deadline. Include the removal of connector access in the transition plan. A new service should not inherit unexplained privileges from an old arrangement."
        ]
      },
      {
        "h": "Understand the variable costs",
        "ps": [
          "A SIEM evaluation should include the expected sources and volume assumptions, ingestion, storage, retention and any investigation fees. Ask how cost changes with a new application, more devices or increased event volume. Avoid a quote based on a small demonstration source when the intended deployment is much broader.",
          "Include connector setup, tuning and ongoing maintenance. Identify work retained by IT, such as granting approved access or repairing a source integration. Record the estimated effort as a planning assumption, not a guaranteed financial result.",
          "Ask for a process to detect unexpected volume or charge changes. A budget review should happen before a new source is enabled when it materially affects the service. The firm needs a person who can approve the change and understand its operating value."
        ]
      },
      {
        "h": "Run a bounded demonstration",
        "ps": [
          "Use fictional or approved harmless data. Follow one event from collection through detection, investigation and the agreed action. Verify the source, rule and handling evidence. The demonstration should have a stated expected result and should not interfere with production business systems.",
          "Include a false-positive scenario and a missing-source scenario. Ask what the operator records, who adjusts the rule and who repairs the data path. These tests examine whether the service can maintain useful operation after onboarding, rather than merely display an alert.",
          "A demonstration has limits. It does not prove detection of every attacker or the quality of every future investigation. Keep the tested scenario and observed result with the decision record. Ask for the relevant service documentation where a capability cannot be meaningfully demonstrated in the pilot."
        ]
      },
      {
        "h": "Confirm whether SIEM is the necessary purchase",
        "ps": [
          "A firm may need better endpoint and identity response, a clearer incident contact or a specific log source for an investigation. Those needs can lead to different service choices. Compare a managed SIEM proposal with the actual capabilities and boundaries of the current detection service.",
          "If a new platform is selected, assign its operation and maintenance before purchase. If existing coverage is sufficient for the defined use case, record that determination and the remaining gaps. The useful outcome is a supported investigation and response process, with cost and coverage understood, rather than another alert queue with no owner."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "sprs-score-explained",
    "metaTitle": "SPRS Score Explained: Scoring and Supporting Evidence | Helm",
    "ctaMode": "book-cmmc",
    "title": "SPRS Score Explained: What the Number Means and How to Support It",
    "metaDesc": "How the NIST 800-171 DoD Assessment Methodology produces an SPRS score from -203 to 110, who can access it, and what evidence should support it.",
    "date": "2026-07-15",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Manufacturing & Defense",
    "laneTo": "/manufacturing",
    "intro": "An SPRS score can affect whether a defense contractor is eligible for covered work. If the number cannot be traced back to the systems assessed and the evidence reviewed, the company may struggle to support it when a contracting officer, customer, or government reviewer asks. A defensible score starts with a clear boundary and a calculation another qualified person can reproduce.",
    "sections": [
      {
        "h": "What the score actually measures",
        "ps": [
          {
            "text": "The NIST SP 800-171 DoD Assessment Methodology starts at 110 and subtracts the assigned value of each requirement that has not been implemented. The score can fall as low as negative 203 because some unmet requirements subtract three or five points while others subtract one.",
            "links": [
              {
                "phrase": "NIST SP 800-171 DoD Assessment Methodology",
                "to": "https://www.acq.osd.mil/asda/dpc/cp/cyber/docs/safeguarding/NIST-SP-800-171-Assessment-Methodology-Version-1.2.1-6.24.2020.pdf"
              }
            ]
          },
          "The score is a summary of implementation against the assessment methodology. It is not a general security grade and it does not prove that every system in the company was included. The system boundary and the System Security Plan determine what the number actually describes."
        ]
      },
      {
        "h": "Who can access the score",
        "ps": [
          "DFARS requires contracting officers to verify that a current summary-level score is posted for covered contractor information systems relevant to an award. Authorized representatives of the contractor can view their own score, and authorized DoD personnel can access posted assessment results.",
          "A prime contractor does not automatically receive unrestricted access to every subcontractor score. It may still require confirmation that a current assessment exists before awarding a covered subcontract. Treat the exact solicitation, contract, and flowdown language as the controlling instruction."
        ]
      },
      {
        "h": "Why an honest number matters more than a high one",
        "ps": [
          "A low, well-supported score gives the company an accurate starting point and an owned remediation plan. An inflated score creates a mismatch between the representation and the evidence.",
          {
            "text": "In a 2025 settlement, the Department of Justice said MORSECORP had submitted a score of 104 before a later third-party review calculated negative 142. The company agreed to pay $4.6 million to resolve False Claims Act allegations tied to cybersecurity requirements. These were allegations resolved by settlement, not a trial finding. Document the actual boundary and calculation rather than treating a target score as the answer to reach on paper. DOJ settlement announcement.",
            "links": [
              {
                "phrase": "DOJ settlement announcement",
                "to": "https://www.justice.gov/opa/pr/defense-contractor-morsecorp-inc-agrees-pay-46-million-settle-cybersecurity-fraud"
              }
            ]
          }
        ]
      },
      {
        "h": "What should be in the assessment file",
        "ps": [
          "Keep the current System Security Plan, a diagram or inventory defining the assessed boundary, control-by-control working papers, links to evidence, the calculation worksheet, the completion date, and the expected date for implementing unmet requirements. If more than one SSP exists, keep the score tied to the correct system and CAGE codes.",
          "The file should let another qualified reviewer follow the same methodology and understand why each requirement was marked met or not met. A screenshot without context or a policy without operating evidence is rarely enough by itself."
        ]
      },
      {
        "h": "How to raise it without guessing",
        "ps": [
          {
            "text": "Start with a gap assessment scored against all 110 controls. It shows which requirements are supported, which are not, and which gaps have the largest effect on the score.",
            "links": [
              {
                "phrase": "gap assessment",
                "to": "/helm-command"
              }
            ]
          },
          "Use the methodology to understand which unmet requirements subtract the most points, but do not optimize the number while ignoring the system boundary or lower-weight requirements. Remediate, collect the new evidence, recalculate, and update the score through the authorized process when the assessment record changes."
        ]
      },
      {
        "h": "Keep the assessment type and requirement distinct",
        "ps": [
          "SPRS is a reporting system used for several kinds of information. Identify which assessment result you are discussing before comparing numbers or asking a provider to update a record. A NIST SP 800-171 DoD assessment score should not be presented as a CMMC certification or a company-wide assurance statement.",
          {
            "text": "Review the contract requirement, the relevant systems and the assessment date. DFARS 252.204-7020 describes assessment and summary-result requirements. Read that clause alongside the solicitation and applicable flowdowns rather than relying on a generic renewal date supplied by a software tool.",
            "links": [
              {
                "phrase": "DFARS 252.204-7020",
                "to": "https://www.acquisition.gov/dfars/252.204-7020-nist-sp-800-171dod-assessment-requirements."
              }
            ]
          },
          "If the customer asks for a particular assessment or affirmation, clarify what it needs in writing. A request for an SPRS result, a request for a CMMC status and a request for supporting control evidence are related but different. Your response should identify the exact record and its scope."
        ]
      },
      {
        "h": "Establish the boundary before calculating",
        "ps": [
          "List the people, systems, locations and external services involved in the covered information. Include the actual workflow: receipt from a prime, quoting, engineering, production, storage and transmission. An assessment of a narrow environment needs a credible explanation of how information stays within that environment.",
          "Ask which systems were excluded and why. A CAD workstation, quoting mailbox or remote access service may affect the boundary even if it was omitted from an initial inventory. The assessor needs to inspect the role of each dependency rather than deciding scope from its business label alone.",
          "Keep the inventory and SSP aligned. If the SSP describes one environment while the worksheet assesses another, the final number cannot be interpreted reliably. Resolve the mismatch before submitting a summary result or using it in a customer response.",
          "The system boundary itself can be sensitive. Store diagrams, findings and detailed evidence in the approved repository with controlled access. A marketing or general operating document can describe the process without exposing live security weaknesses or customer information."
        ]
      },
      {
        "h": "Review evidence requirement by requirement",
        "ps": [
          "For each applicable requirement, document what is implemented, where it applies and what evidence supports the conclusion. Separate a policy statement from evidence that the procedure operates. The appropriate evidence varies with the requirement and should be evaluated by a qualified reviewer.",
          "For access management, the working record might include current permissions and the relevant approval procedure. For a recurring review, it should explain when the activity occurred and what was checked. These are illustrative evidence types, not a declaration that one screenshot or document satisfies the requirement.",
          "Record uncertainty. If the team cannot establish whether a requirement is implemented, resolve that gap rather than marking it met to finish the worksheet. An unsupported positive conclusion makes the number look stronger while making the assessment harder to defend.",
          "Check the methodology version and scoring rules used. Have the reviewer explain how deductions were applied, including any requirement-specific treatment. Keep the underlying worksheet so another qualified person can reproduce the arithmetic and examine the conclusions behind it."
        ]
      },
      {
        "h": "An illustrative score mismatch",
        "ps": [
          "Imagine a shop whose worksheet marks an access requirement implemented because a policy says managers approve users. This is an illustrative scenario, not a Helm finding. The operating records show accounts created without approval, and the reviewer cannot establish that the documented procedure was followed.",
          "The issue is not solved by rewriting the policy or deleting the exception from the evidence set. The shop needs to examine the real control, correct the process and collect appropriate evidence. Its assessment conclusion should reflect the implementation state until the requirement is supported.",
          "The same principle applies after a technical purchase. A tool can provide a capability while the required coverage, configuration or operating procedure remains incomplete. Do not add points solely because the invoice shows a product was bought."
        ]
      },
      {
        "h": "Connect remediation to verified changes",
        "ps": [
          "Give each gap an owner, target date, dependency and evidence needed for closure. Identify whether work belongs to IT, security, leadership or a process owner. A security provider cannot independently close a requirement that depends on a business decision it has no authority to make.",
          "Reassess the affected requirement after the correction. Keep the previous evidence and the new result so the reason for a changed score is traceable. If the work alters the boundary, review the wider assessment implications rather than adjusting one line mechanically.",
          "Use scoring weight as one input to prioritization. Also consider business exposure, implementation dependencies and contractual needs. A requirement with a small deduction can still matter operationally. Avoid a plan that improves the number while leaving the underlying environment poorly understood."
        ]
      },
      {
        "h": "A defensible assessment record",
        "ps": [
          "Keep this record proportionate but complete enough to explain the assessment. Do not send the entire evidence repository to a customer simply because it asks for a score. Share through the approved route and only to the extent authorized and necessary."
        ],
        "table": {
          "caption": "A defensible assessment record",
          "headers": [
            "Record",
            "Question it should answer"
          ],
          "rows": [
            [
              "Contract and scope reference",
              "Why does this assessment apply?"
            ],
            [
              "Boundary and inventory",
              "Which environment does the score describe?"
            ],
            [
              "Current SSP",
              "How are safeguards implemented in that environment?"
            ],
            [
              "Working papers",
              "Why was each conclusion reached?"
            ],
            [
              "Calculation",
              "Can the score be reproduced?"
            ],
            [
              "Remediation record",
              "Who owns the unmet requirements and target dates?"
            ],
            [
              "Authorized submission",
              "Which result was entered, when and by whom?"
            ]
          ]
        }
      },
      {
        "h": "Maintain the record after submission",
        "ps": [
          "Review the assessment when systems, providers, information flows or control implementation change. A valid historical submission date does not establish that the environment still matches the assessment. Record changes and obtain a qualified review where they affect the conclusion.",
          "Verify that the entered result matches the approved assessment file. Keep the submission confirmation and resolve discrepancies through the authorized process. A typographical correction and a changed assessment conclusion should each have a traceable explanation.",
          "Assign a backup owner for the submission record. The firm should retain authorized access and the assessment history when an employee or outside adviser changes roles.",
          "Helm can discuss an evidence-based readiness scope with the shop and its existing IT provider. Leadership remains responsible for representations and final attestations. A gap review supports preparation; it does not issue a government assessment result, certification or contractual approval."
        ]
      }
    ],
    "takeaway": "Calculate the score from a documented system boundary and keep the working papers that support every deduction. When a control or the environment changes, update the evidence and the assessment record instead of leaving an old number in place.",
    "lead": [],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "ssp-poam-explained",
    "metaTitle": "SSP and POA&M: Evidence for CMMC Readiness | Helm",
    "ctaMode": "book-cmmc",
    "title": "SSP and POA&M Explained: The Evidence Behind CMMC Readiness",
    "metaDesc": "What an SSP and POA&M document under NIST 800-171, how they support a defensible assessment, and how the Phase II suspension changes the certification context.",
    "date": "2026-06-20",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Manufacturing & Defense",
    "laneTo": "/manufacturing",
    "intro": "A shop can have policies, screenshots, and a high SPRS score and still be unable to show which systems were assessed or who is fixing an unmet requirement. The System Security Plan describes the environment and safeguards as they exist today. The Plan of Action and Milestones records the work that remains, who owns it, and when it is expected to be complete.",
    "sections": [
      {
        "h": "What each document actually is",
        "ps": [
          {
            "text": "The System Security Plan, addressed by NIST SP 800-171 Revision 2 requirement 3.12.4, describes the system boundary, operating environment, how the security requirements are implemented, and the connections to other systems. It should name the real tools, roles, locations, and processes inside the assessed scope.",
            "links": [
              {
                "phrase": "NIST SP 800-171 Revision 2",
                "to": "https://csrc.nist.gov/pubs/sp/800/171/r2/upd1/final"
              }
            ]
          },
          "The Plan of Action and Milestones, addressed by requirement 3.12.2, tracks security weaknesses or deficiencies, the work required to correct them, the responsible owner, resources, milestones, and completion dates. A POA&M with no owner, evidence target, or date is a list, not an operating plan.",
          {
            "text": "Together they are the paper trail behind your gap assessment: the SSP shows where you stand today, and the POA&M shows the work still ahead, scored against the same 110 controls.",
            "links": [
              {
                "phrase": "gap assessment",
                "to": "/helm-command"
              }
            ]
          }
        ]
      },
      {
        "h": "Why a reviewer starts with the SSP",
        "ps": [
          "A reviewer needs to know which people, systems, facilities, and connections are in scope before a control can be tested. A generic SSP cannot answer that question. If the document describes tools the shop does not use or leaves out the quoting mailbox and CAD workstations that hold CUI, the assessment starts from the wrong boundary.",
          "A useful SSP connects each requirement to the people, technology, procedure, and evidence behind it. It also records dependencies and exceptions so a reviewer can compare the document with the way the shop actually works."
        ]
      },
      {
        "h": "What the Phase II suspension changes",
        "ps": [
          {
            "text": "The Department’s current CMMC guidance states that Phase II was suspended on July 13, 2026 and Phase I remains. Confirm the assessment route from current guidance and the contract.",
            "links": [
              {
                "phrase": "CMMC guidance",
                "to": "https://dodcio.defense.gov/cmmc/About/"
              }
            ]
          },
          {
            "text": "The POA&M still matters, but it does not automatically excuse an unmet requirement. The DFARS assessment clause includes an expected implementation date in the summary record. CMMC also limits when open items are permitted. Confirm the applicable conditions before treating a planned fix as acceptable for an assessment or award.",
            "links": [
              {
                "phrase": "DFARS assessment clause",
                "to": "https://www.acquisition.gov/dfars/252.204-7020-nist-sp-800-171dod-assessment-requirements."
              }
            ]
          }
        ]
      },
      {
        "h": "How the documents are used",
        "ps": [
          "A current SSP lets the company explain its boundary and implementation consistently to leadership, primes, technical reviewers, and government assessors. A maintained POA&M lets the same group see what remains open, what evidence will close it, who owns it, and whether the expected completion date is still credible.",
          {
            "text": "Use both documents during the gap assessment, not after it. Findings should update the SSP where the description is wrong and create or revise POA&M work where a requirement is not fully implemented.",
            "links": [
              {
                "phrase": "gap assessment",
                "to": "/helm-command"
              }
            ]
          }
        ]
      },
      {
        "h": "Write the SSP from the actual workflow",
        "ps": [
          "Start with how information reaches the shop and moves through its work. Identify receipt, review, quoting, engineering, production, storage, transmission and disposal. Link those stages to the people, devices and external services involved. A diagram can support the explanation, but the written scope must be understandable without guessing what each box means.",
          "For each requirement, describe the implementation in the assessed environment. Identify the responsible role and the relevant procedure or configuration. If a provider supplies part of the safeguard, describe the dependency and the evidence the shop obtains. A provider’s broad marketing statement is not an implementation description.",
          "Be specific about exclusions. Explain why an excluded system is outside the scope and how the business prevents covered information from reaching it. If staff routinely move files there, the written boundary needs review. Do not declare a separation solely because a folder has been given a special name.",
          "Avoid copying a template’s product names, staff roles or network design into your SSP. A template can prompt useful questions. Its example answer becomes misleading when it describes a control the shop does not operate."
        ]
      },
      {
        "h": "Link descriptions to evidence without creating a second evidence store",
        "ps": [
          "Use references that let an authorized reviewer find the relevant record in its approved location. Identify the evidence owner, date and the requirement it supports. Keep live findings, diagrams and configuration details restricted to the people who need them.",
          "Do not paste credentials or sensitive technical records into a general document to make it appear comprehensive. The SSP can describe how a control is implemented while the detailed evidence remains in a governed repository. Confirm which material may be shared with a customer or reviewer before distributing it.",
          "Check that links remain usable for authorized reviewers. A reference to an employee’s private drive is fragile if nobody else can access it after that employee leaves. Business ownership and appropriate permissions belong in the evidence process.",
          "Keep historical versions when needed to explain an assessment. A current SSP and the version used for a prior result serve different purposes. Record which version supports each assessment instead of overwriting the only copy and losing the basis for the earlier conclusion."
        ]
      },
      {
        "h": "Give every POA&M item a closure test",
        "ps": [
          "A useful item identifies the unmet requirement, current deficiency and intended correction. Add the responsible owner, resources, dependencies, milestones and expected completion date. Most importantly, state what evidence will demonstrate that the correction is complete.",
          "For an illustrative access-management gap, the item might require a revised approval process, a review of current accounts and evidence that the corrected process operates. Those are example work components, not a finding that applies to every shop. The exact closure criteria should follow the requirement and assessment method.",
          "Do not close an item because a purchase order was issued or a policy draft was written. Verify the implementation and retain the review result. If the correction affects several requirements, show those relationships so one project update is not mistaken for complete closure everywhere.",
          "Separate an expected date from a firm commitment supported by resources. A date repeatedly moved without explanation is weak planning evidence. When work is delayed, record why, the interim safeguard if applicable and the person authorized to accept the remaining risk or contractual consequence."
        ]
      },
      {
        "h": "Distinguish a remediation plan from permission to defer",
        "ps": [
          "An organization can use a POA&M to manage work without every open item being acceptable for a particular assessment status. The permitted requirements, thresholds and closeout conditions depend on the applicable regime. Have a qualified reviewer confirm those limits before leadership makes an affirmation.",
          "Do not tell a customer that the shop meets a requirement merely because it has a scheduled fix. State the actual implementation and the planned action through the approved response process. If the customer’s form does not permit a truthful qualification, seek clarification rather than changing the answer to fit the form.",
          "Track different obligations separately when necessary. A general improvement project, an assessment-related deficiency and a contract-specific corrective action may have different approval and timing rules. Combining them into one undifferentiated list can hide the decision that matters."
        ]
      },
      {
        "h": "A document relationship table",
        "ps": [
          "Use these records together. A polished SSP without working evidence is incomplete preparation. A detailed remediation list without a clear current boundary leaves the team fixing issues without knowing which assessment they affect."
        ],
        "table": {
          "caption": "A document relationship table",
          "headers": [
            "Record",
            "Role",
            "What it does not establish alone"
          ],
          "rows": [
            [
              "SSP",
              "Describes the environment and current implementation",
              "That every description has been verified"
            ],
            [
              "Evidence reference",
              "Supports a specific implementation conclusion",
              "Coverage of unrelated systems or dates"
            ],
            [
              "POA&M",
              "Manages deficiencies and planned corrections",
              "Permission to defer every requirement"
            ],
            [
              "Assessment working papers",
              "Record evaluation and conclusions",
              "That the environment will remain unchanged"
            ],
            [
              "Submitted summary",
              "Reports the authorized result",
              "A replacement for the underlying evidence"
            ]
          ]
        }
      },
      {
        "h": "An illustrative inconsistency to resolve",
        "ps": [
          "Suppose the SSP says all relevant accounts follow an approved access process, while the POA&M records a gap in reviewing those accounts. This is an illustrative example, not a Helm assessment result. A reviewer needs to understand whether the SSP describes the current state accurately or presents the intended correction as already implemented.",
          "Revise the implementation description to reflect the actual state, retain the relevant evidence and keep the correction assigned. When the review process is implemented and verified, update both records with the supporting date and evidence. Do not close the item by making the wording of the two documents agree while leaving the operating gap unresolved."
        ]
      },
      {
        "h": "Build maintenance into ordinary changes",
        "ps": [
          "Review document impact when the shop adds a platform, changes a provider, opens a location or changes information handling. The person approving the change should identify which SSP descriptions, evidence references and POA&M items need an update.",
          "Reconcile the documents before the next assessment or customer response. Look for controls marked implemented while a related deficiency remains open, links to retired tools and evidence from the wrong environment. Resolve the inconsistency rather than hoping the reviewer will interpret it favorably.",
          "Leadership should receive a concise view of open decisions and overdue work. It does not need every screenshot to understand where funding, ownership or a contract clarification is required. The detailed records should remain available to authorized reviewers.",
          "Helm supports a scoped readiness discussion with the business and its existing IT provider. The organization owns its final representations and affirmations for the assessed environment and date. Maintained documents support a defensible review; they do not provide certification or replace a government or authorized assessment."
        ]
      }
    ],
    "takeaway": "Keep the SSP aligned with the systems and workflows in scope, and give every POA&M item an owner, target date, and evidence needed for closure. Update both documents when the environment or implementation changes.",
    "lead": [],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "vendor-email-compromise-contractors",
    "metaTitle": "Vendor Email Compromise: Spotting Supplier Invoice Scams | Helm",
    "title": "Vendor Email Compromise: When Your Supplier's Invoice Is Actually a Scam",
    "metaDesc": "Verify supplier banking changes separately from job approval. Maintain trusted contacts, approval records and a prompt response to suspected transfer fraud.",
    "date": "2026-07-08",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "Contractors & Trades",
    "laneTo": "/contractors",
    "intro": "A fake supplier invoice may include the correct job number, amount, letterhead, and contact name because the attacker has been reading a real email thread. Only the bank account has changed. If the office pays it without calling the supplier, the job can be complete while the legitimate invoice is still unpaid.",
    "sections": [
      {
        "h": "How the scam actually runs",
        "ps": [
          {
            "text": "A fraudster compromises or convincingly spoofs the email of a supplier or a general contractor somewhere in your job, then waits for the moment an invoice or a payment is naturally due. Mid-job is the ideal window: enough trust has built up between the parties that an \"updated banking details\" email does not raise an eyebrow.",
            "links": [
              {
                "phrase": "general contractor",
                "to": "/contractors"
              }
            ]
          },
          "The email itself usually is not sloppy. It references the actual job, the actual amount owed, sometimes an actual person's name pulled from a real thread the attacker has been reading. The only change is a routing number and an account number, and that change is the entire scam."
        ]
      },
      {
        "h": "Verify the financial instruction independently",
        "ps": [
          "Any new or changed banking instruction, on any invoice, from any supplier or GC, gets verified with a phone call to a number you already had on file, never a number provided in the email making the change. The verifier needs to reach an authorized person and confirm the actual instruction. A callback is a business control, not a guarantee against every compromise or an incomplete verification.",
          "The rule has to survive urgency to be worth having. A scam that arrives with a tight deadline, a threat to hold up the job, or pressure from someone posing as a decision-maker is testing whether the rule bends. Write it down as a rule with no exceptions, not a habit, so nobody on your crew has to make that judgment call alone under pressure."
        ]
      },
      {
        "h": "Protect your own domain and verification process",
        "ps": [
          {
            "text": "The same scam runs in the other direction: someone spoofs your company's domain and sends a fake invoice to one of your own customers. DMARC on your domain, set up correctly, is what stops your business name from being used to defraud the people who trust you.",
            "links": [
              {
                "phrase": "DMARC on your domain",
                "to": "/helm-core"
              }
            ]
          },
          {
            "text": "Lookalike domains are the other half of this: a supplier name spelled with a swapped letter or a different ending, close enough to pass a fast read on a phone screen. The free scan does not search for lookalike registrations, but it does report how your own public email authentication is configured.",
            "links": [
              {
                "phrase": "free scan",
                "to": "/free-scan"
              }
            ]
          }
        ]
      },
      {
        "h": "Separate job confirmation from banking changes",
        "ps": [
          "A foreman can confirm that materials arrived or a subcontractor completed work. The office may then approve an invoice against the job record. A changed beneficiary or account number is a separate financial instruction that needs the firm's verification and release authority.",
          "Keep those decisions connected but distinct. An accurate job number, amount and delivery detail can establish context while leaving the banking change unverified. A fraudulent request can be attached to a real debt. Staff should not assume the entire invoice is false or that the payment destination is trustworthy because the work occurred.",
          {
            "text": "The FBI business email compromise guidance describes requests appearing to come from known sources. For a contractor, convert that guidance into a specific supplier-change procedure. The procedure should identify the trusted contact, authorized verifier, required approver and record of execution.",
            "links": [
              {
                "phrase": "FBI business email compromise guidance",
                "to": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
              }
            ]
          }
        ]
      },
      {
        "h": "Establish the trusted supplier record",
        "ps": [
          "At onboarding, obtain the approved contact and payment information through the firm's established process. Record the source and the person authorizing it. Do not wait until an urgent change arrives to decide which phone number is trustworthy.",
          "Restrict changes to the supplier master record. An employee receiving a request should know where to route it and who can approve it. The verifier should use the existing trusted record or the established independent route, rather than a replacement number supplied in the same request.",
          "Review contacts when a supplier relationship changes. A former project contact may lack authority over banking information. Establish an approved alternate for an unavailable primary contact. Maintaining that route is a recurring duty, not a one-time entry at the start of a job."
        ]
      },
      {
        "h": "Record the instruction that was verified",
        "ps": [
          "Keep bank details in the controlled record. A status message can reference the instruction without copying full account information to everyone involved in the job. Limit access to the people who need it and follow the firm's records requirements.",
          "If another change arrives after verification, repeat the required process for the new instruction. The approval of one beneficiary does not silently authorize another. A screenshot of an old callback log is not evidence that today's changed account was confirmed."
        ],
        "table": {
          "caption": "Record the instruction that was verified",
          "headers": [
            "Stage",
            "Evidence to connect"
          ],
          "rows": [
            [
              "Receive the change",
              "Original request and time received"
            ],
            [
              "Confirm the authorized contact",
              "Trusted record and number source"
            ],
            [
              "Verify the details",
              "Beneficiary and relevant banking information confirmed"
            ],
            [
              "Approve release",
              "Required approver linked to that verified version"
            ],
            [
              "Execute payment",
              "Transfer record matching the approved instruction"
            ],
            [
              "Reconcile",
              "Result and any unresolved discrepancy"
            ]
          ]
        }
      },
      {
        "h": "Plan for payment cutoffs and crew pressure",
        "ps": [
          "A request may claim that materials will be withheld or work delayed unless money goes to a new account immediately. The firm needs an escalation route supported by leadership. Staff should be able to pause an unverified release and reach the person authorized to resolve the business consequence.",
          "Decide what happens when the trusted contact is unavailable. Use the established alternate or delay until the required verification is complete. Do not invent a new route from a search result or message link while the requester is applying pressure. The purpose of preparing the record is to avoid that improvisation.",
          "Set approval thresholds around actual operations and applicable terms. This article does not prescribe a universal dollar amount or interpret contract payment obligations. Have the financial owner and appropriate adviser approve the rule that fits the firm's transactions."
        ]
      },
      {
        "h": "Review field-to-office communication",
        "ps": [
          "Crew members may see an instruction first on a phone or shared tablet. Give them a short route for sending it to the authorized office contact without approving the change themselves. Confirm how they report when connectivity or the ordinary application is unavailable.",
          {
            "text": "Do not share the owner's mailbox or payment account across a crew to simplify that handoff. Use the approved access model with IT. The field-device guide covers shared equipment and lost-device decisions separately from financial authority.",
            "links": [
              {
                "phrase": "field-device guide",
                "to": "/resources/job-site-devices-public-wifi/"
              }
            ]
          },
          "A person confirming work completion should state what they confirmed, such as delivery or completion. Avoid a broad message that says the invoice is approved when the intended statement concerns only job progress. Clear wording prevents the payment operator from treating one decision as authorization for another."
        ]
      },
      {
        "h": "Use email controls for their defined purpose",
        "ps": [
          "Review authentication and access on the accounts used for supplier correspondence. Filtering and reporting can reduce some malicious messages and help investigate suspicious activity. They do not decide whether a new beneficiary belongs to the supplier.",
          {
            "text": "Use the DMARC guide to review legitimate senders and domain policy. Lookalike domains require a different check, and a real compromised account can pass authentication. Keep independent financial verification even when the message appears familiar and the mail system raises no warning.",
            "links": [
              {
                "phrase": "DMARC guide",
                "to": "/resources/what-is-dmarc/"
              }
            ]
          },
          "If the firm learns that its own identity is being used, have the authorized reviewer preserve facts, confirm the misuse and identify the platform reporting route. Approve any client communication through the appropriate business process. Do not promise that every fake account can be removed immediately."
        ]
      },
      {
        "h": "Act quickly when a transfer is suspected",
        "ps": [
          "Contact the sending financial institution promptly, supply the transaction details and follow its instructions. The FBI guidance recommends immediate institution contact and an IC3 report. Keep the bank contact times and reference numbers. Do not delay financial response until the mailbox investigation is finished.",
          "Assign parallel work through the incident plan. The payment owner contacts the bank, authorized teams assess account activity, and leadership engages the insurer and advisers. Preserve the original messages, relevant logs and timeline in the approved restricted location.",
          "Verify communications with the real supplier through the trusted route. Determine the status of the legitimate invoice and appropriate next steps with the financial and legal owners. A suspected fraudulent transfer can create both an incident and a business dispute; neither should be resolved through speculation in the affected email thread."
        ]
      },
      {
        "h": "Test the rule with a harmless job scenario",
        "ps": [
          "Use a fictional supplier, job number and banking change. Include a payment cutoff and an unavailable primary contact. Ask the team to show the trusted record, verification, approval and decision. Include field staff and the payment operator so the exercise covers the whole handoff.",
          "Record what actually worked and what was missing. Correct a stale contact, unclear approval or unavailable alternate. Repeat the affected step after the correction. A training session is evidence of participation; the exercised process gives more specific evidence about the transaction workflow.",
          {
            "text": "Helm Core provides defined email and other covered protection. Command adds program and evidence coordination within written scope. Finance retains payment authority, existing IT administers systems and specialist recovery or legal work needs separate scope. Start with one supplier-change exercise and use its findings to improve the documented rule.",
            "links": [
              {
                "phrase": "Helm Core",
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
        "h": "Reconcile the accounting record afterward",
        "ps": [
          "Check that the supplier record and transaction record contain the approved beneficiary. If the request was rejected, make sure an earlier draft change was not saved accidentally. The accounting owner should verify the final state rather than assume that declining an email also reversed every edit made while it was being reviewed."
        ]
      }
    ],
    "takeaway": "Call a supplier using a number already in your records before accepting new banking details. Keep that rule in place even when a deadline is tight, and protect your own domain so customers are less likely to receive the same request in your name.",
    "lead": [],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "virtual-ciso-service-evaluation",
    "title": "How to Choose a Virtual CISO Service That Delivers Roadmaps, Evidence, and Quarterly Accountability",
    "metaTitle": "Choosing Virtual CISO Services for Your SMB | Helm",
    "metaDesc": "Buy defined security-leadership deliverables, meeting cadence and evidence responsibilities. Confirm limits and retain final business approvals.",
    "date": "2026-10-06",
    "readMin": 8,
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
            "text": "Helm Core is a standardized protection stack with monthly reporting. It does not include quarterly leadership reviews or open-ended vCISO work. It fits firms that can retain program decisions and coordination internally.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Helm Command provides managed security-program ownership: the covered Core stack, a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance responses, quarterly leadership reviews, an annual tabletop and IT coordination. Its published range is $8,000 to $15,000 per month after fit and complexity review. Compare that written scope with a prospective vCISO engagement rather than assuming the services are interchangeable.",
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
      },
      {
        "h": "Start with the decisions leadership cannot currently make",
        "ps": [
          "List two or three unfinished security decisions before requesting proposals. Examples might include who owns access reviews, which recovery gap should receive funding or how to answer a customer asking for evidence. Identify why each decision is stalled: missing facts, unclear authority, limited implementation time or an unresolved business tradeoff.",
          "A leadership adviser can help organize the evidence and recommend a path. It cannot resolve every constraint through a meeting. If the proposed fix requires IT implementation, a new license or legal interpretation, the engagement should make those dependencies visible. Otherwise the firm may buy advice while the original work remains blocked.",
          "Name an executive sponsor who can approve priorities and bring the right owners into the discussion. The adviser needs access to decision-makers, not just a mailbox for recommendations. Establish what the sponsor can approve and which decisions require partners or another governing group.",
          "Use that list to evaluate a fictional sample engagement. Ask what the provider would deliver after the first review, what information it would request and how it would track an unresolved decision. Look for a practical record your team can use between meetings."
        ]
      },
      {
        "h": "Separate leadership, monitoring and implementation",
        "ps": [
          "The vCISO label does not establish whether the service monitors alerts, administers systems or performs technical remediation. Ask for a responsibility map covering those tasks alongside risk advice, policy work and evidence coordination. Mark separately purchased services rather than assuming they come with the advisory fee.",
          "Monitoring requires a defined population and response path. Advisory work requires a cadence, deliverables and business access. Implementation requires the relevant technical authority and time. One provider can supply more than one service, but the scope must explain which work is included and who handles the rest.",
          "For incidents, ask how the adviser participates. It might help leadership coordinate decisions while an authorized responder investigates and IT restores systems. Confirm availability, escalation limits and any separate incident fee. A scheduled quarterly adviser should not be presented as an unlimited emergency response resource.",
          "For policy work, determine whether the provider drafts, reviews or maintains documents. Ask who verifies that written procedures match actual operations. The firm must review obligations and approve the policy; an attractive document cannot establish that its controls are implemented."
        ]
      },
      {
        "h": "Examine the risk register and roadmap together",
        "ps": [
          "A useful risk record describes the business consequence, evidence, uncertainty and owner. It also records the proposed treatment and the decision needed from leadership. Ask the provider to show a fictional example with an unresolved dependency rather than only completed success items.",
          "The roadmap should translate approved priorities into work that an owner can perform. Look for dependencies, realistic dates, expected costs and acceptance checks. A recommendation to enforce a new access policy may require licensing, user enrollment and a tested recovery route before rollout.",
          "Check how the provider handles deferral. A risk accepted for a limited period should retain its rationale, approver, conditions and review date. It should not disappear from the register because the implementation budget was unavailable. Leadership needs to see when the original assumptions change.",
          "Ask how the two records remain consistent. A roadmap milestone should point to the risk or business requirement it addresses. Closing the milestone should update the evidence and remaining risk rather than merely changing a task to green. This connection helps explain why the firm funded the work."
        ]
      },
      {
        "h": "Make leadership meetings produce decisions",
        "ps": [
          "Request a sample agenda and decision log. The meeting should identify material changes, completed work, unresolved gaps and approvals required. Give leadership information early enough to understand the options. Reading a dashboard aloud for most of the meeting is unlikely to resolve a blocked decision.",
          "For each approval, show the proposed action, responsible owner, cost assumption and consequence of waiting. Where facts remain uncertain, state what discovery would resolve them. Avoid presenting an estimate as a committed project price when another vendor must quote implementation.",
          "At the end, record decisions and next actions with dates. Confirm who tells IT about an approved change and who verifies completion. If leadership declines a recommendation, preserve the decision and reconsideration trigger. The adviser should not silently convert a rejected item into completed work.",
          "Between meetings, define how urgent questions are handled. Set an agreed communication route and turnaround expectations appropriate to the contracted service. Distinguish an urgent business question from a suspected active compromise that belongs in the incident route."
        ]
      },
      {
        "h": "Review evidence and independence claims carefully",
        "ps": [
          "Ask which evidence the provider can obtain directly and which requires your IT owner. A service can coordinate collection without having authority to inspect every system. Define who validates coverage, dates and exceptions before using a record in an external response.",
          "For questionnaires, identify included volumes, formats, deadlines and follow-up limits. Ask how conflicting or unsupported answers are escalated. The client should retain the final submission and approval record, with sensitive supporting material shared only through an approved process.",
          "An adviser that recommends and operates controls is not automatically an independent assessor of those controls. When a customer or requirement calls for independent assurance, confirm the required assessor and form of evidence. Keep advisory reviews, technical testing and formal attestations distinct.",
          "Before signing, review access transfer and exit deliverables. Your firm needs its current register, roadmap, decision history and evidence references when an adviser changes. Establish the format and transition support in advance. That makes the engagement usable as an operating function rather than a dependency on one person's private notes."
        ]
      },
      {
        "h": "Choose fit over the title",
        "ps": [
          "Compare proposals using the same recurring duties, meeting cadence and retained responsibilities. Ask how the provider learns your business without requiring unnecessary disclosure of client records. Confirm who covers absence and whether a change of assigned adviser affects the commitments.",
          "Select the engagement that addresses the demonstrated coordination gap and fits your capacity to implement approved work. Set a first review date and specific acceptance deliverables. A named adviser, an agreed register structure and an executable first set of actions give leadership a firmer basis for judging value than the job title alone.",
          "Review conflicting incentives as part of procurement. Ask whether the adviser receives compensation for recommended products or also sells implementation. That arrangement can be workable, but leadership should understand it and compare alternatives where appropriate. Keep the reasoning for a recommendation in the decision record rather than relying on the adviser's title."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "vulnerability-management-new-jersey",
    "title": "How to build a vulnerability management program for small businesses in New Jersey",
    "metaTitle": "Vulnerability Management for New Jersey SMBs | Helm",
    "metaDesc": "Build a finding-to-action workflow with authorized scope, risk-based priority, responsible IT owners and verified closure evidence.",
    "date": "2026-10-06",
    "readMin": 9,
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
      },
      {
        "h": "Build an asset register that supports action",
        "ps": [
          "The inventory should connect an asset to someone who can change it. Record a business owner, technical owner, location or service, product version where relevant and the reason the firm uses it. Include public applications, remote-access systems, endpoints and important cloud services. Keep unsupported or externally operated assets visible even when a chosen scanner cannot assess them.",
          "Distinguish an unknown asset from an accepted exclusion. If a public service appears in a scan but nobody recognizes it, investigate ownership before adding it to a change queue. If a supplier operates an application, establish the approved contact and the evidence it can provide. A finding without an owner cannot become a reliable remediation task.",
          "Update the register when new services are introduced and old ones are retired. Compare it with procurement, hosting and device-management records. The purpose is to identify important gaps in the assessed population, not to create an inventory that becomes too detailed for anyone to maintain."
        ]
      },
      {
        "h": "Choose assessment methods deliberately",
        "ps": [
          "An external scan observes a public-facing surface. An authenticated assessment can inspect information available through authorized access. A configuration review can examine settings that a scanner may not evaluate well. A penetration test is a separately scoped exercise intended to examine exploitable paths. These methods are complementary when matched to the question being asked.",
          "For an engagement, define the systems, authorization, timing, permitted actions and emergency stop contact. Discuss operational sensitivity before assessing a fragile or specialist system. A vendor's usual scanning profile should not silently become permission for every test against every asset. Third-party infrastructure may need separate approval.",
          "Ask how credentials are handled if the assessment needs them. Use an approved access arrangement and limit privileges to the required purpose. Record how access is removed afterward. Do not send administrative credentials through an ordinary sales form to receive a generic assessment."
        ]
      },
      {
        "h": "Validate a finding before assigning the fix",
        "ps": [
          "Review the detected product, affected version and evidence. Determine whether the finding accurately describes the deployed system. A scanner may rely on a banner, incomplete information or a test with limitations. If IT disputes a finding, retain the evidence and the reason for the determination rather than deleting it without explanation.",
          "Avoid equating false positive with no work required. A disputed finding needs a clear disposition: confirmed, not applicable, unresolved or requiring another check. The disposition should state who reviewed it and when. This prevents the same unresolved question from returning with every scan.",
          "For confirmed findings, identify the corrective action and its prerequisites. A patch may require a restart, application test or vendor assistance. A configuration change may need business approval. Route those dependencies with the task so the technical owner knows what completion requires."
        ]
      },
      {
        "h": "Make the priority understandable",
        "ps": [
          "This table is an operating aid, not a universal scoring formula. Use the firm's applicable obligations and current technical guidance when setting dates. Explain the reasoning in the record. Leadership should be able to see why a particular issue is urgent without interpreting a scanner's entire scoring system.",
          {
            "text": "NIST's patch-management guide connects patching with preventive maintenance and verification. The practical business implication is that update work needs planned ownership and resources. A vulnerability program that identifies problems but gives IT no time or approval to repair them remains incomplete.",
            "links": [
              {
                "phrase": "patch-management guide",
                "to": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
              }
            ]
          }
        ],
        "table": {
          "caption": "Make the priority understandable",
          "headers": [
            "Finding circumstance",
            "Issue to resolve"
          ],
          "rows": [
            [
              "Applicable exploitation reported on an exposed system",
              "Establish urgent action and any incident investigation"
            ],
            [
              "Important system with a supported fix",
              "Plan deployment, testing and verification"
            ],
            [
              "Unsupported software",
              "Decide replacement, retirement or a temporary controlled arrangement"
            ],
            [
              "Potential finding with incomplete evidence",
              "Assign validation before making a coverage claim"
            ],
            [
              "Delayed change with a business dependency",
              "Record the authorized exception and review date"
            ]
          ]
        }
      },
      {
        "h": "Make exceptions expire or return for review",
        "ps": [
          "Sometimes a change cannot be completed on the requested date. Record the affected asset, business reason, temporary safeguards, responsible owner and next review date. If a client or insurer requirement applies, obtain the relevant advice before treating an internal acceptance as sufficient. An internal risk decision does not automatically amend an outside obligation.",
          "Keep exceptions in a visible register. Review whether the reason still applies and whether a supported fix or replacement has become available. Longstanding exceptions deserve a business decision rather than automatic renewal. Repeatedly postponing an unsupported application should lead to a replacement discussion.",
          "Avoid using a blanket exception for all systems managed by another provider. Ask that provider for the action it can take and the evidence available. If the firm lacks the authority to make the change directly, it still needs an owner for the supplier escalation and contractual review."
        ]
      },
      {
        "h": "Close with evidence matched to the finding",
        "ps": [
          "For a version-related finding, a verified version and appropriate reassessment may support closure. For a configuration finding, retain the setting and the test relevant to the change. For retirement, confirm the service is no longer accessible in the applicable scope. The evidence should answer the original finding rather than simply show that a ticket changed status.",
          "Check for failed deployment and partial completion. If nine devices receive an update and one does not, keep the remaining device assigned. Do not close the whole population because most of it is complete. Preserve the assessed population and dates so later reviewers understand the limits.",
          "A rescan can provide useful confirmation, but it also has scope and detection limitations. If a finding disappears because the scanner can no longer reach the system, determine why. Loss of visibility is not the same as verified repair."
        ]
      },
      {
        "h": "Report the work that remains",
        "ps": [
          "Useful leadership reporting includes important unresolved findings, aging exceptions, owner decisions and coverage gaps. Scan counts describe activity; they do not show whether the firm acted. A backlog trend is meaningful only if the scope and counting rules remain understandable.",
          "For example, separate newly discovered findings from overdue confirmed findings. Otherwise a better assessment may appear to make the program worse simply because it found more issues. Explain major scope changes alongside the figures. Avoid converting a lower count into a claim that overall risk fell by the same percentage.",
          "Track the stages where work stalls: validation, business approval, installation or verification. Assign a correction to the bottleneck. The useful measure is whether the process moves important findings to a supported disposition, with accountable exceptions where work remains."
        ]
      },
      {
        "h": "Start small enough to operate",
        "ps": [
          "A small firm can begin with its important public-facing systems and a representative device population, then expand under an agreed plan. The initial scope should be explicit. Do not present that starting point as a full-business assessment.",
          "Choose a review cadence the team can sustain and add reviews after significant changes. Include new hosting, an acquisition, a new remote-access service or a material software change. Meet with the technical owner to review open work and with leadership when an approval or exception needs a business decision.",
          "The program is functioning when a finding has a route to validation, action and evidence. More frequent scanning helps only when that route can handle the results. Build the route first, then purchase assessment capacity that answers the firm's remaining questions."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "what-a-soc-actually-does",
    "metaTitle": "What a SOC Does: Monitoring, Investigation, and Response | Helm",
    "title": "What a SOC Actually Does: Monitoring, Investigation and Response",
    "metaDesc": "Evaluate SOC monitoring, analyst investigation, containment authority and escalation. Confirm covered signals and the recovery duties retained by existing IT.",
    "date": "2026-07-11",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A security operations center, or SOC, is a team that performs security monitoring and investigation under an assigned operating scope. Buying access to that team can help a smaller business obtain coverage it cannot comfortably staff itself. The value depends on what the team monitors, what it investigates and what action it is authorized to take.",
    "sections": [
      {
        "h": "Start with the covered environment",
        "ps": [
          "List the devices, identities and other sources the proposed service accepts. Confirm the supported platforms and the required setup. A service focused on employee workstations should not be described as monitoring every server, network appliance and business application. A broader service also needs evidence that the intended sources are connected.",
          "Compare the coverage list with the business inventory. Identify devices that are excluded, identities not supported and applications whose activity needs a different approach. Record those boundaries so leadership understands what it is buying. A service can perform its contracted work well while leaving another part of the environment outside scope.",
          {
            "text": "CISA's logging guidance for small businesses recommends working with IT to establish logging and monitoring. The practical procurement question is who turns available records into a maintained investigation process. A configured data source and a staffed operating service have different acceptance checks.",
            "links": [
              {
                "phrase": "logging guidance for small businesses",
                "to": "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/use-logging-on-business-systems"
              }
            ]
          }
        ]
      },
      {
        "h": "Distinguish automatic protection from analyst work",
        "ps": [
          "Security products may block activity or perform a configured response automatically. Analysts can assess available evidence, decide whether an event needs further action and carry out supported steps under the service. Ask the provider which of these functions apply to the proposed account.",
          "Avoid describing every event as waiting in a dashboard until a person opens it. Some controls act automatically; other signals need investigation or contextual information from the customer. The important question is whether the relevant event receives the handling promised in the agreement. Ask how the provider records both automatic actions and analyst decisions.",
          "The customer supplies context that a technical event may not contain. An unfamiliar sign-in may coincide with approved travel, or an unexpected application may have a legitimate owner. Give the service a route to obtain that information without asking employees to reveal passwords or sensitive client content. The investigator should know which customer role can confirm a business fact."
        ]
      },
      {
        "h": "Understand triage and investigation",
        "ps": [
          "Triage determines how an event should be handled under the service. Investigation examines the available evidence and relevant context. Depending on the product and scope, that may include device activity, account events or related signals. The provider should explain what evidence it can access and where visibility ends.",
          "Ask how the service classifies outcomes. An event may be expected activity, unresolved activity needing information or a confirmed situation requiring action. A raw alert count does not tell leadership how many incidents occurred. Request reporting that explains significant decisions and outstanding work.",
          "If the provider needs more information, establish who supplies it and how urgently. A question sent to an unmonitored shared inbox can stall an investigation. Use a primary and backup contact appropriate to the service's coverage, and keep that information current as staff change."
        ]
      },
      {
        "h": "Define containment authority before it is needed",
        "ps": [
          "A response service may be authorized to isolate a covered device or perform a supported account action. Ask exactly which actions are available and which require customer approval. Do not assume an investigation license gives the provider permission to make any change across the business.",
          "Leadership should understand the possible interruption from containment. An isolated laptop may be unavailable during a client deadline. The tradeoff needs to be agreed before an incident, including any special handling for critical systems. The service should have a defined escalation route when the relevant customer contact cannot be reached.",
          "Containment does not automatically include full recovery. Restoring a workstation, reinstalling applications, supplying replacement hardware and investigating wider consequences may involve different teams. Give each duty an owner. The employee needs a clear support route even when several providers perform the work."
        ],
        "table": {
          "caption": "Define containment authority before it is needed",
          "headers": [
            "Function",
            "What to establish before signing"
          ],
          "rows": [
            [
              "Monitoring",
              "Covered signals, source health and operating hours"
            ],
            [
              "Investigation",
              "Human review scope, available evidence and escalation criteria"
            ],
            [
              "Containment",
              "Supported actions and standing or event-specific authority"
            ],
            [
              "Business escalation",
              "Primary contact, backup route and unavailable-contact handling"
            ],
            [
              "Recovery",
              "Existing IT duties and separately scoped specialist work"
            ],
            [
              "Evidence",
              "Available records, retention and approved access"
            ]
          ]
        }
      },
      {
        "h": "Evaluate coverage hours precisely",
        "ps": [
          "A product can collect events continuously while the contracted analyst service operates only during stated hours. A provider can also offer continuous investigation for a defined population. Ask which function the phrase 24/7 describes: collection, notification, analyst investigation or supported response.",
          "For continuous human coverage, ask who operates the team and how customer events reach it. You do not need a fictional estimate of how many analysts a small business would have to hire. You need the proposed service's written coverage, responsibility and escalation arrangements. Those are verifiable procurement facts.",
          "Check what happens during holidays and provider transitions. Identify the support route outside the customer's office hours and the method used for urgent contact. An overnight event should not depend on the one employee who happens to remember a vendor's phone number."
        ]
      },
      {
        "h": "Test the handoff with a harmless exercise",
        "ps": [
          "Arrange a vendor-supported, authorized test using harmless sample activity. State the expected result and the boundaries. Follow the event into the service and record the observed handling. The purpose is to examine the route and authority, not to prove that every possible attack will be detected.",
          "If the demonstration triggers an automatic action, identify it as automatic. If analyst review is part of the contracted service, ask for the appropriate evidence that this function is operating. A demonstration of a console feature should not silently become proof of continuous human investigation.",
          "Include the customer's side of the handoff. Can the primary contact identify the event and reach IT? Does the backup contact have the authority needed? Does IT know whether a device remains isolated before attempting repair? Resolve confusion while the exercise is controlled."
        ]
      },
      {
        "h": "Connect response to the wider incident plan",
        "ps": [
          "A SOC handles its assigned security work. The business still needs decisions about finance, continuity, counsel, insurance and communication when the facts require them. Keep those decisions in the firm's incident plan with trusted contact information and authority.",
          {
            "text": "NIST's incident-response guidance places response within the broader management of cybersecurity risk. For a smaller firm, a usable plan connects the technical response with the people who can make business decisions. The provider's escalation should enter that plan rather than end in an isolated support ticket.",
            "links": [
              {
                "phrase": "incident-response guidance",
                "to": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
              }
            ]
          },
          "A suspected fraudulent transfer, for example, may require immediate contact with the bank while authorized teams investigate the account activity. Technical investigation should not delay that financial action. The actual response depends on the event; assign parallel duties where appropriate and record confirmed facts without premature conclusions."
        ]
      },
      {
        "h": "Review records and service boundaries",
        "ps": [
          "Ask what evidence the customer can obtain about a significant event: time, affected asset, classification, action, escalation and unresolved questions. Logs and investigation records may contain sensitive information. Keep them in an approved restricted location with access appropriate to the response.",
          "Clarify retention and export arrangements. If a client requirement calls for particular records, determine whether the service can supply them before answering the questionnaire. A monthly summary and a complete forensic record are different deliverables. Do not assume one includes the other.",
          "At contract end, agree on removal of access, records the firm needs to retain and the date the new service takes over. A gap between cancellation and accepted replacement can leave coverage unclear. Confirm the handover using the covered population and service acceptance criteria."
        ]
      },
      {
        "h": "Use reports to resolve a decision",
        "ps": [
          "Ask the service report to identify missing coverage, significant investigations and customer actions still open. If ten devices stopped reporting, leadership needs to know which owner is checking them and when the result is due. If an investigation needs a business explanation, name the contact supplying it.",
          "A response-time measure needs a defined starting event and completion event. Time to acknowledge an alert differs from time to investigate or contain the situation. Ask how the provider measures each figure before comparing services. Keep exclusions and assumptions beside the measure so an attractive average does not conceal an unresolved event or an uncovered source."
        ]
      },
      {
        "h": "Where Helm fits",
        "ps": [
          {
            "text": "Helm Core includes device detection and response for eligible Windows and Mac workstations within a defined standardized stack, alongside other covered protections. Specialist vendor teams operate the continuous monitoring and containment behind covered capabilities. Helm does not staff its own 24/7 SOC. Confirm supported identity functions and response actions during fit review.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core/"
              }
            ]
          },
          {
            "text": "Helm Command adds risk and roadmap ownership, evidence upkeep, leadership reviews and coordination with the named IT owner. Existing IT retains administration, patching and routine remediation. Specialist forensic response and hands-on recovery require separate written scope. Program coordination should make those boundaries clear rather than suggest that every task is included.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command/"
              }
            ]
          },
          {
            "text": "Start with the current device inventory, existing detection services and incident contacts. Use the incident-response resource to review the business handoff. Helm's free public-domain scan examines limited public configuration; it cannot determine internal monitoring coverage, analyst handling or device health.",
            "links": [
              {
                "phrase": "incident-response resource",
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
    ],
    "takeaway": "Evaluate a SOC by its covered signals, investigation duties, authorized actions and escalation route. Assign recovery and wider business decisions before relying on the service during an incident.",
    "lead": [
      "An alert arriving at any hour does not by itself establish that an analyst reviewed it or that a response occurred. Ask about the full route from a covered event to a business decision. That route should identify the service's authority, the customer's contacts and the work retained by existing IT."
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "what-is-dmarc",
    "title": "What Is DMARC? A Plain-English Guide for Business Owners",
    "metaDesc": "Learn what SPF, DKIM and DMARC check. Inventory senders, review reports and plan enforcement without treating authentication as a fraud guarantee.",
    "date": "2026-06-10",
    "updated": "2026-10-07",
    "readMin": 8,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "An email can display your company’s name without being sent by your company. That creates a specific business problem: a customer may receive a convincing invoice or payment-change request that appears to come from you. Email authentication helps receiving systems evaluate whether a message is authorized to use your domain.",
    "sections": [
      {
        "h": "What SPF, DKIM and DMARC each check",
        "ps": [
          {
            "text": "SPF checks whether a sending server is authorized for the domain used in the message’s envelope sender. DKIM verifies a domain’s cryptographic signature over selected message content. DMARC checks whether a passing SPF or DKIM result aligns with the visible From domain. One aligned, passing method can satisfy DMARC; both are not required to pass. These distinctions are defined in the current IETF DMARC standard.",
            "links": [
              {
                "phrase": "current IETF DMARC standard",
                "to": "https://datatracker.ietf.org/doc/html/rfc9989"
              }
            ]
          },
          "Alignment explains why a message can pass an authentication check and still fail DMARC. A billing platform might authenticate its own domain successfully while displaying your company’s domain in the From address. Your administrator needs to configure the supported sending arrangement so the relevant domains align.",
          "Ask for a test message from each business service, with the receiver’s authentication results inspected by your IT provider. A screenshot showing a DNS record exists is useful configuration evidence. It does not establish that an invoice sent through a particular platform passes DMARC at its destination."
        ]
      },
      {
        "h": "What the policy settings mean",
        "ps": [
          {
            "text": "The familiar policy values are p=none, p=quarantine and p=reject. They express progressively stricter preferences for messages that fail DMARC. Monitoring with p=none is a legitimate deployment stage, especially when reports are being collected to identify overlooked senders. It is not a request to quarantine or reject failures. Receiving systems also apply their own handling rules. Microsoft’s deployment guidance explains the relationship between authentication, policy and rollout.",
            "links": [
              {
                "phrase": "Microsoft’s deployment guidance",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure"
              }
            ]
          },
          "Do not judge maturity by the policy value alone. A reject policy with an unmaintained sender inventory can interrupt legitimate business mail. A monitoring policy with no review owner can remain unchanged indefinitely. The useful outcome is enforcement supported by an accurate inventory and an ongoing maintenance process."
        ],
        "table": {
          "caption": "What the policy settings mean",
          "headers": [
            "Policy",
            "Useful business interpretation",
            "What to review"
          ],
          "rows": [
            [
              "None",
              "Gather evidence before enforcement",
              "Someone receives reports and resolves legitimate failures"
            ],
            [
              "Quarantine",
              "Treat failing mail as suspicious",
              "Business-critical senders and customer delivery are tested"
            ],
            [
              "Reject",
              "Request rejection of failing mail",
              "Known senders, exceptions and change handling are documented"
            ]
          ]
        }
      },
      {
        "h": "Build the sender inventory before changing DNS",
        "ps": [
          "Your main email platform is only one part of the inventory. Accounting software, appointment tools, payroll systems, website forms, customer support platforms and marketing services may all send messages in the company’s name. Some are owned by IT. Others were bought directly by department managers.",
          "Have each department identify its sending services and the business process each supports. Record the visible From address, platform owner, administrator, expected recipients and sending frequency. Include low-volume tools: a quarterly statement or annual renewal notice may not appear during a short observation window.",
          "Separate active senders from retired accounts. A service that no longer has a business purpose should not retain unnecessary sending authority. Check whether website forms use a supported mail service rather than a forgotten server arrangement. Ask the website provider who owns that configuration and how changes are tested.",
          "This inventory also prevents a common ownership gap. The person who controls DNS may not know which invoicing system finance uses. Finance may assume its vendor handles everything. Put both people in the change review so a technical update does not break a business process that nobody included in the test plan."
        ]
      },
      {
        "h": "Use reports to investigate, not to guess",
        "ps": [
          {
            "text": "DMARC reporting can help your administrator identify sending sources and authentication outcomes. The detailed report formats are specified separately in the IETF’s aggregate reporting standard. Business owners usually need a short interpretation rather than raw report files.",
            "links": [
              {
                "phrase": "aggregate reporting standard",
                "to": "https://datatracker.ietf.org/doc/html/rfc9990"
              }
            ]
          },
          "Ask the reviewer to distinguish approved senders, approved senders that need repair, unexplained sources and known unauthorized activity. Do not authorize an unfamiliar source simply because it sends many messages. First identify the service, confirm its owner and establish whether the business actually uses it.",
          "For a legitimate failure, record the cause and fix. Possibilities to investigate include a platform configuration change, a newly added sending domain, an outdated integration or a forwarding path. Your IT provider should test the explanation against actual messages rather than making repeated DNS changes until a dashboard looks better.",
          "Keep a decision log with the date, source, business owner, evidence reviewed and action taken. That becomes useful when the same service changes its infrastructure later. It also lets a new administrator understand why a particular sender was approved without reconstructing the entire history from email."
        ]
      },
      {
        "h": "Move toward enforcement with a business test plan",
        "ps": [
          "Treat enforcement as an operational change. Define the sending processes that must work, the people who will test them and the way staff will report delivery problems. Include invoices, password-reset messages, appointment reminders and other messages whose failure could delay work or confuse customers.",
          "Choose test recipients outside your organization. Internal delivery alone does not show how another provider handles your mail. Ask the reviewer to check both delivery and authentication results. A message reaching an inbox once is weaker evidence than a documented result from the intended sending configuration.",
          "Schedule the change when the responsible staff can investigate problems. Avoid making the first enforcement change immediately before a major billing run if nobody can monitor the outcome. Record the previous configuration, the approved update and the recovery procedure with the person authorized to carry it out.",
          "The observation period should cover relevant business activity. There is no universal number of days that proves every sender is ready. A company with an annual notification service needs to test that service directly rather than assuming two quiet weeks represent a complete inventory.",
          "After enforcement, keep the sender approval process. Adding a new platform should trigger an authentication review before it sends customer-facing messages. DNS access, service ownership and change records remain part of the control. DMARC is easier to maintain when it is connected to ordinary purchasing and onboarding decisions."
        ]
      },
      {
        "h": "An illustrative billing-platform example",
        "ps": [
          "Suppose a firm sends routine mail through its productivity suite, invoices through an accounting platform and appointment reminders through a separate service. This is an illustrative example, not a Helm customer case. The productivity suite passes DMARC, but the accounting platform uses an unaligned sending arrangement.",
          "If the firm changes to rejection without testing invoices, customers may stop receiving legitimate bills. The right sequence is to identify the invoice sender, follow that vendor’s supported authentication procedure, send test invoices and review the receiver’s results. The same review should cover reminders even if they account for few messages.",
          "Once those senders are verified, the firm can assess enforcement with much better evidence. Its inventory should state who approves future platform changes. Otherwise, a new marketing tool added several months later can recreate the problem while the original project is still recorded as complete."
        ]
      },
      {
        "h": "What DMARC does not prevent",
        "ps": [
          {
            "text": "DMARC does not establish that every authenticated message is honest. A criminal using a compromised legitimate mailbox can send through an authorized system. A lookalike domain can also have its own valid authentication. The FBI’s business email compromise guidance describes several impersonation and account-compromise routes.",
            "links": [
              {
                "phrase": "FBI’s business email compromise guidance",
                "to": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
              }
            ]
          },
          "Keep payment verification independent of the incoming message. Use a known contact route before changing banking instructions, and require the appropriate approval before releasing money. Domain authentication supports that process; it does not replace it.",
          "Protect the accounts and devices behind legitimate mail as well. Review administrator access, MFA, suspicious sign-in handling and the process for reporting a questionable message. A business can have a well-configured public domain and still expose itself through an overprivileged account or a compromised user."
        ]
      },
      {
        "h": "Questions to ask your provider",
        "ps": [
          "Ask who maintains the sending inventory, who reviews reports and how often business owners receive an explanation of unresolved failures. The answers should identify people and records, not just a software product.",
          "Request evidence for your important senders: an actual test, the authentication outcome and the date checked. Ask how a new billing or marketing platform gets approved. If the provider only manages the main email suite, identify who owns the other services before assuming they are included.",
          {
            "text": "Also clarify the boundary of any public scan. Helm’s free public domain scan checks published email and web configuration, including DMARC. It does not sign in to your tenant, read your messages or prove that every approved sending service is configured correctly. An authorized review with your IT provider is needed to answer those internal questions.",
            "links": [
              {
                "phrase": "free public domain scan",
                "to": "/free-scan/"
              }
            ]
          }
        ]
      },
      {
        "h": "A useful owner’s checklist",
        "ps": [
          "Before treating the work as complete, confirm that the sender inventory covers the services the business actually uses. Each approved service should have an owner, a supported authentication arrangement and a recorded test. Reports should reach a monitored destination, with unexplained sources assigned for investigation.",
          "Confirm that enforcement has a documented business test and a recovery procedure. Staff should know where to report missing mail. Future purchases should include a sending review, and departed administrators should not retain DNS or platform access.",
          "The decision to make now is small: name the person who owns the inventory and ask for the current state of your important sending services. That creates a concrete path from a public DNS record to a maintained business control."
        ]
      }
    ],
    "takeaway": "DMARC helps receivers evaluate authorized use of your visible email domain. Build the sender inventory, inspect real message results, review reports and move toward enforcement carefully. Keep account security and payment verification alongside it.",
    "lead": [
      "DMARC connects that evaluation to the domain people see in the message’s From address. It also lets a domain owner publish a policy and request reports. For an owner, the practical questions are straightforward: which services send email in your name, are their messages authenticated correctly, and who reviews failures before they affect customers?"
    ],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "windows-defender-vs-managed-security",
    "title": "Windows Defender vs Managed Endpoint Security: Which Is Right for Your New Jersey Business",
    "metaTitle": "Windows Defender vs Managed Endpoint Security | Helm",
    "metaDesc": "Check the exact Defender product, active licenses and reporting devices. Then compare who investigates alerts and performs authorized response.",
    "date": "2026-10-06",
    "readMin": 8,
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
      },
      {
        "h": "Ask which Defender the proposal means",
        "ps": [
          "Defender Antivirus, Defender for Endpoint and Defender for Business should not be used interchangeably in an evaluation. Ask for the exact product, plan and tenant configuration. Then ask which capabilities are enabled for the proposed devices. An included license does not establish that the service has been deployed or that someone operates it.",
          {
            "text": "Microsoft's endpoint overview describes different licensing and platform capabilities. Confirm requirements against the current documentation. Do not assume a Windows configuration can be applied unchanged to a Mac, mobile device or server. The commercial and technical scope should identify those differences.",
            "links": [
              {
                "phrase": "endpoint overview",
                "to": "https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint"
              }
            ]
          },
          "Before paying to replace an existing product, ask IT to show its current state. Is the intended protection active? Are relevant updates current? Which devices report? What evidence is available about policy application and significant exceptions? This review can reveal a configuration or operating gap that a brand comparison would miss."
        ]
      },
      {
        "h": "Compare the duties around detection",
        "ps": [
          "Use the same duties in both proposals. An internally managed platform is not free simply because the license is already purchased. A managed service is not comprehensive simply because it includes a security product. Document the time, authority and expertise supplied in each arrangement.",
          "If a proposal leaves a duty with the firm, name the person who will perform it. A statement that the customer handles alerts needs a practical answer about staff availability and escalation. If the provider handles investigation, define which connected systems and signals are part of that coverage."
        ],
        "table": {
          "caption": "Compare the duties around detection",
          "headers": [
            "Duty",
            "Question for internal operation",
            "Question for managed operation"
          ],
          "rows": [
            [
              "Device enrollment",
              "Who verifies each new eligible device?",
              "What population does the provider accept and reconcile?"
            ],
            [
              "Policy maintenance",
              "Who reviews changes and exclusions?",
              "Which policy changes are included and who approves them?"
            ],
            [
              "Investigation",
              "Who assesses covered alerts and when?",
              "Which alerts receive human review under the service?"
            ],
            [
              "Containment",
              "Who can authorize and perform the action?",
              "What standing authority does the provider have?"
            ],
            [
              "Recovery",
              "Who returns the device to working use?",
              "Which recovery tasks require existing IT or separate scope?"
            ],
            [
              "Evidence",
              "Who retains coverage and response records?",
              "What reports and records can the firm obtain?"
            ]
          ]
        }
      },
      {
        "h": "Look at device health, not only installation",
        "ps": [
          "An agent delivered to a device may still fail to report or operate as intended. Review the current reporting population and the acceptance criteria used by IT. Compare that with the eligible inventory. Retired devices and duplicate entries should not inflate the coverage figure.",
          "Investigate stale reporting rather than assuming it means the employee is on leave. The device may be powered off, replaced, unavailable or experiencing a deployment problem. Assign the determination to the appropriate owner. Record the status before removing an entry from the console.",
          "Exceptions need the same attention. Ask why an exclusion exists, what it covers and who approved it. A broad exclusion added to resolve an application issue can remain after the original reason has disappeared. Give material exceptions a review date and a responsible owner."
        ]
      },
      {
        "h": "Understand what response includes",
        "ps": [
          "A detection product may block some activity automatically under its configuration. An investigation service may review an alert and decide on a supported action. These are different capabilities. Ask the provider to explain what is automatic, what receives analyst review and what requires customer approval.",
          "For device isolation, establish what happens to the employee's work and who handles restoration. A protected laptop used for a client deadline can be an appropriate containment target while creating an immediate business interruption. Leadership should understand that decision when agreeing to standing authority.",
          "Do not assume that isolating a device includes forensic examination, rebuilding, replacing hardware or restoring every application. Those duties may belong to IT or a separately engaged specialist. Get the boundary in writing and give employees one reporting route that reaches the relevant teams."
        ]
      },
      {
        "h": "Test a realistic handoff",
        "ps": [
          "Use a vendor-approved harmless exercise to follow a covered event through the process. Confirm the test is authorized and record the expected result. The test should demonstrate the agreed routing and escalation, with the limits of the exercise stated clearly.",
          "Ask who receives the event, how it is classified and how the firm is contacted. Check the backup contact when the primary person is unavailable. If the demonstration shows an automated action, do not present it as evidence that a human investigated that particular event. Request the relevant evidence for the contracted service.",
          "Also test the business handoff. An employee whose laptop is unavailable needs support instructions. IT may need the containment status before attempting repair. The business owner may need to approve a replacement arrangement. A working security console does not by itself demonstrate those steps."
        ]
      },
      {
        "h": "Estimate costs from your environment",
        "ps": [
          "Use the actual device and user population. Include additional devices, unsupported systems, deployment effort and work retained by IT. Ask whether license costs, investigation and routine reporting are included. Clarify the fees for separately scoped recovery or specialist work.",
          "For an internal arrangement, estimate the recurring work without inventing a guaranteed labor saving. Record the people maintaining enrollment, policies, investigations and evidence. If they already perform those duties, identify whether the proposed change would replace work or add another overlapping process.",
          "For managed operation, ask what happens when device counts or business requirements change. Compare the service order with the inventory and intended response authority. The cheapest quoted total can be misleading when it excludes an important population or leaves an essential duty unresolved."
        ]
      },
      {
        "h": "Plan a supported transition",
        "ps": [
          "Coordinate installation, coexistence and removal with existing IT and the product vendors' current guidance. Avoid an unsupported period with conflicting products or an unnecessary gap in protection. Use a representative pilot before expanding to the eligible population.",
          "Preserve the reporting and incident records the firm needs from the old service. Agree on who removes prior access, who validates the new state and who supports employees during the move. Cancellation and technical handover should be coordinated so the firm knows which service is active at each stage.",
          "After transition, confirm the accepted device population, policy state, exclusions and escalation contacts. Keep the dated acceptance record. A service agreement proves what was purchased; that record helps establish what was actually deployed and assigned."
        ]
      },
      {
        "h": "Choose around the missing responsibility",
        "ps": [
          "If existing IT operates the platform effectively and supplies the required coverage, evidence and response, the firm may need a narrower improvement rather than a wholesale replacement. If nobody owns investigation or urgent containment, address that duty directly. The product name alone cannot settle the choice.",
          "Leadership should leave the evaluation knowing which devices are covered, which service investigates, what action it can take and who restores business use. Those are practical, verifiable commitments. They support a stronger decision than a claim that a familiar antivirus brand is always sufficient or inherently inadequate."
        ]
      }
    ],
    "updated": "2026-10-07"
  },
  {
    "slug": "wire-fraud-prevention-law-firms",
    "metaTitle": "Wire Fraud Prevention for Law Firms: Callbacks | Helm",
    "title": "Wire Fraud Prevention for Law Firms: The Callback Protocol",
    "metaDesc": "A practical known-number callback protocol for law firms handling changed wire instructions, including approvals, evidence, testing, and immediate response steps.",
    "date": "2026-06-17",
    "updated": "2026-10-07",
    "readMin": 9,
    "lane": "Law Firms",
    "laneTo": "/law-firms",
    "intro": "A closing or settlement can put a large transfer, several parties, and a hard deadline into one email thread. If a criminal compromises that thread and changes the account number, staff may release the funds before the real client or title company knows anything changed. A known-number callback gives the firm a way to verify the instruction outside the email conversation.",
    "sections": [
      {
        "h": "Why the email can look completely legitimate",
        "ps": [
          "The FBI describes business email compromise as a request that appears to come from a known source. In a legal payment workflow, the attacker can wait for a real transaction and then introduce a changed account number, a new beneficiary, or pressure to release funds before a deadline.",
          "Grammar, logos, signatures, and reply history are weak evidence. A message sent from a compromised real mailbox may pass normal email-authentication checks. The control therefore cannot depend on a staff member noticing a visual clue that may not exist."
        ]
      },
      {
        "h": "Write the payment rule before the matter becomes urgent",
        "ps": [
          "At intake or the start of the payment process, record a known-good phone number for every party authorized to give or change instructions. Store it in the matter file or another controlled record. Do not wait for a change request to decide which number is trustworthy.",
          "Name the roles that can receive instructions, perform the callback, approve a release, and resolve an exception. Set a dual-approval threshold based on the firm's transaction profile and insurer or client requirements. The rule should also state that urgency, seniority, and a familiar voice do not waive verification."
        ]
      },
      {
        "h": "The callback protocol",
        "ps": [
          {
            "text": "Pause any new or changed payment instruction. Call the known-good number already held in the file, not a number contained in the request. Ask the authorized person to confirm the beneficiary, financial institution, routing details, account information, and reason for the change. Then record the verifier, time, number used, result, and approver before releasing the payment.",
            "links": [
              {
                "phrase": "payment instruction",
                "to": "/helm-command"
              }
            ]
          },
          "Test the procedure with an authorized simulation and include the awkward cases: a partner asks to skip the rule, the usual contact is unavailable, or the change arrives minutes before a cutoff. The drill should test whether the process survives pressure, not whether one person can spot a fake email."
        ]
      },
      {
        "h": "What email controls can and cannot do",
        "ps": [
          {
            "text": "SPF, DKIM, and DMARC can make unauthorized use of the firm's exact domain harder. Managed filtering, threat protection, reporting, and triage can reduce the malicious messages that reach staff. Neither control can make a payment change trustworthy, and neither stops every request sent from a compromised real account or a convincing lookalike domain.",
            "links": [
              {
                "phrase": "Managed filtering",
                "to": "/helm-core"
              }
            ]
          },
          "Use technical controls to reduce exposure and the callback to authorize the money. Keeping those jobs separate prevents the firm from treating an email-security pass as approval of a financial instruction."
        ]
      },
      {
        "h": "If a transfer has already been sent",
        "ps": [
          "Contact the sending financial institution immediately and ask it to contact the receiving institution. Report the event to the FBI Internet Crime Complaint Center, preserve the original messages and headers, and record the timeline without altering the affected mailbox or device more than necessary.",
          "Follow the firm's incident plan for insurer, counsel, client, law-enforcement, and professional-responsibility decisions. The right notification path depends on the facts and jurisdiction, so preserve what happened and involve the appropriate advisers instead of making an early conclusion about exposure."
        ]
      },
      {
        "h": "Treat the instruction as a financial decision",
        "ps": [
          "The payment control begins before the suspicious message. Identify the matters in which the firm receives, verifies or releases money, and map the people involved. A lawyer, assistant, accounting employee, client and outside closing party may each see a different part of the transaction. The process needs to identify which person has authority to change instructions and which person has authority to release funds.",
          "Do not let an email thread become the sole record of that authority. At intake, document the approved contacts and the agreed verification route. Tell the client how the firm handles payment instructions and changes. The objective is to make an unexpected change a defined exception requiring verification, rather than a routine edit someone makes under deadline pressure.",
          "A callback also needs an appropriate human process. Calling a known number is useful only if the person reached can authorize the instruction and the verifier confirms the relevant details. A rushed call that asks only whether the recipient sent an email leaves room for misunderstanding. Use the agreed record and read back the details necessary to approve the actual transfer."
        ]
      },
      {
        "h": "Use the reported data carefully",
        "ps": [
          {
            "text": "The FBI's 2025 Internet Crime Report lists 24,768 business email compromise complaints and about $3.05 billion in reported losses. Those totals cover reports across affected organizations and people, not the incidence of fraud in law firms. They establish the reported scale of the category without predicting a particular firm's likelihood of loss.",
            "links": [
              {
                "phrase": "2025 Internet Crime Report",
                "to": "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
              }
            ]
          },
          "For your own practice, useful operating data may be much simpler: how many changes were independently verified, how many exceptions occurred and how many releases lacked the required approval record. These measures identify whether the procedure is being followed. They are not a claim about how many attacks were prevented, because the firm may not know which unverified requests would have been fraudulent."
        ]
      },
      {
        "h": "Record a verification trail without spreading sensitive details",
        "ps": [
          "Limit access to bank details and verification records to the people who need them. The audit trail can reference the controlled instruction rather than copying full account information into every status email. Follow the firm's records and confidentiality requirements for storage. This article supplies an operating pattern, not a determination of trust-account rules for a jurisdiction.",
          "Make sure the record connects the approval to the version actually executed. If someone verifies one account and a later message supplies another, the earlier verification should not silently authorize the replacement. Treat the new instruction as a new decision. Similarly, a successful callback from a prior matter is not evidence that a changed instruction in this matter has been approved."
        ],
        "table": {
          "caption": "Record a verification trail without spreading sensitive details",
          "headers": [
            "Step",
            "Responsible role",
            "Evidence to retain"
          ],
          "rows": [
            [
              "Establish contact",
              "Matter owner or approved intake staff",
              "Source and date of the trusted contact record"
            ],
            [
              "Receive instruction",
              "Designated recipient",
              "Original instruction and request time"
            ],
            [
              "Verify independently",
              "Authorized verifier",
              "Number source, authorized person, confirmation and result"
            ],
            [
              "Approve release",
              "Required approver or approvers",
              "Approval linked to the verified instruction"
            ],
            [
              "Execute and reconcile",
              "Authorized payment operator",
              "Transaction record and reconciliation outcome"
            ]
          ]
        }
      },
      {
        "h": "Plan for the cases that break the routine",
        "ps": [
          "The usual contact may be unavailable near a payment cutoff. The approved response is to use the established alternate verification route or delay the release until authorized verification is complete. Create that route before a deadline. Staff should not have to invent a trustworthy phone number by searching an urgent email or following a link from the same request.",
          "A senior partner may ask to skip the step for an important client. Decide who can approve an exception and what independent evidence is required. An exception should be a recorded business decision, not an undocumented shortcut. Where the firm's rule prohibits bypassing verification, leadership needs to support staff who pause the transaction.",
          "A familiar voice or video call can add confidence without establishing authority. If the request initiates an unusual payment or changes the beneficiary, follow the independently established process. Staff should not be expected to diagnose synthetic audio under pressure. The business control is the approved route, authorized person and recorded instruction."
        ]
      },
      {
        "h": "Pair the payment rule with account protection",
        "ps": [
          "Review authentication on the accounts used for financial instructions, reporting routes for suspicious messages and the response process for a compromised mailbox. A mailbox incident can affect a legitimate conversation and expose transaction details. Investigating it requires the authorized IT and security teams, with attention to account sessions, rules and other relevant evidence in the actual platform.",
          "When a client or outside party reports a suspicious payment message, verify the report through a trusted contact and preserve the original information. Do not forward a live malicious attachment around the firm to ask opinions. Use the agreed reporting procedure so the team can investigate while limiting unnecessary exposure.",
          "Provide staff with examples that fit their work: a changed settlement beneficiary, an updated closing account or a request to send money to a new intermediary. Use harmless training records. The exercise should assess whether employees follow verification and escalation, not whether they recognize one poorly written sample. Real instructions may be polished and familiar."
        ]
      },
      {
        "h": "Act quickly after a suspected fraudulent transfer",
        "ps": [
          {
            "text": "The FBI business email compromise guidance advises immediate contact with the financial institution and reporting to IC3. Record the bank contact time, transaction details supplied, case or reference numbers and the instructions received. A recovery request is time-sensitive; it should not wait for the firm to finish determining how the mailbox was compromised.",
            "links": [
              {
                "phrase": "FBI business email compromise guidance",
                "to": "https://www.fbi.gov/how-we-can-help-you/common-frauds-and-scams/business-email-compromise"
              }
            ]
          },
          "Assign parallel work under the incident plan. The payment owner handles the bank contact, authorized IT and security personnel investigate account access, and leadership engages the appropriate insurer and advisers. Preserve messages, relevant logs and the sequence of decisions. Avoid making unsupported statements about responsibility or recoverability while the facts are still developing.",
          "Notify affected parties through trusted channels following the approved advice. If a compromised account is still under investigation, do not use it as the only route for sensitive instructions about the incident. Explain confirmed facts and required actions clearly. Record what was communicated and by whom."
        ]
      },
      {
        "h": "Test the protocol with a short exercise",
        "ps": [
          "Choose a harmless scenario with a last-minute beneficiary change and an unavailable primary contact. Ask staff to show the trusted record, verification route, approval and decision to pause or release. Include the payment operator so the exercise tests the full chain rather than stopping when someone spots the problem.",
          "Review missing records and ambiguous authority afterward. Assign a specific correction, such as an alternate verified contact or a clearer approval threshold. Repeat the affected step once the correction is implemented. A completed training session is evidence of participation; a tested payment process provides more useful evidence of how the firm would handle the request."
        ]
      }
    ],
    "takeaway": "Record trusted phone numbers before the payment becomes urgent. Call one of those numbers for every new or changed instruction, require the appropriate approval, and keep a log showing who verified the transfer.",
    "lead": [],
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "wisp-checklist-accounting-firms",
    "title": "WISP Checklist for Tax and Accounting Firms",
    "metaDesc": "What a Written Information Security Plan should contain for a small tax or accounting firm, with IRS and FTC requirements translated into an operating checklist.",
    "date": "2026-08-18",
    "readMin": 8,
    "lane": "Accounting Firms",
    "laneTo": "/accounting-firms",
    "intro": {
      "text": "A generic Written Information Security Plan can create a second problem during a breach or review: it may claim safeguards that the firm never implemented and omit the systems that actually hold client tax data. The IRS says tax professionals must maintain a WISP, and FTC guidance identifies tax-preparation firms among covered financial institutions. IRS WISP guidance, FTC Safeguards Rule guidance. The document needs to describe the practice as it operates today.",
      "links": [
        {
          "phrase": "IRS WISP guidance",
          "to": "https://www.irs.gov/newsroom/tips-to-help-tax-professionals-protect-client-information"
        },
        {
          "phrase": "FTC Safeguards Rule guidance",
          "to": "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know"
        }
      ]
    },
    "ctaMode": "book",
    "sections": [
      {
        "h": "Why the plan needs current facts",
        "ps": [
          {
            "text": "IRS Publication 5708 supplies a starting outline and sample material. It expressly describes the material as a starting aid rather than a substitute for developing a plan around the firm’s own needs. Treat the template as a set of questions to resolve, not as evidence that the listed safeguards operate.",
            "links": [
              {
                "phrase": "IRS Publication 5708",
                "to": "https://www.irs.gov/pub/irs-pdf/p5708.pdf"
              }
            ]
          },
          "A WISP should be appropriate to the size and complexity of the firm and the sensitivity of the customer information it handles. A five-person tax practice does not need the bureaucracy of a national firm, but it does need a plan that accurately describes its own safeguards."
        ]
      },
      {
        "h": "Name the coordinator and the information in scope",
        "ps": [
          "Assign one person to coordinate the information-security program, even if security is not that person’s full-time role. Give that owner the authority to maintain the plan, collect evidence, follow up on exceptions, and coordinate service providers.",
          "Inventory the customer information the firm receives and where it moves: email, portals, tax software, workstations, shared drives, payroll systems, cloud storage, backups, paper records, and vendor platforms. Include seasonal staff and remote work because the plan must cover the way the firm actually operates during its busiest months."
        ]
      },
      {
        "h": "Assess risk and match each safeguard to it",
        "ps": [
          "For each system or workflow, identify the plausible threat, the weakness that could be exploited, the current safeguard, and what remains unresolved. Common examples include mailbox takeover, malicious attachments, stolen passwords, unsupported computers, excessive access, untested backups, and former workers whose accounts remain active.",
          {
            "text": "Helm Core includes managed email protection, suspicious-message triage, simulations, and awareness learning. Specialist vendor security teams provide continuous investigation and containment for covered Windows and Mac devices; Helm manages deployment, coordination, and reporting. Core does not replace the WISP. Its covered controls and operating records can support the statements in the plan.",
            "links": [
              {
                "phrase": "Helm Core",
                "to": "/helm-core"
              }
            ]
          }
        ]
      },
      {
        "h": "Document service providers, testing, and response",
        "ps": [
          "The IRS checklist includes selecting service providers that maintain safeguards for customer information. Record what each provider handles, the relevant contract or assurance evidence, the responsible internal owner, and how the relationship is reviewed.",
          "State how the firm checks whether safeguards still work. That can include account reviews, device-coverage checks, training records, backup restoration tests, phishing reporting, and an annual tabletop. Add a response path for a suspected breach that names the insurer, legal contacts and technology providers. Have the appropriate adviser determine applicable IRS, FTC, state and other reporting duties from the actual event."
        ]
      },
      {
        "h": "Keep the WISP evergreen",
        "ps": [
          "Review the plan after meaningful technology, staffing, vendor, or workflow changes and after any security incident. Record the review date and decisions made, including risks accepted temporarily and the person responsible for closing each gap.",
          {
            "text": "Helm Command can assess the plan against the practice that exists today, identify statements that lack evidence, and produce a prioritized remediation roadmap. Remediation is a separate decision after the gaps are known.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command"
              }
            ]
          }
        ]
      },
      {
        "h": "Check the applicability and scope",
        "ps": [
          "Have the responsible adviser confirm which requirements apply to the firm's activities and information. Tax preparation, bookkeeping and other advisory work should not be collapsed into one assumed legal category without review. The plan should identify the actual activities it describes, including seasonal services and work performed through outside providers.",
          "The FTC guidance also discusses limited exemptions from certain provisions for institutions maintaining customer information concerning fewer than 5,000 consumers. That is a specific applicability question, not a general exemption from maintaining a security program. Ask the adviser to identify the provisions relevant to your firm and record the determination. Do not infer an exemption from the number of employees.",
          "Keep requirements separate from the firm's additional operating practices. A quarterly meeting or a particular product may be useful without being a universal legal mandate. Label the source of each material requirement so future reviewers can distinguish law, client terms, insurer questions and a management decision."
        ]
      },
      {
        "h": "Build a map of client information",
        "ps": [
          "Start with a representative client engagement. Follow intake through document exchange, tax preparation, review, filing, storage and eventual disposition. Identify the systems, people and providers involved. Include paper and temporary files where they contain relevant information. Include intake files, working papers and filing records in the map.",
          "For each location, name the business owner and technical administrator. Record the approved users and the purpose of access. Separate the authoritative record from working copies, email attachments and downloads. A clear map makes it easier to review both security and retention without assuming that deleting one copy disposes of all copies.",
          "Review remote and seasonal work explicitly. A temporary employee may use a different device or have access created shortly before a deadline. Confirm the approved provisioning and departure process. The WISP should describe the safeguards that apply during the busiest period, not only the quieter permanent-staff arrangement."
        ]
      },
      {
        "h": "Connect a risk to a decision and evidence",
        "ps": [
          "These are example operating questions. The actual risk assessment should reflect the firm's information and circumstances. Avoid claiming every risk is low because the firm purchased a security stack. A control can address a particular exposure while leaving another workflow unresolved.",
          "Give each finding a current disposition. It may require corrective work, further investigation or an approved temporary decision. State the action, owner and verification method. If the implementation is planned, describe it as planned. The WISP should not present a future safeguard as already operating."
        ],
        "table": {
          "caption": "Connect a risk to a decision and evidence",
          "headers": [
            "Workflow",
            "Illustrative risk question",
            "Evidence or decision to retain"
          ],
          "rows": [
            [
              "Client document exchange",
              "Can an unintended recipient access the information?",
              "Approved method, recipient checks and test result"
            ],
            [
              "Seasonal account access",
              "Does the worker have only the needed access?",
              "Approved role, enforcement and departure record"
            ],
            [
              "Workstation use",
              "Is the device supported and covered as intended?",
              "Current inventory, reporting health and exceptions"
            ],
            [
              "Recovery",
              "Can a covered workload return to usable operation?",
              "Authorized restore request and verified result"
            ],
            [
              "Vendor handling",
              "What access and safeguards apply to the service?",
              "Relevant agreement, assurance review and owner"
            ]
          ]
        }
      },
      {
        "h": "Make staff instructions usable",
        "ps": [
          "Employees need clear actions for receiving documents, reporting suspicious messages, requesting new tools and handling an unavailable approved service. Put the detailed administrative settings in the authorized technical records, while the staff procedure explains the decisions they make during work.",
          "Train using harmless examples from the firm's workflows. A changed payment instruction, an unexpected document link or a request to upload client files to a new AI tool can each test a different decision. Explain the reporting route and reinforce that asking for help is part of the process.",
          "Record the assigned population and completion. Include new and seasonal staff where relevant. A signed acknowledgment can support the record of instruction, but it does not by itself establish that every technical safeguard operates or that every employee will follow it under pressure."
        ]
      },
      {
        "h": "Review suppliers by their actual role",
        "ps": [
          "List the providers that receive information or have relevant system access. Identify the service, internal owner and approved purpose. Obtain the relevant contractual and assurance evidence through the authorized business process. Ask who handles provider incidents and how the firm is contacted.",
          "For a provider transition, plan data access, export, account removal and continuity before cancellation. Retention and preservation requirements need review before deletion. A new supplier should not inherit unexplained administrative access from the old arrangement.",
          "Keep supplier evidence in a controlled location. The general plan can identify the relationship and review process without exposing passwords, sensitive configuration or client records. Link restricted supporting material through the firm's approved access process."
        ]
      },
      {
        "h": "Test the plan against one incident",
        "ps": [
          "Use a tabletop exercise with a defined harmless scenario. Ask staff to show whom they contact, who can authorize containment, who reaches the insurer and who handles the relevant tax or legal reporting advice. Keep contacts available outside an affected mailbox or tenant.",
          "Record the decisions actually tested and the missing information. If the backup contact lacks authority or the bank number is unavailable, assign a correction. An exercise is useful because it reveals the operating gap, not because attendance establishes comprehensive readiness.",
          "Follow up on the corrections and retain the revised contact or procedure. Review related parts of the WISP so the document and operating process agree. A completed change needs evidence appropriate to its purpose."
        ]
      },
      {
        "h": "Approve and maintain a supported version",
        "ps": [
          "Give the final plan a version, owner, approval date and next review decision. Preserve prior versions under the firm's records procedure. A future reviewer should be able to see what changed and why, without confusing a current statement with one made in a prior period.",
          "Review after material changes in staff, platforms, vendors or workflows, as well as at the firm's planned cadence. Use the actual risk findings and test results to update the plan. Avoid expanding the document with generic policies the firm cannot operate. A concise, accurate procedure with supporting evidence is more useful than a broad promise with no assigned owner."
        ]
      }
    ],
    "takeaway": "Name the person responsible for the WISP, map where client information moves, connect each risk to a safeguard, and document testing, vendors, and incident response. When the document and the practice disagree, correct the control or update the plan.",
    "lead": [],
    "updated": "2026-10-07",
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true
  },
  {
    "slug": "zero-day-vs-known-vulnerabilities",
    "title": "Zero-Day vs Known Vulnerabilities: How Patch Management, Threat Intelligence, and Managed Services Reduce Your Risk",
    "metaTitle": "Zero-Day vs Known Vulnerabilities: SMB Response | Helm",
    "metaDesc": "Use the affected product inventory and vendor advisory to choose mitigation, patching and incident escalation with your existing IT owner.",
    "date": "2026-10-06",
    "readMin": 8,
    "lane": "Professional services",
    "laneTo": "/professional-services/",
    "organizationByline": true,
    "hideVisual": true,
    "readingLayout": true,
    "intro": {
      "text": "A zero-day vulnerability commonly describes a weakness unknown to its vendor or exploited before a fix is available. Terminology can vary, so read the advisory for the actual repair status. A known vulnerability has already been identified, though the affected system may still be unpatched. The terms describe the state of knowledge and repair, not a guarantee about how damaging an attack will be. CISA vulnerability-reporting definitions.",
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
      },
      {
        "h": "Keep the definitions tied to the advisory",
        "ps": [
          "Security reporting sometimes uses zero-day to mean a flaw exploited before a fix is available, and sometimes emphasizes that the vendor was previously unaware of it. That vocabulary should not be the basis of your response decision. Read the vendor's current advisory for the affected versions, available fixes, mitigations and any reported exploitation. Record the facts that apply to your own system.",
          "A known flaw can still create urgent risk when the affected system is exposed and unpatched. Conversely, a widely reported flaw may not apply to the product version or deployment your firm uses. Avoid asking employees to decide applicability from a headline. The authorized technical owner should establish the exact product and configuration.",
          "The business owner needs a clear answer: are we affected, what action is underway and what interruption may be required? If applicability is not yet known, report that uncertainty and assign the check. Silence until every detail is resolved can leave leadership unaware of a decision it needs to make."
        ]
      },
      {
        "h": "Read an advisory in a consistent order",
        "ps": [
          "First identify the product and supported versions. Then check prerequisites for exploitation, the systems or features involved and the vendor's prescribed action. Look for updated revisions to the advisory. Early guidance may change as the vendor provides patches, clarifies affected versions or improves detection instructions.",
          "Next map the affected product to your inventory. Include managed appliances, hosted applications and services operated by outside providers. If a supplier operates the system, ask it to confirm applicability and action through the approved account contact. A supplier's general statement that it takes security seriously does not answer whether your service is affected.",
          "Finally, determine whether the advisory calls for investigation as well as updating. A patch can prevent a particular future exploit while leaving consequences of an earlier compromise unresolved. Keep the version update, exposure reduction and incident investigation as separate entries when the facts require them. Each should have its own completion evidence."
        ]
      },
      {
        "h": "Prioritize using more than a numerical score",
        "ps": [
          "Use these factors with the technical severity score, rather than replacing them with a single label. A score describes aspects of a weakness; it does not know how your firm deployed the product or what business process depends on it. Record enough reasoning for another reviewer to understand the priority.",
          {
            "text": "The CISA KEV catalog supplies evidence of known exploitation. It is one input, not an exhaustive list of every threat relevant to the firm. Federal directive deadlines have their own applicability; do not present them as a universal contractual deadline for private businesses. Your obligations may instead come from the service agreement, client terms or another applicable requirement.",
            "links": [
              {
                "phrase": "CISA KEV catalog",
                "to": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
              }
            ]
          }
        ],
        "table": {
          "caption": "Prioritize using more than a numerical score",
          "headers": [
            "Factor",
            "Practical question"
          ],
          "rows": [
            [
              "Applicability",
              "Is this affected product and version actually present?"
            ],
            [
              "Exposure",
              "Can the relevant attack path reach our deployment?"
            ],
            [
              "Exploitation evidence",
              "Does credible current guidance identify exploitation?"
            ],
            [
              "Business role",
              "What access or information could the affected system expose?"
            ],
            [
              "Available action",
              "Is there a supported patch, mitigation or replacement?"
            ],
            [
              "Change consequence",
              "What testing or outage is needed to make the change safely?"
            ]
          ]
        }
      },
      {
        "h": "Plan temporary mitigation as a temporary decision",
        "ps": [
          "If no patch is available, read the vendor's supported mitigation carefully. It may require disabling a feature, restricting access or changing a configuration. Ask what attack path the measure addresses and what work it interrupts. Document the reason, implementation evidence and remaining exposure.",
          "Set an owner to watch for the permanent fix. A temporary measure can become an unnoticed permanent configuration when nobody revisits it. When the vendor releases a patch, review whether the measure should remain, change or be removed. Test business behavior afterward and retain the final configuration record.",
          "If a mitigation cannot be used because the system supports essential work, escalate the decision to leadership with concrete options. Those may include an outage, restricted access, a supported replacement or another vendor-approved approach. A vague acceptance of cyber risk is less useful than a decision naming the affected service, consequence and review date."
        ]
      },
      {
        "h": "Treat patching as maintained business infrastructure",
        "ps": [
          {
            "text": "NIST frames enterprise patching as preventive maintenance, including identification, prioritization, installation and verification. For a small firm, a workable process begins with an owner and a path to an approved change. Emergency advisories should use that process with the required urgency, rather than starting from an unknown inventory.",
            "links": [
              {
                "phrase": "preventive maintenance",
                "to": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
              }
            ]
          },
          "Agree on how IT tests important applications, schedules interruption and handles failed installations. Routine maintenance windows help with ordinary updates, but an actively exploited exposed system may need a separate urgent decision. The decision should state the business consequence of acting and of delaying.",
          "Keep unsupported systems visible. A product outside its support period may not receive the required repair. Repeatedly documenting that no patch exists does not resolve the underlying dependency. Put replacement or retirement on the business roadmap, with an owner and a date."
        ]
      },
      {
        "h": "Verify both the change and the remaining situation",
        "ps": [
          "Ask the technical owner to confirm the installed version or other appropriate configuration evidence after action. Record failures and devices that did not receive the update. A deployment command marked complete can differ from the state of the affected system.",
          "If suspected exploitation prompted an incident response, follow the responder's guidance about logs, evidence and recovery. Do not close the incident merely because the current version is patched. The team may still need to assess access, affected information and persistence, based on the product and observed activity.",
          "Give leadership a concise update separating confirmed facts from open questions. State the affected population, completed actions, exceptions and next decision. Avoid promises that the patch makes the entire environment safe. It addresses a specified weakness under the conditions documented by the vendor."
        ]
      },
      {
        "h": "Make threat intelligence useful to a small team",
        "ps": [
          "Assign a person or provider to review advisories for the products the firm actually uses. An unrestricted feed of headlines can create more work than the team can act on. Start with the important internet-facing systems and business platforms, then connect relevant advisories to the inventory and change process.",
          "Keep the contact route current for outside operators. A remote-access appliance managed by one provider and laptops monitored by another may require coordinated work. The provider seeing an alert does not automatically own the appliance's patching. Confirm the handoff and retain the service response when the affected asset belongs to a supplier's operating scope."
        ]
      }
    ],
    "updated": "2026-10-07"
  }
];
