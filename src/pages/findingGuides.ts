import type {Article} from './articles';
export const findingGuides: Article[] = [
  {
    "slug": "fix-dmarc-monitoring-policy",
    "title": "Move a monitoring-only DMARC policy toward enforcement",
    "metaDesc": "Plan a DMARC enforcement change around legitimate senders, external message tests and a documented recovery procedure.",
    "date": "2026-10-14",
    "readMin": 3,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "Before tightening a DMARC policy set to p=none, check that the services you rely on pass authentication. Your mail administrator can help test them, and whoever manages your DNS will need to make the policy change. Using Outlook alone doesn’t tell you who hosts your mail or DNS.",
    "lead": [],
    "sections": [
      {
        "h": "Check your senders before enforcing DMARC",
        "ps": [
          {
            "list": [
              "Save the current DMARC record and its TTL, which tells DNS resolvers how long they may cache it. Check that your administrator can restore it, and arrange for someone to watch mail delivery during the change.",
              "Review the services that send mail for your business, including billing tools, website forms, appointment reminders, forwarding and occasional notices. For each service, note the visible From domain and the person responsible for it.",
              "Send an approved test from each service to an external recipient. Check the receiver’s authentication results for a passing SPF or DKIM result that aligns with the visible From domain. Fix failures affecting legitimate mail before moving to enforcement.",
              "Plan the change for a time when your mail and DNS administrators can help. Agree on the new policy and when to stop, such as if an approved invoicing route fails. Use your mail provider’s current deployment instructions for your sending setup. Another organization’s record may not fit your senders.",
              "After the approved change, check the published DNS record, repeat the message tests and review delivery reports. If legitimate mail starts failing, ask the authorized administrator to restore the saved configuration and investigate. Cached DNS can delay recovery."
            ],
            "ordered": true
          },
          {
            "text": "Microsoft’s deployment guidance covers its mail environment. Google Workspace’s guidance explains how to configure DMARC at your DNS host. If you use cPanel or another hosted service, check who sends your mail and who hosts authoritative DNS before choosing the instructions. Base your policy on the sender tests; tightening it just to improve a scan score can disrupt business mail.",
            "links": [
              {
                "phrase": "Microsoft’s deployment guidance",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure"
              },
              {
                "phrase": "Google Workspace’s guidance",
                "to": "https://knowledge.workspace.google.com/admin/security/set-up-dmarc"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/official-dmarc-annotated.png",
          "alt": "Google Workspace documentation explains that DMARC records are configured at the domain host, with a Helm annotation identifying the DNS owner.",
          "caption": "Annotated excerpt of Google Workspace public documentation, captured October 14, 2026. Documentation example, not an account screenshot. Source: Google Workspace DMARC setup documentation. CC BY 4.0; Helm annotation added.",
          "width": 774,
          "height": 960
        }
      },
      {
        "h": "Microsoft 365: verify mail authentication first",
        "ps": [
          "Ask your mail administrator to review DKIM in Defender → Email & collaboration → Policies & rules → Threat policies → Email authentication settings → DKIM. Send a test message to an external recipient and check its signing domain and DMARC alignment. Once you’ve completed the sender review and prepared the recovery plan, whoever manages your DNS can update the custom domain’s DMARC TXT policy.",
          {
            "text": "Microsoft’s DKIM setup instructions cover the steps for your account. The Microsoft 365 DKIM example shows the CNAME fields and signing switch.",
            "links": [
              {
                "phrase": "Microsoft’s DKIM setup instructions",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dkim-configure"
              },
              {
                "phrase": "Microsoft 365 DKIM example",
                "to": "/guides/providers/microsoft-dkim-cnames.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/microsoft-dkim-cnames.png",
          "alt": "Microsoft’s DKIM example shows two CNAME values, Copy and a disabled signing toggle for contoso.com.",
          "caption": "Read Publish CNAMEs and Copy; enable signing after Microsoft detects your records. The Contoso values are an example. Retrieve your tenant’s current CNAME targets. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 456,
          "height": 612
        }
      },
      {
        "h": "cPanel: review the existing DMARC record",
        "ps": [
          "If cPanel hosts authoritative DNS, open Domains → Zone Editor → Manage for your domain and find the existing _dmarc TXT record. Review its policy and reporting tags together. Use the sender tests above to decide whether to move beyond a suggested p=none policy, then make the approved change through the interface your host supports. Your host controls which features are available.",
          {
            "text": "Follow the cPanel Zone Editor instructions for your host. The cPanel Zone Editor example shows Add Record above the DNS table; use the existing DMARC record for this change.",
            "links": [
              {
                "phrase": "cPanel Zone Editor instructions",
                "to": "https://docs.cpanel.net/cpanel/domains/zone-editor/"
              },
              {
                "phrase": "cPanel Zone Editor example",
                "to": "/guides/providers/cpanel-zone-add.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/cpanel-zone-add.png",
          "alt": "Namecheap’s cPanel Zone Editor example highlights Add Record above the DNS records table.",
          "caption": "Add Record opens record creation. Locate and edit an existing DMARC TXT record instead of creating a second one. Confirm authoritative DNS ownership first. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 1221,
          "height": 253
        }
      }
    ],
    "takeaway": "Move to a stricter DMARC policy after legitimate senders pass the message tests and you have a way to restore the previous record.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider manages the service. We can agree on a scope for Helm’s help. Your existing IT team and vendors handle the configuration changes.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "fix-dmarc-reporting",
    "title": "Set up and verify DMARC aggregate reporting",
    "metaDesc": "Choose a monitored DMARC reporting destination, verify external authorization where required and confirm report receipt.",
    "date": "2026-10-14",
    "readMin": 3,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "If your DMARC record has no rua address, add one for a mailbox or reporting service you control. The reports help you see which services send mail using your domain, so review them before tightening the policy.",
    "lead": [],
    "sections": [
      {
        "h": "Choose a reporting address and check that reports arrive",
        "ps": [
          {
            "list": [
              "Set up a dedicated mailbox or reporting service and decide who will review the reports. Before using the destination, check how it handles and retains report data, which can include sending infrastructure and authentication information.",
              "Save the existing DMARC record, then edit the reporting address in that record. Keep the current enforcement policy while setting up reporting, and publish only one DMARC record.",
              {
                "text": "For an address on another domain, ask the reporting provider to confirm the external-destination authorization described by the aggregate-reporting standard. The destination may need that authorization as well as a working mailbox.",
                "links": [
                  {
                    "phrase": "aggregate-reporting standard",
                    "to": "https://datatracker.ietf.org/doc/html/rfc9990"
                  }
                ]
              },
              "Check the published record and any required destination authorization. As your services send mail, look for reports from participating receivers. Receivers vary in whether and when they report, so allow time before treating an empty inbox as a setup problem.",
              "Make sure someone investigates sources you don’t recognize. If the reporting address is wrong or you need to end the arrangement, ask whoever manages your DNS to restore the previous destination and check the published change. Follow the reporting service’s process for information it has already received."
            ],
            "ordered": true
          }
        ]
      },
      {
        "h": "Microsoft 365: update reporting at your DNS host",
        "ps": [
          "For a custom domain, ask whoever manages DNS to update rua in the existing DMARC TXT record at the authoritative DNS host. Use the approved reporting address and check any required external authorization. The Microsoft 365 domain wizard helps with mail setup, but it has no DMARC editor for custom domains.",
          {
            "text": "Microsoft’s DMARC setup instructions explain the custom-domain configuration. The Microsoft 365 Domains example shows the start of domain setup.",
            "links": [
              {
                "phrase": "Microsoft’s DMARC setup instructions",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dmarc-configure"
              },
              {
                "phrase": "Microsoft 365 Domains example",
                "to": "/guides/providers/microsoft-domain-setup.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/microsoft-domain-setup.png",
          "alt": "Microsoft’s Domains example highlights Start setup for contoso.com.",
          "caption": "Start setup opens domain setup. Current workflows may use DNS records → Manage DNS. Review your domain’s required records. This screen does not identify who hosts authoritative DNS. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 582,
          "height": 189
        }
      },
      {
        "h": "cPanel: preserve the policy while adding reporting",
        "ps": [
          "If cPanel hosts authoritative DNS, open Domains → Zone Editor → Manage and edit the existing _dmarc TXT record. Add the approved rua address and keep the agreed enforcement policy. A suggested DMARC record may omit reporting, so check its reporting tags. If another provider hosts your DNS, ask that provider to apply the approved change.",
          {
            "text": "The cPanel Zone Editor instructions explain how to manage the record. In the cPanel Zone Editor example, Add Record creates a new entry; update your existing DMARC entry when adding reporting.",
            "links": [
              {
                "phrase": "cPanel Zone Editor instructions",
                "to": "https://docs.cpanel.net/cpanel/domains/zone-editor/"
              },
              {
                "phrase": "cPanel Zone Editor example",
                "to": "/guides/providers/cpanel-zone-add.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/cpanel-zone-add.png",
          "alt": "Namecheap’s cPanel Zone Editor example highlights Add Record above the DNS records table.",
          "caption": "Add Record opens record creation. Locate and edit an existing DMARC TXT record instead of creating a second one. Confirm authoritative DNS ownership first. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 1221,
          "height": 253
        }
      }
    ],
    "takeaway": "Check that reports reach a destination you control, and keep the reporting change separate from any decision to enforce DMARC.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider manages the service. We can agree on a scope for Helm’s help. Your existing IT team and vendors handle the configuration changes.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "verify-dkim-signing",
    "title": "Verify DKIM signing when a public scan finds no key",
    "metaDesc": "Check the actual DKIM selector, provider activation and receiver-side message results when a public scan finds no key.",
    "date": "2026-10-14",
    "readMin": 3,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A “no DKIM key found” result can mean the scanner checked a different selector from the one your mail provider uses. Ask your mail administrator to check the configured selector and a test message’s DKIM result before deciding that signing is missing.",
    "lead": [],
    "sections": [
      {
        "h": "Check the configured selector and a sent message",
        "ps": [
          "Get the sending platform’s configured selector from your mail administrator. Look up its public record, then send a test from that platform to an external recipient and check the receiver’s DKIM result. Finding a public key alone doesn’t confirm that the platform signs outgoing mail.",
          {
            "text": "Google Workspace’s DKIM instructions have two separate steps: publish the public record generated for your domain, then start authentication in the Admin console. Send a test message and check the receiving service’s DKIM result and signing domain. Keep the private key private.",
            "links": [
              {
                "phrase": "Google Workspace’s DKIM instructions",
                "to": "https://knowledge.workspace.google.com/admin/security/set-up-dkim"
              }
            ]
          },
          "For Microsoft 365 or a third-party sender, follow the provider’s current setup and activation instructions for your domain. Test each sending route and check DMARC alignment. If legitimate signing fails, use the saved signing configuration and the provider’s supported rotation or recovery procedure. Removing a published key too soon can affect messages still in transit."
        ],
        "figure": {
          "src": "/guides/official-dkim-annotated.png",
          "alt": "Google Workspace documentation highlights starting DKIM authentication after publishing the public record.",
          "caption": "Annotated excerpt of Google Workspace public documentation, captured October 14, 2026. Documentation example, not an account screenshot. Source: Google Workspace DKIM setup documentation. CC BY 4.0; Helm annotation added.",
          "width": 774,
          "height": 672
        }
      },
      {
        "h": "Before changing DKIM",
        "ps": [
          "Work with your mail administrator and whoever manages your DNS. Before making a change, save the current selector and public record, and read the provider’s rotation or recovery instructions. Keep them available in case signing fails. If you don’t know which service sends the mail or can’t get the required access, stop here. After an approved change, send an external test through each important route and check for a passing DKIM result that aligns with the visible From domain."
        ]
      },
      {
        "h": "Microsoft 365: publish the CNAMEs, then enable signing",
        "ps": [
          "In Defender, ask an authorized mail administrator to open Email authentication settings → DKIM and select the custom domain flyout. Generate keys if needed, then copy both current CNAME names and targets. Give those values to whoever manages authoritative DNS to publish. Once Microsoft detects the records, enable signing and send a test message to an external recipient. Use the values from your tenant; newer and older domains can use different target formats.",
          {
            "text": "Follow Microsoft’s DKIM setup instructions for your account. The Microsoft 365 DKIM example shows where to copy the CNAME values and enable signing.",
            "links": [
              {
                "phrase": "Microsoft’s DKIM setup instructions",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-dkim-configure"
              },
              {
                "phrase": "Microsoft 365 DKIM example",
                "to": "/guides/providers/microsoft-dkim-cnames.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/microsoft-dkim-cnames.png",
          "alt": "Microsoft’s DKIM example shows two CNAME values, Copy and a disabled signing toggle for contoso.com.",
          "caption": "Read Publish CNAMEs and Copy; enable signing after Microsoft detects your records. The Contoso values are an example. Retrieve your tenant’s current CNAME targets. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 456,
          "height": 612
        }
      },
      {
        "h": "cPanel: identify the service that signs the mail",
        "ps": [
          "For mail sent by the cPanel server, open Email → Email Deliverability → Manage and check the suggested public DKIM Name and Value. Publish them at authoritative DNS, then test a sent message. If your cPanel website sends through Microsoft 365 or another service, configure DKIM with that sender. Publish only the public key; keep the private key private.",
          {
            "text": "The cPanel Email Deliverability instructions explain the setup. The cPanel DKIM example shows the public Name and Value to copy into DNS.",
            "links": [
              {
                "phrase": "cPanel Email Deliverability instructions",
                "to": "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/"
              },
              {
                "phrase": "cPanel DKIM example",
                "to": "/guides/providers/cpanel-dkim.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/cpanel-dkim.png",
          "alt": "Namecheap’s cPanel example shows the suggested public DKIM Name and Value, Copy and Install the Suggested Record.",
          "caption": "Read the public Name and Value beside Copy. Install applies when this server controls authoritative DNS. Keep the private key private; View the Private Key is not needed for DNS publication. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 690,
          "height": 564
        }
      }
    ],
    "takeaway": "Use the configured selector to check DNS, then confirm a passing DKIM result and DMARC alignment on a test message.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider manages the service. We can agree on a scope for Helm’s help. Your existing IT team and vendors handle the configuration changes.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "review-spf-softfail",
    "title": "Review SPF softfail before changing the policy",
    "metaDesc": "Review legitimate senders and actual authentication results before deciding whether an SPF softfail policy should change.",
    "date": "2026-10-14",
    "readMin": 3,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "Review your sending services with your mail administrator before replacing ~all with -all. An untested change can disrupt mail from billing tools or website forms. A public lookup can’t tell you whether each service is configured correctly.",
    "lead": [],
    "sections": [
      {
        "h": "Find the domain each service uses for SPF",
        "ps": [
          {
            "text": "SPF checks the domain used in the SMTP envelope sender. That domain can differ from the From address a recipient sees, so ask your mail administrator which envelope domain each service uses. DMARC also checks whether the authenticated domain aligns with the visible From domain; the DMARC guide explains that relationship.",
            "links": [
              {
                "phrase": "DMARC guide",
                "to": "/resources/what-is-dmarc/"
              }
            ]
          },
          "Check who hosts your authoritative DNS and mailboxes, and which outside services send mail for you. Microsoft 365, Google Workspace and a cPanel host can require different sender values. The desktop mail app you use doesn’t tell you who hosts your mail."
        ]
      },
      {
        "h": "Understand what softfail tells the receiver",
        "ps": [
          {
            "text": "Under the SPF standard, ~all returns softfail when evaluation reaches it, while -all returns fail. The receiver uses that result alongside other checks to decide how to handle the message. The suffix alone cannot tell you whether mail will reach an inbox or be rejected, and it does not protect against every kind of impersonation.",
            "links": [
              {
                "phrase": "SPF standard",
                "to": "https://datatracker.ietf.org/doc/html/rfc7208"
              }
            ]
          },
          "A lookup timeout is inconclusive. Missing records, multiple SPF records and an evaluation over the DNS lookup limit need different investigations. That limit applies to DNS-querying terms reached during evaluation, including nested mechanisms. Evaluate the sending path to check the limit; counting visible includes alone is incomplete."
        ]
      },
      {
        "h": "Review the senders before choosing a policy",
        "ps": [
          {
            "list": [
              "Save the current record, TTL and provider configuration, and check that your DNS administrator can restore them before you make a change.",
              "Compare the sources authorized by the record with your list of sending services. Include occasional statements, website forms and relays that a short reporting period might miss.",
              "Ask your provider why it uses softfail and whether its supported configuration calls for a different policy. Send tests to external recipients and check the authentication results and DMARC alignment before deciding.",
              {
                "text": "If the record is missing, duplicated or invalid, repair it with the SPF record repair guide before deciding whether to change the suffix.",
                "links": [
                  {
                    "phrase": "SPF record repair guide",
                    "to": "/resources/fix-spf-record/"
                  }
                ]
              },
              "Schedule the agreed change for a time when your mail and DNS administrators can help. Wait if you can’t identify or test a sender the business needs."
            ],
            "ordered": true
          },
          {
            "text": "Microsoft’s SPF setup guide covers Microsoft-only mail and domains that also use other senders. Review those services’ requirements before using the simple Microsoft-only record.",
            "links": [
              {
                "phrase": "Microsoft’s SPF setup guide",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure"
              }
            ]
          }
        ]
      },
      {
        "h": "Test mail after the change",
        "ps": [
          "After the authorized update, check the published DNS record. Send approved tests to external recipients through every route the business relies on. Check that each message arrives, then inspect its authentication results and DMARC alignment. Test important forwarding paths too, because forwarding can change the SPF result.",
          "If legitimate mail starts failing, ask your administrator to restore the saved record and confirm it is published. Investigate the affected sending path and keep tracking delivery failures until it has been tested again. Receivers may keep using cached DNS for a while after restoration."
        ]
      },
      {
        "h": "Keep a record of what you checked",
        "ps": [
          "Save the domain, services checked, test date, receiver results and any remaining exceptions. Your IT team and vendors review the full sender list and make configuration changes within their agreed scope. Helm’s public scan only checks published configuration."
        ]
      },
      {
        "h": "Microsoft 365: include every legitimate sender",
        "ps": [
          "Review the required TXT records under Settings → Domains → DNS records → Manage DNS. Check Microsoft 365’s requirements alongside those of each approved third-party sender before deciding whether to change ~all. Ask whoever manages DNS to publish the approved single SPF record, then repeat the message tests above.",
          {
            "text": "Microsoft’s DNS setup instructions cover the required records for your account. The Microsoft 365 Domains example shows where domain setup begins.",
            "links": [
              {
                "phrase": "Microsoft’s DNS setup instructions",
                "to": "https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide"
              },
              {
                "phrase": "Microsoft 365 Domains example",
                "to": "/guides/providers/microsoft-domain-setup.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/microsoft-domain-setup.png",
          "alt": "Microsoft’s Domains example highlights Start setup for contoso.com.",
          "caption": "Start setup opens domain setup. Current workflows may use DNS records → Manage DNS. Review your domain’s required records. This screen does not identify who hosts authoritative DNS. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 582,
          "height": 189
        }
      },
      {
        "h": "cPanel: check the all setting in Customize",
        "ps": [
          "For mail sent by the cPanel server, open Email Deliverability → Manage → SPF → Customize and review the preview. Exclude All Other Hosts selects -all, while cPanel commonly recommends ~all. Test your legitimate sending routes before choosing a stricter policy. Installation updates authoritative DNS only when that server controls it.",
          {
            "text": "Check the cPanel Email Deliverability instructions for your host. Use the include list, all option and preview in the cPanel SPF example to check the proposed record before installation.",
            "links": [
              {
                "phrase": "cPanel Email Deliverability instructions",
                "to": "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/"
              },
              {
                "phrase": "cPanel SPF example",
                "to": "/guides/providers/cpanel-spf-preview.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/cpanel-spf-preview.png",
          "alt": "Namecheap’s cPanel SPF example shows the include list, minus-all option and preview before installation.",
          "caption": "Review Include List and Preview before approving installation. The pictured partial record is not a configuration to copy. Decide on an all policy after testing legitimate senders. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 684,
          "height": 549
        }
      }
    ],
    "takeaway": "Choose the SPF policy from your provider’s guidance and tested sending routes, then check message results after any change.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider manages the service. We can agree on a scope for Helm’s help. Your existing IT team and vendors handle the configuration changes.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "fix-spf-record",
    "title": "Fix a missing, duplicate or invalid SPF record",
    "metaDesc": "Investigate a missing, duplicate or invalid SPF record with the mail administrator. Preserve senders and validate the repair.",
    "date": "2026-10-14",
    "readMin": 3,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "Before repairing SPF, list your sending services and ask your mail administrator which domain each uses in the SMTP envelope sender. The SPF record must match that domain. Check for a missing, duplicate or invalid record, and for an evaluation that exceeds the DNS lookup limit. A lookup timeout is inconclusive.",
    "lead": [],
    "sections": [
      {
        "h": "Build one SPF record for your sending services",
        "ps": [
          {
            "list": [
              "Work with your DNS administrator and whoever approves the change for the business. Save the current record, TTL and provider configuration, and make sure you know who will restore them if delivery breaks.",
              "List every legitimate sending route, including occasional statements, forms, marketing tools and relays. Get each vendor’s supported instructions for the product and domain you use.",
              "Investigate missing or duplicate records before building the replacement. Publish only one v=spf1 record for the domain. Confirm that an unfamiliar sender is legitimate before authorizing it, even if it appears in a report.",
              "Have your administrator check the syntax and evaluate representative sending paths, including nested DNS lookups. Flatten the record into a snapshot of provider addresses only if you have an arrangement to keep that list up to date.",
              "Schedule the approved update for a time when your mail and DNS administrators can help. Stop if you can’t identify a sender the business needs or confirm its documented configuration."
            ],
            "ordered": true
          },
          {
            "text": "Microsoft’s SPF setup guide covers Microsoft-only mail and domains that also use other senders. Review those services’ requirements before using the simple Microsoft-only record.",
            "links": [
              {
                "phrase": "Microsoft’s SPF setup guide",
                "to": "https://learn.microsoft.com/en-us/defender-office-365/email-authentication-spf-configure"
              }
            ]
          }
        ]
      },
      {
        "h": "Check DNS and test each sending route",
        "ps": [
          "After the authorized update, check the published DNS record. Send approved tests to external recipients through each route the business relies on. Check that each message arrives, then inspect its authentication results and DMARC alignment. Test important forwarding paths too, because forwarding can change the SPF result.",
          "If legitimate mail starts failing, ask your administrator to restore the saved record and confirm it is published. Investigate the affected sending path and keep tracking delivery failures until it has been tested again. Receivers may keep using cached DNS for a while after restoration."
        ]
      },
      {
        "h": "Record the repair and any remaining problems",
        "ps": [
          "Save the domain, services checked, test date, receiver results and any remaining exceptions. Your existing IT team and vendors review the full sender list and make configuration changes within their agreed scope. Helm’s public scan only checks published configuration.",
          {
            "text": "If the record is valid and you need to decide whether to keep ~all, follow the SPF softfail review. RFC 7208 defines how SPF is evaluated and the limits that apply.",
            "links": [
              {
                "phrase": "SPF softfail review",
                "to": "/resources/review-spf-softfail/"
              },
              {
                "phrase": "RFC 7208",
                "to": "https://datatracker.ietf.org/doc/html/rfc7208"
              }
            ]
          }
        ]
      },
      {
        "h": "Microsoft 365: compare the required TXT records",
        "ps": [
          "Open Settings → Domains, select your domain, then open DNS records → Manage DNS to review Microsoft’s required TXT records. Ask whoever manages DNS to include Microsoft’s required sending authorization and your approved third-party senders in the domain’s one SPF record. Recheck the lookup limit and test mail from each sending route.",
          {
            "text": "Use Microsoft’s DNS setup instructions for your account. The Microsoft 365 Domains example shows the entry point to domain setup.",
            "links": [
              {
                "phrase": "Microsoft’s DNS setup instructions",
                "to": "https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide"
              },
              {
                "phrase": "Microsoft 365 Domains example",
                "to": "/guides/providers/microsoft-domain-setup.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/microsoft-domain-setup.png",
          "alt": "Microsoft’s Domains example highlights Start setup for contoso.com.",
          "caption": "Start setup opens domain setup. Current workflows may use DNS records → Manage DNS. Review your domain’s required records. This screen does not identify who hosts authoritative DNS. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 582,
          "height": 189
        }
      },
      {
        "h": "cPanel: inspect the SPF recommendation",
        "ps": [
          "For mail sent by the cPanel server, open Email → Email Deliverability → Manage for your domain and review SPF → Customize. Compare the suggested record with your sender list before publishing one approved SPF record at authoritative DNS. Your host must enable this interface. When another provider hosts DNS, send the approved record there; cPanel’s Repair and Install controls can’t change external DNS records.",
          {
            "text": "The cPanel Email Deliverability instructions explain the SPF controls. The cPanel SPF example shows the include list and preview to compare with your sending services.",
            "links": [
              {
                "phrase": "cPanel Email Deliverability instructions",
                "to": "https://docs.cpanel.net/cpanel/email/email-deliverability-in-cpanel/"
              },
              {
                "phrase": "cPanel SPF example",
                "to": "/guides/providers/cpanel-spf-preview.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/cpanel-spf-preview.png",
          "alt": "Namecheap’s cPanel SPF example shows the include list, minus-all option and preview before installation.",
          "caption": "Review Include List and Preview before approving installation. The pictured partial record is not a configuration to copy. Decide on an all policy after testing legitimate senders. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 684,
          "height": 549
        }
      }
    ],
    "takeaway": "Publish one record that covers the approved sending services, then check the published DNS record and test mail from each route. Keep the saved configuration ready if delivery breaks.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider manages the service. We can agree on a scope for Helm’s help. Your existing IT team and vendors handle the configuration changes.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "enable-dnssec-safely",
    "title": "Enable DNSSEC with your DNS host and registrar",
    "metaDesc": "Coordinate DNSSEC signing and registrar delegation. Validate the chain and agree an ordered rollback before changing settings.",
    "date": "2026-10-14",
    "readMin": 2,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "Your DNS host and registrar need to work together to enable DNSSEC: the host signs the zone, and the registrar publishes its delegation. If a scan flags an unsigned domain, ask retained IT to check both. A DNSKEY in the results does not show whether the full chain validates.",
    "lead": [],
    "sections": [
      {
        "h": "Check the DNS host and registrar",
        "ps": [
          "Ask retained IT to confirm the authoritative DNS provider, registrar and zone in the scan. They’ll need to work with the people who have access to both accounts to check the current signing state and delegation. Tell them about any planned provider or nameserver move before they choose a procedure. If the account owners or existing delegation are unclear, wait until IT can confirm them.",
          {
            "text": "The DNSSEC introduction explains how DNSSEC authenticates the origin of DNS data and protects its integrity. It does not encrypt website traffic, and a public DNSSEC check does not assess your internal systems. If the scan timed out or queried the wrong name, investigate that result before treating the zone as unsigned.",
            "links": [
              {
                "phrase": "DNSSEC introduction",
                "to": "https://datatracker.ietf.org/doc/html/rfc4033"
              }
            ]
          }
        ]
      },
      {
        "h": "Follow your providers’ setup sequence",
        "ps": [
          {
            "text": "For a primary zone on Cloudflare, follow its current DNSSEC instructions to enable signing and get the DS information for your registrar. Cloudflare Registrar can publish the DS record automatically. With another registrar, follow that registrar’s supported process.",
            "links": [
              {
                "phrase": "current DNSSEC instructions",
                "to": "https://developers.cloudflare.com/dns/dnssec/"
              }
            ]
          },
          "Check that your registrar and top-level domain support the setup, then use the values generated for your zone. Never copy a digest, key tag or algorithm from a screenshot. Secondary DNS, delegated subdomains and provider migrations each need their own procedure; follow that instead of these primary-zone steps."
        ]
      },
      {
        "h": "Plan how to check the change and recover from a failure",
        "ps": [
          {
            "list": [
              "Save the current nameservers, signing state and parent DS records, along with the provider’s recovery instructions.",
              "Get the change approved before either account is altered. Have the people managing those accounts agree with IT which business services they will check afterwards.",
              "Follow the supported enablement sequence. Have IT use validating DNS checks to verify the delegation and signatures, then check that website and mail-related names still resolve normally.",
              "If validation fails or a name stops resolving, stop and send the results to the DNS provider and registrar. Do not keep toggling signing to improve the scan score.",
              "Keep the validation result, date and person responsible with the change record. The chain needs to validate even when the dashboard shows signing as enabled."
            ],
            "ordered": true
          }
        ]
      },
      {
        "h": "Remove the parent DS record before disabling signing",
        "ps": [
          "Cloudflare’s rollback instructions start by removing the parent DS record and keeping signing enabled until the parent-zone TTL expires. Disabling signing sooner can leave validating resolvers unable to use the domain. Follow your providers’ recovery sequence and verify the parent state and TTL before turning signing off.",
          "If your provider cannot support the arrangement you need, record the limitation and scope any migration separately. The authorized DNS administrators handle setup and recovery. Helm’s public scan checks a limited set of public configuration signals."
        ]
      }
    ],
    "takeaway": "Enable DNSSEC with both the DNS host and registrar, then have IT validate the full chain. Agree the rollback sequence before changing either account.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider runs the affected service. Retained IT and the relevant providers handle the changes. Any help from Helm needs an agreed scope.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "set-up-mta-sts",
    "title": "Set up and test an MTA-STS mail policy",
    "metaDesc": "Confirm MX destinations, publish and test an MTA-STS policy, and plan recovery around cached policies with the mail provider.",
    "date": "2026-10-14",
    "readMin": 2,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "Work with your mail administrator to publish a testing policy and check delivery before turning on MTA-STS enforcement. Ask what transport protections and delivery reporting the service supports. Missing MTA-STS or TLS-RPT markers alone cannot show whether a message travelled unencrypted or whether delivery is monitored elsewhere.",
    "lead": [],
    "sections": [
      {
        "h": "Confirm your MX destinations and policy host",
        "ps": [
          "Work through the MX destinations with your mail provider, including gateways and any planned changes, and check their TLS behavior and certificates. Involve your DNS administrator, the person hosting the HTTPS policy and whoever investigates delivery problems. Wait to publish until the provider can confirm the destinations and required hosting arrangement.",
          {
            "text": "Microsoft’s MTA-STS guidance covers Exchange Online. Your mailbox or gateway provider may require different MX values. Get those values from the provider for your setup; the mail application or a wildcard copied from another firm will not tell you what belongs in the policy.",
            "links": [
              {
                "phrase": "Microsoft’s MTA-STS guidance",
                "to": "https://learn.microsoft.com/en-us/exchange/security-and-compliance/enhance-mail-flow-using-strict-transport-security"
              }
            ]
          }
        ]
      },
      {
        "h": "Publish and check a testing policy",
        "ps": [
          {
            "text": "The MTA-STS standard uses a DNS marker at _mta-sts and an HTTPS policy document at mta-sts.example.com/.well-known/mta-sts.txt. Replace that reserved example address with your firm’s policy host. The document sets the mode, permitted MX patterns and how long senders can cache the policy.",
            "links": [
              {
                "phrase": "MTA-STS standard",
                "to": "https://datatracker.ietf.org/doc/html/rfc8461"
              }
            ]
          },
          {
            "list": [
              "Save the current DNS marker and hosted policy, including its cache lifetime. Get the proposed policy approved and agree with the provider who will handle recovery.",
              "Verify that the testing policy covers your MX destinations and that the HTTPS policy host has a valid certificate, then follow your provider’s supported setup to publish it.",
              "Check DNS and retrieve the policy from outside the hosting environment. Have IT check the full syntax, mode, certificate and MX matching. The version marker alone cannot confirm that the policy is correct.",
              "Review delivery results and available reports before considering enforcement. A policy mismatch in enforcement mode can prevent participating senders from delivering mail.",
              "If a legitimate destination or delivery path is still unexplained, pause the change and record what needs further investigation. A successful HTTPS fetch confirms that the policy is reachable; delivery still needs its own checks."
            ],
            "ordered": true
          }
        ]
      },
      {
        "h": "Account for cached policies during recovery",
        "ps": [
          "Senders may keep using a cached policy after you delete the DNS marker. Ask the provider to plan recovery or removal around the existing policy’s lifetime, keep the HTTPS document reachable and update the policy identifier as required by that plan. Check the changed policy and affected delivery paths while monitoring reports.",
          "If the problem is only with reporting, restore or correct the authorized reporting destination and leave enforcement unchanged. Keep the old configuration and a record of any information already sent to a third-party service. Ask the mail administrator to check that reports arrive and someone reviews them. Helm’s public scan cannot verify that process or every sender’s enforcement."
        ]
      }
    ],
    "takeaway": "Test the policy against your MX destinations and delivery results before enforcement. Plan recovery around the policies senders may have cached.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider runs the affected service. Retained IT and the relevant providers handle the changes. Any help from Helm needs an agreed scope.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "set-up-tls-reporting",
    "title": "Set up and verify TLS reporting for email delivery",
    "metaDesc": "Choose a monitored TLS reporting destination, validate the DNS configuration and review transport failures without changing enforcement.",
    "date": "2026-10-14",
    "readMin": 2,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "TLS reports can help your mail administrator investigate delivery failures. Before publishing the DNS record, choose where the reports will go and who will review them. The reports come from participating senders; reporting itself does not enforce encryption.",
    "lead": [],
    "sections": [
      {
        "h": "Choose a destination someone will monitor",
        "ps": [
          {
            "text": "TLS-RPT lets participating sending systems report transport results. DMARC aggregate reports cover email authentication, so decide separately where those reports go and how you review them.",
            "links": [
              {
                "phrase": "TLS-RPT",
                "to": "https://datatracker.ietf.org/doc/html/rfc8460"
              }
            ]
          },
          "Work with your mail administrator to choose an approved mailbox or reporting service. Check what delivery information it will receive, who can access that information and how long it is kept. Have the administrator save the current _smtp._tls record, then follow the DNS and reporting providers’ supported setup to publish the v=TLSRPTv1 configuration with your destination. Then check the syntax and routing.",
          "Watch for reports as participating senders exchange mail. Some senders do not participate, and reports can take time to arrive, so an empty inbox alone does not mean setup failed. Pass reported certificate, policy or delivery problems to the mail or hosting administrator responsible for investigating them."
        ]
      },
      {
        "h": "Correct reporting problems without changing enforcement",
        "ps": [
          "If reports go to the wrong place or the setup is incorrect, have the administrator correct the destination or restore the saved record. Check the syntax and how the destination handles reports, then verify that DNS publishes the corrected record. Keep MTA-STS enforcement unchanged while fixing a reporting-only problem.",
          {
            "text": "Check how the reporting service handles information it has already received, including who can access it and how long it is kept. Keep a record of who will investigate unresolved failures. Changes to the transport policy follow the separate MTA-STS setup guide.",
            "links": [
              {
                "phrase": "MTA-STS setup guide",
                "to": "/resources/set-up-mta-sts/"
              }
            ]
          }
        ]
      }
    ],
    "takeaway": "Send TLS reports to a monitored destination and have the mail administrator review failures. Reporting itself does not enforce encryption.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider runs the affected service. Retained IT and the relevant providers handle the changes. Any help from Helm needs an agreed scope.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "fix-mx-mail-routing",
    "title": "Investigate and fix MX mail-routing records",
    "metaDesc": "Confirm whether the domain should receive mail, compare MX records with the provider and validate approved routing changes.",
    "date": "2026-10-14",
    "readMin": 3,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "Ask your mail administrator whether the domain should receive mail and which service handles it. An active mailbox domain, a sending-only domain and a retired domain need different routing decisions. If a scan cannot contact the mail server, check delivery with the provider before treating it as an outage.",
    "lead": [],
    "sections": [
      {
        "h": "Compare MX records with your mail provider’s settings",
        "ps": [
          {
            "text": "SMTP’s routing standard explains how sending systems find mail destinations. Ask IT to compare your published MX records with the provider’s current values for your domain and product. Check whether the finding comes from a temporary lookup failure, an absent record or a deliberate no-mail arrangement.",
            "links": [
              {
                "phrase": "SMTP’s routing standard",
                "to": "https://datatracker.ietf.org/doc/html/rfc5321"
              }
            ]
          },
          "Get the MX values from the service that receives your mail. An SPF include, a website address or another tenant’s settings cannot substitute for them. Using Outlook does not tell you whether mail arrives through Microsoft 365, a separate gateway or another host. Check the hosting arrangement for cPanel and Google Workspace too."
        ]
      },
      {
        "h": "Prepare and test a routing change",
        "ps": [
          {
            "list": [
              "Ask your DNS administrator to save the current MX records, priorities and TTLs. Plan the change with your mail provider and get it approved by the firm before switching.",
              "Check that the receiving service accepts your domain and that its mailboxes and routing are ready. Include a filtering gateway or backup destination if the provider requires one.",
              "Before changing DNS, agree with the provider on the exact supported values, delivery checks and when to roll back. Wait until they can confirm mailbox readiness and domain ownership.",
              "After the approved change, verify the published records and send approved external test messages to representative mailboxes. Review delivery logs, bounces and replies with the provider.",
              "If business mail fails, have the authorized administrator restore the saved routing while investigating. Cached records can affect the transition, so test delivery even after the DNS changes have been saved."
            ],
            "ordered": true
          }
        ]
      },
      {
        "h": "Microsoft 365: retrieve the intended MX destination",
        "ps": [
          "In Settings → Domains, select your domain, then use DNS records → Manage DNS to find the required MX record. Set up users and mailboxes before switching to Exchange Online. Once the switch is approved, have your DNS administrator apply the tenant-specific destination and priority, keeping any documented gateway or hybrid routing in place. Test inbound delivery afterwards.",
          {
            "text": "The Microsoft 365 Domains example shows where setup begins. Follow the provider setup instructions for your account’s required records.",
            "links": [
              {
                "phrase": "provider setup instructions",
                "to": "https://learn.microsoft.com/en-us/microsoft-365/admin/get-help-with-domains/create-dns-records-at-any-dns-hosting-provider?view=o365-worldwide"
              },
              {
                "phrase": "Microsoft 365 Domains example",
                "to": "/guides/providers/microsoft-domain-setup.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/microsoft-domain-setup.png",
          "alt": "Microsoft’s Domains example highlights Start setup for contoso.com.",
          "caption": "Start setup opens domain setup. Current workflows may use DNS records → Manage DNS. Review your domain’s required records. This screen does not identify who hosts authoritative DNS. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 582,
          "height": 189
        }
      },
      {
        "h": "cPanel: check DNS and local mail routing separately",
        "ps": [
          "If the cPanel server hosts authoritative DNS, use Domains → Zone Editor → Manage to review the MX entries. Enter the intended mail provider’s destination and priority. Ask the host to check Email → Email Routing separately for local or remote delivery; automatic detection uses the local zone file. A server hosting your cPanel website may use another service for the domain’s mail.",
          {
            "text": "The cPanel MX example shows the priority and destination fields. Follow the provider setup instructions for your account’s mail routing.",
            "links": [
              {
                "phrase": "provider setup instructions",
                "to": "https://docs.cpanel.net/cpanel/email/email-routing/"
              },
              {
                "phrase": "cPanel MX example",
                "to": "/guides/providers/cpanel-mx.png"
              }
            ]
          }
        ],
        "figure": {
          "src": "/guides/providers/cpanel-mx.png",
          "alt": "Namecheap’s cPanel Zone Editor example highlights MX, Priority, Destination and Save Record.",
          "caption": "The highlighted Type is MX. Use the priority and destination from your mail-routing design. The pictured example domain and destination are not Microsoft 365 settings. Published provider documentation example, not a Helm tenant or client account. Source checked October 14, 2026.",
          "width": 1096,
          "height": 108
        }
      }
    ],
    "takeaway": "Confirm the receiving service and mailbox readiness before changing MX records. Save the old routing and test inbound delivery after the approved change.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider runs the affected service. Retained IT and the relevant providers handle the changes. Any help from Helm needs an agreed scope.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "investigate-smtp-check",
    "title": "Investigate an unavailable SMTP check",
    "metaDesc": "Recheck an unavailable SMTP probe with the mail provider. Separate scanner connection limits from actual delivery problems.",
    "date": "2026-10-14",
    "readMin": 2,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "An unavailable SMTP check needs a closer look with your mail provider before you change the receiving service. The probe alone cannot show that the server is broken or that mail travelled unencrypted.",
    "lead": [],
    "sections": [
      {
        "h": "Why an SMTP probe can fail",
        "ps": [
          "Port 25 can be blocked from a scanner’s network, and a server may reject a probe even when normal mail delivery works. This scanner checks one MX host and treats the result as informational.",
          {
            "text": "Ask the provider to check the affected receiving path, its TLS behavior and delivery logs in a controlled test. Check which path the test covers before applying the results to other routes. The mail-transport guide explains policy and reporting.",
            "links": [
              {
                "phrase": "mail-transport guide",
                "to": "/resources/set-up-mta-sts/"
              }
            ]
          }
        ]
      },
      {
        "h": "Check the receiving path with IT",
        "ps": [
          "Give IT the probed hostname and scan time, then check with them which service should receive the domain’s mail. Compare the finding with the provider’s delivery logs and a controlled external mail test. If the receiving path is still unclear, resolve that before making changes. For a confirmed configuration problem, have the provider define the correction and recovery procedure. Do not weaken a firewall or change security settings just to let the scanner connect."
        ]
      },
      {
        "h": "Record the result and any further work",
        "ps": [
          "Keep a record of whether the domain should receive mail, the provider, the records checked and the test results. Agree who will follow up on anything still unresolved. Any DNS or mail change needs the relevant administrator’s approval and procedure; retained IT and the provider carry out the agreed work."
        ]
      }
    ],
    "takeaway": "Compare an unavailable probe with the provider’s logs and a controlled mail test. Confirm the problem with the relevant administrator and get their approval before changing the configuration.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider runs the affected service. Retained IT and the relevant providers handle the changes. Any help from Helm needs an agreed scope.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "fix-website-https",
    "title": "Investigate and fix website HTTPS or certificate errors",
    "metaDesc": "Investigate HTTPS and certificate errors with the website provider. Verify the affected hostname, approved change and recovery.",
    "date": "2026-10-14",
    "readMin": 2,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "Send the affected hostname, scan time and error to your website provider so they can check the connection visitors use. The scanner’s route to the site can cause a public HTTPS check to fail, so check visitor access before treating the result as an outage. Test the main hostname and any important alternate or redirecting hosts separately.",
    "lead": [],
    "sections": [
      {
        "h": "Check the certificate and HTTPS connection",
        "ps": [
          {
            "text": "TLS protects a connection and authenticates its endpoint. Check that the certificate covers the hostname visitors use and that it has not expired. A valid certificate does not tell you whether the application has vulnerabilities.",
            "links": [
              {
                "phrase": "TLS protects a connection and authenticates its endpoint",
                "to": "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security"
              }
            ]
          },
          {
            "list": [
              "Ask your hosting administrator to save the finding and the current hosting, certificate and redirect settings. Get approval from the person responsible for website changes before going ahead.",
              "Have the provider check DNS, certificate coverage, validity and chain, along with HTTPS behavior for the affected hostname. Include any proxy or content-delivery network that terminates the connection.",
              "Use the host’s supported process to renew or install the certificate. Wait until the provider can confirm access, hostname ownership and which configuration serves visitors before proceeding.",
              "After the change, test redirects and representative pages from outside the hosting environment. Look for browser warnings and insecure resources even when the hosting dashboard reports success.",
              "If the change interrupts access, use the saved configuration to follow the host’s recovery procedure, then repeat the checks. Keep a record of unresolved errors and who will investigate them."
            ],
            "ordered": true
          },
          "Retained IT and your website or hosting provider handle agreed certificate work. If you want Helm’s help, agree the scope separately from the public scan."
        ]
      }
    ],
    "takeaway": "Have the website provider check the affected hostname and connection before changing the certificate or hosting setup. Test visitor access again after the change.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Tell us what the scan found and which provider runs the affected service. Retained IT and the relevant providers handle the changes. Any help from Helm needs an agreed scope.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  }
];
