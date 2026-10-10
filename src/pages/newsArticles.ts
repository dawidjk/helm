import type {Article} from './articles';

export const newsArticles: Article[] = [
  {
    "slug": "meraki-october-2026-security-update",
    "title": "Cisco Meraki’s October security update: what to ask your IT provider to verify",
    "metaTitle": "Meraki October 2026 Update: Verify Firmware | Helm",
    "metaDesc": "Ask your IT provider to match Meraki devices to the October advisory, track pending fixes and retain evidence of installed firmware and completed checks.",
    "date": "2026-10-09",
    "readMin": 6,
    "lane": "Professional services",
    "laneTo": "/professional-services/",
    "intro": "If your firm uses Meraki equipment, ask your IT provider for a device-by-device answer to the October advisory. You need the installed version, the applicable fix and evidence of what still needs work. A general assurance that updates are handled leaves those questions open.",
    "takeaway": "For a New Jersey law, accounting or other professional-services firm, the useful outcome is a short status record you can review with the provider. It should show which equipment has been checked, what the provider plans to change and where the firm needs to approve an interruption.",
    "readingLayout": true,
    "organizationByline": true,
    "hideVisual": true,
    "ctaMode": "book",
    "sections": [
      {
        "h": "What Cisco reported",
        "ps": [
          "Cisco published its Meraki security advisory on October 7, 2026, and revised it October 8. It covers Campus Gateways, MG gateways, MR access points, MS switches, MV cameras and MX appliances. Cisco reports no known malicious exploitation and no workaround that addresses the flaws.",
          {
            "text": "Fixes differ by product and firmware branch. Some entries remain planned for mid-October, late October or mid-November. The MX footnote limits 19.2.9 to Z3 devices; have IT contact Meraki support if 18.107.14 or 19.2.9 is unavailable in Dashboard. Use the current advisory’s product-specific release guidance for the exact match.",
            "links": [
              {
                "phrase": "current advisory’s product-specific release guidance",
                "to": "https://sec.cloudapps.cisco.com/security/center/content/CiscoSecurityAdvisory/cisco-sa-hardening-meraki-os-drbEX9GH"
              }
            ]
          }
        ]
      },
      {
        "h": "Ask which equipment was checked",
        "ps": [
          "Start with the provider’s current inventory. Ask it to include every location and any company equipment used by remote staff. A spare device that may return to service belongs in the review too.",
          "For each device, request its model, location, current firmware and responsible administrator. Have the provider record when it checked those details. If another supplier manages equipment at a shared office, assign someone to obtain that supplier’s answer.",
          "Keep an unresolved device visible. “We don’t have access to that network yet” tells you which problem to solve. Excluding it from the list would make the result appear more complete than the work performed."
        ]
      },
      {
        "h": "Get an exact release decision",
        "ps": [
          "Ask the provider to connect each device to the relevant advisory entry and explain the proposed version. If it recommends staying on a release, changing branches or contacting support, have it record the technical reason and any dependency.",
          {
            "text": "Meraki’s firmware management documentation describes the Dashboard “Good” status in terms of the firmware-maintenance timeline. It also describes upgrade barriers that can require an intermediate release. For this review, ask for more than a green status or a higher-looking version number. The provider needs to reconcile the advisory, supported upgrade path and device model.",
            "links": [
              {
                "phrase": "firmware management documentation",
                "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Managing_Firmware_Upgrades"
              }
            ]
          },
          "A useful question is: “Which documented release addresses this advisory for this device, and what has to happen before we can install it?” Keep the answer with the change ticket so a different technician can follow it later.",
          "Avoid choosing firmware yourself from a news article. The provider should review compatibility and the release notes for your environment, including any known issues that affect the work your firm relies on."
        ]
      },
      {
        "h": "Give pending releases an owner",
        "ps": [
          "For equipment waiting on a release or a support response, ask for a dated follow-up. The record should identify the affected device, what the provider is waiting for and who will check again.",
          "Distinguish a vendor’s expected release date from your firm’s installation date. Before promising completion, the provider still needs to confirm availability and a supported path. If a date moves, ask it to update the work record and explain whether the recommended interim arrangement has changed.",
          "You might use four practical states: verified on an applicable fix, change scheduled, waiting on the vendor, or applicability still under review. These are suggested reporting labels, not Meraki product statuses. Give every unfinished entry a next action.",
          "Ask the provider to explain any proposed temporary restriction and its business impact. Record what it can reduce, what remains unresolved and who approves it. Do not close the firmware issue merely because a temporary measure was applied."
        ]
      },
      {
        "h": "Agree on the interruption before the change",
        "ps": [
          "Tell IT which work must remain available during the proposed window. For an accounting office, that might include a filing session or access to a hosted tax application. For a law firm, it could be a remote hearing. These are planning examples; the provider needs your actual schedule.",
          {
            "text": "Meraki documents a reboot interruption during upgrades and notes that Dashboard information can take additional time to refresh. Its firmware release process also explains scheduled upgrades and administrator notifications. Check what is already scheduled so the firm and provider are working from the same plan.",
            "links": [
              {
                "phrase": "firmware release process",
                "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Meraki_Firmware_Release_Process"
              }
            ]
          },
          "Ask who will be available during the change, who can authorize recovery steps and how staff will report a problem. Have IT identify the business checks it will perform afterward. Agree on which failure would trigger a rollback and how the security issue would be tracked if that happened."
        ]
      },
      {
        "h": "Verify the running version afterward",
        "ps": [
          {
            "text": "Meraki’s switch-upgrade documentation says certain “Completed” statuses can appear after a timeout. A support-locked switch can also be skipped. Those details apply to the documented switching workflow; other device families need their own appropriate verification.",
            "links": [
              {
                "phrase": "switch-upgrade documentation",
                "to": "https://documentation.meraki.com/Platform_Management/Product_Information/Compatibility_and_Firmware/Firmware_Upgrades/Meraki_Switching_Firmware_Upgrades"
              }
            ]
          },
          "Request dated evidence of the installed firmware for the devices in scope, plus the agreed business-function checks. Ask the provider to identify anything offline, skipped, rolled back or still running the previous version.",
          "Suppose a review covers eight devices and the provider verifies seven. The update to leadership should identify the eighth device and its next action. A single “complete” label for the office would hide the unfinished work.",
          "Keep detailed exports in the firm’s approved records location. A leadership summary can refer to them without circulating network details more widely than necessary."
        ]
      },
      {
        "h": "A request you can send to your provider",
        "ps": [
          "Please review Cisco’s October Meraki advisory against the equipment you manage for us, including other offices and company equipment used remotely.",
          "For each device, please record the model, installed firmware, applicable advisory entry and proposed action. Include the supported upgrade path and any support case or release dependency.",
          "Please confirm the change window, expected interruption, recovery contact and post-change business checks. For completed work, retain dated installed-version evidence and identify any devices that were skipped, rolled back or could not be verified.",
          "For everything still open, please name the owner and next review date. Let us know which decision or approval you need from us."
        ]
      },
      {
        "h": "Keep responsibility with the agreed owner",
        "ps": [
          {
            "text": "Your retained IT provider should carry out the firmware work under your agreement. Helm Command can maintain risk and evidence records and coordinate assigned actions within its written program scope. Routine patching and hands-on remediation remain with the responsible IT team unless separately authorized.",
            "links": [
              {
                "phrase": "Helm Command",
                "to": "/helm-command/"
              }
            ]
          },
          {
            "text": "For the broader process, use Helm’s vulnerability-management guide. The network-hardening checklist covers ongoing configuration work, and the guide to known vulnerabilities and zero-days explains how to assess a new advisory.",
            "links": [
              {
                "phrase": "vulnerability-management guide",
                "to": "/resources/vulnerability-management-new-jersey/"
              },
              {
                "phrase": "network-hardening checklist",
                "to": "/resources/network-hardening-small-business/"
              },
              {
                "phrase": "guide to known vulnerabilities and zero-days",
                "to": "/resources/zero-day-vs-known-vulnerabilities/"
              }
            ]
          }
        ]
      }
    ]
  }
];
