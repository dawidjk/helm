import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const ciscoEmailArticle: Article = {
  "slug": "cisco-secure-email-gateway-october-2026-exploitation",
  "collection": "blog",
  "title": "Cisco Secure Email Gateway: confirm updates and assess compromise",
  "metaTitle": "Cisco Secure Email Gateway Advisory | Helm",
  "metaDesc": "Check whether your email gateway is affected, verify its update and keep possible compromise under separate review.",
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
      "text": "CISA added the flaw to its Known Exploited Vulnerabilities catalog on October 14, 2026. Prioritize checking whether your mail passes through an affected gateway, even if your mailbox is hosted elsewhere.",
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
    "title": "Keep your security decisions and evidence current.",
    "sub": "Discuss the security work and evidence you need to keep current. Helm Command provides program coordination within an agreed scope. Your existing IT arrangements still cover patching and routine remediation.",
    "label": "Discuss security-program support",
    "to": "/contact/"
  },
  "sections": [
    {
      "h": "Find out whether your mail uses an affected gateway",
      "ps": [
        "Start with the route your incoming mail takes. Microsoft 365 may be the final mailbox while a separate gateway filters messages first. Check your mail-service records for that gateway and its operator. If the route contains no Cisco Secure Email Gateway, record that finding before moving on to another product’s advisory.",
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
        "Compare the full installed software version and scanner version with all the affected conditions. A branch number identifies a release family but leaves out the specific release. If you cannot access the gateway, keep its status unconfirmed until you have an installation-specific record; a general supplier assurance is not that record. Do not change an appliance you are not authorized to administer."
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
        "Check the observed scanner version and the time it was checked. An automatic-update setting describes intended behavior; it does not confirm that the update arrived. Review any separate software upgrade for timing and interruption before approving it. Where compromise is suspected, preserve the required evidence before that upgrade.",
        {
          "text": "Before approving a maintenance window, check whether it overlaps a filing deadline and how you will receive and send email during the work. Keep the supported-release decision, authorization and verification result together. The vulnerability-management guide explains how to connect remediation work to a responsible person and a verified result.",
          "links": [
            {
              "phrase": "vulnerability-management guide",
              "to": "/resources/vulnerability-management-new-jersey/",
              "start": 229
            }
          ]
        }
      ]
    },
    {
      "h": "Preserve evidence before maintenance",
      "ps": [
        "Attackers with access can hide evidence. Cisco recommends checking external network and firewall logs as well as each cluster member. When reviewing the assessment, check which records were examined and which were unavailable. A finding of no indicators has to be read within those limits; it does not erase a gap in the evidence.",
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
          "text": "Before routine maintenance proceeds, confirm that the recovery plan covers evidence collection, urgent protective work and authorization for an email interruption or recovery costs. Keep specialist work within its agreed authority; do not improvise forensic collection on the appliance. The incident-response planning guide covers those contacts and decision responsibilities.",
          "links": [
            {
              "phrase": "incident-response planning guide",
              "to": "/resources/incident-response-plan-small-business/",
              "start": 291
            }
          ]
        },
        "If a scanner fix is confirmed while suspected compromise is still under investigation, keep two statuses in your record. Before approving a virtual-appliance upgrade, verify that the required evidence has been preserved. The update result answers whether the flaw was fixed; the investigation must still establish what happened before the fix."
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
        "Check the vendor notices for your installation and any open recovery case. A general update notice does not resolve a customer-specific recovery request. Keep the case open until you can account for the remaining actions and their completion evidence."
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
