import type {Article} from './articles';
export const aiRetestArticle: Article = {
  "slug": "retest-ai-workflow-changes",
  "title": "When an AI workflow changes, what needs retesting?",
  "metaTitle": "Retesting an AI Workflow After Changes | Helm",
  "metaDesc": "Check whether an internal AI workflow still works after prompts, source documents or settings change. Keep repeatable tests, review failures and plan a fallback.",
  "date": "2026-10-14",
  "readMin": 9,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": "An operations manager at a hypothetical firm uses an approved AI tool to turn an internal procedure into a short staff checklist. The firm tested it, assigned a reviewer and decided the result was useful. A month later, someone shortens the instructions to make the output easier to read. The next checklist looks cleaner, but it leaves out an exception for temporary staff.",
  "lead": [
    "The original approval cannot answer whether that revised workflow still works. Before staff rely on the change, retest the requirements that justified the original approval. That means keeping a few reusable examples, knowing what each should contain and recording what the changed version actually does.",
    "For a small professional-services firm, this can begin with a modest comparison of approved internal material. It should remain a reviewable drafting task. A successful comparison does not authorize new data access, automatic sending or professional decisions."
  ],
  "readingLayout": true,
  "organizationByline": true,
  "hideVisual": true,
  "takeaway": "",
  "consultation": {
    "title": "Discuss an AI workflow",
    "sub": "Describe the task and the change you want to evaluate. Keep client records and sensitive information out of the inquiry. Pricing is quoted after scoping.",
    "label": "Discuss an AI workflow",
    "to": "/contact/?service=secure-ai-adoption"
  },
  "sections": [
    {
      "h": "What changed since the last acceptable result?",
      "ps": [
        "Start with the specific difference someone noticed or proposed. The instructions may have changed. A procedure may have acquired a new exception. Staff may be using a different product setting, or the service may behave differently even though the team has not intentionally changed anything.",
        "Write down what you know and what you cannot establish. If the product shows a model name or version, record it. If it does not expose that information, record the product, account type, settings and test date instead. An unknown vendor-side change should stay unknown until there is evidence for an explanation.",
        {
          "text": "NIST's AI RMF Playbook treats monitoring, recovery and change management as work that continues after deployment. That principle applies to the business process around a tool as well as its initial introduction. The practical question is whether the firm still has enough evidence to permit this particular use.",
          "links": [
            {
              "phrase": "NIST's AI RMF Playbook",
              "to": "https://airc.nist.gov/airmf-resources/playbook/manage/",
              "start": 0
            }
          ]
        },
        {
          "text": "Keep changes within the approved boundary during the comparison. Adding a connection to client folders creates a separate access decision. Letting a drafting tool send its own output creates a separate action decision. Refer those changes to the responsible owner and retained IT provider before testing them. The document-access guide covers that review in more detail.",
          "links": [
            {
              "phrase": "document-access guide",
              "to": "/resources/ai-access-business-documents/",
              "start": 314
            }
          ]
        }
      ]
    },
    {
      "h": "Keep examples that would reveal a meaningful failure",
      "ps": [
        "Return to the workflow's accepted purpose. For the checklist, the manager might require the output to preserve mandatory steps, identify the right approver and include relevant exceptions. Attractive formatting is helpful, but it cannot compensate for a missing instruction.",
        "Choose examples because they test those requirements. A routine staff case tells you whether the ordinary path still works. A temporary-worker case tests the exception. Another example can deliberately omit information the procedure needs, so you can see whether the draft identifies the gap or fills it with an unsupported instruction.",
        "Use public, synthetic or explicitly approved low-sensitivity material. A useful test does not need a real employee's record or a client's file. Make the expected result specific enough that a second reviewer could understand why an output passed or failed. “Looks sensible” leaves too much to memory.",
        {
          "text": "Anthropic's engineering guidance on evaluations distinguishes checks for new capabilities from regression checks that watch for deterioration in behavior already expected to work. Its examples concern engineered agents. For this simpler office task, the useful idea is to keep the same approved cases available when the workflow changes; a firm does not need to adopt an agent-testing platform to make that comparison.",
          "links": [
            {
              "phrase": "Anthropic's engineering guidance on evaluations",
              "to": "https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents",
              "start": 0
            }
          ]
        },
        "There is no universal number of examples that proves an AI workflow reliable. Select enough variation to examine the consequences that matter, and describe what remains untested. A small set can reveal a failure without establishing the probability of every failure the business might encounter."
      ]
    },
    {
      "h": "Compare the same work and preserve the unsuccessful attempts",
      "ps": [
        "Where both versions are available, run the same approved cases through each. Keep the source material and intended task consistent. Record the changed instructions separately, so the comparison does not combine a new prompt with a repaired procedure and a different input.",
        "Keep each original output before correcting it. Then record which requirement it met or missed, the consequence of the error and the correction needed. If the manager fixes a checklist before saving it, the record should retain that distinction. Otherwise, a later reviewer may mistake the repaired document for the tool's result.",
        "AI-generated responses can vary across attempts. Repeating important cases helps expose that variation. Keep unsuccessful runs and explain how many attempts you made; rerunning until a good answer appears and reporting only that answer hides work the team would have to perform in practice.",
        "Sometimes the earlier model or setting is no longer available. Preserve the last reviewed outputs as historical evidence, then test the current workflow against the agreed requirements. You can establish whether the current result passes those checks without claiming that a particular vendor change caused the difference.",
        {
          "text": "Ask someone who understands the procedure to review the results against the source. A second chatbot can suggest possible errors, but its agreement does not settle whether a mandatory step is present. NIST's measurement guidance calls for appropriate performance limits, evaluation over time and people able to interpret the results. The firm's reviewer still needs the authority and knowledge to reject unusable work.",
          "links": [
            {
              "phrase": "measurement guidance",
              "to": "https://airc.nist.gov/airmf-resources/playbook/measure/",
              "start": 208
            }
          ]
        }
      ]
    },
    {
      "h": "Let the consequence of an error drive the decision",
      "ps": [
        "In this firm, a changed heading might need a small edit. A missing approval step would make the checklist unsuitable for staff use. Both are errors, but treating them as equal in an overall percentage would obscure the decision.",
        "Suppose the revised instructions produce nine acceptable drafts and one draft that tells temporary staff to skip an approval. Reporting a 90 percent pass rate would leave the owner without the most important fact: one tested case gave staff the wrong instruction at a point where approval mattered.",
        "Agree on the response to that failure before a deadline creates pressure to accept it. The manager could hold the revised instructions, keep the established manual checklist available and investigate why the exception disappeared. If the earlier workflow remains available and its sources are still current, the owner can decide whether its existing approval still applies. Restoring old instructions should not restore an obsolete procedure.",
        "The response also depends on whether the output has already been used. A failure confined to a test can be corrected within the test. If staff received a faulty checklist, identify the affected copies and have the responsible owner decide what needs correction. Possible disclosure or unauthorized actions belong in the firm's existing incident process.",
        {
          "text": "NIST's Generative AI Profile includes post-deployment monitoring, escalation and evaluation of whether systems remain within acceptable limits. It does not supply a universal office-workflow pass rate. Your criteria need to reflect what the output is allowed to do and what would happen if it were wrong.",
          "links": [
            {
              "phrase": "Generative AI Profile",
              "to": "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf",
              "start": 7
            }
          ]
        }
      ]
    },
    {
      "h": "A usable record of the change",
      "ps": [
        "Keep a short record alongside the approved instructions and test material. For this workflow, it should answer:",
        {
          "list": [
            "What changed, and who owns the decision about continued use?",
            "Which source procedure, instructions, platform and visible settings were tested?",
            "Which cases ran, what was expected and what did each attempt produce?",
            "Which errors occurred, how serious were they and what remains unresolved?",
            "What may staff use now, who reviewed that decision and when will it be revisited?"
          ]
        },
        "A test-case identifier can point to approved material without copying sensitive content into a widely shared tracker. Store the record where its intended reviewers can find it and apply the firm's normal access and retention rules. A test log can itself contain business information.",
        "Keep the previous record when a new version is accepted. That lets the next reviewer see whether an exception is new, an old failure has returned or the source procedure changed deliberately. If the same issue keeps recurring, adding another sentence to the prompt may be a poor use of time. A fixed template or the manual process may be easier to maintain.",
        "The record supports an internal decision. Whether it meets a particular client's, insurer's or professional obligation is a separate question for the actual requirement and appropriate adviser."
      ]
    },
    {
      "h": "Decide what staff should do next",
      "ps": [
        "Finish the review with an instruction people can follow. For example, the owner might approve the revised workflow for routine internal checklists while keeping exception cases with the manual process. That narrower boundary is useful only if staff can recognize those cases before using the tool. If they cannot, the restriction may be impractical.",
        "Explain where the approved instructions live and remove ambiguity about superseded versions. Show staff the failure they should report and the procedure to use while the workflow is paused. Assign a backup reviewer if the normal owner is away; otherwise, an apparently simple approval can leave work waiting for one person.",
        "Choose the next review point from the workflow's consequences and rate of change. Relevant triggers include a source-procedure revision, changed instructions, a different platform configuration or a newly observed failure. Periodic checks can also uncover changes that nobody announced. Record the limits of what the product lets the firm observe.",
        {
          "text": "Helm's Secure AI Adoption assessment starts with one recurring internal workflow, its effort and cost, and the proposed tools and data. It leads to a recommendation about whether a pilot is appropriate. Any pilot is separately scoped and quoted; production integrations, wider rollout and ongoing support require separate scoping. For a discussion, describe the task and the change you want to evaluate, keeping client records and sensitive information out of the inquiry.",
          "links": [
            {
              "phrase": "Secure AI Adoption assessment",
              "to": "/secure-ai-adoption/",
              "start": 7
            }
          ]
        },
        {
          "text": "Include this upkeep when deciding whether the workflow remains worthwhile. Review time and corrections are recurring work, as the AI time-savings guide explains. If maintaining acceptable results consumes the expected benefit, retaining the manual process is a reasonable outcome.",
          "links": [
            {
              "phrase": "AI time-savings guide",
              "to": "/resources/measure-ai-time-savings/",
              "start": 130
            }
          ]
        }
      ]
    }
  ],
  "updated": "2026-10-24"
};
