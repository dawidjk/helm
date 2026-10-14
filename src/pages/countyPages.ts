import type {Paragraph} from '../lib/richText';

export type CountyPageCopy = {county: string; slug: string; title: string; description: string; h1: string; intro: string; cta: string; blocks: ({kind: 'heading'; level: number; text: string} | {kind: 'paragraph'; paragraph: Paragraph})[]; schema: object; sourceDraftSha256: string};

export const countyPages: CountyPageCopy[] = [
  {
    "county": "Monmouth",
    "slug": "monmouth-county-nj",
    "title": "Cybersecurity Services in Monmouth County, NJ | Helm",
    "description": "Monmouth County cybersecurity with on-site visits across New Jersey. Compare Core and Command pricing, workstation coverage and payment-verification needs.",
    "h1": "Cybersecurity services for Monmouth County businesses",
    "intro": "Helm Security provides managed cybersecurity for Monmouth County businesses that already have an IT provider or internal IT team. Core protects covered email, eligible workstations and supported identities. Command adds ongoing security leadership and evidence upkeep. On-site visits are available across New Jersey.",
    "cta": "Discuss your security needs",
    "blocks": [
      {
        "kind": "heading",
        "level": 2,
        "text": "Protect the work around a confidential matter"
      },
      {
        "kind": "paragraph",
        "paragraph": "For a law or accounting firm, a client file can move between email, a document portal and a laptop used away from the office. A payment request may arrive in the same conversation. Each part needs a clear owner: who controls access, who checks a changed bank instruction and who responds when a covered device shows suspicious activity."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Consider a hypothetical Red Bank firm preparing a client payment. A message in an existing thread asks staff to use a different bank account. The earlier conversation does not establish that the change is legitimate. Staff should pause the payment and confirm the request using a number already held in the matter or engagement record. The wire-fraud prevention guide explains how to build that check into the firm's procedure.",
          "links": [
            {
              "phrase": "wire-fraud prevention guide",
              "to": "/resources/wire-fraud-prevention-law-firms/"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Email protection can help identify suspicious messages, and employee learning helps people recognize requests that need checking. The person authorized to release money still owns that decision. Helm's law-firm and accounting-firm pages explain the issues specific to each practice.",
          "links": [
            {
              "phrase": "law-firm",
              "to": "/law-firms/"
            },
            {
              "phrase": "accounting-firm",
              "to": "/accounting-firms/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Adding an office changes the security scope"
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Monmouth County's Grow Monmouth Toolkit offers demographic information for businesses considering a location. If your firm is planning another office, the security review should cover how people at that location will access the firm's systems.",
          "links": [
            {
              "phrase": "Grow Monmouth Toolkit",
              "to": "https://www.visitmonmouth.com/page.aspx?ID=129"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": "The review needs to include computers that can open client information and accounts shared with the existing office. For example, if a partner works in Middletown while staff handle files in Freehold, their devices may reach the same email and documents. Include spare laptops and personally owned computers in the inventory, even when they sit outside the main office."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Core includes up to two eligible Windows or Mac workstations per covered user. Additional eligible workstations cost $12 each per month. Phones, tablets, servers, network equipment and specialized systems need separate written scope. The device checklist can help a legal practice prepare its inventory before a service review.",
          "links": [
            {
              "phrase": "device checklist",
              "to": "/resources/law-firm-device-security-checklist/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Choose protection or ongoing program ownership"
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Helm Core is designed for organizations with 20 to 75 people. It combines managed email protection, device detection and response, supported identity protection, cloud productivity backup, awareness learning and simulations, digital risk protection, and an automated monthly security report. It costs $125 per covered user per month, with a $2,500 monthly minimum.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Helm Command is designed for organizations with 75 to 250 people that need someone to keep the security program moving. It includes the covered Core stack, a maintained risk register and 12-month roadmap, evidence upkeep, questionnaire and insurance responses within the agreed volume and turnaround, quarterly leadership reviews, an annual tabletop and coordination with the named IT owner. Pricing starts at $10,000 per month; the final quote depends on covered users and agreed scope.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "If a client questionnaire has prompted the inquiry, discuss who will keep its supporting records current after submission. That ongoing responsibility can help you decide whether Command fits. The questionnaire guide explains what to gather; your organization reviews and owns the final answers.",
          "links": [
            {
              "phrase": "questionnaire guide",
              "to": "/resources/cyber-insurance-questionnaire/"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "The pricing page sets out term choices and other commercial details. Your existing IT provider keeps help desk, patching, administration, procurement and routine remediation. Specialist vendor teams provide continuous monitoring and containment within covered capabilities; Helm handles deployment, coordination and reporting. Your agreement sets Helm's operating window for human follow-up.",
          "links": [
            {
              "phrase": "pricing page",
              "to": "/pricing/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Questions from Monmouth County firms"
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Can one conversation cover offices in more than one town?"
      },
      {
        "kind": "paragraph",
        "paragraph": "Yes. Tell us where people work and which systems they share. We confirm the covered users, eligible devices, supported platforms and IT responsibilities before work starts. Helm can visit sites throughout New Jersey; include the work that needs a visit so we can confirm the arrangements in the written scope."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Can we start by checking our public domain?"
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "The free scan checks public email-domain and related web configuration without credentials or access to your internal systems. Its findings can help you decide what to discuss with Helm. An internal assessment needs its own agreed scope.",
          "links": [
            {
              "phrase": "free scan",
              "to": "/free-scan/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Talk through your firm's situation"
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Kelly Kluszczynski leads customer communication; Dawid Kluszczynski leads technical delivery. You can read about both on the About page.",
          "links": [
            {
              "phrase": "About page",
              "to": "/about/"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": "Tell us your town, approximate staff count, who handles IT and what prompted the inquiry. A Helm executive responds during business hours. Keep client documents and payment details out of the initial message."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Discuss your security needs or call (732) 943-0866.",
          "links": [
            {
              "phrase": "Discuss your security needs",
              "to": "/contact/"
            },
            {
              "phrase": "(732) 943-0866",
              "to": "tel:+17329430866"
            }
          ]
        }
      }
    ],
    "schema": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://helmsecured.com/service-areas/monmouth-county-nj/#webpage",
          "url": "https://helmsecured.com/service-areas/monmouth-county-nj/",
          "name": "Cybersecurity Services in Monmouth County, NJ | Helm",
          "description": "Monmouth County cybersecurity with on-site visits across New Jersey. Compare Core and Command pricing, workstation coverage and payment-verification needs.",
          "about": {
            "@id": "https://helmsecured.com/service-areas/monmouth-county-nj/#service"
          }
        },
        {
          "@type": "Service",
          "@id": "https://helmsecured.com/service-areas/monmouth-county-nj/#service",
          "name": "Managed cybersecurity for Monmouth County businesses",
          "serviceType": "Managed cybersecurity and security-program leadership",
          "provider": {
            "@id": "https://helmsecured.com/#organization"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Monmouth County, New Jersey"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Helm",
              "item": "https://helmsecured.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Service areas",
              "item": "https://helmsecured.com/service-areas/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Monmouth County",
              "item": "https://helmsecured.com/service-areas/monmouth-county-nj/"
            }
          ]
        }
      ]
    },
    "sourceDraftSha256": "a2dbf598dc20c2a68f0fd13340799837abc8d8639dcb5148e7723f41f783e96c"
  },
  {
    "county": "Middlesex",
    "slug": "middlesex-county-nj",
    "title": "Cybersecurity Services in Middlesex County, NJ | Helm",
    "description": "Cybersecurity for Middlesex County businesses with existing IT. Review workstation coverage and questionnaire evidence, with on-site visits across New Jersey.",
    "h1": "Cybersecurity services for Middlesex County businesses",
    "intro": "Helm Security provides managed cybersecurity for Middlesex County businesses alongside their existing IT provider. Core protects covered email, eligible workstations and supported identities. Command adds ongoing security-program ownership and evidence upkeep. On-site visits are available across New Jersey.",
    "cta": "Talk through your requirements",
    "blocks": [
      {
        "kind": "heading",
        "level": 2,
        "text": "Start with the systems the customer is asking about"
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Middlesex County identifies life sciences, food innovation and autonomous technology as sectors it is investing in through its Destination 2040 economic vision. If your company supplies one of those sectors, start with the customer's security request. It may concern systems that several teams manage, so check which systems and information it covers before deciding what work to buy.",
          "links": [
            {
              "phrase": "Destination 2040 economic vision",
              "to": "https://www.middlesexcountynj.gov/discover-our-community/county-at-a-glance"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": "For a hypothetical supplier in Edison, office email and employee laptops might share information with a production system maintained by another vendor. A questionnaire asking whether all devices are monitored needs an answer that accounts for both. Monitoring the office computers would not establish that the production system is covered."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Work out which business entity and locations the question covers, who operates the systems involved and what records support the answer. A manufacturer with a defense-contract requirement can use Helm's manufacturing page to begin a separate readiness discussion based on that contract.",
          "links": [
            {
              "phrase": "manufacturing page",
              "to": "/manufacturing/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Keep specialized systems visible in the scope"
      },
      {
        "kind": "paragraph",
        "paragraph": "Core's standard device coverage includes up to two eligible Windows or Mac workstations per covered user. Additional eligible workstations cost $12 each per month. Servers, phones, tablets, network equipment and specialized systems require separate written scope."
      },
      {
        "kind": "paragraph",
        "paragraph": "For the hypothetical supplier, that means listing employee computers separately from production equipment and identifying who protects each system. A device running Windows still needs an eligibility review; its operating system alone does not put it into the standard service."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Document the systems outside the agreed coverage and the provider responsible for them. That helps the business avoid signing a broad answer based on a narrower deployment. The cyber-insurance questionnaire guide explains how to connect representations to current evidence.",
          "links": [
            {
              "phrase": "cyber-insurance questionnaire guide",
              "to": "/resources/cyber-insurance-questionnaire/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Core protection and Command leadership"
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Helm Core gives organizations with 20 to 75 people a defined managed protection stack: email protection, device detection and response, supported identity protection, cloud productivity backup, awareness learning and simulations, digital risk protection, and an automated monthly report. The price is $125 per covered user per month, with a $2,500 monthly minimum.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Choose Helm Command when an organization in the 75 to 250 person range needs continuing security-program ownership alongside the covered Core stack. Helm maintains the risk register, 12-month roadmap and evidence, prepares questionnaire and insurance responses within the agreed volume and turnaround, leads quarterly leadership reviews, and coordinates assigned work with the named IT owner. An annual tabletop is included. Command starts at $10,000 per month; covered users and agreed scope determine the final quote.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": "Command keeps assigned security actions in the maintained plan so leaders and the IT owner can follow their progress between reviews. Your organization approves final questionnaire answers and decides which remediation to authorize. Help desk, patching, administration, procurement and routine remediation stay with your existing IT team unless a separate written scope says otherwise."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Specialist vendor security operations teams provide the continuous monitoring and containment behind covered capabilities. Helm manages deployment, coordination and reporting, with human follow-up during the operating window in your agreement. See pricing and term details before choosing an engagement.",
          "links": [
            {
              "phrase": "pricing and term details",
              "to": "/pricing/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Questions about a Middlesex County engagement"
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Does a customer requirement mean we need Command?"
      },
      {
        "kind": "paragraph",
        "paragraph": "Core may suit a standard supported environment where the existing team already owns the program and evidence. Command adds the maintained plan and quarterly leadership reviews. Tell us what the customer has asked, the deadline and who owns IT today; we can discuss the appropriate scope for your organization's size and needs."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Can the service cover more than one location?"
      },
      {
        "kind": "paragraph",
        "paragraph": "Yes. List the locations and identify which users, devices and platforms they share. The agreement defines coverage and responsibilities. Helm can visit sites throughout New Jersey; include the work that needs a visit so we can confirm the arrangements in the written scope."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Can a public scan answer the questionnaire for us?"
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "The free scan reviews public email-domain and related web configuration. It has no credentials or access to internal systems. Questions about internal access, device deployment or operating procedures need other evidence.",
          "links": [
            {
              "phrase": "free scan",
              "to": "/free-scan/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Bring the requirement to the first conversation"
      },
      {
        "kind": "paragraph",
        "paragraph": "Describe the business, its locations, approximate staff count and systems involved. Summarize the requirement without attaching confidential customer material."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Talk through your requirements or call (732) 943-0866. A Helm executive responds during business hours. The Trust page explains the technology providers and current service boundaries.",
          "links": [
            {
              "phrase": "Talk through your requirements",
              "to": "/contact/"
            },
            {
              "phrase": "(732) 943-0866",
              "to": "tel:+17329430866"
            },
            {
              "phrase": "Trust page",
              "to": "/trust/"
            }
          ]
        }
      }
    ],
    "schema": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://helmsecured.com/service-areas/middlesex-county-nj/#webpage",
          "url": "https://helmsecured.com/service-areas/middlesex-county-nj/",
          "name": "Cybersecurity Services in Middlesex County, NJ | Helm",
          "description": "Cybersecurity for Middlesex County businesses with existing IT. Review workstation coverage and questionnaire evidence, with on-site visits across New Jersey.",
          "about": {
            "@id": "https://helmsecured.com/service-areas/middlesex-county-nj/#service"
          }
        },
        {
          "@type": "Service",
          "@id": "https://helmsecured.com/service-areas/middlesex-county-nj/#service",
          "name": "Managed cybersecurity for Middlesex County businesses",
          "serviceType": "Managed cybersecurity and security-program leadership",
          "provider": {
            "@id": "https://helmsecured.com/#organization"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Middlesex County, New Jersey"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Helm",
              "item": "https://helmsecured.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Service areas",
              "item": "https://helmsecured.com/service-areas/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Middlesex County",
              "item": "https://helmsecured.com/service-areas/middlesex-county-nj/"
            }
          ]
        }
      ]
    },
    "sourceDraftSha256": "ae13d7b6b3e406e072baf6093c9869421ac8743acd14316c8193311244990b60"
  },
  {
    "county": "Ocean",
    "slug": "ocean-county-nj",
    "title": "Cybersecurity Services in Ocean County, NJ | Helm",
    "description": "Ocean County cybersecurity alongside your IT team, with on-site visits across New Jersey. Compare pricing, staff access needs and supported cloud backup.",
    "h1": "Cybersecurity services for Ocean County businesses",
    "intro": "Helm Security provides managed cybersecurity for Ocean County businesses alongside their existing IT team. Core protects covered email, eligible workstations and supported identities. Command adds an owner for the continuing security plan and evidence. On-site visits are available across New Jersey.",
    "cta": "Discuss your coverage",
    "blocks": [
      {
        "kind": "heading",
        "level": 2,
        "text": "Plan for access to change with the season"
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Ocean County's 2022 summer-employment announcement described boardwalk employers preparing for seasonal hiring. If your business adds temporary office staff, decide which accounts and documents each person needs before their first day. Keep those accounts and computers in the security inventory as people join, change roles or leave.",
          "links": [
            {
              "phrase": "2022 summer-employment announcement",
              "to": "https://www.co.ocean.nj.us/frmPressReleaseDetails.aspx?Name=10205"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": "Agree with your IT provider who creates each account, which computer the person will use and when access ends. Keep a record of the person responsible for checking the departure."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "For a hypothetical business in Point Pleasant Beach, a seasonal employee might leave while their account still reaches a shared mailbox. Closing that access is an IT task that needs an owner. The offboarding checklist covers accounts, shared access and devices that can be missed when someone leaves.",
          "links": [
            {
              "phrase": "offboarding checklist",
              "to": "/resources/employee-offboarding-checklist/"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "The same review can help a year-round firm when staff roles change. Helm's accounting-firm page discusses seasonal access alongside tax information. The medical-practice page addresses patient information across the systems a practice uses.",
          "links": [
            {
              "phrase": "accounting-firm page",
              "to": "/accounting-firms/"
            },
            {
              "phrase": "medical-practice page",
              "to": "/medical-practices/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Know which work can continue after an interruption"
      },
      {
        "kind": "paragraph",
        "paragraph": "An office may depend on cloud email and documents while its billing, scheduling or other business application belongs to a separate provider. Restoring email can leave staff unable to use that application, so the recovery plan needs to account for both."
      },
      {
        "kind": "paragraph",
        "paragraph": "Core includes backup for supported Microsoft 365 or Google Workspace data. Confirm which data is covered and who handles recovery for systems outside that scope. Your IT provider and application vendors keep their assigned responsibilities. Broader disaster recovery and hands-on remediation need separate written scope."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "For a business with more than one location, list the applications each office needs to operate, the responsible provider and the approved way to contact them. The disaster-recovery guide explains how to connect those dependencies to a practical recovery plan. Command includes an annual tabletop to rehearse incident decisions, along with incident coordination within its agreed program scope. A technical restoration test needs a separate scope.",
          "links": [
            {
              "phrase": "disaster-recovery guide",
              "to": "/resources/disaster-recovery-small-business/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Match the service to the people and devices covered"
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Helm Core is designed for organizations with 20 to 75 people. It includes managed email protection, device detection and response, supported identity protection, cloud productivity backup, awareness learning and simulations, digital risk protection, and an automated monthly report. The price is $125 per covered user per month with a $2,500 monthly minimum.",
          "links": [
            {
              "phrase": "Helm Core",
              "to": "/helm-core/"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": "Standard coverage includes up to two eligible Windows or Mac workstations per covered user. Additional eligible workstations cost $12 each per month. Phones, tablets, servers, network equipment and specialized systems require separate written scope. Tell us about shared computers and temporary staff when we review the counts and coverage."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Helm Command includes the covered Core stack and continuing security-program ownership for organizations with 75 to 250 people. Helm maintains the risk register, 12-month roadmap and evidence, prepares questionnaire and insurance responses within the agreed volume and turnaround, leads quarterly leadership reviews, and coordinates with the named IT owner. Pricing starts at $10,000 per month; the final quote depends on covered users and agreed scope. Your organization reviews and owns the final questionnaire answers and remediation decisions.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/"
            }
          ]
        }
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Your existing IT provider keeps help desk, patching, administration, procurement and routine remediation. Specialist vendor teams provide continuous monitoring and containment within covered capabilities. Helm handles deployment, coordination and reporting; the agreement sets its operating window for human follow-up. The pricing page explains terms and other commercial details.",
          "links": [
            {
              "phrase": "pricing page",
              "to": "/pricing/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Questions about changing staff or locations"
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Can we reduce the bill when seasonal staff leave?"
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Tell us how the staff count changes and when. The service order needs to define how those changes affect coverage and billing. Compare the published minimum and term commitments with your staffing pattern before signing.",
          "links": [
            {
              "phrase": "published minimum and term commitments",
              "to": "/pricing/"
            }
          ]
        }
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Does Helm remove departing staff accounts?"
      },
      {
        "kind": "paragraph",
        "paragraph": "Your IT provider or internal team keeps routine account administration. Helm's agreed work can identify security actions and coordinate with that owner. The departure process should assign and verify access removal while preserving the records the business needs to retain."
      },
      {
        "kind": "heading",
        "level": 3,
        "text": "Can we discuss an office in southern Ocean County?"
      },
      {
        "kind": "paragraph",
        "paragraph": "Yes. On-site visits are available throughout New Jersey, including Stafford Township and Little Egg Harbor Township. Tell us the location and work involved so we can confirm the visit arrangements in the written scope."
      },
      {
        "kind": "heading",
        "level": 2,
        "text": "Describe the next change your business is preparing for"
      },
      {
        "kind": "paragraph",
        "paragraph": "Tell us about the staff change, additional location or security issue, along with your approximate staff count and current IT provider. Keep employee records and client information out of the initial message. A Helm executive responds during business hours."
      },
      {
        "kind": "paragraph",
        "paragraph": {
          "text": "Discuss your coverage or call (732) 943-0866. You can also run the free scan; it checks public email-domain and related web configuration without credentials or access to internal systems.",
          "links": [
            {
              "phrase": "Discuss your coverage",
              "to": "/contact/"
            },
            {
              "phrase": "(732) 943-0866",
              "to": "tel:+17329430866"
            },
            {
              "phrase": "run the free scan",
              "to": "/free-scan/"
            }
          ]
        }
      }
    ],
    "schema": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": "https://helmsecured.com/service-areas/ocean-county-nj/#webpage",
          "url": "https://helmsecured.com/service-areas/ocean-county-nj/",
          "name": "Cybersecurity Services in Ocean County, NJ | Helm",
          "description": "Ocean County cybersecurity alongside your IT team, with on-site visits across New Jersey. Compare pricing, staff access needs and supported cloud backup.",
          "about": {
            "@id": "https://helmsecured.com/service-areas/ocean-county-nj/#service"
          }
        },
        {
          "@type": "Service",
          "@id": "https://helmsecured.com/service-areas/ocean-county-nj/#service",
          "name": "Managed cybersecurity for Ocean County businesses",
          "serviceType": "Managed cybersecurity and security-program leadership",
          "provider": {
            "@id": "https://helmsecured.com/#organization"
          },
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": "Ocean County, New Jersey"
          }
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Helm",
              "item": "https://helmsecured.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Service areas",
              "item": "https://helmsecured.com/service-areas/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Ocean County",
              "item": "https://helmsecured.com/service-areas/ocean-county-nj/"
            }
          ]
        }
      ]
    },
    "sourceDraftSha256": "1d8b1a2db47432cdc10054ffa2c2434e983c95f8ffe56d06140843a2c6a4d805"
  }
];
