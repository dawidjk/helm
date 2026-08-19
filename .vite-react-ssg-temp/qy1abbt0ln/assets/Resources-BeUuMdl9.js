import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import { Link } from "react-router-dom";
import { M as Meta, S as ScrollCue, B as Band, D as DirectionIcon, c as canonicalPath, C as CtaBand } from "../main.mjs";
import { articles } from "./articles-BOOF_50T.js";
import "react";
import "vite-react-ssg";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
import "@astryxdesign/core/Button";
const startChoices = [
  {
    title: "Protect email and accounts",
    description: "Set a practical Microsoft 365 security baseline.",
    slug: "m365-security-baseline"
  },
  {
    title: "Stop payment fraud",
    description: "Know what to check before accepting changed bank details.",
    slug: "invoice-fraud-red-flags"
  },
  {
    title: "Answer an insurer or customer",
    description: "Work through security questions without guessing.",
    slug: "cyber-insurance-questionnaire"
  },
  {
    title: "Meet CMMC or HIPAA requirements",
    description: "Start with the requirement that applies to your business.",
    slug: "cmmc-level-1-vs-level-2"
  }
];
const guideGroups = [
  {
    id: "secure-everyday-work",
    title: "Secure everyday accounts and devices",
    description: "Email, identity, device security, AI-use, and access decisions for the systems your team uses every day.",
    slugs: [
      "mfa-methods-compared",
      "password-managers-small-teams",
      "what-a-soc-actually-does",
      "shadow-ai-at-work",
      "ai-phishing-red-flags",
      "job-site-devices-public-wifi",
      "employee-offboarding-checklist",
      "law-firm-device-security-checklist",
      "pen-test-vs-vulnerability-scan",
      "what-is-dmarc"
    ]
  },
  {
    id: "prevent-and-respond-to-fraud",
    title: "Prevent fraud and respond when something happens",
    description: "Practical checks and response steps for vendor email compromise, wire fraud, ransomware, and deepfakes.",
    slugs: [
      "vendor-email-compromise-contractors",
      "wire-fraud-prevention-law-firms",
      "incident-response-plan-small-business",
      "deepfake-ceo-fraud"
    ]
  },
  {
    id: "prove-readiness",
    title: "Prove readiness to an insurer or customer",
    description: "Prepare accurate answers and evidence for applications, renewals, questionnaires, and backup reviews.",
    slugs: [
      "cyber-insurance-claim-denied",
      "cyber-insurance-application-walkthrough",
      "backup-testing-insurers",
      "wisp-checklist-accounting-firms"
    ]
  },
  {
    id: "cmmc-and-hipaa",
    title: "Work through CMMC and HIPAA requirements",
    description: "Understand the deadlines, scores, documents, and handling rules behind the requirement in front of you.",
    slugs: [
      "sprs-score-explained",
      "hipaa-email-rules-small-practices",
      "hipaa-risk-analysis-medical-practices",
      "cmmc-deadline-checklist",
      "ssp-poam-explained",
      "cui-handling-shop-floor"
    ]
  }
];
const articlesBySlug = new Map(articles.map((article) => [article.slug, article]));
function articleFor(slug) {
  const article = articlesBySlug.get(slug);
  if (!article) throw new Error(`Unknown resource article: ${slug}`);
  return article;
}
[
  ...startChoices.map((choice) => choice.slug),
  ...guideGroups.flatMap((group) => group.slugs)
];
function GuideLink({ article, className }) {
  return /* @__PURE__ */ jsxs(Link, { to: canonicalPath(`/resources/${article.slug}`), className, children: [
    /* @__PURE__ */ jsxs("span", { className: "resources-guide-copy", children: [
      /* @__PURE__ */ jsx("span", { className: "resources-guide-title", children: article.title }),
      /* @__PURE__ */ jsx("span", { className: "resources-guide-lane", children: article.lane })
    ] }),
    /* @__PURE__ */ jsxs("span", { className: "resources-guide-side", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        article.readMin,
        " min read"
      ] }),
      /* @__PURE__ */ jsx(DirectionIcon, {})
    ] })
  ] });
}
function Resources() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Resources: Plain-English Security Guides | Helm",
        desc: "Plain-English guides on CMMC, cyber insurance, wire fraud, DMARC, and AI scams for small and medium-sized business owners and managers.",
        path: "/resources"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane brand-hero resources-hero", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "brand-static" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("h1", { className: "reveal d1 hero-title-compact", children: "Start with the problem you need to solve." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "These guides explain what can go wrong, what the control changes, and what to do next without assuming you have a security team." })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsx(Band, { children: /* @__PURE__ */ jsxs("div", { className: "resources-index", children: [
      /* @__PURE__ */ jsxs("section", { className: "resources-start", "aria-labelledby": "resources-start-title", children: [
        /* @__PURE__ */ jsxs("div", { className: "resources-section-head", children: [
          /* @__PURE__ */ jsx("h2", { id: "resources-start-title", children: "What brought you here?" }),
          /* @__PURE__ */ jsx("p", { children: "Choose the closest problem and start with one practical guide." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "resources-start-list", children: startChoices.map((choice) => {
          const article = articleFor(choice.slug);
          return /* @__PURE__ */ jsxs(
            Link,
            {
              to: canonicalPath(`/resources/${article.slug}`),
              className: "resources-start-link",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "resources-start-copy", children: [
                  /* @__PURE__ */ jsx("h3", { children: choice.title }),
                  /* @__PURE__ */ jsx("span", { children: choice.description })
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "resources-start-side", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    article.readMin,
                    " min read"
                  ] }),
                  /* @__PURE__ */ jsx(DirectionIcon, {})
                ] })
              ]
            },
            choice.slug
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs("aside", { className: "resource-feature", "aria-labelledby": "resources-quiz-title", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { id: "resources-quiz-title", children: "AI Scam Readiness Quiz" }),
          /* @__PURE__ */ jsx("p", { children: "Answer 10 questions and get a score plus a prioritized action plan. No email address is required to see the result." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/quiz/", className: "resource-feature-link", children: [
          "Take the 3-minute quiz ",
          /* @__PURE__ */ jsx(DirectionIcon, {})
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "resources-library", "aria-labelledby": "resources-library-title", children: [
        /* @__PURE__ */ jsxs("div", { className: "resources-section-head", children: [
          /* @__PURE__ */ jsx("h2", { id: "resources-library-title", children: "Browse every guide." }),
          /* @__PURE__ */ jsx("p", { children: "Choose what you need to protect, document, or prepare for." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "resources-groups", children: guideGroups.map((group) => /* @__PURE__ */ jsxs("section", { className: "resources-group", "aria-labelledby": `${group.id}-title`, children: [
          /* @__PURE__ */ jsxs("div", { className: "resources-group-intro", children: [
            /* @__PURE__ */ jsx("h3", { id: `${group.id}-title`, children: group.title }),
            /* @__PURE__ */ jsx("p", { children: group.description })
          ] }),
          /* @__PURE__ */ jsxs("details", { children: [
            /* @__PURE__ */ jsxs("summary", { children: [
              /* @__PURE__ */ jsxs("span", { children: [
                "Browse ",
                group.slugs.length,
                " guides"
              ] }),
              /* @__PURE__ */ jsx(DirectionIcon, { className: "resources-group-arrow" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "resources-group-links", children: group.slugs.map((slug) => /* @__PURE__ */ jsx(GuideLink, { article: articleFor(slug), className: "resources-guide-link" }, slug)) })
          ] })
        ] }, group.id)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "See what your own domain is showing.",
        sub: "The free email security scan checks public domain configuration and returns a plain-English report, usually in about a minute.",
        source: "resources cta"
      }
    )
  ] });
}
export {
  Resources as default
};
