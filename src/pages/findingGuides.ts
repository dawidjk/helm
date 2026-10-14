import type {Article} from './articles';
export const findingGuides: Article[] = [
  {
    "slug": "fix-dmarc-monitoring-policy",
    "title": "Move a monitoring-only DMARC policy toward enforcement",
    "metaDesc": "Plan a DMARC enforcement change around legitimate senders, external message tests and a documented recovery procedure.",
    "date": "2026-10-14",
    "readMin": 2,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "If the scan finds p=none, the next step is to review legitimate mail before tightening the policy. Ask the mail administrator and DNS owner to work together; the person using Outlook may not know who hosts the mail or DNS.",
    "lead": [],
    "sections": [
      {
        "h": "Before changing a monitoring-only DMARC policy",
        "ps": [
          {
            "list": [
              "Save the current DMARC record and its TTL, the time DNS resolvers may cache it. Identify who can restore that record and who will monitor delivery.",
              "Check the sender inventory against billing, website forms, appointment reminders, forwarding and infrequent notices. Record each service’s visible From domain and business owner.",
              "Have each service send an approved test to an external recipient. Inspect the receiver’s results for a passing, aligned SPF or DKIM result. Resolve legitimate failures before enforcement.",
              "Agree a staffed change window, the intended policy and a stop condition, such as an approved invoicing route failing. Use the mail provider’s current deployment instructions rather than copying another organization’s record.",
              "After the approved change, verify published DNS, repeat the message tests and review delivery reports. If legitimate delivery breaks, have the authorized administrator restore the captured configuration while investigating. Cached DNS can delay the effect of restoration."
            ],
            "ordered": true
          },
          {
            "text": "Microsoft’s deployment guidance covers its mail environment. Google Workspace’s guidance directs administrators to configure DMARC at the DNS host. With cPanel or another hosted service, identify the actual mail and authoritative DNS providers before choosing their instructions. Changing policy solely to improve a scan score can disrupt business mail.",
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
          "caption": "Annotated excerpt of Google Workspace public documentation, captured October 14, 2026. Documentation example, not an account screenshot. Source: Google Workspace DMARC setup documentation. CC BY 4.0; Helm annotation added."
        }
      }
    ],
    "takeaway": "Resolve legitimate authentication failures and test business mail before approving a stricter DMARC policy.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "fix-dmarc-reporting",
    "title": "Set up and verify DMARC aggregate reporting",
    "metaDesc": "Choose a monitored DMARC reporting destination, verify external authorization where required and confirm report receipt.",
    "date": "2026-10-14",
    "readMin": 2,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A missing rua address means this record does not request aggregate reports at that address. It does not establish that nobody monitors mail through another system. Ask who owns reporting and whether the destination is approved for the information it receives.",
    "lead": [],
    "sections": [
      {
        "h": "Set up a monitored aggregate-reporting destination",
        "ps": [
          {
            "list": [
              "Choose a dedicated mailbox or reporting service, agree who reviews it and confirm its handling and retention of report data. Aggregate reports can include sending infrastructure and authentication information.",
              "Capture the existing DMARC record. Update its reporting destination in that record; do not publish a second competing DMARC record or change enforcement as an incidental step.",
              {
                "text": "If the destination belongs to another domain, have the reporting provider confirm the external-destination authorization described by the aggregate-reporting standard. A mailbox address alone may be insufficient.",
                "links": [
                  {
                    "phrase": "aggregate-reporting standard",
                    "to": "https://datatracker.ietf.org/doc/html/rfc9990"
                  }
                ]
              },
              "Verify the published record and applicable destination authorization. Then check receipt from participating receivers as mail is sent. Report timing and participation vary; an empty inbox immediately after setup is inconclusive.",
              "Assign unexplained sources for review. If the destination is wrong or the arrangement must end, have the DNS owner restore the prior destination and verify the published change. Follow the reporting service’s process for information it already received."
            ],
            "ordered": true
          }
        ]
      }
    ],
    "takeaway": "Verify the reporting destination and its owner separately from the decision to enforce DMARC.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "verify-dkim-signing",
    "title": "Verify DKIM signing when a public scan finds no key",
    "metaDesc": "Check the actual DKIM selector, provider activation and receiver-side message results when a public scan finds no key.",
    "date": "2026-10-14",
    "readMin": 2,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A “no DKIM key found” result may mean the public scanner did not query the selector your provider uses. Ask the mail administrator to verify the configured selector and an actual test message before treating it as an absent control.",
    "lead": [],
    "sections": [
      {
        "h": "Verify DKIM with a message, not a guessed selector",
        "ps": [
          "A public scanner can look for selected DKIM names and still miss the selector your provider uses. Finding a public key also does not establish that the platform signs outgoing mail. Ask the mail administrator for the configured selector and a test message’s results.",
          {
            "text": "Google Workspace’s DKIM instructions separate publishing the public record from starting authentication in the Admin console. Use the values generated for the actual domain, then send a test and inspect its receiver-side DKIM result and signing domain. The private key must remain private.",
            "links": [
              {
                "phrase": "Google Workspace’s DKIM instructions",
                "to": "https://knowledge.workspace.google.com/admin/security/set-up-dkim"
              }
            ]
          },
          "For Microsoft 365 or a third-party sender, follow that product’s current domain-specific setup and activation instructions. Check every relevant sending route and DMARC alignment. Preserve the old signing configuration and use the provider’s supported rotation or recovery procedure if legitimate signing fails; removing a published key prematurely can affect messages still in transit."
        ],
        "figure": {
          "src": "/guides/official-dkim-annotated.png",
          "alt": "Google Workspace documentation highlights starting DKIM authentication after publishing the public record.",
          "caption": "Annotated excerpt of Google Workspace public documentation, captured October 14, 2026. Documentation example, not an account screenshot. Source: Google Workspace DKIM setup documentation. CC BY 4.0; Helm annotation added."
        }
      },
      {
        "h": "Before changing the signing setup",
        "ps": [
          "Name the sending-platform administrator and DNS owner. Capture the existing selector and public-record configuration. Follow the provider’s domain-specific instructions; stop if the sending service or required access cannot be confirmed. Test important sending routes with external receivers after an approved change. A public key without a passing message result is incomplete evidence. Keep the previous configuration and the provider’s supported rotation or recovery procedure available."
        ]
      }
    ],
    "takeaway": "Confirm the configured selector and a passing, aligned message result; a public key alone does not prove signing.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
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
    "intro": "A softfail finding is a reason to check the sending arrangement with your mail administrator. Changing ~all to -all without checking legitimate senders can affect mail the business needs. The public record cannot tell you whether every billing tool or website form is configured correctly.",
    "lead": [],
    "sections": [
      {
        "h": "Confirm the domain and the administrator",
        "ps": [
          {
            "text": "Ask the administrator which domain appears in the SMTP envelope sender for each sending service. It can differ from the From address a recipient sees. SPF evaluates that envelope domain, while DMARC also checks alignment with the visible domain. The DMARC guide explains that relationship.",
            "links": [
              {
                "phrase": "DMARC guide",
                "to": "/resources/what-is-dmarc/"
              }
            ]
          },
          "Identify the authoritative DNS host, the mailbox platform and outside sending services separately. Microsoft 365, Google Workspace and a cPanel host can require different sender values. A desktop mail application does not identify the hosting provider."
        ]
      },
      {
        "h": "Read the finding as an observation",
        "ps": [
          {
            "text": "Under the SPF standard, ~all returns softfail when evaluation reaches it; -all returns fail. Receivers decide how to handle the message alongside other checks. Neither suffix proves inbox delivery, rejection or protection from all impersonation.",
            "links": [
              {
                "phrase": "SPF standard",
                "to": "https://datatracker.ietf.org/doc/html/rfc7208"
              }
            ]
          },
          "A lookup timeout is inconclusive. A missing record, multiple SPF records and an evaluation exceeding the DNS lookup limit require different investigations. The limit applies to DNS-querying terms encountered during evaluation, including nested mechanisms; counting visible includes is not a complete test."
        ]
      },
      {
        "h": "Decide whether the existing policy should change",
        "ps": [
          {
            "list": [
              "Save the current record, TTL and provider configuration. Name the DNS administrator and the person who can restore the original.",
              "Compare the authorized sources with the actual sending inventory. Include occasional statements, website forms and relays that a short reporting period might miss.",
              "Ask why the current provider uses softfail and whether its supported configuration calls for a different policy. Check actual external message results and DMARC alignment before deciding.",
              {
                "text": "Stop if the record is missing, duplicated or invalid. Resolve that separate problem with the SPF record repair guide before evaluating a suffix change.",
                "links": [
                  {
                    "phrase": "SPF record repair guide",
                    "to": "/resources/fix-spf-record/"
                  }
                ]
              },
              "Agree the intended update and a staffed window. If a necessary sender cannot be identified or tested, keep the decision open rather than approving a stronger-looking record."
            ],
            "ordered": true
          },
          {
            "text": "Microsoft’s SPF setup guide distinguishes Microsoft-only mail from arrangements with additional senders. Its simple record should not replace a mixed environment’s policy without review.",
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
        "h": "Test delivery and retain a recovery path",
        "ps": [
          "After the authorized update, verify the published DNS record and send approved tests through each business-critical route to external recipients. Inspect their authentication results and DMARC alignment as well as arrival. Forwarding can change the SPF outcome, so include important forwarding paths in the review.",
          "If approved mail begins failing, have the administrator restore the captured record, confirm publication and investigate the sending path. Cached DNS means restoration may take time to reach receivers. Keep delivery failures visible until the affected route is tested again."
        ]
      },
      {
        "h": "Give the owner a useful completion record",
        "ps": [
          "Record the domain, sending services checked, test date, receiver results and remaining exceptions. Helm’s public scan can check published configuration; it cannot inspect the firm’s complete sender inventory. Existing IT and the relevant vendors own configuration changes under their agreed scope."
        ]
      }
    ],
    "takeaway": "A softfail suffix needs a sender and policy review before a change; stronger-looking DNS is not delivery evidence.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "fix-spf-record",
    "title": "Fix a missing, duplicate or invalid SPF record",
    "metaDesc": "Investigate a missing, duplicate or invalid SPF record with the mail administrator. Preserve senders and validate the repair.",
    "date": "2026-10-14",
    "readMin": 2,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A missing or invalid SPF policy needs a sender inventory before DNS is repaired. Ask the mail administrator to distinguish no record, duplicate records, syntax errors and an evaluation exceeding the DNS lookup limit. A timeout remains inconclusive. The record must match the actual envelope-sender domain.",
    "lead": [],
    "sections": [
      {
        "h": "Prepare one supported record",
        "ps": [
          {
            "list": [
              "Save the current record, TTL and provider configuration. Name the DNS administrator, the business approval owner and the person who can restore the original.",
              "Inventory every legitimate route, including occasional statements, forms, marketing tools and relays. Obtain each vendor’s supported instructions for the actual product and domain.",
              "Investigate missing or duplicate records before composing one valid SPF policy. Do not publish another v=spf1 record alongside the existing one. Do not authorize an unfamiliar sender merely because it appears in a report.",
              "Have the administrator validate syntax and evaluate representative sending paths, including nested DNS lookups. Avoid indiscriminate flattening: a snapshot of provider addresses needs its own maintenance arrangement.",
              "Agree the approved update and a staffed window. Stop if a necessary sender cannot be identified or its documented configuration cannot be verified."
            ],
            "ordered": true
          },
          {
            "text": "Microsoft’s SPF setup guide distinguishes Microsoft-only mail from arrangements with additional senders. Its simple record should not replace a mixed environment’s policy without review.",
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
        "h": "Test delivery and retain a recovery path",
        "ps": [
          "After the authorized update, verify the published DNS record and send approved tests through each business-critical route to external recipients. Inspect their authentication results and DMARC alignment as well as arrival. Forwarding can change the SPF outcome, so include important forwarding paths in the review.",
          "If approved mail begins failing, have the administrator restore the captured record, confirm publication and investigate the sending path. Cached DNS means restoration may take time to reach receivers. Keep delivery failures visible until the affected route is tested again."
        ]
      },
      {
        "h": "Give the owner a useful completion record",
        "ps": [
          "Record the domain, sending services checked, test date, receiver results and remaining exceptions. Helm’s public scan can check published configuration; it cannot inspect the firm’s complete sender inventory. Existing IT and the relevant vendors own configuration changes under their agreed scope.",
          {
            "text": "The SPF softfail review covers a valid policy’s choice of failure assertion separately. RFC 7208 defines SPF evaluation and its limits.",
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
      }
    ],
    "takeaway": "Prepare one supported SPF record from the real sender inventory, then validate message results and recovery.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
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
    "intro": "DNSSEC needs coordination between the provider that signs your DNS zone and the registrar that publishes its delegation. An unsigned-domain finding should start that conversation. A DNSKEY observed by a public scan does not establish that the full chain validates.",
    "lead": [],
    "sections": [
      {
        "h": "Establish the current arrangement",
        "ps": [
          "Ask retained IT to identify the authoritative DNS provider, registrar, zone being checked and people with access to both accounts. Record whether DNSSEC is already enabled and whether a provider or nameserver move is planned. Stop if the owners or existing delegation cannot be confirmed.",
          {
            "text": "The DNSSEC introduction describes origin authentication and integrity for DNS data. It does not encrypt website traffic or assess a business’s internal systems. A timeout or a query at the wrong name needs investigation before the firm treats it as missing protection.",
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
        "h": "Use the sequence for the actual providers",
        "ps": [
          {
            "text": "For a primary zone hosted by Cloudflare, its current DNSSEC instructions begin with enabling zone signing and using the generated DS information at the registrar. Cloudflare Registrar can handle DS publication automatically. Other registrars require their own supported steps.",
            "links": [
              {
                "phrase": "current DNSSEC instructions",
                "to": "https://developers.cloudflare.com/dns/dnssec/"
              }
            ]
          },
          "Use values supplied for your zone; never copy a digest, key tag or algorithm from a screenshot. Confirm registrar and top-level-domain support before proceeding. Secondary DNS, delegated subdomains and provider migrations need their specific procedures rather than this primary-zone example."
        ]
      },
      {
        "h": "Prepare validation and recovery first",
        "ps": [
          {
            "list": [
              "Capture the current nameservers, signing state and parent DS records. Keep the provider’s recovery instructions with the change record.",
              "Agree who approves the change, who administers each account and which business services will be checked afterwards.",
              "Follow the supported enablement sequence. Have IT validate the delegation and signatures through validating DNS checks, then confirm ordinary website and mail-related name resolution.",
              "Treat a validation failure or new resolution failure as a stop condition. Escalate to the DNS provider and registrar with the observed results; do not keep toggling signing to improve a score.",
              "Record the validated result, date and owner. A screenshot of an enabled switch is incomplete evidence."
            ],
            "ordered": true
          }
        ]
      },
      {
        "h": "Removing signing needs an ordered rollback",
        "ps": [
          "Cloudflare’s rollback instructions remove the parent DS record first and keep signing enabled until its parent-zone TTL expires. Disabling signing too soon can leave validating resolvers unable to use the domain. Follow the actual providers’ recovery sequence and verify the parent state rather than assuming a fixed waiting period.",
          "If a provider cannot support the required arrangement, document that limitation and scope any migration separately. Helm’s public scan is a limited configuration check; DNS administration and recovery remain with the authorized technical owners."
        ]
      }
    ],
    "takeaway": "Coordinate the DNS host and registrar, and validate the delegation before calling DNSSEC setup complete.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
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
    "intro": "A missing MTA-STS marker does not prove that a message travelled unencrypted. A missing TLS-RPT marker does not establish that the firm has no delivery monitoring. Ask the mail administrator what transport protections and reporting the actual service supports before changing DNS.",
    "lead": [],
    "sections": [
      {
        "h": "Confirm the mail destinations and hosting access",
        "ps": [
          "List the real MX destinations with the mail provider, including gateways and planned changes. Confirm their TLS behavior and certificates. Identify who manages DNS, the HTTPS policy host and delivery investigations. Stop if the provider cannot confirm the destinations or the required hosting arrangement.",
          {
            "text": "Microsoft’s MTA-STS guidance covers its Exchange Online arrangement. Another mailbox or gateway provider may need different MX values. Do not infer them from the mail application or paste a wildcard copied from another firm.",
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
        "h": "Publish the policy in a testing stage",
        "ps": [
          {
            "text": "The MTA-STS standard separates the _mta-sts DNS marker from the HTTPS document at mta-sts.example.com/.well-known/mta-sts.txt. That example is a reserved illustration, not a host for your firm. The document defines the mode, permitted MX patterns and cache lifetime.",
            "links": [
              {
                "phrase": "MTA-STS standard",
                "to": "https://datatracker.ietf.org/doc/html/rfc8461"
              }
            ]
          },
          {
            "list": [
              "Save the current DNS marker and hosted policy, including any existing cache lifetime. Agree the approved policy and recovery owner.",
              "Use the actual provider’s supported setup to publish a testing policy with verified MX coverage and a valid HTTPS host certificate.",
              "Verify DNS and retrieve the policy from outside the hosting environment. Have IT check complete syntax, mode, certificate and MX matching; finding the version marker alone is insufficient.",
              "Review delivery evidence and available reports before considering enforcement. In enforcement mode, a policy mismatch can prevent participating senders from delivering mail.",
              "Stop if a legitimate destination or delivery path remains unexplained. Record unresolved paths rather than treating a successful web fetch as a completed mail test."
            ],
            "ordered": true
          }
        ]
      },
      {
        "h": "Plan for cached policy during recovery",
        "ps": [
          "Deleting the DNS marker does not instantly withdraw a policy a sender has cached. Have the provider define the recovery or removal sequence around the existing policy’s lifetime, reachable HTTPS document and updated policy identifier. Verify the changed policy and affected delivery paths while monitoring reports.",
          "For a reporting-only problem, restore or correct the authorized destination without casually changing enforcement. Keep the old configuration and record any information already sent to a third-party service. Helm’s public scan cannot confirm every sender’s enforcement or the firm’s receipt and review of reports."
        ]
      }
    ],
    "takeaway": "Check the actual MX coverage and delivery evidence before enforcement, and plan recovery around cached policy.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
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
    "intro": "TLS reporting can help the mail administrator investigate delivery failures reported by participating senders. It does not itself enforce encryption. Confirm the reporting owner and destination before publishing a record.",
    "lead": [],
    "sections": [
      {
        "h": "Add a monitored TLS reporting destination",
        "ps": [
          {
            "text": "TLS-RPT lets participating sending systems report transport results. It provides visibility and does not itself enforce encryption. DMARC aggregate reports concern authentication, so their destination and review process are a separate decision.",
            "links": [
              {
                "phrase": "TLS-RPT",
                "to": "https://datatracker.ietf.org/doc/html/rfc8460"
              }
            ]
          },
          "Choose an approved mailbox or reporting service and name the person who reviews transport failures. Confirm what delivery information the service receives and its access and retention arrangements. The administrator should capture the prior _smtp._tls record, publish the supported v=TLSRPTv1 configuration using the real destination and verify its syntax and routing.",
          "Then observe report receipt as supported senders exchange mail. A report may not arrive immediately, and not every sender participates. An empty report inbox alone does not prove that setup failed. Assign reported certificate, policy and delivery problems to the mail or hosting owner."
        ]
      },
      {
        "h": "Validate the change and retain the old destination",
        "ps": [
          "Capture the prior _smtp._tls record and follow the actual DNS and reporting providers’ supported setup. Have the administrator verify syntax and destination handling. If the arrangement is wrong, restore or correct the captured reporting destination and verify publication. Do not change MTA-STS enforcement to solve a reporting-only issue.",
          {
            "text": "Review reporting service access, retention and handling of information already received. Keep failures assigned to an owner and note that no immediate reports is inconclusive. See the MTA-STS setup guide for the separate transport-policy change.",
            "links": [
              {
                "phrase": "the MTA-STS setup guide",
                "to": "/resources/set-up-mta-sts/"
              }
            ]
          }
        ]
      }
    ],
    "takeaway": "TLS reporting provides visibility; assign its destination and review process without treating it as encryption enforcement.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  },
  {
    "slug": "fix-mx-mail-routing",
    "title": "Investigate and fix MX mail-routing records",
    "metaDesc": "Confirm whether the domain should receive mail, compare MX records with the provider and validate approved routing changes.",
    "date": "2026-10-14",
    "readMin": 2,
    "lane": "All industries",
    "laneTo": "/",
    "intro": "A scanner’s inability to contact a mail server is not enough to diagnose a mail outage. Ask the administrator whether the domain is intended to receive mail and which service handles it. A retired domain, sending-only domain and active business mailbox domain need different decisions.",
    "lead": [],
    "sections": [
      {
        "h": "Match DNS to the intended service",
        "ps": [
          {
            "text": "SMTP’s routing standard explains how sending systems locate mail destinations. Have IT compare the published MX records with the provider’s current values for the actual domain and product. Distinguish a temporary lookup failure from an absent record or a deliberate no-mail arrangement.",
            "links": [
              {
                "phrase": "SMTP’s routing standard",
                "to": "https://datatracker.ietf.org/doc/html/rfc5321"
              }
            ]
          },
          "Do not replace MX records with an SPF include, a website address or values for a different tenant. An owner using Outlook could have Microsoft 365, a separate gateway or another host. cPanel and Google Workspace likewise require the actual hosting arrangement to be identified."
        ]
      },
      {
        "h": "Review a routing change with the provider",
        "ps": [
          {
            "list": [
              "Save the current MX records, priorities and TTLs. Identify the DNS owner, mail provider and business person approving the change.",
              "Confirm that the intended receiving service accepts this domain and that its mailboxes and routing are ready. Include a filtering gateway or backup destination if the provider requires one.",
              "Agree the exact supported values, validation steps and rollback trigger before changing DNS. Stop if mailbox readiness or domain ownership cannot be established.",
              "After an authorized change, verify published records and send approved external tests to representative mailboxes. Check delivery logs, bounces and replies with the provider.",
              "If business mail fails, have the authorized owner restore the captured routing while investigating. Cached records can affect the transition; a DNS save does not prove completed delivery."
            ],
            "ordered": true
          }
        ]
      }
    ],
    "takeaway": "Confirm the intended receiving service and mailbox readiness before changing routing records.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
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
    "intro": "An unavailable SMTP probe calls for verification with the mail provider. It does not establish that the server is broken or that mail travelled unencrypted. This check does not authorize changes to the receiving service.",
    "lead": [],
    "sections": [
      {
        "h": "Keep unavailable SMTP checks inconclusive",
        "ps": [
          "Port 25 can be blocked from a scanner’s network, and a server may reject a probe for reasons that differ from normal mail delivery. The observed scanner checks one MX host and treats this probe as informational. An unavailable probe should not become a claim that mail is unencrypted or the server is broken.",
          {
            "text": "Ask the provider for a controlled check of the affected receiving path, its TLS behavior and actual logs. Confirm the scope of that check instead of extrapolating from one host to every delivery route. The mail-transport guide explains policy and reporting separately.",
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
        "h": "Close the investigation with evidence",
        "ps": [
          "Record whether the domain is meant to receive mail, the provider, the records checked and the test results. Keep unknowns assigned to an owner. DNS and mail changes require the relevant administrator’s approved procedure; this written guide does not perform them or promise delivery recovery."
        ]
      },
      {
        "h": "Recheck before attempting a fix",
        "ps": [
          "Ask IT to identify the probed hostname, scan time and intended receiving service. Compare the observation with the provider’s delivery logs and a controlled external mail test. Stop if the actual receiving path is unclear. If a real configuration problem is confirmed, let the responsible provider define the change and recovery procedure. Do not weaken a firewall or alter security settings solely to make a scanner connect."
        ]
      }
    ],
    "takeaway": "An unavailable probe needs confirmation with the mail provider before it becomes a configuration change.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
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
    "intro": "A failed public HTTPS connection can have several causes, including the scanner’s route to the site. Ask the website provider to check the hostname, time and observed error before concluding that the site is unavailable to visitors. Check the main hostname and any important alternate or redirecting host separately.",
    "lead": [],
    "sections": [
      {
        "h": "Investigate HTTPS and certificate findings with the website owner",
        "ps": [
          {
            "text": "TLS protects a connection and authenticates its endpoint. A valid certificate does not establish that an application is free of vulnerabilities. Its hostname coverage and expiry also need to match the service visitors actually use.",
            "links": [
              {
                "phrase": "TLS protects a connection and authenticates its endpoint",
                "to": "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security"
              }
            ]
          },
          {
            "list": [
              "Capture the finding and current hosting, certificate and redirect configuration. Name the hosting administrator and the person who approves a change.",
              "Have the provider verify DNS, certificate coverage, validity and chain, plus HTTPS behavior for the affected hostname. Include a proxy or content-delivery network if it terminates the connection.",
              "Use the actual host’s supported renewal or installation process. Stop if access, hostname ownership or the configuration serving visitors cannot be established.",
              "Test the changed site from outside the hosting environment, including redirects and representative pages. Check for browser warnings and insecure resources rather than relying only on a dashboard’s status.",
              "If a change interrupts access, follow the host’s recovery procedure using the captured configuration, then repeat the checks. Record unresolved errors with an owner."
            ],
            "ordered": true
          },
          "Certificate management is not established as an included Helm service by a public scan. Retained IT and the website or hosting provider handle agreed administrative work; any further Helm assistance needs its own defined scope."
        ]
      }
    ],
    "takeaway": "Have the website provider verify the hostname and connection before changing certificate or hosting configuration.",
    "readingLayout": true,
    "hideVisual": true,
    "organizationByline": true,
    "consultation": {
      "title": "Review this finding with Helm.",
      "sub": "Describe the finding and the provider responsible for the affected service. Any Helm assistance needs an agreed scope; retained IT and the relevant vendors own administrative changes.",
      "label": "Discuss a configuration finding",
      "to": "/contact/"
    }
  }
];
