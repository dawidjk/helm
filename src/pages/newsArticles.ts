import type {Article} from './articles';

export const newsArticles: Article[] = [
  {
    "slug": "meraki-october-2026-security-update",
    "collection": "blog",
    "title": "Cisco’s October Meraki update: some fixes are still on the way",
    "metaTitle": "Meraki October Update: Some Fixes Still Pending | Helm",
    "metaDesc": "Cisco’s October Meraki fixes arrive on different schedules. Understand the device-specific caveats, status labels and interruptions to discuss with your IT provider.",
    "date": "2026-10-09",
    "updated": "2026-10-10",
    "readMin": 3,
    "lane": "Professional services",
    "laneTo": "/professional-services/",
    "intro": "Some Meraki equipment can receive Cisco’s October security fixes now. Other devices are waiting for releases expected between mid-October and mid-November. If an outside IT provider looks after your firm’s network, that’s worth a conversation: equipment in the same office may need different updates on different schedules.",
    "lead": [
      {
        "text": "Cisco published the advisory on October 7, 2026, and revised it on October 8. It covers Campus Gateways, MG cellular gateways, MR wireless access points, MS switches, MV cameras and MX security appliances. Cisco reports no known malicious exploitation and says there are no workarounds that address the vulnerabilities.",
        "links": [
          {
            "phrase": "Cisco published the advisory",
            "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-hardening-meraki-os-drbEX9GH"
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
          "In the advisory’s MX section, Cisco lists release 19.2.9. The footnote says it’s available only for Z3 devices. That same note directs administrators to contact Meraki support if either 18.107.14 or 19.2.9 is missing from Dashboard, the service used to manage the equipment.",
          "Those details explain why the provider needs to check the model and the software branch each device is running. Choosing a release from a headline, or assuming that a higher version number settles the question, could miss the qualification that applies to your equipment.",
          {
            "text": "There can also be an extra step between finding the right update and installing it. Meraki’s firmware-management documentation describes upgrade paths that require an intermediate release. Your provider needs to check that path and the release notes for compatibility with your network.",
            "links": [
              {
                "phrase": "firmware-management documentation",
                "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Managing_Firmware_Upgrades"
              }
            ]
          },
          "For releases still planned for mid-October, late October or mid-November, Cisco’s date is a reason to check availability again. It isn’t your firm’s installation date. The provider still has to confirm that the update is available for your equipment and work out how to install it. If it recommends a temporary restriction while you wait, you’ll also need to understand what that changes for staff and what remains unresolved."
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
                "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Managing_Firmware_Upgrades"
              }
            ]
          },
          {
            "text": "There’s a similar distinction after an upgrade. In Meraki’s documented MS switch workflow, “Completed” can appear after a 30-minute timeout. A switch locked to a firmware version by Meraki support can also be skipped while the group’s upgrade is considered complete.",
            "links": [
              {
                "phrase": "documented MS switch workflow",
                "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Meraki_Switching_Firmware_Upgrades"
              }
            ]
          },
          "So a completed upgrade job still needs a check of the software actually running on the devices. If something was skipped, stayed on the old version or had to be rolled back, the firm needs to know that work remains. The timeout behavior above belongs to the documented MS workflow; your provider will need appropriate checks for the other device families, too.",
          "This is also why it’s worth agreeing beforehand on what the provider will test once the equipment comes back online. A successful change should include checking the business functions you rely on, as well as confirming the installed version."
        ]
      },
      {
        "h": "Plan the interruption around the firm’s work",
        "ps": [
          {
            "text": "Meraki’s upgrade guidance describes a connectivity interruption during reboot and an additional delay before Dashboard information refreshes. It also explains how upgrades are scheduled and administrators are notified, so your provider should check whether a change is already booked.",
            "links": [
              {
                "phrase": "upgrade guidance",
                "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Meraki_Firmware_Release_Process"
              }
            ]
          },
          "A maintenance window that works for IT might overlap with a remote hearing or a tax filing. That’s information the firm needs to contribute. Agree on a time, who to contact if something fails and how the provider would recover from a problem.",
          "With fixes arriving on different schedules, the first round of upgrades may leave some equipment waiting on Cisco. Agreeing on when your provider will check again keeps those devices in the plan after the available updates are installed."
        ]
      }
    ]
  }
];
