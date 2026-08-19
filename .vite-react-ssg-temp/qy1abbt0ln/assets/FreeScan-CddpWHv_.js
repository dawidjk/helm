import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { M as Meta, L as LeadForm, S as ScrollCue, B as Band } from "../main.mjs";
import { P as PanelVisual } from "./PanelVisual-DfnmiR52.js";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import "vite-react-ssg";
import "react";
import "react-router-dom";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
import "@astryxdesign/core/Button";
function FreeScan() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Free Email Security Scan: Plain-English Report | Helm",
        desc: "Free automated scan of public SPF, common DKIM selectors, DMARC, MX, DNSSEC, HTTPS certificate, MTA-STS, TLS-RPT, and limited SMTP signals. No login required.",
        path: "/free-scan"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane brand-hero free-scan-hero hero-fit-dense", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "brand-static" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("h1", { className: "reveal d1 hero-title-compact", children: "See whether your public email controls make impersonation easier." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "Enter your work email. The scan checks the public records receiving mail systems use when someone sends a message in your company’s name. You receive a scored, plain-English report, usually in about a minute." }),
        /* @__PURE__ */ jsx("div", { className: "hero-ctas reveal d3", children: /* @__PURE__ */ jsx(LeadForm, { source: "free-scan page", cta: "Run my free scan", compact: true }) }),
        /* @__PURE__ */ jsx("div", { className: "hero-note reveal d3", children: "No credit card. No required meeting. Your report usually appears in about a minute." })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsxs(Band, { variant: "raised", children: [
      /* @__PURE__ */ jsx("h2", { className: "sr-only", children: "Inside the free scan report" }),
      /* @__PURE__ */ jsxs("div", { className: "split", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "observe", children: "What the report covers" }),
          /* @__PURE__ */ jsxs("ul", { className: "check-list", children: [
            /* @__PURE__ */ jsx("li", { className: "observe d1", children: "Does your DMARC policy tell receivers to reject authentication failures?" }),
            /* @__PURE__ */ jsx("li", { className: "observe d2", children: "What does your SPF record authorize, and is DKIM visible under common selectors?" }),
            /* @__PURE__ */ jsx("li", { className: "observe d3", children: "Can the scanner reach your website over HTTPS with a current certificate?" }),
            /* @__PURE__ */ jsx("li", { className: "observe d4", children: "Are MTA-STS and TLS-RPT mail-transport records published?" }),
            /* @__PURE__ */ jsx("li", { className: "observe d5", children: "Findings grouped by category, with plain-English impact and next steps" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(PanelVisual, { domain: "yourcompany.com" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsx("div", { className: "band-head observe", children: /* @__PURE__ */ jsx("h2", { children: "What happens after" }) }),
      /* @__PURE__ */ jsxs("ol", { className: "steps-flow", children: [
        /* @__PURE__ */ jsxs("li", { className: "observe d1", children: [
          /* @__PURE__ */ jsx("div", { className: "step-dot", children: "1" }),
          /* @__PURE__ */ jsx("h3", { children: "Confirm your domain" }),
          /* @__PURE__ */ jsx("p", { children: "You land on our secure portal with your company domain filled in from your email. One confirmation and the scan starts." })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "observe d2", children: [
          /* @__PURE__ */ jsx("div", { className: "step-dot", children: "2" }),
          /* @__PURE__ */ jsx("h3", { children: "Your report appears" }),
          /* @__PURE__ */ jsx("p", { children: "Usually in about a minute, written for a business owner, not an IT department." })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "observe d3", children: [
          /* @__PURE__ */ jsx("div", { className: "step-dot", children: "3" }),
          /* @__PURE__ */ jsx("h3", { children: "We explain the gaps" }),
          /* @__PURE__ */ jsx("p", { children: "If the scan finds at least two visible gaps, we send a short follow-up sequence tied to your report." })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "observe d4", children: [
          /* @__PURE__ */ jsx("div", { className: "step-dot", children: "4" }),
          /* @__PURE__ */ jsx("h3", { children: "You decide what happens next" }),
          /* @__PURE__ */ jsx("p", { children: "Fix the findings yourself, ask us for help, or unsubscribe from the follow-up at any time." })
        ] })
      ] })
    ] })
  ] });
}
export {
  FreeScan as default
};
