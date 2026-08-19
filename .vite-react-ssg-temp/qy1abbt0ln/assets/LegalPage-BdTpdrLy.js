import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import { M as Meta, S as ScrollCue, B as Band, C as CtaBand } from "../main.mjs";
import "react";
import "vite-react-ssg";
import "react-router-dom";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
import "@astryxdesign/core/Button";
function LegalPage({ doc }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: doc.metaTitle,
        desc: doc.metaDesc,
        path: `/${doc.slug}`
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane brand-hero", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "brand-static" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", children: doc.heading }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: doc.sub })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsx(Band, { children: /* @__PURE__ */ jsxs("div", { className: "legal-doc", children: [
      /* @__PURE__ */ jsxs("p", { className: "legal-effective", children: [
        "Effective ",
        doc.effective
      ] }),
      doc.intro.map((p, i) => /* @__PURE__ */ jsx("p", { className: "legal-intro", children: p }, i)),
      doc.sections.map((s) => /* @__PURE__ */ jsxs("section", { className: "legal-section observe", children: [
        /* @__PURE__ */ jsx("h2", { children: s.h }),
        s.body.map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i))
      ] }, s.h))
    ] }) }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "Need us to clarify a term?",
        sub: "Ask before you sign. A Helm executive will respond during business hours.",
        source: `${doc.slug} cta`
      }
    )
  ] });
}
export {
  LegalPage as default
};
