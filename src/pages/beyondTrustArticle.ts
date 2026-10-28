import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const beyondTrustArticle: Article = {
  "slug": "beyondtrust-remote-support-october-2026",
  "collection": "blog",
  "title": "BeyondTrust patching leaves an earlier-access question open",
  "metaTitle": "BeyondTrust Remote Support: October 2026 patch | Helm",
  "metaDesc": "Check your exposure to BeyondTrust Remote Support, verify the BT26-05 patch and keep the review of possible earlier access open after remediation.",
  "date": "2026-10-16",
  "readMin": 5,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": {
    "text": "BeyondTrust's October 15 advisory disclosed a critical Remote Support vulnerability, CVE-2026-102764. If the product can reach your firm's computers, you have two questions to resolve: whether the patch is in place and whether someone could have accessed the service before it was fixed. A completed update answers only the first.",
    "links": [
      {
        "phrase": "BeyondTrust's October 15 advisory",
        "to": "https://www.beyondtrust.com/trust-center/security-advisories/bt26-05",
        "start": 0
      }
    ]
  },
  "lead": [
    {
      "text": "Remote Support lets technicians connect to and troubleshoot computers from elsewhere. Your firm may encounter it as a tool chosen by an outside IT provider, so checking your own software purchases will not necessarily establish whether it is used.",
      "links": [
        {
          "phrase": "connect to and troubleshoot computers",
          "to": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-beyondtrust",
          "start": 32
        }
      ]
    },
    {
      "text": "BeyondTrust's CVE record describes a flaw in how the product checks the origin of internal messages. Under certain conditions, an attacker can use it to perform file operations on the appliance, the system running the service.",
      "links": [
        {
          "phrase": "BeyondTrust's CVE record",
          "to": "https://raw.githubusercontent.com/CVEProject/cvelistV5/main/cves/2026/102xxx/CVE-2026-102764.json",
          "start": 0
        }
      ]
    },
    {
      "text": "CISA added CVE-2026-102764 to its Known Exploited Vulnerabilities catalog on October 16. The entry calls for mitigation under the vendor's instructions and forensic triage, a review for signs of compromise.",
      "links": [
        {
          "phrase": "Known Exploited Vulnerabilities catalog",
          "to": "https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json",
          "start": 34
        }
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "ctaMode": "book",
  "consultation": {
    "title": "Keep your security decisions and evidence current.",
    "sub": "Discuss the security work and evidence you need to keep current. Helm Command provides program coordination within an agreed scope. Your existing IT arrangements still cover patching and routine remediation.",
    "label": "Discuss security-program support",
    "to": "/contact/"
  },
  "sections": [
    {
      "h": "Establish how Remote Support reaches your firm",
      "ps": [
        "Trace the remote-support connections into your systems, including access used by separate support suppliers. Check the tools and access records against the services in your contracts; your own software purchases may not include a supplier's installation. For BeyondTrust, record whether the service is hosted by BeyondTrust, your firm or a supplier, and what access it holds. Supplier use alone does not establish that anyone accessed your firm.",
        {
          "text": "Keep the patch record for the installation that can reach your firm. If you cannot access that record directly, obtain it from the system operator and record any unresolved gap. The comparison of provider models can help you check which agreement covers the work.",
          "links": [
            {
              "phrase": "comparison of provider models",
              "to": "/resources/managed-service-provider-security-models/",
              "start": 182
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
              "to": "https://www.beyondtrust.com/trust-center/security-advisories/bt26-05",
              "start": 14
            }
          ]
        },
        {
          "text": "Match the installed version to dated confirmation that BT26-05-RS was applied. An installation on 24.3.1 can accept the patch; the version alone cannot confirm its presence. Check completion even if automatic updates are enabled. For unfinished work, assess the proposed interim precautions and any interruption to support before approving them. Keep the applied fix and verification record together, as described in our vulnerability-management guide.",
          "links": [
            {
              "phrase": "vulnerability-management guide",
              "to": "/resources/vulnerability-management-new-jersey/",
              "start": 421
            }
          ]
        },
        {
          "text": "BeyondTrust says all BeyondTrust-hosted Remote Support customers had received the patch by October 9. Check that your service is in that hosted population before relying on the statement.",
          "links": [
            {
              "phrase": "received the patch by October 9",
              "to": "https://www.beyondtrust.com/trust-center/security-advisories/bt26-05",
              "start": 69
            }
          ]
        },
        {
          "text": "BeyondTrust's response also recommends a precautionary patch for self-hosted Privileged Remote Access (PRA), which shares the affected code. The vendor says its internal testing has found no way to exploit this vulnerability in PRA. Record the exact product so you do not apply a Remote Support conclusion to PRA.",
          "links": [
            {
              "phrase": "precautionary patch for self-hosted Privileged Remote Access",
              "to": "https://www.beyondtrust.com/blog/entry/bt26-05",
              "start": 41
            }
          ]
        }
      ]
    },
    {
      "h": "The review needs to reach back to August",
      "ps": [
        {
          "text": "BeyondTrust's timeline dates exploitation to August 29 and discovery to September 28. The patch release began October 8; public disclosure followed on October 15. Include August and September when defining the review of possible earlier access, through the verified patch date. Check the assessment's stated time window and the reason for including or excluding later activity; a review beginning at disclosure leaves the earlier period unanswered.",
          "links": [
            {
              "phrase": "BeyondTrust's timeline",
              "to": "https://www.beyondtrust.com/blog/entry/bt26-05",
              "start": 0
            }
          ]
        },
        {
          "text": "In Mandiant's investigation, the attacker uploaded files, gained full control of an appliance and attempted to extract stored credentials. It also established persistence that could survive reboot or configuration reset and deleted logs. Mandiant recommends treating internet-reachable appliances that ran a vulnerable version during the exploitation window as potentially compromised until reviewed.",
          "links": [
            {
              "phrase": "Mandiant's investigation",
              "to": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-beyondtrust",
              "start": 3
            }
          ]
        },
        {
          "text": "Its guidance also calls for credential and configuration review for customers using BeyondTrust's software-as-a-service (SaaS) version; appliance patching alone does not complete that work. Include that review in your response scope, with authorized access and any required involvement from BeyondTrust Support.",
          "links": [
            {
              "phrase": "credential and configuration review",
              "to": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-beyondtrust",
              "start": 28
            }
          ]
        },
        {
          "text": "If you have evidence of exploitation, open the Severity 1 support request BeyondTrust specifies, citing BT26-05, and treat credentials the appliance stored or injected as exposed. Before approving an interruption, check that the response plan covers both evidence preservation and protective changes in the order required by the current guidance. Appliance operations and forensic collection still require the appropriate authorization and expertise.",
          "links": [
            {
              "phrase": "evidence of exploitation",
              "to": "https://www.beyondtrust.com/blog/entry/bt26-05",
              "start": 12
            }
          ]
        },
        {
          "text": "When compromise is suspected, Mandiant recommends preserving evidence before changes or reboots. For physical appliances and hosted services, it directs customers to BeyondTrust Support for preservation. Agree on that collection with the responder before approving maintenance that might remove evidence.",
          "links": [
            {
              "phrase": "preserving evidence before changes or reboots",
              "to": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-beyondtrust",
              "start": 50
            }
          ]
        },
        "Check which records cover the exposure window, including copies held outside the appliance. Missing records limit the conclusions you can draw. If August or September is missing, keep that gap in the assessment and distinguish what the remaining evidence can establish from what is unknown.",
        {
          "text": "Track patch confirmation and the exposure review separately, each with a responsible person and a next update. Keep the review open after patching is confirmed. Before approving an interruption or additional response work, check the findings and remaining uncertainty. Our incident-response planning guide explains how to agree authority when several providers need to act.",
          "links": [
            {
              "phrase": "incident-response planning guide",
              "to": "/resources/incident-response-plan-small-business/",
              "start": 273
            }
          ]
        },
        {
          "text": "Related reading: Cybersecurity for professional services firms.",
          "links": [
            {
              "phrase": "Cybersecurity for professional services firms",
              "to": "/professional-services/",
              "start": 17
            }
          ]
        }
      ]
    }
  ],
  "updated": "2026-10-24"
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
      "href": "https://cloud.google.com/blog/topics/threat-intelligence/armory-castle-exploits-beyondtrust"
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
