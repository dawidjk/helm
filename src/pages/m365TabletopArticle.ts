import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

// Unpublished revised manuscript. Publication requires separate approval and final gates.
export const m365TabletopArticle: Article = {
  "slug": "microsoft-365-tabletop-exercise",
  "title": "Find out what happens after \"call IT\"",
  "metaTitle": "Microsoft 365 Tabletop Exercise for Small Business | Helm",
  "metaDesc": "Run a one-hour Microsoft 365 tabletop with leadership and IT to find missing contacts, unclear authority and gaps in your incident response plan.",
  "date": "2026-10-28",
  "readMin": 8,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "organizationByline": true,
  "hideVisual": true,
  "readingLayout": true,
  "intro": "You can reach the right IT contact and still get stuck on the next decision. When a partner's Microsoft 365 account appears to be sending messages they didn't write, you need to know what action is already authorized and who can approve an interruption to their client work.",
  "lead": [
    "Spend an hour following that decision through one fictional account compromise. Open your current incident plan, work through the report with the people involved and see where the response stalls. Keep a record you can use afterward: what you could decide, what remained uncertain and the correction you will check.",
    "You may find that your alternate approver has contact details but no written authority, or your escalation number sits inside the account you are treating as unavailable. Finding that gap gives you something specific to fix before you need the plan."
  ],
  "sections": [
    {
      "h": "Prepare the exercise around your actual arrangements",
      "ps": [
        {
          "text": "A tabletop is a guided discussion of how you would respond to a fictional situation. NIST describes the approach in its exercise planning guide. The hour below is an original, limited example covering opening decisions. Allow additional time for preparation and follow-through; plan a fuller exercise or technical test separately.",
          "links": [
            {
              "phrase": "exercise planning guide",
              "to": "https://csrc.nist.gov/pubs/sp/800/84/final",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "Start with your current incident response plan. Bring trusted contact details and the relevant service agreement, including scope and hours. Check that you can identify the recipient of an incident report and the authority for interrupting work. Leave any missing answer visible for the exercise.",
          "links": [
            {
              "phrase": "incident response plan",
              "to": "/resources/incident-response-plan-small-business/",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "Invite the business decision-maker and their alternate, the administrator responsible for the account, and someone who understands the client work an interruption would affect. Include outside IT where your response depends on it. NIST's incident response guidance includes exercises with relevant providers as a way to identify improvements. For an absent participant, use the current agreement and procedure as evidence and keep unanswered questions open. An exercise cannot expand an outside organization's commitments.",
          "links": [
            {
              "phrase": "incident response guidance",
              "to": "https://csrc.nist.gov/pubs/sp/800/61/r3/final",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Decide who will facilitate and who will record findings. You can lead the discussion yourself. Keep the record visible so you can catch a missing decision while everyone is still present. In a small firm, one person may hold several roles; record which authority they are using for each decision.",
        "Use sanitized documents suitable for everyone in the room. Locate the procedure for retaining technical evidence, but keep passwords, recovery codes and sensitive logs out of the meeting packet.",
        "Set a discussion-only boundary. Keep live accounts unchanged throughout the exercise, and exclude phishing messages, credential collection, emergency calls and client contact. If you discover a genuine concern during preparation or discussion, stop the exercise and follow your actual incident process."
      ]
    },
    {
      "h": "Follow the report through the hour",
      "ps": [
        "Introduce each fictional update at the indicated time. Use your documents during the discussion. Looking up an answer shows you whether it is available when needed; struggling to find it is a finding to keep.",
        {
          "h3": "Minutes 0 to 5: establish the decision you are following"
        },
        "Confirm the boundaries and everyone's role. Write down the objective: follow the initial report through assessment, authority to act and the next business update.",
        "Start the decision record with three evidence categories: observed in the exercise, assumed, and not tested. Finding an approved contact number demonstrates that you can retrieve it. Whether someone will answer outside the agreed service hours requires separate evidence.",
        {
          "h3": "Minutes 5 to 20: a partner needs the account for client work"
        },
        {
          "quote": [
            "Fictional report: A staff member reports messages sent from a partner's Microsoft 365 account that the partner says they did not send. The partner needs the account for client work today."
          ]
        },
        "Begin where that report would arrive in your firm. Open the reporting instructions and follow the route to the person responsible for assessing it. Work through the exchange with that participant: what information accompanies the report, what happens next and when you would receive an update. Record a missing recipient or instruction as soon as you encounter it.",
        {
          "text": "Keep the report separate from your explanation for it. Microsoft's compromised-account guidance lists suspicious messages and forwarding rules among possible symptoms, and covers associated services beyond email. The fictional report gives you a reason to investigate; it does not tell you which information was exposed.",
          "links": [
            {
              "phrase": "compromised-account guidance",
              "to": "https://learn.microsoft.com/en-us/defender-office-365/responding-to-a-compromised-email-account",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Now follow the authority for protecting the account. Locate which actions your arrangements already authorize and which require a further decision. Work through the effect on today's client work, including who can accept that interruption. Discuss the technical actions without performing them.",
        "If an answer ends at \"IT handles it\" or \"management approves,\" continue from the recipient's side. Identify the actual role, the next step and the document supporting the authority to take it. If you cannot complete that path, preserve the gap in your record.",
        {
          "h3": "Minutes 20 to 35: the usual approver is unavailable"
        },
        {
          "quote": [
            "Fictional update: IT finds an unfamiliar forwarding rule. The person normally asked to approve an interruption cannot be reached."
          ]
        },
        "The rule adds a concern to investigate. You still do not know which messages or files, if any, were exposed. Find the relevant investigation and evidence-retention procedure, then record where the evidence would be kept and who has authorized access. Keep the underlying sensitive material out of your exercise notes.",
        "Retrieve the alternate approver's trusted contact details without relying on the suspect mailbox. Locate the approved communication channel you would use if ordinary email could not be trusted. You are checking that the route exists; keep calls and messages within the discussion.",
        "Next, find the alternate's existing authority to make the decision. Attendance at the exercise grants no new permission to interrupt service. If the plan does not establish the authority you need, record that exact gap. Also record the assessment or protective work already permitted, so you can distinguish work that can proceed from the decision still waiting for approval.",
        "Allow time for document retrieval. If the lookup consumes this part of the exercise, keep that observation and move on with the gap open. Supplying an improvised answer would hide the difficulty you came to find.",
        {
          "h3": "Minutes 35 to 45: the password has changed, but the investigation is unfinished"
        },
        {
          "quote": [
            "Fictional update: The account's password has been changed. IT is still investigating. The partner asks whether everyone can return to normal work."
          ]
        },
        {
          "text": "Treat the password change as one action in the fictional response. Microsoft's access-revocation guidance explains that revocation can take time and Entra ID cannot directly revoke a session issued by an application. A password reset alone does not establish that every access path has been removed.",
          "links": [
            {
              "phrase": "access-revocation guidance",
              "to": "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Compare the open questions with your response procedure. Record the authorized assessment still needed for this environment, which may include active sessions, authentication methods, application permissions and forwarding. Capture the evidence needed to support the next decision.",
        "Work through the request to resume normal work using the facts available. Record which restrictions would remain, their effect on the business and who already has authority to change them. A finding of no suspicious activity in the records reviewed so far cannot establish that no information was exposed.",
        {
          "text": "Draft the next staff update from what you know. Include the restrictions, the approved way to handle urgent work and when the next update would come; record who would deliver it. Personal email or an improvised file-sharing account needs approval before it can become a workaround. Keep unrelated configuration improvements for a later Microsoft 365 baseline review.",
          "links": [
            {
              "phrase": "Microsoft 365 baseline review",
              "to": "/resources/m365-security-baseline/",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "h3": "Minutes 45 to 60: choose a correction you can check"
        },
        "Leave the fictional investigation open if the facts do not support closing it. Use these final minutes to review where you disagreed, could not find a document or relied on an unconfirmed commitment.",
        "Give each finding its evidence status. You might have observed that the alternate found an approved contact list. You have not tested response time, revoked an application session or demonstrated technical containment by discussing those actions.",
        "Choose the unresolved gap with the greatest potential consequence. Record the correction, any approval it needs, a due date and the evidence you will accept when checking it. Keep a proposed change distinct from an approved decision."
      ]
    },
    {
      "h": "Keep a record you can use after the meeting",
      "ps": [
        "Use the same fields for each gap: what stopped the response, the evidence you have, and your correction and check. This completed example is illustrative; its dates and observations are fictional.",
        {
          "h3": "The escalation number required the unavailable sign-in"
        },
        {
          "label": "Decision or gap:",
          "body": "You could find the approved escalation number only inside a mailbox that the scenario made unavailable."
        },
        {
          "label": "Evidence status:",
          "body": "Observed in the exercise: no approved alternative source was found. Assumed: another number would reach the same escalation route. Not tested: administrative access recovery or response time."
        },
        {
          "label": "Your correction and check:",
          "body": "By November 2, check the escalation details against your current service agreement and established contact record. Resolve any discrepancy through an already trusted channel, then put the confirmed details in an approved location available without ordinary Microsoft 365 sign-in. On November 4, repeat the lookup with the designated alternate under the same fictional restriction. Record whether you could retrieve the confirmed number and where you found it."
        },
        "That check establishes contact retrieval. Keep service availability and administrative recovery as separate items with their own evidence and agreed scope."
      ]
    },
    {
      "h": "Update the plan and repeat the step that failed",
      "ps": [
        "Put approved corrections into the documents you would actually use, including the incident plan, contact list or authority record. For an unclear responsibility, compare the proposed response with the current agreement and documented authority. Keep the item open until you can point to an accepted responsibility and the route for using it.",
        {
          "text": "Some gaps require technical testing. Establish the authorization and safe scope before proceeding, and retain the result for your follow-up check. A discussion cannot establish that you can restore a system; use the disaster recovery guide to plan that separate work.",
          "links": [
            {
              "phrase": "disaster recovery guide",
              "to": "/resources/disaster-recovery-small-business/",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "Helm Command includes an annual tabletop and a written incident path within the agreed security-program scope, alongside coordination with existing IT. You retain your existing IT arrangements for administration and routine remediation. This self-run example is separate from that service. If you want to discuss a responsibility gap with Helm, bring the stalled decision and your evidence to a conversation with Helm.",
          "links": [
            {
              "phrase": "Helm Command",
              "to": "/helm-command/",
              "className": "contextual-resource-link"
            },
            {
              "phrase": "conversation with Helm",
              "to": "/contact/",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Before closing the correction, repeat the part of the exercise that failed using the updated documents. Record what you could do this time and what remains unresolved. You should be able to follow the next step after \"call IT\" from the plan in front of you."
      ]
    }
  ],
  "takeaway": "",
  "ctaMode": "inline"
};

export const m365TabletopArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "incident-response-plan-small-business",
    "m365-security-baseline",
    "disaster-recovery-small-business"
  ],
  "sources": [
    {
      "title": "NIST: Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities (SP 800-84)",
      "href": "https://csrc.nist.gov/pubs/sp/800/84/final"
    },
    {
      "title": "NIST: Incident Response Recommendations and Considerations (SP 800-61 Rev. 3)",
      "href": "https://csrc.nist.gov/pubs/sp/800/61/r3/final"
    },
    {
      "title": "Microsoft: Respond to a compromised email account in Microsoft 365",
      "href": "https://learn.microsoft.com/en-us/defender-office-365/responding-to-a-compromised-email-account"
    },
    {
      "title": "Microsoft: Revoke user access in an emergency in Microsoft Entra ID",
      "href": "https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access"
    }
  ]
};
