import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const aiProposalsArticle: Article = {
  "slug": "compare-ai-consulting-proposals",
  "title": "How to compare AI consulting proposals for a small business",
  "metaTitle": "Compare AI Consulting Proposals for Small Business | Helm",
  "metaDesc": "Compare AI consulting proposals by scope, deliverables, testing, staff effort, data access and handover before buying an assessment or pilot.",
  "date": "2026-10-19",
  "readMin": 8,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "readingLayout": true,
  "organizationByline": true,
  "hideVisual": true,
  "consultation": {
    "title": "Discuss an AI workflow",
    "sub": "Come ready to describe the task, who does it, and what takes time today. You can discuss the workflow without sharing client records or sensitive information.",
    "label": "Discuss an AI workflow",
    "to": "/contact/?service=secure-ai-adoption"
  },
  "intro": "“AI pilot” tells you very little about what a consulting fee buys. An assessment might leave you with a recommendation about whether a task is suitable for AI. A pilot goes further by trying an agreed workflow and producing evidence you can use to accept it, change it or stop. Comparing the two fees only helps once you know which of those decisions you're paying for.",
  "lead": [
    "For a small professional-services firm, the other part of that purchase is the work your own people will do. Staff may prepare inputs and check the output; retained IT may handle accounts and access. A quote can leave much of that effort with you, affecting both what the pilot costs and whether you can run it."
  ],
  "takeaway": "Compare the decision each proposal supports, the evidence you'll receive and the work left with your team. Include outside costs and resolve missing commitments in the written scope before buying.",
  "sections": [
    {
      "h": "Two offers for the same task",
      "ps": [
        "Take a hypothetical firm that wants help drafting an internal project-status summary from approved sample updates. No client files are involved. Proposal A offers interviews, a workflow map and a recommendation about whether testing is justified. Proposal B includes a pilot on an approved platform, with written instructions and recorded tests, but leaves the acceptance reviewer, account work and some outside costs unresolved.",
        "The extra testing in B could be useful, but the firm may still have questions that A would help it answer. Inconsistent source updates might need attention first. If nobody has the knowledge or time to check a draft, there may be little point in trying a drafting tool yet. A reasoned recommendation to fix either problem before testing could be a useful assessment result.",
        "That gives you a way to read the deliverables. A workflow map and recommendation help with the decision to test. Instructions and original test outputs let you examine what happened during a pilot. Later implementation or support would be another commitment to price and agree; a successful demonstration alone doesn't include that work.",
        {
          "text": "NIST's Playbook guidance on application scope and human oversight supports documenting the intended use and review process. Its AI Risk Management Framework is voluntary guidance, not a consultant certification or a prescribed way to compare these offers.",
          "links": [
            {
              "phrase": "NIST's Playbook guidance on application scope and human oversight",
              "to": "https://airc.nist.gov/airmf-resources/playbook/map/"
            },
            {
              "phrase": "AI Risk Management Framework",
              "to": "https://www.nist.gov/itl/ai-risk-management-framework"
            }
          ]
        }
      ],
      "table": {
        "caption": "Hypothetical offers for one internal status-summary task. These are illustrative scopes, not Helm quotes or standard deliverable commitments.",
        "headers": [
          "Comparison point",
          "Proposal A: assessment",
          "Proposal B: pilot"
        ],
        "rows": [
          [
            "End decision",
            "Recommend whether a pilot is justified",
            "Decide whether the tested workflow is acceptable"
          ],
          [
            "Deliverables",
            "Workflow map and recommendation",
            "Instructions, test cases, original outputs and limitations"
          ],
          [
            "Testing",
            "Not included",
            "Included; acceptance reviewer not yet named"
          ],
          [
            "Accounts and inputs",
            "Requirements reviewed",
            "Approval and configuration owners still to be confirmed"
          ],
          [
            "Costs outside the fee",
            "Later testing would need a separate quote",
            "Licenses and client staff time not yet stated"
          ],
          [
            "Handover",
            "Assessment findings",
            "Reusable instructions proposed; use and editing rights unresolved"
          ]
        ]
      }
    },
    {
      "h": "What counts as a useful test?",
      "ps": [
        "A status summary can read smoothly while getting the work wrong. In this hypothetical example, a sample update might name an overdue action and its owner but omit the next deadline. A useful test would check that the summary preserves the action and owner, and identifies the missing date instead of making one up. Conflicting updates could test whether the output flags the disagreement for review. These are checks to agree on, with no guarantee of a particular result.",
        "The consultant can run those cases and explain the results. Someone at the firm still has to judge whether the summary is usable, with the knowledge to spot a mistake and the authority to reject the output. That person also has to have time for the review. Leaving the reviewer unnamed in Proposal B leaves part of the testing work unassigned.",
        "Original outputs, including failed attempts, let you see what the reviewer had to notice. Put them beside the expected result and the reviewer's decision, and a corrected final document becomes easier to judge. If the consultant repairs a summary before showing it to you, the finished version alone won't reveal how much checking and correction your staff would have faced.",
        {
          "text": "NIST's measurement guidance calls for documented test sets, metrics and tools, with performance demonstrated in conditions relevant to use. A pass percentage from an unrelated demonstration leaves you without evidence about this task. Agreeing on the cases and acceptance evidence before testing gives both parties a basis for deciding whether to continue, revise the workflow or stop.",
          "links": [
            {
              "phrase": "NIST's measurement guidance",
              "to": "https://airc.nist.gov/airmf-resources/playbook/measure/"
            }
          ]
        }
      ]
    },
    {
      "h": "Whose account will run the pilot?",
      "ps": [
        "The test also has to work somewhere your firm can approve. If a demonstration runs in the consultant's account, there is still work to explain before your staff can repeat it. The exact product, account type and licenses assumed by the quote help establish whether you already have what the pilot requires and whether the proposed controls are available in that account.",
        "The summary example uses approved sample updates. Public, synthetic or explicitly approved low-sensitivity material keeps the starting inputs limited. Access to client folders would be a separate decision, even if a connection made the demonstration more convenient. Naming the permitted inputs, their approver and the services that would receive them makes that boundary visible.",
        "Your retained IT provider keeps responsibility for ordinary IT. For this pilot, there is still the work of creating the account, approving permissions, configuring any proposed connection and removing temporary access. A line such as “Your IT team will handle it” only helps once that team has agreed to the tasks and timing. Its availability and any separate charges then belong in the plan and cost comparison.",
        {
          "text": "The document-access guide explains permissions, retention, model-training terms and connected services in more detail. A proposal can cover reviewing those questions without including configuration work. Buying that review should not silently authorize changes or the transfer of confidential information; the parties have to agree who completes each check and who performs any approved changes.",
          "links": [
            {
              "phrase": "document-access guide",
              "to": "/resources/ai-access-business-documents/"
            }
          ]
        }
      ]
    },
    {
      "h": "The smaller quote can leave more work with you",
      "ps": [
        {
          "text": "For the status-summary pilot, producing a draft is only part of the job. Input preparation, checking and corrections take staff time too. Source cleanup and training may also fall outside the consultant's work. The AI time-savings guide explains how to compare complete, accepted work, including that effort. This is why it helps to know which tasks the consultant performs and which your firm or retained IT will supply before treating the fee as the cost of the pilot.",
          "links": [
            {
              "phrase": "AI time-savings guide",
              "to": "/resources/measure-ai-time-savings/"
            }
          ]
        },
        "A fixed fee for “the pilot” can leave room for different expectations about deliverables and review rounds. If the proposal includes a limited amount of testing, there may still be unresolved findings when that allowance runs out. An agreement about how those findings will be recorded and what triggers another quote lets you decide whether to pay for further work. It also keeps a limited test from being read as a promise to finish every correction it reveals.",
        "Software subscriptions and usage charges add another part of the bill. The comparison is more useful when it says who pays for the pilot account, which charges continue afterward and what happens if use grows. Writing “unquoted” beside an unknown amount prevents a blank cell from making an incomplete offer look cheaper than one that names its costs."
      ]
    },
    {
      "h": "What you can use after the engagement",
      "ps": [
        "Once the consultant leaves, the person responsible for the workflow has to be able to find and use the agreed records. For the hypothetical pilot, a handover could include instructions and configuration records, approved test material, original results and known limitations. Agreeing on what arrives, where it will live and who can access it gives that person a way to understand the workflow without relying on the consultant's memory or personal account.",
        {
          "text": "Having a copy of a document leaves a separate question about the right to keep using it, edit it or share it with a replacement provider. Helm's Terms, for example, distinguish customer data ownership from Helm's ownership of its methodologies, templates, reports and tooling. The engagement has to settle what belongs to the firm, what is licensed and what depends on third-party terms. If those rights are unclear, have the appropriate adviser review them before you commit.",
          "links": [
            {
              "phrase": "Helm's Terms",
              "to": "/terms/"
            }
          ]
        },
        {
          "text": "Account control continues after the test. Temporary access has to be disconnected by an agreed person, and the retention plan can only promise removal or retention that the product's documented controls allow. If the workflow produces an unsuitable result later, staff also need to know who can pause it and which manual process to use while the problem is reviewed. NIST's governance guidance supports documenting responsibilities and addressing third-party AI risks. The agreement allocates the actual work between the parties.",
          "links": [
            {
              "phrase": "NIST's governance guidance",
              "to": "https://airc.nist.gov/airmf-resources/playbook/govern/"
            }
          ]
        },
        {
          "text": "Instructions, source procedures and platform behavior can change. Reusable cases and instructions can help with later checks if their delivery and permitted use are included in the agreement; the AI retesting guide explains when a workflow change needs another look. Retesting and troubleshooting may be included, separately purchasable or left with your team. A retainer is one possible arrangement. What matters for this purchase is knowing who handles the next problem and what that arrangement costs.",
          "links": [
            {
              "phrase": "AI retesting guide",
              "to": "/resources/retest-ai-workflow-changes/"
            }
          ]
        }
      ]
    },
    {
      "h": "Choosing between the offers",
      "ps": [
        "For the hypothetical firm, Proposal A could be the right purchase if it still needs a reasoned recommendation before paying for testing. Proposal B offers more work, but its missing reviewer and unresolved access, outside costs and use rights prevent a complete comparison. The firm can ask for those answers in a revised scope, or pause until a dependency is resolved.",
        "For each commitment that affects your decision, put the proposal reference beside the deliverable, its evidence, owner and included cost. Keep an exclusion visible until someone accepts the work. A high overall score cannot supply missing data approval or someone able to accept the results. Those gaps need written answers from the responsible parties.",
        {
          "text": "If choosing the task is still the problem, the first-workflow guide can help. For New Jersey firms with a candidate task, Helm's Secure AI Adoption assessment reviews one recurring internal workflow, its effort and cost, and the proposed tools and data before recommending whether a pilot is appropriate. A pilot is optional, separately scoped and quoted for one workflow on one approved platform. Custom applications, production integrations, wider rollout and ongoing support require separate scope. You can discuss the task and your proposal questions without sending client records or sensitive information.",
          "links": [
            {
              "phrase": "first-workflow guide",
              "to": "/resources/choose-first-ai-workflow/"
            },
            {
              "phrase": "Helm's Secure AI Adoption assessment",
              "to": "/secure-ai-adoption/"
            }
          ]
        }
      ]
    }
  ]
};

export const aiProposalsArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "choose-first-ai-workflow",
    "ai-access-business-documents",
    "measure-ai-time-savings",
    "retest-ai-workflow-changes"
  ],
  "sources": [
    {
      "title": "NIST: AI Risk Management Framework",
      "href": "https://www.nist.gov/itl/ai-risk-management-framework"
    },
    {
      "title": "NIST: AI RMF Playbook, Map",
      "href": "https://airc.nist.gov/airmf-resources/playbook/map/"
    },
    {
      "title": "NIST: AI RMF Playbook, Measure",
      "href": "https://airc.nist.gov/airmf-resources/playbook/measure/"
    },
    {
      "title": "NIST: AI RMF Playbook, Govern",
      "href": "https://airc.nist.gov/airmf-resources/playbook/govern/"
    },
    {
      "title": "Helm: Secure AI Adoption scope",
      "href": "https://helmsecured.com/secure-ai-adoption/"
    },
    {
      "title": "Helm: Terms of Service",
      "href": "https://helmsecured.com/terms/"
    }
  ]
};
