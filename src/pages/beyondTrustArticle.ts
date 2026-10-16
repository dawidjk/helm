import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const beyondTrustArticle: Article = {
  "slug": "beyondtrust-remote-support-october-2026",
  "collection": "blog",
  "title": "BeyondTrust Remote Support: what to ask your IT provider",
  "metaTitle": "BeyondTrust Remote Support: October 2026 patch | Helm",
  "metaDesc": "Check whether your IT provider uses BeyondTrust Remote Support, confirm the BT26-05 patch and assign review of possible access before the October disclosure.",
  "date": "2026-10-16",
  "readMin": 4,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": {
    "text": "BeyondTrust's October 15 advisory disclosed a critical Remote Support vulnerability, CVE-2026-102764. Ask your IT provider whether it uses the product to connect to your firm and who operates that service. If it does, you need confirmation of the applied patch and a separate answer about possible access before disclosure.",
    "links": [
      {
        "phrase": "BeyondTrust's October 15 advisory",
        "to": "https://www.beyondtrust.com/trust-center/security-advisories/bt26-05"
      }
    ]
  },
  "lead": [
    {
      "text": "Remote Support lets technicians connect to and troubleshoot computers from elsewhere. Your firm may encounter it as a tool chosen by an outside IT provider, so checking your own software purchases will not necessarily establish whether it is used.",
      "links": [
        {
          "phrase": "connect to and troubleshoot computers",
          "to": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-beyondtrust/"
        }
      ]
    },
    {
      "text": "BeyondTrust's CVE record describes a flaw in how the product checks the origin of internal messages. Under certain conditions, an attacker can use it to perform file operations on the appliance, the system running the service.",
      "links": [
        {
          "phrase": "BeyondTrust's CVE record",
          "to": "https://raw.githubusercontent.com/CVEProject/cvelistV5/main/cves/2026/102xxx/CVE-2026-102764.json"
        }
      ]
    },
    {
      "text": "CISA added CVE-2026-102764 to its Known Exploited Vulnerabilities catalog on October 16. The entry calls for mitigation under the vendor's instructions and forensic triage, a review for signs of compromise. Confirm who will handle the fix and who will assess possible earlier access.",
      "links": [
        {
          "phrase": "Known Exploited Vulnerabilities catalog",
          "to": "https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json"
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
    "sub": "Book a call to discuss the security-program coordination and evidence review your firm needs. Helm Command's work is bounded by the agreed scope; retained IT owns patching and routine remediation.",
    "label": "Book a consultation",
    "to": "/contact/"
  },
  "sections": [
    {
      "h": "Where your provider uses the product",
      "ps": [
        "Have your IT provider check the tools its technicians use, including any separate support supplier with access to your systems. For BeyondTrust, establish whether BeyondTrust hosts the service or your firm or a supplier runs it. That determines who can confirm its patch status. Ask how the installation can reach your computers and what access it holds; a supplier's use of BeyondTrust alone does not establish that someone accessed your firm.",
        {
          "text": "If another supplier operates the system, your IT provider may have to request the patch record from it. Agree who will follow up and when you will hear back. Our comparison of provider models can help resolve responsibilities when different firms handle IT and security.",
          "links": [
            {
              "phrase": "comparison of provider models",
              "to": "/resources/managed-service-provider-security-models/"
            }
          ]
        }
      ]
    },
    {
      "h": "What counts as patch confirmation",
      "ps": [
        {
          "text": "BeyondTrust's BT26-05 advisory lists all Remote Support versions through 26.2.3 as affected. The BT26-05-RS patch applies to versions 24.3.1 through 26.2.3. Earlier installations must upgrade before applying it. Self-hosted customers not subscribed to automatic updates need to apply the patch manually.",
          "links": [
            {
              "phrase": "BT26-05 advisory",
              "to": "https://www.beyondtrust.com/trust-center/security-advisories/bt26-05"
            }
          ]
        },
        "Ask the operator for the installed version and dated confirmation that BT26-05-RS was applied. An installation on 24.3.1 can accept the patch; the version alone cannot confirm its presence. Check completion even if automatic updates are enabled. If work remains, ask what interim precautions IT recommends and whether they would interrupt support.",
        {
          "text": "BeyondTrust says all BeyondTrust-hosted Remote Support customers had received the patch by October 9. Ask your provider to confirm that this statement covers the service it uses for your firm.",
          "links": [
            {
              "phrase": "received the patch by October 9",
              "to": "https://www.beyondtrust.com/trust-center/security-advisories/bt26-05"
            }
          ]
        },
        {
          "text": "BeyondTrust's response also recommends a precautionary patch for self-hosted Privileged Remote Access (PRA), which shares the affected code. The vendor says its internal testing has found no way to exploit this vulnerability in PRA. The provider should identify which product it checked.",
          "links": [
            {
              "phrase": "precautionary patch for self-hosted Privileged Remote Access",
              "to": "https://www.beyondtrust.com/blog/entry/bt26-05"
            }
          ]
        },
        {
          "text": "Use the verification approach described in our vulnerability-management guide: record the applied fix and the person who checked it.",
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
      "h": "The review needs to reach back to August",
      "ps": [
        {
          "text": "BeyondTrust's timeline dates exploitation to August 29 and discovery to September 28. The patch release began October 8; public disclosure followed on October 15. August and September therefore belong in the review of possible earlier access. The incident responder, the person or team investigating possible compromise, should include the period before the verified patch date and decide what later activity needs review.",
          "links": [
            {
              "phrase": "BeyondTrust's timeline",
              "to": "https://www.beyondtrust.com/blog/entry/bt26-05"
            }
          ]
        },
        {
          "text": "In Mandiant's investigation, the attacker uploaded files, gained full control of an appliance and attempted to extract stored credentials. It also established persistence that could survive reboot or configuration reset and deleted logs. Mandiant recommends treating internet-reachable appliances that ran a vulnerable version during the exploitation window as potentially compromised until reviewed.",
          "links": [
            {
              "phrase": "Mandiant's investigation",
              "to": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-beyondtrust/"
            }
          ]
        },
        {
          "text": "Its guidance also calls for credential and configuration review for customers using BeyondTrust's software-as-a-service (SaaS) version; appliance patching alone does not complete that work. Ask who will assess that exposure and whether BeyondTrust Support or another authorized responder needs to be involved.",
          "links": [
            {
              "phrase": "credential and configuration review",
              "to": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-beyondtrust/"
            }
          ]
        },
        {
          "text": "BeyondTrust asks customers with evidence of exploitation to open a Severity 1 support request citing BT26-05 and to treat credentials the appliance stored or injected as exposed. The operator and responder should agree the order of protective changes and evidence preservation, including any interruption you need to approve.",
          "links": [
            {
              "phrase": "evidence of exploitation",
              "to": "https://www.beyondtrust.com/blog/entry/bt26-05"
            }
          ]
        },
        {
          "text": "When compromise is suspected, Mandiant recommends preserving evidence before changes or reboots. For physical appliances and hosted services, it directs customers to BeyondTrust Support for preservation. Agree on that collection with the responder before approving maintenance that might remove evidence.",
          "links": [
            {
              "phrase": "preserving evidence before changes or reboots",
              "to": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-beyondtrust/"
            }
          ]
        },
        "Ask which records are available, including copies held outside the appliance. Missing records limit what the responder can conclude. If they do not cover August and September, have the responder explain the gap and what can still be assessed.",
        {
          "text": "Keep the review assigned after patching is confirmed, with a date for the next report. The person at your firm who can approve an interruption or additional response work should receive that report. Our incident-response planning guide explains how to agree authority when several providers need to act.",
          "links": [
            {
              "phrase": "incident-response planning guide",
              "to": "/resources/incident-response-plan-small-business/"
            }
          ]
        }
      ]
    }
  ]
};

export const beyondTrustArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "vulnerability-management-new-jersey",
    "incident-response-plan-small-business",
    "managed-service-provider-security-models"
  ],
  "sources": [
    {
      "title": "BeyondTrust: BT26-05 security advisory",
      "href": "https://www.beyondtrust.com/trust-center/security-advisories/bt26-05"
    },
    {
      "title": "BeyondTrust: investigation and response to BT26-05",
      "href": "https://www.beyondtrust.com/blog/entry/bt26-05"
    },
    {
      "title": "Mandiant: ARMORY CASTLE Exploits BeyondTrust",
      "href": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-beyondtrust/"
    },
    {
      "title": "BeyondTrust-authored CVE-2026-102764 record",
      "href": "https://raw.githubusercontent.com/CVEProject/cvelistV5/main/cves/2026/102xxx/CVE-2026-102764.json"
    },
    {
      "title": "CISA: Known Exploited Vulnerabilities catalog (CVE-2026-102764)",
      "href": "https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json"
    }
  ]
};
