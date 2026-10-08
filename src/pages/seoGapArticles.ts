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
    "intro": "A vulnerability scan helps you find recognized weaknesses to review and repair. A penetration test investigates how an attacker could use weaknesses within an agreed part of your business. That difference affects what you should buy: recurring checks of known issues, an investigation of particular attack paths, or both.",
    "lead": [
      "Start with the question you need answered, then compare proposals. The systems covered, the work a tester is allowed to perform and the evidence you receive determine whether an engagement can answer it. Buying a scan does not establish that you received a penetration test."
    ],
    "sections": [
      {
        "h": "What a vulnerability scan tells you",
        "ps": [
          "A scanner tests systems it can reach for weaknesses it recognizes. What it finds depends on its configuration: it may check exposed services, software vulnerabilities or particular configuration problems. An authenticated scan uses approved credentials to inspect information an outside observer cannot see. An unauthenticated scan checks only what is visible without signing in.",
          "This affects how you use the results. An external scan of public systems cannot tell you whether office laptops have current software. An internal authenticated scan can inspect more of those devices, but only if they are reachable, the credentials work and the scanner supports them. Before treating two reports as equivalent, check that they had equivalent access and coverage.",
          "A report should tell you which systems were scanned, when the scan ran, which checks succeeded and which were missed. No findings can mean the environment is well maintained. It can also mean authentication failed and coverage was incomplete. Ask your IT provider to explain which applies before using the result as evidence.",
          "Repeated scans help you track whether confirmed problems get fixed. Give each finding an owner, a target date and a way to verify the repair, and track exceptions separately. When the same issue appears in several reports, find out why it remains open. Another report alone will not resolve it."
        ]
      },
      {
        "h": "What a penetration test adds",
        "ps": [
          "In a penetration test, authorized testers investigate how weaknesses could affect the systems in scope. They may use automated tools, manual investigation and controlled exploitation. For example, they might examine whether exposed access combined with excessive permissions creates an attack path. The agreement and the environment determine which techniques they can use.",
          {
            "text": "NIST's technical testing guide describes vulnerability scanning and penetration testing as related assessment techniques with different strengths and limitations. A penetration test can use scanning as part of its discovery work. The question is what investigation follows and what the final report demonstrates.",
            "links": [
              {
                "phrase": "NIST's technical testing guide",
                "to": "https://csrc.nist.gov/pubs/sp/800/115/final"
              }
            ]
          },
          "Look for a report that explains what testers attempted and what they reached. Possible findings include an ordinary account accessing information outside its intended role, or a public application exposing a sensitive function. These examples describe the kind of evidence to look for; they are not findings about your business.",
          "A short engagement cannot prove that an organization has no weaknesses. An external network test does not automatically cover your web application, employees, cloud permissions or internal network. The report should state exclusions and explain where timing, access or operational restrictions limited the investigation."
        ]
      },
      {
        "h": "Compare the deliverables before comparing the price",
        "ps": [
          "A service name on a quote tells you little about the work. Ask for a sanitized sample report and have the provider explain how that engagement would answer your business question. Then compare proposals covering the same systems and testing boundaries. A narrow external test and an internal assessment covering several applications are different purchases.",
          "The agreed systems, access, testing depth and deliverables also affect price. A low quote alone does not show that you are buying a rebranded scan; a high quote alone does not establish quality. Compare the proposed method, who is responsible for the work and what evidence you will receive.",
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
          "Write down why you need the work before seeking quotes. A customer request, new application, recurring exposure or major infrastructure change may each call for a different scope. Make the reason specific. A customer asking for an independent test of the portal holding its documents gives the tester a clearer starting point than a general request to check security.",
          "If you are establishing a maintenance baseline, scanning can help organize known issues. If you are asking whether a signed-in user can reach another client's files, a focused application test may be more suitable. If a contract specifically requests penetration testing, a scan should not be presented as an equivalent without written acceptance from the requesting party.",
          "When the work is required by an insurer, customer or regulator, read the exact requirement. The frequency, independence, scope and evidence they expect can differ. Neither “small businesses only need scanning” nor “an annual penetration test covers every obligation” is a reliable substitute for that wording. Ask the party evaluating the result to clarify anything ambiguous.",
          "Where timing allows, repair known basic weaknesses before deeper testing. Testers can then spend more of the engagement examining the questions that remain. Keep material exceptions visible; the testing team needs to know which systems and risks the business has deliberately left unresolved."
        ]
      },
      {
        "h": "Build a scope your IT provider can review",
        "ps": [
          "Your IT provider needs an inventory of the proposed targets to review the scope. Include public addresses, domains, application names, cloud environments and internal systems where relevant, with an owner for each. Pay particular attention to third-party platforms: permission to test your company does not automatically authorize testing a platform that hosts part of your work.",
          "Agree on testing windows, emergency contacts and stop conditions. Discuss how the team will avoid unnecessary disruption and what it must do if it finds an urgent weakness. Production testing needs an escalation route that reaches a decision-maker while the work is happening.",
          "List the access testers will receive. Working without credentials gives them a different starting point from using an ordinary employee account or an administrator account. You may see the terms black box, gray box or white box in a proposal. Give your IT provider the actual access list so it can review what those labels mean for this engagement.",
          "The agreement should also address sensitive information. State how evidence will be collected, how much data may be accessed, where the report will be stored and when testing data will be removed. Use redacted examples where full records are unnecessary. Share the report only with people who need it to fix or evaluate the findings."
        ]
      },
      {
        "h": "A practical example for an accounting firm",
        "ps": [
          "Consider a hypothetical accounting firm with a client portal, cloud email and office workstations. Its IT provider already runs recurring scans and applies updates. A larger client asks whether the portal prevents one customer from accessing another customer's documents.",
          "A network scan can help confirm exposed services, but the customer's question concerns access between portal accounts. The firm could commission a portal test with approved test accounts and defined document boundaries. Its developer would then prepare a safe test environment or agree controlled production testing that meets the requirement.",
          "Suppose the test finds a permission problem. The developer would own the application fix, while the IT provider would check related configuration and the firm would decide how to handle business consequences. A retest should confirm the specific repair and consider whether similar functions have the same weakness. A clean network rescan would not establish that the application permission issue was resolved.",
          "The firm should assign those responsibilities before scheduling the test, including who approves the work. That way, a finding reaches someone who can authorize, implement and verify the repair."
        ]
      },
      {
        "h": "Use a findings worksheet to prevent stalled remediation",
        "ps": [
          "Create a record for each confirmed finding with its affected system, business consequence, responsible owner, target date and evidence needed for closure. Add a field for dependencies, such as a developer release or a vendor update. A manager should approve any accepted risk rather than allowing it to disappear from the list.",
          "A severity rating needs context. A weakness on a public system holding client documents may warrant a different priority from a similar issue on an isolated test device. Explain the affected system’s exposure and information to leadership when asking for an urgent repair or a decision to accept the risk.",
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
          "Before approving a testing proposal, ask for its coverage statement and sample report, then confirm who will handle findings. You need to know whether the engagement answers your question and whether the people responsible for repairs are ready to act on the results."
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
    "intro": "Will a DNS filter protect the team when they work away from the office? That's one of the first questions to settle before choosing a product. An office configuration can leave traveling laptops outside its coverage. A roaming device tool can close some of that gap, but somebody still needs to maintain the policy and review exceptions so employees can reach the services they need.",
    "lead": [
      "Consider an employee who follows a message that appears to come from a client to a document sign-in page. The filter may block the connection if its policy recognizes the destination as unsafe. Whether that happens depends on the device, network and DNS path. Reviewing those details tells you where the filter can help and where it leaves a gap."
    ],
    "sections": [
      {
        "h": "What DNS filtering does",
        "ps": [
          "When a browser requests a website, it needs the network address for that domain. DNS, the Domain Name System, helps it find the address through a lookup. The service that answers is called a resolver. A filtering resolver checks the domain against its policies before deciding whether to return the normal answer.",
          "The policies can block domains associated with phishing, malware infrastructure or other malicious activity. Some providers also offer category rules for content the business chooses to restrict. Those restrictions need a separate business decision: a product may enforce both policies, but deciding which sites are unsafe is different from deciding which sites employees may use at work.",
          {
            "text": "Cloudflare's DNS filtering documentation illustrates two deployment approaches: directing network DNS requests to the service and using a device client. Other providers use their own methods. Read the chosen provider's documentation rather than assuming every DNS filtering product behaves the same way.",
            "links": [
              {
                "phrase": "Cloudflare's DNS filtering documentation",
                "to": "https://developers.cloudflare.com/cloudflare-one/traffic-policies/get-started/dns/"
              }
            ]
          },
          "When the filter blocks a request, you still need to find out what generated it. It could come from a browser, a background application or a mistyped address. The block shows that a policy stopped that request; it does not, by itself, establish device infection or employee misconduct."
        ]
      },
      {
        "h": "Separate DNS filtering from other protections",
        "ps": [
          "A DNS filter usually makes its decision about a domain. That gives it a different view from controls that examine individual pages, downloaded files or actions inside a website. When comparing protections, ask what each one can see and what it can do with that information.",
          "For an accounting firm, a document-sharing workflow makes the distinction easier to follow. A message arrives, an employee follows its link and a sign-in screen appears. Who handles the message if the employee reports it? What protects the destination? If the employee submits credentials, how is the account protected? Several controls can apply to that same sequence.",
          "Each has limits. Email filtering cannot cover every destination opened outside email, while a DNS filter cannot verify account permissions or test recovery. Evaluate those tasks separately so one product's coverage does not stand in for the whole workflow."
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
          "A filter may allow a newly created malicious domain because it has not yet been recognized. A harmful page can also sit on a legitimate domain. Blocking that whole domain may interrupt useful work, which is one reason to understand the filter's level of detail: a control that can inspect the specific web request under an approved configuration has more detail than a domain-level filter.",
          "The policy only applies to traffic passing through its configured resolver. Another resolver, a browser's encrypted DNS setting or an application's lookup method may take requests around it. Ask IT to test the device controls and network design in use, both at the office and remotely. Those results establish the coverage you can rely on.",
          "For encrypted DNS, encryption protects the lookup while it travels to the resolver. Filtering depends on what that resolver's policy does with the request, so an encrypted connection can still allow a domain without a security check. Ask about both when reviewing the configuration.",
          "What happens if the filtering service or network connection fails? Some configurations permit an alternate path; others block access. For an office that depends on cloud applications, that choice can affect whether people can work. Have the provider document the chosen behavior and explain how employees will get help during a failure."
        ]
      },
      {
        "h": "Map coverage before choosing a deployment",
        "ps": [
          "List the places your team works: the office, home, client premises and travel. Then list the device types used in those places. Include managed workstations, approved personal devices, phones and office equipment. Distinguish devices you can configure from devices controlled by clients or other organizations.",
          "For every category, ask how its DNS requests reach the policy. Office network configuration can cover devices while they use that network. A supported device client may follow a laptop onto other networks. A guest device might receive a network policy without being enrolled as an employee device. Check the product's supported platforms and limitations.",
          "Next, test representative devices in each work location and keep the results in a small coverage matrix. Configuring the office router to use the filtering service is a step toward coverage. Some devices may still use another path, so the tests need to show which requests actually reach the policy.",
          "Suppose a tax firm finds that the filter covers its office desktops but misses the laptops used by seasonal staff. The owner and IT provider then have a specific gap to resolve: agree on an approved device model and test that missing coverage before the laptops access client information."
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
          "Start with the threats you want to reduce and the applications staff need to use. Your IT provider can help choose appropriate security categories, which a representative group should test before the policy reaches everybody. Agree on a rollback method too, in case the rollout blocks essential work.",
          "Have the business decide content restrictions separately from security categories. Blocking social media, for example, can interrupt recruiting or client communication. Explain the reason for the restriction and identify who can approve an exception before the technical rollout changes what employees can access.",
          "When somebody needs an exception, record the business reason, who approved it and when it should be reviewed. Allowing an entire category because one useful site was blocked can create unnecessary exposure. Where the product supports it, limit the exception to that destination and the people who need it.",
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
          "Keep the dated device list with the test results, including any device types the rollout excludes. A subscription-page screenshot tells you which service was purchased. The list and tests tell you what was checked, giving the business a basis for deciding whether to cover the excluded devices or restrict the work done on them."
        ]
      },
      {
        "h": "Make reporting useful without collecting unnecessary detail",
        "ps": [
          "DNS logs can reveal information about work patterns and services accessed. Decide who can view them, how long they are retained and what the business needs them for. Review the provider's data handling and administrative access before enabling broad reporting.",
          "A rise in blocked requests needs an explanation before it goes into a leadership report. Did more devices join the service? Did a policy change, or did an application repeatedly make the same background request? Show the covered population and policy context, and flag events that need investigation. The total alone cannot reliably tell you how many attacks were prevented.",
          "An operational report can track covered device categories and the last successful coverage check, along with open exceptions and service interruptions. Record confirmed security incidents separately so routine blocks are not reported as breaches and serious events still have a reporting route.",
          "Review the policy when you change IT providers, add a location or introduce a device platform. Those changes can alter which requests reach the filter. Include the review when reconciling employee accounts and devices so coverage is checked against how the business now works."
        ]
      },
      {
        "h": "Questions to bring to a provider conversation",
        "ps": [
          "When discussing a proposal, ask the provider to explain how it covers staff at home and while traveling. Which platforms does it support, and how does it verify that the device client stays active? Have the provider explain alternate DNS paths and encrypted DNS behavior in your intended configuration, including what your IT team must maintain.",
          "Then ask who acts on suspicious repeated lookups. Someone needs to distinguish background application activity from an incident and know who can isolate a device if necessary. Confirm those response responsibilities alongside licensing, because a DNS filtering subscription does not automatically include managed investigation.",
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
    "takeaway": "DNS filtering checks domain lookups against security or content policies and can block requests to disallowed destinations. Its usefulness depends on whether the devices and networks your team uses actually send their requests through the filter. Before relying on it, confirm remote coverage and approved DNS paths, then agree on exception handling and reporting.",
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
    "intro": "A guest Wi-Fi network needs rules that keep visitors away from internal systems. A separate Wi-Fi name alone does not establish that boundary. The same applies to other access: your IT provider should be able to show who can change the firewall and how a vendor's remote access ends when the job is finished.",
    "lead": [
      "Reducing unnecessary access and maintaining safer configurations is called network hardening. For a small business, the starting point is an accurate inventory and an IT owner who can make changes and check that they work. As the business owner, you can leave the individual settings to that provider while asking for a clear account of what they protect, what remains exposed and which exceptions you approved."
    ],
    "sections": [
      {
        "h": "Start with a map of business work",
        "ps": [
          "Have IT inventory routers, firewalls, switches, access points and the systems connected to them. Include printers, cameras and equipment supplied by a building or communications vendor. Record ownership and support status so each category has someone responsible for the hardening work.",
          "The inventory becomes useful when it explains the work each connection supports. An accounting firm might need tax software, a document server, printers and client portals. A conference-room display needs fewer paths. Those requirements give IT a basis for permitting traffic and restricting connections that serve no business purpose.",
          "List remote connections separately. Identify the people and vendors who can use them, the systems they can reach and how their access is approved. An old remote-support arrangement can outlast both the employee who requested it and the business reason for keeping it.",
          "Keep the map simple enough to use during a change or investigation, and update its records as devices, support arrangements and access responsibilities change. IT needs to be able to identify the device's owner and the business purpose of its connections without reconstructing that history first."
        ]
      },
      {
        "h": "Reduce unnecessary exposure first",
        "ps": [
          "Review which services are reachable from the internet and why. Include remote access, administrative interfaces and any systems intentionally published for customers. Your IT provider should compare the intended exposure with what an authorized external check finds.",
          "An apparently obsolete forwarding rule may still support a business application. Before removing it, IT should check those dependencies through change control. The change record should explain what IT proposes to remove, the expected effect and the test that will confirm required business functions still work.",
          "For each remote-access arrangement, identify its current owner and confirm that the service is supported. Review how people authenticate, what permissions they receive and how access ends with the engagement. Familiarity with the vendor does not answer those access questions.",
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
          "Someone with administrative access can change the protections for everyone using the network. Start by identifying the accounts that manage the firewall, wireless system and remote-access service. Where the equipment supports individual access, use accounts attributable to a named person and limit their permissions to that person's responsibilities.",
          {
            "text": "Use multifactor authentication for supported management services. CISA recommends phishing-resistant MFA for businesses. Ask IT which administrative accounts support that method and which need a documented interim control because the platform cannot support it.",
            "links": [
              {
                "phrase": "CISA recommends phishing-resistant MFA",
                "to": "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication"
              }
            ]
          },
          "Emergency credentials need a recovery process of their own. Decide who may retrieve them, how their use is logged and when they must change, so recovery access does not become routine shared access. Store them in the approved credential system, outside articles, shared planning documents and ordinary email.",
          "When a provider or employee leaves, review administrative accounts and remote connections together. Removing an email account does not necessarily remove access to a separately managed firewall portal. Offboarding should cover those systems explicitly and leave a dated record of the checks."
        ]
      },
      {
        "h": "Separate devices by the access they need",
        "ps": [
          "Network segmentation divides systems into groups and controls traffic between them. A small office might separate employee devices, guests and equipment such as cameras or building controls. The goal is to limit unnecessary reach if a device is misconfigured or compromised.",
          "For guest Wi-Fi, ask the provider to demonstrate the boundary with a connection test. The rules should allow internet access while blocking the internal systems you intend to protect. A separate network name cannot show whether those rules work.",
          "The model below is illustrative and should not be copied into a production network. Your IT provider needs to account for device discovery, printing, voice systems and application dependencies when defining the groups. Each allowed connection should be specific enough to understand and test.",
          "If segmentation interrupts a needed workflow, IT should identify the connection that workflow requires. A temporary broader rule needs an approving owner and a review date. Without that record, unrestricted access can remain after the immediate problem is resolved."
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
          "A device can still pass traffic after its vendor stops supporting it. That makes support status part of the maintenance decision, alongside firmware versions and security updates. Ask your provider how it tracks each of these for network equipment, which needs software maintenance just as workstations do.",
          "A firewall restart may interrupt cloud software, remote staff and phones at the same time. Plan the update around that disruption, with a recorded maintenance window and rollback method. Confirm that the provider can restore the previous configuration if behavior changes unexpectedly.",
          "Remove unused management services and replace default credentials under the approved setup process. Check which interfaces are enabled and whether management is restricted to the intended administrators and network paths. The list will differ by equipment, so keep manufacturer documentation with the change record.",
          "When deciding whether to replace a device, ask about support, compatibility and recovery as well as advertised throughput. The provider should explain whether the replacement can enforce your intended policies and retain useful logs. It also needs a way to restore its configuration without depending on an administrator who may be unavailable."
        ]
      },
      {
        "h": "Plan changes so security and daily work improve together",
        "ps": [
          "A change record should connect the finding to a proposed fix. For example, suppose guest devices can reach an internal printer management interface. IT proposes a rule to block that path, identifies who may be affected and defines the test that will demonstrate the result.",
          "Save the configuration using the provider's approved process before making the change. Agree on when to roll back and who can authorize it. A backup of settings is useful only if someone can access it and knows how to restore it on the equipment you use.",
          "After the change, test the prohibited path and the required business function. The first should fail; the second should still work. Keep those results with the change record so there is evidence of how the network behaves, alongside the saved configuration that stores the rule.",
          "Do not test network boundaries through unauthorized scanning or experimentation on somebody else's systems. Define the devices, accounts and connections included in the check. Your IT provider should choose methods appropriate to the equipment and the operational risk."
        ]
      },
      {
        "h": "Use a checklist with owners and evidence",
        "ps": [
          "Work through these checks with your IT provider and record who will perform each one, the date and any unresolved issue. Naming an owner gives an open finding someone responsible for taking it forward before the next review.",
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
          "For an exception that remains open, explain what is preventing the change. A replacement might depend on application compatibility, budget or an office move. Leadership needs that dependency to decide on timing and temporary safeguards; a note that the device is old or the rule is required leaves the decision unexplained."
        ]
      },
      {
        "h": "A workable review cadence",
        "ps": [
          "Network changes and written requirements should guide the review schedule. Maintain inventory and support information during normal IT work. Review access after staff or vendor changes, and check boundaries after material network changes. These are planning guidelines, not a universal compliance schedule.",
          "Use a periodic leadership review to discuss unresolved exposure and replacement decisions. Bring the list of exceptions, the business reasons and the choices that need approval. Leadership does not need every rule entry, but it needs enough information to understand the consequence of postponing work.",
          "A hypothetical accounting firm might schedule disruptive maintenance outside filing deadlines while removing obsolete remote access sooner. Its workflow and exposure inform that choice, but postponing an urgent fix still requires a risk review and, where appropriate, a temporary safeguard.",
          "When you add a location, move offices or change IT providers, treat the transition as a review trigger. Confirm that the new environment preserves the intended boundaries. Retain enough documentation for the incoming provider to identify equipment and dependencies without relying on the memory of someone who has left."
        ]
      },
      {
        "h": "Keep responsibilities clear when security providers work with IT",
        "ps": [
          "Network hardening involves configuration, maintenance and recovery work normally owned by your internal IT team or existing IT provider. Helm is a security provider that works alongside that team. Its recurring service scope does not transfer routine network administration or patching to Helm.",
          "If a relevant risk falls within Command's agreed program work, Helm can track its priority, owner and evidence. The authorized IT owner still changes the firewall. Specialist testing or a network project needs a separate scope decision before work begins.",
          {
            "text": "Bring your current network questions to Helm with your inventory, existing provider responsibilities and any findings you can share securely. Start with an unresolved access question that affects the business, then agree on who takes the next action and how the intended boundary will be verified.",
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
    "intro": "If your systems went down on Monday, which work would you need to get running first? Consider a hypothetical accounting firm with successful backup jobs, an absent restore operator and a tax application that depends on a failed server. Staff can still use email, but they cannot finish the client work. The recovery plan has to account for the application and the people needed to restore it.",
    "lead": [
      "That gives you a practical starting point: choose one critical workflow and test how you would restore it. Disaster recovery planning connects the data, systems and people that workflow needs. As the test reveals dependencies or decisions that take time, use those findings to expand the plan."
    ],
    "sections": [
      {
        "h": "Define the work that needs to resume",
        "ps": [
          "Begin with the work an interruption would stop: receiving client documents, preparing returns, running payroll or communicating with clients. Several systems and outside providers may support a single activity. Decide which interruption would have the greatest consequences for the business, then identify the servers and services needed to resume that work.",
          "For each activity, trace what staff need to complete it. That includes the application and stored information, but also the sign-in service, network connection and people involved. Access to a license portal or an approved replacement workstation may be part of that chain. Even with a restored database, staff need a working way to sign into the application that uses it.",
          "The staff who do the work can help check this list. An IT inventory may identify the application and still miss a spreadsheet or shared mailbox needed to finish a task before its deadline. Locate those records and check that the intended backup includes them before treating the inventory as complete.",
          "A first plan can cover a small number of these priority workflows; you do not need to document every device at once. Record which work falls outside that initial scope so everyone knows what the plan covers."
        ]
      },
      {
        "h": "Set recovery time and data-loss targets",
        "ps": [
          "Once you know which work needs to resume, decide how long the business can wait and how much recent data it can afford to lose. The target for restoring an affected service or workflow is its recovery time objective, or RTO. The acceptable loss of recent data, measured in time, is its recovery point objective, or RPO. Together, these targets help IT choose a recovery design and give you a way to judge the test.",
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
          "The business need can change through the year. Several hours without access near a filing deadline can have different consequences from an interruption in a quieter week, so leadership should approve priorities for both busy periods and ordinary work. IT then needs to check that the targets are feasible before the plan treats them as commitments."
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
          "Ask the provider to demonstrate restoration of the systems your workflow actually uses. A demonstration on a different application can explain the steps, but it leaves your own recovery capability untested. The comparison below can help you identify what evidence is still missing."
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
          "Recovery depends on being able to reach and use the backup safely. An attacker who can change its settings or delete recovery copies can affect that ability. Review administrative access to the backup service separately from ordinary employee access, including how authorized people would reach it if the primary sign-in system were unavailable or compromised.",
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
          "Those responsibilities also depend on what caused the interruption. Equipment failure may allow a straightforward restore. With encrypted files or compromised accounts, the team has to consider the cause, whether the compromise persists and whether the recovery point is suitable before reconnecting systems. The restoration process needs to include those security decisions.",
          "Define an escalation route when the cause is unclear. Staff should know whom to contact and what information to preserve. An employee should not be expected to decide independently whether to rebuild a device or delete evidence after seeing unusual activity.",
          "Review responsibilities with outside providers. Your application vendor may restore its hosted platform but leave your local data and employee access to another team. Document what the provider will do, how to contact it during an interruption and which tasks remain with your business."
        ]
      },
      {
        "h": "Build a runbook for one critical workflow",
        "ps": [
          "With responsibilities agreed, choose a workflow that staff can verify safely and write its runbook: the steps the recovery operator will follow. Record what triggers the process, which systems are involved and the approved restoration method. Specify where to restore the data and how the team will avoid overwriting current production work during a test.",
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
          "Agree on when the clock starts. Where the scenario requires them, the measurement should include authorization, access recovery, data transfer and application setup. List any steps the test leaves out, so leadership can tell how much of the time needed to resume work you actually measured.",
          "A staff member should then complete a representative task in the recovered workflow. A file-opening check leaves permissions and application behavior untested. Retrieving the required documents with the right permissions and completing the expected application action gives you more evidence that work can resume. Check record dates and completeness against the approved recovery point as well.",
          "Assign an owner and a corrective action to each failed step. An expired support contact, unavailable administrator or missing backup dependency can delay recovery even when restoration software works. Fix the issue, repeat the affected check and retain the result so the next review can distinguish tested capability from the original plan."
        ]
      },
      {
        "h": "Use a small worksheet to guide the review",
        "ps": [
          "For each critical workflow, record its business owner, technical owner, recovery-time target and acceptable data loss. Add the backup coverage, recovery location, last test date and test result. Keep unresolved dependencies visible rather than leaving the corresponding field blank.",
          "Suppose an accounting firm's worksheet shows tested cloud-document recovery but no restoration test for its local tax application. In this hypothetical example, the next decision is to ask IT for a scoped test of that application. More cloud storage would not establish whether that workflow can resume.",
          "Keep the worksheet in the change process. A new application may introduce a different database, sign-in dependency or backup requirement, and changes to providers or office infrastructure can also affect recovery. Reviewing the worksheet when those changes happen helps it reflect the systems staff now use.",
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
          "Command's agreed security-program work includes evidence upkeep, a risk register and an annual tabletop. The tabletop lets you examine decisions and coordination. To check whether specified data and systems can actually be recovered, you need a separate technical restoration test. Both exercises can support the plan, and their results answer different questions.",
          {
            "text": "Your existing IT provider retains routine administration and the work it has agreed to perform. Bring the recovery worksheet to a conversation with Helm to coordinate the covered security work with the remaining IT tasks. The worksheet gives that conversation a specific workflow to discuss, a named owner and a test of whether staff can resume useful work.",
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
