import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import { Link } from "react-router-dom";
import { M as Meta, s as siteUrl, S as ScrollCue, D as DirectionIcon, B as Band, C as CtaBand, p as productList } from "../main.mjs";
import { P as ProductMotif } from "./ProductMotif-CoTE1ELm.js";
import "react";
import "vite-react-ssg";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
import "@astryxdesign/core/Button";
const tileOrder = ["helm-command", "helm-mail", "helm-watch", "helm-ready", "helm-aware"];
const tileRank = (slug) => {
  const i = tileOrder.indexOf(slug);
  return i === -1 ? tileOrder.length : i;
};
const pricingTiles = [...productList].sort((a, b) => tileRank(a.slug) - tileRank(b.slug));
const displayPrice = (price) => price.replace(/\s+fixed fee$/i, "");
const pricingLedger = pricingTiles.flatMap((product) => {
  const minimumBySlug = {
    "helm-command": "Qualified fit required",
    "helm-mail": "$1,000 / month account",
    "helm-watch": "$200 / month account",
    "helm-ready": "$2,500 project fee",
    "helm-aware": "$2,500 project fee"
  };
  return [{
    offer: product.name,
    slug: product.slug,
    bestFor: product.bestFor,
    price: product.commercialState === "design-partner" ? "Fit review" : displayPrice(product.price),
    commitment: product.term,
    minimum: minimumBySlug[product.slug] ?? "See offer details"
  }];
});
function Pricing() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Pricing: Clear Scope, No Surprises | Helm",
        desc: "Fit-priced security program leadership through Helm Command, plus published pricing for email security, awareness, compliance readiness, and device monitoring.",
        path: "/pricing",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Helm", item: siteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Pricing", item: siteUrl("/pricing") }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane brand-hero pricing-hero", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "brand-static" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("h1", { className: "reveal d1 hero-title-compact", children: "Know the price and scope before work starts." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "Helm Mail, Aware, Ready, and Watch have published unit or project pricing. Command begins with a fit and complexity review because the work depends on the systems, responsibilities, and coordination involved." })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsx("section", { className: "pricing-ledger", "aria-labelledby": "pricing-ledger-title", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs("div", { className: "pricing-ledger-head", children: [
        /* @__PURE__ */ jsx("h2", { id: "pricing-ledger-title", className: "observe", children: "Compare every offer" }),
        /* @__PURE__ */ jsx("p", { className: "observe d1", children: "Compare who each service is for, how it is priced, and the minimum commitment. Open the service page for inclusions, exclusions, and common questions." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pricing-ledger-scroll observe d2", children: /* @__PURE__ */ jsxs("table", { children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "col", children: "Offer" }),
          /* @__PURE__ */ jsx("th", { scope: "col", children: "Best for" }),
          /* @__PURE__ */ jsx("th", { scope: "col", children: "Price approach" }),
          /* @__PURE__ */ jsx("th", { scope: "col", children: "Commitment" }),
          /* @__PURE__ */ jsx("th", { scope: "col", children: "Minimum" }),
          /* @__PURE__ */ jsx("th", { scope: "col", children: /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Offer details" }) })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: pricingLedger.map((row) => /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { scope: "row", "data-label": "Offer", children: row.offer }),
          /* @__PURE__ */ jsx("td", { "data-label": "Best for", children: row.bestFor }),
          /* @__PURE__ */ jsx("td", { "data-label": "Price approach", className: "pricing-ledger-price", children: row.price }),
          /* @__PURE__ */ jsx("td", { "data-label": "Commitment", children: row.commitment }),
          /* @__PURE__ */ jsx("td", { "data-label": "Minimum", children: row.minimum }),
          /* @__PURE__ */ jsx("td", { className: "pricing-ledger-action", children: /* @__PURE__ */ jsxs("a", { href: `#pricing-${row.slug}`, children: [
            "View details ",
            /* @__PURE__ */ jsx(DirectionIcon, {})
          ] }) })
        ] }, row.offer)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Band, { variant: "raised", children: /* @__PURE__ */ jsx("div", { className: "product-grid four pricing-product-grid", children: pricingTiles.map((p, i) => /* @__PURE__ */ jsxs(
      "div",
      {
        id: `pricing-${p.slug}`,
        className: `product-tile observe d${Math.min(i + 1, 5)}${p.commercialState === "design-partner" ? " pricing-flagship" : ""}`,
        children: [
          /* @__PURE__ */ jsx(ProductMotif, { kind: p.motif }),
          /* @__PURE__ */ jsx("h2", { className: "product-tile-title", children: p.name }),
          /* @__PURE__ */ jsxs("p", { children: [
            /* @__PURE__ */ jsx("strong", { children: "Best for" }),
            " ",
            p.bestFor,
            "."
          ] }),
          p.pricingOptions ? /* @__PURE__ */ jsx("div", { className: "price-options", children: p.pricingOptions.map((option) => /* @__PURE__ */ jsxs("div", { className: "price-option", children: [
            /* @__PURE__ */ jsx("div", { className: "price-option-name", children: option.name }),
            /* @__PURE__ */ jsxs("div", { className: "price-row", children: [
              /* @__PURE__ */ jsx("h3", { children: displayPrice(option.price) }),
              /* @__PURE__ */ jsx("span", { className: "term-chip", children: option.term })
            ] }),
            /* @__PURE__ */ jsx("p", { children: option.detail })
          ] }, option.name)) }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsxs("div", { className: "price-row", children: [
              /* @__PURE__ */ jsx("h3", { children: displayPrice(p.price) }),
              /* @__PURE__ */ jsx("span", { className: "term-chip", children: p.term })
            ] }),
            /* @__PURE__ */ jsx("p", { children: p.priceDetail })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "check-list pricing-feature-list", children: p.features.map((f) => /* @__PURE__ */ jsx("li", { children: f.title }, f.title)) }),
          /* @__PURE__ */ jsxs(Link, { to: `/${p.slug}/`, className: "tile-link", children: [
            "Learn more about ",
            p.name,
            " ",
            /* @__PURE__ */ jsx(DirectionIcon, {})
          ] })
        ]
      },
      p.slug
    )) }) }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsxs("div", { className: "band-head", children: [
        /* @__PURE__ */ jsx("h2", { className: "observe", children: "What the price looks like in practice" }),
        /* @__PURE__ */ jsx("p", { className: "observe d1", children: "The standardized services use the published unit or project price. Command is different because the scope depends on the security work already underway and the number of teams Helm must coordinate." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "price-math", children: [
        /* @__PURE__ */ jsxs("article", { className: "price-math-tile observe", children: [
          /* @__PURE__ */ jsx("div", { className: "price-math-eq", children: "20 people × $50" }),
          /* @__PURE__ */ jsx("div", { className: "price-math-result", children: "$1,000 / month" }),
          /* @__PURE__ */ jsx("p", { children: "Helm Mail's minimum monthly charge, including email protection, reporting and triage, simulations, and awareness learning." })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "price-math-tile observe d1", children: [
          /* @__PURE__ */ jsx("div", { className: "price-math-eq", children: "5 people × $40" }),
          /* @__PURE__ */ jsx("div", { className: "price-math-result", children: "$200 / month" }),
          /* @__PURE__ */ jsx("p", { children: "Helm Watch for five covered users and up to ten eligible workstations." })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "price-math-tile observe d2", children: [
          /* @__PURE__ */ jsx("div", { className: "price-math-eq", children: "One scoped workshop" }),
          /* @__PURE__ */ jsx("div", { className: "price-math-result", children: "$2,500 to $4,000" }),
          /* @__PURE__ */ jsx("p", { children: "Helm Aware is a fixed-fee engagement, not another monthly subscription." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pricing-terms", children: [
        /* @__PURE__ */ jsxs("article", { className: "pricing-term observe", children: [
          /* @__PURE__ */ jsx("h3", { children: "Mail: 12-month initial term" }),
          /* @__PURE__ */ jsx("p", { children: "$50 per protected user each month, with a 20-user or $1,000 account minimum." })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "pricing-term observe d1", children: [
          /* @__PURE__ */ jsx("h3", { children: "Watch: month to month" }),
          /* @__PURE__ */ jsx("p", { children: "$40 per covered user each month, with a five-user or $200 account minimum." })
        ] }),
        /* @__PURE__ */ jsxs("article", { className: "pricing-term observe d2", children: [
          /* @__PURE__ */ jsx("h3", { children: "Aware and Ready: fixed fee" }),
          /* @__PURE__ */ jsx("p", { children: "Deliverables, exclusions, and separately priced follow-on work are written down before the project starts." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "Need an accountable security owner?",
        sub: "Tell us what is creating pressure and who owns IT today. We will confirm whether Command or a focused service is the better fit.",
        cta: "Talk to us",
        source: "pricing cta",
        mode: "book"
      }
    )
  ] });
}
export {
  Pricing as default
};
