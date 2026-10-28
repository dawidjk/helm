import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const panManagementArticle: Article = {
  "slug": "palo-alto-pan-os-management-interface-attacks",
  "collection": "blog",
  "title": "Palo Alto firewall attacks target the way you manage them",
  "metaTitle": "Palo Alto firewall attacks target the way you manage them | Helm",
  "metaDesc": "Check your firewall's admin access, preserve a safe management route, and verify the exact installed fix before closing this urgent security task.",
  "date": "2026-10-28",
  "readMin": 3,
  "lane": "All industries",
  "laneTo": "/",
  "intro": {
    "text": "Palo Alto Networks reports active exploitation against internet-exposed management interfaces. Its advisory covers PHP vulnerabilities CVE-2026-109618 and CVE-2026-109619 in PAN-OS firewalls and Panorama. If you use these products, establish how your administration interface can be reached before treating this as a routine update. Vendor advisory.",
    "links": [
      {
        "phrase": "Vendor advisory",
        "to": "https://security.paloaltonetworks.com/CVE-2026-109618",
        "className": "contextual-resource-link"
      }
    ]
  },
  "lead": [
    {
      "text": "The affected surface is the HTTPS web UI and XML API: the browser-based administration interface and its programmatic counterpart. Data ports are affected when a management profile is attached. GlobalProtect portal, gateway and Clientless VPN are excluded. Check the administration route separately from the connection your staff use for remote work. Affected services.",
      "links": [
        {
          "phrase": "Affected services",
          "to": "https://security.paloaltonetworks.com/CVE-2026-109618",
          "className": "contextual-resource-link"
        }
      ]
    }
  ],
  "sections": [
    {
      "h": "Keep a safe route in while removing public access",
      "ps": [
        "Start with your own device inventory and configuration. Record the product, complete software version and the interfaces that permit administration. Check whether those interfaces are reachable from the internet; keep any testing within systems you own or are authorized to assess. If you cannot establish exposure, leave that question open in your response record.",
        {
          "text": "Palo Alto Networks' management guidance recommends restricting access to approved management devices and using a jump server, a controlled system you sign into before administering the firewall. Apply the restriction to the management path you actually use, including any data port configured for administration.",
          "links": [
            {
              "phrase": "management guidance",
              "to": "https://live.paloaltonetworks.com/t5/community-blogs/critical-recommendations-for-deployment-guides-how-to-secure-the/ba-p/464431",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Before changing access rules, confirm that your trusted administration route works and that you have an authorized recovery method. Then restrict access and test again: the trusted route should still work, while the unwanted external route should not. Make configuration changes only with the necessary administrative access and a recovery plan. A rushed restriction that locks you out leaves the update unfinished."
      ]
    },
    {
      "h": "Check the complete version, including the hotfix",
      "ps": [
        {
          "text": "The October 28 update confirms release of 11.2.7-h23, 11.2.13-h4 and 11.2.16-h1. Other entries still carry future release estimates. The FAQ also distinguishes 11.2.10-h16, which fixes PHP only, from h17, described as covering PHP and Brotli; h17 availability remains unverified here. Release table and FAQ.",
          "links": [
            {
              "phrase": "Release table and FAQ",
              "to": "https://security.paloaltonetworks.com/CVE-2026-109618",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Use the current vendor table to match your installed branch to an available fixed release. An estimated release date is not a completed update. After installation, read back the running version from each affected device and retain the result with your access checks. If a device is still waiting for a fix or cannot be updated, record the remaining exposure, the restriction in place and the next action with a due time.",
        "Keep patch completion separate from compromise assessment. An installed fix does not establish that the device escaped an earlier attack or that an existing intrusion has been removed. If you find suspicious activity, preserve the evidence and follow your incident-response procedure; do not close that investigation because the version check passed."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "ctaMode": "inline"
};

export const panManagementArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "php-runtime-security-update",
    "network-hardening-small-business",
    "vulnerability-management-new-jersey"
  ],
  "sources": [
    {
      "title": "Palo Alto Networks: PHP vulnerabilities affecting PAN-OS and Panorama",
      "href": "https://security.paloaltonetworks.com/CVE-2026-109618"
    },
    {
      "title": "Palo Alto Networks: Secure management access to your device",
      "href": "https://live.paloaltonetworks.com/t5/community-blogs/critical-recommendations-for-deployment-guides-how-to-secure-the/ba-p/464431"
    }
  ]
};
