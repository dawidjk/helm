import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { M as Meta, s as siteUrl, A as ActionLink, L as LeadForm, S as ScrollCue, B as Band, c as canonicalPath, D as DirectionIcon, C as CtaBand } from "../main.mjs";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import { P as PanelVisual } from "./PanelVisual-DfnmiR52.js";
import "vite-react-ssg";
import "react";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
import "@astryxdesign/core/Button";
function StatusChip({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "deadline-chip-row reveal", children: /* @__PURE__ */ jsx("span", { className: "deadline-chip", children: text }) });
}
function LanePage({ lane }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: lane.metaTitle,
        desc: lane.metaDesc,
        path: `/${lane.slug}`,
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: lane.metaTitle.split(" | ")[0],
              serviceType: lane.serviceType || "Managed cybersecurity services",
              description: lane.metaDesc,
              url: siteUrl(`/${lane.slug}`),
              provider: {
                "@type": "Organization",
                name: "Helm Security LLC",
                url: siteUrl("/")
              },
              areaServed: { "@type": "State", name: "New Jersey" },
              audience: { "@type": "BusinessAudience", audienceType: lane.eyebrow }
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Industries", item: siteUrl("/") },
                { "@type": "ListItem", position: 2, name: lane.eyebrow, item: siteUrl(`/${lane.slug}`) }
              ]
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: `hero lane lane-hero hero-fit-dense${lane.regulatoryUpdate ? " lane-hero-decision" : ""}`, children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: lane.backdrop }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        lane.statusChip && !lane.regulatoryUpdate && /* @__PURE__ */ jsx(StatusChip, { text: lane.statusChip }),
        /* @__PURE__ */ jsx("h1", { className: "reveal d1 hero-title-readable", children: lane.headline }),
        /* @__PURE__ */ jsx("div", { className: "lane-hero-mobile-scene reveal d2", "aria-hidden": true, children: /* @__PURE__ */ jsx(HeroBackdrop, { kind: lane.backdrop }) }),
        /* @__PURE__ */ jsxs("p", { className: "sub reveal d2", children: [
          /* @__PURE__ */ jsxs("strong", { className: "lane-audience", children: [
            lane.eyebrow,
            "."
          ] }),
          " ",
          lane.sub
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hero-ctas reveal d3", children: lane.ctaMode === "book" ? /* @__PURE__ */ jsx(ActionLink, { to: "/contact/", label: lane.primaryCta }) : /* @__PURE__ */ jsx(LeadForm, { source: `${lane.slug} hero`, cta: lane.primaryCta, compact: true }) }),
        /* @__PURE__ */ jsxs("div", { className: "hero-note reveal d3", children: [
          "See ",
          /* @__PURE__ */ jsx(Link, { to: "/pricing/", children: "published pricing" }),
          " for Helm Mail, Aware, Ready, and Watch"
        ] })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    lane.regulatoryUpdate && /* @__PURE__ */ jsx("section", { className: "lane-regulatory-update", "aria-labelledby": `${lane.slug}-regulatory-update-title`, children: /* @__PURE__ */ jsxs("div", { className: "wrap lane-regulatory-update-inner", children: [
      /* @__PURE__ */ jsxs("header", { className: "lane-regulatory-update-head", children: [
        lane.statusChip && /* @__PURE__ */ jsx(StatusChip, { text: lane.statusChip }),
        /* @__PURE__ */ jsx("h2", { id: `${lane.slug}-regulatory-update-title`, children: lane.regulatoryUpdate.title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lane-regulatory-ledger", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: "What changed" }),
          /* @__PURE__ */ jsx("p", { children: lane.regulatoryUpdate.changed })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: "What did not" }),
          /* @__PURE__ */ jsx("p", { children: lane.regulatoryUpdate.unchanged })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Band, { variant: "raised", children: [
      /* @__PURE__ */ jsx("div", { className: "band-head observe", children: /* @__PURE__ */ jsx("h2", { children: "What can go wrong" }) }),
      /* @__PURE__ */ jsx("div", { className: "risk-list", children: lane.pains.map((p) => /* @__PURE__ */ jsxs("div", { className: "risk-item observe", children: [
        /* @__PURE__ */ jsx("h3", { children: p.title }),
        /* @__PURE__ */ jsx("p", { children: p.body })
      ] }, p.title)) })
    ] }),
    lane.evidence && /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsxs("div", { className: "band-head lane-evidence-head", children: [
        /* @__PURE__ */ jsx("h2", { className: "observe", children: "What published sources show." }),
        /* @__PURE__ */ jsx("p", { className: "observe d1", children: "The figures and guidance below include the limits needed to read them accurately." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lane-evidence-list", children: lane.evidence.map((item, i) => /* @__PURE__ */ jsxs("article", { className: `lane-evidence-row observe d${Math.min(i + 1, 5)}`, children: [
        /* @__PURE__ */ jsx("strong", { className: "lane-evidence-value", children: item.value }),
        /* @__PURE__ */ jsx("p", { children: item.finding }),
        /* @__PURE__ */ jsx("a", { href: item.href, children: item.source })
      ] }, `${item.value}-${item.source}`)) })
    ] }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsxs("div", { className: "band-head", children: [
        /* @__PURE__ */ jsx("h2", { className: "observe", children: lane.planTitle }),
        /* @__PURE__ */ jsx("p", { className: "observe d1", children: lane.planSub })
      ] }),
      /* @__PURE__ */ jsx("ol", { className: "steps-flow", children: lane.steps.map((s, i) => /* @__PURE__ */ jsxs("li", { className: `observe d${Math.min(i + 1, 5)}`, children: [
        /* @__PURE__ */ jsx("div", { className: "step-dot", children: s.num }),
        /* @__PURE__ */ jsx("h3", { children: s.title }),
        /* @__PURE__ */ jsx("p", { children: s.body })
      ] }, s.num)) })
    ] }),
    /* @__PURE__ */ jsx(Band, { variant: "raised", children: /* @__PURE__ */ jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "observe", children: lane.proof.title }),
        /* @__PURE__ */ jsx("ul", { className: "check-list", children: lane.proof.points.map((pt, i) => /* @__PURE__ */ jsx("li", { className: `observe d${Math.min(i + 1, 5)}`, children: pt }, pt)) })
      ] }),
      /* @__PURE__ */ jsx(PanelVisual, { domain: lane.reportDomain })
    ] }) }),
    lane.commonQuestions && /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsxs("div", { className: "band-head lane-questions-head", children: [
        /* @__PURE__ */ jsx("h2", { className: "observe", children: "Questions to answer before choosing a service." }),
        /* @__PURE__ */ jsx("p", { className: "observe d1", children: "The answer determines which systems, people, and evidence belong in scope." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lane-question-list", children: lane.commonQuestions.map((item, index) => /* @__PURE__ */ jsxs("article", { className: `lane-question-row observe d${Math.min(index + 1, 5)}`, children: [
        /* @__PURE__ */ jsx("h3", { children: item.question }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { children: item.answer }),
          item.resource && /* @__PURE__ */ jsx(Link, { to: canonicalPath(`/resources/${item.resource.slug}`), children: item.resource.label })
        ] })
      ] }, item.question)) })
    ] }),
    /* @__PURE__ */ jsxs(Band, { variant: lane.commonQuestions ? "raised" : void 0, children: [
      /* @__PURE__ */ jsxs("div", { className: "band-head", children: [
        /* @__PURE__ */ jsx("h2", { className: "observe", children: "Guides for the problem in front of you." }),
        /* @__PURE__ */ jsx("p", { className: "observe d1", children: "Start with the closest question and use the related guide for the next step." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lane-strip", children: lane.resources.map((resource, i) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: canonicalPath(`/resources/${resource.slug}`),
          className: `lane-row observe d${Math.min(i + 1, 5)}`,
          children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "lane-title", children: resource.title }) }),
            /* @__PURE__ */ jsxs("div", { className: "lane-side", children: [
              /* @__PURE__ */ jsx("span", { className: "lane-note", children: resource.note }),
              /* @__PURE__ */ jsx(DirectionIcon, { className: "lane-arrow" })
            ] })
          ]
        },
        resource.slug
      )) })
    ] }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: lane.cta.title,
        sub: lane.cta.sub,
        cta: lane.cta.label,
        source: `${lane.slug} cta band`,
        mode: lane.ctaMode
      }
    )
  ] });
}
export {
  LanePage as default
};
