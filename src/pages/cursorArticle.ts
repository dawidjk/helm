import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const cursorArticle: Article = {
  "slug": "cursor-claude-code-extension-exposure",
  "collection": "blog",
  "title": "A failed SSH setup does not clear a Cursor host",
  "metaTitle": "A failed SSH setup does not clear a Cursor host | Helm",
  "metaDesc": "Match the affected Cursor extension install, then separate failed SSH access from local changes that still need investigation.",
  "date": "2026-10-30",
  "readMin": 3,
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": {
    "text": "Cursor's October 29 notice identifies one malicious extension: Anthropic.claude-code 2.1.313, installed or updated through Cursor's marketplace between about 02:27 and 13:35 PDT (09:27 to 20:35 UTC). Cursor says Anthropic did not develop that build and reports no evidence affecting other versions or the official distribution.",
    "links": [
      {
        "phrase": "Cursor's October 29 notice",
        "to": "https://cursor.com/blog/claude-code-extension-security-notice",
        "className": "contextual-resource-link"
      }
    ],
    "codePhrases": [
      "Anthropic.claude-code"
    ]
  },
  "lead": [
    "Start by deciding whether this exact incident intersects your machines. \"We use Claude\" cannot answer that question. Neither can a screenshot showing what is installed today if the machine has since changed. Establish the installation history before deciding which machines need an incident response."
  ],
  "sections": [
    {
      "h": "Match the install to the notice",
      "ps": [
        "For each machine you need to check, look for a record of the extension's identity, version and installation source. Compare its installation or update time with the affected window on October 29, 2026. Keep the timezone alongside the time; an unlabelled timestamp makes the comparison harder to defend.",
        "Use existing installation records and endpoint inventory where available. Record what each establishes. A purchase record or an Anthropic account tells you less about the package delivered to a particular machine than an installation record does. If you cannot establish the source, leave that question open instead of assuming the familiar publisher name settles it.",
        "You can then distinguish a documented match from evidence that places the install outside the notice's scope. Keep incomplete records separate from both. That lets you direct investigation at the machines with a match or an unresolved history, without treating every Claude user as affected.",
        "A current extension list is still useful. Just record when it was collected and whether it describes the installation you are investigating or a later state."
      ]
    },
    {
      "h": "Separate failed access from an unaffected machine",
      "ps": [
        {
          "text": "Cursor says SSH activation generally failed without administrator privileges. It still reports an added attacker SSH key, persistence and host-detail collection. Listed persistence indicators include com.apple.sysmond on macOS and SysMon on Windows. The attacker server is offline. Those findings do not establish successful remote login on every affected machine or prove that credentials were stolen.",
          "links": [],
          "codePhrases": [
            "com.apple.sysmond",
            "SysMon"
          ]
        },
        "If your records match the affected install, \"SSH was not enabled\" answers only part of the investigation. Check which local changes occurred before accepting the machine for normal use. You do not need to claim a successful attacker login to justify investigating unauthorized changes.",
        {
          "text": "Likewise, a missing svc-telemetry key comment should be read alongside the installation history and other findings. A negative result for one indicator cannot explain every possible gap in that record. Keep the conclusion as narrow as the evidence: the check did not find that indicator at the time it ran.",
          "links": [],
          "codePhrases": [
            "svc-telemetry"
          ]
        },
        "Do not launch a suspect extension or start Cursor with administrator privileges to see whether the attack works. The purpose is to establish what happened on your machine, not to reproduce the attack."
      ]
    },
    {
      "h": "Follow the platform-specific response",
      "ps": [
        {
          "text": "Cursor's response instructions cover isolation where execution or backdoor evidence exists, removing the key and persistence, assessing rebuilding, and rotating accessible credentials and sessions from a trusted system. The notice includes platform-specific checks, indicators and remediation scripts.",
          "links": [
            {
              "phrase": "Cursor's response instructions",
              "to": "https://cursor.com/blog/claude-code-extension-security-notice",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Open the notice on Cursor's own site and review the instructions for your operating system. Only perform remediation on machines you are authorized to administer. Read the script and its stated execution requirements before running it; copying a command from a repost removes the context you need to judge that action.",
        "Keep the result with the original installation finding. If the history remains unresolved, say what evidence is missing and who will decide whether the machine can return to use. If it matches, record the local findings and completed response. A failed SSH attempt can narrow what you conclude about attacker access. It cannot, by itself, close the investigation."
      ]
    }
  ],
  "takeaway": "",
  "hideVisual": true,
  "readingLayout": true,
  "ctaMode": "inline"
};

export const cursorArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "incident-response-plan-small-business",
    "ai-access-business-documents"
  ],
  "sources": [
    {
      "title": "Cursor: Claude Code extension security notice",
      "href": "https://cursor.com/blog/claude-code-extension-security-notice"
    }
  ]
};
