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
    "text": "Cisco's October 14 advisory reports active exploitation of CVE-2026-76519 in Secure Email Gateway. If your firm uses an affected installation, you need to know whether it has received the fix and what the evidence says about earlier access. An update can close the vulnerability while an investigation remains open.",
    "links": [
      {
        "phrase": "Cisco's October 14 advisory",
        "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp",
        "start": 0
      }
    ]
  },
  "lead": [
    {
      "text": "CISA added the flaw to its Known Exploited Vulnerabilities catalog on October 14, 2026. Ask the person who runs your email service to prioritize checking whether it affects your firm.",
      "links": [
        {
          "phrase": "Known Exploited Vulnerabilities catalog",
          "to": "https://raw.githubusercontent.com/cisagov/kev-data/develop/known_exploited_vulnerabilities.json",
          "start": 27
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
      "h": "Find out whether your mail uses an affected gateway",
      "ps": [
        "If the first answer is that the firm uses Microsoft 365, ask whether mail passes through another filtering service before reaching it. The provider should be able to explain that route and identify who operates each part. The check may establish that your firm does not use this particular product.",
        {
          "text": "Physical or virtual gateways are affected when they run vulnerable AsyncOS software, have File Reputation enabled and assigned to a mail policy, and use Content Scanner Tools earlier than 25.3.0.5525. A crafted email attachment can allow file writes and commands with full system access, without sign-in or the recipient opening it.",
          "links": [
            {
              "phrase": "Physical or virtual gateways",
              "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp",
              "start": 0
            }
          ]
        },
        "Have the operator check all those conditions and provide the full installed software version. A branch number identifies a release family; it leaves out the specific release that needs checking. If a supplier operates the gateway, establish whether your provider has its confirmation or is still waiting. You can help obtain an answer through the business relationship while the operator handles the technical check."
      ]
    },
    {
      "h": "Confirm the update that was applied",
      "ps": [
        {
          "text": "On licensed, supported AsyncOS releases, Content Scanner Tools 25.3.0.5525 or later fixes the flaw without a software upgrade or product restart. The first fixed AsyncOS releases are 15.5.5-014 and 16.5.0-780; the 16.0 branch must migrate to a fixed release. Cisco recommends that installations earlier than 16.5 migrate to 16.5.0-780.",
          "links": [
            {
              "phrase": "first fixed AsyncOS releases",
              "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp",
              "start": 150
            }
          ]
        },
        "Ask for the scanner version the operator observed and when it checked. An automatic-update setting describes intended behavior; it does not confirm that the update arrived. If the provider plans a separate software upgrade, ask about timing and any interruption that needs your approval. Where compromise is suspected, evidence preservation must come before that upgrade.",
        {
          "text": "A proposed maintenance window may overlap with a client filing deadline. Tell IT about the conflict and agree on how email will be handled during the work. The provider chooses the appropriate supported release and verifies the result; you make the business dependencies visible and approve the arrangements. Our vulnerability-management guide explains how to connect remediation work to a responsible person and a verified result.",
          "links": [
            {
              "phrase": "vulnerability-management guide",
              "to": "/resources/vulnerability-management-new-jersey/",
              "start": 313
            }
          ]
        }
      ]
    },
    {
      "h": "Preserve evidence before maintenance",
      "ps": [
        "Attackers with access can hide evidence. Cisco recommends checking external network and firewall logs as well as reviewing each cluster member. Have the responder explain which records it examined, what it could not obtain and how those limits affect its conclusion. A report that found no indicators needs that context.",
        {
          "text": "For suspected compromise of a virtual appliance, Cisco says to preserve forensics before upgrading: upgrading a compromised instance destroys forensic data and logs. Its recovery guidance calls for a new virtual machine running fixed software, a rebuilt configuration without imports from the old appliance, renewed credentials and cryptographic material, and continued monitoring. Restore every member of a cluster containing a compromised appliance. For suspected physical-appliance compromise, contact Cisco TAC.",
          "links": [
            {
              "phrase": "preserve forensics before upgrading",
              "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp",
              "start": 63
            }
          ]
        },
        {
          "text": "Put the gateway operator and the authorized responder in contact before routine maintenance proceeds. They need to agree on evidence collection and urgent protective work, including who can approve an email interruption or recovery costs. If another specialist is needed, agree on the engagement and its authority to act. The incident-response planning guide covers those contacts and decision responsibilities.",
          "links": [
            {
              "phrase": "incident-response planning guide",
              "to": "/resources/incident-response-plan-small-business/",
              "start": 326
            }
          ]
        },
        "Consider a hypothetical firm whose operator confirms the scanner fix and proposes a virtual-appliance upgrade that evening. A responder is already investigating suspected compromise. Before approving the window, have both parties confirm that the evidence needed from the instance has been preserved. The scanner update result and the investigation conclusion should have separate statuses."
      ]
    },
    {
      "h": "Check cloud recovery notices",
      "ps": [
        {
          "text": "Cisco deployed the cloud scanner fix. Customers it contacted about suspected compromise still need vendor-guided recovery.",
          "links": [
            {
              "phrase": "cloud scanner fix",
              "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-esa-afw-zqYJkjxp",
              "start": 19
            }
          ]
        },
        "Check where vendor notices arrive, including through your provider, and whether a recovery request is awaiting approval. A general update notice does not resolve a customer-specific recovery case. Keep that case open until the responsible provider explains the remaining action and confirms completion."
      ]
    },
    {
      "h": "Leave a record someone can use",
      "ps": [
        "Keep the installation checked and verified update result in a short note. Record the compromise assessment separately, with the responder handling it and any limits on the conclusion. For unfinished work, include the next action, the person responsible and when they will report back. Someone taking over should be able to see whether the firm is waiting for a supplier reply, a maintenance approval or an investigation result."
      ]
    }
  ],
  "updated": "2026-10-24"
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
