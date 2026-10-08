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
    "intro": "An accounting firm can have security tools and still leave a partner chasing control reviews, unresolved exceptions and customer answers. If someone already owns that work, a standardized protection stack may fit. If it keeps falling between partners and IT, compare the program ownership included in Command.",
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
    "takeaway": "If the firm already owns recurring risk decisions, evidence and coordination, compare Core's standardized stack. If that work lacks an owner, review Command's program scope.",
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
          "Give one person at the firm responsibility for the program, then agree which records IT will supply. The written plan needs to describe what staff and IT actually do, including work still outstanding. Copying a vendor's description of its tools will leave those responsibilities unexplained."
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
          "Start with the systems staff use to handle client work: tax and accounting applications, document portals, shared storage and devices. Include temporary workers and outside specialists in that inventory. Otherwise, a protection report for the primary email tenant may look complete while an independent client portal remains outside its coverage.",
          "Once those systems are listed, name the business owner and technical administrator for each important workflow. The business owner can explain how staff use the information and what an interruption would affect. IT can identify the access, configuration and recovery dependencies. Use their explanations to decide which parts of the proposed security service apply.",
          "Review one client-document journey from receipt through retention or disposal. Identify approved transfer methods, where working copies are created and who can access them. Use fictional records for any demonstration. The exercise should expose an unclear handoff without spreading actual taxpayer or client data.",
          "Record unknowns as work to resolve. If nobody can confirm who administers a specialist application, assign that question before claiming it is protected. Service fit depends on supported platforms and a usable operating arrangement, not only employee count."
        ]
      },
      {
        "h": "Separate a written plan from operating evidence",
        "ps": [
          "A written plan records the firm's intended safeguards and responsibilities. Evidence helps establish what is operating within a defined population and period. Keep them connected: a procedure about staff departures should have an owner and records showing how completed departures were handled.",
          "Before telling a customer that all devices are protected, check the device list against deployment records. For a claim that backups are tested, identify the workload, test date and result. A subscription receipt shows that a tool was purchased; an annual policy approval shows that a policy was approved. Neither establishes those operating facts.",
          "Keep exceptions visible. An unsupported device, a delayed access change or a recovery test awaiting IT needs an owner and next action. Do not remove the exception from a customer response merely because the firm intends to correct it. Future work belongs in the roadmap until verified.",
          "Use the detailed WISP resource with the responsible adviser for rule-specific decisions. This service comparison cannot determine every firm's legal obligations. The practical buying question is who will maintain the program record, check evidence and bring unresolved gaps to the person authorized to decide."
        ]
      },
      {
        "h": "Assess whether internal ownership is sustainable",
        "ps": [
          "A partner can own the security program without personally administering every system. The role needs a routine for receiving information, making decisions and following up with IT. Ask how much time the partner can allocate and who covers the role during an absence.",
          "For a hypothetical 30-person practice, internal ownership could work if IT supplies current records, a manager maintains the exception list and partners resolve spending decisions. Core would supply the defined protection layer. Headcount alone does not determine the correct service.",
          "Check how this arrangement holds up during filing deadlines. If questionnaires keep getting postponed, find out what blocks them. Missing evidence calls for different work than a partner with no review time or an unclear approval route. Buying more tools will leave those problems unresolved unless someone takes responsibility for the evidence.",
          "Discuss the same issue with a larger firm before assuming it needs Command. Some larger organizations have a capable internal program function. Others have recurring gaps across several teams. Evaluate the work and complexity against the qualified fit instead of treating the user-count ranges as automatic tier boundaries."
        ]
      },
      {
        "h": "Price the two models over the same scope",
        "ps": [
          "For a fictional firm with 30 covered users, the published Core rate works out to $3,750 per month before separately scoped work or applicable charges. A smaller calculation below $2,500 would still be subject to the published minimum. Neither example is a quote; supported platforms, coverage and written terms need confirmation.",
          "Compare what each proposal leaves your firm responsible for. Subtracting Core's price from Command's price will not isolate an advisory fee, because Command is scoped after a review of fit and complexity. Its service order should explain the covered population and the limits on coordination, evidence work and questionnaires.",
          "Put retained IT charges, transition work, licensing changes and specialist exclusions in the same worksheet. Confirm contract duration, renewal terms and price changes using the proposal. Do not assume that a monthly figure means the service can be canceled month to month.",
          "Avoid assigning a cash value to every hour saved unless the cost actually changes. Reduced evidence-chasing may free partner or IT capacity. That can support the business case, but label it as capacity and use the firm's own time records if you quantify it."
        ]
      },
      {
        "h": "Plan changes around the accounting calendar",
        "ps": [
          "Ask IT which periods make disruptive changes difficult and which controls can be improved safely beforehand. Use that calendar to sequence the work. Urgent findings may still need prompt attention, so give each proposed delay a reason instead of postponing every task until the quiet season.",
          "For an access change, check the required license, enrollment and recovery procedure before rollout. For a backup change, confirm workload coverage and arrange an authorized restore check. Name who can approve the implementation window and what evidence will show completion.",
          "At onboarding, reconcile eligible users and devices with the service records. Document unsupported applications and any separate protection. Establish a trusted reporting route and an escalation contact who can act when the principal partner is unavailable.",
          "Schedule an early review of onboarding exceptions. Check actual deployment, access to reports and the handoff to existing IT before accepting coverage as complete. Keep the responsibility map available as staff or providers change; the signed contract alone cannot show whether those handoffs worked."
        ]
      },
      {
        "h": "Use a specific unfinished task to make the decision",
        "ps": [
          "Bring a redacted questionnaire, a pending restore test or an unresolved access review to the fit discussion. Ask who would do each step under Core and under Command. Identify where the firm's own owner or IT provider must act and where separately scoped work is required.",
          "Ask for a fictional monthly report and, for Command, a sample risk record and leadership agenda. Check whether partners can use them to understand an exception and approve the next action. If the samples leave that unclear, ask how the proposed service will support those decisions.",
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
    "intro": "Before connecting an AI tool to business documents, decide which documents it may use and who should receive the resulting work. A useful task can still involve confidential information or access the firm has not approved. Review the proposed connection, the users and any services receiving the data before enabling it. A business subscription alone does not settle those permissions or confidentiality questions.",
    "takeaway": "Review access, confidentiality, storage, model-training terms, and connected services separately. Start with approved low-sensitivity material and require a person to check the output before it is used.",
    "sections": [
      {
        "h": "Define the documents and permitted use",
        "ps": [
          "Start with the task: who needs the output, which documents it requires and who owns those documents. Before uploading them, check for client confidentiality, personal information and contractual restrictions. The information owner should approve the processing and sharing the task involves.",
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
          "Review those source permissions with your IT provider. Check group membership, shared links and guest access, then examine the permissions each connection requests. Limit the test to the smallest approved document set that can answer the question. Check its actions too: a connection may be able to create, edit, send or delete information as well as read it.",
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
          "For the exact product and license you are considering, make a record of storage, processing location, retrieval access, retention period and deletion behavior. Check files, prompts, outputs and logs separately because the answer may differ for each. IT should verify both that your subscription includes the required controls and that those controls are configured."
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
          "Follow the documents through the proposed task: from their repository to the user, AI platform, connected services and recipient of the finished output. Note where inputs, responses and interaction logs may remain. The resulting summary is another copy to protect, even if the original folder has the right permissions.",
          "That path differs between a manual upload and an ongoing connection. An upload supplies selected material; a connection may make more documents discoverable as the repository changes. Ask whether the exact product indexes content, follows updates or requests access beyond the test folder. Connector behavior varies.",
          "Review actions separately from reading. A connection able to edit records, send messages or delete files has a different consequence from one that retrieves information for a draft. Leave actions outside the approved purpose disabled where the platform allows it. If the requested permissions cannot be limited appropriately, reconsider the connection.",
          "Include other recipients in the review. An approved platform does not automatically approve every third-party agent or integration available inside it. Record each service’s purpose and data handling before enabling it for company information."
        ]
      },
      {
        "h": "Check permissions as an ordinary user",
        "ps": [
          "Once IT has reviewed the permissions, test them with accounts representing the intended users. Check what each account can find both through normal access and through the AI workflow. An administrator's successful test will not establish what an ordinary employee can retrieve.",
          "Check inherited permissions, group membership, broadly shared links and guests. If any of those grant unnecessary access, correct the source permissions. A prompt telling the tool not to reveal a file cannot replace a permission boundary that prevents the user from accessing it.",
          "Create a set of approved dummy documents with clearly different access rules for the test. Confirm that a permitted user can retrieve the intended material and that an account without permission cannot retrieve it. Keep the test controlled; do not use real confidential files to find out whether access isolation works.",
          "Record the account, expected result and observed result. If the result is unexpected, stop the connection and investigate with IT. Do not broaden permissions to make the demonstration succeed before the document owner has approved that change."
        ]
      },
      {
        "h": "Decide which source is authoritative",
        "ps": [
          "Correct access still leaves a content question: which documents should the answer rely on? A tool can summarize an obsolete procedure accurately and produce the wrong instruction. Identify current procedures, superseded versions and drafts before connecting the folder, with owners and review dates where appropriate.",
          "Where the platform supports source references, retain them and check the passages they point to. The reviewer needs to confirm that the cited passage supports the claim and that a surrounding exception does not change it. A document link by itself cannot do that review.",
          "For a policy summary, define which document controls when sources conflict. Resolve that conflict with the responsible owner before using the generated answer. Do not ask the model to decide which legal obligation or company rule should prevail based only on its preferred wording.",
          "Also consider what belongs in the output. A summary may expose sensitive information to a wider audience than the original document. Its destination needs an access review too, particularly if staff intend to paste it into email, chat or a shared presentation."
        ]
      },
      {
        "h": "Keep a usable approval record",
        "ps": [
          "Record the platform, account type, permitted data, purpose, users and reviewer. Note the configuration checked, the sources used to assess vendor terms and the date of review. Assign someone to review the approval again when the workflow or connected service changes.",
          "Keep four decisions distinct in the approval record: whether the firm may provide the data, whether the product supports the required controls, whether they are configured and whether this use has been approved. A procurement decision or business subscription can address part of that review without settling the rest.",
          "Refer uncertain contractual or professional-confidentiality questions to the responsible adviser. An operational reviewer can identify client records and restrictions, but should not decide that an enterprise license permits their disclosure. Record the unresolved question until the appropriate owner answers it.",
          "Define stop conditions in advance. Unexpected access, an unapproved recipient, uncertain retention or output that exposes information to the wrong audience should trigger a review. Staff need a named contact and a practical way to stop using the workflow while that happens."
        ]
      },
      {
        "h": "Plan removal before adding access",
        "ps": [
          "Write down how the organization disconnects the source, revokes the integration and removes unnecessary account permissions when the test ends. Confirm what happens to any indexed or uploaded content under the platform’s documented controls. Disconnecting a source and deleting retained copies are separate questions.",
          "Check offboarding as well. Removing an employee from a source folder may not address information they previously copied into prompts or outputs. Your retention, account and incident processes should account for those records without promising that every copy can be instantly erased.",
          "Use approved dummy material to test removal. IT should verify that the grant has been revoked and that the account can no longer retrieve the source. Record any retention dependency separately; a disappearing chat entry or button is not evidence that all stored copies were deleted.",
          "Scale the record to the task. A narrow synthetic-data test needs less documentation than an ongoing connection to a business repository. In either case, the firm needs to understand where information moves and who is responsible before granting access."
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
    "intro": "A polished email can ask for a password, confidential client information or an unauthorized payment. Spelling and grammar offer clues, but they cannot verify the request. Staff need an approved way to check the action being requested, even when the message reads well.",
    "sections": [
      {
        "h": "Start with what the message asks you to do",
        "ps": [
          "Read the requested action first. A password request, authentication approval, upload, payment change and new application access each need a different check. Compare the request with the firm's normal procedure and confirm that the sender has authority to ask for it.",
          "An invoice can be expected even when the banking change in its thread is not. Verify the change separately. The same applies to a familiar client asking for a file: knowing the client does not confirm that a new upload destination is authorized. Accurate context can make the next instruction convincing without making it legitimate.",
          "Give employees concrete questions: was this action expected, where is the approved record and which trusted contact can confirm it? They should not have to infer intent from a writing style or decide whether an AI model produced the text. A suspicious request can be reported without identifying the technology behind it."
        ]
      },
      {
        "h": "Keep useful clues in their proper place",
        "ps": [
          "Unexpected urgency, secrecy, a new destination or pressure to bypass approval can justify a pause. So can an unusual attachment, changed domain or request for information unrelated to the task. These are clues requiring verification, not a formula that identifies every malicious message.",
          "A compromised real account can send fraudulent instructions without obvious warning signs. A legitimate client can also write hurriedly or make a spelling mistake. Staff need the same verification rule in either case. Train them to check the requested action regardless of how well the message is written.",
          "On a phone, a display name or shortened link can make a mismatch harder to notice. Use an approved application or independently saved address for the task where possible. A link's appearance alone should not become authorization to enter credentials or upload confidential files."
        ]
      },
      {
        "h": "Verify through an established route",
        "ps": [
          "For an account or login issue, open the approved application directly or use the organization's known support route. Do not send a password in reply to an email claiming that IT needs it to check your account. Have the administrator define how legitimate support requests are communicated so staff can compare an unusual request with that procedure.",
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
          "An external-sender label shows that the message came from outside the organization, according to the configured rule. Staff can use it as context when reviewing a request. It cannot establish that an external message is dangerous or that a message without the label is safe."
        ]
      },
      {
        "h": "Use account protection to reduce exposure",
        "ps": [
          "Have IT review authentication enforcement and allowed methods for the relevant accounts. Stronger methods can reduce particular attack paths while requiring an operating plan for enrollment and recovery. Check administrative, vendor and independent application accounts as appropriate to the firm's environment.",
          {
            "text": "The MFA comparison explains what different methods can do. To establish the firm's actual coverage, check the policy, accounts it applies to, exceptions and alternate access paths. Saying that the firm has MFA leaves those questions unanswered.",
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
          "Feedback can help improve the reporting process. A legitimate but confusing message may expose instructions that staff cannot follow. A report made after clicking can still help the authorized team establish what happened and take corrective action. Gather those facts promptly, without making staff diagnose the threat first."
        ]
      },
      {
        "h": "Train around the business decision",
        "ps": [
          "Use harmless training materials reflecting the firm's actual tasks. A tax practice can test document exchange; a contractor can test supplier changes; a law firm can test matter-related payment instructions. The useful measure is whether staff follow the intended verification and reporting steps.",
          "Record the training scenario, who took part, how they responded and what needs correction. Those conditions explain a simulation score and make it useful for improving the process. The score alone cannot describe the firm's overall security or establish that future phishing will be stopped."
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
          "Ask the employee to report promptly and describe the action: opening a message, following a link, entering credentials, approving a prompt, uploading information or releasing money. Those actions can require different responses. Preserve the available facts without assuming every click caused compromise or treating a lack of symptoms as proof that nothing happened.",
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
            "text": "For a suspected fraudulent transfer, contact the bank immediately. The FBI BEC guidance describes that response and IC3 reporting. Do not delay the financial action while determining whether the message was generated by AI.",
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
          "When a convincing request gets through, check the workflow it relied on. Staff may have lacked a trusted contact record, a clear approver or a usable document exchange. Repair that gap so the next employee has a way to verify the request. Another warning poster will not supply the missing contact or decision-maker.",
          "Review the handoff with IT and the security provider: which service covers the report, what information the team needs and how staff reach it urgently. Email filtering does not automatically include investigation of every employee report or account recovery. Assign those duties in the written scope.",
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
          "A report should identify the message time, apparent sender and requested action, then describe what the employee did. Opening a link, entering credentials, approving a prompt, uploading information and releasing money call for different investigations. Recording the action lets the authorized team respond to the event instead of trying to interpret 'someone clicked something.'",
          "Use approved platform records and the reporting method as evidence. Never ask an employee for their password or authentication code. If details are missing, record what is known and who will establish the next fact. Keep client content and investigation records in the approved restricted location. If account impact is uncertain, have the authorized team investigate it."
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
    "intro": "A successful backup job tells you that a copy was made. To find out whether the business can use it, you need to restore something. That test may reveal missing information, a dependency on an unavailable administrator or a recovery time the business cannot tolerate.",
    "sections": [
      {
        "h": "Start with the application wording",
        "ps": [
          "Ask the broker to clarify the question's scope when needed. A question about all critical information differs from one about a named system or testing period. Offline storage, immutability, encryption and separate administrative access also describe different properties. Check the wording before gathering a report that answers something else.",
          "Ask the existing IT provider or backup owner to identify the configuration that answers each part. Record the systems included, the date checked and the relevant evidence. If a service covers cloud email and documents, do not use it to answer a question about server, application or device recovery unless those systems are actually covered.",
          "If an answer remains unknown, say so. A yes-or-no form may not have room for a qualification; ask the broker how to handle it before submitting an answer that overstates coverage. The organization submitting the application remains responsible for that representation.",
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
            "text": "The CISA StopRansomware guide recommends offline, encrypted backups of critical data and regular testing of backup availability and integrity in a recovery scenario. That is useful general guidance, not a universal insurance condition.",
            "links": [
              {
                "phrase": "CISA StopRansomware guide",
                "to": "https://www.cisa.gov/stopransomware/ransomware-guide"
              }
            ]
          },
          "These protections still leave questions for a restore test. An immutable copy can contain incomplete or unusable information, and an offline copy can be out of date. A cloud service may depend on account access that staff cannot recover during a disruption. Test those dependencies as well as the stored copy."
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
          "For example, a firm might tolerate a brief interruption in an archive while needing current billing information before the next payment run. The process owners should choose recovery limits from those business consequences, then compare the limits with what the systems can deliver. This example illustrates the decision; it does not prescribe a target.",
          "Do not set an ambitious target merely to make an application answer look strong. If current recovery capability falls short, record the gap, owner and planned action. That is more useful than confusing a desired outcome with a tested one."
        ]
      },
      {
        "h": "Scope a restore test safely",
        "ps": [
          "Select the system or data set, recovery point, test destination and success criteria. Obtain authorization from the relevant owners. Use an isolated or otherwise approved destination that avoids overwriting production information or exposing sensitive records to an unnecessary audience.",
          "Identify who will perform the restore and who will validate the result. The technical operator can confirm that files or an application were recovered. The business reviewer should confirm that the result is usable for the intended work. Both observations belong in the test record.",
          "Check the access and dependencies needed to perform that restore. Backup credentials, encryption keys, licenses, application software or a vendor response may all be required. Authorized staff need a documented way to obtain them. If the plan depends on an unavailable employee’s personal account, correct that dependency before relying on it.",
          "State what the test excludes. Recovering one file does not demonstrate full system recovery. A successful application restore in an existing environment does not establish that the environment can be rebuilt from scratch. Scope clarity makes the evidence credible and helps select the next test."
        ]
      },
      {
        "h": "Measure actual recovery and usability",
        "ps": [
          "Time the test from the start of recovery to availability of the selected information, then to acceptance by the business reviewer. Note active effort and delays so the result can be explained. When comparing it with the target, identify any dependencies supplied in advance; those preparations may affect how long recovery would take during a disruption.",
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
          "Suppose a firm successfully restores a client document into a test folder. It has shown that this particular content could be retrieved from the selected copy. The firm still needs to find out whether its client-delivery process could operate after losing identity access and the main application. This is a hypothetical example, not a Helm result.",
          "Choose the next test around those remaining dependencies and the business priority. It might check authorized recovery access, restore an application data set or include a business reviewer’s handover. Repeating the same file restore can confirm that result again, but it cannot demonstrate broader recovery.",
          "The insurance answer should reflect the actual test. If the application asks whether critical systems are tested, compare that wording with the systems covered and ask the broker how to disclose unresolved gaps."
        ]
      },
      {
        "h": "Close the test without leaving new exposure",
        "ps": [
          "Decide how the restored test copy will be removed or retained after validation. Record its location, permitted users and disposal owner. A successful test should not leave client information in an unmanaged folder that was created only for the exercise.",
          "Remove unnecessary temporary accounts and permissions through the approved process, then save the evidence summary. If a test environment will remain for future exercises, give it an ongoing owner and data-handling rule. Otherwise a temporary restore arrangement can drift into production use without a review."
        ]
      },
      {
        "h": "Set the schedule from the risk and requirements",
        "ps": [
          "Choose a frequency that reflects system changes, business priorities and any applicable policy or contract conditions. There is no general rule that every insurer requires quarterly tests. A major platform change can justify a new test before the ordinary review date.",
          "Include changes in data locations, permissions, backup configuration and recovery personnel. A test performed before a migration may not represent the current environment. Record which changes require the owner to reopen the recovery review.",
          "Report test completion and the status of corrective actions together. A calendar entry shows a plan, not a completed exercise. Keep a failed result visible, with a responsible owner, until the correction has been accepted."
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
    "intro": "HTTPS protects a website connection. It tells you little about whether the site has outdated software, unnecessary administrator access or a usable backup. A useful website review combines what a visitor can see with evidence from the people managing hosting and administration.",
    "lead": [
      "For a professional-services firm, identify the owner of the public website and any separate client portal first. They may have different providers, data and recovery arrangements."
    ],
    "takeaway": "Combine public website checks with administrator evidence about updates, access and recovery. A public scan cannot assess every internal control.",
    "sections": [
      {
        "h": "Check the public surface",
        "ps": [
          {
            "text": "Open the firm's actual domain and look for browser certificate errors. Ask the website administrator to check HTTPS behavior and the relevant headers. HSTS tells supporting browsers to use HTTPS after receiving the host's policy. Content Security Policy sets rules for the resources a page may load. Those controls have specific jobs; neither establishes that the application is free of vulnerabilities. Mozilla HSTS documentation, Mozilla CSP documentation.",
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
          "A public scanner can flag configuration issues visible from outside the site. Before using one, check its data-handling terms and confirm that you own the domain or have permission to assess it. Save the date and scope with the findings so the administrator knows what was checked. Review those findings individually; the overall rating cannot establish that the site is safe."
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
          "Record each confirmed weakness with its owner, target date and evidence of the completed repair. If a finding suggests client data may have been exposed, move it into the incident process. Legal and specialist advisers should assess the facts before the firm makes external claims.",
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
          "Forms, appointment tools, analytics and embedded content can involve providers beyond the website host. List the components, who approved them and who maintains each integration. Then trace where they send information. A form can look like part of your site while delivering its submissions to another provider.",
          "Confirm the administrative contacts for the domain and hosting accounts. Know who owns the domain registration and hosting account, how renewal notices arrive and who can approve a change. A former agency's account should not be the firm's only route to essential access. Resolve ownership through the authorized provider rather than sharing a password among employees."
        ]
      },
      {
        "h": "Check the ordinary visitor experience first",
        "ps": [
          "Open the correct site through a trusted address on an updated browser. Check that the intended domain loads and that the browser does not show a certificate warning. Follow common routes such as the contact page and client-portal link. Record unexpected redirects, changed content or unfamiliar destinations for the website owner to investigate.",
          "Use harmless sample data if the owner authorizes a form test. Confirm where the submission arrives and who can access it. Avoid entering real client information into a test. Check whether an attachment is necessary and whether the business has approved the handling of uploaded files.",
          "HTTPS protects the connection to a website, subject to the protocol and configuration in use. Once information reaches the site, HTTPS tells you nothing about how the receiving business handles it. It also does not establish that the business is trustworthy or the application is free of flaws. A padlock alone is therefore insufficient evidence that an unfamiliar site is suitable for confidential uploads."
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
          "Have the administrator test a proposed header policy against the site’s required features. A copied policy can block a legitimate form, image or integration. Raising a scanner score is useful only if the resulting policy is appropriate and the business functions still work.",
          "When a report identifies a missing header, record the relevant purpose and the proposed action. Avoid treating every warning as equally urgent or assuming every suggested header applies to every deployment. A website owner should explain a material exception with enough detail for the business to understand it."
        ]
      },
      {
        "h": "Ask for evidence behind updates and access",
        "ps": [
          "Ask the administrator who reviews updates for the content-management system, themes and plugins. The review should identify unsupported components and extensions the site no longer uses. Removing an unused extension can reduce ongoing maintenance, provided the administrator checks its dependencies before changing production.",
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
          "Follow the submission beyond the form itself. Check who receives it, where copies are stored and how long the approved process keeps them. Include email notifications and records held by the form provider: deleting a notification may leave those other copies intact. Confirm the product behavior and contractual terms with the owner.",
          "Test error and success messages with harmless information. A visitor should know whether the submission worked and what to expect next. Avoid exposing internal technical details or echoing sensitive content unnecessarily. Useful confirmation can be concise while giving the visitor a clear next step."
        ]
      },
      {
        "h": "Verify a recovery route before changing the site",
        "ps": [
          "Ask what the backup includes: application content, uploaded files, database and any necessary configuration. Determine what remains outside it, such as a third-party form service or domain account. Name the person permitted to authorize and perform a restore.",
          "Demonstrate recovery in a non-production environment or another approved test. After the restore, check pages, forms and important integrations. The files may have returned successfully while a missing database or configuration still prevents the site from doing its job.",
          "Before making a change, agree on how to roll it back and when the administrator should do so. A header adjustment, update or plugin removal can affect client-facing behavior. Keep the change record and observed test result so a later failure can be traced without relying on memory."
        ]
      },
      {
        "h": "Handle suspected compromise differently from routine findings",
        "ps": [
          "Unexpected administrator accounts, unauthorized content or suspicious redirects should go to the authorized owner and responder for investigation. Preserve the relevant information and follow the incident process. Repeatedly editing away a symptom can leave the unexplained access behind.",
          "If client information may be affected, have the appropriate advisers assess the facts and obligations. A public report cannot determine every disclosure requirement. Communicate confirmed information through the approved route and avoid declaring the issue harmless before the investigation supports that conclusion.",
          "Routine findings should still have owners and evidence that the work is complete. An unsupported component may need replacement, while a configuration warning may need testing and adjustment. Assign the work to the website provider responsible for that system. A security coordinator can track the decision without becoming the hosting administrator."
        ]
      },
      {
        "h": "Repeat checks after meaningful changes",
        "ps": [
          "Revisit the public surface and owner evidence after a hosting migration, major application update, new form or provider transition. Record the date and scope of the review. A result obtained before the change may no longer describe the live site.",
          "When answering a customer questionnaire, say what was checked and which provider supplied the internal evidence. Public findings support a statement about the configuration observed at that time. Claims about access, maintenance or recovery also need the administrative records or test results for those controls."
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
    "intro": "At a New Jersey accounting, law, insurance or financial-services firm, start your AI review with one recurring internal task you can describe and measure. Decide what an approved tool would help with before buying licenses or connecting business documents.",
    "takeaway": "Choose a frequent internal task with reliable inputs, a named reviewer, and mistakes that are easy to detect and correct. Compare the time spent on the complete task, including checking, before deciding whether to separately scope a pilot.",
    "sections": [
      {
        "h": "Define the task and its owner",
        "ps": [
          "Describe the task from input to finished output. An internal onboarding checklist drafted from current approved procedures gives staff something they can test; a request for help with administration leaves the result undefined. The person who owns those procedures should decide whether the draft is acceptable.",
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
          "Count how often the task happens in a normal month, including seasonal differences. For several completed examples, record the time spent on preparation, drafting, checking, corrections, and handoff. A task that takes ten minutes twice a year leaves little time to save against the effort of setup and testing.",
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
          "An infrequent task or constantly changing input may not justify a pilot. Checking the output can also take as long as doing the work. Stop before testing if there is no reviewer, approved data set or way to recognize an unacceptable result. A standard template or clearer procedure may solve the problem with less work.",
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
          "Ask staff which recurring tasks involve drafting internal documents, organizing approved information or making a current procedure usable. Select a few to examine closely. Their inputs and finished outputs will tell you more about fit than a product demonstration.",
          "For each candidate, ask how often it happens, how long it takes, which information it requires and who can recognize an incorrect result. Also ask whether a simpler fix exists. A standard template, a better search function or removal of duplicate approval steps may solve the problem with less maintenance.",
          "Compare the candidates in a table so a serious problem stays visible. A weighted score can conceal that problem: enough points for frequency or speed will not make unapproved data acceptable. If nobody can review the output, or a serious error would be hard to detect, resolve that issue before testing.",
          "Use this method to discuss the tradeoffs before buying software or granting access. It is a suggested selection process, not a research finding that establishes the best task for every firm."
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
          "Give the reviewer the authoritative sources and enough time to compare the draft against them. Asking the tool whether its own answer is accurate does not provide an independent quality check. Acceptance belongs to the person responsible for the work.",
          "Apply those same criteria to the existing process. Holding an AI draft to a lower standard can make it look faster simply because less checking is required. Compare the total time needed to produce an output you would accept from either process."
        ]
      },
      {
        "h": "Scope a test that answers a decision",
        "ps": [
          "Write a short test brief with the task, approved platform, permitted inputs, intended users and reviewer. State the decision the test will support: continue with this workflow, modify it or keep the manual process. Avoid an open-ended instruction to explore what the tool can do.",
          "Choose examples that reflect ordinary variation. Include a routine case and a case with a known exception. Keep the examples approved for the platform and avoid importing client data just to make a demonstration feel realistic. Synthetic material can test the workflow without reproducing a live matter or account.",
          "Record the platform and relevant settings when testing begins, then note any changes to instructions, source files or configuration. That record helps explain an improved result. If staff repaired the source procedure halfway through the pilot, the improvement should not be attributed entirely to the model.",
          "Limit actions as well as data. A tool that drafts a checklist should not also send it, update a business record or approve a transaction unless that action has been separately evaluated and authorized. Read-only drafting is easier to assess than a workflow whose mistakes immediately alter other systems."
        ]
      },
      {
        "h": "Assign the work after the demonstration",
        "ps": [
          "The task owner decides whether the output is useful. The document owner keeps the sources current. The existing IT provider reviews supported accounts, access, configuration and the proposed platform. Leadership approves the business purpose and cost. One person may hold several roles, but the responsibilities still need to be explicit.",
          "Agree who will update the instructions when a procedure changes and who will check that the revised workflow still works. Include their time in the operating cost. A good demonstration can be followed by a process that requires more upkeep than the firm can sustain.",
          "Plan staff training around the actual task. Show what information is permitted, how to start the workflow, what must be checked and how to report a failure. A broad presentation on AI capabilities will not substitute for those practical steps.",
          "Do not make continued access dependent on one person’s personal account. Confirm business ownership and offboarding with IT. If the employee who ran the pilot leaves, the organization should still know where the approved sources, instructions and decision record belong."
        ]
      },
      {
        "h": "Make the continuation decision from the record",
        "ps": [
          "Summarize accepted outputs, rejected outputs, total staff time and recurring costs. Explain failures rather than hiding them in an average. If the tool handles straightforward cases but fails on important exceptions, state that boundary in the decision.",
          "Report time saved as available capacity unless it produces a measured financial return. Ten minutes does not become revenue just because it is available; the business needs suitable work for that time and must complete it. Consistency or shorter administrative delays can also justify a pilot, provided you measure and name those benefits.",
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
    "intro": "CMMC Phase II was suspended in July 2026. Cybersecurity requirements already included in defense contracts still need attention. A manufacturer may still need a self-assessment, support for its SPRS score or evidence for a customer. Check the contract and current assessment route before changing the readiness plan or spending against an old deadline.",
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
          "Second, map where CUI is handled. Follow technical data through file servers, email, CAD stations, the quoting inbox and removable media in the shop office. That map defines the places the review must cover.",
          "Third, calculate the SPRS score from the applicable assessment method and keep the boundary, working papers and evidence needed to reproduce it. Unsupported cybersecurity representations can have consequences: the Department of Justice has resolved False Claims Act allegations that included a large mismatch between a submitted score and a later assessment.",
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
          "Eight: write and rehearse the incident response process, including the contract-driven reporting path. Nine: keep the System Security Plan current and maintain a remediation record with an assigned owner for unmet requirements. Generic templates are not evidence that the described control is operating."
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
          "Give each step an owner, evidence reference, status and next action. Mark implemented work that still needs verification separately from completed work. During an assessment or customer inquiry, those records explain what supports each tick on the checklist.",
          "For each task, identify the requirement behind it: a contract clause, current program instruction or specific customer request. Resolve uncertain scope before spending against a deadline. Once the requirement is clear, record how the firm will demonstrate completion; a policy title alone may not provide that evidence.",
          "Use dates that represent real decisions. The contract’s due date, an internal remediation target and the next review date are different. Label them so leadership can see which delays affect a contractual obligation and which affect the firm’s own improvement plan."
        ]
      },
      {
        "h": "Read contracts before scheduling assessments",
        "ps": [
          "Collect the solicitation, award, modifications and subcontract flowdowns. Ask the responsible contract owner to identify the safeguarding, assessment and affirmation instructions relevant to the proposed work. Record written clarification from the prime or contracting contact where needed.",
          "Review new work even when it comes from an existing customer. Purchase orders can differ in information, services and terms. A consistent contract review process helps the shop identify a scope change before staff begin handling the new material.",
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
          "Follow the everyday paths as well as the main file server. Include paper, removable media and workstations. Ask how a machine receives a program file, how a drawing is printed and how a supervisor works remotely, because those paths can change the assessed boundary.",
          "If staff use personal accounts because the approved transfer method is too slow, fix the workflow that drives the shortcut. Verify that staff can complete the transfer through the approved process. A written prohibition alone does not establish that the process works."
        ]
      },
      {
        "h": "Inspect implementation before collecting screenshots",
        "ps": [
          "Start evidence collection with the requirement being evaluated. Ask the responsible owner to demonstrate the intended safeguard in the assessed environment, then collect the records needed to evaluate it. That keeps the review focused instead of accumulating every export the tools can produce.",
          "Keep the relevant standard and version clear. The Department’s program instructions and contract determine the assessment context; the existence of a newer NIST publication does not automatically change the current contract obligation. Retain the basis for the version selected in the review record.",
          "Evaluate provider dependencies. If a vendor supplies a control, determine what remains the shop’s responsibility and which evidence is available. A service description alone may not show that the relevant users, systems or information are covered."
        ]
      },
      {
        "h": "Sequence remediation around dependencies",
        "ps": [
          "An inaccurate user or device inventory can make later coverage evidence unreliable. A workflow change can also alter the scope of technical implementation. Resolve those dependencies before assigning due dates to isolated tasks.",
          "Agree with a qualified reviewer on what closes each item. Buying a tool or approving a policy may be a milestone. Closing the item still requires implementation and evidence supporting the requirement. Record any limitation that remains.",
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
          "Staff need a prompt internal reporting process and a trusted contact. The designated incident owner evaluates the event with the appropriate responders and advisers. Confirm access to the required reporting route and any prerequisites before an incident occurs.",
          "Use a fictional exercise to test who receives the report, who authorizes action and how the relevant records are preserved. Record delays and missing responsibilities, then correct the plan. Keep live findings and incident evidence in their approved restricted systems."
        ]
      },
      {
        "h": "Check a proposed change against the checklist",
        "ps": [
          "Use an approved fictional example to test whether the owners can maintain readiness: a shop adds a new workstation that will display controlled information. Ask who approves it, updates the inventory, confirms access and checks the effect on the SSP and evidence. No live system change is needed for this exercise.",
          "Use the exercise to find where the sequence breaks. If a workstation can be bought and used before anyone reviews its information boundary, change procurement and onboarding. If the documents are updated but protection remains unknown, assign technical verification. The checklist then supports production decisions throughout the year."
        ]
      },
      {
        "h": "Review readiness with leadership",
        "ps": [
          "Bring leadership the current scope, supported requirements, open items and decisions needed. Use the contract and qualified review to explain what unresolved work means. Before affirming readiness, leadership should understand the statement it is making and the evidence supporting it.",
          "Keep customer responses consistent with the assessment file. A questionnaire should not say the environment is fully implemented when the remediation record still shows relevant deficiencies. Seek clarification if the customer’s answer choices cannot represent the actual state truthfully.",
          "Retain the review record and the authorized submission confirmation where applicable. An assessment number is useful only when the shop can connect it to the boundary, date, method and supporting evidence."
        ]
      },
      {
        "h": "Make maintenance part of production changes",
        "ps": [
          "Add a security-scope review to new systems, providers, locations and information workflows. Identify whether the change affects the SSP, evidence or assessment record. The person approving the change should know who performs that review.",
          "Assign an owner and backup to maintain assessment and affirmation dates under the current applicable instructions. Keep the record accessible to them so an employee's departure does not leave the obligation attached to an unattended calendar.",
          "Helm can support a scoped readiness discussion alongside the existing IT provider. The firm retains its final attestations and business decisions. Readiness work helps organize and improve the evidence; it does not provide a certification or guarantee an award."
        ]
      }
    ],
    "takeaway": "Use the current contract to decide what applies. Keep the system boundary, assessment, score and evidence current while DoD reviews the next phase.",
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
    "intro": "Your contract and the information your shop handles determine the CMMC level to review. Headcount does not. Choosing the wrong scope can mean paying for controls you were never asked to maintain, or affirming readiness while required controls remain unmet.",
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
          "Level 2 preparation reaches beyond Level 1’s basic safeguards. The shop needs a defined system boundary, a current System Security Plan, requirement-level evidence and a score. Each applicable requirement also needs someone responsible for maintaining it in the CUI environment."
        ]
      },
      {
        "h": "How to tell which one applies to you",
        "ps": [
          "The clauses in your contract tell you directly: look for DFARS 252.204-7012, 7019, 7020, and 7021. Their presence, and how they are flowed down, points to whether you are being asked to handle CUI or only FCI.",
          "If the contract language is ambiguous, ask the prime in writing which information category applies to your work. Keep the answer with the contract to support later readiness decisions.",
          {
            "text": "A small shop can still handle CUI. For example, a ten-person shop processing confirmed CUI has safeguarding responsibilities determined by that work, regardless of headcount. A gap assessment against the full control set establishes which requirements are implemented and which still need work.",
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
          "Bring the solicitation, relevant contract clauses and all cybersecurity flowdowns from the prime. Add representative file descriptions or markings, the systems that store or transmit the information, and any current SPRS assessment or System Security Plan. These records help the reviewer discuss applicability and the system boundary using the shop’s actual work.",
          "Record the conclusion and the person or contract source that supports it. If the prime clarifies the information category or required level, keep that written answer with the contract file so the same question does not have to be reconstructed at the next bid or renewal."
        ]
      },
      {
        "h": "Separate the information category from the assessment route",
        "ps": [
          "Once you know the information category, check the contract’s safeguarding and assessment instructions. A prime’s confirmation that the project includes CUI helps establish what must be protected; you still need the instructions that determine the assessment route.",
          "Keep the solicitation, award, modifications and flowdowns together. Note the required level, affected environment, relevant dates and responsible contact. If a newer instruction changes the requirement, retain the earlier record and explain what supersedes it. The shop should be able to show why it followed a particular route at the time.",
          "If the contract and customer questionnaire seem inconsistent, seek clarification using the contracting relationship and current official guidance, with expert advice where needed. A cheaper assessment route or a tool’s recommendation cannot resolve what the contract requires."
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
          "Leadership owns the self-assessment conclusion even when a consultant helps gather and evaluate the evidence. Before making an affirmation, leadership should understand what is being affirmed and which records support it. The consultant’s worksheet helps with that review; responsibility remains with the organization."
        ]
      },
      {
        "h": "What Level 2 preparation adds",
        "ps": [
          "The System Security Plan should describe the CUI environment, its connections and provider dependencies. Use it to organize evidence against the applicable requirements. For each conclusion, explain how the evidence supports it, so a later reviewer can follow the assessment without interpreting a folder of screenshots alone.",
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
          "Information movement and system dependencies affect scope, while the enclave architecture still needs qualified review. Any separation intended to reduce exposure needs operational rules that staff can follow and the shop can maintain."
        ]
      },
      {
        "h": "Compare proposals by responsibility and evidence",
        "ps": [
          "Ask a provider to identify the scope it will evaluate, the standard and version it will use, the evidence it needs and the deliverable you receive. Require it to distinguish readiness assistance from an authorized assessment or certification service.",
          "Clarify implementation duties. Who changes account policies, manages the devices, maintains physical controls and updates procedures? A report of gaps does not establish that the provider will remediate them. Get the boundary of its service in writing.",
          "Agree who maintains the SSP after the project, reviews changes, retains evidence and tracks assessment and affirmation dates. These duties continue as the shop operates. A one-time set of policies will become stale unless someone owns that maintenance."
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
    "takeaway": "Check the clauses and establish whether the work involves FCI or CUI. Resolve uncertainty with the prime in writing before choosing the assessment scope.",
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
    "intro": "A written CUI policy needs instructions people can use on the shop floor. An employee taking a drawing photo, emailing a file home or leaving a print on a workbench may expose controlled information. Explain the approved way to do those everyday tasks, including where to ask when the instructions are unclear.",
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
          "Personal phones and personal email accounts must stay out of the controlled-information workflow. Do not photograph drawings or parts on a personal phone, including for a quick reference or a text to a coworker. Use the approved route to access specs from another location. Access remains need-to-know: staff should view a print only when their job requires it.",
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
          "When the approved instructions do not cover a task, employees need a named contact who can answer. They should be able to pause a transfer or photo request while they check, without inventing another channel. Supervisors need to support that pause, especially when production pressure makes a shortcut attractive.",
          "Test the procedure with the employees who use it. Ask which instructions are slow, ambiguous or impossible to follow with the available equipment, then correct the workflow. A signed training form records completion; it cannot establish that every production task can be performed safely.",
          "Keep the approved process consistent with the assessed boundary. A transfer method that moves controlled information into an unreviewed account can undermine the separation the program depends on. The information owner and IT provider should approve changes together."
        ]
      },
      {
        "h": "Control paper drawings and visitor exposure",
        "ps": [
          "Identify where prints are issued, used, stored and returned. Make the authorized storage location accessible to the staff who need it, while preventing unnecessary access. Do not rely on employees remembering to hide a print only when a visitor arrives.",
          "Review walkways, visitor routes and work areas where drawings or screens may be visible. The relevant manager should understand the access rules and escort procedure. A visitor’s familiarity with the shop does not establish authorization to view controlled information.",
          "Before a job finishes, make sure employees know which prints to return, retain or destroy through an approved method. An ordinary bin is not a disposal process for sensitive material. If the instruction is unclear, ask the information owner; the paper’s age does not determine its handling rule.",
          "Check copies as well as originals. A marked master drawing can be controlled while an untracked copy remains on a clipboard. Teach employees to recognize the information and handling instruction, not merely a particular folder color or cover sheet."
        ]
      },
      {
        "h": "Review shared stations and removable media",
        "ps": [
          "Determine who is authorized to use each workstation and which information it may handle. Follow the approved sign-in and screen-lock procedure. Do not leave an administrator’s session open for convenience or share credentials when the system supports named access.",
          "Record how program files or technical information reach equipment. If removable media is part of the approved workflow, identify the permitted media, handling procedure and owner. Personal or unknown drives should not become the default when a supported transfer path is unavailable.",
          "Shop equipment may have different technical capabilities from an office laptop. Qualified staff should evaluate those constraints and document an approved arrangement. A generic checklist alone does not justify asking a machinist to install an unfamiliar tool or alter a machine controller.",
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
          "Tell staff what to do while they wait for clarification: where to store the material and whether production may continue with the information available. Without those instructions, an unanswered handling question may lead to an improvised copy or personal email."
        ]
      },
      {
        "h": "An illustrative request for a photo",
        "ps": [
          "Imagine a supervisor asking an employee to text a drawing photo to a colleague at another location. In this hypothetical training exercise, the employee recognizes the controlled handling instructions and pauses the request. The scenario is not a Helm incident.",
          "The employee uses the approved internal contact to ask how the information may be transferred. The authorized owner checks the recipient, destination and supported transfer method. If the request is legitimate, it can proceed through that method; urgency alone does not authorize a personal account or device.",
          "Use this exercise to test whether staff can identify both the restriction and the useful alternative. A training session that ends only with “do not take photos” may leave the underlying business task unresolved."
        ]
      },
      {
        "h": "Record training that reflects the work",
        "ps": [
          "Document the audience, subjects, approved examples and completion date. Include the reporting route, physical handling and relevant device or media practices. The record should show what staff were taught, while the supervisor’s review checks whether the process works in practice.",
          "Revisit training when the shop changes equipment, receives a new kind of controlled information or adopts a new transfer route. A generic annual course can supplement those instructions, but it does not establish that employees understand a site-specific production procedure.",
          "Use recurring questions to find procedures that need repair. If several employees cannot identify where a print belongs, clarify the storage instruction and signage. If a vendor repeatedly requests an unapproved transfer, have the responsible manager address that vendor’s process."
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
    "takeaway": "Show staff how to recognize controlled information, store it, limit access and report a problem. Apply those instructions to the phones, paper, email, shared stations and visitors they encounter during ordinary work.",
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
    "intro": "Completing a cyber insurance application takes facts from finance, IT, security and leadership. A software invoice tells you what the firm bought; a configuration record tells you what is deployed. Keep those facts separate from planned improvements so the signed answers describe the business today.",
    "sections": [
      {
        "h": "Step 1: Obtain the complete current request",
        "ps": [
          "Get the application, supplements, instructions, deadline and evidence request from the broker. Then confirm the entity and operations covered. Related companies, locations or acquisitions may need information a single-company form does not capture. Settle that scope before assigning technical questions.",
          "Keep a controlled working copy with the original questions and definitions intact. When assigning a question, link back to that wording. A shortened task description can lose a qualifier such as every account, remote access or the previous reporting period and send the respondent looking for the wrong evidence.",
          "Name a coordinator, the business approver and technical respondents. The coordinator tracks missing answers and evidence. Technical owners establish the actual settings and population. Leadership approves business representations and the submission. The broker handles underwriting clarification and the coverage discussion."
        ]
      },
      {
        "h": "Step 2: Define the business population",
        "ps": [
          "Use the definition and date requested by the form to count employees and contractors. Include seasonal staff, remote workers and locations where the question calls for them. Count devices separately: one person may have several, while a shared workstation may serve several people.",
          "List important systems and providers. Include business email, identity, remote access, devices, client portals, backup and critical applications. Identify which systems are operated by outside suppliers and who can request evidence from them. The internal IT provider may not administer every application used by the firm.",
          "If the form asks about revenue, records or business activities, route those questions to the appropriate business owner. Technical staff should not estimate financial information from a user list. Similarly, finance should not infer authentication coverage because a software subscription appears on an invoice."
        ]
      },
      {
        "h": "Step 3: Assign each question to evidence",
        "ps": [
          "These are illustrative categories, not a claim that every insurer asks the same questions. Follow the current form. Where several owners contribute, have the coordinator reconcile the answer rather than combine conflicting statements in the final submission.",
          "For each answer, note the source, its date, the reviewer and the systems or people it covers. Retain any provider report or approved reference used to support it. Restricted account lists and other sensitive evidence should stay in their authorized location, with a controlled link from the working record."
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
          "Check which access the question names: email, remote access, privileged accounts, all users or a specific system. Ask the administrator where MFA is required, which methods are allowed and what exceptions remain. Someone can enroll an authentication method without the relevant access path actually requiring its use.",
          "Review independent applications as well as the main tenant where the question requires it. A firm may enforce MFA for email yet have a separately administered business application. Record what was checked and what remains unknown. Ask the broker how a qualified answer should be represented when the form offers only a yes-or-no box.",
          "Do not change an answer to yes because a rollout is scheduled. If the work finishes before submission, verify the completed state and date the evidence. If it does not, describe the current limitation through the approved submission route."
        ]
      },
      {
        "h": "Step 5: Verify devices and recovery",
        "ps": [
          "Compare the device inventory relevant to the question with the devices reporting to the protection service. Resolve unsupported platforms, exclusions and stale entries before calculating coverage. A newly purchased computer may not yet meet acceptance criteria, and a retired one may still appear in the console.",
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
          "When the wording is ambiguous, send the broker the exact question and the confirmed facts through the approved route. Request written clarification where the interpretation affects the answer. Keep that response with the package; a general sales assurance about what carriers usually mean cannot resolve the current question as clearly.",
          "Do not hide an exception in an attachment that the final answer contradicts. Ensure the form, supplements and supporting explanation are consistent. The authorized signer should know what is incomplete and how it is represented."
        ]
      },
      {
        "h": "Step 7: Review the final submission as one document",
        "ps": [
          "Read the complete application after individual contributors finish. Check dates, entity names, counts and repeated questions. The same control may appear in several sections with different wording. Confirm that the responses consistently describe the actual environment without dropping a meaningful qualifier.",
          "Separate statements about current operation from commitments about future work. If a commitment is included, identify who approved it and what evidence will demonstrate completion. Review any related requirements with the broker and appropriate adviser before treating a technical task date as a contractual promise.",
          "Save the exact signed application, supplements, evidence references and submission record together. That gives a later reviewer the version that was actually sent, without reconstructing it from drafts. Restrict access to match the business and technical information the package contains."
        ]
      },
      {
        "h": "Step 8: Review the resulting offer and policy",
        "ps": [
          {
            "text": "Ask the broker to explain the offer, coverage, limits, retentions, endorsements and significant conditions. The FTC recommends discussing cyber-insurance coverage needs with the insurance agent. Apply that discussion to the firm's actual scenarios and proposed wording.",
            "links": [
              {
                "phrase": "FTC recommends discussing cyber-insurance coverage needs with the insurance agent",
                "to": "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
              }
            ]
          },
          "Ask how incident reporting, urgent response, provider engagement and consent requirements work under the proposed policy. Identify the authorized contacts and put the instructions into the response plan once the policy is bound. The brochure from the start of the sale may not contain the procedure the firm must follow.",
          "If the issued documents differ from what the firm expected, resolve the difference promptly through the broker. Keep the final policy and endorsements with the submission record. Coverage interpretation belongs with the appropriate adviser, supported by the facts the firm has gathered."
        ]
      },
      {
        "h": "Step 9: Keep the evidence current after renewal",
        "ps": [
          "Assign the unresolved control tasks and follow their completion. Record meaningful changes to the environment, including new applications, acquisitions, provider changes and changes in authentication or backup coverage. Ask the broker how such changes should be handled under the particular arrangement.",
          "Keep each previous submission with the evidence that supported it at the time. Replacing last year’s settings with today’s records can remove the basis for a historical answer. Follow the firm’s retention policy and keep restricted operational details in the authorized system.",
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
          "If the two excluded accounts enter scope before signing, verify the final state and save dated evidence. If they remain outside the policy, ask the broker how to represent that limitation. Retain the clarification and signer’s decision alongside the answer; promising a later fix does not change today’s deployment."
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
    "intro": "During a cyber incident, the firm has to restore operations and respond to urgent requests. If coverage is questioned, it also needs to establish what the policy says and what records support the claim. Security records help explain the facts. Payment still depends on the actual contract and its review.",
    "sections": [
      {
        "h": "Begin with the policy and the asserted reason",
        "ps": [
          "Start with the correspondence and policy documents. An information request, a reservation about coverage and a formal denial need different responses. Ask the broker and appropriate counsel to identify the asserted issue and response deadline. The letter's subject line alone cannot establish its legal effect.",
          "Give the reviewing team the complete contract: the policy in force, endorsements, declarations, application, supplements and relevant written clarifications. Use the final submitted versions. An employee's early application draft may differ from the submitted answer, and an endorsement or definition may change how a general coverage description applies.",
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
          "Break the requested claim into amounts and categories, and identify the policy provision relevant to each. The overall limit may not be the limit for a particular type of loss; a sublimit or another condition may apply. Keep financial records connected to the event and explain any costs that might otherwise appear unrelated.",
          "Before renewal, use representative scenarios in the broker discussion. Ask how the proposed policy would address a vendor banking change, interruption of a critical application or a third-party demand. These are questions for the broker and insurer, not statements that the scenarios are covered. Record any written clarification with the final policy."
        ]
      },
      {
        "h": "Preserve evidence of the environment at the relevant time",
        "ps": [
          "If an application answer is questioned, collect records that describe the environment when the answer was given and when the event occurred. A screenshot taken after remediation may demonstrate the current state but not the earlier one. Label dates and sources accurately so the reviewing team can distinguish them.",
          "For authentication, identify the account population, policy scope and recorded exceptions. For device protection, identify eligible and reporting devices. For backups, identify covered workloads and actual restore evidence. The relevant facts depend on the disputed question; avoid sending an unorganized archive of every security document.",
          "Ask the technical owner to explain the limits of each record. An enrollment report may show which devices were registered without showing that every device was reporting during the incident. A rollout plan shows intended work, not completed deployment. Explain these limits so the coverage adviser can use the records without overstating what they establish."
        ]
      },
      {
        "h": "Keep response obligations available before an event",
        "ps": [
          "Review the policy's notice, cooperation, consent and provider provisions with the broker before an incident. Record the breach hotline, reporting route and people authorized to engage help. Ask how urgent containment and separately retained services should be handled under the particular wording. Do not assume the same procedure applies to every insurer.",
          "Assign urgent operational work alongside insurance reporting. Bank contact may be time-sensitive after a suspected fraudulent transfer, and authorized technical containment may be urgent when an attack is spreading. While others carry out their assigned duties, the person responsible for insurance reporting can follow the policy's process. Decide these handoffs in advance so a coverage question does not leave the work unassigned.",
          "Keep contacts available outside the systems likely to be affected. A hotline stored only in an inaccessible mailbox may delay the response. Test the contact list in a planned exercise using the agreed route, without creating a false claim or emergency."
        ]
      },
      {
        "h": "Document costs and decisions as work occurs",
        "ps": [
          "Keep an incident expense record as the work happens. For each invoice, retain the scope, authorization and connection to the event. Follow the advice received on documenting business interruption, including how estimates were produced. Label forecasts separately from confirmed amounts so a preliminary estimate is not presented as a settled loss.",
          "Record why a provider was engaged and who approved the work. If consent or a panel arrangement matters under the policy, retain the relevant communication. A later reviewer should be able to follow the decision without reconstructing it from scattered messages.",
          "For technical recovery, retain the action timeline and results in the approved restricted system. Logs, customer details and security findings should not be copied into ordinary marketing or broadly shared operating documents. The claim team needs controlled access to appropriate evidence, not unrestricted redistribution."
        ]
      },
      {
        "h": "Respond to a concern with a factual package",
        "ps": [
          "Ask the reviewing adviser to specify the requested information. Organize the response around that issue: the relevant question or provision, the submitted answer, supporting records and unresolved facts. Avoid argumentative speculation about the attacker's intent or the insurer's motives.",
          "If a record is missing, explain the gap and what you will check next. A test log recreated after the incident cannot be presented as a log made at the time. You can provide a retrospective explanation based on available records, but label it clearly so the reviewer knows when and how it was produced.",
          "Keep one controlled version of the response package and record what was submitted, when and by whom. Route material legal or coverage conclusions through the appropriate adviser. Different employees independently answering the same question can create inconsistencies that complicate an otherwise straightforward review."
        ]
      },
      {
        "h": "Correct gaps without rewriting history",
        "ps": [
          "An incident may reveal incomplete authentication, missing devices, weak payment verification or an untested recovery process. Fixing the gap can improve the current operating position, but it does not alter the historical record. Date the change and retain the before-and-after evidence as appropriate.",
          "Assign corrective work to the responsible IT or business owner. A security coordinator can track the work and collect evidence, while the authorized administrator makes technical changes. If specialist recovery or forensic services are needed, establish their scope and authority separately.",
          "Check whether the findings also affect statements in customer questionnaires, policies or future applications. Ask the appropriate adviser which updates are required. Until that review is done, do not assume old statements still describe the environment accurately."
        ]
      },
      {
        "h": "Prepare a more useful renewal review",
        "ps": [
          "Before the next renewal, compare the actual business with the policy and application. Include new services, changed workflows, acquisitions and material changes in the protected population. Ask the broker how those facts should be reflected. Accurate information does not guarantee a lower premium or an available policy; it supports a clearer underwriting discussion.",
          {
            "text": "Use the application walkthrough for the submission process and the questionnaire guide for technical answer evidence. Review the incident-response plan for bank, insurer and provider handoffs.",
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
          "Consider a hypothetical firm that discovers an excluded administrator account after an incident. The technical review should identify the account, its access, the applicable policy and the time the exception existed. It should also establish what role, if any, that account played in the event.",
          "Give the coverage adviser the dated technical facts together with the application and policy, then follow the response process and deadlines. Finding an excluded account does not by itself settle coverage. Evidence that a different account was used may also leave questions unresolved. The adviser needs to assess the technical record against the contract and applicable law."
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
    "intro": "An insurer may ask whether MFA covers every account while your evidence covers only email. Before answering, establish which accounts or systems the question includes and check their current settings against dated records. If some remain outside the control, work with your broker on how to explain that gap in the insurer's form.",
    "sections": [
      {
        "h": "1. Multi-factor authentication",
        "ps": [
          "Start with the accounts and access paths named in the question. Email, remote access, administrators and independent applications may use different MFA policies. Ask the authorized administrator for enforcement settings and exceptions. A registered authenticator shows that a method is available; the policy evidence shows which sign-ins require it.",
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
          "Compare the protection console with the current device inventory. Check the eligible population, installed protection and reporting health, then resolve missing, duplicated and stale entries. Old console records can make active coverage look broader than it is.",
          "Next, identify the investigation and response service around the product. For a continuous-monitoring question, establish the function and covered devices. Continuous collection, analyst review and authorized containment are separate activities; retain the written service boundary showing which apply.",
          "Phones, tablets, servers and specialist systems need their own coverage decisions. Do not answer for every endpoint based on employee laptop protection when the relevant population is broader. State supported and excluded systems as the form requires."
        ]
      },
      {
        "h": "3. Backup coverage",
        "ps": [
          "Map each important workload to its recovery method and operator. Email, file storage, business applications and local systems may be protected differently. Check that mapping against the covered population instead of inferring coverage from a user count or subscription invoice.",
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
          "Read the requested mechanism carefully. Encryption protects information using cryptography; isolation separates systems or access; immutability restricts alteration or deletion under a particular configuration. Verify the mechanism the insurer asks about, even if another is already in place.",
          "Ask the backup operator for the configured mechanism, administrator access and relevant retention behavior. If a proposed answer depends on a provider capability, confirm it is enabled for your covered data. Avoid treating a product's available feature as proof of your deployment.",
          "Record any exceptions and the evidence source. Have the broker clarify ambiguous wording rather than choosing the interpretation that produces the easiest yes. Answer according to the form's wording and any policy requirement."
        ]
      },
      {
        "h": "5. Restore testing",
        "ps": [
          "For a restore test, record the scenario, recovery point, operator, destination and result, then ask the data owner whether the returned information is usable. A successful backup job supports a claim that data was captured. The restore test checks whether the business can use what was captured.",
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
          "A vulnerability-management answer needs the assessed scope and a record connecting findings to action. Internal devices remain outside a public website scan. For closed findings, retain relevant verification, such as a version check or appropriate reassessment, with the ticket.",
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
          "SPF, DKIM and DMARC concern email authentication and policy under configured rules. They do not establish that a request is honest: a compromised legitimate mailbox can send fraudulent instructions. Keep independent payment authorization in place alongside those controls.",
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
          "Check the assigned population, training dates and completion records. Include seasonal workers and new starters where the question requires them. A purchased staff license shows availability; completion records show who actually took the training.",
          "Keep overdue assignments and documented exceptions visible. If the form asks about simulations, describe the actual program rather than assuming any training counts. A simulation result is one measure of participation and behavior, not a guarantee that employees will recognize every attack.",
          "Answer for the period and population the form requests. A past presentation may or may not satisfy that question, just as a recent session may cover only part of the staff. Use the firm's records to establish the response instead of applying a blanket rule."
        ]
      },
      {
        "h": "9. Incident response",
        "ps": [
          "Check the approved incident plan against the current provider arrangement. Verify contacts, authority and business handoffs, including how staff report a concern and how primary and backup contacts reach authorized help. An older plan may point people to a response the firm no longer uses.",
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
          "Identify the required approvers, exception process and record connecting verification to the transfer executed. Do not treat verification of a different account as authorization for a later change. Test the process with harmless scenarios that include deadline pressure.",
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
          "If recent departures cannot be traced to completed access-removal records, note that uncertainty and assign a review before making a broad claim. The template explains the intended procedure; the records establish what happened."
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
          "Keep the exact question with its response, population, date, evidence reference and reviewer. Resolve contradictory statements before the authorized signer approves the package. Save the submitted version and written broker clarifications; retain restricted supporting records in their approved location.",
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
    "intro": "Suppose your accounting firm has an email filter, endpoint protection and a backup subscription. A customer asks who investigates suspicious activity and whether every laptop is covered. The invoices establish what you bought. To answer the customer, you need coverage records and someone responsible for the work.",
    "lead": [
      "When choosing between cybersecurity point solutions and managed security, decide which protections you need and who will operate them and keep the evidence current. For a New Jersey business with existing IT, start with the work falling between contracts."
    ],
    "takeaway": "Keep a point solution when it addresses a defined gap and has an operating owner. Consider a standardized managed stack when protection needs consistent coverage. Add program ownership when recurring risk, evidence and leadership decisions need coordination.",
    "sections": [
      {
        "h": "What a cybersecurity point solution does",
        "ps": [
          "A point solution handles a particular job, such as email filtering, endpoint threat detection or cloud backup. It can be purchased directly or through a provider. Check the operating agreement: the same category can mean software your team runs, managed investigation or a combination.",
          "Separate tools can fit an IT team with the expertise and time to maintain them. Review compatibility and overlapping licenses, then trace how the products hand work to one another. An email alert suggesting account compromise, for instance, may need an identity review and an access decision beyond the email tool's own response.",
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
          "Ask the managed provider to follow an alert through investigation, authorized response and the record of what happened. That sequence shows which work the provider handles and which decisions still reach your business. A reduction in notifications, on its own, cannot establish better protection."
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
          "Keep the questionnaire, evidence reference, date, technical reviewer and approved answer together. For a backup question, include the covered data and relevant restore-test record. This lets the reviewer check that the written claim describes what operates in the firm, rather than relying on the policy alone.",
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
          "Compare proposals for the same users, systems and coverage period. List recurring fees, implementation, transition and the work retained by IT. A lower license price may fit a team that can operate the tool; a managed proposal may include work the firm would otherwise have to fund. The worksheet should make those duties visible alongside the monthly price.",
          "Suppose one email proposal includes filtering and a dashboard, while another adds investigation of supported alerts and a defined escalation route. For both, ask who reviews employee reports, changes allow-lists and handles suspected account misuse. Comparing those duties explains what the additional managed fee would buy. This is a hypothetical comparison, not a description of specific vendor contracts.",
          "If IT spends fewer hours reviewing routine notifications, it may have more time for patching or recovery tests. The IT invoice may remain the same. Ask the IT owner which duties would change and use that answer in the business case, distinguishing available capacity from a reduction in cost."
        ]
      },
      {
        "h": "Make onboarding and replacement part of the purchase",
        "ps": [
          "A replacement service needs a transition plan. Inventory the current agents, mail-routing settings, licenses and administrators before scheduling removal. Confirm whether the new tool can coexist during a limited transition and who will approve changes. Avoid creating a protection gap merely to meet a preferred billing date.",
          "Define acceptance checks for each service. Endpoint onboarding may need a comparison of eligible devices with active deployment records and investigation of missing entries. For email, confirm routing and test the reporting path with harmless messages. For backup, identify the workload and perform an authorized restore check. Each test answers a different coverage question that an onboarding-complete email leaves open.",
          "Agree on an exit process while both parties have time to discuss it. Name who can export reports, transfer administrative access, remove agents and document outstanding incidents. Identify records that the business must retain and any charges for transition help. Your firm should be able to understand its coverage after a provider changes."
        ]
      },
      {
        "h": "Reassess when the business changes",
        "ps": [
          "Set review triggers as well as a calendar date. An acquisition, new client requirement, cloud-platform migration or large increase in contractors can change the population a service needs to cover. A stack that fits today may leave new identities or applications outside its scope tomorrow.",
          "At each review, use the responsibility map to assign unresolved work, fund it where needed and verify completion. A dashboard helps only if its findings reach someone who can act. Keep the covered population, assigned duties, exceptions and next business decision in the operating record so the review can pick up where the last one ended.",
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
    "intro": "A vulnerability scanner can identify technical weaknesses. Your firm still has to decide what they mean for the business: losing a tax application during filing season differs from exposing a client's matter files. Choose a risk assessment tool that helps connect the findings to those consequences and assigns the next action.",
    "lead": [
      {
        "text": "NIST's risk-assessment guidance considers threats, vulnerabilities, likelihood and impact, with preparation, assessment and maintenance over time. It provides a method for assessing risk; a single automated score does not establish it. NIST SP 800-30 Revision 1.",
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
          "Check where the tool gets its information. Live system observations, uploaded documents and self-reported answers have different limits, even when one dashboard combines them. Record the population assessed and the date of each input so a reviewer can tell what supports the finding.",
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
          "Before uploading confidential documents, review who can access them, where they are stored, how long they remain and what permissions any integration receives. Because the tool will hold evidence about your firm, decide what access and scope to approve."
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
          "Start with the decision your firm needs to make. Funding recovery improvements calls for different evidence from preparing a customer response. Either task may use a risk tool; specify the business process, affected systems, intended reviewers and limits before choosing the software.",
          "Include the time period and population. If an assessment covers the main office and email tenant, identify a newly acquired office or specialist application that remains outside it. Record exclusions in the report where a decision-maker will see them. A narrow assessment can be useful when its conclusions remain narrow.",
          "Authorize the work the assessment will actually involve. A questionnaire, document review and authenticated technical test reveal different information and may affect systems differently. Agreeing to a sales demonstration does not authorize inspection of production accounts.",
          "Set a delivery requirement that survives the software purchase. Your firm should receive findings, evidence references, limitations and decisions in a form it can retain. If the only output is a dashboard that disappears when the subscription ends, the tool may not support the record you need."
        ]
      },
      {
        "h": "Distinguish a technical finding from a business risk",
        "ps": [
          "A scanner might identify outdated software on a device. The reviewer still needs to confirm whether the finding is accurate, whether the device is exposed and what work it supports. A business consequence could be interruption of a client-facing workflow, unauthorized access to records or loss of an important dependency.",
          "The report should explain how the observation could lead to the business consequence. Existing controls may reduce the risk, and missing information may leave it uncertain. A reviewer needs room to record both; a ranking that conceals these judgments can make quite different findings look equivalent.",
          "For a hypothetical firm, a confirmed weakness on an internet-facing service used for client exchange may warrant faster attention than an uncertain finding on an isolated test device. That comparison depends on the actual facts. Do not turn the example into a universal scoring rule or an excuse to ignore internal systems.",
          "Keep risk treatment separate from finding validation. IT may establish that a scanner result was inaccurate; leadership may decide to accept a real exposure for a limited period. Those are different outcomes and should produce different records. The tool should preserve why a finding was closed or deferred."
        ]
      },
      {
        "h": "Test the scoring method with two contrasting scenarios",
        "ps": [
          "Find out what drives a high score: unanswered questions, technical severity, framework mapping or a calculated model. Ask which inputs are estimates and who supplies them. The number can look precise even when its assumptions are uncertain.",
          "Try a fictional case with good documentation but a confirmed operational gap, then one with working controls but missing evidence. Check whether the output distinguishes the two. Both require action, but the first may need a control improvement while the second may need verification and recordkeeping.",
          "If the tool uses categories such as high, medium and low, ask for their definitions. Review whether different assessors would apply them consistently enough for your decisions. Preserve the method used at the time of the assessment so a later rating can be interpreted properly.",
          "Scores from different products may use different scales. Within one product, changing the assessment scope can also change the result. Explain why the score changed: a finding was resolved, evidence was supplied or the method changed. Leadership needs that explanation to interpret the dashboard number."
        ]
      },
      {
        "h": "Check evidence handling and reviewer access",
        "ps": [
          "An assessment platform can become a collection point for system details, policies and sensitive screenshots. Determine which records must be uploaded and which can remain in an approved repository with a reference. Redact unnecessary names and details where that still supports the review.",
          "Inspect permissions using a harmless sample workspace. Confirm which users can read evidence, edit findings, approve decisions and export records. Separate the ability to submit an answer from the authority to approve it. Ask how the platform records changes and handles a departing reviewer.",
          "Have IT review connector permissions before enabling automated collection. Ask what the connector reads, whether it can change systems and how its access will be removed when the engagement ends. A connector may have broader access than a manual upload, and supported platforms or licensing may limit what it can collect.",
          "Discuss data retention, vendor access and exit arrangements. Establish what happens to uploaded material, backups and shared links when a workspace is closed. Use the firm's own contractual and information-handling requirements to review the vendor's terms; do not assume a compliance badge settles every data decision."
        ]
      },
      {
        "h": "Connect the report to assigned work and revisit it",
        "ps": [
          "For each material item, the report should name the finding, affected business process, supporting evidence and uncertainty. Add the proposed action, owner, dependencies and the person who can approve spending or accept residual risk. A recommendation without an implementation owner remains unfinished work.",
          "Define what closes the item. If the recommendation is to improve recovery, purchase of a backup subscription is not the same as a successful restore check. If the recommendation is stronger access control, a written policy is not proof of enforcement. Match completion evidence to the claim.",
          "Set review triggers. Changes in applications, suppliers, staff access or customer requirements may invalidate an earlier assumption. A new incident or confirmed technical finding can also justify reassessment. Review scope and evidence dates before reusing last year's report.",
          "Choose a tool the assigned owners can maintain and use during reviews. Transparent inputs and usable exports may be more useful to them than a longer feature list. Judge how well the tool supports decisions and verified work before considering its advertised number of checks."
        ]
      },
      {
        "h": "Keep findings usable when the tool changes",
        "ps": [
          "Open a sample export with the person who will review the assessment. Check whether evidence references, owners, decisions and limitations make sense outside the dashboard. Exporting a spreadsheet of unexplained scores meets a technical export requirement but may lose the assessment record the firm needs.",
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
    "intro": "A list of recommended security tools leaves the firm to decide which work comes first and who will do it. A roadmap carries those decisions forward: each action needs an owner and evidence that shows when it is complete. Without those details, leadership may approve a recommendation while the actual work remains unassigned.",
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
          "Agree on a baseline of systems, responsibilities and controls. Mark what was checked, what someone reported and what remains unknown. Confirm contractual or regulatory requirements with the responsible adviser before calling a gap a compliance failure. That baseline gives later milestones something specific to improve.",
          "A public-domain scan can contribute observable configuration findings. It cannot establish internal access, device coverage or restore capability. Deeper discovery should have a signed scope, authorized access and defined deliverables."
        ]
      },
      {
        "h": "Sequence work around dependencies",
        "ps": [
          "Choose priorities by business impact, exposure and the ability to act. An access-policy change may require new licensing, enrollment or a recovery procedure before rollout. A backup improvement needs a clear workload inventory and an authorized restore operator.",
          "For example, a hypothetical 85-person New Jersey consulting firm could first confirm who approves client-file access. IT could then make the agreed permission changes, followed by a controlled restore test of an important shared workspace. That sequence is a planning example; the firm’s actual risks and dependencies determine the order.",
          "Each milestone should identify the responsible person, expected cost or budget decision, dependencies, target date and acceptance evidence. If implementation depends on IT or another vendor, obtain that owner's agreement before presenting the date as committed."
        ]
      },
      {
        "h": "Add evidence and leadership decisions",
        "ps": [
          "A milestone closes when the agreed acceptance check passes. Installation records, configuration exports, training records and restore-test results support different claims; choose the evidence that matches the change and store sensitive records appropriately.",
          "Use the leadership review to resolve missed dates and decisions awaiting approval as well as report completed work. Give a deferred risk a reason and a date to reconsider it. When systems, staff or client obligations change, revise the plan so the next review addresses the current business."
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
          "Write the milestone so its owner can show that the result was achieved. “Deploy endpoint protection” leaves completion vague. “Reconcile all eligible workstations against active protection records and resolve documented exceptions” defines the population and the check needed to close the work.",
          "For each milestone, record the business reason, accountable owner, implementing party, dependencies, target date and acceptance evidence. Include the approver for spending or disruption. Keep a short description of what remains outside scope so closure does not imply a broader claim.",
          "Have the implementing owner review the plan before leadership approves its date. An adviser can recommend work, but another vendor must agree to commit its resources. If a dependency has no confirmed date, keep the target provisional and name the decision needed to settle it.",
          "Store evidence references with the milestone rather than copying sensitive exports into a widely shared roadmap. Leadership needs enough information to understand completion; detailed technical records can remain in an approved restricted system with access for the responsible reviewer."
        ]
      },
      {
        "h": "Use a staged plan without inventing universal deadlines",
        "ps": [
          "The first stage establishes facts and immediate decisions. Confirm important systems, owners, supported protection and known exceptions. Address urgent confirmed exposure through the appropriate operating route instead of waiting for a quarterly planning meeting. Record unknowns that require further authorized discovery.",
          "The next stage implements agreed priorities with dependencies checked. An access change may need enrollment and recovery preparation. A device rollout may need compatibility testing and an approved installation window. A backup improvement may require workload mapping before a meaningful restore test can occur.",
          "After implementation, reconcile coverage and review the acceptance evidence. Check whether the business consequence that prompted the work has changed, and decide which records need scheduled review or an earlier check after a change. Those checks keep the roadmap useful after the initial project finishes.",
          "These stages do not prescribe a 30-, 60- or 90-day deadline for every firm. Sequence and dates depend on exposure, business constraints and available owners. When using an illustrative schedule, label it as a planning assumption until the implementing parties commit to it."
        ]
      },
      {
        "h": "Keep urgent work and long-term improvements connected",
        "ps": [
          "A new confirmed finding can require work outside the planned sequence. Route it to the appropriate owner, assess its business consequence and document the decision. Update the roadmap if resources or dependencies shift, and revise the timeline when more urgent work takes priority.",
          "Review new notifications before changing the program’s priorities. The responsible reviewer should separate confirmed urgent work from uncertain signals and routine maintenance. If the priority changes, record the reason so leadership can see what other work has been delayed.",
          "Keep incident response separate from roadmap governance. A suspected active compromise requires the agreed notification, containment and investigation route. The planning record can capture resulting improvements later. A milestone discussion is not a substitute for authorized response.",
          "Coordinate with IT's maintenance schedule. Routine patching and administration remain with their operating owner, but material exceptions may require leadership decisions. Use the roadmap to identify those decisions while IT continues to manage its technical task queue."
        ]
      },
      {
        "h": "Plan a recovery milestone around usable work",
        "ps": [
          "Choose an important workflow and identify the data and systems it depends on. Define what a successful authorized recovery check would demonstrate and who can perform it. Obtain the business owner's acceptance criteria before the test, especially where timing or data currency matters.",
          "Suppose a firm restores a defined shared workspace into a controlled location. An authorized reviewer opens and uses selected files. That hypothetical test supports a claim about that workload under those conditions. It cannot establish the recovery time for every other application.",
          "Record the recovery test’s date, workload, result and limits, along with any follow-up work. A failed acceptance check leaves the milestone open or needs a clearly linked corrective item. Buying the backup product does not complete a milestone that requires a usable restore.",
          "Check which recovery duties sit outside the security service. IT may need to restore applications or rebuild systems, while specialist response and business notification have other owners. Include those dependencies in the plan before presenting recovery improvement as completed coverage."
        ]
      },
      {
        "h": "Make evidence and exception reviews explicit milestones",
        "ps": [
          "Build a record of the claims the firm regularly makes to customers and insurers. Identify the control owner, evidence location, date and covered population. Schedule a review of unsupported or stale claims before the next submission rather than treating questionnaire drafting as an isolated task.",
          "An exception review should produce decisions. For each material gap, leadership can approve treatment, request more information or accept a defined risk with conditions and a review date. Record the rationale and responsible person. Acceptance is not the same as technical resolution.",
          "Tell the exception owner what should bring the decision back to leadership. A new client requirement, platform change or failed control check may make the original justification obsolete. Without a reconsideration trigger, the exception can stay open long after the reason for it has changed.",
          "Use summaries for governance and controlled references for supporting records. The roadmap should be readable by decision-makers without circulating credentials, incident details or unnecessary personal information. Evidence quality includes handling the record appropriately."
        ]
      },
      {
        "h": "Measure progress through verified outcomes",
        "ps": [
          "Report completed milestones against their acceptance checks, not only tasks moved to a finished column. Explain outstanding dependencies, missed dates and decisions awaiting approval. If scope changes, show the new population or requirement so comparisons remain meaningful.",
          "Use numbers only when they describe something measured. For example, a fictional coverage check could record 48 of 50 eligible devices reconciled, with two exceptions assigned to IT. That is 96 percent of the stated population at the check date. It is not a security score or a claim about excluded systems.",
          "Spending, attendance and document counts describe activity. To assess the investment, leadership also needs to see the verified changes and remaining uncertainty. Connect the report to the business problem that the work was intended to address.",
          "At the next review, carry forward unresolved decisions with current owners and dates. Retire superseded work with a reason and keep its history. Make the next action clear and preserve enough context to explain why the firm chose it."
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
    "intro": "A familiar voice or face cannot authorize a payment. Synthetic or manipulated audio and video can make an executive impersonation convincing, while the requested action still needs verification. Keep the firm's approval process in place when someone asks for money or information through an unusual route.",
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
          "These cases show why familiar appearance cannot serve as payment approval. Keep training tied to what the reports establish. They do not show that every executive impersonation uses AI, that every video call is fake or that a set number of seconds of audio will reliably produce a convincing clone."
        ]
      },
      {
        "h": "Separate identity confidence from approval",
        "ps": [
          "A face or voice can make staff more confident about who is speaking, but payment approval also depends on the instruction. Confirm the authorized person, business purpose and actual beneficiary, then identify who is permitted to release the funds. Recognizing the caller does not complete those checks.",
          "A real executive can also make a mistaken request or use an account that has been compromised. Apply the financial rule consistently rather than creating a special exception for apparently authentic senior requests. The control should survive both impersonation and ordinary errors.",
          "Record the instruction that was approved and connect it to the payment that is released. If the beneficiary changes afterward, the replacement needs its own review. A callback confirming one account cannot verify a later payment to a different account."
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
          "Set a verification rule that works under pressure. Fraudsters may invoke urgency, confidentiality or seniority to discourage a check, and a legitimate urgent request can create the same pressure. Staff need a process they can follow in either case, without first deciding whether the voice sounds suspicious.",
          "Leadership should tell staff that pausing for the approved verification is expected. If an executive asks for an exception, identify the authorized exception route and evidence. Staff should not have to decide alone whether a senior person's apparent instruction overrides a financial control.",
          "Agree what happens when the executive is unavailable near a payment cutoff: use the established alternate route or hold release until authorized verification is complete. If that choice is left until the deadline, staff may bypass a procedure they cannot complete. Make the alternative workable before an urgent request arrives."
        ]
      },
      {
        "h": "Avoid making visual clues the primary control",
        "ps": [
          "Audio artifacts, unnatural movement or an inconsistent background may justify caution, but their absence does not verify a request. Product capabilities and attack methods change. Staff should not be expected to perform media forensics while answering a client call or processing a payment.",
          "Ask staff to report the suspicious request and preserve what they received. A polished message can come from ordinary account compromise or conventional impersonation, so it does not prove that AI was involved. Reporting should not depend on an employee identifying how the message was generated.",
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
          "Review access to shared financial records and trusted contact lists. An attacker who can alter those records may affect the verification route. Assign the owner who approves changes and the administrator who implements permissions. Record meaningful changes and review access when staff leave.",
          "External exposure review may also identify impersonation using the firm's name. A report can support investigation and platform reporting, but it does not guarantee rapid removal of every fake account. Confirm the relevant service's monitored assets and response scope before relying on it."
        ]
      },
      {
        "h": "Test a transaction rather than a fake-video contest",
        "ps": [
          "Use a harmless exercise in which an apparent senior request introduces a new beneficiary and a tight deadline. Ask staff to show the trusted contact, verification, approvals and decision. Include the payment operator and alternate approver so the exercise tests the staff who can release the funds.",
          "Do not use real client banking details or send an unannounced synthetic executive recording outside the agreed exercise scope. The purpose is to test the financial process and reporting route, with approved participants and materials. Record the actual steps and any missing authority.",
          "Use the exercise record to fix the step that failed. Replace an unavailable trusted number with a maintained contact. Have leadership resolve an ambiguous approval rule, or arrange appropriate access when a staff member cannot reach the approved record. Then repeat that step to check the correction."
        ]
      },
      {
        "h": "Act promptly if money has moved",
        "ps": [
          {
            "text": "The FBI's business email compromise guidance advises immediate financial-institution contact and reporting to IC3. Record the transfer details, contact times and reference numbers. Contact the bank and report the fraud without waiting for confirmation that AI was used.",
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
          "Keep the verification record current when people change roles or leave, and test the alternate contact during a planned exercise. A stale number or an alternate who lacks authority can make a sound rule unusable. Assign someone to maintain the route and keep evidence of the checks after the initial setup."
        ]
      }
    ],
    "takeaway": "Verify the instruction through a trusted route and complete the required approvals. A familiar face, voice or account provides context; it cannot authorize the transaction on its own.",
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
    "intro": "A lookalike website or an exposed credential gives the firm something to investigate. Digital risk protection looks for defined external exposures like these, but providers monitor different assets and sources. Before relying on a service, check whether it can observe the identities you care about and who will confirm and act on a finding.",
    "lead": [
      "For a New Jersey professional-services firm, begin with the domains, public identities and online services clients use to recognize you. Those are the identities a possible impersonation report needs to be checked against."
    ],
    "takeaway": "Scope the public assets and sources a service monitors, then confirm who reviews findings and what response assistance is included.",
    "sections": [
      {
        "h": "Choose the assets that matter",
        "ps": [
          "Start with the approved domains and client-facing accounts the firm can review. For each, identify someone who can confirm whether a reported page, account or message is authorized. The initial monitoring scope needs to fit the team's capacity to act on findings.",
          {
            "text": "Impersonation scams use trusted identities and pressure to obtain payment or information, as described in the FTC business-impersonation guidance. External monitoring may flag a possible impersonation, while staff still need an independent way to verify the request.",
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
          "Have IT verify the affected account when an exposed-credential alert arrives, then take approved access actions. The finding may be incomplete or concern an older exposure; it does not by itself establish a current compromise. Involve the authorized responder if the evidence points to a wider incident.",
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
          "Ask vendors to separate the categories they support: business impersonation, lookalike domains, exposed credentials and any other proposed monitoring. Then compare the source list and response process for each. A broad service label may cover only a few sources and notification-only response.",
          "Identify the assets clients use to recognize the firm: approved domains, public accounts, brand names and relevant contact points. Keep a record of legitimate assets and their owners. The reviewer needs that record to distinguish an impersonation from an authorized campaign or a newly created provider page.",
          "Prioritize the client interactions with the largest consequences. A fraudulent payment instruction may require financial verification alongside an external report. For impersonation of a public announcement account, someone needs authority to confirm the misuse and approve a response. Assign the route that fits how clients encounter the firm."
        ]
      },
      {
        "h": "Examine source coverage and freshness",
        "ps": [
          "Ask where the service obtains observations and what sources remain outside its coverage. Determine how often observations are collected, when the customer is notified and what information accompanies a possible match. Do not assume a service searches the entire internet, every private forum or every credential collection.",
          "Separate the observation date from the age of the information reported. An old credential finding can warrant an access review without proving that the password still works. IT should assess the affected account and safeguards through the approved process.",
          "Request a representative report with fictional or appropriately sanitized data. Could your reviewer identify the asset, source, time and proposed next step from it? A category alone gives the reviewer little basis for deciding what to do."
        ]
      },
      {
        "h": "Keep validation separate from detection",
        "ps": [
          "Validate a possible match against the firm's legitimate assets before making an accusation or requesting removal. A similar domain may belong to an approved campaign, authorized provider or unrelated organization sharing the name. The designated reviewer needs business context to distinguish those cases.",
          "For a suspected malicious site, preserve relevant observations without entering credentials, downloading unknown files or interacting unnecessarily. Use authorized specialists where technical investigation is needed. The business owner can confirm branding and authorization while the specialist handles the appropriate technical assessment.",
          "For credentials, do not test a reported password by trying to log in as the employee. Have the authorized administrator assess the account, use the approved access actions and determine whether incident investigation is warranted. A finding can prompt protection without proving a current compromise."
        ]
      },
      {
        "h": "Compare response assistance in detail",
        "ps": [
          "A takedown request depends on the relevant platform, evidence and process. Confirm whether the service submits requests, supplies templates or only identifies the reporting route. Avoid treating assistance as a guarantee that every site or account will be removed within a fixed period.",
          "Find out what happens if a platform rejects or ignores a report. Name the business escalation owner and identify legal or specialist work requiring a separate engagement. An instruction to contact support should explain who takes the case and what help remains in scope."
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
            "text": "Use the password-manager guide and MFA comparison to review the relevant operating controls. Keep both the list of accounts and the evidence that these controls are enforced up to date. The external finding does not replace that internal work.",
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
          "Compare the fee against the proposed assets, monitoring categories and work after an alert. Ask how new domains or public identities change the price, and include validation, reporting assistance, follow-up and records access. A lower subscription fee may leave more of that work with your team.",
          "Estimate the internal time using a representative report or pilot. Treat the estimate as an assumption, not a promised saving. Identify who reviews findings and who performs related IT or business changes. An affordable service still needs enough operating capacity to act on meaningful results.",
          "Notification volume alone is a poor value measure: broader scope, duplicates and false matches can all raise the count. Track review outcomes instead, such as confirmed issues, legitimate assets, unresolved findings and completed supported actions. State the counting rules in the leadership report."
        ]
      },
      {
        "h": "Run a bounded onboarding check",
        "ps": [
          "Confirm that the provider enrolled the approved asset list, including the correct ownership and naming variations. If an important domain is missing, successful monitoring of other domains does not fill that gap.",
          "Use harmless examples or provider-supplied sample findings to test routing and review. Identify who confirms the business context, prepares the response and tracks the result. Do not register a confusing live lookalike or publish fake customer-facing material merely to create a test without a separately approved plan.",
          "Record acceptance criteria and unresolved exclusions. The initial check should establish that the agreed assets, reporting and response route are set up. It does not prove that every possible external misuse will be found."
        ]
      },
      {
        "h": "Maintain assets and evidence as the business changes",
        "ps": [
          "Update the list after a rebrand, acquisition, new public account or campaign domain. Identify legitimate temporary assets and their end date. The monitoring reviewer should not have to guess whether a newly observed page belongs to the firm.",
          "Keep findings and sensitive account information in an approved restricted location. General operating records can identify the process and responsible owner without copying exposed credentials or live incident details. Confirm export and retention arrangements if the service ends.",
          "Report significant unresolved issues, response status and coverage changes to leadership. Explain a quiet period in terms of the configured service: no relevant findings were reported. It cannot establish that the firm's name or credentials were never misused."
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
    "intro": "An email security gateway checks messages before they reach staff. Someone also has to maintain the filters, review reports and handle messages that need a judgment call. A managed gateway service can take on agreed parts of that work. Compare those responsibilities with what your existing IT provider already does.",
    "lead": [
      "A blocked attachment and a delayed client email can arrive in the same quarantine queue. Someone needs to distinguish them and respond within the firm's agreed working hours."
    ],
    "takeaway": "Compare gateway deployment, filtering features, quarantine ownership and managed service scope before choosing email protection.",
    "sections": [
      {
        "h": "Compare the deployment before the service contract",
        "ps": [
          "Ask the provider to draw the mail flow before discussing who manages it. A gateway may run on infrastructure maintained by IT or in a cloud service that routes your mail. Other products connect to the mailbox platform. The arrangement determines which traffic they can inspect, including internal messages and mail from business applications.",
          {
            "text": "Microsoft describes Safe Links as URL scanning and rewriting with checks when a user clicks. Safe Attachments examines attachments for threats. Both have licensing and policy requirements, so check what is configured in the proposed service before relying on the feature name. Another vendor's inclusions need their own review. Microsoft Safe Links, Microsoft Safe Attachments.",
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
          "Check whether the proposed deployment inspects messages exchanged inside the organization. An external-route gateway and a mailbox-integrated product can have different visibility. Compare the traffic and actions supported by the actual configuration before choosing between them.",
          {
            "text": "Agree how the service will work with the existing IT provider. Identify who owns routing, authentication records and recovery from a delivery problem. Microsoft documents configuration considerations for its own email protection stack; another product needs its own supported design and review.",
            "links": [
              {
                "phrase": "email protection stack",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/protection-stack-microsoft-defender-for-office365"
              }
            ]
          },
          "Date the coverage record and review it whenever the business adds a sending service. A department may buy an application without involving the email administrator; its messages can then follow a route missing from the original inventory. Updating the record gives IT and the provider a chance to check that route."
        ]
      },
      {
        "h": "Demonstrate the handling of an ordinary false positive",
        "ps": [
          "Ask the provider to show how a staff member requests review of a legitimate message that has been held. Use approved harmless test content. The demonstration should cover the request, the reviewer’s decision, the release and the record left behind.",
          "Confirm which quarantined messages users may release themselves and which require an administrator or security reviewer. Base the answer on the configured policy. Staff need a usable route for legitimate documents, but they should not have to judge every unfamiliar attachment just because the product permits self-release.",
          "Discuss the approved exception process. A temporary adjustment for one message is different from permanently trusting a sender or domain. Record who may approve each type, how its scope is limited and when it is revisited. Broad exceptions can change the protection well beyond the delivery problem that prompted them.",
          "Agree how quickly business-critical messages should be reviewed within the actual service hours. Explain how staff escalate a delayed invoice or client document and what happens outside the normal queue. 'Managed' and 'continuous monitoring' do not, by themselves, set that response expectation."
        ]
      },
      {
        "h": "Evaluate a report of credential entry",
        "ps": [
          "Filtering and account response require different decisions. If an employee reports entering credentials through a suspicious link, ask who receives the report and who investigates the account. Identify which containment actions are authorized and which must be performed by the tenant administrator or another responder.",
          "Keep the incident handoff concrete. The provider should identify the business contact, alternate communication route and information needed for escalation. An email-security service may remove messages without supplying full forensic investigation or recovery. Those boundaries should be clear before the incident.",
          "Review payment-related reports separately. A provider’s technical analysis cannot authorize a vendor bank change. Finance should use its established verification and approval process regardless of whether the message was quarantined, released or authenticated successfully.",
          "Give each vendor the same fictional scenario and ask it to describe the assigned work. Resolve unanswered questions in the written scope before purchase. The demonstration can show a product's behavior; the scope establishes which responsibilities the provider accepts."
        ]
      },
      {
        "h": "Plan the routing change as a business change",
        "ps": [
          "Agree an onboarding sequence with IT and the service provider. Identify test mailboxes, senders, expected behavior and acceptance criteria. Keep the previous configuration and the authorized recovery procedure available to the people carrying out the change.",
          "Test normal correspondence and business-generated messages. Include shared mailboxes and the external recipients involved in important workflows. The pilot should identify delivery effects as well as threat-handling capabilities. Do not test with live harmful files or unapproved phishing activity.",
          "Before rollout, tell employees how to report suspicious mail, request a quarantine review and obtain help when expected mail is missing. Include those procedures in the rollout notice so staff know how to recover an urgently needed client attachment. Announcing improved protection alone leaves that question unanswered.",
          "Name the people who check the pilot results and approve the rollout. Correct coverage or compatibility issues before expanding, and keep unfinished onboarding tasks assigned and visible. If those assignments remain unclear, the firm may start using the service while each team assumes the other owns the unfinished work."
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
          "Obtain the responsibilities in writing, then revisit them when the mail platform or business workflows change. Confirm which duties the vendor includes instead of relying on the 'managed' label."
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
          "During a pilot, repeat the false-positive demonstration with harmless messages and actual staff roles. Confirm that the proposed release rules and escalation route work in the configured environment, rather than relying only on a sales demonstration. Staff need a usable route for time-sensitive client mail without blanket permission to release suspicious attachments.",
          "Keep a record of recurring false positives during the pilot and review why they happen. Compare any proposed allow-list change with the exception limits agreed earlier; record its owner, reason and review date. Include ordinary help requests in the trial, even when filtering works as configured."
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
    "intro": "Ask an email security vendor what happens when an employee reports a suspicious message. Who reviews it? Who can act if the employee entered a password or changed a payment? Filtering is one part of the service; reports and handoffs show how it works when a message gets through.",
    "lead": [
      "For a firm with existing IT, review those responsibilities before comparing the monthly price. Two offers can list similar tools while leaving very different amounts of work with your staff."
    ],
    "takeaway": "Evaluate email security services through coverage, report handling, containment authority, escalation and the work retained by existing IT.",
    "sections": [
      {
        "h": "Walk through one incident before signing",
        "ps": [
          "Use the same hypothetical incident with every bidder. An employee reports a bank-detail change and says they entered their password on the linked page. Ask the vendor how it would review the message and investigate the account, including who receives the report, who acts and who informs your business contact.",
          "Agree on the containment handoff before an incident occurs. A provider may be authorized to act on a covered account while other parties handle restoration, payment recovery, forensic investigation or legal advice. Identify those parties and the contact method so the report reaches whoever owns the next action.",
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
          "Separate the purchased capability from its configured coverage. A firm may hold licenses while leaving a mailbox outside a policy or a supported integration unfinished. Ask what evidence will show that onboarding is complete for the mailboxes and accounts in scope.",
          "Once onboarding is complete, establish who adds new users, checks shared mailboxes and reviews new sending applications. Record an owner for each event. Otherwise the coverage can drift while a service report continues to describe the original mailbox population.",
          "Date the coverage schedule and record unresolved exceptions. That allows the firm to show what was covered when it prepared a customer or insurer response. A general, undated statement that email security is enabled cannot answer a detailed question about which mailboxes were protected."
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
          "Compare the services against ordinary work: receiving legitimate documents, reporting uncertain messages and escalating suspected account compromise. Ask how the vendor supports each task and where that support ends."
        ]
      },
      {
        "h": "Inspect the user-reporting route",
        "ps": [
          "Ask for a demonstration using approved harmless messages. A staff member should be able to report a concern through the configured process, and the assigned reviewer should receive the information needed to assess it. Confirm what feedback the employee gets and where further questions go.",
          "Include a report made after an employee clicked a link or entered credentials in the demonstration. That report may require account investigation and authorized containment as well as message classification. Confirm who owns those steps and how the service escalates beyond its own scope.",
          "Check the alternate route when the main account is unavailable or suspected to be compromised. An employee locked out of email still needs a trusted way to report what happened. Record that contact before relying exclusively on an in-mailbox button.",
          "Use records of decisions, escalations and unresolved cases to evaluate report handling. An acknowledgement can arrive quickly while the investigation remains unfinished. Ask how the monthly report identifies work still waiting on the firm or its IT provider."
        ]
      },
      {
        "h": "Examine exception authority",
        "ps": [
          "Filtering can interrupt legitimate work, and exceptions can weaken protection if they are broader than necessary. Ask who reviews requests, who approves changes and how the change is limited. Staff should not need to guess whether to release an unfamiliar file simply because a deadline is approaching.",
          "Request an example of the record kept for an exception. It should show the reason, scope, approver and review date where applicable. A permanent whole-domain exception created for one delayed message deserves more scrutiny than a narrowly approved release.",
          "If business administrators can change policy directly, agree on how they will inform the provider. When several administrators work independently, the provider may miss changes that affect coverage. Recording this process also helps resolve a later dispute about who disabled a protection.",
          "Include removal of outdated exceptions in maintenance. A review should distinguish justified ongoing arrangements from changes that no longer serve a business purpose. Leave unresolved limitations visible in the report rather than hiding them behind a general protected status."
        ]
      },
      {
        "h": "Compare service scope with the people available",
        "ps": [
          "Ask which team provides monitoring, review and containment. Confirm hours, escalation routes and supported actions through the written agreement. A vendor-operated continuous service and a locally staffed provider are different delivery arrangements; the firm should know the model without assuming one from the branding.",
          "Compare the existing IT contract with the security proposal, including tenant administration, routine remediation, licensing and recovery. Assign any task that both providers expect the other to perform before onboarding. Discovering the gap during an incident leaves the business waiting for an owner.",
          "Ask how the business authorizes actions that can interrupt work. Some containment may be pre-authorized within a defined scope. Other decisions need leadership or the administrator. Record both the authority and the backup contact so the service is usable outside an ordinary working day.",
          "Distinguish full incident response from the covered security service. Specialized forensics, legal advice, bank recovery and broader restoration may require other parties and approvals. A clear handoff is part of a credible proposal."
        ]
      },
      {
        "h": "Review evidence and exit arrangements",
        "ps": [
          "Request a sample of the information the firm can retain for its own governance and questionnaires. Coverage dates, relevant configuration evidence and a record of response decisions are more useful than a marketing statement that the tools are enterprise-grade.",
          "Agree who prepares evidence and who approves external answers. The provider can help organize support, but the client owns final attestations. Sensitive technical records and live findings should be shared only through the approved route with the appropriate audience.",
          "Plan the exit as well as onboarding. Identify who hands over routing, access and relevant records, removes provider integrations and checks that mail delivery still works. The firm should retain control of its tenant and public domain records throughout the change."
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
    "intro": "Ending an employee's access requires decisions about both accounts and records. Deleting an account too soon can remove information needed for handover or retention. Disabling email alone may leave access to other applications. Plan those steps together, with an authorized departure time and a record of what each owner completed.",
    "sections": [
      {
        "h": "Start with an authorized request and a precise time",
        "ps": [
          "HR or the responsible manager should authorize the access changes and specify the employee, status and departure time. Confirm that request through the established process. An unverified departure email could itself be an impersonation attempt; IT needs a trusted instruction before changing access.",
          "Specify whether access ends immediately or at an agreed time after handover. A scheduled departure gives the business an opportunity to transfer responsibilities before access closes. An urgent departure may require containment first and a more careful evidence review. The coordinator should know which process applies without distributing the reason to unnecessary recipients.",
          "Name a backup coordinator and record where the checklist and approved contacts are held. A departure should not wait for the usual coordinator to return from leave. The backup also needs a way to start when the main collaboration system is unavailable."
        ]
      },
      {
        "h": "Inventory the access that needs to end",
        "ps": [
          "Begin with the identity provider, email and cloud documents, then check payroll, finance, customer systems, remote access and specialist applications. Include systems purchased by a department and accounts that do not use single sign-on. The departing person’s manager and application owners can help identify those services.",
          "Review administrator accounts separately from everyday accounts. Include secondary accounts, vendor portals, password-manager access and remote support tools. Do not assume that blocking the person’s ordinary sign-in covers every identity they used.",
          "Also identify physical and operational access: keys, badges, company phones, security keys and any equipment in their possession. Your checklist should state who records each item, who collects it and how an unreturned device is escalated. Avoid marking everything complete because a laptop was handed back.",
          "Use gaps found during this departure to improve onboarding and account ownership records. Maintaining that inventory means the next coordinator can begin with known systems instead of searching receipts and message history again."
        ]
      },
      {
        "h": "Block sign-in and address existing sessions",
        "ps": [
          {
            "text": "Blocking a new sign-in and addressing an existing session are different actions. Have the authorized administrator follow the platform's documented removal process and verify what remains active. Microsoft's former-employee guidance covers access blocking, data preservation, devices and mailbox continuity. Coordinate those steps before deleting the account.",
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
          "In a hybrid environment, IT should identify which system controls account administration and follow its supported removal steps. A cloud action may be only part of the procedure for a synchronized identity. Confirm propagation limits before saying that every session has ended."
        ]
      },
      {
        "h": "Preserve records before deleting accounts or licenses",
        "ps": [
          "Ask the responsible business owner which records need to remain available and whether a legal or regulatory retention requirement applies. Get appropriate advice for holds or disputed departures. Decide which records the firm must preserve before removing a license to save costs.",
          "Transfer the work that depends on the departing person, including shared documents, scheduled reports, subscriptions and approval queues. Check integrations for the same dependency. Reassign them through a supported arrangement so the business can continue without keeping the former employee’s identity active indefinitely.",
          "Limit access to preserved mail and files. A successor may need particular business records without needing unrestricted access to every message. Use approved permissions and document the purpose. Access to a former employee’s mailbox deserves the same care as access to other sensitive company information.",
          "Do not treat retention and backup as interchangeable. Confirm what your actual retention settings, holds and backup service cover before deleting information. If the administrator cannot establish the consequences, keep the deletion decision open while resolving that uncertainty."
        ]
      },
      {
        "h": "Handle mailbox continuity deliberately",
        "ps": [
          "Decide who handles new messages, which address remains available and how external contacts will be informed. A shared mailbox or approved forwarding arrangement may support continuity, depending on the platform and license requirements. The original user’s sign-in should not remain the business’s long-term handover mechanism.",
          "Review existing forwarding rules and delegates. Remove unauthorized external destinations and unnecessary access through the approved process. Preserve relevant evidence if a suspicious rule may be part of an incident, rather than erasing it without a record.",
          "Give the continuity arrangement a review date and a person responsible for reassessing it. They should decide whether successor mailbox access is still needed and whether the address should keep receiving mail. Otherwise, permissions granted for a brief handover can persist for months.",
          "Explain the new contact route to staff and customers as appropriate. Clear ownership reduces the pressure to reactivate a departed person’s login because a client sent an urgent request to the old address."
        ]
      },
      {
        "h": "Remove shared credentials and other access paths",
        "ps": [
          "Removing a person from a password vault does not erase credentials they already knew or copied. Rotate shared secrets that remain usable, particularly for important accounts. Where a service supports individual users, replace shared access with named accounts and appropriate permissions.",
          "Review API keys, tokens and other access grants with the application owner before changing them. A business integration may need a safe replacement or reassignment to continue operating. A personal grant with no remaining business purpose can follow the removal procedure.",
          "Review remote access, trusted devices and third-party applications. Ask each owner to confirm completion in their own system. A central identity action is useful evidence but does not automatically cover independently administered services.",
          "Document exceptions with an owner and a deadline. If a credential cannot be changed immediately because it supports a critical process, leadership needs to understand the exposure and approve the interim arrangement. Keep an unresolved dependency listed as an open exception."
        ]
      },
      {
        "h": "Collect devices without destroying needed evidence",
        "ps": [
          "Record company-owned devices, accessories and security keys against the asset inventory. Have IT verify their condition and follow the organization’s reissue procedure. Preserve information or evidence when an investigation or hold requires it before wiping the device.",
          "For personal devices, use only the authorized work-data removal procedure supported by your management setup and applicable agreements. Do not promise that the company can selectively erase every unmanaged copy. Confirm what is actually enrolled and which controls are available.",
          "Escalate unreturned equipment through the established personnel and asset process. IT can assess supported access-blocking or device-management actions, while the business owner handles the wider issue. A remote command alone cannot settle device possession, data handling and employment questions."
        ]
      },
      {
        "h": "A checklist with evidence fields",
        "ps": [
          "Use your existing ticketing or personnel process to show what each owner did and when. The completion record can establish an account action without repeating private details about the departure."
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
          "Include an automated report owned by the fictional employee and an application outside single sign-on. Ask whether the team can find the handover and removal tasks without prompting. Use missing owners, unclear timing or unsupported recovery claims to revise the checklist before a real departure makes them urgent."
        ]
      },
      {
        "h": "Verify completion and improve the inventory",
        "ps": [
          "The coordinator should reconcile the checklist with the original access inventory. Ask owners to identify anything incomplete, including records awaiting retention advice or integrations awaiting reassignment. Keep each exception assigned until it is resolved.",
          "Look for recurring process gaps after departures: late requests, unknown SaaS accounts, missing devices or unclear ownership. Use the review to improve those records and handoffs. A departure does not itself imply suspicious activity.",
          "Helm can discuss account-protection responsibilities alongside your existing IT provider. Routine administration and employee account changes remain with the named IT owner unless a separate written scope states otherwise. A public domain scan cannot verify that an employee has been offboarded."
        ]
      }
    ],
    "takeaway": "Authorize the departure time, inventory access, block sign-in and address sessions. Preserve required records, transfer business ownership, remove remaining access paths and verify the evidence. Keep unresolved exceptions assigned rather than declaring completion from one account change.",
    "lead": [
      "Use a written checklist with an authorized departure time, a named coordinator and owners for the technical actions. The process should cover normal resignations, urgent departures, contractors and role changes. Share sensitive personnel information only with the people who need it to carry out the work."
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
    "intro": "If a client folder disappears, your firm needs a way to restore it and someone authorized to do the work. Google Workspace has retention and recovery features, each with its own scope. Compare those capabilities with the information and working access your team needs back.",
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
            "text": "Have your Workspace administrator document the edition, retention rules and recovery methods for the data your firm uses. Deleted Drive data has a limited administrator recovery window and process restrictions. Compare the actual loss event with current guidance before relying on recovery. Google Drive administrator recovery.",
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
          "When a provider offers a recovery-time objective, ask which agreed scenario it covers and what assumptions the target depends on. Confirm charges for work outside the standard process. Keep failed tests and excluded data in the record, because successful results alone will not describe the firm's ability to recover."
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
          "Build the recovery inventory by workload and owner. Gmail, individual Drive accounts and shared drives may have different access and recovery arrangements. Include Calendar, Contacts, Chat and applications that use Workspace information, then record how each important workload would be recovered. A user license alone cannot show that all of this information is covered.",
          "Ask business owners where the authoritative copy lives. A project document may be shared through Drive while its signed final version belongs in a different records system. A spreadsheet may feed an accounting application that has its own recovery needs. Mapping that relationship prevents a firm from restoring the visible file while overlooking the system required to use it.",
          "Check who owns externally shared files. A file may appear in a user's Drive while belonging to another organization, and that visibility does not establish that your backup can capture or restore it. Confirm the provider's capabilities for that ownership and sharing arrangement. For essential information, agree with the data owner where the authoritative copy belongs and who is responsible for recovery."
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
          "Before an account changes, have the responsible records adviser decide whether information must be preserved and have the authorized administrator implement that decision. Record the owner and the required action. Someone following an offboarding checklist should not have to infer whether a hold can end or records can be deleted during an ordinary departure or service cancellation."
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
          "Choose a documented way to handle the account using current product capabilities and the firm's requirements. Keeping every account active indefinitely can create access and cost problems of its own. When introducing a new procedure, check it with non-sensitive test records before relying on it for a departure."
        ]
      },
      {
        "h": "Compare providers using a representative restore",
        "ps": [
          "Use a hypothetical request from a consulting team to define what a pilot must demonstrate: recovery of a deleted client folder containing several documents and a spreadsheet. The operator should locate the relevant recovery point, restore to the approved destination and ask the business owner to check the result.",
          "Check the folder structure, usable content, ownership and intended access. If the service restores content but requires separate permission repair, record that work and its owner. Ask how a restore affects documents edited after the selected recovery point. Decide how the team will reconcile current work before allowing a broad restore over an active workspace.",
          "Walk through how the restore request is approved. A request involving sensitive client information needs an authorized person, and the provider should explain whether a user can restore covered data or an administrator must do it. Confirm where the activity is recorded. Those steps determine whether the firm can use the advertised features safely during a busy period."
        ]
      },
      {
        "h": "Examine coverage changes and missed captures",
        "ps": [
          "Ask how the service identifies new users, shared drives and other covered objects. Determine whether enrollment is automatic, whether an administrator approves additions and what an excluded object looks like in reporting. A new shared drive created for a client should trigger a coverage decision when the work begins.",
          "Compare the backup inventory with the business inventory, including objects that were never enrolled. A green status for enrolled objects cannot describe an important shared drive that is absent from the service. Review failed captures and exclusions, then give each exception an owner and a decision date.",
          "Ask the provider how the firm is notified when access permissions expire or a connection fails. Confirm the support route and the evidence available to establish the last usable recovery point. Coverage reporting should identify what was protected and what needs action, rather than offering a percentage without a clear denominator."
        ]
      },
      {
        "h": "Protect the ability to recover",
        "ps": [
          "Identify who administers production Workspace and who administers the backup. If the same identity controls both, review the additional protections and recovery dependencies with IT. Ask how someone will reach the backup when the main administrator is unavailable or the production tenant cannot be used. The answers describe dependencies to manage, not an architecture guaranteed to eliminate every attack path.",
          "Store the recovery contact list and approved procedure somewhere the response team can reach during the scenario it covers. Include provider escalation, business authorization and any specialist support that must be separately engaged. Test the contact route during a planned exercise, with harmless sample data and agreed boundaries."
        ]
      },
      {
        "h": "Measure evidence rather than reassurance",
        "ps": [
          "For each test, retain the workload, requested item, recovery point, destination, authorization, operator and result. State whether the business owner confirmed usability. Record the elapsed time and any manual repairs. An incomplete restore provides useful evidence about a gap when the gap is assigned and followed up.",
          "Tell leadership which workloads are covered, when the last meaningful restore test occurred and which exceptions remain. That record shows what the firm has demonstrated through recovery testing. Answer client or insurer questions to the same scope: unsupported workloads and externally owned files can make an assertion that all Google data is backed up difficult to support."
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
    "intro": "A Gmail filter does not decide who may share a client file or which connected application can read it. Google Workspace security includes those permissions, administrator access and recovery as well as email protection. Review which duties your existing IT provider can maintain, then compare the defined protection or program work a security provider would add.",
    "lead": [
      "Start by identifying your Workspace edition and current settings. Features available in one edition or configuration should not be assumed to exist in another."
    ],
    "takeaway": "Review your Workspace edition, administrator access and sharing controls. Confirm supported protection and the administration retained by IT.",
    "sections": [
      {
        "h": "Review the Google-specific controls",
        "ps": [
          {
            "text": "Use the Google Workspace security checklist to review two-step verification, administrator safeguards, Gmail protections and file sharing. The small-business guidance is a starting point; a small firm with more demanding requirements may need Google's larger-business guidance as well.",
            "links": [
              {
                "phrase": "Google Workspace security checklist",
                "to": "https://knowledge.workspace.google.com/admin/security/security-checklist-for-small-businesses-1-100-users?hl=en"
              }
            ]
          },
          "Have your IT owner review who has administrator access, how authentication is enforced and how account recovery works. Check who can share client files outside the firm, whether guests still need their access and which applications have permission to use Workspace data.",
          "If a proposal includes contextual access policies, data-loss prevention or expanded audit capabilities, ask for the exact edition and license requirements. Confirm the proposed feature in your environment before telling a customer that you have it. Device administration is a separate responsibility from detecting threats on supported workstations."
        ]
      },
      {
        "h": "Compare effort and authority",
        "ps": [
          "DIY can fit a firm whose IT team maintains the tenant and has time to review security events and evidence. Budget for that work, including roster changes, permissions and policy exceptions.",
          "A managed provider should identify supported Workspace capabilities and the response actions it is authorized to perform. Ask who maintains tenant settings, who investigates a suspicious account and who handles recovery or an unavailable device. Do not assume a service labeled Workspace security includes all administration or all Google products.",
          "Consider a hypothetical 55-person New Jersey consulting firm reviewing client sharing. IT checks the Drive permissions, the business manager approves the intended recipients and the security owner records exceptions. Each has a different part of the decision; the technical configuration alone cannot establish compliance."
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
          "Assign the work before comparing prices. Administration, approval of business access, monitoring, investigation, response and evidence upkeep all need owners. Existing IT may handle some duties while a managed security provider takes a defined subset. A new tool does not assign the remaining work.",
          "For example, IT creates accounts, manages groups, changes settings and supports users. A security investigator reviews an account event and coordinates authorized containment. The business owner decides whether an employee or collaborator should have access to client information. A technical log can inform that decision without supplying the business approval.",
          "Give recurring events a first contact and next action: a suspicious sign-in, public file, departing employee or failed backup. Ask bidders which events they handle, which they coordinate and which stay with IT. Staff can then use the written handoff when an event occurs."
        ]
      },
      {
        "h": "Examine privileged access first",
        "ps": [
          "List administrative roles and the accounts assigned to them. Confirm why each person needs the role and whether the account remains in use. Where the approved operating model supports it, separate privileged administration from ordinary work. Include authentication and recovery in the review so the firm can retain access when the usual administrator is unavailable.",
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
          "Client work sometimes requires external sharing. The business owner should approve that sharing and give staff a usable exchange method if the firm requires restrictions. Without an approved way to finish the task, a restrictive rule can push client work into undocumented exceptions.",
          "Set an owner for reviewing guest access when the engagement closes or changes. Test what happens when an external person changes roles or an internal employee leaves. Confirm which permissions the administrator can revoke and which information has already been downloaded or otherwise copied. Access removal limits future access; it does not retrieve every copy previously obtained."
        ]
      },
      {
        "h": "Inventory connected applications",
        "ps": [
          "Workspace information may be accessible through applications that users or administrators have connected. Ask IT to inventory the permitted integrations and the data they can access. Identify the business owner, approved purpose and current need for each. An application name that sounds familiar is not enough to justify broad access.",
          "Define how each integration is approved, changed and removed, including shared service identities or tokens where present. Test whether removing an employee also ends the integration's access or whether IT needs to take a separate action. Use the result from your setup to update the departure procedure.",
          "An AI tool connected to mail or documents needs the same business review, with additional attention to the proposed use and data handling. Give employees a route to request a useful tool and supply an approved alternative when possible. Prohibiting an application without addressing the underlying task leaves the reason for its use unresolved."
        ]
      },
      {
        "h": "Compare DIY and managed operation fairly",
        "ps": [
          "Include internal labor in the DIY estimate and retained IT duties in the managed estimate. Someone still needs time to investigate events, maintain settings and prepare evidence. Record those assumptions so you can compare the arrangements without inventing a market rate or guaranteed saving.",
          "Choose the arrangement based on the duties that need an owner. Capable internal IT may need specialist detection and escalation; work involving several vendors may need a clearer program owner. Even where tools overlap, someone must have authority to approve access and authorize a response."
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
          "Use the exercise to locate approvals. A provider may detect a suspicious event but lack authority to suspend the account. IT may be able to change permissions but need the business owner to approve the collaborator's removal. Resolve those handoffs before staff need them during an incident.",
          "For continuous monitoring claims, ask what data is monitored, what hours the investigating service operates and what happens when no customer contact answers. Do not interpret a service name as proof that every Workspace event is collected or that every response is automatic. Coverage and authority belong in the service description."
        ]
      },
      {
        "h": "Give leadership a short, useful report",
        "ps": [
          "Summarize privileged access, significant sharing exceptions, unresolved application approvals and the status of important recovery tests. State what changed, what remains open and who owns the next action. Include dates and supporting records where available. A long dashboard without an assigned decision can obscure the work that matters.",
          "Revisit the responsibility map when licensing, providers or client requirements change. A feature newly available in your edition still needs a configuration decision and an owner. Keep the managed arrangement tied to the work it must complete and the people accountable for it."
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
    "intro": "Before a medical practice emails electronic protected health information, or ePHI, it needs to know who should receive it and which safeguards suit the exchange. The procedure also needs to cover a message sent to the wrong person. Choosing the email platform helps with part of that work; the recipient, purpose and response decisions still belong in the practice's approved workflow.",
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
          "The decision depends on the practice's risk assessment and circumstances. Calling encryption optional leaves out those conditions; treating any alternative as sufficient does too. A familiar app is suitable only when the documented assessment supports its use for that exchange.",
          "Have the responsible security owner and adviser record the chosen method and reasoning. IT confirms its technical behavior. The record should explain the population, information and exchange being assessed. Avoid a general statement that all practice email is compliant without identifying the configuration and use it describes."
        ]
      },
      {
        "h": "Map the exchange before selecting protection",
        "ps": [
          "List the common exchanges: messages to patients, referrals, billing, internal coordination and transfers to service providers. Identify the sender, recipient, information, purpose and authoritative record for each. A patient access request and an internal staff message can need different procedures.",
          "Follow the attachment through the exchange. A scanned document may sit on a workstation, remain in a sent mailbox and be saved again by the recipient. Protecting transmission covers one part of that path. The practice still needs to address access and storage for the copies that remain.",
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
          "Inbound phishing protection checks for malicious mail. Protected outbound delivery addresses how sensitive information reaches a recipient. MFA controls account access, while recipient verification checks whom staff are sending to. These layers support different steps in the exchange and need to be assessed together.",
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
          "If the workflow relies on restrictions or withdrawing access, test what the selected method supports and where its limits lie. Supported withdrawal cannot retrieve information a recipient has already read or copied. Account for that limit when approving recipients and deciding how they may use the information."
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
          "Give staff short instructions for recognizing the request, recording the patient's decision and using the approved route. Name the person who reviews unusual requests or an access-rights dispute. Front-desk staff then have a supported process instead of having to interpret the dispute themselves."
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
          "Use harmless examples from the practice's work to test whether employees pause and seek help when a request conflicts with the procedure. Review the action they took and any instruction they could not follow. Training can make that action repeatable without guaranteeing that every mistake will be avoided."
        ]
      },
      {
        "h": "Respond to a misdirected message promptly",
        "ps": [
          "Tell staff whom to contact and what information to preserve. Record the intended recipient, actual recipient, message time, information involved and any supported containment action. Use an approved reporting route instead of forwarding the sensitive content to a broad group for opinions.",
          "The responsible team should assess the evidence and applicable notification rules with appropriate professional advice. Accidental delivery is not automatically harmless because access was withdrawn, nor is every misdirected message automatically a reportable breach. The determination depends on the facts of the event.",
          "For a suspected compromised mailbox, involve authorized IT and security teams. They may need to examine account access and relevant settings while the practice manages communications through trusted channels. Containment, evidence and patient-facing decisions require coordinated owners."
        ]
      },
      {
        "h": "Keep evidence that matches the chosen workflow",
        "ps": [
          "Retain the approved procedure, configuration reference, pilot result and staff instructions in the practice's controlled records. Identify the reviewer and date. If the procedure permits several exchanges, state the purpose and population for each rather than combining them under one broad claim.",
          "Review exceptions separately. A patient-request record, an unavailable recipient and a technical failure are different situations with different decisions. Give each a responsible owner and a justified decision about how to handle it. An exception should not silently become the default method for later messages.",
          "When a customer or partner asks about email safeguards, identify the approved workflow and its evidence. The business email platform alone does not explain recipient checks, protection or incident handling. Include what the practice approved and tested so the answer has a defined scope."
        ]
      },
      {
        "h": "Maintain the decision as the practice changes",
        "ps": [
          "Revisit the decision when the practice changes mail platforms, protection policies, providers, licensing or common recipient groups. Preserve the earlier record and explain what changed. A test from before a material configuration change may need to be repeated before it can support the current workflow.",
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
    "takeaway": "Map the actual email exchange, document the safeguard decision and test it with the recipient. Keep provider arrangements, patient-request procedures and misdirected-message handling consistent with that workflow.",
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
    "intro": "Patient information can sit in email, billing, imaging, backups, phones and vendor accounts as well as the EHR. If a device is lost or an account compromised, the practice needs to know which information was accessible. Follow that information through the actual systems and workflows when preparing the HIPAA risk analysis.",
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
          "Use the tool to organize evidence that explains the practice's environment. For each system, record the information involved, who can access it and where it is used. Then describe the threats and vulnerabilities, existing safeguards, likelihood and impact, and the remediation decision."
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
            "text": "A HIPAA Security Rule gap assessment can be separately scoped in writing, with documented findings and a prioritized roadmap. Helm Command can coordinate readiness and remediation planning within its agreed program scope. Helm does not certify that a practice is HIPAA compliant.",
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
          "Follow one representative workflow from beginning to end. A referral, for example, can pass through a fax service, mailbox, downloaded file, EHR and billing process. Identify the people and providers at each step, including those outside the system the practice considers most important. They may handle the same patient information.",
          "Ask staff what they do when the approved route is unavailable. Their workaround may create a temporary copy or send information to a different service. Use that account to find the gap and provide an approved alternative, so the written procedure reflects how the work happens.",
          "Include access without permanent local storage. A device used to view patient information can still be lost, shared or accessed by an unauthorized person. Record the actual access arrangement, authentication and relevant session behavior. Have IT verify the technical facts supporting the review."
        ]
      },
      {
        "h": "Describe threats and vulnerabilities separately",
        "ps": [
          "A threat describes a potential cause of harm; a vulnerability describes a weakness that could make harm possible. For example, theft of a laptop is a threat scenario, while an inadequate access or data-protection arrangement may be a relevant weakness. Keep those ideas separate enough to identify an appropriate safeguard.",
          "Evaluate confidentiality, integrity and availability. A practice can lose access to a critical application without confirmed disclosure of patient information. Incorrect or unavailable records can affect the work needed to provide care. Include those consequences alongside the risk of stolen data.",
          "Distinguish an unverified setting from a confirmed weakness. If nobody has checked a device setting, assign a fact-finding task rather than crediting the control because the platform supports it. The lack of evidence also does not, by itself, establish that the setting is wrong. Record what is known and what still needs checking."
        ]
      },
      {
        "h": "Use a consistent decision record",
        "ps": [
          "Choose a method appropriate to the practice and apply it consistently enough to compare findings. Record the reasoning as well as any numerical rating; two scenarios with the same score may have important differences. The format below is illustrative, not a required scoring method.",
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
          "Ask which tasks the vendor performs and which remain with the practice or IT. Assign user creation, privilege reviews, removal of departed staff and urgent incident handling explicitly. A general statement that the provider is secure gives the practice no way to tell who owns those duties.",
          "When the service changes, review the information path and access arrangements before the change is complete. Keep the incident contact and data-handling responsibilities current. Preserve restricted agreements and evidence in their approved systems, with controlled references in the analysis."
        ]
      },
      {
        "h": "Move findings into risk management",
        "ps": [
          "The analysis identifies and evaluates concerns; risk management records and tracks decisions about them. For a technical gap, name the authorized IT owner and expected completion evidence. For a workflow gap, name the business decision-maker. Some findings need both.",
          "Record temporary safeguards and review dates when work cannot finish immediately. Have the appropriate adviser assess any related obligation. An internal acceptance of a risk does not automatically satisfy an external requirement or make an unsupported statement accurate.",
          "Before closing a finding, check evidence of the intended result. A recovery action needs evidence that recovery is usable; an access action needs evidence of the approved permissions or enforcement. A purchase order or completed ticket can support the record without establishing that either result was achieved."
        ]
      },
      {
        "h": "Keep clinical and business continuity connected",
        "ps": [
          "Identify the approved downtime procedure for an unavailable EHR, messaging system or other important service, and name who can invoke it. Keep the instructions and contacts accessible during that outage. If the only copy of the plan sits in the unavailable system, record that dependency and address it.",
          "Use harmless records in a tabletop exercise to follow the handoff from reporting through assessment, provider coordination and approval of an operational workaround. Include the people responsible for patient-facing work. They can show whether the procedure supports the way the practice uses the affected service.",
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
          "Update the analysis as services, locations, device classes and remote workflows change, and after incidents or relevant test failures. A new control may reduce an exposure while adding a dependency. Record the implemented state so leadership can see what remains to be decided."
        ]
      }
    ],
    "takeaway": "Find every place electronic patient information is stored or accessible. Record safeguards and unresolved risks, then assign corrective actions with dates. Update the analysis after changes to systems, vendors, locations, devices or workflows.",
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
    "intro": "Identity and access management, or IAM, controls who can enter your systems and what they can do there. The review needs to include outside advisers, application integrations and administrators alongside employees. An account can remain technically valid after the work requiring it changes, so the firm must approve and maintain those permissions as it grows.",
    "lead": [
      {
        "text": "Microsoft distinguishes authentication, which verifies identity, from authorization, which grants access. A firm needs both: multifactor authentication helps verify identity, while a permission review addresses access. Microsoft IAM concepts.",
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
          "Begin with systems that hold client information or authorize payments. IT can provide the accounts, administrator roles, guests and connected applications; the business manager confirms which access the work requires. With those records and business approval, reviewers can identify permissions that are technically valid but no longer needed.",
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
          "Describe the work each role needs to perform. Billing staff may need invoice records without every client document, and a project lead may need one engagement workspace without permanent access to all matters. Managers approve that distinction. IT explains how to apply it through the application’s groups and permissions.",
          "Give reviewers specific exceptions to resolve: privileged roles, former staff, ownerless accounts and permissions that differ from the approved role. Retain the dated export and record each decision separately. Simply opening or signing the export does not show that those exceptions were addressed.",
          "Use account identifiers and system records where necessary, but limit who receives the detailed export. The working record may expose sensitive organizational information. Leadership can review unresolved decisions without receiving every account and permission detail in an ordinary meeting attachment."
        ]
      },
      {
        "h": "Follow a role change through all affected systems",
        "ps": [
          "An employee moving teams needs an access decision even when their account stays active. HR or the manager should identify the effective date and new responsibilities. The application owners determine which existing permissions should remain, which should end and which new access should begin.",
          "IT implements the approved role change across the affected systems. Some applications may inherit a central group change; others need separate work. Check the integration in use, because single sign-on alone does not establish that permissions follow the employee’s role. Record any late change and its temporary control, if one is in place.",
          "Verify access in the application where possible and link the ticket to the change made. If the manager approves a temporary overlap for handover, record why it is needed and when it expires. Assign the follow-up now so someone removes or reviews the permission when handover ends.",
          "For departures, include sessions, credentials, devices and applications outside the central directory. Follow the dedicated offboarding procedure with IT because access removal has platform-specific limits. Do not treat a disabled primary account as a universal claim about every independent application or copied document."
        ]
      },
      {
        "h": "Treat administrator and application access separately",
        "ps": [
          "An administrator can make changes that ordinary users cannot. Identify which tasks require that power and which accounts possess it. Ask IT how routine work is separated from privileged work, how recovery is handled and what records support review of important changes. Confirm platform support before buying a privileged-access product.",
          "Agree when emergency access may be used, who authorizes it and how its use is reviewed. Keep recovery material in the approved location and check that the arrangement works. An unchecked recovery account can fail when needed, while an exception left open can weaken the normal access policy.",
          "Review integrations as well as employee accounts. A connected application may read files, send mail or use permissions granted by a user or administrator. Establish who approved it, what the business needs it for and which data it can reach. Removing a user from a group may leave those application permissions intact.",
          "For non-human identities, name a business and technical owner. Explain how credentials or permissions are reviewed and what happens if the integration is replaced. Confirm whether these identities are included in the purchased protection service. Coverage of employee sign-ins does not establish coverage of every application identity."
        ]
      },
      {
        "h": "Prepare for a protective action that interrupts work",
        "ps": [
          "Identity protection can require a prompt decision about suspicious access. Before an incident, agree on who can restrict an account, how the employee will be contacted and who restores access. The communication route should still work if email or the main account is unavailable.",
          "A restriction can interrupt payroll or a partner’s preparation for a hearing. Agree in advance how the response owner reaches leadership and arranges an approved alternative while the event is assessed. That business handoff helps the team act promptly without leaving an account active solely because its work is urgent.",
          "Separate containment from recovery. Restricting an account may reduce ongoing access, but it does not determine what happened, repair every affected application or complete any required notification. Existing IT handles assigned administrative work; specialist investigation and legal decisions need explicit owners and scope.",
          "Use a fictional account event in the vendor evaluation. Ask the provider to explain the evidence available, permitted action, escalation record and handoff. A clear answer is more useful than a promise to stop all account takeover. The demonstration should make unsupported platforms and authority limits visible."
        ]
      },
      {
        "h": "Use the service decision to assign remaining work",
        "ps": [
          "Core may suit a firm that already has managers approving access, IT maintaining account lifecycles and a business owner tracking exceptions. Confirm the supported protection population and monthly reporting before onboarding. Keep the work outside that stack in the firm's own operating plan.",
          "Command may suit a firm whose access problems recur because priorities, evidence and follow-up have no consistent owner. Program coordination can maintain the decision record and bring unresolved issues to leadership. It still depends on managers making access decisions and IT implementing the changes it owns.",
          "Bring redacted examples to the fit meeting: an access change, an exception and a question the firm cannot answer. Use them to establish responsibility for approval, administration, protective actions, evidence and recovery. The resulting map should work whichever provider or tier the firm chooses."
        ]
      },
      {
        "h": "Review access exceptions before they become defaults",
        "ps": [
          "Give a temporary permission an owner, purpose and review date. Ask the manager to confirm whether the original need still exists. If it does, approve the continued access explicitly; if it does not, assign removal to IT and verify the relevant system.",
          "Check how the permission is granted before verifying its removal. Access may come through a group or shared workspace rather than a direct user setting. Review the resulting effective access in the relevant application, not just the setting that IT changed."
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
    "intro": "When someone notices a suspicious transfer or encrypted files, they need to know whom to contact. Decisions about wiping a device, notifying customers or negotiating with an attacker need assigned authority. Write those responsibilities into the incident response plan before people have to act under pressure.",
    "sections": [
      {
        "h": "Prepare the contact list before you need it",
        "ps": [
          "Name an incident coordinator and a backup, then record the contacts they will need: existing IT, security response, the insurer or broker reporting route, an appropriate legal adviser and the bank's fraud team. Include service hours and an escalation route for an unanswered call.",
          "Keep an approved contact list somewhere the team can reach without company email or the affected device. Verify its numbers through established sources and include a way to reach each person outside the normal system. Otherwise, the list may become inaccessible during the disruption it is meant to help resolve.",
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
          "Let employees report a concern while the facts are still uncertain. The coordinator can then triage the event and separate confirmed observations from suspicions. Requiring proof before reporting puts an investigation task on the employee and can delay that handoff.",
          "Record the initial report and create a timeline. This chronology helps responders work out who did what and when, especially when several people are making calls or changing access. Use an approved incident record with appropriate access restrictions."
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
            "text": "Coordinate suspected ransomware containment with the authorized technical responder. CISA advises isolating affected systems. If disconnection is impossible, powering down may be necessary, although it affects volatile evidence. Follow the CISA StopRansomware guide and your responder's instructions for the actual situation.",
            "links": [
              {
                "phrase": "CISA StopRansomware guide",
                "to": "https://www.cisa.gov/stopransomware/ransomware-guide"
              }
            ]
          },
          "An account compromise may require access revocation, investigation of rules and permissions, and review of affected messages or files. The authorized administrator should use the platform-specific procedure. Changing a password does not by itself establish that every application session or other access grant is gone.",
          "Assign these workstreams so they can proceed in parallel. While the insurer is notified through the required route, others may need to contain active harm or contact the bank. The contact list’s order should not delay an urgent action suited to the event."
        ]
      },
      {
        "h": "Preserve evidence without improvising forensics",
        "ps": [
          "Keep the original suspicious message, transaction information and the reported timeline. Record technical actions taken, by whom and at what time. The responder should direct collection of logs, device evidence and other material appropriate to the incident.",
          "Have the response team direct decisions about wiping, reimaging or restoring an affected system. Those actions can remove information needed to understand the incident. Responders must weigh that evidence against active harm and decide how to contain the incident while protecting useful evidence and business safety.",
          "Keep evidence in an approved location with controlled access. Avoid uploading live incident details, customer records or credentials to an unapproved collaboration tool. If the usual system is compromised, use the alternate arrangement established in the plan.",
          "Ask the responder what evidence the organization should retain and who is authorized to receive it. Counsel can advise on legal considerations and reporting duties. Technical staff should not make unsupported promises about privilege, confidentiality or notification outcomes."
        ]
      },
      {
        "h": "Assign decision authority",
        "ps": [
          "Identify who can authorize system isolation, engage a vendor, approve response expenditure and accept business downtime. Name backups for those people. Responders need to know how to reach someone authorized to approve the action, even when the technical next step is clear.",
          "Separate technical findings from business decisions. The response team may establish which systems are affected and which recovery options are available. Leadership decides priorities with the relevant technical, legal and insurance advice. Keep the rationale in the incident record.",
          "Requests involving ransom, negotiation or other payments need specialist review and appropriate authority. An employee should not respond independently to an attacker’s demand. The plan should direct those requests to the designated leadership and advisers without promising that any payment or recovery route is available or acceptable.",
          "Make approvals possible outside ordinary hours. Record how responders reach a backup decision-maker and which bounded actions they can take under existing authorization. If the only contact details are in an inaccessible mailbox, an otherwise ready responder may be left waiting for a decision."
        ]
      },
      {
        "h": "Keep communications factual and controlled",
        "ps": [
          "Use the alternate communication route if the normal channel may be compromised. Assume that an attacker with access to a mailbox could read messages sent through it until the responders establish otherwise. Confirm participants and access before discussing sensitive details.",
          "Assign one person to coordinate staff updates. Explain what employees should do, which systems are unavailable and where to report new observations. Avoid speculative statements about the cause, scope or safety of information before the investigation supports them.",
          "Customer, regulator and contractual notices require a separate review of applicable duties and known facts. Do not issue a blanket statement that no data was accessed merely because encryption was the first visible symptom. The investigation may need to evaluate access, copying and other activity.",
          "Record communications and who approved them. As the investigation develops, the organization may need to update earlier statements. This record helps it explain what was known at each point and avoid committing to a conclusion that later evidence contradicts."
        ]
      },
      {
        "h": "Recover a business process, not just a file",
        "ps": [
          "Before an incident, identify the dependencies of each essential business process. Staff may have the restored document and still be unable to work because they cannot sign in or the application is unavailable. Recovery also needs to address the entry point used by the attacker before that process returns to use.",
          "Agree the recovery sequence with responders and system owners. Validate the restored information, access and application behavior, and complete the required technical checks before returning the process to normal use. Restoring every backup immediately into the affected environment may bypass those checks and disturb evidence.",
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
          "Use the exercise record to repair missing contacts, unclear authority and unsupported assumptions. Assign each correction and update the plan; an attendance record alone will not resolve those gaps. Helm Command includes an annual tabletop within its agreed security-program scope. Document response and recovery responsibilities with existing IT and other responders as part of that preparation.",
          "After a real incident, conduct an appropriate review of lessons learned with the people who owned the response. Compare the plan with the actions actually taken, identify delays and assign changes. Preserve relevant incident records under the approved retention process. Recheck contact details and responsibilities after a provider change, before another emergency."
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
      "text": "Legitimate access can be used for an unauthorized purpose, such as sharing confidential files, changing records or bypassing an approval. CISA distinguishes intentional actions from malicious intent: someone acting deliberately is not necessarily trying to harm the firm. That distinction should guide how unusual activity is reviewed. CISA Insider Threat Mitigation Guide.",
      "links": [
        {
          "phrase": "CISA Insider Threat Mitigation Guide",
          "to": "https://www.cisa.gov/sites/default/files/publications/Insider%20Threat%20Mitigation%20Guide_Final_508.pdf"
        }
      ]
    },
    "lead": [
      "Start with what the account could access and what the records show happened. An unusual download or failed sign-in needs that context before the firm draws a conclusion about the employee's intentions."
    ],
    "takeaway": "Limit access, document sensitive approvals and review events through an authorized process. Unusual activity alone does not prove malicious intent.",
    "sections": [
      {
        "h": "Limit what an account can do",
        "ps": [
          "Business managers approve access according to each person's work; existing IT implements it, limits administrative privileges and changes permissions when roles change. Include guests and applications so the review covers access beyond the employee list.",
          {
            "text": "Payment changes and sensitive exports need a documented approval route. Where the business can support it, separate the person requesting a change from the person approving it. Use the existing offboarding checklist to coordinate HR, managers and IT through the same departure workflow.",
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
          "When an event raises concern, the authorized reviewer should establish the account, action, system and business context. Preserve the relevant records with their source and time, and limit circulation to people who need them. Base the review on those facts rather than employee suspicion scores, psychological profiles or informal accusations.",
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
          "The business owner approves who needs access and for what purpose; IT verifies the permissions and implements changes. A security reviewer can identify a gap, but the business owner still needs to decide who belongs on a client matter. Make that handoff explicit so a technical team is not left to infer the relationship.",
          "Record normal changes in responsibility. A person moving to a new role may no longer need old permissions even while remaining employed. Review inherited groups, guests and independent applications. An ordinary role-change procedure reduces unnecessary access without suggesting misconduct."
        ]
      },
      {
        "h": "Make high-consequence actions reviewable",
        "ps": [
          "For a sensitive export or financial change, identify the requester, approver and operator. Where appropriate, separate those duties and retain the record connecting the approval to the actual action. A request approved for one purpose should not silently authorize a broader export or a different beneficiary.",
          "Agree on an exception route before a legitimate deadline conflicts with the ordinary procedure. Name the owner who can authorize the exception and specify the evidence required. A junior employee should not have to invent a control under pressure because a senior person gave an informal instruction.",
          "Check integrations that can perform the same action. A workflow or service identity may have access unavailable to ordinary users. Review its owner, approved purpose and removal process. An employee access review that ignores automation can miss part of the authority over the information."
        ]
      },
      {
        "h": "Use records proportionately",
        "ps": [
          "Obtain advice about monitoring, employment, privacy and notice requirements before introducing a collection process. The lawful and proportionate arrangement depends on the circumstances. Do not turn a general security recommendation into permission to monitor every employee action or collect information unrelated to a defined purpose.",
          "Restrict the records to the authorized response team and define who may view, preserve and share them. Wider discussion can harm the employee and compromise the investigation. Keep fact-finding in its controlled record, rather than letting it become office speculation."
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
          "A large download could be an approved project, migration or backup task. Establish the system, account, time and information, then compare the event with business approvals and obtain context through the authorized route. The volume alone cannot determine intent.",
          "A deliberate action is not automatically proof of malicious intent. An employee may misunderstand a rule or choose a shortcut that creates harm. The response should still address unauthorized access or handling, while the appropriate people assess intent and employment consequences. Technical logs alone may not settle that distinction.",
          "Describe the observed action, evidence and missing facts without personality profiles or unsupported suspicion scores. For example, an export for which no approval has been found is a specific fact to investigate. The review should establish the explanation before asserting why the person acted."
        ]
      },
      {
        "h": "Preserve the facts before routine cleanup",
        "ps": [
          "Before routine cleanup of an event that needs investigation, obtain authorized preservation instructions. Deleting accounts, resetting systems or clearing records can alter evidence. The responsible responder and advisers should decide what to retain and how.",
          "Record source, collection time, reviewer and the action taken. Keep original information where the approved process requires it, with controlled access. Do not copy live findings, employee information or client data into general operating documents simply to make them easier to find.",
          "If data needs protection before the facts are settled, record the access restriction's purpose and authority. Keep that protective decision separate from any misconduct finding while the authorized review continues."
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
          "Ask counsel or the records owner for preservation and disposition instructions before removing former-worker information. Account administrators need that decision to finish the departure correctly; apparent completion is not a reason to delete records still required."
        ]
      },
      {
        "h": "Test the process without targeting a person",
        "ps": [
          "Use a hypothetical scenario involving an unexpected client-file export from an approved account. Ask the team to show the authorization record, relevant logs, reviewer and protective decision route. Keep the exercise materials harmless and the scope agreed in advance.",
          "Include IT, the business owner and the appropriate response roles. A security service may supply an event while HR or counsel handles another part of the decision. Test whether information reaches those roles through the approved channel, with access limited to the people who need it.",
          "After the exercise, assign corrections for missing evidence and unclear authority. That might mean a better approval record, current access inventory or known preservation contact. Repeat the affected step to check the correction. The result concerns the procedure, not the firm's ability to infer every insider's intent."
        ]
      },
      {
        "h": "Report the program gap to leadership",
        "ps": [
          "Leadership needs to know about unassigned approvals, excessive access and unresolved exceptions. Provide the business consequence and the decision required, with restricted individual details shared only when authorized and necessary. A general program report can describe the gap without circulating investigation material.",
          "Review new export features and integrations along with staff changes. They may expand an account's authority without changing headcount, so update the responsibility map and test the approvals. Maintain access controls and a lawful evidence-review process while acknowledging that they cannot detect every intentional act."
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
    "intro": "An invoice may show the correct job, amount and contact name while directing payment to the wrong account. A banking change may even arrive in a familiar email thread. Verify the destination independently; accurate details about the work do not establish who owns the account.",
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
          "The complaint figures give you a reason to review payment verification, but they cannot estimate your firm's exposure. Examine the records you have: banking changes, bypassed checks, payment routes that can be recalled and exception reviews. Those records show where your own process needs attention."
        ]
      },
      {
        "h": "The request is the first red flag",
        "ps": [
          "Any change to an existing vendor’s bank account should trigger verification, even if the message has no spelling errors or suspicious attachment. A change may be legitimate. It still alters where your money will go and should not be approved only because it arrived from an apparently familiar sender.",
          "An unexpected contact, different reply-to address or slightly altered domain can justify investigation. Pressure to meet a deadline or keep the payment confidential can do the same. Use these observations to prompt checks; they are not indicators known to appear in a fixed or ranked order.",
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
          "Verify outside the thread. Replying to the same email relies on the channel carrying the disputed instruction, while calling a number newly supplied in that message relies on another detail from the same source. Neither provides the independence your payment check needs.",
          "Your verification route should come from records already held by the business or a separately validated vendor-onboarding process. If the existing contact information is outdated, resolve that gap through an approved procedure. Do not substitute the new email’s phone number simply to clear the payment queue."
        ]
      },
      {
        "h": "Verify the bank change separately from the invoice",
        "ps": [
          "Check both the payable and the destination. Purchase orders, delivery records and contract terms help establish whether the business owes the billed amount. Confirming a new bank account requires a separate verification step, even when the underlying invoice is correct.",
          "Call an established vendor contact through a known number. Explain that your company received a change request and ask the contact to confirm the intended change through your approved process. Avoid volunteering every new detail first; ask the contact to describe the request so the conversation supplies independent information.",
          "Record who was reached, which established number was used, the date, the result and the reviewer. Keep the evidence in the normal finance system with suitable access restrictions. Do not scatter banking details into broad chat channels or an unprotected shared spreadsheet.",
          "A callback is one check in the process. Contact records can be wrong, the person answering can be deceived and a vendor's own process can be compromised. Combine the callback with separate approval, restricted access to vendor records and review of unusual transactions so the process can catch different failures."
        ]
      },
      {
        "h": "Separate record changes from payment approval",
        "ps": [
          "If one person can amend a vendor record and release the payment without review, a convincing request has only one decision point to pass. Establish a second review for banking changes and apply your business’s approval rules to payment release.",
          "Give the second reviewer the verification record and proposed destination. A forwarded statement that someone checked the change is too little to evaluate. Decide which banking amendments always need independent approval, including those below the usual spending threshold.",
          "Review permissions in the payment and accounting systems with their owners. Identify who can add vendors, edit bank details, approve changes and release payments. A written procedure is weaker if the system allows a busy employee to complete all steps with no review or audit trail.",
          "For a small finance team, document how an owner or another authorized person supplies the second check. Account for holidays, sickness and month-end pressure that routinely leave only one person available to handle payments. Define how a payment waits when the required reviewer is unavailable."
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
          "In this example, the amount matches the purchase order and the invoice looks familiar. The underlying payable may be valid, but the new account remains unverified. The reviewer holds the banking change, uses the established supplier contact and records the response before seeking the required second approval.",
          "If the supplier cannot be reached, keep the new destination unverified regardless of the deadline. Escalate to the business owner using the written exception procedure. That person can address the commercial consequence of a delay while keeping the verification requirement in place."
        ]
      },
      {
        "h": "Prepare staff for pressure, including from leadership",
        "ps": [
          "Give employees explicit permission to stop a payment when verification is incomplete. A policy signed by leadership is useful only if leadership follows it during urgent transactions. A request from an owner should not automatically bypass the checks imposed on a vendor.",
          "Practice the payment procedure with a clearly labeled exercise, approved fictional details and no transfer of real money. Ask staff to locate the trusted contact record, reach the second approver and document a held payment. Review where those steps were difficult; spotting a suspicious phrase does not establish that staff can complete the checks.",
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
          "Assign an owner to both the banking response and the technical investigation. A payment recall addresses the transfer; it cannot resolve mailbox compromise. A password reset addresses account access; it cannot recover transferred money. Keep the teams coordinated so both duties continue."
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
          "Review a sample of banking-change records for the trusted contact route and independent approval. Track how many changes received completed verification and which exceptions remain unresolved. A completed checkbox without the supporting record cannot tell the reviewer whether the control was followed.",
          "Ask finance staff which step causes delays. Fix inaccessible contact records, unclear approvers or missing backup coverage. Those operational details often decide whether a sound policy survives a busy payment run."
        ]
      }
    ],
    "takeaway": "Before updating banking records or releasing funds, verify the change through an established contact route and keep the evidence. Separate verification from approval and escalate missing checks. For a suspected fraudulent transfer, contact the bank immediately and follow the incident process.",
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
    "intro": "A contractor's field devices carry job information, supplier messages and sometimes access to payment accounts. Public networks are one concern. Lost phones, shared tablets and sessions left signed in also need attention. Review the connection, the device and the access it provides together.",
    "sections": [
      {
        "h": "Treat the connection and the destination separately",
        "ps": [
          {
            "text": "The FTC explains that widespread encryption has changed public-Wi-Fi risk. HTTPS protects a connection, including a connection to a scam site. That site still receives what you send it. Check the destination and the requested action as well as the network.",
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
          "Microsoft 365 and Google Workspace offer mobile device-management controls, including screen-lock requirements and options to remove work data or wipe a device. The available actions depend on the license, platform, enrollment and management mode. Removing a work account is not the same as wiping the whole device. These tenant controls are not part of Helm Core itself.",
          {
            "text": "Imagine a shared job-site tablet signed into the owner's mailbox. A crew member needs a drawing, but the same session may also expose supplier mail and payment messages. For any contractor, the approved account should limit access to the work. Have IT configure it. Test the handover so the next person does not inherit access they were never meant to have.",
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
            "text": "Email protection remains part of the review. Helm's free scan reports on public domain authentication records. It cannot tell you whether a field tablet has appropriate access or whether its signed-in account is protected; those checks belong with the device and account owners.",
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
          "Before issuing a device, assign someone to check the approved account, screen lock, supported software and reporting or management setup. This check still matters when equipment is handed out during a busy morning. Record any exceptions so field devices remain part of the same security process as office equipment."
        ]
      },
      {
        "h": "Give shared devices a defined access model",
        "ps": [
          "Avoid signing a shared tablet into a senior person's ordinary account. Establish an approved model with IT that supports the work and limits access. Depending on the platform and application, that may involve individual users, a managed shared-device arrangement or another supported configuration. A generic shared account is not appropriate for every application.",
          "Test a handover with harmless records. Check whether the next user can see previous messages, downloads or saved sessions, and whether the application supports the separation the firm intends. Include clearing or transferring the work through the approved records procedure before using the tablet across jobs.",
          "Assign a named owner responsibility for charging, updates and device return. A device that misses maintenance can keep circulating with old software or missing protection. Plan that maintenance around field use and provide an approved fallback for the time the device is unavailable."
        ]
      },
      {
        "h": "Treat captive portals as an unfamiliar request",
        "ps": [
          "A public connection may open a page requesting agreement or other information. Staff should know that the company does not authorize entering business account passwords into an arbitrary network page. If a prompt is unexpected, use the approved connection or ask for help through the known support route.",
          "Provide staff with the approved application and saved address when setting up the device. They can then open it directly instead of searching under deadline pressure or following an unverified message link. Direct access still requires the correct account and appropriate safeguards.",
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
          "Give the crew a reporting contact and an alternate, and explain what to do if the missing phone was their usual way to communicate. The report should identify the device, last known location, time and business use. Keep a trusted contact route available outside the affected account.",
          "Authorized IT should assess supported locking, access restriction and session actions. The business owner identifies important job information and client dependencies. Preserve the timeline and relevant facts before making unsupported statements about disclosure or recovery.",
          "If client information or payment access may be affected, use the incident plan and appropriate advisers. A device found later may still need a review before returning to ordinary use. Record how the case was resolved; finding the hardware alone is not enough to close the report."
        ]
      },
      {
        "h": "Separate job progress from payment changes",
        "ps": [
          "A crew member may confirm that materials arrived or work was completed. That does not automatically authorize a new supplier bank account. Keep the operational confirmation and financial instruction in their assigned workflows.",
          {
            "text": "Route changed banking details to the person maintaining trusted supplier records. Use independent verification and the required approval before release. The vendor-email resource explains the supplier handoff. A familiar job number and accurate invoice amount should not replace that verification and approval.",
            "links": [
              {
                "phrase": "vendor-email resource",
                "to": "/resources/vendor-email-compromise-contractors/"
              }
            ]
          },
          "Plan for a supplier request claiming that an immediate payment change is needed to prevent a delay. Staff need leadership’s support to pause it and reach the authorized decision-maker through an alternate route. They should be able to follow the financial rule without having to resolve the deadline conflict themselves."
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
          "Use harmless data to try a shared-device handover and a lost-device exercise. Observe whether staff reach the right contact, IT can perform the supported action and essential work continues. Those results identify gaps to fix; a general claim about Wi-Fi safety or mobile protection does not test the workflow."
        ]
      },
      {
        "h": "Plan for unavailable connectivity",
        "ps": [
          "Identify which job information must be available when the approved connection fails. A drawing, schedule or safety document may have an authorized offline process, while payment changes still belong with the financial owner. Decide that distinction before a crew loses connectivity.",
          "If approved documents are downloaded for field use, record where they may be stored and how current versions are identified. A local copy can become outdated when the office revises the job record. Give staff a way to confirm the current version and return completed information through the approved route.",
          "Before using a borrowed personal device as a substitute, ask the authorized owner whether it meets the required access arrangement. If it does not, use the defined fallback. Even under pressure to keep a job moving, the business should make an explicit access decision before staff switch to unreviewed equipment.",
          "Test the offline process during a device handover. Have staff show what stays available, where they record new information and how they return it to the authoritative system. Record any manual reconciliation still needed: a usable field copy may not yet be a complete central record."
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
    "intro": "Law-firm laptops travel to court, client meetings and home offices. A lost device may expose email, matter files, billing, trust-accounting access or saved sessions, depending on its safeguards. Include that travel and remote work in the device review instead of limiting security to the office network.",
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
          "Inventory firm-owned Windows and Mac computers, including shared reception machines and seldom-used loaners. For each, record its user, operating system, encryption state and update settings. Also check whether the firm can identify a device whose security software has stopped reporting.",
          "Record which systems each device can reach. If a laptop can open email, document management, billing, trust accounting, and cloud storage, losing it may require immediate session revocation and a review of client information that could have been accessible. A kiosk with no saved credentials creates a different level of exposure."
        ]
      },
      {
        "h": "Apply a baseline that can be checked",
        "ps": [
          "Require a screen lock, full-disk encryption, supported operating systems, automatic security updates, separate administrator access, multi-factor authentication, and a managed security service that can investigate suspicious behavior. Match protection to the supported platform and the firm’s requirements.",
          {
            "text": "Helm Core provides round-the-clock monitoring, human investigation, and containment for covered Windows and Mac devices. This connects an alert with qualified investigation and permitted action. The firm still needs patching, backups, identity controls and a written incident plan alongside that coverage.",
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
          "Before a device goes missing, name the contact and the owners of account blocking, session handling and the review of potentially accessible client information. Define when to consult counsel, the insurer, affected clients or other parties. During the event, preserve facts and timestamps so those advisers can assess exposure instead of relying on guesses.",
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
          "Identify the systems each device uses, including email, document management, billing, trust accounting and client exchange. Record whether information is downloaded locally or viewed through a controlled application. Either way, the device may provide access to that information, but the safeguards and response actions can differ.",
          "Have the matter owner approve the business need for access. IT verifies the technical permission and device state. A person who handles one engagement should not inherit access to every matter solely because the device is firm owned. Review role changes and outside collaborators through the appropriate access process.",
          "Include temporary and loaner equipment in the handover process. A laptop returned after court or travel can still hold files or sessions. Agree cleanup and any required preservation with IT and the records owner, then test the process with harmless matter-like files instead of real client records."
        ]
      },
      {
        "h": "Verify encryption and recovery access",
        "ps": [
          {
            "text": "Microsoft documents BitLocker and Apple documents FileVault for supported device arrangements. Have IT confirm the actual encryption state and recovery-key handling. An available encryption feature does not establish that a particular device is protected.",
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
          "Store recovery information in the approved restricted location and decide who may retrieve it. Record that access and plan how it transfers when providers change. Encryption can otherwise create an availability problem: the firm may have the laptop but nobody authorized to recover access.",
          "Encryption addresses stored information under its operating conditions. It does not by itself prevent an authorized session from viewing data or eliminate every consequence of a lost unlocked device. The incident assessment needs the actual state, access and information involved."
        ]
      },
      {
        "h": "Review supported software and local privileges",
        "ps": [
          "Ask IT to identify unsupported operating systems and important applications. Record who handles updates and how failed installations are found. Even with automatic updates enabled, verify updates that fail or require a restart. Assign an owner to each exception; the setting alone does not prove that an update completed.",
          "Review local administrator access according to the approved operating model. Staff may need specialist software, but the firm should establish a supported installation route instead of distributing unnecessary privileges. Record the reason and owner for an exception.",
          "Pilot protection changes with the firm’s document and practice-management tools. If a conflict requires an exclusion, have the authorized team assess its scope and consequences. Give it an owner for review so an exception made during a deadline does not remain after the problem is gone."
        ]
      },
      {
        "h": "Make remote work a defined arrangement",
        "ps": [
          "Identify approved devices, connection methods and ways to exchange documents. Staff should know where matter files belong and what to do if the intended service is unavailable. An unreviewed personal account should not become the fallback for a failed business workflow.",
          "Give staff practical instructions for screen exposure and physical handling during travel or shared-space work. Match them to the places staff use the devices and include a route to report unexpected situations. One accessory cannot establish confidentiality by itself.",
          "For home or mobile access, ask IT which device and identity controls apply. A workstation agent does not establish management of every phone or tablet. Record the separate mobile arrangement and its supported lost-device actions."
        ]
      },
      {
        "h": "Prepare the first lost-device decisions",
        "ps": [
          "Record the last known location, time, device state and relevant user actions. If some facts are unknown, state them as unknown. Do not automatically declare a disclosure or dismiss the event because the device was encrypted. The applicable assessment needs the facts and professional judgment.",
          "Record the requested remote action and the result IT actually observes. An offline device may not receive a wipe, a separate application may retain a session, and an unenrolled personal device may lack the needed controls. Submitting a command therefore does not always establish that the action completed."
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
          "Turn each exercise gap into an assigned correction. Update an ownerless device record, provide an alternate for an unavailable contact, or ask the responsible adviser to resolve unclear client communications. Then verify the step that failed in the exercise.",
          "Keep exercise records separate from actual incident findings. A hypothetical scenario should not appear in a client response as a real event or as proof that every loss has been tested. State the exercise date, scope and observed result."
        ]
      },
      {
        "h": "Keep coverage claims bounded",
        "ps": [
          "Reconcile the current device inventory with protection and management records. Remove retired entries from the coverage calculation and explain devices that are stale or excluded, with a next action for each. New equipment needs its acceptance check before ordinary use.",
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
          "Record who takes over business continuity and what must be checked before a contained device returns to ordinary use. Containment, matter continuity and hardware repair involve different owners. Staff need an approved route to continue work while those teams resolve the technical issue."
        ]
      }
    ],
    "takeaway": "Inventory work devices, require encryption and screen locks, and monitor the computers in scope. Write the lost-device procedure before it is needed. Give phones and tablets their own coverage decisions.",
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
    "intro": "You can keep your law firm's IT provider while adding security expertise. Compare the work involved: operating protections, reviewing incidents and leading the security program. Assign those responsibilities clearly while the firm retains decisions about client information and its professional duties.",
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
          "An in-house security team can know the firm's systems and priorities directly. It also needs time, specialist capability and coverage for its assigned work. If an administrator handles routine tickets and incident review, ask what happens when both need attention or the administrator is away.",
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
          "Put each proposal against the same account and device list, then include subscriptions, onboarding, IT time, training and excluded specialist response work. A software license and a managed service assign different responsibilities. Comparing their headline prices alone can hide work the firm still has to do.",
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
          "Separate the work by responsibility. A suspicious endpoint alert needs security review; a routine update needs technology administration. Preparing client-review evidence is different again from investigating an active compromise. A person or provider can hold several roles, provided each has enough time, authority and skill for the assigned work.",
          "Ask the firm's responsible lawyer to identify the duties and client commitments relevant to the practice. A client may require safeguards or evidence beyond your standard operating approach. Record what the firm agreed to provide and who checks the requirement before accepting new work. A vendor brochure is not the firm's analysis of those commitments.",
          "Use that list to define what you are buying. Keep unknown applications and unresolved handoffs visible while they are checked. Selecting a staffing model first can leave the firm trying to fit uncovered work into an arrangement that was never scoped for it."
        ]
      },
      {
        "h": "Evaluate the internal option with realistic coverage",
        "ps": [
          "An internal security role can bring context: how the firm handles urgent filings, which systems contain sensitive matters and who can approve disruptive changes. That context helps prioritize work and explain consequences. It still requires access to appropriate tools, training and outside specialist help when the task exceeds the person's role.",
          "Write a role description with recurring responsibilities and an escalation route. Include evidence maintenance and coordination with existing IT if those duties belong to the role. Avoid assigning a complete security program to someone whose available time only covers a few hours of review each month.",
          "Plan for holidays, illness and competing demands. If one person is handling an outage when a suspicious account event arrives, identify who responds to the second issue. Check the actual after-hours arrangement against the firm's needs. Neither an internal job title nor a managed contract establishes that every required task has continuous coverage.",
          "Use the firm's own compensation assumptions and recruitment information to estimate staffing costs. Include benefits, coverage, tools, training and any external support the internal role still needs. No single staffing figure can establish which option is cheaper for every practice."
        ]
      },
      {
        "h": "Evaluate a provider through a fictional incident",
        "ps": [
          "Give each prospective provider the same harmless scenario. An employee reports an unexpected sign-in and a message sent from their account. Ask which covered signals the provider can inspect, what it can restrict and how it contacts the firm. Do not send actual client material as part of a sales exercise.",
          "Ask the provider to explain the next steps: who investigates connected applications and mailbox changes, who preserves the relevant records and who coordinates with the firm's IT administrator, insurer and counsel. Identify which steps are included and which require a separately engaged responder. Check that the explanation matches the service order.",
          "Ask what response actions the provider can take before you sign. It may have authority to isolate a covered workstation or restrict a supported account under defined conditions. Explain those conditions to leadership, including the effect on work and the restoration route. A phrase such as proactive response leaves that authority unclear.",
          "Request a fictional report showing the event, evidence, action, escalation and remaining uncertainty. It should support a useful handoff without exposing unnecessary client content. Confirm who receives reports and how sensitive records are transferred and retained."
        ]
      },
      {
        "h": "Compare a common budget population",
        "ps": [
          "Make a shared worksheet if one proposal is priced by user and another by device. Include staff, eligible workstations, outside advisers, servers, phones and specialist systems. Mark exclusions and name who will protect or administer them. Use the same period, contract term and expected work to compare costs.",
          "Using Core's published rate, a hypothetical 30-covered-user firm would calculate 30 multiplied by $125, or $3,750 per month before any separately scoped work or applicable charges. The example is arithmetic, not a quote or an assertion that the firm qualifies. Fit, platform support and written terms still need review.",
          "Put one-time transition work and retained IT work beside recurring fees. Identify overlapping subscriptions that could be removed only after coverage is confirmed. Do not count a license saving while the old service is still required, and do not assume every hour freed from alert review reduces the existing IT bill.",
          "Compare exit costs and access transfer as well. The firm should be able to recover its own reports and maintain continuity if the arrangement ends. Ask who removes agents, changes routing, transfers administrative rights and records open issues during the transition."
        ]
      },
      {
        "h": "Use a combined model when responsibilities are clear",
        "ps": [
          "A combined arrangement can leave program leadership inside the firm while a managed provider covers defined operations. Another firm may retain IT for administration and add security-program coordination. In either arrangement, the contracts and internal assignments need to make clear who hands work to whom.",
          "Name a firm contact with authority to make decisions and a backup contact who can act during an absence. Keep a record of who handles each responsibility across the security provider, IT owner and business leadership. Resolve ambiguous handoffs before an event, especially account containment, recovery, evidence preparation and client communication.",
          "Review the arrangement after a material change in the practice. A merger, a new office or a client with different requirements can change the covered population. Reconcile account and device records rather than relying on the original onboarding count. Confirm new applications against the scope.",
          "At the first review, check specific work: eligible-device coverage, a reporting route the team has exercised, current contacts and approved handling of exceptions. Later reviews should explain changes and outstanding decisions. These records give partners a way to assess the service beyond counting the tools included."
        ]
      },
      {
        "h": "Check the arrangement against a new matter",
        "ps": [
          "Before accepting a client's security commitment, identify whether the current arrangement can support it. Ask the responsible lawyer and IT owner to review the requested population, evidence and deadline. A contractual promise may require work beyond the managed stack or internal role.",
          "Record any additional work with its cost and the person or provider responsible for implementing it. Confirm it before the firm represents that the requirement is met. This prevents a service-selection decision from becoming an unsupported promise in a later client agreement."
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
    "intro": "An attacker with access to a Microsoft 365 account may read old email, impersonate staff or forward future messages outside the company. Reducing that exposure requires the right licenses and configuration. Have the authorized IT owner review your tenant and its business dependencies before making changes.",
    "sections": [
      {
        "h": "Lock the front door first",
        "ps": [
          "Review MFA on the accounts that can access mail, including owners, administrators, vendors and people with delegated mailbox access. Shared mailboxes should be accessed through each person's authorized account, with direct sign-in to the shared account blocked. That keeps the mailbox workflow tied to the people permitted to use it.",
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
          "Use separate access for privileged administration and everyday mail, and have IT check that the arrangement fits the work. A compromised administrator account can affect more than its own mailbox."
        ]
      },
      {
        "h": "Close what attackers do after they get in",
        "ps": [
          "Use external-sender tagging as a visible indication that a message came from outside the configured company boundary. It gives staff context for review. The label does not establish that the external message is malicious or that an internal one is safe.",
          {
            "text": "Review configured forwarding and relevant mailbox rules with IT on a schedule, as well as after suspected account misuse. Microsoft documents external-forwarding controls; check the actual settings and authorized exceptions against that guidance.",
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
          "With IT, inventory the current tenant, subscriptions, users, administrative roles and significant integrations. Include independently administered business applications that affect the workflow. The licenses show which features may be available; the configuration evidence shows what the firm is using.",
          "Record whether security defaults, Conditional Access or another supported arrangement supplies the relevant protection. Do not assume a per-user MFA status alone describes enforcement. Ask the administrator to explain how the policy applies to the account and access path being reviewed.",
          "Preserve a dated baseline and an approved change plan. Identify the business owner who can authorize interruption and the IT owner who implements the change. Avoid asking a non-technical employee to toggle settings from an article while the firm has unreviewed application dependencies."
        ]
      },
      {
        "h": "Review privileged and provider accounts",
        "ps": [
          "List administrative roles and the accounts holding them. Confirm why each privilege is needed, who owns the account and how it is protected. Review provider access alongside employee access. A supplier account may have substantial authority even if it does not appear on the staff roster.",
          "Establish an approved recovery arrangement for administrative access. The firm needs a way to regain control when the usual administrator is unavailable, with appropriate protection and restricted records. Test the supported process through authorized IT, without exposing emergency credentials in an ordinary document.",
          "A provider handover should include its identities and integrations. Remove the technical access under the approved process and record who verified the revocation. Updating a support-contact list alone leaves those access paths unaddressed."
        ]
      },
      {
        "h": "Plan authentication around dependencies",
        "ps": [
          "Before changing sign-in policies, identify dependencies such as a multifunction device, older client or integration. IT may need to migrate one to a supported alternative first. Follow current guidance and keep any temporary exception visible, with an end date.",
          "Pilot a significant change with representative users doing harmless work. Check sign-in, recovery and business applications, then explain expected prompts and the support route to staff. Otherwise an authentication rollout can resemble the unexpected prompts they have been taught to report.",
          "Do not disable one protection while assuming the replacement automatically applies. Have the administrator verify which policy is in effect and which accounts it covers. After the change, record the evidence that it works, including unresolved exceptions and supported fallback arrangements."
        ]
      },
      {
        "h": "Check mail access and forwarding",
        "ps": [
          "Review who can access shared and delegated mailboxes. Business managers approve the need; IT implements the permissions. Include accounts created for old projects and outside support. Confirm the current owner and purpose rather than carrying access forward indefinitely.",
          "For external forwarding, identify the destination, purpose and approving owner. A blanket allow-list should not be the first response to one delivery problem. Check the supported controls and test the legitimate workflow using harmless messages. Preserve the exception and next review date if it remains necessary.",
          "Investigate an unexpected rule or forwarding destination before treating its removal as the whole fix. It could be an old approved setting, an error or account-incident evidence. Preserve the relevant facts and use the incident process if the evidence warrants it."
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
            "text": "Review recovery for the data the business depends on. Microsoft offers retention, recovery features and a native backup product, each with different purposes and scope. Use the Microsoft 365 backup comparison to decide which recovery tasks the configured arrangement supports.",
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
          "Review important accounts and workflows first, then record what still needs review. If administrators and email are the initial focus, list the remaining applications and assign owners to investigate unknowns and review exceptions. An overall score should not obscure that unfinished work.",
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
          "Assign an owner to each failed step after the restore test. If the operator cannot locate the needed recovery point, investigate whether coverage, configuration, retention, authorization or the requested scenario caused the problem. Record the limitation and who will address it so the firm can act on the result."
        ]
      },
      {
        "h": "Record what the public review cannot see",
        "ps": [
          "Keep public DNS and website findings separate from the internal tenant baseline. Those checks cannot inspect administrative roles, application grants, sharing decisions or restore tests. A public finding may need IT attention, but the internal review still needs its own evidence even when public results are clear.",
          "For leadership, state the assessed tenant areas and remaining scope. Date the evidence and identify next actions. This makes a staged review understandable without implying that the first week's work established complete coverage of the business."
        ]
      }
    ],
    "takeaway": "Have IT review MFA enforcement, legacy-authentication dependencies, privileged accounts and forwarding rules before changing tenant settings. Then check the public sender-authentication records separately. Public configuration does not establish internal protection or verify the honesty of every message.",
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
    "intro": "Buying training makes lessons available. Someone still has to choose what employees should practice, schedule the work and respond to reports of suspicious messages. Compare that ongoing workload with your team's capacity when choosing between DIY training and a managed service.",
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
          "Ask the managed provider which duties it takes on beyond content, simulations and reporting. Enrollment changes, role-specific material and follow-up on recurring mistakes may still need your team. Put the division of work in the service order so the firm can budget for the responsibilities it retains.",
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
          "For bank-detail training, start with the payment procedure. The employee should practice finding the approved contact, checking the change and recording verification before editing the payment record. If there is no contact list, fix it as part of the process; a reminder to be vigilant cannot give staff the missing verification route.",
          "Use fictional suppliers, clients and documents. Set boundaries with the business owner and IT so a simulation does not invite employees to upload confidential files, enter working credentials or contact actual customers. A controlled exercise should create a learning opportunity without introducing an avoidable operational problem.",
          "Make the reporting step usable. Staff should know where to send a suspicious message and what to include. The receiver needs a procedure for sorting training messages from real reports. If a participant encounters a genuine threat during the campaign, pause the exercise for that person and route the report through the incident process.",
          "Discuss which step was confusing and whether the employee could find and follow the procedure. An unclear instruction or missing approval route needs a process change. Assign someone to make that change; a failed exercise alone is not sufficient evidence that the employee was careless."
        ]
      },
      {
        "h": "Assign learning by role without creating a maintenance burden",
        "ps": [
          "Keep a common foundation for all staff, then add material for work with different consequences. Finance needs payment verification. IT needs privileged-account and response procedures. Managers need access approvals and escalation responsibilities. Client-facing teams need approved sharing methods and a way to report a mistake quickly.",
          "Start with a few role groups the firm can maintain. Record who gets the foundation lessons and additional material, then assign someone to update that mapping as roles change. A managed vendor should explain how it reconciles the roster and which changes need the firm's approval. More detailed assignments help only if that maintenance happens.",
          "Include temporary staff and contractors deliberately. Some may use your accounts and handle client records; others may only need a short briefing on a specific process. Determine what access and work they actually have. Do not mark every external person trained because a policy says contractors are included.",
          "Check accessibility and working conditions. A lesson that assumes desktop access may be awkward for staff working from a job site. Allow an approved alternative when someone needs it, and record completion consistently. In technical instructions, name the screen or contact the employee should use, and have IT check that the instructions remain current."
        ]
      },
      {
        "h": "Read training metrics without overstating the result",
        "ps": [
          "A completion percentage needs to show how many people were assigned the lesson and when completion was measured. Suppose a fictional firm assigns a lesson to 40 active employees and 36 finish by the deadline. Completion is 90 percent for that assignment. If five contractors were never assigned, the number does not describe those contractors. Keep exclusions visible so a customer can understand what the record supports.",
          "Keep the scenario, audience and reporting method with the simulation result before comparing campaigns. An easier message can lower the click rate without showing improvement. Check where reports arrived and whether someone handled them; a high reporting rate is useful when the response route works.",
          "Use a small set of measures your team can explain: assigned population, completion by due date, unresolved follow-up, reports reaching the right route and practice of the chosen procedure. Define what each measure means before presenting it to leadership. Avoid collecting individual results that nobody needs to make a decision.",
          "Report what the exercise showed and what the firm changed afterward. Those findings may support better decisions, but they cannot establish a count of real attacks prevented or financial losses avoided. Include any missing evidence so leadership knows what the result can support."
        ]
      },
      {
        "h": "Compare the full maintenance cost",
        "ps": [
          "For DIY, list the subscription cost alongside the time needed for roster updates, assignments, support, follow-up and evidence preparation. Ask the named owner whether that work fits their ordinary workload. Cover absences and decide who approves material when the owner leaves the role.",
          "For a managed service, request a written division of work. The provider might operate the platform while your firm still owns role assignments, policy changes and employee discussions. Check whether custom material is included, how many campaigns are covered and how overdue work is escalated. A sample monthly report should show actions as well as percentages.",
          "Before signing, review access, exports, retention and removal of former staff. The platform may hold names, email addresses and individual results, so ask how the vendor uses those records and what the firm can obtain after the subscription ends. Keep individual scores limited to the people who need them.",
          "Compare the same employee population and service period, including onboarding, recurring charges and separately scoped customization. Saved administration time may free capacity for client work. Count it as a cost reduction only when the firm can show that its spending changes."
        ]
      },
      {
        "h": "Start with one cycle and a review decision",
        "ps": [
          "Before rollout, verify the roster and test the reporting route with IT. Assign one relevant lesson and one harmless practice scenario. Tell participants how to report a concern, who receives the result and where they can get help. The firm should be able to explain the exercise without surprising employees about the use of their data.",
          "After the cycle, review late assignments, confusing instructions and unresolved reports. Assign the improvements and verify completion, then assess whether the internal owner can maintain the next cycle. If that workload exceeds the owner's capacity, use it to evaluate a managed service. A larger lesson library will not relieve the administration work by itself.",
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
    "intro": "Count devices before planning endpoint protection. One employee may use two laptops, a temporary worker may bring a personal device and a shared workstation may have no clear owner. Those differences affect coverage, so employee count alone cannot define the rollout.",
    "lead": [
      "Before choosing a managed service, reconcile the device inventory with your IT provider. Record the operating system, owner, business use and whether the device can run the proposed protection."
    ],
    "takeaway": "Reconcile eligible devices, pilot the protection, test escalation and keep current coverage evidence. Confirm exclusions before rollout.",
    "sections": [
      {
        "h": "Agree on the device population",
        "ps": [
          {
            "text": "Endpoint detection and response, or EDR, helps detect activity on supported devices and gives responders investigation and response capabilities. Product availability differs by operating system, licensing and configuration. Microsoft Defender for Endpoint documentation shows why deployment planning must include platform requirements and a pilot.",
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
          "A hypothetical 50-person New Jersey consulting firm could pilot protection with staff who use different applications and work locations. Use the pilot to discover deployment problems before extending the rollout. A small pilot does not prove protection against every attack.",
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
          "Before reporting coverage, reconcile the installed agents with eligible devices. Sixty agents would not mean 60 covered devices if some belong to retired equipment. An inventory of 70 eligible devices would still have a coverage gap. Count eligible devices currently meeting the acceptance criteria against the agreed eligible population, and report unknowns and exclusions separately."
        ]
      },
      {
        "h": "Make the pilot representative",
        "ps": [
          "Choose devices that reflect the work the firm performs. Include different supported operating systems, remote workers and employees using important specialist applications. A tax practice may need a sample using its preparation software; a law firm may need one using its document system. Use ordinary business tasks and harmless sample files to check compatibility.",
          "Before installation, IT and the security provider should decide how to handle the existing protection. The products may support coexistence, or a planned migration may require removal of one. Have the authorized administrator check vendor guidance, deployment prerequisites and a rollback path. Employees should not uninstall protection themselves.",
          {
            "text": "Microsoft publishes minimum endpoint requirements and platform guidance. Use the documentation for the product being deployed rather than assuming every operating system receives identical capabilities. The provider should identify the functions it will actually use on each eligible platform.",
            "links": [
              {
                "phrase": "minimum endpoint requirements",
                "to": "https://learn.microsoft.com/en-us/defender-endpoint/minimum-requirements"
              }
            ]
          },
          "Ask pilot users about application failures, excessive prompts and performance changes, then have IT investigate the cause. An exception may fix a business problem while affecting future detection, especially if it excludes an entire folder or application. Record its rationale and scope, and confirm both the application and security agent meet acceptance requirements."
        ]
      },
      {
        "h": "Define the response boundary in advance",
        "ps": [
          "Agree in advance which response actions the provider can take without another approval. Device isolation may interrupt an employee’s work while limiting an incident’s spread; leadership needs to understand that tradeoff. Record any special treatment for devices supporting critical work and the escalation route when the usual contact is unavailable.",
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
          "Record the device, expected behavior, observed event, service handling and contact result. If the sample is handled automatically, label that result accurately. Where analyst review is contracted, ask how the exercise demonstrates it or request supporting process evidence; automatic handling alone does not show a human investigation.",
          "Include an unanswered first contact in the planned exercise and test the backup route without creating a false emergency. Confirm the provider has current contact information and the firm knows how to reach the service outside office hours. Resolve any missing authority before extending the rollout."
        ]
      },
      {
        "h": "Expand in controlled groups",
        "ps": [
          "Once the pilot passes, expand in groups IT can support. Record the schedule, users needing assistance and unresolved devices, and coordinate application changes with their owners. Delivering the installer company-wide can still leave a backlog of unhealthy devices; package delivery alone is insufficient evidence of coverage.",
          "At each stage, compare the current inventory with the protection console. Investigate duplicate entries, devices that have not checked in and unexpected exclusions. Require a completed acceptance record for each group. The completion date should reflect the agreed coverage check rather than the date the installer was first pushed.",
          "Prepare staff communication before rollout. Explain what employees may notice, whom to contact and what to do if a device becomes isolated. Avoid overwhelming users with console terminology. They need to know how to keep client work moving through approved support, and how to preserve the situation for investigation when a security event occurs."
        ]
      },
      {
        "h": "Maintain the enrollment and departure process",
        "ps": [
          "Carry the acceptance check into ordinary device provisioning. Assign someone to confirm enrollment before handing over a new eligible device, including replacements, loaners and new acquisitions. That keeps the inventory and protection aligned after the rollout project ends.",
          "For a retired device, coordinate endpoint removal with the approved retirement and records process. Do not remove protection merely to clear a stale dashboard entry while the device remains in use. Confirm its disposition and any data-handling requirements. Retain the needed historical evidence in the approved location rather than relying on an active console entry forever.",
          "Report uncovered eligible devices and aging exceptions to leadership with an owner, next action and review date. A leader can act on an unsupported device that needs replacement; an unexplained score leaves the underlying decision unclear. Retain the reporting date and device population so customer answers reflect that same scope."
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
    "intro": "When an account shows signs of compromise, an identity threat detection and response service can review the available signals and take agreed actions. Creating accounts, changing permissions and offboarding are separate administrative jobs. Establish who handles both kinds of work when comparing a managed provider, so an investigation does not leave a necessary account change unassigned.",
    "lead": [
      "A firm buying the service should ask which identity platforms are supported, what signals are available and what the provider can do when it finds a suspicious event."
    ],
    "takeaway": "Confirm supported identity platforms, available signals and written response authority. Keep administration, recovery and specialist duties assigned.",
    "sections": [
      {
        "h": "Check the signals and their limits",
        "ps": [
          {
            "text": "Microsoft Entra ID Protection is one example of a product that detects identity risks and supports investigation and policy-based actions. Available detections, reporting and policies depend on licensing and configuration. A product's capabilities do not establish what a particular managed provider has deployed or is authorized to operate.",
            "links": [
              {
                "phrase": "Microsoft Entra ID Protection",
                "to": "https://learn.microsoft.com/en-us/entra/id-protection/overview-identity-protection"
              }
            ]
          },
          "Ask which accounts and data sources the service covers. Include the administrators, guests and application identities relevant to the proposed scope. Mark systems outside the supported platform and gaps in logs so the firm can assign the work the provider cannot observe.",
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
          "Ask the provider to map the data it receives: sign-in records, risk signals and application events. Establish how quickly records arrive and which need additional licensing. Record gaps explicitly. One working integration may still leave parts of the account history unavailable.",
          "After onboarding, ask how the provider confirms that intended accounts are included and required records are arriving. A connector can be enabled while collection or coverage is incomplete. Agree who detects that problem and who is notified when it occurs.",
          "Keep technical and business context separate. The provider can review a suspicious event, while the firm may need to confirm whether travel, a new integration or an approved role change explains it. Establish a trusted route for that context that does not rely entirely on a potentially compromised account."
        ]
      },
      {
        "h": "Distinguish detection, investigation and action",
        "ps": [
          "Ask the provider to follow one event through detection, investigation and action. Detection flags unusual or risky activity; investigation assesses the evidence and uncertainty; action applies the controls the service is permitted to use. Establish which steps are automated and where an analyst reviews the event.",
          "Use a fictional account event in the demonstration. Ask what triggered it, what additional records are available and how the provider determines the next step. If the evidence is inconclusive, ask how that uncertainty is recorded and escalated rather than forcing the event into a confirmed-compromise category.",
          "Check what a quoted response time measures. It might refer to acknowledgment, investigation or containment, under specified conditions. A quick acknowledgment leaves the account event unresolved, so the contract should state the commitment for each covered step.",
          "Ask who receives an escalation when the primary contact is unavailable. Leadership should know when it must decide and what authority the provider already has. Keep emergency contacts current and test a harmless notification route before relying on it during an event."
        ]
      },
      {
        "h": "Define containment authority and its limits",
        "ps": [
          "Write the actions the provider may take on supported accounts and the conditions for taking them. Depending on platform and agreement, a service might restrict access, require additional verification or hand the action to IT. Avoid assuming that a product capability is automatically an authorized managed-service action.",
          "Ask how each relevant application handles an account restriction or credential change. Establish what the provider checks, what access may persist and who handles independent applications. A password reset by itself cannot demonstrate that every session and permission has ended.",
          "Plan for work to continue while an account is restricted, since the restriction can interrupt urgent work. Identify who approves an alternative working method and who confirms that access can safely return. Do not weaken a response rule ad hoc because the affected employee is senior or handling an important deadline.",
          "Agree what must happen before access returns. IT may need to change settings or verify credentials, and specialist work may require a separate engagement. The response record should show the completed actions and assign whatever remains unresolved, rather than treating restoration as proof that the concern was addressed."
        ]
      },
      {
        "h": "Evaluate privileged, guest and application identities",
        "ps": [
          "Privileged accounts deserve a separate coverage question because they can make broader changes. Confirm whether their signals are included, how important events are escalated and which recovery procedures exist. Do not assume ordinary-user coverage automatically includes every administrator or emergency account.",
          "A guest may retain shared-workspace access after collaboration ends, even though they never appeared on the employee roster. Name the owner who reviews and removes that permission. Observing some guest activity through a threat service does not complete this access-governance work.",
          "Application identities and integrations need technical owners. They may use permissions or credentials that differ from employee sign-ins. Ask whether the service supports the relevant identity type and signals. Where it does not, record which review and response tasks remain with IT.",
          "Keep these distinctions in questionnaire answers. A supported account-protection service cannot justify a universal claim about all identities unless the population and evidence support it. Describe exclusions rather than treating them as a minor detail hidden in a contract attachment."
        ]
      },
      {
        "h": "Read a sample report as an operating record",
        "ps": [
          "A useful event record identifies the affected account, observed signal, reviewer, time, permitted action and escalation. It distinguishes confirmed facts from unresolved questions. Ask for a fictional example so the firm can assess the record without exposing another customer's information.",
          "Use monthly reports to check coverage and follow-up as well as event counts. Ask for unsupported accounts, collection failures and administrative tasks waiting for IT. Alert volume alone cannot tell the firm whether the intended population remains protected.",
          "Confirm access and retention for detailed records. Identity events can contain personal and organizational information. Limit distribution to people who need it, with summaries for broader leadership review. Agree on secure transfer when another responder or counsel requires relevant records.",
          "Check exit arrangements. Your firm should know how to obtain its permitted reports, transfer integrations and revoke provider access at the end of the engagement. Preserve records needed under the firm's own policy without keeping an old provider connected indefinitely."
        ]
      },
      {
        "h": "Test the handoff and maintain it",
        "ps": [
          "Before relying on the service, run a harmless tabletop with the firm contact, provider and IT. Walk through notification, authorized restriction, evidence handling and restoration. Identify steps that depend on a separately engaged incident responder or legal adviser.",
          "Assign uncovered steps directly. If the tabletop finds that nobody can administer an independent application after hours, agree who has the authority and how they can be reached. Additional identity alerts cannot fill that responsibility. Record the route and any remaining limit.",
          "Review the map when the firm changes platforms, acquires accounts or adds integrations. A well-defined service still needs an accurate population and current contacts. Choose a provider that can explain those boundaries and demonstrate a usable response path for the coverage it actually offers.",
          "Review recurring false positives before approving an exception. A broad suppression could hide a later event with different facts. Record what activity it affects, who approved it and when to reconsider it. Troubleshooting an alert does not itself authorize disabling its detection."
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
    "intro": "A fast AI draft may take twenty minutes to check. Measure the time needed to produce accepted work before renewing licenses or expanding a pilot. Include staff review, software fees and the effort needed to maintain the workflow alongside the time spent generating the output.",
    "takeaway": "Compare complete, accepted outputs at the same quality standard. Record preparation, checking, corrections, fees, and maintenance. Time freed for other work is useful capacity; it becomes cash savings or revenue only when a separate business change produces that result.",
    "sections": [
      {
        "h": "Measure the existing task first",
        "ps": [
          "Define what counts as a finished task, then record several examples completed without AI, including difficult cases. Count finding the material, producing the work, checking it, making corrections and handing it over. Use those same acceptance criteria in the pilot so the time comparison measures equivalent work.",
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
          "The example releases two hours and twenty minutes of staff capacity, valued at $93.33 under its $40 hourly assumption. After the $30 software allocation, the modeled recurring process-cost difference is $63.33. Neither figure automatically reduces spending: salaries may remain unchanged. Cash savings require an expense to fall, such as overtime; revenue requires suitable demand and billable work that is completed and paid for. Decide how the time will be used before claiming either result."
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
          "Use the same timing fields for every task so employees count the same work. Record a task identifier, input type, worker and acceptance result. If an identifier and approved category are enough, keep confidential task content out of the measurement sheet.",
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
          "Count the full effort when a draft fails. If an employee abandons the AI output and completes the task manually, the accepted result consumed both the attempted AI work and the manual work. Record why the draft was rejected so the team can judge whether that problem is correctable.",
          "Record changes made during testing. Staff may improve a template, clean a source folder or remove an unnecessary approval. Those changes can reduce time independently of AI. Keep them visible and, where practical, compare the improved manual process as well.",
          "Report the pilot’s limits alongside its results: the number and type of examples, who completed them, the observation period and work left untested. That lets another team decide how relevant the result is without mistaking a small pilot for a general productivity finding."
        ]
      },
      {
        "h": "Calculate the full recurring cost",
        "ps": [
          "The basic comparison is baseline task volume multiplied by baseline staff time, versus the assisted task volume multiplied by assisted staff time, plus maintenance. Convert minutes to hours before applying labor-cost assumptions. Include each role separately when their costs differ.",
          "Add the software cost attributable to this workflow and explain how you allocate a license used for several tasks. Assigning all of the fee, or none, without explanation can distort the comparison. Include usage charges and incremental storage or integration costs where they apply.",
          "Keep one-time setup separate from recurring operation. Training, configuration, initial source cleanup and external assistance may make the first month more expensive even when the later process is cheaper. Show that distinction so leadership can decide whether the expected duration of use justifies the setup cost.",
          "Label assumptions separately from observations. The checklist example uses hypothetical time, labor, software and setup figures. A real pilot should show which fields were measured and which were estimated, so leadership can inspect the basis of the calculation instead of receiving only a return percentage."
        ]
      },
      {
        "h": "Test how sensitive the decision is",
        "ps": [
          "Recalculate the result using alternatives for the least certain assumptions, such as lower monthly volume, longer review or more maintenance after a procedure update. If a modest change removes the expected benefit, collect more evidence before expanding the workflow.",
          "Consider the reviewer’s availability. A process may save an administrator time while consuming a partner’s scarce attention. Even if the modeled labor cost appears acceptable, the firm may prefer to preserve the partner’s capacity for work that cannot be delegated.",
          "Check whether the tool reduces errors or creates a new review burden. Use a defined error category and a consistent acceptance standard. Do not assign a financial value to every prevented mistake unless the firm has a defensible basis for that estimate. Reporting fewer corrections can be useful without pretending to know the cost of an avoided incident.",
          "Show exceptions alongside the average. Several easy successes can offset one long failure in the calculation while leaving the workflow unreliable for a deadline-sensitive task. Describe that failure in the decision record so leadership can assess the timing risk."
        ]
      },
      {
        "h": "Decide what to do with the freed capacity",
        "ps": [
          "Name the work that will use any time released. It might be responding to clients sooner, reducing a backlog or completing a recurring administrative task that currently slips. Measure that second outcome separately from the drafting improvement.",
          "Tie each dollar benefit to the business change that would produce it. Cash savings need an expense reduction; revenue needs suitable demand, completed work and collection. Count a freed hour once, rather than treating it as both avoided payroll and new billable income.",
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
    "intro": "An authenticator app can give you a code, ask you to approve a sign-in or hold a passkey. Those actions offer different protection: a code can be entered on a phishing page, while a passkey checks the service it belongs to. When you review MFA with IT, find out which method each account actually requires. Having the app installed does not tell you whether a stronger method is enforced or a weaker route remains available.",
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
          "List email, cloud documents, payroll, finance, remote access and administrator portals, with the owner and consequence of unauthorized access for each. Use that consequence to prioritize administrators and people who approve payments, change customer instructions or open sensitive records.",
          "Ask IT which sign-in paths require the method, not only who has registered it. Check enforcement policies, exclusions and applications accepting alternatives. An account may still be able to choose a weaker method after a stronger one is enrolled.",
          "Record shared accounts and service identities separately. A human MFA rollout does not automatically solve applications that connect without an interactive person. Those access paths need an appropriate technical review. Do not remove a working integration blindly, but do assign an owner and a plan for any unsupported arrangement."
        ]
      },
      {
        "h": "SMS codes",
        "ps": [
          {
            "text": "An SMS sign-in uses a code sent to the registered phone number, so control of that number is part of account security. A fraudulent interaction can collect or relay the code. The Microsoft authentication overview classifies SMS as phishable.",
            "links": [
              {
                "phrase": "Microsoft authentication overview",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/overview-authentication"
              }
            ]
          },
          "Plan for changes to the number before relying on it. Employees replace phones, change numbers and travel where service is unreliable; the number may also be personal. Define how the firm verifies a replacement number, removes the old one and prevents recovery messages reaching a departed employee.",
          "SMS may remain a supported option in a particular application while a stronger method is introduced. Record why that exception exists and when it will be reviewed. Avoid describing it as equivalent to phishing-resistant authentication simply because both satisfy an MFA prompt.",
          "For high-impact accounts, ask the platform owner which stronger supported method is available. The answer may require a license, policy or application change. Get that information before committing leadership to a rollout date."
        ]
      },
      {
        "h": "Authenticator-generated TOTP codes",
        "ps": [
          {
            "text": "A TOTP app displays a time-based one-time password generated from a registered secret and the time. You open the app and type the code into the sign-in page. A push request instead asks you to approve the sign-in. Microsoft's OATH token documentation describes TOTP and its supported options.",
            "links": [
              {
                "phrase": "OATH token documentation",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-oath-tokens"
              }
            ]
          },
          "A generated code does not depend on receiving a text message, but it can still be entered into a fraudulent sign-in page. TOTP is not phishing-resistant. Staff should begin sign-in through a known application or established address rather than trusting a login request because it asks for an authenticator code.",
          "Protect the enrollment secret and recovery codes in the approved recovery system, with defined authorized access. Broadly shared documents and team email create extra copies of credentials. Agree on where recovery information belongs before convenience produces uncontrolled copies.",
          "Before replacing a phone, follow the app and account provider’s supported transfer procedure. Test access on the replacement device before wiping the old one. If a phone is lost, use the documented recovery process rather than asking a colleague to share access to their own account."
        ]
      },
      {
        "h": "Push approvals and number matching",
        "ps": [
          "A push request arrives on a registered device for approval. If you did not start the sign-in, reject it and report it. Repeated prompts do not make the request legitimate; approving one simply to stop the notifications can authorize access you did not intend.",
          {
            "text": "Number matching asks the person to connect the approval to the initiating sign-in. It reduces accidental approval, but it is not phishing-resistant. The experience can vary by application and device. Microsoft number-matching guidance describes specific same-device behavior for mobile apps, so test the applications your staff use.",
            "links": [
              {
                "phrase": "Microsoft number-matching guidance",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/how-to-mfa-number-match"
              }
            ]
          },
          "Tell staff how to handle an unexpected prompt: deny it, leave the accompanying message alone and report the time and account. Name the support contact who investigates repeated requests. A caller's claimed identity should not be the employee's only basis for deciding whether to approve.",
          "Test approval when the phone is unavailable as well. A working laptop does not help if the registered phone lacks connectivity, is restricted or has been replaced. Put the approved recovery route in the rollout plan before the first lockout creates pressure for an informal fallback."
        ]
      },
      {
        "h": "Passkeys and FIDO2 security keys",
        "ps": [
          {
            "text": "A passkey binds a public-key credential to the legitimate service. A lookalike site cannot collect a reusable credential for that service, providing phishing-resistant sign-in. Device-bound and synced passkeys have different support and policy requirements, covered in the Microsoft passkey documentation.",
            "links": [
              {
                "phrase": "Microsoft passkey documentation",
                "to": "https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passkeys-fido2"
              }
            ]
          },
          "A PIN or biometric check normally unlocks the user's passkey. A separate security key can work across compatible devices, but browsers, workstations, phones, connectors and NFC support need testing. A successful sign-in to one application does not establish support for the others staff use; test those before planning the rollout.",
          "Choose the storage arrangement deliberately. A device-bound credential and a credential synced through a provider account have different recovery dependencies. Ask who controls the provider account, which devices may hold credentials and what happens when employment ends. Keep personal convenience and business access governance in the same discussion.",
          "Register approved backup methods before they are needed. When a security key is lost, support should verify the requester, follow the recovery process and remove the lost credential as appropriate. Track any spare key too; leaving it in an uncontrolled drawer weakens the recovery arrangement.",
          "Phishing resistance protects the authentication step. It does not make a compromised endpoint trustworthy, prevent every session theft or validate a payment request after sign-in. Continue the other controls around devices, permissions and business approvals."
        ]
      },
      {
        "h": "A practical comparison",
        "ps": [
          "Confirm the table's methods against the actual accounts in scope with IT. Check application support, enforced policy and recovery so the comparison informs a workable deployment."
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
          "Resetting an employee's authentication methods can transfer control of their future sign-ins. Support therefore needs more than a caller's knowledge of a name, job title or manager before making the change. Write down how the approved recovery process establishes identity through trusted records and obtains the necessary authorization.",
          "Limit who can make those resets and review their actions. Keep enough evidence to investigate an unexpected change, while avoiding unnecessary sensitive information in the ticket.",
          "Emergency administrator access needs a separate arrangement with your IT provider. Agree which accounts may be used, how they are protected and how their use is reviewed, then test the arrangement safely. Keep those accounts for the agreed emergency use instead of allowing them to become a routine exception to ordinary sign-in policies.",
          "Before broad enforcement, practice a lost-phone or lost-key scenario. Have support show how the authorized person regains access and how it handles an unauthorized requester applying pressure. Use the results to correct gaps, then repeat the affected part of the test."
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
          "Before enforcement, explain the expected prompts, give staff enrollment time and identify the support route. They need to know what changes in daily use and where to get help. A rollout without help-desk coverage can create disruption and pressure for informal exceptions."
        ]
      },
      {
        "h": "Measure enforcement and exceptions",
        "ps": [
          "Track the accounts in scope, those with the required method enforced and those with documented exceptions. Separate administrators from ordinary users so high-impact gaps are visible. State the measurement date and the systems included.",
          "Include method resets, unexplained prompts and applications accepting weaker authentication in the review. An enrollment percentage misses those gaps. Leadership needs the remaining exposure, owner and date for reconsidering each exception.",
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
      "Recovery belongs in that review too. Suppose an employee loses the phone they use to sign in. The firm needs a way to restore their access, but support must also be able to reject someone pretending to be that employee. Check that staff can enroll and use the chosen method on their supported devices, then test the recovery route before enforcing the change across the company."
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
    "intro": "If a client file disappears, the useful question is how your firm can restore the information it needs and resume work. Microsoft 365 offers retention, recovery and native backup capabilities, each with its own scope. Start with your restore requirements and the process your team can operate, then compare the products against them. A sales claim that Microsoft has no backup will not answer those questions.",
    "lead": [
      {
        "text": "Retention and backup serve related but different purposes. Retention policies can preserve or delete content according to configured rules. Microsoft 365 Backup is a separate recovery product, covering supported SharePoint sites, OneDrive accounts and Exchange mailboxes. Review licensing, billing and configuration separately. See Microsoft Purview retention and Microsoft 365 Backup overview.",
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
          "Have IT map the mailboxes, accounts, sites and other data the firm needs to a native or third-party recovery product. Include shared information and records of departing employees, and list exclusions. That workload map gives you a basis for comparing vendors against the same recovery needs.",
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
          "Treat the recovery objective as a target whose conditions need review. Restoration depends on the supported workload, amount of data, event and configured service. Keep failed tests and exceptions alongside successful jobs so the firm can see where recovery remains unverified."
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
            "text": "Use the backup-testing guide to gather evidence for questionnaire answers. Start by documenting one important restore scenario and its responsible operator. Helm's free public-domain scan cannot inspect your tenant, backup policies or restore history.",
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
          "Use tenant records to map active and shared mailboxes, OneDrive accounts and SharePoint sites, along with dependent applications. List local files, application databases, identity settings and external records separately. Each uncovered workload needs a recovery method or a named owner for the gap. The licensed-user total cannot show whether those systems and records are included."
        ]
      },
      {
        "h": "Separate preservation from restoring operations",
        "ps": [
          "Retention may meet legal, records-management or business requirements by preserving information. Recovery returns usable work after an interruption. A preserved copy may need a specific search or export process; a restored copy may not meet the preservation obligation. Have the records adviser approve the retention requirements and IT approve the recovery design, then check where the two depend on each other.",
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
            "text": "Evaluate the Microsoft 365 Backup service and third-party options using the same recovery scenarios. Compare the documentation for each proposed configuration and record its assumptions. Judging one product on its strongest workload and another on an unrelated edge case will not tell you which fits the firm's needs.",
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
          "After restoration, have the business owner open the content and check the expected information, user access and any required versions or metadata. Confirm that the destination has not overwritten good current work. If one of these checks fails, record it as a finding even when the console says the restore completed.",
          "Record elapsed recovery time as well as hands-on effort. Authorization, finding the recovery point, transferring data and checking usability can each delay the return to work. Measuring them separately helps the firm distinguish a product limit from an operating delay. Advertised restore speed cannot establish how long the business will need to approve and verify its own request."
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
          "Keep the covered workloads, recovery scenarios, chosen service, operator and exceptions in the purchase record, with the test evidence and current commercial terms. Where the pilot fell short of a target, describe that difference and give it an owner. This provides a usable account of recoverability instead of a blanket statement that the firm is fully backed up.",
          "Review that record after a new application, acquisition, substantial site change or provider transition. Confirm that the service order still matches the environment. Before cancelling a service, agree on data access, any required export, administrative handover and the date at which recovery access ends. A smooth move requires those decisions while the current service is still available.",
          "Tell leadership which important workloads are covered, which recovery scenario was tested and what remains unresolved. Successful job counts describe completed activity; they do not establish that every business recovery will succeed. Keep the report tied to the configured service and the scenarios examined."
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
    "intro": "A client receiving a tax document needs to be able to open it safely. A business partner requiring certificates may need a different exchange. Choose Outlook encryption around the recipient and the protection required after delivery, then test that exchange.",
    "lead": [
      {
        "text": "Microsoft now calls its message-encryption service Microsoft Purview Message Encryption. You may still encounter the older Office 365 wording. Availability depends on your subscription, configuration and client support; see the Microsoft email-encryption comparison.",
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
          "TLS protects mail while it travels between servers. It does not give a sender continuing control over the recipient's copy. Ask IT whether your partner exchange needs enforced TLS and what happens if the connection fails. Those answers determine whether the proposed transport arrangement meets the exchange's requirements.",
          {
            "text": "Purview Message Encryption lets you send protected messages to external recipients, who gain access through supported sign-in or passcode experiences. S/MIME uses certificates and keys for message encryption and digital signatures. Both parties' setup matters when choosing S/MIME. The methods meet different operational requirements, and combining several on one message can create compatibility problems. See Microsoft's comparison and cautions.",
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
          "Ask your existing IT provider to prepare a test using non-sensitive sample data. Send from the Outlook versions employees use, then open the message in the email clients and on the devices your recipients are likely to use. Include the reply, attachment access and the handling of an incorrectly addressed message.",
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
          "Define the exchange before choosing an Outlook setting. Identify the sender and recipient, the information involved and any contractual restrictions. A routine invoice, tax return and health record can have different handling needs. Establish whether the recipient must edit, forward or retain the attachment in a matter file, so the control supports the required work.",
          "Encryption cannot correct a recipient selected from the wrong autocomplete entry. A well-protected message sent to the wrong authorized address still creates a business problem. Use a recipient confirmation step for sensitive exchanges, especially the first message to a new client or a thread involving several outside parties. Agree on the approved address through a trusted channel before sending the actual document.",
          "Decide how the recipient will obtain access information and help when access fails, and what records the firm must retain. A password in the same email as the protected attachment does not provide a separate verification channel. Give staff a procedure they can use during a deadline, including how to share that information through the agreed route."
        ]
      },
      {
        "h": "Compare the operational burden",
        "ps": [
          "Compare what the firm must operate and maintain for each method as well as the protection required. If staff repeatedly bypass a method because recipients cannot open messages, investigate the approved workflow and fix the access problem. The comparison below concerns those operating duties; it does not rank cryptographic strength.",
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
          "For example, an accounting practice could test an exchange with recipients using personal webmail, Outlook at another company and a phone. Send harmless sample attachments. Ask them to find and read the file, reply and return the completed document through the intended route. Opening the encrypted message verifies only the first step.",
          "Record what recipients see during the pilot and use it to write staff and client instructions. Check whether an account is needed, invitations can expire and the selected device supports the exchange. Staff need to explain the sign-in or passcode step and provide help without asking a client to send a password or confidential screenshot.",
          "If a forwarding restriction matters, test it on the selected message type using approved test accounts. A protection label on the original message does not establish continuing control over every attachment. Recipients may also take notes or photograph what they can see, so the exchange still depends on an authorized recipient and appropriate use of the information."
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
          "Withdrawing supported access cannot recover information someone has already read, copied or downloaded. If a message reaches an unintended recipient, preserve the delivery details, attempt the supported containment action and follow the firm’s incident process. Have the responsible adviser assess the disclosure and any notification questions, even if the technical action succeeds.",
          "Assign ownership of certificate renewal and advance warnings, and decide how retained protected messages will remain accessible when an employee leaves. Test a retained sample using the approved succession arrangement. Lost keys and expired certificates need a recovery procedure owned by the authorized administrator, with access limited to those who need it."
        ]
      },
      {
        "h": "Give staff a short operating rule",
        "ps": [
          "Turn the configuration into a short staff procedure. An illustrative rule for client tax documents could require the approved exchange, confirmation of the recipient address before the first send and referral to a named support contact if protection fails. Staff would then use the approved alternative while IT resolves the issue. Set the actual rule from the firm’s data, clients and engagement terms; this example is not a universal legal requirement.",
          "Separate routine support from a suspected disclosure. A client who cannot open a test file needs assistance. A confidential attachment sent to the wrong person needs an incident decision. Employees should know which contact handles each situation and what information to provide. Avoid requiring them to diagnose encryption technology before asking for help."
        ]
      },
      {
        "h": "Keep evidence that answers the real question",
        "ps": [
          "Retain the selected method, licensed population, policy scope, pilot date and tested recipient scenarios, together with business approval and unresolved exceptions. Recheck when the mail client, licensing, recipient population or protection policy changes meaningfully. Set the review frequency from business requirements and the rate of change instead of assuming one schedule fits every organization.",
          "If a client questionnaire asks whether sensitive messages are encrypted, explain the relevant scope and exceptions. Saying that the firm uses Microsoft 365 does not answer that question. A supported answer describes which exchanges receive which protection, how employees select the workflow and who verifies its operation."
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
    "intro": "Sharing a vendor password through a browser, spreadsheet or message can solve an immediate access problem. It leaves harder questions when someone departs, reuses the password or cannot identify the account owner. A business vault should help the team manage that access and its recovery.",
    "sections": [
      {
        "h": "Start by identifying where passwords still matter",
        "ps": [
          "Inventory email administration, finance, payroll, website management, social accounts and important vendor portals. Give each an owner. Keep individual logins, shared passwords and application credentials separate because they need different access arrangements.",
          "Use individual accounts where the service supports them, with permissions appropriate to each person. Named access makes activity easier to attribute. Keep shared credentials for justified needs that the service permits; a vault should not encourage the team to share a powerful administrator login.",
          "Record accounts that already support stronger sign-in methods. A password manager can be part of the access system without being the answer to every account. Ask your existing IT provider how single sign-on, passkeys, MFA and the vault fit together before buying overlapping capabilities."
        ]
      },
      {
        "h": "Why unique passwords are useful",
        "ps": [
          "If the same password is used in several services, its exposure in one place creates a risk elsewhere. Attackers can try known username-and-password combinations against other accounts. Using a unique password for each service limits that risk.",
          {
            "text": "CISA recommends long, random, unique passwords and a password manager protected by MFA. Its guidance explains why remembering a large collection of strong passwords manually is impractical. CISA password-manager guidance.",
            "links": [
              {
                "phrase": "CISA password-manager guidance",
                "to": "https://www.cisa.gov/resources-tools/training/cyb3rsmrt-use-password-manager-create-and-remember-strong-passwords"
              }
            ]
          },
          "Apply unique passwords to each affected company account. Changing one portal leaves reuse unresolved if the old password remains in other services. Identify those accounts, change each through its supported procedure and store the current credentials in the approved place.",
          "A password manager cannot prevent every account compromise. A phishing interaction, compromised device, weak recovery route or excessive permission can create a separate problem. Unique passwords reduce one exposure while other access controls address the rest."
        ]
      },
      {
        "h": "Browser storage and business vaults answer different needs",
        "ps": [
          "Browser password storage can make unique passwords easier for an individual to use. Its suitability for the company depends on management features, account ownership and the browser environment. Browser storage is not always insecure or always sufficient; judge it by those details.",
          "Test the functions the team needs: shared items, permissions, administrative recovery and user removal. In particular, show how the business retains access when an item’s creator leaves. Check the exact plan and configuration, since features available elsewhere in the product may not be included in the purchase.",
          "A particular product may not support every control in this checklist. Require a demonstration using a test account before relying on a feature for production credentials."
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
          "Work through recovery with IT before a user needs it. Identify who can reset or recover vault access, how the requester is verified and which actions are logged. Urgency or knowledge of a colleague’s title should not be enough to obtain their access.",
          "Manage administrator privileges separately from ordinary vault use. Give only the necessary people administrative roles, document why they need them and review those assignments. Ensure an authorized backup administrator exists so the company is not dependent on one employee’s availability.",
          "Test recovery with dummy credentials before relying on the vault for critical accounts. Include the main administrator losing a device or being unavailable. Record the procedure and protect the recovery material; putting it in a broadly shared folder would recreate the handling problem the vault was meant to address."
        ]
      },
      {
        "h": "Design shared access carefully",
        "ps": [
          "Organize items by business responsibility. Finance may need billing portals without needing website administration. Marketing may need social accounts without needing payroll. Grant access according to the work people perform instead of putting every credential in one company-wide collection.",
          "Give each shared item an owner. That person maintains the account details, confirms authorized users and coordinates changes. Include a brief description of the service and its purpose, but avoid putting unnecessary sensitive information into item notes.",
          "Check whether someone granted vault access could retain the password, even if the tool restricts viewing or copying. Removing that person from the vault leaves the service’s password unchanged. If they knew or could have copied it, change the credential as part of removing access.",
          "Plan rotation after a relevant departure or suspected exposure. Test the updated credential and any dependent integration. A changed password that silently breaks a scheduled business process creates pressure to restore the old value, so include the service owner in the work."
        ]
      },
      {
        "h": "Migrate in a controlled order",
        "ps": [
          "Start with a small set of important accounts and representative users. Confirm the browser or application integration works on supported devices. Teach staff how to save, retrieve and update credentials without sending them through chat.",
          "Review imported items before relying on them. The old spreadsheet may contain duplicates, wrong URLs, abandoned accounts or untested passwords. Moving it into a vault changes its storage; the team still needs to establish which items are current and authorized.",
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
          "Decide with IT whether storing a second-factor secret beside the password meets the account’s risk and the firm’s policy. Administrative and financial accounts deserve particular attention to convenience and factor separation. The tool’s ability to store both does not determine whether that arrangement is suitable."
        ]
      },
      {
        "h": "An illustrative offboarding example",
        "ps": [
          "Consider two staff members sharing a vendor portal that does not support separate users. In this hypothetical example, the departing employee has been removed from the company vault, but the portal password is unchanged. That leaves a credential they may still know.",
          "Removing the employee from the vault blocks future access to the item, but a password they previously saw or copied still works. The service owner needs to change the portal credential, test it and confirm that the remaining authorized employee can use it. If separate users become available, review whether the shared arrangement can be retired.",
          "The same review should cover recovery email addresses and phone numbers. A company-controlled password is insufficient if the account can still be recovered through the departed employee’s personal address. Ownership includes the reset route as well as the secret."
        ]
      },
      {
        "h": "Review the vault as an ongoing system",
        "ps": [
          "Check administrator assignments, shared-item membership and unresolved account owners on a schedule appropriate to the business. Revisit them after departures, role changes and new service purchases. Use available logs where supported to investigate unexpected changes.",
          "Measure progress through the accounts brought under an approved process, not just the number of vault licenses issued. Useful evidence includes identified owners, unique credentials, tested recovery and completed rotation when required. Record gaps rather than treating an installed extension as completion.",
          "Ask whether staff keep another password store because the approved system is missing something they need. Resolve the missing item or workflow directly. Otherwise, the vault can appear well maintained while the credentials people actually use remain elsewhere.",
          "Helm can discuss account-protection priorities alongside your existing IT provider. Routine account administration and vault configuration remain with the agreed IT owner unless separately scoped. Choose and maintain the access system as part of your broader identity work."
        ]
      }
    ],
    "takeaway": "Use unique credentials, prefer named accounts and inspect the business controls in the chosen vault. Protect vault access, test recovery and rotate shared secrets when required. Removing a user from a vault does not invalidate passwords they already knew.",
    "lead": [
      "A business password manager can help staff create unique credentials and govern shared access. When comparing it with browser-saved passwords, check how each handles account ownership, permissions, recovery, offboarding and evidence. Evaluate those capabilities in the exact product and plan, since vaults differ in the controls they provide."
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
    "intro": "A client may ask whether a control covers the whole business when your report covers only employee laptops. Someone needs to compare the question with the evidence before approving an answer. That review is the starting point for choosing a questionnaire response service or managing the work yourself.",
    "lead": [
      "DIY can work when the firm has an owner who understands its controls, can obtain evidence from IT and has time to manage reviews. A response service can help organize that work, but the customer still owns every final representation."
    ],
    "takeaway": "Map questionnaire answers to current scoped evidence. A response service can help draft and organize; your firm approves every final representation.",
    "sections": [
      {
        "h": "Start with the question's scope",
        "ps": [
          "A requester may use the same wording for one service, one business unit or all production systems. Record that scope, the deadline and the approval route before drafting. If your evidence covers employee laptops, it cannot support an answer about every production system.",
          "For each question, name the control owner and identify the supporting record. Missing evidence means the answer is not yet supported. If the control is planned or only partially deployed, describe that status and its scope. Putting an item on a roadmap does not make it a current safeguard.",
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
          "Make sure the response writer knows how to contact the legal and commercial reviewers. A question about an existing control may sit beside a request to accept a future obligation. For example, describing current practice should not silently commit the firm to a new service level or notification deadline. The reviewer needs to decide what the firm can agree to.",
          "Break the request into control areas and assign reviewers. IT may validate access and device records. A business owner may confirm payment procedures or staff training. Counsel may need to review an obligation or disclosure. Keep one coordinator so the final answers do not contradict each other.",
          "Keep one working version in an approved location, with access limited to the reviewers. Agree how it will be named and updated before copies start circulating by email. Preserve any changed question and recheck its answer, so the final approved response can be identified later."
        ]
      },
      {
        "h": "Match evidence to the wording of the question",
        "ps": [
          "Identify what the question asks you to claim, including its subject, population and period. Offering training differs from confirming that all staff complete it annually. Deploying backups differs from testing recovery. Read those distinctions before choosing the supporting record.",
          "Use a fictional endpoint question to test the process. If the report shows 70 eligible workstations but the firm has additional servers and phones, it may support an answer about those workstations. It cannot alone support a claim that every company device receives the same protection. Ask the control owner to explain the uncovered population.",
          "For a yes-or-no form, review whether a qualified answer or comment is permitted. Do not choose yes merely because the form has no option that reflects partial coverage. Ask the requester to clarify the expected treatment of exceptions, and have the authorized firm reviewer approve the resulting answer.",
          "Investigate missing evidence before deciding what the answer is. A control may be operating while its record has not been collected, or the control itself may be absent. Those cases need different next steps, so a generic pending status should not conceal which problem the owner is checking."
        ]
      },
      {
        "h": "Keep the answer library reusable and accountable",
        "ps": [
          "Store each approved answer with the question it addresses, covered systems, evidence reference, date, control owner and approver. Add limitations that affect reuse. If an answer describes a particular provider's service, identify the service and population rather than presenting it as universal protection.",
          "Set triggers for reviewing library answers, including platform migrations, acquisitions, licensing changes and revised policies. Have the owner revise or retire affected entries. If old answers only accumulate, later questionnaires may contain statements that conflict with each other or with current practice.",
          "A customer's acceptance of an answer does not verify the control behind it. If an earlier response looks inaccurate, take it to the authorized business and legal reviewers. The response service should flag the discrepancy; those owners decide how it should be addressed with the external party.",
          "Use automation cautiously. A tool can suggest a relevant library entry, but a reviewer must check the wording, scope and current evidence. Do not upload restricted records to an unapproved AI tool to speed drafting. The firm's data-handling rules apply to the response workflow itself."
        ]
      },
      {
        "h": "Share enough evidence without exposing unnecessary detail",
        "ps": [
          "Ask what the requester needs to establish. A dated summary may answer a question without requiring a full configuration export. Where detailed evidence is necessary, confirm the recipient's authority and approved transfer method. Use redaction when it preserves the relevant claim.",
          "Keep credentials, working tokens and unrelated client records out of evidence packages. Screenshots can reveal more than their author intended, including names, account identifiers and infrastructure details. Have the responsible reviewer inspect the material before sharing it.",
          "Record what was shared, the recipient, date and purpose. For a controlled link, check permissions and any review or expiry arrangements. A confidentiality agreement does not remove the need to limit the disclosure or control access to it.",
          "Retain the approved response and the evidence references under the firm's policy. Supporting records may remain in a separate restricted system. The response coordinator should know where they are without making unnecessary copies in a general marketing or sales folder."
        ]
      },
      {
        "h": "Compare DIY and managed work against the next request",
        "ps": [
          "For DIY, identify available reviewer time and a backup coordinator. Ask whether IT can deliver evidence before the deadline and whether leadership can approve exceptions. A response library reduces repeated drafting, but it does not remove technical validation or business approval.",
          "For a service, ask the provider to work through a harmless sample question. Check what it drafts, what it verifies and what it sends back to your team for confirmation. Ask how it handles conflicting evidence and an answer that requires a legal decision. The provider should make uncertainty visible.",
          "Agree what the service allowance counts before an urgent request arrives. A per-question allowance differs from a per-questionnaire allowance, particularly for a long request. Confirm turnaround, follow-up coverage and portal entry in the service order so both teams know which work is included.",
          "Keep emergency incident work distinct from questionnaire deadlines. A suspected active compromise belongs in the incident route, even if the customer also asks for a written update. The response coordinator should not treat drafting an answer as a substitute for authorized containment and investigation."
        ]
      },
      {
        "h": "Close the process with approval and improvement",
        "ps": [
          "Before submission, check consistency across answers and attachments. Confirm evidence dates, qualification wording and the authorized signer. Retain the exact approved version so later follow-up can refer to what was represented. Any submission through the customer's portal should match that version.",
          "After submission, record outstanding follow-ups and any control gaps discovered. Assign the operating fix to its owner separately from corrections to the wording. Improving the answer record cannot complete a missing restore test or finish an incomplete deployment.",
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
    "intro": "An employee may paste a contract or client email into a public chatbot to finish a useful task. The information then leaves the firm's approved systems. If the firm has offered neither a reviewed tool nor clear sharing rules, employees are left to decide what they can use.",
    "sections": [
      {
        "h": "What shadow AI actually is",
        "ps": [
          "Shadow AI means using an unapproved or unreviewed AI tool on company information. Staff may choose one because it drafts emails, summarizes documents or cleans up code quickly. If the firm offers no approved route, convenience can end up deciding where that information goes.",
          "A restriction needs a defined purpose, an approved alternative where appropriate and a route for requesting a useful tool. Network blocking alone does not establish whether company information is being used through personal accounts or other devices."
        ]
      },
      {
        "h": "What can leave the company through a prompt",
        "ps": [
          "A prompt may contain client names, financial details or contract terms the firm has not approved for sharing. Pasting them into a chatbot provides that information to a third-party system, with handling that depends on the service and account.",
          "Check what happens after the upload. Retention and model-training use depend on the account type and settings, which the employee may never have reviewed. Company information in a personal account with weak protections adds another access problem. Review both the service's handling and the account holding the data.",
          "The output creates another problem when it is copied into a client deliverable or used for a decision without review. A confident answer can still be wrong."
        ]
      },
      {
        "h": "Give employees a safe way to use it",
        "ps": [
          "A short acceptable-use policy should explain the approved purposes, permitted information, review duty and reporting route. Support it with a maintained tool inventory and practical instructions, then check whether use matches the decision.",
          {
            "text": "Give employees a short list of approved tools so they have a practical alternative. A periodic audit can then show whether the tools used in daily work still match the policy. Assign that review to a responsible business or IT owner. Any Helm support for AI-tool auditing needs a separate written scope.",
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
          "Ask which task the tool is meant to help with: summarizing a file, drafting correspondence, comparing documents or preparing a checklist. Identify the required inputs and output. Those details let the firm review one use instead of trying to approve AI in the abstract.",
          "Use synthetic or otherwise approved examples to clarify the task before a pilot. A real client document should not be the demonstration material for an unreviewed tool. If the task can work without confidential input, design the workflow around that smaller information set.",
          {
            "text": "Use the first-workflow guide to compare candidate tasks. The shadow-AI review finds and governs tools already in use, including those the business has not yet examined. Give employees a workable route to request approval so useful tasks do not remain unresolved.",
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
          "Record the tool, account type, intended use, users, permitted information and connected systems, with business and technical owners. Include extensions, embedded features and integrations alongside chatbots. A familiar application can add an AI feature that changes where information goes, even if staff keep using the same product name.",
          "Ask employees about use in a straightforward way. Explain that the inventory is intended to clarify approved work and resolve gaps. Avoid claiming that a particular percentage of staff must be using unapproved tools without evidence. Use the firm's own records and interviews, with lawful and proportionate technical review where authorized.",
          "Approve the use as well as the tool. A business subscription suitable for one internal task may still require a separate decision about client data. Write down the permitted purpose and information so staff understand where a narrow pilot ends."
        ]
      },
      {
        "h": "Review the information path and terms",
        "ps": [
          "Check the selected service under the actual subscription and settings: what it receives, stores and returns, who can access it, how deletion works and which terms apply. Review model-training use separately from retention. Information excluded from training may still be stored or processed by another service.",
          {
            "text": "For connected documents, review existing permissions and the integration's scope. The AI document-access guide explains that part of the assessment. A connector that respects user access can still surface information shared too broadly in the underlying system. Assign someone to address those permissions.",
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
          "Use examples staff can apply during a deadline. An outline based on approved public text involves different information from a client's confidential contract. Removing the client's name may leave identifying context, so have the information owner approve the actual input.",
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
          "Name the person accountable for the finished work and decide what they must check. A factual draft needs source verification, numbers need calculation checks and specialist work needs qualified review. AI output can contain incorrect facts, unsupported conclusions or missing context even when the task was approved.",
          "Keep approval of a draft separate from authority to act on it. Permission to summarize does not authorize automatic correspondence or financial decisions. Sending or execution capabilities need their own review of authority and consequences.",
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
          "Have the information owner, IT and appropriate advisers establish what happened, then examine that service's retention and deletion options. A visible chat can disappear while copies remain under product terms or preservation requirements. Obtain provider information for the actual account and event before describing deletion as complete.",
          "Record any supported access or deletion action with its date and observed result. Keep conclusions about client, regulatory or contractual duties with the authorized advisers. A technical action can help contain a situation without settling every notification decision."
        ]
      },
      {
        "h": "Maintain approval after the pilot",
        "ps": [
          "Reopen approval when the subscription, integration, data category or permitted action changes. A new connector or automatic-sending feature changes the workflow even if the product name stays the same. The owner should identify that change and obtain review before extending the use.",
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
          "Give the request a recorded outcome: approved for the defined use, approved for a bounded pilot, awaiting information or declined with an explanation. Include the owner and review date where needed. Staff should be able to tell which information and connections that decision permits.",
          "If the request is declined, explain the actual unresolved condition and the approved way to complete the work. That may be a different tool, synthetic data for a test or the existing manual process. A clear disposition helps the employee act without guessing whether silence means approval.",
          "Track outstanding requests alongside actual use so leadership can see where the approval process stalls. The cause might be missing information, limited review capacity or a requirement the tool cannot meet. Assign someone to resolve the request so it does not sit without an answer."
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
    "intro": "Security information and event management software, or SIEM, collects and analyzes events from connected systems. It can help investigators follow activity across separate consoles. The business still needs people authorized to investigate the alerts and procedures for acting on them.",
    "lead": [
      {
        "text": "Microsoft Sentinel has data connectors, analytics, investigation features and response automation. Buyers still need to connect the data their investigations require and staff the response workflow. Microsoft Sentinel overview.",
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
          "Start with the activity your current services cannot adequately investigate. A hypothetical New Jersey consulting firm might need to connect a suspicious cloud sign-in with activity on a covered laptop. Ask whether existing tools already support that investigation before adding a separate log platform.",
          "For that use case, identify each required data source and its owner. Check any additional collection license and how the provider notices a failed connector. The investigation depends on those specific events arriving; logs from one unrelated system cannot supply visibility across the business."
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
          "Describe the activity to detect and what the investigator would need to decide. For an unusual sign-in, that might include related device activity. Name the required data, who will investigate and what action follows a confirmed finding. That gives the firm a use case it can test before asking a platform for broad visibility.",
          "Map the sources to their owners. The identity administrator, endpoint provider and application owner may have different access arrangements. Ask whether the current services can already supply the required investigation. A separate SIEM may be appropriate, but duplication adds cost when it does not close a defined gap.",
          "Begin with a use case the firm can operate and verify, and document what it excludes. If the service only ingests identity and endpoint events, it should not be described as monitoring every business application. Consider additional sources later through a deliberate scope decision."
        ]
      },
      {
        "h": "Evaluate the collection pipeline",
        "ps": [
          "Ask the operator to show how it checks that expected event types are arriving and are recent enough for the detection. A connector needs permission and setup, followed by ongoing health checks so investigators continue receiving the data they need. Assign responsibility for those checks.",
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
          "When alert counts change, check whether data collection, rules or activity changed too. Ask the operator to classify the outcomes and document significant decisions. Leadership needs to know which findings required action and which remain unresolved, rather than interpreting the total as a count of attacks.",
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
          "Have the provider walk through a covered investigation, identifying what the analyst can inspect and what context it needs from the customer. Establish which actions it can perform directly and whether agreed authority includes supported containment. That discussion should make clear where the service ends and another responder takes over.",
          "Do not treat every product integration as a promise that the provider will use it for your account. Ask for the sources and capabilities included in the written service. If a response requires an IT change, establish the handoff and the information IT receives.",
          "For round-the-clock coverage, name the team and function that operate continuously. Event collection at all hours does not establish that investigators are staffed at all hours. Agree how urgent action is authorized and how escalation works when the customer contact is unavailable, before signing the contract."
        ]
      },
      {
        "h": "Make retention a business decision",
        "ps": [
          "Set log-retention requirements around the investigation, client term or records obligation the firm needs to meet. Check the data, storage tier and retrieval process against that purpose. Retained logs help only when the investigator can obtain the relevant history when needed.",
          "Ask how exports work and who can authorize them. Logs can contain sensitive identifiers and activity details, so access and sharing need an approved process. Do not send unrestricted event exports to an ordinary sales inbox to obtain a product opinion.",
          "Clarify data access when the service ends. Determine what can be exported, in what form, at what cost and before what deadline. Include the removal of connector access in the transition plan. A new service should not inherit unexplained privileges from an old arrangement."
        ]
      },
      {
        "h": "Understand the variable costs",
        "ps": [
          "A SIEM evaluation should include the expected sources and volume assumptions, ingestion, storage, retention and any investigation fees. Ask how cost changes with a new application, more devices or increased event volume. Avoid a quote based on a small demonstration source when the intended deployment is much broader.",
          "Include connector setup, tuning and ongoing maintenance. Identify work retained by IT, such as granting approved access or repairing a source integration. Record the estimated effort as a planning assumption, not a guaranteed financial result.",
          "Agree how the operator reports unexpected volume or charge changes. Before enabling a materially expensive new source, have someone authorized to approve the cost assess its operating value. Make the budget and data-collection decisions together."
        ]
      },
      {
        "h": "Run a bounded demonstration",
        "ps": [
          "Use fictional or approved harmless data. Follow one event from collection through detection, investigation and the agreed action. Verify the source, rule and handling evidence. The demonstration should have a stated expected result and should not interfere with production business systems.",
          "Add harmless false-positive and missing-source scenarios. Follow the records the operator keeps, the rule adjustment and the repair of the data path. These checks reveal how the service maintains useful detections after onboarding, beyond displaying the initial alert.",
          "A demonstration cannot prove detection of every attacker or the quality of every future investigation. Keep the tested scenario and observed result with the decision record. Ask for the relevant service documentation where a capability cannot be meaningfully demonstrated in the pilot."
        ]
      },
      {
        "h": "Confirm whether SIEM is the necessary purchase",
        "ps": [
          "A firm may need better endpoint and identity response, a clearer incident contact or a specific log source for an investigation. Those needs can lead to different service choices. Compare a managed SIEM proposal with the actual capabilities and boundaries of the current detection service.",
          "Assign operation and maintenance before purchasing a new platform. If current services meet the defined use case, record that conclusion and the gaps still outstanding. In either case, the firm needs an assigned investigation and response process with understood costs and coverage."
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
    "intro": "A contracting officer, customer or government reviewer may ask how your defense business arrived at its SPRS score. To answer, you need to show which systems were assessed, the evidence used and a calculation another qualified person can reproduce. An unsupported number can put eligibility for covered work in question.",
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
          "The score summarizes implementation against the assessment methodology. It is not a general security grade and it does not prove that every system in the company was included. The system boundary and the System Security Plan determine what the number describes."
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
          "A low, well-supported score gives the company an accurate starting point and a remediation plan with an assigned owner. An inflated score creates a mismatch between the representation and the evidence.",
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
          "Keep the score with the file that explains it: the current System Security Plan, boundary diagram or inventory, control-by-control working papers, evidence links and calculation worksheet. Include the assessment completion date and expected dates for implementing unmet requirements. Where several SSPs exist, tie each score to the correct system and CAGE codes.",
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
          "The deduction weights help identify requirements with a larger effect on the score, but every requirement and the correct system boundary still need review. After remediation, collect evidence, recalculate and update the score through the authorized process. The reported change should follow a change in the assessment record."
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
          "Clarify a customer’s requested assessment or affirmation in writing. An SPRS result, CMMC status and supporting control evidence are related records with different purposes. Identify which one the customer needs, then respond with that record and its scope."
        ]
      },
      {
        "h": "Establish the boundary before calculating",
        "ps": [
          "List the people, systems, locations and external services involved in the covered information. Include the actual workflow: receipt from a prime, quoting, engineering, production, storage and transmission. An assessment of a narrow environment needs a credible explanation of how information stays within that environment.",
          "Review exclusions as well as included systems. A CAD workstation, quoting mailbox or remote-access service may affect the boundary even if the first inventory missed it. Establish the role of each dependency before deciding scope; a business label alone does not determine whether it belongs in the assessment.",
          "Keep the inventory and SSP aligned. If the SSP describes one environment while the worksheet assesses another, the final number cannot be interpreted reliably. Resolve the mismatch before submitting a summary result or using it in a customer response.",
          "The system boundary itself can be sensitive. Store diagrams, findings and detailed evidence in the approved repository with controlled access. A marketing or general operating document can describe the process without exposing live security weaknesses or customer information."
        ]
      },
      {
        "h": "Review evidence requirement by requirement",
        "ps": [
          "For each applicable requirement, document what is implemented, where it applies and what evidence supports the conclusion. Separate a policy statement from evidence that the procedure operates. The appropriate evidence varies with the requirement and should be evaluated by a qualified reviewer.",
          "For access management, the working record might include current permissions and the relevant approval procedure. For a recurring review, it should explain when the activity occurred and what was checked. These are illustrative evidence types, not a declaration that one screenshot or document satisfies the requirement.",
          "When implementation cannot be established, record the uncertainty and resolve the evidence gap before marking the requirement met. Otherwise, the worksheet produces a higher score from an unsupported conclusion, making the assessment harder to defend.",
          "Check the methodology version and scoring rules used. Have the reviewer explain how deductions were applied, including any requirement-specific treatment. Keep the underlying worksheet so another qualified person can reproduce the arithmetic and examine the conclusions behind it."
        ]
      },
      {
        "h": "An illustrative score mismatch",
        "ps": [
          "Imagine a shop marking an access requirement implemented because its policy says managers approve users. Its operating records instead show accounts created without approval, and the reviewer cannot establish that the procedure was followed. This is a hypothetical scenario, not a Helm finding.",
          "The shop needs to examine how the control operates, correct the process and collect appropriate evidence. Rewriting the policy or removing the exception from the evidence set cannot establish implementation. Keep the assessment conclusion aligned with the current state until the requirement is supported.",
          "The same principle applies after a technical purchase. A tool can provide a capability while the required coverage, configuration or operating procedure remains incomplete. Do not add points solely because the invoice shows a product was bought."
        ]
      },
      {
        "h": "Connect remediation to verified changes",
        "ps": [
          "Give each gap an owner, target date and dependency, and specify the evidence needed to close it. Identify whether work belongs to IT, security, leadership or a process owner. A security provider cannot independently close a requirement that depends on a business decision it has no authority to make.",
          "Reassess a requirement after its correction and keep both the earlier evidence and the new result. Another reviewer should be able to follow the reason for the score change. If the correction changes the boundary, review its effect on the wider assessment before adjusting the calculation.",
          "Use scoring weight as one input to prioritization. Also consider business exposure, implementation dependencies and contractual needs. A requirement with a small deduction can still matter operationally. Avoid a plan that improves the number while leaving the underlying environment poorly understood."
        ]
      },
      {
        "h": "A defensible assessment record",
        "ps": [
          "Keep enough detail to explain the assessment while controlling how it is shared. A customer asking for a score may not need or be authorized to receive the full evidence repository. Use the approved route and provide only the information necessary and authorized for the request."
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
          "Compare the entered result with the approved assessment file and retain the submission confirmation. Resolve discrepancies through the authorized process with an explanation, whether the change corrects a typo or reflects a new assessment conclusion.",
          "Assign a backup owner for the submission record. The firm should retain authorized access and the assessment history when an employee or outside adviser changes roles.",
          "Helm can discuss an evidence-based readiness scope with the shop and its existing IT provider. Leadership remains responsible for representations and final attestations. A gap review supports preparation; it does not issue a government assessment result, certification or contractual approval."
        ]
      }
    ],
    "takeaway": "Keep the system boundary and working papers behind every score deduction. When a control or the environment changes, update the assessment record and evidence so the reported number remains supportable.",
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
    "intro": "The System Security Plan explains the environment and safeguards in place today. When a review of those safeguards identifies a weakness, the Plan of Action and Milestones records the remaining work, its owner and expected completion. Connect both documents to the systems assessed: policies, screenshots and an SPRS score cannot show the current implementation or next action on their own.",
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
          "The Plan of Action and Milestones, addressed by requirement 3.12.2, records weaknesses or deficiencies and the work needed to correct them. Give each item a responsible owner, resources, milestones and completion dates, plus the evidence needed to close it. Those fields let the team act on the deficiency and check progress.",
          {
            "text": "Together they support your gap assessment against the applicable 110 security requirements. The SSP describes the current implementation; the POA&M records the weaknesses and work still needed.",
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
          "Testing a control requires knowing which people, systems, facilities and connections it covers. The SSP should supply that boundary. Describing tools the shop does not use, or omitting CUI in a quoting mailbox or CAD workstation, sends the assessment toward the wrong environment.",
          "Connect each requirement to its responsible people, technology, procedure and evidence. Include dependencies and exceptions. A reviewer can then compare the SSP’s account of implementation with the way the shop operates."
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
          "Trace how information reaches the shop and moves through receipt, review, quoting, engineering, production, storage, transmission and disposal. Identify the people, devices and outside services at each stage. A diagram can help, but explain the written scope clearly enough that a reviewer does not have to guess what a box represents.",
          "For each requirement, describe the implementation in the assessed environment. Identify the responsible role and the relevant procedure or configuration. If a provider supplies part of the safeguard, describe the dependency and the evidence the shop obtains. A provider’s broad marketing statement is not an implementation description.",
          "Explain why each excluded system is outside scope and how the shop keeps covered information out of it. If staff routinely move files there, review the boundary. A specially named folder cannot by itself establish that separation.",
          "Avoid copying a template’s product names, staff roles or network design into your SSP. A template can prompt useful questions. Its example answer becomes misleading when it describes a control the shop does not operate."
        ]
      },
      {
        "h": "Link descriptions to evidence without creating a second evidence store",
        "ps": [
          "Use references that let an authorized reviewer find the relevant record in its approved location. Identify the evidence owner, date and the requirement it supports. Keep live findings, diagrams and configuration details restricted to the people who need them.",
          "Do not paste credentials or sensitive technical records into a general document to make it appear comprehensive. The SSP can describe how a control is implemented while the detailed evidence remains in a governed repository. Confirm which material may be shared with a customer or reviewer before distributing it.",
          "Check that an authorized reviewer can actually open each reference. An employee’s private drive may become inaccessible after they leave. Give the evidence a business owner and appropriate permissions so it remains usable independently of that employee.",
          "Preserve the version used for an assessment where the history is needed. The current SSP describes today’s environment, while the earlier version explains the earlier result. Record which version supports each assessment rather than overwriting its basis with later changes."
        ]
      },
      {
        "h": "Give every POA&M item a closure test",
        "ps": [
          "A useful item identifies the unmet requirement, current deficiency and intended correction. Add the responsible owner, resources, dependencies, milestones and expected completion date. State what evidence will demonstrate that the correction is complete.",
          "For an illustrative access-management gap, the item might require a revised approval process, a review of current accounts and evidence that the corrected process operates. Those are example work components, not a finding that applies to every shop. The exact closure criteria should follow the requirement and assessment method.",
          "Close the item after the implementation is verified and its review result retained. A purchase order or policy draft may be a step toward completion, but neither establishes that the correction works. If one project affects several requirements, track those relationships and the evidence needed for each.",
          "Separate an expected date from a firm commitment supported by resources. A date repeatedly moved without explanation is weak planning evidence. When work is delayed, record why, the interim safeguard if applicable and the person authorized to accept the remaining risk or contractual consequence."
        ]
      },
      {
        "h": "Distinguish a remediation plan from permission to defer",
        "ps": [
          "A POA&M can organize corrective work even where an open item is unacceptable for the assessment status sought. Have a qualified reviewer confirm the permitted requirements, thresholds and closeout conditions under the applicable regime before leadership makes an affirmation.",
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
          "Suppose the SSP says relevant accounts follow an approved access process, but the POA&M lists a gap in reviewing them. The reviewer must establish whether the SSP describes current operation or presents the planned correction as already implemented.",
          "Revise the implementation description to reflect the actual state, retain the relevant evidence and keep the correction assigned. When the review process is implemented and verified, update both records with the supporting date and evidence. Do not close the item by making the wording of the two documents agree while leaving the operating gap unresolved."
        ]
      },
      {
        "h": "Build maintenance into ordinary changes",
        "ps": [
          "Review document impact when the shop adds a platform, changes a provider, opens a location or changes information handling. The person approving the change should identify which SSP descriptions, evidence references and POA&M items need an update.",
          "Before an assessment or customer response, look for an implemented control with a related open deficiency, references to retired tools and evidence from another environment. Resolve each inconsistency so the reviewer can trace the claim without guessing which record is current.",
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
    "intro": "Suppose a supplier invoice has the correct job number, amount, letterhead and contact name, but a new bank account. An attacker reading the real email thread may have changed only that detail. If you pay the substituted account, the supplier can still be waiting for the money you owe.",
    "sections": [
      {
        "h": "How the scam actually runs",
        "ps": [
          {
            "text": "A fraudster may compromise a supplier's or general contractor's email, or imitate it convincingly, and send changed banking details when a payment is due. The request arrives at a plausible moment in a working relationship. Staff therefore need to verify the banking instruction even when the timing seems ordinary.",
            "links": [
              {
                "phrase": "general contractor",
                "to": "/contractors"
              }
            ]
          },
          "Keep delivery confirmation separate from permission to change the payment destination. Send the banking change to the firm's authorized verifier before the payment approver releases funds."
        ]
      },
      {
        "h": "Verify the financial instruction independently",
        "ps": [
          "Call a number already held in your supplier records whenever an invoice introduces new or changed banking instructions. Use the same rule for a general contractor. A number supplied in the email making the change comes from the same request you are trying to verify, so it cannot provide an independent check. Reach someone authorized to confirm the banking instruction itself, then record what was confirmed. An incomplete call or a further compromise can still leave the payment unverified.",
          "The procedure also needs to work when a payment deadline is close. Decide in advance how staff should escalate a threat to delay the job or pressure from someone claiming authority. Leadership must support the pause while the payment remains unverified; otherwise one crew member is left deciding whether urgency overrides the rule. Write down the escalation route so that decision reaches the person authorized to make it."
        ]
      },
      {
        "h": "Protect your own domain and verification process",
        "ps": [
          {
            "text": "A criminal may also send customers an invoice using your company's visible domain. Correctly configured DMARC on your domain helps receiving systems evaluate unauthorized use of that exact domain. It does not protect every use of your business name, stop a lookalike domain or prevent fraud from a compromised legitimate mailbox. Keep the independent verification process in place.",
            "links": [
              {
                "phrase": "DMARC on your domain",
                "to": "/helm-core"
              }
            ]
          },
          {
            "text": "Lookalike domains can also deceive staff: a supplier name spelled with a swapped letter or a different ending may pass a fast read on a phone screen. The free scan does not search for lookalike registrations, but it does report how your own public email authentication is configured.",
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
          "Keep the job confirmation and banking decision distinct in the record. A correct job number, amount and delivery detail can support paying a real debt while leaving its new destination unverified. Staff can question the banking change without declaring the whole invoice false, and confirm the completed work without approving that change.",
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
          "Review trusted contacts as supplier relationships change. A former project contact may no longer have authority over banking details. Maintain an approved alternate for times when the primary contact is unavailable, so the route remains usable after the job's initial setup."
        ]
      },
      {
        "h": "Record the instruction that was verified",
        "ps": [
          "Keep bank details in the controlled record. A status message can reference the instruction without copying full account information to everyone involved in the job. Limit access to the people who need it and follow the firm's records requirements.",
          "Run the required verification again if the banking instruction changes after approval. Approval applies to the beneficiary that was checked, not whichever account appears next. A callback log for an earlier instruction does not confirm today's replacement account."
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
          "Agree in advance whether to use the established alternate or wait when the trusted contact is unavailable. A search result or a new message link should not become an improvised verification route under deadline pressure. Preparing the trusted record gives staff a route they can use without relying on the requester.",
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
          "Have the person checking job progress say exactly what was confirmed, such as delivery or completed work. Calling the invoice approved may suggest that banking details were approved too. Precise wording helps the payment operator distinguish the job decision from authority to release money."
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
          "Reach the real supplier through the trusted route to establish the status of the legitimate invoice. Have the financial and legal owners decide the next steps. A suspected fraudulent transfer may leave both a security incident and a business dispute to resolve, so keep speculation out of the affected email thread."
        ]
      },
      {
        "h": "Test the rule with a harmless job scenario",
        "ps": [
          "Use a fictional supplier, job number and banking change. Include a payment cutoff and an unavailable primary contact. Ask the team to show the trusted record, verification, approval and decision. Include field staff and the payment operator so the exercise covers the whole handoff.",
          "Record which parts of the exercise worked and which did not. Fix a stale contact, unclear approval or unavailable alternate, then repeat the affected step. Attendance records who took part; observing the steps shows whether staff could complete the transaction checks.",
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
          "Have the accounting owner check the final supplier and transaction records against the approved beneficiary. If the request was rejected, look for any draft change saved during the review and correct it through the approved process. Declining the email does not establish that those earlier edits were reversed."
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
    "intro": "A virtual chief information security officer, or vCISO, takes on agreed security-leadership work without a full-time executive appointment. The title alone leaves you with questions: what will the adviser deliver each month, and which decisions stay with your firm? Providers attach different duties to the role, so compare those commitments and decision rights in the proposed engagement.",
    "lead": [
      "For a professional-services firm with existing IT, the engagement should explain who maintains the risk view, recommends priorities, tracks evidence and brings unresolved decisions to leadership."
    ],
    "takeaway": "Buy defined security-leadership deliverables, meeting cadence and evidence responsibilities. Confirm limits and retain final business approvals.",
    "sections": [
      {
        "h": "Buy a defined leadership role",
        "ps": [
          "Ask what the provider does each month and which decisions come to the leadership review. A sample risk register and roadmap using fictional data should connect business consequences to owners and required approvals. A list of tools does not demonstrate those responsibilities.",
          {
            "text": "Use NIST SP 1300, the Small Business Quick-Start Guide, to organize the discussion across governance and operational activities. It provides a review structure; it does not certify a vCISO service or establish that every obligation is met.",
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
          "Ask the provider to include costs and dependencies beyond the advisory fee in the roadmap. Stronger access policies may require licenses and implementation time. A recovery improvement may require a separate backup or response engagement. Leadership needs those dependencies before it approves the recommendation."
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
            "text": "Helm Command combines the covered Core stack with vCISO leadership and managed security-program ownership. Its scope includes a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance responses, quarterly leadership reviews, an annual tabletop and IT coordination. The published range is $8,000 to $15,000 per month after fit and complexity review. Compare those written duties with each prospective vCISO engagement to establish which work is included.",
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
          "Before requesting proposals, list two or three unfinished decisions, such as access-review ownership, funding a recovery fix or answering a customer's evidence request. For each, identify what is missing: facts, authority, implementation time or an agreed business tradeoff. That gives the provider a defined problem to address.",
          "Ask how the adviser would move each decision forward. It can organize evidence and recommend a path, while IT implementation, licensing or legal interpretation may still need another owner. Keep those dependencies in the engagement so the original work does not remain blocked after the advice is delivered.",
          "Choose an executive sponsor who can approve priorities and bring the relevant owners into the discussion. Define which decisions the sponsor can make and which need partners or another governing group. Recommendations need a route to those decision-makers.",
          "Use that list to evaluate a fictional sample engagement. Ask what the provider would deliver after the first review, what information it would request and how it would track an unresolved decision. Look for a practical record your team can use between meetings."
        ]
      },
      {
        "h": "Separate leadership, monitoring and implementation",
        "ps": [
          "Ask for a responsibility map covering risk advice, policy work, evidence coordination, monitoring, administration and remediation. Mark separate purchases and retained duties. The vCISO title alone does not tell you which of those services the fee includes.",
          "Monitoring requires a defined scope of coverage and response path. Advisory work requires a cadence, deliverables and business access. Implementation requires the relevant technical authority and time. One provider can supply more than one service, but the scope must explain which work is included and who handles the rest.",
          "Define the adviser's incident role and availability before signing. It may coordinate leadership decisions while an authorized responder investigates and IT restores systems. Record escalation limits and any separate incident fee, especially if the ordinary advisory service meets quarterly.",
          "For policy work, determine whether the provider drafts, reviews or maintains documents. Ask who verifies that written procedures match actual operations. The firm must review obligations and approve the policy; an attractive document cannot establish that its controls are implemented."
        ]
      },
      {
        "h": "Examine the risk register and roadmap together",
        "ps": [
          "A useful risk record describes the business consequence, evidence, uncertainty and owner. It also records the proposed treatment and the decision needed from leadership. Ask the provider to show a fictional example with an unresolved dependency rather than only completed success items.",
          "Follow a roadmap recommendation through to the work needed to implement it. A new access policy may require licenses, enrollment and tested recovery before rollout. The plan should show those dependencies, realistic dates, expected costs and acceptance checks for the assigned owner.",
          "Check how the provider handles deferral. A risk accepted for a limited period should retain its rationale, approver, conditions and review date. It should not disappear from the register because the implementation budget was unavailable. Leadership needs to see when the original assumptions change.",
          "Connect each roadmap milestone to the risk or business requirement it addresses. When the work closes, update the supporting evidence and remaining risk too. Leadership can then trace the funded work to its intended effect, rather than seeing only a completed task."
        ]
      },
      {
        "h": "Make leadership meetings produce decisions",
        "ps": [
          "Request a sample agenda and decision log showing changes, completed work, unresolved gaps and approvals needed. Give leadership the options early enough to consider them. The meeting time can then go toward decisions instead of a dashboard readout that leaves the same work blocked.",
          "For each approval, show the proposed action, responsible owner, cost assumption and consequence of waiting. Where facts remain uncertain, state what discovery would resolve them. Avoid presenting an estimate as a committed project price when another vendor must quote implementation.",
          "Close the meeting with decisions, dated next actions and an owner for telling IT about approved changes. Name who verifies completion. If leadership rejects a recommendation, retain that decision and its reconsideration trigger; rejection does not complete the proposed work.",
          "Between meetings, define how urgent questions are handled. Set an agreed communication route and turnaround expectations appropriate to the contracted service. Distinguish an urgent business question from a suspected active compromise that belongs in the incident route."
        ]
      },
      {
        "h": "Review evidence and independence claims carefully",
        "ps": [
          "Find out which records the provider can obtain directly and which require IT. Evidence coordination does not necessarily grant system access. Name who checks coverage, dates and exceptions before a record supports an external response.",
          "For questionnaires, identify included volumes, formats, deadlines and follow-up limits. Ask how conflicting or unsupported answers are escalated. The client should retain the final submission and approval record, with sensitive supporting material shared only through an approved process.",
          "An adviser that recommends and operates controls is not automatically an independent assessor of those controls. When a customer or requirement calls for independent assurance, confirm the required assessor and form of evidence. Keep advisory reviews, technical testing and formal attestations distinct.",
          "Agree on exit deliverables before signing: the current register, roadmap, decision history and evidence references, in a usable format. Specify transition support so the next adviser can continue the work. The firm's operating records should remain available when the engagement ends."
        ]
      },
      {
        "h": "Choose fit over the title",
        "ps": [
          "Compare proposals using the same recurring duties, meeting cadence and retained responsibilities. Ask how the provider learns your business without requiring unnecessary disclosure of client records. Confirm who covers absence and whether a change of assigned adviser affects the commitments.",
          "Choose the engagement that fills the coordination gap you have identified and fits your capacity to implement approved work. Agree on a first review date and what you will use to judge the start: a named adviser, an agreed risk-register structure and an initial set of actions the responsible teams can carry out. Those deliverables let leadership assess the work instead of relying on the title.",
          "During procurement, ask whether the adviser is compensated for recommended products or sells the implementation. Leadership should understand those incentives and compare alternatives where appropriate. Preserve the recommendation's reasoning in the decision record so the choice can be reviewed on its merits."
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
    "intro": "A scanner finding still needs someone to check whether the weakness is real, identify the system owner and decide how soon to act. Vulnerability management keeps that work moving through repair and verification. Agree on the handoffs needed to take a finding from the report to a completed, checked repair.",
    "lead": [
      "Start with those responsibilities before buying another scan subscription. For a firm with existing IT, the program should make that provider's work visible and give leadership a route to resolve exceptions."
    ],
    "takeaway": "Build a finding-to-action workflow with authorized scope, risk-based priority, responsible IT owners and verified closure evidence.",
    "sections": [
      {
        "h": "Establish the scope and permission to scan",
        "ps": [
          "Build the scan scope from devices, applications, cloud services and public-facing systems, each with an owner. Identify what the scanner can examine and where another method is needed. Obtain authorization and agree timing before scanning, especially when availability affects client work.",
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
            "text": "Ask IT to validate the affected version and exposure before assigning a task. Consider exploitation evidence, internet access, business importance and available mitigations alongside the scanner's severity rating. Use the CISA KEV catalog, which lists known exploited vulnerabilities, as one input to prioritization. Its federal deadlines do not create a universal deadline for private New Jersey firms.",
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
          "After a patch ticket is completed, check the version, rescan or review the configuration as appropriate to the finding. Leave failed deployments and remaining exposure open. Schedule routine reviews around the environment and repeat relevant checks after meaningful system changes so closure remains tied to evidence.",
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
            "text": "Begin with a meeting between the business owner and IT to agree on the asset list and finding-to-ticket workflow. Helm's free public-domain scan can contribute limited public configuration findings. It does not replace the authorized assessment needed to establish a vulnerability-management baseline. The remaining sections explain how to set up that baseline, starting with an asset register.",
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
          "If nobody recognizes a public service found in the scan, investigate its ownership before assigning a change. That is different from deliberately excluding a known asset. For a supplier-operated application, establish the approved contact and available evidence so the finding has a route to a responsible technical owner.",
          "Update the register when new services are introduced and old ones are retired. Compare it with procurement, hosting and device-management records. The purpose is to identify important gaps in the assessed population, not to create an inventory that becomes too detailed for anyone to maintain."
        ]
      },
      {
        "h": "Choose assessment methods deliberately",
        "ps": [
          "Choose the method for the question. An external scan observes a public surface; an authenticated assessment inspects information accessible with permission. Configuration review examines settings a scanner may not assess well, while a separately scoped penetration test investigates exploitable paths. Combine methods where the assessment needs those different views.",
          "For an engagement, define the systems, authorization, timing, permitted actions and emergency stop contact. Discuss operational sensitivity before assessing a fragile or specialist system. A vendor's usual scanning profile should not silently become permission for every test against every asset. Third-party infrastructure may need separate approval.",
          "Ask how credentials are handled if the assessment needs them. Use an approved access arrangement and limit privileges to the required purpose. Record how access is removed afterward. Do not send administrative credentials through an ordinary sales form to receive a generic assessment."
        ]
      },
      {
        "h": "Validate a finding before assigning the fix",
        "ps": [
          "Review the detected product, affected version and evidence. Determine whether the finding accurately describes the deployed system. A scanner may rely on a banner, incomplete information or a test with limitations. If IT disputes a finding, retain the evidence and the reason for the determination rather than deleting it without explanation.",
          "Give disputed findings a documented disposition: confirmed, not applicable, unresolved or needing another check. Name the reviewer and review date. A 'false positive' label alone can hide an unanswered question that will return with the next scan.",
          "For confirmed findings, identify the corrective action and its prerequisites. A patch may require a restart, application test or vendor assistance. A configuration change may need business approval. Route those dependencies with the task so the technical owner knows what completion requires."
        ]
      },
      {
        "h": "Make the priority understandable",
        "ps": [
          "Set dates using the firm's applicable obligations and current technical guidance, then explain the priority in the finding record. The table offers operating questions to support that discussion; it is not a universal scoring formula. Leadership should be able to understand the urgency without interpreting the scanner's whole scoring system.",
          {
            "text": "NIST's patch-management guide connects patching with preventive maintenance and verification. Plan who will perform updates and what time and resources they need. A vulnerability program that identifies problems but gives IT no time or approval to repair them remains incomplete.",
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
          "Review each exception's reason, temporary safeguards and next decision date. Check whether a supported fix or replacement has become available. If an unsupported application is repeatedly postponed, bring the replacement decision to the business owner instead of automatically renewing the exception.",
          "Avoid using a blanket exception for all systems managed by another provider. Ask that provider for the action it can take and the evidence available. If the firm lacks the authority to make the change directly, it still needs an owner for the supplier escalation and contractual review."
        ]
      },
      {
        "h": "Close with evidence matched to the finding",
        "ps": [
          "Use evidence that answers the original finding. A version issue may need a verified version and reassessment; a configuration issue needs the relevant setting and test. For a retired service, confirm it is no longer accessible within the assessed scope. A ticket status change records administration without demonstrating those results.",
          "Check for failed deployment and partial completion. If nine devices receive an update and one does not, keep the remaining device assigned. Do not close the whole population because most of it is complete. Preserve the assessed population and dates so later reviewers understand the limits.",
          "A rescan can provide useful confirmation, but it also has scope and detection limitations. If a finding disappears because the scanner can no longer reach the system, determine why. Loss of visibility is not the same as verified repair."
        ]
      },
      {
        "h": "Report the work that remains",
        "ps": [
          "Useful leadership reporting includes important unresolved findings, aging exceptions, owner decisions and coverage gaps. Scan counts describe activity; they do not show whether the firm acted. A backlog trend is meaningful only if the scope and counting rules remain understandable.",
          "Separate newly discovered findings from overdue confirmed findings and explain changes in assessment scope. A broader or better assessment can increase the count because it reveals more issues. Conversely, a falling count cannot establish that overall risk fell by the same percentage.",
          "Track the stages where work stalls: validation, business approval, installation or verification. Assign a correction to the bottleneck. Measure whether important findings reach a documented decision or verified repair, and whether exceptions have an accountable owner."
        ]
      },
      {
        "h": "Start small enough to operate",
        "ps": [
          "A small firm can begin with its important public-facing systems and a representative device population, then expand under an agreed plan. The initial scope should be explicit. Do not present that starting point as a full-business assessment.",
          "Choose a review cadence the team can sustain and add reviews after significant changes. Include new hosting, an acquisition, a new remote-access service or a material software change. Meet with the technical owner to review open work and with leadership when an approval or exception needs a business decision.",
          "Make sure important findings can reach validation, corrective work and closure evidence, with reviewed exceptions where work remains. Then decide whether more assessment capacity would answer the firm's remaining questions. Increasing scan frequency will add findings without resolving them if that operating process cannot keep up."
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
    "intro": "A security operations center, or SOC, monitors and investigates activity within an agreed scope. A smaller business can buy that coverage instead of staffing it itself. To evaluate the service, follow an alert from the signals collected through investigation, authorized action and escalation.",
    "sections": [
      {
        "h": "Start with the covered environment",
        "ps": [
          "Confirm the devices, identities and other sources the service accepts, along with platform support and required setup. Workstation monitoring does not imply server, network-appliance or application coverage. Even a broader service needs evidence that its intended sources are connected.",
          "Compare the coverage list with the business inventory. Identify devices that are excluded, identities not supported and applications whose activity needs a different approach. Record those boundaries so leadership understands what it is buying. A service can perform its contracted work well while leaving another part of the environment outside scope.",
          {
            "text": "CISA's logging guidance for small businesses recommends working with IT to establish logging and monitoring. When buying a service, ask who will use those records to investigate events and keep that process running. Check separately that the data source is configured and that a staffed service uses it.",
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
          "Record automatic actions alongside analyst decisions. Some controls act as soon as activity is detected; other signals require investigation or customer context. Ask how the provider shows that each relevant event receives the handling promised in the agreement.",
          "An unfamiliar sign-in may be approved travel. An unexpected application may have a legitimate business owner. Give investigators a route to the customer role that can confirm those facts without asking for passwords or sensitive client content. Technical events and business context need to be reviewed together."
        ]
      },
      {
        "h": "Understand triage and investigation",
        "ps": [
          "Triage determines how an event should be handled under the service. Investigation examines the available evidence and relevant context. Depending on the product and scope, that may include device activity, account events or related signals. The provider should explain what evidence it can access and where visibility ends.",
          "Ask how the service classifies outcomes. An event may be expected activity, unresolved activity needing information or a confirmed situation requiring action. A raw alert count does not tell leadership how many incidents occurred. Request reporting that explains significant decisions and outstanding work.",
          "Name a primary and backup contact who can provide information during an investigation, and agree how urgently they should respond. A question left in an unmonitored shared inbox can stall the work. Keep the contacts aligned with coverage hours and update them when staff change."
        ]
      },
      {
        "h": "Define containment authority before it is needed",
        "ps": [
          "A response service may be authorized to isolate a covered device or perform a supported account action. Ask exactly which actions are available and which require customer approval. Do not assume an investigation license gives the provider permission to make any change across the business.",
          "Leadership should understand the possible interruption from containment. An isolated laptop may be unavailable during a client deadline. Agree how to handle that tradeoff before an incident, including any special handling for critical systems. The service should have a defined escalation route when the relevant customer contact cannot be reached.",
          "Assign recovery duties separately from containment. A team isolating a laptop may leave restoration, application installation, replacement hardware and investigation of wider consequences to other teams. The employee needs a clear support route through that handoff, even when several providers perform the work."
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
          "A product can collect events continuously while the contracted analyst service operates only during stated hours. A provider can also offer continuous investigation for a defined set of covered devices, identities or other sources. Ask which function the phrase 24/7 describes: collection, notification, analyst investigation or supported response.",
          "If analyst coverage is continuous, confirm who operates that team and how your events reach it. Examine the written coverage, responsibilities and escalation arrangements. Those details establish what service the firm is buying and how it will be delivered.",
          "Check what happens during holidays and provider transitions. Identify the support route outside the customer's office hours and the method used for urgent contact. An overnight event should not depend on the one employee who happens to remember a vendor's phone number."
        ]
      },
      {
        "h": "Test the handoff with a harmless exercise",
        "ps": [
          "Arrange a vendor-supported, authorized test using harmless sample activity. State the expected result and the boundaries. Follow the event into the service and record the observed handling. The purpose is to examine the route and authority, not to prove that every possible attack will be detected.",
          "If the demonstration triggers an automatic action, identify it as automatic. If analyst review is part of the contracted service, ask for the appropriate evidence that this function is operating. A demonstration of a console feature should not silently become proof of continuous human investigation.",
          "Test the customer's handoff too. Have the primary contact identify the event and reach IT, then confirm the backup contact has the required authority. Check that IT understands whether the device is still isolated before repair. Resolve those questions while the exercise is controlled."
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
          "A suspected fraudulent transfer may require immediate contact with the bank alongside investigation of account activity. Give those parallel duties to the appropriate owners so technical work does not delay financial action. Follow the event’s facts and record what is confirmed without drawing premature conclusions."
        ]
      },
      {
        "h": "Review records and service boundaries",
        "ps": [
          "Ask what evidence the customer can obtain about a significant event: time, affected asset, classification, action, escalation and unresolved questions. Logs and investigation records may contain sensitive information. Keep them in an approved restricted location with access appropriate to the response.",
          "Clarify retention and export arrangements. If a client requirement calls for particular records, determine whether the service can supply them before answering the questionnaire. A monthly summary and a complete forensic record are different deliverables. Do not assume one includes the other.",
          "Before ending the contract, agree which access will be removed, which records the firm will retain and when the replacement service takes over. Check the handover against the covered population and acceptance criteria. Cancelling before the replacement is accepted can leave coverage unclear."
        ]
      },
      {
        "h": "Use reports to resolve a decision",
        "ps": [
          "Ask the provider to report missing coverage, significant investigations and customer actions still open. If ten devices stopped reporting, leadership needs to know which owner is checking them and when the result is due. If an investigation needs a business explanation, name the contact supplying it.",
          "Define the start and completion event for each response-time measure. Acknowledging an alert, investigating it and containing the situation are different results. Keep the method, exclusions and assumptions beside each figure when comparing providers; an attractive average may conceal an unresolved event or uncovered source."
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
            "text": "Helm Command adds risk and roadmap ownership, evidence upkeep, leadership reviews and coordination with the named IT owner. Existing IT retains administration, patching and routine remediation. Specialist forensic response and hands-on recovery require separate written scope. Program coordination should explain those boundaries without implying that every task is included.",
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
      "A notification arriving at any hour tells you little about the response. Ask whether an analyst reviews the covered event, which actions are authorized and when the customer needs to decide. Follow the alert through the service's contacts and the work retained by existing IT before relying on a claim of around-the-clock coverage."
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
    "intro": "A customer can receive a convincing invoice displaying your company name even though you did not send it. Email authentication helps receiving systems check authorized use of your domain. Understanding those checks helps you decide what DMARC can address and which fraud controls you still need.",
    "sections": [
      {
        "h": "What SPF, DKIM and DMARC each check",
        "ps": [
          {
            "text": "SPF checks whether a server is authorized to send for the envelope-sender domain. DKIM checks a domain's cryptographic signature over selected message content. DMARC compares a passing SPF or DKIM result with the domain people see in the From address. One passing, aligned method is enough; both need not pass. The current IETF DMARC standard defines these distinctions.",
            "links": [
              {
                "phrase": "current IETF DMARC standard",
                "to": "https://datatracker.ietf.org/doc/html/rfc9989"
              }
            ]
          },
          "A message can pass an authentication check while still failing DMARC because the domains do not align. For example, a billing platform could authenticate its own domain while showing your company’s domain in the From address. Your administrator should follow the platform’s supported configuration so the relevant domains align.",
          "Ask each business service to send a test message, and have your IT provider inspect the receiver’s authentication results. A screenshot showing a DNS record exists is useful configuration evidence. It does not establish that an invoice sent through a particular platform passes DMARC at its destination."
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
          "Put the DNS administrator and the relevant business owner into the change review. The administrator may not know which invoicing system finance uses, while finance may assume its vendor handles authentication. Including both brings that sending process into the inventory and test plan before a DNS change can interrupt it."
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
          "Sort observed sources into approved senders, approved senders needing repair, unexplained sources and known unauthorized activity. Volume alone cannot justify approving an unfamiliar source. Identify the service, its owner and whether the business uses it before granting authority.",
          "For a legitimate failure, record the cause and fix. Possibilities to investigate include a platform configuration change, a newly added sending domain, an outdated integration or a forwarding path. Your IT provider should test the explanation against actual messages rather than making repeated DNS changes until a dashboard looks better.",
          "For each decision, record the date, source, business owner, evidence and action. If the service later changes infrastructure, the administrator can revisit the original approval. A successor can also follow the decision without reconstructing it from email."
        ]
      },
      {
        "h": "Move toward enforcement with a business test plan",
        "ps": [
          "Treat enforcement as an operational change. Define the sending processes that must work, the people who will test them and the way staff will report delivery problems. Include invoices, password-reset messages, appointment reminders and other messages whose failure could delay work or confuse customers.",
          "Test with recipients outside the organization and inspect authentication results as well as delivery. Internal delivery only shows the internal path. One message arriving in an inbox is less informative than a recorded result tied to the sending configuration being tested.",
          "Schedule the change when the responsible staff can investigate problems. Avoid making the first enforcement change immediately before a major billing run if nobody can monitor the outcome. Record the previous configuration, the approved update and the recovery procedure with the person authorized to carry it out.",
          "Observe or directly test the business activity relevant to the sender inventory. An annual notification service may not send anything during two quiet weeks, so test it separately. No universal observation period can demonstrate that every company’s senders are ready.",
          "After enforcement, keep the sender approval process. Adding a new platform should trigger an authentication review before it sends customer-facing messages. DNS access, service ownership and change records remain part of the control. DMARC is easier to maintain when it is connected to ordinary purchasing and onboarding decisions."
        ]
      },
      {
        "h": "An illustrative billing-platform example",
        "ps": [
          "Consider a firm using a productivity suite for routine mail, an accounting platform for invoices and another service for appointment reminders. In this hypothetical example, the suite passes DMARC but the invoice sender uses an unaligned arrangement.",
          "If the firm changes to rejection without testing invoices, customers may stop receiving legitimate bills. The right sequence is to identify the invoice sender, follow that vendor’s supported authentication procedure, send test invoices and review the receiver’s results. The same review should cover reminders even if they account for few messages.",
          "After verifying those senders, the firm can use the results to assess enforcement. Assign responsibility for approving future sending-platform changes as part of the inventory. Otherwise, a marketing tool added months later can recreate the alignment problem after the original project has closed."
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
          "Name the people who maintain the inventory and review reports. Agree how often they explain unresolved failures to business owners and where decisions are recorded. A software subscription does not settle those responsibilities.",
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
          "Name the inventory owner and request the current authentication results for important sending services. Use those results to connect the firm’s public DNS configuration to the mail it actually sends."
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
    "intro": "Windows includes Microsoft Defender Antivirus. Whether your firm needs additional protection depends on the configured controls and who operates them. Check who investigates an alert, identifies missing devices and authorizes containment after hours before comparing a managed service.",
    "lead": [
      "First clarify the product name. Defender Antivirus, Defender for Business and Defender for Endpoint are different parts of Microsoft's product family. A proposal that says only Defender leaves licensing, management and response responsibilities unclear."
    ],
    "takeaway": "Check the exact Defender product, active licenses and reporting devices. Then compare who investigates alerts and performs authorized response.",
    "sections": [
      {
        "h": "Check the existing protection before replacing it",
        "ps": [
          {
            "text": "Microsoft documents Defender Antivirus as built into Windows and as a component that works with Defender for Endpoint. Its business endpoint products add capabilities under their respective licenses and configurations. This makes a blanket claim that Defender has no centralized management or endpoint detection and response (EDR) misleading. Microsoft Defender Antivirus, Microsoft Defender for Endpoint.",
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
          "Ask your IT provider which subscriptions are active, which devices are enrolled and which settings are applied. Compare the enrolled devices with your device inventory. If a device stopped reporting last month, its old enrollment record does not show that it is still covered."
        ]
      },
      {
        "h": "Compare the operating models",
        "ps": [
          "An internally operated business endpoint platform can fit a firm whose IT team has the time, skills and authority to maintain it and handle incidents. Budget for that work and confirm who covers absences and out-of-hours events.",
          "Ask a managed detection service to specify its investigation and response duties: which activities are included, which are automated and which require approval. Evaluate the product's capabilities and the service's coverage separately, requesting evidence for both. A claim that one brand is always enough or never enough skips those operating questions.",
          "Imagine a 35-person New Jersey law firm whose partner's laptop raises an alert during a client deadline. Someone must assess the alert, determine whether they can isolate the device and arrange for the partner's work to continue. Another antivirus purchase does not assign those duties. Use the hypothetical incident to compare the operating handoff.",
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
            "text": "Specialist vendor teams provide continuous monitoring and containment behind covered capabilities; Helm does not staff its own 24/7 security operations center (SOC). Existing IT retains patching, administration and routine remediation. Command adds evidence upkeep, risk and roadmap ownership, leadership reviews and IT coordination rather than unlimited incident recovery.",
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
          "Get the exact Defender product, plan and tenant configuration in the proposal. Defender Antivirus, Defender for Endpoint and Defender for Business have different roles, so their names cannot be substituted for one another. Check which capabilities are enabled on the proposed devices and who operates them. Having the license does not establish deployment.",
          {
            "text": "Microsoft's endpoint overview describes different licensing and platform capabilities. Confirm requirements against the current documentation. Do not assume a Windows configuration can be applied unchanged to a Mac, mobile device or server. The commercial and technical scope should identify those differences.",
            "links": [
              {
                "phrase": "endpoint overview",
                "to": "https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-endpoint"
              }
            ]
          },
          "Before replacing a product, ask IT to show whether its intended protection is active, relevant updates are current and devices are reporting. Review evidence of policy application and significant exceptions. That current-state review may reveal a configuration or operating gap hidden by a comparison of brand names."
        ]
      },
      {
        "h": "Compare the duties around detection",
        "ps": [
          "Compare the time, authority and expertise assigned to the same duties under both proposals. An existing license still requires people to operate it. Likewise, including a security product in a managed contract does not show that every needed duty is covered. Write down what each arrangement supplies and what it leaves with the firm.",
          "If a proposal leaves a duty with the firm, name the person who will perform it. When a proposal says the customer handles alerts, confirm when staff are available and how they escalate an incident. If the provider handles investigation, define which connected systems and signals are covered."
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
          "Compare currently reporting devices with the eligible inventory and IT's acceptance criteria. Delivering an agent does not establish that it reports or works as intended. Remove retired devices and duplicate entries from the coverage calculation so they cannot inflate it.",
          "Investigate stale reporting rather than assuming it means the employee is on leave. The device may be powered off, replaced, unavailable or experiencing a deployment problem. Assign someone to find out why it stopped reporting and record the status before removing an entry from the console.",
          "Exceptions need the same attention. Ask why an exclusion exists, what it covers and who approved it. A broad exclusion added to resolve an application issue can remain after the original reason has disappeared. Give material exceptions a review date and a responsible owner."
        ]
      },
      {
        "h": "Understand what response includes",
        "ps": [
          "A detection product may block some activity automatically under its configuration. An investigation service may review an alert and decide on a supported action. These are different capabilities. Ask the provider to explain what is automatic, what receives analyst review and what requires customer approval.",
          "Before granting standing authority to isolate a device, explain to leadership how the firm will handle the interruption. Containing a laptop during a client deadline may be appropriate while also interrupting urgent work. Agree on who informs the employee and who restores working use when you agree on containment authority.",
          "Do not assume that isolating a device includes forensic examination, rebuilding, replacing hardware or restoring every application. Those duties may belong to IT or a separately engaged specialist. Get the boundary in writing and give employees one reporting route that reaches the relevant teams."
        ]
      },
      {
        "h": "Test a realistic handoff",
        "ps": [
          "Use a vendor-approved harmless exercise to follow a covered event through the process. Confirm the test is authorized and record the expected result. The test should demonstrate the agreed routing and escalation, with the limits of the exercise stated clearly.",
          "Ask who receives the event, how it is classified and how the firm is contacted. Check the backup contact when the primary person is unavailable. If the demonstration shows an automated action, do not present it as evidence that a human investigated that particular event. Request the relevant evidence for the contracted service.",
          "Follow the test through to the employee and IT team. If the laptop becomes unavailable, the employee needs support instructions; IT needs to know its containment status before repair. A business owner may need to approve an alternative way to work. Check those handoffs alongside the console action."
        ]
      },
      {
        "h": "Estimate costs from your environment",
        "ps": [
          "Use the actual device and user population. Include additional devices, unsupported systems, deployment effort and work retained by IT. Ask whether license costs, investigation and routine reporting are included. Clarify the fees for separately scoped recovery or specialist work.",
          "For an internal arrangement, estimate the recurring work without assuming a guaranteed labor saving. Identify who maintains enrollment, policies, investigations and evidence. If those people already perform these duties, check whether the proposed change would replace work or add an overlapping process.",
          "Ask how the managed service handles a change in device counts or business requirements, then compare the service order with your inventory and intended response authority. A low total may exclude an important population or leave an essential duty with nobody assigned to it."
        ]
      },
      {
        "h": "Plan a supported transition",
        "ps": [
          "Coordinate installation, coexistence and removal with existing IT and the product vendors' current guidance. Avoid an unsupported period with conflicting products or an unnecessary gap in protection. Use a representative pilot before expanding to the eligible population.",
          "Preserve the reporting and incident records the firm needs from the old service. Agree on who removes prior access, who validates the new state and who supports employees during the move. Cancellation and technical handover should be coordinated so the firm knows which service is active at each stage.",
          "After transition, keep a dated acceptance record of the device population, policies, exclusions and escalation contacts. Use it to check what was deployed and assigned against the service agreement's purchased scope."
        ]
      },
      {
        "h": "Choose around the missing responsibility",
        "ps": [
          "If existing IT operates the platform effectively and supplies the required coverage, evidence and response, the firm may need a narrower improvement rather than a wholesale replacement. If nobody owns investigation or urgent containment, address that duty directly. The product name alone cannot settle the choice.",
          "Leadership should leave the evaluation knowing which devices are covered, which service investigates, what action it can take and who restores business use. Checking those commitments gives the firm a stronger basis for deciding than a claim that a familiar antivirus brand is always sufficient or inherently inadequate."
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
    "intro": "A closing or settlement can bring a large transfer and a hard deadline into the same email thread. An attacker who compromises the thread may insert a different account number before the transfer. Calling a trusted number gives the firm a way to verify the actual instruction outside that conversation.",
    "sections": [
      {
        "h": "Why the email can look completely legitimate",
        "ps": [
          "The FBI describes business email compromise as a request appearing to come from a known source. In a legal transaction, a criminal may wait until payment is expected, then introduce a new account number or beneficiary. Deadline pressure can make that change easier to accept unless the firm has a verification step outside the thread.",
          "Grammar, logos, signatures, and reply history are weak evidence. A message sent from a compromised real mailbox may pass normal email-authentication checks. The control therefore cannot depend on a staff member noticing a visual clue that may not exist."
        ]
      },
      {
        "h": "Write the payment rule before the matter becomes urgent",
        "ps": [
          "At intake or the start of the payment process, record a known-good phone number for every party authorized to give or change instructions. Store it in the matter file or another controlled record. Do not wait for a change request to decide which number is trustworthy.",
          "Name who receives instructions, performs the callback, approves release and resolves exceptions. Set a dual-approval threshold using the firm's transactions and insurer or client requirements. Make clear that urgency, seniority and a familiar voice do not waive verification."
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
          "Rehearse an authorized simulation with cases that create pressure: a partner asks to skip verification, the usual contact is unavailable or a change arrives near cutoff. Check whether staff can follow the payment process in those circumstances. Spotting a fake email is only part of the exercise."
        ]
      },
      {
        "h": "What email controls can and cannot do",
        "ps": [
          {
            "text": "SPF, DKIM, and DMARC can make unauthorized use of the firm's exact domain harder. Managed filtering, threat protection, reporting, and triage can reduce the malicious messages that reach staff. These controls cannot make a payment change trustworthy, and they do not stop every request sent from a compromised real account or a convincing lookalike domain.",
            "links": [
              {
                "phrase": "Managed filtering",
                "to": "/helm-core"
              }
            ]
          },
          "Use technical controls to reduce exposure and the callback to authorize the payment. Keeping those jobs separate prevents the firm from treating an email-security pass as approval of a financial instruction."
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
          "Map who receives instructions, verifies them and releases funds across the firm's matters. Lawyers, assistants, accounting staff, clients and closing parties may each see only part of the transaction. Distinguish authority to change instructions from authority to release money so one confirmation does not stand in for both.",
          "At intake, keep approved contacts and the verification route in a controlled record beyond the email thread. Explain to clients how the firm handles instructions and changes. A changed instruction then has a defined verification step even when the matter is close to its deadline.",
          "On the callback, confirm that the person reached is authorized and read back the details needed to approve the actual transfer. Asking only whether they sent an email leaves the instruction itself uncertain. Use the agreed record to verify the beneficiary and payment details."
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
          "Track how many instruction changes were independently verified, how many exceptions occurred and which releases lacked approval records. Those measures show whether the procedure is followed. They cannot count prevented attacks when the firm does not know which unverified requests would have been fraudulent."
        ]
      },
      {
        "h": "Record a verification trail without spreading sensitive details",
        "ps": [
          "Limit access to bank details and verification records to the people who need them. The audit trail can reference the controlled instruction rather than copying full account information into every status email. Follow the firm's records and confidentiality requirements for storage. This article supplies an operating pattern, not a determination of trust-account rules for a jurisdiction.",
          "Connect the approval record to the instruction actually executed. A later account-number change needs new verification; approval of the earlier account does not transfer to it. The same applies across matters: a callback for a prior matter cannot approve changed instructions in this one."
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
          "Establish an alternate verification route before a payment deadline. If the usual contact is unavailable, use that route or delay release until authorized verification is complete. Staff should not have to find a trustworthy number in the urgent request or a link it supplies.",
          "A senior partner may ask to skip the step for an important client. Decide who can approve an exception and what independent evidence is required. An exception should be a recorded business decision, not an undocumented shortcut. Where the firm's rule prohibits bypassing verification, leadership needs to support staff who pause the transaction.",
          "Follow the independently established process even when a voice or video call sounds familiar. For an unusual payment or beneficiary change, the firm needs an authorized person and verified instruction through the approved route. Staff should not have to diagnose synthetic audio to decide whether to release funds."
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
          "Use the incident plan to assign work in parallel. The payment owner contacts the bank, authorized IT and security personnel investigate access, and leadership engages the insurer and appropriate advisers. Preserve messages, relevant logs and decisions while the facts develop; responsibility and recoverability may still be uncertain.",
          "Notify affected parties through trusted channels following the approved advice. If a compromised account is still under investigation, do not use it as the only route for sensitive instructions about the incident. Explain confirmed facts and required actions clearly. Record what was communicated and by whom."
        ]
      },
      {
        "h": "Test the protocol with a short exercise",
        "ps": [
          "Choose a harmless scenario with a last-minute beneficiary change and an unavailable primary contact. Ask staff to show the trusted record, verification route, approval and decision to pause or release. Include the payment operator so the exercise tests the full chain rather than stopping when someone spots the problem.",
          "After the exercise, correct missing records and unclear authority, such as an absent alternate contact or ambiguous approval threshold. Repeat the affected step once the fix is in place. The exercise record should show how the payment process worked, as well as who attended training."
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
      "text": "A generic Written Information Security Plan can promise safeguards your firm has not implemented while missing systems that hold client tax data. Build the plan around the practice today so its instructions match its records. The IRS says tax professionals must maintain a WISP, and FTC guidance identifies tax-preparation firms among covered financial institutions. The IRS WISP guidance and FTC Safeguards Rule guidance provide the starting requirements; your own systems and procedures supply the details.",
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
            "text": "IRS Publication 5708 offers an outline and sample material as a starting aid. The firm still needs a plan built around its own needs. Work through the template's questions and check whether each listed safeguard actually operates before putting it into your WISP.",
            "links": [
              {
                "phrase": "IRS Publication 5708",
                "to": "https://www.irs.gov/pub/irs-pdf/p5708.pdf"
              }
            ]
          },
          "Match the WISP to the firm's size, complexity and the sensitivity of its customer information. A five-person tax practice can use a simpler process than a national firm, but both need an accurate description of the safeguards they operate."
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
          "Describe how the firm checks account access, device coverage, staff training and backup restoration, as relevant to its safeguards. Include phishing reporting and an annual tabletop where those are part of the program. For a suspected breach, name the insurer, legal contacts and technology providers in the response path. The appropriate adviser should determine IRS, FTC, state and other reporting duties from the event's facts."
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
          "Ask the responsible adviser to confirm requirements for the firm's actual activities and information. Tax preparation, bookkeeping and advisory work can raise different applicability questions. Identify seasonal services and work handled by outside providers too, so the plan's legal scope follows the practice it describes.",
          "The FTC guidance also discusses limited exemptions from certain provisions for institutions maintaining customer information concerning fewer than 5,000 consumers. That is a specific applicability question, not a general exemption from maintaining a security program. Ask the adviser to identify the provisions relevant to your firm and record the determination. Do not infer an exemption from the number of employees.",
          "Keep requirements separate from the firm's additional operating practices. A quarterly meeting or a particular product may be useful without being a universal legal mandate. Label the source of each material requirement so future reviewers can distinguish law, client terms, insurer questions and a management decision."
        ]
      },
      {
        "h": "Build a map of client information",
        "ps": [
          "Trace a representative engagement through intake, document exchange, preparation, review, filing, storage and disposition. Identify the people, systems and providers involved, including paper and temporary files. Map intake files, working papers and filing records so the review accounts for information held at each stage.",
          "For each location, name the business owner and technical administrator. Record the approved users and the purpose of access. Separate the authoritative record from working copies, email attachments and downloads. A clear map makes it easier to review both security and retention without assuming that deleting one copy disposes of all copies.",
          "Review provisioning and departures for seasonal and remote staff. A temporary employee may use a different device or receive access shortly before a deadline. Confirm how the approved safeguards apply to that arrangement and describe it in the WISP, rather than relying on permanent-staff procedures that do not cover the busy period."
        ]
      },
      {
        "h": "Connect a risk to a decision and evidence",
        "ps": [
          "Use these operating questions as examples when assessing the firm's circumstances. Identify which exposure each safeguard addresses and which workflows still need work. Buying a security stack cannot establish that every risk is low.",
          "Record the current decision for each finding. It may require corrective work, further investigation or an approved temporary decision. State the action, owner and verification method. If the implementation is planned, describe it as planned. The WISP should not present a future safeguard as already operating."
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
          "Keep the training population and completion records, including new and seasonal staff where relevant. A signed acknowledgment helps show that instruction was given. Technical safeguards still need their own operating evidence, and the acknowledgment cannot establish how every employee will respond under pressure."
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
          "Record the decisions tested and the information staff could not find. If a backup contact lacks authority or the bank number is unavailable, assign the correction. The exercise identifies those gaps so the firm can address them; attendance alone cannot establish readiness.",
          "Follow up on the corrections and retain the revised contact or procedure. Review related parts of the WISP so the document and operating process agree. A completed change needs evidence appropriate to its purpose."
        ]
      },
      {
        "h": "Approve and maintain a supported version",
        "ps": [
          "Give the final plan a version, owner, approval date and next review decision. Preserve prior versions under the firm's records procedure. A future reviewer should be able to see what changed and why, without confusing a current statement with one made in a prior period.",
          "Update the plan using risk findings and test results, both at the planned review cadence and after material staff, platform, vendor or workflow changes. Keep procedures the firm can operate and evidence it can maintain. Generic policies that nobody owns can expand the document while leaving the underlying work unresolved."
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
      "text": "A known vulnerability has been identified, though an affected system may still need a patch. A zero-day commonly means a weakness unknown to its vendor or exploited before a fix is available; usage varies. Check the advisory's repair status before deciding what to do. The labels describe what is known and whether a repair is available, not how damaging an attack will be. Refer to the CISA vulnerability-reporting definitions when discussing a report with your IT provider.",
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
            "text": "Microsoft's Exchange report from March 2021 described HAFNIUM's exploitation of on-premises Exchange Server vulnerabilities. Microsoft also released security updates. The exact product and deployment matter: an advisory about one environment should not be treated as proof that every similarly named cloud service is affected.",
            "links": [
              {
                "phrase": "Microsoft's Exchange report",
                "to": "https://www.microsoft.com/en-us/security/blog/2021/03/02/hafnium-targeting-exchange-servers/"
              }
            ]
          },
          "Keep an inventory of internet-facing systems and their owners with IT. When an advisory arrives, identify affected versions and document the action recommended by the vendor. If there is no patch, evaluate its supported mitigation. Leadership needs to approve any interruption caused by restricting access or disabling a feature.",
          "A temporary filtering rule, sometimes described as virtual patching, only addresses the traffic or exploit path it covers. Ask the responsible specialist what it blocks, what remains exposed and when it should be removed. Do not assume it repairs the software."
        ]
      },
      {
        "h": "Separate prevention from incident response",
        "ps": [
          "Patching closes an identified weakness. It does not prove that a system was never compromised. If the advisory or your monitoring indicates possible exploitation, follow the incident plan and involve the authorized responder before destroying logs or rebuilding affected systems.",
          {
            "text": "Use threat information to help prioritize work. CISA's Known Exploited Vulnerabilities catalog identifies vulnerabilities with observed exploitation. Consult the CISA KEV catalog to help IT prioritize applicable findings; absence from it does not establish safety.",
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
          "Check the advisory’s current facts before deciding how to respond. Security reporting uses zero-day both for exploitation before a fix is available and for a flaw previously unknown to the vendor. Whichever usage a headline adopts, your technical owner needs the affected versions, fixes, mitigations and reported exploitation relevant to your system.",
          "A known flaw can still create urgent risk when the affected system is exposed and unpatched. Conversely, a widely reported flaw may not apply to the product version or deployment your firm uses. Avoid asking employees to decide applicability from a headline. The authorized technical owner should establish the exact product and configuration.",
          "Give the business owner the facts needed for a decision: whether the firm is affected, what work is underway and what interruption may be required. If applicability is still uncertain, say so and assign the check. Waiting for every detail can leave leadership unaware that its approval is needed."
        ]
      },
      {
        "h": "Read an advisory in a consistent order",
        "ps": [
          "First identify the product and supported versions. Then check prerequisites for exploitation, the systems or features involved and the vendor's prescribed action. Look for updated revisions to the advisory. Early guidance may change as the vendor provides patches, clarifies affected versions or improves detection instructions.",
          "Map the affected product to the inventory, including managed appliances, hosted applications and services operated by others. For a supplier-operated system, use the approved account contact to request confirmation of applicability and action. A general security assurance cannot tell you whether this particular service is affected.",
          "Finally, determine whether the advisory calls for investigation as well as updating. A patch can prevent a particular future exploit while leaving consequences of an earlier compromise unresolved. Keep the version update, exposure reduction and incident investigation as separate entries when the facts require them. Each should have its own completion evidence."
        ]
      },
      {
        "h": "Prioritize using more than a numerical score",
        "ps": [
          "Use the factors below alongside the technical severity score. The score describes aspects of the weakness; your inventory and business owners establish how the product is deployed and which process depends on it. Record that reasoning so another reviewer can understand the chosen priority.",
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
          "Assign someone to watch for the permanent fix and revisit the temporary measure when it arrives. Decide whether the measure should stay, change or be removed, then test business behavior and retain the final configuration record. Without that follow-up, a temporary mitigation may remain indefinitely unnoticed.",
          "If essential work prevents use of the mitigation, give leadership concrete options for the affected service. These may include an outage, restricted access, a supported replacement or another vendor-approved approach. Record the selected option, consequence and review date so the decision goes beyond a general acceptance of cyber risk."
        ]
      },
      {
        "h": "Treat patching as maintained business infrastructure",
        "ps": [
          {
            "text": "NIST frames enterprise patching as preventive maintenance, including identification, prioritization, installation and verification. For a small firm, a workable process begins with an owner and a path to an approved change. Use that process for emergency advisories with the required urgency. The inventory should already be known when an advisory arrives.",
            "links": [
              {
                "phrase": "preventive maintenance",
                "to": "https://csrc.nist.gov/pubs/sp/800/40/r4/final"
              }
            ]
          },
          "Agree with IT on application tests, interruption scheduling and failed-installation handling. Ordinary updates can use routine maintenance windows; an exposed system under active exploitation may need an urgent decision outside that schedule. Explain the business consequences of both acting and delaying.",
          "Keep unsupported systems visible. A product outside its support period may not receive the required repair. Repeatedly documenting that no patch exists does not resolve the underlying dependency. Put replacement or retirement on the business roadmap, with an owner and a date."
        ]
      },
      {
        "h": "Verify both the change and the remaining situation",
        "ps": [
          "After the change, have the technical owner verify the installed version or other relevant configuration evidence. Record failed updates and systems that missed the change. A completed deployment command shows that the command ran, not necessarily that the affected system reached the intended state.",
          "If suspected exploitation prompted an incident response, follow the responder's guidance about logs, evidence and recovery. Do not close the incident merely because the current version is patched. The team may still need to assess access, affected information and persistence, based on the product and observed activity.",
          "Give leadership a concise update separating confirmed facts from open questions. State the affected population, completed actions, exceptions and next decision. Avoid promises that the patch makes the entire environment safe. It addresses a specified weakness under the conditions documented by the vendor."
        ]
      },
      {
        "h": "Make threat intelligence useful to a small team",
        "ps": [
          "Assign an advisory reviewer for products the firm uses, starting with important internet-facing systems and business platforms. Connect relevant notices to the inventory and change process. An unrestricted headline feed may overwhelm a small team without helping it identify which systems need attention.",
          "Keep trusted contacts for outside operators current. When one provider manages a remote-access appliance and another monitors laptops, an alert may require a handoff between them. Establish who patches the affected asset and retain the supplier’s service response; the team seeing the alert does not automatically own that work."
        ]
      }
    ],
    "updated": "2026-10-07"
  }
];
