import type {Article} from './articles';
export const findingGuides: Article[] = [
  {
  "slug": "fix-dmarc-monitoring-policy",
  "title": "Move a monitoring-only DMARC policy toward enforcement",
  "metaDesc": "Review senders, alignment and reports before changing p=none. Publish and test a scoped DMARC policy with delivery checks and rollback ready.",
  "date": "2026-10-14",
  "readMin": 16,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "Before you change a monitoring-only DMARC policy, test the mail your business depends on. A low failure percentage can hide an entire low-volume invoicing route. Tightening the policy while that route still fails DMARC can disrupt legitimate messages.",
  "lead": [
    "A record with p=none lets you collect authentication reports without requesting quarantine or rejection for DMARC failures. Check which services send your mail and whether their messages pass DMARC at outside receivers. Then choose a policy for the domain's use, publish the change in authoritative DNS and test delivery while you can still restore the saved record."
  ],
  "sections": [
    {
      "h": "What a stricter policy changes",
      "ps": [
        "A stricter policy can affect a legitimate sender as readily as an unauthorized one when both fail DMARC. An invoice tool signing only with its vendor domain, for example, can pass DKIM and still fail alignment with your business From address. Fix that sender setup before changing policy.",
        "DMARC (Domain-based Message Authentication, Reporting, and Conformance) checks the domain in the From address a recipient sees. It passes when SPF or DKIM passes and the authenticated domain aligns with that From domain. SPF checks the sending server against the SMTP envelope sender's domain; that address is used for delivery-error notices and can differ from the visible From address. DKIM verifies a digital signature using the signing domain in the message's d= field.",
        "For ordinary business domains, example.com and mail.example.com share the organizational domain example.com. With the usual relaxed alignment, domains under the same organizational domain can align. Strict alignment requires an exact domain match. These settings determine whether a passing authentication result counts toward DMARC.",
        {
          "text": "The p field requests how receivers treat messages that fail DMARC. none requests no change to handling because of DMARC; quarantine asks receivers to treat failing messages as suspicious; reject asks them to refuse them. Receivers still apply their own filtering decisions. A DMARC pass does not guarantee inbox placement, and p=none does not prevent other spam checks from rejecting a message. The DMARC explanation explains authentication and alignment in more detail.",
          "links": [
            {
              "phrase": "DMARC explanation",
              "to": "/resources/what-is-dmarc/",
              "start": 399
            }
          ]
        }
      ]
    },
    {
      "h": "Decide which domain you can enforce safely",
      "ps": [
        "Check the From addresses used by staff and each sending service. A dedicated notices subdomain can have a smaller, more predictable set of senders than the main domain used for daily staff correspondence. You can evaluate it first using its own DMARC policy, without assuming the main domain is ready.",
        {
          "text": "Do not make reject the automatic endpoint for everyday staff email. The current DMARC standard's interoperability guidance advises against p=reject for domains whose users may post to mailing lists. Forwarders and lists can break authentication even when the original sender is legitimate. If you still plan reject, that guidance calls for at least a month at none followed by an equally long period at quarantine, with comparison of message dispositions. Those periods must also cover your own sending cadence.",
          "links": [
            {
              "phrase": "current DMARC standard's interoperability guidance",
              "to": "https://datatracker.ietf.org/doc/html/rfc9989#section-7.4",
              "start": 72
            }
          ]
        },
        {
          "text": "Microsoft's deployment guide describes none, quarantine and reject stages for its domains. Use its staged testing approach with the interoperability limits above. A domain sending controlled transactional messages and a domain used by people on public mailing lists need different policy decisions.",
          "links": [
            {
              "phrase": "Microsoft's deployment guide",
              "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure",
              "start": 0
            }
          ]
        },
        {
          "h3": "Percentage and testing flags vary by receiver"
        },
        "Older provider examples may suggest pct=10, pct=25 and other percentages. RFC 9989 removed pct after inconsistent implementation. A low percentage is therefore an unreliable way to limit the impact of enforcement across receivers. Stage the work by a tested domain or subdomain, with reporting and recovery ready.",
        "The newer t=y flag asks supporting receivers to apply a policy one level below the published one: none for quarantine, or quarantine for reject. The rua field still controls report requests.",
        "Receivers using the older standard may ignore t=y and apply the stricter p value. Only publish a policy you are prepared to apply; t=y cannot be relied on to soften it everywhere."
      ]
    },
    {
      "h": "Find the public record and the DNS account",
      "ps": [
        "Use the domain from the visible From address. For example.com, the policy lookup is _dmarc.example.com; for notices.example.com, it is _dmarc.notices.example.com. These are reserved examples. A subdomain can inherit its parent's policy when it has no explicit record, so inspect the parent too. Changing a parent policy can affect more sending domains than the one you tested.",
        "DNS, the Domain Name System, publishes settings for your domain. Your registrar handles domain registration and renewal; your authoritative DNS host publishes the records receivers look up. Your email service sends and receives messages. A domain renewed at GoDaddy can use Cloudflare DNS and Microsoft 365 mail; using Outlook does not tell you which company hosts DNS.",
        {
          "text": "Open your registrar's Nameservers page without changing it. Compare the names with a public NS lookup in Google Admin Toolbox Dig, using NS and your domain name. Match the result to the nameservers assigned in the DNS account. Custom nameservers may belong to a reseller or host, so confirm against the account's zone details and existing public records. Cloudflare's nameserver documentation explains the authoritative service's role.",
          "links": [
            {
              "phrase": "Google Admin Toolbox Dig",
              "to": "https://toolbox.googleapps.com/apps/dig/",
              "start": 105
            },
            {
              "phrase": "Cloudflare's nameserver documentation",
              "to": "https://developers.cloudflare.com/dns/nameservers/",
              "start": 355
            }
          ]
        },
        "Open that service's DNS record list, or zone, and search TXT records for _dmarc. TXT records store text values such as a DMARC policy. If the sending subdomain has its own nameservers, a setup called delegation, use its authoritative zone; otherwise its record normally belongs in the parent zone. Obtain access to the matching account if it is missing. Keep the nameservers in place: moving DNS providers is a separate change that can affect the website and mail routing.",
        {
          "text": "If one DMARC record is present, save its entire name, value and TTL before editing. TTL is the time a resolver may cache the answer. Confirm a missing record with a full authoritative lookup; an empty result after a timeout or SERVFAIL is a failed check, not proof of absence. If absence is confirmed, create a monitoring record first using the DMARC reporting guide, then collect evidence.",
          "links": [
            {
              "phrase": "DMARC reporting guide",
              "to": "/resources/fix-dmarc-reporting/",
              "start": 345
            }
          ]
        },
        "If several separate records beginning v=DMARC1 occupy the same policy name, save them all and compare their policies and destinations. Use your change history to establish the intended value, edit the entry you will keep and remove the competing DMARC entries before considering enforcement. Keep unrelated records and avoid joining two complete policies into one value. A single TXT record split into several quoted strings is not automatically a duplicate. The reporting guide covers that distinction and the case where a managed CNAME already occupies the name."
      ]
    },
    {
      "h": "Make sure monitoring produces usable evidence",
      "ps": [
        "The rua field lists the destinations for aggregate reports. In rua=mailto:dmarc-reports@example.com, rua= introduces the setting, mailto: means deliver by email, and dmarc-reports@example.com is the destination address. Replace that reserved example with a working mailbox or your reporting service's exact assigned address. A mailbox must exist separately from DNS; adding rua cannot create it.",
        {
          "text": "If the destination is at another organizational domain, verify its external-report authorization before relying on reports. For the illustrative policy domain example.com and destination reports@example.net, query example.com._report._dmarc.example.net for a TXT value beginning v=DMARC1. The destination service publishes that authorization in its DNS, sometimes using a wildcard. The reporting setup guide explains publication and verification in detail.",
          "links": [
            {
              "phrase": "reporting setup guide",
              "to": "/resources/fix-dmarc-reporting/",
              "start": 386
            }
          ]
        },
        "Check that reports arrive and that you can read them in a reporting service or trusted XML tool. Aggregate reports show sending sources, message counts and authentication results over a period. They do not cover every receiver or identify every legitimate service for you. Match report sources to your actual services rather than authorizing every address that appears."
      ]
    },
    {
      "h": "Inventory and test the routes your business depends on",
      "ps": [
        "Review the services your firm pays for and uses, then compare them with report sources. Include staff mail, billing and statements, marketing, website forms, appointment reminders, CRM mail, support systems, scanners and other devices, relays and forwarding. Check occasional notices that may not appear in a short monitoring period.",
        "Keep a simple record for each route: the service, visible From domain, whether it uses a custom return-path or DKIM domain, an external test date, the receiver's results and whether the route still needs repair. Record which business process would fail if those messages stopped arriving so you can prioritize tests.",
        {
          "list": [
            "Send a harmless representative message through the route to an outside mailbox you can inspect. Test actual attachments or formatting when those are part of normal delivery, without using client data.",
            {
              "text": "Read the received message's full headers. In Gmail, use More beside Reply, then Show original. In new Outlook or Outlook on the web, use More actions, View, View message details. Microsoft's header instructions show the alternatives for classic Outlook.",
              "links": [
                {
                  "phrase": "Microsoft's header instructions",
                  "to": "https://support.microsoft.com/en-us/outlook/view-internet-message-headers-in-outlook",
                  "start": 179
                }
              ]
            },
            "Use the destination receiver's Authentication-Results. Confirm dmarc=pass for the intended header.from domain and inspect its SPF and DKIM results. At least one passing result must align. A raw dkim=pass for an unrelated vendor domain is insufficient.",
            "Include important forwarding and mailing-list paths. Forwarding often changes the source IP used by SPF; a list can alter content covered by a DKIM signature. A direct test alone does not cover those routes.",
            "Repair failures in the service that sends the mail, then retest. Do not add a report source to SPF just because it failed: first establish whether it is a service your firm actually uses."
          ],
          "ordered": true
        },
        "If you cannot identify a business-critical sender or obtain a representative test, keep that domain in monitoring while you resolve it. Read failures by service and business consequence, not just the overall pass rate."
      ]
    },
    {
      "h": "Google Workspace: confirm signing before editing DNS",
      "ps": [
        {
          "text": "For Google Workspace staff mail, open admin.google.com, Apps, Google Workspace, Gmail, Authenticate email and select the sending domain. Confirm Authenticating email with DKIM. Publishing a key and clicking Start authentication are separate steps. Then verify a new external message. Google's DKIM instructions cover the setup; your other senders need their own checks.",
          "links": [
            {
              "phrase": "Google's DKIM instructions",
              "to": "https://knowledge.workspace.google.com/admin/security/set-up-dkim",
              "start": 284
            }
          ]
        },
        {
          "text": "Google's DMARC setup instructions put the policy in your DNS host, with no DMARC switch to activate in the Google Admin console. Allow its recommended 48 hours after SPF/DKIM setup before adding DMARC. A saved policy still needs report and message verification.",
          "links": [
            {
              "phrase": "DMARC setup instructions",
              "to": "https://knowledge.workspace.google.com/admin/security/set-up-dmarc",
              "start": 9
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/official-dmarc-annotated.png",
            "alt": "Google's public DMARC documentation explains that the record is published at the domain host rather than in the Google Admin console.",
            "caption": "Annotated excerpt of Google Workspace public documentation, captured October 14, 2026. Use the authoritative DNS account identified above to edit the policy. This is a documentation excerpt, not an account screenshot. Source: Google Workspace DMARC setup documentation. CC BY 4.0; Helm annotation added.",
            "width": 774,
            "height": 960
          }
        }
      ]
    },
    {
      "h": "Microsoft 365: check the custom domain's signing status",
      "ps": [
        {
          "text": "For Microsoft 365, open security.microsoft.com/authentication?viewid=DKIM or Email & collaboration, Policies & rules, Threat policies, Email authentication settings, DKIM. Select the custom domain and check Sign messages for this domain with DKIM signatures and its signing status. If CNAMEs are missing, complete that setup and retest before enforcement. Microsoft's DKIM documentation describes the domain flyout.",
          "links": [
            {
              "phrase": "Microsoft's DKIM documentation",
              "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dkim-configure",
              "start": 356
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/microsoft-dkim-cnames.png",
            "alt": "Microsoft's public DKIM example shows a disabled signing toggle and the two required CNAMEs.",
            "caption": "Microsoft's public Contoso example, checked October 14, 2026. A published DNS alias alone does not establish that signing is enabled. Use your domain's status and an external message result. Source: Microsoft Learn, DKIM configuration documentation.",
            "width": 456,
            "height": 612
          }
        }
      ]
    },
    {
      "h": "cPanel: test the server and website senders separately",
      "ps": [
        {
          "text": "For mail sent by a cPanel server, open Email, Email Deliverability, Manage for the domain and inspect DKIM and SPF. Publish the actual server's public records in authoritative DNS and test mailbox mail and website forms separately. If the site uses an outside mail platform, that platform's setup determines signing. The DKIM verification guide walks through all three providers and DNS verification.",
          "links": [
            {
              "phrase": "DKIM verification guide",
              "to": "/resources/verify-dkim-signing/",
              "start": 321
            }
          ]
        }
      ]
    },
    {
      "h": "Prepare the exact policy change and recovery",
      "ps": [
        "Choose a time when you can inspect external tests, delivery logs and reports, with access to restore DNS if needed. Copy the current record into your change notes and put the intended value beside it. Record which sending domains the change affects and what would trigger recovery, such as an invoice route failing DMARC or necessary mail appearing in recipient quarantine. Confirm that your DNS login and mailbox access will still work during that window.",
        {
          "text": "For an existing valid monitoring record, the initial enforcement change is usually its p value. Keep rua and the other fields unless you have separately decided to change them. At the organizational domain, sp sets the policy for existing subdomains that inherit this record. Without it, those subdomains can follow the new p value. The np tag sets the policy for nonexistent subdomains; without np, receivers use the applicable sp or p value. Review these fields so the main-domain change does not also tighten a subdomain you have yet to test. RFC 9989's tag definitions describe that scope.",
          "links": [
            {
              "phrase": "RFC 9989's tag definitions",
              "to": "https://datatracker.ietf.org/doc/html/rfc9989#section-4.7",
              "start": 546
            }
          ]
        },
        "Check any existing testing flag too. Leaving t=y in the record can soften the new policy at receivers that support it, while others apply the published policy. Decide its value as part of the change and verify what receivers report.",
        "These reserved-domain examples show a change to quarantine for a main domain while its inheriting subdomains remain in monitoring. Use sp=none only if that is your deliberate subdomain decision. Replace the reporting address, retain your actual record's other settings and do not paste this over an existing policy wholesale.",
        "Before: and After: label the comparison below. They are not part of a DMARC value. Save only the prepared value beginning v=DMARC1, with your substitutions and retained settings.",
        {
          "code": "Before: v=DMARC1; p=none; sp=none; rua=mailto:dmarc-reports@example.com\nAfter: v=DMARC1; p=quarantine; sp=none; rua=mailto:dmarc-reports@example.com",
          "language": "text"
        },
        "For a separately tested notices.example.com subdomain, an explicit record at _dmarc.notices.example.com lets you change that stream's p value separately. The record name belongs under the zone that hosts it; in an example.com zone, the relative name is _dmarc.notices. Introducing that record overrides inherited settings, so include its intended reporting destination and alignment choices.",
        {
          "table": {
            "caption": "DMARC record fields to review",
            "headers": [
              "Field to review",
              "Effect",
              "Decision before saving"
            ],
            "rows": [
              [
                "v=DMARC1",
                "Identifies DMARC; it must appear first.",
                "Preserve it and publish one policy at the intended name."
              ],
              [
                "p=",
                "Requests none, quarantine or reject for failures.",
                "Change only to the stage your tests support."
              ],
              [
                "rua=",
                "Requests aggregate reports at the listed mailto destinations.",
                "Keep a verified, reviewed destination."
              ],
              [
                "sp= and np=",
                "Control applicable inherited subdomain policies.",
                "Check the affected subdomains; retain the intended scope."
              ],
              [
                "adkim= and aspf=",
                "Select strict or relaxed alignment.",
                "Keep the current choice during this policy change."
              ],
              [
                "pct= and t=",
                "Older percentage sampling and newer testing settings differ across implementations.",
                "Do not rely on them as a universal limit on enforcement. Review an existing testing flag before calling the rollout complete."
              ],
              [
                "ruf=, fo= and other tags",
                "Control separate reporting or specialized settings.",
                "Preserve them unless a separate reviewed change requires otherwise."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Edit the existing TXT record in authoritative DNS",
      "ps": [
        {
          "text": "For Cloudflare, select the domain, open DNS, Records, locate its _dmarc TXT entry, then Edit. Replace Content with the prepared value and Save. For GoDaddy, open Domain Portfolio, select the domain, then DNS and edit the matching TXT entry's Value. Its Name field uses the prefix without the zone name, such as _dmarc or _dmarc.notices. Cloudflare's editor instructions and GoDaddy's TXT instructions describe those fields.",
          "links": [
            {
              "phrase": "Cloudflare's editor instructions",
              "to": "https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/",
              "start": 337
            },
            {
              "phrase": "GoDaddy's TXT instructions",
              "to": "https://www.godaddy.com/en/help/add-a-txt-record-19232",
              "start": 374
            }
          ]
        },
        {
          "text": "For cPanel authoritative DNS, open Domains, Zone Editor, Manage for the domain, filter TXT and find the complete policy name. Choose Edit, replace Record with the prepared value and Save Record. Keep its name, TXT type and captured TTL. Add Record is for a missing entry; it must not create another policy alongside the one you are updating. The Zone Editor documentation describes the controls.",
          "links": [
            {
              "phrase": "Zone Editor documentation",
              "to": "https://docs.cpanel.net/cpanel/domains/zone-editor/",
              "start": 346
            }
          ]
        },
        "For a Microsoft 365 custom domain, make this edit at the DNS host you identified above. Microsoft's admin-center DNS record creation procedure for onmicrosoft.com domains is a separate case. For Google Workspace, the policy is also saved at the DNS host. A cPanel DNS editor works publicly only when that service controls the domain's authoritative records.",
        {
          "figure": {
            "src": "/guides/providers/cpanel-zone-add.png",
            "alt": "Namecheap's published cPanel Zone Editor example shows Edit beside a record and Add Record above the table.",
            "caption": "Namecheap's public cPanel documentation example, checked October 14, 2026. Use the existing DMARC record's Edit control for a policy change. The pictured A record is an example of the editor, not a value to use for DMARC. Source: Namecheap, How to edit DNS zone in cPanel.",
            "width": 1221,
            "height": 253
          }
        }
      ]
    },
    {
      "h": "Verify the saved policy and delivery",
      "ps": [
        "First make a public TXT lookup for the complete policy name in Google Admin Toolbox Dig. Confirm one intended record, the new p value, the unchanged report destination and the intended subdomain and alignment settings. Check the authoritative answer separately from a cached answer.",
        "For a terminal check, substitute your actual domain for example.com and a nameserver from its NS list for AUTHORITATIVE-NS. These commands read DNS. Repeat the authoritative query for each nameserver if results differ.",
        {
          "code": "dig _dmarc.example.com TXT\ndig @AUTHORITATIVE-NS _dmarc.example.com TXT +norecurse",
          "language": "text"
        },
        {
          "text": "ISC's dig manual explains the query options. If authoritative DNS has the intended value but another resolver returns the old one, wait for the previous TTL and recheck. Lowering TTL at the same time as the policy change cannot shorten an answer already cached. If authoritative DNS itself is wrong, correct the record before treating the change as published.",
          "links": [
            {
              "phrase": "ISC's dig manual",
              "to": "https://bind9.readthedocs.io/en/stable/manpages.html#dig-dns-lookup-utility",
              "start": 0
            }
          ]
        },
        "Repeat the external message tests through each important service and forwarding path after receivers can see the new policy. Inspect authentication results, inbox/spam/quarantine placement, sending logs and bounce messages. Aggregate reports commonly arrive daily, so the first interval may mix old and new policy observations. Compare report date ranges and continue checking across normal and infrequent mail cycles.",
        "Use the quarantine results to decide whether the policy fits the domain's use. If legitimate failures remain, repair them or keep the policy your mail routes can support. For a later reject change, repeat the preparation, evidence review and recovery plan, including the mailing-list considerations above. Keep valid aligned DKIM in place for forwarded traffic, where SPF often fails."
      ]
    },
    {
      "h": "Restore the prior policy if necessary mail fails",
      "ps": [
        "If a recovery trigger occurs, edit the same TXT entry and restore the saved working value. Preserve reporting so you can investigate. Verify that all authoritative nameservers serve the restored record, then compare cached answers and repeat the affected message tests. Receivers holding the stricter value can continue using it until their cached answer expires.",
        "Record the affected service, recipient, test time, header results and bounce or quarantine evidence. Check the sender's From domain, return-path, DKIM signing domain and any message changes introduced by forwarding or a gateway. Correct the responsible route and retest before trying enforcement again. A DNS rollback cannot recall messages already rejected or release a recipient's quarantine; use delivery logs to identify mail that needs resending after recovery.",
        "Keep the final policy, test evidence and unresolved routes with the scan finding. Helm's public scan observes public configuration and cannot establish that every legitimate sender is ready. Any assistance with DNS or mail administration needs an agreed scope with your existing IT and the relevant vendors."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "fix-dmarc-reporting",
  "title": "Set up and verify DMARC aggregate reporting",
  "metaDesc": "Add or repair DMARC rua reporting, prepare a working destination, check external authorization and verify aggregate report receipt.",
  "date": "2026-10-14",
  "readMin": 16,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "To set up DMARC aggregate reporting, prepare a mailbox or reporting service you can review, then put its address in the rua field of your domain's DMARC TXT record. Keep any existing enforcement policy intact while you fix the reporting address. If no record exists, start with a monitoring policy.",
  "lead": [
    "The repair is complete when reports reach that destination and you can review them. Publishing the address alone does not establish that."
  ],
  "sections": [
    {
      "h": "What rua and mailto mean",
      "ps": [
        {
          "text": "DMARC (Domain-based Message Authentication, Reporting, and Conformance) checks whether a message is authenticated for the domain in its visible From address. It uses SPF, which checks the sending server against the envelope sender's domain, and DKIM, which verifies a digital signature. The envelope sender is the address used for delivery-error notices and can differ from the visible From address. A message passes DMARC when at least one of those checks passes and its domain aligns with the visible From domain. The DMARC explanation covers that comparison.",
          "links": [
            {
              "phrase": "DMARC explanation",
              "to": "/resources/what-is-dmarc/",
              "start": 520
            }
          ]
        },
        "An aggregate report summarizes what a receiving service observed over a reporting period: sending servers, message counts and authentication results. Those reports help you find a forgotten invoice service, a misconfigured website sender or unauthorized mail claiming your domain.",
        {
          "text": "The rua tag contains the destinations for aggregate reports. In rua=mailto:dmarc-reports@example.com, rua= introduces the setting, mailto: tells the receiver to send the report by email, and dmarc-reports@example.com is the destination address. The colon belongs immediately after mailto. Use the complete form in the TXT value, not a bare address or a website URL. Google's report guidance explains the reporting destination and dedicated-mailbox options.",
          "links": [
            {
              "phrase": "Google's report guidance",
              "to": "https://knowledge.workspace.google.com/admin/security/about-dmarc-reports",
              "start": 366
            }
          ]
        },
        "The record name is different: _dmarc.example.com tells receivers where to look for the policy. The mailbox name dmarc-reports has no special DNS meaning; you can use a different mailbox or the unique address your reporting service supplies. Your DNS entry requests reports. It does not create a mailbox or make a dashboard appear.",
        "Aggregate reports usually arrive as compressed XML attachments, or appear as parsed data in a reporting service. They summarize domain-level authentication and sending infrastructure rather than providing copies of every email. The separate ruf tag requests per-message failure reports, which have different privacy and support considerations. You do not need to add ruf to set up aggregate reporting."
      ]
    },
    {
      "h": "Prepare a destination you can use",
      "ps": [
        "For a mailbox, create a dedicated address in your mail platform or use one already reserved for DMARC reports. Avoid an employee's personal inbox: reports can arrive regularly, and access needs to survive staffing changes. Confirm the account can receive mail from outside your organization, retain attachments and handle the expected volume. Before editing DNS, send an ordinary email to that address from outside your organization. If it arrives, you have checked basic delivery. You still need to confirm that a receiver generates DMARC reports and that they reach this address.",
        {
          "text": "In Google Workspace, sign in to admin.google.com with the appropriate user-management privileges, then open Directory, Users, Add new user. Enter the account details and the reporting address you want as Primary email, select Add New User and finish the setup. Check that Gmail is available for that account before testing delivery; you may need a Workspace license. A Google Group can also receive reports, but its posting permissions must allow the external report senders. Google's account instructions cover creation and access.",
          "links": [
            {
              "phrase": "Google's account instructions",
              "to": "https://knowledge.workspace.google.com/admin/users/add-an-account-for-a-new-user",
              "start": 476
            }
          ]
        },
        {
          "text": "For cloud-only Microsoft 365, sign in to admin.microsoft.com with the Exchange admin role. Open Teams & groups, Shared mailboxes, Add a shared mailbox. Use Show all if Teams & groups is hidden. Enter a mailbox name, check or change its email address, then select Save changes. Under Next steps, use Add members to this mailbox to give yourself and the other reviewers access. Open the shared mailbox from your own account and test receipt there. For hybrid Exchange, create it through the on-premises Exchange admin center. Microsoft's shared-mailbox instructions cover those controls and the related licensing and access rules.",
          "links": [
            {
              "phrase": "Microsoft's shared-mailbox instructions",
              "to": "https://learn.microsoft.com/en-us/microsoft-365/admin/email/create-a-shared-mailbox?view=o365-worldwide",
              "start": 524
            }
          ]
        },
        "A reporting service receives the XML and turns it into a searchable view of sending sources and results. Add your domain to the service first, then copy the rua address it assigns to that domain. Check who can access the dashboard and how long the service retains data about your sending systems. An address from a vendor's public example may belong to another account and will not put reports in yours.",
        "Set a review schedule for your chosen mailbox or service, and make sure you can open or interpret its reports. During a new rollout, review them daily. If you use a mailbox, use a trusted XML viewer or your chosen reporting tool; do not upload your firm's reports to an arbitrary converter. A mailbox full of unread attachments leaves authentication failures unresolved."
      ]
    },
    {
      "h": "Locate your authoritative DNS host",
      "ps": [
        "DNS, the Domain Name System, holds public settings for your domain, including the DMARC record. The registrar where you renew the domain, the company hosting your website and the service supplying email can all be different. Your authoritative DNS host is the service that publishes the records receivers look up. Google Workspace or Microsoft 365 explains what to publish; for a custom business domain, you normally save it in that DNS host's record editor.",
        {
          "text": "Start in your registrar's account and open the domain's Nameservers page. Then check the public NS records using Google Admin Toolbox Dig: select NS and enter your domain, such as example.com, without a web address prefix. Compare the returned nameservers with the ones assigned in the DNS account. Cloudflare nameservers often make the provider easy to identify; custom or reseller nameservers can require you to check the host's account details. Cloudflare's nameserver guidance describes their role in publishing DNS.",
          "links": [
            {
              "phrase": "Google Admin Toolbox Dig",
              "to": "https://toolbox.googleapps.com/apps/dig/",
              "start": 113
            },
            {
              "phrase": "Cloudflare's nameserver guidance",
              "to": "https://developers.cloudflare.com/dns/nameservers/",
              "start": 448
            }
          ]
        },
        "Open that account's DNS records for your domain and compare an existing record with a public lookup to confirm you have the correct zone, the collection of DNS records for that domain. A record list in an unused registrar panel can look valid while publishing nothing to the internet. If your From address uses a subdomain with its own nameservers, use that subdomain's authoritative account. This is called a separate DNS delegation. Without one, its records normally live in the parent zone.",
        "If you cannot access the authoritative zone, obtain authorized access before continuing. You can still prepare the destination and record value. Keep the current nameservers; switching them moves DNS publication and can affect the website and mail routing."
      ]
    },
    {
      "h": "Read the DMARC record already in place",
      "ps": [
        "In your DNS editor, filter TXT records and search for _dmarc. Also make a public TXT lookup for the complete name. For mail from example.com, query _dmarc.example.com. For mail from notices.example.com, check _dmarc.notices.example.com and the parent policy; a subdomain without its own policy can inherit one. Creating a subdomain record overrides that inheritance and needs a deliberate policy choice.",
        "Save the complete existing name, value and TTL before editing. TTL, or time to live, is how long DNS resolvers may cache the answer. Keep this copy with the date so you can restore the original destination if necessary.",
        "The following value is an illustration for a new monitoring record. example.com is reserved for examples. Replace the address with a real mailbox you have tested or the exact address supplied by your reporting service before publishing.",
        {
          "code": "v=DMARC1; p=none; rua=mailto:dmarc-reports@example.com",
          "language": "text"
        },
        "The semicolons separate fields. The DNS record type is TXT and its name is _dmarc within the example.com zone. Do not put the mailbox address in the Name field or put _dmarc in the Value field. Do not add literal outer quotation marks unless your DNS editor's instructions require them.",
        "For the example above, a provider that appends example.com to the Name field should display the saved name as _dmarc.example.com. The Value or Content field should contain the entire line from v=DMARC1 through the reporting address. TXT means a text record; the policy is stored as text in that value.",
        {
          "table": {
            "caption": "DMARC fields when adding or repairing aggregate reporting",
            "headers": [
              "Field",
              "Meaning",
              "What to do for a reporting repair"
            ],
            "rows": [
              [
                "v=DMARC1",
                "Identifies the DMARC version. It must be first.",
                "Keep this value."
              ],
              [
                "p=none, p=quarantine or p=reject",
                "Requests the receiver's treatment of messages that fail DMARC.",
                "Preserve the existing policy. Use none for the new monitoring example."
              ],
              [
                "rua=mailto:address",
                "Requests aggregate reports at that email destination.",
                "Add or correct this field with your tested address."
              ],
              [
                "sp=",
                "Sets a policy for subdomains that inherit this record.",
                "Preserve it; omitting it can change the subdomain policy."
              ],
              [
                "adkim= and aspf=",
                "Select strict or relaxed domain matching for DKIM and SPF.",
                "Preserve them. s means strict; r means relaxed."
              ],
              [
                "ruf= and fo=",
                "Request and control separate failure reporting.",
                "Leave the existing decision intact; aggregate reporting does not require them."
              ],
              [
                "pct=, ri= or other existing tags",
                "Some records include older or specialized settings.",
                "Keep them during this focused repair and review them separately against current documentation."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Choose the branch that matches your DNS result",
      "ps": [
        "If exactly one DMARC record exists, edit that entry. If it has no rua field, add rua=mailto: followed by your tested address after a semicolon. Reuse the final semicolon if the current value already ends with one. If it has rua already, replace the wrong destination or add another comma-separated mailto destination within that same field. Do not add a second rua tag. Preserve p, sp, alignment settings and the rest of the record.",
        "For example, a hypothetical existing record v=DMARC1; p=quarantine; adkim=r; aspf=r would become v=DMARC1; p=quarantine; adkim=r; aspf=r; rua=mailto:dmarc-reports@example.com. This illustration preserves quarantine. Replace its address and use your actual record's other fields; do not replace your entire value with the example.",
        {
          "text": "If no record exists at the business domain's policy name, check again through an authoritative lookup and resolve any timeout or SERVFAIL error first. Once absence is confirmed, create one TXT record using the monitoring example above with your actual reporting destination. Set up and test SPF and DKIM for legitimate senders before planning enforcement. Google recommends allowing 48 hours after SPF/DKIM setup before adding DMARC. Google's DMARC setup guidance describes that starting sequence.",
          "links": [
            {
              "phrase": "Google's DMARC setup guidance",
              "to": "https://knowledge.workspace.google.com/admin/security/set-up-dmarc",
              "start": 434
            }
          ]
        },
        {
          "text": "If several separate TXT records beginning v=DMARC1 appear at the same name, repair the duplicate configuration. Save every value, compare their policies and destinations, then prepare one intended record. If their policy values differ, use your change history to establish the intended policy before deleting either entry. Edit the entry you will retain and remove the competing DMARC entries. Keep unrelated DNS records. Do not concatenate two full policies or assume the strictest one wins. The DMARC standard discards multiple policy records at one lookup location.",
          "links": [
            {
              "phrase": "DMARC standard",
              "to": "https://datatracker.ietf.org/doc/html/rfc9989",
              "start": 497
            }
          ]
        },
        "One TXT record may contain several quoted strings in a DNS lookup. Those strings concatenate into a single value and are not automatically duplicate records. Use the DNS editor's individual record rows and the full lookup response to distinguish several records from pieces of one record. If you find an existing CNAME at the policy name, inspect where it points and whether a managed service controls it before making a local TXT entry; a CNAME and TXT record cannot occupy the same name."
      ]
    },
    {
      "h": "Authorize a destination in another domain",
      "ps": [
        "For ordinary business domains, example.com and its subdomains share an organizational domain; example.net is a different one. A report address at a different organizational domain requires external-destination authorization. This stops someone from using their own DMARC record to flood an unrelated mailbox. The authorization belongs in the reporting destination's DNS, in addition to rua in your domain's policy.",
        "For a policy at _dmarc.example.com reporting to reports@example.net, the illustrative authorization is a TXT record at example.com._report._dmarc.example.net containing v=DMARC1;. These are reserved example domains. If you control example.net in the real arrangement, publish the corresponding record in that destination zone. An editor that appends example.net expects the relative name example.com._report._dmarc.",
        "To construct your own authorization name, replace the first example.com with the domain where the policy was found and the ending example.net with the domain after @ in the report address. Keep ._report._dmarc. between them. A separate policy at _dmarc.notices.example.com uses notices.example.com as the first part; a subdomain inheriting the example.com policy uses example.com.",
        "For a reporting service, use its onboarding instructions. The service commonly publishes the authorization itself, sometimes with a wildcard. Query the exact authorization name for your domain and its assigned destination; a successful wildcard answer can satisfy that lookup. Adding the authorization under your sending domain would put it in the wrong zone.",
        {
          "text": "Verify this before waiting for reports. Under the aggregate-reporting standard's external-destination procedure, a receiver ignores a destination it cannot authorize. A valid mailbox alone cannot satisfy that check.",
          "links": [
            {
              "phrase": "aggregate-reporting standard's external-destination procedure",
              "to": "https://datatracker.ietf.org/doc/html/rfc9990#section-4",
              "start": 50
            }
          ]
        }
      ]
    },
    {
      "h": "Cloudflare and GoDaddy: save the TXT record",
      "ps": [
        {
          "text": "For Cloudflare DNS, select the domain and open DNS, Records. Find the existing _dmarc TXT entry and choose Edit. For a missing entry, choose Add record and Type TXT. Enter _dmarc in Name for the main domain, the complete prepared policy in Content and the existing TTL or an appropriate provider default, then Save. Cloudflare's record instructions cover both paths. Partner-managed Cloudflare zones use the hosting partner's editor.",
          "links": [
            {
              "phrase": "Cloudflare's record instructions",
              "to": "https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/",
              "start": 316
            }
          ]
        },
        {
          "text": "For GoDaddy DNS, open Domain Portfolio, select the domain and open DNS. Edit the existing TXT entry, or choose Add New Record and TXT when none exists. Name is _dmarc for the main domain; GoDaddy expects the prefix without your domain appended. Put the complete value in Value and save. Its TXT record instructions describe these fields. For notices.example.com in the example.com zone, the relative Name would be _dmarc.notices.",
          "links": [
            {
              "phrase": "TXT record instructions",
              "to": "https://www.godaddy.com/en/help/add-a-txt-record-19232",
              "start": 291
            }
          ]
        }
      ]
    },
    {
      "h": "cPanel: edit or create the DMARC TXT entry",
      "ps": [
        {
          "text": "For cPanel DNS, open Domains, Zone Editor, Manage beside your domain, then filter TXT or search _dmarc. Use Edit on the existing record. For a missing record, use Add Record and TXT. Set Name to the complete policy name for your domain, TTL to the captured or chosen value, and Record to the complete DMARC value, then Save Record. The cPanel Zone Editor instructions describe these controls. Its DMARC helper can build a record, but inspect the final TXT value so a suggested policy does not replace your current one.",
          "links": [
            {
              "phrase": "cPanel Zone Editor instructions",
              "to": "https://docs.cpanel.net/cpanel/domains/zone-editor/",
              "start": 336
            }
          ]
        },
        "If Zone Editor or TXT is unavailable, your host may have disabled the interface or access to that record type. Request the relevant feature for your account. Keep the prepared policy and use the authoritative DNS host's editor if that is a different service.",
        {
          "figure": {
            "src": "/guides/providers/cpanel-zone-add.png",
            "alt": "Namecheap's published cPanel Zone Editor example shows the record table, Edit controls and Add Record.",
            "caption": "Namecheap's public cPanel documentation example, checked October 14, 2026. Use Edit for an existing DMARC entry; Add Record is for a missing entry. The pictured domain and A record illustrate the editor, not a DMARC configuration. Source: Namecheap, How to edit DNS zone in cPanel.",
            "width": 1221,
            "height": 253
          }
        }
      ]
    },
    {
      "h": "Microsoft 365: distinguish custom-domain DNS from Microsoft-hosted DNS",
      "ps": [
        {
          "text": "For Microsoft 365 custom domains, open admin.microsoft.com, Show all, Settings, Domains, then select your business domain and inspect DNS records for Microsoft-related setup. Save the DMARC change at the authoritative DNS host you identified earlier. Microsoft's Add a custom DNS record procedure applies to its hosted onmicrosoft.com domain, which has a separate Microsoft-managed DNS workflow. Microsoft's DMARC instructions distinguish these cases.",
          "links": [
            {
              "phrase": "Microsoft's DMARC instructions",
              "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure",
              "start": 396
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/microsoft-domain-setup.png",
            "alt": "Microsoft's public Domains example shows Start setup beside the example domain.",
            "caption": "Microsoft's public domain-setup example, checked October 14, 2026. Start setup opens the domain workflow; it is not a DMARC reporting editor. Source: Microsoft Learn, DNS setup documentation.",
            "width": 582,
            "height": 189
          }
        }
      ]
    },
    {
      "h": "Verify publication and wait for report receipt",
      "ps": [
        "After saving, query the complete policy name with TXT selected in Google Admin Toolbox Dig. Check that there is one intended DMARC record, that rua has the exact destination, and that your previous policy fields remain. Verify any external authorization too.",
        "For a terminal check, replace example.com with your actual policy domain and AUTHORITATIVE-NS with a nameserver from its NS list. For a subdomain, query that subdomain's policy name. These commands only read DNS.",
        {
          "code": "dig _dmarc.example.com TXT\ndig @AUTHORITATIVE-NS _dmarc.example.com TXT +norecurse",
          "language": "text"
        },
        {
          "text": "Query all authoritative nameservers if their answers differ. Then compare a recursive lookup from another network or public resolver. ISC's dig documentation explains the options. If authoritative DNS is correct but a cached response is old, allow the previous TTL to expire. Lowering TTL during the edit does not shorten the lifetime of answers already cached; previously missing records can also be cached. Provider publication and receiver processing add their own delay. GoDaddy allows up to 48 hours for global updates, though many changes appear sooner.",
          "links": [
            {
              "phrase": "ISC's dig documentation",
              "to": "https://bind9.readthedocs.io/en/stable/manpages.html#dig-dns-lookup-utility",
              "start": 134
            }
          ]
        },
        "Send normal mail or a harmless test message through your usual sending routes to outside recipients. Participating receivers commonly report daily, so allow a complete reporting interval after they can see the new record. Check the destination or dashboard over the next few days. Not every receiver reports, and little outgoing mail produces little data. An empty inbox immediately after a DNS save is inconclusive."
      ]
    },
    {
      "h": "If reports do not arrive, or the destination is wrong",
      "ps": [
        "Start with the public TXT answer. A misspelled name, duplicate domain suffix, missing mailto:, wrong mailbox or competing policy record can prevent the intended request. If DNS is correct, check external authorization, mailbox spam and quarantine, group posting restrictions, attachment filtering and storage limits. For a service, check that you enrolled the right domain and copied its assigned address. Receiving your test message still does not confirm that a DMARC report has arrived.",
        {
          "text": "When a report arrives, check its reporting organization, date range and policy domain. Review source IPs, counts and evaluated alignment results. Raw SPF or DKIM pass fields alone do not prove DMARC alignment. For example, an invoice tool can pass DKIM for the vendor's domain while failing alignment with your firm's From address. Match unfamiliar sources to your services before authorizing them; a failing source can be spoofed mail or a legitimate sender that needs repair. The DMARC policy guide explains how to use those results before changing enforcement.",
          "links": [
            {
              "phrase": "DMARC policy guide",
              "to": "/resources/fix-dmarc-monitoring-policy/",
              "start": 482
            }
          ]
        },
        "If you sent reports to the wrong destination, edit the same policy record and restore the saved rua value or replace it with the correct one. If your original record had no rua field, remove only the field you added while you prepare a correct destination. Preserve enforcement. Recheck publication and expect cached records or already queued reports to continue briefly. Removing rua stops requesting future aggregate reports once receivers see the change; it does not retrieve reports already delivered. Use the reporting service's data-removal process for data it has received.",
        "Save the final DNS value and the first verified report or dashboard result with its date. Helm's public scan can check the published request, but it cannot confirm that your mailbox receives reports or that someone reviews them. Make DNS changes only through authorized access. Any administrative help from Helm needs a separately agreed scope."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "verify-dkim-signing",
  "title": "Verify DKIM signing when a public scan finds no key",
  "metaDesc": "Verify DKIM signing with message headers, provider activation and DNS checks for Google Workspace, Microsoft 365 and cPanel.",
  "date": "2026-10-14",
  "readMin": 15,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "A public scan can miss DKIM when it checks a different selector from the one your mail service uses. Start with a message sent through the service you use for business email. Its headers tell you which DNS record to check and whether the receiver verified the signature. If signing is missing, use your provider's domain settings to publish the correct record and turn it on.",
  "lead": [],
  "sections": [
    {
      "h": "Quick answer",
      "ps": [
        "Confirm the configured selector and a passing, aligned message result; a public key alone does not prove signing."
      ]
    },
    {
      "h": "What you are checking",
      "ps": [
        "DKIM, or DomainKeys Identified Mail, adds a digital signature to outgoing email. Your sending service keeps a private key and signs parts of the message. The receiving server retrieves the matching public key from DNS and checks the signature. Publish only the public record supplied by your service. A private key belongs in the sending system and must never go into DNS, a support ticket or a screenshot.",
        {
          "text": "Two values in a message's DKIM-Signature header identify the lookup: d= is the signing domain, and s= is the selector. A selector identifies a particular key so a provider can use several keys or rotate them. The lookup name is the selector, followed by ._domainkey. and the signing domain. Copy those values from your message or provider settings; a common selector guessed by a scanner is insufficient evidence. The DKIM standard defines this lookup and verification process.",
          "links": [
            {
              "phrase": "DKIM standard",
              "to": "https://datatracker.ietf.org/doc/html/rfc6376",
              "start": 418
            }
          ]
        },
        "In a hypothetical message with d=example.com and s=mail2026, the lookup would be mail2026._domainkey.example.com. The reserved domain and invented selector illustrate the format; use the values from your own message.",
        "If d= names a vendor domain you do not control, inspect its public key but configure your own domain through that sender's custom-domain setup. Publish only the records the sender supplies for the zone you control.",
        {
          "text": "For a passing DKIM signature to help a message pass DMARC, its signing domain must align with the domain in the visible From address. A signature can pass for a provider's domain while failing that comparison with your business domain. DMARC can also pass through aligned SPF, so read both authentication results when investigating. The DMARC explanation covers how the domains must match.",
          "links": [
            {
              "phrase": "DMARC explanation",
              "to": "/resources/what-is-dmarc/",
              "start": 337
            }
          ]
        }
      ]
    },
    {
      "h": "Send a test before changing anything",
      "ps": [
        "Use a mailbox outside your organization that you can inspect, or a recipient who can return the full headers. Send a harmless test from your business mailbox through its usual route. Send separate tests from your invoicing service, newsletter platform, website contact form and any other service that uses your domain. Their DKIM settings can differ even when recipients see the same From address.",
        {
          "list": [
            "In the recipient's Gmail message, open More beside Reply, then Show original. Gmail displays authentication results and the original headers. Use the received message, rather than a copy in your Sent folder.",
            {
              "text": "For new Outlook or Outlook on the web, open More actions at the top of the received message, then View and View message details. In classic Outlook for Windows, open the message in its own window, then File and Properties; use the Internet headers box. Microsoft's header instructions show these different interfaces.",
              "links": [
                {
                  "phrase": "Microsoft's header instructions",
                  "to": "https://support.microsoft.com/en-us/outlook/view-internet-message-headers-in-outlook",
                  "start": 253
                }
              ]
            },
            "Find DKIM-Signature and copy its d= and s= values into your notes. A message may have several signatures, so record the result for each signing domain.",
            "Find the receiving service's Authentication-Results entry. Look for dkim=pass and the signing domain, often shown as header.d. Then check dmarc=pass and header.from. Headers added by earlier systems can contain other results; use the destination receiver's result when deciding what that receiver accepted."
          ],
          "ordered": true
        },
        "If your tested route has a passing signature for the intended domain and passes DMARC, retain its working setup. Record the real selector with the scan finding. If there is no DKIM-Signature, check provider activation. If a signature is present but fails, use its actual lookup name to investigate the public record and sending path."
      ]
    },
    {
      "h": "Find the DNS account that publishes your domain",
      "ps": [
        "DNS, the Domain Name System, publishes settings under names in your domain. Your domain registrar is the company where you register and renew the domain; your authoritative DNS host publishes those settings. Your mail provider sends or receives email. These can be different companies: a domain bought at GoDaddy can use Cloudflare DNS and Google Workspace mail. Using Outlook does not tell you which company hosts your DNS.",
        {
          "text": "Open the domain's Nameservers page in your registrar account without changing it. Compare that list with a public NS lookup for the domain. In Google Admin Toolbox Dig, select NS and enter your domain without https:// or a web path. Names ending in cloudflare.com suggest Cloudflare; branded hosting names may belong to your web host. Custom nameservers can hide the operator's brand. Confirm the account by matching its assigned nameservers and existing public records, not just the name's appearance. Cloudflare's nameserver documentation explains why these servers determine where records are published.",
          "links": [
            {
              "phrase": "Google Admin Toolbox Dig",
              "to": "https://toolbox.googleapps.com/apps/dig/",
              "start": 143
            },
            {
              "phrase": "Cloudflare's nameserver documentation",
              "to": "https://developers.cloudflare.com/dns/nameservers/",
              "start": 503
            }
          ]
        },
        "Sign in to that DNS service and open the domain's record list, often called its DNS zone. A subdomain such as notices.example.com can have its own nameservers, a setup called delegation. If you are working on a delegated subdomain, use its DNS service. An NS lookup can help you find that delegation; if there is none, the subdomain's records normally live in the parent zone. If you cannot access the matching zone, obtain authorized access to that account before saving a record. Changing nameservers to make a different editor work would move the domain's DNS and requires a separate migration.",
        "Save the existing record's complete name, type, value and TTL, plus the provider's signing state. TTL is the cache lifetime, usually shown in seconds or hours. This copy gives you the exact configuration to restore if the edit goes wrong. For an already working key, use the provider's rotation procedure rather than generating a replacement during a scan investigation."
      ]
    },
    {
      "h": "Google Workspace: publish the generated TXT record, then start signing",
      "ps": [
        "Use these steps for mail sent by Google Workspace. A website hosted elsewhere still needs separate checks for mail it sends itself.",
        {
          "list": [
            "Sign in to admin.google.com as a super administrator. Open Apps, Google Workspace, Gmail, then Authenticate email. Select the domain you are checking.",
            "If it already says Authenticating email with DKIM, compare its record with your test message before generating anything. For a new setup, select Generate New Record. Choose 2048 bits if your DNS host supports it. Keep the offered selector unless that name already has a key you must retain; then use a different selector through Google's setup.",
            "Select Generate. Copy DNS Host name (TXT record name) and the complete TXT record value. Publish those two values as a TXT record at the authoritative DNS host, using the field rules below. Google's default selector is google, but the record returned for your selected domain is the value to use.",
            "After the public lookup matches, return to Authenticate email, select the same domain and click Start authentication. Check for Authenticating email with DKIM, then send another external test."
          ],
          "ordered": true
        },
        {
          "text": "Google's setup instructions specify both publication and activation. After you first enable Gmail, key generation can require 24 to 72 hours. Google also allows up to 48 hours for DKIM to begin working after publication. Verify the DNS value during that wait rather than regenerating the key repeatedly.",
          "links": [
            {
              "phrase": "Google's setup instructions",
              "to": "https://knowledge.workspace.google.com/admin/security/set-up-dkim",
              "start": 0
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/official-dkim-annotated.png",
            "alt": "Google's public DKIM documentation says to click Start authentication and identifies the working status as Authenticating email with DKIM.",
            "caption": "Annotated excerpt of Google Workspace public documentation, captured October 14, 2026. The status described here is the one to check after publishing your key. This image is a documentation excerpt, not a Google Admin account screen. Source: Google Workspace DKIM setup documentation. CC BY 4.0; Helm annotation added.",
            "width": 774,
            "height": 672
          }
        }
      ]
    },
    {
      "h": "Microsoft 365: copy both CNAMEs from your domain's settings",
      "ps": [
        "For Exchange Online mail from a custom domain, Microsoft supplies CNAME records. A CNAME points a lookup name to another DNS name where Microsoft publishes the public key. Do not paste a TXT key into a CNAME field or construct a tenant target from the example screenshot.",
        {
          "list": [
            "Open security.microsoft.com/authentication?viewid=DKIM, or use Email & collaboration, Policies & rules, Threat policies, Email authentication settings, then DKIM. Check the row for your custom domain. If signing is already enabled, open its details and compare the published records and a new message before changing anything.",
            "If the row shows NoDKIMKeys and a Disabled toggle, try moving that row's toggle to Enabled. Microsoft's documented procedure opens a Client error dialog containing the required CNAME values. Select OK. The row should now show CnameMissing while the toggle remains Disabled; DNS publication is still needed.",
            "Click in the domain's row away from its checkbox and toggle to open the details panel. Under Publish CNAMEs, select Copy and keep both Hostname and target pairs. If the domain already showed CnameMissing, start with this step.",
            "Add both CNAMEs at your authoritative DNS host: selector1._domainkey and selector2._domainkey. Copy each corresponding target from your domain's panel. These names are relative to the sending domain; for a sending subdomain, include that subdomain in the saved full name. Existing and newer domains can use different target formats; the values for your domain take precedence over an example.",
            "When Microsoft detects both records, return to the domain's details and enable Sign messages for this domain with DKIM signatures. Confirm Signing DKIM signatures for this domain and send an external test."
          ],
          "ordered": true
        },
        {
          "text": "Microsoft's DKIM procedure includes the NoDKIMKeys and CnameMissing states. Detection can take minutes or longer. If your domain is absent from DKIM settings, confirm it has been added to the correct Microsoft 365 organization before proceeding.",
          "links": [
            {
              "phrase": "Microsoft's DKIM procedure",
              "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dkim-configure",
              "start": 0
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/microsoft-dkim-cnames.png",
            "alt": "Microsoft's published DKIM example shows Publish CNAMEs, two Hostname and target pairs, Copy, and the disabled signing toggle.",
            "caption": "Microsoft's public documentation example for Contoso, checked October 14, 2026. Use Publish CNAMEs and Copy in your own domain's flyout. The pictured target addresses belong to the example. Source: Microsoft Learn, DKIM configuration documentation.",
            "width": 456,
            "height": 612
          }
        }
      ]
    },
    {
      "h": "cPanel: use the key for the server that sends the message",
      "ps": [
        "If your cPanel server sends the mail, open Email, Email Deliverability, then Manage beside the domain. Under DKIM, read Suggested \"DKIM\" (TXT) Record. Copy the public Name and Value. If no local key exists, Generate Local DKIM Key creates one. Preserve an existing working key.",
        {
          "text": "Use Install the Suggested Record when available and this service controls authoritative DNS. If DNS is elsewhere, publish the copied public TXT record in that service instead; a change to a local cPanel zone cannot update another provider's zone. cPanel's Email Deliverability documentation describes this limitation. The host must enable the interface. If it is absent, request that feature or the server's supported DKIM setup from the host.",
          "links": [
            {
              "phrase": "cPanel's Email Deliverability documentation",
              "to": "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/",
              "start": 247
            }
          ]
        },
        {
          "text": "A cPanel website can use Google Workspace, Microsoft 365 or a separate SMTP service. Configure DKIM in whichever service sends each message. Test website forms independently: cPanel documents a PHP sending limitation that can require the host to correct server settings even when mailbox mail is signed.",
          "links": [
            {
              "phrase": "cPanel documents a PHP sending limitation",
              "to": "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/",
              "start": 175
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/cpanel-dkim.png",
            "alt": "Namecheap's published cPanel example shows the public DKIM Name and Value with Copy controls and Install the Suggested Record.",
            "caption": "Namecheap's cPanel documentation example, checked October 14, 2026. Copy the public Name and Value from your own domain. View the Private Key is unnecessary for DNS publication. Source: Namecheap, cPanel Email Deliverability Tool.",
            "width": 690,
            "height": 564
          }
        }
      ]
    },
    {
      "h": "Enter the DNS fields without changing the record's meaning",
      "ps": [
        "The provider's record name and its value go in different boxes. Host or Name is the DNS lookup name; Value, Content or Target is the data returned for that lookup. A TXT record stores text directly, such as the public DKIM value. A CNAME stores another DNS name as its target. The editor may append your zone name automatically. For a record generated as a full name ending in your domain, use the relative prefix only when the editor's instructions require it. Check the displayed final name before saving so you do not publish domain.example.com.example.com by accident.",
        {
          "text": "In Cloudflare, select the domain, open DNS and Records, then Add record or Edit on an existing entry. Select TXT for Google/cPanel or CNAME for Microsoft, enter the supplied name and content, and Save. Microsoft DKIM CNAMEs must use DNS only. Cloudflare's email troubleshooting guidance explains why authentication CNAMEs cannot be proxied. Cloudflare's record editor documents these controls. For GoDaddy DNS, open Domain Portfolio, select the domain, then DNS and Add New Record; its Name field expects the prefix without the zone name. GoDaddy's TXT instructions explain the field format.",
          "links": [
            {
              "phrase": "Cloudflare's email troubleshooting guidance",
              "to": "https://developers.cloudflare.com/dns/troubleshooting/email-issues/",
              "start": 243
            },
            {
              "phrase": "Cloudflare's record editor",
              "to": "https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/",
              "start": 341
            },
            {
              "phrase": "GoDaddy's TXT instructions",
              "to": "https://www.godaddy.com/en/help/add-a-txt-record-19232",
              "start": 539
            }
          ]
        },
        {
          "text": "For cPanel DNS, open Domains, Zone Editor, then Manage for the domain. Use Add Record and the required type, or Edit beside the existing record, then Save Record. Enter the complete name shown for your domain and check the saved name. The Zone Editor documentation covers editing and TXT fields.",
          "links": [
            {
              "phrase": "Zone Editor documentation",
              "to": "https://docs.cpanel.net/cpanel/domains/zone-editor/",
              "start": 239
            }
          ]
        },
        "If no record exists at the supplied name, create the provider's TXT or CNAME entry. If a record already exists there, compare it with the sending service's current value and keep a match. Investigate an unfamiliar value before replacing it: another sender may still use that selector. A CNAME cannot coexist with a TXT record or another target at the same name. Several different selectors are normal; several competing keys at one selector require correction. Save the conflicting values, establish which sender still uses each one, and use the provider's supported selector change or rotation if both senders need to remain active.",
        {
          "text": "Long public keys must remain complete. Some DNS interfaces split one TXT record into quoted character strings. That is still one record, and the strings join together in order. Do not create several separate TXT records containing pieces of the key. Google's DKIM troubleshooting instructions explain checking the complete value and TXT length limits.",
          "links": [
            {
              "phrase": "Google's DKIM troubleshooting instructions",
              "to": "https://knowledge.workspace.google.com/admin/security/troubleshoot-dkim-issues",
              "start": 250
            }
          ]
        }
      ]
    },
    {
      "h": "Verify the exact selector in public DNS",
      "ps": [
        "Use the d= and s= values from your received message, or the full record name supplied by your provider if signing is not active yet. In Google Admin Toolbox Dig, select TXT and enter that complete lookup name. For Microsoft, also query CNAME to inspect the published alias and compare it with the required target; the TXT lookup follows the alias to the key.",
        "You can do the same read-only checks in a terminal with dig. In these command templates, replace ACTUAL-DKIM-NAME with the complete name you obtained and AUTHORITATIVE-NS with a nameserver from the zone's NS list. These labels are placeholders, not selector values.",
        {
          "code": "dig ACTUAL-DKIM-NAME TXT\ndig ACTUAL-DKIM-NAME CNAME\ndig @AUTHORITATIVE-NS ACTUAL-DKIM-NAME TXT +norecurse",
          "language": "text"
        },
        {
          "text": "The first two queries use your configured DNS resolver. The third asks the authoritative server directly. For a Microsoft CNAME, a nonrecursive authoritative response can show the alias without its final key; compare the CNAME there and use a recursive TXT query for the target's key. ISC's dig manual explains the query options.",
          "links": [
            {
              "phrase": "ISC's dig manual",
              "to": "https://bind9.readthedocs.io/en/stable/manpages.html#dig-dns-lookup-utility",
              "start": 285
            }
          ]
        },
        "Query the other authoritative nameservers too if results differ. Then repeat through a public resolver or a separate network. A correct answer at the authoritative service with an old answer elsewhere usually points to caching. A wrong answer at the authoritative service calls for a record correction. An empty short answer does not explain whether the name is absent or the query failed; keep the full response and its status."
      ]
    },
    {
      "h": "Troubleshoot the message result and recover safely",
      "ps": [
        "If the record is missing, check the DNS account, final host name, selected domain and saved record type. If Microsoft reports CnameMissing, compare both targets exactly and check that neither CNAME is proxied. If Google still shows Not authenticating after the public record is correct, complete Start authentication.",
        {
          "text": "In Cloudflare, also check CNAME flattening if a DKIM alias fails to appear in a CNAME lookup. Flattening returns an address instead of the alias and can prevent the provider from detecting it; Cloudflare's troubleshooting steps explain the cause. On paid zones, open DNS, Settings and check CNAME flattening for all CNAME records. That setting affects the whole zone, so review its other uses before turning it off. When it is off, open DNS, Records, Edit on each affected DKIM CNAME, turn off Flatten if enabled, then Save. Cloudflare's flattening controls describe the global and per-record settings. Repeat the CNAME lookup before retrying Microsoft detection.",
          "links": [
            {
              "phrase": "Cloudflare's troubleshooting steps",
              "to": "https://developers.cloudflare.com/dns/troubleshooting/email-issues/",
              "start": 193
            },
            {
              "phrase": "Cloudflare's flattening controls",
              "to": "https://developers.cloudflare.com/dns/cname-flattening/set-up-cname-flattening/",
              "start": 525
            }
          ]
        },
        "If the key exists but the receiver reports dkim=fail, compare the published key with the provider's full value, then inspect the sending route. A gateway adding a footer or a mailing list changing signed content can break a signature. Send a direct test and a test through the affected route to narrow the cause. A passing DKIM result for an unrelated provider domain needs that sender's custom-domain setup before it can supply DMARC alignment for your business domain.",
        "After any repair, send new external messages from every affected service. Save the date, sending route, d= and s= values, receiver results and any remaining failure. Arrival in the inbox alone does not verify signing, and a working staff mailbox does not verify an invoice platform.",
        {
          "text": "For a mistaken DNS edit, restore the saved name, type and public value, then recheck authoritative DNS and new messages. If you created a wrong entry where there was none before, remove that entry after confirming it is the one you added. If you changed the provider's active key as well, restoring DNS alone may leave the two sides mismatched; use the provider's supported recovery or rotation procedure. Retain old public keys for the provider's required overlap so messages already in transit can still verify. Cached DNS can delay recovery. If legitimate mail fails DMARC because of the change, follow the DMARC policy recovery steps while correcting the signing fault.",
          "links": [
            {
              "phrase": "DMARC policy recovery steps",
              "to": "/resources/fix-dmarc-monitoring-policy/",
              "start": 610
            }
          ]
        },
        "Helm's public scan checks selected public configuration. It cannot inspect all your senders or prove that every message is signed. Keep message tests and the provider's settings with the finding; any administrative help from Helm requires an agreed scope and appropriate authorization."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "review-spf-softfail",
  "title": "Review SPF softfail before changing the policy",
  "metaDesc": "Understand SPF ~all, compare Google, Microsoft and cPanel guidance, test legitimate senders and safely review a change to -all.",
  "date": "2026-10-14",
  "readMin": 13,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "An SPF record ending in ~all is often intentional. Before replacing it with -all, check what your mail provider recommends and whether every legitimate sending route passes authentication. Google and Microsoft give different recommendations for their documented setups. A public softfail finding alone cannot settle that choice.",
  "lead": [],
  "sections": [
    {
      "h": "Quick answer",
      "ps": [
        "Keep ~all when your provider recommends it and your legitimate sending routes authenticate correctly. Leave it in place while a necessary sender or forwarding path remains unresolved. Change to -all only when your provider's supported setup calls for it and a valid single SPF record covers your verified senders."
      ]
    },
    {
      "h": "Understand the suffix before changing it",
      "ps": [
        "SPF, or Sender Policy Framework, checks the server delivering a message against the authorization published for its envelope-sender domain. The envelope sender is the return address used between mail servers; it can differ from the From address visible to a recipient. SPF mechanisms, the tests within a policy, are evaluated in order. A matching authorization can return pass before the final all mechanism is reached.",
        "The tilde in ~all gives a softfail result to a sender that reaches that mechanism. It expresses a weaker assertion that the sender is probably unauthorized. The hyphen in -all gives fail, an explicit assertion that the sender is unauthorized. Receiving services use those results alongside other checks, so neither suffix guarantees rejection or inbox placement.",
        {
          "text": "A domain can publish ~all while its legitimate mail passes SPF. The scan has observed the policy's suffix; it has not tested every message. The SPF standard defines the result, while the receiving system applies its own handling rules.",
          "links": [
            {
              "phrase": "SPF standard",
              "to": "https://datatracker.ietf.org/doc/html/rfc7208",
              "start": 144
            }
          ]
        },
        {
          "text": "DKIM, or DomainKeys Identified Mail, is the signature a sending service adds to a message. DMARC, or Domain-based Message Authentication, Reporting, and Conformance, checks whether the visible From domain aligns with a passing SPF or DKIM domain. Alignment requires identical domains in strict mode. In relaxed mode, the domains can differ if they share the same organizational domain under DMARC's discovery rules. The current DMARC specification uses DNS records to determine that boundary. A valid, aligned DKIM signature can let DMARC pass when forwarding a received message to another address causes SPF to fail. The DMARC guide explains that relationship.",
          "links": [
            {
              "phrase": "current DMARC specification",
              "to": "https://www.rfc-editor.org/info/rfc9989/",
              "start": 420
            },
            {
              "phrase": "DMARC guide",
              "to": "/resources/what-is-dmarc/",
              "start": 622
            }
          ]
        }
      ]
    },
    {
      "h": "Get to the correct domain and DNS editor",
      "ps": [
        "DNS, short for Domain Name System, publishes the records other services look up for your domain. You'll need its record editor and the sending services' settings. The registrar holds your registration and renewal. The authoritative DNS host publishes the records on its nameservers, the servers that answer for the domain. Your email host runs mailboxes or sending infrastructure. Those roles may be at different companies, and the Outlook or Gmail application you use does not prove where DNS is managed.",
        {
          "text": "For a browser-based lookup, use Google Admin Toolbox Dig: enter the domain and choose NS, short for nameserver, to inspect its active servers. Use TXT for text records such as SPF and MX (Mail Exchange) for incoming-mail destinations. These lookups read public DNS; they do not change it.",
          "links": [
            {
              "phrase": "Google Admin Toolbox Dig",
              "to": "https://toolbox.googleapps.com/apps/dig/",
              "start": 32
            }
          ]
        },
        {
          "list": [
            "Copy the exact domain from the scan result. Use a public DNS lookup to inspect its NS records, or run dig NS example.com +short in Terminal if dig is available, replacing example.com with the domain. NS records list the nameservers answering for it.",
            "Open the registrar account identified by your renewal receipt or password manager, select the domain, and compare its Nameservers with the lookup. If the lists differ, establish the active delegation through registrar support before editing. If it uses external nameservers, open that DNS service's account. Do not change nameservers as part of this review.",
            "At the active DNS service, select the domain and open DNS records or Zone Editor. A zone is the set of records served for a domain. Filter to TXT, the record type that stores text, then locate the value beginning v=spf1 at the exact name. The root domain is the main name, such as example.com, whose record commonly uses @ or a blank Name field; a sending subdomain has its own record name. Check the saved full name so you do not review a different subdomain.",
            "If there is no SPF record, more than one v=spf1 row, or a syntax or lookup-limit error, resolve that first with the SPF repair guide. A timeout means the DNS query received no answer in time. SERVFAIL means the DNS service could not return a usable answer. Investigate those lookup failures before deciding whether to switch suffixes.",
            "Before editing, save the full current SPF value, its record name and TTL. TTL, or time to live, is how long a DNS answer can stay in a resolver's cache. A resolver looks up DNS on a computer's behalf. Save the unit too: 3600 seconds is one hour. If DNS access is missing, recover the provider account or request its DNS-editing role; you can still complete the sender and message review."
          ],
          "ordered": true
        },
        {
          "text": "The SPF repair guide includes record-creation and consolidation steps. Use it if the existing record is missing or invalid, then return here to review the policy choice.",
          "links": [
            {
              "phrase": "SPF repair guide",
              "to": "/resources/fix-spf-record/",
              "start": 4
            }
          ]
        },
        "If a subdomain has no NS answer, check the parent domain's nameservers and records. An ordinary subdomain is often part of that parent zone. A delegated subdomain has its own NS delegation in the parent zone; verify that entry before editing a separate zone."
      ]
    },
    {
      "h": "Build a sender list you can test",
      "ps": [
        "Review employee mail, the invoicing system, website forms, newsletters, reminders and any relay or forwarding arrangements. A relay passes mail through another server; forwarding sends received mail on to another address. Check installed integrations and scheduled jobs for occasional mail. For each service, open its sending-domain or email-authentication settings and record its documented envelope domain and SPF requirements.",
        {
          "list": [
            "Send a non-sensitive test from each service through the route it normally uses. Deliver it to an external mailbox you control. Internal delivery can take a different route, and a test sent in Outlook does not test a separate invoicing service.",
            "Open the received message's full headers, the technical delivery details stored with it. In Gmail on the web, use More beside Reply, then Show original. Find the receiving system's Authentication-Results entry, which records its checks, and read spf and smtp.mailfrom. The latter names the envelope domain when present. spf=pass means the sending server was authorized for that domain. Record the visible From domain too.",
            "Compare the envelope domain with the TXT record you are reviewing. If the service uses its own provider-owned envelope domain, changing your root domain's suffix may not affect that message's SPF check. A custom return-path is a return address on your domain, configured through the sending service. Follow that service's return-path or DKIM instructions if you need alignment with your From domain.",
            "Record SPF, DKIM and DMARC results and whether the message reached the inbox, spam or a rejection. Repeat for important forwarded delivery. If an infrequent service cannot send a test now, keep it on the unresolved list and check its configuration before tightening the policy."
          ],
          "ordered": true
        },
        {
          "text": "Gmail's header instructions explain how to open the original message headers. Read the results added by your receiving mailbox provider; a sender can insert other header text, so an arbitrary Authentication-Results line is not independent evidence.",
          "links": [
            {
              "phrase": "Gmail's header instructions",
              "to": "https://support.google.com/mail/answer/29436",
              "start": 0
            }
          ]
        }
      ]
    },
    {
      "h": "Use the recommendation for your actual provider",
      "ps": [
        {
          "text": "Google's SPF guidance recommends ~all. If Google Workspace is the only sender for the envelope domain, its documented example uses include:_spf.google.com and ends in ~all. include: asks SPF to evaluate the named provider's authorization. Check that the Google and third-party routes authenticate correctly, and keep the suffix when that is the supported configuration.",
          "links": [
            {
              "phrase": "Google's SPF guidance",
              "to": "https://knowledge.workspace.google.com/admin/security/set-up-spf",
              "start": 0
            }
          ]
        },
        {
          "text": "Microsoft's SPF guidance recommends -all with DKIM and DMARC for its domains. Review the scenario for your actual Microsoft cloud and any additional senders before following that recommendation. Government and other clouds can use different authorization values. A suffix change cannot repair a missing sender or an invalid include.",
          "links": [
            {
              "phrase": "Microsoft's SPF guidance",
              "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure",
              "start": 0
            }
          ]
        },
        "For another mail platform, open its current SPF instructions for the product you pay for. Check the documented authorization and failure policy together. If the documentation conflicts with an existing gateway, a server that handles mail before passing it to another service, use the gateway's support channel to confirm which server sends externally and which envelope domain it uses. Keep that answer with the test results."
      ]
    },
    {
      "h": "Microsoft 365: compare your current policy with the domain requirements",
      "ps": [
        "Sign in to the Microsoft 365 admin center with a role that can view domain configuration. Open Show all if necessary, then Settings, Domains and the custom domain. Choose DNS records and Manage DNS. Continue to Add DNS records and select Exchange and Exchange Online Protection for the mail setup. In the manual view, expand TXT Records to inspect the SPF requirement.",
        "Compare that requirement with the current DNS value and each external test. Preserve authorization for services that still send using this envelope domain. An outbound gateway sends mail externally on behalf of your platform; hybrid mail can route through both local Exchange servers and Microsoft 365. Verify those routes' requirements before changing the suffix. Use the actual DNS host to edit the existing TXT record.",
        {
          "text": "Microsoft's domain setup instructions explain the manual workflow. The Start setup example opens domain setup. Inspect the required TXT value in the manual workflow above and edit it at the active DNS host. Review proposed automatic changes before accepting them.",
          "links": [
            {
              "phrase": "Microsoft's domain setup instructions",
              "to": "https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide",
              "start": 0
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/microsoft-domain-setup.png",
            "alt": "Microsoft 365 documentation example with Start setup highlighted for the selected contoso.com domain.",
            "caption": "Microsoft's documentation shows Start setup for contoso.com, an example domain. For your custom domain, use DNS records, then Manage DNS, and inspect the required TXT entry. Compare it with the existing policy at your DNS host. Source checked October 14, 2026.",
            "width": 582,
            "height": 189
          }
        }
      ]
    },
    {
      "h": "cPanel: check the minus-all option and the complete preview",
      "ps": [
        "If cPanel sends your mail, open Email, Email Deliverability, Manage beside the domain, then SPF and Customize. Compare the Current and Suggested SPF records. The Exclude All Other Hosts option selects -all. cPanel's current documentation recommends ~all by default; selecting -all makes unlisted hosts fail SPF.",
        "Read Include List and the complete Preview before installing a change. Confirm that all necessary cPanel and external sending authorization is present. If the interface is unavailable, request the Email Deliverability feature or the supported SPF policy from your hosting provider's support portal. If DNS is external, publish the approved value there; the local Install or Repair control cannot update that external zone.",
        {
          "text": "cPanel's Email Deliverability instructions explain the customization fields and the DNS-control prerequisite. Keep the existing suffix while investigating an untested sender.",
          "links": [
            {
              "phrase": "cPanel's Email Deliverability instructions",
              "to": "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/",
              "start": 0
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/cpanel-spf-preview.png",
            "alt": "cPanel SPF documentation example showing Include List, an unchecked Use the minus-all Entry box, an incomplete Preview and the installation button.",
            "caption": "Namecheap's cPanel example shows Use the -all Entry, which controls the final failure assertion. The visible preview is incomplete and is not a valid record to copy. Inspect your complete value and test results before installing it. Source checked October 14, 2026.",
            "width": 684,
            "height": 549
          }
        }
      ]
    },
    {
      "h": "Decide whether to retain softfail or change the policy",
      "ps": [
        "Keep ~all if it is your provider's supported recommendation and your legitimate routes authenticate correctly. Also retain it while a necessary sender or forwarding path remains unresolved. Record the reason and the outstanding test so the review can be resumed when that evidence is available.",
        "A move to -all needs a valid single SPF record, a verified sender list and the provider's supported configuration. Review DKIM and DMARC results at the same time. If direct mail from a required sender currently returns softfail, repair its sending setup or missing authorization before making the suffix stricter.",
        "A failure caused by forwarding deserves a separate review. For forwarded mail, the receiver checks the forwarding server's IP address (its network address), which can differ from the original sender's. Adding a general forwarding service to your SPF record authorizes that service to send as your envelope domain; it does not merely label forwarded mail as safe. Follow the forwarding provider's supported behavior and check whether an aligned DKIM signature survives."
      ]
    },
    {
      "h": "If the review supports a change, edit the existing TXT record",
      "ps": [
        {
          "list": [
            "Choose a time when you can send tests immediately and inspect delivery failures. Keep the saved policy open beside the DNS editor. Make sure your DNS login can also restore the record.",
            "Select Edit on the existing v=spf1 TXT row at the exact envelope-domain name. Preserve Type, Name, TTL and the required sending mechanisms. Change the final ~all to -all only when that is the policy the completed review supports. Do not create a second SPF row.",
            "Read the entire value before saving. For this all-based record, there should be one v=spf1 at the start, the required authorizations in between and the intended all mechanism at the end. Save, reopen the row and compare the stored value with your intended edit. If the policy uses redirect= to apply another domain's SPF policy, follow that design with the SPF repair guide; adding all would cause SPF to ignore redirect.",
            "If you also need to change sending authorizations, prepare and validate the complete combined record using the SPF repair guide. Evaluate nested DNS lookups for every relevant route. A suffix edit does not remove a lookup-limit error."
          ],
          "ordered": true
        },
        "A record that is absent needs a complete provider-supported value, not a TXT record containing only -all. Use the repair branch linked above to build and publish it."
      ]
    },
    {
      "h": "Verify the change and recover if delivery worsens",
      "ps": [
        {
          "list": [
            "Query TXT at the affected domain using a DNS lookup tool or dig TXT example.com, replacing example.com with the envelope domain. To check an active authoritative nameserver directly, run dig @ns1.your-dns-host.example TXT example.com. Replace the nameserver with one from your NS lookup and replace example.com with the envelope domain. Confirm the intended value there, then through public resolvers. Propagation is the period when cached public answers may still show the old policy. Wait for the previously published TTL and recheck those answers; correct a wrong authoritative answer in the active zone.",
            "Send fresh tests through every listed service and important forwarding path. Read the receiving system's SPF, DKIM and DMARC results and check inbox or spam placement. Record bounces, the delivery-failure notices returned to a sender, and entries in the sending service's delivery log. For direct mail using the domain you repaired, expect spf=pass. Forwarded mail can instead rely on aligned DKIM for DMARC to pass. An old message reports an old test.",
            "If a necessary route starts failing after the change, edit the same TXT row back to the captured value, save and verify publication. Cached policies can delay restoration at receivers. Repeat the failed test after the updated answer is visible.",
            "Compare the failing message's envelope domain and the connecting server's IP address with your sender list. Use the provider's support portal with that specific evidence if you cannot explain the failure. Resolve the route before retrying the policy change."
          ],
          "ordered": true
        },
        "Save the decision, domain, provider instructions, tested services, dates and receiver results. Review these notes when you add a sending service or change a forwarding route. Helm's public scan can observe the published policy; it cannot inspect the business's complete sender inventory or assess internal systems. Make administrative changes only within your authorized access and existing agreements. Help from Helm needs an agreed scope."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "fix-spf-record",
  "title": "Fix a missing, duplicate or invalid SPF record",
  "metaDesc": "Find your DNS host, repair missing, duplicate or invalid SPF TXT records, preserve legitimate senders and verify DNS and real message results.",
  "date": "2026-10-14",
  "readMin": 19,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "To fix SPF, first confirm the domain your sending service uses. Then repair its policy in the Domain Name System (DNS): create a missing record, consolidate duplicate records into one, or fix the specific syntax or lookup-limit error in an invalid record. Save the current state before editing and test mail from every sending service afterwards.",
  "lead": [],
  "sections": [
    {
      "h": "What SPF checks, and which domain to repair",
      "ps": [
        "SPF stands for Sender Policy Framework. It lets a receiving mail server check whether the server sending a message is authorized to use its envelope-sender domain. The envelope sender is the return address used in delivery instructions between mail servers. The root domain is the main name, such as example.com; bounce.example.com is a subdomain. The envelope-sender domain can differ from the From address you see in your inbox.",
        "For example, a hypothetical invoice can show billing@example.com in From while using bounce.mail.example.com for returned mail. SPF checks the latter. Adding a record at example.com will not automatically cover that subdomain. A sending service may also use a return address on its own domain, which it manages itself.",
        {
          "text": "DKIM, or DomainKeys Identified Mail, adds a signature that a receiving service can verify. DMARC, or Domain-based Message Authentication, Reporting, and Conformance, checks whether a passing SPF or DKIM domain matches the visible From domain under its alignment rules. Alignment requires identical domains in strict mode. In relaxed mode, they must share the same organizational domain, the highest domain in the hierarchy under the same administrative authority. SPF repair is one part of that setup; checking the received message tells you which part worked.",
          "links": [
            {
              "phrase": "organizational domain",
              "to": "https://www.rfc-editor.org/rfc/rfc9989.html#section-3.2.14",
              "start": 364
            }
          ]
        },
        {
          "text": "Open the scan result and copy the exact domain and error. For a real message, open its full headers, the technical delivery details stored with the message, and find the receiving system's Authentication-Results entry. That entry records authentication checks; smtp.mailfrom identifies the envelope domain when present. Compare it with the sending service's domain-authentication settings. The DMARC guide explains how a passing SPF or DKIM result also needs to align with the visible From domain.",
          "links": [
            {
              "phrase": "DMARC guide",
              "to": "/resources/what-is-dmarc/",
              "start": 394
            }
          ]
        },
        "Sign in to the DNS account and the settings for each service that sends from the affected domain. A mailbox password usually gives you neither. If those settings are inaccessible, use the provider's account-recovery process or request the specific DNS or mail-configuration role from the account administrator. You can complete the public record lookup and sender list while access is being arranged."
      ]
    },
    {
      "h": "Find the DNS host before opening the editor",
      "ps": [
        "The registrar is the company through which you registered and renew the domain. The DNS host publishes its records on authoritative nameservers, the servers that answer for your domain. The email host runs your mailboxes or sending service. These can be three different companies. Outlook is a mail application, so its presence alone does not identify the email host.",
        {
          "text": "For a browser-based lookup, use Google Admin Toolbox Dig: enter the domain and choose NS to inspect its nameservers. Use TXT for text records such as SPF and MX (Mail Exchange) for incoming-mail destinations. These lookups read public DNS; they do not change it.",
          "links": [
            {
              "phrase": "Google Admin Toolbox Dig",
              "to": "https://toolbox.googleapps.com/apps/dig/",
              "start": 32
            }
          ]
        },
        {
          "list": [
            "Look up the domain's NS records using your DNS provider's lookup tool or a public DNS lookup. On a Mac or Linux computer with dig installed, open Terminal and run dig NS example.com +short, replacing example.com with your domain. NS means nameserver. Copy the returned server names.",
            "Sign in to the registrar account from your domain renewal receipt or business password manager. Open the domain and find Nameservers. Compare that list with the lookup. If they disagree, use registrar support to establish which delegation is active before editing. Custom nameservers often mean the records are edited at a separate DNS service. Do not change the nameservers to make an editor available; that would move DNS for the whole domain.",
            "Sign in to the service responsible for those nameservers, select the domain, and open DNS, DNS records or Zone Editor. A DNS zone is the set of records for a domain. Confirm the exact domain at the top of the page before editing.",
            "If you cannot identify the service, contact the registrar's support with the returned nameservers and ask which service publishes this domain's active DNS and how to access its record editor. Branded or custom nameserver names can hide the underlying host. If the registrar's editor says DNS is managed elsewhere, use that external service.",
            "For a sending subdomain delegated to its own nameservers, locate that separate zone too. Obtain the sending service's instructions for its exact envelope domain before choosing the record name."
          ],
          "ordered": true
        },
        "Keep the mail provider's settings open in one tab and the confirmed DNS editor in another. The mail provider supplies the sending requirements; the DNS editor is where you publish them.",
        "If a subdomain has no NS answer, check the parent domain's nameservers and records. An ordinary subdomain is often part of that parent zone. A delegated subdomain has its own NS delegation in the parent zone; verify that entry before editing a separate zone."
      ]
    },
    {
      "h": "Save the current records and identify the failure",
      "ps": [
        "Filter the DNS editor to TXT records and search for the affected name. TXT is a record type that stores text. SPF records begin with v=spf1. Other TXT records may verify domain ownership or contain unrelated settings; leave those records in place.",
        {
          "list": [
            "Copy every SPF value at that exact name into a local note, together with its Name or Host field and TTL. TTL, or time to live, is the cache lifetime, usually shown in seconds. Save a screenshot or export if the editor provides one. Record the time so you can distinguish the old result from the new one.",
            "Check the public answer as well as the editor. Run dig TXT example.com on a computer with dig, replacing example.com with the actual envelope domain, or query TXT in a DNS lookup tool. A successful lookup with no v=spf1 value differs from a timeout or SERVFAIL. SERVFAIL means the DNS service could not return a usable answer; a timeout means it did not answer in time.",
            "If there is no SPF value and the lookup succeeds, use the create-record branch below. If there is one, inspect its contents. If there are two or more separate TXT records beginning v=spf1 at the same name, use the duplicate-record branch.",
            "If the finding reports invalid syntax or permerror, use the exact error to decide between formatting repair and lookup-limit repair. Permerror means a permanent SPF evaluation error; it does not tell you which repair is needed on its own."
          ],
          "ordered": true
        },
        "A DNS tool can display one long TXT record as several quoted strings. Those strings are joined into one value by DNS software. That is different from two separate SPF records. Check the record rows in the editor before deleting anything."
      ]
    },
    {
      "h": "Collect the senders that the record must authorize",
      "ps": [
        "Start with the services you use to send employee mail, invoices, appointment reminders, marketing messages and website form notifications. Check integrations and recurring jobs as well as recent inbox messages. An annual statement service can be absent from a week of tests and still need to work.",
        {
          "list": [
            "For each service, open its email, sending-domain or domain-authentication settings. Write down the visible From domain, the envelope domain used for returned mail (often labeled return-path), and its current SPF instructions for your product and account.",
            "Check how the website sends mail. A form may relay through your mailbox provider, use a separate delivery service, or send directly from the web server. SMTP, short for Simple Mail Transfer Protocol, is how mail servers transfer messages. Inspect the form's SMTP or email integration settings and compare them with a test message's headers.",
            "For a service that uses your envelope domain, obtain its documented include value or public sending IP addresses. An IP address identifies a server on the network. An include asks SPF to evaluate another domain's sending authorization; an IP address entry authorizes that address or range. A service using its own envelope domain may require DKIM or a separate return-path setup instead of an include in your root record.",
            "Mark a service as retired only after confirming that no scheduled job, form or business process still uses it. An unfamiliar address in a report is a lead to investigate, not a reason to authorize it."
          ],
          "ordered": true
        },
        "Prepare the combined value in your note before touching DNS. A mechanism is a test inside an SPF value. For the common include-based design, keep one v=spf1 at the start and the chosen all mechanism at the end. Combine the required authorization terms from each service, rather than joining two complete SPF records. The all mechanism matches any sender that reaches it, so authorization placed after it will never be evaluated. If the provider uses redirect= to apply another domain's policy, preserve that design and validate it without appending all."
      ]
    },
    {
      "h": "Read the mechanisms in the existing SPF value",
      "ps": [
        "cPanel and gateway records can authorize sending through address or mail-server records as well as includes. A gateway is a server that handles mail before passing it to another service. Read unfamiliar terms before removing them. The following forms explain common entries; they are not a complete record to publish.",
        {
          "table": {
            "caption": "Common SPF terms you may encounter",
            "headers": [
              "Term",
              "How it affects the policy"
            ],
            "rows": [
              [
                "v=spf1",
                "The version marker. It starts the SPF record once."
              ],
              [
                "include:provider-domain",
                "Evaluates the named domain's SPF policy to see whether this sending IP passes its authorization. Use the exact value documented by your sender. A missing or invalid included policy can produce an error."
              ],
              [
                "ip4:address or ip6:address",
                "Authorizes a documented public IPv4 or IPv6 sending address or range. IPv4 and IPv6 are the two address formats. A range includes several addresses, so its size affects who is authorized. These mechanisms do not consume the DNS-querying-term budget: the limit on evaluated SPF terms that need DNS data, explained below."
              ],
              [
                "a or mx",
                "Checks addresses from the named domain's address records or mail-exchanger records. These terms consume lookup budget and can authorize hosts beyond the one you expected. Retain them when the sender's supported design requires them."
              ],
              [
                "redirect=domain",
                "Uses another domain's SPF policy when the local mechanisms do not match. It is a modifier, an instruction that changes how SPF applies the policy. It uses the other policy's result when local mechanisms do not match, while include checks for authorization. Adding all anywhere causes SPF to ignore redirect, so preserve a supported redirect design instead of appending a suffix by habit."
              ],
              [
                "~all or -all",
                "A final match for any sender that reaches it. Tilde returns softfail, a weaker assertion that the sender is probably unauthorized. Hyphen returns fail, an explicit assertion that it is unauthorized. Use the failure policy supported by your provider and sender review."
              ],
              [
                "+all",
                "Passes any sender reaching it. Adding it to make tests pass would authorize senders outside your intended list."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Use the instructions for your mail provider",
      "ps": [
        {
          "text": "For Google Workspace, SPF is published at your DNS host. Google's SPF setup guide supplies v=spf1 include:_spf.google.com ~all for a domain whose only sender is Google Workspace. Use that example only after checking the sender list and envelope domain. If another service also uses that envelope domain, incorporate its supported authorization into the same record.",
          "links": [
            {
              "phrase": "Google's SPF setup guide",
              "to": "https://knowledge.workspace.google.com/admin/security/set-up-spf",
              "start": 57
            }
          ]
        },
        {
          "text": "For Microsoft 365, open the admin center, choose Show all if needed, then Settings, Domains and your custom domain. Open DNS records and Manage DNS to inspect the required TXT entry. Microsoft's SPF setup guide gives separate configurations for commercial Microsoft 365, government clouds and other arrangements. Select the one for your actual cloud and retain required authorization for additional senders.",
          "links": [
            {
              "phrase": "Microsoft's SPF setup guide",
              "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure",
              "start": 183
            }
          ]
        },
        "In Microsoft's manual workflow, continue to Add DNS records, select Exchange and Exchange Online Protection for the mail setup, and expand TXT Records to reveal the suggested value. Treat it as one input to your combined policy. A guided or automatic setup can propose other DNS changes too; read the proposal before accepting it. You can edit the SPF TXT record directly at the confirmed DNS host.",
        {
          "text": "Microsoft's domain setup instructions cover the manual workflow above and automatic Domain Connect setup.",
          "links": [
            {
              "phrase": "Microsoft's domain setup instructions",
              "to": "https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide",
              "start": 0
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/microsoft-domain-setup.png",
            "alt": "Microsoft 365 Domains documentation example with contoso.com selected and Start setup highlighted.",
            "caption": "Microsoft's documentation shows Start setup for the example domain contoso.com. For your custom domain, use DNS records, then Manage DNS, to retrieve its requirements. Make the SPF edit at the DNS host identified above. Source checked October 14, 2026.",
            "width": 582,
            "height": 189
          }
        }
      ]
    },
    {
      "h": "cPanel: read the proposed SPF value before installing it",
      "ps": [
        "If the cPanel server sends your mail, open Email, then Email Deliverability, and select Manage beside the domain. Find the SPF section. If the host has disabled this feature, use its support portal to request access to Email Deliverability or obtain its supported SPF value for mail sent by that server.",
        "Choose Customize to compare Current SPF and Suggested SPF. Additional Hosts and Additional MX Servers authorize servers through DNS lookups; IP Address Settings authorizes listed address blocks. Include List adds another service's authorization. Enter only values required by the services you actually use. The Exclude All Other Hosts option selects -all; do not change it as part of a syntax repair without completing the separate softfail review.",
        {
          "text": "Read the complete Preview before selecting Install a Customized SPF Record. Repair or Install can update public DNS only when this server controls the domain's DNS. If your nameservers point elsewhere, copy the approved value to that DNS host and follow the editor steps below. cPanel's Email Deliverability documentation explains these controls and prerequisites.",
          "links": [
            {
              "phrase": "cPanel's Email Deliverability documentation",
              "to": "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/",
              "start": 278
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/cpanel-spf-preview.png",
            "alt": "cPanel documentation example showing Include List, the unchecked minus-all option, an incomplete SPF preview and Install a Customized SPF Record.",
            "caption": "Namecheap's cPanel example shows Include List, the -all checkbox, Preview and Install a Customized SPF Record. Its incomplete preview is not a valid record to copy. Check your complete value against your sender list before installation. Source checked October 14, 2026.",
            "width": 684,
            "height": 549
          }
        }
      ]
    },
    {
      "h": "Fill in the SPF TXT fields",
      "ps": [
        "At the DNS host, choose TXT as the record type. Use the fields below to create the missing record or repair the existing one. Use the host's accepted name format; editors differ in whether they automatically append the domain.",
        {
          "table": {
            "caption": "SPF record fields at your authoritative DNS host",
            "headers": [
              "Field",
              "What to enter and why"
            ],
            "rows": [
              [
                "Type",
                "TXT. SPF is stored as text; an MX record routes incoming mail and cannot hold this policy."
              ],
              [
                "Name / Host",
                "The envelope domain you are configuring. For the root of example.com, many editors use @ or a blank field. For bounce.example.com in that zone, many use bounce. A host requiring a full name uses bounce.example.com. Check the saved full name to avoid example.com.example.com."
              ],
              [
                "Value / Content / TXT data",
                "The complete combined SPF value for your confirmed senders. Use ordinary spaces between mechanisms, retain exact provider spelling, and follow the editor's instructions about surrounding quotes."
              ],
              [
                "TTL",
                "The DNS cache lifetime. For a new record, use your provider's recommended value or the editor's default. During a repair, preserve the current value unless the provider requires a change. Check the unit: 3600 seconds is one hour. Changing TTL now does not shorten a previously cached answer."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Create, edit or consolidate the record",
      "ps": [
        {
          "list": [
            "If the record is missing: select Add record, choose TXT, and enter the Name, complete Value and TTL above. Save it, then reopen the record to check that the editor stored the expected full name and value.",
            "If one SPF record exists: choose Edit on that row, change the value to the prepared repair, and save. Preserve unrelated TXT rows. For a formatting error, correct the specific defect, such as include= instead of include: or a space inside the provider domain.",
            "If duplicate SPF records exist: prepare one policy covering every still-required authorization. Replace one row with that combined policy, then remove only the extra v=spf1 rows at the same name. Use a batch save if supported so the zone publishes the consolidation together. If the editor saves each action separately, finish the consolidation in the same change session and verify that only one SPF record remains.",
            "If the record exceeds the lookup limit: use an SPF evaluator that accepts the sending IP and envelope domain, such as the SPF Record Testing Tools described below. Check each service's public sending IP from its received test headers or documented configuration, then expand the nested includes and other DNS-querying terms. Remove confirmed obsolete or repeated authorization and evaluate again. If the necessary services still exceed the limit, use their supported separate sending subdomains or redesign the sending setup with the providers."
          ],
          "ordered": true
        },
        {
          "text": "RFC 7208 limits evaluation to ten DNS-querying terms, including nested include and redirect evaluations. Counting only the includes you can see is insufficient. Replacing a cloud provider's includes with today's IP addresses, often called flattening, can become stale when that provider changes infrastructure. Use documented stable addresses only with a maintenance process; do not flatten Microsoft 365's changing addresses.",
          "links": [
            {
              "phrase": "RFC 7208",
              "to": "https://datatracker.ietf.org/doc/html/rfc7208",
              "start": 0
            }
          ]
        },
        {
          "text": "For a first browser-based check, open Google Admin Toolbox Check MX, enter the envelope domain in Domain name and run the check. Its DNS diagnostics can identify SPF errors and excessive lookups. Keep the reported error and included-domain details. Follow that with real message tests from each service, because a static check alone cannot show every route's evaluated result.",
          "links": [
            {
              "phrase": "Google Admin Toolbox Check MX",
              "to": "https://toolbox.googleapps.com/apps/checkmx/",
              "start": 38
            }
          ]
        },
        {
          "text": "For a test of a prepared policy before publication, open Kitterman's SPF Record Testing Tools and use Test an SPF record. Enter a service's public sending IP in IP address, the prepared value in SPF Record, and the test message's full envelope return address in Mail From address. HELO/EHLO is the name a mail server supplies when opening an SMTP connection; the tool says you can leave that field blank if unknown. Run the test for each sending route and inspect the pass or error result. Use the separate syntax-check form for formatting errors; it does not establish authorization for a sending IP. Its live DNS checks can use cached included policies, so compare unexpected results with authoritative DNS and fresh received-message tests.",
          "links": [
            {
              "phrase": "Kitterman's SPF Record Testing Tools",
              "to": "https://www.kitterman.com/spf/validate.html",
              "start": 57
            }
          ]
        },
        "For cPanel-hosted authoritative DNS, the manual route is Domains, Zone Editor, Manage, then Edit beside the TXT row. Use Add Record and select TXT when it is absent. Save Record commits that row. If this is an external DNS zone, perform these actions at the external host instead."
      ]
    },
    {
      "h": "Verify public DNS and test actual messages",
      "ps": [
        {
          "list": [
            "Query TXT again at the exact envelope domain. Confirm one v=spf1 record and compare the full returned value with your prepared repair. If the editor is correct but the public answer is old, query each active authoritative nameserver directly or use the provider's lookup. With dig, use dig @ns1.your-dns-host.example TXT example.com. Replace ns1.your-dns-host.example with a nameserver from your NS lookup and example.com with the envelope domain. Matching answers show that the active servers publish the repair.",
            "Allow cached answers to expire and repeat the public lookup. A resolver is the DNS service that looks up and caches answers for a computer. Propagation is the period during which different resolvers may still return older answers. Google documents that SPF can take up to 48 hours to start working. If the authoritative answer is wrong, waiting will not fix it: recheck the domain, record name and DNS host.",
            "Send a non-sensitive test through each sending service to an external mailbox you control. Use each service's normal route: a mailbox test does not exercise your invoicing tool or website form. If the business forwards received mail to another address, test that route too.",
            "At the receiving mailbox, inspect the message's full headers. In Gmail on the web, open the message, choose the More menu beside Reply, then Show original. Read the receiving system's SPF result and smtp.mailfrom domain. spf=pass means the sending server was authorized for that envelope domain. Record arrival, spam placement, SPF and DMARC results for each route. Use the results added by the receiving mailbox provider; a sender can insert other Authentication-Results text.",
            "Investigate any legitimate route with spf=fail, softfail, permerror or temperror. Temperror is a temporary evaluation problem. A passing SPF result for a different envelope domain can be correct for the service, but it does not prove alignment with your visible From domain. Check DKIM and DMARC separately."
          ],
          "ordered": true
        },
        {
          "text": "Google's SPF troubleshooting guide covers header results, nested lookups and forwarding. Forwarding can change the server that SPF sees; review that route's DKIM and forwarding behavior before adding the forwarding server to your authorization.",
          "links": [
            {
              "phrase": "Google's SPF troubleshooting guide",
              "to": "https://knowledge.workspace.google.com/admin/security/troubleshoot-spf-issues",
              "start": 0
            }
          ]
        },
        {
          "text": "Gmail's full-header instructions show where to find Show original. Keep the received test message's headers with your results. Use test messages without sensitive content and store their headers with the mail configuration, since headers can include addresses and delivery details.",
          "links": [
            {
              "phrase": "Gmail's full-header instructions",
              "to": "https://support.google.com/mail/answer/29436",
              "start": 0
            }
          ]
        },
        "Keep the repaired SPF value, its previous version and the test results from each sending route so you can check the next mail-service change against them."
      ]
    },
    {
      "h": "If the repair fails, restore the captured state",
      "ps": [
        "If a working business route starts failing after your edit, first check whether you omitted a legitimate sender from the single record. If you need to restore the earlier working setup, return to the same DNS record and restore its saved value, name and TTL. Removing a newly created record returns DNS to its earlier state, including the lack of SPF. For a consolidation, keep the single valid policy if that is the repair needed; recreating the original duplicates restores their SPF error.",
        "Query DNS after restoration and retest the affected service. Receivers can continue using cached answers until their TTL expires. Compare the sending IP, envelope domain and authorization in the original configuration and failed test headers. Keep those records if the failure needs further investigation. Restoring DNS can recover an earlier working setup, but an originally missing or invalid record still needs repair.",
        {
          "text": "Review the choice of ~all or -all separately in the SPF softfail guide. Helm's public scan can recheck the published configuration; it cannot establish your complete sender inventory, assess internal systems or promise inbox delivery. Help from Helm needs an agreed scope; retained IT and the relevant vendors handle administration under their arrangements.",
          "links": [
            {
              "phrase": "SPF softfail guide",
              "to": "/resources/review-spf-softfail/",
              "start": 52
            }
          ]
        }
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "enable-dnssec-safely",
  "title": "Enable DNSSEC with your DNS host and registrar",
  "metaDesc": "Find your DNS host and registrar, enable DNSSEC signing, publish the correct DS fields, validate the chain and follow an ordered rollback.",
  "date": "2026-10-14",
  "readMin": 15,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "DNSSEC needs two matching parts: signed records at your DNS host and Delegation Signer (DS) information in the parent zone, usually published through your registrar. Inspect both before changing either. You need authorized access, a way to validate the chain and a recovery plan; a stale DS record can stop your domain resolving. If the existing setup validates, keep it.",
  "lead": [],
  "sections": [
    {
      "h": "Understand the two parts of DNSSEC",
      "ps": [
        "DNS, or Domain Name System, translates names such as example.com into records used by websites, mail and other services. DNSSEC, short for DNS Security Extensions, adds digital signatures so a validating DNS resolver can check where those answers came from and whether they were changed. A resolver is the service that looks up DNS on a computer's behalf.",
        {
          "text": "DNSSEC protects the authenticity and integrity of DNS answers. It does not encrypt web traffic, replace the certificate that secures a website connection or examine the business's internal systems. The DNSSEC introduction describes those boundaries.",
          "links": [
            {
              "phrase": "DNSSEC introduction",
              "to": "https://datatracker.ietf.org/doc/html/rfc4033",
              "start": 202
            }
          ]
        },
        "Your DNS host signs the zone, the set of records it serves for your domain. It publishes public keys in DNSKEY records and digital signatures in RRSIG records. The parent zone publishes a DS record that refers to a signing key in your zone. For a registered domain such as example.com, its registrar arranges that publication in the .com parent zone. DNSKEY contains the public key used to verify signatures. Your managed DNS host holds the private key used to make them; the registrar needs the DS information, never that private key.",
        "The parent DS and your zone's key must match. That connection continues upwards through the DNS hierarchy and is called the chain of trust. An enabled switch or a visible DNSKEY shows only part of the setup. Completion requires a successful validation of the chain."
      ]
    },
    {
      "h": "Find the DNS host and registrar accounts",
      "ps": [
        "The registrar is where the domain is registered and renewed. The DNS host runs the authoritative nameservers that publish its records. They can be different services. Google Workspace, Microsoft 365 and a cPanel mailbox service can run your email without controlling either part of DNSSEC.",
        {
          "text": "For a browser-based lookup, use Google Admin Toolbox Dig: enter the domain and choose NS, short for nameserver, to inspect its active servers. Use DNSKEY to inspect published signing keys and DS to inspect delegation data. These lookups read public DNS; they do not change it.",
          "links": [
            {
              "phrase": "Google Admin Toolbox Dig",
              "to": "https://toolbox.googleapps.com/apps/dig/",
              "start": 32
            }
          ]
        },
        {
          "list": [
            "Find the domain renewal receipt or registration account in the business password manager. Sign in to that registrar, select the domain and open Nameservers. Record the nameservers currently assigned; keep their existing values.",
            "Check the public NS answer too. Use a DNS lookup tool, or run dig NS example.com +short if dig is installed, replacing example.com with the domain. Compare the answer with the registrar's list. A subdomain may be part of the main zone or delegated to its own nameservers. If the lists disagree, resolve the active delegation with the registrar before proceeding.",
            "Sign in to the DNS service responsible for the active nameservers. Select the exact zone and locate DNSSEC, usually under DNS or DNS settings. Record its current signing status. Branded nameservers may obscure the host; contact registrar support with the nameserver list and request the active DNS service and account-access route.",
            "Confirm that your account can manage DNSSEC at the DNS host and DS publication at the registrar. Recover an inaccessible account through that provider's recovery process or obtain the required role from its administrator before enablement.",
            "Open the DNS host's DNSSEC instructions and the registrar's instructions for external DNS or custom nameservers. Check support for your top-level domain, the ending such as .com, and for the signing algorithm, the cryptographic method your DNS host uses. The DS field table below explains how to match it in the registrar's form."
          ],
          "ordered": true
        },
        "If a provider move or nameserver change is planned, use its DNSSEC migration procedure before enabling or replacing records. A key from the old DNS service will usually not authenticate answers signed by a new service. A second service serving copies of the zone (secondary DNS), multiple providers signing it, and delegated subdomains each need the procedure for that arrangement.",
        "If a subdomain has no NS answer, check the parent domain's nameservers and records. An ordinary subdomain is often part of that parent zone. A delegated subdomain has its own NS delegation in the parent zone; verify that entry before editing a separate zone."
      ]
    },
    {
      "h": "Check existing DNSKEY and parent DS records",
      "ps": [
        "TTL means time to live, the period a DNS answer may remain cached. You will need the parent DS TTL for rollback. A successful DNS lookup and a successful DNSSEC validation are separate checks.",
        {
          "list": [
            "Look up DNSKEY for the zone and DS for the domain using a DNSSEC-capable lookup tool. With dig, run dig DNSKEY example.com +dnssec and dig DS example.com +dnssec, replacing example.com in both commands with the zone name. Save the outputs, including TTLs and any error. For a registered domain, check that the DS comes from its parent zone; dig DS example.com +trace, with the same substitution, shows the delegation path when your network permits those queries.",
            "If DNSKEY and DS are both absent after successful lookups, the setup is unsigned. An empty answer differs from a timeout or SERVFAIL. SERVFAIL means the resolver could not return a usable answer; a timeout means it did not answer in time. Recheck a failed lookup before deciding that a record is absent.",
            "If the DNS host is signing and the parent DS validates, keep that setup. Use the chain validation steps below to check the connection between them. Recheck the scan's exact name and time too; it may have queried another subdomain or encountered a transient failure.",
            "If the zone is signed but no parent DS exists, inspect the host's status and recent changes. This can be an incomplete setup or a deliberate disablement. Cloudflare can keep serving DNSKEY and signatures after DNSSEC is disabled. To enable DNSSEC now, follow the host's enablement procedure and publish its current DS values. Signing alone does not establish trust from the parent.",
            "If a parent DS exists but the zone is unsigned or validation fails, save all existing entries and run the diagnostic steps below before adding another DS. Compare the active host's generated DS with the published parent entries and check any previous provider. Correct a confirmed copying error with the generated values. For a stale key or unknown mismatch, use the providers' supported replacement or recovery sequence; preserve signing while a cached parent DS can still require it."
          ],
          "ordered": true
        },
        "If the name is a delegated subdomain, its DS normally belongs in the parent domain's DNS zone, under the parent DNS operator's control. It is not the same registrar form used for the registered domain. Follow the parent and child providers' subdomain instructions."
      ]
    },
    {
      "h": "Save the starting state and prepare recovery",
      "ps": [
        "Capture the active nameservers, DNSSEC status, current public DNSKEY and parent DS records, and their TTLs before altering either account. Keep the DNS host's generated DS information beside the registrar's existing entries for comparison. If no DS exists yet, capture the newly published parent DS and its TTL during verification; that is the cache lifetime needed for rollback.",
        "Read the provider's disablement or rollback procedure before enabling. The parent DS creates the requirement for signed answers. If you later remove that requirement, resolvers can retain it until the old parent DS TTL expires. Signing must stay available for those resolvers during the transition.",
        "Choose a time when you can check the domain immediately and reach both providers' support if needed. Record a baseline: open the website, look up its usual hostname and MX (Mail Exchange) records, which identify incoming-mail destinations, and send a non-sensitive message from an external mailbox to a mailbox at the domain. Keep an already-open provider session and its account-recovery method available; DNS failures can also affect mail used for login. If the domain deliberately has no receiving mail service, test the records for the services it actually uses."
      ]
    },
    {
      "h": "Cloudflare DNS: enable signing for an existing primary zone",
      "ps": [
        "Use this branch when Cloudflare already hosts the active primary DNS zone, where you manage the domain's records. Check that the zone is active and its nameservers match the registrar. If the move to Cloudflare is still pending, follow its migration procedure before enablement.",
        {
          "list": [
            "In the Cloudflare dashboard, select the domain and open DNS settings. Find DNSSEC. If it is already enabled, use DS record to inspect its current values and compare them with the parent; avoid restarting the setup.",
            "For an unsigned zone, select Enable DNSSEC. Cloudflare signs the zone and displays the generated DS information. Copy the full DS details into your change note. You can reopen them from DS record on the DNSSEC card.",
            "Check whether Cloudflare also manages DS publication for this registration. Cloudflare Registrar handles it automatically, as do certain top-level-domain arrangements documented by Cloudflare. For an external registrar requiring manual publication, proceed to its DS form using the generated values.",
            "Keep signing enabled while completing and validating delegation. Publishing a matching DS depends on the signed zone being available."
          ],
          "ordered": true
        },
        {
          "text": "Cloudflare's DNSSEC instructions cover primary-zone enablement, automatic publication and recovery. Use its separate procedures for secondary DNS or a delegated subdomain.",
          "links": [
            {
              "phrase": "Cloudflare's DNSSEC instructions",
              "to": "https://developers.cloudflare.com/dns/dnssec/",
              "start": 0
            }
          ]
        }
      ]
    },
    {
      "h": "Enter the DS fields supplied for your zone",
      "ps": [
        "At an external registrar, open the domain's DNSSEC or DS records settings. This is a delegation setting for the registered domain, not an ordinary text (TXT) record in your child zone. Some registrars accept one DS line; others ask for its four fields separately. Copy those fields from your DNS host's current generated DS.",
        {
          "table": {
            "caption": "DS record fields for registrar publication",
            "headers": [
              "Field",
              "Meaning and source"
            ],
            "rows": [
              [
                "Key tag / KeyTag",
                "A numeric identifier for the signing key. Copy it from this zone's generated DS; a tag for another domain does not identify your key."
              ],
              [
                "Algorithm",
                "The numeric code or matching label for the public-key signing algorithm. Choose the DNS host's supplied value. Do not substitute a different algorithm because the registrar accepts it."
              ],
              [
                "Digest type / DigestType",
                "The code for the hash function used to calculate the DS digest. A hash function turns the public-key data into a fingerprint for comparison. It is separate from the signing algorithm. Match the supplied DS exactly."
              ],
              [
                "Digest",
                "The long hexadecimal fingerprint of the relevant DNSKEY. Copy every character from your zone's DS. It is not the full DNSKEY and not a private key."
              ],
              [
                "TTL, if shown",
                "The parent record's cache lifetime. Save it for rollback planning. The parent or registrar may control this value; the TTL of a website address record is a different setting."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Namecheap registrar with external DNS: add or inspect the DS entry",
      "ps": [
        {
          "text": "This example applies to a domain registered at Namecheap and pointed to custom nameservers. Namecheap's custom-DNS instructions show Domain List, Manage beside the domain, then Advanced DNS and the DNSSEC control. A domain on Namecheap's own DNS can have a different workflow.",
          "links": [
            {
              "phrase": "Namecheap's custom-DNS instructions",
              "to": "https://www.namecheap.com/support/knowledgebase/article.aspx/9722/2232/managing-dnssec-for-domains-pointed-to-custom-dns/",
              "start": 92
            }
          ]
        },
        {
          "list": [
            "Open that domain's DNSSEC section. If it is off and no previous DS exists, enable the control to reveal the DS-entry fields. If it is already on, inspect the entries before changing them.",
            "If the entry is absent, fill KeyTag, Algorithm, DigestType and Digest from the active DNS host's generated DS. Save using the checkmark control. Reopen the saved entry and compare all four fields.",
            "If an entry already matches and validates, keep it. If it differs, check whether it belongs to an old provider or a planned key rollover, the replacement of a signing key. Use the providers' supported replacement or recovery sequence; several DS entries can be legitimate during a managed rollover. Compare their fields and validation results rather than deleting an entry just because there is more than one.",
            "Treat an unsupported algorithm or missing DNSSEC menu as a provider-support problem. Send the registrar the domain ending and the algorithm supplied by your DNS host through its support portal. Do not invent compatible values or start a registrar transfer as an unplanned repair."
          ],
          "ordered": true
        },
        "Re-enabling a registrar control can restore previously saved DS entries. Inspect those entries every time, especially after a DNS provider change. No DS value from a documentation example is suitable for your domain."
      ]
    },
    {
      "h": "Validate the chain and recheck website and mail",
      "ps": [
        {
          "list": [
            "After publication, look up the parent DS again and compare all four fields with the DNS host's generated record. With dig, run dig DS example.com +trace, replacing example.com with your domain, to inspect the parent answer and its TTL. Record that TTL even if no DS existed before enablement. A saved registrar form does not prove the registry, which operates the top-level domain, has published the change.",
            {
              "text": "Open DNSViz, enter the actual zone name, and select Analyze for a first analysis or Update Now for a fresh result. Inspect the chain from the DNS root through the parent to your zone. It should authenticate the delegation and signed answers without errors about missing signatures or mismatched keys and DS data. Check the analysis time so you are reviewing the current setup.",
              "links": [
                {
                  "phrase": "DNSViz",
                  "to": "https://dnsviz.net/",
                  "start": 5
                }
              ]
            },
            "As an additional check, query an existing website name through a validating resolver, which checks DNSSEC signatures and the trust chain. Run dig @1.1.1.1 www.example.com A +dnssec, replacing www.example.com with the hostname your website uses. This queries Cloudflare's public resolver for the website's address and requests DNSSEC data. The A record holds an IPv4 network address; IPv4 and IPv6 are the two IP address formats. NOERROR means the DNS query succeeded; ad in the flags line means the resolver authenticated the answer. An RRSIG alone shows that a signature was returned, without establishing full validation.",
            "Repeat the query for incoming-mail destinations using dig @1.1.1.1 example.com MX +dnssec, replacing example.com with the receiving domain. Check important delegated zones through DNSViz too. If results disagree, repeat the same query with @1.1.1.1 replaced by @8.8.8.8 to use Google's public validating resolver. An absent ad flag alone is inconclusive: confirm that the resolver validates and inspect the chain analysis.",
            "Open the usual website pages and repeat the external inbound mail test. Keep the validation result, DNS answers, date and observed service results. A successful browser visit can use cached answers, so retain the separate chain validation."
          ],
          "ordered": true
        },
        {
          "text": "Cloudflare's DNSSEC troubleshooting guide explains dig results and links to DNSViz. Keep the full chain result with your service tests; a DNSKEY observation from a public scan covers only part of the setup. Save the validated delegation and the parent DS TTL with your domain records; you will need them before a nameserver move, key rollover or DNSSEC rollback.",
          "links": [
            {
              "phrase": "Cloudflare's DNSSEC troubleshooting guide",
              "to": "https://developers.cloudflare.com/dns/dnssec/troubleshooting/",
              "start": 0
            }
          ]
        }
      ]
    },
    {
      "h": "If validation fails, diagnose the mismatch before changing keys",
      "ps": [
        "SERVFAIL means the resolver could not return a usable answer; it can have causes other than DNSSEC. If the domain worked before DS publication and fails at validating resolvers afterwards, compare the parent DS, current DNSKEY and authoritative nameservers first. A stale record from a previous host is one common cause.",
        "For a diagnostic comparison, query the same existing hostname and resolver with checking disabled: dig @1.1.1.1 www.example.com A +dnssec +cd. Replace www.example.com with the same existing hostname used in the failed normal query. If normal validation fails but this query returns the expected answer, DNSSEC validation is a likely problem. The +cd option changes this test query; it does not repair DNSSEC or justify disabling validation for users.",
        "Compare the DS fields for a mistyped digest, algorithm or digest type. Also check for an old DS or signatures that are missing or no longer valid. Correct a confirmed copying error with the current host-generated value and revalidate. If the mismatch remains unexplained, send the DNS host and registrar the domain, time, failed normal query, comparison query and chain-validator result. Those details let them investigate the specific failure. Use the host's supported procedure for key deletion or rotation."
      ]
    },
    {
      "h": "Roll back in the order required by the parent DS",
      "ps": [
        {
          "list": [
            "If recovery requires returning to an unsigned delegation, remove the parent DS entries for this zone through the registrar first. During a managed rollover or migration, follow that arrangement's recovery procedure so another active signing path is not removed by mistake. For Cloudflare Registrar, use its documented registrar workflow. Keep the current signing keys and service available while DS removal propagates.",
            "Confirm that the parent no longer publishes the DS and record the time. Keep signing available until the removed parent DS's previously published TTL has fully expired after removal. Use the TTL captured during the starting checks or after enablement, together with the provider's recovery guidance. A website record's TTL or an arbitrary one-hour wait does not establish when cached DS entries have expired.",
            {
              "text": "Only then disable zone signing if that is the intended recovery. With automatic DS publication, check what the provider's control does and verify that parent removal has completed. Cloudflare's disable control can leave signing and DNSKEY records present. Stopping signing and deleting keys is a separate operation: Cloudflare recommends waiting at least 1.5 times the removed DS record's TTL before deleting the remaining DNSKEY records. Automatic registrar publication timing is not manually controlled.",
              "links": [
                {
                  "phrase": "Cloudflare recommends waiting at least 1.5 times the removed DS record's TTL",
                  "to": "https://developers.cloudflare.com/dns/dnssec/troubleshooting/#delete-remaining-dnskey-records-after-disabling-dnssec",
                  "start": 316
                }
              ]
            },
            "Query through validating resolvers again, open the website and repeat mail tests. DNS caching can delay recovery. Keep the failed validation and restored state so you can resolve the underlying problem before re-enabling."
          ],
          "ordered": true
        },
        "If the registrar or domain ending cannot support your DNS host's signing arrangement, record the limitation and evaluate a provider change separately. Keep the starting records and validation result so that decision has evidence behind it. Helm's public scan checks limited public configuration; it does not administer DNS or assess internal systems. Any help from Helm needs an agreed scope."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "set-up-mta-sts",
  "title": "Set up and test an MTA-STS mail policy",
  "metaDesc": "Confirm MX destinations, publish and test an MTA-STS policy, and plan recovery around the lifetime of cached enforcement policies.",
  "date": "2026-10-14",
  "readMin": 15,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "Set up MTA-STS by publishing a policy file on an HTTPS subdomain and a TXT record in your domain’s DNS. Start in testing mode to find mail-server or certificate problems before you enable enforcement, which can delay mail when validation fails. You’ll need the incoming-mail destinations, DNS access, and somewhere to host the file.",
  "lead": [],
  "sections": [
    {
      "h": "Understand what you are setting up",
      "ps": [
        "MTA means mail transfer agent, the server software that moves email between systems. STS means strict transport security. MTA-STS lets your domain tell supporting senders which mail servers it accepts and that those servers must provide an encrypted connection with a trusted certificate. It protects the connection into your receiving service; it does not encrypt a message end to end or authenticate the person who wrote it.",
        "A missing marker means the scan did not find that public signal. Mail providers can already use TLS, the technology that encrypts a connection, without your domain publishing MTA-STS. The finding alone cannot tell you whether earlier messages were encrypted.",
        {
          "text": "There are two parts to configure under the MTA-STS standard: a TXT record at _mta-sts.your-domain and a plain-text policy at https://mta-sts.your-domain/.well-known/mta-sts.txt. The underscore belongs in the DNS marker. The web hostname has no underscore. Publishing one part without the other leaves an incomplete setup.",
          "links": [
            {
              "phrase": "MTA-STS standard",
              "to": "https://datatracker.ietf.org/doc/html/rfc8461",
              "start": 43
            }
          ]
        },
        {
          "text": "Set up TLS reporting before testing the policy if you want reports about connection failures. The TLS reporting guide explains how to create the receiving mailbox or reporting-service destination. Reporting and enforcement are separate settings.",
          "links": [
            {
              "phrase": "TLS reporting guide",
              "to": "/resources/set-up-tls-reporting/",
              "start": 98
            }
          ]
        }
      ]
    },
    {
      "h": "Find DNS and collect the settings you will need",
      "ps": [
        "Your registrar is the company where the domain is registered and renewed. Your DNS host publishes the domain’s records. Your email host receives and stores mail. The HTTPS policy host serves the MTA-STS file. These may be four different services: using Microsoft 365 or Google Workspace does not tell you where to edit DNS, and the company hosting your website may not publish your DNS records.",
        {
          "list": [
            "Open the domain account you use for renewals and select the domain. Look for Nameservers. These identify the servers serving its DNS zone, the collection of records for the domain. If they belong to another provider, open that provider’s account and find this domain under DNS, DNS records, or Zone Editor. Keep the nameservers as they are; switching them to gain an editing screen can disrupt both mail and the website.",
            "If you cannot identify that account, check the domain-renewal receipt and the business password manager for the provider shown by the nameservers. Use that provider’s account-recovery or support process with proof that your business controls the domain. Request access to edit TXT records for this domain. You can complete the read-only checks below while access is being recovered.",
            "In the DNS zone, find records with Type MX. MX means mail exchanger. Copy each Destination or Target, its Priority, and TTL. Lower priority numbers are tried first, but backup destinations still need policy coverage. Compare the destinations with the inbound-routing settings in your email or filtering-gateway account. A filtering gateway may receive the connection before Google or Microsoft ever sees the message.",
            "Search for any record at _mta-sts and the website record at mta-sts, including CNAME records used by a managed policy service. Save their exact names, values, types and TTLs. Retrieve the existing policy file if one is already hosted, and save it locally with the date. Record its max_age, including any longer lifetime used by recent policies. If the marker is absent, you will create it after hosting the file. If a policy already enforces delivery, use the recovery section before replacing it with a testing policy.",
            "Check that you can create or manage the mta-sts web hostname on your chosen host and obtain a certificate for it. Confirm with your mail provider that every receiving destination supports the TLS and certificate requirements. If a gateway or backup server is unfamiliar, use its provider’s support portal to request its supported MTA-STS MX patterns and certificate requirements. Include the actual MX list so the answer applies to your routing."
          ],
          "ordered": true
        },
        "On a Mac or Linux computer with dig installed, the following lookups can help you find the nameservers and mail destinations. Replace example.com with the domain after @ in the affected email addresses. Run the commands separately in Terminal. They read public DNS; they do not change settings.",
        {
          "code": "dig +short NS example.com\ndig +short MX example.com\ndig +short TXT _mta-sts.example.com",
          "caption": "Read-only DNS lookups. example.com is a reserved teaching domain.",
          "language": "bash"
        },
        "The MX output contains a priority number followed by a hostname. A final dot marks the end of the complete DNS name. If a short lookup is empty, repeat that command without +short and read status in the header. SERVFAIL or a timeout means the lookup failed; it does not establish that records are missing. Retry through another network or your provider’s DNS diagnostic tool. An MX answer of 0 . is a null MX declaring that this domain accepts no mail. If the domain should receive mail but has no usable MX route, resolve that routing problem before creating its MTA-STS policy."
      ]
    },
    {
      "h": "Get the policy values for your mail provider",
      "ps": [
        {
          "text": "For Google Workspace, sign in to admin.google.com with the Gmail Settings administrator privilege. Go to Apps > Google Workspace > Gmail > Compliance, find MTA-STS, and select Validate your MTA-STS configuration here. Select your domain. Google’s configuration check shows current values on the left and suggested values for missing or invalid settings on the right. Save the suggested policy, then compare its mail-server entries with the public MX records and any gateway you use.",
          "links": [
            {
              "phrase": "Google’s configuration check",
              "to": "https://knowledge.workspace.google.com/admin/gmail/advanced/check-your-mta-sts-configuration",
              "start": 238
            }
          ]
        },
        "If Google shows Not Configured, continue with creating the file and TXT records below. If it reports an error, correct that part and validate again because one check may not expose every problem. Security > Security Health > MTA-STS is a separate status view available in supported editions; it does not supply the suggested configuration. A missing Security Health menu does not prevent you from checking the public records.",
        {
          "text": "For Microsoft 365, open admin.microsoft.com, go to Settings > Domains and select your domain. Inspect DNS records > Manage DNS to find the intended MX destination. Compare it with published DNS. Microsoft’s MTA-STS guidance allows its Exchange Online pattern only when MX records point directly to Exchange Online. If public MX points to a filtering gateway, use that gateway’s supported values. Outlook is a mail application and does not establish either receiving route.",
          "links": [
            {
              "phrase": "Microsoft’s MTA-STS guidance",
              "to": "https://learn.microsoft.com/en-us/exchange/security-and-compliance/enhance-mail-flow-using-strict-transport-security",
              "start": 195
            }
          ]
        },
        {
          "text": "Microsoft does not host customers’ policy files in Exchange Online. Its hosting walkthrough uses Azure Static Web Apps, with a custom domain and certificate. You can also use an existing host that meets the policy requirements. Read the hosting plan and its cost before creating a new service. For cPanel mail, verify the receiving hostname and mail-service certificate against the hosting service's documented configuration; a working website certificate alone does not establish SMTP certificate coverage.",
          "links": [
            {
              "phrase": "hosting walkthrough",
              "to": "https://learn.microsoft.com/en-us/exchange/security-and-compliance/enhance-mail-flow-using-strict-transport-security",
              "start": 72
            }
          ]
        }
      ]
    },
    {
      "h": "Create a testing policy and understand each line",
      "ps": [
        "Use the values you obtained for your own receiving service. Save a plain-text file named mta-sts.txt, with one field per line. A word-processor document or an HTML page is unsuitable. This fictional example has two receiving hosts. Replace both mx values with the hostnames or patterns verified for your route; add or remove mx lines to cover every intended destination. Choose max_age using your provider’s guidance, as explained below.",
        {
          "code": "version: STSv1\nmode: testing\nmx: mx1.mail.example.net\nmx: mx2.mail.example.net\nmax_age: 86400",
          "caption": "Illustrative testing policy for two fictional, verified MX destinations.",
          "language": "text"
        },
        {
          "text": "Google’s policy instructions describe the receiving-server requirements and testing stage. Use exact verified hostnames or only a wildcard pattern your provider explicitly supports. MTA-STS compares these entries with MX destination hostnames, not with your users’ email addresses or the website address.",
          "links": [
            {
              "phrase": "Google’s policy instructions",
              "to": "https://knowledge.workspace.google.com/admin/gmail/advanced/create-an-mta-sts-policy",
              "start": 0
            }
          ]
        },
        {
          "text": "Google’s testing guidance recommends max_age between 604800 and 1209600 seconds (one to two weeks). Its range is narrower than the values allowed by the protocol. Use the recommendation for your receiving service; the one-day value in this fictional example is not a default for Google Workspace or Microsoft 365.",
          "links": [
            {
              "phrase": "Google’s testing guidance",
              "to": "https://knowledge.workspace.google.com/admin/gmail/advanced/create-an-mta-sts-policy",
              "start": 0
            }
          ]
        },
        {
          "table": {
            "caption": "MTA-STS policy fields",
            "headers": [
              "Field",
              "Meaning",
              "What to enter"
            ],
            "rows": [
              [
                "version",
                "The policy format version.",
                "STSv1, with this spelling and capitalization."
              ],
              [
                "mode",
                "How supporting senders apply the policy.",
                "testing permits delivery despite MTA-STS validation failures. enforce withholds delivery to destinations that fail validation. none tells senders fetching this policy that the domain has no active MTA-STS policy."
              ],
              [
                "mx",
                "A permitted receiving-server hostname or supported pattern.",
                "One mx line for each required destination or provider-approved pattern. Include backup or gateway destinations. Enter the hostname without the priority number or the final dot printed by dig."
              ],
              [
                "max_age",
                "How long a sender can cache this policy, in seconds.",
                "Use a whole number from 0 to 31557600, chosen with your provider’s rollout and recovery instructions. 86400 is one day in this fictional example; it is not a universal recommendation."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Host the file at the exact HTTPS address",
      "ps": [
        {
          "list": [
            "Add mta-sts.your-domain as a custom domain or subdomain in your chosen hosting account. Follow its domain-verification instructions. At your DNS host, create or edit the mta-sts A, AAAA or CNAME record using the address or target supplied by that host. An A record points to an IPv4 address, AAAA to an IPv6 address, and CNAME to another hostname. A CNAME target is a hostname without https:// or a file path.",
            "Before overwriting an existing mta-sts record, verify which policy service uses it. A managed provider may already host the policy through that record. Update the policy in that service when appropriate. For a new host, complete its certificate issuance for mta-sts.your-domain before publishing the marker. A certificate for only your main website will not cover this hostname unless its listed names or wildcard coverage include it.",
            "Upload mta-sts.txt so that the exact path /.well-known/mta-sts.txt serves the file. With cPanel, use Domains to find the document root for the mta-sts hostname, then File Manager to create .well-known inside that root and upload the file there. Enable the option to show hidden files if the leading-dot directory is invisible. With a managed static host, add the file to the project’s published output at that path and deploy through the host’s supported process.",
            "Open the complete HTTPS URL in a browser from outside the hosting environment. You should see the policy text without a certificate warning, login screen or redirect to the main website. Keep this path outside password protection and application routing. The server must return a successful HTTP 200 response with Content-Type: text/plain. If the file is missing, check the hostname’s document root and published output before adding the DNS marker."
          ],
          "ordered": true
        },
        {
          "text": "Google’s publishing instructions cover the policy address and HTTPS certificate. The two certificates in this setup have different jobs: the web certificate protects fetching this file, while the mail-server certificate protects the incoming SMTP connection.",
          "links": [
            {
              "phrase": "Google’s publishing instructions",
              "to": "https://knowledge.workspace.google.com/admin/gmail/advanced/publish-your-mta-sts-policy",
              "start": 0
            }
          ]
        },
        "For a more precise check, run this command with your domain substituted. It displays response headers and the policy body, and stops after 20 seconds. It keeps certificate verification enabled and does not follow redirects. Check for 200, text/plain and your complete policy text; a 301 or 302 redirect is a failed policy fetch even if your browser reaches another page.",
        {
          "code": "curl --max-time 20 --include https://mta-sts.example.com/.well-known/mta-sts.txt",
          "caption": "Check the HTTP status, Content-Type and policy body. Replace the example domain.",
          "language": "bash"
        }
      ]
    },
    {
      "h": "Create or edit the _mta-sts TXT record",
      "ps": [
        "In the authoritative DNS account, search for _mta-sts across record types. If it is a CNAME, the marker is delegated to another service: inspect that service’s policy settings and update it there. Do not add a TXT record beside the CNAME. For a TXT marker, edit the one existing record that starts with v=STSv1 after saving its prior value. If neither a TXT marker nor a CNAME exists, use Add record and select TXT. Resolve multiple MTA-STS TXT markers with the existing policy-service configuration before saving; competing markers prevent discovery of a new policy.",
        "For this fictional example, the TXT value is v=STSv1; id=2026101401. The v tag identifies the protocol. The id is a revision identifier, not a password or provider account number. Use a new value of 1 to 32 letters or digits whenever you change the hosted policy, so senders can discover that a fresh copy is available. Publish the changed file before updating the identifier.",
        {
          "text": "In cPanel, use Domains > Zone Editor > Manage next to the domain. Choose Edit beside the existing TXT row, or Add Record > Add TXT Record for a missing one. Save that row with Save Record. The Zone Editor documentation describes both paths. Only use this editor when that server or its DNS cluster publishes your authoritative zone.",
          "links": [
            {
              "phrase": "Zone Editor documentation",
              "to": "https://docs.cpanel.net/cpanel/domains/zone-editor/",
              "start": 193
            }
          ]
        },
        {
          "text": "With Cloudflare, select the domain, open DNS > Records and edit the matching TXT row or use Add record > TXT. Cloudflare’s DNS record instructions explain the record editor. A successful save in an unused DNS account will not change the public answer.",
          "links": [
            {
              "phrase": "Cloudflare’s DNS record instructions",
              "to": "https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/",
              "start": 110
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/cpanel-zone-add.png",
            "alt": "cPanel Zone Editor example with Add Record highlighted; the table shows Name, TTL, Type, Record and Actions.",
            "caption": "Namecheap’s published cPanel example highlights Add Record. Use it when _mta-sts is absent, then choose TXT; use Edit for an existing row. The pictured A record and its IP address are unrelated to an MTA-STS marker. This is a provider documentation example, not a Helm or customer account.",
            "width": 1221,
            "height": 253
          }
        },
        {
          "table": {
            "caption": "Fields for the MTA-STS DNS marker",
            "headers": [
              "DNS field",
              "Value or decision"
            ],
            "rows": [
              [
                "Type",
                "TXT. This is separate from the A, AAAA or CNAME that makes the policy website reachable."
              ],
              [
                "Name / Host",
                "_mta-sts if the editor appends your domain; _mta-sts.example.com if it requires a complete name. Check the resulting row to avoid _mta-sts.example.com.example.com."
              ],
              [
                "Value / Content / Record",
                "v=STSv1; id=2026101401 in this illustration. Enter the protocol text, not the HTTPS URL or the contents of mta-sts.txt. Do not add the DNS zone-file quotation marks unless your editor specifically requires them."
              ],
              [
                "TTL",
                "Time to live, the number of seconds DNS resolvers may cache this TXT answer. Preserve an existing TTL or use the provider’s default for a new record. This is different from the policy’s max_age."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Verify publication and test incoming mail",
      "ps": [
        "Query _mta-sts.your-domain again and compare the public value with the saved row. If it is missing or old, confirm that you edited the authoritative zone and used the right name. You can query one nameserver returned by the NS lookup directly with dig @nameserver-hostname TXT _mta-sts.your-domain, replacing both placeholders. If that server shows the new value but your normal lookup shows the old one, a resolver may still be using a cached answer. Previously missing records can also be cached.",
        "DNS propagation is the time different resolvers take to pick up the change. The previous TTL matters: shortening it now does not remove an answer cached earlier. Repeat the policy URL check as well. A correct TXT result cannot establish that the HTTPS certificate, file contents or receiving servers are correct.",
        {
          "list": [
            "Run your mail provider’s MTA-STS validation or a tool that validates the full record, policy fetch, syntax, MX coverage and certificates. In Google Workspace, repeat the domain configuration check. Record the time, policy identifier and mode used for the test.",
            "Send ordinary, non-sensitive test messages from external accounts you control to representative mailboxes at your domain. Include addresses using any documented alternate receiving routes. Record which arrived and whether the sender received a delay or bounce. A successful message from one sender does not exercise every provider or backup MX host.",
            "Read TLS reports over a period that includes normal business traffic and infrequent senders. Look for MX mismatches, certificate failures and missing STARTTLS, the command that starts an encrypted SMTP connection. Use the report’s receiving hostname to locate the affected mail or gateway service. A reporting service can help interpret the results; missing reports alone are inconclusive."
          ],
          "ordered": true
        },
        "Google recommends starting with two weeks of testing. Use that as its rollout guidance, then extend observation when low traffic or an infrequent route leaves a gap. If you cannot account for a receiving server, keep testing while you confirm it. Testing mode itself does not force encryption."
      ]
    },
    {
      "h": "Move to enforcement and recover if delivery fails",
      "ps": [
        "After all intended MX destinations pass validation and your tests and reports show no unresolved legitimate route, save the working testing file. Change mode to enforce using your provider’s supported policy, publish the file, check its public response, and update the TXT id. Choose max_age with the same recovery plan you used for testing. Watch new TLS reports, delivery logs and external tests during the transition.",
        "If a legitimate sender starts failing, collect its bounce or delay details and the receiving hostname. First correct a wrong mx entry, expired mail-server certificate or broken policy host when the evidence identifies it. If you need to pause MTA-STS enforcement, publish a valid policy with mode: testing and update id. Keep the HTTPS endpoint reachable so senders can fetch the revised policy. Recheck the affected delivery path after the change.",
        "An older enforced policy may remain cached for its max_age. Deleting the marker or shortening the new policy’s lifetime will not instantly erase those copies, so recovery may be delayed. For each previous policy, add its max_age to the time it was last served. Use the latest resulting expiry to plan the remaining cache window. A scheduled change of mail gateways needs compatible policy coverage before the MX cutover for this reason.",
        {
          "text": "For permanent removal, the standard’s removal procedure uses mode: none, a new identifier and a wait for all previously served policies to expire before removing the marker and HTTPS endpoint. Keep TLS reporting available while investigating; changing its destination does not require changing MTA-STS enforcement. Helm’s public scan cannot confirm every sender’s enforcement or whether your reports are being received and reviewed.",
          "links": [
            {
              "phrase": "standard’s removal procedure",
              "to": "https://datatracker.ietf.org/doc/html/rfc8461",
              "start": 27
            }
          ]
        }
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "set-up-tls-reporting",
  "title": "Set up and verify TLS reporting for email delivery",
  "metaDesc": "Choose a monitored TLS reporting destination, validate the DNS configuration and review transport failures without changing enforcement.",
  "date": "2026-10-14",
  "readMin": 13,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "TLS reporting asks participating mail servers to send you summaries of their attempts to deliver mail to your domain. To set it up, create a working report destination and publish one TXT record at _smtp._tls in your authoritative DNS. The reports can expose transport problems; publishing the record does not force encryption or change your mail routing.",
  "lead": [],
  "sections": [
    {
      "h": "Quick answer",
      "ps": [
        "Create and test the destination first, then publish one valid _smtp._tls TXT record. Verify the public answer and actual report receipt separately, and use reported failures to investigate the affected mail or policy host."
      ]
    },
    {
      "h": "What TLS reports contain, and what rua means",
      "ps": [
        "TLS stands for Transport Layer Security, which encrypts a connection. TLS-RPT is the reporting protocol for email transport. A report summarizes connections from a participating sending service to your receiving mail service during a reporting period. It can contain counts of successes and failures, server names, IP addresses and the policy the sender used. It is not an alert for each individual message.",
        {
          "text": "The TLS-RPT standard uses a field called rua for the destination that receives aggregate reports. Read it as the report-delivery address. Its value is a URI, an address that includes how to deliver the report: mailto: means email it to a mailbox, while https:// means submit it to a report-processing web endpoint. A normal website or contact form is not such an endpoint.",
          "links": [
            {
              "phrase": "TLS-RPT standard",
              "to": "https://datatracker.ietf.org/doc/html/rfc8460",
              "start": 4
            }
          ]
        },
        "DMARC also uses the label rua, but its aggregate reports describe email authentication. TLS reports describe transport and policy validation. A service that accepts DMARC reports may need TLS reporting enabled separately or give you a different destination. Do not assume its DMARC address can process TLS reports.",
        {
          "text": "The MTA-STS setup guide covers the separate policy that can require a valid encrypted connection. You can configure TLS reporting before MTA-STS enforcement, which gives you a way to observe failures while the policy is in testing mode. A missing TLS-RPT record only tells you this public reporting request was not found; your mail host may have other logs or monitoring.",
          "links": [
            {
              "phrase": "MTA-STS setup guide",
              "to": "/resources/set-up-mta-sts/",
              "start": 4
            }
          ]
        }
      ]
    },
    {
      "h": "Choose a mailbox or reporting service",
      "ps": [
        "You need access to your email or reporting account and to the account that publishes your domain’s DNS. A registrar sells and renews the domain. The DNS host publishes its records, and the email host delivers messages. Look at Nameservers in the registrar’s domain settings to identify the DNS service, then open that provider’s DNS records page. Google or Microsoft mailbox administration is usually a different login.",
        "If the nameservers point elsewhere, editing the registrar’s unused zone will have no public effect. Use the domain-renewal receipt, your business password manager, or the DNS provider’s account-recovery process to locate the correct account. Keep the nameservers unchanged while recovering access. You can prepare and test the report destination first.",
        "A dedicated mailbox is a reasonable starting point when you can review reports yourself. A reporting service can collect and summarize the machine-readable files. Before using a service, check that it supports TLS-RPT, add your domain through its onboarding process, and copy the exact destination it assigns to this domain. Review who can access the reports and how long the service retains them because the reports expose information about your mail infrastructure.",
        "For a mailbox, choose an address your business controls, such as tls-reports@your-domain. The tls-reports part is a choice, not a required label. A reporting service may assign a long address or a destination on its own domain; use its value exactly. If you already have a working destination, keep it until you have verified the replacement.",
        "For an HTTPS reporting endpoint, use the URL supplied by a service that accepts TLS-RPT submissions. It must process report uploads. Hosting a static file at that URL or using the MTA-STS policy URL will not collect reports. Google Workspace does not supply this upload API."
      ]
    },
    {
      "h": "Create the mailbox if it does not exist",
      "ps": [
        {
          "text": "In Microsoft 365 with Exchange Online, sign in to admin.microsoft.com with the Exchange admin role. Open Teams & Groups > Shared mailboxes, select Add a shared mailbox, and enter a descriptive display name and your chosen reporting address. Save it, then add the people who will read the reports under Add members. Microsoft’s shared-mailbox instructions explain access and licensing conditions. Use your existing mailbox process for a hybrid Exchange deployment. Shared mailboxes are accessed through members’ accounts; keep direct sign-in blocked.",
          "links": [
            {
              "phrase": "Microsoft’s shared-mailbox instructions",
              "to": "https://learn.microsoft.com/en-us/microsoft-365/admin/email/create-a-shared-mailbox?view=o365-worldwide",
              "start": 315
            }
          ]
        },
        {
          "text": "In Google Workspace, sign in to admin.google.com with the User management privilege, then open Directory > Users. Check for an existing mailbox address or an alias you can use and monitor. If you need a dedicated new mailbox, select Add new user, choose the domain and reporting address, and follow your organization’s user and license process. Google’s user-creation instructions explain the required fields. A new user mailbox can consume a paid license, and its Google services can take up to 24 hours to become available. Limit its access and establish who will review it; do not put its password into the DNS record.",
          "links": [
            {
              "phrase": "Google’s user-creation instructions",
              "to": "https://knowledge.workspace.google.com/admin/users/add-an-account-for-a-new-user",
              "start": 345
            }
          ]
        },
        {
          "text": "For mail hosted on cPanel, open Email > Email Accounts, search for the address, and choose Create if it is missing. Select the correct domain, enter the mailbox name, set a strong password through your normal password manager, and choose sufficient storage before creating it. Use Check Email to open webmail. The cPanel Email Accounts instructions explain these controls. This mailbox is suitable only if that cPanel server actually receives mail for your domain; creating it on a website server will not route Google or Microsoft mail there.",
          "links": [
            {
              "phrase": "cPanel Email Accounts instructions",
              "to": "https://docs.cpanel.net/cpanel/email/email-accounts/",
              "start": 314
            }
          ]
        },
        "Send a plain, non-sensitive test email from an external account you control to the chosen address. Open the mailbox through the access method you will use for review and confirm the message arrived. If it bounced, check the address spelling, selected domain and receiving route. If it is missing, check spam, quarantine, mailbox quota and delivery logs before publishing the record. This proves ordinary email can reach the mailbox; it does not yet prove report files are accepted or processed."
      ]
    },
    {
      "h": "Find, edit or create the TLS-RPT record",
      "ps": [
        {
          "list": [
            "Open the authoritative DNS zone for your email domain. Search for _smtp._tls across record types, including the full name _smtp._tls.your-domain. Save every matching row’s name, type, complete value and TTL. If a CNAME already uses this name, check the service it points to for an existing reporting setup and follow its DNS instructions. Do not add a TXT record alongside that alias. For a TXT record, continue below. TXT carries text that another service reads.",
            "If there is one record beginning v=TLSRPTv1;, edit it. Keep any destinations that are still in use until you have agreed and tested their replacement. A TXT record at _dmarc or at the root domain is a different setting and should not be edited for this task.",
            "If neither a TLS-RPT record nor a CNAME exists, choose Add record and select TXT. If several separate TXT records begin v=TLSRPTv1;, consolidate the intended destinations into one valid TLS-RPT record after checking their purpose. Multiple reporting addresses belong in one rua value, separated by commas; multiple competing policy records can prevent reporting.",
            "Enter the host name and value using the field explanations below. Check whether your DNS editor appends the domain automatically. Save the row, then read the displayed full name and value again to catch a duplicated domain or truncated destination."
          ],
          "ordered": true
        },
        "The fictional example below uses tls-reports@example.com. Replace the entire tls-reports@example.com address with the mailbox you created and tested, leaving mailto: immediately before it. If your reporting service supplied an HTTPS destination, replace the whole mailto: URI with that assigned https:// URL. The example address will not receive your reports.",
        {
          "code": "v=TLSRPTv1; rua=mailto:tls-reports@example.com",
          "caption": "Illustrative TXT value. Publish only after substituting a verified report destination.",
          "language": "text"
        },
        "If you intentionally use two email destinations, write each complete mailto: URI, with a comma between them. For example, rua=mailto:tls-reports@example.com,mailto:transport-review@example.com demonstrates the syntax. Either recipient may receive report data; a sender can choose to deliver to only one of the listed destinations. Do not add a second address simply as an untested backup.",
        {
          "table": {
            "caption": "TLS-RPT DNS fields",
            "headers": [
              "Field",
              "What it means and what to enter"
            ],
            "rows": [
              [
                "Type",
                "TXT for the manual reporting record described here. Its value is text; an MX record selects mail routing. Check an existing CNAME delegation before adding TXT."
              ],
              [
                "Name / Host",
                "_smtp._tls when the DNS editor adds your domain, or the complete _smtp._tls.example.com when required. Preserve both underscores and the dot between smtp and tls."
              ],
              [
                "Value / Content / Record",
                "The complete v=TLSRPTv1; rua=... string. v identifies the protocol version. rua identifies the destination. Use ordinary semicolons and an equals sign for each field."
              ],
              [
                "mailto: destination",
                "An existing, tested email address with mailto: immediately before it. A bare email address lacks the delivery method."
              ],
              [
                "https:// destination",
                "An exact upload endpoint assigned by a TLS-RPT service. A browser loading a page at that address does not prove it accepts report uploads."
              ],
              [
                "TTL",
                "Time to live in seconds, which controls how long resolvers may cache this DNS answer. Preserve an existing TTL or use the DNS provider’s default for a new record."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Use the right DNS editor for your provider",
      "ps": [
        {
          "text": "With cPanel authoritative DNS, use Domains > Zone Editor > Manage for the domain. Choose Edit on an existing TXT row, or Add Record and select TXT for a missing record, then Save Record. The cPanel Zone Editor documentation covers these paths. If TXT is not offered, your host may have disabled the required feature; use its support portal to request TXT editing for this domain, including the intended record name and value.",
          "links": [
            {
              "phrase": "cPanel Zone Editor documentation",
              "to": "https://docs.cpanel.net/cpanel/domains/zone-editor/",
              "start": 191
            }
          ]
        },
        {
          "text": "With Cloudflare DNS, select the domain and go to DNS > Records. Search for _smtp._tls. Use Edit on the matching TXT record or Add record > TXT, enter the fields and Save. The Cloudflare DNS instructions explain creation and editing. Other DNS hosts use similar fields, but their rules for short versus full host names can differ.",
          "links": [
            {
              "phrase": "Cloudflare DNS instructions",
              "to": "https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/",
              "start": 175
            }
          ]
        },
        {
          "text": "Google’s TLS reporting instructions explicitly place this TXT record at your domain host, outside the Google Admin console. In the Admin console’s MTA-STS configuration check, you can compare current and suggested TLS-RPT values for your domain. Replace any suggested example destination with your verified mailbox or the value assigned by your reporting service.",
          "links": [
            {
              "phrase": "Google’s TLS reporting instructions",
              "to": "https://knowledge.workspace.google.com/admin/gmail/advanced/turn-on-mta-sts-and-tls-reporting",
              "start": 0
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/cpanel-zone-add.png",
            "alt": "cPanel Zone Editor example with Add Record highlighted; the table shows Name, TTL, Type, Record and Actions.",
            "caption": "Namecheap’s cPanel documentation highlights Add Record for a missing DNS row. Select TXT for TLS reporting and use _smtp._tls as the host prefix when the editor adds your domain. The displayed A record is unrelated. This example shows a provider documentation account, not Helm or a customer.",
            "width": 1221,
            "height": 253
          }
        }
      ]
    },
    {
      "h": "Verify the public record and allow for caching",
      "ps": [
        "Use your provider’s public DNS lookup or a TXT lookup for _smtp._tls.your-domain. On a Mac or Linux computer with dig installed, run the command below after replacing example.com. It reads DNS without changing it.",
        {
          "code": "dig +short TXT _smtp._tls.example.com",
          "caption": "Read the published TLS-RPT record. Replace example.com with your email domain.",
          "language": "bash"
        },
        "Compare the answer with the saved value, especially the exact destination. DNS tools may show quotation marks around TXT data; those display marks are not normally entered in a provider’s Value field. If a tool splits a long record into adjacent quoted chunks, they can be parts of one TXT record. Check the full combined value before treating it as several policy records.",
        "If the short lookup is empty, repeat it without +short: dig TXT _smtp._tls.example.com, with your domain substituted. Read status in the header. SERVFAIL or a timeout means the lookup failed and cannot establish that the record is absent. Repeat through another network or the DNS provider’s diagnostic tool. If the answer has no TLS-RPT record, check the authoritative zone and resulting full host name. An entry at _smtp._tls.example.com.example.com is in the wrong place.",
        "When the authoritative DNS server shows the new record but a resolver still returns the previous one, wait for the old cache lifetime and check again. A cached negative answer can also delay visibility for a newly created record. Lowering TTL after an edit does not clear earlier caches. Keep the save time, old TTL and lookup time together so you can distinguish a publication error from a delayed lookup."
      ]
    },
    {
      "h": "Confirm report receipt and read the first failures",
      "ps": [
        "Participating services commonly aggregate reports daily, so allow time for a reporting period and delivery after publishing. Not all senders participate. A quiet inbox could mean little mail traffic, no participating sender, filtering or an incorrect destination; it cannot settle the cause on its own.",
        {
          "list": [
            "For a reporting service, check that your domain is verified and look for received reports in its TLS reporting section. DNS validation and report receipt are separate statuses. For a mailbox, look in Inbox, spam and quarantine for reports and check any attachment restrictions. An ordinary test email may pass a filter that blocks compressed report attachments.",
            "Use your service’s TLS report viewer, or open the report as data in a trusted text or JSON viewer. JSON is a structured text format. Reports can arrive compressed with gzip and need decompression before reading. Treat unexpected attachments and links with your normal email precautions; you do not need to run a program from a report.",
            "Read the date range, reporting organization and policy domain first so you know which traffic the report describes. Then compare successful and failed session counts and inspect failure-details for the receiving hostname and result type. A session is a connection attempt between mail servers; overlapping failure categories do not provide an exact count of lost messages.",
            "For certificate-expired or certificate-host-mismatch, inspect that receiving service’s SMTP certificate. For starttls-not-supported, verify its SMTP TLS configuration. For sts-policy-fetch-error, check whether the MTA-STS HTTPS endpoint returns the policy; for sts-webpki-invalid, check that endpoint’s certificate and trusted chain. For sts-policy-invalid, validate the hosted policy’s syntax and MX entries. For validation-failure, read the failure-reason-code or other supplied details to locate the failed check. Use the provider account for the affected hostname to investigate, or include the report date, result type and route in a support ticket when the provider controls the failed setting."
          ],
          "ordered": true
        },
        "If you use an email destination, remember that transport reports themselves can be delivered without TLS when a TLS failure is being reported. Avoid adding sensitive internal notes or customer content to report submissions. Limit access to the people reviewing this infrastructure data, and use your reporting service’s authentication checks to validate the sender of a report."
      ]
    },
    {
      "h": "Correct a destination or undo the reporting change",
      "ps": [
        "If the destination was entered incorrectly, edit the existing TLS-RPT row, save the corrected value and repeat the public lookup and receiving test. For a failed migration to a new service, restore the exact prior TXT value and TTL from your saved copy. Keep the old mailbox or service available through the cache transition so reports sent using an older answer can still arrive.",
        "If you deliberately stop TLS reporting, remove only the TLS-RPT policy you added, after saving it and confirming the decision. Cached answers may continue directing reports to its destination until they expire, and data already received remains subject to that destination’s retention process. Removing this record does not withdraw an MTA-STS policy or fix a mail-server certificate.",
        "Keep a dated record of the published destination, a successful ordinary receiving test, and actual report receipt when available. Helm’s public scan can inspect the DNS signal but cannot sign in to your mailbox or establish that reports are read. Use your mailbox or reporting-service evidence for that part."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "fix-mx-mail-routing",
  "title": "Investigate and fix MX mail-routing records",
  "metaDesc": "Find your DNS host, compare MX targets and priorities with your mail provider, create or repair records and test inbound delivery and rollback.",
  "date": "2026-10-14",
  "readMin": 18,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "Mail Exchange (MX) records in the Domain Name System (DNS) tell other mail systems where to deliver mail for your domain. A failed scanner connection alone does not prove that routing is broken.",
  "lead": [],
  "sections": [
    {
      "h": "Confirm the receiving service before changing DNS",
      "ps": [
        "Before editing, confirm that you have authority to change the domain and that its intended receiving service is ready for every required address. Save the complete current MX set, compare it with that service's instructions and correct only confirmed differences at the active DNS host. Test incoming mail and inspect receiving logs afterwards. If you cannot establish the active route or a working recovery path, stop at the diagnostic steps."
      ]
    },
    {
      "h": "Decide whether this domain should receive mail",
      "ps": [
        "Start with the domain in the finding. Is it the domain after @ in your employees' addresses, a sending subdomain for newsletters, or a retired registration? Those uses need different decisions. Check your mail-service subscription and domain settings, plus any alias (another address delivering to a mailbox), group (an address distributing mail to members), reply address and returned-mail address that uses the domain.",
        "SMTP, or Simple Mail Transfer Protocol, is the protocol mail servers use to deliver messages. An MX record names an SMTP receiving destination. A filtering gateway accepts incoming mail first, applies its checks and passes accepted messages on to the mailbox platform.",
        "For an active mailbox domain, confirm which service receives mail first. That can be Microsoft 365, Google Workspace, a cPanel server or a filtering gateway that forwards to one of them. A person using Outlook can have any of those arrangements. The expected MX destination comes from the receiving provider's configuration for your domain and product.",
        {
          "text": "A domain deliberately accepting no mail can declare that with a null MX: one MX entry with priority 0 and destination represented by a dot. Keep it unless the domain is being brought into receiving service. The null-MX standard explains the constraints, including how it affects addresses used for sending.",
          "links": [
            {
              "phrase": "null-MX standard",
              "to": "https://datatracker.ietf.org/doc/html/rfc7505",
              "start": 211
            }
          ]
        },
        "For a sending-only or retired domain, check whether replies, bounces (delivery-failure messages) or another service still need to arrive there before declaring it accepts no mail. A missing MX is not itself a no-mail declaration: SMTP can fall back to the domain's address records in some circumstances. Those records supply the server's Internet Protocol (IP) address, its network address. Use the mail provider's supported design for the domain's role. A null-MX domain is unsuitable for an envelope return address that must receive delivery failures. The envelope return address appears in the SMTP MAIL FROM command and can differ from the visible From address. The standard advises against null MX on domains used in either address because their mail can be rejected. Follow the sending provider's bounce and reply-domain design."
      ]
    },
    {
      "h": "Find where the active DNS records are edited",
      "ps": [
        "Your registrar handles registration and renewal. Your authoritative DNS host publishes the domain's records on its nameservers, the servers that answer for the domain. Your email host accepts mail into mailboxes or forwards it through a gateway. These can be separate companies. MX edits belong at the DNS host, while domain acceptance and mailbox readiness belong at the email host.",
        {
          "text": "For a browser-based lookup, use Google Admin Toolbox Dig: enter the domain and choose NS, short for nameserver, to inspect its active servers. Choose MX to read the incoming-mail destinations. These lookups read public DNS; they do not change it.",
          "links": [
            {
              "phrase": "Google Admin Toolbox Dig",
              "to": "https://toolbox.googleapps.com/apps/dig/",
              "start": 32
            }
          ]
        },
        {
          "list": [
            "Look up NS records for the receiving domain using a DNS lookup tool. If dig is installed, open Terminal and run dig NS example.com +short, replacing example.com with the exact domain. Save the returned nameservers.",
            "Sign in to the registrar account shown on the domain renewal receipt or in the business password manager. Open the domain and compare its Nameservers with the public lookup. If they differ, establish the active delegation through registrar support before editing. If it uses an external DNS service, open that service's account to edit records. Changing nameservers would move DNS for the domain and is outside an MX repair.",
            "Select the domain at the confirmed DNS host, open DNS records or Zone Editor, then filter for MX. A zone is the set of records served for a domain. If the receiving subdomain is delegated to its own nameservers, locate that active zone too; the parent editor may not publish its records.",
            "If the registrar's editor says DNS is managed elsewhere or the host is unclear, contact registrar support with the domain and nameserver list and request the active DNS service and account-access route. Recover that account or obtain its DNS-editing role before making changes."
          ],
          "ordered": true
        },
        "You also need access to the receiving service's domain settings and delivery logs. Resolve a missing mail-administration role through that provider's account administrator or recovery process. Viewing a mailbox alone will not let you confirm domain-wide routing.",
        "If a subdomain has no NS answer, check the parent domain's nameservers and records. An ordinary subdomain is often part of that parent zone. A delegated subdomain has its own NS delegation in the parent zone; verify that entry before editing a separate zone."
      ]
    },
    {
      "h": "Save and compare the current MX records",
      "ps": [
        "TTL, or time to live, is how long an answer can remain in a DNS cache. A resolver looks up and caches DNS answers on a computer's behalf. The Name identifies the receiving domain and Destination identifies its mail-server hostname. Save each field, including the priority, before editing.",
        {
          "list": [
            "Copy every MX entry into a local note: full Name, Destination, Priority and TTL. Save a screenshot or export if available, and record the time. Preserve the whole MX set, because several entries can form one provider's normal design.",
            "Query the public result using a DNS lookup tool or dig MX example.com, replacing example.com with the receiving domain. A successful response lists priorities and destination hostnames. Use the exact receiving domain, which is usually the name after @ in the address. Query www.example.com only if addresses actually use that mail domain.",
            "Compare the public answer with the editor. If they disagree, query a listed authoritative server directly, for example dig @ns1.your-dns-host.example MX example.com, replacing ns1.your-dns-host.example with a nameserver from your NS lookup and example.com with the receiving domain. A correct authoritative answer with an old public answer can be caching; a different authoritative answer can mean you edited an inactive zone.",
            "Separate an empty successful response from NXDOMAIN, SERVFAIL or a timeout. NXDOMAIN says the queried name does not exist. SERVFAIL and timeouts mean the lookup failed. A fresh lookup from another resolver or the provider's DNS tool helps establish whether the result is repeatable.",
            "Open the receiving provider's domain setup and compare the exact destination and priority it requires. If a filtering gateway is in front, compare with its inbound setup instead of replacing it with the mailbox platform's direct MX."
          ],
          "ordered": true
        },
        {
          "text": "SMTP's routing standard explains MX selection and the fallback behavior when no MX exists. A receiver with several valid MX entries may accept mail even when a scanner cannot connect to one host. Keep the unavailable SMTP-check investigation separate from a confirmed DNS defect.",
          "links": [
            {
              "phrase": "SMTP's routing standard",
              "to": "https://datatracker.ietf.org/doc/html/rfc5321",
              "start": 0
            }
          ]
        }
      ]
    },
    {
      "h": "Prepare the receiving service before redirecting mail",
      "ps": [
        "An MX change sends new incoming mail to the new destination; it does not create mailboxes or move old messages. Before saving it, sign in to the receiving platform and confirm that the exact domain is added and verified, the mail service is active or ready to activate, and the intended recipient addresses exist.",
        {
          "list": [
            "Check each required mailbox, shared address, alias and group. Include addresses used by invoices, website forms and replies. A domain can be accepted while an individual recipient still does not exist.",
            "For a gateway, verify the downstream route from gateway to mailbox service, domain acceptance and recipient handling. Keep the MX destination pointed at the gateway when that is the intended design.",
            "During a planned migration, keep the previous receiving service working through the transition and confirm how existing messages will be migrated or retained. Write down how you will restore the old MX set if new inbound tests fail.",
            "Choose a time when you can send external tests and inspect delivery logs immediately. If the new platform is not ready for a required address, complete that setup before switching DNS."
          ],
          "ordered": true
        },
        "A previous provider left as a higher-numbered MX can still receive mail when the preferred host is unavailable. Keep it only when it is a supported backup that continues accepting the domain. An abandoned destination can lose or mishandle mail during fallback."
      ]
    },
    {
      "h": "Understand the MX editor fields",
      "ps": [
        "Use the exact record values supplied by the receiving provider. The hypothetical example mail.example.net with priority 10 only illustrates the fields; it is not a destination for your domain. Lower numbers have higher priority. Two entries at the same priority can both be used, so priority is not a way to combine unrelated mailbox platforms.",
        {
          "table": {
            "caption": "MX fields at the authoritative DNS host",
            "headers": [
              "Field",
              "What it means and how to fill it"
            ],
            "rows": [
              [
                "Type",
                "MX, short for Mail Exchange. SPF (Sender Policy Framework) uses a TXT text record to authorize outgoing sending servers; that record cannot hold an MX destination."
              ],
              [
                "Name / Host / Alias",
                "The domain receiving the mail. The root domain, the main name such as example.com, often uses @ or a blank field. For support.example.com in the example.com zone, many hosts accept support; others require a full name. Confirm the full saved name and the provider's format."
              ],
              [
                "Destination / Target / Points to",
                "The provider-supplied mail-server hostname. Use no email address, https:// prefix, URL path or SPF include, which is an authorization term for outgoing senders. Follow the DNS host's instructions for a trailing dot. A fully qualified name is the complete hostname, such as mail.example.net; editors can otherwise append the zone's domain again."
              ],
              [
                "Priority / Preference",
                "The provider-supplied number. Lower numbers are tried first; 10 is preferred to 20. Preserve each priority in a documented multi-record set."
              ],
              [
                "TTL",
                "Time to live, the period DNS answers can remain cached. Preserve the existing value or follow the provider's specified value. Check whether the editor uses seconds, minutes or hours. A TTL change cannot shorten an answer already cached under the previous TTL."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Microsoft 365: retrieve the destination for your custom domain",
      "ps": [
        {
          "list": [
            "Sign in to the Microsoft 365 admin center. If needed, use Show all, then Settings, Domains and the custom domain. Open DNS records, then Manage DNS. Continue to Add DNS records and select Exchange and Exchange Online Protection for the mail setup. In the manual workflow, expand MX Records to see the destination required for this domain.",
            "Copy the displayed target, host, priority and TTL into your change note. Do not construct the target from the domain name or copy Contoso's example. Confirm that the required users and mailboxes exist before redirecting incoming mail to Exchange Online.",
            "If you have a filtering gateway or hybrid Exchange configuration, check its supported inbound route first. Hybrid Exchange combines local Exchange servers and Microsoft 365. Use the direct-to-Microsoft record only when Microsoft is the intended first receiving service.",
            "Use those values at the active DNS host. Read any automatic Domain Connect proposal before approving it. Domain Connect lets the setup service request DNS edits at a participating host, and the proposal can remove old MX entries or change additional records. Use the manual route to inspect and apply the intended MX repair yourself."
          ],
          "ordered": true
        },
        {
          "text": "Microsoft's domain setup instructions explain how to retrieve the domain-specific record and prepare mailboxes. The Start setup screenshot shows the domain setup workflow for an example domain. Retrieve your custom domain's target in the manual steps above before opening the DNS editor.",
          "links": [
            {
              "phrase": "Microsoft's domain setup instructions",
              "to": "https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide",
              "start": 0
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/microsoft-domain-setup.png",
            "alt": "Microsoft 365 documentation example with contoso.com selected and Start setup highlighted.",
            "caption": "Microsoft's documentation shows Start setup for the example domain contoso.com. For your custom domain, use DNS records and Manage DNS to retrieve its MX target. Copy that domain's values into the active DNS host. Source checked October 14, 2026.",
            "width": 582,
            "height": 189
          }
        }
      ]
    },
    {
      "h": "Google Workspace: check the supported record set and Gmail activation",
      "ps": [
        {
          "text": "Google's current MX setup instructions use smtp.google.com with priority 1 for direct Google Workspace delivery. They also support the older aspmx record set, so working legacy values do not need replacement merely because they differ from the new example. Confirm that Google directly receives mail for this domain before applying either arrangement.",
          "links": [
            {
              "phrase": "Google's current MX setup instructions",
              "to": "https://knowledge.workspace.google.com/admin/domains/set-up-mx-records-for-google-workspace",
              "start": 0
            }
          ]
        },
        "At the active DNS host, follow the format for the root or receiving subdomain, destination and TTL. In Google Admin, open Account, Domains, Manage domains, then Activate Gmail for the domain if activation is pending. This needs the Domain settings administrator privilege. Follow the displayed setup flow and confirm the required recipient accounts exist.",
        "If an inbound gateway receives mail before Google, use that gateway's documented MX set and downstream delivery configuration. Do not remove the gateway by applying the direct-delivery example. Google notes that recognition of new MX records can take up to 72 hours; verify the authoritative answer and send delivery tests during that period."
      ]
    },
    {
      "h": "cPanel: edit the MX record at the host that publishes it",
      "ps": [
        "When cPanel controls authoritative DNS, open Domains, Zone Editor and Manage beside the domain. Filter to MX. Use Edit beside an incorrect existing record; when it is absent, choose Add Record and select MX. Enter the receiving provider's Name, TTL, Priority and Destination, then Save Record.",
        "If there is a valid multi-record set, edit only the confirmed incorrect entry and preserve the others. If the set points to a previous service, prepare the complete intended set and the rollback note before removing the obsolete entries. When DNS is external, make the public MX edit at that external host; cPanel's local zone may still need separate review for local routing.",
        {
          "text": "cPanel's Zone Editor instructions cover creating and editing records. The Namecheap image shows an example edit row: its destination is an example host, not a Microsoft or Google account value.",
          "links": [
            {
              "phrase": "cPanel's Zone Editor instructions",
              "to": "https://docs.cpanel.net/cpanel/domains/zone-editor/",
              "start": 0
            }
          ]
        },
        {
          "figure": {
            "src": "/guides/providers/cpanel-mx.png",
            "alt": "cPanel Zone Editor example with Name, TTL, Type MX, Priority, Destination and Save Record visible.",
            "caption": "Namecheap's public cPanel example shows Type MX, Priority, Destination and Save Record. Fill these fields from your receiving provider's instructions. The pictured name, priority 10, TTL 1200 and mail.nctest.info destination are example data. Source checked October 14, 2026.",
            "width": 1096,
            "height": 108
          }
        }
      ]
    },
    {
      "h": "cPanel: check the server's local or remote delivery setting",
      "ps": [
        "cPanel also has an Email Routing setting for mail handled by that server. It can deliver locally even when public MX sends other mail to an external platform. That can explain why a website form reaches the wrong place while ordinary external mail works.",
        {
          "list": [
            "Open Email, Email Routing and select the domain. Save the current option before changing it. Local Mail Exchanger receives mail on this server; Remote Mail Exchanger sends it to the remote destination. Backup Mail Exchanger is for a server deliberately configured to queue backup mail.",
            "Confirm which role this server actually has from the mailbox and hosting configuration. Choose Remote only when this server should send domain mail to the external receiving service; choose Local only when it hosts the receiving mailboxes. Use a backup role only under the host's supported backup design.",
            "If using Automatically Detect Configuration, check the local zone's MX entries first. Detection reads the local zone file, not a live public DNS lookup, and does not automatically rerun after subsequent edits. A public MX change alone can therefore leave local routing wrong.",
            "Apply the supported option with Change, then send a test from the website or application running on this cPanel server to the domain's mailbox. If the host hides the control or the routing role is unclear, send its support team the domain, public MX set, local MX set and current Email Routing option and request confirmation of local versus remote delivery."
          ],
          "ordered": true
        },
        {
          "text": "cPanel's Email Routing documentation explains these roles and how detection uses the local zone. Test this server setting separately from the public MX edit so you can restore each captured value if delivery fails.",
          "links": [
            {
              "phrase": "cPanel's Email Routing documentation",
              "to": "https://docs.cpanel.net/cpanel/email/email-routing/",
              "start": 0
            }
          ]
        }
      ]
    },
    {
      "h": "At another DNS host: create, edit or replace the MX set",
      "ps": [
        {
          "list": [
            "If the MX set is absent and the receiving service is ready, choose Add record, select MX and fill the fields from the provider. Add each required entry in its set. Save and reopen the records to inspect the full name and destination.",
            "If one entry has a typo or wrong priority, edit that row using the provider's current values. Preserve the remaining supported entries. A destination accidentally stored as mail.example.net.example.com needs the DNS host's fully qualified name format.",
            "If the set belongs to a previous provider, prepare the complete new set and follow the receiving provider's cutover instructions, its sequence for switching live mail. Use a batch save when available. Remove obsolete destinations as part of that supported sequence; leaving both sets active can route mail to both services during normal operation or fallback.",
            "If a null MX is present, keep it while confirming the no-mail design. To activate receiving service, replace it with the prepared receiving set. Null MX must be the only MX at that name. If it already appears alongside ordinary MX records, first confirm whether the domain should accept mail, then remove the entries that conflict with that decision.",
            "If the records already match the supported design, keep them. For repeated identical rows, compare the editor with the public set and retain every distinct destination and priority the provider requires. Use its supported cleanup procedure for redundant rows; several different MX records can be a valid set. Move to delivery tests and provider logs to investigate the failure. An unreachable SMTP probe does not justify changing a correct MX set."
          ],
          "ordered": true
        },
        "Avoid changing website address records, SPF, DKIM (DomainKeys Identified Mail) or nameservers while repairing MX unless the provider's actual design requires a separately understood change. MX controls incoming routing; SPF checks outgoing sending authorization and DKIM adds a signature to outgoing messages. Website address records and nameservers affect other services too."
      ]
    },
    {
      "h": "Verify DNS and test representative recipients",
      "ps": [
        {
          "list": [
            "Query the published MX set again at the authoritative nameserver and through public resolvers. Compare every destination and priority with the intended configuration. An authoritative answer that remains wrong needs an editor or zone correction; waiting for cached answers to expire cannot repair it.",
            "For a confirmed hostname error, use the provider's current destination. An ordinary MX target needs usable address records and should not be a CNAME alias. A records supply IPv4 addresses and AAAA records supply IPv6 addresses, the two IP address formats; a CNAME points to another name. Query the actual target with dig A mail.example.net and dig AAAA mail.example.net, replacing mail.example.net in both commands with the provider's destination. A working target needs the address family its service supports; both record types need not be present. Keep the provider hostname instead of replacing it with today's address snapshot.",
            "Send non-sensitive messages from an external mailbox to an employee mailbox, a shared address and any important alias or group. Record the sending time and message ID where available. Check the mailbox, spam folder and receiving platform's delivery log; a sender's Sent folder alone does not prove receipt.",
            "Reply to a received test and confirm the response arrives externally. This also exercises an outgoing path, which can have authentication problems independent of MX. If cPanel runs your forms, test a form-generated message to the same domain separately.",
            "For a missing message or bounce, compare the recipient address and exact error with the receiving service's logs. An unknown-recipient error needs mailbox or alias repair. A domain-not-accepted error needs receiving-domain setup. A timeout at a correctly resolved host needs the mail provider's connection and service investigation."
          ],
          "ordered": true
        },
        {
          "text": "The unavailable SMTP-check guide explains why a scanner's connection failure is inconclusive. Do not weaken a firewall or mail-security setting just to make the probe connect.",
          "links": [
            {
              "phrase": "unavailable SMTP-check guide",
              "to": "/resources/investigate-smtp-check/",
              "start": 4
            }
          ]
        },
        "Old DNS answers can remain cached under the previous TTL. This transition is often called propagation: different resolvers can return different versions until their caches expire. Keep both receiving platforms ready during an intentional migration until you have confirmed the transition. If delivery is failing now, inspect provider logs and follow its recovery procedure while checking DNS; a quoted propagation window does not explain a failed test on its own."
      ]
    },
    {
      "h": "Restore the previous route if the change breaks incoming mail",
      "ps": [
        "If new delivery fails after your MX change, return to the same DNS editor and restore the saved MX set, including every original priority and TTL, when the previous receiving service still accepts the domain. Remove new destinations that conflict with that restored set. If the original MX set was missing or invalid, restoring it would restore that defect too: correct the confirmed error in the new set or follow the receiving provider's recovery procedure. If you also changed cPanel Email Routing, restore its captured option when it belongs to the earlier working route.",
        "Verify the authoritative and public answers, then repeat external delivery and local-form tests. DNS caches can delay the effect. Restoring MX cannot recover mail already rejected or deliver messages to a disabled previous account, so inspect both providers' logs and establish what happened to the affected tests.",
        "Keep the previous and repaired MX sets, recipient tests, timestamps, logs and unresolved addresses with your mail configuration. Before the next mail-provider switch, check mailbox readiness and gateway routing again. Helm's public scan checks limited public configuration; it does not inspect mailbox readiness, complete delivery logs or internal systems. Any help from Helm needs an agreed scope."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "investigate-smtp-check",
  "title": "Investigate an unavailable SMTP check",
  "metaDesc": "Investigate an unavailable SMTP probe with controlled message tests and delivery logs. Separate scanner connection limits from actual delivery problems.",
  "date": "2026-10-14",
  "readMin": 11,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "If an SMTP check is unavailable, treat that result as inconclusive. First confirm the domain’s intended mail route, send a controlled external test message and compare the result with the receiving provider’s logs. Change a setting only when that evidence identifies the problem and the provider’s instructions explain the fix.",
  "lead": [
    "SMTP is the protocol mail servers use to transfer messages. A scanner can fail to connect because of its network, timing or the server’s treatment of probes, even while normal mail arrives."
  ],
  "sections": [
    {
      "h": "Understand the connection the scan attempted",
      "ps": [
        "Mail servers normally receive mail from other servers over port 25. A port is a numbered network entry point for a service. Your mail application may instead submit outgoing mail over a different port. Being able to sign in to Outlook or Gmail, or send from your phone, does not establish that outside servers can reach the domain’s receiving service.",
        "The SMTP probe described by this finding is informational and checks one MX host. MX means mail exchanger, the DNS record that identifies a domain’s receiving mail server. One host and one connection attempt cannot establish the behavior of every destination, backup server or sender. Record the scanned domain, test time, probed hostname and exact error if the result includes them. If the result omits a hostname, keep that limitation with the finding.",
        {
          "text": "STARTTLS is the SMTP command used to begin an encrypted TLS connection after connecting to the server. The SMTP TLS standard separates that exchange from message delivery. A timeout before connecting does not reveal whether STARTTLS is offered, whether a certificate is valid, or whether a previous message used encryption.",
          "links": [
            {
              "phrase": "SMTP TLS standard",
              "to": "https://datatracker.ietf.org/doc/html/rfc3207",
              "start": 107
            }
          ]
        }
      ]
    },
    {
      "h": "Find the intended receiving route before editing records",
      "ps": [
        "Start with a mailbox address your business currently uses. The domain after @ is the domain to check. A retired brand domain, an active mailbox domain and a domain used only for sending notices may have different receiving arrangements. Check your email-service subscription and the domain list in its account to establish whether this domain is meant to receive mail.",
        "The registrar renews your domain; the DNS host publishes its records; the email host receives and stores mail. Use the Nameservers setting in your registrar account to locate the DNS provider, then open its DNS records or Zone Editor page for this domain. If you cannot locate the login, check the renewal receipt and business password manager, then use that provider’s account-recovery process. Recover access without changing the nameservers.",
        "Read the MX rows and save each priority and destination. Lower priority numbers normally receive the first attempt. Compare the published destinations with your mail-service or filtering-gateway account. A gateway in front of Microsoft 365 or Google Workspace is part of the receiving route and may have the only public MX hostname. Outlook’s name does not identify that route.",
        "On a computer with dig installed, run this read-only command in Terminal after substituting your domain. By default, dig queries your computer’s configured DNS server. Compare its answer with the published records; a cached answer can lag behind a recent DNS change.",
        {
          "code": "dig +short MX example.com",
          "caption": "Read the receiving destinations for your domain; example.com is a teaching example.",
          "language": "bash"
        },
        {
          "text": "If the short MX lookup is empty, repeat it without +short: dig MX example.com, replacing example.com with your domain. Read status in the header. SERVFAIL or a timeout means the DNS lookup failed. A successful response with no MX answer needs investigation because SMTP defines fallback behavior. A deliberate null MX, displayed as priority 0 with a dot as the destination, declares that the domain does not receive mail. Use the MX mail-routing guide to restore an active domain’s provider-specific records after confirming that its receiving service and mailboxes are ready.",
          "links": [
            {
              "phrase": "MX mail-routing guide",
              "to": "/resources/fix-mx-mail-routing/",
              "start": 430
            }
          ]
        },
        "If the published route is correct, leave it in place while you test delivery. Changing MX to a familiar-looking Google or Microsoft value could bypass a gateway or direct mail to a service that does not accept your domain."
      ]
    },
    {
      "h": "Send a controlled external message and collect its result",
      "ps": [
        {
          "list": [
            "Choose an external account and a receiving mailbox that you control or have permission to test. Use a short plain-text message without client data or attachments, and a unique subject such as Mail delivery test 2026-10-14 10:30 UTC. Record the real date and time, sender and recipient.",
            "Open the receiving mailbox and check Inbox, spam or junk and quarantine. Record whether the message arrived and its arrival time. If the sender sees a delay notice or a bounce, retain the full diagnostic details. A bounce is a report that delivery failed; a delayed message may still be in a queue for retry.",
            "Test a second representative receiving mailbox if your business has separate routes, and use another external sending service when you have an account available. This helps distinguish one sender’s problem from a wider receiving issue. Do not repeatedly send the same test or use an address you cannot check.",
            "Match each test with the provider’s message trace or delivery log. If the message arrived, the test demonstrates that this sender reached this mailbox at this time. Record the scanner result and message test separately, with the destination and time each one covered."
          ],
          "ordered": true
        },
        "A server can accept an SMTP connection but reject a recipient address. It can also accept a message and then route it to quarantine. These are different stages from failing to connect. The exact error and log events help you find the stage that needs attention."
      ]
    },
    {
      "h": "Check Microsoft 365 or cPanel delivery logs",
      "ps": [
        {
          "text": "For Microsoft 365 receiving mail, open admin.exchange.microsoft.com with an account allowed to run message trace. Go to Mail flow > Message trace and start a trace. Filter for the external sender, your receiving address and the test’s time range, using the time zone displayed by the tool. Microsoft’s message-trace instructions explain the filters and results. Open the matching result and inspect whether Exchange received, rejected, deferred or delivered it, along with event details.",
          "links": [
            {
              "phrase": "Microsoft’s message-trace instructions",
              "to": "https://learn.microsoft.com/en-us/exchange/monitoring/trace-an-email-message/message-trace-modern-eac",
              "start": 290
            }
          ]
        },
        "If the trace has no matching event, widen the time range, verify the sender and recipient spelling, and consider any gateway before Exchange Online. No event in Exchange does not identify where the connection failed before reaching it. Use the gateway’s log for that part. If you cannot open Message trace, request the required message-trace permissions or a trace export through your Microsoft 365 account-support process, giving the exact test addresses and time range.",
        {
          "text": "For mail received by a cPanel server, open Email > Track Delivery. Enter your test recipient in Recipient Email and select Run Report. Inspect the matching row’s time, result and available details. Show Blocked & Failed helps find rejected attempts; Show All restores the broader view. cPanel’s Track Delivery instructions explain the report and trace. This view concerns the server’s local delivery activity, so it is unsuitable for a cPanel website whose mail goes directly to another provider.",
          "links": [
            {
              "phrase": "cPanel’s Track Delivery instructions",
              "to": "https://docs.cpanel.net/cpanel/email/track-delivery/",
              "start": 286
            }
          ]
        },
        "If the relevant cPanel event is absent or the screen is unavailable, open a hosting support ticket containing the test time with time zone, recipient, sender, MX destination and bounce details. Request the receiving SMTP and TLS log events for that connection. The hosting company can inspect server logs that are outside your cPanel account’s access."
      ]
    },
    {
      "h": "Check Google Workspace logs and delivered-message headers",
      "ps": [
        {
          "text": "In Google Workspace, sign in to admin.google.com with the Gmail Settings administrator privilege and go to Reporting > Email Log Search. Open Custom Search, select the test’s date range, enter the complete sender and recipient addresses, and select Search. Use the Message ID when available. Google’s Email Log Search instructions explain the fields and limits; delivery-status searches work for messages within the past 30 days. Large searches may take up to an hour to return results.",
          "links": [
            {
              "phrase": "Google’s Email Log Search instructions",
              "to": "https://knowledge.workspace.google.com/admin/support/troubleshooting/find-messages-with-email-log-search",
              "start": 292
            }
          ]
        },
        {
          "text": "Open the matching result to inspect its delivery status and events, then save the relevant details with your test record. If there is no result, recheck the date range and addresses, or search by Message-ID from the sending copy. Google’s missing-message guidance explains how to use the result; also inspect any gateway before Google, because its rejected connection will not appear as a delivered Google message.",
          "links": [
            {
              "phrase": "Google’s missing-message guidance",
              "to": "https://knowledge.workspace.google.com/admin/support/troubleshooting/not-receiving-email-from-one-sender",
              "start": 230
            }
          ]
        },
        {
          "text": "For a message delivered to Gmail, open it on a computer, select More beside Reply and choose Show original. Google’s header instructions explain how to copy the full header. Save the Message-ID and the Received headers with your test record. Those headers describe the hops recorded for that message and can help support locate it. Authentication results such as SPF and DKIM concern the sender; they are different from the transport encryption question.",
          "links": [
            {
              "phrase": "Google’s header instructions",
              "to": "https://support.google.com/mail/answer/29436?hl=en",
              "start": 108
            }
          ]
        },
        "If Email Log Search is unavailable, check that you are using a Workspace administrator account with the required privilege. Request that access or a log export through your organization’s Google Workspace administration process. For an unresolved result, use the support route in your Admin console with the test addresses, Message-ID if available, time range, bounce details and any gateway logs. A message that never arrived has no receiving header to inspect.",
        "A Received header that records TLS can support a conclusion about that hop of that delivered message. A log or header from one message cannot establish that all incoming traffic is encrypted. For broader evidence, examine the provider’s receiving-service configuration and transport reports."
      ]
    },
    {
      "h": "Match the observed failure to the next useful check",
      "ps": [
        "Use the stage recorded in the result or log. A public status page can help identify an ongoing provider incident, but compare its affected service and time with your own test. Treat each possible cause below as something to verify.",
        {
          "table": {
            "caption": "SMTP findings and follow-up checks",
            "headers": [
              "Observed result",
              "What to check next"
            ],
            "rows": [
              [
                "DNS timeout, SERVFAIL or an unresolved destination",
                "Check authoritative DNS and the MX hostname’s address records through the DNS provider. An unresolved name prevents a connection attempt."
              ],
              [
                "Connection timeout or refusal",
                "Compare tests from the receiving provider and a network permitted to use port 25. The scanner’s outbound network or the receiving service may block the attempt."
              ],
              [
                "SMTP greeting or probe rejected",
                "Read the exact server response and its log. Anti-abuse controls, rate limits or a temporary refusal can treat probes differently from ordinary mail."
              ],
              [
                "STARTTLS absent or TLS negotiation fails",
                "Check the actual receiving service’s TLS configuration and supported protocols with its provider. A successful web HTTPS test uses a different service."
              ],
              [
                "Certificate validation failure",
                "Check expiry, the receiving MX hostname and the trusted certificate chain on that mail service. A certificate for only the website is insufficient."
              ],
              [
                "Message accepted but absent from the inbox",
                "Follow the delivery, filtering, forwarding and quarantine events. This can be a mailbox or routing issue after the connection succeeded."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Apply a confirmed fix and verify its scope",
      "ps": [
        "If the evidence identifies incorrect MX records, follow the linked routing guide using the values supplied for your domain. Save the original values and TTLs before editing. If it identifies a certificate or SMTP listener problem on a shared hosted service, submit that exact finding through its support portal; the provider controls that server. Include the hostname and failed validation so it can repair the correct endpoint.",
        "On a server you operate yourself, save the affected mail-service and certificate configuration, then follow that mail-server product’s supported repair procedure. Certificate installation and service reload commands differ by product. Confirm the certificate covers the receiving MX hostname and that the service presents it after the reload. Keep the last working configuration available if the change stops legitimate delivery.",
        "After a repair, repeat the failed external message test and inspect the corresponding logs. Recheck the SMTP probe, keeping its time and scope. DNS changes can be delayed by old cached answers, so compare authoritative publication with what the sender used. If the configuration change disrupts delivery, restore the saved working configuration through the same provider process and repeat the tests.",
        {
          "text": "For transport-policy or reporting problems, use the mail-transport guide after verifying the SMTP service itself. Opening port 25 broadly, removing rate limits or weakening TLS solely to make the scanner connect can remove useful protections without fixing a delivery issue. If real mail and provider checks succeed but the probe remains unavailable, retain that outcome as an inconclusive probe with its known limitations.",
          "links": [
            {
              "phrase": "mail-transport guide",
              "to": "/resources/set-up-mta-sts/",
              "start": 52
            }
          ]
        }
      ]
    },
    {
      "h": "Keep a useful investigation record",
      "ps": [
        "Save the domain’s intended receiving use, published MX destinations, scan time and target, external test addresses and times, matching log events, and any confirmed repair. State what the evidence established: for example, that a particular sender delivered to a mailbox while the public probe timed out. If a route remains untested, record which one and the provider ticket needed to examine it.",
        "Helm’s public scan does not access your mailbox or internal logs. It also does not authorize or carry out a receiving-service change. The investigation can end with evidence that the service works and the probe was limited; a configuration change is needed only when a fault has been established."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
},
  {
  "slug": "fix-website-https",
  "title": "Investigate and fix website HTTPS or certificate errors",
  "metaDesc": "Identify the hostname and cause of an HTTPS error, repair the confirmed problem through authorized access, and test the public connection again.",
  "date": "2026-10-14",
  "readMin": 14,
  "lane": "All industries",
  "laneTo": "/",
  "intro": "To fix an HTTPS error, identify the exact hostname and error, then check where DNS sends visitors. Establish whether the failure comes from the certificate, the connection or another part of the site before changing the configuration. If the certificate needs renewal or replacement, apply that fix on the service handling the affected connection; your website host and a proxy or CDN can serve different certificates. Test each public hostname, including www and redirecting addresses, after the repair.",
  "lead": [],
  "sections": [
    {
      "h": "Record the error and the address visitors use",
      "ps": [
        "HTTPS is HTTP, the web protocol, carried over an encrypted TLS connection. A certificate helps the browser verify that it has connected to the intended hostname. Hosting dashboards often call this SSL, an older name still used for the certificate controls. A public certificate needs valid dates, coverage for the hostname and a chain the browser trusts.",
        {
          "text": "TLS protects a connection and authenticates its endpoint. A valid certificate does not establish that your application is free of vulnerabilities. MDN’s TLS explanation describes that boundary. The scan’s failed connection may also reflect its network route or a temporary outage, so reproduce the observed error before choosing a repair.",
          "links": [
            {
              "phrase": "MDN’s TLS explanation",
              "to": "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security",
              "start": 147
            }
          ]
        },
        {
          "list": [
            "Copy the affected public URL, scan time and exact error. Use an address without private query values, session tokens or customer data in your investigation notes. Identify whether it is example.com, www.example.com or another hostname; those names can resolve to different services.",
            "Open the HTTPS address in a current browser. Record its exact error code or certificate warning, without continuing through the warning to sign in or submit a form. Check your device’s date and time because an incorrect clock can make a valid certificate appear expired or not yet valid.",
            "Test the same public address from another ordinary network, such as mobile data, and on another current device if available. If only one network fails, investigate its proxy, filtering or TLS inspection. Keep the server settings in place until you know the fault is at the server.",
            "Test the main domain, www and any important redirecting host separately. The browser must establish HTTPS before it can read a redirect, so a www address that redirects still needs certificate coverage. Record which address works and which fails."
          ],
          "ordered": true
        }
      ]
    },
    {
      "h": "Find DNS, the website host and any CDN",
      "ps": [
        "The registrar is where the domain is registered and renewed. The DNS host publishes the records that send visitors to the site. The website host stores and serves the site. A content delivery network, or CDN, can sit in front of the host and accept the browser’s connection before contacting the origin server. The origin is the server behind the CDN. These roles can belong to different companies.",
        {
          "list": [
            "Open the registrar account used for domain renewal, select the domain and read Nameservers. Find the account for that DNS provider and open this domain’s DNS records. If access is missing, use the renewal receipt, business password manager and provider’s account-recovery process to locate it. Keep the nameservers unchanged during this work; replacing them can disrupt unrelated email and website records.",
            "Read the website’s A, AAAA and CNAME records for the root domain and www. An A record maps a name to an IPv4 address; AAAA maps it to IPv6; CNAME points to another hostname. Save the names, values and TTLs. Compare them with the domain-connection instructions in your website host’s account. MX records concern email and do not select the website host.",
            "Check the website account under Domains, Custom domains, SSL/TLS or Certificates. Confirm that it contains the exact public hostname. If you use Cloudflare, read the DNS record’s proxy status and inspect its SSL/TLS settings. A proxied hostname sends the browser to Cloudflare’s edge; a DNS-only hostname connects to its listed destination directly.",
            "Save the existing certificate details, HTTPS settings and redirect rules, including any CDN rules and application-level redirects. Use the host’s backup or export feature for the site configuration. Certificate private keys belong in protected storage; record where the protected backup is kept rather than pasting keys into support tickets or general notes."
          ],
          "ordered": true
        },
        "If a website record is missing, first confirm the exact values the host supplies for that custom domain and that the site is connected there. Create only the missing row in the authoritative zone, then verify the resulting full name. If an existing row points elsewhere, identify the active site before replacing it. The IP address in a tutorial or screenshot is not a safe replacement.",
        "A wrong or stale AAAA record can affect IPv6 visitors while IPv4 tests work. Compare both address types with your host’s configuration and correct a confirmed mismatch. Do not remove IPv6 merely because a single test failed."
      ]
    },
    {
      "h": "Check the certificate served to visitors",
      "ps": [
        "Use your browser’s site-information or certificate viewer when it is available, and compare the presented certificate with the hostname you opened. The viewer’s label varies by browser. Your host’s certificate details page can also show the certificate it expects to serve. A dashboard saying Active is useful, but the public connection must present the intended certificate.",
        "The certificate’s Subject Alternative Names, often abbreviated SANs, list the names it covers. A wildcard such as *.example.com covers a single subdomain level such as www.example.com; it does not cover example.com itself or a deeper name such as portal.team.example.com. Check every address in your earlier tests, including addresses that redirect.",
        "A certificate chain contains the site certificate and intermediate certificates that connect it to a trusted issuing authority. A certificate authority, or CA, issues certificates. If an intermediate is missing, some clients may show a trust error even though the site certificate has not expired. Use the chain supplied by your issuer or hosting service for that certificate.",
        {
          "table": {
            "caption": "Certificate and connection findings",
            "headers": [
              "What you see",
              "Likely area to verify",
              "Repair to pursue after confirmation"
            ],
            "rows": [
              [
                "Expired or not-yet-valid certificate",
                "Device clock and the dates on the certificate actually served.",
                "Renew or reissue an expired certificate and install it on the affected endpoint; correct a local clock error locally."
              ],
              [
                "Hostname mismatch",
                "SAN coverage, DNS destination and the host’s custom-domain mapping.",
                "Issue a certificate for the intended hostname or repair a wrong domain mapping or DNS destination."
              ],
              [
                "Untrusted issuer or incomplete chain",
                "Certificate issuer and intermediate chain on the serving endpoint.",
                "Install the provider’s complete chain or a certificate trusted by the intended clients."
              ],
              [
                "Timeout, refusal or TLS handshake failure",
                "DNS, hosting status, port 443 and the proxy-to-origin connection.",
                "Repair the confirmed network or service problem; a new certificate may not address it."
              ],
              [
                "Page opens, but resources are blocked or insecure",
                "Browser Console and Network entries for HTTP resources.",
                "Fix the mixed-content URLs or third-party resource configuration."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Renew a managed certificate or create missing coverage",
      "ps": [
        "On a managed website platform, open the domain’s SSL/TLS or certificate page. If the certificate is managed automatically, check whether the exact hostname is connected and verified, and inspect any Pending, Failed or Expired status. Use the platform’s Retry, Renew or Reissue action when offered after correcting the displayed validation problem. The platform must finish issuance and serve the new certificate before you can verify the repair.",
        "If the hostname or certificate entry is absent, add the custom hostname through that platform’s domain setup. Complete its exact verification records, then enable its managed HTTPS feature. Adding a record with DNS Type HTTPS does not itself issue or install a certificate; certificate management happens on the host or CDN.",
        {
          "text": "Issuers verify domain control before issuing a certificate. Let’s Encrypt’s challenge documentation describes HTTP validation using a token under /.well-known/acme-challenge/ and DNS validation using a temporary TXT value under _acme-challenge. Use only the token and record supplied for your request. For a DNS challenge, edit the authoritative DNS account; a TXT value in an unused zone cannot validate control.",
          "links": [
            {
              "phrase": "Let’s Encrypt’s challenge documentation",
              "to": "https://letsencrypt.org/docs/challenge-types/",
              "start": 60
            }
          ]
        },
        {
          "text": "If validation fails, check the exact hostname, DNS answer and challenge location. A login requirement, redirect rule, wrong document root or proxy can prevent an HTTP challenge from being reached. If a Certification Authority Authorization (CAA) record blocks issuance, obtain the host’s required issuer names and review the existing CAA policy before changing it. CAA restricts which authorities may issue certificates; deleting all CAA records discards that restriction.",
          "links": [
            {
              "phrase": "Certification Authority Authorization (CAA)",
              "to": "https://www.rfc-editor.org/rfc/rfc8659.html",
              "start": 202
            }
          ]
        },
        "For a paid or manually managed certificate, use the issuer’s renewal process and the host’s supported installation procedure. A CSR is a certificate signing request created with a private key; the issued certificate must match that key. Renewal does not install the new certificate on its own. Keep the current valid certificate until the replacement is installed and tested."
      ]
    },
    {
      "h": "cPanel: inspect status and install the correct certificate",
      "ps": [
        {
          "text": "Open Security > SSL/TLS Status and search for the affected domain. cPanel’s status instructions explain the certificate information and AutoSSL errors. Open View Certificate when available to inspect coverage and expiry. Newer hosting interfaces can combine certificate controls under SSL/TLS Certificates. If you cannot find the domain, check that it belongs to this cPanel account and the correct document root.",
          "links": [
            {
              "phrase": "cPanel’s status instructions",
              "to": "https://docs.cpanel.net/cpanel/security/ssl-tls-status/",
              "start": 67
            }
          ]
        },
        "For an AutoSSL certificate, read the most recent error and run time. AutoSSL is cPanel’s certificate automation. Correct the stated validation problem, then use the account’s AutoSSL retry action if your host exposes one. If it does not, open a hosting support ticket requesting an AutoSSL check for your specific account and affected hostname. Include the displayed error and the public DNS result. The host can run and inspect the check in WHM, its server-management interface; you do not need to alter server-wide certificate settings.",
        {
          "text": "For manual installation, open Security > SSL/TLS > Manage SSL sites. Select Update Certificate for the existing site, or use Install an SSL Website for a site without a certificate. Select the exact Domain. Browse Certificates or enter the issued certificate, then check the populated key and chain fields before selecting Install Certificate. cPanel’s SSL/TLS instructions cover certificate selection and installation. Updating a certificate for another site on the same account will not fix this hostname.",
          "links": [
            {
              "phrase": "cPanel’s SSL/TLS instructions",
              "to": "https://docs.cpanel.net/cpanel/security/ssl-tls/",
              "start": 344
            }
          ]
        },
        {
          "table": {
            "caption": "Manual certificate installation fields",
            "headers": [
              "Field",
              "What belongs there"
            ],
            "rows": [
              [
                "Domain",
                "The website hostname or site receiving the certificate. Confirm its document root and domain mapping."
              ],
              [
                "Certificate (CRT)",
                "The site certificate issued for your requested names, including its BEGIN and END CERTIFICATE lines when pasted."
              ],
              [
                "Private Key (KEY)",
                "The protected key matching that certificate. An unrelated key will not work. Never include this secret in a public diagnostic or ordinary email."
              ],
              [
                "Certificate Authority Bundle (CABUNDLE)",
                "The issuer’s intermediate chain for this certificate. Use the bundle provided by the CA or host, rather than a chain copied from another site."
              ]
            ]
          }
        }
      ]
    },
    {
      "h": "Cloudflare: check the edge and origin separately",
      "ps": [
        "For a proxied Cloudflare hostname, first inspect SSL/TLS > Edge Certificates for an active certificate covering the public name. This protects the browser-to-Cloudflare connection. Next inspect the certificate and HTTPS service at the origin host, which protect Cloudflare’s connection to your server. Renewing one certificate does not automatically repair the other.",
        {
          "text": "Cloudflare’s Full (strict) instructions require the origin to accept HTTPS on port 443 and present an unexpired certificate that covers the requested or target hostname and is issued by a publicly trusted CA or Cloudflare Origin CA. Check those prerequisites before choosing Full (strict) in SSL/TLS > Overview. If it is already enabled and the origin certificate fails validation, repair that origin certificate.",
          "links": [
            {
              "phrase": "Cloudflare’s Full (strict) instructions",
              "to": "https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/",
              "start": 0
            }
          ]
        },
        {
          "text": "Cloudflare error 526 concerns an invalid origin certificate. Compare the hostname, expiry and chain at the origin with the provider’s error guidance. An Origin CA certificate is intended for the Cloudflare-to-origin connection and is not generally trusted by browsers connecting directly. Pausing the proxy or changing a record to DNS-only can therefore create visitor warnings unless the origin has a publicly trusted certificate.",
          "links": [
            {
              "phrase": "Cloudflare error 526",
              "to": "https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-5xx-errors/error-526/",
              "start": 0
            }
          ]
        },
        "If the edge certificate is pending or lacks the hostname, complete Cloudflare’s validation and coverage requirements for that hostname. Follow the certificate product’s supported issuance process. Broadly changing encryption mode or turning off certificate validation can hide the underlying failure while reducing protection. Preserve the working connection design and fix the endpoint that failed."
      ]
    },
    {
      "h": "Check redirects and mixed content after HTTPS works",
      "ps": [
        "Once the public HTTPS connection succeeds, choose the canonical address visitors should end up on, such as https://www.your-domain or https://your-domain. Verify that the other supported addresses redirect there without returning to an earlier address. A loop can occur when the application and CDN disagree about the connection’s scheme or each applies a conflicting redirect.",
        "Save the current rules before changing them. Use your host’s HTTPS redirect feature or the documented CDN and application arrangement for that site. Test a representative page path as well as the homepage so redirects keep visitors on the intended page. Avoid introducing HSTS during certificate repair: it is an additional browser policy, with separate consequences.",
        {
          "text": "Mixed content occurs when an HTTPS page loads a resource using HTTP. Browsers upgrade or block different resource types, which can leave images, scripts or forms broken. MDN’s mixed-content documentation explains those behaviors. In your browser’s developer tools, open Console and Network, reload the page and inspect the affected resource URL. Replace hard-coded HTTP links with the resource’s supported HTTPS URL in the site configuration, theme or content. If a third-party resource lacks HTTPS, replace that dependency or remove it through the site’s normal change process.",
          "links": [
            {
              "phrase": "MDN’s mixed-content documentation",
              "to": "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Mixed_content",
              "start": 170
            }
          ]
        },
        "Test important pages and interactive features, including navigation and a non-sensitive form test using your own address. A valid homepage certificate cannot establish that a contact form or script still works after a redirect or resource change."
      ]
    },
    {
      "h": "Verify the repair from outside the hosting environment",
      "ps": [
        "Repeat the initial browser checks from an external network and inspect the certificate now served to visitors. Test https://your-domain and https://www.your-domain directly, followed by the supported HTTP entry addresses and representative page paths. Certificate errors on an HTTPS redirecting host need repair even when the final hostname works.",
        "For an optional command-line check, run these commands separately with your real public hostname substituted. The first follows up to five HTTPS redirects, fetches a page and prints the response headers. It rejects a redirect down to HTTP. The second shows the HTTP entry response without following it. These curl options retain certificate verification and stop after 20 seconds. Use curl where it is available, or curl.exe in Windows PowerShell.",
        {
          "code": "curl --max-time 20 --max-redirs 5 --location --proto '=https' --proto-redir '=https' --silent --show-error --dump-header - --output /dev/null https://example.com/\ncurl --max-time 20 --silent --show-error --dump-header - --output /dev/null http://example.com/",
          "caption": "Read-only checks on macOS or Linux. For Windows, replace curl with curl.exe and each /dev/null with NUL. Replace example.com with your public hostname.",
          "language": "bash"
        },
        "Read each status and Location header to follow the redirect path. A 200 response means a page was fetched; a redirect response points to its Location address. The HTTP entry should redirect to your intended HTTPS address, and the final HTTPS page should succeed. Investigate a certificate error, an HTTP downgrade or a redirect-limit error. Keep certificate verification enabled: adding -k or --insecure would hide the certificate problem you are checking. Command-line requests do not run the page’s JavaScript, so keep the browser feature and mixed-content tests as well.",
        "If you changed DNS, compare the authoritative answer with answers from the networks you tested. TTL is the time a resolver may cache a DNS response. Older answers can send some visitors to the previous server until their cache expires. Decreasing TTL after the change does not clear existing caches. If only some visitors still see an old certificate, check their resolved address and both IPv4 and IPv6 routes before reinstalling the same certificate."
      ]
    },
    {
      "h": "Recover a failed change and keep renewal working",
      "ps": [
        "If a change interrupts access, restore the last working domain mapping, redirect rule or hosting configuration you saved. For a certificate installation, restore the previous certificate and matching key only if they remain valid for the hostname and trusted by its clients. An expired certificate is unsuitable as a recovery target; use a correctly issued replacement or the host’s supported recovery process.",
        {
          "text": "If the site already publishes HSTS, browsers can continue requiring HTTPS according to the policy they stored. MDN’s HSTS documentation explains that behavior. A fallback to HTTP or removal of a redirect will not make those browsers accept an invalid HTTPS connection. Keep recovery focused on restoring valid HTTPS.",
          "links": [
            {
              "phrase": "MDN’s HSTS documentation",
              "to": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security",
              "start": 111
            }
          ]
        },
        "After recovery, repeat the same public tests and record which addresses and pages work. For a managed certificate, verify automatic renewal and its notifications in the host or CDN account. For a manual certificate, record the expiry and the responsible account’s renewal process. Keep the domain-validation method working so the next renewal does not fail for the same reason.",
        "Helm’s public scan checks a limited public connection. It does not establish application security or include certificate management as a service. Keep administrative work within your authorized access and existing service agreements. Any further Helm assistance needs a defined scope."
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "organizationByline": true,
  "consultation": {
    "title": "Review this finding with Helm.",
    "sub": "Bring the scan finding and the affected service to the discussion. We can agree on a scope for Helm’s help. Configuration changes are outside this consultation unless separately agreed; your existing IT responsibilities stay in place.",
    "label": "Discuss a configuration finding",
    "to": "/contact/"
  },
  "updated": "2026-10-24"
}
];
