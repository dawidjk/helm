import type {Article} from './articles';

// Review drafts sourced from assets/marketing/seo-gap-resources-2026-10-07/.
export const gapArticles: Article[] = [
  {
    "slug": "pen-test-vs-vulnerability-scan",
    "title": "Penetration Testing vs Vulnerability Scanning: What Your Business Should Buy",
    "metaTitle": "Penetration Testing vs Vulnerability Scanning | Helm",
    "metaDesc": "Compare vulnerability scans and penetration tests. Review scope, reports, remediation and retesting before choosing what your business needs.",
    "date": "2026-06-13",
    "readMin": 9,
    "lane": "Small business",
    "laneTo": "/professional-services/",
    "intro": "A vulnerability scan and a penetration test answer different questions. Scanning helps identify recognized weaknesses that need review and repair. A scoped penetration test examines how an attacker could move through a defined part of the business. Decide which question you need answered before comparing proposals and reports.",
    "lead": [
      "Your business may need both approaches. Before signing, compare the systems the engagement covers, the work the tester may perform and the evidence you will receive. Those boundaries determine whether the report can answer your question; buying one kind of test does not establish that you received the other."
    ],
    "sections": [
      {
        "h": "What a vulnerability scan tells you",
        "ps": [
          "A scanner tests accessible systems for weaknesses it recognizes. Its configuration affects whether it finds exposed services, software vulnerabilities or particular configuration problems. Approved credentials let an authenticated scan inspect information unavailable to an outside observer. An unauthenticated scan checks only what is visible without signing in.",
          "An external scan of public systems cannot establish that office laptops have current software. An internal authenticated scan can inspect more of those devices, provided they are reachable, the credentials work and the scanner supports them. Compare those conditions before treating the two reports as equivalent.",
          "Ask the provider for a report stating which systems were scanned, when, which checks succeeded and which were missed. A report with no findings may mean the environment is well maintained, or that authentication failed and coverage was incomplete. Have IT explain that difference before using the result as evidence.",
          "Scanning becomes useful through repetition and follow-up. Give each confirmed finding an owner, a target date and a verification method. Track exceptions separately. If the same issue appears in several reports, review the reason it remains open rather than buying another report that repeats it."
        ]
      },
      {
        "h": "What a penetration test adds",
        "ps": [
          "A penetration test uses authorized testing to explore how weaknesses could affect the systems in scope. Testers may use automated tools, manual investigation and controlled exploitation. The work can include chaining several weaknesses together, such as exposed access followed by excessive permissions. The exact techniques depend on the agreement and the environment.",
          {
            "text": "NIST's technical testing guide describes vulnerability scanning and penetration testing as related assessment techniques with different strengths and limitations. A penetration test can use scanning as part of its discovery work. The question is what investigation follows and what the final report demonstrates.",
            "links": [
              {
                "phrase": "NIST's technical testing guide",
                "to": "https://csrc.nist.gov/pubs/sp/800/115/final"
              }
            ]
          },
          "The report should show what testers attempted and what they reached. For example, an ordinary account might reach information outside its intended role, or a public application might expose a sensitive function. These are possible findings to understand when evaluating a report, not conclusions about your business.",
          "A short engagement cannot prove that an organization has no weaknesses. An external network test does not automatically cover your web application, employees, cloud permissions or internal network. The report should state exclusions and explain where timing, access or operational restrictions limited the investigation."
        ]
      },
      {
        "h": "Compare the deliverables before comparing the price",
        "ps": [
          "The service name on a quote provides little detail. Ask each provider to show a sanitized sample report and explain how it would answer your business question. Compare proposals using the same systems and testing boundaries. A narrow external test and an internal assessment with several applications are different purchases.",
          "Pricing depends on the systems, access, testing depth and deliverables agreed. Compare those details instead of judging the service by the quote alone. A low price does not establish that the provider is selling a rebranded scan, and a high price does not establish quality. Request the method, named responsibilities and expected evidence.",
          "Check whether the proposal includes a findings discussion, remediation guidance and retesting. A report may identify a serious weakness while leaving implementation to your existing IT provider or software developer. Knowing that before purchase helps you reserve budget for the fix."
        ],
        "table": {
          "caption": "Compare the deliverables before comparing the price",
          "headers": [
            "Buying question",
            "Vulnerability scanning",
            "Penetration testing"
          ],
          "rows": [
            [
              "What does it primarily investigate?",
              "Recognized weaknesses within accessible coverage",
              "Exploitability and attack paths within authorized scope"
            ],
            [
              "What should the report include?",
              "Coverage, findings, affected assets and checking limitations",
              "Attempted paths, supporting evidence, impact and testing limitations"
            ],
            [
              "How does it support ongoing work?",
              "Repeated checks and tracking of known issues",
              "Validation of selected controls and investigation of deeper paths"
            ],
            [
              "What should happen afterward?",
              "Confirm findings, remediate and rescan",
              "Remediate, arrange agreed retesting and record residual risk"
            ]
          ]
        },
        "figure": {
          "src": "/images/resources/pen-test-vs-vulnerability-scan.svg",
          "alt": "A scanning and testing workflow: scan for known weaknesses, investigate authorized attack paths and verify repairs with the appropriate rescan or retest.",
          "caption": "Scanning and testing answer different questions. Both need a documented handoff from findings to verified repairs."
        }
      },
      {
        "h": "Decide which question to answer first",
        "ps": [
          "Write down why you are commissioning the work before seeking quotes. A customer request, new application, recurring exposure or major infrastructure change can call for different scopes. A useful trigger is specific: for example, a customer wants an independent test of the portal holding its documents.",
          "If you are establishing a maintenance baseline, scanning can help organize known issues. If you are asking whether a signed-in user can reach another client's files, a focused application test may be more suitable. If a contract specifically requests penetration testing, a scan should not be presented as an equivalent without written acceptance from the requesting party.",
          "Read the exact insurer, customer or regulatory requirement that applies to you. Frequency, independence, scope and evidence can differ. Avoid relying on a generic statement that small businesses only need scanning or that an annual penetration test satisfies every obligation. Confirm ambiguous wording with the party evaluating the result.",
          "Where timing allows, repair known basic weaknesses before deeper testing. Testers can then spend more of the engagement examining the questions that remain. Keep material exceptions visible; the testing team needs to know which systems and risks the business has deliberately left unresolved."
        ]
      },
      {
        "h": "Build a scope your IT provider can review",
        "ps": [
          "Prepare an inventory of the intended targets. Include public addresses, domains, application names, cloud environments and internal systems where relevant. Identify who owns each system. A provider's authorization to test your company does not automatically authorize testing a third-party platform that hosts part of your work.",
          "Agree on testing windows, emergency contacts and stop conditions. Discuss how the team will avoid unnecessary disruption and what it must do if it finds an urgent weakness. Production testing needs an escalation route that reaches a decision-maker while the work is happening.",
          "List the access testers will receive. No credentials, an ordinary employee account and an administrator account provide different starting points. Proposals may call these black box, gray box or white box testing; the actual access list tells your IT provider more than the label.",
          "The agreement should also address sensitive information. State how evidence will be collected, how much data may be accessed, where the report will be stored and when testing data will be removed. Use redacted examples where full records are unnecessary. Share the report only with people who need it to fix or evaluate the findings."
        ]
      },
      {
        "h": "A practical example for an accounting firm",
        "ps": [
          "Consider a hypothetical accounting firm with a client portal, cloud email and office workstations. Its IT provider already runs recurring scans and applies updates. A larger client asks whether the portal prevents one customer from accessing another customer's documents.",
          "A network scan can help confirm exposed services, but the customer's question concerns access between portal accounts. The firm could commission a portal test with approved test accounts and defined document boundaries. Its developer would then prepare a safe test environment or agree controlled production testing that meets the requirement.",
          "Suppose the test finds a permission problem. The developer owns the application fix, the IT provider checks any related configuration and the firm decides how to handle business consequences. Retesting should confirm the specific repair and consider whether similar functions have the same weakness. A clean rescan of the network would not establish that the application permission issue was resolved.",
          "Assign the developer, IT provider and business approver before scheduling the test so the firm knows who will authorize, implement and verify any repair the report calls for."
        ]
      },
      {
        "h": "Use a findings worksheet to prevent stalled remediation",
        "ps": [
          "Create a record for each confirmed finding with its affected system, business consequence, responsible owner, target date and evidence needed for closure. Add a field for dependencies, such as a developer release or a vendor update. A manager should approve any accepted risk rather than allowing it to disappear from the list.",
          "Use severity ratings together with the affected system’s exposure and information. A weakness on a public client-document system may warrant a different priority from a similar issue on an isolated test device. Give leadership that context when seeking an urgent repair or an accepted-risk decision.",
          {
            "list": [
              "Record the finding and the systems affected.",
              "Confirm who can implement the fix and who approves disruption.",
              "Set a completion date that reflects exposure and business constraints.",
              "Document temporary safeguards if the permanent repair must wait.",
              "Verify the change using the agreed rescan or retest method.",
              "Keep unresolved issues visible in the next review."
            ]
          },
          "Keep a scheduled repair open until the agreed check verifies it. Save the original evidence, change record and result in the approved system. A dated record of what changed lets later reviewers assess completion more clearly than an email saying the problem was handled."
        ]
      },
      {
        "h": "Where Helm fits",
        "ps": [
          "Helm works alongside your existing IT provider. Core supplies the covered security stack and monthly reporting. Command adds security-program coordination, including a risk register, roadmap and evidence upkeep within its agreed scope. Neither service name should be read as an automatic promise of a particular penetration-testing engagement.",
          "If your next step is testing, bring the request and the intended systems to the scope conversation. Confirm who will perform the work, whether specialist testing needs a separate agreement and who will make the resulting repairs. Your existing IT provider retains routine administration and patching unless a separate written scope changes those responsibilities.",
          {
            "text": "Helm's free public-domain scan is a limited check of public email and web configuration. It is not an authenticated internal vulnerability assessment or a penetration test. Use it to understand that public configuration, then choose deeper work according to the question you still need answered.",
            "links": [
              {
                "phrase": "Helm's free public-domain scan",
                "to": "/free-scan/"
              }
            ]
          },
          "Request the coverage statement, sample report and remediation handoff before approving a proposal. Together they show what will be examined, what evidence the firm will receive and who follows through on findings."
        ]
      }
    ],
    "takeaway": "Use recurring vulnerability scanning to identify and track known weaknesses. Use a scoped penetration test when you need to validate attack paths, investigate a particular system or satisfy a written testing requirement. Fix obvious problems first when the requirement and timing allow it, then reserve testing time for questions that need deeper investigation.",
    "organizationByline": true,
    "hideVisual": true,
    "readingLayout": true,
    "updated": "2026-10-07"
  },
  {
    "slug": "dns-filtering-small-business",
    "title": "DNS Filtering for Small Business: Coverage, Limits and a Rollout Checklist",
    "metaTitle": "DNS Filtering for Small Business: A Practical Guide | Helm",
    "metaDesc": "Understand DNS filtering, remote device coverage and its limits. Use a rollout checklist to review policies, exceptions and responsibilities with IT.",
    "date": "2026-10-07",
    "readMin": 9,
    "lane": "Small business",
    "laneTo": "/professional-services/",
    "intro": "If an employee follows a message that appears to come from a client to a document sign-in page, a DNS filter may block the connection if its policy recognizes the destination as unsafe. The result depends on the device, network and DNS path, so those details belong in the coverage review.",
    "lead": [
      "When choosing a filter, ask how consistently its policy covers the places your team works. A filter configured at the office can leave traveling laptops outside its coverage. A roaming device tool can close some of that gap, but somebody still needs to maintain the policy, review exceptions and check that employees can reach the services they need."
    ],
    "sections": [
      {
        "h": "What DNS filtering does",
        "ps": [
          "DNS, the Domain Name System, helps devices find the network address for a domain. A resolver answers that lookup when a browser requests a website. A filtering resolver first checks the domain against its policies, which can change whether it returns the normal answer.",
          "Those policies can block domains associated with malicious activity, such as phishing or malware infrastructure. Providers can also offer category rules for content the business chooses to restrict. The security policy and the acceptable-use policy are separate decisions, even when the same product enforces both.",
          {
            "text": "Cloudflare's DNS filtering documentation illustrates two deployment approaches: directing network DNS requests to the service and using a device client. Other providers use their own methods. Read the chosen provider's documentation rather than assuming every DNS filtering product behaves the same way.",
            "links": [
              {
                "phrase": "Cloudflare's DNS filtering documentation",
                "to": "https://developers.cloudflare.com/cloudflare-one/traffic-policies/get-started/dns/"
              }
            ]
          },
          "Treat a block as evidence that a policy stopped a particular request, then review what generated it. A browser, background application or mistyped address may be responsible. The block alone cannot establish device infection or employee misconduct."
        ]
      },
      {
        "h": "Separate DNS filtering from other protections",
        "ps": [
          "DNS filtering usually works at the domain level. It is different from examining every page, downloaded file or action inside a website. A useful comparison asks which layer sees the activity and what it can do about it. Several controls can be relevant to the same employee workflow.",
          "Evaluate each control against the task it can perform. A DNS filter cannot verify account permissions or test recovery, and email filtering cannot cover every destination opened outside email. Keeping those questions separate makes the coverage easier to check.",
          "For an accounting firm, that means reviewing the whole document-sharing workflow. The message arrives, the employee follows a link and a sign-in screen appears. Ask who handles a reported message, what protects the destination and how the account is protected if the employee submits credentials."
        ],
        "table": {
          "caption": "Separate DNS filtering from other protections",
          "headers": [
            "Control",
            "Primary decision",
            "Question to ask the provider"
          ],
          "rows": [
            [
              "DNS filtering",
              "Allow or block a domain lookup",
              "Which devices use this policy away from the office?"
            ],
            [
              "Web filtering",
              "Allow or block web requests under the configured inspection model",
              "Can it distinguish specific URLs and what inspection does that require?"
            ],
            [
              "Email protection",
              "Identify or handle suspicious messages",
              "Which mailboxes and message paths are covered?"
            ],
            [
              "Endpoint detection and response",
              "Investigate suspicious device activity",
              "Who investigates and can contain the covered device?"
            ],
            [
              "Multifactor authentication",
              "Require additional sign-in verification",
              "Which accounts use a phishing-resistant method?"
            ]
          ]
        }
      },
      {
        "h": "Know the limits before setting expectations",
        "ps": [
          "A newly created malicious domain may not yet be recognized. A legitimate domain can also host a harmful page, and blocking the entire domain may interrupt useful work. Domain-level filtering has less detail than a control that can inspect the specific web request under an approved configuration.",
          "A filter's policy applies to traffic passing through its configured resolver. A device using another resolver, a browser's encrypted DNS setting or an application's lookup method may bypass that path. Ask IT to test the actual device controls and network design so remote and office coverage are supported by results.",
          "DNS encryption protects a lookup in transit to the resolver; filtering depends on the resolver's policy. A connection can therefore be encrypted while the requested domain is allowed without a security check. Ask about both properties when reviewing the configuration.",
          "The filter also needs a failure policy. If the service or network connection fails, some configurations permit an alternate path while others block access. Confirm the chosen behavior, its effect on business operations and how employees will get help. Do not accept an undocumented default for an office that depends on cloud applications."
        ]
      },
      {
        "h": "Map coverage before choosing a deployment",
        "ps": [
          "List the places your team works: the office, home, client premises and travel. Then list the device types used in those places. Include managed workstations, approved personal devices, phones and office equipment. Distinguish devices you can configure from devices controlled by clients or other organizations.",
          "For every category, ask how its DNS requests reach the policy. Office network configuration can cover devices while they use that network. A supported device client may follow a laptop onto other networks. A guest device might receive a network policy without being enrolled as an employee device. Check the product's supported platforms and limitations.",
          "Verify representative devices in each work location and keep the results in a small coverage matrix. Pointing the office router at a filtering service establishes a configuration step, but some devices may still use another path. The tests need to show which requests actually reach the policy.",
          "For a hypothetical tax firm, the owner may discover that office desktops are covered but seasonal staff laptops are not. That finding gives the IT provider a concrete task: agree on an approved device model and test the missing coverage before those laptops access client information."
        ],
        "figure": {
          "src": "/images/resources/dns-filtering-small-business.svg",
          "alt": "A domain request travels from a covered device to a filtering resolver, which allows or blocks it under policy; an owner reviews exceptions and suspicious activity.",
          "caption": "The policy applies to requests that reach the filtering resolver. Verify coverage in each work location."
        }
      },
      {
        "h": "Start with security policies and controlled exceptions",
        "ps": [
          "Begin with the threats you want to reduce and the applications staff need. Your IT provider can help select the security categories appropriate to your work. Test them with a representative group before extending the policy to everybody. Keep an approved rollback method in case essential work is blocked.",
          "Have the business decide content restrictions separately from security categories. Blocking social media, for example, can interrupt recruiting or client communication. Explain the reason for the restriction and identify who can approve an exception before the technical rollout changes what employees can access.",
          "An exception should have a business reason, an approver and a review date. Allowing a whole category because one useful site was blocked can create unnecessary exposure. Where the product supports it, scope the exception to the needed destination and the people who use it.",
          "Review urgent requests without telling employees to disable protection. Give them a clear reporting route and a way to explain the blocked task. The person reviewing the request should check the destination through an approved method before releasing it. A familiar logo or a message saying the site is essential is not enough evidence."
        ]
      },
      {
        "h": "Run a rollout that employees can work with",
        "ps": [
          "Choose a pilot group that reflects your business rather than only IT staff. Include a remote worker and someone who uses the client portals or financial applications that generate the most support requests. Record which operating systems, browsers and networks the pilot covers.",
          "Use the provider's harmless test destinations to verify blocking. Do not ask employees to browse known malicious sites. Check that an approved destination loads, the test block appears and the support instructions on the block page are usable. Then repeat the checks away from the office on supported managed devices.",
          {
            "list": [
              "Confirm the policy owner and the person who handles urgent exceptions.",
              "Record devices and networks included in the pilot.",
              "Test approved business applications and harmless provider test domains.",
              "Review browser DNS settings and alternate lookup paths with IT.",
              "Document service-failure behavior and the rollback procedure.",
              "Tell employees what a block means and how to report an interrupted task.",
              "Expand coverage after the pilot findings have owners and resolutions."
            ]
          },
          "Keep a dated device list and the test results, including excluded device types. Those records show what was checked; a subscription-page screenshot shows only the purchased service. The business can then decide whether to add coverage for excluded devices or restrict the work done on them."
        ]
      },
      {
        "h": "Make reporting useful without collecting unnecessary detail",
        "ps": [
          "DNS logs can reveal information about work patterns and services accessed. Decide who can view them, how long they are retained and what the business needs them for. Review the provider's data handling and administrative access before enabling broad reporting.",
          "Explain changes in blocked-request counts before using them in leadership reports. A higher total may reflect more enrolled devices, a policy change or repeated background requests. Show the covered population and policy context, and flag events that need investigation. The count alone is not a reliable measure of attacks prevented.",
          "Your operational report can record the covered device categories, last successful check, open exceptions and service interruptions. Add confirmed security incidents separately. This distinguishes routine blocked requests from breaches while keeping a reporting route for serious events.",
          "Review the policy when you change IT providers, add a location or introduce a device platform. Those changes can alter which requests reach the filter. Include the review when reconciling employee accounts and devices so coverage is checked against how the business now works."
        ]
      },
      {
        "h": "Questions to bring to a provider conversation",
        "ps": [
          "Ask how coverage works for home and traveling staff, which platforms are supported and how the provider verifies that the client remains active. Request an explanation of alternate DNS paths and encrypted DNS behavior in your intended configuration. The answer should identify what your IT team must maintain.",
          "Discuss response responsibilities as well as licensing. Find out who reviews suspicious repeated lookups, how they distinguish background application activity from an incident and who can isolate a device if needed. A DNS filtering subscription does not automatically include managed investigation.",
          "Ask how a wrongly blocked client portal is reported and restored to use, who approves exceptions and when they expire. Check whether reports distinguish a device excluded from coverage from one that has stopped checking in. These details show how each proposal handles interrupted work and missing coverage."
        ]
      },
      {
        "h": "Where DNS filtering fits in Helm's approach",
        "ps": [
          "Helm's recurring services cover defined email, device, identity, cloud-backup, awareness and digital-risk capabilities. DNS filtering should be evaluated against your existing IT controls and the signed service scope. This guide does not add DNS filtering to Core or Command or offer it as a new standalone Helm service.",
          "Your IT provider normally owns network administration and the configuration work discussed here. Helm can coordinate relevant security questions within an agreed engagement. Confirm that ownership before choosing a product, especially if several providers would need to act on the same alert.",
          {
            "text": "Bring your coverage matrix and exception process to a scope conversation with Helm. Identify which work locations lack protection and who will close each gap. A public email-domain scan cannot test whether your laptops use a DNS filtering policy.",
            "links": [
              {
                "phrase": "scope conversation with Helm",
                "to": "/contact/"
              }
            ]
          }
        ]
      }
    ],
    "takeaway": "DNS filtering checks domain lookups against security or content policies and can block requests to disallowed destinations. It adds a useful layer when it covers the devices and networks your team uses. Confirm remote coverage, approved DNS paths, exception handling and reporting before treating it as an operating security control.",
    "organizationByline": true,
    "hideVisual": true,
    "readingLayout": true,
    "consultation": {
      "title": "Confirm who owns the next step.",
      "sub": "Bring your current provider responsibilities and the unanswered security question. We will help clarify fit and scope.",
      "label": "Discuss your security scope",
      "to": "/contact/"
    }
  },
  {
    "slug": "network-hardening-small-business",
    "title": "Network Hardening for Small Business: A Checklist Your IT Provider Can Use",
    "metaTitle": "Network Hardening Checklist for Small Business | Helm",
    "metaDesc": "Use a network hardening checklist to review exposed services, administrator access, guest isolation, firmware and verification with your IT provider.",
    "date": "2026-10-07",
    "readMin": 9,
    "lane": "Small business",
    "laneTo": "/professional-services/",
    "intro": "A firewall and separate Wi-Fi names do not establish which systems can reach each other. Ask whether a visitor can reach the file server, who can change the firewall and whether a vendor's remote access ends after the job. Those questions give your IT provider specific boundaries to check.",
    "lead": [
      "Network hardening is the work of reducing unnecessary access and maintaining safer configurations. For a small business, it starts with an accurate inventory and an IT owner who can make and verify changes. You do not need to choose every technical setting yourself. You do need a clear account of what your provider protects, what remains exposed and which exceptions you approved."
    ],
    "sections": [
      {
        "h": "Start with a map of business work",
        "ps": [
          "Have IT inventory routers, firewalls, switches, access points and the systems connected to them. Include printers, cameras and equipment supplied by a building or communications vendor. Record ownership and support status so each category has someone responsible for the hardening work.",
          "Use business work to explain the connections each device needs. An accounting firm might require tax software, a document server, printers and client portals; a conference-room display needs fewer paths. IT can use those requirements to permit needed traffic and restrict unrelated connections.",
          "List remote connections separately. Identify the people and vendors who can use them, the systems they can reach and how their access is approved. An old remote-support arrangement can outlast both the employee who requested it and the business reason for keeping it.",
          "Keep that map current as devices, support arrangements and access responsibilities change. During a change or investigation, IT needs to know who owns a device and which connections still have a business purpose. Keep the diagram simple and its records current so IT can use it during that work."
        ]
      },
      {
        "h": "Reduce unnecessary exposure first",
        "ps": [
          "Review which services are reachable from the internet and why. Include remote access, administrative interfaces and any systems intentionally published for customers. Your IT provider should compare the intended exposure with what an authorized external check finds.",
          "Check application dependencies before IT removes obsolete services or forwarding rules through change control. Record the proposed change, its expected effect and how IT will test that required business functions still work. That check reduces the chance of closing a connection a business application still needs.",
          "For remote access, confirm support, authentication and the permissions granted, then identify its current owner. Record how access ends with the engagement. An arrangement with a familiar vendor still needs those checks.",
          {
            "text": "CISA's infrastructure hardening guidance covers management access, segmentation and device security. Use it as technical reference material for your IT provider. The exact configuration still needs to reflect your equipment and the work your business must perform.",
            "links": [
              {
                "phrase": "CISA's infrastructure hardening guidance",
                "to": "https://www.cisa.gov/resources-tools/resources/enhanced-visibility-and-hardening-guidance-communications-infrastructure"
              }
            ]
          }
        ]
      },
      {
        "h": "Protect the people who can change the network",
        "ps": [
          "Administrative access can change the protections for everyone using the network. Ask which accounts can manage the firewall, wireless system and remote-access service. Where the equipment supports it, prefer individual access that can be traced to a named person, with permissions limited to that person's responsibilities.",
          {
            "text": "Use multifactor authentication for supported management services. CISA recommends phishing-resistant MFA for businesses. Ask IT which administrative accounts support that method and which need a documented interim control because the platform cannot support it.",
            "links": [
              {
                "phrase": "CISA recommends phishing-resistant MFA",
                "to": "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication"
              }
            ]
          },
          "Plan recovery access without turning it into routine shared access. Define who may retrieve emergency credentials, how use is logged and when credentials must change. Keep them in the approved credential system, outside articles, shared planning documents and ordinary email.",
          "When a provider or employee leaves, review administrative accounts and remote connections together. Removing an email account does not necessarily remove access to a separately managed firewall portal. Offboarding should cover those systems explicitly and leave a dated record of the checks."
        ]
      },
      {
        "h": "Separate devices by the access they need",
        "ps": [
          "Network segmentation divides systems into groups and controls traffic between them. A small office might separate employee devices, guests and equipment such as cameras or building controls. The goal is to limit unnecessary reach if a device is misconfigured or compromised.",
          "Ask the provider to test guest isolation, not merely show a separate Wi-Fi name. The underlying rules must let the guest reach the internet while blocking the internal systems you intend to protect.",
          "This is an illustrative model, not a configuration to copy into a production network. Your IT provider needs to account for device discovery, printing, voice systems and application dependencies. Keep allowed connections specific enough to understand and test.",
          "If segmentation interrupts a needed workflow, have IT identify its required connection. Keep any temporary broader rule documented with the approving owner and review date, rather than leaving unrestricted access as the permanent fix."
        ],
        "table": {
          "caption": "Separate devices by the access they need",
          "headers": [
            "Device group",
            "Intended access in an illustrative office",
            "Verification question"
          ],
          "rows": [
            [
              "Managed employee workstations",
              "Approved business applications and required internal services",
              "Can staff perform their work under the assigned rules?"
            ],
            [
              "Guest devices",
              "Internet access",
              "Can a guest reach an internal file server or management page?"
            ],
            [
              "Printers and office equipment",
              "Required management and business connections",
              "Are unnecessary connections to sensitive systems blocked?"
            ],
            [
              "Network administrators",
              "Approved management interfaces",
              "Is access attributable and restricted to authorized administrators?"
            ]
          ]
        },
        "figure": {
          "src": "/images/resources/network-hardening-small-business.svg",
          "alt": "Illustrative network groups: employee devices use required services, guests use the internet with internal isolation, and office equipment uses documented connections with restricted management.",
          "caption": "Illustrative groups, not a production configuration. Your IT provider must define and test the connections each group needs."
        }
      },
      {
        "h": "Keep network devices supported and maintained",
        "ps": [
          "Network equipment needs software maintenance just as workstations do. Ask your provider how it tracks firmware versions, security updates and vendor support dates. A device that still passes traffic can be beyond its supported life and no longer receive the fixes your business expects.",
          "Plan an update around the work a restart affects. A firewall restart may interrupt cloud software, remote staff and phones together. Record the maintenance window and rollback method, and confirm that the provider can restore the previous configuration if behavior changes unexpectedly.",
          "Remove unused management services and replace default credentials under the approved setup process. Check which interfaces are enabled and whether management is restricted to the intended administrators and network paths. The list will differ by equipment, so keep manufacturer documentation with the change record.",
          "For a replacement decision, consider support, compatibility and recovery requirements. The fastest advertised throughput is only one factor. Your provider should explain whether the device can enforce the intended policies, retain useful logs and restore its configuration without depending on an unavailable administrator."
        ]
      },
      {
        "h": "Plan changes so security and daily work improve together",
        "ps": [
          "Start with the finding and the proposed fix. For example, guest devices can reach an internal printer management interface, and IT proposes a rule that blocks that path. Identify who may be affected and what the test will demonstrate.",
          "Save the configuration using the provider's approved process before making the change. Agree on when to roll back and who can authorize it. A backup of settings is useful only if someone can access it and knows how to restore it on the equipment you use.",
          "Test both outcomes after the change: the prohibited path should fail and the required business function should still work. Keep the results with the change record. Saving a configuration stores the rule; the connection tests show how the network behaves.",
          "Do not test network boundaries through unauthorized scanning or experimentation on somebody else's systems. Define the devices, accounts and connections included in the check. Your IT provider should choose methods appropriate to the equipment and the operational risk."
        ]
      },
      {
        "h": "Use a checklist with owners and evidence",
        "ps": [
          "The business owner and IT provider can work through the following items together. Record who will perform each check, the date and any unresolved issue. A finding without an owner is likely to remain open until the next review repeats it.",
          {
            "list": [
              "Maintain an inventory of network devices and their support status.",
              "Review public services and remove obsolete exposure through change control.",
              "Reconcile administrator accounts with current staff and provider responsibilities.",
              "Check MFA and recovery access for supported management services.",
              "Verify guest isolation and the intended boundaries for equipment groups.",
              "Review remote vendor access and remove arrangements that have ended.",
              "Schedule supported firmware updates and document material exceptions.",
              "Save configuration backups and confirm the authorized recovery process.",
              "Test permitted and prohibited connections after material changes.",
              "Review logs and escalation responsibilities for events that need investigation."
            ]
          },
          "Describe why an exception remains open. A replacement might depend on application compatibility, budget or an office move. That dependency gives leadership a basis for deciding timing and temporary safeguards, beyond a note that the device is old or the rule is required."
        ]
      },
      {
        "h": "A workable review cadence",
        "ps": [
          "Choose a review cadence around network changes and written requirements. For planning, maintain inventory and support information during normal IT work, review access after staff or vendor changes and check boundaries after material network changes. This is not a universal compliance schedule.",
          "Use a periodic leadership review to discuss unresolved exposure and replacement decisions. Bring the list of exceptions, the business reasons and the choices that need approval. Leadership does not need every rule entry, but it needs enough information to understand the consequence of postponing work.",
          "A hypothetical accounting firm might put disruptive maintenance outside filing deadlines while removing obsolete remote access sooner. That choice reflects its workflow and exposure. An urgent fix still needs a risk review and, where appropriate, a temporary safeguard before it is postponed.",
          "When you add a location, move offices or change IT providers, treat the transition as a review trigger. Confirm that the new environment preserves the intended boundaries. Retain enough documentation for the incoming provider to identify equipment and dependencies without relying on the memory of someone who has left."
        ]
      },
      {
        "h": "Keep responsibilities clear when security providers work with IT",
        "ps": [
          "Network hardening involves configuration, maintenance and recovery work normally owned by your internal IT team or existing IT provider. Helm is a security provider that works alongside that team. Its recurring service scope does not transfer routine network administration or patching to Helm.",
          "If a relevant risk falls within Command's agreed program work, Helm can track its priority, owner and evidence. The authorized IT owner still changes the firewall. Specialist testing or a network project needs a separate scope decision before work begins.",
          {
            "text": "Bring your current network questions to Helm with the inventory, existing provider responsibilities and any findings you can share securely. Begin with the unresolved access question that affects your business. The result should be a named next action and a way to verify that the intended boundary works.",
            "links": [
              {
                "phrase": "Bring your current network questions to Helm",
                "to": "/contact/"
              }
            ]
          }
        ]
      }
    ],
    "takeaway": "Harden a business network by documenting connected systems, removing unnecessary exposure, protecting administrative access and separating devices according to their needs. Back up configurations and test the intended boundaries after changes. Keep routine network administration with a named IT owner and review exceptions as the business changes.",
    "organizationByline": true,
    "hideVisual": true,
    "readingLayout": true,
    "consultation": {
      "title": "Confirm who owns the next step.",
      "sub": "Bring your current provider responsibilities and the unanswered security question. We will help clarify fit and scope.",
      "label": "Discuss your security scope",
      "to": "/contact/"
    }
  },
  {
    "slug": "disaster-recovery-small-business",
    "title": "Disaster Recovery for Small Business: A Plan You Can Test",
    "metaTitle": "Disaster Recovery for Small Business: A Tested Plan | Helm",
    "metaDesc": "Build a small-business disaster recovery plan around critical workflows, recovery targets, protected backups, named owners and restoration tests.",
    "date": "2026-10-07",
    "readMin": 10,
    "lane": "Small business",
    "laneTo": "/professional-services/",
    "intro": "Imagine an accounting firm whose client files are unavailable on Monday. Backup jobs succeeded, but the restore operator is away and the tax application depends on a failed server. Staff can use email and still cannot complete the work. A disaster recovery plan needs to cover those dependencies as well as the backup.",
    "lead": [
      "Disaster recovery planning connects your data, systems and people to the work that must resume. For a small business, start with one critical workflow and test how you would restore it. Expand the plan as you learn which dependencies and decisions affect the recovery time."
    ],
    "sections": [
      {
        "h": "Define the work that needs to resume",
        "ps": [
          "List the business work that must resume: receiving client documents, preparing returns, running payroll or communicating with clients. Each activity may depend on several systems and outside providers. Prioritize recovery by the consequence of interruption, then identify the servers and services it needs.",
          "For each activity, identify the application, stored information, sign-in service, network connection and people it needs. Include practical dependencies such as access to a license portal or an approved replacement workstation. A restored database will not help staff if they cannot authenticate to the application that uses it.",
          "Have the staff who perform the workflow check its dependencies. The IT inventory may identify the application but miss a spreadsheet or shared mailbox needed to complete a task before its deadline. Locate those records and confirm that the intended backup includes them before treating the inventory as complete.",
          "Start with the activities that have the greatest business consequences. You can build a useful first plan around a small number of workflows instead of attempting to document every device at once. Record the excluded work so the initial scope remains clear."
        ]
      },
      {
        "h": "Set recovery time and data-loss targets",
        "ps": [
          "A recovery time objective, often called RTO, expresses the target for restoring an affected service or workflow. A recovery point objective, or RPO, describes the acceptable loss of recent data measured in time. These targets help choose a recovery design and evaluate whether a test met the business need.",
          {
            "text": "NIST's contingency planning guide explains business impact analysis and recovery planning for federal information systems. A small business can adapt the planning concepts to its own operations. The guide's federal context does not automatically impose its requirements on your company.",
            "links": [
              {
                "phrase": "NIST's contingency planning guide",
                "to": "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final"
              }
            ]
          },
          "Suppose a hypothetical firm wants a document workflow restored within four hours and can tolerate losing up to one hour of recent changes. Those are illustrative targets, not results that Helm promises. The IT provider needs to evaluate whether the actual backup schedule, infrastructure and staffing can meet them.",
          "Ask leadership to approve priorities for busy periods as well as ordinary work. Several hours without access near a filing deadline can have different consequences from an interruption in a quieter week. IT should check whether the targets are feasible before they become commitments in the plan."
        ],
        "figure": {
          "src": "/images/resources/disaster-recovery-small-business.svg",
          "alt": "Illustrative recovery timeline: an RPO of one hour describes acceptable loss before failure, while an RTO of four hours describes the target for restoring the workflow after interruption.",
          "caption": "The one-hour RPO and four-hour RTO are hypothetical business targets. They are not measured results or Helm guarantees."
        }
      },
      {
        "h": "Understand the difference between backup and recovery",
        "ps": [
          "A backup is a copy you can use for restoration under the product's supported conditions. A recovery plan covers the steps and dependencies needed to resume work. It may require rebuilding a device, restoring application data, verifying access and checking that the workflow produces the right result.",
          "File synchronization can spread a deletion or unwanted change to connected devices. Retention can preserve certain information for a defined period, while a backup product has its own restoration methods and coverage. Examine the actual service documentation rather than assuming that all copies of data serve the same purpose.",
          "Ask the provider to demonstrate restoration for the systems in your workflow, using the comparison below to frame the discussion. A demonstration on a different application may explain the steps, but your team still needs evidence that its own workflow can be recovered."
        ],
        "table": {
          "caption": "Understand the difference between backup and recovery",
          "headers": [
            "What you have",
            "What it can help with",
            "What still needs checking"
          ],
          "rows": [
            [
              "A backup job marked successful",
              "Evidence that the configured job completed",
              "Whether critical data is included and can be restored"
            ],
            [
              "Cloud productivity backup",
              "Supported restoration of covered cloud data",
              "Application coverage, exclusions and recovery access"
            ],
            [
              "A replacement workstation",
              "A place for an employee to resume work",
              "Required software, identity access and restored information"
            ],
            [
              "A written recovery plan",
              "Assigned steps and decision responsibilities",
              "Whether people can perform those steps within the target"
            ]
          ]
        }
      },
      {
        "h": "Protect the recovery path",
        "ps": [
          "An attacker who can change backup settings or delete recovery copies can affect your ability to recover. Review administrative access to the backup service separately from ordinary employee access. Confirm how authorized people reach the service if the primary sign-in system is unavailable or compromised.",
          {
            "text": "CISA's ransomware guidance recommends protected backups and recovery testing. Ask your provider which protections apply to your chosen system, including isolation or immutability where supported. A product label is less useful than an explanation of what an administrator or attacker can change.",
            "links": [
              {
                "phrase": "CISA's ransomware guidance",
                "to": "https://www.cisa.gov/stopransomware/ransomware-guide"
              }
            ]
          },
          "Keep recovery instructions available to the authorized people during an outage. A plan stored only on the failed server cannot help them. Use an approved access-controlled location and an appropriate offline copy if your recovery design calls for one. Keep credentials in the approved credential system rather than inside the plan.",
          "Establish who authorizes emergency access and how it is reviewed afterward. The backup administrator, incident responder and business decision-maker may be different people. Define their handoff so an urgent restore includes the required decisions about compromised accounts and potentially contaminated systems."
        ]
      },
      {
        "h": "Assign responsibilities before something breaks",
        "ps": [
          "Name the business leader who prioritizes workflows and authorizes recovery actions that disrupt normal operations. Identify the IT owner who diagnoses the system failure and performs restoration. Record who coordinates security containment when suspicious activity may be involved. Include alternates for the people whose absence would delay the work.",
          "The cause of the interruption affects recovery. Equipment failure may allow a straightforward restore. Encrypted files or compromised accounts require the team to consider the cause, persistence and suitability of the recovery point before reconnecting systems. Keep those security decisions in the restoration path.",
          "Define an escalation route when the cause is unclear. Staff should know whom to contact and what information to preserve. An employee should not be expected to decide independently whether to rebuild a device or delete evidence after seeing unusual activity.",
          "Review responsibilities with outside providers. Your application vendor may restore its hosted platform but leave your local data and employee access to another team. Document what the provider will do, how to contact it during an interruption and which tasks remain with your business."
        ]
      },
      {
        "h": "Build a runbook for one critical workflow",
        "ps": [
          "Choose a workflow that staff can verify safely. Write the activation trigger, the systems involved and the approved restoration method. Include the decision about where to restore data and how the team will avoid overwriting current production work during a test.",
          "Put dependencies in the order the operator needs them. For example, identity access may have to work before an employee can sign into the restored application and verify its records. Include that business verification alongside the technical restore, with the person who uses the recovered information checking the result.",
          {
            "list": [
              "Identify the interruption and contact the named business and IT owners.",
              "Determine whether security containment or evidence preservation is needed.",
              "Confirm the affected workflow and the approved recovery target.",
              "Select a suitable recovery point under the system's supported process.",
              "Restore in the approved environment using authorized access.",
              "Verify data, permissions and the required business transaction.",
              "Obtain approval before returning the restored workflow to normal use.",
              "Record the result, remaining issues and changes to the plan."
            ]
          },
          "Use this as a planning sequence, not an executable procedure for every platform. Your IT owner should supply the actual product steps and safe testing method. Some systems require specialist vendor support or application-specific checks that a general checklist cannot provide."
        ]
      },
      {
        "h": "Test more than whether a file opens",
        "ps": [
          "A useful restoration test has a defined scope, an expected result and a person who can judge that result. Choose a safe copy of representative information. Confirm that the recovery environment is appropriately protected and that the test will not expose client data unnecessarily.",
          "Measure elapsed time from the agreed starting point, including authorization, access recovery, data transfer and application setup where the scenario requires them. List any steps excluded from the test. Otherwise leadership may read a partial technical measurement as the full time needed to resume work.",
          "Ask a staff member to complete a representative task in the recovered workflow. Opening a file confirms less than retrieving the required documents with the right permissions and completing the expected application action. Check record dates and completeness against the approved recovery point.",
          "Assign an owner and a corrective action to each failed step. An expired support contact, unavailable administrator or missing backup dependency can delay recovery even when restoration software works. Fix the issue, repeat the affected check and retain the result so the next review can distinguish tested capability from the original plan."
        ]
      },
      {
        "h": "Use a small worksheet to guide the review",
        "ps": [
          "For each critical workflow, record its business owner, technical owner, recovery-time target and acceptable data loss. Add the backup coverage, recovery location, last test date and test result. Keep unresolved dependencies visible rather than leaving the corresponding field blank.",
          "Suppose an accounting firm's worksheet shows tested cloud-document recovery but no restoration test for its local tax application. In this hypothetical example, the next decision is to ask IT for a scoped test of that application. More cloud storage would not establish whether that workflow can resume.",
          "Review the worksheet after changing applications, providers or office infrastructure. New software can introduce a different database, sign-in dependency or backup requirement. Include recovery review in the change process so the plan does not drift behind the systems staff use.",
          "Choose testing frequency according to the importance of the workflow, rate of change and any written requirements that apply. This article does not prescribe a universal compliance schedule. Start with the highest consequence untested workflow and agree on the next review date with its owner."
        ]
      },
      {
        "h": "Plan communication while recovery is underway",
        "ps": [
          "Name who updates staff and where they can receive those updates if normal email or collaboration tools are unavailable. Give employees clear instructions about affected work, temporary arrangements and the next update. Avoid sending speculative causes or recovery times that the technical team has not confirmed.",
          "Assign someone to handle client updates with the appropriate advisers and procedures. An interruption and a confirmed information disclosure may call for different communications. The recovery plan can name those duties; notification obligations need a separate assessment of the facts and applicable rules.",
          "Keep temporary workarounds controlled. Moving client documents to personal accounts or unapproved services can create a second problem during the outage. Agree in advance on the tools and access the business may use while a critical workflow is unavailable."
        ]
      },
      {
        "h": "Where Helm fits in recovery planning",
        "ps": [
          "Helm Core includes supported cloud productivity backup within its covered scope. That does not establish backup or recovery coverage for every server, tax application, network device or workstation image. Confirm the actual systems and exclusions before making statements to a customer or insurer.",
          "Command's agreed security-program work includes evidence upkeep, a risk register and an annual tabletop. Use the tabletop to examine decisions and coordination. A technical restoration test separately checks whether specified data and systems can be recovered. Both can support planning, with each supplying evidence for a different question.",
          {
            "text": "Your existing IT provider retains routine administration and the work it has agreed to perform. Bring the recovery worksheet to a conversation with Helm so the covered security work and remaining IT tasks can be coordinated. Start with one workflow, one owner and one test that demonstrates staff can resume useful work.",
            "links": [
              {
                "phrase": "conversation with Helm",
                "to": "/contact/"
              }
            ]
          }
        ]
      }
    ],
    "takeaway": "A small-business disaster recovery plan should name the work to restore, acceptable interruption and data loss, responsible people, required systems and a tested restoration method. Backups supply recovery data. The plan explains how authorized people use that data to resume work safely and confirm that the result is usable.",
    "organizationByline": true,
    "hideVisual": true,
    "readingLayout": true,
    "consultation": {
      "title": "Confirm who owns the next step.",
      "sub": "Bring your current provider responsibilities and the unanswered security question. We will help clarify fit and scope.",
      "label": "Discuss your security scope",
      "to": "/contact/"
    }
  }
];
