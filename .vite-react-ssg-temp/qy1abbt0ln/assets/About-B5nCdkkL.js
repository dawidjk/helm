import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import { M as Meta, a as serviceAreaJsonLd, b as businessPhone, l as linkedInUrl, s as siteUrl, S as ScrollCue, B as Band, C as CtaBand } from "../main.mjs";
import "react";
import "vite-react-ssg";
import "react-router-dom";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
import "@astryxdesign/core/Button";
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "About Helm: Security That Answers to Your Business",
        desc: "Meet Helm Security, a leadership-led New Jersey company providing managed email security, AI scam readiness, and compliance support.",
        path: "/about",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Helm Security LLC",
          url: siteUrl("/"),
          sameAs: [linkedInUrl],
          email: "hello@helmsecured.com",
          telephone: businessPhone.e164,
          areaServed: serviceAreaJsonLd,
          address: { "@type": "PostalAddress", addressRegion: "NJ", addressCountry: "US" },
          description: "Email security, AI scam defense, and compliance readiness for small and medium-sized businesses.",
          employee: [
            {
              "@type": "Person",
              name: "Kelly Kluszczynski",
              image: "https://helmsecured.com/team/kelly-kluszczynski.png",
              jobTitle: "Vice President, Growth & Partnerships"
            },
            {
              "@type": "Person",
              name: "Dawid Kluszczynski",
              image: "https://helmsecured.com/team/dawid-kluszczynski.png",
              jobTitle: "Vice President, Product & Delivery"
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane brand-hero", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "brand-static" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("h1", { className: "reveal d1 hero-title-readable", children: "Clear security help for businesses without a security department." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "A small business can lose money through one changed invoice, expose client information through one account, or lose a contract because it cannot support a security answer. Helm helps identify the problem, choose a practical response, and follow the work through." })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsxs(Band, { variant: "raised", children: [
      /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "How Helm works" }),
      /* @__PURE__ */ jsxs("div", { className: "split", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "observe", children: "Who we are" }),
          /* @__PURE__ */ jsx("p", { className: "observe d1", children: "Helm is a New Jersey company run by Kelly and Dawid Kluszczynski. Dawid leads the technical delivery. Kelly leads customer communication, growth, and partnerships." }),
          /* @__PURE__ */ jsx("p", { className: "observe d2", children: "Small and medium-sized businesses already have plenty of tools and alerts. The harder problem is knowing which issue matters, who should fix it, and whether the work was completed. Helm is designed to provide that accountability in plain language and with the price and scope stated up front." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "observe", children: "How we operate" }),
          /* @__PURE__ */ jsxs("ul", { className: "check-list", children: [
            /* @__PURE__ */ jsx("li", { className: "observe d1", children: "Plain English, always. If you need a glossary, we've failed" }),
            /* @__PURE__ */ jsx("li", { className: "observe d2", children: "Published starting prices and scope bands, confirmed in writing before work starts" }),
            /* @__PURE__ */ jsx("li", { className: "observe d3", children: "Honest architecture: our monitoring is backed by 24/7 security operations partners, and we say so" }),
            /* @__PURE__ */ jsx("li", { className: "observe d4", children: "No fear selling. Every warning we give ends in a concrete, priced fix" }),
            /* @__PURE__ */ jsx("li", { className: "observe d5", children: "Automation-first: machines watch the logs, humans make the calls" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsxs("div", { className: "band-head", children: [
        /* @__PURE__ */ jsx("h2", { className: "observe d1", children: "You work directly with the two people running Helm." }),
        /* @__PURE__ */ jsx("p", { className: "observe d2", children: "Kelly and Dawid stay involved from the first conversation through delivery and follow-up." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "founder-grid", children: [
        /* @__PURE__ */ jsxs("article", { className: "founder-card observe", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "founder-portrait",
              src: "/team/kelly-kluszczynski.png",
              alt: "Kelly Kluszczynski, VP of Growth and Partnerships at Helm Security",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Kelly Kluszczynski" }),
            /* @__PURE__ */ jsx("p", { className: "founder-role", children: "VP, Growth & Partnerships" }),
            /* @__PURE__ */ jsx("p", { children: "Kelly leads discovery, customer communication, marketing, and partner relationships. She makes sure the work addresses the reason the customer came to Helm and that the next step is clear." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("article", { id: "dawid-kluszczynski", className: "founder-card observe d1", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              className: "founder-portrait",
              src: "/team/dawid-kluszczynski.png",
              alt: "Dawid Kluszczynski, VP of Product and Delivery at Helm Security",
              loading: "lazy"
            }
          ),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Dawid Kluszczynski" }),
            /* @__PURE__ */ jsx("p", { className: "founder-role", children: "VP, Product & Delivery" }),
            /* @__PURE__ */ jsx("p", { children: "Dawid designs Helm's services, automation, and technical delivery. He follows the work from the first scan through deployment, documentation, and ongoing review." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "founder-note observe d2", children: "Helm is a two-person company today. Established security platforms provide continuous monitoring where the service says so, and we are clear about which work they perform and which work Helm performs." })
    ] }),
    /* @__PURE__ */ jsx(Band, { variant: "raised", children: /* @__PURE__ */ jsxs("div", { className: "band-head", children: [
      /* @__PURE__ */ jsx("h2", { className: "observe", children: 'Why "Helm"' }),
      /* @__PURE__ */ jsx("p", { className: "observe d1", children: "The helm is the one place on a ship where you can see everything and steer. That's the product: not another alarm going off somewhere below deck, but a steady hand and a clear view, so you can run your business while someone competent watches the water." })
    ] }) }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "Start with the free scan.",
        sub: "It's the fastest way to see how we work: real findings, plain English, no pressure.",
        source: "about cta"
      }
    )
  ] });
}
export {
  About as default
};
