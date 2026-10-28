import {ciscoEmailArticle} from './ciscoEmailArticle';
import type {Article} from './articles';

export const newsArticles: Article[] = [
  ciscoEmailArticle,
  {
  "slug": "meraki-october-2026-security-update",
  "collection": "blog",
  "title": "Cisco’s October Meraki update: some fixes are still on the way",
  "metaTitle": "Meraki October Update: Some Fixes Still Pending | Helm",
  "metaDesc": "Cisco’s October Meraki fixes arrive on different schedules. Match your devices to the advisory, plan the interruption and verify installed versions after each update.",
  "date": "2026-10-09",
  "updated": "2026-10-24",
  "readMin": 4,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": "Your Meraki equipment may need different security updates even when it serves the same office. Cisco’s October 15 advisory revision lists some fixes as available and others for late October or mid-November. Before approving an upgrade, match each device model and software branch to its entry in the advisory; a single “network updated” status can hide equipment still waiting for a fix.",
  "lead": [
    {
      "text": "Cisco published the advisory on October 7, 2026, and revised it on October 8 and October 15. It covers Campus Gateways, MG cellular gateways, MR wireless access points, MS switches, MV cameras and MX security appliances. Cisco reports no known malicious exploitation and says there are no workarounds that address the vulnerabilities.",
      "links": [
        {
          "phrase": "Cisco published the advisory",
          "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-hardening-meraki-os-drbEX9GH",
          "start": 0
        }
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "ctaMode": "book",
  "sections": [
    {
      "h": "The fix can depend on a footnote",
      "ps": [
        "In the advisory’s MX section, Cisco lists release 19.2.9. The footnote says it’s recommended only for Z3 devices. That same note directs administrators to contact Meraki support if either 18.107.14 or 19.2.9 is missing from Dashboard, the service used to manage the equipment.",
        "Match the model and software branch shown in your device inventory to the advisory before selecting an update. A higher version number does not settle the question when a footnote limits which equipment should use it. If you cannot confirm the model or installed branch, leave that device marked unresolved rather than guessing.",
        {
          "text": "Check the route to the fixed release as well as the destination. Meraki’s firmware-management documentation describes upgrade paths that require an intermediate release. Read the path and release notes for your model before approving a production change. Installing firmware requires authorized administrative access and a tested recovery plan.",
          "links": [
            {
              "phrase": "firmware-management documentation",
              "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Managing_Firmware_Upgrades",
              "start": 74
            }
          ]
        },
        "For releases planned for late October or mid-November, record the date to check availability again. Cisco’s estimate is not your installation date. Confirm that the update is offered for your equipment before scheduling it. If you consider a temporary restriction while waiting, record which business functions it changes and which vulnerability remains unresolved; Cisco says there are no workarounds that address these vulnerabilities."
      ]
    },
    {
      "h": "What Meraki’s status labels tell you",
      "ps": [
        {
          "text": "Meraki gives firmware, the software running on a device, a green “Good” status when no end-of-maintenance date has been set, or when that date is more than six months away. Those criteria concern maintenance timing; the installed version still needs to be checked against this advisory’s fixes.",
          "links": [
            {
              "phrase": "“Good” status",
              "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Managing_Firmware_Upgrades",
              "start": 65
            }
          ]
        },
        {
          "text": "There’s a similar distinction after an upgrade. In Meraki’s documented MS switch workflow, “Completed” can appear after a 30-minute timeout. A switch locked to a firmware version by Meraki support can also be skipped while the group’s upgrade is considered complete.",
          "links": [
            {
              "phrase": "documented MS switch workflow",
              "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Meraki_Switching_Firmware_Upgrades",
              "start": 60
            }
          ]
        },
        "After the upgrade, compare the installed software on each device with the intended fixed version. Keep skipped devices, rollbacks and devices still running the old version on the open list. The timeout behavior above belongs to the documented MS workflow; use the relevant checks for each other device family.",
        "Choose the business functions you will test before the change begins. When the equipment returns, check those functions as well as the installed version. A version check cannot tell you whether the office’s remote access or other required service still works."
      ]
    },
    {
      "h": "Plan the interruption around the firm’s work",
      "ps": [
        {
          "text": "Meraki’s upgrade guidance describes a connectivity interruption during reboot and an additional delay before Dashboard information refreshes. It also explains how upgrades are scheduled and administrators are notified. Check the existing schedule before creating another maintenance window.",
          "links": [
            {
              "phrase": "upgrade guidance",
              "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Meraki_Firmware_Release_Process",
              "start": 9
            }
          ]
        },
        "Compare the proposed maintenance window with remote hearings, filing deadlines and other work that needs the connection. Before approving it, record the recovery plan, the authorized operator and how you will reach them if access fails. Do not use a production upgrade to learn an unfamiliar administration interface.",
        "Keep a device-level list of the intended release, installed release and remaining action. Give equipment waiting on Cisco its own availability-check date so it stays visible after the first round of upgrades. Close each item only when the installed version and business-function checks support that decision."
      ]
    }
  ]
}
,
{
  "slug": "ivanti-connect-secure-october-2026-exploitation",
  "collection": "blog",
  "title": "Ivanti Connect Secure: what to ask IT after the October 13 disclosure",
  "metaTitle": "Ivanti Connect Secure October Attacks: Questions for IT | Helm",
  "metaDesc": "Ivanti Connect Secure is under active exploitation. Ask IT about affected versions, current vendor action and assessment of possible earlier compromise.",
  "date": "2026-10-13",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": {
    "text": "If your firm uses Ivanti Connect Secure for remote access, ask its IT owner to confirm the response to the October 13 disclosure. CISA has added CVE-2026-104935 to its Known Exploited Vulnerabilities catalog. The useful answer should explain whether your installation is affected, what the vendor recommends now, and who is assessing possible earlier compromise.",
    "links": [
      {
        "phrase": "Known Exploited Vulnerabilities catalog",
        "to": "https://www.cisa.gov/known-exploited-vulnerabilities-catalog?field_cve=CVE-2026-104935"
      }
    ]
  },
  "lead": [
    {
      "text": "The Ivanti-authored vulnerability record describes a weakness that can let an attacker run commands on an affected Connect Secure system without signing in. It concerns this remote-access product; the announcement alone says nothing about which software your firm uses.",
      "links": [
        {
          "phrase": "Ivanti-authored vulnerability record",
          "to": "https://raw.githubusercontent.com/CVEProject/cvelistV5/main/cves/2026/104xxx/CVE-2026-104935.json"
        }
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "ctaMode": "book",
  "consultation": {
    "title": "Coordinate the security work across your providers.",
    "sub": "Discuss the security-program coordination and evidence review your firm needs. Helm Command’s work is bounded by the agreed scope; retained IT owns patching and routine remediation.",
    "label": "Discuss security-program coordination",
    "to": "/contact/"
  },
  "sections": [
    {
      "h": "The investigation changes the question",
      "ps": [
        {
          "text": "In its October 13 investigation, Volexity reports attacks beginning October 3 and discovery on October 5. The public disclosure came later. A provider reviewing exposure therefore needs to consider the period before the announcement.",
          "links": [
            {
              "phrase": "October 13 investigation",
              "to": "https://www.volexity.com/blog/2026/10/13/a-series-of-unauthenticated-events-chained-exploitation-of-ivanti-connect-secure-zero-days/"
            }
          ]
        },
        "Volexity describes an attack chain involving activity in memory and cleanup that can evade the Integrity Checker. A clean result from that check cannot, by itself, settle whether an affected appliance was compromised. The report also says a fix for a separate privilege-escalation issue is forthcoming. The separate issue remains open in that report; the available fix should not be described as covering the whole chain.",
        "Ask who owns the investigation as well as the update. Your existing IT provider may operate the appliance while another specialist handles incident assessment. Both need a clear assignment, and someone at the firm needs to know when their findings require a decision."
      ]
    },
    {
      "h": "Start with the exact installation",
      "ps": [
        "Ask the operator to identify the appliance, its installed software branch and version, and how it is exposed. Include a supplier-operated remote-access service if that is how staff connect. A service called “VPN” in a contract may need a more specific product answer from the provider.",
        {
          "text": "Version qualifications matter here. Ivanti's CVE record explicitly excludes 22.7R2.14 and earlier from this particular flaw and lists other unaffected releases. That is not an assessment of every issue in those versions. Have the operator use the current Ivanti advisory for the supported action on your branch rather than selecting a release from this article.",
          "links": [
            {
              "phrase": "Ivanti advisory",
              "to": "https://hub.ivanti.com/s/article/Security-Advisory-Ivanti-Connect-Secure-CVE-2026-104935"
            }
          ]
        },
        {
          "text": "The provider should explain the urgent work it recommends and any interruption to remote access. Tell it about client deadlines or staff who depend on that connection so an approved alternative can be arranged. The broader guide to vulnerability advisories explains how to connect the product check to a business decision.",
          "links": [
            {
              "phrase": "guide to vulnerability advisories",
              "to": "/resources/zero-day-vs-known-vulnerabilities/"
            }
          ]
        }
      ]
    },
    {
      "h": "Keep the assessment open after the change",
      "ps": [
        "Ask the technical owner to record the version actually installed after remediation and any appliances still awaiting action. Separately, ask the responder what evidence is needed to assess prior access, including whether credentials or sessions require review. That decision should follow current vendor guidance and the evidence from your environment.",
        {
          "text": "Preserving evidence can affect the order of work. Coordinate collection and containment with the authorized responder before routine cleanup or rebuilding removes information it needs. The incident-response guide covers those responsibilities without asking business staff to improvise forensic work.",
          "links": [
            {
              "phrase": "incident-response guide",
              "to": "/resources/incident-response-plan-small-business/"
            }
          ]
        },
        "The next update to leadership should say what has been confirmed, what remains uncertain and who is handling the remaining work. Keep the remediation and compromise-assessment results distinguishable in that record. A completed software change does not answer every question about earlier access.",
        {
          "text": "If your firm needs help coordinating security responsibilities across providers, talk with Helm. Helm Command includes security-program coordination and evidence upkeep within its agreed scope. Existing IT retains patching and routine remediation; appliance forensics and hands-on recovery require separately agreed scope.",
          "links": [
            {
              "phrase": "talk with Helm",
              "to": "/contact/"
            }
          ]
        }
      ]
    }
  ]
},
{
  "slug": "windows-shell-october-2026-update",
  "collection": "blog",
  "title": "Microsoft's October Windows Shell warning: what to confirm with IT",
  "metaTitle": "Windows Shell flaw: confirm October updates and restarts",
  "metaDesc": "Microsoft reports exploitation of CVE-2026-96951. Ask IT to identify affected Windows devices, apply the right update and verify the required restart.",
  "date": "2026-10-13",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": {
    "text": "Microsoft reported an exploited Windows Shell flaw in its October 13, 2026 security release. The vulnerability, CVE-2026-96951, bypasses a Windows security feature and requires a person to interact with a crafted file or link. Microsoft marks the issue as exploitation detected and lists customer action and a restart as required for the affected Windows updates. Microsoft’s advisory and October release data provide the product-specific details.",
    "links": [
      {
        "phrase": "Microsoft’s advisory",
        "to": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96951",
        "start": 364
      },
      {
        "phrase": "October release data",
        "to": "https://api.msrc.microsoft.com/cvrf/v3.0/cvrf/2026-Oct",
        "start": 389
      }
    ]
  },
  "lead": [
    "For a professional-services firm with retained IT, the next step is to confirm completed updates and restarts, with outstanding devices reported separately."
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "ctaMode": "book",
  "consultation": {
    "title": "Coordinate the security work across your providers.",
    "sub": "Discuss the security-program coordination and evidence review your firm needs. Helm Command’s work is bounded by the agreed scope; retained IT owns patching and routine remediation.",
    "label": "Discuss security-program coordination",
    "to": "/contact/"
  },
  "sections": [
    {
      "h": "What the Windows Shell warning means",
      "ps": [
        {
          "text": "Microsoft identifies this as a Mark of the Web bypass. The attack gets around a protection associated with files from the internet; the documented route depends on user interaction. The advisory explains that mechanism.",
          "links": [
            {
              "phrase": "protection associated with files from the internet",
              "to": "https://support.microsoft.com/en-us/windows/security/information-about-the-attachment-manager-in-microsoft-windows",
              "start": 80
            },
            {
              "phrase": "The advisory",
              "to": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96951",
              "start": 182
            }
          ]
        },
        "For a firm whose work involves receiving documents and links, that requirement makes staff behavior relevant while updates are being completed. Keep your existing process for checking unexpected files and reporting suspicious messages in use. A staff reminder can support the response, but the corrective action in Microsoft’s release is the applicable security update.",
        {
          "text": "Microsoft’s exploitation flag is a reason to prioritize that work. It does not establish that your firm has been attacked. Microsoft published the advisory on October 13, 2026; the Microsoft-authored CVE record does not give an exploitation start date. Our guide to zero-day and known vulnerabilities explains the broader distinction between a public warning and exposure in a particular business.",
          "links": [
            {
              "phrase": "Microsoft-authored CVE record",
              "to": "https://raw.githubusercontent.com/CVEProject/cvelistV5/main/cves/2026/96xxx/CVE-2026-96951.json",
              "start": 181
            },
            {
              "phrase": "guide to zero-day and known vulnerabilities",
              "to": "/resources/zero-day-vs-known-vulnerabilities/",
              "start": 257
            }
          ]
        }
      ]
    },
    {
      "h": "Your Windows version determines the fix",
      "ps": [
        {
          "text": "The affected-product information covers multiple Windows 10, Windows 11 and Windows Server branches. Their fixes vary. Your IT team needs to match the version and edition installed on each device to Microsoft’s current product and update information, including the device’s supported servicing path. Use the affected-product record and Microsoft’s update guidance.",
          "links": [
            {
              "phrase": "affected-product record",
              "to": "https://raw.githubusercontent.com/CVEProject/cvelistV5/main/cves/2026/96xxx/CVE-2026-96951.json",
              "start": 308
            },
            {
              "phrase": "Microsoft’s update guidance",
              "to": "https://msrc.microsoft.com/update-guide/vulnerability/CVE-2026-96951",
              "start": 336
            }
          ]
        },
        {
          "text": "Microsoft’s release data marks a restart as required. Ask IT how it will verify update status after restart and handle devices that cannot complete the process.",
          "links": [
            {
              "phrase": "Microsoft’s release data",
              "to": "https://api.msrc.microsoft.com/cvrf/v3.0/cvrf/2026-Oct",
              "start": 0
            }
          ]
        },
        "For example, if a partner’s laptop is offline during the rollout, agree on when it will reconnect and finish updating. If a server restart would interrupt scheduled work, agree on the maintenance window with IT and keep the device on the outstanding list until completion is verified."
      ]
    },
    {
      "h": "What to ask your IT provider",
      "ps": [
        "You can send your provider this request:",
        {
          "quote": [
            "“Please check our Windows devices against CVE-2026-96951. Confirm the affected versions, the applicable updates and which devices have completed the required restart. For anything outstanding, tell us the reason, who owns the next step and when we should expect another update.”"
          ]
        },
        {
          "text": "Ask for the number of devices checked alongside the result. If some devices have not reported recently, keep that uncertainty visible rather than counting them as updated. You can then decide whether staff need to make a laptop available or approve downtime. The wider process for documenting remediation is covered in our vulnerability-management guide.",
          "links": [
            {
              "phrase": "vulnerability-management guide",
              "to": "/resources/vulnerability-management-new-jersey/",
              "start": 323
            }
          ]
        },
        {
          "text": "Your retained IT provider owns patch deployment and routine remediation. Helm Command can help with bounded security-program coordination and evidence review under the agreed scope. If that coordination is missing in your firm, talk with Helm about security-program coordination.",
          "links": [
            {
              "phrase": "talk with Helm about security-program coordination",
              "to": "/contact/",
              "start": 228
            }
          ]
        }
      ]
    }
  ],
  "updated": "2026-10-24"
}
];
