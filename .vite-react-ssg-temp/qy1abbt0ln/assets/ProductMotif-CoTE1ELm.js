import { jsxs, jsx } from "react/jsx-runtime";
function ProductMotif({ kind }) {
  return /* @__PURE__ */ jsxs("div", { className: "tile-motif", "aria-hidden": true, children: [
    kind === "command" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", children: [
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "48", r: "31", stroke: "var(--motif-line)", strokeWidth: "1.6" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "48", r: "7", fill: "var(--motif-accent)" }),
      /* @__PURE__ */ jsxs("g", { stroke: "var(--motif-line)", strokeWidth: "1.6", strokeLinecap: "round", children: [
        /* @__PURE__ */ jsx("path", { d: "M100 12 V30 M100 66 V84 M64 48 H82 M118 48 H136" }),
        /* @__PURE__ */ jsx("path", { d: "M75 23 L88 36 M112 60 L125 73 M125 23 L112 36 M88 60 L75 73" })
      ] }),
      /* @__PURE__ */ jsx("path", { d: "M100 48 L124 34", stroke: "var(--motif-accent)", strokeWidth: "2.2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("circle", { cx: "142", cy: "48", r: "5", fill: "var(--motif-surface)", stroke: "var(--motif-line)", strokeWidth: "1.6" })
    ] }),
    kind === "mail" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", children: [
      /* @__PURE__ */ jsx("rect", { x: "52", y: "18", width: "96", height: "62", rx: "8", stroke: "var(--motif-line)", strokeWidth: "1.6" }),
      /* @__PURE__ */ jsx("path", { d: "M56 24 L100 56 L144 24", stroke: "var(--motif-line)", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx("line", { className: "scan-line", x1: "52", y1: "30", x2: "148", y2: "30", stroke: "var(--motif-accent)", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("circle", { cx: "148", cy: "70", r: "15", fill: "var(--motif-surface)", stroke: "var(--motif-line)", strokeWidth: "1.6" }),
        /* @__PURE__ */ jsx("path", { d: "M142 70 l4.5 4.5 L155 65", stroke: "var(--motif-line)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
      ] })
    ] }),
    kind === "aware" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", children: [
      /* @__PURE__ */ jsx("circle", { className: "sonar s1", cx: "100", cy: "48", r: "14", stroke: "var(--motif-line)", strokeWidth: "1.6" }),
      /* @__PURE__ */ jsx("circle", { className: "sonar s2", cx: "100", cy: "48", r: "26", stroke: "var(--motif-line)", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsx("circle", { className: "sonar s3", cx: "100", cy: "48", r: "38", stroke: "var(--motif-line)", strokeWidth: "0.9" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "48", r: "4", fill: "var(--motif-accent)" }),
      /* @__PURE__ */ jsx("path", { className: "wave", d: "M20 48 h28 l6 -14 l8 28 l6 -14 h20", stroke: "var(--motif-accent)", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx("path", { className: "wave w2", d: "M132 48 h20 l6 -14 l8 28 l6 -14 h8", stroke: "var(--motif-accent)", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }),
    kind === "ready" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", children: [
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "48", r: "34", stroke: "var(--motif-muted)", strokeWidth: "5" }),
      /* @__PURE__ */ jsx(
        "circle",
        {
          className: "gauge",
          cx: "100",
          cy: "48",
          r: "34",
          stroke: "var(--motif-line)",
          strokeWidth: "5",
          strokeLinecap: "round",
          strokeDasharray: "214",
          strokeDashoffset: "32",
          transform: "rotate(-90 100 48)"
        }
      ),
      /* @__PURE__ */ jsx("path", { d: "M88 48 l8 8 L116 36", stroke: "var(--motif-accent)", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx("g", { stroke: "var(--motif-muted-accent)", strokeWidth: "1.4", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M150 32 h28 M150 48 h28 M150 64 h20" }) })
    ] }),
    kind === "watch" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M38 48 C64 18, 136 18, 162 48 C136 78, 64 78, 38 48 Z",
          stroke: "var(--motif-line)",
          strokeWidth: "1.6",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "48", r: "13", stroke: "var(--motif-line)", strokeWidth: "1.6" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "48", r: "4", fill: "var(--motif-accent)" }),
      /* @__PURE__ */ jsx("circle", { className: "sonar s1", cx: "100", cy: "48", r: "13", stroke: "var(--motif-line)", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsx("circle", { className: "sonar s2", cx: "100", cy: "48", r: "13", stroke: "var(--motif-line)", strokeWidth: "0.9" }),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("circle", { cx: "148", cy: "70", r: "15", fill: "var(--motif-surface)", stroke: "var(--motif-line)", strokeWidth: "1.6" }),
        /* @__PURE__ */ jsx("line", { x1: "148", y1: "70", x2: "148", y2: "61", stroke: "var(--motif-accent)", strokeWidth: "1.6", strokeLinecap: "round" }),
        /* @__PURE__ */ jsx("line", { x1: "148", y1: "70", x2: "154", y2: "70", stroke: "var(--motif-accent)", strokeWidth: "1.6", strokeLinecap: "round" })
      ] })
    ] }),
    kind === "lane-mfg" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", stroke: "var(--motif-line)", strokeWidth: "1.4", children: [
      /* @__PURE__ */ jsx("path", { d: "M100 14 c-4 12 -5 28 -5 44 l0 18 c0 6 2 10 5 12 c3 -2 5 -6 5 -12 l0 -18 c0 -16 -1 -32 -5 -44 Z" }),
      /* @__PURE__ */ jsx("path", { d: "M95 42 L44 62 l0 7 L95 54" }),
      /* @__PURE__ */ jsx("path", { d: "M105 42 L156 62 l0 7 L105 54" }),
      /* @__PURE__ */ jsx("path", { d: "M96 74 l-18 9 l0 5 l18 -7 M104 74 l18 9 l0 5 l-18 -7" })
    ] }),
    kind === "lane-pro" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", stroke: "var(--motif-line)", strokeWidth: "1.4", children: [
      /* @__PURE__ */ jsx("path", { d: "M40 82 l0 -34 l16 0 l0 34 M64 82 l0 -50 l18 0 l0 50 M90 82 l0 -26 l14 0 l0 26 M112 82 l0 -44 l18 0 l0 44 M138 82 l0 -60 l20 0 l0 60" }),
      /* @__PURE__ */ jsx("line", { x1: "30", y1: "82", x2: "170", y2: "82" }),
      /* @__PURE__ */ jsxs("g", { fill: "var(--motif-accent)", stroke: "none", children: [
        /* @__PURE__ */ jsx("rect", { x: "68", y: "38", width: "3", height: "4" }),
        /* @__PURE__ */ jsx("rect", { x: "143", y: "30", width: "3", height: "4" }),
        /* @__PURE__ */ jsx("rect", { x: "118", y: "46", width: "3", height: "4" })
      ] })
    ] }),
    kind === "lane-con" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", stroke: "var(--motif-line)", strokeWidth: "1.4", children: [
      /* @__PURE__ */ jsx("path", { d: "M60 82 L60 40 L100 22 L140 40 L140 82 Z" }),
      /* @__PURE__ */ jsx("path", { d: "M60 40 L100 58 L140 40 M100 58 L100 82" }),
      /* @__PURE__ */ jsx("path", { d: "M148 82 L148 14 M148 14 L108 20 M148 14 L172 18", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsx("path", { d: "M72 66 h16 M72 72 h16 M112 66 h16 M112 72 h16", stroke: "var(--motif-accent)", strokeWidth: "1.2" })
    ] })
  ] });
}
export {
  ProductMotif as P
};
