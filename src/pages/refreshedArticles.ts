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
    "intro": "A client security questionnaire can leave a partner gathering records, checking answers and following up on gaps even when the firm's security tools are in place. Choosing between Core and Command means deciding who will keep that work moving. If your firm already has someone who can manage those decisions and reviews, Core's defined protection stack may fit; Command adds bounded program leadership when that coordination needs help.",
    "lead": [
      {
        "text": "For a New Jersey accounting or tax firm, start with how client information moves through the practice, how payment requests are handled and which systems support deadline-sensitive work. That gives the service comparison something concrete to work from. For a detailed review of the written security plan, use the WISP checklist.",
        "links": [
          {
            "phrase": "WISP checklist",
            "to": "/resources/wisp-checklist-accounting-firms/"
          }
        ]
      }
    ],
    "takeaway": "Core supplies the defined protection stack while your firm owns recurring risk decisions, evidence and coordination. Command adds program leadership and bounded evidence and coordination work. If those tasks keep stalling, review Command's scope against the work your firm needs help completing.",
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
          "Once the obligations are clear, give one person at the firm responsibility for the program and agree which records IT will supply. The written plan should describe what staff and IT actually do, including work still outstanding. A vendor's description of its tools cannot explain who at your firm approves an exception or follows up on an unfinished task."
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
            "text": "Helm Command includes the covered Core stack plus a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance responses, quarterly leadership reviews, an annual tabletop and IT coordination. Pricing starts at $10,000/month for a qualified 75 to 250-person organization. Final quotes depend on covered users and agreed scope.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command/"
              }
            ]
          },
          "Command gives recurring decisions and evidence work a place in the service, but responsibilities remain with the firm and its IT provider. The firm approves final attestations and business decisions; the responsible IT owner implements assigned administrative work. Command does not guarantee compliance, insurer approval or completion of every recommended fix."
        ]
      },
      {
        "h": "Review one workflow before choosing",
        "ps": [
          {
            "text": "A service list is easier to judge against a task your firm actually has to complete. Pick a staff departure, a payment-change request or recovery of a deleted client file. For each step, ask who does the work and what dated record shows it was completed. The offboarding checklist and backup-testing guide cover those procedures in more detail.",
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
          "The systems behind that workflow matter as much as the staff involved. List the tax and accounting applications, document portals, shared storage and devices people use, including temporary workers and outside specialists. A protection report for the primary email tenant may look complete while an independent client portal remains outside its coverage.",
          "Once those systems are listed, name the business owner and technical administrator for each important workflow. The business owner can explain how staff use the information and what an interruption would affect. IT can identify the access, configuration and recovery dependencies. Use their explanations to decide which parts of the proposed security service apply.",
          "Review one client-document journey from receipt through retention or disposal. Identify approved transfer methods, where working copies are created and who can access them. Use fictional records for any demonstration. The exercise should expose an unclear handoff without spreading actual taxpayer or client data.",
          "You may finish this review with unanswered questions. If nobody can confirm who administers a specialist application, assign that question before claiming it is protected. Those unknowns affect service fit: the proposed arrangement needs supported platforms and people who can carry out their responsibilities, whatever the employee count."
        ]
      },
      {
        "h": "Separate a written plan from operating evidence",
        "ps": [
          "The written plan says which safeguards the firm intends to use and who is responsible for them. To answer a customer's question about whether those safeguards are operating, you also need evidence for the people, systems and period covered by the answer. For staff departures, that means an assigned owner and records showing how completed departures were handled.",
          "Suppose a questionnaire asks whether all devices are protected. Check the device list against deployment records before answering. If it asks whether backups are tested, identify the workload, test date and result. A subscription receipt confirms a purchase, and an annual policy approval confirms approval of the policy. You still need records that support the claim about what is operating.",
          "Keep exceptions visible. An unsupported device, a delayed access change or a recovery test awaiting IT needs an owner and next action. Do not remove the exception from a customer response merely because the firm intends to correct it. Future work belongs in the roadmap until verified.",
          "Use the detailed WISP resource with the responsible adviser for rule-specific decisions; this service comparison cannot determine every firm's legal obligations. For the buying decision, identify who will maintain the program record and check the evidence, and how unresolved gaps will reach the person authorized to decide."
        ]
      },
      {
        "h": "Assess whether internal ownership is sustainable",
        "ps": [
          "A partner can own the security program without personally administering every system. The role needs a routine for receiving information, making decisions and following up with IT. Ask how much time the partner can allocate and who covers the role during an absence.",
          "For a hypothetical 30-person practice, internal ownership could work if IT supplies current records, a manager maintains the exception list and partners resolve spending decisions. Core would supply the defined protection layer. Headcount alone does not determine the correct service.",
          "Then consider filing deadlines, when the same people may have less time for this work. If questionnaires keep getting postponed, find out where they stall. Gathering missing evidence is a different task from finding time for a partner to review it or agreeing who can approve the response. More tools alone cannot resolve those delays; someone still needs to take responsibility for the evidence and its review.",
          "A larger firm needs the same review. Some larger organizations have a capable internal program function; others have recurring gaps across several teams. Evaluate that work and complexity against the qualified fit. The user-count ranges help frame the discussion, but they do not automatically determine the tier."
        ]
      },
      {
        "h": "Price the two models over the same scope",
        "ps": [
          "For a fictional firm with 30 covered users, the published Core rate works out to $3,750 per month before separately scoped work or applicable charges. A smaller calculation below $2,500 would still be subject to the published minimum. Neither example is a quote; supported platforms, coverage and written terms need confirmation.",
          "The two prices also cover different responsibilities. Subtracting Core's price from Command's price will not isolate an advisory fee: Command is scoped after a review of fit and complexity. Compare what each proposal leaves your firm responsible for, and check that Command's service order explains the covered population and the limits on coordination, evidence work and questionnaires.",
          "Put retained IT charges, transition work, licensing changes and specialist exclusions in the same worksheet. Confirm contract duration, renewal terms and price changes using the proposal. Do not assume that a monthly figure means the service can be canceled month to month.",
          "Less time spent chasing evidence may free partner or IT capacity, which can support the business case. It becomes a cash saving only if the cost actually changes. If you quantify the time, use the firm's own records and describe it as capacity where that is what the firm gains."
        ]
      },
      {
        "h": "Plan changes around the accounting calendar",
        "ps": [
          "Ask IT which periods make disruptive changes difficult and which controls can be improved safely beforehand. Use that calendar to sequence the work. Urgent findings may still need prompt attention, so give each proposed delay a reason instead of postponing every task until the quiet season.",
          "For an access change, check the required license, enrollment and recovery procedure before rollout. For a backup change, confirm workload coverage and arrange an authorized restore check. Name who can approve the implementation window and what evidence will show completion.",
          "Onboarding is the point to check these arrangements against the service records. Reconcile eligible users and devices, document unsupported applications and any separate protection, and establish a trusted reporting route. The escalation contact also needs to be able to act when the principal partner is unavailable.",
          "Schedule an early review of onboarding exceptions. Check actual deployment, access to reports and the handoff to existing IT before accepting coverage as complete. Keep the responsibility map available as staff or providers change; the signed contract alone cannot show whether those handoffs worked."
        ]
      },
      {
        "h": "Use a specific unfinished task to make the decision",
        "ps": [
          "Bring one unfinished task to the fit discussion: a redacted questionnaire, a pending restore test or an unresolved access review. Work through who would do each step under Core and under Command. That should make clear where your firm's owner or IT provider must act, and where the task requires separately scoped work.",
          "You can check the proposed reporting in the same way. Ask for a fictional monthly report and, for Command, a sample risk record and leadership agenda. Can partners use them to understand an exception and approve the next action? If that is unclear in the samples, ask how the service will support those decisions.",
          "Choose the arrangement your firm can sustain, including the responsibilities it retains. Set the next review date, name the person accountable for it and agree what evidence they will need. Changes in client requirements, staff structure or supported systems are reasons to revisit the choice.",
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
    "intro": "Giving an AI tool access to business files requires approval for the documents it will use and the people who will receive its work. Even a useful task can involve confidential information or access your firm has not approved. Before enabling the connection, review its users and any services that will receive the data. Buying a business subscription does not settle the permissions or confidentiality questions.",
    "takeaway": "Review access, confidentiality, storage, model-training terms, and connected services separately. Start with approved low-sensitivity material and require a person to check the output before it is used.",
    "sections": [
      {
        "h": "Define the documents and permitted use",
        "ps": [
          "The task determines what access you need. Identify who will use the output, which documents the task requires and who owns them. Then check those documents for client confidentiality, personal information and contractual restrictions before uploading anything. The information owner should approve the processing and sharing involved.",
          "A law firm could test an internal checklist using approved office procedures without including matter files. For an insurance agency, synthetic correspondence could serve as test material instead of policyholder records. Both are ways to try a task without starting with confidential client files. A quick redaction needs care: removing a client’s name may leave identifying facts elsewhere, so it does not automatically make the document approved for use."
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
          "Your IT provider should review the source permissions, including group membership, shared links and guest access. For the test, use the smallest approved document set that can answer the question. Then examine what the connection itself requests. Reading may be only part of its access; it may also be able to create, edit, send or delete information.",
          "Write down who approves access and who removes it when the test ends or a staff member leaves. Test with a normal staff account, not only an administrator’s account."
        ]
      },
      {
        "h": "Separate training terms from retention",
        "ps": [
          {
            "text": "Microsoft states that prompts, responses, and information accessed through Microsoft Graph are not used to train foundation models. It also says Copilot stores interaction data, including prompts and responses, in the same documentation. Those statements answer different questions: information can be stored without being used for model training.",
            "links": [
              {
                "phrase": "the same documentation",
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
          "That leaves several things to confirm for the exact product and license you are considering: where information is stored and processed, who can retrieve it, how long it remains and how deletion works. Record the answers separately for files, prompts, outputs and logs because they may differ. Ask IT to verify that the subscription includes the controls you need and that those controls are configured."
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
          "Access settings cannot establish whether an answer is correct. A summary may drop an exception, misstate a deadline or combine two clients’ details, making it unusable. Assign someone to compare the output with its source documents, and keep drafts internal until that review is complete."
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
          "A review of the source folder covers only part of the task. Follow the documents from their repository through the user, AI platform and connected services to the recipient of the finished output. Note where inputs, responses and interaction logs may remain. The summary creates another copy to protect, even when the original folder has the right permissions.",
          "How the tool receives the documents matters here. A manual upload supplies selected material. An ongoing connection may make more documents discoverable as the repository changes. Connector behavior varies, so check whether the exact product indexes content, follows updates or requests access beyond the test folder.",
          "Review actions separately from reading. A connection able to edit records, send messages or delete files has a different consequence from one that retrieves information for a draft. Leave actions outside the approved purpose disabled where the platform allows it. If the requested permissions cannot be limited appropriately, reconsider the connection.",
          "Include other recipients in the review. An approved platform does not automatically approve every third-party agent or integration available inside it. Record each service’s purpose and data handling before enabling it for company information."
        ]
      },
      {
        "h": "Check permissions as an ordinary user",
        "ps": [
          "After IT reviews the permissions, test what the intended users can actually retrieve. Use accounts that represent those users and compare what they can find through normal access with what they can find through the AI workflow. A successful test with an administrator’s account does not establish what an ordinary employee can retrieve.",
          "Check inherited permissions, group membership, broadly shared links and guests. If any of those grant unnecessary access, correct the source permissions. A prompt telling the tool not to reveal a file cannot replace a permission boundary that prevents the user from accessing it.",
          "Use approved dummy documents with clearly different access rules for this test. A permitted user should be able to retrieve the intended material; an account without permission should not. Keeping the test controlled lets you check access isolation without exposing real confidential files.",
          "Record the account, expected result and observed result. If the result is unexpected, stop the connection and investigate with IT. Do not broaden permissions to make the demonstration succeed before the document owner has approved that change."
        ]
      },
      {
        "h": "Decide which source is authoritative",
        "ps": [
          "Even with access working correctly, the tool can summarize an obsolete procedure accurately and give someone the wrong instruction. Before connecting the folder, identify which procedures are current, which have been superseded and which are drafts. Include owners and review dates where appropriate so the reviewer can determine which source the answer should rely on.",
          "Keep source references where the platform supports them, but have the reviewer read the passages they point to. Does the passage support the claim? Is there a surrounding exception that changes it? A document link helps locate the evidence; it cannot perform that review.",
          "For a policy summary, define which document controls when sources conflict. Resolve that conflict with the responsible owner before using the generated answer. Do not ask the model to decide which legal obligation or company rule should prevail based only on its preferred wording.",
          "Also consider what belongs in the output. A summary may expose sensitive information to a wider audience than the original document. Its destination needs an access review too, particularly if staff intend to paste it into email, chat or a shared presentation."
        ]
      },
      {
        "h": "Keep a usable approval record",
        "ps": [
          "Record the platform, account type, permitted data, purpose, users and reviewer. Note the configuration checked, the sources used to assess vendor terms and the date of review. Assign someone to review the approval again when the workflow or connected service changes.",
          "The approval record should distinguish four decisions: whether the firm may provide the data, whether the product supports the required controls, whether those controls are configured and whether this use has been approved. Purchasing a business subscription can address part of that review while leaving the other decisions unresolved.",
          "Refer uncertain contractual or professional-confidentiality questions to the responsible adviser. An operational reviewer can identify client records and restrictions, but should not decide that an enterprise license permits their disclosure. Record the unresolved question until the appropriate owner answers it.",
          "Define stop conditions in advance. Unexpected access, an unapproved recipient, uncertain retention or output that exposes information to the wrong audience should trigger a review. Staff need a named contact and a practical way to stop using the workflow while that happens."
        ]
      },
      {
        "h": "Plan removal before adding access",
        "ps": [
          "Before the test starts, write down how the organization will disconnect the source, revoke the integration and remove unnecessary account permissions when it ends. Also confirm what happens to indexed or uploaded content under the platform’s documented controls. Revoking a connection answers an access question; it does not by itself establish that retained copies have been deleted.",
          "Check offboarding as well. Removing an employee from a source folder may not address information they previously copied into prompts or outputs. Your retention, account and incident processes should account for those records without promising that every copy can be instantly erased.",
          "Use approved dummy material to test removal. IT should verify that the grant has been revoked and that the account can no longer retrieve the source. Record any retention dependency separately; a disappearing chat entry or button is not evidence that all stored copies were deleted.",
          "The amount of documentation should fit the task. A narrow test using synthetic data needs less than an ongoing connection to a business repository. Both still require the firm to understand where information moves and who is responsible before it grants access."
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
    "intro": "A well-written email from an apparently familiar sender can still ask for a password, confidential client information or an unauthorized payment. Before following its instructions, staff need an approved way to verify the requested action. Spelling and grammar offer clues, but even a message that reads well needs that check.",
    "sections": [
      {
        "h": "Start with what the message asks you to do",
        "ps": [
          "Start by identifying the action: does the message ask for a password, an authentication approval, an upload, a payment change or access to a new application? Each needs a different check. Compare it with the firm's normal procedure, including whether the sender has authority to request it.",
          "Suppose an invoice arrives when you expect it, but the email thread now includes different banking details. The expected invoice does not verify the change; check that separately. A familiar client asking for a file creates a similar decision if they name a new upload destination. Knowing the client does not authorize that destination. Accurate context can make either instruction convincing without making it legitimate.",
          "Employees need a way to answer those questions. Was the action expected? Where is the approved record, and which trusted contact can confirm it? Reporting a suspicious request should not depend on inferring the sender's intent from their writing or deciding whether an AI model produced it."
        ]
      },
      {
        "h": "Keep useful clues in their proper place",
        "ps": [
          "Unexpected urgency or secrecy can be a reason to pause. A new destination or pressure to bypass approval also warrants verification. An unusual attachment, changed domain or request for information unrelated to the task deserves a check too. None of these clues identifies every malicious message.",
          "A compromised real account may send fraudulent instructions with no obvious warning signs, while a legitimate client may write hurriedly or make a spelling mistake. Applying the same verification rule in both cases helps staff avoid treating writing quality as permission to act. Training should reinforce that check.",
          "On a phone, a display name or shortened link can make a mismatch harder to notice. Use an approved application or independently saved address for the task where possible. A link's appearance alone should not become authorization to enter credentials or upload confidential files."
        ]
      },
      {
        "h": "Verify through an established route",
        "ps": [
          "For an account or login issue, open the approved application directly or use the organization's known support route. An email saying that IT needs your password to check the account is no reason to send it. The administrator should define how legitimate support requests reach staff; that gives employees a procedure against which to check an unusual message.",
          {
            "text": "For a payment instruction, call a trusted number established outside the request and confirm the relevant details with an authorized person. Follow the documented approval rule before release. The invoice-fraud guide explains that process and the records connecting verification to the executed payment.",
            "links": [
              {
                "phrase": "invoice-fraud guide",
                "to": "/resources/invoice-fraud-red-flags/"
              }
            ]
          },
          "A sensitive document request needs its own check: who will receive the file, why do they need it, and is the exchange approved? Even a genuine outside party can propose a route the firm has not approved. Give staff someone who can resolve that decision and a usable alternative when the proposed method is unsuitable."
        ]
      },
      {
        "h": "Distinguish authentication from trust",
        "ps": [
          "A message can pass authentication and still contain a fraudulent instruction, including when someone has compromised a legitimate account. SPF, DKIM and DMARC help receivers evaluate domain authentication and policy according to their configuration. Those checks cannot establish that the contents are honest.",
          {
            "text": "The DMARC resource explains those checks and their limits. Employees still need to verify a payment change after a message passes authentication. Authentication, account protection and transaction approval each perform a different job.",
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
          "Ask IT which authentication methods the relevant accounts allow and how the firm enforces them. Stronger methods can reduce particular attack paths, but staff also need a workable enrollment and recovery plan. The review should include administrative, vendor and independent application accounts where they are relevant to the firm's environment.",
          {
            "text": "The MFA comparison explains what different methods can do. To understand actual coverage, look beyond whether the firm says it has MFA: which policy applies to which accounts, what exceptions exist, and are there alternate access paths?",
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
          "Staff should be able to report a suspicious message or request before they know what is wrong with it. Requiring a diagnosis can discourage useful early reports. Give them one clear route, explain what information to include and tell them what to do while waiting.",
          "Avoid forwarding live suspicious attachments across the firm for opinions. Use the platform's approved reporting function or the route established by IT and the security provider. Preserve the original information in a way the authorized team can use without unnecessary redistribution.",
          "Use feedback from reports to improve the process. Even a legitimate message may reveal instructions that confuse staff or are hard to follow. If someone reports after clicking, gather the facts promptly: the authorized team can still use them to establish what happened and take corrective action. The employee does not need to diagnose the threat first."
        ]
      },
      {
        "h": "Train around the business decision",
        "ps": [
          "Training should let staff practice decisions they face at work, using harmless materials. For a tax practice, that might mean a document exchange. A contractor could practice checking a supplier change, while a law firm could use matter-related payment instructions. Measure whether staff follow the intended verification and reporting steps.",
          "A simulation score needs context to help improve the process. Record the scenario, who took part, how they responded and what needs correction. The score alone cannot describe the firm's overall security or establish that future phishing will be stopped."
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
          "When a convincing request gets through, ask what employees needed in order to check it. They may have lacked a trusted contact record, a clear approver or a usable document exchange. Repairing that gap gives the next employee a way to verify the request. A warning poster cannot supply a missing contact or decision-maker.",
          "Review the handoff with IT and the security provider: which service covers the report, what information the team needs and how staff reach it urgently. Email filtering does not automatically include investigation of every employee report or account recovery. Assign those duties in the written scope.",
          "Staff instructions also need to keep pace with technical changes. If IT introduces a new sign-in process without explaining it, the rollout can resemble the unusual messages employees have been trained to question. Tell them how legitimate prompts appear and where to obtain help."
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
          "'Someone clicked something' gives the authorized team little to investigate. A report should identify the message time, apparent sender and requested action, then describe what the employee did. Opening a link, entering credentials, approving a prompt, uploading information and releasing money call for different investigations; recording the action helps the team respond to the event.",
          "Use approved platform records and the reporting method as evidence. Never ask an employee for their password or authentication code. If details are missing, record what is known and who will establish the next fact. Keep client content and investigation records in the approved restricted location. If account impact is uncertain, have the authorized team investigate it."
        ]
      }
    ],
    "takeaway": "Before acting on a message, verify its request through an approved route. Its writing and context can help you decide what to check. Account protection, easy reporting and training that tests the actual business decision support that process.",
    "lead": [
      {
        "text": "The FBI's December 2024 AI-fraud advisory explains that generated text can make fraudulent messages more convincing and reduce language errors. That gives staff less reason to rely on language errors alone. Ordinary phishing indicators remain useful, and a polished message is not evidence that someone used AI. Combine those clues with independent verification and a clear reporting process.",
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
    "intro": "A successful backup job tells you that a copy was made. If an insurance application asks about restore testing, you need to establish whether the business can use that copy. Restoring from that copy lets you check whether the information is there, whether authorized staff can recover it and how long that takes. The test may reveal missing information, a dependency on an unavailable administrator or a recovery time the business cannot tolerate.",
    "sections": [
      {
        "h": "Start with the application wording",
        "ps": [
          "Before asking IT for a report, check what the insurer wants to know. Does the question cover all critical information, a named system or a particular testing period? Does it ask about offline storage, immutability, encryption or separate administrative access? These are different properties. If the scope is unclear, ask the broker to clarify it so the evidence answers the question you have.",
          "Your existing IT provider or backup owner can identify the configuration behind each answer. Record which systems it covers, when it was checked and where the supporting evidence is kept. A service that covers cloud email and documents only supports answers about that coverage. Check separately whether it covers servers, applications or devices before including them in the response.",
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
          "The protection labels help explain how a copy is safeguarded. An offline copy is not continuously reachable through the ordinary network connection. Immutability restricts changes or deletion for a configured period under the system’s supported controls; encryption protects data through a different mechanism. You still need a restore test to find out whether the business can use the required information.",
          "To understand that protection, ask who can change the settings, delete copies or shorten retention. Which credentials control the backup system? Could someone who compromises ordinary production access also affect the recovery copies? The feature name on a proposal cannot answer those questions; the actual implementation can.",
          {
            "text": "The CISA StopRansomware guide recommends offline, encrypted backups of critical data and regular testing of backup availability and integrity in a recovery scenario. That is useful general guidance, not a universal insurance condition.",
            "links": [
              {
                "phrase": "CISA StopRansomware guide",
                "to": "https://www.cisa.gov/stopransomware/ransomware-guide"
              }
            ]
          },
          "This is why the test needs to cover more than the stored copy. An immutable copy can contain incomplete or unusable information, and an offline copy can be out of date. A cloud service may also depend on account access that staff cannot recover during a disruption. Include those dependencies when you test."
        ]
      },
      {
        "h": "Define what the business needs back",
        "ps": [
          "Decide what work needs to resume before choosing what to restore. Client delivery, payroll, billing and access to working documents may each depend on different systems and records. Ask the process owners to identify those dependencies and the order in which they need to return.",
          {
            "text": "That gives you a basis for two planning targets. The recovery time objective is how long the process can wait for recovery; the recovery point objective describes how much information loss is acceptable. A target tells you what the business needs, while a test measures what the systems can deliver. NIST’s contingency planning guide explains how business impact and priorities inform recovery planning.",
            "links": [
              {
                "phrase": "contingency planning guide",
                "to": "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"
              }
            ]
          },
          "For example, a firm might tolerate a brief interruption in an archive while needing current billing information before the next payment run. The process owners should choose recovery limits from those business consequences, then compare the limits with what the systems can deliver. This example illustrates the decision; it does not prescribe a target.",
          "If current recovery capability falls short of those limits, record the gap and assign an owner and planned action. Choosing a more ambitious target to strengthen an application answer would leave the same gap unresolved. Keep the desired outcome and the tested result distinct."
        ]
      },
      {
        "h": "Scope a restore test safely",
        "ps": [
          "Once you know what the test needs to establish, select the system or data set and the recovery point. Agree on the destination and success criteria with the relevant owners, and obtain their authorization. An isolated or otherwise approved destination should let you test without overwriting production information or exposing sensitive records to people who do not need them.",
          "Assign someone to perform the restore and a business reviewer to validate it. They answer different questions: the technical operator confirms that files or an application were recovered, while the business reviewer checks whether the result is usable for the intended work. Record both observations.",
          "Check the access and dependencies needed to perform that restore. Backup credentials, encryption keys, licenses, application software or a vendor response may all be required. Authorized staff need a documented way to obtain them. If the plan depends on an unavailable employee’s personal account, correct that dependency before relying on it.",
          "Write down the exclusions as well. Recovering one file establishes less than recovering a full system. Restoring an application in an existing environment also leaves open whether you could rebuild that environment from scratch. These limits explain what the evidence supports and what the next test needs to cover."
        ]
      },
      {
        "h": "Measure actual recovery and usability",
        "ps": [
          "Measure how long it takes from the start of recovery until the selected information is available, and then until the business reviewer accepts it. Record active effort and delays so you can explain the result. Before comparing it with the target, note any dependencies you supplied in advance. Those preparations may change how long the same recovery would take during a disruption.",
          "Next, check that the expected records are present, readable and from the chosen recovery point. For an application, agree on functional checks with its owner. A running service or a folder containing files gives you something to check; it does not establish that the application is usable.",
          "Look at permissions and destination security. A restore can recover content while applying access incorrectly. Confirm that the result is available to the intended users and protected from others. Keep any test copies under the required data-handling and retention process.",
          "Keep the failures in the record after you correct them. If the backup was missing a folder or the operator lacked required access, retain that observation alongside the corrective action and retest outcome. You can then explain what changed and answer the application from the current evidence without losing the test’s history."
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
          "Those remaining dependencies and the business priority should guide the next test. It might check authorized recovery access or restore an application data set, with a business reviewer’s handover where needed. Repeating the file restore would confirm the same narrow result again; it would leave the broader recovery questions unanswered.",
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
          "Set the test frequency from business priorities, system changes and any applicable policy or contract conditions. There is no general rule that every insurer requires quarterly tests. Even with a schedule in place, a major platform change can justify testing again before the ordinary review date.",
          "Include changes in data locations, permissions, backup configuration and recovery personnel. A test performed before a migration may not represent the current environment. Record which changes require the owner to reopen the recovery review.",
          "When reporting progress, include completed tests and the status of their corrective actions together. A calendar entry only records a plan. If a test failed, keep the result visible and assign a responsible owner until the correction has been accepted."
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
    "takeaway": "Use the actual backup configuration and restore-test record to answer the insurer’s question. A useful test starts with what the business needs to recover, includes an authorized restore and checks whether the result is usable. Keep the exceptions and corrections with the record. Coverage depends on the insurer and policy.",
    "lead": [
      "Start with the application’s exact wording and use current evidence to answer it. The form may ask separately about protection of backup copies, restore testing and recovery arrangements, because those describe different things. Requirements differ by insurer and policy. Your technical report can support an answer, but it cannot guarantee coverage or tell you that every carrier wants the same test frequency."
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
    "intro": "You can check your firm's website connection and some public configuration without access to its administration. To assess outdated software, administrator access and recovery, you need evidence from the people managing the site. HTTPS protects the connection; it tells you little about those other controls.",
    "lead": [
      "Start by identifying who owns the public website and any separate client portal. For a professional-services firm, that distinction matters because the two may have different providers, hold different data and rely on different recovery arrangements. It also tells you whom to ask when a public check leaves a question unanswered."
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
          "Once you have the public findings, ask your website or IT provider about the controls you cannot check from a browser:",
          {
            "list": [
              "Which content-management system (CMS), plugins and custom applications are in use, and who updates them?",
              "Which accounts can administer the site, and how is access protected?",
              "What information do forms collect, and where does it go?",
              "What does the backup cover, and when was a restore tested?",
              "Who investigates a suspected compromise and restores the site?"
            ],
            "ordered": true
          },
          "The provider usually needs access to systems a public scanner cannot see to answer these questions. If a customer questionnaire depends on an answer, request dated evidence for it. You should not need to share administrator credentials through a form to obtain a generic scan."
        ]
      },
      {
        "h": "Assign findings to the right provider",
        "ps": [
          "Suppose a New Jersey consulting firm receives a report showing a missing header, and its hosting provider also finds an unsupported plugin. Both findings need the website administrator's attention, but the changes require evaluation and testing. Even a copied header policy can break a working form or another legitimate feature if it does not suit the site.",
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
            "text": "The public scan and the five owner questions give you a starting point for deciding what needs attention. If the site handles sensitive information or needs a deeper authorized assessment, use the scanner comparison to consider the scope of that work.",
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
          "A form can look like part of your site while sending its submissions to another provider. Appointment tools, analytics and embedded content can also involve companies beyond the website host. List these components, who approved them and who maintains each integration, then trace where they send information. That gives you a way to ask about the handling of submissions beyond the page a visitor sees.",
          "You also need a dependable way to reach the domain and hosting accounts. Confirm who owns them, how renewal notices arrive and who can approve a change. If a former agency's account is the firm's only route to essential access, resolve ownership through the authorized provider. Sharing a password among employees does not resolve that ownership question."
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
          "Before applying a proposed header policy, have the administrator test it against the site's required features. A copied policy can block a legitimate form, image or integration. A higher scanner score is useful only if the policy fits the application and the business functions still work.",
          "For each missing-header finding, record what the control is meant to do and the proposed action. The warnings need individual review: urgency can differ, and a suggested header may not apply to every deployment. If the owner makes a material exception, ask for an explanation the business can understand."
        ]
      },
      {
        "h": "Ask for evidence behind updates and access",
        "ps": [
          "Who reviews updates for the content-management system, themes and plugins? Ask the administrator to identify that responsibility along with unsupported components and extensions the site no longer uses. Removing an unused extension can reduce ongoing maintenance, but the administrator needs to check its dependencies before changing production.",
          "Changes in employees or agencies are also a reason to review access. Each administrative account should have an owner and a reason for its privileges. Ask how the provider removes access and preserves any required records. With a shared login, it is harder to tell who made a change or handle a departure cleanly."
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
          "Then follow a submission through the rest of the workflow. Who receives it, where are copies stored, and how long does the approved process keep them? Include email notifications and records held by the form provider. Deleting a notification may leave those other copies intact, so confirm the product behavior and contractual terms with the owner.",
          "Test error and success messages with harmless information. A visitor should know whether the submission worked and what to expect next. Avoid exposing internal technical details or echoing sensitive content unnecessarily. Useful confirmation can be concise while giving the visitor a clear next step."
        ]
      },
      {
        "h": "Verify a recovery route before changing the site",
        "ps": [
          "Ask what the backup includes: application content, uploaded files, database and any necessary configuration. Determine what remains outside it, such as a third-party form service or domain account. Name the person permitted to authorize and perform a restore.",
          "The backup's coverage needs a practical check: demonstrate recovery in a non-production environment or another approved test, then check pages, forms and important integrations. Files can return successfully while a missing database or configuration still prevents the site from doing its job.",
          "Before making a change, agree on how to roll it back and when the administrator should do so. A header adjustment, update or plugin removal can affect client-facing behavior. Keep the change record and observed test result so a later failure can be traced without relying on memory."
        ]
      },
      {
        "h": "Handle suspected compromise differently from routine findings",
        "ps": [
          "If you find an unexpected administrator account, unauthorized content or a suspicious redirect, send it to the authorized owner and responder for investigation. Preserve the relevant information and follow the incident process. Simply editing away a symptom can leave the unexplained access behind.",
          "If client information may be affected, have the appropriate advisers assess the facts and obligations. A public report cannot determine every disclosure requirement. Communicate confirmed information through the approved route and avoid declaring the issue harmless before the investigation supports that conclusion.",
          "Routine findings should still have owners and evidence that the work is complete. An unsupported component may need replacement, while a configuration warning may need testing and adjustment. Assign the work to the website provider responsible for that system. A security coordinator can track the decision without becoming the hosting administrator."
        ]
      },
      {
        "h": "Repeat checks after meaningful changes",
        "ps": [
          "A hosting migration, major application update, new form or provider transition can make an earlier review out of date. Revisit the public surface and the owner's evidence after these changes, recording the date and scope so you know which version of the site the findings describe.",
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
    "intro": "Before your New Jersey accounting, law, insurance or financial-services firm buys AI licenses or connects business documents, choose one recurring internal task to examine. Can you describe the work, check the result and measure the effort? Those answers give you a way to judge whether an approved tool would help.",
    "takeaway": "Choose a frequent internal task with reliable inputs and a named reviewer who can spot and correct mistakes. Compare the time needed to finish the whole task, including checking the output. Then decide whether a separately scoped pilot is worth pursuing.",
    "sections": [
      {
        "h": "Define the task and its owner",
        "ps": [
          "Start with the finished output you need and the inputs that produce it. For example, drafting an internal onboarding checklist from current approved procedures gives staff something specific to test. “Help with administration” leaves them guessing what a useful result would look like. The person who owns the procedures should decide whether the checklist is acceptable.",
          {
            "text": "NIST’s AI Risk Management Framework Playbook recommends documenting the intended purpose, expected benefits, costs, and human oversight. For a first workflow, put those decisions on one page before discussing tools.",
            "links": [
              {
                "phrase": "NIST’s AI Risk Management Framework Playbook",
                "to": "https://airc.nist.gov/airmf-resources/playbook/map/"
              }
            ]
          },
          "Bring your existing IT provider into that discussion early. The workflow owner can judge whether the output helps staff; IT needs to check the proposed platform, accounts, permissions and configuration. Agree who can approve changes before either group starts making them."
        ]
      },
      {
        "h": "Measure frequency and current effort",
        "ps": [
          "Count how often the task happens in a normal month and how that changes with the season. Use several completed examples to record the time spent preparing, drafting, checking, correcting and handing off the work. If a task takes ten minutes twice a year, setup and testing may use more time than the tool could save.",
          "Decide what would count as an improvement. For a checklist, you might require every step to appear in the correct order, with no unsupported additions, while a staff member spends less total time producing an approved version. A quick first draft helps only if checking and corrections leave you with a useful saving."
        ]
      },
      {
        "h": "Check the inputs and the cost of mistakes",
        "ps": [
          "Use public, synthetic, or explicitly approved low-sensitivity material first. Confirm that procedures are current, readable, and consistent. If staff disagree about which version is authoritative, settle that before asking AI to summarize it. Document cleanup may solve more of the problem than a new tool.",
          "Ask what happens if the output is wrong and who would notice. An internal draft that an experienced manager can compare with a short source document is a better first candidate than a decision affecting a client’s money or legal rights. Keep autonomous legal, financial, medical, and hiring decisions outside this pilot.",
          {
            "text": "That comparison takes time, so assign it to someone who understands the work. NIST’s measurement guidance calls for testing whether a system is fit for its purpose and defining acceptable performance limits. An answer can look confident and still fail those checks.",
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
          "In this hypothetical test, the manager checks every instruction against the source and marks omissions or invented steps. They also record the minutes spent preparing, reviewing and correcting each draft. New staff receive only an approved checklist. This is a possible test, not a Helm client story or a measured result."
        ]
      },
      {
        "h": "Decide whether a pilot is justified",
        "ps": [
          "You may decide to stop here. An infrequent task or constantly changing input may offer too little benefit, and checking the output can take as long as doing the work yourself. Do not start testing without a reviewer, an approved data set and a way to recognize an unacceptable result. A standard template or clearer procedure may solve the problem with less work.",
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
          "Keep the candidates side by side in a table, including the reasons each might be unsuitable. A weighted score can hide a serious problem: frequent use and faster drafting cannot make unapproved data acceptable. If nobody can review the output, or a serious error would be hard to detect, resolve that issue before testing.",
          "These questions give your team a way to discuss the tradeoffs before buying software or granting access. They are a suggested selection process, not research establishing the best task for every firm."
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
          "Give the reviewer the authoritative sources and enough time to compare the draft against them. The tool cannot provide an independent check by judging its own answer. The person responsible for the work needs to decide whether to accept it.",
          "Apply those same criteria to the existing process. Holding an AI draft to a lower standard can make it look faster simply because less checking is required. Compare the total time needed to produce an output you would accept from either process."
        ]
      },
      {
        "h": "Scope a test that answers a decision",
        "ps": [
          "Write a short test brief with the task, approved platform, permitted inputs, intended users and reviewer. State the decision the test will support: continue with this workflow, modify it or keep the manual process. Avoid an open-ended instruction to explore what the tool can do.",
          "Choose examples that reflect ordinary variation. Include a routine case and a case with a known exception. Keep the examples approved for the platform and avoid importing client data just to make a demonstration feel realistic. Synthetic material can test the workflow without reproducing a live matter or account.",
          "Record the platform and relevant settings at the start, then note changes to instructions, source files or configuration as you test. You will need that record to explain why a result improved. If staff repaired the source procedure halfway through the pilot, some of the improvement may come from that repair; do not attribute it entirely to the model.",
          "Limit actions as well as data. A tool that drafts a checklist should not also send it, update a business record or approve a transaction unless that action has been separately evaluated and authorized. Read-only drafting is easier to assess than a workflow whose mistakes immediately alter other systems."
        ]
      },
      {
        "h": "Assign the work after the demonstration",
        "ps": [
          "The task owner decides whether the output is useful. The document owner keeps the sources current. The existing IT provider reviews supported accounts, access, configuration and the proposed platform. Leadership approves the business purpose and cost. One person may hold several roles, but the responsibilities still need to be explicit.",
          "A demonstration does not show how much upkeep the workflow will need. Agree who will update its instructions when a procedure changes and who will check the revised result. Include their time in the operating cost so the firm can judge whether it can sustain the process.",
          "Plan staff training around the actual task. Show what information is permitted, how to start the workflow, what must be checked and how to report a failure. A broad presentation on AI capabilities will not substitute for those practical steps.",
          "Do not make continued access dependent on one person’s personal account. Confirm business ownership and offboarding with IT. If the employee who ran the pilot leaves, the organization should still know where the approved sources, instructions and decision record belong."
        ]
      },
      {
        "h": "Make the continuation decision from the record",
        "ps": [
          "At the end of the test, summarize accepted and rejected outputs alongside total staff time and recurring costs. Explain the failures individually where an average would hide them. If the tool handles straightforward cases but fails on important exceptions, the decision should say so.",
          "Time saved gives staff available capacity. Report it that way unless you have measured a financial return: ten available minutes become revenue only when the business has suitable work for that time and completes it. A pilot may also be worthwhile because it produces more consistent work or shorter administrative delays. Measure those benefits and name them in the decision.",
          "If the test is stopped, preserve what it taught you. The firm may have discovered outdated procedures, excessive folder access or an unnecessary approval step. Fixing those issues can improve the manual process without committing to the AI workflow.",
          "If you continue, define the next scope and review point. Success on one internal checklist does not establish that the tool is suitable for client advice, autonomous decisions or company-wide connections. Each extension changes the data, consequences or people involved, so assess it separately."
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
    "intro": "After the July 2026 suspension of CMMC Phase II, manufacturers need to check their current contracts before deciding which readiness work to change. Cybersecurity requirements already included in defense contracts remain in place. Your shop may still need a self-assessment, records supporting its SPRS score or evidence for a customer. Check those obligations and the current assessment route before changing the readiness plan or spending against an old deadline.",
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
          "First, confirm which level applies to the work. Contractors handling Federal Contract Information may fall under Level 1 and its 15 basic safeguarding requirements. If the agreed scope processes, stores, or transmits Controlled Unclassified Information (CUI), Level 2 and the 110 Revision 2 requirements may apply. Company size does not settle that question; the information category and contract clauses do.",
          "Second, follow the CUI through the shop. Technical data may pass through file servers, email, CAD stations, the quoting inbox and removable media in the shop office. Mapping those paths tells you which places the review needs to cover.",
          "Third, calculate the SPRS score using the applicable assessment method. Keep the system boundary, working papers and evidence so someone reviewing the score can reproduce it. Unsupported cybersecurity representations can have consequences. The Department of Justice has resolved False Claims Act allegations that included a large mismatch between a submitted score and a later assessment.",
          {
            "text": "Fourth, run a gap assessment against the applicable control set. Ask for a scored list with evidence attached to each item. It should distinguish implemented requirements from work that has not been proven and work that still needs remediation.",
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
          "For step five, implement multi-factor authentication where the requirement and system design call for it. Save the configuration evidence as you go. Step six is to identify where approved cryptography is required to protect CUI, then verify the actual product, mode, and boundary. A marketing label cannot establish those details. For step seven, limit access so each role reaches only the CUI and systems needed for its work.",
          "Step eight is to write and rehearse the incident response process, including the reporting path required by the contract. For step nine, keep the System Security Plan (SSP) current and assign an owner in the remediation record for each unmet requirement. A generic template can describe a control without showing that it operates in your environment."
        ]
      },
      {
        "h": "Steps 10 to 12: Stay ready without wasting the year",
        "ps": [
          "For step ten, recheck current DoD guidance and the specific solicitation or contract before committing to an assessment route. The former Phase II date alone is not a reason to reserve a third-party assessment. Step eleven is still to run an internal mock assessment: the underlying Revision 2 requirements and evidence work remain relevant.",
          "Step twelve gives that work a recurring owner and schedule. Review access changes, evidence, open remediation, the SSP, and assessment dates. Changes to systems, people, vendors, or the CUI boundary can leave the score and policy set describing an environment that no longer exists."
        ]
      },
      {
        "h": "Turn the checklist into a working record",
        "ps": [
          "A checked box should lead to a record someone can review. Give each step an owner, evidence reference, status and next action, and keep implemented work awaiting verification separate from completed work. During an assessment or customer inquiry, those records explain what supports each tick.",
          "For each task, identify the requirement behind it: a contract clause, current program instruction or specific customer request. Resolve uncertain scope before spending against a deadline. Once the requirement is clear, record how the firm will demonstrate completion; a policy title alone may not provide that evidence.",
          "Label dates by what they mean. A contract due date, an internal remediation target and the next review date serve different purposes. Leadership needs to see whether a delay affects a contractual obligation or the firm’s own improvement plan."
        ]
      },
      {
        "h": "Read contracts before scheduling assessments",
        "ps": [
          "Collect the solicitation, award, modifications and subcontract flowdowns. Ask the responsible contract owner to identify the safeguarding, assessment and affirmation instructions relevant to the proposed work. Record written clarification from the prime or contracting contact where needed.",
          "An existing customer can send work with a different scope. Review each new job because purchase orders can differ in information, services and terms. A consistent contract review gives the shop a chance to identify those changes before staff start handling the material.",
          "Before accepting an assessment proposal, check its purpose and authority. A readiness review, mock assessment and government or authorized assessment are different engagements. Match the result your customer requires to the result the provider can actually deliver."
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
          "The main file server is only part of that map. Include paper, removable media and workstations, then ask how a machine receives a program file, how a drawing is printed and how a supervisor works remotely. Those everyday paths can change the assessed boundary.",
          "If staff use personal accounts because the approved transfer method is too slow, the workflow needs attention. Fix what drives the shortcut and verify that staff can complete the transfer through the approved process. A written prohibition alone cannot establish that the process works."
        ]
      },
      {
        "h": "Inspect implementation before collecting screenshots",
        "ps": [
          "Decide which requirement you are evaluating before collecting evidence. Ask its owner to demonstrate the intended safeguard in the assessed environment, then collect the records needed to evaluate it. That gives each screenshot or export a purpose in the review.",
          "Keep the relevant standard and version clear. The Department’s program instructions and contract determine the assessment context; the existence of a newer NIST publication does not automatically change the current contract obligation. Retain the basis for the version selected in the review record.",
          "When a vendor supplies a control, check what the shop still has to do and what evidence the vendor can provide. Its service description alone may not show whether the relevant users, systems or information are covered."
        ]
      },
      {
        "h": "Sequence remediation around dependencies",
        "ps": [
          "Some tasks depend on work that comes before them. If the user or device inventory is inaccurate, later coverage evidence may be unreliable. A workflow change can also alter the scope of technical implementation. Resolve those dependencies before giving isolated tasks due dates.",
          "Agree with a qualified reviewer on what would close each item. Buying a tool or approving a policy may be a milestone, but closing the item requires implementation and evidence supporting the requirement. Record any limitation that remains.",
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
          "Staff need to know how to report a concern promptly and whom to contact. The designated incident owner can then evaluate the event with the appropriate responders and advisers. Check access to the required reporting route, including any prerequisites, before an incident occurs.",
          "Use a fictional exercise to test who receives the report, who authorizes action and how the relevant records are preserved. Record delays and missing responsibilities, then correct the plan. Keep live findings and incident evidence in their approved restricted systems."
        ]
      },
      {
        "h": "Check a proposed change against the checklist",
        "ps": [
          "Consider an approved fictional exercise: the shop plans to add a workstation that will display controlled information. Who approves it? Who updates the inventory, confirms access and checks the effect on the SSP and evidence? Work through those responsibilities without making a live system change.",
          "The answers show where the sequence needs work. If a workstation can be bought and used before anyone reviews its information boundary, change procurement and onboarding. If the documents are updated but protection remains unknown, assign technical verification. Use the checklist for production decisions throughout the year."
        ]
      },
      {
        "h": "Review readiness with leadership",
        "ps": [
          "Leadership needs the current scope, supported requirements, open items and decisions that need an answer. Use the contract and qualified review to explain the consequences of unresolved work. Before affirming readiness, leadership should understand both the statement it is making and the evidence supporting it.",
          "Check customer responses against the assessment file. If the remediation record still shows relevant deficiencies, a questionnaire should not describe the environment as fully implemented. Ask for clarification when the customer’s answer choices leave no way to represent the actual state truthfully.",
          "Retain the review record and the authorized submission confirmation where applicable. An assessment number is useful only when the shop can connect it to the boundary, date, method and supporting evidence."
        ]
      },
      {
        "h": "Make maintenance part of production changes",
        "ps": [
          "Add a security-scope review to new systems, providers, locations and information workflows. Identify whether the change affects the SSP, evidence or assessment record. The person approving the change should know who performs that review.",
          "Assign an owner and backup for assessment and affirmation dates under the current applicable instructions. Both need access to the record. Otherwise, an employee’s departure can leave the obligation attached to an unattended calendar.",
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
    "intro": "Before paying for CMMC preparation, establish what your contract requires and what information your shop handles. Those two things determine the level to review, regardless of headcount. If you choose the wrong scope, you could pay for controls you were never asked to maintain, or affirm readiness while required controls remain unmet.",
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
          "For Level 2, the shop needs a defined system boundary: the environment being assessed. It also needs a current System Security Plan, evidence for each requirement and a score. Someone must be responsible for maintaining each applicable requirement in that CUI environment. This work reaches beyond Level 1’s basic safeguards."
        ]
      },
      {
        "h": "How to tell which one applies to you",
        "ps": [
          "Look in your contract for DFARS 252.204-7012, 7019, 7020, and 7021. Read how those clauses apply to your work and how the prime has passed the requirements on to you. Their presence and flowdown point to whether you are being asked to handle CUI or only FCI.",
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
          "A reviewer needs to connect the contract to the way your shop works. Bring the solicitation, relevant contract clauses and all cybersecurity flowdowns from the prime. Include representative file descriptions or markings and identify the systems that store or transmit the information. Any current SPRS assessment or System Security Plan will help the reviewer discuss applicability and the system boundary.",
          "Keep the conclusion with the contract file, including the person or contract source that supports it. Save any written clarification from the prime about the information category or required level there too. At the next bid or renewal, you can review that reasoning instead of reconstructing it."
        ]
      },
      {
        "h": "Separate the information category from the assessment route",
        "ps": [
          "Knowing that a project includes CUI tells you what must be protected. The assessment route is a separate question. Once the prime confirms the information category, check the contract’s safeguarding and assessment instructions to establish which route applies.",
          "Keep the solicitation, award, modifications and flowdowns together. Note the required level, affected environment, relevant dates and responsible contact. If a newer instruction changes the requirement, retain the earlier record and explain what supersedes it. The shop should be able to show why it followed a particular route at the time.",
          "If the contract and customer questionnaire seem inconsistent, seek clarification using the contracting relationship and current official guidance, with expert advice where needed. A cheaper assessment route or a tool’s recommendation cannot resolve what the contract requires."
        ]
      },
      {
        "h": "Walk the information flow through the shop",
        "ps": [
          "To define the boundary, follow a representative approved workflow from receipt to disposal. Where do employees download files? Where does engineering work, which workstations display technical information, and how do records reach production? Include the email, file shares, remote access and external services used along the way.",
          "Use representative file descriptions or approved samples during scoping. Do not send live controlled information through an ordinary marketing inquiry. A readiness conversation can establish how an authorized review will handle the material without collecting it prematurely.",
          "Then compare that workflow with the documented process. A policy may say that files stay in one environment while an employee uses a general quoting mailbox or removable media. The boundary has to account for that discrepancy. Resolve it before relying on an assessment conclusion.",
          "Keep the map current. A new supplier portal, shop-floor workstation or remote working arrangement can change where information is processed or accessible. Assign someone to review the effect before the change becomes part of normal production."
        ]
      },
      {
        "h": "What Level 1 preparation should produce",
        "ps": [
          "At the end of Level 1 preparation, you should know which systems handle FCI and who owns the relevant safeguards. You should have evidence supporting the applicable requirements, plus a process for reviewing changes and preparing the organization’s self-assessment and affirmation.",
          {
            "text": "Use the fifteen requirements in FAR 52.204-21 as the relevant source rather than a provider’s abbreviated checklist. An installed security product may support part of the work, but responsibility for access, physical handling and other operating practices still needs an owner.",
            "links": [
              {
                "phrase": "FAR 52.204-21",
                "to": "https://www.acquisition.gov/far/52.204-21"
              }
            ]
          },
          "That includes physical and administrative practices, even in a small shop. Who controls visitor access? How do employees receive permissions, and how is information handled on devices and media? Use the actual environment to decide the scope and the evidence to maintain.",
          "Leadership owns the self-assessment conclusion even when a consultant helps gather and evaluate the evidence. Before making an affirmation, leadership should understand what is being affirmed and which records support it. The consultant’s worksheet helps with that review; responsibility remains with the organization."
        ]
      },
      {
        "h": "What Level 2 preparation adds",
        "ps": [
          "The System Security Plan should describe the CUI environment, its connections and its dependence on providers. Use that description to organize evidence against the applicable requirements. A later reviewer needs to understand why the evidence supports each conclusion; a folder of screenshots alone leaves that reasoning to them.",
          "As you identify corrections, separate the decisions the business must make from the technical work the existing IT owner must carry out. Access, training, service selection and workflow changes may need business decisions. Account for those dependencies in funding and scheduling before anyone promises a completion date.",
          "Record unmet requirements and the work needed to address them. An open item is not automatically permitted for the required assessment status: the applicable rules limit how deficiencies may be handled. Have a qualified reviewer evaluate those conditions before leadership makes an affirmation.",
          "When evaluating a requirement, look at how a product is used in the assessed environment. An endpoint tool, backup service or awareness platform supplies a capability; coverage, configuration, operation and evidence may also determine whether the requirement is met. The reviewer needs to evaluate the implementation."
        ]
      },
      {
        "h": "An illustrative boundary decision",
        "ps": [
          "Consider a hypothetical manufacturer planning to receive confirmed CUI in a restricted environment. Employees outside it would handle ordinary business administration without accessing the controlled files. This example illustrates a scoping decision; it is not a Helm customer design.",
          "The decision requires more than creating a restricted folder. The team must inspect the people, devices, email paths, connections and services involved. If a drawing is routinely copied to an ordinary workstation for production, the claimed separation needs review. A qualified scoping exercise should determine what actually belongs in the assessed boundary.",
          "The way information moves and the systems it depends on affect the scope. A qualified reviewer still needs to evaluate the enclave architecture. For separation to reduce exposure, the shop also needs operating rules its staff can follow and maintain."
        ]
      },
      {
        "h": "Compare proposals by responsibility and evidence",
        "ps": [
          "Ask a provider to identify the scope it will evaluate, the standard and version it will use, the evidence it needs and the deliverable you receive. Require it to distinguish readiness assistance from an authorized assessment or certification service.",
          "Clarify implementation duties. Who changes account policies, manages the devices, maintains physical controls and updates procedures? A report of gaps does not establish that the provider will remediate them. Get the boundary of its service in writing.",
          "Ask who will maintain the System Security Plan (SSP) after the project. Agree who reviews changes, retains evidence and tracks assessment and affirmation dates as the shop continues operating. Without someone responsible for that work, a one-time set of policies will become stale."
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
          "Start by reviewing the contract and information category. Then define the environment to be assessed. You can decide whether a full-company project is needed once you know what the work requires.",
          "Helm can discuss readiness support for an agreed scope alongside your existing IT provider. The organization retains final attestations and business decisions. Helm does not issue CMMC certifications, government assessment decisions or regulatory approvals."
        ]
      }
    ],
    "takeaway": "Start with the contract clauses and confirm whether the work involves Federal Contract Information (FCI) or Controlled Unclassified Information (CUI). If that is unclear, get a written answer from the prime before choosing the assessment scope.",
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
    "intro": "What should an employee do when a coworker needs a drawing at another location? The CUI policy should give them a usable answer. A photo on a personal phone, a file emailed home or a print left on a workbench may expose controlled information. Staff need to know the approved way to handle those everyday tasks and whom to ask when the instructions leave something out.",
    "sections": [
      {
        "h": "FCI and CUI, in terms that make sense on the floor",
        "ps": [
          "Federal Contract Information (FCI) is information provided by or generated for the government under a contract and not meant for public release. That includes much of the everyday paperwork involved in government work.",
          {
            "text": "Controlled Unclassified Information (CUI) requires safeguarding or dissemination controls based on law, regulation or government-wide policy. Controlled technical information can include relevant drawings, specifications and models. That does not make every drawing CUI: the contract, applicable category and authorized clarification establish how to handle it. If a marking is unclear, hold distribution and ask the designated information owner. NARA controlled technical information category.",
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
          "Personal phones and personal email accounts must stay out of the controlled-information workflow. Do not use a personal phone to photograph drawings or parts, even for quick reference or a text to a coworker. Show staff the approved route for accessing specs from another location. Access remains need-to-know, so an employee should view a print only when their job requires it.",
          "Marked documents belong in controlled storage. A workbench or board may leave them visible to a visitor. If a print is left out or a file goes to the wrong place, employees need a clear reporting contact. Reporting promptly gives the company time to meet its contract-driven response duties."
        ]
      },
      {
        "h": "Why fast reporting is not optional",
        "ps": [
          {
            "text": "DFARS 252.204-7012 requires rapid reporting, defined as within 72 hours of discovery, for cyber incidents within the clause’s scope. Employees should report concerns promptly through the internal route, including a misplaced print or suspicious message. The designated response owner decides whether the clause applies and carries out any required reporting. Employees should not have to make that government-reporting decision alone.",
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
            "text": "NIST 800-171 compliance includes awareness and training requirements. Technical controls alone leave a requirement unsupported if the employees handling controlled drawings have never learned the applicable rules.",
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
          "For each rule, explain how the employee can finish the task. That includes obtaining an approved print, displaying a drawing at the workstation, transferring a required file and returning or disposing of the material. If personal phones are prohibited, staff need a supported way to record the business information they need.",
          "Some requests will fall outside the instructions. Give employees a named contact who can answer, and let them pause a transfer or photo request while they check. Otherwise, they may invent another channel. Supervisors need to support that pause, especially when production pressure makes a shortcut attractive.",
          "Ask the employees who use the procedure to try it with the equipment available. Where is it slow? Which instruction is ambiguous or impossible to follow? Correct those problems in the workflow. A signed training form records completion, but it cannot establish that every production task can be performed safely.",
          "A workaround also has to fit the assessed boundary. Moving controlled information into an unreviewed account can undermine the separation the program depends on, even if the transfer is convenient. The information owner and IT provider should approve changes together."
        ]
      },
      {
        "h": "Control paper drawings and visitor exposure",
        "ps": [
          "Follow a print through the job: where is it issued, used, stored and returned? Staff who need it should be able to reach the authorized storage location, while others are kept from unnecessary access. The process should work throughout the day, without depending on someone hiding a print when a visitor arrives.",
          "Walkways and visitor routes need review too, along with work areas where drawings or screens may be visible. The relevant manager should understand the access rules and escort procedure. A familiar visitor still needs authorization to view controlled information.",
          "Before a job finishes, employees should know which prints to return, retain or destroy through an approved method. Sensitive material should not go into an ordinary bin. If the instruction is unclear, ask the information owner. An old print still needs a handling decision; its age does not determine the rule.",
          "Include copies in that review. Controlling the marked master drawing can leave an untracked copy on a clipboard. Employees need to recognize the information and its handling instruction, even when the familiar folder color or cover sheet is missing."
        ]
      },
      {
        "h": "Review shared stations and removable media",
        "ps": [
          "Determine who is authorized to use each workstation and which information it may handle. Follow the approved sign-in and screen-lock procedure. Do not leave an administrator’s session open for convenience or share credentials when the system supports named access.",
          "Trace how program files or technical information reach the equipment. Where the approved workflow uses removable media, identify the permitted media, handling procedure and owner. If the supported transfer path is unavailable, staff should check the procedure before reaching for a personal or unknown drive.",
          "A machine controller may have different technical capabilities from an office laptop. Qualified staff should evaluate those constraints and document an approved arrangement. A generic checklist alone is no basis for asking a machinist to install an unfamiliar tool or alter the controller.",
          "The review should include support providers because remote or maintenance access may affect the information boundary. Before a technician begins, confirm the permitted work, access route and responsibilities. Maintenance is not automatically outside the program."
        ]
      },
      {
        "h": "Handle uncertain markings without guessing",
        "ps": [
          "Employees need to recognize when a document needs review, even if they are not information-classification specialists. Explain the relevant markings with examples approved by the information owner, using dummy or authorized training material. Make sure staff know whom to contact when they are unsure.",
          "If a file arrives without a clear instruction but appears to contain controlled project information, pause onward distribution and seek clarification. An absent marking is not a sufficient reason to publish or email it broadly. Equally, the firm should not permanently classify every technical file as CUI without establishing the basis.",
          {
            "text": "The NARA CUI Registry provides category references. The project’s authorized parties still need to resolve how the material is identified and handled in the work at hand. Keep their written clarification with the contract or information record.",
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
          "Consider a hypothetical training exercise: a supervisor asks an employee to text a drawing photo to a colleague at another location. The employee recognizes the controlled handling instructions and pauses the request. This is an illustrative scenario, not a Helm incident.",
          "The employee uses the approved internal contact to ask how the information may be transferred. The authorized owner checks the recipient, destination and supported transfer method. If the request is legitimate, it can proceed through that method; urgency alone does not authorize a personal account or device.",
          "Ask staff to identify both the restriction and the approved alternative in this exercise. The colleague still needs the drawing; a session that ends with “do not take photos” may leave that business task unresolved."
        ]
      },
      {
        "h": "Record training that reflects the work",
        "ps": [
          "Training records should show the audience, what they were taught, which approved examples were used and the completion date. Include the reporting route, physical handling and relevant device or media practices. The supervisor’s review then checks whether those instructions work in practice.",
          "Revisit training when the shop changes equipment, receives a new kind of controlled information or adopts a new transfer route. A generic annual course can supplement those instructions, but it does not establish that employees understand a site-specific production procedure.",
          "Recurring questions can point to a procedure that needs repair. When several employees cannot identify where a print belongs, clarify the storage instruction and signage. A vendor who repeatedly requests an unapproved transfer needs the responsible manager to address that process."
        ]
      },
      {
        "h": "A floor-level handling table",
        "ps": [
          "Keep the handling instructions near the work, with a named contact and a supported alternative for each task. Employees should be able to follow them during production, with the broader security program and contractual review supporting the process.",
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
    "intro": "Before signing a cyber insurance application, you need to know whether each answer describes what the firm actually does today. That means gathering facts from finance, IT, security and leadership. A software invoice can confirm a purchase, but you'll need configuration records to establish what is deployed. Keep planned improvements separate from those current facts.",
    "sections": [
      {
        "h": "Step 1: Obtain the complete current request",
        "ps": [
          "Start by asking the broker for the application, supplements, instructions, deadline and evidence request. Confirm which entity and operations the submission covers before you assign technical questions. Related companies, locations or acquisitions may require information that a single-company form does not capture.",
          "Keep the original questions and definitions intact in a controlled working copy, and link assignments back to that wording. This matters even for a seemingly straightforward question: shortening it can lose a qualifier such as every account, remote access or the previous reporting period. The respondent may then gather evidence for a different question.",
          "Give someone responsibility for coordinating the submission and tracking missing answers or evidence. Name the technical respondents and business approver too. Technical owners verify settings and the population they apply to; leadership approves the business representations and submission. The broker handles underwriting clarification and the coverage discussion."
        ]
      },
      {
        "h": "Step 2: Define the business population",
        "ps": [
          "The form's definition and requested date determine which employees and contractors to count. Check whether it also calls for seasonal staff, remote workers or particular locations. A device count needs its own review: one person may have several devices, while several people may use a shared workstation.",
          "List important systems and providers. Include business email, identity, remote access, devices, client portals, backup and critical applications. Identify which systems are operated by outside suppliers and who can request evidence from them. The internal IT provider may not administer every application used by the firm.",
          "If the form asks about revenue, records or business activities, route those questions to the appropriate business owner. Technical staff should not estimate financial information from a user list. Similarly, finance should not infer authentication coverage because a software subscription appears on an invoice."
        ]
      },
      {
        "h": "Step 3: Assign each question to evidence",
        "ps": [
          "The table below gives you a starting point for assigning questions. The categories are illustrative; your insurer's current form determines what you need to answer. If several owners contribute to one response, the coordinator needs to resolve any disagreement before it reaches the final submission.",
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
          "For an authentication question, first identify the access it covers: email, remote access, privileged accounts, all users or a specific system. Then ask the administrator where multifactor authentication (MFA) is required, which methods are allowed and which exceptions remain. Enrollment alone cannot answer that question. An account may have an authentication method enrolled even though the relevant access path does not require it.",
          "That review may need to reach beyond the main tenant to independently managed applications. Enforcing MFA for email tells you little about a business application with a separate administrator. Record what you checked and what remains unknown. If the form gives you only a yes-or-no box, ask the broker how to represent a qualified answer.",
          "A scheduled rollout is still future work. If it finishes before submission, verify the completed state and date the evidence before changing the answer. Otherwise, describe the current limitation through the approved submission route."
        ]
      },
      {
        "h": "Step 5: Verify devices and recovery",
        "ps": [
          "Compare the device inventory relevant to the question with the devices reporting to the protection service. Resolve unsupported platforms, exclusions and stale entries before calculating coverage. A newly purchased computer may not yet meet acceptance criteria, and a retired one may still appear in the console.",
          "A successful backup capture does not establish that a restore succeeded. For recovery questions, identify the covered workload, recovery point and restore test result. If the form asks about isolation or immutability, ask the operator to explain the configured mechanism and its limits. Encryption, isolation and immutability describe different properties; evidence of one cannot establish the others.",
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
          "If wording remains ambiguous, send the broker the exact question alongside the confirmed facts through the approved route. Ask for written clarification when the interpretation affects your answer, and keep the response with the package. A general sales assurance about what carriers usually mean leaves the current question unresolved.",
          "Do not hide an exception in an attachment that the final answer contradicts. Ensure the form, supplements and supporting explanation are consistent. The authorized signer should know what is incomplete and how it is represented."
        ]
      },
      {
        "h": "Step 7: Review the final submission as one document",
        "ps": [
          "Read the complete application after individual contributors finish. Check dates, entity names, counts and repeated questions. The same control may appear in several sections with different wording. Confirm that the responses consistently describe the actual environment without dropping a meaningful qualifier.",
          "Separate statements about current operation from commitments about future work. If a commitment is included, identify who approved it and what evidence will demonstrate completion. Review any related requirements with the broker and appropriate adviser before treating a technical task date as a contractual promise.",
          "Once the package is signed, save the exact application, supplements, evidence references and submission record together. A later reviewer can then see what was actually sent without reconstructing it from drafts. Restrict access according to the business and technical information it contains."
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
          "Keep earlier submissions with the evidence that supported them at the time. Today's configuration records may no longer explain an answer the firm gave last year. Follow the firm's retention policy, and keep restricted operational details in the authorized system.",
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
          "Consider a hypothetical firm with 45 email users. It has verified MFA enforcement for 43; two accounts remain outside the policy because their workflow needs investigation. Sending enrollment instructions to all 45 people does not change that partial deployment. The coordinator needs to record the actual population, the two exceptions and the technical owner's next action.",
          "If the two excluded accounts enter scope before signing, verify the final state and save dated evidence. If they remain outside the policy, ask the broker how to represent that limitation. Retain the clarification and signer’s decision alongside the answer; promising a later fix does not change today’s deployment."
        ]
      }
    ],
    "takeaway": "Keep the insurer's questions intact and assign each to someone who can verify the facts, including the people or systems the answer covers. Record exceptions openly. Before signing, review the complete package for consistency, then retain the submitted version and its dated evidence.",
    "lead": [
      "This walkthrough helps you organize that work. Follow the insurer's actual form, definitions and policy documents, and ask your broker about wording you cannot confidently interpret. The authorized signer should review the final package. Supporting security evidence can establish the facts, but it cannot promise a particular premium or coverage decision."
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
    "intro": "When your insurer questions coverage during a cyber incident, gather the policy and the records that support your claim. Your firm still has operations to restore and urgent requests to answer, while the people reviewing coverage need a clear account of what happened. Security records can supply those facts; payment depends on the actual contract and its review.",
    "sections": [
      {
        "h": "Begin with the policy and the asserted reason",
        "ps": [
          "First, ask the broker and appropriate counsel what the insurer's correspondence means and when a response is due. An information request, a reservation about coverage and a formal denial call for different responses. The letter's subject line alone cannot establish its legal effect, so review it alongside the policy documents.",
          "The reviewing team needs the complete contract: the policy in force, endorsements, declarations, application, supplements and relevant written clarifications. Make sure these are the final submitted versions. An employee's early draft may contain a different application answer. An endorsement or definition may also change how a general coverage description applies.",
          "Alongside those documents, build a chronology with confirmed dates for discovery, initial response, notice to the insurer, provider engagements and material communications. The event may have occurred before the firm learned about it; record those times separately. Where a date is uncertain, say so and identify the source you are checking."
        ]
      },
      {
        "h": "Distinguish different coverage questions",
        "ps": [
          {
            "text": "The FTC's cyber-insurance guidance recommends discussing the firm's coverage needs with its insurance agent. Keep the final policy wording available after that purchasing discussion, too. The response team will need it because a sales summary cannot establish how a particular loss will be treated. The questions below each require their own records and interpretation.",
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
          "Work through the requested claim by amount and category, with the relevant policy provision beside each. A particular type of loss may have a sublimit or another condition, even when the policy has a higher overall limit. Keep the financial records that connect each cost to the event, and explain costs whose connection might be unclear.",
          "You can work through these questions before renewal using representative scenarios. Ask the broker how the proposed policy would address a vendor banking change, an interruption of a critical application or a third-party demand. Ask the broker and insurer to clarify coverage rather than assuming these scenarios are covered, and keep any written clarification with the final policy."
        ]
      },
      {
        "h": "Preserve evidence of the environment at the relevant time",
        "ps": [
          "Which period does the evidence describe? If an application answer is questioned, you need records from when the answer was given and from when the event occurred. A screenshot taken after remediation may show today's configuration without establishing the earlier state. Accurate dates and source labels help the reviewing team tell them apart.",
          "The disputed question should guide what you collect. An authentication question calls for the account population, the scope of the authentication policy and any recorded exceptions. Device protection records should identify which devices were eligible and which were reporting. For backups, identify the covered workloads and evidence of actual restores. Sending every security document in an unorganized archive makes that specific question harder to follow.",
          "Ask the technical owner what each record can establish. For example, an enrollment report may identify registered devices without showing that every device was reporting during the incident. A rollout plan describes intended work; it does not establish completed deployment. Include those limits with the records so the coverage adviser can interpret them accurately."
        ]
      },
      {
        "h": "Keep response obligations available before an event",
        "ps": [
          "Review the policy's notice, cooperation, consent and provider provisions with the broker before an incident. Record the breach hotline, reporting route and people authorized to engage help. Ask how urgent containment and separately retained services should be handled under the particular wording. Do not assume the same procedure applies to every insurer.",
          "Decide in advance who handles urgent operational work and who handles insurance reporting. After a suspected fraudulent transfer, someone may need to contact the bank quickly. A spreading attack may require urgent, authorized technical containment. With those duties assigned, the person handling insurance reporting can follow the policy's process while others carry out their work. A coverage question should not leave these handoffs undecided.",
          "Keep contacts available outside the systems likely to be affected. A hotline stored only in an inaccessible mailbox may delay the response. Test the contact list in a planned exercise using the agreed route, without creating a false claim or emergency."
        ]
      },
      {
        "h": "Document costs and decisions as work occurs",
        "ps": [
          "Record incident expenses while the work is happening. Each invoice needs its scope, authorization and explanation of how the work relates to the event. For business interruption, follow the advice you receive on documentation and record how estimates were produced. Keep forecasts separate from confirmed amounts so a preliminary estimate is not presented as a settled loss.",
          "Keep the reason for engaging each provider and the name of the person who approved the work with the expense record. Where consent or a panel arrangement matters under the policy, retain that communication as well. This gives a later reviewer a way to follow the decision without reconstructing it from scattered messages.",
          "Technical recovery records need more restricted handling. Keep the action timeline and results in the approved restricted system, with controlled access to appropriate evidence for the claim team. Logs, customer details and security findings should stay out of ordinary marketing or broadly shared operating documents."
        ]
      },
      {
        "h": "Respond to a concern with a factual package",
        "ps": [
          "Before assembling a response, ask the reviewing adviser exactly what information is requested. Then organize the package around the relevant question or provision, with the submitted answer, supporting records and any unresolved facts. Speculating about the attacker's intent or the insurer's motives adds no evidence to that response.",
          "A missing record needs an explanation of the gap and what you will check next. If you reconstruct a test log after the incident, it cannot be presented as a log made at the time. A retrospective explanation can draw on the available records, provided you label when and how it was produced.",
          "Use one controlled version of the response package and record what was submitted, when and by whom. If different employees answer the same question independently, their responses can become inconsistent and complicate the review. Material legal or coverage conclusions should go through the appropriate adviser."
        ]
      },
      {
        "h": "Correct gaps without rewriting history",
        "ps": [
          "You may discover incomplete authentication, missing devices, weak payment verification or an untested recovery process during the incident. Correct the gap and date the change, retaining before-and-after evidence as appropriate. The improvement changes the current operating position; the historical record still needs to show what existed at the relevant time.",
          "Assign corrective work to the responsible IT or business owner. A security coordinator can track the work and collect evidence, while the authorized administrator makes technical changes. If specialist recovery or forensic services are needed, establish their scope and authority separately.",
          "Those findings may also affect statements in customer questionnaires, policies or future applications. Ask the appropriate adviser which updates are required before continuing to rely on old statements as an accurate description of the environment."
        ]
      },
      {
        "h": "Prepare a more useful renewal review",
        "ps": [
          "Before the next renewal, bring the broker an account of the business as it now operates. Compare it with the policy and application, including new services, changed workflows, acquisitions and material changes in the protected population. Ask how those facts should be reflected. Accurate information supports a clearer underwriting discussion, without guaranteeing a lower premium or an available policy.",
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
          "That account finding alone does not settle coverage. Even evidence that a different account was used may leave questions unresolved. Give the coverage adviser the dated technical facts, application and policy so they can assess the record against the contract and applicable law. Follow the response process and deadlines while that review proceeds."
        ]
      }
    ],
    "takeaway": "Keep the complete policy, submitted application and dated control evidence together. When coverage is questioned, identify the asserted issue, preserve the facts and coordinate the response with the broker and appropriate coverage adviser.",
    "lead": [
      "For a business owner, the useful preparation is knowing where those records are and who will handle the response. Your broker, insurer and coverage counsel determine how policy wording and applicable law affect a particular loss. A general article about denied claims cannot tell you that one missing control automatically defeats every policy."
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
    "intro": "Evidence that MFA covers email may leave you unable to answer an insurer's question about every account. Establish which accounts or systems the question includes, then compare their current settings with dated records. If some remain outside the control, work with your broker on how to explain that gap in the insurer's form.",
    "sections": [
      {
        "h": "1. Multi-factor authentication",
        "ps": [
          "Email, remote access, administrators and independent applications may use different MFA policies, so start with the accounts and access paths named in the question. Ask the authorized administrator for enforcement settings and exceptions. Registering an authenticator makes a method available. To establish which sign-ins require it, you need the policy evidence.",
          {
            "text": "Record the allowed methods if the form asks. SMS, app codes, push approval and phishing-resistant credentials have different properties. Avoid calling every method phishing resistant. Use the MFA comparison to prepare questions for IT, then answer for the method and policy actually operating.",
            "links": [
              {
                "phrase": "MFA comparison",
                "to": "/resources/mfa-methods-compared/"
              }
            ]
          },
          "Excluded accounts need a qualified answer, even when most accounts are covered. Ask the broker how to provide it. If deployment finishes before signing, verify that enforcement is complete and keep dated evidence; a scheduled task cannot establish the completed state."
        ]
      },
      {
        "h": "2. Endpoint detection and response",
        "ps": [
          "Old records in a protection console can make active coverage look broader than it is. Compare the console with the current device inventory, checking which devices are eligible, whether protection is installed and whether it is reporting correctly. Resolve missing, duplicated and stale entries before using those records to answer.",
          "The product's coverage also leaves a service question to resolve: who investigates and responds? If the form asks about continuous monitoring, establish the function and covered devices. Continuous collection, analyst review and authorized containment are separate activities. Keep the written service boundary that shows which apply.",
          "Employee laptop protection cannot establish coverage for a broader set of endpoints. Phones, tablets, servers and specialist systems need their own coverage decisions. State supported and excluded systems as the form requires."
        ]
      },
      {
        "h": "3. Backup coverage",
        "ps": [
          "Email, file storage, business applications and local systems may have different protection. Map each important workload to its recovery method and operator, then check the mapping against everything the question covers. A user count or subscription invoice cannot establish that coverage.",
          "Ask the operator to show what is protected and the relevant recovery points. That review should include enrollment of new users and shared data, along with exclusions and unsuccessful captures. An unsupported application in the inventory means you cannot claim that all data is backed up.",
          {
            "text": "Retention and legal holds can serve important preservation purposes, but differ from operational backup and restoration. If those platforms are relevant, the Microsoft 365 comparison and Google Workspace comparison explain the distinction.",
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
          "These mechanisms answer different questions. Encryption protects information using cryptography. Isolation separates systems or access, while immutability restricts alteration or deletion under a particular configuration. Read the insurer's wording carefully and verify the mechanism it asks about, even if another is already in place.",
          "A feature in the provider's product does not establish that it is enabled for your covered data. Ask the backup operator for the configured mechanism, administrator access and relevant retention behavior. Confirm the enabled state of any provider capability your answer depends on.",
          "Record any exceptions and the evidence source. Have the broker clarify ambiguous wording rather than choosing the interpretation that produces the easiest yes. Answer according to the form's wording and any policy requirement."
        ]
      },
      {
        "h": "5. Restore testing",
        "ps": [
          "A successful backup job supports a claim that data was captured. A restore test checks whether the business can use it. Record the test's scenario, recovery point, operator, destination and result, then ask the data owner whether the returned information is usable.",
          {
            "text": "State the actual test date and scope. If only one workload was tested, do not describe it as a full-business recovery exercise. Failed steps and manual repairs belong in the record. Use the restore-testing guide to define a bounded test.",
            "links": [
              {
                "phrase": "restore-testing guide",
                "to": "/resources/backup-testing-insurers/"
              }
            ]
          },
          "The application or policy may specify a testing frequency; if it does, follow it. Otherwise, describe the firm's real procedure and obtain clarification where needed. Check the requested period before describing an old test as recent, and do not invent a universal quarterly requirement."
        ]
      },
      {
        "h": "6. Patching and vulnerability management",
        "ps": [
          "An automated update setting cannot establish that every applicable update completed successfully. Ask IT which systems are maintained, how important findings are prioritized and how completed updates are verified. Include unsupported products and externally operated systems in that discussion.",
          "For vulnerability management, establish what was assessed and keep a record connecting findings to action. A public website scan leaves internal devices outside that scope. When a finding is closed, retain the relevant verification with its ticket, such as a version check or an appropriate reassessment.",
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
          "SPF, DKIM and DMARC address email authentication and policy under configured rules. Even a legitimate mailbox can send fraudulent instructions if it is compromised, so those controls cannot establish that a request is honest. Independent payment authorization still belongs alongside them.",
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
          "A purchased staff license shows that training is available. Completion records establish who took it. Check those records against the assigned population and training dates, including seasonal workers and new starters where the question requires them.",
          "Keep overdue assignments and documented exceptions visible in that review. If the form asks about simulations, describe the actual program; training alone does not establish that a simulation took place. A simulation result is one measure of participation and behavior, without guaranteeing that employees will recognize every attack.",
          "Answer for the period and population the form requests. A past presentation may or may not satisfy that question, just as a recent session may cover only part of the staff. Use the firm's records to establish the response instead of applying a blanket rule."
        ]
      },
      {
        "h": "9. Incident response",
        "ps": [
          "An older incident plan may point people to a response the firm no longer uses. Compare the approved plan with the current provider arrangement. Verify contacts, authority and business handoffs, including how staff report a concern and how primary and backup contacts reach authorized help.",
          "If the form requests an exercise, state its actual scope and result. Keep the scenario, date, participants, observed decisions and corrective actions together. Attendance alone cannot establish that every response duty was tested.",
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
          "The records should connect verification to the transfer that was executed. Identify the required approvers and exception process, and check that a later change was not authorized using verification of a different account. Harmless scenarios that include deadline pressure can test the process.",
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
          "A departure template explains the intended procedure; completed access-removal records establish what happened. If you cannot trace recent departures to those records, note the uncertainty and assign a review before making a broad claim."
        ]
      },
      {
        "h": "12. Vendor dependencies and oversight",
        "ps": [
          "A supplier's product name alone cannot establish what safeguards apply to your account. Identify the providers that hold business information or operate important systems. For each, record the service owner, relevant assurance evidence and incident contact.",
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
            "text": "Helm Command supports evidence upkeep and bounded questionnaire assistance under its written scope. Existing IT supplies and maintains technical controls, while the broker and signer retain insurance decisions. Supporting the submission with evidence improves the factual record. It cannot guarantee pricing, issuance or claim payment.",
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
    "takeaway": "Base each answer on the accounts, systems or people the question covers, for the period it requests. Verify deployment and operating records before responding. Disclose incomplete controls through the approved route, and keep the final response with the evidence that supports it.",
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
    "intro": "Suppose your accounting firm already pays for an email filter, endpoint protection and a backup subscription. Then a customer asks who investigates suspicious activity and whether every laptop is covered. You can show the invoices, but answering those questions takes more: current coverage records and someone responsible for the work.",
    "lead": [
      "That is a useful place to start when choosing between cybersecurity point solutions and managed security. Which protections do you need, who will operate them, and who will keep the evidence current? If your New Jersey business already has IT support, look first at the work falling between contracts."
    ],
    "takeaway": "A point solution can make sense when you know the gap it will address and have someone to operate it. If you need consistent protection across the covered systems, consider a standardized managed stack. You may also need program ownership when recurring risk decisions and evidence requests keep reaching leadership without anyone coordinating the work.",
    "sections": [
      {
        "h": "What a cybersecurity point solution does",
        "ps": [
          "A point solution handles a particular job, such as email filtering, endpoint threat detection or cloud backup. You can buy it directly or through a provider, but that purchase route alone does not tell you who does the work. The operating agreement should explain whether you are buying software your team runs, managed investigation or a combination.",
          "Separate tools can fit an IT team with the expertise and time to maintain them. Compatibility and overlapping licenses matter, as do the handoffs between products. An email alert suggesting account compromise, for instance, may call for an identity review and a decision about access. Someone needs to own those steps beyond the email tool's own response.",
          {
            "text": "NIST's guidance on building a cybersecurity team includes resources for discussing internal and outsourced security roles. We recommend putting those responsibilities in writing before comparing product names. A responsibility map can show the outcomes you need, what each provider commits to and the work your team retains, giving you a common basis for comparing proposals.",
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
          "You can begin that map with a recent task and your existing IT provider. Choose a reported phishing email, an unprotected laptop or a customer questionnaire, then follow it from the initial request to closure. Where did somebody have to guess who owned the next step? The answer gives you specific duties to assign:",
          {
            "list": [
              "For email, name who reviews reported messages, approves exceptions and escalates a suspected account compromise.",
              "For endpoints, reconcile the device inventory with protection records. Assign investigation and containment separately from patching and routine administration.",
              "For evidence, identify who checks the scope and date of each record, records exceptions and gets approval for a questionnaire answer."
            ],
            "ordered": false
          },
          "Then ask the managed provider to walk through an alert: how it investigates, what response it is authorized to take and how it records what happened. You should be able to see where its work ends and a decision returns to your business. Fewer notifications alone cannot establish better protection; the handling of those alerts still needs to be clear."
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
          "A questionnaire answer needs evidence for the systems the question actually covers. If it asks about endpoint protection, compare a current device inventory with protection deployment records and list the exceptions. A report covering eligible workstations cannot support an answer about every server and mobile device.",
          "Keep the questionnaire with its evidence reference, date, technical reviewer and approved answer. For a backup question, the reviewer also needs the covered data and relevant restore-test record. With those records together, they can check whether the written claim describes what operates in the firm. A policy alone leaves that question open.",
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
          "If that conversation leaves fit or scope unresolved, agree on bounded paid discovery before the work begins. Document the next step, who owns it and when you will review it."
        ]
      },
      {
        "h": "Price the operating work alongside the subscription",
        "ps": [
          "To compare prices fairly, use the same users, systems and coverage period for each proposal. Include recurring fees, implementation, transition and the work IT retains. A lower license price may suit a team that can operate the tool. A managed proposal may include work you would otherwise have to fund, so put those duties alongside the monthly price in your comparison.",
          "Consider a hypothetical comparison of two email proposals. One includes filtering and a dashboard; the other adds investigation of supported alerts and a defined escalation route. Ask both providers who reviews employee reports, changes allow-lists and handles suspected account misuse. Those answers help explain what the additional managed fee would buy. They do not describe specific vendor contracts.",
          "That extra work may also change how IT spends its time. Fewer hours reviewing routine notifications could leave more time for patching or recovery tests, even if the IT invoice stays the same. Ask the IT owner which duties would change before treating the proposal as a cost saving. Available capacity and a reduction in cost are different benefits."
        ]
      },
      {
        "h": "Make onboarding and replacement part of the purchase",
        "ps": [
          "Before replacing a service, work out how protection will continue during the change. Inventory the current agents, mail-routing settings, licenses and administrators before scheduling removal. Confirm whether the new tool can coexist during a limited transition and who will approve changes. A preferred billing date should not drive a transition that leaves a protection gap.",
          "Define acceptance checks for each service. Endpoint onboarding may need a comparison of eligible devices with active deployment records and investigation of missing entries. For email, confirm routing and test the reporting path with harmless messages. For backup, identify the workload and perform an authorized restore check. Each test answers a different coverage question that an onboarding-complete email leaves open.",
          "Agree on an exit process while both parties have time to discuss it. Name who can export reports, transfer administrative access, remove agents and document outstanding incidents. Identify records that the business must retain and any charges for transition help. Your firm should be able to understand its coverage after a provider changes."
        ]
      },
      {
        "h": "Reassess when the business changes",
        "ps": [
          "Set review triggers as well as a calendar date. An acquisition, new client requirement, cloud-platform migration or large increase in contractors can change the population a service needs to cover. A stack that fits today may leave new identities or applications outside its scope tomorrow.",
          "At each review, return to the responsibility map. Assign unresolved work, fund it where needed and verify completion. A dashboard helps only if its findings reach someone who can act, so keep the covered population, assigned duties, exceptions and next business decision in the operating record. The next review can then pick up where this one ended.",
          "Include handoffs in that review. If the email provider identifies a message and another team investigates account access, who owns the alert as it moves between them? Recording the transfer, acceptance and next action gives both sides a way to check whether the handoff succeeded."
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
    "intro": "When you compare risk assessment tools, look at what happens after a finding appears. A vulnerability scanner can identify a technical weakness, but your firm still has to work out what it means for the business. Losing a tax application during filing season and exposing a client's matter files have different consequences. A useful tool helps you explain those consequences and assign the next action.",
    "lead": [
      {
        "text": "That work takes more than an automated score. NIST's risk-assessment guidance considers threats, vulnerabilities, likelihood and impact, through preparation, assessment and ongoing maintenance. It gives you a method for assessing risk. NIST SP 800-30 Revision 1.",
        "links": [
          {
            "phrase": "NIST SP 800-30 Revision 1",
            "to": "https://csrc.nist.gov/pubs/sp/800/30/r1/final"
          }
        ]
      }
    ],
    "takeaway": "Choose a tool that shows what evidence supports each finding, what it could mean for your business and who needs to act. Check that it keeps unverified answers separate from observed evidence.",
    "sections": [
      {
        "h": "Check what the tool observes",
        "ps": [
          "Start by asking where the information comes from. A live system observation tells you something different from an uploaded document or a self-reported answer, even if the dashboard displays them together. To judge a finding, a reviewer needs to know which systems or people were assessed and when each input was collected.",
          "Consider a hypothetical 80-person New Jersey consulting firm using a tool that checks public configuration and asks staff about backups. The public checks may be observable. A staff member's backup answer still needs evidence from the responsible IT owner. If both feed into one score, the reviewer needs to be able to see that difference.",
          "This also helps you judge the feature list. Asset discovery, scanning, questionnaire collection and evidence storage can all be useful; which ones you need depends on the assessment's scope. Choose capabilities that support that scope and protect the information you collect."
        ]
      },
      {
        "h": "Test the output before purchasing",
        "ps": [
          "Before purchasing, ask for a sample assessment with fictional data. Follow one finding through the report: can you see its source, limitations, business impact and the action someone needs to take? Then try correcting an inaccurate input and check whether the review history survives.",
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
          "The sample is also a chance to review access before uploading confidential documents. Find out who can read them, where they are stored, how long they remain and what permissions integrations receive. Those answers help you decide what access and scope to approve for a tool holding evidence about your firm."
        ]
      },
      {
        "h": "Convert results into a decision record",
        "ps": [
          "The report should leave your firm with a decision record it can use. For each material risk, record the affected business process, supporting evidence, proposed treatment and accountable owner. Leadership decides what to fund and which risks to accept; IT implements the assigned technical changes. Revisit the record when systems or business requirements change.",
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
          "What decision does your firm need this assessment to support? Funding recovery improvements calls for different evidence from preparing a customer response. Either task may use a risk tool. Before choosing software, specify the business process, affected systems, intended reviewers and limits that matter for your decision.",
          "Be clear about the time period and what is covered. An assessment of the main office and email tenant might leave out a newly acquired office or specialist application. Put those exclusions where a decision-maker will see them, so the conclusions stay within the assessment's limits.",
          "Next, authorize the work the assessment will involve. A questionnaire, document review and authenticated technical test reveal different information and may affect systems differently. A sales demonstration gives no authorization to inspect production accounts.",
          "Agree on what your firm will receive and retain: findings, evidence references, limitations and decisions. If the only output is a dashboard that disappears when the subscription ends, you may lose the assessment record you need."
        ]
      },
      {
        "h": "Distinguish a technical finding from a business risk",
        "ps": [
          "Suppose a scanner identifies outdated software on a device. Before assigning a business risk, the reviewer needs to confirm the finding, check the device's exposure and understand what work it supports. The possible consequence might be interruption of a client-facing workflow, unauthorized access to records or loss of an important dependency.",
          "The report needs to explain how the observed weakness could lead to that consequence. Existing controls may reduce the risk; missing information may leave it uncertain. Give the reviewer room to record both. Otherwise, a ranking can make quite different findings look equivalent.",
          "In a hypothetical firm, a confirmed weakness on an internet-facing service used for client exchange may warrant faster attention than an uncertain finding on an isolated test device. The facts determine that comparison. It is no universal scoring rule, and internal systems still need attention.",
          "The reason for closing a finding matters too. IT might establish that a scanner result was inaccurate. Leadership might instead accept a real exposure for a limited period. Keep finding validation separate from risk treatment, and make sure the tool preserves why an item was closed or deferred."
        ]
      },
      {
        "h": "Test the scoring method with two contrasting scenarios",
        "ps": [
          "A high score needs an explanation. Does it come from unanswered questions, technical severity, framework mapping or a calculated model? Ask which inputs are estimates and who supplies them. A precise-looking number can still rest on uncertain assumptions.",
          "You can test this with two fictional cases. Give the tool good documentation alongside a confirmed operational gap, then working controls with missing evidence. See whether it distinguishes the two. The first may need a control improvement; the second may need verification and recordkeeping. Both require action, for different reasons.",
          "For ratings such as high, medium and low, ask for definitions. Would different assessors apply them consistently enough to support your decisions? Keep a record of the method used for each assessment, so you can interpret a later rating properly.",
          "Be careful when comparing scores over time or between products. Products may use different scales, and a change in scope can change the result within one product. Explain whether a finding was resolved, evidence was supplied or the method changed. Leadership needs that context to interpret the dashboard number."
        ]
      },
      {
        "h": "Check evidence handling and reviewer access",
        "ps": [
          "The evidence itself needs protection. An assessment platform can collect system details, policies and sensitive screenshots in one place. Decide which records must be uploaded and which can stay in an approved repository with a reference. Redact names and details the review does not need, while keeping enough to support the finding.",
          "Use a harmless sample workspace to inspect permissions. Check who can read evidence, edit findings, approve decisions and export records. Permission to submit an answer should be separate from authority to approve it. Ask how changes are recorded and what happens when a reviewer leaves.",
          "Before enabling automated collection, have IT review the connector's permissions. What does it read? Can it change systems, and how will its access be removed when the engagement ends? A connector may receive broader access than a manual upload, while supported platforms or licensing may limit what it can collect.",
          "Also discuss data retention, vendor access and what happens when you leave. Uploaded material, backups and shared links all need an agreed outcome when the workspace closes. Review the vendor's terms against your firm's contractual and information-handling requirements. A compliance badge alone cannot settle those decisions."
        ]
      },
      {
        "h": "Connect the report to assigned work and revisit it",
        "ps": [
          "To turn the report into assigned work, each material item needs a finding, affected business process, supporting evidence and any uncertainty. Add the proposed action, owner and dependencies, along with the person who can approve spending or accept residual risk. Without an implementation owner, the recommendation remains unfinished.",
          "Agree on what will close each item. For a recovery recommendation, buying a backup subscription does not show that a restore check succeeded. For stronger access control, a written policy does not establish enforcement. The completion evidence needs to support the claim being made.",
          "Decide when the assessment needs another look. Changes in applications, suppliers, staff access or customer requirements may invalidate an earlier assumption. A new incident or confirmed technical finding can also justify reassessment. Before reusing last year's report, review its scope and evidence dates.",
          "The people assigned to this work need a tool they can maintain and use during reviews. Transparent inputs and usable exports may help them more than a longer feature list. Judge how well the tool supports decisions and verified work before weighing its advertised number of checks."
        ]
      },
      {
        "h": "Keep findings usable when the tool changes",
        "ps": [
          "Finally, open a sample export with the person who will review the assessment. Can they understand the evidence references, owners, decisions and limitations without the dashboard? A spreadsheet of unexplained scores may satisfy an export requirement while losing the assessment record your firm needs.",
          "Check how a corrected input appears in that record. Keep the original observation, correction and reviewer where needed to explain the change. When leadership revisits the assessment, that history helps distinguish a resolved exposure from a reporting error.",
          "Earlier decisions should remain usable too. Confirm that a new assessment can reference them without silently replacing their evidence dates."
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
    "intro": "A security recommendation needs a few decisions before it becomes work the firm can approve: what should happen next, who will do it and how they will show it is finished. A list of tools leaves those decisions to you. A useful roadmap records them, so leadership can approve the next action without leaving the work itself unassigned.",
    "lead": [
      {
        "text": "For a New Jersey professional-services firm with existing IT, those decisions need to reflect how the firm handles client information, keeps work running and answers customers' requests for evidence. NIST's small-business guidance provides a structure for organizing that work and identifying gaps. Following the framework does not amount to certification. NIST Small Business Quick-Start Guide.",
        "links": [
          {
            "phrase": "NIST Small Business Quick-Start Guide",
            "to": "https://csrc.nist.gov/pubs/sp/1300/final"
          }
        ]
      }
    ],
    "takeaway": "Start with what has been checked, then agree on priorities with leadership. For each milestone, name an owner, record what must happen first and define the evidence needed to close it. Leadership retains approval of priorities and risk decisions.",
    "sections": [
      {
        "h": "Establish a baseline with known limits",
        "ps": [
          "Before deciding what to improve, agree on the firm's current systems, responsibilities and controls. Separate what someone checked from what someone reported, and keep the unknowns visible. Later milestones can then refer to a specific starting point. If a gap appears to involve a contractual or regulatory requirement, confirm that requirement with the responsible adviser before calling it a compliance failure.",
          "A public-domain scan can contribute observable configuration findings. It cannot establish internal access, device coverage or restore capability. Deeper discovery should have a signed scope, authorized access and defined deliverables."
        ]
      },
      {
        "h": "Sequence work around dependencies",
        "ps": [
          "Business impact and exposure help determine priority, but the firm also needs to be able to act. An access-policy change may depend on new licensing, enrollment or a recovery procedure before rollout. For backup improvements, the owner needs a clear inventory of the work to be protected and someone authorized to perform a restore.",
          "Consider a hypothetical 85-person New Jersey consulting firm. It could first confirm who approves client-file access, ask IT to make the agreed permission changes, then run a controlled restore test of an important shared workspace. The example gives the work a sequence; the firm's actual risks and dependencies determine whether that order fits.",
          "Each milestone should identify the responsible person, expected cost or budget decision, dependencies, target date and acceptance evidence. If implementation depends on IT or another vendor, obtain that owner's agreement before presenting the date as committed."
        ]
      },
      {
        "h": "Add evidence and leadership decisions",
        "ps": [
          "What would let the owner say this milestone is finished? Agree on that check before the work begins, and close the milestone when it passes. Installation records, configuration exports, training records and restore-test results support different claims. Choose the evidence that matches the change, and store sensitive records appropriately.",
          "The leadership review is also where missed dates and pending approvals need decisions. If leadership defers a risk, record why and when it will be reconsidered. Changes to systems, staff or client obligations may call for a revised plan before the next review."
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
            "text": "Helm Command includes the covered Core stack, a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire responses, quarterly leadership reviews, an annual tabletop and coordination with the named IT owner. Pricing starts at $10,000/month. Final quotes depend on covered users and agreed scope.",
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
          "“Deploy endpoint protection” leaves the owner with an unanswered question: which devices must be covered before the work is complete? “Reconcile all eligible workstations against active protection records and resolve documented exceptions” defines both the population and the check. That wording gives the owner a result they can demonstrate.",
          "The milestone record needs its business reason, accountable owner and implementing party, along with dependencies, a target date and acceptance evidence. Name whoever approves spending or disruption, too. A short description of what remains outside scope helps the reviewer understand exactly what closing the milestone establishes.",
          "Before leadership approves a date, the implementing owner should review the plan. An adviser's recommendation does not commit another vendor's resources. Where a dependency has no confirmed date, keep the target provisional and name the decision needed to settle it.",
          "Leadership needs enough evidence to understand completion, without circulating every sensitive technical export. Put references in the milestone record and keep the detailed records in an approved restricted system that the responsible reviewer can access."
        ]
      },
      {
        "h": "Use a staged plan without inventing universal deadlines",
        "ps": [
          "Begin by confirming important systems, their owners, supported protection and known exceptions. This first stage establishes the facts and identifies immediate decisions, including unknowns that need further authorized discovery. Urgent confirmed exposure belongs with the appropriate operating owner; it should not wait for a quarterly planning meeting.",
          "The next stage implements agreed priorities with dependencies checked. An access change may need enrollment and recovery preparation. A device rollout may need compatibility testing and an approved installation window. A backup improvement may require workload mapping before a meaningful restore test can occur.",
          "Once the work is implemented, reconcile coverage and review the acceptance evidence. Has the business consequence that prompted the work changed? Decide which records need a scheduled review and which need an earlier check when something changes. The roadmap still needs these checks after the initial project finishes.",
          "These stages do not prescribe a 30-, 60- or 90-day deadline for every firm. Sequence and dates depend on exposure, business constraints and available owners. When using an illustrative schedule, label it as a planning assumption until the implementing parties commit to it."
        ]
      },
      {
        "h": "Keep urgent work and long-term improvements connected",
        "ps": [
          "A new confirmed finding may change what needs to happen next. The appropriate owner should assess its business consequence and document the decision. If more urgent work takes priority, revise the timeline and update any resources or dependencies that have shifted.",
          "A notification alone is not enough to change the program's priorities. The responsible reviewer needs to distinguish confirmed urgent work from uncertain signals and routine maintenance. When the priority does change, record the reason and show leadership what other work will be delayed.",
          "Keep incident response separate from roadmap governance. A suspected active compromise requires the agreed notification, containment and investigation route. The planning record can capture resulting improvements later. A milestone discussion is not a substitute for authorized response.",
          "Coordinate with IT's maintenance schedule. Routine patching and administration remain with their operating owner, but material exceptions may require leadership decisions. Use the roadmap to identify those decisions while IT continues to manage its technical task queue."
        ]
      },
      {
        "h": "Plan a recovery milestone around usable work",
        "ps": [
          "For a recovery milestone, start with an important workflow and the data and systems it depends on. What would a successful authorized recovery check need to demonstrate, and who can perform it? Get the business owner's acceptance criteria before the test, especially if the result depends on recovery timing or how current the restored data is.",
          "Suppose a firm restores a defined shared workspace into a controlled location. An authorized reviewer opens and uses selected files. That hypothetical test supports a claim about that workload under those conditions. It cannot establish the recovery time for every other application.",
          "Record the recovery test's date, workload, result and limits, along with any follow-up work. If the acceptance check fails, leave the milestone open or create a clearly linked corrective item. A milestone that requires a usable restore remains unfinished when the firm has only bought the backup product.",
          "Check which recovery duties sit outside the security service. IT may need to restore applications or rebuild systems, while specialist response and business notification have other owners. Include those dependencies in the plan before presenting recovery improvement as completed coverage."
        ]
      },
      {
        "h": "Make evidence and exception reviews explicit milestones",
        "ps": [
          "The claims a firm makes to customers and insurers need records behind them. For each claim, identify the control owner, evidence location, date and covered population. If the evidence is stale or missing, schedule a review before the next submission. That gives questionnaire drafting a place in the ongoing plan.",
          "For each material gap, leadership needs to decide whether to approve treatment, request more information or accept a defined risk with conditions and a review date. Record the rationale and responsible person. An accepted risk still needs to be distinguished from a gap that has been technically resolved.",
          "The exception owner also needs to know when to bring the decision back to leadership. A new client requirement, platform change or failed control check may make the original justification obsolete. Recording that trigger helps prevent an exception from staying open after its reason has changed.",
          "Use summaries for governance and controlled references for supporting records. The roadmap should be readable by decision-makers without circulating credentials, incident details or unnecessary personal information. Evidence quality includes handling the record appropriately."
        ]
      },
      {
        "h": "Measure progress through verified outcomes",
        "ps": [
          "A finished task column tells leadership little about what was verified. Report completed milestones against their acceptance checks, then explain the outstanding dependencies, missed dates and decisions awaiting approval. If scope changes, show the new population or requirement so the comparison remains meaningful.",
          "Use numbers only when they describe something measured. For example, a fictional coverage check could record 48 of 50 eligible devices reconciled, with two exceptions assigned to IT. That is 96 percent of the stated population at the check date. It is not a security score or a claim about excluded systems.",
          "Spending, attendance and document counts describe activity. Leadership can assess that investment more usefully when the report also explains what changed, what was verified and what remains uncertain about the business problem the work was intended to address.",
          "At the next review, unresolved decisions need current owners and dates. Retire superseded work with a reason and keep its history, so the next action is clear and leadership can still explain why the firm chose it."
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
    "intro": "An unusual payment request arrives, and the person on the call looks and sounds like an executive you know. Should staff release the money? They still need to verify the instruction and complete the firm's approvals. Synthetic or manipulated audio and video can make an impersonation convincing, so a familiar face or voice cannot authorize a payment on its own.",
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
          "For a firm reviewing its payment process, the useful point is that a familiar appearance can accompany a fraudulent instruction. Training should stay within what these reports establish: they do not show that every executive impersonation uses AI or that every video call is fake. They also do not establish how many seconds of audio would reliably produce a convincing clone."
        ]
      },
      {
        "h": "Separate identity confidence from approval",
        "ps": [
          "Recognizing the caller answers only part of the question. Staff also need to confirm the business purpose and actual beneficiary, establish that the person is authorized to give the instruction, and identify who may release the funds. Those checks still matter when everyone agrees about who is speaking.",
          "A real executive can make a mistake, and a familiar account can be compromised. Applying the same financial rule to apparently authentic senior requests helps the process address ordinary errors as well as impersonation.",
          "The payment record should connect what was approved with what was released. If the beneficiary changes after approval, review the replacement separately. A callback confirming one account tells you nothing about whether a later payment to a different account was authorized."
        ]
      },
      {
        "h": "Establish the trusted route in advance",
        "ps": [
          "Independent verification needs a contact record staff can trust before an unusual request arrives. Collect approved details for executives and outside parties through an established business process. Restrict who can change that record, and provide an alternate route when the primary contact is unavailable.",
          "For an unusual transfer, staff can then use that record to reach the authorized person and confirm the details. A number supplied in the request, a new meeting link from the same message or a reply to the same potentially compromised thread may all remain under the requester's control.",
          {
            "text": "The FBI's guidance on AI-enabled financial fraud describes synthetic text, audio and video used in fraud and recommends independent verification. To use that guidance at work, employees need to know where the approved contact record is and whom to reach. Awareness of deepfakes alone does not give them a way to verify a payment.",
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
          "The approval thresholds and named approvers should fit the transactions your firm handles and the terms that apply to them. Where client funds or regulated transactions are involved, have the relevant finance and legal advisers review the rule. The framework here describes a way to operate; it is not a universal legal requirement for every business.",
          "A useful record shows who verified the instruction, which trusted contact source they used, what they confirmed and who approved release. It does not require full banking details in every status message: staff can refer to a controlled payment instruction. Limit access to the people who need it."
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
          "What should staff do when the caller insists there is no time for a check? Fraudsters may use urgency, confidentiality or seniority to discourage verification. A legitimate urgent request can put staff under the same pressure, so the process needs to work in either case.",
          "Leadership should make clear that pausing for approved verification is expected. An executive asking for an exception needs to follow the authorized exception route and provide the required evidence. Otherwise, staff are left deciding alone whether an apparent senior instruction overrides a financial control.",
          "That includes deciding in advance what happens if the executive is unavailable near a payment cutoff. Staff should use the established alternate route or hold release until authorized verification is complete. Leaving that choice until the deadline can lead them to bypass a procedure they cannot finish."
        ]
      },
      {
        "h": "Avoid making visual clues the primary control",
        "ps": [
          "An odd sound, unnatural movement or inconsistent background can be a reason to pause. A call without those clues still needs verification. Product capabilities and attack methods change, and staff processing a payment or answering a client call cannot be expected to perform media forensics.",
          "They can report the suspicious request and preserve what they received without deciding how it was generated. A polished message might come from ordinary account compromise or conventional impersonation; its appearance does not prove that AI was involved.",
          "If your firm considers a media-detection product, ask what conditions it has been tested under, where it is limited and what false results it produces. Keep its assessment separate from payment authorization. A detector's confidence score cannot replace the required verification."
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
          "The trusted contact list also needs protection. An attacker who can alter it or shared financial records may affect the verification route itself. Name the owner who approves changes and the administrator who implements permissions, record meaningful changes, and review access when staff leave.",
          "External exposure review may also identify impersonation using the firm's name. A report can support investigation and platform reporting, but it does not guarantee rapid removal of every fake account. Confirm the relevant service's monitored assets and response scope before relying on it."
        ]
      },
      {
        "h": "Test a transaction rather than a fake-video contest",
        "ps": [
          "A harmless exercise can show whether staff can follow the process under pressure. In the exercise, an apparent senior request introduces a new beneficiary and a tight deadline. Have staff show which trusted contact they would use, how they would verify the instruction, and how they would obtain approval and decide whether to release funds. Include the payment operator and alternate approver.",
          "Do not use real client banking details or send an unannounced synthetic executive recording outside the agreed exercise scope. The purpose is to test the financial process and reporting route, with approved participants and materials. Record the actual steps and any missing authority.",
          "The record of that exercise should tell you what to fix. An unavailable trusted number needs a maintained contact; an ambiguous approval rule needs a decision from leadership. If staff cannot reach the approved record, arrange appropriate access. Repeat the affected step to check that the correction works."
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
          "When communicating through trusted channels, stick to confirmed facts. A recording that resembles an employee does not establish that the employee authorized the transfer. The investigation and coverage review need evidence of what happened.",
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
          "Once the verification route is in place, someone needs to maintain it. Assign an owner for the executive and supplier contact details, and require independent confirmation through an approved process before a change. The unusual payment request itself should not trigger an unverified edit. Record who approved each change and when it took effect.",
          "Update the record when people change roles or leave, and test the alternate contact during a planned exercise. A stale number or an alternate without the necessary authority can leave staff unable to complete verification. Keep evidence of those checks after the initial setup."
        ]
      }
    ],
    "takeaway": "Verify the instruction through a trusted route and complete the required approvals. A familiar face, voice or account provides context; it cannot authorize the transaction on its own.",
    "lead": [
      "Staff need a way to check the request independently, along with permission to pause it while they do. That process should cover unusual requests for money or information even when they come from a recognizable account or appear to involve senior leadership. It should work without requiring anyone to prove that the recording is artificial."
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
    "intro": "If you pay for digital risk protection, what happens when it finds a website using your firm's name or a potentially exposed credential? The answer depends on what the service monitors and who reviews its findings. Providers look for defined external exposures, using different assets and sources, so check both the coverage and the response before choosing one.",
    "lead": [
      "For a New Jersey professional-services firm, the starting point is the domains, public identities and online services clients use to recognize you. A reviewer needs to know which of these belong to the firm before deciding whether a reported page or account is an impersonation."
    ],
    "takeaway": "Choose the public assets and sources you need monitored, then confirm who will review findings and what response assistance the price includes.",
    "sections": [
      {
        "h": "Choose the assets that matter",
        "ps": [
          "Start with approved domains and client-facing accounts your team has the capacity to review. Each needs an owner who can confirm whether a reported page, account or message is authorized. Monitoring more assets also means being able to act on findings about them.",
          {
            "text": "The FTC business-impersonation guidance describes how scams use trusted identities and pressure to obtain payment or information. Monitoring may flag a possible impersonation. Staff still need an independent way to verify the request, because an alert cannot make that decision for them.",
            "links": [
              {
                "phrase": "FTC business-impersonation guidance",
                "to": "https://consumer.ftc.gov/features/pass-it-on/impersonator-scams/business-impersonator-scams"
              }
            ]
          },
          "Suppose an accounting firm learns about a lookalike website using its name. In this hypothetical case, the authorized reviewer would preserve relevant evidence without submitting credentials to the suspected site, confirm the impersonation and identify the appropriate hosting, registrar or platform reporting route."
        ]
      },
      {
        "h": "Ask what happens after detection",
        "ps": [
          "A notification may leave your team to handle the response. Other services help prepare abuse reports or coordinate specific actions. Ask which work the provider includes, keeping in mind that takedown depends on the relevant platform and evidence. A provider should not promise that every impersonation will disappear on demand.",
          "An exposed-credential alert needs a similar review. It may be incomplete or refer to an older exposure, so the finding alone does not establish a current compromise. Have IT verify the affected account and take approved access actions. If the evidence points to a wider incident, involve the authorized responder.",
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
          "These answers help you compare the workload as well as the subscription. A low-cost service can still leave an already busy administrator with notifications nobody has reviewed."
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
            "text": "Helm Command adds a risk register, roadmap, evidence upkeep and coordination with the named IT owner. That gives an unresolved external finding a place to be tracked, with someone responsible for it. The scope does not guarantee takedowns or include unlimited forensic, legal or administrative work.",
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
            "text": "Once you have identified approved public assets and named the response owner, Helm's free public-domain scan can check public email and web configuration. Its scope is limited: it does not search every external data source or establish that your brand and credentials have never been misused.",
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
          "A broad service label can cover a few sources and a response that ends at notification. Ask vendors to break out business impersonation, lookalike domains, exposed credentials and any other monitoring they propose. You can then compare the source list and response process for each category.",
          "For each category, record the legitimate assets clients use to recognize the firm: approved domains, public accounts, brand names and relevant contact points. Include their owners. When a possible match arrives, that record helps the reviewer distinguish an impersonation from an authorized campaign or a newly created provider page.",
          "The response should fit how clients encounter the firm and the consequences of that interaction. A fraudulent payment instruction may require financial verification alongside an external report. An impersonated public announcement account needs someone with authority to confirm the misuse and approve a response. Prioritize the interactions with the largest consequences when assigning these routes."
        ]
      },
      {
        "h": "Examine source coverage and freshness",
        "ps": [
          "Where does the service look, and what can it miss? Ask the provider which sources it uses and which remain outside its coverage. You also need to know how often it collects observations, when it notifies you and what information comes with a possible match. Coverage should not be assumed to include the entire internet, every private forum or every credential collection.",
          "A recent observation can contain old information. Keep the observation date separate from the age of the reported exposure: an old credential finding can warrant an access review without proving the password still works. IT should assess the account and its safeguards through the approved process.",
          "A sample report makes these questions easier to answer. Request one with fictional or appropriately sanitized data, then ask whether your reviewer could identify the asset, source, time and proposed next step. A category label alone gives them little basis for deciding what to do."
        ]
      },
      {
        "h": "Keep validation separate from detection",
        "ps": [
          "A similar domain may belong to an approved campaign, an authorized provider or an unrelated organization sharing the firm's name. Before making an accusation or requesting removal, the designated reviewer needs to check the possible match against legitimate assets. Business context helps them distinguish these cases.",
          "For a suspected malicious site, preserve relevant observations without entering credentials, downloading unknown files or interacting unnecessarily. Use authorized specialists where technical investigation is needed. The business owner can confirm branding and authorization while the specialist handles the appropriate technical assessment.",
          "A credential report needs an authorized administrator to assess the account, take approved access actions and decide whether incident investigation is warranted. Do not test a reported password by trying to log in as the employee. You can take protective action without treating the finding as proof of a current compromise."
        ]
      },
      {
        "h": "Compare response assistance in detail",
        "ps": [
          "For takedown assistance, ask exactly who does the work. Does the service submit requests, supply templates or only identify the reporting route? The outcome still depends on the relevant platform, evidence and process. Assistance is not a guarantee that every site or account will be removed within a fixed period.",
          "The response plan also needs to cover a rejected or ignored report. Name the business escalation owner and identify any legal or specialist work that requires a separate engagement. If the provider tells you to contact support, you should know who takes the case and what help remains in scope."
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
          "Depending on the facts, an exposed-credential notification may call for a password reset, authentication review, session action or investigation. IT needs to follow the actual platform procedure and record the result. Changing one password should not be assumed to invalidate every copied secret or independent application session.",
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
          "To judge whether a service fits the budget, compare its fee with the proposed assets, monitoring categories and work after an alert. Include validation, reporting assistance, follow-up and records access, and ask how adding domains or public identities changes the price. A lower subscription fee may leave more work with your team.",
          "Use a representative report or pilot to estimate the internal time needed. Who would review it, and who would make the related IT or business changes? Treat that estimate as an assumption, not a promised saving. Even an affordable service needs a team with enough capacity to act on meaningful results.",
          "More notifications do not necessarily mean better value. Broader scope, duplicates and false matches can all raise the count. Track what the review found: confirmed issues, legitimate assets, unresolved findings and completed supported actions. State the counting rules when reporting those outcomes to leadership."
        ]
      },
      {
        "h": "Run a bounded onboarding check",
        "ps": [
          "Confirm that the provider enrolled the approved asset list, including the correct ownership and naming variations. If an important domain is missing, successful monitoring of other domains does not fill that gap.",
          "Use harmless examples or provider-supplied sample findings to test routing and review. Identify who confirms the business context, prepares the response and tracks the result. Do not register a confusing live lookalike or publish fake customer-facing material merely to create a test without a separately approved plan.",
          "Record the acceptance criteria and unresolved exclusions after this check. You should be able to establish that the agreed assets, reporting and response route are set up, while remaining clear that this does not prove every possible external misuse will be found."
        ]
      },
      {
        "h": "Maintain assets and evidence as the business changes",
        "ps": [
          "The asset list needs to change with the business. Update it after a rebrand, acquisition, new public account or campaign domain, and identify legitimate temporary assets and their end date. That gives the reviewer a way to check a newly observed page without guessing whether it belongs to the firm.",
          "Keep findings and sensitive account information in an approved restricted location. General operating records can identify the process and responsible owner without copying exposed credentials or live incident details. Confirm export and retention arrangements if the service ends.",
          "Leadership needs to know about significant unresolved issues, response status and changes in coverage. A quiet period also needs a precise explanation: the configured service reported no relevant findings. That does not establish that the firm's name or credentials were never misused."
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
    "intro": "When you compare an email security gateway with a managed gateway service, consider who will run it alongside your existing IT provider. The gateway checks messages before they reach staff, but someone still has to maintain the filters, review reports and make decisions about held messages. A managed service can take on agreed parts of that work.",
    "lead": [
      "That work includes distinguishing a blocked attachment from a legitimate client email delayed in the same quarantine queue. Whoever owns the queue needs to respond within the firm's agreed working hours. Comparing those responsibilities with what IT already does will help you decide which arrangement fits."
    ],
    "takeaway": "Compare where the gateway inspects mail, which filtering features are configured and who owns quarantine review. Then check which responsibilities the managed service accepts in writing.",
    "sections": [
      {
        "h": "Compare the deployment before the service contract",
        "ps": [
          "Start by asking the provider to draw the mail flow. A gateway may run on infrastructure maintained by IT or in a cloud service that routes your mail; other products connect to the mailbox platform. Where the product sits determines which traffic it can inspect, including internal messages and mail from business applications. You need that coverage picture before deciding who will manage it.",
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
          "With a software-only purchase, your firm or IT provider usually configures policies, handles exceptions and reviews suspicious messages. When comparing a managed service, use those same tasks to check what changes: which will the provider perform, and which still need your approval?",
          "Consider a hypothetical 40-person CPA firm receiving tax documents from unfamiliar clients. A legitimate file may need to be released, but permanently trusting the sender's entire domain would be a much broader change. Ask the vendor to demonstrate how staff request a release, how the reviewer decides and what record remains. The firm needs a safe way to recover client mail within the agreed process.",
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
          "The inventory also needs a date and an owner for review when the business adds a sending service. A department may buy an application without involving the email administrator, leaving its messages on a route missing from the original record. Updating that record gives IT and the provider a chance to check the new route."
        ]
      },
      {
        "h": "Demonstrate the handling of an ordinary false positive",
        "ps": [
          "A false positive is a legitimate message that the filter holds. Ask the provider to demonstrate how a staff member requests its review, using approved harmless test content. Follow the request through the reviewer’s decision and release, then check the record left behind.",
          "Confirm which quarantined messages users may release themselves and which require an administrator or security reviewer. Base the answer on the configured policy. Staff need a usable route for legitimate documents, but they should not have to judge every unfamiliar attachment just because the product permits self-release.",
          "A release can also lead to a request for an exception, so discuss that approval process separately. A temporary adjustment for one message and permanent trust in a sender or domain have different effects. Broad exceptions can change protection well beyond the original delivery problem. Record who may approve each type, how its scope is limited and when it is revisited.",
          "Agree how quickly business-critical messages should be reviewed within the actual service hours. Explain how staff escalate a delayed invoice or client document and what happens outside the normal queue. 'Managed' and 'continuous monitoring' do not, by themselves, set that response expectation."
        ]
      },
      {
        "h": "Evaluate a report of credential entry",
        "ps": [
          "If an employee reports entering credentials through a suspicious link, the firm needs an account-response decision as well as an email-filtering decision. Ask who receives the report, who investigates the account and which containment actions are authorized. Some actions may need the tenant administrator or another responder; identify those responsibilities in the proposed scope.",
          "Keep the incident handoff concrete. The provider should identify the business contact, alternate communication route and information needed for escalation. An email-security service may remove messages without supplying full forensic investigation or recovery. Those boundaries should be clear before the incident.",
          "Review payment-related reports separately. A provider’s technical analysis cannot authorize a vendor bank change. Finance should use its established verification and approval process regardless of whether the message was quarantined, released or authenticated successfully.",
          "Use the same fictional scenario with each vendor so you can compare the assigned work. A demonstration shows how the product behaves, while the written scope establishes which responsibilities the provider accepts. Resolve any unanswered questions there before purchase."
        ]
      },
      {
        "h": "Plan the routing change as a business change",
        "ps": [
          "Agree an onboarding sequence with IT and the service provider. Identify test mailboxes, senders, expected behavior and acceptance criteria. Keep the previous configuration and the authorized recovery procedure available to the people carrying out the change.",
          "Test normal correspondence and business-generated messages. Include shared mailboxes and the external recipients involved in important workflows. The pilot should identify delivery effects as well as threat-handling capabilities. Do not test with live harmful files or unapproved phishing activity.",
          "Employees also need the procedures before rollout: how to report suspicious mail, request a quarantine review and get help when expected mail is missing. Include them in the rollout notice. Someone waiting for an urgent client attachment needs to know how to recover it, as well as why the protection is changing.",
          "Name the people who check the pilot results and approve the rollout. Correct coverage or compatibility issues before expanding, and keep unfinished onboarding tasks assigned and visible. If those assignments remain unclear, the firm may start using the service while each team assumes the other owns the unfinished work."
        ]
      },
      {
        "h": "Compare the complete operating cost",
        "ps": [
          "Compare the cost of running each arrangement, including software, onboarding, configuration and the staff time left with the business or existing IT provider. Ask about separate charges for incident work, special mail flows and recovery. A lower subscription price may leave your team with more recurring work. A higher one may still exclude duties you expected.",
          "Request a sample report that explains coverage, relevant events and unresolved exceptions. Counts of blocked messages can help describe activity, but they do not establish that the service prevented a particular loss or investigated every account issue.",
          "Before signing, review how you would leave the service, too. Identify who changes routing, exports the agreed records and removes the provider's access. Operating the protection layer should leave the business's control of its domain and tenant clear."
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
          "The sales demonstration gives you a procedure to test in the pilot. Repeat it with harmless messages and actual staff roles to confirm that the release rules and escalation route work in your configured environment. Staff should be able to recover time-sensitive client mail without blanket permission to release suspicious attachments.",
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
    "intro": "Two email security offers can list similar tools and leave very different amounts of work with your staff. Before comparing the monthly price, ask each vendor what happens when an employee reports a suspicious message. Who reviews it? Who can act if the employee entered a password or changed a payment?",
    "lead": [
      "The answers show how the service works when a message gets through the filter. If your firm already has IT support, they also help you work out where the security provider takes over and where IT still needs to act."
    ],
    "takeaway": "Compare which accounts the service covers, how it handles reports, who can contain a suspected compromise and when it escalates. Then check what work remains with your existing IT provider.",
    "sections": [
      {
        "h": "Walk through one incident before signing",
        "ps": [
          "Use the same hypothetical incident with every bidder: an employee reports a bank-detail change and says they entered their password on the linked page. Have the vendor walk through how it would review the message and investigate the account. Follow the report from the person receiving it to whoever acts, and confirm who informs your business contact.",
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
          "Your existing subscriptions may already include some of the proposed protections. Have IT confirm that overlap and how the new service connects to your platform, then request a mailbox and domain coverage schedule that includes shared accounts and third-party senders.",
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
          "A sample report helps you check those answers. Look for covered services, relevant events and unresolved exceptions. A large blocked-message count tells you little about whether the right people investigated an employee’s compromised credentials."
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
            "text": "When you prepare a questionnaire response, that scope needs to carry through to the evidence. One console screenshot cannot establish coverage for the whole organization. Tie each answer to dated evidence, identifying excluded mailboxes and unresolved policies. The insurance questionnaire guide can help with that review.",
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
          "Holding a license does not tell you whether a mailbox is protected. It may still sit outside a policy, or a supported integration may be unfinished. Ask the provider what evidence will show that onboarding is complete for the mailboxes and accounts in scope.",
          "That schedule also needs an owner after onboarding. Establish who adds new users, checks shared mailboxes and reviews new sending applications, and record responsibility for each event. Without those updates, a service report can continue to describe the original mailbox population even as coverage changes.",
          "Date the coverage schedule and record unresolved exceptions. That allows the firm to show what was covered when it prepared a customer or insurer response. A general, undated statement that email security is enabled cannot answer a detailed question about which mailboxes were protected."
        ]
      },
      {
        "h": "Ask vendors to distinguish the protections",
        "ps": [
          "Sender authentication, impersonation handling, malicious-file inspection, link protection and post-delivery response address different conditions. Have the vendor explain each in plain language so you can see what its feature list covers. None of that should become a promise that phishing cannot reach staff.",
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
          "A demonstration with approved harmless messages lets you follow the reporting process yourself. Check that a staff member can report a concern and that the assigned reviewer receives enough information to assess it. What feedback does the employee get, and where should they take further questions?",
          "In the demonstration, also simulate a report from someone who has already clicked a link or entered credentials. Classifying the message may leave account investigation and authorized containment still to do. Confirm who owns those steps and how the service escalates when the work goes beyond its scope.",
          "Check the alternate route when the main account is unavailable or suspected to be compromised. An employee locked out of email still needs a trusted way to report what happened. Record that contact before relying exclusively on an in-mailbox button.",
          "A quick acknowledgement does not tell you whether the investigation is finished. To evaluate report handling, review records of decisions, escalations and unresolved cases. The monthly report should make it possible to identify work still waiting on your firm or its IT provider; ask the vendor how it does that."
        ]
      },
      {
        "h": "Examine exception authority",
        "ps": [
          "Filtering can interrupt legitimate work, and exceptions can weaken protection if they are broader than necessary. Ask who reviews requests, who approves changes and how the change is limited. Staff should not need to guess whether to release an unfamiliar file simply because a deadline is approaching.",
          "The exception record should let you understand the decision later. Request an example showing the reason, scope, approver and review date where applicable. If one delayed message led to a permanent whole-domain exception, examine that more closely than a narrowly approved release.",
          "If business administrators can change policy directly, agree on how they will inform the provider. When several administrators work independently, the provider may miss changes that affect coverage. Recording this process also helps resolve a later dispute about who disabled a protection.",
          "Include removal of outdated exceptions in maintenance. A review should distinguish justified ongoing arrangements from changes that no longer serve a business purpose. Leave unresolved limitations visible in the report rather than hiding them behind a general protected status."
        ]
      },
      {
        "h": "Compare service scope with the people available",
        "ps": [
          "Ask which team provides monitoring, review and containment. Confirm hours, escalation routes and supported actions through the written agreement. A vendor-operated continuous service and a locally staffed provider are different delivery arrangements; the firm should know the model without assuming one from the branding.",
          "Read the security proposal alongside your existing IT contract. Compare who handles tenant administration, routine remediation, licensing and recovery. If both providers expect the other to perform a task, assign it before onboarding so the business is not waiting for an owner during an incident.",
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
          "Use the same questions for each vendor, then compare the answers with the people and time your firm has available. You need a service that takes on the work you want performed, with limits your business can manage. The record below keeps that comparison tied to evidence."
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
    "intro": "When an employee leaves, which access needs to end, and which records need to stay? Deleting an account too soon can remove information the firm needs for handover or retention. Disabling email alone may leave other applications accessible. Plan access removal and record preservation together so each owner knows what to do at the authorized departure time and how to record completion.",
    "sections": [
      {
        "h": "Start with an authorized request and a precise time",
        "ps": [
          "HR or the responsible manager should authorize the access changes and specify the employee, status and departure time. Confirm that request through the established process. An unverified departure email could itself be an impersonation attempt; IT needs a trusted instruction before changing access.",
          "Specify whether access ends immediately or at an agreed time after handover. A scheduled departure gives the business an opportunity to transfer responsibilities before access closes. An urgent departure may require containment first and a more careful evidence review. The coordinator should know which process applies without distributing the reason to unnecessary recipients.",
          "The usual coordinator may be on leave when a departure request arrives. Name a backup, record where the checklist and approved contacts are held, and make sure the backup can start even when the main collaboration system is unavailable."
        ]
      },
      {
        "h": "Inventory the access that needs to end",
        "ps": [
          "Begin with the identity provider, email and cloud documents, then check payroll, finance, customer systems, remote access and specialist applications. Include systems purchased by a department and accounts that do not use single sign-on. The departing person’s manager and application owners can help identify those services.",
          "An ordinary sign-in may cover only some of the identities a person used. Review administrator accounts separately, along with secondary accounts, vendor portals, password-manager access and remote support tools.",
          "Also identify physical and operational access: keys, badges, company phones, security keys and any equipment in their possession. Your checklist should state who records each item, who collects it and how an unreturned device is escalated. Avoid marking everything complete because a laptop was handed back.",
          "As owners identify missing systems, add them to the onboarding and account ownership records. The next coordinator can then begin with a known inventory instead of searching receipts and message history again."
        ]
      },
      {
        "h": "Block sign-in and address existing sessions",
        "ps": [
          {
            "text": "A person who cannot sign in again may still have an active session. Have the authorized administrator follow the platform's documented removal process and verify what remains active. Microsoft's former-employee guidance covers access blocking, data preservation, devices and mailbox continuity. Coordinate those steps before deleting the account.",
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
          "Retention and backup serve different purposes. Before deleting information, confirm what your actual retention settings, holds and backup service cover. If the administrator cannot establish the consequences, leave the deletion decision open until that uncertainty is resolved."
        ]
      },
      {
        "h": "Handle mailbox continuity deliberately",
        "ps": [
          "Decide who handles new messages, which address remains available and how external contacts will be informed. A shared mailbox or approved forwarding arrangement may support continuity, depending on the platform and license requirements. The original user’s sign-in should not remain the business’s long-term handover mechanism.",
          "Review existing forwarding rules and delegates. Remove unauthorized external destinations and unnecessary access through the approved process. Preserve relevant evidence if a suspicious rule may be part of an incident, rather than erasing it without a record.",
          "Permissions granted for a brief handover can persist for months without a review. Give the continuity arrangement a review date and a person responsible for deciding whether successor mailbox access is still needed and whether the address should keep receiving mail.",
          "Explain the new contact route to staff and customers as appropriate. Clear ownership reduces the pressure to reactivate a departed person’s login because a client sent an urgent request to the old address."
        ]
      },
      {
        "h": "Remove shared credentials and other access paths",
        "ps": [
          "A person may still know or have copied a shared password after you remove them from the password vault. Rotate shared secrets that remain usable, particularly for important accounts. Where a service supports individual users, replace shared access with named accounts and appropriate permissions.",
          "Before changing API keys, tokens or other access grants, ask the application owner what depends on them. A business integration may need a safe replacement or reassignment to continue operating. A personal grant with no remaining business purpose can follow the removal procedure.",
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
          "An approved tabletop exercise lets you check the process with a fictional employee and a representative list of systems. Ask the coordinator to locate the request process, contact each owner and explain what completion evidence would be retained. Keep real accounts active throughout the exercise.",
          "For that fictional departure, include an automated report owned by the employee and an application outside single sign-on. Can the team find the handover and removal tasks without prompting? Use missing owners, unclear timing or unsupported recovery claims to revise the checklist before a real departure makes them urgent."
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
    "takeaway": "Start with an authorized departure time and an inventory of access. Block sign-in and address existing sessions, preserve required records, then transfer business ownership and remove the remaining access paths. Verify each owner's completion evidence. Anything unresolved stays assigned as an open exception; one account change cannot establish that the whole departure is complete.",
    "lead": [
      "A written checklist gives a named coordinator a way to track the technical owners' work. It should cover normal resignations, urgent departures, contractors and role changes, while keeping sensitive personnel information limited to the people who need it to carry out those actions."
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
    "intro": "If a client folder disappears, can your team get the files back with the access it needs to keep working? Google Workspace has retention and recovery features, but each covers different situations. Choosing whether to add managed backup starts with the information you need to restore and who is authorized to restore it.",
    "lead": [
      {
        "text": "Google explicitly states that Vault is not designed as a backup or archive tool. Its exports support legal discovery; that is a different task from restoring the information your team uses day to day. Relying on Vault for every restore requirement can leave gaps. Google Vault FAQ.",
        "links": [
          {
            "phrase": "Google Vault FAQ",
            "to": "https://knowledge.workspace.google.com/vault/getting-started/google-vault-faq?hl=en"
          }
        ]
      }
    ],
    "takeaway": "Compare Google recovery and Vault retention with what your team needs to restore. For each workload, confirm what is protected and who is authorized to perform the restore.",
    "sections": [
      {
        "h": "Review native recovery before adding a service",
        "ps": [
          {
            "text": "Your Workspace administrator can start by documenting the edition, retention rules and recovery methods for the data your firm uses. For deleted Drive data, administrator recovery has a limited window and process restrictions. Whether it will help depends on the actual loss event, so check that event against current guidance before relying on recovery. Google Drive administrator recovery.",
            "links": [
              {
                "phrase": "Google Drive administrator recovery",
                "to": "https://knowledge.workspace.google.com/admin/drive/recover-deleted-files-and-folders-for-drive-users?hl=en"
              }
            ]
          },
          "Keep personal Drive content, shared drives, Gmail and other workloads separate in the inventory. Coverage for one does not establish coverage for the others. Calendar, Contacts and Chat also need explicit decisions about what will be protected."
        ]
      },
      {
        "h": "Compare the restoration process",
        "ps": [
          "For a hypothetical 35-person New Jersey firm, a useful test could be recovering a deleted client folder. An authorized administrator would restore non-sensitive sample data, then check whether the expected files and access arrangements are usable. Sharing and permissions need their own check: getting the content back does not establish that every working relationship has returned.",
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
          "A provider may offer a recovery-time objective, or a target for how long recovery should take. Ask which agreed scenario it covers and what assumptions it depends on, along with charges for work outside the standard process. Keep failed tests and excluded data in the record too. Successful results alone will not describe the firm's ability to recover."
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
            "text": "When a customer asks about backup, give the protected population, workload and test date. One console cannot support a claim that all Workspace data is backed up. The backup-testing guide explains what evidence to prepare for that discussion.",
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
          "The inventory needs an owner and a recovery method for each important workload. Gmail, individual Drive accounts and shared drives may have different access and recovery arrangements; Calendar, Contacts, Chat and applications that use Workspace information also belong in the review. A user license alone cannot show that all of this information is covered.",
          "Ask business owners where the authoritative copy lives. A project document may be shared through Drive while its signed final version belongs in a different records system. Or a spreadsheet may feed an accounting application with recovery needs of its own. The inventory should capture those relationships so the firm does not restore a visible file and overlook the system needed to use it.",
          "Ownership matters for externally shared files. A file can appear in a user's Drive while belonging to another organization; seeing it there does not establish that your backup can capture or restore it. Confirm the provider's capabilities for that arrangement. For essential information, agree with the data owner where the authoritative copy belongs and who is responsible for recovery."
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
          "Before an account changes, the responsible records adviser should decide whether information must be preserved, and the authorized administrator should implement that decision. Record who owns it and what action is required. That gives the person following an offboarding checklist an explicit instruction about whether a hold can end or records can be deleted during a departure or service cancellation."
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
          "A pilot can use a hypothetical consulting team's request to recover a deleted client folder containing several documents and a spreadsheet. The operator needs to find the relevant recovery point and restore to the approved destination. Then the business owner checks the result.",
          "Check the folder structure, usable content, ownership and intended access. If the service restores content but requires separate permission repair, record that work and its owner. Ask how a restore affects documents edited after the selected recovery point. Decide how the team will reconcile current work before allowing a broad restore over an active workspace.",
          "Walk through how the restore request is approved. A request involving sensitive client information needs an authorized person, and the provider should explain whether a user can restore covered data or an administrator must do it. Confirm where the activity is recorded. Those steps determine whether the firm can use the advertised features safely during a busy period."
        ]
      },
      {
        "h": "Examine coverage changes and missed captures",
        "ps": [
          "Ask how the service identifies new users, shared drives and other covered objects. Determine whether enrollment is automatic, whether an administrator approves additions and what an excluded object looks like in reporting. A new shared drive created for a client should trigger a coverage decision when the work begins.",
          "Compare the backup inventory with the business inventory, including objects that were never enrolled. An important shared drive can be absent from the service even while enrolled objects show a green status. Review failed captures and exclusions as well, assigning an owner and a decision date to each exception.",
          "If access permissions expire or a connection fails, how will the firm find out? Ask the provider about notification, the support route and the evidence for the last usable recovery point. A coverage percentage is only useful when its denominator is clear; reporting should show what was protected and what needs action."
        ]
      },
      {
        "h": "Protect the ability to recover",
        "ps": [
          "The recovery plan also depends on access to the backup itself. Identify who administers production Workspace and who administers the backup. If the same identity controls both, review additional protections and recovery dependencies with IT. Ask how someone would reach the backup if the main administrator were unavailable or the production tenant could not be used. These are dependencies to manage; no architecture is guaranteed to eliminate every attack path.",
          "Store the recovery contact list and approved procedure somewhere the response team can reach during the scenario it covers. Include provider escalation, business authorization and any specialist support that must be separately engaged. Test the contact route during a planned exercise, with harmless sample data and agreed boundaries."
        ]
      },
      {
        "h": "Measure evidence rather than reassurance",
        "ps": [
          "Keep a record of each test: the workload, requested item, recovery point, destination, authorization, operator and result. Include whether the business owner confirmed usability, how long the restore took and any manual repairs. An incomplete restore still provides useful evidence if someone is assigned to address the gap and follow it up.",
          "Leadership needs to know which workloads are covered, when the last meaningful restore test occurred and which exceptions remain. This is what the firm has demonstrated through recovery testing, and client or insurer answers should stay within that scope. Unsupported workloads and externally owned files can make a claim that all Google data is backed up difficult to support."
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
    "intro": "If you already have an IT provider, what would managed Google Workspace security add? Start with the work your firm needs someone to do. Email protection is part of it, but so are administrator access, recovery and the permissions that let people share client files or connect an application to Workspace data. Review which duties your existing IT provider can maintain, then compare the defined protection or program work a security provider would add.",
    "lead": [
      "Your Workspace edition and current settings set the limits of that comparison. A feature available in one edition or configuration may be absent from another, so confirm what you have before comparing proposals."
    ],
    "takeaway": "DIY can fit when your IT team has the time to maintain settings, review security events and keep evidence current. For a managed service, confirm which Workspace protections it supports, what response actions it can take and which administration stays with IT. Check your edition, administrator access and sharing controls before choosing.",
    "sections": [
      {
        "h": "Review the Google-specific controls",
        "ps": [
          {
            "text": "The Google Workspace security checklist gives your IT owner a starting point for reviewing two-step verification, administrator safeguards, Gmail protections and file sharing. A small firm with more demanding requirements may also need Google's larger-business guidance. Firm size alone does not tell you which guidance fits.",
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
          "DIY can fit if your IT team already maintains the tenant, meaning your firm's Workspace environment, and has time to review security events and evidence. That time belongs in the budget, along with work on roster changes, permissions and policy exceptions.",
          "When you compare a managed proposal, ask the provider to identify the Workspace capabilities it supports and the response actions it is authorized to perform. Who maintains tenant settings? Who investigates a suspicious account, and who handles recovery or an unavailable device? A service labeled Workspace security may cover only some administration or Google products.",
          "Consider a hypothetical 55-person New Jersey consulting firm reviewing client sharing. IT checks the Drive permissions, while the business manager approves the intended recipients and the security owner records exceptions. The permissions show who can access a file; the manager must still decide who should. The technical configuration alone cannot establish compliance."
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
          "Before comparing prices, write down who owns administration, approval of business access, monitoring, investigation, response and evidence upkeep. Existing IT may handle some duties while a managed security provider takes a defined subset. Buying a tool still leaves you with the question of who will use it and do the remaining work.",
          "For example, IT creates accounts, manages groups, changes settings and supports users. A security investigator reviews an account event and coordinates authorized containment. The business owner decides whether an employee or collaborator should have access to client information. A technical log can inform that decision without supplying the business approval.",
          "For recurring events such as a suspicious sign-in, public file, departing employee or failed backup, name the first contact and next action. Ask bidders which events they handle, which they coordinate and which stay with IT. Put those handoffs in writing so staff can use them when an event occurs."
        ]
      },
      {
        "h": "Examine privileged access first",
        "ps": [
          "List administrative roles and the accounts assigned to them. Confirm why each person needs the role and whether the account remains in use. Where the approved operating model supports it, separate privileged administration from ordinary work. Include authentication and recovery in the review so the firm can retain access when the usual administrator is unavailable.",
          {
            "text": "Apply Google's security checklist to the administrator and authentication safeguards available in your current edition and environment. When someone marks a safeguard as complete, ask to see the setting, the accounts it covers and any exceptions. Those records tell you more than the checked box alone.",
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
          "External sharing may be necessary to finish client work. Have the business owner approve it and, if the firm requires restrictions, give staff a usable exchange method. Otherwise, employees still have a task to finish, and a restrictive rule can push the work into undocumented exceptions.",
          "Set an owner for reviewing guest access when the engagement closes or changes. Test what happens when an external person changes roles or an internal employee leaves. Confirm which permissions the administrator can revoke and which information has already been downloaded or otherwise copied. Access removal limits future access; it does not retrieve every copy previously obtained."
        ]
      },
      {
        "h": "Inventory connected applications",
        "ps": [
          "Applications connected by users or administrators may also have access to Workspace information. Ask IT to list the permitted integrations and the data each can access, then identify its business owner, approved purpose and current need. A familiar application name tells you little about whether its access is justified.",
          "Define how each integration is approved, changed and removed, including shared service identities or tokens where present. Test whether removing an employee also ends the integration's access or whether IT needs to take a separate action. Use the result from your setup to update the departure procedure.",
          "An AI tool connected to mail or documents needs the same business review, with additional attention to its proposed use and data handling. Give employees a way to request a useful tool and supply an approved alternative when possible. If you prohibit an application, the task employees wanted it for still needs an answer."
        ]
      },
      {
        "h": "Compare DIY and managed operation fairly",
        "ps": [
          "Include internal labor in the DIY estimate and retained IT duties in the managed estimate. In either arrangement, someone needs time to investigate events, maintain settings and prepare evidence. Record those assumptions alongside the price so you can compare the work each arrangement covers without assuming a market rate or guaranteed saving.",
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
          "The exercise should also show where an approval is needed. A provider may detect a suspicious event but lack authority to suspend the account. IT may be able to change permissions but need the business owner to approve the collaborator's removal. Resolve those handoffs before staff need them during an incident.",
          "If a proposal claims continuous monitoring, ask what data is monitored, what hours the investigating service operates and what happens when no customer contact answers. Get the coverage and authority into the service description: the service name cannot establish that it collects every Workspace event or responds automatically to each one."
        ]
      },
      {
        "h": "Give leadership a short, useful report",
        "ps": [
          "Leadership needs to know where a decision or follow-up is due. Summarize privileged access, significant sharing exceptions, unresolved application approvals and the status of important recovery tests. State what changed, what remains open and who owns the next action, with dates and supporting records where available. A long dashboard can obscure that work if nobody knows which decision it asks them to make.",
          "Revisit the responsibility map when licensing, providers or client requirements change. If your edition gains a feature, someone still needs to decide how to configure it and own that work. Use the same test when reviewing your managed arrangement: which work must it complete, and who is accountable for it?"
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
    "intro": "Can your practice send patient information by email? The answer depends on the exchange: who should receive it, why they need it and which safeguards fit. Before sending electronic protected health information, or ePHI, the practice also needs a procedure for a message that reaches the wrong person. The email platform handles part of this work. Staff still need an approved workflow for deciding what to send, checking the recipient and responding to a mistake.",
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
          "That is why ‘addressable’ cannot be shortened to ‘optional.’ The practice's risk assessment and circumstances determine the decision, including whether an alternative is sufficient. Staff may already know an app well, but familiarity alone does not establish that it suits the exchange. The documented assessment must support that use.",
          "The responsible security owner and adviser should record the chosen method and why it fits; IT confirms how it behaves. Name the people, information and exchange covered by the assessment. A general statement that all practice email is compliant leaves a reviewer unable to tell which configuration and use the practice assessed."
        ]
      },
      {
        "h": "Map the exchange before selecting protection",
        "ps": [
          "List the common exchanges: messages to patients, referrals, billing, internal coordination and transfers to service providers. Identify the sender, recipient, information, purpose and authoritative record for each. A patient access request and an internal staff message can need different procedures.",
          "Then follow an attachment through the exchange. A scanned document may sit on a workstation, remain in a sent mailbox and be saved again by the recipient. Transmission protection covers the journey between those locations. The copies left behind still need access and storage safeguards.",
          "The approved business process should also limit unnecessary information. If a scheduling message does not need a detailed clinical attachment, leave it out even when attaching it is convenient. The responsible adviser determines what may be shared for the purpose, giving staff a procedure they can follow without improvising a legal judgment."
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
          "Check which services the agreement actually covers. A consumer product or add-on from the same company may fall outside it. Keep the selected service, applicable agreement and responsible contact in the vendor record, and ask IT which integrations handle information outside the main mail platform.",
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
            "text": "To assess the choices in your platform, use the Outlook encryption comparison with IT. Ask the administrator to demonstrate the actual method available in the practice's subscription. Seeing a feature on the product page does not establish that it is configured or that staff use it in this workflow.",
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
          "Find out whether recipients can use the method before sending patient information through a new exchange. Pilot it with non-sensitive samples and approved test recipients, including common mail clients and mobile access where relevant. Test opening, replying and handling attachments, as well as what happens when access fails. Record the steps staff and recipients need to follow.",
          "The front desk needs a support route that lets a patient get help without disclosing a password or sending screenshots containing health information. Provide an approved alternative when access fails. Otherwise, a difficult exchange can leave staff considering a personal account without recording or reviewing that change.",
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
          "The privacy owner should define how staff recognize and record an access request, confirm the recipient and follow the approved warning and confirmation procedure. The patient's choice applies in that context. It does not give general permission to use the same method for unrelated internal or provider exchanges.",
          "Keep those instructions short enough for staff to use when a request arrives, including how to record the patient's decision and use the approved route. Name the person who reviews unusual requests or an access-rights dispute so front-desk staff know where to take a question they cannot resolve."
        ]
      },
      {
        "h": "Prevent address mistakes through a usable process",
        "ps": [
          {
            "text": "HHS's patient email guidance discusses precautions such as checking an address and confirming it before sending information. Put those precautions into the steps staff follow. A policy rule can have little effect on daily behavior if the working instructions leave it out.",
            "links": [
              {
                "phrase": "patient email guidance",
                "to": "https://www.hhs.gov/hipaa/for-professionals/faq/does-hipaa-permit-health-care-providers-to-use-email-to-discuss-health-issues-with-patients/index.html"
              }
            ]
          },
          "For a new recipient, use the approved trusted record and confirmation process. Be careful with autocomplete, similar names and forwarded threads. Check the attachment as well as the address: the correct recipient with another patient's file is still an error needing assessment.",
          "Test the procedure with harmless examples from the practice's work. When a request conflicts with it, do employees pause and seek help? Review what they did and any instruction they could not follow. Training can help staff repeat the appropriate action, though it cannot guarantee that every mistake will be avoided."
        ]
      },
      {
        "h": "Respond to a misdirected message promptly",
        "ps": [
          "When a message goes to the wrong person, staff need a named contact and instructions for preserving information. Record the intended and actual recipients, message time, information involved and any supported containment action. Keep reporting within the approved route; forwarding the sensitive content to a broad group for opinions spreads it further.",
          "The responsible team should assess the evidence and applicable notification rules with appropriate professional advice. Accidental delivery is not automatically harmless because access was withdrawn, nor is every misdirected message automatically a reportable breach. The determination depends on the facts of the event.",
          "For a suspected compromised mailbox, involve authorized IT and security teams. They may need to examine account access and relevant settings while the practice manages communications through trusted channels. Coordinate the people responsible for containment and evidence with those handling patient-facing decisions."
        ]
      },
      {
        "h": "Keep evidence that matches the chosen workflow",
        "ps": [
          "Retain the approved procedure, configuration reference, pilot result and staff instructions in the practice's controlled records. Identify the reviewer and date. If the procedure permits several exchanges, state the purpose and population for each rather than combining them under one broad claim.",
          "Keep exceptions distinct in those records. A patient request, an unavailable recipient and a technical failure call for different decisions. Assign an owner and record the reasoning for each. That gives the practice a way to review an exception before staff begin using it as the default for later messages.",
          "If a customer or partner asks about email safeguards, describe the approved workflow and point to its evidence. Naming the business email platform alone leaves recipient checks, protection and incident handling unexplained. State what the practice approved and tested so the reader can see which exchanges the answer covers."
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
        "text": "HHS explains that the Security Rule does not expressly prohibit email. Access, integrity and transmission safeguards still apply, so permission to use email does not settle how a particular exchange should work. Use its email guidance and the practice's risk analysis to assess the workflow. This article supplies an operating checklist; the responsible privacy, security and legal advisers determine the practice's specific obligations.",
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
    "intro": "Where could someone reach your practice's electronic patient information? The EHR is an obvious place to look, but email, billing, imaging, backups, phones and vendor accounts can hold it or provide access too. If a device is lost or an account compromised, that wider picture helps the practice work out which information was accessible. Build the HIPAA risk analysis by following the information through the systems and workflows staff actually use.",
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
            "text": "That scope includes systems used only to view patient information. They can create access risk even when they keep no permanent copy. HealthIT.gov guidance warns providers not to limit the analysis to the EHR, so confirm with staff which devices and workflows they use to reach the information.",
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
          "The tool is useful when its answers explain your practice's environment. For each system, record the information involved, who can access it and where it is used. Those details give you a basis for describing threats and vulnerabilities, assessing existing safeguards, and judging likelihood and impact. Record the remediation decision alongside that reasoning so another reviewer can follow it."
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
          "Once the analysis identifies a risk, the practice needs to decide how to handle it. Give each finding a corrective action, an owner and a target date, and specify the evidence that will show the work is complete. Record any interim safeguard too. If the practice decides that a particular measure is not reasonable and appropriate, document its rationale and any equivalent measure; that decision does not make the requirement optional.",
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
          "One way to check the scope is to follow a representative workflow from beginning to end. A referral might pass through a fax service, mailbox, downloaded file, EHR and billing process. Identify the people and providers at each step. A provider outside the practice's main system may still handle the same patient information and belong in the review.",
          "Then ask staff what happens when the approved route is unavailable. A workaround may create a temporary copy or send information to a different service, changing the path you just documented. Use what staff describe to find the gap and provide an approved alternative. The written procedure should reflect how the work happens.",
          "Include access without permanent local storage. A device used to view patient information can still be lost, shared or accessed by an unauthorized person. Record the actual access arrangement, authentication and relevant session behavior. Have IT verify the technical facts supporting the review."
        ]
      },
      {
        "h": "Describe threats and vulnerabilities separately",
        "ps": [
          "Choosing a safeguard is easier when the analysis distinguishes what could happen from what would make it possible. A threat is a potential cause of harm; a vulnerability is a weakness that could allow that harm. In a laptop-theft scenario, for example, an inadequate access or data-protection arrangement may be the relevant weakness. Describe both so the proposed safeguard addresses the scenario you assessed.",
          "Evaluate confidentiality, integrity and availability. A practice can lose access to a critical application without confirmed disclosure of patient information. Incorrect or unavailable records can affect the work needed to provide care. Include those consequences alongside the risk of stolen data.",
          "Some findings will need more evidence before you can judge them. If nobody has checked a device setting, assign someone to verify it. The platform's support for a control does not show that the practice has enabled it, and missing evidence alone does not show that the setting is wrong. Record what is known and what still needs checking."
        ]
      },
      {
        "h": "Use a consistent decision record",
        "ps": [
          "A rating helps you compare findings only if reviewers use the method consistently. Choose a method suited to the practice, and keep the reasoning alongside any numerical score. Two scenarios can receive the same score while having important differences. The format below illustrates what to record; it is not a required scoring method.",
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
          "The useful question is who does which task. Confirm whether the vendor, the practice or IT creates users, reviews privileges, removes departed staff and handles urgent incidents. A general statement that the provider is secure leaves those responsibilities unresolved.",
          "When the service changes, review the information path and access arrangements before the change is complete. Keep the incident contact and data-handling responsibilities current. Preserve restricted agreements and evidence in their approved systems, with controlled references in the analysis."
        ]
      },
      {
        "h": "Move findings into risk management",
        "ps": [
          "The analysis identifies and evaluates concerns; risk management records and tracks decisions about them. For a technical gap, name the authorized IT owner and expected completion evidence. For a workflow gap, name the business decision-maker. Some findings need both.",
          "Record temporary safeguards and review dates when work cannot finish immediately. Have the appropriate adviser assess any related obligation. An internal acceptance of a risk does not automatically satisfy an external requirement or make an unsupported statement accurate.",
          "Before closing a finding, check whether the evidence shows the intended result. For a recovery action, you need evidence that recovery is usable. For an access action, look for the approved permissions or their enforcement. Keep the purchase order or completed ticket as part of the record, but neither one establishes those results by itself."
        ]
      },
      {
        "h": "Keep clinical and business continuity connected",
        "ps": [
          "Identify the approved downtime procedure for an unavailable EHR, messaging system or other important service, and name who can invoke it. Keep the instructions and contacts accessible during that outage. If the only copy of the plan sits in the unavailable system, record that dependency and address it.",
          "You can test those arrangements in a tabletop exercise using harmless records. Follow the handoff from reporting through assessment, provider coordination and approval of an operational workaround. Include the people responsible for patient-facing work: they can show whether the procedure supports how the practice uses the affected service.",
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
          "When services, locations, device classes or remote workflows change, update the analysis to reflect what is now in use. Do the same after incidents or relevant test failures. A new control may reduce an exposure while adding a dependency, so record its implemented state as well as the work still awaiting a decision."
        ]
      }
    ],
    "takeaway": "Find every place electronic patient information is stored or accessible, and record the safeguards and unresolved risks at each one. Give corrective actions an owner and a date. Keep the analysis current as systems, vendors, locations, devices or workflows change.",
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
    "intro": "When choosing between Core and Command, ask who will decide which access people need, who will change it and who will follow up when something remains unresolved. Identity and access management, or IAM, controls who can enter your systems and what they can do there. That includes employees, outside advisers, application integrations and administrators. An account can stay technically valid after the work requiring it changes. Your firm therefore needs a way to approve and maintain those permissions as it grows.",
    "lead": [
      {
        "text": "This is why verifying someone’s identity and reviewing their permissions are separate jobs. Microsoft calls them authentication and authorization: authentication verifies identity; authorization grants access. Multifactor authentication helps with the first job, while a permission review addresses the second. Your firm needs both. Microsoft IAM concepts.",
        "links": [
          {
            "phrase": "Microsoft IAM concepts",
            "to": "https://learn.microsoft.com/en-us/entra/fundamentals/identity-fundamental-concepts"
          }
        ]
      }
    ],
    "takeaway": "Core includes supported identity protection within its defined stack. Command includes that Core stack and adds program ownership. Your existing IT team retains routine access administration in either case. Choose a tier by comparing supported coverage, the evidence available and who will own the remaining work.",
    "sections": [
      {
        "h": "Review access by business role",
        "ps": [
          "Systems that hold client information or authorize payments are a useful place to begin. IT can provide records of the accounts, administrator roles, guests and connected applications. The business manager then confirms which access the work requires. Together, those records and approvals let reviewers identify permissions that still work but are no longer needed.",
          "Suppose a 60-person consulting firm finds that an employee who changed departments still has access to a former client’s shared workspace. The account may be working exactly as configured. The business owner needs to confirm the access the employee now requires, and IT needs to change the permissions and record completion. An identity-alert service alone cannot make that business decision.",
          "Single sign-on can simplify access across supported applications. Removing unnecessary permissions still requires attention, as does privileged access: who can administer systems, why they need that power and how their actions are reviewed."
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
            "text": "A completed access review gives you a way to assess the workflow. It should record the system, reviewer, date, approved roles and unresolved exceptions. If the example concerns an employee’s departure, ask for evidence that access was revoked in the relevant systems, including those outside the main identity platform. The employee offboarding checklist covers that handoff in detail.",
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
          "That evidence also matters when a questionnaire asks about multifactor authentication (MFA) or access reviews. Check which users and systems the control covers and where exceptions remain. If some systems sit outside it, the answer needs to reflect that limit.",
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
          "A manager needs to know what an application is used for before deciding who should have access. Record its purpose and the information it holds, along with the owner who can approve access and the administrator who can change it. Include shared workspaces, client portals and specialist applications alongside the primary email platform. Some of these systems may not use your central identity provider.",
          "The next question is what each role needs to do. Billing staff may need invoice records without every client document. A project lead may need one engagement workspace without permanent access to all matters. Managers approve those requirements; IT explains how the application’s groups and permissions can apply them.",
          "Reviewers also need specific exceptions to resolve, such as privileged roles, former staff, ownerless accounts or permissions that differ from the approved role. Keep the dated export, then record each decision separately. A signature on the export shows little about how those exceptions were addressed.",
          "Use account identifiers and system records where necessary, but limit who receives the detailed export. The working record may expose sensitive organizational information. Leadership can review unresolved decisions without receiving every account and permission detail in an ordinary meeting attachment."
        ]
      },
      {
        "h": "Follow a role change through all affected systems",
        "ps": [
          "A move between teams is a good test of the process because the employee’s account stays active while their access needs change. HR or the manager should identify the effective date and new responsibilities. Application owners can then decide which existing permissions should remain, which should end and which new access should begin.",
          "IT implements the approved change across the affected systems. Some applications may inherit a central group change; others need separate work. The integration in use determines what follows automatically, so single sign-on alone is not evidence that permissions followed the employee’s new role. Record any late change and its temporary control, if one is in place.",
          "Verify access in the application where possible and link the ticket to the change made. If the manager approves a temporary overlap for handover, record why it is needed and when it expires. Assign the follow-up now so someone removes or reviews the permission when handover ends.",
          "A departure requires a broader review of sessions, credentials, devices and applications outside the central directory. Work through the dedicated offboarding procedure with IT, since access removal has platform-specific limits. Disabling the primary account does not establish what happened to access in every independent application or to documents already copied."
        ]
      },
      {
        "h": "Treat administrator and application access separately",
        "ps": [
          "Administrator accounts deserve their own review because they can make changes that ordinary users cannot. Identify the tasks that require that power and the accounts that possess it. IT should explain how routine work is separated from privileged work, how recovery is handled and what records support review of important changes. Before buying a privileged-access product, confirm that it supports the platforms involved.",
          "Agree when emergency access may be used, who authorizes it and how its use is reviewed. Keep recovery material in the approved location and check that the arrangement works. An unchecked recovery account can fail when needed, while an exception left open can weaken the normal access policy.",
          "The same review needs to reach connected applications. An integration may read files, send mail or use permissions granted by a user or administrator. Find out who approved it, what the business needs it for and which data it can reach. Those permissions may remain even after a user is removed from a group.",
          "These non-human identities need a business owner and a technical owner, too. Record how their credentials or permissions are reviewed and what happens if the integration is replaced. Also confirm whether the purchased protection service covers them. Coverage of employee sign-ins does not establish coverage of every application identity."
        ]
      },
      {
        "h": "Prepare for a protective action that interrupts work",
        "ps": [
          "Identity protection can require a prompt decision about suspicious access. Before an incident, agree on who can restrict an account, how the employee will be contacted and who restores access. The communication route should still work if email or the main account is unavailable.",
          "This matters when restricting an account would interrupt payroll or a partner’s preparation for a hearing. Agree in advance how the response owner reaches leadership and arranges an approved alternative while the event is assessed. With that handoff defined, the team can act promptly instead of leaving the account active solely because the work is urgent.",
          "Separate containment from recovery. Restricting an account may reduce ongoing access, but it does not determine what happened, repair every affected application or complete any required notification. Existing IT handles assigned administrative work; specialist investigation and legal decisions need explicit owners and scope.",
          "During the vendor evaluation, walk through a fictional account event. Ask the provider to explain the evidence available, permitted action, escalation record and handoff. The demonstration should make unsupported platforms and authority limits visible. A promise to stop all account takeover cannot give you that detail."
        ]
      },
      {
        "h": "Use the service decision to assign remaining work",
        "ps": [
          "If managers already approve access, IT maintains accounts as people join, change roles or leave, and a business owner tracks exceptions, Core may suit the firm. Confirm which users and accounts the protection covers and what monthly reporting includes before onboarding. Work outside that stack still needs a place in the firm’s operating plan.",
          "Command may suit a firm where access problems recur because no consistent owner keeps track of priorities, evidence and follow-up. Program coordination can maintain the decision record and bring unresolved issues to leadership. Managers still make the access decisions, and IT implements the changes it owns.",
          "Bring redacted examples of an access change, an exception and a question the firm cannot answer to the fit meeting. Working through them lets you establish who approves access, administers it, takes protective action, keeps evidence and handles recovery. Those responsibilities need to be clear whichever provider or tier the firm chooses."
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
    "intro": "If an employee spots a suspicious transfer or finds encrypted files, whom should they call? Who can decide to wipe a device, notify customers or consider negotiating with an attacker? An incident response plan should answer those questions before people have to act under pressure.",
    "sections": [
      {
        "h": "Prepare the contact list before you need it",
        "ps": [
          "Name an incident coordinator and a backup, then record the contacts they will need: existing IT, security response, the insurer or broker reporting route, an appropriate legal adviser and the bank's fraud team. Include service hours and an escalation route for an unanswered call.",
          "The team needs to reach that list even if company email or a device is unavailable. Keep an approved copy somewhere accessible outside those systems, verify its numbers through established sources, and include an alternate way to reach each person.",
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
          "Employees should be able to report a concern before they know exactly what happened. The coordinator can assess its urgency and separate observations from suspicions. Asking the employee for proof first can delay the handoff by giving them an investigation task they may not be equipped to perform.",
          "Record the initial report in an approved incident record with appropriate access restrictions, and keep a timeline as the response develops. When several people are making calls or changing access, responders need to be able to work out who did what and when."
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
          "Assign people to these tasks so urgent work can happen at the same time. Someone may need to contact the bank or contain active harm while another person notifies the insurer through the required route. A contact list should help people reach the right responder without making them wait to finish every call above it."
        ]
      },
      {
        "h": "Preserve evidence without improvising forensics",
        "ps": [
          "Keep the original suspicious message, transaction information and the reported timeline. Record technical actions taken, by whom and at what time. The responder should direct collection of logs, device evidence and other material appropriate to the incident.",
          "Wiping, reimaging or restoring a system can remove information needed to understand the incident. Leave those decisions to the response team, which must weigh the value of that evidence against active harm and business safety when deciding how to contain the incident.",
          "Keep evidence in an approved location with controlled access. Avoid uploading live incident details, customer records or credentials to an unapproved collaboration tool. If the usual system is compromised, use the alternate arrangement established in the plan.",
          "Ask the responder what evidence the organization should retain and who is authorized to receive it. Counsel can advise on legal considerations and reporting duties. Technical staff should not make unsupported promises about privilege, confidentiality or notification outcomes."
        ]
      },
      {
        "h": "Assign decision authority",
        "ps": [
          "A responder may know the technical next step and still need approval to take it. Identify who can authorize system isolation, engage a vendor, approve response expenditure and accept business downtime. Name backups and record how to reach them.",
          "Separate technical findings from business decisions. The response team may establish which systems are affected and which recovery options are available. Leadership decides priorities with the relevant technical, legal and insurance advice. Keep the rationale in the incident record.",
          "Requests involving ransom, negotiation or other payments need specialist review and appropriate authority. An employee should not respond independently to an attacker’s demand. The plan should direct those requests to the designated leadership and advisers without promising that any payment or recovery route is available or acceptable.",
          "Check that this approval process works outside ordinary hours, too. Responders need a way to reach a backup decision-maker and a record of the bounded actions they can take under existing authorization. Contact details stored only in an inaccessible mailbox can leave them waiting."
        ]
      },
      {
        "h": "Keep communications factual and controlled",
        "ps": [
          "Use the alternate communication route if the normal channel may be compromised. Assume that an attacker with access to a mailbox could read messages sent through it until the responders establish otherwise. Confirm participants and access before discussing sensitive details.",
          "Assign one person to coordinate staff updates. Explain what employees should do, which systems are unavailable and where to report new observations. Avoid speculative statements about the cause, scope or safety of information before the investigation supports them.",
          "Before sending customer, regulator or contractual notices, review the applicable duties and the facts established so far. Encryption may be the first visible symptom, but that does not establish whether data was accessed. The investigation may also need to evaluate copying and other activity, so avoid a blanket statement that no data was accessed.",
          "Record communications and who approved them. As the investigation develops, the organization may need to update earlier statements. This record helps it explain what was known at each point and avoid committing to a conclusion that later evidence contradicts."
        ]
      },
      {
        "h": "Recover a business process, not just a file",
        "ps": [
          "A restored document does little for staff who still cannot sign in or open the application. Before an incident, identify what each essential business process depends on so those dependencies can be included in recovery. Responders also need to address the entry point used by the attacker before the process returns to use.",
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
          "After the exercise, use its record to identify missing contacts, unclear authority and unsupported assumptions. Assign someone to each correction and update the plan so the gaps are resolved before the next incident. Helm Command includes an annual tabletop within its agreed security-program scope. As part of that preparation, document response and recovery responsibilities with existing IT and other responders.",
          "After a real incident, conduct an appropriate review of lessons learned with the people who owned the response. Compare the plan with the actions actually taken, identify delays and assign changes. Preserve relevant incident records under the approved retention process. Recheck contact details and responsibilities after a provider change, before another emergency."
        ]
      }
    ],
    "takeaway": "Give staff a trusted contact list and a clear way to report concerns. Name the people who can approve response decisions. Then plan urgent actions around the harm involved, coordinate technical and insurance work, preserve appropriate evidence and test the process before an incident.",
    "lead": [
      "Start with a checklist short enough to use during a disruption. It should name the authorized responders, provide a way to communicate if the usual channel is unavailable, and point to the contacts needed for the incident. More detailed procedures can cover investigation, communications and recovery. A fraudulent transfer and encrypted files call for different first actions, so a single call order will not fit every event."
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
    "intro": "An unusual download or failed sign-in leaves a business owner with a decision: does access need to be restricted, and what needs to be reviewed? Start with what the account could access and what the records show happened. Those facts help the firm protect its data without jumping to a conclusion about an employee's intentions.",
    "lead": [
      {
  "text": "Legitimate access can be used for an unauthorized purpose, such as sharing confidential files, changing records or bypassing an approval. But acting deliberately does not necessarily mean trying to harm the firm. CISA distinguishes intentional actions from malicious intent, and that distinction should guide the review. CISA Insider Threat Mitigation Guide.",
  "links": [
    {
      "phrase": "CISA Insider Threat Mitigation Guide",
      "to": "https://www.cisa.gov/sites/default/files/publications/Insider%20Threat%20Mitigation%20Guide_Final_508.pdf"
    }
  ]
}
    ],
    "takeaway": "Limit access, document sensitive approvals and review events through an authorized process. Unusual activity alone does not prove malicious intent.",
    "sections": [
      {
        "h": "Limit what an account can do",
        "ps": [
          "Access starts with a business decision: what does this person need to do their work? Managers approve it, and existing IT implements the permissions, limits administrative privileges and updates access when roles change. Guests and applications need to be included too; the employee list does not cover everyone or everything that can reach the firm's information.",
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
          "Before an event occurs, decide which records the firm may collect, who may review them and how long to retain them. Obtain legal advice on the employment, privacy and notice requirements that apply to your circumstances, and keep access to those records proportionate.",
          "When an event raises concern, the authorized reviewer should establish the account, action, system and business context. Preserve the relevant records with their source and time, and limit circulation to people who need them. Base the review on those facts rather than employee suspicion scores, psychological profiles or informal accusations.",
          "The firm may need to restrict access while the review is still underway. Record that as a protective decision, with its purpose and authority, and leave conclusions about misconduct to the authorized process. Counsel, HR and any separately retained investigator should direct their respective decisions. A security-alert vendor should not be treated as the firm's employment-law adviser."
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
            "text": "Command adds risk, roadmap, evidence upkeep and coordination responsibilities. That evidence upkeep concerns the security program; it does not include unbounded investigative evidence collection. Hands-on forensic response, breach counsel and specialized systems require separate written scope. Existing IT retains administration and routine remediation.",
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
          "Which action would cause a serious problem if someone performed it without approval? Start there: a client-file export, payment approval, account administration or a change to an authoritative record. Identify who can perform it and why, including contractors, provider accounts and integrations as well as employees.",
          "The business owner then approves who needs access and for what purpose. IT verifies the permissions and implements changes. A security reviewer can identify a gap, but deciding who belongs on a client matter still requires the business owner's knowledge. Make that handoff explicit so the technical team does not have to infer the relationship.",
          "Record normal changes in responsibility. A person moving to a new role may no longer need old permissions even while remaining employed. Review inherited groups, guests and independent applications. An ordinary role-change procedure reduces unnecessary access without suggesting misconduct."
        ]
      },
      {
        "h": "Make high-consequence actions reviewable",
        "ps": [
          "For a sensitive export or financial change, identify the requester, approver and operator. Where appropriate, separate those duties and retain the record connecting the approval to the actual action. A request approved for one purpose should not silently authorize a broader export or a different beneficiary.",
          "A legitimate deadline may conflict with the ordinary procedure, so agree on an exception route in advance. Name the owner who can authorize it and specify the evidence required. That gives a junior employee a procedure to follow when a senior person gives an informal instruction under pressure.",
          "Check integrations that can perform the same action. A workflow or service identity may have access unavailable to ordinary users. Review its owner, approved purpose and removal process. An employee access review that ignores automation can miss part of the authority over the information."
        ]
      },
      {
        "h": "Use records proportionately",
        "ps": [
          "Obtain advice about monitoring, employment, privacy and notice requirements before introducing a collection process. The lawful and proportionate arrangement depends on the circumstances. Do not turn a general security recommendation into permission to monitor every employee action or collect information unrelated to a defined purpose.",
          "Who needs these records to make the next decision? Restrict them to the authorized response team and define who may view, preserve and share them. Wider discussion can harm the employee and compromise the investigation, so keep fact-finding in its controlled record and out of office speculation."
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
          "A large download could be part of an approved project, migration or backup task. Its volume tells you how much was downloaded, but cannot determine intent. Establish the system, account, time and information involved, then compare the event with business approvals and obtain context through the authorized route.",
          "A deliberate action is not automatically proof of malicious intent. An employee may misunderstand a rule or choose a shortcut that creates harm. The response should still address unauthorized access or handling, while the appropriate people assess intent and employment consequences. Technical logs alone may not settle that distinction.",
          "Describe what happened, what evidence supports it and what you still need to establish. For example, an export for which no approval has been found gives the reviewer a specific question to investigate. Establish the explanation before asserting why the person acted, and leave personality profiles and unsupported suspicion scores out of the record."
        ]
      },
      {
        "h": "Preserve the facts before routine cleanup",
        "ps": [
          "Routine cleanup can change the facts available for review. Deleting accounts, resetting systems or clearing records can alter evidence, so obtain authorized preservation instructions first when an event needs investigation. The responsible responder and advisers should decide what to retain and how.",
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
          "Use the exercise to find missing evidence and unclear authority, then assign corrections. The team might need a better approval record, a current access inventory or a known preservation contact. Repeat the affected step to check whether the correction works. This tests the procedure; it cannot establish that the firm will be able to infer every insider's intent."
        ]
      },
      {
        "h": "Report the program gap to leadership",
        "ps": [
          "Leadership needs to know about unassigned approvals, excessive access and unresolved exceptions. Provide the business consequence and the decision required, with restricted individual details shared only when authorized and necessary. A general program report can describe the gap without circulating investigation material.",
          "Staff changes are one reason to revisit access. New export features and integrations can also expand an account's authority without changing headcount. Update the responsibility map and test the approvals when those capabilities change. Maintain access controls and a lawful evidence-review process, with the understanding that they cannot detect every intentional act."
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
    "intro": "The invoice matches the work, the amount is right, and the email comes in a familiar thread. Should you pay it? If the vendor has supplied new banking details, those checks leave a separate question unanswered: who owns the account receiving your money? Verify that destination independently before releasing payment.",
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
          "To understand your firm's exposure, start with its own payment records. Which banking changes were checked? Which checks were bypassed, and were those exceptions reviewed? Which payment routes allow a recall? The answers give you places to improve a process that the complaint figures cannot assess for you."
        ]
      },
      {
        "h": "The request is the first red flag",
        "ps": [
          "A change to an existing vendor’s bank account is enough to trigger verification. You do not need to find spelling errors or a suspicious attachment first. Legitimate vendors change banks too, but an apparently familiar sender does not establish where your money will go.",
          "An unexpected contact or a different reply-to address gives you another reason to investigate. So does a slightly altered domain, pressure to meet a deadline or a request to keep the payment confidential. Any of these can prompt a check; they have no established sequence or ranking.",
          "The request may also depart from the way you normally work. A vendor who uses a portal asks for a direct wire, or a manager seeks approval through a personal email address. Perhaps a caller says the ordinary approver is unavailable. Pause these exceptions and use the process your business established before the request arrived."
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
          "This is why verification needs to happen outside the thread. Replying to the email asks the same channel to vouch for itself. Calling a number supplied in that message has the same problem: the disputed source supplied that detail too.",
          "Use contact details your business already holds, or details confirmed through a separately validated vendor-onboarding process. Outdated records can make this awkward during a payment run. Resolve that gap through an approved procedure rather than using the new email’s number to clear the queue."
        ]
      },
      {
        "h": "Verify the bank change separately from the invoice",
        "ps": [
          "Purchase orders, delivery records and contract terms help answer whether you owe the billed amount. They do not verify a new bank account. Keep those two decisions separate so a correct invoice cannot carry an unchecked destination through approval.",
          "Call an established vendor contact through a known number. Explain that your company received a change request and ask the contact to confirm the intended change through your approved process. Avoid volunteering every new detail first; ask the contact to describe the request so the conversation supplies independent information.",
          "Record who was reached, which established number was used, the date, the result and the reviewer. Keep the evidence in the normal finance system with suitable access restrictions. Do not scatter banking details into broad chat channels or an unprotected shared spreadsheet.",
          "A callback helps, but it has limits. Contact records can be wrong, and the person answering may have been deceived or be working within a compromised vendor process. Separate approval, restricted access to vendor records and review of unusual transactions provide checks for failures a phone call can miss."
        ]
      },
      {
        "h": "Separate record changes from payment approval",
        "ps": [
          "If one person can amend a vendor record and release the payment without review, a convincing request has only one decision point to pass. Establish a second review for banking changes and apply your business’s approval rules to payment release.",
          "The second reviewer needs the verification record and proposed destination, not just a forwarded assurance that someone checked them. Decide which banking amendments always require independent approval. Include changes below the usual spending threshold in that decision.",
          "Review permissions in the payment and accounting systems with their owners. Identify who can add vendors, edit bank details, approve changes and release payments. A written procedure is weaker if the system allows a busy employee to complete all steps with no review or audit trail.",
          "In a small finance team, an owner or another authorized person may supply the second check. Document that arrangement and plan for holidays, sickness and month-end pressure, when only one person may be available to handle payments. The procedure should explain how to hold a payment until the required reviewer is available."
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
          "The amount matches the purchase order, so the reviewer may have good reason to approve the invoice itself. The new account still needs checking. The reviewer holds the banking change and calls the established supplier contact, then records the response for the required second approver.",
          "If the supplier cannot be reached, the afternoon deadline does not verify the new account. Keep the change on hold and escalate to the business owner through the written exception procedure. The owner can address the commercial consequence of a delay while keeping the verification requirement in place."
        ]
      },
      {
        "h": "Prepare staff for pressure, including from leadership",
        "ps": [
          "Give employees explicit permission to stop a payment when verification is incomplete. A policy signed by leadership is useful only if leadership follows it during urgent transactions. A request from an owner should not automatically bypass the checks imposed on a vendor.",
          "Practice with a clearly labeled exercise using approved fictional details and no real transfer. Can staff find the trusted contact record and reach the second approver? Can they document why a payment is on hold? Review where they get stuck. Recognizing a suspicious phrase is useful, but the exercise should also show whether they can carry out the payment checks.",
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
          "Both the banking response and the technical investigation need an owner. A payment recall addresses the transfer, while investigating mailbox compromise addresses how the instruction reached staff. A password reset may address account access, but it cannot recover the money. Coordinate those efforts so neither waits for the other to finish."
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
          "Email authentication has limits here too. It does not prevent every lookalike domain or display-name impersonation, and a compromised legitimate mailbox can still send messages. Tell customers how you communicate and verify banking changes so they have a way to check beyond the email signature.",
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
          "To see whether staff follow the process, review a sample of banking-change records. Look for the trusted contact route and independent approval, then track how many changes have completed verification and which exceptions remain unresolved. A checked box alone gives the reviewer too little evidence to assess what happened.",
          "Ask finance staff where the process slows them down. If contact records are inaccessible, approvers are unclear or backup coverage is missing, fix those obstacles. Staff need a procedure they can follow during a busy payment run as well as one they can describe in a policy review."
        ]
      }
    ],
    "takeaway": "Before updating banking records or releasing funds, verify the change through an established contact route and keep the evidence. Separate verification from approval and escalate missing checks. For a suspected fraudulent transfer, contact the bank immediately and follow the incident process.",
    "lead": [
      "That means checking a payment change through a contact route your business already trusts, getting the required approval and keeping a record. Email protection can reduce exposure. Your payment process still needs to hold up when a convincing message reaches the person reviewing the invoice."
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
    "intro": "A job-site tablet may hold a drawing and an open mailbox in the same session. That matters when someone borrows it, leaves it behind or connects it to an unfamiliar network. For contractors, deciding whether to use public Wi-Fi is part of a wider decision: which device can access the job information, and what else can someone reach through it?",
    "sections": [
      {
        "h": "Treat the connection and the destination separately",
        "ps": [
          {
            "text": "The FTC explains that widespread encryption has changed public-Wi-Fi risk. HTTPS protects the connection between your device and a website. If that website is a scam, though, it still receives what you send. Checking the destination and what it asks you to do matters even when the connection is encrypted.",
            "links": [
              {
                "phrase": "FTC explains",
                "to": "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know"
              }
            ]
          },
          "Before entering credentials, review an unfamiliar hotspot or login page. If the available network is unsuitable, use the firm's approved connection, such as a maintained company hotspot. IT still needs to configure that hotspot appropriately, and using it does not make a malicious website trustworthy."
        ]
      },
      {
        "h": "The device itself is the real exposure",
        "ps": [
          "A lost device can expose business messages and related account access if its mail session is still accessible. To understand the consequences, the response team needs to check the device, its session state and the safeguards in place. A missing phone alone does not establish that someone has taken over the account.",
          "Microsoft 365 and Google Workspace offer mobile device-management controls, including screen-lock requirements and options to remove work data or wipe a device. The available actions depend on the license, platform, enrollment and management mode. Removing a work account is not the same as wiping the whole device. These tenant controls are not part of Helm Core itself.",
          {
            "text": "Imagine handing a crew member a shared tablet signed into the owner's mailbox so they can open a drawing. The same session may give them access to supplier mail and payment messages. For any contractor, IT should configure an approved account that limits access to the work. Then test the handover: the next person should not inherit access they were never meant to have.",
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
          "A new or changed payment instruction needs the firm's independent verification and required approval before anyone releases it. Use a trusted number already in the approved record. Field staff should pass the request to the authorized payment owner, who can handle it through that process even when the job is under pressure.",
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
          "For each device, record which systems it can reach. A tablet that only displays an approved job drawing needs different access from a phone with the owner's email, supplier messages and payment authority. Decide access according to the person's role, so handing over a convenient device does not also hand over every business account.",
          "Assign someone to check the approved account, screen lock, supported software and reporting or management setup before issuing a device. Include that check in the handover even on a busy morning, and record any exceptions. Field equipment needs to stay in the same security process as office equipment."
        ]
      },
      {
        "h": "Give shared devices a defined access model",
        "ps": [
          "Avoid signing a shared tablet into a senior person's ordinary account. Establish an approved model with IT that supports the work and limits access. Depending on the platform and application, that may involve individual users, a managed shared-device arrangement or another supported configuration. A generic shared account is not appropriate for every application.",
          "Use harmless records to test a handover. Check whether the next user can see previous messages, downloads or saved sessions, and whether the application supports the separation the firm intended. Before using the tablet across jobs, clear or transfer the work through the approved records procedure.",
          "Assign a named owner responsibility for charging, updates and device return. A device that misses maintenance can keep circulating with old software or missing protection. Plan that maintenance around field use and provide an approved fallback for the time the device is unavailable."
        ]
      },
      {
        "h": "Treat captive portals as an unfamiliar request",
        "ps": [
          "A public connection may open a page asking you to accept its terms or provide information. That page is a captive portal. Make sure staff know that the company does not authorize entering business account passwords into an arbitrary network page. An unexpected prompt is a reason to use the approved connection or contact support through the known route.",
          "Provide staff with the approved application and saved address when setting up the device. They can then open it directly instead of searching under deadline pressure or following an unverified message link. Direct access still requires the correct account and appropriate safeguards.",
          "Do not disable browser certificate warnings to make a site load. Ask the authorized owner to investigate. A field workaround that changes a security setting can outlast the immediate connection problem and affect later work."
        ]
      },
      {
        "h": "Set device and account safeguards together",
        "ps": [
          "Microsoft and Google management capabilities depend on the actual subscription, platform and enrollment. Ask IT to demonstrate the supported action on a test device. Do not assume the firm can remotely wipe every personal phone or that a wipe request always succeeds.",
          "Device protection and account response address different parts of a loss. Locking the device may affect one part of the exposure; removing a work account or revoking a session may affect another. The authorized team needs to choose actions that the platform supports for the event, then record what it did and what remains uncertain."
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
          "A crew member who loses their phone may also lose their usual way to contact the office. Give staff a reporting contact and an alternate they can reach outside the affected account. Explain that the report should identify the device, its last known location, the time and its business use.",
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
          "Plan for a supplier request that claims an immediate payment change will prevent a job delay. Leadership needs to support staff in pausing the request and reaching the authorized decision-maker through an alternate route. Otherwise, the person in the field has to resolve a deadline conflict while trying to follow the payment rule."
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
          "Try a shared-device handover and a lost-device exercise with harmless data. Watch whether staff reach the right contact and whether IT can perform the supported action. Check what happens to essential work during the response, too. The exercise gives the firm specific gaps to fix that a general claim about Wi-Fi safety or mobile protection cannot establish."
        ]
      },
      {
        "h": "Plan for unavailable connectivity",
        "ps": [
          "Identify which job information must be available when the approved connection fails. A drawing, schedule or safety document may have an authorized offline process, while payment changes still belong with the financial owner. Decide that distinction before a crew loses connectivity.",
          "A downloaded drawing can become outdated when the office revises the job record. If staff may download approved documents for field use, record where they can store them and how they identify the current version. They also need a way to confirm that version and return completed information through the approved route.",
          "Before using a borrowed personal device as a substitute, ask the authorized owner whether it meets the required access arrangement. If it does not, use the defined fallback. Even under pressure to keep a job moving, the business should make an explicit access decision before staff switch to unreviewed equipment.",
          "During a device handover, have staff demonstrate the offline process: what stays available, where they record new information and how they return it to the authoritative system. Record any manual reconciliation that remains. A field copy can be usable while the central record still needs updating."
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
    "intro": "A law-firm laptop can carry matter files to court and keep email, billing or trust-accounting sessions open at home. If it goes missing, the firm needs to know what someone could access and which safeguards were in place. That is why a device review needs to cover client meetings, travel and remote work as well as the office network.",
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
          "For that assessment, the firm needs facts about its own devices: which files are stored locally, which sessions are saved and which systems each device can reach. A public survey cannot tell you whether a particular laptop was encrypted or which matter information was available on it."
        ]
      },
      {
        "h": "Start with a device inventory that names an owner",
        "ps": [
          "List the firm-owned Windows and Mac computers, including the shared reception machine and loaners that see little use. Record the user, operating system, encryption state and update settings for each one. The inventory should also let the firm identify a computer whose security software has stopped reporting.",
          "Then record the systems each device can reach. A laptop with access to email, document management, billing, trust accounting and cloud storage may require immediate session revocation if it is lost. The firm may also need to review which client information was accessible. A kiosk with no saved credentials creates a different level of exposure, so the response should reflect those differences."
        ]
      },
      {
        "h": "Apply a baseline that can be checked",
        "ps": [
          "Require a screen lock, full-disk encryption, supported operating systems, automatic security updates, separate administrator access, multi-factor authentication, and a managed security service that can investigate suspicious behavior. Match protection to the supported platform and the firm’s requirements.",
          {
            "text": "Helm Core provides round-the-clock monitoring, human investigation and containment for covered Windows and Mac devices. When an alert needs attention, that coverage provides qualified investigation and permitted action. Patching, backups, identity controls and a written incident plan still need their own arrangements alongside Core.",
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
          "Decide whom staff should contact when a device goes missing, and who handles account blocking, saved sessions and the review of potentially accessible client information. The procedure should say when to consult counsel, the insurer, affected clients or other parties. Preserve facts and timestamps during the event so those advisers have something concrete on which to assess exposure.",
          "Phones and tablets need their own identity, email, and device-management controls. Standard Helm Core coverage does not install the same security agent on iOS or Android, so a complete firm plan must address those devices separately."
        ]
      },
      {
        "h": "Keep evidence that the checklist is operating",
        "ps": [
          "The firm needs records that show whether its policy is working. Keep the inventory current, with deployment and encryption status, update records, incident contacts and evidence that departed users were removed. Review exceptions regularly so a temporary gap does not become the usual arrangement.",
          {
            "text": "Those records also support an answer when a client or carrier asks whether every device is protected. Helm Command can help document the gaps and put a remediation plan in place with an owner for the work.",
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
          "The firm also needs to be able to recover access when necessary. Store recovery information in the approved restricted location, decide who may retrieve it and record that access. Plan how it transfers if providers change; otherwise, the firm may have the laptop without anyone authorized to recover access.",
          "Encryption protects stored information under its operating conditions. An authorized session can still view data, and a lost unlocked device can still have consequences. Assess the device’s actual state, access and information before drawing a conclusion about an incident."
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
          "For travel and shared spaces, give staff instructions that fit where they work: how to handle the device, limit screen exposure and report an unexpected situation. An accessory alone cannot establish confidentiality; it needs to be part of that working arrangement.",
          "For home or mobile access, ask IT which device and identity controls apply. A workstation agent does not establish management of every phone or tablet. Record the separate mobile arrangement and its supported lost-device actions."
        ]
      },
      {
        "h": "Prepare the first lost-device decisions",
        "ps": [
          "Record the last known location, time, device state and relevant user actions. If some facts are unknown, state them as unknown. Do not automatically declare a disclosure or dismiss the event because the device was encrypted. The applicable assessment needs the facts and professional judgment.",
          "Ask IT to record both the requested remote action and the result it observes. A wipe command may not reach an offline device. A separate application may retain a session, or an unenrolled personal device may lack the needed controls. The record should distinguish the command being submitted from the action completing."
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
          "Use a hypothetical missing travel laptop for a short tabletop exercise. Ask staff to find the inventory, identify matter access, contact the authorized team and show how they would make the next decisions. Include the business continuity owner, because the firm will still need to keep essential work moving after containment.",
          "Turn each exercise gap into an assigned correction. Update an ownerless device record, provide an alternate for an unavailable contact, or ask the responsible adviser to resolve unclear client communications. Then verify the step that failed in the exercise.",
          "Keep exercise records separate from actual incident findings. A hypothetical scenario should not appear in a client response as a real event or as proof that every loss has been tested. State the exercise date, scope and observed result."
        ]
      },
      {
        "h": "Keep coverage claims bounded",
        "ps": [
          "Reconcile the current device inventory with protection and management records. Remove retired entries from the coverage calculation and explain devices that are stale or excluded, with a next action for each. New equipment needs its acceptance check before ordinary use.",
          "When answering a client or insurer, be specific about which devices and controls the answer covers. A record of encryption does not also establish endpoint detection, mobile management or recovery. Keep the supporting date and evidence reference with each response.",
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
          "Record who takes over business continuity and what needs checking before a contained device returns to ordinary use. Containment, matter continuity and hardware repair involve different owners. Staff need to know the approved way to keep working while those teams resolve the technical issue."
        ]
      }
    ],
    "takeaway": "Start with an inventory of work devices. Require encryption and screen locks, monitor the computers in scope, and write down who acts when a device goes missing. Decide separately how the firm will protect phones and tablets.",
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
    "intro": "A law firm can keep its IT provider and add security expertise where it needs it. Choosing between an internal hire and a managed provider starts with the work: who operates the protections, who reviews incidents and who leads the security program. Those responsibilities need clear owners. Decisions about client information and the firm's professional duties stay with the firm.",
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
    "takeaway": "Choose the arrangement that covers the work your existing IT team leaves to the firm, including security review and client evidence. Compare the actual coverage before comparing prices. Professional and business decisions remain yours.",
    "sections": [
      {
        "h": "Compare responsibilities before staffing models",
        "ps": [
          "An in-house security team can know the firm's systems and priorities directly. That knowledge is useful only if the team has time, specialist capability and coverage for its assigned work. If the same administrator handles routine tickets and incident review, both may need attention at once. The arrangement also needs to work when that administrator is away.",
          "A managed provider can supply defined protection and specialist coverage. Someone inside the firm still has to make decisions, and an IT owner still has to handle the technology work. Put the route for incidents, exceptions and spending approvals in writing; outsourcing the service leaves the firm's professional responsibilities with the firm.",
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
          "A software license and a managed service leave the firm with different amounts of work. Their headline prices won't show that difference. Compare each proposal against the same account and device list, with subscriptions, onboarding, IT time and training included. Add any specialist response work that the proposal excludes so it stays visible in the budget.",
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
            "text": "Helm Command is intended for a qualified 75 to 250-person organization that needs program ownership. Pricing starts at $10,000/month. Final quotes depend on covered users and agreed scope. It adds a risk register, prioritized roadmap, evidence upkeep, bounded questionnaire responses, quarterly leadership reviews and an annual tabletop to the covered stack. Command scope and terms.",
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
          "A client questionnaire can reveal gaps in an otherwise useful service arrangement. Each answer needs a dated record showing what it covers, including exceptions to training completion, device coverage and access-review claims. The firm approves the final representations. Having an evidence folder does not guarantee that a client will accept them.",
          {
            "text": "An incident needs an equally clear handoff. Route an employee's report of a suspected compromise to the authorized responder and preserve the relevant records. Leadership and counsel should direct business and notification decisions. The incident-response guide can help you establish those contacts before an event.",
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
          "Receiving client documents and sharing matter files are useful places to start mapping the work. Follow the same process for payment approvals and work away from the office: identify the systems, people and records involved. Document-management and practice-management platforms outside the main email tenant belong on the list too.",
          "The same list will contain several kinds of work. A suspicious alert from a laptop needs security review; a routine update needs technology administration. Preparing evidence for a client review takes different work again from investigating an active compromise. One person or provider can hold several roles if they have the time, authority and skill to do each one.",
          "Client commitments can extend beyond the firm's usual safeguards or evidence. Have the responsible lawyer identify the duties relevant to the practice and review those commitments. Record what the firm agreed to provide and who checks the requirement before accepting new work. That review needs to address the firm's commitments; a vendor brochure cannot do it for you.",
          "Use that list to define what you are buying. Keep unknown applications and unresolved handoffs visible while they are checked. Selecting a staffing model first can leave the firm trying to fit uncovered work into an arrangement that was never scoped for it."
        ]
      },
      {
        "h": "Evaluate the internal option with realistic coverage",
        "ps": [
          "An internal security role brings context that matters when making a decision: how the firm handles urgent filings, where sensitive matters are stored and who can approve a disruptive change. That knowledge helps the person prioritize work and explain its consequences. They also need appropriate tools and training, with outside specialist help available when a task exceeds their role.",
          "The role description should make the workload visible. List recurring responsibilities and the escalation route, including evidence maintenance and coordination with existing IT where those duties belong to the role. A few hours of review each month will not cover the work of a complete security program.",
          "Coverage needs its own plan for holidays, illness and competing demands. If the person responsible is handling an outage when a suspicious account event arrives, someone needs to respond to the second issue. Check who that is, and whether the actual after-hours arrangement meets the firm's needs. An internal job title or a managed contract alone cannot establish continuous coverage for every required task.",
          "Use the firm's own compensation assumptions and recruitment information to estimate staffing costs. Include benefits, coverage, tools, training and any external support the internal role still needs. No single staffing figure can establish which option is cheaper for every practice."
        ]
      },
      {
        "h": "Evaluate a provider through a fictional incident",
        "ps": [
          "A fictional incident gives you a concrete way to compare providers. Use the same harmless scenario with each: an employee reports an unexpected sign-in and a message sent from their account. Have the provider explain which covered signals it can inspect, what it can restrict and how it contacts the firm. Keep actual client material out of the sales exercise.",
          "Follow the explanation through to the next steps. Someone must investigate connected applications and mailbox changes, preserve the relevant records and coordinate with the firm's IT administrator, insurer and counsel. Have the provider name who does each task. Then check its answer against the service order, including which steps require a separately engaged responder.",
          "Before signing, confirm the provider's authority to act. It may be allowed to isolate a covered workstation or restrict a supported account under defined conditions. Leadership needs to understand those conditions, the effect on work and the route to restoring access. A phrase such as proactive response doesn't explain any of that authority.",
          "A fictional report can show how the provider hands an incident over. Request one that records the event and evidence, what action was taken, the escalation and what remains uncertain. It should give the next person enough information to act without exposing unnecessary client content. Confirm who receives these reports and how sensitive records are transferred and retained."
        ]
      },
      {
        "h": "Compare a common budget population",
        "ps": [
          "Make a shared worksheet if one proposal is priced by user and another by device. Include staff, eligible workstations, outside advisers, servers, phones and specialist systems. Mark exclusions and name who will protect or administer them. Use the same period, contract term and expected work to compare costs.",
          "Using Core's published rate, a hypothetical 30-covered-user firm would calculate 30 multiplied by $125, or $3,750 per month before any separately scoped work or applicable charges. The example is arithmetic, not a quote or an assertion that the firm qualifies. Fit, platform support and written terms still need review.",
          "Recurring fees are only part of the comparison. Add one-time transition work and retained IT work, then check for overlapping subscriptions. A license saving counts only after replacement coverage is confirmed and the old service can be removed. Time freed from alert review also may not reduce the existing IT bill.",
          "Compare exit costs and access transfer as well. The firm should be able to recover its own reports and maintain continuity if the arrangement ends. Ask who removes agents, changes routing, transfers administrative rights and records open issues during the transition."
        ]
      },
      {
        "h": "Use a combined model when responsibilities are clear",
        "ps": [
          "You can combine these roles. Program leadership may stay inside the firm while a managed provider handles defined operations. Or the firm may retain IT for administration and add security-program coordination. Each arrangement needs contracts and internal assignments that make the handoffs clear.",
          "Name a firm contact with authority to make decisions and a backup contact who can act during an absence. Keep a record of who handles each responsibility across the security provider, IT owner and business leadership. Resolve ambiguous handoffs before an event, especially account containment, recovery, evidence preparation and client communication.",
          "The arrangement also needs review as the practice changes. A merger, a new office or a client with different requirements can change who and what needs coverage. Reconcile the account and device records with the current practice, and check new applications against the scope. The original onboarding count won't establish the current coverage.",
          "Partners can assess the service through the work it records. At the first review, check eligible-device coverage, whether the team has exercised the reporting route, current contacts and approved handling of exceptions. Later reviews should explain what has changed and which decisions remain outstanding. A tool count alone won't answer those questions."
        ]
      },
      {
        "h": "Check the arrangement against a new matter",
        "ps": [
          "Before accepting a client's security commitment, identify whether the current arrangement can support it. Ask the responsible lawyer and IT owner to review the requested population, evidence and deadline. A contractual promise may require work beyond the managed stack or internal role.",
          "If the commitment requires additional work, record its cost and who will implement it. Confirm that work before the firm represents that the requirement is met. A service-selection decision should not leave the firm making an unsupported promise in a later client agreement."
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
    "intro": "A Microsoft 365 security review should establish who can get into your company’s environment, what they can do once inside and how you would recover access or data. An attacker who takes over an account may read old email, impersonate staff or forward future messages outside the company. The protections available depend on your licenses and configuration, so have the authorized IT owner review your tenant, the company’s Microsoft 365 environment, and its business dependencies before changing settings.",
    "sections": [
      {
        "h": "Lock the front door first",
        "ps": [
          "MFA needs to cover the people who can access mail, including owners, administrators, vendors and anyone with delegated mailbox access. For a shared mailbox, each person should use their own authorized account and direct sign-in to the shared account should be blocked. That way, access follows the people permitted to use the mailbox.",
          {
            "text": "Older sign-in methods, known as legacy authentication, do not support MFA. IT should check whether your tenant blocks them and whether any applications or devices still depend on them before making a change. Microsoft security defaults provide preconfigured protections; more complex environments may use licensed Conditional Access policies instead. Establish what is already configured so the review starts from your tenant’s actual protection. This work complements the managed email protection in Helm Core.",
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
          "An administrator account can affect more than its own mailbox if compromised. Keep privileged administration separate from everyday mail access, with IT checking that the arrangement fits the work."
        ]
      },
      {
        "h": "Close what attackers do after they get in",
        "ps": [
          "External-sender tagging gives staff a visible indication that a message came from outside the configured company boundary. It is useful context when reviewing mail, though the label cannot tell them whether an external message is malicious or an internal one is safe.",
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
          "The first review needs an inventory of the tenant, subscriptions, users, administrative roles and significant integrations. Work through it with IT, including business applications administered independently that affect the workflow. A license tells you which features may be available. Configuration evidence tells you which ones the firm is using.",
          "For each account and access path under review, ask the administrator to explain which policy supplies the protection: security defaults, Conditional Access or another supported arrangement. Record how it applies. A per-user MFA status alone does not describe enforcement.",
          "Keep a dated baseline and an approved change plan, naming the business owner who can authorize an interruption and the IT owner who will implement the change. A non-technical employee should not be asked to toggle settings from an article while application dependencies remain unreviewed."
        ]
      },
      {
        "h": "Review privileged and provider accounts",
        "ps": [
          "A supplier account may have substantial authority without appearing on the staff roster. Include provider access when listing administrative roles and the accounts that hold them. For each account, confirm its owner, why the privilege is needed and how it is protected.",
          "Establish an approved recovery arrangement for administrative access. The firm needs a way to regain control when the usual administrator is unavailable, with appropriate protection and restricted records. Test the supported process through authorized IT, without exposing emergency credentials in an ordinary document.",
          "During a provider handover, include the provider’s identities and integrations in the removal plan. Revoke technical access through the approved process and record who verified it. Changing the support-contact list alone leaves those access paths unaddressed."
        ]
      },
      {
        "h": "Plan authentication around dependencies",
        "ps": [
          "A sign-in policy change can affect a multifunction device, older client or integration that depends on the current arrangement. Identify those dependencies first; IT may need to migrate one to a supported alternative. Follow current guidance and record any temporary exception with an end date.",
          "Pilot a significant change with representative users doing harmless work, checking sign-in, recovery and business applications. Staff also need to know which prompts to expect and where to get support. Without that explanation, a legitimate rollout can resemble the unexpected prompts they have been taught to report.",
          "Do not disable one protection while assuming the replacement automatically applies. Have the administrator verify which policy is in effect and which accounts it covers. After the change, record the evidence that it works, including unresolved exceptions and supported fallback arrangements."
        ]
      },
      {
        "h": "Check mail access and forwarding",
        "ps": [
          "Review who can access shared and delegated mailboxes. Business managers approve the need; IT implements the permissions. Include accounts created for old projects and outside support. Confirm the current owner and purpose rather than carrying access forward indefinitely.",
          "If external forwarding is needed, record where mail goes, why it goes there and who approved it. Check the supported controls and test the legitimate workflow with harmless messages before responding to one delivery problem with a blanket allow-list. Keep the exception and its next review date if it remains necessary.",
          "An unexpected rule or forwarding destination needs investigation before removal is treated as the whole fix. It may be an old approved setting or an error; it may also be evidence of an account incident. Preserve the relevant facts and follow the incident process if the evidence warrants it."
        ]
      },
      {
        "h": "Review connected applications and shared files",
        "ps": [
          "An employee’s departure may leave integrations, shared identities or independently administered application relationships in place. Inventory the applications permitted to access tenant information and their approved purpose. For each, establish who granted access, what it permits and how to remove it.",
          "Use a representative client-sharing workflow to check the site or folder, its internal users and guests, and how its links behave. The business owner should confirm whether the current recipients still need access. The platform’s ability to share a folder broadly does not establish that broad access is appropriate.",
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
          "Keep incident contacts outside the tenant so they remain available if tenant access is affected. Name who can authorize supported account action and which team handles the wider business response. Blocking an account, revoking sessions and repairing the business workflow may fall to different people."
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
          "The review can start with important accounts and workflows, provided the remaining work stays visible. If the initial focus is administrators and email, list the applications still to be reviewed and assign owners to investigate unknowns and review exceptions. An overall score should not hide that unfinished work.",
          "Prioritize changes according to actual exposure, business consequence and applicable requirements. Routine administration may address some findings; others need licensing, testing or a separate engagement. Record the dependencies that leadership needs to decide on.",
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
          "For a recovery check, choose a harmless sample from an important covered workload and specify the recovery point and destination. The authorized operator carries out the restore; the business owner confirms whether the result is usable. Record the source, time, action and result, including any manual permission repair or reconciliation needed.",
          "The test should reflect the recovery method actually purchased and configured. A mailbox retention rule, a native recovery feature and a separate backup service can support different tasks. Do not present an export obtained for records discovery as proof that a complete working environment can be restored.",
          "A failed restore step needs an owner and an explanation. If the operator cannot locate the requested recovery point, investigate coverage, configuration, retention, authorization and the requested scenario. Record the limitation and who will address it."
        ]
      },
      {
        "h": "Record what the public review cannot see",
        "ps": [
          "Public DNS and website checks cannot inspect administrative roles, application grants, sharing decisions or restore tests. Keep their findings separate from the internal tenant baseline. A public finding may need IT attention, and a clear public result still leaves the internal review needing its own evidence.",
          "Tell leadership which tenant areas have been assessed and what remains outside the review so far. Date the evidence and identify the next actions. That lets them judge progress without interpreting the first week’s work as complete coverage of the business."
        ]
      }
    ],
    "takeaway": "Start with IT’s review of multi-factor authentication (MFA) enforcement, older sign-in methods, privileged accounts and forwarding rules. Check public sender-authentication records separately: they help assess the domain’s configuration, but cannot establish how the internal tenant is protected or whether a message is honest.",
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
    "intro": "A training subscription gives your employees access to lessons. Your firm still needs someone to choose what they should practice, schedule the work and handle reports of suspicious messages. Whether you manage training yourself or hire a provider depends on how much of that ongoing work your team can maintain.",
    "lead": [
      "Start with the work employees actually do. Someone who approves payments needs to practice verifying a change to bank details. A person handling client records needs to know how to share them safely and where to report an accidental disclosure. Those decisions give you a more useful basis for choosing training than the size of a lesson library."
    ],
    "takeaway": "DIY can fit when a named owner has time to run the program. A managed service can help with that workload, but check which duties it takes on. In either case, choose lessons around employees' work and keep evidence that shows what they completed and what needs follow-up.",
    "sections": [
      {
        "h": "Build around decisions employees make",
        "ps": [
          {
            "text": "NIST's learning-program guidance emphasizes behavior change and regular evaluation. Its lifecycle approach gives organizations a way to adapt training over time, beyond a single annual course. NIST SP 800-50 Revision 1.",
            "links": [
              {
                "phrase": "NIST SP 800-50 Revision 1",
                "to": "https://csrc.nist.gov/pubs/sp/800/50/r1/final"
              }
            ]
          },
          "To put that into practice, choose a small set of business tasks and write down what employees should do in each one. In a hypothetical New Jersey accounting firm, the payment team could practice verifying changed instructions through a known contact. The tax team could practice reporting an unexpected document-sharing request. Both exercises can use fictional information, keeping actual client records out of the training.",
          "A training calendar should include onboarding, refreshers and reminders after a process changes. Choose frequency based on your staff's work and the risks you are addressing. There is no universal simulation cadence that proves a firm is secure."
        ]
      },
      {
        "h": "Compare the work each model leaves with you",
        "ps": [
          "With DIY, a named owner needs to maintain the employee roster, assign material and follow up on missed lessons. They also need time to discuss results with IT. Budget for that work alongside the subscription; it is part of running the program.",
          "A managed provider may take on some of those duties. Ask exactly what it handles beyond content, simulations and reporting, since enrollment changes or follow-up on recurring mistakes may still fall to your team. Check who prepares role-specific material, too. A written division of work in the service order lets you budget for the responsibilities your firm retains.",
          "The results need the same care. A click rate from a simulated message tells you only part of what happened. Review whether employees reported suspicious requests, how quickly those reports reached the right person and whether staff followed the payment or sharing procedure. Completion records show that employees finished assigned lessons. They cannot establish how every employee will respond under pressure."
        ]
      },
      {
        "h": "Keep evidence proportionate",
        "ps": [
          "For a customer questionnaire, retain the training policy, covered staff list, dated assignment and completion records, and a description of follow-up. Explain exclusions, including contractors or staff on leave. Restrict access to individual results and agree on how long to retain them.",
          "A sample vendor report with fictional data can help you judge whether the records will be usable. An authorized reviewer should be able to distinguish overdue training from a failed simulation and export the relevant evidence. Also ask what happens when an employee reports a genuine incident during an exercise, so that report gets the attention it needs.",
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
          "In an exercise about changed bank details, the employee should practice finding the approved contact, checking the change and recording verification before editing the payment record. That requires a usable payment procedure. If the contact list is missing, fix it as part of the process so staff have a way to make the check.",
          "Use fictional suppliers, clients and documents. Set boundaries with the business owner and IT so a simulation does not invite employees to upload confidential files, enter working credentials or contact actual customers. A controlled exercise should create a learning opportunity without introducing an avoidable operational problem.",
          "Make the reporting step usable. Staff should know where to send a suspicious message and what to include. The receiver needs a procedure for sorting training messages from real reports. If a participant encounters a genuine threat during the campaign, pause the exercise for that person and route the report through the incident process.",
          "Afterward, discuss which step was confusing and whether the employee could find and follow the procedure. A failed exercise alone does not establish that the employee was careless. If the instruction was unclear or the approval route was missing, assign someone to fix the process."
        ]
      },
      {
        "h": "Assign learning by role without creating a maintenance burden",
        "ps": [
          "Keep a common foundation for all staff, then add material for work with different consequences. Finance needs payment verification. IT needs privileged-account and response procedures. Managers need access approvals and escalation responsibilities. Client-facing teams need approved sharing methods and a way to report a mistake quickly.",
          "The firm has to maintain those assignments as people change roles. Start with a few role groups, record who gets the foundation lessons and additional material, and name someone to keep that record current. If a vendor manages the roster, ask how it checks for changes and which ones need your approval. That work determines whether more detailed assignments remain useful.",
          "Include temporary staff and contractors deliberately. Some may use your accounts and handle client records; others may only need a short briefing on a specific process. Determine what access and work they actually have. Do not mark every external person trained because a policy says contractors are included.",
          "Check accessibility and working conditions. A lesson that assumes desktop access may be awkward for staff working from a job site. Allow an approved alternative when someone needs it, and record completion consistently. In technical instructions, name the screen or contact the employee should use, and have IT check that the instructions remain current."
        ]
      },
      {
        "h": "Read training metrics without overstating the result",
        "ps": [
          "A completion percentage needs to show how many people were assigned the lesson and when completion was measured. Suppose a fictional firm assigns a lesson to 40 active employees and 36 finish by the deadline. Completion is 90 percent for that assignment. If five contractors were never assigned, the number does not describe those contractors. Keep exclusions visible so a customer can understand what the record supports.",
          "Comparisons between simulations need context, too. Keep the scenario, audience and reporting method with each result. An easier message can lower the click rate without showing improvement, and a high reporting rate is useful only if reports reach someone who handles them. Check both where they arrived and what happened next.",
          "Use a small set of measures your team can explain: assigned population, completion by due date, unresolved follow-up, reports reaching the right route and practice of the chosen procedure. Define what each measure means before presenting it to leadership. Avoid collecting individual results that nobody needs to make a decision.",
          "Report what the exercise showed and what the firm changed afterward. Those findings may support better decisions, but they cannot establish a count of real attacks prevented or financial losses avoided. Include any missing evidence so leadership knows what the result can support."
        ]
      },
      {
        "h": "Compare the full maintenance cost",
        "ps": [
          "The DIY budget should include time for roster updates, assignments, support, follow-up and evidence preparation alongside the subscription cost. Ask the named owner whether that work fits their ordinary workload. You also need cover for absences and someone who can approve material when the owner leaves the role.",
          "For a managed service, request a written division of work. The provider might operate the platform while your firm still owns role assignments, policy changes and employee discussions. Check whether custom material is included, how many campaigns are covered and how overdue work is escalated. A sample monthly report should show actions as well as percentages.",
          "Before signing, review access, exports, retention and removal of former staff. The platform may hold names, email addresses and individual results, so ask how the vendor uses those records and what the firm can obtain after the subscription ends. Keep individual scores limited to the people who need them.",
          "Compare the same employee population and service period, including onboarding, recurring charges and separately scoped customization. Saved administration time may free capacity for client work. Count it as a cost reduction only when the firm can show that its spending changes."
        ]
      },
      {
        "h": "Start with one cycle and a review decision",
        "ps": [
          "Before rollout, verify the roster and test the reporting route with IT. Assign one relevant lesson and one harmless practice scenario. Tell participants how to report a concern, who receives the result and where they can get help. The firm should be able to explain the exercise without surprising employees about the use of their data.",
          "After the cycle, review late assignments, confusing instructions and unresolved reports. Assign the improvements and verify that someone completes them. You can then assess whether the internal owner has the capacity to run the next cycle. If they do not, use the work from this cycle to evaluate what a managed provider would take on. Access to more lessons would still leave that administration to do.",
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
    "intro": "Planning endpoint protection from employee count alone can leave devices out of the rollout. One employee may use two laptops. A temporary worker may bring a personal device, while a shared workstation may have no clear owner. Each creates a different coverage decision.",
    "lead": [
      "The device list is therefore the starting point for choosing a managed service. Review it with your IT provider and record each device’s operating system, owner and business use. You also need to know whether it can run the proposed protection before planning the rollout."
    ],
    "takeaway": "Start with an agreed list of eligible devices and exclusions. Pilot the protection, check that alerts reach the right people, then expand the rollout with a coverage check for each group. Keep that evidence current as devices join or leave the firm.",
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
          "The proposed provider should identify eligible devices and exclusions in writing. Phones, servers, network equipment and specialized systems each need a coverage decision: installing an agent on employee laptops tells you nothing about protection on those other systems.",
          "Your existing IT provider also needs to resolve conflicts with current security software, check update requirements and arrange deployment permissions. Assign those administrative tasks explicitly so neither provider assumes the other is handling them."
        ]
      },
      {
        "h": "Roll out with a measurable acceptance check",
        "ps": [
          "For example, a hypothetical 50-person New Jersey consulting firm could pilot protection with staff who use different applications and work locations. That gives IT a chance to find deployment problems before extending the rollout. It remains a small deployment test, with no proof of protection against every attack.",
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
          "Coverage changes after onboarding as new starters arrive and devices stop reporting. Compare the current inventory with reporting devices, investigate stale entries and keep dated reports, exceptions and authorized response records in a restricted evidence location.",
          "Those records also give you a defensible answer to a customer questionnaire. Report the eligible device population and the coverage actually reporting at that time. Any excluded devices belong in the stated scope; they prevent an unqualified answer that all endpoints are monitored.",
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
          "IT’s procurement list, device-management report and endpoint console may describe different device populations. Comparing more than one source helps you see the gaps. Use a stable device identifier where possible, because names can change or be reused. A retired laptop and its replacement may otherwise appear interchangeable.",
          "Record the device owner, business role, operating system, support status and last reporting time. Identify shared workstations and spare laptops separately. Ask how personal devices are handled when they access company information. If they are outside the managed service, record the approved access arrangement and the business owner accepting that boundary.",
          "The same problem affects coverage figures. Sixty installed agents would not mean 60 covered devices if some belong to retired equipment. With an inventory of 70 eligible devices, there would still be a gap. Count the eligible devices currently meeting the acceptance criteria against the agreed eligible population, with unknowns and exclusions reported separately."
        ]
      },
      {
        "h": "Make the pilot representative",
        "ps": [
          "A useful pilot reflects the work the firm performs, including its supported operating systems, remote workers and important specialist applications. A tax practice may need a sample using its preparation software; a law firm may need one using its document system. Use ordinary business tasks and harmless sample files to check compatibility.",
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
          "Pilot users can report application failures, excessive prompts or performance changes for IT to investigate. Be careful with the resulting exceptions. Excluding an entire folder or application may fix a business problem while affecting future detection. Record why the exception is needed and what it covers, then confirm that both the application and security agent meet acceptance requirements."
        ]
      },
      {
        "h": "Define the response boundary in advance",
        "ps": [
          "Device isolation can limit an incident’s spread, but it may also interrupt an employee’s work. Leadership needs to understand that tradeoff before agreeing which response actions the provider can take without another approval. Record any special treatment for devices supporting critical work, along with an escalation route for times when the usual contact is unavailable.",
          "Containment authority also leaves a separate recovery decision. The security team that isolates a laptop may not be responsible for supplying a replacement, reinstalling applications or restoring all data. Ask who performs those tasks and whether the cost is included. Employees still need one clear instruction for reporting trouble, even when several providers do the underlying work."
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
          "A vendor-supported, non-destructive test can show whether a covered signal reaches the appropriate service, whether the service handles it and whether the agreed contact receives the escalation. Arrange it with authorization from the relevant teams. An improvised malware experiment on a production device is unsafe, and one successful test cannot prove every detection rule.",
          "Keep a record of the device, expected behavior, observed event, service handling and contact result. If the sample is handled automatically, say so in the result. Automatic handling alone does not show a human investigation. Where analyst review is contracted, ask how the exercise demonstrates it or request supporting process evidence.",
          "Include an unanswered first contact in the planned exercise and test the backup route without creating a false emergency. Confirm the provider has current contact information and the firm knows how to reach the service outside office hours. Resolve any missing authority before extending the rollout."
        ]
      },
      {
        "h": "Expand in controlled groups",
        "ps": [
          "Once the pilot passes, the rollout can expand in groups IT can support. Record the schedule, users needing assistance and unresolved devices, and coordinate application changes with their owners. A company-wide installer delivery can still leave a backlog of unhealthy devices, so you need coverage evidence beyond confirmation that the package was sent.",
          "At each stage, compare the current inventory with the protection console. Investigate duplicate entries, devices that have not checked in and unexpected exclusions. Require a completed acceptance record for each group. The completion date should reflect the agreed coverage check rather than the date the installer was first pushed.",
          "Staff instructions should be ready before rollout, explaining what employees may notice, whom to contact and what to do if a device becomes isolated. Console terminology is less useful to them than knowing how to keep client work moving through approved support and how to preserve the situation for investigation when a security event occurs."
        ]
      },
      {
        "h": "Maintain the enrollment and departure process",
        "ps": [
          "The rollout’s acceptance check belongs in ordinary device provisioning too. Assign someone to confirm enrollment before handing over a new eligible device, including replacements, loaners and new acquisitions. This keeps the inventory and protection aligned after the project ends.",
          "For a retired device, coordinate endpoint removal with the approved retirement and records process. Do not remove protection merely to clear a stale dashboard entry while the device remains in use. Confirm its disposition and any data-handling requirements. Retain the needed historical evidence in the approved location rather than relying on an active console entry forever.",
          "Leadership needs to know which eligible devices remain uncovered and which exceptions are aging. Include an owner, next action and review date for each. An unsupported device that needs replacement gives a leader a decision to make; an unexplained score leaves that decision unclear. Keep the reporting date and device population with the report so customer answers reflect the same scope."
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
    "intro": "An identity threat detection and response service reviews signs that an account may be compromised and takes the actions your firm has agreed to. It also needs a working handoff to the people who administer those accounts. Creating accounts, changing permissions and offboarding remain separate jobs; an investigation can leave a necessary account change unresolved if nobody owns that work.",
    "lead": [
      "When comparing providers, start with the identity platforms your firm uses. Find out what each provider can see on those platforms and what it is authorized to do when something looks suspicious. That gives you a basis for comparing the service with the work your IT team will still handle."
    ],
    "takeaway": "Choose a provider whose supported platforms, available signals and written response authority match your needs. Assign administration, recovery and specialist work separately so the response can continue beyond the alert.",
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
          "Coverage needs to name the accounts and data sources involved, including relevant administrators, guests and application identities. Record systems outside the supported platform and gaps in logs. Your firm then knows which work it must assign elsewhere because the provider cannot observe it.",
          "A suspicious sign-in calls for review; it does not automatically prove compromise. Consider a hypothetical New Jersey consultant traveling to a client site who generates unusual activity. The provider needs a way to check that explanation while still investigating the possibility of a genuine account takeover."
        ]
      },
      {
        "h": "Require a written response path",
        "ps": [
          "A fictional incident walkthrough can make the response process easier to evaluate. Have the vendor show who checks the event and how they contact the user through a trusted route. The walkthrough should also identify any actions that can happen automatically.",
          "The platform and the provider's authority determine the available actions, which may include restricting an account or requiring additional verification. Follow that explanation through to active sessions and connected applications. A password reset alone does not prove that all access has ended everywhere.",
          "Existing IT needs a clear handoff for administrative changes and recovery. Assign forensic investigation, client notification and legal decisions to their own owners, too. The response record should identify the signal, who reviewed it, the authorized action and any questions still unresolved.",
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
          "Your identity inventory should include the primary directory, independent applications, privileged accounts, guests and relevant application identities. Match that inventory to the provider's supported scope. Protection for the main email platform may leave specialist applications outside the accounts being monitored.",
          "Next, map the data the provider receives, including sign-in records, risk signals and application events. Find out how quickly those records arrive and which require additional licensing. One working integration can still leave parts of the account history unavailable, so the map should show gaps explicitly.",
          "An enabled connector does not establish complete coverage. After onboarding, the provider should be able to explain how it confirms that the intended accounts are included and the required records are arriving. Agree who detects a collection or coverage failure and whom they notify.",
          "The firm supplies business context that the technical records may not explain: whether the user is traveling, an integration is new or a role change was approved. The provider can use that context while reviewing the event. Give people a trusted way to share it without relying entirely on the account that may be compromised."
        ]
      },
      {
        "h": "Distinguish detection, investigation and action",
        "ps": [
          "Following one event through the service reveals what each stage does. Detection flags unusual or risky activity. Investigation assesses the evidence and the uncertainty, and action applies the controls the service has permission to use. Identify the automated steps and the points where an analyst reviews the event.",
          "For a fictional account event, have the provider explain the trigger and the additional records available, then show how it decides the next step. Inconclusive evidence needs its own record and escalation route. It should not be forced into a confirmed-compromise category.",
          "A quoted response time needs a defined endpoint. Under the specified conditions, it might measure acknowledgment, investigation or containment. Acknowledging an alert quickly still leaves the event unresolved; the contract should state the commitment for each covered step.",
          "Escalations also need a backup contact when the primary person is unavailable. Leadership should know which decisions it must make and what authority the provider already has. Keep emergency contacts current, and test the notification route harmlessly before an event requires it."
        ]
      },
      {
        "h": "Define containment authority and its limits",
        "ps": [
          "Written authority should specify the actions the provider may take on supported accounts and the conditions for taking them. Depending on the platform and agreement, that might mean restricting access, requiring additional verification or handing the action to IT. A product's available controls do not automatically give the managed provider permission to use them.",
          "The effect of an account restriction or credential change needs to be checked for each relevant application. Have the provider explain what it checks and what access may persist, with an owner for independent applications. A password reset by itself cannot demonstrate that every session and permission has ended.",
          "Restricting an account can interrupt urgent work. Decide in advance who can approve an alternative working method and who confirms that access can safely return. That preparation helps the firm avoid weakening a response rule on the spot because the employee is senior or facing an important deadline.",
          "Restoration needs agreed conditions. IT may have to change settings or verify credentials first, and specialist work may require a separate engagement. Record the completed actions and assign anything still unresolved. Restoring access does not by itself prove that the concern was addressed."
        ]
      },
      {
        "h": "Evaluate privileged, guest and application identities",
        "ps": [
          "Privileged accounts can make broader changes, so evaluate their coverage separately. Confirm that their signals are included, how important events are escalated and which recovery procedures exist. Ordinary-user coverage does not automatically include every administrator or emergency account.",
          "The employee roster will not cover every guest with shared-workspace access. A guest may retain that access after collaboration ends, so somebody needs to own reviewing and removing the permission. A threat service observing some guest activity does not complete that access-governance work.",
          "Application identities and integrations may use different permissions or credentials from employee sign-ins. Give them technical owners and confirm whether the service supports their identity types and signals. Record the review and response tasks that remain with IT wherever the service does not cover them.",
          "Questionnaire answers need the same coverage distinctions. A claim about protecting all identities requires a population and evidence that support it; having a supported account-protection service is not enough. Describe the exclusions clearly, including those listed in contract attachments."
        ]
      },
      {
        "h": "Read a sample report as an operating record",
        "ps": [
          "A fictional event record lets your firm assess reporting without seeing another customer's information. Look for the affected account, observed signal, reviewer, time, permitted action and escalation. You should also be able to distinguish confirmed facts from unresolved questions.",
          "Monthly reports should help you check coverage and follow-up alongside event counts. Unsupported accounts, collection failures and administrative tasks waiting for IT all belong in that review. Alert volume alone cannot tell you whether protection still covers the intended accounts.",
          "Detailed identity records can contain personal and organizational information, so agree on access and retention. Limit distribution to people who need the detail and use summaries for broader leadership review. If another responder or counsel needs relevant records, there should be an agreed secure transfer route.",
          "At the end of the engagement, your firm needs a way to obtain its permitted reports, transfer integrations and revoke provider access. Check those exit arrangements before signing. Preserve the records required by your own policy without leaving an old provider connected indefinitely."
        ]
      },
      {
        "h": "Test the handoff and maintain it",
        "ps": [
          "A harmless tabletop exercise with the firm contact, provider and IT tests whether the handoffs work before you rely on them. Walk through notification, authorized restriction, evidence handling and restoration, including any steps that depend on a separately engaged incident responder or legal adviser.",
          "If the exercise reveals that nobody can administer an independent application after hours, assign that responsibility directly. Agree who has the authority and how to reach them, then record the route and any remaining limit. Additional identity alerts cannot fill an unassigned role.",
          "Platform changes, acquired accounts and new integrations can change the coverage map. Review it as those changes occur, keeping the account population and contacts current. A provider should be able to explain its boundaries and demonstrate a response path that works within them.",
          "Recurring false positives need review before anyone approves an exception. A broad suppression could hide a later event with different facts. Record the affected activity, the approver and when the exception should be reconsidered; troubleshooting an alert does not itself authorize disabling its detection."
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
    "intro": "An AI draft can be ready quickly and still take twenty minutes to check. Before renewing licenses or expanding a pilot, measure how long it takes your team to finish work they can actually use. That includes preparing inputs, reviewing and correcting the output, and keeping the workflow up to date. Software fees belong in the cost comparison too.",
    "takeaway": "Compare complete, accepted outputs at the same quality standard. Record preparation, checking, corrections, fees, and maintenance. Time freed for other work is useful capacity; it becomes cash savings or revenue only when a separate business change produces that result.",
    "sections": [
      {
        "h": "Measure the existing task first",
        "ps": [
          "Start by agreeing what a finished task looks like. Then record several examples completed without AI, including difficult cases. Count the time spent finding the material, producing the work, checking it, making corrections and handing it over. The pilot needs the same acceptance criteria: otherwise, a quicker draft may be getting credit for work that someone still has to finish.",
          {
            "text": "NIST’s AI RMF Playbook calls for comparing expected benefits and costs with appropriate benchmarks. Your own completed work provides a more relevant starting point than a vendor’s demonstration.",
            "links": [
              {
                "phrase": "NIST’s AI RMF Playbook",
                "to": "https://airc.nist.gov/airmf-resources/playbook/map/"
              }
            ]
          },
          "When one person prepares the work and a partner reviews it, both people’s minutes count. Record them separately, along with the agreed labor-cost assumptions. Keep waiting time separate from active staff time, too. A response that reaches the client sooner may still use the same number of paid hours."
        ]
      },
      {
        "h": "Hypothetical worked example: twenty internal checklists",
        "ps": [
          "Consider a hypothetical firm producing twenty internal checklists per month from approved procedures. These figures are assumptions, not a customer result, a Helm quote, or a vendor price. Without AI, each checklist takes thirty minutes, including its normal review. At an assumed loaded labor cost of $40 per hour, ten hours of work cost $400.",
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
          "The calculation needs the work that never produces a usable draft, too. Record failed attempts and drafts that staff abandon; measuring only successful outputs overstates the benefit. Look at who now does the review. If work has shifted from an administrator to a more expensive partner, fewer minutes may cost more. Variable usage charges and extra maintenance after source documents change can also affect the result.",
          "In the example, the two hours and twenty minutes released are valued at $93.33 under the $40 hourly assumption. Subtract the $30 software allocation and the modeled recurring process-cost difference is $63.33. Salaries may remain unchanged, so neither figure automatically reduces spending. Cash savings require an expense to fall, such as overtime. Revenue requires suitable demand and billable work that is completed and paid for. How the firm uses the freed time determines whether either result follows."
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
          "A shared measurement sheet helps employees count the same work. Use the same timing fields for every task, and record its identifier, input type, worker and acceptance result. An identifier and approved category may be enough to explain the task; in that case, leave confidential task content out of the sheet.",
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
          "An easy AI-assisted example and a difficult manual case tell you little about the tool’s contribution. Choose tasks with comparable scope and difficulty. Where the work varies substantially, report routine and exception cases in separate groups so that the comparison remains useful.",
          "Count the full effort when a draft fails. If an employee abandons the AI output and completes the task manually, the accepted result consumed both the attempted AI work and the manual work. Record why the draft was rejected so the team can judge whether that problem is correctable.",
          "Some improvements during a pilot may come from changes to the process itself. Staff might improve a template, clean a source folder or remove an unnecessary approval, each of which can reduce time independently of AI. Record those changes and, where practical, compare the improved manual process as well.",
          "Report the pilot’s limits alongside its results: the number and type of examples, who completed them, the observation period and work left untested. That lets another team decide how relevant the result is without mistaking a small pilot for a general productivity finding."
        ]
      },
      {
        "h": "Calculate the full recurring cost",
        "ps": [
          "To calculate staff time, multiply task volume by the minutes per task for each process. Add maintenance time to the assisted process, then convert minutes to hours before applying labor-cost assumptions. Calculate each role separately when their costs differ.",
          "Add the software cost attributable to this workflow and explain how you allocate a license used for several tasks. Assigning all of the fee, or none, without explanation can distort the comparison. Include usage charges and incremental storage or integration costs where they apply.",
          "Keep one-time setup separate from recurring operation. Training, configuration, initial source cleanup and external assistance may make the first month more expensive even when the later process is cheaper. Show that distinction so leadership can decide whether the expected duration of use justifies the setup cost.",
          "Leadership needs to see how the result was calculated. Label measured fields separately from estimates; the checklist example uses hypothetical time, labor, software and setup figures throughout. In a real pilot, those labels let someone inspect the assumptions behind a return percentage."
        ]
      },
      {
        "h": "Test how sensitive the decision is",
        "ps": [
          "The least certain assumptions deserve a second calculation. Try lower monthly volume, longer review or more maintenance after a procedure update. If a modest change removes the expected benefit, collect more evidence before expanding the workflow.",
          "Consider the reviewer’s availability. A process may save an administrator time while consuming a partner’s scarce attention. Even if the modeled labor cost appears acceptable, the firm may prefer to preserve the partner’s capacity for work that cannot be delegated.",
          "Check whether the tool reduces errors or creates a new review burden. Use a defined error category and a consistent acceptance standard. Do not assign a financial value to every prevented mistake unless the firm has a defensible basis for that estimate. Reporting fewer corrections can be useful without pretending to know the cost of an avoided incident.",
          "Show exceptions alongside the average. Several easy successes can offset one long failure in the calculation while leaving the workflow unreliable for a deadline-sensitive task. Describe that failure in the decision record so leadership can assess the timing risk."
        ]
      },
      {
        "h": "Decide what to do with the freed capacity",
        "ps": [
          "Before treating the pilot as a business gain, decide where the freed time will go. It might let staff respond to clients sooner, reduce a backlog or complete a recurring administrative task that currently slips. Measure that outcome separately from the drafting improvement so you can see whether the intended benefit happened.",
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
    "intro": "An authenticator app can give you a code, ask you to approve a sign-in or hold a passkey. The app alone tells you little about the protection an account has. A code can be entered on a phishing page; a passkey checks the service it belongs to. When you review MFA with IT, find out which method each account requires and whether it still accepts a weaker alternative.",
    "takeaway": "Start with accounts whose misuse would cause the most harm. Passkeys and FIDO2 keys provide phishing-resistant sign-in where supported; SMS, TOTP codes and push approvals do not. Check what each account requires, remove or document weaker sign-in paths, and test recovery before enforcement.",
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
          "An account inventory gives you a basis for deciding where to start. Include email, cloud documents, payroll, finance, remote access and administrator portals. For each, record the owner and what unauthorized access would let someone do. That puts administrators and people who approve payments, change customer instructions or open sensitive records near the top of the review.",
          "Next, ask IT which sign-in paths require the chosen method. Registration shows that someone has enrolled it, but the account may still let them choose a weaker alternative. Enforcement policies, exclusions and the applications accepting those alternatives tell you whether the protection is required in practice.",
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
          "For high-impact accounts, ask the platform owner which stronger supported method is available. Moving to it may require a license, policy or application change, so get that information before committing leadership to a rollout date.",
          "If an application continues to support SMS during the change, record why the exception exists and when it will be reviewed. An SMS code and a phishing-resistant method can both satisfy an MFA prompt, but they do not provide equivalent protection."
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
          "The enrollment secret and recovery codes also need protection. Broadly shared documents and team email create extra copies of credentials, so agree on an approved recovery system and who may access it before staff start storing the information wherever it is convenient.",
          "Before replacing a phone, follow the app and account provider’s supported transfer procedure. Test access on the replacement device before wiping the old one. If a phone is lost, use the documented recovery process rather than asking a colleague to share access to their own account."
        ]
      },
      {
        "h": "Push approvals and number matching",
        "ps": [
          "A push request arrives on a registered device for approval. If you did not start the sign-in, reject it and report it. Repeated prompts do not make the request legitimate; approving one simply to stop the notifications can authorize access you did not intend.",
          {
            "text": "Number matching connects the approval to the sign-in that started it, reducing accidental approval. It is still not phishing-resistant. The interaction can also vary by application and device: Microsoft number-matching guidance describes specific same-device behavior for mobile apps. Test the applications your staff use so the instructions match what they see.",
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
          "Where the credential is stored affects recovery and who controls access. A device-bound credential and one synced through a provider account have different recovery dependencies. Ask who controls that provider account, which devices may hold credentials and what happens when employment ends. Those decisions belong alongside the discussion of convenience for staff.",
          "Register approved backup methods before they are needed. When a security key is lost, support should verify the requester, follow the recovery process and remove the lost credential as appropriate. Track any spare key too; leaving it in an uncontrolled drawer weakens the recovery arrangement.",
          "Phishing resistance protects the authentication step. It does not make a compromised endpoint trustworthy, prevent every session theft or validate a payment request after sign-in. Continue the other controls around devices, permissions and business approvals."
        ]
      },
      {
        "h": "A practical comparison",
        "ps": [
          "A method’s phishing resistance is only part of the choice. The account must support it, policy must enforce it, and staff must be able to recover access. Review those conditions with IT for the accounts in scope."
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
          "An enrollment percentage tells leadership who has registered a method. It misses accounts that still accept weaker authentication, as well as method resets and unexplained prompts. Include those in the review, and track which accounts have the required method enforced and which have documented exceptions.",
          "Report administrators separately from ordinary users so high-impact gaps are visible. State the measurement date and systems included, then give each exception an owner, an explanation of the remaining exposure and a date for reconsideration.",
          "Staff changes, acquisitions, new applications and device policies can change that inventory, so revisit it as accounts are added, changed or removed. Your existing IT provider should remain involved in administration and policy changes. If managed identity protection is in scope with Helm, agree who handles the security review."
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
      "The choice also has to work when someone loses their phone. Suppose an employee can no longer use the device they sign in with. Support needs to restore their access and reject someone pretending to be them. Before enforcing a method across the company, check that staff can enroll and use it on their supported devices, then test how they would recover access."
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
    "intro": "Choosing Microsoft 365 backup starts with the work your firm would need to recover: a deleted client file, for example, or a damaged shared document site. Microsoft offers retention, recovery and native backup capabilities, each with its own scope. Compare those capabilities with your restore requirements and the process your team can operate. A sales claim that Microsoft has no backup leaves you without that comparison.",
    "lead": [
      {
        "text": "Retention policies can preserve or delete content according to configured rules. That tells you how information is kept; you still need to establish how the firm would recover usable work. Microsoft 365 Backup is a separate recovery product covering supported SharePoint sites, OneDrive accounts and Exchange mailboxes, with licensing, billing and configuration to review separately. See Microsoft Purview retention and Microsoft 365 Backup overview.",
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
    "takeaway": "Choose a service by checking which data it covers, how you would restore that data and who would do the work. Microsoft offers retention, recovery and native backup, so compare its options and third-party products against those same requirements.",
    "sections": [
      {
        "h": "Compare recovery requirements by workload",
        "ps": [
          "Ask IT to map the firm's mailboxes, accounts, sites and other required data to the native or third-party products that could recover them. Include shared information and records of departing employees, and list exclusions. You can then compare vendors against the same set of recovery needs.",
          "Mailbox coverage alone does not establish whether a product restores every Teams conversation, application configuration or connected service. The product's current workload and restore documentation should explain what is supported. Check whether permissions, versions and other information you need return with the content.",
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
          "A recovery objective is a target to evaluate under the conditions your firm may face. Restoration depends on the supported workload, amount of data, event and configured service. Keep failed tests and exceptions alongside successful jobs; otherwise the record can hide the scenarios you have yet to verify."
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
          "A deleted email calls for a different recovery process from widespread changes to a document site. An overwritten spreadsheet may present another problem. Before comparing products, describe the event you need to handle and the business process it would interrupt. Identify the data owner and how much disruption the firm could tolerate, then ask the person responsible for resuming client work what they would need back.",
          "Recovering a deleted client file may mean finding a particular earlier version and returning it with the right access. A damaged site may require a broader recovery, including reconciling work completed after the selected point. Employee departures raise a separate need: retaining required business records while transferring ownership. Testing one file recovery leaves those other scenarios unverified.",
          "Use tenant records to map active and shared mailboxes, OneDrive accounts and SharePoint sites, along with dependent applications. List local files, application databases, identity settings and external records separately. Each uncovered workload needs a recovery method or a named owner for the gap. The licensed-user total cannot show whether those systems and records are included."
        ]
      },
      {
        "h": "Separate preservation from restoring operations",
        "ps": [
          "A preserved record and a usable working copy can meet different needs. Retention may satisfy legal, records-management or business requirements, but finding the preserved information may require a specific search or export process. Recovery returns usable work after an interruption, though a restored copy may not meet the preservation obligation. Have the records adviser approve retention requirements and IT approve the recovery design, then check where those decisions depend on each other.",
          {
            "text": "Microsoft's retention documentation describes preservation and deletion behavior. Read it alongside your tenant's actual settings to verify the configured feature. A policy offered by the subscription cannot protect data until it is configured. Recovery features also need the required setup, permissions and covered data before an operator can rely on them.",
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
          "For each option, examine recovery points, protected workloads, administrative access and billing. Check restore granularity: whether you can restore the individual item or broader set of data your scenario requires. Enrollment deserves attention too. Ask how the service discovers new mailboxes or sites, whether an administrator must approve them, and how it handles inactive accounts and licensing changes. An important new site can remain outside coverage when no one knows who must enroll it, even if the product itself is capable.",
          "A provider's claim of independence needs a practical explanation. Ask where recovery data is stored, which identities can administer it and whether a compromise of the production administrator could also affect recovery controls. No particular architecture should be assumed immune to compromise. Use the provider's current security and recovery documentation to identify the remaining failure modes that matter to your firm."
        ]
      },
      {
        "h": "Design a restore test that demonstrates usability",
        "ps": [
          "Select non-sensitive sample data from a representative covered workload. Give the operator a clear recovery request: the item, approximate time, requested destination and business approver. Record how the operator finds the available recovery point and confirms that the request is authorized. Avoid using a privileged administrator's own sample as the only test if ordinary business requests follow a different process.",
          "After restoration, have the business owner open the content and check the expected information, user access and any required versions or metadata. Confirm that the destination has not overwritten good current work. If one of these checks fails, record it as a finding even when the console says the restore completed.",
          "Measure the time from request to usable recovery as well as the operator's hands-on effort. Authorization, finding a recovery point, transferring data and checking usability can each delay the return to work. Recording those stages separately helps you see whether the delay came from the product or the operating process. Advertised restore speed cannot tell you how long your business will need to approve and verify its own request."
        ]
      },
      {
        "h": "Protect recovery decisions from everyday access",
        "ps": [
          "Name the people permitted to request a restore and the people permitted to perform it. They may be different. A restore can expose old content or replace current content, so permission to use a shared site should not automatically become permission to restore its historical contents. Keep a record of the request, authorization, operator and result.",
          "Staff and provider changes should prompt a review of administrative access and a check of who can cover for the usual operator. Keep support and escalation contacts accessible outside the affected tenant, and test that contact route during a planned exercise. If the recovery plan lives only in an account you can no longer access, the people carrying it out may be unable to reach it when needed."
        ]
      },
      {
        "h": "Make the purchasing record specific",
        "ps": [
          "The purchase record should tell someone what the firm can recover and how. Include covered workloads, recovery scenarios, the chosen service, the operator and exceptions, alongside test evidence and current commercial terms. Describe any target the pilot missed and assign an owner to the gap. That detail gives the firm more to work with than a blanket statement that it is fully backed up.",
          "Review the record after a new application, acquisition, substantial site change or provider transition, and confirm that the service order still matches the environment. If you plan to cancel a service, agree on data access, any required export, administrative handover and the date recovery access ends while the current service is still available.",
          "When reporting to leadership, explain which important workloads are covered and what the restore test showed. Include the scenario tested and anything unresolved. Successful job counts show completed activity, but cannot establish that every business recovery will succeed; the report should stay tied to the configured service and the scenarios examined."
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
    "intro": "Outlook’s encryption options protect different parts of an email exchange. A client opening a tax document may need a different exchange from a business partner that requires certificates. Start with who needs access and what protection the document needs after delivery. Then test whether the proposed method supports that exchange.",
    "lead": [
      {
        "text": "The Office 365 Message Encryption name still appears in discussions and older material. Microsoft now calls the service Microsoft Purview Message Encryption. Your subscription, configuration and mail clients determine which features are available; the Microsoft email-encryption comparison explains the options.",
        "links": [
          {
            "phrase": "Microsoft email-encryption comparison",
            "to": "https://learn.microsoft.com/en-us/purview/email-encryption"
          }
        ]
      }
    ],
    "takeaway": "TLS protects mail in transit between servers. Purview Message Encryption provides supported message protection and recipient access, while S/MIME uses certificates and keys for encryption and digital signatures. Choose according to the recipient and required protection, then have your existing IT provider verify licensing and test the full exchange.",
    "sections": [
      {
        "h": "Match the method to the exchange",
        "ps": [
          "TLS protects mail while it travels between servers. Once a recipient has a copy, that transport protection gives the sender no continuing control over it. Ask IT whether the partner exchange needs enforced TLS, how the connection would be configured and what happens when it fails. The failure behavior is part of deciding whether the arrangement meets the partner's requirements.",
          {
            "text": "For protection at the message level, Purview Message Encryption gives external recipients access through supported sign-in or passcode experiences. S/MIME uses certificates and keys for message encryption and digital signatures, so the setup at both ends matters. These methods serve different operational requirements. Combining several on one message can create compatibility problems; see Microsoft's comparison and cautions.",
            "links": [
              {
                "phrase": "Microsoft's comparison and cautions",
                "to": "https://learn.microsoft.com/en-us/purview/email-encryption"
              }
            ]
          },
          "A partner that requires certificates may be a good fit for S/MIME. Individual clients may need a simpler way to gain access. Work out which recipients the method must support before making it a firm-wide policy."
        ]
      },
      {
        "h": "Test the full exchange with harmless files",
        "ps": [
          "Your existing IT provider can prepare a test with non-sensitive sample data. Use the Outlook versions employees actually use and the mail clients and devices recipients are likely to have. Follow the document through the exchange: open the attachment, send a reply and check how an incorrectly addressed message would be handled.",
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
          "Decide on the fallback before someone needs it during a deadline. An appropriately configured client portal may be an approved alternative while IT resolves the problem. The procedure should never silently send sensitive files without the agreed protection."
        ]
      },
      {
        "h": "Keep the claim narrower than the evidence",
        "ps": [
          "A successful test gives you evidence about the clients and configuration you tested. It cannot certify every message, attachment or device. Keep the test date, policy scope and exception records so the limits are clear. Counsel or the responsible compliance adviser should determine whether the workflow meets applicable obligations; this guide does not establish that encryption alone satisfies them.",
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
          "A routine invoice can have different handling needs from a tax return or health record. Identify who is sending the information, who will receive it and which contractual restrictions apply. Then establish what the recipient needs to do with the attachment. Establish whether they need to edit or forward it, or retain it in a matter file, so the selected control supports the work.",
          "Encryption cannot fix a wrong autocomplete selection. If the wrong address is authorized to open the message, the information still reaches the wrong person. Confirm the recipient for sensitive exchanges, especially a first message to a new client or a thread with several outside parties. Agree on the approved address through a trusted channel before sending the document.",
          "Access instructions need the same attention as the send button. Decide how recipients will obtain access information, where they can get help and what records the firm must retain. Sending a password in the same email as the protected attachment provides no separate verification channel. Give staff an agreed route for sharing that information and a procedure they can follow during a deadline."
        ]
      },
      {
        "h": "Compare the operational burden",
        "ps": [
          "Each method leaves the firm with work to maintain. A certificate-based exchange needs someone to manage certificates and keys; message protection needs licensing and recipient access checked. If staff repeatedly bypass protection because recipients cannot open messages, investigate and fix that access problem. The table compares operating duties, without ranking cryptographic strength.",
          {
            "text": "Microsoft's email encryption guidance describes how the products differ. Whether a particular exchange meets a client obligation is a separate decision. The person responsible for the engagement should record why the choice is appropriate, with IT confirming that it behaves as expected.",
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
          "An accounting practice could run a pilot with recipients using personal webmail, Outlook at another company and a phone. With harmless sample attachments, ask each recipient to find and read the file, reply and return the completed document through the intended route. A recipient who can open the message may still have trouble completing the exchange.",
          "What recipients see in that pilot can become the basis for staff and client instructions. Record whether access needs an account, whether invitations can expire and which devices support the exchange. Staff should be able to explain the sign-in or passcode step and help with problems without asking clients to send passwords or confidential screenshots.",
          "Use approved test accounts to check any forwarding restriction you intend to rely on for the selected message type. The original message's protection label does not establish continuing control over every attachment. Even where a restriction works, recipients may take notes or photograph what they can see. Choosing an authorized recipient and agreeing on appropriate use of the information remain part of the exchange."
        ]
      },
      {
        "h": "Understand revocation before relying on it",
        "ps": [
          {
            "text": "Revocation needs a specific test. Some advanced controls depend on the licensed feature and how the recipient accesses the message, as Microsoft explains in the Purview Message Encryption overview. Have IT demonstrate the scenario you intend to rely on before adding it to an incident procedure or promising it to a client. Those controls do not support a blanket claim that the firm can revoke any email after delivery.",
            "links": [
              {
                "phrase": "Purview Message Encryption overview",
                "to": "https://learn.microsoft.com/en-us/purview/ome"
              }
            ]
          },
          "Withdrawing supported access cannot recover information someone has already read, copied or downloaded. If a message reaches an unintended recipient, keep the delivery details, attempt the supported containment action and follow the firm’s incident process. A successful technical action still leaves the responsible adviser to assess the disclosure and any notification questions.",
          "For certificate-based exchanges, assign someone to handle renewals and advance warnings. Also decide how the firm will access retained protected messages after an employee leaves, and test a retained sample with the approved succession arrangement. The authorized administrator needs a recovery procedure for lost keys and expired certificates, with access limited to those who need it."
        ]
      },
      {
        "h": "Give staff a short operating rule",
        "ps": [
          "Staff need a short procedure they can use when sending a document. For client tax documents, an illustrative rule could specify the approved exchange, require address confirmation before the first send and name the support contact for a protection failure. It would also give staff an approved alternative while IT resolves the problem. The actual rule depends on the firm’s data, clients and engagement terms; this example is not a universal legal requirement.",
          "A client who cannot open a test file needs support. A confidential attachment sent to the wrong person needs an incident decision. Name the contact for each situation and tell employees what information to provide. They should be able to ask for help without first diagnosing the encryption technology."
        ]
      },
      {
        "h": "Keep evidence that answers the real question",
        "ps": [
          "Keep a record of the selected method and who is licensed to use it, along with the policy scope, pilot date and recipient scenarios tested. Include business approval and any unresolved exceptions. Meaningful changes to the mail client, licensing, recipients or protection policy call for another check. Set a review frequency that fits the business requirements and rate of change.",
          "A client questionnaire about encrypted messages needs more detail than the fact that the firm uses Microsoft 365. Explain which exchanges receive which protection, how employees select the workflow and who verifies that it works. Include the relevant scope and exceptions so the answer reflects the evidence you have."
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
    "intro": "A shared vendor password may keep work moving today and leave the company with an access problem when someone leaves. The password might still work, even after the person loses access to the place where it was stored. Or the remaining staff may discover that nobody knows who owns the account or how to recover it.",
    "sections": [
      {
        "h": "Start by identifying where passwords still matter",
        "ps": [
          "Begin with the accounts the company relies on: email administration, finance, payroll, website management, social accounts and important vendor portals. Give each an owner who can answer for its access. As you build the inventory, distinguish individual logins from shared passwords and application credentials; each needs a different access arrangement.",
          "Where a service supports individual accounts, use them and give each person the permissions their work requires. That makes activity easier to attribute to someone. A shared credential can still be justified where the service permits it, but putting a powerful administrator login in a vault is no reason to share it across the team.",
          "Record accounts that already support stronger sign-in methods. A password manager can be part of the access system without being the answer to every account. Ask your existing IT provider how single sign-on, passkeys, MFA and the vault fit together before buying overlapping capabilities."
        ]
      },
      {
        "h": "Why unique passwords are useful",
        "ps": [
          "Password reuse connects accounts that would otherwise be separate. When a password is exposed in one service, attackers can try the same username-and-password combination elsewhere. A unique password for each service limits that route into the other accounts.",
          {
            "text": "CISA recommends long, random, unique passwords and a password manager protected by MFA. Its guidance explains why remembering a large collection of strong passwords manually is impractical. CISA password-manager guidance.",
            "links": [
              {
                "phrase": "CISA password-manager guidance",
                "to": "https://www.cisa.gov/resources-tools/training/cyb3rsmrt-use-password-manager-create-and-remember-strong-passwords"
              }
            ]
          },
          "If the team has reused a password, changing it in one portal leaves the other accounts exposed to the old value. Identify every affected company account and change each password through the service’s supported procedure. Store the current credentials in the approved place so staff can use them without returning to the reused password.",
          "A password manager cannot prevent every account compromise. A phishing interaction, compromised device, weak recovery route or excessive permission can create a separate problem. Unique passwords reduce one exposure while other access controls address the rest."
        ]
      },
      {
        "h": "Browser storage and business vaults answer different needs",
        "ps": [
  "Browser password storage can make unique passwords easier for one person to use. For a company, the decision also depends on who owns the account, how the browser is managed and what happens when that person leaves. Inspect those details before deciding whether browser storage meets the team’s needs.",
  "Ask for a demonstration with a test account. Have the proposed tool handle a shared item, change its permissions, recover access administratively and remove a user. In particular, check that the business can retain access after the item’s creator leaves. A product may support some of these controls only in certain plans or configurations, and it may not support every control below. Verify the exact purchase before trusting a feature with production credentials."
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
          "The vault contains credentials for other systems, so its own sign-in needs careful attention. Follow the provider’s supported authentication controls and your organization’s requirements. Where the product requires a master credential, make it strong and unique, and enable the supported MFA method.",
          "Recovery needs the same care. Work through it with IT before someone loses access: identify who can reset or recover the vault, how they verify the requester and which actions are logged. Knowing a colleague’s title or saying the request is urgent should not be enough to obtain their access.",
          "Manage administrator privileges separately from ordinary vault use. Give only the necessary people administrative roles, document why they need them and review those assignments. Ensure an authorized backup administrator exists so the company is not dependent on one employee’s availability.",
          "Use dummy credentials to test recovery before moving critical accounts into the vault. Include a scenario where the main administrator loses a device or is unavailable. Record the procedure, then protect the recovery material so it does not become another way into the vault through a broadly shared folder."
        ]
      },
      {
        "h": "Design shared access carefully",
        "ps": [
          "Organize shared items around people’s work. Finance may need billing portals without needing website administration, while marketing may need social accounts without needing payroll. Collections and permissions should reflect those responsibilities instead of giving everyone access to one company-wide collection.",
          "Give each shared item an owner. That person maintains the account details, confirms authorized users and coordinates changes. Include a brief description of the service and its purpose, but avoid putting unnecessary sensitive information into item notes.",
          "Before relying on user removal, check whether someone with vault access could retain the password, including when the tool restricts viewing or copying. Removing them from the vault leaves the service’s password unchanged. If they knew or could have copied it, changing that credential is part of removing their access.",
          "Plan rotation after a relevant departure or suspected exposure. Test the updated credential and any dependent integration. A changed password that silently breaks a scheduled business process creates pressure to restore the old value, so include the service owner in the work."
        ]
      },
      {
        "h": "Migrate in a controlled order",
        "ps": [
          "Start with a small set of important accounts and representative users. Confirm the browser or application integration works on supported devices. Teach staff how to save, retrieve and update credentials without sending them through chat.",
          "An import carries the old password store’s problems with it. A spreadsheet may contain duplicates, wrong URLs, abandoned accounts or untested passwords. Review the imported items to establish which are current and authorized before staff rely on them.",
          "Generate new unique passwords through the service’s supported change process. Confirm the account still works, the vault contains the current value and unnecessary old copies are handled under your records policy. Avoid keeping a second unprotected spreadsheet indefinitely as a convenience backup.",
          "Move the remaining accounts in manageable groups. Staff should know where to report a missing item and who approves new shared access. Give the help desk a practical recovery procedure before enforcing a tool change across the team."
        ]
      },
      {
        "h": "Keep MFA on the underlying services",
        "ps": [
          "MFA on the vault protects the vault sign-in. Someone using a stored password to enter a banking portal or email system still faces that service’s own sign-in requirements, so review MFA on each underlying account separately.",
          {
            "text": "Our MFA comparison guide explains the differences among SMS, authenticator codes, push approvals and phishing-resistant passkeys. Choose supported methods with IT and test recovery before removing existing routes.",
            "links": [
              {
                "phrase": "MFA comparison guide",
                "to": "/resources/mfa-methods-compared/"
              }
            ]
          },
          "Some tools can store a second-factor secret beside the password. Decide with IT whether that arrangement fits the account’s risk and the firm’s policy. Pay particular attention to administrative and financial accounts, where the convenience of keeping both together needs to be weighed against keeping the factors separate."
        ]
      },
      {
        "h": "An illustrative offboarding example",
        "ps": [
          "Suppose two staff members share a vendor portal because it does not support separate users. One leaves and is removed from the company vault. In this hypothetical example, the portal password has not changed, so a password the employee previously saw or copied still works even though they can no longer retrieve the vault item.",
          "The service owner needs to change the portal credential, test it and confirm that the remaining authorized employee can use it. If the vendor later offers separate users, review whether the shared arrangement can be retired.",
          "The same review should cover recovery email addresses and phone numbers. A company-controlled password is insufficient if the account can still be recovered through the departed employee’s personal address. Ownership includes the reset route as well as the secret."
        ]
      },
      {
        "h": "Review the vault as an ongoing system",
        "ps": [
          "Check administrator assignments, shared-item membership and unresolved account owners on a schedule appropriate to the business. Revisit them after departures, role changes and new service purchases. Use available logs where supported to investigate unexpected changes.",
          "To see whether the rollout is working, review the accounts brought under the approved process. Look for identified owners and unique credentials, along with tested recovery and completed rotation where required. The number of licenses issued or extensions installed cannot tell you whether those steps are complete. Record the gaps that remain.",
          "Ask staff whether they still use another password store and what the approved system is missing. Resolve those missing items or workflows directly; otherwise, the vault may look well maintained while the credentials used for daily work remain elsewhere.",
          "Helm can discuss account-protection priorities alongside your existing IT provider. Routine account administration and vault configuration remain with the agreed IT owner unless separately scoped. Choose and maintain the access system as part of your broader identity work."
        ]
      }
    ],
    "takeaway": "Use unique credentials, prefer named accounts and inspect the business controls in the chosen vault. Protect vault access, test recovery and rotate shared secrets when required. Removing a user from a vault does not invalidate passwords they already knew.",
    "lead": [
      "A business password manager should help you manage those situations as well as create unique credentials. When comparing a business vault with browser-saved passwords, look at who owns the accounts, who can use them and how the company recovers access. Then check what happens at departure and what records you can review. These controls vary by product and plan, so the comparison needs to cover the version you would actually buy."
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
    "intro": "A report covering employee laptops cannot, by itself, answer a client's question about protection across the whole business. Someone has to read the question, check what the evidence actually covers and approve the answer. Choosing between DIY and a questionnaire response service starts with deciding who can do that work.",
    "lead": [
      "DIY can work if someone at your firm understands the controls, can get evidence from IT and has time to coordinate reviews. A response service can help with drafting and organization. Your firm still owns every final representation it makes to the client."
    ],
    "takeaway": "Map questionnaire answers to current scoped evidence. A response service can help draft and organize; your firm approves every final representation.",
    "sections": [
      {
        "h": "Start with the question's scope",
        "ps": [
          "The same wording may refer to one service, one business unit or all production systems. Before drafting, record which of those the requester means, along with the deadline and who will approve the response. Otherwise, an answer supported by a laptop report may be read as a claim about every production system.",
          "Each question needs a control owner and a supporting record. If the record is missing, you do not yet have evidence for the answer. If a control is planned or only partly deployed, say where it stands and which systems it covers. A roadmap entry is a plan, not evidence of a safeguard operating today.",
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
          "An answer library saves drafting time only if the entries remain usable. Store approved answers with their scope, evidence date, reviewer and conditions for reuse. The control owner should check each template against the new question and current systems, then retire it when configurations, providers or coverage change.",
          "Consider a hypothetical 90-person New Jersey consultancy reusing an answer about endpoint coverage. It needs to check newly acquired devices and any contractors outside the service before submitting that answer again. Last quarter's wording could overstate the current coverage if those changes go unchecked.",
          "Keep supporting evidence in an approved restricted location and share only what the requesting party is entitled to receive. Redact confidential details where appropriate and confirm the recipient's secure transfer process."
        ]
      },
      {
        "h": "Define the service limit",
        "ps": [
          "A provider's service limit determines how much of the request your team will still need to handle. Ask which formats, volumes and deadlines it covers, and whether its work includes drafting answers, mapping controls, requesting evidence, handling follow-ups or reviewing contract commitments. Legal interpretation and independent assurance need their own responsible advisers.",
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
          "The questionnaire owner needs enough information to plan the work and route it for approval. Record the requesting organization, intended service, business unit, questionnaire version and due date. Attachments, portal entry and follow-up calls can all add work, so confirm whether they are part of the request.",
          "The writer also needs a way to reach the legal and commercial reviewers. A question about an existing control may sit beside a request to accept a future obligation, such as a new service level or notification deadline. Describing current practice should not silently accept that obligation. The appropriate reviewer must decide what the firm can agree to.",
          "Assign reviewers by control area: IT may validate access and device records, while a business owner confirms payment procedures or staff training. Counsel may need to review an obligation or disclosure. One coordinator should bring those reviews together and check that the final answers agree with each other.",
          "Keep one working version in an approved location, with access limited to the reviewers. Agree how it will be named and updated before copies start circulating by email. Preserve any changed question and recheck its answer, so the final approved response can be identified later."
        ]
      },
      {
        "h": "Match evidence to the wording of the question",
        "ps": [
          "The wording determines which record you need. A question about annual training for all staff calls for evidence of completion across that population; a record showing that training was offered answers a narrower question. Likewise, deploying backups and testing recovery are separate claims. Check the subject, covered population and period before selecting evidence.",
          "In a fictional endpoint example, a report shows 70 eligible workstations, while the firm also has servers and phones. That report may support an answer about the workstations. To answer a question about every company device, the reviewer needs the control owner to explain the remaining population and its coverage.",
          "A yes-or-no form can make partial coverage difficult to describe. Check whether it allows a qualified answer or a comment. If neither is available, ask the requester how to handle exceptions instead of selecting yes because no other option fits. The authorized firm reviewer must approve the resulting answer.",
          "Missing evidence needs investigation. The record may be uncollected even though the control is operating, or the control itself may be absent. Those cases require different work. A generic pending status should make clear which problem the owner is checking."
        ]
      },
      {
        "h": "Keep the answer library reusable and accountable",
        "ps": [
          "Store each approved answer with the question it addresses, covered systems, evidence reference, date, control owner and approver. Add limitations that affect reuse. If an answer describes a particular provider's service, identify the service and population rather than presenting it as universal protection.",
          "Platform migrations, acquisitions, licensing changes and revised policies should trigger a library review. The owner needs to revise or retire affected entries; keeping every old answer can leave later questionnaires with statements that conflict with each other or current practice.",
          "Even an answer a customer has accepted may need correction. Acceptance does not verify the underlying control. If an earlier response looks inaccurate, the response service should flag it to the authorized business and legal reviewers, who decide how to address it with the external party.",
          "Use automation cautiously. A tool can suggest a relevant library entry, but a reviewer must check the wording, scope and current evidence. Do not upload restricted records to an unapproved AI tool to speed drafting. The firm's data-handling rules apply to the response workflow itself."
        ]
      },
      {
        "h": "Share enough evidence without exposing unnecessary detail",
        "ps": [
          "The evidence package should follow what the requester needs to establish. A dated summary may answer the question without a full configuration export. When detailed evidence is necessary, confirm the recipient's authority and approved transfer method, and redact material where doing so preserves the relevant claim.",
          "Keep credentials, working tokens and unrelated client records out of evidence packages. Screenshots can reveal more than their author intended, including names, account identifiers and infrastructure details. Have the responsible reviewer inspect the material before sharing it.",
          "Record what was shared, the recipient, date and purpose. For a controlled link, check permissions and any review or expiry arrangements. A confidentiality agreement does not remove the need to limit the disclosure or control access to it.",
          "Retain the approved response and the evidence references under the firm's policy. Supporting records may remain in a separate restricted system. The response coordinator should know where they are without making unnecessary copies in a general marketing or sales folder."
        ]
      },
      {
        "h": "Compare DIY and managed work against the next request",
        "ps": [
          "Test the DIY option against your next request. Identify available reviewer time and a backup coordinator, then check whether IT can deliver evidence before the deadline and leadership can approve exceptions. Even with a response library, those technical reviews and business approvals still need time.",
          "A harmless sample question can help you assess a service. Ask the provider to work through it and explain which parts it drafts or verifies, and which require confirmation from your team. Its handling of conflicting evidence or a legal decision should make uncertainty visible to your reviewers.",
          "Agree what the allowance counts before an urgent request arrives. A per-question allowance and a per-questionnaire allowance can cover very different amounts of work on a long request. The service order should also confirm turnaround, follow-up coverage and portal entry so both teams understand what is included.",
          "Keep emergency incident work distinct from questionnaire deadlines. A suspected active compromise belongs in the incident route, even if the customer also asks for a written update. The response coordinator should not treat drafting an answer as a substitute for authorized containment and investigation."
        ]
      },
      {
        "h": "Close the process with approval and improvement",
        "ps": [
          "Before submission, check consistency across answers and attachments. Confirm evidence dates, qualification wording and the authorized signer. Retain the exact approved version so later follow-up can refer to what was represented. Any submission through the customer's portal should match that version.",
          "After submission, record outstanding follow-ups and any control gaps the review uncovered. A wording correction and an operating fix each need an owner. Updating the answer record leaves a missing restore test or incomplete deployment to be resolved by the people responsible for those controls.",
          "At the next review, use the record of completed requests, missing evidence, review delays and required corrections to assess whether your internal process is sustainable. Those measures can help you decide whether a bounded service would help. Faster drafting alone proves neither stronger security nor a guaranteed contract award."
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
    "intro": "An employee trying to finish a client email may paste it into a public chatbot for help. That moves the information outside the firm's approved systems, even though the task itself is ordinary. A firm that has not reviewed a tool or explained its sharing rules leaves the employee to make that decision alone.",
    "sections": [
      {
        "h": "What shadow AI actually is",
        "ps": [
          "Shadow AI is the use of an unapproved or unreviewed AI tool on company information. Staff may choose a tool because it drafts emails, summarizes documents or cleans up code quickly. Without an approved route, the tool that makes the task easiest can also become the tool that receives the firm's information.",
          "A restriction should explain what it protects and how staff can complete the work. Where appropriate, provide an approved alternative and a route for requesting a useful tool. Blocking a service on the company network still leaves a question about use through personal accounts or other devices; it does not establish where company information has gone."
        ]
      },
      {
        "h": "What can leave the company through a prompt",
        "ps": [
          "A prompt may contain client names, financial details or contract terms the firm has not approved for sharing. Pasting them into a chatbot provides that information to a third-party system, with handling that depends on the service and account.",
          "The next question is what happens after the upload. How long the service retains information and whether it uses that information to train models depend on the account type and settings. The employee may never have reviewed either. If the information sits in a personal account with weak protections, the firm also has an access problem. Both the service's handling and the account holding the data need review.",
          "Review also matters when the answer comes back. An output copied into a client deliverable or used for a decision can introduce errors, however confident it sounds."
        ]
      },
      {
        "h": "Give employees a safe way to use it",
        "ps": [
          "Employees need to know what they can use, what they can share and who checks the result. Put those decisions, along with the reporting route, in a short acceptable-use policy. A maintained tool inventory and practical instructions help turn the policy into something staff can follow; checking actual use shows whether it is working.",
          {
            "text": "A short list of approved tools gives staff a practical alternative. As their work changes, a periodic audit can show whether the tools they use still match the policy. A responsible business or IT owner should own that review. Any Helm support for AI-tool auditing needs a separate written scope.",
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
          "A request to use AI is easier to assess once the task is clear. Summarizing a file requires different inputs and produces a different result from drafting correspondence, comparing documents or preparing a checklist. Ask what the employee needs to put in and what they need to get back. That gives the firm a specific use to review.",
          "Before a pilot, use synthetic or otherwise approved examples to clarify the task. Uploading a real client document to demonstrate an unreviewed tool would make the disclosure before the review. If the task works without confidential input, build the workflow around that smaller information set.",
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
          "The inventory should record each tool's account type, intended use, users, permitted information and connected systems, along with its business and technical owners. Include extensions, embedded features and integrations as well as chatbots. A familiar application can add an AI feature that changes where information goes while staff continue to use the same product name.",
          "Explain to employees that the inventory will help clarify approved work and resolve gaps, then ask straightforward questions about the tools they use. The firm's own records and interviews provide a basis for that review, supplemented by lawful and proportionate technical checks where authorized. A claim that a particular percentage of staff must be using unapproved tools needs evidence.",
          "An approved tool still needs an approved use. A business subscription suitable for one internal task may require a separate decision about client data. Recording the permitted purpose and information makes the limit of a narrow pilot clear to staff."
        ]
      },
      {
        "h": "Review the information path and terms",
        "ps": [
          "Review the service under the subscription and settings staff will actually use. Establish what it receives, stores and returns, who can access it, how deletion works and which terms apply. Retention and model-training use need separate answers: information excluded from training may still be stored or processed by another service.",
          {
            "text": "Connected documents add another part to this review: existing permissions and the integration's scope. As the AI document-access guide explains, a connector that respects user access can still surface information shared too broadly in the underlying system. Someone needs to own the work of correcting those permissions.",
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
          "During a deadline, staff need examples they can apply without interpreting a broad rule. An outline based on approved public text involves different information from a client's confidential contract. Removing the client's name does not necessarily remove identifying context, so the information owner should approve the actual input.",
          "The policy also needs a fallback for when the approved tool is unavailable. The existing manual process may be the approved choice. Staff should not have to guess whether an outage permits them to send the same company information to another chatbot."
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
          "An approved task can still produce incorrect facts, unsupported conclusions or missing context. Name the person accountable for the finished work and decide what they must check before it is used. For a factual draft, that means verifying sources; numbers need calculation checks, and specialist work needs qualified review.",
          "Permission to summarize a document does not authorize automatic correspondence or financial decisions based on the summary. Draft approval and authority to act need separate decisions. Review the authority and consequences of any sending or execution capability before enabling it.",
          {
            "text": "Include review and corrections when measuring whether the workflow saves time. The time-savings resource shows those costs in a hypothetical model. A faster first draft does not establish a measured business saving if someone else spends additional time repairing it.",
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
          "If information may have been uploaded, establish which tool and account were used, when it happened, what type of input was involved and what action the employee took. Preserve those facts through the approved process. Asking the employee to upload the material again for a reviewer would repeat the disclosure.",
          "The information owner, IT and appropriate advisers should establish what happened and examine the service's retention and deletion options. Removing a visible chat may leave copies subject to product terms or preservation requirements. Before describing deletion as complete, obtain provider information for the actual account and event.",
          "Record any supported access or deletion action with its date and observed result. Keep conclusions about client, regulatory or contractual duties with the authorized advisers. A technical action can help contain a situation without settling every notification decision."
        ]
      },
      {
        "h": "Maintain approval after the pilot",
        "ps": [
          "Approval needs to be revisited when the subscription, integration, data category or permitted action changes. A new connector or automatic-sending feature changes the workflow even if the product name stays the same. The owner should identify the change and obtain review before extending the use.",
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
          "A short request record gives the reviewer enough to start: the task, proposed account, intended users, input information and desired output. A harmless sample can help clarify the work. From there, the reviewer can assess the business need, information handling, technical access and human approval required for the finished result.",
          "Record whether the request is approved for the defined use, approved for a bounded pilot, awaiting information or declined with an explanation. Include the owner and review date where needed, and make clear which information and connections the decision permits.",
          "When a request is declined, explain the unresolved condition and the approved way to complete the work. That may be a different tool, synthetic data for a test or the existing manual process. Staff also need an explicit decision so they do not have to guess whether silence means approval.",
          "Tracking outstanding requests alongside actual use lets leadership see where the approval process stalls. The cause might be missing information, limited review capacity or a requirement the tool cannot meet. Assign an owner to resolve each outstanding request."
        ]
      }
    ],
    "takeaway": "Give employees an approved option and a short list of information that must never go into a public chatbot. Then check which tools are actually being used so the policy keeps pace with the work.",
    "lead": [
  "The useful starting point is to find out which tasks staff want help with, then decide what information and accounts those tasks can use. A policy becomes easier to follow when it gives someone a workable option during a deadline."
],
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
    "intro": "A suspicious sign-in and activity on a laptop may appear in separate security consoles. Security information and event management software, or SIEM, collects and analyzes events from connected systems so an investigator can follow that activity. Buying the software also means deciding who will investigate its alerts and what they are authorized to do.",
    "lead": [
      {
        "text": "Microsoft Sentinel, for example, has data connectors, analytics, investigation features and response automation. Those features need the right data and people to operate them. A buyer must connect the sources an investigation requires and staff the response workflow. Microsoft Sentinel overview.",
        "links": [
          {
            "phrase": "Microsoft Sentinel overview",
            "to": "https://learn.microsoft.com/en-us/azure/sentinel/overview"
          }
        ]
      }
    ],
    "takeaway": "Choose SIEM for a specific investigation your firm needs to perform. Confirm that the required data will reach it, that someone will investigate the alerts, and that the ongoing costs and responsibilities are understood before buying.",
    "sections": [
      {
        "h": "Begin with a detection question",
        "ps": [
          "Start with the activity your current services cannot adequately investigate. A hypothetical New Jersey consulting firm might need to connect a suspicious cloud sign-in with activity on a covered laptop. Ask whether existing tools already support that investigation before adding a separate log platform.",
          "Once you have that use case, identify the data it requires and who owns each source. You may need an additional collection license. You also need to know how the provider notices a failed connector, because the investigation depends on those specific events arriving. Collecting logs from an unrelated system will not fill that gap."
        ]
      },
      {
        "h": "Price the work around the software",
        "ps": [
          "The software price is only part of a SIEM proposal. Ingestion and storage charges depend on the data you collect and retain; connector setup, tuning and investigation also need to be covered. Ask how the quote changes with more systems or higher log volumes, and include the time your IT provider will spend maintaining integrations.",
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
          "These questions also help you compare services with different names. A managed SIEM service can operate a platform for you, while a managed detection service may use a defined security stack to investigate covered threats. Their written sources and actions tell you what coverage you are buying; the labels alone do not."
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
          "Turn the detection question into something you can test. Describe the activity and the decision an investigator needs to make. For an unusual sign-in, related device activity might help that decision. Record the required data, the person or team who will investigate, and the action that follows a confirmed finding.",
          "The identity administrator, endpoint provider and application owner may have different access arrangements, so map each required source to its owner. Then check whether current services can already support the investigation. A separate SIEM may close a gap, but duplicating existing coverage adds cost without meeting a new need.",
          "Keep the initial scope small enough to operate and verify, with its exclusions written down. A service that ingests only identity and endpoint events covers those sources, not every business application. Additional sources can follow later, once the firm has decided what they contribute and who will operate them."
        ]
      },
      {
        "h": "Evaluate the collection pipeline",
        "ps": [
          "A working connector today does not establish that the data will keep arriving. Once permissions and setup are in place, ongoing health checks need an assigned owner. Have the operator show how it verifies that the expected event types are arriving and are recent enough for the detection.",
          "A detection rule can remain in place after the data needed to trigger it has stopped arriving. Ask how the operator handles a missing source, expired access or a changed log format, and name the provider contact responsible for repairing the connection.",
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
          "An alert total is not a count of attacks. A change in that total could follow a change in data collection, rules or activity. Have the operator classify the outcomes and document significant decisions so leadership can see which findings required action and which remain unresolved.",
          "Many events on a dashboard will not require a business response. Someone needs to distinguish those from a meaningful escalation and tune the rules when necessary. Establish who does that work and who reviews it, including how the provider checks that reducing unnecessary alerts has not hidden important activity."
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
          "A walkthrough of a covered investigation should show what the analyst can inspect and what context the customer must supply. Follow it through to the actions the provider can perform directly. If supported containment is included, confirm the authority it requires and where another responder would take over.",
          "An integration listed by the product may fall outside your account’s service. Use the written scope to confirm which sources and capabilities are included. Where a response requires an IT change, agree on the handoff and the information IT will receive.",
          "For round-the-clock coverage, establish which team is working and what it does during those hours. Continuous event collection and continuous staffing of investigators are different commitments. Before signing, agree how urgent action is authorized and how escalation works when the customer contact is unavailable."
        ]
      },
      {
        "h": "Make retention a business decision",
        "ps": [
          "Set retention around the investigation, client term or records obligation the firm needs to meet. That purpose determines which data you need, the storage tier and how you will retrieve it. Retained logs help an investigation only if the investigator can obtain the relevant history when needed.",
          "Because logs can contain sensitive identifiers and activity details, access and sharing need an approved process. Ask how exports work and who can authorize them. An unrestricted event export should not go to an ordinary sales inbox for a product opinion.",
          "Clarify data access when the service ends. Determine what can be exported, in what form, at what cost and before what deadline. Include the removal of connector access in the transition plan. A new service should not inherit unexplained privileges from an old arrangement."
        ]
      },
      {
        "h": "Understand the variable costs",
        "ps": [
          "To compare costs, give each proposal the same expected sources and volume assumptions. Include ingestion, storage, retention and any investigation fees. A quote based on a small demonstration source may say little about a much broader deployment, so ask how a new application, more devices or increased event volume would affect the bill.",
          "Include connector setup, tuning and ongoing maintenance. Identify work retained by IT, such as granting approved access or repairing a source integration. Record the estimated effort as a planning assumption, not a guaranteed financial result.",
          "The operator should have an agreed way to report unexpected volume or charge changes. If a new source would add a material cost, someone authorized to approve that cost needs to assess its operating value before it is enabled. This keeps the collection decision tied to its budget."
        ]
      },
      {
        "h": "Run a bounded demonstration",
        "ps": [
          "Use fictional or approved harmless data. Follow one event from collection through detection, investigation and the agreed action. Verify the source, rule and handling evidence. The demonstration should have a stated expected result and should not interfere with production business systems.",
          "Also test harmless false-positive and missing-source scenarios. Follow the operator’s records to see how a rule is adjusted and how the data path is repaired. That shows how the service maintains its detections after onboarding, when an initial alert demonstration is no longer enough.",
          "Keep the tested scenario and observed result with the decision record. They show what happened in that demonstration, with no guarantee of detecting every attacker or of the quality of future investigations. For capabilities that cannot be meaningfully demonstrated in the pilot, request the relevant service documentation."
        ]
      },
      {
        "h": "Confirm whether SIEM is the necessary purchase",
        "ps": [
          "Better endpoint and identity response may be the priority. Another firm may need a clearer incident contact or a specific log source for an investigation. Those needs can lead to different purchases, so compare a managed SIEM proposal with the capabilities and boundaries of the detection service you already have.",
          "If current services meet the defined use case, record that conclusion and any gaps still outstanding. If a new platform is needed, assign its operation and maintenance before purchasing it. Either choice needs an investigation and response process with clear owners, costs and coverage."
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
    "intro": "Your defense business needs to be able to explain its SPRS score when a contracting officer, customer or government reviewer asks. That means identifying the systems you assessed and keeping the evidence and calculation behind the number. Another qualified person should be able to reproduce it. If they cannot, an unsupported score can put eligibility for covered work in question.",
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
          "To interpret that number, you need the system boundary and System Security Plan (SSP). They establish which environment the assessment describes. The score summarizes implementation against the assessment methodology; it gives neither a general security grade nor proof that the assessment included every system in the company."
        ]
      },
      {
        "h": "Who can access the score",
        "ps": [
          "DFARS requires contracting officers to verify that a current summary-level score is posted for covered contractor information systems relevant to an award. Authorized representatives of the contractor can view their own score, and authorized DoD personnel can access posted assessment results.",
          "If a prime contractor asks about your score, check what the request requires. The prime does not automatically have unrestricted access to every subcontractor score, but it may require confirmation of a current assessment before awarding a covered subcontract. The exact solicitation, contract, and flowdown language controls your response."
        ]
      },
      {
        "h": "Why an honest number matters more than a high one",
        "ps": [
          "A low score supported by evidence gives the company a starting point for remediation and a plan with an assigned owner. Reporting a higher number than the evidence supports creates a mismatch the company may have to explain.",
          {
            "text": "In a 2025 settlement, the Department of Justice said MORSECORP had submitted a score of 104 before a later third-party review calculated negative 142. The company agreed to pay $4.6 million to resolve False Claims Act allegations tied to cybersecurity requirements. These allegations were resolved by settlement; there was no trial finding. Document the actual boundary and calculation, even when the result falls short of the score you want to reach. DOJ settlement announcement.",
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
          "A reviewer needs more than the reported number. Keep it with the current System Security Plan, boundary diagram or inventory, control-by-control working papers, evidence links and calculation worksheet. Record when the assessment was completed and when you expect to implement unmet requirements. If you have several SSPs, connect each score to the correct system and CAGE codes.",
          "Those records should explain why the reviewer marked each requirement met or not met, using the same methodology. A screenshot without context or a policy without evidence that it operates is rarely enough on its own."
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
          "Deduction weights show which unmet requirements have a larger effect on the number. They help with planning, while every requirement and the correct system boundary still need review. Once remediation is complete, collect the evidence and recalculate before updating the score through the authorized process. That way, the assessment record explains the change you report."
        ]
      },
      {
        "h": "Keep the assessment type and requirement distinct",
        "ps": [
          "SPRS is a reporting system for several kinds of information, so establish which result a customer needs before comparing numbers or asking a provider to update a record. A NIST SP 800-171 DoD assessment score describes an assessment. It does not establish CMMC certification or provide assurance about the whole company.",
          {
            "text": "Review the contract requirement, the relevant systems and the assessment date. DFARS 252.204-7020 describes assessment and summary-result requirements. Read that clause alongside the solicitation and applicable flowdowns rather than relying on a generic renewal date supplied by a software tool.",
            "links": [
              {
                "phrase": "DFARS 252.204-7020",
                "to": "https://www.acquisition.gov/dfars/252.204-7020-nist-sp-800-171dod-assessment-requirements."
              }
            ]
          },
          "Get the requested assessment or affirmation in writing. An SPRS result, CMMC status and supporting control evidence serve different purposes, even though they are related. Send the record the customer needs, with its scope."
        ]
      },
      {
        "h": "Establish the boundary before calculating",
        "ps": [
          "List the people, systems, locations and external services involved in the covered information. Include the actual workflow: receipt from a prime, quoting, engineering, production, storage and transmission. An assessment of a narrow environment needs a credible explanation of how information stays within that environment.",
          "The exclusions deserve a review too. A CAD workstation, quoting mailbox or remote-access service may affect the boundary even if it was missing from the first inventory. Work out the role of each dependency before deciding scope. Its business label alone cannot tell you whether it belongs in the assessment.",
          "Compare the inventory with the SSP before calculating. If the SSP describes one environment and the worksheet assesses another, a reviewer cannot reliably interpret the final number. Resolve that mismatch before submitting a summary result or using it in a customer response.",
          "The system boundary itself can be sensitive. Store diagrams, findings and detailed evidence in the approved repository with controlled access. A marketing or general operating document can describe the process without exposing live security weaknesses or customer information."
        ]
      },
      {
        "h": "Review evidence requirement by requirement",
        "ps": [
          "For each applicable requirement, document what is implemented, where it applies and what evidence supports the conclusion. Separate a policy statement from evidence that the procedure operates. The appropriate evidence varies with the requirement and should be evaluated by a qualified reviewer.",
          "For example, an access-management record might include current permissions and the relevant approval procedure. A record of a recurring review should explain when it happened and what was checked. These examples illustrate types of evidence; they do not establish that any single screenshot or document satisfies a requirement.",
          "If the evidence does not establish implementation, record what remains uncertain and resolve the gap before marking the requirement met. Marking it met anyway raises the score without support and leaves you with a conclusion that is harder to defend.",
          "Check the methodology version and scoring rules used. Have the reviewer explain how deductions were applied, including any requirement-specific treatment. Keep the underlying worksheet so another qualified person can reproduce the arithmetic and examine the conclusions behind it."
        ]
      },
      {
        "h": "An illustrative score mismatch",
        "ps": [
          "Imagine a shop marking an access requirement implemented because its policy says managers approve users. Its operating records instead show accounts created without approval, and the reviewer cannot establish that the procedure was followed. This is a hypothetical scenario, not a Helm finding.",
          "The shop needs to examine how the control operates and correct the process, then collect evidence of that correction. Changing the policy wording or removing the exception from the evidence set cannot establish implementation. Until the requirement is supported, the assessment conclusion needs to reflect the current state.",
          "Buying a tool leaves a similar question: has the requirement been implemented? The product may provide a capability while coverage, configuration or the operating procedure remains incomplete. An invoice alone is no basis for adding points."
        ]
      },
      {
        "h": "Connect remediation to verified changes",
        "ps": [
          "Give each gap an owner, target date and dependency, and specify the evidence needed to close it. Identify whether work belongs to IT, security, leadership or a process owner. A security provider cannot independently close a requirement that depends on a business decision it has no authority to make.",
          "After correcting a requirement, reassess it and retain the earlier evidence alongside the new result. That gives another reviewer a way to follow the reason for the score change. A correction that changes the boundary also needs a review of its effect on the wider assessment before you adjust the calculation.",
          "Scoring weight is one input to the remediation plan. Business exposure, implementation dependencies and contractual needs also affect what to tackle first. A small deduction can still represent a requirement that matters operationally, so improving the number should not leave the underlying environment poorly understood."
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
          "A submission records an assessment at a point in time. When systems, providers, information flows or control implementation change, review whether the assessment still describes the environment. A valid historical submission date cannot answer that question. Record the changes and obtain a qualified review when they affect the conclusion.",
          "Compare the entered result with the approved assessment file and retain the submission confirmation. Resolve discrepancies through the authorized process with an explanation, whether the change corrects a typo or reflects a new assessment conclusion.",
          "Give the submission record a backup owner as well. The firm needs to retain authorized access and the assessment history when an employee or outside adviser changes roles.",
          "Helm can discuss an evidence-based readiness scope with the shop and its existing IT provider. Leadership remains responsible for representations and final attestations. A gap review supports preparation; it does not issue a government assessment result, certification or contractual approval."
        ]
      }
    ],
    "takeaway": "Keep the system boundary and working papers behind every deduction. When a control or the environment changes, update the assessment record and evidence. The reported number needs to describe an assessment you can still support.",
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
    "intro": "An assessor needs to understand which systems your shop uses, how you protect them and what still needs work. The System Security Plan (SSP) describes the environment and safeguards in place today. The Plan of Action and Milestones (POA&M) records identified weaknesses, who will correct them and when. Policies, screenshots and an SPRS score help support the review, but on their own they cannot explain the current implementation or the next action. Both documents need to describe the systems being assessed.",
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
          "The Plan of Action and Milestones, addressed by requirement 3.12.2, records weaknesses or deficiencies and the work needed to correct them. Each item needs a responsible owner, resources, milestones and completion dates, along with the evidence needed to close it. That gives the team enough detail to start the work and check whether it is progressing.",
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
          "Before a reviewer can test a control, they need to know which people, systems, facilities and connections it covers. The SSP supplies that boundary. If it lists tools the shop does not use, the reviewer is working from an inaccurate description. The same problem arises if the SSP leaves out controlled unclassified information (CUI) in a quoting mailbox or CAD workstation.",
          "For each requirement, identify the responsible people, technology, procedure and supporting evidence, including dependencies and exceptions. The reviewer can then compare the written description with the way the shop operates."
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
          "Leadership, primes, technical reviewers and government assessors should be able to work from the same account of the shop’s boundary and implementation. A current SSP provides that account. The POA&M explains what remains open: who owns the correction, what evidence will close it and whether the expected completion date is still credible.",
          {
            "text": "Use both documents during the gap assessment so the findings become part of the working records. If the description is wrong, update the SSP. If a requirement is not fully implemented, create or revise the corresponding POA&M work.",
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
          "For each requirement, explain how the shop implements it, who is responsible and which procedure or configuration supports it. Where a provider supplies part of the safeguard, describe that dependency and the evidence the shop obtains. A provider’s broad marketing statement cannot tell a reviewer how the safeguard works in your environment.",
          "Explain why each excluded system is outside scope and how the shop keeps covered information out of it. If staff routinely move files there, review the boundary. A specially named folder cannot by itself establish that separation.",
          "A template can help you identify what to document. Its product names, staff roles and network design still need to be replaced with the shop’s own details. Otherwise, an example answer may end up describing a control the shop does not operate."
        ]
      },
      {
        "h": "Link descriptions to evidence without creating a second evidence store",
        "ps": [
          "Use references that let an authorized reviewer find the relevant record in its approved location. Identify the evidence owner, date and the requirement it supports. Keep live findings, diagrams and configuration details restricted to the people who need them.",
          "Do not paste credentials or sensitive technical records into a general document to make it appear comprehensive. The SSP can describe how a control is implemented while the detailed evidence remains in a governed repository. Confirm which material may be shared with a customer or reviewer before distributing it.",
          "Access matters as much as the reference itself. Check that an authorized reviewer can open each record. An employee’s private drive may become inaccessible after they leave, so give the evidence a business owner and appropriate permissions that keep it usable independently of that employee.",
          "Preserve the version used for an assessment where the history is needed. The current SSP describes today’s environment, while the earlier version explains the earlier result. Record which version supports each assessment rather than overwriting its basis with later changes."
        ]
      },
      {
        "h": "Give every POA&M item a closure test",
        "ps": [
          "A useful item identifies the unmet requirement, current deficiency and intended correction. Add the responsible owner, resources, dependencies, milestones and expected completion date. State what evidence will demonstrate that the correction is complete.",
          "Suppose a review identifies an access-management gap. The POA&M item might call for a revised approval process and a review of current accounts, followed by evidence that the corrected process operates. This is an illustrative set of work components; each shop’s closure criteria should follow the specific requirement and assessment method.",
          "A purchase order or policy draft can show progress without establishing that the correction works. Close the item once the implementation has been verified and the review result retained. Where one project affects several requirements, track which requirements it addresses and the evidence needed for each.",
          "Make clear whether a date is an estimate or a firm commitment supported by resources. Repeatedly moving it without explanation makes the plan harder to rely on. If work is delayed, record the reason and any applicable interim safeguard, along with the person authorized to accept the remaining risk or contractual consequence."
        ]
      },
      {
        "h": "Distinguish a remediation plan from permission to defer",
        "ps": [
          "A POA&M can organize corrective work even where an open item is unacceptable for the assessment status sought. Have a qualified reviewer confirm the permitted requirements, thresholds and closeout conditions under the applicable regime before leadership makes an affirmation.",
          "Do not tell a customer that the shop meets a requirement merely because it has a scheduled fix. State the actual implementation and the planned action through the approved response process. If the customer’s form does not permit a truthful qualification, seek clarification rather than changing the answer to fit the form.",
          "Approval and timing rules may differ for a general improvement project, an assessment-related deficiency and a contract-specific corrective action. Track those obligations separately where needed so the team can see which rules apply to each decision."
        ]
      },
      {
        "h": "A document relationship table",
        "ps": [
          "Each record answers a different part of the review. The SSP needs supporting evidence, and the remediation list needs a clear current boundary so the team knows which assessment its work affects. The table shows what each record contributes and where it needs support from the others."
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
          "Suppose the SSP says relevant accounts follow an approved access process while the POA&M lists a gap in reviewing them. Those statements need investigation: does the SSP describe current operation, or does it present the planned correction as already implemented?",
          "Revise the implementation description to reflect the actual state and retain the relevant evidence. Keep an owner assigned to the correction. Once the review process is implemented and verified, update both records with the supporting date and evidence. Matching the wording of the two documents leaves the gap open if the operating process has not changed."
        ]
      },
      {
        "h": "Build maintenance into ordinary changes",
        "ps": [
          "Review document impact when the shop adds a platform, changes a provider, opens a location or changes information handling. The person approving the change should identify which SSP descriptions, evidence references and POA&M items need an update.",
          "Before an assessment or customer response, check for inconsistencies: an implemented control with a related open deficiency, references to retired tools, or evidence from another environment. Resolve them so the reviewer can trace each claim to a current record.",
          "Give leadership a concise view of open decisions and overdue work, with enough detail to see where funding, ownership or a contract clarification is needed. Keep the supporting screenshots and detailed records available to authorized reviewers.",
          "Helm supports a scoped readiness discussion with the business and its existing IT provider. The organization owns its final representations and affirmations for the assessed environment and date. Maintained documents support a defensible review; they do not provide certification or replace a government or authorized assessment."
        ]
      }
    ],
    "takeaway": "Write the SSP around the systems and workflows in scope. For each POA&M item, name an owner, set a target date and specify the evidence needed to close it. When the environment or implementation changes, update the documents so they still describe what the shop does.",
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
    "intro": "A supplier invoice can describe a real job and still direct your payment to a criminal. In a hypothetical example, the job number, amount, letterhead and contact name are all correct. Only the bank account has changed. An attacker reading the real email thread may have substituted that detail, leaving the supplier waiting for money you thought you had paid.",
    "sections": [
      {
        "h": "How the scam actually runs",
        "ps": [
          {
            "text": "A fraudster may take over the email account of a supplier or general contractor, or imitate it convincingly. When a payment is due, they send new banking details. The timing fits the working relationship, which is why an ordinary-looking request still needs verification.",
            "links": [
              {
                "phrase": "general contractor",
                "to": "/contractors"
              }
            ]
          },
          "Confirming that a delivery arrived gives the office a reason to pay the invoice. It does not establish where the money should go. Send any banking change to the firm's authorized verifier before the payment approver releases funds."
        ]
      },
      {
        "h": "Verify the financial instruction independently",
        "ps": [
  "When an invoice introduces new or changed banking instructions, call a number already in your supplier records. Apply the same rule to a general contractor. Calling the number in the change request would send you back to a source you have yet to verify.",
  "Reach someone authorized to confirm the banking instruction itself, and record what they confirmed. Completing a call alone is not enough: an incomplete conversation or a further compromise can still leave the payment unverified.",
  "A close payment deadline makes this harder to follow. Decide in advance where staff should take a threat to delay the job or pressure from someone claiming authority. Leadership needs to support the pause while the payment remains unverified. A written escalation route gets that decision to the person authorized to make it, instead of leaving a crew member to decide whether urgency overrides the rule."
]
      },
      {
        "h": "Protect your own domain and verification process",
        "ps": [
          {
            "text": "Your customers can face the same request in your company's name. Correctly configured DMARC on your domain helps receiving systems evaluate unauthorized use of that exact domain. Its scope matters: it does not cover every use of your business name, stop a lookalike domain or prevent fraud from a compromised legitimate mailbox. Customers still need an independent way to verify banking changes.",
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
          "Record the job confirmation separately from the banking decision. The correct job number, amount and delivery details can support paying a real debt while leaving the new payment destination unverified. Staff can confirm the work and question the banking change at the same time; they do not have to declare the whole invoice false to pause the transfer.",
          {
            "text": "The FBI business email compromise guidance describes requests that appear to come from known sources. A contractor's supplier-change procedure should make the response specific: who is the trusted contact, who verifies the instruction, who approves payment, and where is the completed transfer recorded?",
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
          "Establish the trusted contact while onboarding the supplier, when you also obtain approved payment information through the firm's process. Record where the information came from and who authorized it. An urgent banking change is a poor time to start deciding which phone number to trust.",
          "The supplier master record, where the firm keeps approved supplier details, should have restricted access for changes. Give employees a clear route for sending requests to the person who can approve them. The verifier then uses the trusted record or an established independent route to make contact. A replacement number in the request has not passed that check.",
          "Keep those contacts current as supplier relationships change. Someone who handled the original project may no longer have authority over banking details. An approved alternate gives staff a usable route when the primary contact is unavailable."
        ]
      },
      {
        "h": "Record the instruction that was verified",
        "ps": [
          "Keep bank details in the controlled record. A status message can reference the instruction without copying full account information to everyone involved in the job. Limit access to the people who need it and follow the firm's records requirements.",
          "If the banking instruction changes after approval, verify it again. The earlier callback and approval covered the beneficiary that was checked. They cannot confirm a replacement account that arrived afterward."
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
          "A request may claim that materials will be withheld or work delayed unless money goes to a new account immediately. That puts a business consequence behind the pressure to pay. Staff need leadership's support to pause the unverified transfer and reach the person authorized to resolve the delay.",
          "Agree in advance whether staff should use the approved alternate or wait if the trusted contact is unavailable. With that decision made, they have a route to follow under deadline pressure. A search result or a link in a new message should not replace the trusted record just because it is easier to reach.",
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
          "In the handoff, say exactly what was confirmed: delivery, for example, or completed work. Calling the invoice approved may imply that someone approved the banking details too. The person making the payment needs to know which decision the message records."
        ]
      },
      {
        "h": "Use email controls for their defined purpose",
        "ps": [
          "Review authentication and access for the accounts used to correspond with suppliers. Filtering can reduce some malicious messages, and reporting helps investigate suspicious activity. Neither establishes that a new payment beneficiary belongs to the supplier.",
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
          "Use the incident plan to assign work that can proceed at the same time. While the payment owner contacts the bank, authorized teams can assess account activity and leadership can engage the insurer and advisers. Preserve the original messages, relevant logs and timeline in the approved restricted location.",
          "Reach the real supplier through the trusted route to establish the status of the legitimate invoice. Have the financial and legal owners decide the next steps. A suspected fraudulent transfer may leave both a security incident and a business dispute to resolve, so keep speculation out of the affected email thread."
        ]
      },
      {
        "h": "Test the rule with a harmless job scenario",
        "ps": [
          "Use a fictional supplier, job number and banking change. Include a payment cutoff and an unavailable primary contact. Ask the team to show the trusted record, verification, approval and decision. Include field staff and the payment operator so the exercise covers the whole handoff.",
          "Watch the team carry out the steps, and record where the process works or stalls. If a contact is stale, approval is unclear or an alternate is unavailable, fix the problem and repeat that step. An attendance record tells you who took part. Observing the handoffs tells you whether they could complete the transaction checks.",
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
          "Afterward, the accounting owner should compare the final supplier and transaction records with the approved beneficiary. If the request was rejected, check whether anyone saved a draft change during the review. Correct any such change through the approved process; declining the email alone would leave those earlier edits unresolved."
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
    "intro": "A virtual chief information security officer, or vCISO, handles agreed security-leadership work without a full-time executive appointment. When you compare providers, the useful detail is what the adviser will deliver each month and which decisions your firm will still make. Those duties vary from one engagement to another. The proposal needs to spell them out.",
    "lead": [
      "For a professional-services firm with existing IT, that means naming who keeps the risk view current and recommends priorities. It also means agreeing who tracks the evidence and brings unresolved decisions to leadership. These responsibilities give you something concrete to compare across proposals."
    ],
    "takeaway": "Choose a service with defined deliverables, an agreed meeting cadence and clear evidence responsibilities. Confirm the limits in writing. Your firm retains final business approvals.",
    "sections": [
      {
        "h": "Buy a defined leadership role",
        "ps": [
          "Start with a sample risk register and roadmap using fictional data. You should be able to follow a business consequence through to the person responsible for addressing it and the approval needed to proceed. Then ask which parts the provider updates each month and which decisions reach the leadership review. A list of tools leaves those responsibilities unexplained.",
          {
            "text": "Use NIST SP 1300, the Small Business Quick-Start Guide, to organize the discussion across governance and operational activities. It provides a review structure; it does not certify a vCISO service or establish that every obligation is met.",
            "links": [
              {
                "phrase": "NIST SP 1300",
                "to": "https://csrc.nist.gov/pubs/sp/1300/final"
              }
            ]
          },
          "Consider a hypothetical 100-person New Jersey accounting firm. It needs to fund stronger access controls, prepare customer responses and address an unresolved restore-test gap. The adviser presents the evidence and options so partners can approve the spending and risk decisions. IT then performs the assigned administrative work. The proposal should make that handoff clear."
        ]
      },
      {
        "h": "Set limits around cadence and evidence",
        "ps": [
          "Agree on how many meetings, questionnaires and hours of coordination the service covers. Define what counts as an urgent escalation and who covers a provider absence. Specialist incident response, legal advice and independent assessments need explicit treatment in the contract.",
          "Evidence work needs its own division of responsibility. Someone must request records from IT and check that their dates and coverage support the claim being made. If they do not, someone must follow up. An adviser can help prepare the answer, but your firm should approve every external representation; preparing an answer does not give the adviser authority to certify it.",
          "The advisory fee may cover the recommendation while the work it calls for carries separate costs. Stronger access policies may require licenses and implementation time; a recovery improvement may need a separate backup or response engagement. Ask the provider to include these costs and dependencies in the roadmap so leadership can consider them before approving the recommendation."
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
            "text": "Helm Command combines the covered Core stack with vCISO leadership and managed security-program ownership. Its scope includes a maintained risk register, prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance responses, quarterly leadership reviews, an annual tabletop and IT coordination. Pricing starts at $10,000/month. Final quotes depend on covered users and agreed scope. Compare those written duties with each prospective vCISO engagement to establish which work is included.",
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
          "Before requesting proposals, write down two or three security decisions your firm has been unable to finish. These might concern access-review ownership, funding a recovery fix or answering a customer's evidence request. Identify what is holding each one up. Missing facts call for different help than missing authority, implementation time or agreement on a business tradeoff. The provider can then respond to a defined problem.",
          "For each decision, ask how the adviser would move the work forward. Organizing evidence and recommending a path may be enough to resolve uncertainty. IT implementation, licensing or legal interpretation may still need another owner, though. Record those dependencies in the engagement so you can see what remains to be done after the advice arrives.",
          "Choose an executive sponsor who can approve priorities and bring the relevant owners into the discussion. Define which decisions the sponsor can make and which need partners or another governing group. Recommendations need a route to those decision-makers.",
          "Use that list to evaluate a fictional sample engagement. Ask what the provider would deliver after the first review, what information it would request and how it would track an unresolved decision. Look for a practical record your team can use between meetings."
        ]
      },
      {
        "h": "Separate leadership, monitoring and implementation",
        "ps": [
          "Ask for a responsibility map covering risk advice, policy work, evidence coordination, monitoring, administration and remediation. Mark separate purchases and retained duties. The vCISO title alone does not tell you which of those services the fee includes.",
          "These responsibilities depend on different things. Monitoring needs a defined scope of coverage and a response path. An adviser needs access to the business, agreed deliverables and a cadence for reviewing them. The person implementing a change needs technical authority and time to do it. One provider can supply more than one service; the scope must explain which work the fee covers and who handles the rest.",
          "Define the adviser's incident role and availability before signing. It may coordinate leadership decisions while an authorized responder investigates and IT restores systems. Record escalation limits and any separate incident fee, especially if the ordinary advisory service meets quarterly.",
          "For policy work, determine whether the provider drafts, reviews or maintains documents. Ask who verifies that written procedures match actual operations. The firm must review obligations and approve the policy; an attractive document cannot establish that its controls are implemented."
        ]
      },
      {
        "h": "Examine the risk register and roadmap together",
        "ps": [
          "A useful risk record describes the business consequence, evidence, uncertainty and owner. It also records the proposed treatment and the decision needed from leadership. Ask the provider to show a fictional example with an unresolved dependency rather than only completed success items.",
          "Take one recommendation from the roadmap and follow it through to implementation. A new access policy, for example, may depend on licenses, enrollment and tested recovery before rollout. The plan should account for those dependencies in its dates and expected costs. It should also tell the assigned owner how completion will be checked.",
          "A deferred recommendation still needs a place in the risk register. If leadership accepts a risk for a limited period, keep the rationale, approver, conditions and review date in the record. An unavailable implementation budget does not resolve the risk. Keeping the record current lets leadership see when the assumptions behind its decision change.",
          "Connect each roadmap milestone to the risk or business requirement it addresses. When the work closes, update the supporting evidence and remaining risk too. Leadership can then trace the funded work to its intended effect, rather than seeing only a completed task."
        ]
      },
      {
        "h": "Make leadership meetings produce decisions",
        "ps": [
          "A sample agenda and decision log should show what changed, what was completed and where a gap still needs an approval. Leadership needs the options early enough to consider them before the meeting. That leaves time to make decisions about the blocked work, with the dashboard providing context.",
          "Each approval needs enough information for leadership to weigh the choice: the proposed action, its owner, the assumed cost and the consequence of waiting. Explain how any remaining uncertainty could be resolved. If another vendor still needs to quote implementation, label the cost as an estimate so nobody mistakes it for a committed project price.",
          "Close the meeting with decisions, dated next actions and an owner for telling IT about approved changes. Name who verifies completion. If leadership rejects a recommendation, retain that decision and its reconsideration trigger; rejection does not complete the proposed work.",
          "Between meetings, define how urgent questions are handled. Set an agreed communication route and turnaround expectations appropriate to the contracted service. Distinguish an urgent business question from a suspected active compromise that belongs in the incident route."
        ]
      },
      {
        "h": "Review evidence and independence claims carefully",
        "ps": [
          "Find out which records the provider can obtain directly and which require IT. Evidence coordination does not necessarily grant system access. Name who checks coverage, dates and exceptions before a record supports an external response.",
          "For questionnaires, identify included volumes, formats, deadlines and follow-up limits. Ask how conflicting or unsupported answers are escalated. The client should retain the final submission and approval record, with sensitive supporting material shared only through an approved process.",
          "Independence matters when a customer or requirement asks for assurance from someone outside the work. An adviser that recommends and operates controls is not automatically an independent assessor of them. Confirm who must perform the assessment and what form of evidence is required. An advisory review, technical test and formal attestation serve different purposes.",
          "Agree on exit deliverables before signing: the current register, roadmap, decision history and evidence references, in a usable format. Specify transition support so the next adviser can continue the work. The firm's operating records should remain available when the engagement ends."
        ]
      },
      {
        "h": "Choose fit over the title",
        "ps": [
          "Compare proposals using the same recurring duties, meeting cadence and retained responsibilities. Ask how the provider learns your business without requiring unnecessary disclosure of client records. Confirm who covers absence and whether a change of assigned adviser affects the commitments.",
          "Choose an engagement that addresses your coordination gap and fits your capacity to implement approved work. Then agree on a first review date and the deliverables you expect by that point. A named adviser, an agreed risk-register structure and an initial set of actions for the responsible teams give leadership a practical way to assess the start of the engagement.",
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
    "intro": "A vulnerability scan can identify a weakness, but someone still has to check the finding, decide how urgently it needs attention and make the repair. Vulnerability management connects those steps, including the check that confirms the repair worked.",
    "lead": [
      "For a New Jersey firm that already has an IT provider, start by agreeing who handles each step. IT needs a clear route from the finding to a repair task, and leadership needs to know when a delay requires a business decision. Set up those handoffs before buying another scan subscription."
    ],
    "takeaway": "Agree on what you have permission to assess, have IT validate and prioritize the findings, and assign each confirmed issue to an owner. Keep it open until evidence shows the repair worked, or leadership has recorded an exception with a review date.",
    "sections": [
      {
        "h": "Establish the scope and permission to scan",
        "ps": [
          "Decide which devices, applications, cloud services and public-facing systems the assessment will cover, and name an owner for each. That list defines the scope: the systems you intend to examine. Check which of them the scanner can assess and where you need another method. Obtain authorization and agree on timing before scanning, especially when an interruption could affect client work.",
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
            "text": "The scanner's severity rating is a starting point for deciding urgency. Ask IT to confirm the affected version and how the system is exposed, then consider evidence of exploitation, internet access, business importance and any safeguards already in place. The CISA KEV catalog lists known exploited vulnerabilities and can inform that decision. Its federal deadlines do not create a universal deadline for private New Jersey firms.",
            "links": [
              {
                "phrase": "CISA KEV catalog",
                "to": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
              }
            ]
          },
          "Consider a hypothetical accounting firm with two findings: one affects an exposed remote-access system; the other affects a less consequential application on an isolated test device. Similar numerical ratings would not, by themselves, justify giving the two repairs the same urgency.",
          "For each confirmed finding, record the asset, evidence, responsible IT owner, planned action, target date and verification method. If the firm postpones a fix, leadership should record the reason, temporary safeguards and a date to reconsider the decision."
        ]
      },
      {
        "h": "Close findings with a check",
        "ps": [
          "A completed patch ticket tells you that someone finished a task. To close the finding, check the installed version, rescan or review the configuration, depending on the original issue. Failed deployments and remaining exposure stay open. Schedule routine reviews to suit the environment and repeat relevant checks after meaningful system changes.",
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
            "text": "A meeting between the business owner and IT can establish the asset list and how findings become repair tickets. Helm's free public-domain scan can contribute limited public configuration findings. You still need an authorized assessment to establish the firm's vulnerability-management baseline, supported by an asset register that IT can use.",
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
          "An asset register is useful when it tells you who can act on a finding. For each asset, record its business and technical owners, location or service, product version where relevant, and why the firm uses it. Include public applications, remote-access systems, endpoints and important cloud services. Unsupported software and assets operated by someone else still belong in the register, even if your chosen scanner cannot assess them.",
          "If nobody recognizes a public service found in the scan, investigate its ownership before assigning a change. That is different from deliberately excluding a known asset. For a supplier-operated application, establish the approved contact and available evidence so the finding has a route to a responsible technical owner.",
          "Update the register when new services are introduced and old ones are retired. Compare it with procurement, hosting and device-management records. The purpose is to identify important gaps in the assessed population, not to create an inventory that becomes too detailed for anyone to maintain."
        ]
      },
      {
        "h": "Choose assessment methods deliberately",
        "ps": [
          "The assessment method determines what you can learn. An external scan observes a public surface. An authenticated assessment uses authorized access to inspect information available inside a system, while a configuration review examines settings a scanner may not assess well. A separately scoped penetration test investigates exploitable paths. Combine methods when you need those different views of the environment.",
          "For an engagement, define the systems, authorization, timing, permitted actions and emergency stop contact. Discuss operational sensitivity before assessing a fragile or specialist system. A vendor's usual scanning profile should not silently become permission for every test against every asset. Third-party infrastructure may need separate approval.",
          "Ask how credentials are handled if the assessment needs them. Use an approved access arrangement and limit privileges to the required purpose. Record how access is removed afterward. Do not send administrative credentials through an ordinary sales form to receive a generic assessment."
        ]
      },
      {
        "h": "Validate a finding before assigning the fix",
        "ps": [
          "Review the detected product, affected version and evidence. Determine whether the finding accurately describes the deployed system. A scanner may rely on a banner, incomplete information or a test with limitations. If IT disputes a finding, retain the evidence and the reason for the determination rather than deleting it without explanation.",
          "Record whether each disputed finding is confirmed, not applicable, unresolved or needs another check, along with the reviewer and date. Calling it a 'false positive' without explaining why leaves the next reviewer to investigate the same question again.",
          "For confirmed findings, identify the corrective action and its prerequisites. A patch may require a restart, application test or vendor assistance. A configuration change may need business approval. Route those dependencies with the task so the technical owner knows what completion requires."
        ]
      },
      {
        "h": "Make the priority understandable",
        "ps": [
          "Leadership needs to understand why a repair is urgent without interpreting the scanner's whole scoring system. Explain the priority in the finding record and set dates using the firm's applicable obligations and current technical guidance. These circumstances help identify the decision needed; they do not provide a universal scoring formula.",
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
          "Match the closure evidence to the original finding. A version issue may need a verified version and reassessment; a configuration issue needs the relevant setting and test. If the service was retired, confirm that it is no longer accessible within the assessed scope. Changing the ticket's status does not demonstrate any of those results.",
          "Check for failed deployment and partial completion. If nine devices receive an update and one does not, keep the remaining device assigned. Do not close the whole population because most of it is complete. Preserve the assessed population and dates so later reviewers understand the limits.",
          "A rescan can provide useful confirmation, but it also has scope and detection limitations. If a finding disappears because the scanner can no longer reach the system, determine why. Loss of visibility is not the same as verified repair."
        ]
      },
      {
        "h": "Report the work that remains",
        "ps": [
          "Leadership needs to see which important findings remain unresolved, which exceptions are aging and which decisions need an owner. Include gaps in assessment coverage. Scan counts tell them how much scanning took place, but leave the question of action unanswered. When reporting a backlog trend, explain the scope and counting rules so changes in the numbers can be understood.",
          "Separate newly discovered findings from overdue confirmed findings and explain changes in assessment scope. A broader or better assessment can increase the count because it reveals more issues. Conversely, a falling count cannot establish that overall risk fell by the same percentage.",
          "If work is stalling, identify the stage: validation, business approval, installation or verification. Assign someone to address that delay. Track whether important findings reach a documented decision or verified repair, and whether each exception has an accountable owner."
        ]
      },
      {
        "h": "Start small enough to operate",
        "ps": [
          "A small firm can begin with its important public-facing systems and a representative device population, then expand under an agreed plan. The initial scope should be explicit. Do not present that starting point as a full-business assessment.",
          "Choose a review cadence the team can sustain and add reviews after significant changes. Include new hosting, an acquisition, a new remote-access service or a material software change. Meet with the technical owner to review open work and with leadership when an approval or exception needs a business decision.",
          "Before increasing scan frequency, check whether the team can validate important findings, complete corrective work and collect closure evidence. Review exceptions for work that remains open. Once those steps are operating, decide whether more assessment capacity would answer the firm's remaining questions. If repair work is already stalled, more frequent scans will add findings without resolving them."
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
    "intro": "A security operations center, or SOC, monitors and investigates activity within an agreed scope. Smaller businesses can buy that coverage without staffing a team themselves. The buying decision depends on what happens after the service detects something: who reviews it, what they can do and when they need the business to act.",
    "sections": [
      {
        "h": "Start with the covered environment",
        "ps": [
          "The service can only investigate activity from sources it accepts and can access. Start with its supported devices, identities and other sources, then confirm platform support and required setup. Workstation monitoring does not imply server, network-appliance or application coverage. Even a broader service needs evidence that its intended sources are connected.",
          "Compare that coverage list with the business inventory. Some devices may be excluded, identities unsupported or applications in need of a different approach. Recording those gaps gives leadership a more accurate picture of the purchase: the provider can perform its contracted work well while another part of the environment remains outside scope.",
          {
            "text": "CISA's logging guidance for small businesses recommends working with IT to establish logging and monitoring. Buying a service adds a practical question: who will use those records to investigate events and keep the process running? A configured data source and a staffed service using it are separate things to verify.",
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
          "Keep a record of the automatic actions and the decisions analysts make. Some controls act as soon as they detect activity; other signals need investigation or customer context. The provider should be able to show how relevant events receive the handling promised in the agreement.",
          "For example, an unfamiliar sign-in may turn out to be approved travel, or an unexpected application may have a legitimate business owner. Investigators need a customer contact who can confirm that context without sharing passwords or sensitive client content. Otherwise, they have the technical event but may lack the information needed to interpret it."
        ]
      },
      {
        "h": "Understand triage and investigation",
        "ps": [
          "Triage determines how an event should be handled under the service. Investigation examines the available evidence and relevant context. Depending on the product and scope, that may include device activity, account events or related signals. The provider should explain what evidence it can access and where visibility ends.",
          "That investigation needs an outcome the customer can understand. The event may be expected activity, remain unresolved while someone supplies information, or become a confirmed situation requiring action. A raw alert count cannot tell leadership how many incidents occurred. Reporting should explain significant decisions and work still outstanding.",
          "Name a primary and backup contact who can provide information during an investigation, and agree how urgently they should respond. A question left in an unmonitored shared inbox can stall the work. Keep the contacts aligned with coverage hours and update them when staff change."
        ]
      },
      {
        "h": "Define containment authority before it is needed",
        "ps": [
          "A response service may be authorized to isolate a covered device or perform a supported account action. Ask exactly which actions are available and which require customer approval. Do not assume an investigation license gives the provider permission to make any change across the business.",
          "Containment can interrupt work. If the team isolates a laptop during a client deadline, leadership needs to understand why the employee may lose access and how that tradeoff will be handled. Agree on the approach before an incident, including special handling for critical systems and an escalation route when the relevant customer contact cannot be reached.",
          "The next step may belong to a different team. Isolating a laptop does not settle who will restore it, reinstall applications, arrange replacement hardware or investigate wider consequences. Assign those recovery duties separately, with a clear support route for the employee through each handoff."
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
          "The phrase 24/7 needs a specific meaning in the agreement. A product can collect events continuously while analysts work only during stated hours. Another service may provide continuous investigation for a defined set of covered devices, identities or other sources. Establish whether the advertised hours apply to collection, notification, analyst investigation or supported response.",
          "If analyst coverage is continuous, confirm who operates that team and how your events reach it. Examine the written coverage, responsibilities and escalation arrangements. Those details establish what service the firm is buying and how it will be delivered.",
          "Check what happens during holidays and provider transitions. Identify the support route outside the customer's office hours and the method used for urgent contact. An overnight event should not depend on the one employee who happens to remember a vendor's phone number."
        ]
      },
      {
        "h": "Test the handoff with a harmless exercise",
        "ps": [
          "A vendor-supported, authorized test with harmless sample activity lets you observe the handoff. Agree on the expected result and boundaries, then follow the event into the service and record how it is handled. This tests the route and authority; it cannot prove that the service will detect every possible attack.",
          "Record which parts of the demonstration are automatic. Where the contract includes analyst review, obtain appropriate evidence that the review is operating too. Watching a console feature respond does not establish continuous human investigation.",
          "Test the customer's handoff too. Have the primary contact identify the event and reach IT, then confirm the backup contact has the required authority. Check that IT understands whether the device is still isolated before repair. Resolve those questions while the exercise is controlled."
        ]
      },
      {
        "h": "Connect response to the wider incident plan",
        "ps": [
          "A SOC handles its assigned security work. The business still needs decisions about finance, continuity, counsel, insurance and communication when the facts require them. Keep those decisions in the firm's incident plan with trusted contact information and authority.",
          {
            "text": "NIST's incident-response guidance places response within the broader management of cybersecurity risk. In a smaller firm, that means connecting the technical response with people who can make business decisions. The provider's escalation needs to reach those people through the plan, beyond the support ticket.",
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
          "Retention and export arrangements matter when a client asks for particular records. Confirm that the service can supply them before answering the questionnaire. A monthly summary and a complete forensic record are different deliverables; receiving the summary does not mean the fuller record is included.",
          "Before ending the contract, agree which access will be removed, which records the firm will retain and when the replacement service takes over. Check the handover against the covered population and acceptance criteria. Cancelling before the replacement is accepted can leave coverage unclear."
        ]
      },
      {
        "h": "Use reports to resolve a decision",
        "ps": [
          "Useful reports help someone act on missing coverage, significant investigations and customer work still open. If ten devices stopped reporting, leadership needs the name of the owner checking them and a due date. If an investigation needs a business explanation, the report should identify who will supply it.",
          "Response-time figures need the same care. Acknowledging an alert, investigating it and containing the situation are different results, so define the start and completion event for each measure. When comparing providers, keep the method, exclusions and assumptions beside the figure. An attractive average may conceal an unresolved event or a source the service never covered."
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
      "An alert arriving overnight tells you that a notification worked. It leaves several questions open. An analyst may need to investigate, an authorized action may interrupt work, and existing IT may need to help with recovery. Follow that sequence through the proposed service before relying on a claim of around-the-clock coverage."
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
    "intro": "A convincing invoice can display your company name even though you did not send it. Email authentication gives receiving systems a way to check authorized use of your domain. DMARC connects those checks to the domain people see in the message’s From address, and lets you publish a policy for failures and request reports.",
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
          "This explains why a message can pass an authentication check and still fail DMARC. A billing platform might authenticate its own domain while showing your company’s domain in the From address. The domains do not align. Your administrator needs to follow the platform’s supported configuration to make that alignment work.",
          "To check that configuration, ask each business service to send a test message and have your IT provider inspect the receiver’s authentication results. A screenshot of a DNS record shows that the record exists. You still need a message test to establish whether an invoice from that particular platform passes DMARC at its destination."
        ]
      },
      {
        "h": "What the policy settings mean",
        "ps": [
          {
            "text": "The familiar policy values are p=none, p=quarantine and p=reject. They express progressively stricter preferences for messages that fail DMARC. With p=none, you can collect reports and identify overlooked senders before enforcement; this is a legitimate deployment stage. It does not request quarantine or rejection of failures. Receivers also apply their own handling rules. Microsoft’s deployment guidance explains the relationship between authentication, policy and rollout.",
            "links": [
              {
                "phrase": "Microsoft’s deployment guidance",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure"
              }
            ]
          },
          "The policy value alone tells you little about how well the work is managed. Rejection can interrupt legitimate mail if the sender inventory is out of date. Monitoring can go on indefinitely if nobody reviews the results. Enforcement needs an accurate inventory and someone responsible for maintaining it."
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
          "Bring the DNS administrator and the relevant business owner into the same change review. Finance may assume its invoicing vendor handles authentication, while the administrator may not know that finance uses the service at all. Together, they can include it in the inventory and test plan before a DNS change interrupts invoices."
        ]
      },
      {
        "h": "Use reports to investigate, not to guess",
        "ps": [
          {
            "text": "DMARC reports help your administrator investigate which sources send mail and how that mail authenticates. The IETF’s aggregate reporting standard specifies the detailed formats. As a business owner, you usually need a short explanation of the results so you can help resolve them.",
            "links": [
              {
                "phrase": "aggregate reporting standard",
                "to": "https://datatracker.ietf.org/doc/html/rfc9990"
              }
            ]
          },
          "Sort observed sources into approved senders, approved senders needing repair, unexplained sources and known unauthorized activity. Volume alone cannot justify approving an unfamiliar source. Identify the service, its owner and whether the business uses it before granting authority.",
          "When legitimate mail fails, your IT provider should investigate the cause and record the fix. A platform configuration change, a new sending domain, an outdated integration or a forwarding path may explain the result. Actual messages let the provider test that explanation; repeated DNS changes aimed at improving a dashboard do not establish the cause.",
          "For each decision, record the date, source, business owner, evidence and action. If the service later changes infrastructure, the administrator can revisit the original approval. A successor can also follow the decision without reconstructing it from email."
        ]
      },
      {
        "h": "Move toward enforcement with a business test plan",
        "ps": [
          "Moving to enforcement can affect everyday work, so plan it as an operational change. Decide which sending processes must work and who will test them. Include invoices, password-reset messages, appointment reminders and other mail whose failure could delay work or confuse customers. Staff also need a way to report delivery problems.",
          "Send tests to recipients outside the organization, because internal delivery only checks the internal path. Inspect the authentication results as well as whether the message arrived, and record them against the sending configuration you tested. An inbox arrival on its own gives you less evidence.",
          "Schedule the change when the responsible staff can investigate problems. Avoid making the first enforcement change immediately before a major billing run if nobody can monitor the outcome. Record the previous configuration, the approved update and the recovery procedure with the person authorized to carry it out.",
          "Choose the observation period around the services in your inventory, and test separately where needed. Two quiet weeks will tell you little about an annual notification service that sends nothing during that time. There is no universal observation period that proves every company’s senders are ready.",
          "The sender approval process needs to continue after enforcement. Review authentication whenever you add a platform, before it sends messages to customers. Making that review part of purchasing and onboarding helps keep DMARC current, along with control of DNS access, named service owners and change records."
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
          "Ask your provider who maintains the inventory and who reviews reports. Agree how often they will explain unresolved failures to business owners and where they will record decisions. Those responsibilities need named people even when you have a software subscription.",
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
          "If you do not have that evidence yet, ask the inventory owner for the current authentication results for your important sending services. Those results help you check how the firm’s published DNS configuration applies to the mail it actually sends."
        ]
      }
    ],
    "takeaway": "DMARC helps receivers evaluate authorized use of your visible email domain. To use it safely, start with an inventory of sending services, then inspect real message results and review reports before moving toward enforcement. Account security and payment verification still need their own controls.",
    "lead": [
      "Before changing that policy, you need to know which services send email in your name and whether their messages authenticate correctly. Someone also needs to review failures before they affect customers. Those checks help you decide how to use DMARC while keeping the other fraud controls your business needs."
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
    "intro": "Windows includes Microsoft Defender Antivirus, so buying a managed endpoint service starts with understanding the protection you already have. The decision depends on which controls are configured and who operates them. Your firm needs someone to investigate alerts, notice when devices stop reporting and authorize containment after hours. A comparison of products should account for those responsibilities.",
    "lead": [
      "The name can be confusing. Defender Antivirus, Defender for Business and Defender for Endpoint are different parts of Microsoft's product family. If a proposal says only Defender, you still need to establish the licensing, management and response responsibilities before you can compare it with another service."
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
          "Your IT provider should be able to identify the active subscriptions and applied settings, then compare enrolled devices with your inventory. Look for devices that have stopped reporting. A laptop enrolled last month may still appear in the console even though nobody can confirm its current protection."
        ]
      },
      {
        "h": "Compare the operating models",
        "ps": [
          "An internally operated business endpoint platform can fit a firm whose IT team has the time, skills and authority to maintain it and handle incidents. That work needs a budget and coverage when the usual person is absent or an event happens outside working hours.",
          "With a managed detection service, the proposal should explain which investigation and response activities are included, which are automated and which require your approval. Request evidence of both the product's capabilities and the service's coverage. A capable product still needs an operating arrangement that covers the work your firm requires.",
          "Consider a hypothetical 35-person New Jersey law firm: a partner's laptop raises an alert during a client deadline. Someone has to assess it and determine whether they have authority to isolate the laptop. The partner also needs a way to continue working. Walk each proposal through that handoff to see who takes responsibility at each stage; another antivirus purchase alone leaves those duties unassigned.",
          "Before signing, confirm the supported operating systems and any device exclusions. The agreement should also specify monitoring coverage, containment authority and an escalation route. A sample report and safe demonstration of the response workflow can help you check those commitments."
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
          "The proposal needs the exact Defender product, plan and tenant configuration. Defender Antivirus, Defender for Endpoint and Defender for Business have different roles, so their names cannot be substituted for one another. Even with the right license, you need evidence that the intended capabilities are enabled on the proposed devices and that someone operates them.",
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
          "Compare both proposals against the same duties, including the time, authority and expertise each one assigns to the work. An existing license requires people to operate it, and a managed contract may still leave some tasks with the firm. Writing down those assignments makes the remaining responsibilities easier to spot.",
          "A duty left with the firm needs a named person. If that includes handling alerts, confirm when staff are available and how they escalate an incident. For investigation assigned to the provider, establish which connected systems and signals its service covers."
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
          "A delivered agent can still fail to report or work as intended. Compare currently reporting devices with the eligible inventory and IT's acceptance criteria, removing retired devices and duplicate entries from the coverage calculation. Otherwise, the console can make coverage look better than it is.",
          "A device that stops reporting needs investigation. It may be powered off, replaced, unavailable or experiencing a deployment problem; an employee's absence is only one possible explanation. Someone should establish and record its status before removing the console entry.",
          "Exclusions need an owner and, for material exceptions, a review date. A broad exclusion added to resolve an application issue can remain after the original reason has disappeared. Knowing what it covers, why it exists and who approved it gives the reviewer enough context to decide whether it is still needed."
        ]
      },
      {
        "h": "Understand what response includes",
        "ps": [
          "A detection product may block some activity automatically under its configuration. An investigation service may review an alert and decide on a supported action. These are different capabilities. Ask the provider to explain what is automatic, what receives analyst review and what requires customer approval.",
          "Standing authority to isolate a device has a business consequence: containment can interrupt urgent work, even when it is appropriate. Leadership should understand how the firm will handle that interruption before granting the authority. Agree at the same time on who informs the employee and who restores working use.",
          "Do not assume that isolating a device includes forensic examination, rebuilding, replacing hardware or restoring every application. Those duties may belong to IT or a separately engaged specialist. Get the boundary in writing and give employees one reporting route that reaches the relevant teams."
        ]
      },
      {
        "h": "Test a realistic handoff",
        "ps": [
          "Use a vendor-approved harmless exercise to follow a covered event through the process. Confirm the test is authorized and record the expected result. The test should demonstrate the agreed routing and escalation, with the limits of the exercise stated clearly.",
          "Follow who receives and classifies the event, then how the firm is contacted, including the backup contact if the primary person is unavailable. An automated action in the demonstration establishes only that action; it does not prove a human investigated that event. Request evidence appropriate to the investigation service in the contract.",
          "The test should also reach the employee and IT team. If the laptop becomes unavailable, the employee needs support instructions; IT needs to know its containment status before repair. A business owner may need to approve an alternative way to work. Check those handoffs alongside the console action."
        ]
      },
      {
        "h": "Estimate costs from your environment",
        "ps": [
          "Use the actual device and user population. Include additional devices, unsupported systems, deployment effort and work retained by IT. Ask whether license costs, investigation and routine reporting are included. Clarify the fees for separately scoped recovery or specialist work.",
          "For an internal arrangement, the recurring work includes maintaining enrollment and policies, investigating events and keeping evidence. Identify who performs those duties now and whether the proposed change replaces their work or adds an overlapping process. Avoid building the comparison around a guaranteed labor saving.",
          "Device counts and business requirements can change, so the managed service should explain how it handles those changes. Compare the service order with your inventory and intended response authority. A low total may exclude an important group of devices or leave an essential duty unassigned."
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
          "Existing IT may already operate the platform effectively and supply the coverage, evidence and response your firm needs. In that case, a narrower improvement may be enough. If investigation or urgent containment has no owner, the proposal needs to address that gap explicitly.",
          "Before choosing, leadership should know which devices are covered and which service investigates alerts. It should also know what action that service can take and who restores business use afterward. Those commitments let the firm assess whether its existing protection is sufficient and what a managed service would add."
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
    "intro": "A new account number in a closing or settlement email needs verification before anyone releases the money. The thread may look familiar, and the deadline may be close, but an attacker who compromises the conversation can insert different payment details. A callback to a number the firm already trusts gives staff a way to check the instruction outside that thread.",
    "sections": [
      {
        "h": "Why the email can look completely legitimate",
        "ps": [
          "The FBI describes business email compromise as a request that appears to come from a known source. In a legal transaction, a criminal may wait until a payment is expected before introducing a new account number or beneficiary. That timing puts staff in a difficult position: the change needs checking just as everyone is trying to meet the deadline. A verification step outside the thread gives them a process to follow under that pressure.",
          "Grammar, logos, signatures, and reply history offer little assurance about the payment details. A message from a compromised real mailbox may even pass normal email-authentication checks. Staff need a way to verify the instruction when there is no visible clue that anything is wrong."
        ]
      },
      {
        "h": "Write the payment rule before the matter becomes urgent",
        "ps": [
          "At intake or the start of the payment process, record a trusted phone number for every party authorized to give or change instructions. Keep those numbers in the matter file or another controlled record. When a change arrives, staff can then use an established contact instead of trying to decide which number to trust while the payment is waiting.",
          "Assign responsibility for receiving instructions, making the callback, approving release and resolving exceptions. Set the threshold for approval by two people based on the firm's transactions and insurer or client requirements. The rule should also explain that urgency, seniority and a familiar voice do not waive verification."
        ]
      },
      {
        "h": "The callback protocol",
        "ps": [
          {
            "text": "When a new or changed payment instruction arrives, pause the payment and call the trusted number already held in the file. A number supplied in the request cannot provide that independent check. Ask the authorized person to confirm the beneficiary, financial institution, routing details, account information, and reason for the change. Before release, record who verified it, when they called, which number they used, the result, and who approved the payment.",
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
          "These controls reduce exposure to malicious email; the callback checks whether the payment is authorized. An email-security check can pass while the financial instruction is fraudulent, so the firm needs both steps."
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
          "The callback needs to establish more than whether someone sent an email. Confirm that the person reached has authority to give the instruction, then read back the details needed to approve the transfer. Use the agreed record to check the beneficiary and payment details so the confirmation covers the payment staff will actually make."
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
          "For the firm's own review, track independently verified instruction changes, exceptions and releases without approval records. Those counts tell you whether staff are following the procedure. They do not tell you how many attacks it prevented: the firm may never know which unverified requests would have been fraudulent."
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
          "If a senior partner asks to skip the step for an important client, staff need to know what the firm permits. Decide in advance who can approve an exception and what independent evidence they must have, then record that decision. Where the rule prohibits bypassing verification, leadership needs to support staff who pause the transaction.",
          "Follow the independently established process even when a voice or video call sounds familiar. For an unusual payment or beneficiary change, the firm needs an authorized person and verified instruction through the approved route. Staff should not have to diagnose synthetic audio to decide whether to release funds."
        ]
      },
      {
        "h": "Pair the payment rule with account protection",
        "ps": [
          "Review authentication on the accounts used for financial instructions, reporting routes for suspicious messages and the response process for a compromised mailbox. A mailbox incident can affect a legitimate conversation and expose transaction details. Investigating it requires the authorized IT and security teams, with attention to account sessions, rules and other relevant evidence in the actual platform.",
          "When a client or outside party reports a suspicious payment message, verify the report through a trusted contact and preserve the original information. Do not forward a live malicious attachment around the firm to ask opinions. Use the agreed reporting procedure so the team can investigate while limiting unnecessary exposure.",
          "Use harmless training records to rehearse changes staff could encounter, such as a different settlement beneficiary, an updated closing account or a request to pay a new intermediary. Check whether employees verify the instruction and escalate it appropriately. A poorly written sample only tests whether they notice poor writing; a fraudulent instruction may be polished and familiar."
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
          "Use the exercise to find missing records and unclear authority. If staff cannot find an alternate contact, or cannot tell which approval threshold applies, correct that gap and repeat the affected step. Keep a record of how the payment process worked as well as who attended."
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
    "intro": "A Written Information Security Plan (WISP) needs to describe how your firm handles client information today. A generic plan can miss systems that hold tax data or promise safeguards you have yet to implement. Before adopting it, check its instructions against your systems, procedures and records.",
    "ctaMode": "book",
    "sections": [
      {
        "h": "Why the plan needs current facts",
        "ps": [
          {
            "text": "IRS Publication 5708 provides an outline and sample material to help you start. As you work through its questions, check each listed safeguard against what the firm actually does. Only describe a safeguard as operating once you have confirmed it.",
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
          "Someone needs authority to keep the plan accurate and follow up when the firm falls short of it. Assign one person to coordinate the information-security program, even if security is not their full-time role. Their responsibilities should include maintaining the plan, collecting evidence, following up on exceptions and coordinating service providers.",
          "Inventory the customer information the firm receives and where it moves: email, portals, tax software, workstations, shared drives, payroll systems, cloud storage, backups, paper records, and vendor platforms. Include seasonal staff and remote work because the plan must cover the way the firm actually operates during its busiest months."
        ]
      },
      {
        "h": "Assess risk and match each safeguard to it",
        "ps": [
          "Work through each system or workflow by connecting a plausible threat to the weakness it could exploit. Then record the safeguard already in place and anything it leaves unresolved. A mailbox takeover, for example, raises different questions from an untested backup or a former worker's active account. Include malicious attachments, stolen passwords, unsupported computers and excessive access in the review too.",
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
          "A provider's work belongs in the plan when it affects customer information. The IRS checklist includes selecting service providers that maintain safeguards for that information. Record what each provider handles and who at the firm owns the relationship, along with the relevant contract or assurance evidence and the review process.",
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
          "The FTC guidance discusses limited exemptions from certain provisions for institutions maintaining customer information concerning fewer than 5,000 consumers. The number of employees does not determine that threshold, and the exemptions do not remove the general requirement to maintain a security program. Ask the adviser which provisions apply to your firm and record the determination.",
          "Keep requirements separate from the firm's additional operating practices. A quarterly meeting or a particular product may be useful without being a universal legal mandate. Label the source of each material requirement so future reviewers can distinguish law, client terms, insurer questions and a management decision."
        ]
      },
      {
        "h": "Build a map of client information",
        "ps": [
          "Follow a representative engagement from intake through document exchange, preparation, review, filing, storage and disposition. At each stage, record the people, systems and providers involved and the information they hold. Include intake files, working papers and filing records, along with paper copies and temporary files.",
          "For each location, name the business owner and technical administrator, then record who may access it and why. Distinguish the authoritative record from working copies, email attachments and downloads. That distinction matters when reviewing retention: deleting the main record may still leave copies elsewhere. It also helps you review the safeguards for each copy.",
          "Review provisioning and departures for seasonal and remote staff. A temporary employee may use a different device or receive access shortly before a deadline. Confirm how the approved safeguards apply to that arrangement and describe it in the WISP, rather than relying on permanent-staff procedures that do not cover the busy period."
        ]
      },
      {
        "h": "Connect a risk to a decision and evidence",
        "ps": [
          "A set of security products cannot establish that every risk is low. To assess the firm's circumstances, identify the exposure each safeguard addresses and the workflows that still need work. The questions below give you a way to connect that assessment to records you can check.",
          "For each finding, record what the firm has decided to do. That may mean corrective work, further investigation or an approved temporary decision. Name the owner and explain how the action will be verified. Keep planned safeguards clearly marked as planned so the WISP reflects what is operating now."
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
          "Staff procedures should help employees make the decisions their work requires: how to receive documents, report a suspicious message, request a new tool or respond when an approved service is unavailable. Keep detailed administrative settings in the authorized technical records so employees can find the instructions relevant to them.",
          "Train using harmless examples from the firm's workflows. A changed payment instruction, an unexpected document link or a request to upload client files to a new AI tool can each test a different decision. Explain the reporting route and reinforce that asking for help is part of the process.",
          "Record who needed training and who completed it, including new and seasonal staff where relevant. A signed acknowledgment helps show that instruction was given; it cannot establish how every employee will respond under pressure. Keep separate operating evidence for the technical safeguards."
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
          "A tabletop exercise lets staff work through a defined, harmless incident scenario. Ask them to show whom they would contact, who could authorize containment, who would reach the insurer and who would handle the relevant tax or legal reporting advice. Keep those contacts available outside a mailbox or tenant that the incident could affect.",
          "Record the decisions tested and any information staff could not find. If, for example, a backup contact lacks authority or the bank number is unavailable, assign someone to correct it. The useful result is a record of the gaps and the work needed to close them. Attendance alone cannot establish readiness.",
          "Follow up on each correction and keep evidence appropriate to the change, such as the revised contact or procedure. Check the related parts of the WISP too, so its instructions agree with the updated process."
        ]
      },
      {
        "h": "Approve and maintain a supported version",
        "ps": [
          "Give the approved plan a version, owner, approval date and next review decision. Preserve earlier versions under the firm's records procedure so a future reviewer can see what changed and why, and distinguish current statements from those made in a prior period.",
          "Use risk findings and test results to update the plan at the planned review cadence and after material staff, platform, vendor or workflow changes. Check that someone owns each procedure and that the firm can carry it out and maintain the supporting evidence. Adding a generic policy without an owner leaves that work unresolved."
        ]
      }
    ],
    "takeaway": "Name the person responsible for the WISP, map where client information moves, connect each risk to a safeguard, and document testing, vendors, and incident response. When the document and the practice disagree, correct the control or update the plan.",
    "lead": [
  {
    "text": "The IRS says tax professionals must maintain a WISP, and FTC guidance identifies tax-preparation firms among covered financial institutions. Start with the IRS WISP guidance and FTC Safeguards Rule guidance, then use the firm's actual work to fill in the details.",
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
  }
],
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
    "intro": "A vulnerability advisory gives your firm a decision to make: whether to interrupt work to patch a system, restrict access while waiting for a fix, or investigate a possible compromise. Start by checking whether you use the affected product, how it is exposed and what business information or access depends on it.",
    "lead": [
      {
  "text": "The zero-day label alone cannot answer those questions. A known vulnerability has been identified, though an affected system may still need a patch. A zero-day commonly means a weakness unknown to its vendor or exploited before a fix is available; usage varies. The labels describe what is known and whether a repair is available, rather than how damaging an attack will be. Check the advisory's repair status and use the CISA vulnerability-reporting definitions when discussing a report with your IT provider.",
  "links": [
    {
      "phrase": "CISA vulnerability-reporting definitions",
      "to": "https://www.cisa.gov/sites/default/files/publications/guide-vulnerability-reporting-americas-election-admins_508.pdf"
    }
  ]
}
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
          "That product check is easier if IT already keeps an inventory of internet-facing systems and their owners. Match the advisory's affected versions to that inventory, then document the vendor's recommended action. If there is no patch, evaluate its supported mitigation. Restricting access or disabling a feature may interrupt work, so leadership needs to approve that interruption.",
          "A temporary filtering rule, sometimes described as virtual patching, can address a particular traffic or exploit path without repairing the software. Have the responsible specialist explain what the rule blocks and what remains exposed, along with when it should be removed."
        ]
      },
      {
        "h": "Separate prevention from incident response",
        "ps": [
          "A patch closes an identified weakness, but an attacker may have used it before the update. If the advisory or your monitoring indicates possible exploitation, follow the incident plan and involve the authorized responder before destroying logs or rebuilding affected systems. Installing the fix cannot establish that the system was never compromised.",
          {
            "text": "Use threat information to help prioritize work. CISA's Known Exploited Vulnerabilities catalog identifies vulnerabilities with observed exploitation. Consult the CISA KEV catalog to help IT prioritize applicable findings; absence from it does not establish safety.",
            "links": [
              {
                "phrase": "CISA KEV catalog",
                "to": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog"
              }
            ]
          },
          "Consider a hypothetical New Jersey firm whose remote-access appliance is vulnerable. Its work record should show the version check, the mitigation or patch and verification of the change, plus any incident escalation. A provider monitoring employee laptops may see a related alert; the appliance's owner still performs the work on that appliance."
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
          "The business owner needs enough information to approve the next step: whether the firm is affected, what work is underway and what interruption may be required. When applicability is uncertain, say so and assign someone to check it. Leadership may need to approve an interruption before every technical detail is available."
        ]
      },
      {
        "h": "Read an advisory in a consistent order",
        "ps": [
          "Read the product and supported versions first, followed by the conditions an attacker would need to exploit the weakness. Check which systems or features are involved and what the vendor prescribes. Revisit the advisory as it changes: the vendor may provide patches, clarify affected versions or improve detection instructions after the initial notice.",
          "Include managed appliances, hosted applications and services operated by others when you match the product to your inventory. If a supplier runs the system, ask through the approved account contact whether the advisory applies and what action the supplier is taking. A general security assurance will not answer those specific questions.",
          "Finally, determine whether the advisory calls for investigation as well as updating. A patch can prevent a particular future exploit while leaving consequences of an earlier compromise unresolved. Keep the version update, exposure reduction and incident investigation as separate entries when the facts require them. Each should have its own completion evidence."
        ]
      },
      {
        "h": "Prioritize using more than a numerical score",
        "ps": [
          "A technical severity score describes aspects of the weakness. It cannot establish how your firm has deployed the product or which business process depends on it. Use the inventory and business owners to fill in that context, then record why you chose a particular priority. The factors below help make that reasoning explicit.",
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
          "Temporary measures need an owner beyond the day they are installed. Assign someone to watch for the permanent fix and revisit the measure when it arrives. Decide whether it should stay, change or be removed, then test business behavior and retain the final configuration record. Otherwise, the temporary configuration may remain indefinitely unnoticed.",
          "If essential work prevents use of the mitigation, give leadership concrete options for the affected service. These may include an outage, restricted access, a supported replacement or another vendor-approved approach. Record the selected option, consequence and review date so the decision goes beyond a general acceptance of cyber risk."
        ]
      },
      {
        "h": "Treat patching as maintained business infrastructure",
        "ps": [
          {
            "text": "NIST frames enterprise patching as preventive maintenance, including identification, prioritization, installation and verification. A small firm needs an owner and a way to approve changes before an emergency advisory arrives. With the inventory already known, that same process can support an urgent change instead of starting with a search for who owns the system.",
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
          "The technical owner should verify the installed version or other relevant configuration evidence after the change. A deployment command can finish without the affected system reaching the intended state, so retain that verification and record failed updates or systems that missed the change.",
          "If suspected exploitation prompted an incident response, follow the responder's guidance about logs, evidence and recovery. Do not close the incident merely because the current version is patched. The team may still need to assess access, affected information and persistence, based on the product and observed activity.",
          "Give leadership a concise update separating confirmed facts from open questions. State the affected population, completed actions, exceptions and next decision. Avoid promises that the patch makes the entire environment safe. It addresses a specified weakness under the conditions documented by the vendor."
        ]
      },
      {
        "h": "Make threat intelligence useful to a small team",
        "ps": [
          "Give someone responsibility for reviewing advisories about products the firm uses, starting with important internet-facing systems and business platforms. That person needs to connect relevant notices to the inventory and change process. An unrestricted headline feed may overwhelm a small team while leaving it unclear which systems need attention.",
          "Keep trusted contacts for outside operators current. When one provider manages a remote-access appliance and another monitors laptops, an alert may require a handoff between them. Establish who patches the affected asset and retain the supplier’s service response; the team seeing the alert does not automatically own that work."
        ]
      }
    ],
    "updated": "2026-10-07"
  }
];
