import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const ciscoEmailArticle: Article = {
  "slug": "cisco-secure-email-gateway-october-2026-exploitation",
  "collection": "blog",
  "title": "Cisco Secure Email Gateway: confirm updates and assess compromise",
  "metaTitle": "Cisco Secure Email Gateway Advisory | Helm",
  "metaDesc": "Confirm updates and assess possible compromise with IT.",
  "date": "2026-10-15",
  "readMin": 5,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": {
    "text": "Cisco's October 14 advisory reports active CVE-2026-76519 exploitation in Secure Email Gateway. Ask your IT provider to check whether your mail service uses an affected installation and explain what its response covers.",
    "links": [
      {
        "phrase": "Cisco's October 14 advisory",
        "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp"
      }
    ]
  },
  "lead": [
    {
      "text": "Physical or virtual gateways with vulnerable AsyncOS, enabled File Reputation assigned to a mail policy, and Content Scanner Tools before 25.3.0.5525 are affected. Crafted attachments can permit file writes and commands with full system access without sign-in or a recipient opening them.",
      "links": [
        {
          "phrase": "Physical or virtual gateways",
          "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp"
        }
      ]
    },
    {
      "text": "CISA added the flaw to its Known Exploited Vulnerabilities catalog on October 14. That gives the provider a concrete reason to prioritize checking your installation.",
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
    "sub": "Discuss the security-program coordination and evidence review your firm needs. Helm Command’s work is bounded by the agreed scope; retained IT owns patching and routine remediation.",
    "label": "Discuss security-program coordination",
    "to": "/contact/"
  },
  "sections": [
    {
      "h": "Find out who operates the gateway",
      "ps": [
        "Start with the person who runs your email service. If the first answer is that the firm uses Microsoft 365, ask whether mail passes through another filtering service before reaching it. The provider should be able to explain that route and identify who operates each part. The check may establish that your firm does not use this particular product.",
        "For a gateway the firm does use, have the operator match the installation to all the affected conditions above, including the scanner and mail-policy settings. Ask for the full installed software version. A branch is a release family; its number alone leaves out the specific release that needs checking.",
        "If a supplier operates the gateway, ask whether your IT provider has obtained its confirmation or is still waiting. An unanswered request stays open. You can help obtain a response through the business relationship while the provider handles the technical check."
      ]
    },
    {
      "h": "Confirm updates",
      "ps": [
        {
          "text": "On licensed, supported AsyncOS releases, scanner 25.3.0.5525 or later fixes the flaw without upgrade or restart. First fixed AsyncOS: 15.5.5-014 and 16.5.0-780; 16.0 must migrate. Cisco recommends pre-16.5 installations migrate to 16.5.0-780.",
          "links": [
            {
              "phrase": "First fixed AsyncOS",
              "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp"
            }
          ]
        },
        "Ask what change the provider has completed. An automatic-update setting describes intended behavior; you need the version the operator observed and when it checked. If it plans a separate software upgrade, ask about timing and any interruption that needs your approval.",
        "If a proposed maintenance window overlaps with a client filing deadline, tell IT and ask how email will be handled during the work. The provider needs to choose the appropriate supported release and verify the result. Your part is to make those business dependencies visible and approve the arrangements.",
        {
          "text": "Keep the update result separate from the compromise assessment. The first tells you what changed; the second explains what the evidence supports about earlier access. Our vulnerability-management guide covers how to connect remediation work to a responsible person and a verified result.",
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
      "h": "Preserve evidence before maintenance",
      "ps": [
        {
          "text": "Attackers can hide evidence; Cisco recommends external-log checks and reviewing every cluster member. With suspected virtual-appliance compromise, preserve forensics before upgrading: upgrades destroy forensic data and logs. Rebuild on a new virtual machine with fixed software, without old configuration imports; renew credentials and cryptographic material, and monitor. For compromised clusters, restore every member. Contact Cisco TAC for suspected physical-appliance compromise.",
          "links": [
            {
              "phrase": "preserve forensics before upgrading",
              "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp"
            }
          ]
        },
        "Forensic work preserves and examines evidence of what happened. Have the responder explain which records it reviewed, what it could not obtain and how those limits affect its conclusion. A message saying a check found nothing needs that context.",
        "Put the gateway operator and the authorized responder in contact before routine changes proceed. They should agree on evidence collection and urgent protective work, including who can approve an email interruption or recovery costs. You need their recommendation and enough explanation to make those decisions.",
        "Consider a hypothetical firm whose operator confirms the scanner fix and proposes a virtual-appliance upgrade that evening. The firm has also engaged a responder because compromise is suspected. Before approving the window, have both parties confirm that the evidence needed from the instance has been preserved. The update ticket can close while the investigation remains open.",
        {
          "text": "If another specialist is needed, agree on that engagement and its authority to act. The incident-response planning guide covers how to prepare contacts and decision responsibilities before several providers need to work together.",
          "links": [
            {
              "phrase": "incident-response planning guide",
              "to": "/resources/incident-response-plan-small-business/"
            }
          ]
        }
      ]
    },
    {
      "h": "Cloud recovery",
      "ps": [
        {
          "text": "Cisco deployed the cloud scanner fix; contacted customers with suspected compromise still need vendor-guided recovery.",
          "links": [
            {
              "phrase": "cloud scanner fix",
              "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp"
            }
          ]
        },
        "Have the person responsible for the service check vendor communications. If your firm buys through a provider, establish where those notices arrive and whether a recovery request is awaiting a reply. The person receiving the message may need someone else at the firm to approve the work.",
        "A general update notice and a customer-specific recovery case answer different questions. Ask what the notice establishes about your own service before drawing a conclusion about earlier access. Keep any recovery case open until the responsible provider explains the remaining action and confirms completion."
      ]
    },
    {
      "h": "Keep a usable handover",
      "ps": [
        "Keep a short note of the installation checked and the verified update result. Give any compromise assessment its own status and identify the responder handling it. For unfinished work, record the next action and when the provider will report back, including any disruption or additional help the firm needs to approve.",
        "Someone taking over the conversation should be able to tell whether IT is waiting for a maintenance window, a supplier reply or an investigation result. They should also be able to see the limits of any conclusion without reconstructing a chain of emails."
      ]
    }
  ]
};

export const ciscoEmailArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "vulnerability-management-new-jersey",
    "incident-response-plan-small-business",
    "zero-day-vs-known-vulnerabilities"
  ],
  "sources": [
    {
      "title": "Cisco Secure Email Gateway advisory",
      "href": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp"
    },
    {
      "title": "CISA: Known Exploited Vulnerabilities catalog, CVE-2026-76519 entry",
      "href": "https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json"
    }
  ]
};
