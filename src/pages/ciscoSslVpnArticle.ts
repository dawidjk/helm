import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const ciscoSslVpnArticle: Article = {
  "slug": "cisco-asa-ftd-vpn-patch-sign-in-protection",
  "collection": "blog",
  "title": "A Cisco VPN mitigation can weaken sign-in",
  "metaTitle": "A Cisco VPN mitigation can weaken sign-in | Helm",
  "metaDesc": "Plan a Cisco VPN update around recovery access and working sign-in protections. Check the affected setup and test remote work after the change.",
  "date": "2026-10-29",
  "readMin": 4,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "Cisco has disclosed an actively exploited VPN flaw, but one of its mitigations comes with a cost: weaker sign-in protection. If your business uses the affected remote-access setup, aim for the fixed software release while keeping the authentication controls you rely on.",
  "lead": [
    {
      "text": "The October 28 advisory for CVE-2026-76418 describes an unauthenticated attacker forcing a device to restart. The reported impact is denial of service, not code execution or data theft. Cisco says it became aware of active exploitation in October.",
      "links": [
        {
          "phrase": "October 28 advisory for CVE-2026-76418",
          "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-tunnel-dos-s6mgkb75",
          "className": "contextual-resource-link"
        }
      ]
    },
    "For a business that depends on its VPN, an interruption can still be expensive in time. If people need that connection to reach a work application, consider what they can do while it is unavailable. That question belongs in the update plan before anyone starts changing the firewall."
  ],
  "sections": [
    {
      "h": "Check the configuration before changing it",
      "ps": [
        "The affected scope combines a vulnerable release of Cisco Adaptive Security Appliance (ASA) or Firewall Threat Defense (FTD) software, a reachable SSL VPN login service, and secondary authentication in the tunnel groups Cisco specifies. A successful VPN login is not required for exploitation.",
        {
          "text": "Only inspect or change devices you are authorized to manage. If your permissions do not cover a step, record the gap and stop there. Start with a read-only inventory in your existing management interface. Record the model and exact installed release, then compare the running configuration with the advisory's checks. Look for secondary-authentication-server-group in the relevant tunnel groups, including DefaultWEBVPNGroup, following Cisco's distinction between configurations with and without the group list enabled. The displayed login profiles alone are insufficient.",
          "links": [],
          "codePhrases": [
            "secondary-authentication-server-group",
            "DefaultWEBVPNGroup"
          ]
        },
        "Leave an unanswered check marked unconfirmed. Being able to connect from your laptop does not settle whether the device is affected. Nor does owning another Cisco product. You need the software and configuration evidence before deciding which devices need this particular fix. Do not try to reproduce the attack on a working VPN."
      ]
    },
    {
      "h": "Plan the update around recovery",
      "ps": [
        {
          "text": "Cisco says no workaround removes the flaw. Removing secondary authentication as a mitigation lowers protection. Use the advisory's fixed-release tables to choose the appropriate fix for your installed branch.",
          "links": [
            {
              "phrase": "fixed-release tables",
              "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-tunnel-dos-s6mgkb75",
              "className": "contextual-resource-link"
            }
          ]
        },
        "A configuration change may seem attractive when you cannot interrupt remote work immediately. The trade-off needs an explicit decision: which sign-in protection would you lose, and for how long? Do not treat an authentication change as a routine substitute for the upgrade. Keep legitimate controls in place while you prepare the supported fix.",
        {
          "text": "For ASA, Cisco's upgrade-planning guide covers compatibility, intermediate versions and configuration backups. Use the corresponding upgrade instructions for your product and deployment. A version number from a security table is a target to validate against those requirements, not permission to skip them.",
          "links": [
            {
              "phrase": "upgrade-planning guide",
              "to": "https://www.cisco.com/c/en/us/td/docs/security/asa/upgrade/asa-upgrade/planning.html",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Before starting, confirm you have an authorized recovery route that does not depend on the VPN you are changing. Can you still reach the management interface if remote access does not return? Keep the recovery instructions and required access available somewhere you can reach during the interruption. If that route is untested, resolve it before starting the upgrade.",
        "Choose the earliest maintenance window you can support safely, allowing for a restart and checks afterward. Tell affected users when they may lose access and how you will tell them it is restored. Identify which work can continue through existing approved routes and which work must wait. Avoid improvising a new remote-access arrangement during the change."
      ]
    },
    {
      "h": "Test the work people need to do",
      "ps": [
        "After the update, check the running software version against the release you selected. Then connect from outside the office using the normal sign-in process. Confirm that the expected authentication checks are still enforced and open a work application that needs the VPN.",
        "If different groups use different connection profiles, include those paths in your checks. Your own successful login is a useful result, but it does not prove that everyone can resume work. Give the checks enough time within the maintenance window to investigate a failed sign-in or an application that remains unreachable.",
        "Close the update only when you have recorded the running fixed release and confirmed that the required sign-in protections and business connections work. If a check fails, keep the change open and use the recovery plan you prepared before the interruption."
      ]
    }
  ],
  "takeaway": "",
  "hideVisual": true,
  "readingLayout": true,
  "ctaMode": "inline"
};

export const ciscoSslVpnArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "tailscale-ssh-serve-security-update",
    "palo-alto-pan-os-management-interface-attacks",
    "disaster-recovery-small-business"
  ],
  "sources": [
    {
      "title": "Cisco: ASA and FTD SSL VPN denial-of-service advisory",
      "href": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-asaftd-tunnel-dos-s6mgkb75"
    },
    {
      "title": "Cisco: Planning an ASA upgrade",
      "href": "https://www.cisco.com/c/en/us/td/docs/security/asa/upgrade/asa-upgrade/planning.html"
    }
  ]
};
