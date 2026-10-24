import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const liteLlmIncidentArticle: Article = {
  "slug": "litellm-compromised-release-recovery",
  "title": "A clean LiteLLM version can still leave stolen keys working",
  "date": "2026-10-24",
  "readMin": 4,
  "metaTitle": "A clean LiteLLM version can still leave stolen keys working | Helm",
  "metaDesc": "What to ask your IT or AI provider after LiteLLM's October 21 compromise: execution evidence, credential recovery and the unknowns that remain.",
  "collection": "blog",
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": "After LiteLLM's October 21, 2026 compromise, a clean version number is an incomplete answer to a business owner's recovery question. Ask your retained IT team, developer or AI supplier for evidence of which release actually ran and what credentials that environment could access. If credentials were copied, changing the software leaves those copies usable until the relevant access is revoked or expires.",
  "lead": [
    {
      "text": "LiteLLM's disclosure identifies compromised 1.107.0 packages and container images. Its official source tag did not contain the malicious files found in the distributed releases. That mismatch explains why a review of the source code cannot clear a particular deployment.",
      "links": [
        {
          "phrase": "LiteLLM's disclosure",
          "to": "https://docs.litellm.ai/blog/security-incident-oct-21-2026"
        }
      ]
    }
  ],
  "sections": [
    {
      "h": "Establish which artifact ran",
      "ps": [
        "The vendor's affected-artifact table separates PyPI, Docker Hub and GHCR releases, with different distribution windows and image identities. Your provider should match the exact package or container image it used to that table, keeping download, installation and execution times separate.",
        {
          "text": "A released package or container image is an artifact: the built item delivered to a machine. For containers, request the recorded image digest, the identifier for its content. Docker's documentation explains that tags can change while digests identify fixed content. A tag such as latest tells you what it points to when checked. It does not reconstruct what a machine fetched earlier.",
          "links": [
            {
              "phrase": "Docker's documentation",
              "to": "https://docs.docker.com/dhi/explore/security-concepts/digests/"
            }
          ]
        },
        "Multi-platform images add one detail for the technical responder: the overall image index and the image for a particular platform have different digests. Ask the provider to compare the appropriate captured identity with the incident evidence. A digest identifies the content; the match to the vendor's findings determines whether that content is affected.",
        "Downloading an image into a local cache and running it are separate events. If an affected image remained locally, it could be started after the registry tags were corrected. Ask for evidence from relevant production, developer/build and test environments, including when each artifact arrived and whether it ran.",
        "LiteLLM says its private enterprise registry was outside the affected channel. An enterprise contract alone does not establish where an installation came from; the recorded source and artifact identity should support that conclusion. If the provider can establish that only unaffected artifacts were present, the incident-specific response can be scoped accordingly."
      ]
    },
    {
      "h": "Follow the credentials the environment could reach",
      "ps": [
        {
          "text": "Lidor Machluf's report for Upwind describes startup execution and credential collection extending beyond LiteLLM itself. The targets included cloud role credentials, readable process environment secrets and developer credentials. With database access configured, the code also targeted upstream AI provider keys stored by the proxy.",
          "links": [
            {
              "phrase": "Lidor Machluf's report for Upwind",
              "to": "https://github.com/BerriAI/litellm/issues/47826"
            }
          ]
        },
        "If an affected proxy could reach a provider key used elsewhere in your firm, rebuilding the proxy would not invalidate that key. The responder needs to establish what access the environment had, then revoke or rotate the affected credentials and review their activity. Keep an owner and status for that work; a rebuild and a credential change solve different problems.",
        {
          "text": "Possible access is not proof that every credential was taken or used. The recovery record should distinguish confirmed findings from response assumptions and gaps in the records. Machluf's follow-up also explains why missing temporary markers cannot establish that an environment is clean. An unknown should stay visible in the recovery record.",
          "links": [
            {
              "phrase": "follow-up",
              "to": "https://github.com/BerriAI/litellm/issues/47826#issuecomment-6316601885"
            }
          ]
        }
      ]
    },
    {
      "h": "Let responders collect evidence safely",
      "ps": [
        {
          "text": "Python's documentation explains that executable lines in .pth files can run at interpreter startup even when the intended package is never imported. LiteLLM therefore warns against beginning with Python or pip inside a suspect environment. Have authorized responders direct evidence collection and rebuild from trusted material, preserving the evidence they need before replacement.",
          "links": [
            {
              "phrase": "Python's documentation",
              "to": "https://docs.python.org/3.13/library/site.html"
            }
          ]
        },
        {
          "text": "LiteLLM published its completed attack-chain investigation on October 23, 2026. Keep your provider's recovery record tied to the current incident guidance and the evidence it used.",
          "links": [
            {
              "phrase": "completed attack-chain investigation",
              "to": "https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain"
            }
          ]
        }
      ]
    },
    {
      "h": "Ask for a written recovery record",
      "ps": [
        "Ask whoever owns the deployment for a short written response. You can send this request:",
        {
          "list": [
            "Confirm whether our services use LiteLLM and identify the relevant production, developer/build and test environments reviewed.",
            "Record the source, package version or image digest, and available installation and execution timeline against LiteLLM's affected-artifact list.",
            "Explain which credentials an affected environment could reach, what was revoked or rotated, and what activity was reviewed.",
            "Identify who owns recovery, the evidence supporting return to use, and any unanswered questions with a date for the next update."
          ],
          "ordered": false
        },
        {
          "text": "Use the reply to agree who can authorize recovery and who accepts any unresolved risk. Your incident response plan should identify that authority. A version screenshot belongs in that record alongside the execution evidence and the completed credential work.",
          "links": [
            {
              "phrase": "incident response plan",
              "to": "/resources/incident-response-plan-small-business/"
            }
          ]
        }
      ]
    }
  ],
  "takeaway": "",
  "readingLayout": true,
  "hideVisual": true,
  "ctaMode": "book",
  "consultation": {
    "title": "Coordinate the security work across your providers.",
    "sub": "Book a call to discuss the security-program coordination and evidence review your firm needs. Helm Command's work is bounded by the agreed scope; retained IT owns patching and routine remediation.",
    "label": "Book a consultation",
    "to": "/contact/"
  }
};

export const liteLlmIncidentArticleSupport: ArticleSupport = {
  "relatedSlugs": [
    "incident-response-plan-small-business",
    "ai-access-business-documents",
    "managed-service-provider-security-models"
  ],
  "sources": [
    {
      "title": "LiteLLM: October 21, 2026 incident disclosure",
      "href": "https://docs.litellm.ai/blog/security-incident-oct-21-2026"
    },
    {
      "title": "Docker: Image digests",
      "href": "https://docs.docker.com/dhi/explore/security-concepts/digests/"
    },
    {
      "title": "Upwind researcher report: LiteLLM 1.107.0",
      "href": "https://github.com/BerriAI/litellm/issues/47826"
    },
    {
      "title": "Upwind researcher follow-up, October 21",
      "href": "https://github.com/BerriAI/litellm/issues/47826#issuecomment-6316601885"
    },
    {
      "title": "Python 3.13: Site-specific configuration hook",
      "href": "https://docs.python.org/3.13/library/site.html"
    },
    {
      "title": "LiteLLM: completed attack-chain investigation, October 23, 2026",
      "href": "https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain"
    }
  ]
};
