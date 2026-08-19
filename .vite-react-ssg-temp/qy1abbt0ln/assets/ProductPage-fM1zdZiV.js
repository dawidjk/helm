import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import { useParams, Link } from "react-router-dom";
import { p as productList, M as Meta, s as siteUrl, A as ActionLink, L as LeadForm, S as ScrollCue, B as Band, C as CtaBand } from "../main.mjs";
import { P as ProductMotif } from "./ProductMotif-CoTE1ELm.js";
import { B as BOOK_CTA } from "./ctaCopy-Zcyc_nKq.js";
import "react";
import "vite-react-ssg";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
import "@astryxdesign/core/Button";
import "./lanes-BgR10_g3.js";
function ProductPage() {
  const { slug } = useParams();
  const p = productList.find((x) => x.slug === slug);
  if (!p) throw new Response("Product not found", { status: 404, statusText: "Not Found" });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: `${p.metaTitle} | Helm`,
        desc: p.metaDesc,
        path: `/${p.slug}`,
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: p.name,
              description: p.metaDesc,
              provider: { "@type": "Organization", name: "Helm Security LLC", url: siteUrl("/") }
            },
            {
              "@type": "FAQPage",
              mainEntity: p.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a }
              }))
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Products", item: siteUrl("/") },
                { "@type": "ListItem", position: 2, name: p.name, item: siteUrl(`/${p.slug}`) }
              ]
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane brand-hero product-hero hero-fit-dense", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "brand-static" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsxs("h1", { className: "reveal d1 hero-title-compact", children: [
          p.name,
          ": ",
          p.tagline
        ] }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: p.desc }),
        /* @__PURE__ */ jsx("div", { className: "hero-ctas reveal d3", children: p.ctaMode === "book" ? /* @__PURE__ */ jsx(
          ActionLink,
          {
            to: "/contact/",
            label: p.slug === "helm-command" ? "Discuss Command" : "Talk to us"
          }
        ) : /* @__PURE__ */ jsx(LeadForm, { source: `product ${p.slug}`, cta: "Get my free scan", compact: true }) }),
        /* @__PURE__ */ jsx("div", { className: "hero-note reveal d3", children: p.commercialState === "design-partner" ? /* @__PURE__ */ jsxs(Fragment, { children: [
          p.price,
          " · scope and price after fit review"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          p.price,
          " · ",
          /* @__PURE__ */ jsx(Link, { to: "/pricing/", children: "full pricing" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsxs(Band, { variant: "raised", children: [
      /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Service details" }),
      /* @__PURE__ */ jsxs("div", { className: "split", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "observe", children: "What you get" }),
          p.features.map((f, i) => /* @__PURE__ */ jsxs("div", { className: `product-feature observe d${Math.min(i + 1, 5)}`, children: [
            /* @__PURE__ */ jsx("h3", { children: f.title }),
            /* @__PURE__ */ jsx("p", { children: f.body })
          ] }, f.title))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "product-tile product-summary observe d1", children: [
          /* @__PURE__ */ jsx(ProductMotif, { kind: p.motif }),
          /* @__PURE__ */ jsx("h2", { className: "product-tile-title", children: p.name }),
          p.pricingOptions ? /* @__PURE__ */ jsx("div", { className: "price-options", children: p.pricingOptions.map((option) => /* @__PURE__ */ jsxs("div", { className: "price-option", children: [
            /* @__PURE__ */ jsx("div", { className: "price-option-name", children: option.name }),
            /* @__PURE__ */ jsx("h3", { children: option.price }),
            /* @__PURE__ */ jsx("p", { children: option.detail })
          ] }, option.name)) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("h3", { className: "product-summary-price", children: p.price }),
            /* @__PURE__ */ jsx("p", { children: p.priceDetail })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsx("div", { className: "band-head observe", children: /* @__PURE__ */ jsx("h2", { children: "How it works" }) }),
      /* @__PURE__ */ jsx("ol", { className: "steps-flow", children: p.how.map((s, i) => /* @__PURE__ */ jsxs("li", { className: `observe d${Math.min(i + 1, 5)}`, children: [
        /* @__PURE__ */ jsx("div", { className: "step-dot", children: s.num }),
        /* @__PURE__ */ jsx("h3", { children: s.title }),
        /* @__PURE__ */ jsx("p", { children: s.body })
      ] }, s.num)) })
    ] }),
    /* @__PURE__ */ jsxs(Band, { variant: "raised", children: [
      /* @__PURE__ */ jsx("div", { className: "band-head observe", children: /* @__PURE__ */ jsx("h2", { children: "Common questions" }) }),
      /* @__PURE__ */ jsx("div", { className: "faq-list", children: p.faqs.map((f, i) => /* @__PURE__ */ jsxs("div", { className: `faq-item observe d${Math.min(i + 1, 5)}`, children: [
        /* @__PURE__ */ jsx("h3", { children: f.q }),
        /* @__PURE__ */ jsx("p", { children: f.a })
      ] }, f.q)) })
    ] }),
    p.ctaMode === "book" ? /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: BOOK_CTA.title,
        sub: BOOK_CTA.sub,
        cta: BOOK_CTA.label,
        source: `product ${p.slug} cta`,
        mode: "book"
      }
    ) : /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "Check your public email controls. Free.",
        sub: "The free scan reports on your domain's public email and web configuration, with plain-English findings and next steps.",
        source: `product ${p.slug} cta`
      }
    )
  ] });
}
export {
  ProductPage as default
};
