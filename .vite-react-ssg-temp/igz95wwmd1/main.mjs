import { Head, ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, createContext, useEffect, useContext, forwardRef, useRef, useMemo } from "react";
import { Link, useLocation, NavLink as NavLink$1, Outlet, useParams, Navigate } from "react-router-dom";
import { Theme } from "@astryxdesign/core/theme";
import { LinkProvider } from "@astryxdesign/core/Link";
import { Button } from "@astryxdesign/core/Button";
const helmTheme = {
  name: "helm",
  __built: true,
  tokens: {
    "--font-size-4xs": "0.3125rem",
    "--font-size-3xs": "0.4375rem",
    "--font-size-2xs": "0.5rem",
    "--font-size-xs": "0.625rem",
    "--font-size-sm": "0.8125rem",
    "--font-size-base": "1rem",
    "--font-size-lg": "1.25rem",
    "--font-size-xl": "1.5625rem",
    "--font-size-2xl": "1.9375rem",
    "--font-size-3xl": "2.4375rem",
    "--font-size-4xl": "3.0625rem",
    "--font-size-5xl": "3.8125rem",
    "--text-heading-1-size": "var(--font-size-2xl)",
    "--text-heading-1-weight": "var(--font-weight-semibold)",
    "--text-heading-1-leading": "1.4194",
    "--text-heading-2-size": "var(--font-size-xl)",
    "--text-heading-2-weight": "var(--font-weight-semibold)",
    "--text-heading-2-leading": "1.44",
    "--text-heading-3-size": "var(--font-size-lg)",
    "--text-heading-3-weight": "var(--font-weight-semibold)",
    "--text-heading-3-leading": "1.4",
    "--text-heading-4-size": "var(--font-size-base)",
    "--text-heading-4-weight": "var(--font-weight-semibold)",
    "--text-heading-4-leading": "1.5",
    "--text-heading-5-size": "var(--font-size-sm)",
    "--text-heading-5-weight": "var(--font-weight-semibold)",
    "--text-heading-5-leading": "1.5385",
    "--text-heading-6-size": "var(--font-size-xs)",
    "--text-heading-6-weight": "var(--font-weight-semibold)",
    "--text-heading-6-leading": "1.6",
    "--text-body-size": "var(--font-size-base)",
    "--text-body-weight": "var(--font-weight-normal)",
    "--text-body-leading": "1.5",
    "--text-large-size": "var(--font-size-lg)",
    "--text-large-weight": "var(--font-weight-semibold)",
    "--text-large-leading": "1.4",
    "--text-label-size": "var(--font-size-base)",
    "--text-label-weight": "var(--font-weight-medium)",
    "--text-label-leading": "1.5",
    "--text-code-size": "var(--font-size-base)",
    "--text-code-weight": "var(--font-weight-normal)",
    "--text-code-leading": "1.5",
    "--text-supporting-size": "var(--font-size-sm)",
    "--text-supporting-weight": "var(--font-weight-normal)",
    "--text-supporting-leading": "1.5385",
    "--text-display-1-size": "var(--font-size-5xl)",
    "--text-display-1-weight": "var(--font-weight-normal)",
    "--text-display-1-leading": "1.2459",
    "--text-display-2-size": "var(--font-size-4xl)",
    "--text-display-2-weight": "var(--font-weight-normal)",
    "--text-display-2-leading": "1.2245",
    "--text-display-3-size": "var(--font-size-3xl)",
    "--text-display-3-weight": "var(--font-weight-normal)",
    "--text-display-3-leading": "1.2308",
    "--duration-fast-min": "95ms",
    "--duration-fast": "125ms",
    "--duration-fast-max": "165ms",
    "--duration-medium-min": "225ms",
    "--duration-medium": "300ms",
    "--duration-medium-max": "400ms",
    "--duration-slow-min": "525ms",
    "--duration-slow": "700ms",
    "--duration-slow-max": "935ms",
    "--font-family-body": 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    "--font-family-heading": 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    "--font-family-code": 'ui-monospace, "SF Mono", Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    "--color-syntax-keyword": "light-dark(#700084, #efa8ff)",
    "--color-syntax-string": "light-dark(#005600, #a6d2a2)",
    "--color-syntax-comment": "light-dark(#737373, #a3a3a3)",
    "--color-syntax-number": "light-dark(#6e3500, #ffb37f)",
    "--color-syntax-function": "light-dark(#00458c, #a0caff)",
    "--color-syntax-type": "light-dark(#700084, #efa8ff)",
    "--color-syntax-variable": "light-dark(#171717, #e5e5e5)",
    "--color-syntax-operator": "light-dark(#737373, #a3a3a3)",
    "--color-syntax-constant": "light-dark(#6e3500, #ffb37f)",
    "--color-syntax-tag": "light-dark(#89001a, #ffaeaa)",
    "--color-syntax-attribute": "light-dark(#584400, #eec12f)",
    "--color-syntax-property": "light-dark(#005348, #83dac9)",
    "--color-syntax-punctuation": "light-dark(#a3a3a3, #525252)",
    "--color-syntax-background": "light-dark(#fafafa, #0a0a0a)",
    "--color-background-surface": "light-dark(#F4FFF8, #161D19)",
    "--color-background-body": "light-dark(#E9F3ED, #09130D)",
    "--color-background-card": "light-dark(#F4FFF8, #161D19)",
    "--color-background-popover": "light-dark(#F4FFF8, #2A322D)",
    "--color-background-muted": "light-dark(#161D190D, #161D1980)",
    "--color-accent": "light-dark(#084C2E, #38A169)",
    "--color-accent-muted": "light-dark(#006E3D33, #70DBA140)",
    "--color-neutral": "light-dark(#161D191A, #DBE5DE33)",
    "--color-overlay": "light-dark(#161D1966, #161D1999)",
    "--color-overlay-hover": "light-dark(#161D190D, #FFFFFF0D)",
    "--color-overlay-pressed": "light-dark(#161D191A, #FFFFFF1A)",
    "--color-text-primary": "light-dark(#161D19, #DBE5DE)",
    "--color-text-secondary": "light-dark(#3C4A41, #9FAFA5)",
    "--color-text-disabled": "light-dark(#85948B, #546259)",
    "--color-text-accent": "light-dark(#005527, #70DBA1)",
    "--color-on-dark": "#ffffff",
    "--color-on-light": "#171717",
    "--color-on-accent": "light-dark(#FFFFFF, #003D11)",
    "--color-on-success": "light-dark(#ffffff, #171717)",
    "--color-on-error": "light-dark(#ffffff, #171717)",
    "--color-on-warning": "#171717",
    "--color-icon-accent": "light-dark(#006E3D, #70DBA1)",
    "--color-icon-primary": "light-dark(#161D19, #DBE5DE)",
    "--color-icon-secondary": "light-dark(#3C4A41, #9FAFA5)",
    "--color-icon-disabled": "light-dark(#85948B, #546259)",
    "--color-success": "light-dark(#007004, #9fe59b)",
    "--color-error": "light-dark(#a50c25, #ffc6c1)",
    "--color-warning": "light-dark(#745b00, #fdcf4f)",
    "--color-success-muted": "light-dark(#c5e5c0, #84c9803D)",
    "--color-error-muted": "light-dark(#facecb, #ff9e973D)",
    "--color-warning-muted": "light-dark(#f8da9d, #deb4333D)",
    "--color-border": "light-dark(#161D191A, #E9F3ED1A)",
    "--color-border-emphasized": "light-dark(#9FAFA5, #3C4A41)",
    "--color-skeleton": "light-dark(#9FAFA5, #3C4A41)",
    "--color-shadow": "light-dark(#0000001A, #0000004D)",
    "--color-tint-hover": "light-dark(black, white)",
    "--color-background-red": "light-dark(#facecb, #ff9e973D)",
    "--color-border-red": "light-dark(#e6bab8, #ff6f6c)",
    "--color-icon-red": "light-dark(#89001a, #ff9e97)",
    "--color-text-red": "light-dark(#89001a, #ffc6c1)",
    "--color-background-orange": "light-dark(#fad0b5, #ffa2583D)",
    "--color-border-orange": "light-dark(#e6bda2, #e2883e)",
    "--color-icon-orange": "light-dark(#6e3500, #ffa258)",
    "--color-text-orange": "light-dark(#6e3500, #ffc9a2)",
    "--color-background-yellow": "light-dark(#f8da9d, #deb4333D)",
    "--color-border-yellow": "light-dark(#e4c279, #c0990e)",
    "--color-icon-yellow": "light-dark(#584400, #deb433)",
    "--color-text-yellow": "light-dark(#584400, #fdcf4f)",
    "--color-background-green": "light-dark(#c5e5c0, #84c9803D)",
    "--color-border-green": "light-dark(#b2d1ac, #69ad67)",
    "--color-icon-green": "light-dark(#0c5700, #84c980)",
    "--color-text-green": "light-dark(#0c5700, #9fe59b)",
    "--color-background-teal": "light-dark(#a5e3d6, #7ec6b83D)",
    "--color-border-teal": "light-dark(#94d6c8, #63ab9d)",
    "--color-icon-teal": "light-dark(#005348, #7ec6b8)",
    "--color-text-teal": "light-dark(#005348, #99e2d3)",
    "--color-background-cyan": "light-dark(#a3e0ef, #83c2d43D)",
    "--color-border-cyan": "light-dark(#91d3e3, #67a7b8)",
    "--color-icon-cyan": "light-dark(#00505f, #83c2d4)",
    "--color-text-cyan": "light-dark(#00505f, #9edef0)",
    "--color-background-blue": "light-dark(#c4ddfb, #9eb7ff3D)",
    "--color-border-blue": "light-dark(#b1c9e7, #6d9cfe)",
    "--color-icon-blue": "light-dark(#00458c, #9eb7ff)",
    "--color-text-blue": "light-dark(#00458c, #c7d3ff)",
    "--color-background-purple": "light-dark(#eccef3, #f297ff3D)",
    "--color-border-purple": "light-dark(#d8bbdf, #dd74f0)",
    "--color-icon-purple": "light-dark(#700084, #f297ff)",
    "--color-text-purple": "light-dark(#700084, #fac1ff)",
    "--color-background-pink": "light-dark(#fccadc, #ff99c33D)",
    "--color-border-pink": "light-dark(#e7b7c8, #f273aa)",
    "--color-icon-pink": "light-dark(#83004b, #ff99c3)",
    "--color-text-pink": "light-dark(#83004b, #ffc3da)",
    "--color-background-gray": "light-dark(#e5e5e5, var(--color-neutral))",
    "--color-border-gray": "light-dark(#d4d4d4, #262626)",
    "--color-icon-gray": "light-dark(#525252, #a3a3a3)",
    "--color-text-gray": "light-dark(#262626, #e5e5e5)",
    "--radius-none": "0px",
    "--radius-inner": "8px",
    "--radius-element": "17px",
    "--radius-container": "25px",
    "--radius-page": "59px",
    "--radius-full": "9999px",
    "--shadow-low": "0 2px 4px light-dark(oklch(0 0 0 / 5%), oklch(0 0 0 / 25%)), 0 4px 8px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 40%)), inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 8%))",
    "--shadow-med": "0 2px 4px light-dark(oklch(0 0 0 / 5%), oklch(0 0 0 / 35%)), 0 4px 12px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 50%)), inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 12%))",
    "--shadow-high": "0 4px 6px light-dark(oklch(0 0 0 / 10%), oklch(0 0 0 / 50%)), 0 12px 24px light-dark(oklch(0 0 0 / 15%), oklch(0 0 0 / 70%)), inset 0 0 0 1px light-dark(transparent, oklch(1 0 0 / 15%))",
    "--shadow-inset-hover": "inset 0px 0px 0px 2px #0074e24D",
    "--shadow-inset-selected": "inset 0px 0px 0px 2px #0074e280",
    "--shadow-inset-success": "inset 0px 0px 0px 2px #1981004D",
    "--shadow-inset-warning": "inset 0px 0px 0px 2px #ffce2f4D",
    "--shadow-inset-error": "inset 0px 0px 0px 2px #e33f4a4D",
    "--color-background-inverted": "light-dark(#161D19, #F4FFF8)",
    "--color-track": "light-dark(#9FAFA5, #3C4A41)",
    "--radius-chat": "59px"
  }
};
const FORM_ENDPOINT = "https://formsubmit.co/ajax/hello@helmsecured.com";
function LeadForm({
  source,
  cta = "Get my free scan",
  compact = false
}) {
  const [state, setState] = useState("idle");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (state === "busy") return;
    setState("busy");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("sent");
    } catch {
      setState("error");
    }
  };
  if (state === "sent") {
    return /* @__PURE__ */ jsx("div", { className: "lead-form-done", role: "status", children: "✓ Got it. Your report will hit your inbox within 24 hours." });
  }
  return /* @__PURE__ */ jsxs("form", { className: `lead-form${compact ? " compact" : ""}`, onSubmit, children: [
    /* @__PURE__ */ jsx("input", { type: "hidden", name: "_subject", value: `Lead: free scan request (${source})` }),
    /* @__PURE__ */ jsx("input", { type: "hidden", name: "_template", value: "table" }),
    /* @__PURE__ */ jsx("input", { type: "hidden", name: "page", value: source }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "email",
        name: "email",
        required: true,
        placeholder: "Work email",
        autoComplete: "email",
        "aria-label": "Work email"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        label: state === "busy" ? "Sending…" : cta,
        variant: "primary",
        size: compact ? "md" : "lg",
        type: "submit"
      }
    ),
    state === "error" && /* @__PURE__ */ jsxs("div", { className: "lead-form-error", role: "alert", children: [
      "Something went wrong. Email us directly:",
      " ",
      /* @__PURE__ */ jsx("a", { href: "mailto:hello@helmsecured.com?subject=Free%20scan%20request", children: "hello@helmsecured.com" })
    ] })
  ] });
}
const STORAGE_KEY = "helm-theme";
const ThemeModeContext = createContext(null);
function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error("useThemeMode must be used within ThemeModeProvider");
  return ctx;
}
function ThemeModeProvider({ children }) {
  const [mode, setModeState] = useState("auto");
  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "light" || v === "dark" || v === "auto") setModeState(v);
    } catch {
    }
  }, []);
  const setMode = (m) => {
    setModeState(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
    } catch {
    }
  };
  return /* @__PURE__ */ jsx(ThemeModeContext.Provider, { value: { mode, setMode }, children });
}
const ORDER = ["auto", "light", "dark"];
const LABEL = { auto: "Auto", light: "Light", dark: "Dark" };
const NEXT = { auto: "Light", light: "Dark", dark: "Auto" };
function Icon({ mode }) {
  if (mode === "light") {
    return /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: [
      /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "4.5", stroke: "currentColor", strokeWidth: "1.8" }),
      /* @__PURE__ */ jsx("g", { stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12h2.5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" }) })
    ] });
  }
  if (mode === "dark") {
    return /* @__PURE__ */ jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M20 14.2A8 8 0 1 1 9.8 4 6.2 6.2 0 0 0 20 14.2Z",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinejoin: "round"
      }
    ) });
  }
  return /* @__PURE__ */ jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "8.5", stroke: "currentColor", strokeWidth: "1.8" }),
    /* @__PURE__ */ jsx("path", { d: "M12 3.5a8.5 8.5 0 0 0 0 17Z", fill: "currentColor" })
  ] });
}
function ThemePicker() {
  const { mode, setMode } = useThemeMode();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const current = mounted ? mode : "auto";
  const cycle = () => setMode(ORDER[(ORDER.indexOf(current) + 1) % ORDER.length]);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: "theme-toggle",
      onClick: cycle,
      "aria-label": `Theme: ${LABEL[current]}. Switch to ${NEXT[current]}.`,
      title: `Theme: ${LABEL[current]} (click for ${NEXT[current]})`,
      children: [
        /* @__PURE__ */ jsx(Icon, { mode: current }),
        /* @__PURE__ */ jsx("span", { className: "theme-toggle-label", children: LABEL[current] })
      ]
    }
  );
}
function HelmMark({ size = 28 }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 32 32", fill: "none", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "13", stroke: "#38A169", strokeWidth: "2.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "5", fill: "#38A169" }),
    [0, 45, 90, 135, 180, 225, 270, 315].map((a) => /* @__PURE__ */ jsx(
      "line",
      {
        x1: "16",
        y1: "1",
        x2: "16",
        y2: "7",
        stroke: "#38A169",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        transform: `rotate(${a} 16 16)`
      },
      a
    ))
  ] });
}
const lanes = [
  { to: "/manufacturing", label: "Manufacturing & Defense" },
  { to: "/professional-services", label: "Professional Services" },
  { to: "/contractors", label: "Contractors & Trades" }
];
const footerCols = [
  {
    title: "Products",
    links: [
      { to: "/helm-mail", label: "Helm Mail" },
      { to: "/helm-aware", label: "Helm Aware" },
      { to: "/helm-ready", label: "Helm Ready" },
      { to: "/pricing", label: "Pricing" }
    ]
  },
  {
    title: "Industries",
    links: lanes.map((l) => ({ to: l.to, label: l.label }))
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/resources", label: "Resources" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
      { to: "/free-scan", label: "Free scan" }
    ]
  }
];
function SiteNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    pathname === "/manufacturing" && /* @__PURE__ */ jsxs("div", { className: "urgency", children: [
      "CMMC Phase 2 enforcement begins Nov 10, 2026: fewer than 2% of defense contractors are certified. ",
      /* @__PURE__ */ jsx("a", { href: "#contact", children: "Check your readiness →" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "site-nav", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "nav-brand", children: [
        /* @__PURE__ */ jsx(HelmMark, {}),
        " Helm"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "nav-right", children: [
        /* @__PURE__ */ jsxs("div", { className: "nav-links", children: [
          lanes.map((l) => /* @__PURE__ */ jsx(NavLink$1, { to: l.to, className: ({ isActive }) => isActive ? "active" : "", children: l.label }, l.to)),
          /* @__PURE__ */ jsx(NavLink$1, { to: "/pricing", className: ({ isActive }) => isActive ? "active" : "", children: "Pricing" }),
          /* @__PURE__ */ jsx(Link, { to: "/free-scan", className: "nav-cta", children: /* @__PURE__ */ jsx(Button, { label: "Free scan", variant: "primary", size: "sm" }) })
        ] }),
        /* @__PURE__ */ jsx(ThemePicker, {}),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: `nav-burger${open ? " open" : ""}`,
            "aria-label": open ? "Close menu" : "Open menu",
            "aria-expanded": open,
            onClick: () => setOpen(!open),
            children: [
              /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsx("span", {}),
              /* @__PURE__ */ jsx("span", {})
            ]
          }
        )
      ] })
    ] }) }),
    open && /* @__PURE__ */ jsx("div", { className: "nav-drawer", children: footerCols.map((col) => /* @__PURE__ */ jsxs("div", { className: "drawer-group", children: [
      /* @__PURE__ */ jsx("div", { className: "footer-col-title", children: col.title }),
      col.links.map((l) => /* @__PURE__ */ jsx(Link, { to: l.to, children: l.label }, l.to))
    ] }, col.title)) })
  ] });
}
function CtaBand({
  title,
  sub,
  cta = "Get my free scan",
  source
}) {
  return /* @__PURE__ */ jsx("section", { className: "cta-band", id: "contact", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsx("h2", { className: "observe", children: title }),
    /* @__PURE__ */ jsx("p", { className: "observe", children: sub }),
    /* @__PURE__ */ jsxs("div", { className: "cta-form observe", children: [
      /* @__PURE__ */ jsx(LeadForm, { source, cta }),
      /* @__PURE__ */ jsxs("div", { className: "cta-alt", children: [
        "Have more to tell us? ",
        /* @__PURE__ */ jsx(Link, { to: "/contact", children: "Use the full contact form →" }),
        /* @__PURE__ */ jsx("br", {}),
        "Prefer email?",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `mailto:hello@helmsecured.com?subject=${encodeURIComponent("Free security scan request")}&body=${encodeURIComponent(
              "Hi Helm team,\n\nI'd like the free security scan for my company.\n\nCompany:\nWebsite domain:\nBest phone (optional):\n\nThanks!"
            )}`,
            children: "hello@helmsecured.com"
          }
        )
      ] })
    ] })
  ] }) });
}
function Band({
  children,
  variant,
  id
}) {
  return /* @__PURE__ */ jsx("section", { id, className: `band${variant ? ` ${variant}` : ""}`, children: /* @__PURE__ */ jsx("div", { className: "wrap", children }) });
}
function RevealManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".observe"));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "site-footer", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " HelmSecure LLC · New Jersey",
      /* @__PURE__ */ jsx("br", {}),
      "Security that answers to your business.",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("a", { href: "mailto:hello@helmsecured.com", children: "hello@helmsecured.com" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "footer-cols", children: footerCols.map((col) => /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
      /* @__PURE__ */ jsx("div", { className: "footer-col-title", children: col.title }),
      col.links.map((l) => /* @__PURE__ */ jsx(Link, { to: l.to, children: l.label }, l.to))
    ] }, col.title)) })
  ] }) });
}
const NavLink = forwardRef(
  function NavLink2({ href = "", children, ...rest }, ref) {
    if (/^(https?:)?\/\//.test(href) || href.startsWith("#") || href.startsWith("mailto:")) {
      return /* @__PURE__ */ jsx("a", { ref, href, ...rest, children });
    }
    return /* @__PURE__ */ jsx(Link, { ref, to: href, ...rest, children });
  }
);
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}
function ThemedShell() {
  const { mode } = useThemeMode();
  const astryxMode = mode === "auto" ? "system" : mode;
  return /* @__PURE__ */ jsx(Theme, { theme: helmTheme, mode: astryxMode, children: /* @__PURE__ */ jsxs(LinkProvider, { component: NavLink, children: [
    /* @__PURE__ */ jsx(ScrollToTop, {}),
    /* @__PURE__ */ jsx(RevealManager, {}),
    /* @__PURE__ */ jsx(SiteNav, {}),
    /* @__PURE__ */ jsx("main", { children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] }) });
}
function Layout() {
  return /* @__PURE__ */ jsx(ThemeModeProvider, { children: /* @__PURE__ */ jsx(ThemedShell, {}) });
}
const SITE = "https://helmsecured.com";
function Meta({
  title,
  desc,
  path,
  jsonLd
}) {
  const url = `${SITE}${path}`;
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: desc }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: url }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: desc }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: url }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Helm" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: `${SITE}/og.png` }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: desc }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: `${SITE}/og.png` }),
    jsonLd && /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(jsonLd) })
  ] });
}
function RainCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const HORIZON = 0.3;
    const drops = [];
    let nextDrop = 0;
    const spawn = (now) => {
      const depth = Math.random();
      const y = h * (HORIZON + 0.06 + depth * (1 - HORIZON - 0.12));
      drops.push({
        x: w * (0.05 + Math.random() * 0.9),
        y,
        r: 0,
        // nearer drops read larger and spread further (perspective)
        max: 30 + depth * 160,
        speed: 0.55 + depth * 1.15,
        born: now
      });
      if (drops.length > 26) drops.shift();
    };
    const drawRipple = (d) => {
      const depth = (d.y - h * HORIZON) / (h * (1 - HORIZON));
      const squash = 0.18 + depth * 0.2;
      const fade = 1 - d.r / d.max;
      if (fade <= 0) return;
      for (let k = 0; k < 3; k++) {
        const rr = d.r - k * (6 + depth * 10);
        if (rr <= 0) continue;
        ctx.strokeStyle = `rgba(137, 214, 173, ${(0.34 - k * 0.09) * fade})`;
        ctx.lineWidth = 1.5 - k * 0.4;
        ctx.beginPath();
        ctx.ellipse(d.x, d.y, rr, rr * squash, 0, 0, Math.PI * 2);
        ctx.stroke();
      }
      if (d.r < d.max * 0.25) {
        ctx.fillStyle = `rgba(214, 241, 227, ${0.7 * (1 - d.r / (d.max * 0.25))})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };
    if (reduced) {
      const now = 0;
      for (let i = 0; i < 6; i++) {
        spawn(now);
        drops[drops.length - 1].r = drops[drops.length - 1].max * (0.2 + 0.1 * i);
      }
      drops.forEach(drawRipple);
    } else {
      const draw = (now) => {
        ctx.clearRect(0, 0, w, h);
        if (now > nextDrop) {
          nextDrop = now + 420 + Math.random() * 680;
          spawn(now);
        }
        for (let i = drops.length - 1; i >= 0; i--) {
          const d = drops[i];
          d.r += d.speed;
          if (d.r >= d.max) {
            drops.splice(i, 1);
            continue;
          }
          drawRipple(d);
        }
        raf = requestAnimationFrame(draw);
      };
      for (let i = 0; i < 8; i++) {
        spawn(0);
        drops[drops.length - 1].r = Math.random() * drops[drops.length - 1].max * 0.8;
      }
      draw(performance.now());
    }
    const obs = new ResizeObserver(resize);
    obs.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsx("canvas", { ref, className: "backdrop-canvas", "aria-hidden": true });
}
function EnergyCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ripples = [];
    let nextRipple = 0;
    const WAVES = 28;
    const T0 = 9e4 + Math.random() * 6e4;
    const waveY = (i, x, time) => {
      const base = h * (0.16 + i / WAVES * 0.72);
      return base + Math.sin(x * 38e-4 + time * 42e-5 + i * 1.7) * 26 + Math.sin(x * 16e-4 - time * 28e-5 + i * 0.9) * 42 + Math.sin(x * 8e-3 + time * 7e-4 + i * 2.3) * 9;
    };
    const draw = (rawNow) => {
      const now = rawNow + T0;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < WAVES; i++) {
        const alpha = 0.035 + 0.075 * Math.abs(Math.sin(i * 1.3 + now * 2e-4));
        const grad = ctx.createLinearGradient(0, 0, w, 0);
        grad.addColorStop(0, `rgba(8, 76, 46, 0)`);
        grad.addColorStop(0.5, `rgba(137, 214, 173, ${alpha})`);
        grad.addColorStop(1, `rgba(90, 241, 227, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = i % 3 === 0 ? 2 : 1.2;
        ctx.beginPath();
        for (let x = -20; x <= w + 20; x += 7) {
          const y = waveY(i, x, now);
          x === -20 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      for (let i = 0; i < WAVES; i++) {
        const px = (now * (0.02 + i * 3e-3) + i * 431.7) % (w + 240) - 120;
        const py = waveY(i, px, now);
        const g = ctx.createRadialGradient(px, py, 0, px, py, 26);
        g.addColorStop(0, "rgba(170, 225, 196, 0.5)");
        g.addColorStop(1, "rgba(170, 225, 196, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, 26, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "rgba(214, 241, 227, 0.9)";
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }
      if (now > nextRipple) {
        nextRipple = now + 2200 + Math.random() * 1800;
        const i = Math.floor(Math.random() * WAVES);
        const x = w * (0.2 + Math.random() * 0.6);
        ripples.push({ x, y: waveY(i, x, now), r: 0, max: 120 + Math.random() * 120, speed: 0.045 });
      }
      for (let i = ripples.length - 1; i >= 0; i--) {
        const rp = ripples[i];
        rp.r += rp.speed * 16;
        const fade = 1 - rp.r / rp.max;
        if (fade <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        for (let k = 0; k < 3; k++) {
          const rr = rp.r - k * 14;
          if (rr <= 0) continue;
          ctx.strokeStyle = `rgba(137, 214, 173, ${0.28 * fade * (1 - k * 0.3)})`;
          ctx.lineWidth = 1.4 - k * 0.35;
          ctx.beginPath();
          ctx.ellipse(rp.x, rp.y, rr, rr * 0.42, 0, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      if (!reduced) raf = requestAnimationFrame(draw);
    };
    draw(performance.now());
    const obs = new ResizeObserver(resize);
    obs.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsx("canvas", { ref, className: "backdrop-canvas", "aria-hidden": true });
}
function AeroSvg() {
  return /* @__PURE__ */ jsxs("svg", { className: "backdrop-svg aero", viewBox: "0 0 1200 600", preserveAspectRatio: "xMidYMid slice", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxs("g", { className: "bp-draw", stroke: "#38A169", fill: "none", strokeWidth: "1.6", children: [
      /* @__PURE__ */ jsx("path", { d: "M600 90 C 588 130 584 190 584 260 L 584 430 C 584 470 590 505 600 525 C 610 505 616 470 616 430 L 616 260 C 616 190 612 130 600 90 Z" }),
      /* @__PURE__ */ jsx("path", { d: "M584 265 L 240 400 L 240 428 L 584 340" }),
      /* @__PURE__ */ jsx("path", { d: "M616 265 L 960 400 L 960 428 L 616 340" }),
      /* @__PURE__ */ jsx("path", { d: "M588 470 L 470 528 L 470 546 L 590 506" }),
      /* @__PURE__ */ jsx("path", { d: "M612 470 L 730 528 L 730 546 L 610 506" }),
      /* @__PURE__ */ jsx("path", { d: "M418 348 l 0 46 m 26 -56 l 0 46" }),
      /* @__PURE__ */ jsx("path", { d: "M782 348 l 0 46 m -26 -56 l 0 46" }),
      /* @__PURE__ */ jsx("path", { strokeDasharray: "6 8", strokeWidth: "1", d: "M600 40 L 600 570" }),
      /* @__PURE__ */ jsx("path", { strokeWidth: "1", d: "M200 470 L 1000 470 M200 462 l 0 16 M1000 462 l 0 16" })
    ] }),
    /* @__PURE__ */ jsxs("g", { className: "bp-labels", fill: "#38A169", fontSize: "11", fontFamily: "ui-monospace, monospace", opacity: "0.5", children: [
      /* @__PURE__ */ jsx("text", { x: "590", y: "586", children: "42.6m" }),
      /* @__PURE__ */ jsx("text", { x: "964", y: "416", children: "HLM-01" })
    ] })
  ] });
}
function mulberry(seed) {
  return () => {
    seed |= 0;
    seed = seed + 1831565813 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function SkylineSvg() {
  const { far, near, windows } = useMemo(() => {
    const rnd = mulberry(7);
    const far2 = [];
    const near2 = [];
    let x = -40;
    while (x < 1400) {
      const w = 34 + rnd() * 52;
      far2.push({ x, w, h: 90 + rnd() * 200 });
      x += w + 6;
    }
    x = -60;
    while (x < 1450) {
      const w = 52 + rnd() * 90;
      near2.push({ x, w, h: 150 + rnd() * 260 });
      x += w + 12;
    }
    const windows2 = [];
    for (const b of near2) {
      const cols = Math.floor(b.w / 16);
      const rows = Math.floor(b.h / 26);
      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          if (rnd() < 0.16) {
            windows2.push({ x: b.x + 8 + c * 16, y: 600 - b.h + 14 + r * 26, d: rnd() * 8 });
          }
        }
      }
    }
    return { far: far2, near: near2, windows: windows2 };
  }, []);
  return /* @__PURE__ */ jsxs("svg", { className: "backdrop-svg skyline", viewBox: "0 0 1200 600", preserveAspectRatio: "xMidYMid slice", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx("g", { className: "layer-far", fill: "rgba(56, 161, 105, 0.10)", children: far.map((b, i) => /* @__PURE__ */ jsx("rect", { x: b.x, y: 600 - b.h - 60, width: b.w, height: b.h + 60 }, i)) }),
    /* @__PURE__ */ jsxs("g", { className: "layer-near", fill: "rgba(18,30,54,0.9)", stroke: "rgba(56, 161, 105, 0.18)", strokeWidth: "1", children: [
      near.map((b, i) => /* @__PURE__ */ jsx("rect", { x: b.x, y: 600 - b.h, width: b.w, height: b.h }, i)),
      windows.map((wd, i) => /* @__PURE__ */ jsx(
        "rect",
        {
          className: "twinkle",
          style: { animationDelay: `${wd.d}s` },
          x: wd.x,
          y: wd.y,
          width: "5",
          height: "7",
          fill: "#AAE2C4",
          stroke: "none"
        },
        `w${i}`
      ))
    ] })
  ] });
}
function ConstructionSvg() {
  return /* @__PURE__ */ jsxs("svg", { className: "backdrop-svg construction", viewBox: "0 0 1200 600", preserveAspectRatio: "xMidYMid slice", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx("line", { x1: "0", y1: "520", x2: "1200", y2: "520", stroke: "rgba(56, 161, 105, 0.35)", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsxs("g", { stroke: "rgba(56, 161, 105, 0.4)", strokeWidth: "2", fill: "none", children: [
      /* @__PURE__ */ jsx("path", { d: "M300 520 L300 200 M420 520 L420 200 M540 520 L540 200" }),
      /* @__PURE__ */ jsx("g", { className: "frame-floor f1", children: /* @__PURE__ */ jsx("path", { d: "M290 440 L550 440" }) }),
      /* @__PURE__ */ jsx("g", { className: "frame-floor f2", children: /* @__PURE__ */ jsx("path", { d: "M290 360 L550 360" }) }),
      /* @__PURE__ */ jsx("g", { className: "frame-floor f3", children: /* @__PURE__ */ jsx("path", { d: "M290 280 L550 280" }) }),
      /* @__PURE__ */ jsx("g", { className: "frame-floor f4", children: /* @__PURE__ */ jsx("path", { d: "M290 200 L550 200" }) }),
      /* @__PURE__ */ jsx("path", { d: "M300 520 L420 440 M420 520 L300 440", strokeWidth: "1", opacity: "0.6" }),
      /* @__PURE__ */ jsx("path", { d: "M420 440 L540 360 M540 440 L420 360", strokeWidth: "1", opacity: "0.6" })
    ] }),
    /* @__PURE__ */ jsxs("g", { stroke: "rgba(56, 161, 105, 0.45)", strokeWidth: "2", fill: "none", children: [
      /* @__PURE__ */ jsx("path", { d: "M700 520 L700 100 M660 520 L740 520" }),
      /* @__PURE__ */ jsx("path", { d: "M700 100 L440 130 M700 100 L860 118" }),
      /* @__PURE__ */ jsx("path", { d: "M700 100 L664 150 M700 100 L736 150", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsx("path", { d: "M690 92 l20 0 l0 -14 l-20 0 Z", fill: "rgba(56, 161, 105, 0.15)" }),
      /* @__PURE__ */ jsxs("g", { className: "crane-lift", children: [
        /* @__PURE__ */ jsx("path", { className: "crane-cable", d: "M520 124 L520 320", strokeWidth: "1.2" }),
        /* @__PURE__ */ jsx("path", { d: "M492 320 l56 0 l0 10 l-56 0 Z", fill: "rgba(56, 161, 105, 0.25)", stroke: "rgba(56, 161, 105, 0.5)", strokeWidth: "1.2" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("g", { className: "forklift", stroke: "rgba(155, 220, 185, 0.65)", strokeWidth: "2", fill: "none", children: [
      /* @__PURE__ */ jsx("path", { d: "M60 470 l64 0 l10 -26 l-40 0 l-8 -22 l-26 0 Z", fill: "rgba(14,24,44,0.9)" }),
      /* @__PURE__ */ jsx("path", { d: "M70 422 l0 -20 l38 0 l6 20", strokeWidth: "1.5" }),
      /* @__PURE__ */ jsx("path", { d: "M132 470 L132 400 M140 470 L140 400", strokeWidth: "1.5" }),
      /* @__PURE__ */ jsxs("g", { className: "fork-lift-arm", children: [
        /* @__PURE__ */ jsx("path", { d: "M140 452 l34 0", strokeWidth: "2.5" }),
        /* @__PURE__ */ jsx("path", { d: "M146 452 l0 -10 l40 0 l0 10 Z M150 442 l6 -8 l28 0 l6 8", strokeWidth: "1.3", fill: "rgba(56, 161, 105, 0.15)" })
      ] }),
      /* @__PURE__ */ jsxs("g", { className: "wheel w1", children: [
        /* @__PURE__ */ jsx("circle", { cx: "82", cy: "482", r: "12" }),
        /* @__PURE__ */ jsx("path", { d: "M82 474 l0 16 M74 482 l16 0", strokeWidth: "1" })
      ] }),
      /* @__PURE__ */ jsxs("g", { className: "wheel w2", children: [
        /* @__PURE__ */ jsx("circle", { cx: "126", cy: "482", r: "9" }),
        /* @__PURE__ */ jsx("path", { d: "M126 476 l0 12 M120 482 l12 0", strokeWidth: "1" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("g", { stroke: "rgba(155, 220, 185, 0.6)", strokeWidth: "2", fill: "none", children: [
      /* @__PURE__ */ jsx("path", { d: "M950 520 l60 0 l-8 -18 l-44 0 Z", fill: "rgba(14,24,44,0.9)" }),
      /* @__PURE__ */ jsxs("g", { className: "robot-shoulder", children: [
        /* @__PURE__ */ jsx("path", { d: "M980 502 L950 430" }),
        /* @__PURE__ */ jsxs("g", { className: "robot-elbow", children: [
          /* @__PURE__ */ jsx("path", { d: "M950 430 L1000 380" }),
          /* @__PURE__ */ jsx("path", { d: "M1000 380 l14 -6 l6 10", strokeWidth: "1.5" }),
          /* @__PURE__ */ jsxs("g", { className: "sparks", stroke: "#B6E6CC", strokeWidth: "1.4", strokeLinecap: "round", children: [
            /* @__PURE__ */ jsx("path", { className: "spark s1", d: "M1022 382 l10 -8" }),
            /* @__PURE__ */ jsx("path", { className: "spark s2", d: "M1024 386 l12 2" }),
            /* @__PURE__ */ jsx("path", { className: "spark s3", d: "M1022 390 l8 10" }),
            /* @__PURE__ */ jsx("circle", { className: "spark s2", cx: "1021", cy: "385", r: "2.5", fill: "#D6F1E3", stroke: "none" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("circle", { cx: "980", cy: "502", r: "5", fill: "rgba(56, 161, 105, 0.4)", stroke: "none" }),
      /* @__PURE__ */ jsx("circle", { cx: "950", cy: "430", r: "4", fill: "rgba(56, 161, 105, 0.4)", stroke: "none" })
    ] }),
    /* @__PURE__ */ jsxs("g", { stroke: "rgba(56, 161, 105, 0.35)", strokeWidth: "1.4", fill: "none", children: [
      /* @__PURE__ */ jsx("path", { d: "M840 520 l8 -22 l8 22 Z M834 520 l28 0" }),
      /* @__PURE__ */ jsx("path", { d: "M890 520 l7 -18 l7 18 Z M885 520 l24 0" })
    ] })
  ] });
}
function HeroBackdrop({ kind }) {
  return /* @__PURE__ */ jsxs("div", { className: `hero-backdrop ${kind}`, "aria-hidden": true, children: [
    kind === "cyber" && /* @__PURE__ */ jsx(EnergyCanvas, {}),
    kind === "aero" && /* @__PURE__ */ jsx(AeroSvg, {}),
    kind === "skyline" && /* @__PURE__ */ jsx(SkylineSvg, {}),
    kind === "construction" && /* @__PURE__ */ jsx(ConstructionSvg, {}),
    kind === "rain" && /* @__PURE__ */ jsx(RainCanvas, {})
  ] });
}
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
        " Lookalike domain registered last month"
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("span", { className: "rv-badge warn", children: "!" }),
        " 4 employee emails in breach data"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rv-foot", children: "Delivered in plain English, within 24 hours." })
  ] });
}
function ProductMotif({ kind }) {
  return /* @__PURE__ */ jsxs("div", { className: "tile-motif", "aria-hidden": true, children: [
    kind === "mail" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", children: [
      /* @__PURE__ */ jsx("rect", { x: "52", y: "18", width: "96", height: "62", rx: "8", stroke: "#38A169", strokeWidth: "1.6" }),
      /* @__PURE__ */ jsx("path", { d: "M56 24 L100 56 L144 24", stroke: "#38A169", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx("line", { className: "scan-line", x1: "52", y1: "30", x2: "148", y2: "30", stroke: "#AAE2C4", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsxs("g", { className: "pulse-slow", children: [
        /* @__PURE__ */ jsx("circle", { cx: "148", cy: "70", r: "15", fill: "#0b1220", stroke: "#38A169", strokeWidth: "1.6" }),
        /* @__PURE__ */ jsx("path", { d: "M142 70 l4.5 4.5 L155 65", stroke: "#38A169", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
      ] })
    ] }),
    kind === "aware" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", children: [
      /* @__PURE__ */ jsx("circle", { className: "sonar s1", cx: "100", cy: "48", r: "14", stroke: "#38A169", strokeWidth: "1.6" }),
      /* @__PURE__ */ jsx("circle", { className: "sonar s2", cx: "100", cy: "48", r: "26", stroke: "#38A169", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsx("circle", { className: "sonar s3", cx: "100", cy: "48", r: "38", stroke: "#38A169", strokeWidth: "0.9" }),
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "48", r: "4", fill: "#AAE2C4" }),
      /* @__PURE__ */ jsx("path", { className: "wave", d: "M20 48 h28 l6 -14 l8 28 l6 -14 h20", stroke: "#AAE2C4", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx("path", { className: "wave w2", d: "M132 48 h20 l6 -14 l8 28 l6 -14 h8", stroke: "#AAE2C4", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }),
    kind === "ready" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", children: [
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "48", r: "34", stroke: "rgba(56, 161, 105, 0.25)", strokeWidth: "5" }),
      /* @__PURE__ */ jsx(
        "circle",
        {
          className: "gauge",
          cx: "100",
          cy: "48",
          r: "34",
          stroke: "#38A169",
          strokeWidth: "5",
          strokeLinecap: "round",
          strokeDasharray: "214",
          strokeDashoffset: "214",
          transform: "rotate(-90 100 48)"
        }
      ),
      /* @__PURE__ */ jsx("path", { d: "M88 48 l8 8 L116 36", stroke: "#AAE2C4", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx("g", { stroke: "rgba(170, 226, 196, 0.6)", strokeWidth: "1.4", strokeLinecap: "round", children: /* @__PURE__ */ jsx("path", { d: "M150 32 h28 M150 48 h28 M150 64 h20" }) })
    ] }),
    kind === "lane-mfg" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", stroke: "#38A169", strokeWidth: "1.4", children: [
      /* @__PURE__ */ jsx("path", { d: "M100 14 c-4 12 -5 28 -5 44 l0 18 c0 6 2 10 5 12 c3 -2 5 -6 5 -12 l0 -18 c0 -16 -1 -32 -5 -44 Z" }),
      /* @__PURE__ */ jsx("path", { d: "M95 42 L44 62 l0 7 L95 54" }),
      /* @__PURE__ */ jsx("path", { d: "M105 42 L156 62 l0 7 L105 54" }),
      /* @__PURE__ */ jsx("path", { d: "M96 74 l-18 9 l0 5 l18 -7 M104 74 l18 9 l0 5 l-18 -7" })
    ] }),
    kind === "lane-pro" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", stroke: "#38A169", strokeWidth: "1.4", children: [
      /* @__PURE__ */ jsx("path", { d: "M40 82 l0 -34 l16 0 l0 34 M64 82 l0 -50 l18 0 l0 50 M90 82 l0 -26 l14 0 l0 26 M112 82 l0 -44 l18 0 l0 44 M138 82 l0 -60 l20 0 l0 60" }),
      /* @__PURE__ */ jsx("line", { x1: "30", y1: "82", x2: "170", y2: "82" }),
      /* @__PURE__ */ jsxs("g", { fill: "#AAE2C4", stroke: "none", children: [
        /* @__PURE__ */ jsx("rect", { className: "twinkle", x: "68", y: "38", width: "3", height: "4" }),
        /* @__PURE__ */ jsx("rect", { className: "twinkle", style: { animationDelay: "1.2s" }, x: "143", y: "30", width: "3", height: "4" }),
        /* @__PURE__ */ jsx("rect", { className: "twinkle", style: { animationDelay: "2.4s" }, x: "118", y: "46", width: "3", height: "4" })
      ] })
    ] }),
    kind === "lane-con" && /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 200 96", fill: "none", stroke: "#38A169", strokeWidth: "1.4", children: [
      /* @__PURE__ */ jsx("path", { d: "M60 82 L60 40 L100 22 L140 40 L140 82 Z" }),
      /* @__PURE__ */ jsx("path", { d: "M60 40 L100 58 L140 40 M100 58 L100 82" }),
      /* @__PURE__ */ jsx("path", { d: "M148 82 L148 14 M148 14 L108 20 M148 14 L172 18", strokeWidth: "1.2" }),
      /* @__PURE__ */ jsx("path", { d: "M72 66 h16 M72 72 h16 M112 66 h16 M112 72 h16", stroke: "#AAE2C4", strokeWidth: "1.2" })
    ] })
  ] });
}
const products = [
  {
    motif: "mail",
    kicker: "Helm Mail",
    title: "Email fraud, stopped cold.",
    body: "Managed email security plus phishing and deepfake-scam training for your whole team. The #1 way small businesses lose money is a fake invoice or a spoofed CEO: this closes the door.",
    price: "From $12 per user / month"
  },
  {
    motif: "aware",
    kicker: "Helm Aware",
    title: "AI scams can’t fool a trained team.",
    body: "Shadow-AI audit, acceptable-use policy, and live deepfake drills: could your controller tell if that call from the CEO was AI? Quarterly refreshes keep pace as the scams evolve.",
    price: "Workshop from $1,500 + subscription"
  },
  {
    motif: "ready",
    kicker: "Helm Ready",
    title: "Pass the questionnaire. Win the contract.",
    body: "Cyber-insurance readiness, HIPAA, and CMMC gap assessments: fixed fee, plain English, done in weeks. When your insurer or a prime contractor asks the 12 hard questions, you have the answers.",
    price: "Fixed-fee projects from $2,500"
  }
];
const laneLinks = [
  {
    to: "/manufacturing",
    kicker: "Manufacturing & Defense",
    title: "CMMC without the panic",
    note: "Nov 10, 2026 deadline"
  },
  {
    to: "/professional-services",
    kicker: "Law · CPA · Medical",
    title: "Client trust is the product",
    note: "Wire fraud · HIPAA · insurance"
  },
  {
    to: "/contractors",
    kicker: "Contractors & Trades",
    title: "Stop the fake-invoice loss",
    note: "BEC · GC requirements"
  }
];
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Helm: Email Security, AI Scam Defense & Compliance for Small Business",
        desc: "Enterprise-grade email security, AI scam defense, and compliance readiness for small businesses, plain English, published pricing, backed by 24/7 security operations. Free email security scan in 24 hours.",
        path: "/",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "HelmSecure LLC",
          alternateName: "Helm",
          url: "https://helmsecured.com",
          email: "hello@helmsecured.com",
          address: { "@type": "PostalAddress", addressRegion: "NJ", addressCountry: "US" },
          description: "Email security, AI scam defense, and compliance readiness for small businesses."
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "cyber" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow reveal", children: "Security · Compliance · Peace of mind" }),
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", children: "Take the helm of your security." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "Enterprise-grade protection, sized and priced for real businesses: law firms, manufacturers, medical offices, and the trades. No jargon, no bloat, no 40-page reports you'll never read." }),
        /* @__PURE__ */ jsx("div", { className: "hero-ctas reveal d3", children: /* @__PURE__ */ jsx(LeadForm, { source: "home hero", cta: "Get my free scan", compact: true }) }),
        /* @__PURE__ */ jsx("div", { className: "hero-note reveal d3", children: "Free automated email-security scan · plain-English report in 24h · no meeting" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Band, { id: "products", variant: "raised", children: [
      /* @__PURE__ */ jsxs("div", { className: "band-head observe", children: [
        /* @__PURE__ */ jsx("h2", { children: "Three products. One steady hand." }),
        /* @__PURE__ */ jsx("p", { children: "Everything is managed for you, billed monthly, and explained in plain English. Backed 24/7 by industry-leading security operations." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "product-grid", children: products.map((p, i) => /* @__PURE__ */ jsxs("div", { className: `product-tile observe d${i + 1}`, children: [
        /* @__PURE__ */ jsx(ProductMotif, { kind: p.motif }),
        /* @__PURE__ */ jsx("div", { className: "kicker", children: p.kicker }),
        /* @__PURE__ */ jsx("h3", { children: p.title }),
        /* @__PURE__ */ jsx("p", { children: p.body }),
        /* @__PURE__ */ jsx("div", { className: "price", children: p.price })
      ] }, p.kicker)) })
    ] }),
    /* @__PURE__ */ jsx(Band, { children: /* @__PURE__ */ jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxs("div", { className: "observe", children: [
        /* @__PURE__ */ jsx("h3", { children: "Built for the questions you're actually being asked." }),
        /* @__PURE__ */ jsx("p", { children: "Your cyber insurer, your biggest customer, and your bank are all asking the same thing: prove you're protected. We make the answer yes." }),
        /* @__PURE__ */ jsxs("ul", { className: "check-list", children: [
          /* @__PURE__ */ jsx("li", { children: "Cyber-insurance questionnaires answered and remediated" }),
          /* @__PURE__ */ jsx("li", { children: "Wire-fraud and payment-verification protocols that hold up" }),
          /* @__PURE__ */ jsx("li", { children: "CMMC / NIST 800-171 gap assessments before the Nov 2026 deadline" }),
          /* @__PURE__ */ jsx("li", { children: "HIPAA-ready controls for medical and dental practices" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(PanelVisual, {})
    ] }) }),
    /* @__PURE__ */ jsxs(Band, { variant: "raised", children: [
      /* @__PURE__ */ jsx("div", { className: "band-head observe", children: /* @__PURE__ */ jsx("h2", { children: "The numbers behind the urgency." }) }),
      /* @__PURE__ */ jsxs("div", { className: "stats", children: [
        /* @__PURE__ */ jsxs("div", { className: "stat observe", children: [
          /* @__PURE__ */ jsx("div", { className: "num", children: "$2.9B+" }),
          /* @__PURE__ */ jsx("div", { className: "lbl", children: "lost to business email compromise in a single year; most victims are small businesses" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "stat observe d1", children: [
          /* @__PURE__ */ jsx("div", { className: "num", children: "<2%" }),
          /* @__PURE__ */ jsx("div", { className: "lbl", children: "of ~80,000 defense contractors are CMMC-certified ahead of the Nov 10, 2026 mandate" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "stat observe d2", children: [
          /* @__PURE__ */ jsx("div", { className: "num", children: "24/7" }),
          /* @__PURE__ */ jsx("div", { className: "lbl", children: "monitoring behind every Helm product, you never staff a night shift" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsxs("div", { className: "band-head observe", children: [
        /* @__PURE__ */ jsx("h2", { children: "Your industry, your language." }),
        /* @__PURE__ */ jsx("p", { children: "Same protection underneath. A pitch that speaks to your world." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lane-strip observe d1", children: laneLinks.map((l) => /* @__PURE__ */ jsxs(Link, { to: l.to, className: "lane-row", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "kicker", children: l.kicker }),
          /* @__PURE__ */ jsx("div", { className: "lane-title", children: l.title })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "lane-side", children: [
          /* @__PURE__ */ jsx("span", { className: "lane-note", children: l.note }),
          /* @__PURE__ */ jsx("span", { className: "lane-arrow", children: "→" })
        ] })
      ] }, l.to)) })
    ] }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "Find out where you stand. Free.",
        sub: "We run an automated scan of your email domain and send a plain-English report of exactly what a scammer sees, within 24 hours, no meeting required.",
        source: "home cta band"
      }
    )
  ] });
}
function LanePage({ lane }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Meta, { title: lane.metaTitle, desc: lane.metaDesc, path: `/${lane.slug}` }),
    /* @__PURE__ */ jsxs("header", { className: "hero lane", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: lane.backdrop }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow reveal", children: lane.eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", style: { maxWidth: "20ch" }, children: lane.headline }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: lane.sub }),
        /* @__PURE__ */ jsx("div", { className: "hero-ctas reveal d3", children: /* @__PURE__ */ jsx(LeadForm, { source: `${lane.slug} hero`, cta: lane.primaryCta, compact: true }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Band, { variant: "raised", children: [
      /* @__PURE__ */ jsx("div", { className: "band-head observe", children: /* @__PURE__ */ jsx("h2", { children: "What's actually at risk" }) }),
      /* @__PURE__ */ jsx("div", { className: "risk-list", children: lane.pains.map((p, i) => /* @__PURE__ */ jsxs("div", { className: `risk-item observe d${i + 1}`, children: [
        /* @__PURE__ */ jsx("div", { className: "risk-index", children: String(i + 1).padStart(2, "0") }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { children: p.title }),
          /* @__PURE__ */ jsx("p", { children: p.body })
        ] })
      ] }, p.title)) })
    ] }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsxs("div", { className: "band-head observe", children: [
        /* @__PURE__ */ jsx("h2", { children: lane.planTitle }),
        /* @__PURE__ */ jsx("p", { children: lane.planSub })
      ] }),
      /* @__PURE__ */ jsx("ol", { className: "steps-flow", children: lane.steps.map((s, i) => /* @__PURE__ */ jsxs("li", { className: `observe d${i + 1}`, children: [
        /* @__PURE__ */ jsx("div", { className: "step-dot", children: s.num }),
        /* @__PURE__ */ jsx("h3", { children: s.title }),
        /* @__PURE__ */ jsx("p", { children: s.body })
      ] }, s.num)) })
    ] }),
    /* @__PURE__ */ jsx(Band, { variant: "raised", children: /* @__PURE__ */ jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxs("div", { className: "observe", children: [
        /* @__PURE__ */ jsx("h3", { children: lane.proof.title }),
        /* @__PURE__ */ jsx("ul", { className: "check-list", children: lane.proof.points.map((pt) => /* @__PURE__ */ jsx("li", { children: pt }, pt)) })
      ] }),
      /* @__PURE__ */ jsx(PanelVisual, { domain: lane.reportDomain })
    ] }) }),
    /* @__PURE__ */ jsx(CtaBand, { title: lane.cta.title, sub: lane.cta.sub, cta: lane.cta.label, source: `${lane.slug} cta band` })
  ] });
}
const interests = [
  "Email security (Helm Mail)",
  "AI scam defense (Helm Aware)",
  "Compliance: CMMC / HIPAA / cyber insurance (Helm Ready)",
  "Not sure yet, tell me what I need"
];
function Contact() {
  const [state, setState] = useState("idle");
  const sent = state === "sent";
  const onSubmit = async (e) => {
    e.preventDefault();
    if (state === "busy") return;
    setState("busy");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("sent");
    } catch {
      setState("error");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Contact Helm: A Human Replies in One Business Day",
        desc: "Contact Helm about email security, AI scam defense, or compliance readiness. Tell us about your business and get a straight answer within one business day.",
        path: "/contact"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "rain" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("h1", { className: "reveal", style: { fontSize: "clamp(36px, 5vw, 56px)" }, children: "Talk to a human." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d1", children: "Tell us a little about your business and we'll come back within one business day with a straight answer, not a sales sequence." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Band, { children: sent ? /* @__PURE__ */ jsxs("div", { className: "contact-done", role: "status", children: [
      /* @__PURE__ */ jsx("h3", { children: "✓ Message received." }),
      /* @__PURE__ */ jsx("p", { children: "We'll reply within one business day from hello@helmsecured.com." })
    ] }) : /* @__PURE__ */ jsxs("form", { className: "contact-form observe in", onSubmit, children: [
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "_subject", value: "Lead: full contact form" }),
      /* @__PURE__ */ jsx("input", { type: "hidden", name: "_template", value: "table" }),
      /* @__PURE__ */ jsxs("div", { className: "cf-row", children: [
        /* @__PURE__ */ jsxs("label", { children: [
          "Name",
          /* @__PURE__ */ jsx("input", { type: "text", name: "name", required: true, autoComplete: "name", placeholder: "Jane Rivera" })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Company",
          /* @__PURE__ */ jsx("input", { type: "text", name: "company", required: true, autoComplete: "organization", placeholder: "Rivera Machining Co." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "cf-row", children: [
        /* @__PURE__ */ jsxs("label", { children: [
          "Work email",
          /* @__PURE__ */ jsx("input", { type: "email", name: "email", required: true, autoComplete: "email", placeholder: "jane@company.com" })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "Phone ",
          /* @__PURE__ */ jsx("span", { className: "cf-opt", children: "(optional)" }),
          /* @__PURE__ */ jsx("input", { type: "tel", name: "phone", autoComplete: "tel", placeholder: "(555) 555-5555" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        "What do you need help with?",
        /* @__PURE__ */ jsxs("select", { name: "interest", required: true, defaultValue: "", children: [
          /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Choose one…" }),
          interests.map((o) => /* @__PURE__ */ jsx("option", { value: o, children: o }, o))
        ] })
      ] }),
      /* @__PURE__ */ jsxs("label", { children: [
        "Anything else we should know? ",
        /* @__PURE__ */ jsx("span", { className: "cf-opt", children: "(optional)" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            name: "message",
            rows: 5,
            placeholder: "Team size, deadlines, what your insurer or customer is asking for…"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "cf-actions", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            label: state === "busy" ? "Sending…" : "Send message",
            variant: "primary",
            size: "lg",
            type: "submit"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "cf-note", children: "No newsletter. No drip campaign. Just a reply." })
      ] }),
      state === "error" && /* @__PURE__ */ jsxs("div", { className: "lead-form-error", role: "alert", children: [
        "Something went wrong. Email us directly:",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:hello@helmsecured.com", children: "hello@helmsecured.com" })
      ] })
    ] }) })
  ] });
}
const productList = [
  {
    slug: "helm-mail",
    motif: "mail",
    name: "Helm Mail",
    tagline: "Email fraud, stopped cold.",
    desc: "Managed email security and phishing defense for small businesses. We filter what reaches your team, train them on what gets through, and report it all in plain English.",
    metaDesc: "Managed email security for small business: phishing, spoofing, and invoice fraud protection from $12/user/month. Deployed in a day on Microsoft 365 or Google Workspace.",
    price: "$12–15 / user / month",
    priceDetail: "Deployed on your existing Microsoft 365 or Google Workspace. No hardware, no migration.",
    features: [
      {
        title: "Managed filtering that actually gets managed",
        body: "Enterprise-grade email security tuned continuously by us: lookalike domains, spoofed executives, malicious attachments, and payment-fraud patterns blocked before anyone sees them."
      },
      {
        title: "Training built for the AI era",
        body: "Monthly phishing simulations including AI-written lures and deepfake scenarios. Your team learns on realistic fakes, not 2015-era Nigerian-prince examples."
      },
      {
        title: "A quarterly report you can hand to your insurer",
        body: "Blocked threats, click rates, training completion: one page, plain English. Exactly what cyber-insurance carriers and enterprise customers ask to see."
      }
    ],
    how: [
      { num: "1", title: "Connect", body: "Scripted deployment on M365 or Google Workspace, under two hours, no downtime." },
      { num: "2", title: "Protect", body: "Filtering goes live immediately; the first phishing simulation goes out within two weeks." },
      { num: "3", title: "Report", body: "Quarterly plain-English report delivered and walked through with you." }
    ],
    faqs: [
      { q: "Do we need to switch email providers?", a: "No. Helm Mail layers on top of Microsoft 365 or Google Workspace. Nothing about your email addresses or workflow changes." },
      { q: "How fast is deployment?", a: "Under two hours for most businesses, fully scripted, with zero downtime." },
      { q: "Is there a minimum seat count?", a: "No hard minimum: pricing works out best at 10+ seats, but we serve smaller teams too." }
    ]
  },
  {
    slug: "helm-aware",
    motif: "aware",
    name: "Helm Aware",
    tagline: "AI scams can’t fool a trained team.",
    desc: "The AI-scam defense program: shadow-AI audit, acceptable-use policy, deepfake drills, and a payment-verification protocol that stops wire fraud whether the scammer is human or synthetic.",
    metaDesc: "AI scam defense for business: deepfake fraud training, shadow-AI audit, and acceptable-use policy. Workshop from $1,500 plus quarterly threat refreshes.",
    price: "$1,500–3,000 workshop + $200–500 / month",
    priceDetail: "Fixed-fee workshop to start; monthly subscription keeps training and policies current as threats evolve.",
    features: [
      {
        title: "Shadow-AI audit",
        body: "We find out what AI tools your employees actually paste company data into (ChatGPT, meeting notetakers, browser extensions) and show you the exposure in black and white."
      },
      {
        title: "Deepfake & voice-clone drills",
        body: "Live simulation: could your controller tell if that urgent call from the CEO was cloned audio? Your money-movers practice on realistic fakes before a criminal tries a real one."
      },
      {
        title: "The controls that actually stop wire fraud",
        body: "AI acceptable-use policy your insurer will ask for, plus a dead-simple payment-verification protocol, the single control that defeats invoice fraud, AI or not."
      }
    ],
    how: [
      { num: "1", title: "Audit", body: "Shadow-AI discovery across your M365/Google environment, about two hours, mostly automated." },
      { num: "2", title: "Train", body: "Half-day workshop with deepfake drills for executives and everyone who moves money." },
      { num: "3", title: "Refresh", body: "Quarterly 30-minute threat briefings keep your team ahead of the newest scams." }
    ],
    faqs: [
      { q: "Is this just a lunch-and-learn?", a: "No. It ends with deployed controls: a signed acceptable-use policy, a payment-verification protocol in force, and a tested team. Awareness is a byproduct." },
      { q: "Do you sell AI tools?", a: "No. We sell defense against AI-powered scams. Every recommendation is a concrete, deliverable control, no hype." },
      { q: "Who should attend the workshop?", a: "Executives, finance/bookkeeping, and anyone who can approve a payment or change banking details. Typically 5–15 people." }
    ]
  },
  {
    slug: "helm-ready",
    motif: "ready",
    name: "Helm Ready",
    tagline: "Pass the questionnaire. Win the contract.",
    desc: "Fixed-fee compliance readiness: cyber-insurance questionnaires, CMMC/NIST 800-171 gap assessments, and HIPAA controls, remediated, documented, and defended in plain English.",
    metaDesc: "Cyber insurance questionnaire help, CMMC gap assessment, and HIPAA readiness for small business. Fixed-fee projects from $2,500: answers your carrier and primes will accept.",
    price: "$2,500–7,500 fixed fee + optional $500–1,500 / month managed",
    priceDetail: "Scoped and priced before we start. Monthly managed compliance keeps your posture from decaying after the project.",
    features: [
      {
        title: "Cyber-insurance questionnaire, answered",
        body: 'We answer the 12 hard questions accurately, fix the gaps that would have been "no," and give you documentation that holds up at claim time, when it actually matters.'
      },
      {
        title: "CMMC / NIST 800-171 gap assessment",
        body: "All 110 controls scored and prioritized in about two weeks. Remediation sprint follows, then a certified C3PAO partner handles the formal assessment."
      },
      {
        title: "HIPAA for practices without an IT department",
        body: "Security-rule controls with documented evidence, sized for dental and medical offices: the same obligations as a hospital, without the hospital budget."
      }
    ],
    how: [
      { num: "1", title: "Assess", body: "Gap assessment against your target framework: scored, prioritized, plain English." },
      { num: "2", title: "Remediate", body: "We close the gaps: policies, technical controls, evidence collection." },
      { num: "3", title: "Maintain", body: "Optional monthly management so next year’s renewal or audit is a non-event." }
    ],
    faqs: [
      { q: "Can you certify us for CMMC?", a: "Certification is performed by independent C3PAOs; anyone who says otherwise is misleading you. We get you assessment-ready and hand you to a certified partner." },
      { q: "What does fixed-fee mean?", a: "One price, agreed before work starts, based on your size and target framework. No hourly meters, no surprise invoices." },
      { q: "Our insurer denied a claim before. Can you help?", a: "That is exactly the failure mode we prevent: answers on the questionnaire that don’t match reality. We make your answers true, then document the proof." }
    ]
  }
];
function Pricing() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Pricing: Fixed, Published, No Surprises | Helm",
        desc: "Helm pricing: managed email security from $12/user/month, AI scam defense workshops from $1,500, compliance projects from $2,500 fixed fee. Published prices, no custom quotes.",
        path: "/pricing"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "rain" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow reveal", children: "Pricing" }),
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", style: { maxWidth: "18ch" }, children: 'Published prices. No "call us."' }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "Every customer pays the same published rates, on auto-pay, cancel anytime. If a vendor won't show you a price, they're pricing you." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Band, { variant: "raised", children: /* @__PURE__ */ jsx("div", { className: "product-grid", children: productList.map((p, i) => /* @__PURE__ */ jsxs("div", { className: `product-tile observe d${i + 1}`, children: [
      /* @__PURE__ */ jsx(ProductMotif, { kind: p.motif }),
      /* @__PURE__ */ jsx("div", { className: "kicker", children: p.name }),
      /* @__PURE__ */ jsx("h3", { style: { fontSize: 24 }, children: p.price }),
      /* @__PURE__ */ jsx("p", { children: p.priceDetail }),
      /* @__PURE__ */ jsx("ul", { className: "check-list", style: { marginBottom: 8 }, children: p.features.map((f) => /* @__PURE__ */ jsx("li", { children: f.title }, f.title)) }),
      /* @__PURE__ */ jsxs(Link, { to: `/${p.slug}`, className: "price", style: { textDecoration: "none", color: "#AAE2C4" }, children: [
        "Learn more about ",
        p.name,
        " →"
      ] })
    ] }, p.slug)) }) }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsxs("div", { className: "band-head observe", children: [
        /* @__PURE__ */ jsx("h2", { children: "How the numbers work" }),
        /* @__PURE__ */ jsx("p", { children: "A typical 20-person business runs $240–300/month on Helm Mail. Add Helm Aware and you're under what one hour of incident-response lawyering costs, per year. Compliance projects are scoped and priced in writing before any work starts." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "stats", children: [
        /* @__PURE__ */ jsxs("div", { className: "stat observe", children: [
          /* @__PURE__ */ jsx("div", { className: "num", children: "$0" }),
          /* @__PURE__ */ jsx("div", { className: "lbl", children: "onboarding fees, setup fees, or cancellation fees, ever" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "stat observe d1", children: [
          /* @__PURE__ */ jsx("div", { className: "num", children: "1 page" }),
          /* @__PURE__ */ jsx("div", { className: "lbl", children: "our agreements fit on. Auto-pay monthly, cancel anytime" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "stat observe d2", children: [
          /* @__PURE__ */ jsx("div", { className: "num", children: "100%" }),
          /* @__PURE__ */ jsx("div", { className: "lbl", children: "of pricing published on this page: verticals change the pitch, never the price" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "Not sure which one you need?",
        sub: "Start with the free scan: the report tells you exactly which gaps exist, and which product (if any) closes them.",
        source: "pricing cta"
      }
    )
  ] });
}
function ProductPage() {
  const { slug } = useParams();
  const p = productList.find((x) => x.slug === slug);
  if (!p) return /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: `${p.name}: ${p.tagline} | Helm`,
        desc: p.metaDesc,
        path: `/${p.slug}`,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Service",
          name: p.name,
          description: p.metaDesc,
          provider: { "@type": "Organization", name: "HelmSecure LLC", url: "https://helmsecured.com" },
          areaServed: "US"
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "rain" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow reveal", children: p.name }),
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", style: { maxWidth: "18ch" }, children: p.tagline }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: p.desc }),
        /* @__PURE__ */ jsx("div", { className: "hero-ctas reveal d3", children: /* @__PURE__ */ jsx(LeadForm, { source: `product ${p.slug}`, cta: "Get my free scan", compact: true }) }),
        /* @__PURE__ */ jsxs("div", { className: "hero-note reveal d3", children: [
          p.price,
          " · ",
          /* @__PURE__ */ jsx(Link, { to: "/pricing", style: { color: "#AAE2C4" }, children: "full pricing" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Band, { variant: "raised", children: /* @__PURE__ */ jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxs("div", { className: "observe", children: [
        /* @__PURE__ */ jsx("h3", { children: "What you get" }),
        p.features.map((f) => /* @__PURE__ */ jsxs("div", { style: { marginBottom: 24 }, children: [
          /* @__PURE__ */ jsx("h3", { style: { fontSize: 20, marginBottom: 8 }, children: f.title }),
          /* @__PURE__ */ jsx("p", { style: { marginBottom: 0 }, children: f.body })
        ] }, f.title))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "product-tile observe d1", style: { alignSelf: "start" }, children: [
        /* @__PURE__ */ jsx(ProductMotif, { kind: p.motif }),
        /* @__PURE__ */ jsx("div", { className: "kicker", children: p.name }),
        /* @__PURE__ */ jsx("h3", { style: { fontSize: 22 }, children: p.price }),
        /* @__PURE__ */ jsx("p", { children: p.priceDetail })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsx("div", { className: "band-head observe", children: /* @__PURE__ */ jsx("h2", { children: "How it works" }) }),
      /* @__PURE__ */ jsx("ol", { className: "steps-flow", children: p.how.map((s, i) => /* @__PURE__ */ jsxs("li", { className: `observe d${i + 1}`, children: [
        /* @__PURE__ */ jsx("div", { className: "step-dot", children: s.num }),
        /* @__PURE__ */ jsx("h3", { children: s.title }),
        /* @__PURE__ */ jsx("p", { children: s.body })
      ] }, s.num)) })
    ] }),
    /* @__PURE__ */ jsxs(Band, { variant: "raised", children: [
      /* @__PURE__ */ jsx("div", { className: "band-head observe", children: /* @__PURE__ */ jsx("h2", { children: "Common questions" }) }),
      /* @__PURE__ */ jsx("div", { className: "faq-list", children: p.faqs.map((f) => /* @__PURE__ */ jsxs("div", { className: "faq-item observe", children: [
        /* @__PURE__ */ jsx("h3", { children: f.q }),
        /* @__PURE__ */ jsx("p", { children: f.a })
      ] }, f.q)) })
    ] }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "See what a scammer sees. Free.",
        sub: "The free scan checks your email domain's real exposure: the report shows exactly what we'd fix.",
        source: `product ${p.slug} cta`
      }
    )
  ] });
}
function FreeScan() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Free Email Security Scan: Report in 24 Hours | Helm",
        desc: "Free automated scan of your email domain: SPF, DKIM, DMARC, lookalike domains, and breach exposure. Plain-English report in 24 hours. No meeting, no sales call.",
        path: "/free-scan"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "cyber" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow reveal", children: "Free · No meeting · 24-hour turnaround" }),
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", style: { maxWidth: "18ch" }, children: "See your business the way a scammer does." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "Enter your work email. We scan your company's domain (SPF, DKIM, DMARC, lookalike domains, breach exposure) and send a plain-English report within 24 hours. That's the whole process." }),
        /* @__PURE__ */ jsx("div", { className: "hero-ctas reveal d3", children: /* @__PURE__ */ jsx(LeadForm, { source: "free-scan page", cta: "Run my free scan", compact: true }) }),
        /* @__PURE__ */ jsx("div", { className: "hero-note reveal d3", children: "No credit card. No sales sequence. One email with your report." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Band, { variant: "raised", children: /* @__PURE__ */ jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxs("div", { className: "observe", children: [
        /* @__PURE__ */ jsx("h3", { children: "What the report covers" }),
        /* @__PURE__ */ jsxs("ul", { className: "check-list", children: [
          /* @__PURE__ */ jsx("li", { children: "Can criminals send email as your exact domain? (DMARC enforcement)" }),
          /* @__PURE__ */ jsx("li", { children: "Are your legitimate senders authorized? (SPF / DKIM health)" }),
          /* @__PURE__ */ jsx("li", { children: "Lookalike domains registered to impersonate you" }),
          /* @__PURE__ */ jsx("li", { children: "Employee emails appearing in known breach data" }),
          /* @__PURE__ */ jsx("li", { children: "The three fixes that matter most, in priority order" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(PanelVisual, { domain: "yourcompany.com" })
    ] }) }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsx("div", { className: "band-head observe", children: /* @__PURE__ */ jsx("h2", { children: "What happens after" }) }),
      /* @__PURE__ */ jsxs("ol", { className: "steps-flow", children: [
        /* @__PURE__ */ jsxs("li", { className: "observe d1", children: [
          /* @__PURE__ */ jsx("div", { className: "step-dot", children: "1" }),
          /* @__PURE__ */ jsx("h3", { children: "You get the report" }),
          /* @__PURE__ */ jsx("p", { children: "Within 24 hours, written for a business owner, not an IT department." })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "observe d2", children: [
          /* @__PURE__ */ jsx("div", { className: "step-dot", children: "2" }),
          /* @__PURE__ */ jsx("h3", { children: "You decide" }),
          /* @__PURE__ */ jsx("p", { children: "Fix the findings yourself with the report's guidance, or ask us to. No obligation either way." })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "observe d3", children: [
          /* @__PURE__ */ jsx("div", { className: "step-dot", children: "3" }),
          /* @__PURE__ */ jsx("h3", { children: "That's it" }),
          /* @__PURE__ */ jsx("p", { children: "No drip campaign, no weekly follow-up calls. One report, one optional conversation." })
        ] })
      ] })
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "About Helm: Security That Answers to Your Business",
        desc: "Helm (HelmSecure LLC) is a New Jersey security company bringing enterprise-grade email security, AI scam defense, and compliance readiness to small businesses, in plain English, at published prices.",
        path: "/about",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "HelmSecure LLC",
          url: "https://helmsecured.com",
          email: "hello@helmsecured.com",
          address: { "@type": "PostalAddress", addressRegion: "NJ", addressCountry: "US" },
          description: "Email security, AI scam defense, and compliance readiness for small businesses."
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "rain" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow reveal", children: "About Helm" }),
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", style: { maxWidth: "20ch" }, children: "Enterprise security had a size requirement. We removed it." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "Helm exists because a 20-person machine shop faces the same criminals as a Fortune 500, with none of the same defenses, and none of the budget for a security department." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Band, { variant: "raised", children: /* @__PURE__ */ jsxs("div", { className: "split", children: [
      /* @__PURE__ */ jsxs("div", { className: "observe", children: [
        /* @__PURE__ */ jsx("h3", { children: "Who we are" }),
        /* @__PURE__ */ jsx("p", { children: `Helm is a New Jersey company built by two people who watched the same story repeat: an engineer who spent years automating security operations at scale, and a sales leader who spent years hearing business owners say "we're too small to be a target," right up until the wire cleared.` }),
        /* @__PURE__ */ jsx("p", { children: "We designed Helm around one observation: small businesses don't need more security products. They need someone accountable for the outcome, at a price that's published, in language that doesn't require translation." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "observe d1", children: [
        /* @__PURE__ */ jsx("h3", { children: "How we operate" }),
        /* @__PURE__ */ jsxs("ul", { className: "check-list", children: [
          /* @__PURE__ */ jsx("li", { children: "Plain English, always. If you need a glossary, we've failed" }),
          /* @__PURE__ */ jsx("li", { children: "Published fixed pricing. Every customer pays the same rate" }),
          /* @__PURE__ */ jsx("li", { children: "Honest architecture: our monitoring is backed by 24/7 security operations partners, and we say so" }),
          /* @__PURE__ */ jsx("li", { children: "No fear selling. Every warning we give ends in a concrete, priced fix" }),
          /* @__PURE__ */ jsx("li", { children: "Automation-first: machines watch the logs, humans make the calls" }),
          /* @__PURE__ */ jsx("li", { children: "CompTIA Security+ certified engineering, E&O and cyber liability insured" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Band, { children: /* @__PURE__ */ jsxs("div", { className: "band-head observe", children: [
      /* @__PURE__ */ jsx("h2", { children: 'Why "Helm"' }),
      /* @__PURE__ */ jsx("p", { children: "The helm is the one place on a ship where you can see everything and steer. That's the product: not another alarm going off somewhere below deck, but a steady hand and a clear view, so you can run your business while someone competent watches the water." })
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
const faqs = [
  {
    q: "We have an IT person. Why do we need Helm?",
    a: "IT keeps things running; security keeps things from being stolen. They are different disciplines with different tooling. We work alongside your IT person or MSP constantly: they usually become our biggest advocate, because we take the 2 a.m. security worry off their plate."
  },
  {
    q: "Are we really a target? We only have 15 employees.",
    a: "Small businesses are the primary target, not the exception. Criminals automate their targeting, and a 15-person firm with weaker defenses and a real bank account is better economics than a hardened enterprise. Most business email compromise losses come from companies under 100 employees."
  },
  {
    q: "What does the free scan actually check?",
    a: "Your email domain's public security posture: whether DMARC prevents criminals from sending as your domain, SPF/DKIM health, lookalike domains registered to impersonate you, and whether employee credentials appear in known breach data. It is automated, external, and touches nothing inside your systems."
  },
  {
    q: "Do you do 24/7 monitoring yourselves?",
    a: "Monitoring behind Helm products runs 24/7 through established security operations partners whose entire business is round-the-clock detection and response. We are transparent about this: it is how a small business gets enterprise-grade coverage without paying for an in-house night shift."
  },
  {
    q: "How is pricing structured?",
    a: "Published on our pricing page, identical for every customer. Monthly subscriptions on auto-pay with no setup or cancellation fees; compliance projects are fixed-fee, scoped in writing before work begins. We do not do custom quotes."
  },
  {
    q: "Can you get us CMMC certified?",
    a: "Formal CMMC certification is performed only by independent C3PAOs. We get you assessment-ready (gap assessment, remediation, documentation) and hand you to a certified assessment partner. Anyone who claims to sell certification directly is misrepresenting the process."
  },
  {
    q: "What happens if we get hit while working with you?",
    a: "You call us and we handle response alongside our 24/7 partners: containment, recovery, and the insurer conversation. The documentation we maintain for you is exactly what makes a cyber-insurance claim succeed."
  },
  {
    q: "How fast can we start?",
    a: "The free scan takes 24 hours. Helm Mail deploys in under two hours on Microsoft 365 or Google Workspace. Compliance projects start within two weeks of scoping."
  }
];
function Faq() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "FAQ: Straight Answers | Helm",
        desc: "Straight answers about Helm: what the free email security scan checks, how pricing works, CMMC certification facts, 24/7 monitoring, and how fast deployment is.",
        path: "/faq",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a }
          }))
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "rain" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow reveal", children: "FAQ" }),
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", children: "Straight answers." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "The questions business owners actually ask us, answered the way we'd answer them across a table." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Band, { children: /* @__PURE__ */ jsx("div", { className: "faq-list", children: faqs.map((f) => /* @__PURE__ */ jsxs("div", { className: "faq-item observe", children: [
      /* @__PURE__ */ jsx("h3", { children: f.q }),
      /* @__PURE__ */ jsx("p", { children: f.a })
    ] }, f.q)) }) }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "Question not here?",
        sub: "Email us or use the contact form: a human replies within one business day.",
        source: "faq cta"
      }
    )
  ] });
}
const articles = [
  {
    slug: "cmmc-deadline-checklist",
    title: "CMMC 2.0 Deadline: A 12-Step Checklist for Manufacturers",
    metaDesc: "CMMC Phase 2 enforcement starts November 10, 2026. A practical 12-step checklist for small manufacturers and defense subcontractors to get assessment-ready.",
    date: "2026-07-01",
    readMin: 6,
    lane: "Manufacturing & Defense",
    laneTo: "/manufacturing",
    intro: "CMMC Phase 2 enforcement begins November 10, 2026. Fewer than 2% of the roughly 80,000 companies in the defense supply chain hold certification, and assessor calendars are booked months out. If you supply a prime, even two tiers down, here is the punch list.",
    sections: [
      {
        h: "Steps 1–4: Know where you stand",
        ps: [
          "First, confirm your level. Most subs handling Federal Contract Information need Level 1 (17 practices, self-assessed annually). If you touch Controlled Unclassified Information (drawings, specs, technical data marked CUI), you need Level 2: 110 controls from NIST 800-171 and, for most contracts, a third-party assessment.",
          "Second, locate your CUI. You cannot protect what you have not mapped. Walk every place technical data lives: file servers, email, CAD stations, the quoting inbox, that USB drive in the shop office.",
          "Third, calculate your SPRS score honestly. Primes can see it, and a fabricated score is False Claims Act exposure: the DOJ has already settled cases.",
          `Fourth, get a gap assessment against all 110 controls. Two weeks of work turns "we think we're fine" into a scored, prioritized list.`
        ]
      },
      {
        h: "Steps 5–9: Close the gaps that matter",
        ps: [
          "Five: multi-factor authentication everywhere, the single control assessors check first. Six: FIPS-validated encryption for CUI at rest and in transit; your consumer-grade NAS probably does not qualify. Seven: access control, meaning machinists do not need the quoting drive, and the front office does not need CAD.",
          "Eight: an incident response plan you have actually rehearsed once. Nine: System Security Plan (SSP) and POA&M documents, which assessors read before they read anything else. Thin, generic templates are the most common failure."
        ]
      },
      {
        h: "Steps 10–12: Get certified without losing the year",
        ps: [
          "Ten: book your C3PAO now, not after remediation. Backlogs run three to six months, and a reservation focuses the timeline. Eleven: run a mock assessment; failing in private costs nothing, failing the real one costs a re-assessment fee and a lost season.",
          "Twelve: put monthly maintenance in place. Scores decay: a patched server drifts, an employee leaves with access intact. Primes increasingly ask for continuous compliance, not a one-time certificate."
        ]
      }
    ],
    takeaway: "The deadline is fixed; the assessor backlog is not in your control. What is in your control is starting the gap assessment now: it is two weeks of work that determines whether the next twelve months are orderly or a scramble."
  },
  {
    slug: "cyber-insurance-questionnaire",
    title: "How to Answer a Cyber Insurance Questionnaire (Without Voiding Your Coverage)",
    metaDesc: "Cyber insurance questionnaires decide your premium, and whether your claim gets paid. What the 12 common questions mean and how to answer them truthfully.",
    date: "2026-06-24",
    readMin: 5,
    lane: "Professional Services",
    laneTo: "/professional-services",
    intro: "The questionnaire your broker sent is not paperwork: it is the contract behind the contract. Answer it wrong and one of two things happens: your premium jumps, or worse, your insurer denies the claim precisely when you need it. Courts have sided with carriers who voided policies over inaccurate application answers.",
    sections: [
      {
        h: "The questions that actually move your premium",
        ps: [
          "Carriers cluster around the same twelve topics: multi-factor authentication (on email, remote access, and admin accounts; they ask all three separately), endpoint detection, backups that are tested and offline, email filtering, security awareness training, and whether you have a payment-verification procedure for wire transfers.",
          'MFA is the big one. Many carriers now decline to quote at all without it. If the answer today is "partially," deploying it fully is usually a week of work and the single highest-ROI change on the form.'
        ]
      },
      {
        h: "The trap: answering what you wish were true",
        ps: [
          '"Do you conduct regular security awareness training?" A lunch presentation two years ago is a no. "Are backups tested?" Having backups is not the question; restoring from them on a schedule is. Optimistic answers feel harmless at renewal time and catastrophic at claim time.',
          "The right approach: answer truthfully today, fix the gaps, then update the answers. Most carriers will re-quote mid-cycle for material security improvements: brokers do this routinely."
        ]
      },
      {
        h: "Turn the questionnaire into a roadmap",
        ps: [
          'Every "no" on the form is a to-do with a dollar value attached: lower premium, higher coverage limits, and a claim that actually pays. A remediation pass typically takes weeks, not quarters, at small-business scale. Then keep the evidence (screenshots, training logs, backup-test records) in one folder. At claim time, documentation is the difference between a payout and a lawsuit.'
        ]
      }
    ],
    takeaway: "Treat the questionnaire as a legal document and a to-do list at once: answer truthfully, remediate the noes, and document everything. If you want the noes fixed for you at a fixed fee, that is precisely what Helm Ready does."
  },
  {
    slug: "wire-fraud-prevention-law-firms",
    title: "Wire Fraud Prevention for Law Firms: The Callback Protocol",
    metaDesc: "Law firms lose six figures to a single spoofed email. The callback protocol, a one-page payment verification procedure, is the control that actually stops wire fraud.",
    date: "2026-06-17",
    readMin: 4,
    lane: "Professional Services",
    laneTo: "/professional-services",
    intro: `The scam runs the same way every time. A closing approaches. An email arrives, from the title company, the seller's attorney, or a partner, with "updated wire instructions." The formatting is right, the tone is right, the timing is right, because the attacker has been reading the real thread for weeks. The money leaves. It does not come back.`,
    sections: [
      {
        h: "Why smart people wire money to criminals",
        ps: [
          "Business email compromise is not a technology exploit; it is a process exploit. The attacker does not hack your bank: they compromise (or convincingly spoof) one mailbox in the chain, wait for a transaction, and inject new payment instructions at the moment of maximum time pressure.",
          'AI has made the last weak signals disappear. The broken English is gone. Voice clones now back up the email with a phone call that sounds exactly like the partner. Training people to "spot the fake" is necessary but no longer sufficient: you need a control that works even when the fake is perfect.'
        ]
      },
      {
        h: "The callback protocol",
        ps: [
          'The rule fits on one page: any new or changed payment instruction is verified by calling a known-good number (from the file, from the engagement letter, from a prior invoice), never from the email that delivered the change. No exceptions for urgency, seniority, or relationship. The scam depends on bypassing exactly this step, which is why "no exceptions" is the entire control.',
          'Add dual approval above a threshold ($25K is common), and log every verification: two minutes of friction against a six-figure loss. Then drill it once: send your own fake "updated instructions" email and see what happens. Firms that test it once fix the gaps immediately.'
        ]
      }
    ],
    takeaway: "Email filtering keeps most attacks from arriving; the callback protocol makes the ones that arrive harmless. Put both in place and wire fraud stops being an existential risk. We deploy both: filtering via Helm Mail, protocol and drills via Helm Aware."
  },
  {
    slug: "what-is-dmarc",
    title: "What Is DMARC? A Plain-English Guide for Business Owners",
    metaDesc: 'DMARC stops criminals from sending email as your domain. What SPF, DKIM, and DMARC actually do, why "p=none" means unprotected, and how to check your domain in 30 seconds.',
    date: "2026-06-10",
    readMin: 4,
    lane: "All industries",
    laneTo: "/",
    intro: "Right now, anyone on the internet can try to send an email that says it is from your company. Whether it lands in an inbox or a spam folder depends on three DNS records most businesses have never looked at. Here is what they do, minus the jargon.",
    sections: [
      {
        h: "SPF, DKIM, DMARC: the sixty-second version",
        ps: [
          "SPF is a public list of servers allowed to send email for your domain. DKIM is a cryptographic signature proving a message really came from you and was not altered. DMARC is the policy that ties them together: it tells receiving mail servers what to do when a message fails those checks: nothing (p=none), quarantine it, or reject it outright.",
          "The catch: most businesses that have DMARC at all run it at p=none, monitoring mode. That is a smoke detector with the alarm disconnected. Criminals can still send email as your exact domain, and receiving servers have been told to deliver it anyway."
        ]
      },
      {
        h: "Why it matters to your business specifically",
        ps: [
          'Spoofed email is the delivery mechanism for invoice fraud against your customers, sent "from you." When a customer wires money to a criminal because the invoice appeared to come from your domain, the technical failure was yours, and increasingly, so is the reputational and legal fallout. Enforced DMARC also improves deliverability of your legitimate mail, and insurers and enterprise customers now check for it.',
          "Getting to enforcement takes care: flip to p=reject carelessly and you can block your own invoices sent through QuickBooks or your marketing platform. The path is: inventory every service that sends as your domain, authorize each one in SPF/DKIM, watch the reports, then enforce."
        ]
      }
    ],
    takeaway: "Check your domain today: our free scan reads your SPF, DKIM, and DMARC records and tells you in plain English whether a criminal can currently impersonate your company. It takes 24 hours and costs nothing."
  },
  {
    slug: "deepfake-ceo-fraud",
    title: "Deepfake CEO Fraud: Real Cases and the Controls That Stop It",
    metaDesc: "Voice cloning needs three seconds of audio. Real deepfake fraud cases, including a $25M video-call heist, and the two controls that stop synthetic executives.",
    date: "2026-06-03",
    readMin: 5,
    lane: "All industries",
    laneTo: "/",
    intro: "In the most famous case to date, a finance employee at engineering firm Arup joined a video call with the CFO and several colleagues (all of them deepfakes) and wired out roughly $25 million across fifteen transfers. The technology that pulled that off is now cheap, fast, and pointed at businesses a fraction of that size.",
    sections: [
      {
        h: "How little the attacker needs",
        ps: [
          `Three seconds of audio, a voicemail greeting, a conference talk, a social clip, trains a usable voice clone. Your executives' voices are already public. The attack that follows is not sophisticated: a phone call to accounts payable that sounds exactly like the owner, urgent and plausible: "I'm boarding a flight, the acquisition closes today, wire the deposit now, keep it quiet."`,
          "Smaller businesses are the growth market, not the exception. A $40K fraudulent transfer from a 30-person contractor is easier to execute and rarely makes the news: the playbook is identical."
        ]
      },
      {
        h: "Why detection is a losing strategy",
        ps: [
          '"Listen for robotic artifacts" was 2023 advice. Current voice synthesis passes casual inspection, and video is close behind. Any defense that depends on a stressed employee out-detecting a synthetic voice in real time will eventually fail.',
          'The controls that work are procedural, because procedure does not care how good the fake is. One: a payment-verification protocol, meaning every new or changed payment instruction gets a callback to a known-good number, no exceptions, including "the CEO" personally. Two: a drill, simulating a voice-clone request against your own finance team before a criminal does. The first drill almost always finds someone who would have wired the money.'
        ]
      }
    ],
    takeaway: "You cannot train ears to beat synthetic voices, but a callback protocol beats them every time. Helm Aware runs the deepfake drill and installs the protocol; it is a half-day that removes your single largest fraud exposure."
  }
];
function Resources() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Resources: Plain-English Security Guides | Helm",
        desc: "Plain-English guides on CMMC deadlines, cyber insurance questionnaires, wire fraud prevention, DMARC, and deepfake scams, written for business owners, not IT departments.",
        path: "/resources"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "rain" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow reveal", children: "Resources" }),
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", style: { maxWidth: "18ch" }, children: "Security, translated." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "Guides written for the person who signs the checks: no jargon, no fear-mongering, every article ends in something you can do." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Band, { children: /* @__PURE__ */ jsx("div", { className: "lane-strip observe", children: articles.map((a) => /* @__PURE__ */ jsxs(Link, { to: `/resources/${a.slug}`, className: "lane-row", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "kicker", children: a.lane }),
        /* @__PURE__ */ jsx("div", { className: "lane-title", children: a.title })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lane-side", children: [
        /* @__PURE__ */ jsxs("span", { className: "lane-note", children: [
          a.readMin,
          " min read"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "lane-arrow", children: "→" })
      ] })
    ] }, a.slug)) }) }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "Reading is free. So is the scan.",
        sub: "The free email security scan turns theory into your actual numbers: report in 24 hours.",
        source: "resources cta"
      }
    )
  ] });
}
function ArticlePage() {
  const { slug } = useParams();
  const a = articles.find((x) => x.slug === slug);
  if (!a) return /* @__PURE__ */ jsx(Navigate, { to: "/resources", replace: true });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: `${a.title} | Helm`,
        desc: a.metaDesc,
        path: `/resources/${a.slug}`,
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: a.title,
              description: a.metaDesc,
              datePublished: a.date,
              author: { "@type": "Organization", name: "Helm" },
              publisher: { "@type": "Organization", name: "HelmSecure LLC", url: "https://helmsecured.com" }
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Resources", item: "https://helmsecured.com/resources" },
                { "@type": "ListItem", position: 2, name: a.title, item: `https://helmsecured.com/resources/${a.slug}` }
              ]
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "rain" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap article-head", children: [
        /* @__PURE__ */ jsxs("div", { className: "eyebrow reveal", children: [
          /* @__PURE__ */ jsx(Link, { to: "/resources", style: { color: "inherit", textDecoration: "none" }, children: "Resources" }),
          " ",
          "· ",
          a.lane,
          " · ",
          a.readMin,
          " min"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", children: a.title })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Band, { children: /* @__PURE__ */ jsxs("article", { className: "article-body", children: [
      /* @__PURE__ */ jsx("p", { className: "article-intro", children: a.intro }),
      a.sections.map((s) => /* @__PURE__ */ jsxs("section", { children: [
        /* @__PURE__ */ jsx("h2", { children: s.h }),
        s.ps.map((p, i) => /* @__PURE__ */ jsx("p", { children: p }, i))
      ] }, s.h)),
      /* @__PURE__ */ jsxs("div", { className: "article-takeaway", children: [
        /* @__PURE__ */ jsx("h2", { children: "The takeaway" }),
        /* @__PURE__ */ jsx("p", { children: a.takeaway })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "article-related", "aria-label": "Related pages", children: [
        /* @__PURE__ */ jsx("span", { children: "Related:" }),
        /* @__PURE__ */ jsx(Link, { to: a.laneTo, children: a.lane === "All industries" ? "How Helm works" : `Helm for ${a.lane}` }),
        /* @__PURE__ */ jsx(Link, { to: "/free-scan", children: "Free email security scan" }),
        /* @__PURE__ */ jsx(Link, { to: "/pricing", children: "Pricing" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "Get your actual numbers.",
        sub: "The free scan reads your domain's real security posture and reports back in plain English, within 24 hours.",
        source: `article ${a.slug}`
      }
    )
  ] });
}
const manufacturing = {
  slug: "manufacturing",
  backdrop: "aero",
  reportDomain: "precision-mfg.com",
  metaTitle: "CMMC Compliance for NJ Manufacturers & Defense Suppliers | Helm",
  metaDesc: "CMMC Level 1 & 2 gap assessments for New Jersey manufacturers and defense subcontractors. Fixed fee, assessment-ready in weeks, ahead of the Nov 10, 2026 enforcement deadline.",
  eyebrow: "NJ Manufacturers · Defense Suppliers",
  headline: "CMMC certified, before your competitors are.",
  sub: "CMMC Phase 2 enforcement starts November 10, 2026, and fewer than 2% of the ~80,000 companies in the defense supply chain are certified. Assessors are booked 3–6 months out. If you supply a prime, the clock is already running.",
  primaryCta: "Book a CMMC gap assessment",
  pains: [
    {
      title: "Lose the contract, lose the shop",
      body: "Primes are already flowing CMMC requirements down to subs. No certification means you can be dropped from bids you have won for years."
    },
    {
      title: "The assessor backlog is real",
      body: "Certified assessors are scheduling months out. Companies that start after the deadline hits will wait at the back of the line while orders go elsewhere."
    },
    {
      title: "DIY compliance burns the year",
      body: "NIST 800-171 has 110 controls. Interpreting them internally costs engineering time you need on the floor, and gets rejected when done wrong."
    }
  ],
  planTitle: "Weeks to ready. Not quarters.",
  planSub: 'A fixed-fee path from "no idea where we stand" to assessment-ready.',
  steps: [
    {
      num: "1",
      title: "Gap assessment",
      body: "We map your environment against all 110 NIST 800-171 controls and hand you a scored, prioritized gap report in plain English. Fixed fee, ~2 weeks."
    },
    {
      num: "2",
      title: "Remediation sprint",
      body: "We fix the gaps (policies, technical controls, evidence collection) with your team in the loop, not on the hook."
    },
    {
      num: "3",
      title: "Certification & upkeep",
      body: "We hand you to a certified assessor (C3PAO) ready to pass, then keep your score maintained monthly so recertification is a non-event."
    }
  ],
  proof: {
    title: "Built for the defense supply chain.",
    points: [
      "CMMC Level 1 & 2 gap assessments against NIST 800-171",
      "SPRS score calculation and submission support",
      "Partnered with certified C3PAOs for the formal assessment",
      "Monthly managed compliance so the score never decays",
      "Fixed-fee pricing, no open-ended consulting meters"
    ]
  },
  cta: {
    title: "Where do you stand on all 110 controls?",
    sub: "Get a free 30-minute readiness call and leave with your three biggest gaps identified, before an assessor or a prime finds them for you.",
    label: "Book the readiness call"
  }
};
const professionalServices = {
  slug: "professional-services",
  backdrop: "skyline",
  reportDomain: "riveralaw.com",
  metaTitle: "Cybersecurity for Law Firms, CPAs & Medical Practices | Helm",
  metaDesc: "Wire fraud defense, HIPAA readiness, and cyber-insurance questionnaire remediation for law firms, accounting firms, and dental/medical practices. Per-seat pricing, plain English.",
  eyebrow: "Law · CPA · Dental & Medical",
  headline: "Your clients trust you with everything. Keep it that way.",
  sub: "Wire fraud, HIPAA exposure, and cyber-insurance questionnaires now decide which firms clients and carriers trust. One spoofed email can move client money, and no malpractice policy covers the reputation.",
  primaryCta: "Get a free email security assessment",
  pains: [
    {
      title: "Wire fraud targets your inbox",
      body: "Attackers impersonate partners and title companies to redirect closings, settlements, and tax payments. Firms have lost six figures on a single email."
    },
    {
      title: "Your carrier is asking harder questions",
      body: "Cyber-insurance renewals now demand MFA, email security, and training: answer wrong and premiums spike or coverage vanishes when you need it."
    },
    {
      title: "HIPAA fines don’t care about size",
      body: "Dental and medical practices carry the same breach-notification duties as hospital systems, with none of the security staff."
    }
  ],
  planTitle: "Protection that fits a practice.",
  planSub: "Managed for you. Priced per seat. Explained in English.",
  steps: [
    {
      num: "1",
      title: "Helm Mail",
      body: "Managed email security stops the spoofed-partner wire request before anyone sees it, plus training that keeps staff sharp against AI-written scams."
    },
    {
      num: "2",
      title: "Helm Aware",
      body: "Deepfake and AI-scam drills for the people who move money: could your bookkeeper tell if that call from a partner was cloned audio?"
    },
    {
      num: "3",
      title: "Helm Ready",
      body: "We answer your cyber-insurance questionnaire, remediate the gaps, and build HIPAA-ready controls: fixed fee, audit-ready evidence."
    }
  ],
  proof: {
    title: "What your carrier and your clients see.",
    points: [
      "Verified payment-instruction protocol that stops wire redirects",
      "Cyber-insurance questionnaire answered and defensible",
      "HIPAA security-rule controls with documented evidence",
      "Quarterly report you can show clients and partners",
      "Per-seat pricing, a 12-person firm pays like a 12-person firm"
    ]
  },
  cta: {
    title: "Would your firm catch the fake wire request?",
    sub: "Free automated scan of your email domain shows exactly how easily you can be impersonated: plain-English report in 24 hours.",
    label: "Run the free scan"
  }
};
const contractors = {
  slug: "contractors",
  backdrop: "construction",
  reportDomain: "summitbuilders.com",
  metaTitle: "Payment Fraud Protection for Contractors & Trades | Helm",
  metaDesc: "Stop fake invoices and hijacked payment instructions. Email fraud protection and GC-ready security attestations built for contractors, subs, and field-service businesses.",
  eyebrow: "Contractors · Trades · Field Services",
  headline: "One fake invoice can wipe out a job’s profit.",
  sub: "Payment fraud is the #1 cyber threat to contractors: spoofed supplier invoices, hijacked payment instructions, and fake GC emails. Meanwhile GCs and insurers increasingly require proof of security before you can bid or bind coverage.",
  primaryCta: "Get a free fraud-exposure check",
  pains: [
    {
      title: "Supplier invoice fraud",
      body: 'Attackers watch a real email thread, then send a "updated bank details" note from a lookalike domain. The money leaves and doesn’t come back.'
    },
    {
      title: "GCs now require security",
      body: "Bigger general contractors are pushing cyber requirements down to subs: no proof, no bid. It’s becoming as standard as insurance certs."
    },
    {
      title: "Field teams, office risk",
      body: "Estimators and office managers approve payments from phones and job sites, exactly where phishing works best."
    }
  ],
  planTitle: "Simple controls that stop real losses.",
  planSub: "No IT department needed. We run it; you build.",
  steps: [
    {
      num: "1",
      title: "Lock the inbox",
      body: "Helm Mail blocks lookalike-domain and spoofed-invoice email before your office manager ever sees it."
    },
    {
      num: "2",
      title: "Verify every payment change",
      body: "A dead-simple callback protocol for changed bank details: the single control that defeats invoice fraud, AI or not."
    },
    {
      num: "3",
      title: "Prove it to GCs & insurers",
      body: "A one-page security attestation you can hand to any GC or carrier, backed by real controls we maintain monthly."
    }
  ],
  proof: {
    title: "Built for how the trades actually run.",
    points: [
      "Works with the email you already have: Microsoft 365 or Google",
      "Nothing for field crews to install or learn",
      "Payment-verification protocol in one laminated page",
      "Monthly flat pricing that scales with office headcount, not trucks",
      "Proof-of-security docs for GC prequalification packets"
    ]
  },
  cta: {
    title: "How exposed is your payment chain?",
    sub: "Free scan shows whether scammers can impersonate your company to your GCs and suppliers: report in 24 hours.",
    label: "Run the free check"
  }
};
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(Layout, {}),
    entry: "src/App.tsx",
    children: [
      { index: true, element: /* @__PURE__ */ jsx(Home, {}) },
      { path: "manufacturing", element: /* @__PURE__ */ jsx(LanePage, { lane: manufacturing }) },
      { path: "professional-services", element: /* @__PURE__ */ jsx(LanePage, { lane: professionalServices }) },
      { path: "contractors", element: /* @__PURE__ */ jsx(LanePage, { lane: contractors }) },
      { path: "pricing", element: /* @__PURE__ */ jsx(Pricing, {}) },
      {
        path: ":slug",
        element: /* @__PURE__ */ jsx(ProductPage, {}),
        getStaticPaths: () => productList.map((p) => p.slug)
      },
      { path: "free-scan", element: /* @__PURE__ */ jsx(FreeScan, {}) },
      { path: "about", element: /* @__PURE__ */ jsx(About, {}) },
      { path: "faq", element: /* @__PURE__ */ jsx(Faq, {}) },
      { path: "contact", element: /* @__PURE__ */ jsx(Contact, {}) },
      { path: "resources", element: /* @__PURE__ */ jsx(Resources, {}) },
      {
        path: "resources/:slug",
        element: /* @__PURE__ */ jsx(ArticlePage, {}),
        getStaticPaths: () => articles.map((a) => `resources/${a.slug}`)
      }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  createRoot
};
