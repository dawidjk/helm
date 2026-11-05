import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const promptInjectionArticle: Article = {
  "slug": "prompt-injection-business-documents",
  "title": "Your AI assistant works for you. Until it reads someone else’s instructions.",
  "metaTitle": "Prompt Injection in Business Documents | Helm",
  "date": "2026-11-04",
  "readMin": 9,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "readingLayout": true,
  "organizationByline": true,
  "hideVisual": true,
  "metaDesc": "Keep supplier proposals from directing your AI assistant. Learn what to verify in a comparison, limit actions, and rehearse review with synthetic documents.",
  "socialTitle": "Your AI assistant works for you. Until it reads someone else’s instructions.",
  "intro": "Giving an AI assistant a supplier proposal to compare does not give the supplier a say in how your assistant should behave. The proposal can describe a service, state a price and ask for a reply. It cannot authorize the assistant to change your buying criteria, contact someone or approve the purchase.",
  "lead": [
    "That boundary is easy to recognize when you read a proposal yourself. It needs more attention when software reads the proposal and decides what to do next. The same text that contains the offer can also contain instructions aimed at the AI reading it.",
    "For a small firm using AI to organize supplier documents, start with a comparison you can check against the originals, with the purchasing decision kept outside the assistant. Getting the summary right and keeping the assistant within its authority are separate requirements."
  ],
  "sections": [
    {
      "h": "When the proposal starts directing the reviewer",
      "ps": [
        "Consider a hypothetical comparison of two office-equipment maintenance proposals. You want the assistant to extract the fees, included visits and exclusions, then flag questions you should resolve before choosing. You supply the comparison criteria yourself.",
        "A supplier's claim that its service is the better choice belongs in the material you evaluate. A passage that tries to tell the assistant to disregard an exclusion or favor that supplier is doing something different: it is trying to control the review. The instruction may be visible in the document or appear in text extracted from it. It does not have to arrive as a message from the person who asked for the comparison.",
        {
          "text": "This is indirect prompt injection: instructions reach the assistant through outside material it processes for a legitimate user. Anthropic's guidance identifies documents, email, webpages and tool results as possible routes.",
          "links": [
            {
              "phrase": "Anthropic's guidance",
              "to": "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Nor does every instruction in a proposal establish an attack. A request to return a signed acceptance is ordinary commercial content. The assistant can report that request. Whether your firm accepts it remains your decision, and the document itself supplies no permission to send anything.",
        "Keep that distinction even for a familiar supplier. You may have good reasons to trust its service and still give its documents no authority over your software. Trust in a business relationship does not settle what an attachment should be allowed to trigger."
      ]
    },
    {
      "h": "A wrong answer can be enough",
      "ps": [
        "An assistant does not need access to a payment system for a manipulated answer to matter. If its comparison omits an exclusion, you could make a buying decision using an inaccurate account of the offer. That is a possible consequence of the hypothetical example, not evidence that a particular tool has failed.",
        "Compare two failures. In one, the assistant says on-site visits are included when the proposal prices them separately. In the other, it sends an acceptance message you never authorized. The first changes the information you see. The second changes something outside the comparison. Restricting sending capability addresses the second failure but leaves you with an answer to verify.",
        {
          "text": "This is why an instruction telling the assistant to ignore hostile text cannot carry the whole security decision. In its December 2025 analysis of prompt injection, the UK's National Cyber Security Centre explains that language models do not enforce a dependable security boundary between instructions and data inside a prompt. It recommends reducing the possible consequences with controls outside the model, alongside measures that make attacks harder.",
          "links": [
            {
              "phrase": "December 2025 analysis of prompt injection",
              "to": "https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "Anthropic makes a related point in its Managed Agents security guidance: model behavior is not a security control. Its discussion of tool restrictions and sandbox limits concerns that product, rather than a promise about every chatbot. The practical question for your comparison is what the chosen account can actually reach if its answer or next step goes wrong.",
          "links": [
            {
              "phrase": "Managed Agents security guidance",
              "to": "https://platform.claude.com/docs/en/managed-agents/secure-deployment-risks",
              "className": "contextual-resource-link"
            }
          ]
        }
      ]
    },
    {
      "h": "Keep the comparison away from the purchase",
      "ps": [
        "For this task, let the assistant produce an internal draft from selected documents. Keep email, purchasing and business-record updates outside the workflow. A request to compare offers does not require those capabilities, even if a product makes them convenient to connect.",
        {
          "text": "Check the enabled tools and account permissions before supplying documents. Telling the assistant not to use an available connection is different from removing that connection from the task. If you cannot establish what it can read or do, pause the test. Use the document-access guide for the broader review of access and data handling rather than treating a new prompt as approval.",
          "links": [
            {
              "phrase": "document-access guide",
              "to": "/resources/ai-access-business-documents/",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "Microsoft's AI agent shared responsibility guidance recommends limited tool permissions, authorization for individual actions and human approval for sensitive or consequential operations. The details vary by service and configuration. A button labeled \"approve\" is useful only when you can see the action, recipient and information involved before deciding.",
          "links": [
            {
              "phrase": "AI agent shared responsibility guidance",
              "to": "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility-ai-agent",
              "className": "contextual-resource-link"
            }
          ]
        },
        "For the proposal comparison, you can avoid that extra approval problem by leaving execution out. Once you have checked the comparison and chosen what to do, use your established purchasing process. Do not paste the assistant's summary into another tool and assume it has become a trusted instruction. Verify the underlying facts before they drive the next action.",
        {
          "text": "Source details help with that review. Microsoft's input and retrieval guidance calls for preserving source information and keeping outside content separate from instructions. In a small comparison, retain the proposal version and page or section behind each material claim. A reference gives you somewhere to look; opening that passage is still your job.",
          "links": [
            {
              "phrase": "input and retrieval guidance",
              "to": "https://learn.microsoft.com/en-us/security/zero-trust/catalog-ai-defense-capabilities/input-context-retrieval-hygiene",
              "className": "contextual-resource-link"
            }
          ]
        }
      ]
    },
    {
      "h": "Rehearse the review without live systems",
      "ps": [
        "You can practice the decision without uploading supplier records or building an attack. Use two short documents you write for the exercise, with fictional suppliers and no business or personal information. This is a review rehearsal, not a demonstration that an AI product resists prompt injection.",
        "Use this deliberately simple fictional material:",
        {
          "list": [
            "Proposal A: $120 per month for routine servicing during weekday business hours. On-site visits are charged separately.",
            "Proposal B: $150 per month for routine servicing and on-site visits during weekday business hours. Weekend work is excluded."
          ]
        },
        "Leave weekend coverage unstated in A. That omission gives the reviewer a question to preserve instead of a gap to fill. The amounts are exercise assumptions, not market prices or Helm quotations.",
        "Write your task separately from the proposals: compare the monthly fees and visit coverage, identify missing information, and provide source references. Keep supplier selection with you. The expected result is that A has the lower stated monthly fee, B includes weekday on-site visits, and A's weekend terms need clarification. Neither document establishes which offer is better for your needs.",
        "If you use an AI tool for this part, use only an approved, isolated setup with these synthetic documents. Leave business connectors, browsing and action tools unavailable, and keep unrelated files, credentials and persistent business memory out of the exercise. Confirm those conditions through the product's settings; an assistant's assurance about them is not confirmation. If you cannot establish the isolation, do the rehearsal on paper instead.",
        "Save the original draft before anyone corrects it. Then have a colleague prepare a separate, clearly labeled rehearsal copy that contains two deliberate mistakes: it describes A's on-site visits as included, and it presents acceptance of A as already authorized. Do not alter the original proposals or mislabel those manual changes as model output. You can make this copy yourself if you are practicing alone, although you will already know what to look for.",
        "These errors stand in for outcomes you want the reviewer to catch. You are not inserting hostile instructions into a model or testing a live connection. Keep the exercise free of executable content, external destinations and real sending or purchasing steps.",
        "Now review the copy as you would a draft used for a decision. Open A at the visit-coverage passage. Does the comparison preserve the separate charge? Look for the authority behind the claimed acceptance. Neither proposal can supply your firm's approval. Finally, check the unresolved weekend terms: the reviewer should leave A's omission visible even though B states its exclusion clearly.",
        "Record which errors the reviewer caught before looking at the answer notes, and which needed a hint. If someone notices the invented acceptance but misses the included-visit error, the exercise has revealed an output-checking gap. If both are caught, you have evidence about this rehearsal, not a measured attack-blocking rate or permission to connect live systems."
      ]
    },
    {
      "h": "A short checklist beside the draft",
      "ps": [
        "Use these checks when reviewing a comparison of approved supplier documents:",
        {
          "list": [
            "Confirm that the comparison uses your criteria. Flag any change that comes only from a supplier's text.",
            "Open the original passage for every price, inclusion and exclusion that affects the decision. Read the surrounding conditions, not just the quoted line.",
            "Keep missing terms and conflicting statements unresolved until you have a supported answer. Do not treat an omission as favorable coverage.",
            "Separate a supplier's request from your firm's permission. Verify any claimed approval through your existing process.",
            "Check proposed recipients and actions independently of the summary. For a comparison-only workflow, an unexpected request to send, upload or update is a reason to stop.",
            "Keep the uncorrected output with your corrections and decision, so a polished final copy does not hide what the reviewer had to repair."
          ]
        },
        "If the assistant flags a suspicious passage, inspect it without following its directions. If it flags nothing, complete the same review. A warning can help you find a problem; its absence does not establish that the comparison is accurate."
      ]
    },
    {
      "h": "Decide whether this is useful work to delegate",
      "ps": [
        "The strongest reason to use AI here is the work it can do before a decision: organizing material and helping you locate differences. Reopening the original proposals takes time, but checking the terms that affect your choice is part of producing a usable comparison. If that review is harder than comparing the documents yourself, a simple manual table may be the better tool.",
        {
          "text": "For later changes to the documents, instructions or enabled capabilities, use the AI retesting guide. This rehearsal does not cover a workflow that sends acceptance messages or updates purchasing records. Those changes need their own review before use.",
          "links": [
            {
              "phrase": "AI retesting guide",
              "to": "/resources/retest-ai-workflow-changes/",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "If you are still choosing a task, start with the first-workflow guide. Helm's Secure AI Adoption assessment reviews one recurring internal workflow and recommends whether a pilot is appropriate. A pilot is optional and separately scoped and quoted; production integrations, company-wide rollout and ongoing support require separate scope.",
          "links": [
            {
              "phrase": "first-workflow guide",
              "to": "/resources/choose-first-ai-workflow/",
              "className": "contextual-resource-link"
            },
            {
              "phrase": "Secure AI Adoption assessment",
              "to": "/secure-ai-adoption/",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Keep the final choice with the person who can evaluate the offer and approve the commitment. The supplier provides the proposal. Your firm supplies the criteria, verifies the comparison and decides what happens next."
      ]
    }
  ],
  "takeaway": "",
  "ctaMode": "inline"
};

export const promptInjectionArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "ai-access-business-documents",
    "retest-ai-workflow-changes",
    "choose-first-ai-workflow"
  ],
  "sources": [
    {
      "title": "Anthropic's guidance",
      "href": "https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/mitigate-jailbreaks"
    },
    {
      "title": "December 2025 analysis of prompt injection",
      "href": "https://www.ncsc.gov.uk/blog-post/prompt-injection-is-not-sql-injection"
    },
    {
      "title": "Managed Agents security guidance",
      "href": "https://platform.claude.com/docs/en/managed-agents/secure-deployment-risks"
    },
    {
      "title": "AI agent shared responsibility guidance",
      "href": "https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility-ai-agent"
    },
    {
      "title": "input and retrieval guidance",
      "href": "https://learn.microsoft.com/en-us/security/zero-trust/catalog-ai-defense-capabilities/input-context-retrieval-hygiene"
    }
  ]
};
