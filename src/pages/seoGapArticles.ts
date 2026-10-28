import type {Article} from './articles';

// Review drafts sourced from assets/marketing/seo-gap-resources-2026-10-07/.
export const gapArticles: Article[] = [
  {
  "slug": "pen-test-vs-vulnerability-scan",
  "title": "Buy the security test that can answer your question",
  "metaTitle": "Penetration Testing vs Vulnerability Scanning | Helm",
  "metaDesc": "Compare vulnerability scans and penetration tests. Review scope, reports, remediation and retesting before choosing what your business needs.",
  "date": "2026-06-13",
  "readMin": 10,
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
        "A report should tell you which systems were scanned, when the scan ran, which checks succeeded and which were missed. Before using an empty findings list as evidence, inspect its coverage and authentication results. No findings can reflect well-maintained systems, failed authentication or incomplete coverage. If the report does not distinguish them, keep the result unverified.",
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
              "to": "https://csrc.nist.gov/pubs/sp/800/115/final",
              "start": 0
            }
          ]
        },
        "Look for a report that explains what testers attempted and what they reached. Possible findings include an ordinary account accessing information outside its intended role, or a public application exposing a sensitive function.",
        "A short engagement cannot prove that an organization has no weaknesses. An external network test does not automatically cover your web application, employees, cloud permissions or internal network. The report should state exclusions and explain where timing, access or operational restrictions limited the investigation."
      ]
    },
    {
      "h": "Compare the deliverables before comparing the price",
      "ps": [
        "A service name on a quote tells you little about the work. Compare a sanitized sample report with your business question: does it show the systems examined, the methods used and evidence that could answer that question? Then compare proposals with equivalent boundaries. A narrow external test and an internal assessment covering several applications are different purchases.",
        "The agreed systems, access, testing depth and deliverables also affect price. A low quote alone does not show that you are buying a rebranded scan; a high quote alone does not establish quality. Compare the proposed method, who is responsible for the work and what evidence you will receive.",
        "Check whether the proposal includes a findings discussion, remediation guidance and retesting. Testing may identify a serious weakness without including the work to repair it. Reserve time and budget for implementation, then identify what evidence will establish that the repair worked.",
        {
          "figure": {
            "src": "/images/resources/pen-test-vs-vulnerability-scan.svg",
            "alt": "A scanning and testing workflow: scan for known weaknesses, investigate authorized attack paths and verify repairs with the appropriate rescan or retest.",
            "caption": "Scanning and testing answer different questions. Track each finding through the repair and the check that verifies it."
          }
        },
        {
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
          }
        }
      ]
    },
    {
      "h": "Decide which question to answer first",
      "ps": [
        "Write down why you need the work before seeking quotes. A customer request, new application, recurring exposure or major infrastructure change may each call for a different scope. Make the reason specific. A customer asking for an independent test of the portal holding its documents gives the tester a clearer starting point than a general request to check security.",
        "If you are establishing a maintenance baseline, scanning can help organize known issues. If you are asking whether a signed-in user can reach another client's files, a focused application test may be more suitable. If a contract specifically requests penetration testing, a scan should not be presented as an equivalent without written acceptance from the requesting party.",
        "When the work is required by an insurer, customer or regulator, read the exact requirement. Compare its frequency, independence, scope and evidence conditions with the proposal. Record any ambiguity and obtain written clarification before treating the engagement as satisfying the request. A service label or annual schedule cannot establish that match by itself.",
        "Where timing allows, repair known basic weaknesses before deeper testing. Testers can then spend more of the engagement examining the questions that remain. Keep material exceptions visible; the testing team needs to know which systems and risks the business has deliberately left unresolved."
      ]
    },
    {
      "h": "Define what you are authorizing",
      "ps": [
        "Build an inventory of the proposed targets before approving the scope. Include public addresses, domains, application names, cloud environments and internal systems where relevant, with an owner for each. Check the testing permissions for third-party platforms separately: authority over your company does not automatically authorize testing a platform that hosts part of your work.",
        "Agree on testing windows, emergency contacts and stop conditions. Discuss how the team will avoid unnecessary disruption and what it must do if it finds an urgent weakness. Production testing needs an escalation route that reaches a decision-maker while the work is happening.",
        "List the access testers will receive. Working without credentials gives them a different starting point from using an ordinary employee account or an administrator account. You may see black box, gray box or white box in a proposal. Compare the actual access list with the question you need answered instead of relying on those labels.",
        "The agreement should also address sensitive information. State how evidence will be collected, how much data may be accessed, where the report will be stored and when testing data will be removed. Use redacted examples where full records are unnecessary. Share the report only with people who need it to fix or evaluate the findings."
      ]
    },
    {
      "h": "Follow a portal question through to the retest",
      "ps": [
        "Consider a hypothetical accounting firm with a client portal, cloud email and office workstations. Recurring scans and software updates are already part of its maintenance. A larger client asks whether the portal prevents one customer from accessing another customer's documents.",
        "If you faced that request, a network scan could help confirm exposed services, but it would not by itself answer the question about access between portal accounts. Compare the request with a portal test using approved test accounts and defined document boundaries. Establish whether a safe test environment or controlled production test will meet the requirement before approving the work.",
        "If the test finds a permission problem, keep that finding open through the application repair and any related configuration work. Inspect the retest result for the specific permission boundary and the treatment of similar functions. A clean network rescan would not establish that the application permission issue was resolved.",
        "Before scheduling, record who is authorized to approve, implement and verify each change. Then use that record to track the finding, including any business consequences that need a separate decision. You should be able to follow the original question all the way to the evidence of repair."
      ]
    },
    {
      "h": "Use a findings worksheet to prevent stalled remediation",
      "ps": [
        "Create a record for each confirmed finding with its affected system, business consequence, responsible owner, target date and evidence needed for closure. Add dependencies, such as a developer release or a vendor update. Keep an accepted risk visible with the approval and reason; acceptance does not mean the weakness was repaired.",
        "Read a severity rating alongside the affected system. A weakness on a public system holding client documents may warrant a different priority from a similar issue on an isolated test device. Record the exposure and information at risk so your repair priority or risk-acceptance decision has a basis beyond the rating.",
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
      "h": "Check service limits before you approve the work",
      "ps": [
        "Helm works alongside your existing IT provider. Core supplies the covered security stack and monthly reporting. Command adds security-program coordination, including a risk register, roadmap and evidence upkeep within its agreed scope. Neither service name should be read as an automatic promise of a particular penetration-testing engagement.",
        "For a testing purchase, compare the request and intended systems with the written scope. Confirm whether specialist testing needs a separate agreement and whether repairs are included. Routine administration and patching remain outside Helm's recurring scope unless a separate written agreement changes those responsibilities.",
        {
          "text": "Helm's free public-domain scan is a limited check of public email and web configuration. It is not an authenticated internal vulnerability assessment or a penetration test. Use it to understand that public configuration, then choose deeper work according to the question you still need answered.",
          "links": [
            {
              "phrase": "Helm's free public-domain scan",
              "to": "/free-scan/",
              "start": 0
            }
          ]
        },
        "Before approving a proposal, match its coverage statement and sample report to the question you started with. Check that you have a plan and budget for repairs and the right rescan or retest. Buy the engagement only when you can explain what its result will let you decide."
      ]
    }
  ],
  "takeaway": "",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "updated": "2026-10-24"
},
  {
  "slug": "dns-filtering-small-business",
  "title": "DNS Filtering for Small Business: Coverage, Limits and a Rollout Checklist",
  "metaTitle": "DNS Filtering for Small Business: A Practical Guide | Helm",
  "metaDesc": "Check DNS filtering on office and remote devices, test harmless destinations and plan exceptions without overstating what a block proves.",
  "date": "2026-10-07",
  "readMin": 10,
  "lane": "Small business",
  "laneTo": "/professional-services/",
  "intro": "An office DNS filter may stop protecting a laptop when you take it elsewhere. Check the lookup path on each device and network you use before treating the team as covered. A roaming client can extend coverage, but the policy still needs to let you reach approved business services and handle exceptions safely.",
  "lead": [
    "Consider an employee who follows a message that appears to come from a client to a document sign-in page. The filter may block the connection if its policy recognizes the destination as unsafe. Whether that happens depends on the device, network and DNS path."
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
              "to": "https://developers.cloudflare.com/cloudflare-one/traffic-policies/get-started/dns/",
              "start": 0
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
        "For an accounting firm, a document-sharing workflow makes the distinction easier to follow. A message arrives, an employee follows its link and a sign-in screen appears. Establish who handles the message if the employee reports it, what protects the destination and how the account is protected if the employee submits credentials. Several controls can apply to that same sequence.",
        "Each has limits. Email filtering cannot cover every destination opened outside email, while a DNS filter cannot verify account permissions or test recovery. Evaluate those tasks separately so one product's coverage does not stand in for the whole workflow.",
        {
          "table": {
            "caption": "Separate DNS filtering from other protections",
            "headers": [
              "Control",
              "Primary decision",
              "What to verify in the service scope"
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
        }
      ]
    },
    {
      "h": "Know the limits before setting expectations",
      "ps": [
        {
          "text": "A filter may allow a newly created malicious domain because it has not yet been recognized. A harmful page can also sit on a legitimate domain. Blocking that whole domain may interrupt useful work. HTTP filtering can inspect specific web requests under an approved configuration, giving it more detail than a domain-level filter.",
          "links": [
            {
              "phrase": "HTTP filtering",
              "to": "https://developers.cloudflare.com/cloudflare-one/traffic-controls/get-started/http/",
              "start": 198
            }
          ]
        },
        "A DNS filtering policy applies to lookups that reach its configured resolver. Another resolver, a browser's encrypted DNS setting or an application's lookup method may take requests around it. Test the approved device configuration both at the office and remotely using the harmless checks below; do not bypass protection to test it.",
        {
          "text": "For encrypted DNS, encryption protects the lookup while it travels to the resolver. Filtering depends on what that resolver's policy does with the request, so an encrypted connection can still allow a domain without a security check. NSA's guidance on encrypted DNS explains why an organization needs to control which resolver its devices use.",
          "links": [
            {
              "phrase": "NSA's guidance on encrypted DNS",
              "to": "https://media.defense.gov/2021/Jan/14/2002564889/-1/-1/0/CSI_ADOPTING_ENCRYPTED_DNS_U_OO_102904_21.PDF",
              "start": 234
            }
          ]
        },
        {
          "text": "Also settle what happens if the filtering service or network connection fails. Some configurations permit an alternate path; others block access. Cloudflare's business continuity guide describes this fail-open versus fail-closed choice for its client. For an office that depends on cloud applications, the choice can affect whether people can work. Record the chosen behavior and test the support route employees will use during a failure.",
          "links": [
            {
              "phrase": "Cloudflare's business continuity guide",
              "to": "https://developers.cloudflare.com/cloudflare-one/team-and-resources/devices/cloudflare-one-client/business-continuity/",
              "start": 146
            }
          ]
        }
      ]
    },
    {
      "h": "Map coverage before choosing a deployment",
      "ps": [
        "List the places your team works: the office, home, client premises and travel. Then list the device types used in those places. Include managed workstations, approved personal devices, phones and office equipment. Distinguish devices you can configure from devices controlled by clients or other organizations.",
        "For every category, ask how its DNS requests reach the policy. Office network configuration can cover devices while they use that network. A supported device client may follow a laptop onto other networks. A guest device might receive a network policy without being enrolled as an employee device. Check the product's supported platforms and limitations.",
        "Build a small coverage matrix for those device and location combinations, then use the pilot below to record which requests reach the policy. Configuring the office router to use the filtering service does not establish coverage for devices that use another DNS path.",
        "If a tax firm finds that the filter covers its office desktops but misses the laptops used by seasonal staff, the owner and IT provider have a specific gap to resolve. Agree on an approved device model and test that missing coverage before the laptops access client information.",
        {
          "figure": {
            "src": "/images/resources/dns-filtering-small-business.svg",
            "alt": "A domain request travels from a covered device to a filtering resolver, which allows or blocks it under policy; an owner reviews exceptions and suspicious activity.",
            "caption": "The policy applies to requests that reach the filtering resolver. Verify coverage in each work location."
          }
        }
      ]
    },
    {
      "h": "Start with security policies and controlled exceptions",
      "ps": [
        "Start with the threats you want to reduce and the applications staff need to use. Select supported security categories for those threats and test them with representative work before expanding the policy. Agree on a rollback method too, in case the rollout blocks essential work.",
        "Decide content restrictions separately from security categories. Blocking social media, for example, can interrupt recruiting or client communication. Explain the reason for the restriction and identify who can approve an exception before the technical rollout changes what employees can access.",
        "When somebody needs an exception, record the business reason, who approved it and when it should be reviewed. Allowing an entire category because one useful site was blocked can create unnecessary exposure. Where the product supports it, limit the exception to that destination and the people who need it.",
        "Review urgent requests without telling employees to disable protection. Give them a clear reporting route and a way to explain the blocked task. The person reviewing the request should check the destination through an approved method before releasing it. A familiar logo or a message saying the site is essential is not enough evidence."
      ]
    },
    {
      "h": "Run a rollout that employees can work with",
      "ps": [
        "Choose a pilot group that reflects your business rather than only IT staff. Include a remote worker and someone who uses the client portals or financial applications that generate the most support requests. Record which operating systems, browsers and networks the pilot covers.",
        {
          "text": "Use the provider's harmless test destinations to verify blocking. Do not ask employees to browse known malicious sites. Check that an approved destination loads and that a test domain is blocked. If your configuration uses a block page, check its support instructions too. Then repeat the checks away from the office on supported managed devices.",
          "links": [
            {
              "phrase": "harmless test destinations",
              "to": "https://developers.cloudflare.com/cloudflare-one/traffic-controls/dns-policies/test-dns-filtering/",
              "start": 19
            }
          ]
        },
        {
          "list": [
            "Confirm the policy owner and the person who handles urgent exceptions.",
            "Record devices and networks included in the pilot.",
            "Test approved business applications and harmless provider test domains.",
            "Review browser DNS settings and alternate lookup paths within your authorized access.",
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
        {
          "text": "DNS logs can reveal information about work patterns and services accessed. Decide who can view them, how long they are retained and what the business needs them for. Review the provider's data handling and administrative access before enabling broad reporting.",
          "links": [
            {
              "phrase": "DNS logs can reveal information about work patterns and services accessed",
              "to": "https://www.rfc-editor.org/rfc/rfc9076.html#section-4.2",
              "start": 0
            }
          ]
        },
        "Before reporting a rise in blocked requests to leadership, check whether more devices joined the service, a policy changed or an application repeatedly made the same background request. Show the covered population and policy context, and flag events that need investigation. The total alone cannot reliably tell you how many attacks were prevented.",
        "An operational report can track covered device categories and the last successful coverage check, along with open exceptions and service interruptions. Record confirmed security incidents separately so routine blocks are not reported as breaches and serious events still have a reporting route.",
        "Review the policy when you change IT providers, add a location or introduce a device platform. Those changes can alter which requests reach the filter. Include the review when reconciling employee accounts and devices so coverage is checked against how the business now works."
      ]
    },
    {
      "h": "Questions to bring to a provider conversation",
      "ps": [
        "Use your coverage matrix and pilot results to compare proposals. Confirm how the provider verifies that the device client stays active and what your IT team must maintain. Reports should distinguish a device excluded from coverage from one that has stopped checking in.",
        "Ask who acts on suspicious repeated lookups and who can isolate a device if necessary. Someone needs to distinguish background application activity from an incident. Confirm those responsibilities alongside licensing, because a DNS filtering subscription does not automatically include managed investigation.",
        "For a wrongly blocked client portal, establish how the request reaches the reviewer and access is restored. Your exception process should already identify who approves the change and when it expires or comes up for review. Compare that process with the support the provider offers."
      ]
    },
    {
      "h": "Where DNS filtering fits in Helm's approach",
      "ps": [
        "Helm's recurring services cover defined email, device, identity, cloud-backup, awareness and digital-risk capabilities. Evaluate DNS filtering against your existing IT controls and signed service scope; it is not added to Core or Command by this guide or offered here as a standalone Helm service.",
        "Before making network changes, confirm that you have the required administrative authority. Any Helm coordination needs an agreed scope, especially where one alert crosses several services. Use your test results to decide which lookup paths are covered and which gaps still need work.",
        {
          "text": "For a scope conversation with Helm, bring your coverage matrix and exception process, including the work locations that lack protection and who will close each gap. A public email-domain scan cannot test whether your laptops use a DNS filtering policy.",
          "links": [
            {
              "phrase": "scope conversation with Helm",
              "to": "/contact/",
              "start": 6
            }
          ]
        }
      ]
    }
  ],
  "takeaway": "",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "consultation": {
    "title": "Work out the security coverage you need.",
    "sub": "Bring the security question you need to answer and your current service scope. We can help you compare the work already covered with the support you still need.",
    "label": "Discuss your security scope",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "network-hardening-small-business",
  "title": "A separate guest Wi-Fi name does not prove your network is separated",
  "metaTitle": "Network Hardening Checklist for Small Business | Helm",
  "metaDesc": "Check the access your small-business network allows, compare it with what staff need, and plan verification around daily work.",
  "date": "2026-10-07",
  "readMin": 9,
  "lane": "Small business",
  "laneTo": "/professional-services/",
  "intro": "A guest Wi-Fi network needs rules that keep visitors away from internal systems. A separate Wi-Fi name alone does not establish that boundary. Check the result of an authorized isolation test: a guest should still reach the internet, while a connection to an internal system you intend to protect should fail.",
  "lead": [
    "Reducing unnecessary access and maintaining safer configurations is called network hardening. Start with what your business needs to reach, compare that with the access it currently allows, then close the unnecessary paths through a planned change. You can inspect inventories and test results without changing a firewall. Make configuration changes only when you are authorized, understand the equipment and have a tested recovery method; otherwise keep the change pending while you establish those conditions."
  ],
  "sections": [
    {
      "h": "Start with a map of business work",
      "ps": [
        "Open your inventory of routers, firewalls, switches, access points and the systems connected to them. Include printers, cameras and equipment supplied by a building or communications vendor. For each category, check who controls its settings and whether the manufacturer still supports it. Missing information is an unresolved part of the review, not a reason to assume the device is covered.",
        "Connect each device to the work it supports. An accounting firm might need tax software, a document server, printers and client portals. A conference-room display needs fewer paths. Use those requirements to distinguish necessary connections from access that has no current business purpose.",
        "List remote connections separately. Identify the people and vendors who can use them, the systems they can reach and how their access is approved. An old remote-support arrangement can outlast both the employee who requested it and the business reason for keeping it.",
        "Keep the map simple enough to use during a change or investigation. Update it as devices, support arrangements and access responsibilities change. You should be able to find a device's owner and the business purpose of its connections without reconstructing that history first."
      ]
    },
    {
      "h": "Reduce unnecessary exposure first",
      "ps": [
        "Review which services are reachable from the internet and why. Include remote access, administrative interfaces and any systems intentionally published for customers. Compare your intended exposure with the results of an authorized external check, noting the date and systems it covered. An untested service remains an open question.",
        "An apparently obsolete forwarding rule may still support a business application. Before approving its removal, check the documented dependency and the proposed test of required business functions. If you cannot explain what may stop working or how to restore it, the change is not ready.",
        "For each remote-access arrangement, identify its current owner and confirm that the service is supported. Review how people authenticate, what permissions they receive and how access ends with the engagement. Familiarity with the vendor does not answer those access questions.",
        {
          "text": "CISA's infrastructure hardening guidance covers management access, segmentation and device security. Use it to understand the controls behind your review. The exact configuration still needs to reflect your equipment and the work your business must perform.",
          "links": [
            {
              "phrase": "CISA's infrastructure hardening guidance",
              "to": "https://www.cisa.gov/resources-tools/resources/enhanced-visibility-and-hardening-guidance-communications-infrastructure",
              "start": 0
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
          "text": "Check which management services enforce multifactor authentication. CISA recommends phishing-resistant MFA for businesses. Record which administrative accounts support it and which platforms require an interim control while you address the limitation. A service offering MFA does not establish that every administrator uses it.",
          "links": [
            {
              "phrase": "CISA recommends phishing-resistant MFA",
              "to": "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication",
              "start": 68
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
        "When defining the groups, account for device discovery, printing, voice systems and application dependencies. Each allowed connection should be specific enough to understand and test. Don't copy the illustrative model below into a production network.",
        "If segmentation interrupts a needed workflow, identify the connection that workflow requires before broadening access. A temporary broader rule needs an approving owner and a review date. Keep that exception visible until the narrower connection has been tested.",
        {
          "figure": {
            "src": "/images/resources/network-hardening-small-business.svg",
            "alt": "Illustrative network groups: employee devices use required services, guests use the internet with internal isolation, and office equipment uses documented connections with restricted management.",
            "caption": "Illustrative groups, not a production configuration. Define the access your devices need and verify the approved connections before adopting these boundaries."
          }
        },
        {
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
          }
        }
      ]
    },
    {
      "h": "Keep network devices supported and maintained",
      "ps": [
        "A device can still pass traffic after its vendor stops supporting it. Check support status alongside firmware versions and security updates. Network equipment needs software maintenance just as workstations do; a working internet connection tells you little about whether that maintenance is current.",
        "A firewall restart may interrupt cloud software, remote staff and phones at the same time. Plan the update around that disruption, with a recorded maintenance window and rollback method. Confirm that the saved configuration can be restored if behavior changes unexpectedly.",
        "Check for unused management services and default credentials, then record any removals or credential changes needed under your approved setup process. Confirm whether management is restricted to the intended administrators and network paths. The list will differ by equipment, so keep manufacturer documentation with the change record.",
        "Before approving a replacement, look beyond advertised throughput. Compare its support status, compatibility, ability to enforce your policies and usefulness of its logs. Check the recovery process too: restoring its configuration shouldn't depend on an administrator who may be unavailable."
      ]
    },
    {
      "h": "Plan changes so security and daily work improve together",
      "ps": [
        "If guest devices can reach an internal printer management interface, connect that finding to the proposed fix. Check that the change record identifies the rule to alter, who may be affected and the test that will demonstrate the result. That lets you judge whether the plan addresses the access you observed.",
        "Before a change begins, confirm that the current configuration is saved through your approved process. Agree on when to roll back and who can authorize it. A backup of settings is useful only if it is accessible during the outage and its restoration procedure is understood.",
        "After the change, compare results for the prohibited path and the required business function. The first should fail; the second should still work. Run these checks only within the approved test scope. Keep the results with the change record so you have evidence of network behavior as well as the saved settings.",
        "Do not test network boundaries through unauthorized scanning or experimentation on somebody else's systems. Define the devices, accounts and connections included in the check, and confirm that the method is appropriate to the equipment and operational risk. If the method or permission is unclear, inspect existing evidence and leave the test pending."
      ]
    },
    {
      "h": "Use a checklist with owners and evidence",
      "ps": [
        "Use these checks to record what you know about the network. For each one, include the date, the evidence and any unresolved issue. Distinguish a completed check from a planned change so an open finding cannot disappear into a list marked done.",
        {
          "list": [
            "Check the inventory of network devices and their support status.",
            "Compare public services with approved exposure and record changes needed.",
            "Reconcile administrator accounts with current access responsibilities.",
            "Check MFA and recovery access for supported management services.",
            "Inspect test results for guest isolation and the intended equipment boundaries.",
            "Review remote vendor access for arrangements that have ended.",
            "Check firmware-update records and documented exceptions.",
            "Confirm that configuration backups and the authorized recovery procedure are available.",
            "Compare permitted and prohibited connection tests after material changes.",
            "Check which logs are reviewed and how an event reaches investigation."
          ]
        },
        "For an exception that remains open, record what is preventing the change. A replacement might depend on application compatibility, budget or an office move. You need that dependency to decide on timing and temporary safeguards. A note saying the device is old or the rule is required leaves the decision unexplained."
      ]
    },
    {
      "h": "A workable review cadence",
      "ps": [
        "Network changes and written requirements should guide the review schedule. Maintain inventory and support information during normal IT work. Review access after staff or vendor changes, and check boundaries after material network changes. These are planning guidelines, not a universal compliance schedule.",
        "At your periodic review, decide which unresolved exposure and replacement work needs action. Use the exceptions, business reasons and consequences of postponement to set priorities. You do not need every rule entry to make that decision, but you do need enough evidence to understand what remains reachable.",
        "A hypothetical accounting firm might schedule disruptive maintenance outside filing deadlines while removing obsolete remote access sooner. Its workflow and exposure inform that choice, but postponing an urgent fix still requires a risk review and, where appropriate, a temporary safeguard.",
        "When you add a location, move offices or change IT providers, treat the transition as a review trigger. Confirm that the new environment preserves the intended boundaries. Retain enough documentation to identify equipment and dependencies without relying on the memory of someone who has left."
      ]
    },
    {
      "h": "Decide what the next change must prove",
      "ps": [
        "Network hardening includes configuration, maintenance and recovery. Keep those responsibilities explicit when you buy security services. Helm works alongside retained IT; its recurring scope does not include routine network administration or patching.",
        "If a relevant risk falls within Command's agreed program work, Helm can track its priority, owner and evidence. That scope does not authorize a firewall change. Specialist testing or a network project needs a separate scope decision before work begins.",
        {
          "text": "Bring your current network questions to Helm if you want to discuss service fit, using an inventory and findings you can share securely. For your own next review, choose one unresolved access question: what can connect today, what should remain possible after the change, and what result will show that the unwanted path is closed?",
          "links": [
            {
              "phrase": "Bring your current network questions to Helm",
              "to": "/contact/",
              "start": 0
            }
          ]
        }
      ]
    }
  ],
  "takeaway": "",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "consultation": {
    "title": "Work out the security coverage you need.",
    "sub": "Bring the security question you need to answer and your current service scope. We can help you compare the work already covered with the support you still need.",
    "label": "Discuss your security scope",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "disaster-recovery-small-business",
  "title": "Disaster Recovery for Small Business: A Plan You Can Test",
  "metaTitle": "Disaster Recovery for Small Business: A Tested Plan | Helm",
  "metaDesc": "Build a small-business disaster recovery plan around critical workflows, recovery targets, protected backups, named owners and restoration tests.",
  "date": "2026-10-07",
  "readMin": 11,
  "lane": "Small business",
  "laneTo": "/professional-services/",
  "intro": "A successful backup job does not tell you whether you can finish the client work after an outage. Your tax application may still depend on a failed server, or the only person with restore access may be unavailable. Build the recovery plan around the work you need to resume, then test the dependencies that could stop it.",
  "lead": [
    "Start with one critical workflow and test how you would restore it. Record the work to resume, acceptable interruption and data loss, responsible people, required systems and the restoration method. Backups supply the data; the plan explains how authorized people use it to resume work safely and confirm that the result is usable. As the test reveals dependencies or decisions that take time, use those findings to expand the plan."
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
              "to": "https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final",
              "start": 0
            }
          ]
        },
        "For example, you might want a document workflow restored within four hours and tolerate losing up to one hour of recent changes. Compare those targets with the actual backup schedule, infrastructure and staffing before adopting them as commitments.",
        "The business need can change through the year. Several hours without access near a filing deadline can have different consequences from an interruption in a quieter week. Set priorities for both busy periods and ordinary work, then compare the targets with tested recovery capability before treating them as commitments.",
        {
          "figure": {
            "src": "/images/resources/disaster-recovery-small-business.svg",
            "alt": "Illustrative recovery timeline: an RPO of one hour describes acceptable loss before failure, while an RTO of four hours describes the target for restoring the workflow after interruption.",
            "caption": "The one-hour RPO and four-hour RTO are hypothetical business targets. They are not measured results or Helm guarantees."
          }
        }
      ]
    },
    {
      "h": "Understand the difference between backup and recovery",
      "ps": [
        "A backup is a copy you can use for restoration under the product's supported conditions. A recovery plan covers the steps and dependencies needed to resume work. It may require rebuilding a device, restoring application data, verifying access and checking that the workflow produces the right result.",
        "File synchronization can spread a deletion or unwanted change to connected devices. Retention can preserve certain information for a defined period, while a backup product has its own restoration methods and coverage. Examine the actual service documentation rather than assuming that all copies of data serve the same purpose.",
        "Test restoration of the systems your workflow actually uses, within an authorized scope and a safe environment. A demonstration on a different application can explain the steps, but it leaves your own recovery capability untested. Use the comparison below to identify the evidence you still need.",
        {
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
        }
      ]
    },
    {
      "h": "Protect the recovery path",
      "ps": [
        "Recovery depends on being able to reach and use the backup safely. An attacker who can change its settings or delete recovery copies can affect that ability. Review administrative access to the backup service separately from ordinary employee access, including how authorized people would reach it if the primary sign-in system were unavailable or compromised.",
        {
          "text": "CISA's ransomware guidance recommends protected backups and recovery testing. Check which protections apply to your chosen system, including isolation or immutability where supported. Establish what an administrator or attacker can change instead of relying on the product label.",
          "links": [
            {
              "phrase": "CISA's ransomware guidance",
              "to": "https://www.cisa.gov/stopransomware/ransomware-guide",
              "start": 0
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
        "Choose a business leader to prioritize workflows and authorize recovery actions that disrupt normal operations. Identify the IT owner who diagnoses the system failure and performs restoration. Record who coordinates security containment when suspicious activity may be involved. Include alternates for the people whose absence would delay the work.",
        "Those responsibilities also depend on what caused the interruption. Equipment failure may allow a straightforward restore. With encrypted files or compromised accounts, the team has to consider the cause, whether the compromise persists and whether the recovery point is suitable before reconnecting systems.",
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
        "Use this as a planning sequence, not an executable procedure for every platform. Before running a test, attach the supported product steps and safe testing method to the runbook. Confirm authorized access and any specialist vendor support or application-specific checks the system requires."
      ]
    },
    {
      "h": "Test more than whether a file opens",
      "ps": [
        "A useful restoration test has a defined scope, an expected result and a person who can judge that result. Choose a safe copy of representative information. Confirm that the recovery environment is appropriately protected and that the test will not expose client data unnecessarily.",
        "Agree on when the clock starts. Where the scenario requires them, the measurement should include authorization, access recovery, data transfer and application setup. List any steps the test leaves out, so leadership can tell how much of the time needed to resume work you actually measured.",
        "Include a representative task in the recovered workflow. A file-opening check leaves permissions and application behavior untested. Verify that the test covers retrieving the required documents with the right permissions and completing the expected application action. Check record dates and completeness against the approved recovery point as well.",
        "Assign an owner and a corrective action to each failed step. An expired support contact, unavailable administrator or missing backup dependency can delay recovery even when restoration software works. Fix the issue, repeat the affected check and retain the result so the next review can distinguish tested capability from the original plan."
      ]
    },
    {
      "h": "Use a small worksheet to guide the review",
      "ps": [
        "For each critical workflow, record its business owner, technical owner, recovery-time target and acceptable data loss. Add the backup coverage, recovery location, last test date and test result. Keep unresolved dependencies visible rather than leaving the corresponding field blank.",
        "For an accounting firm, the worksheet might show tested cloud-document recovery but no restoration test for its local tax application. The next decision would be to arrange a scoped test of that application with IT. More cloud storage would not establish whether that workflow can resume.",
        "Keep the worksheet in the change process. A new application may introduce a different database, sign-in dependency or backup requirement, and changes to providers or office infrastructure can also affect recovery. Reviewing the worksheet when those changes happen helps it reflect the systems staff now use.",
        "Choose testing frequency according to the importance of the workflow, rate of change and any written requirements that apply. This article does not prescribe a universal compliance schedule. Start with the highest consequence untested workflow and agree on the next review date with its owner."
      ]
    },
    {
      "h": "Plan communication while recovery is underway",
      "ps": [
        "Decide who updates staff and where they can receive those updates if normal email or collaboration tools are unavailable. Give employees clear instructions about affected work, temporary arrangements and the next update. Avoid sending speculative causes or recovery times that the technical team has not confirmed.",
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
          "text": "Your existing IT provider retains routine administration and the work it has agreed to perform. Bring the recovery worksheet to a conversation with Helm to coordinate the covered security work with the remaining IT tasks.",
          "links": [
            {
              "phrase": "conversation with Helm",
              "to": "/contact/",
              "start": 130
            }
          ]
        }
      ]
    }
  ],
  "takeaway": "",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "consultation": {
    "title": "Work out the security coverage you need.",
    "sub": "Bring the security question you need to answer and your current service scope. We can help you compare the work already covered with the support you still need.",
    "label": "Discuss your security scope",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
}
];
