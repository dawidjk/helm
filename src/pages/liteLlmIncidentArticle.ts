import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';

export const liteLlmIncidentArticle: Article = {
  "slug": "litellm-compromised-release-recovery",
  "title": "A clean LiteLLM version can still leave stolen keys working",
  "date": "2026-10-24",
  "readMin": 4,
  "metaTitle": "A clean LiteLLM version can still leave stolen keys working | Helm",
  "metaDesc": "Check artifact and execution evidence after LiteLLM's October 21 compromise, then track exposed credentials separately from the rebuild.",
  "collection": "blog",
  "lane": "Professional services",
  "laneTo": "/professional-services/",
  "intro": "After LiteLLM's October 21, 2026 compromise, a clean version number cannot establish that your recovery is complete. Check which release ran and what credentials that environment could access. If credentials were copied, replacing the software leaves those copies usable until the relevant access is revoked or expires. Keep the rebuild and credential recovery as separate parts of your decision to return to use.",
  "lead": [
    {
      "text": "LiteLLM's disclosure identifies compromised 1.107.0 packages and container images. Its official source tag did not contain the malicious files found in the distributed releases. That mismatch explains why a review of the source code cannot clear a particular deployment.",
      "links": [
        {
          "phrase": "LiteLLM's disclosure",
          "to": "https://docs.litellm.ai/blog/security-incident-oct-21-2026",
          "className": "contextual-resource-link"
        }
      ]
    }
  ],
  "sections": [
    {
      "h": "Establish which artifact ran",
      "ps": [
        "Match the exact package or container image in your deployment records to the vendor's affected-artifact table. It separates PyPI, Docker Hub and GHCR releases, with different distribution windows and image identities. Keep download, installation and execution times separate: they answer different questions about exposure.",
        {
          "text": "A released package or container image is an artifact: the built item delivered to a machine. For containers, use the recorded image digest, the identifier for its content. Docker's documentation explains that tags can change while digests identify fixed content. A tag such as latest tells you what it points to when checked. It does not reconstruct what a machine fetched earlier.",
          "links": [
            {
              "phrase": "Docker's documentation",
              "to": "https://docs.docker.com/dhi/explore/security-concepts/digests/",
              "className": "contextual-resource-link"
            }
          ]
        },
        "Multi-platform images have an overall image index and a separate image for each platform, with different digests. Compare the captured identity at the appropriate level with the incident evidence. A digest identifies content; the match to the vendor's findings tells you whether that content is affected. An unexplained mismatch needs to stay unresolved.",
        "Downloading an image into a local cache and running it are separate events. If an affected image remained locally, it could be started after the registry tags were corrected. Check relevant production, developer/build and test records for when each artifact arrived and whether it ran. Do not start a suspect environment merely to obtain that evidence.",
        "LiteLLM says its private enterprise registry was outside the affected channel. An enterprise contract alone does not establish where an installation came from; the recorded source and artifact identity should support that conclusion. If your records establish that only unaffected artifacts were present, scope the incident-specific response to that finding."
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
              "to": "https://github.com/BerriAI/litellm/issues/47826",
              "className": "contextual-resource-link"
            }
          ]
        },
        "If an affected proxy could reach a provider key used elsewhere in your firm, rebuilding the proxy would not invalidate that key. Trace the access that the environment had, and keep a separate record of credential revocation or rotation and activity review. Use the authorized recovery process for those changes; an interrupted dependency can require coordinated replacement. A rebuild is not evidence that the credential work is complete.",
        {
          "text": "Possible access is not proof that every credential was taken or used. The recovery record should distinguish confirmed findings from response assumptions and gaps in the records. Machluf's follow-up also explains why missing temporary markers cannot establish that an environment is clean. An unknown should stay visible in the recovery record.",
          "links": [
            {
              "phrase": "follow-up",
              "to": "https://github.com/BerriAI/litellm/issues/47826#issuecomment-6316601885",
              "className": "contextual-resource-link"
            }
          ]
        }
      ]
    },
    {
      "h": "Protect the evidence before you rebuild",
      "ps": [
        {
          "text": "Python's documentation explains that executable lines in .pth files can run at interpreter startup even when the intended package is never imported. LiteLLM therefore warns against beginning with Python or pip inside a suspect environment. Do not launch those tools in a suspect environment to check its version. Preserve the evidence required by your authorized response process before replacing the environment, and use trusted material for the rebuild.",
          "links": [
            {
              "phrase": "Python's documentation",
              "to": "https://docs.python.org/3.13/library/site.html",
              "className": "contextual-resource-link"
            }
          ]
        },
        {
          "text": "LiteLLM published its completed attack-chain investigation on October 23, 2026. Tie your recovery record to that canonical investigation and the evidence for your deployment; the earlier disclosure includes findings the vendor later corrected.",
          "links": [
            {
              "phrase": "completed attack-chain investigation",
              "to": "https://docs.litellm.ai/blog/security-incident-oct-21-2026-attack-chain",
              "className": "contextual-resource-link"
            }
          ]
        }
      ]
    },
    {
      "h": "Decide what the recovery record supports",
      "ps": [
        "Work through the deployment record before accepting recovery as complete. Keep an unanswered question visible rather than substituting a version screenshot for it:",
        {
          "list": [
            "Confirm whether your services use LiteLLM and identify the relevant production, developer/build and test environments reviewed.",
            "Record the source, package version or image digest, and available installation and execution timeline against LiteLLM's affected-artifact list.",
            "Explain which credentials an affected environment could reach, what was revoked or rotated, and what activity was reviewed.",
            "Identify who owns recovery, the evidence supporting return to use, and any unanswered questions with a date for the next update."
          ],
          "ordered": false
        },
        {
          "text": "Use that record to decide whether recovery is supported and which unresolved risks still need an authorized decision. Your incident response plan should identify that authority. A version screenshot belongs in that record alongside the execution evidence and the completed credential work.",
          "links": [
            {
              "phrase": "incident response plan",
              "to": "/resources/incident-response-plan-small-business/",
              "className": "contextual-resource-link"
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
    "title": "Keep your security decisions and evidence current.",
    "sub": "Discuss the security work and evidence you need to keep current. Helm Command provides program coordination within an agreed scope. Your existing IT arrangements still cover patching and routine remediation.",
    "label": "Discuss security-program support",
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
