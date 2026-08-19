import { jsxs, jsx } from "react/jsx-runtime";
import { H as HelmMark } from "../main.mjs";
function PanelVisual({ domain = "acme-mfg.com" }) {
  return /* @__PURE__ */ jsxs("div", { className: "panel-visual report observe d1", children: [
    /* @__PURE__ */ jsxs("div", { className: "rv-head", children: [
      /* @__PURE__ */ jsxs("span", { className: "rv-brand", children: [
        /* @__PURE__ */ jsx(HelmMark, { size: 18 }),
        " Helm Scan Report"
      ] }),
      /* @__PURE__ */ jsx("span", { className: "rv-domain", children: domain })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "rv-score", children: [
      /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 96 96", "aria-hidden": true, children: [
        /* @__PURE__ */ jsx("circle", { cx: "48", cy: "48", r: "40", stroke: "rgba(56, 161, 105, 0.18)", strokeWidth: "8", fill: "none" }),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: "rv-ring",
            cx: "48",
            cy: "48",
            r: "40",
            stroke: "#38A169",
            strokeWidth: "8",
            fill: "none",
            strokeLinecap: "round",
            strokeDasharray: "251",
            strokeDashoffset: "251",
            transform: "rotate(-90 48 48)"
          }
        ),
        /* @__PURE__ */ jsx("text", { x: "48", y: "44", textAnchor: "middle", fill: "#fff", fontSize: "22", fontWeight: "700", children: "68" }),
        /* @__PURE__ */ jsx("text", { x: "48", y: "62", textAnchor: "middle", fill: "rgba(235,240,250,0.55)", fontSize: "9", children: "/ 100" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "rv-score-label", children: "Email exposure score" }),
        /* @__PURE__ */ jsx("div", { className: "rv-score-sub", children: "3 findings need attention" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "rv-rows", children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "rv-badge ok", children: "✓" }),
        " SPF record valid"
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "rv-badge ok", children: "✓" }),
        " MX records healthy"
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "rv-badge warn", children: "!" }),
        " DMARC not enforced, spoofing possible"
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "rv-badge warn", children: "!" }),
        " MTA-STS policy not published"
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "rv-badge warn", children: "!" }),
        " DNSSEC does not appear to be enabled"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rv-foot", children: "Delivered in plain English, in about a minute." })
  ] });
}
export {
  PanelVisual as P
};
