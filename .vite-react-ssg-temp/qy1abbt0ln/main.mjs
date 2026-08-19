import { Head, ViteReactSSG } from "vite-react-ssg";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useId, useState, createContext, useEffect, useContext, useRef, forwardRef, useMemo } from "react";
import { Link, useLocation, NavLink as NavLink$1, Outlet, useRouteError, useNavigate, isRouteErrorResponse } from "react-router-dom";
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
    "--font-family-body": 'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    "--font-family-heading": '"Tenor Sans", "Helvetica Neue", sans-serif',
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
    "--color-accent": "light-dark(#214B3B, #C8B99F)",
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
const META_PIXEL_ID = "";
const CONSENT_KEY = "helm-remarketing-consent-v1";
let initialized = false;
let lastPagePath = "";
function isRemarketingConfigured() {
  return META_PIXEL_ID.length > 0;
}
function getRemarketingConsent() {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    return stored === "accepted" || stored === "declined" ? stored : null;
  } catch {
    return null;
  }
}
function setRemarketingConsent(choice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
  }
}
function metaPixel() {
  if (window.fbq) return window.fbq;
  const fbq = ((...args) => {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
      return;
    }
    fbq.queue?.push(args);
  });
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq = fbq;
  return fbq;
}
function ensureMetaPixel() {
  if (!isRemarketingConfigured() || getRemarketingConsent() !== "accepted" || typeof document === "undefined") {
    return false;
  }
  if (initialized) {
    window.fbq?.("consent", "grant");
    return true;
  }
  const fbq = metaPixel();
  if (!document.getElementById("helm-meta-pixel")) {
    const script = document.createElement("script");
    script.id = "helm-meta-pixel";
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }
  fbq("consent", "grant");
  fbq("init", META_PIXEL_ID);
  initialized = true;
  return true;
}
function trackMetaPageView(path) {
  if (!ensureMetaPixel() || path === lastPagePath) return;
  lastPagePath = path;
  window.fbq?.("track", "PageView");
}
function trackMetaConversion(event) {
  if (!ensureMetaPixel()) return;
  switch (event) {
    case "scan_started":
      window.fbq?.("trackCustom", "ScanStarted");
      break;
    case "findings_call_selected":
      window.fbq?.("track", "Schedule");
      break;
    case "contact_submitted":
      window.fbq?.("track", "Contact");
      break;
  }
}
function expireCookie(name, domain) {
  const domainPart = domain ? `;domain=${domain}` : "";
  document.cookie = `${name}=;Max-Age=0;path=/${domainPart};SameSite=Lax`;
}
function stopMetaTracking() {
  lastPagePath = "";
  if (typeof document === "undefined") return;
  window.fbq?.("consent", "revoke");
  for (const name of ["_fbp", "_fbc"]) {
    expireCookie(name);
    expireCookie(name, window.location.hostname);
    expireCookie(name, `.${window.location.hostname}`);
  }
}
function openPrivacyChoices() {
  if (typeof document !== "undefined") {
    document.dispatchEvent(new Event("helm:privacy-choices"));
  }
}
const JOURNEY_KEY = "helm-marketing-journey";
const ATTRIBUTION_KEY = "helm-marketing-attribution";
const MEASUREMENT_URL = "https://app.helmsecured.com/api/marketing/events";
const MAX_VALUE_LENGTH = 100;
function clean(value) {
  const trimmed = value?.trim().slice(0, MAX_VALUE_LENGTH);
  return trimmed || null;
}
function journeyId() {
  const create = () => {
    if (typeof crypto.randomUUID === "function") return crypto.randomUUID();
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    bytes[6] = bytes[6] & 15 | 64;
    bytes[8] = bytes[8] & 63 | 128;
    const hex = [...bytes].map((value) => value.toString(16).padStart(2, "0"));
    return `${hex.slice(0, 4).join("")}-${hex.slice(4, 6).join("")}-${hex.slice(6, 8).join("")}-${hex.slice(8, 10).join("")}-${hex.slice(10).join("")}`;
  };
  try {
    const existing = sessionStorage.getItem(JOURNEY_KEY);
    if (existing) return existing;
    const created = create();
    sessionStorage.setItem(JOURNEY_KEY, created);
    return created;
  } catch {
    return create();
  }
}
function referrerHost() {
  if (!document.referrer) return null;
  try {
    const host = new URL(document.referrer).hostname.toLowerCase();
    return host === window.location.hostname.toLowerCase() ? null : clean(host);
  } catch {
    return null;
  }
}
function getAttribution(source) {
  const params = new URLSearchParams(window.location.search);
  const current = {
    source: clean(source ?? params.get("src")),
    utmSource: clean(params.get("utm_source")),
    utmMedium: clean(params.get("utm_medium")),
    utmCampaign: clean(params.get("utm_campaign")),
    utmContent: clean(params.get("utm_content")),
    utmTerm: clean(params.get("utm_term")),
    landingPath: window.location.pathname.slice(0, 200),
    referrerHost: referrerHost()
  };
  let stored = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(ATTRIBUTION_KEY) ?? "{}");
  } catch {
    stored = {};
  }
  const attribution = {
    journeyId: journeyId(),
    source: current.source ?? stored.source ?? null,
    utmSource: current.utmSource ?? stored.utmSource ?? null,
    utmMedium: current.utmMedium ?? stored.utmMedium ?? null,
    utmCampaign: current.utmCampaign ?? stored.utmCampaign ?? null,
    utmContent: current.utmContent ?? stored.utmContent ?? null,
    utmTerm: current.utmTerm ?? stored.utmTerm ?? null,
    landingPath: stored.landingPath ?? current.landingPath,
    referrerHost: stored.referrerHost ?? current.referrerHost
  };
  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
  }
  return attribution;
}
function withAttribution(url, source) {
  const attribution = getAttribution(source);
  const target = new URL(url, window.location.origin);
  const fields = {
    j: attribution.journeyId,
    src: attribution.source,
    utm_source: attribution.utmSource,
    utm_medium: attribution.utmMedium,
    utm_campaign: attribution.utmCampaign,
    utm_content: attribution.utmContent,
    utm_term: attribution.utmTerm,
    lp: attribution.landingPath,
    rh: attribution.referrerHost
  };
  for (const [key, value] of Object.entries(fields)) {
    if (value) target.searchParams.set(key, value);
  }
  return target.toString();
}
function trackConversion(event, source) {
  trackMetaConversion(event);
  const body = JSON.stringify({ event, ...getAttribution(source) });
  try {
    if (navigator.sendBeacon(
      MEASUREMENT_URL,
      new Blob([body], { type: "text/plain;charset=UTF-8" })
    )) {
      return;
    }
  } catch {
  }
  void fetch(MEASUREMENT_URL, {
    method: "POST",
    body,
    headers: { "Content-Type": "text/plain;charset=UTF-8" },
    keepalive: true
  }).catch(() => {
  });
}
const PORTAL_URL = "https://app.helmsecured.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PERSONAL_DOMAINS = /* @__PURE__ */ new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "aol.com",
  "icloud.com",
  "me.com",
  "proton.me",
  "protonmail.com"
]);
function LeadForm({
  source,
  cta = "Get my free scan",
  compact = false
}) {
  const inputId = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const onSubmit = (e) => {
    e.preventDefault();
    if (state === "busy") return;
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setState("error");
      return;
    }
    const domain = trimmed.slice(trimmed.lastIndexOf("@") + 1).toLowerCase();
    if (PERSONAL_DOMAINS.has(domain)) {
      setState("personal");
      return;
    }
    setState("busy");
    trackConversion("scan_started", source);
    const url = new URL("/scan/auto", PORTAL_URL);
    url.searchParams.set("email", trimmed);
    url.searchParams.set("followup", "1");
    const attributedUrl = withAttribution(url.toString(), source);
    window.location.href = attributedUrl;
  };
  return /* @__PURE__ */ jsxs("form", { className: `lead-form${compact ? " compact" : ""}`, onSubmit, children: [
    /* @__PURE__ */ jsx("label", { htmlFor: inputId, className: "sr-only", children: "Work email" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: inputId,
        type: "email",
        name: "email",
        required: true,
        placeholder: "Work email",
        autoComplete: "email",
        "aria-label": "Work email",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        disabled: state === "busy"
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        label: state === "busy" ? "Opening our secure portal…" : cta,
        variant: "primary",
        size: compact ? "md" : "lg",
        type: "submit",
        isLoading: state === "busy"
      }
    ),
    state === "error" && /* @__PURE__ */ jsx("div", { className: "lead-form-error", role: "alert", children: "Enter a valid work email address to run your scan." }),
    state === "personal" && /* @__PURE__ */ jsx("div", { className: "lead-form-error", role: "alert", children: "That looks like a personal inbox. The scan checks your company's domain, which is the part after the @. Enter your work email to get a report about your business." }),
    /* @__PURE__ */ jsxs("div", { className: "lead-form-disclosure", children: [
      /* @__PURE__ */ jsxs("p", { className: "lead-form-next", children: [
        /* @__PURE__ */ jsx("strong", { children: "What happens next:" }),
        " Confirm your domain in our secure portal. Your report usually arrives within a minute."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "lead-form-consent", children: "By requesting the scan, you agree to receive your report and a brief follow-up email. Unsubscribe anytime." })
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
const LABEL = { auto: "Auto", light: "Light", dark: "Dark" };
const MODES = ["auto", "light", "dark"];
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
function ThemePicker({ compact = false }) {
  const { mode, setMode } = useThemeMode();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const current = mounted ? mode : "auto";
  const choices = MODES.map((option) => /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: `theme-choice${current === option ? " active" : ""}`,
      onClick: (event) => {
        setMode(option);
        event.currentTarget.closest("details")?.removeAttribute("open");
      },
      "aria-pressed": current === option,
      title: `${LABEL[option]} theme`,
      children: [
        /* @__PURE__ */ jsx(Icon, { mode: option }),
        /* @__PURE__ */ jsx("span", { children: LABEL[option] })
      ]
    },
    option
  ));
  if (compact) {
    return /* @__PURE__ */ jsxs("details", { className: "theme-picker theme-picker-compact", children: [
      /* @__PURE__ */ jsxs("summary", { "aria-label": `Color theme: ${LABEL[current]}`, children: [
        /* @__PURE__ */ jsx(Icon, { mode: current }),
        /* @__PURE__ */ jsx("span", { children: LABEL[current] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "theme-picker-menu", role: "group", "aria-label": "Choose color theme", children: choices })
    ] });
  }
  return /* @__PURE__ */ jsx("div", { className: "theme-picker", role: "group", "aria-label": "Color theme", children: choices });
}
const SITE_ORIGIN = "https://helmsecured.com";
function canonicalPath(value) {
  if (!value.startsWith("/") || value.startsWith("//")) return value;
  const match = value.match(/^([^?#]*)(.*)$/);
  if (!match) return value;
  const [, pathname, suffix] = match;
  if (pathname === "/" || pathname.endsWith("/") || /\.[a-z0-9]+$/i.test(pathname)) {
    return value;
  }
  return `${pathname}/${suffix}`;
}
function siteUrl(path = "/") {
  return `${SITE_ORIGIN}${canonicalPath(path)}`;
}
const businessPhone = {
  display: "(732) 943-0866",
  e164: "+17329430866"
};
const linkedInUrl = "https://www.linkedin.com/company/helm-secured/";
const serviceAreaText = "Monmouth, Ocean, and Middlesex counties, New Jersey";
const serviceAreaJsonLd = [
  "Monmouth County, New Jersey",
  "Ocean County, New Jersey",
  "Middlesex County, New Jersey"
].map((name) => ({ "@type": "AdministrativeArea", name }));
function HelmMark({ size = 28 }) {
  return /* @__PURE__ */ jsxs("svg", { width: size, height: size, viewBox: "0 0 32 32", fill: "none", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "13", stroke: "currentColor", strokeWidth: "2.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "5", fill: "currentColor" }),
    [0, 45, 90, 135, 180, 225, 270, 315].map((a) => /* @__PURE__ */ jsx(
      "line",
      {
        x1: "16",
        y1: "1",
        x2: "16",
        y2: "7",
        stroke: "currentColor",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        transform: `rotate(${a} 16 16)`
      },
      a
    ))
  ] });
}
function DirectionIcon({
  className,
  external = false
}) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      viewBox: "0 0 20 20",
      fill: "none",
      "aria-hidden": "true",
      focusable: "false",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: external ? "M5 15 15 5M7 5h8v8" : "M4 10h12M11 5l5 5-5 5",
          stroke: "currentColor",
          strokeWidth: "1.7",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function ActionLink({
  to,
  label,
  size = "lg",
  className = ""
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to,
      className: `action-link action-link-${size}${className ? ` ${className}` : ""}`,
      children: label
    }
  );
}
const lanes$1 = [
  { to: "/manufacturing", label: "Manufacturing & Defense" },
  { to: "/professional-services", label: "Professional Services" },
  { to: "/law-firms", label: "Law Firms" },
  { to: "/accounting-firms", label: "Accounting & Tax Firms" },
  { to: "/medical-practices", label: "Medical & Dental Practices" },
  { to: "/contractors", label: "Contractors & Trades" }
];
const services = [
  { to: "/helm-mail", label: "Helm Mail", clue: "Managed email protection" },
  { to: "/helm-watch", label: "Helm Watch", clue: "24/7 device monitoring" },
  { to: "/helm-command", label: "Helm Command", clue: "Security program ownership" },
  { to: "/helm-aware", label: "Helm Aware", clue: "Training and scam readiness" },
  { to: "/helm-ready", label: "Helm Ready", clue: "Insurance and compliance" }
];
function keepDesktopMenusExclusive(event) {
  const openedMenu = event.currentTarget;
  if (!openedMenu.open) return;
  openedMenu.closest(".nav-links")?.querySelectorAll(".nav-menu[open]").forEach((menu) => {
    if (menu !== openedMenu) menu.open = false;
  });
}
const footerCols = [
  {
    title: "Products",
    links: [
      { to: "/helm-command", label: "Helm Command" },
      { to: "/helm-mail", label: "Helm Mail" },
      { to: "/helm-aware", label: "Helm Aware" },
      { to: "/helm-ready", label: "Helm Ready" },
      { to: "/helm-watch", label: "Helm Watch" },
      { to: "/pricing", label: "Pricing" }
    ]
  },
  {
    title: "Industries",
    links: lanes$1.map((l) => ({ to: l.to, label: l.label }))
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/resources", label: "Resources" },
      { to: "/quiz", label: "AI scam quiz" },
      { to: "/faq", label: "FAQ" },
      { to: "/trust", label: "Trust & Security" },
      { to: "/contact", label: "Contact" },
      { to: "/free-scan", label: "Free scan" }
    ]
  },
  {
    title: "Legal",
    links: [
      { to: "/terms", label: "Terms of Service" },
      { to: "/privacy", label: "Privacy Policy" }
    ]
  }
];
const drawerSecondary = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/quiz", label: "AI scam quiz" },
      { to: "/faq", label: "FAQ" },
      { to: "/trust", label: "Trust & Security" },
      { to: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Legal",
    links: [
      { to: "/terms", label: "Terms of Service" },
      { to: "/privacy", label: "Privacy Policy" }
    ]
  }
];
function SiteNav() {
  const { pathname } = useLocation();
  const productActive = services.some(({ to }) => pathname.startsWith(to));
  const industryActive = lanes$1.some(({ to }) => pathname.startsWith(to));
  const resourcesActive = pathname.startsWith("/resources");
  const pricingActive = pathname.startsWith("/pricing");
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);
  const wasOpenRef = useRef(false);
  useEffect(() => {
    setOpen(false);
    document.querySelectorAll(".site-nav .nav-menu[open]").forEach((menu) => menu.removeAttribute("open"));
  }, [pathname]);
  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        wasOpenRef.current = false;
        menuButtonRef.current?.focus({ preventScroll: true });
      }
      return;
    }
    wasOpenRef.current = true;
    const drawer = drawerRef.current;
    const menuButton = menuButtonRef.current;
    if (!drawer || !menuButton) return;
    const focusableSelector = [
      "a[href]",
      "button:not([disabled])",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "summary",
      '[tabindex]:not([tabindex="-1"])'
    ].join(",");
    const visibleControls = (root) => Array.from(root.querySelectorAll(focusableSelector)).filter((element) => element.getClientRects().length > 0);
    const drawerControls = () => visibleControls(drawer);
    const trappedControls = () => [menuButton, ...drawerControls()].filter((element) => element.getClientRects().length > 0);
    const originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const backgroundState = Array.from(document.querySelectorAll("main, footer")).map((element) => ({
      element,
      hadInert: element.hasAttribute("inert"),
      ariaHidden: element.getAttribute("aria-hidden")
    }));
    backgroundState.forEach(({ element }) => {
      element.setAttribute("inert", "");
      element.setAttribute("aria-hidden", "true");
    });
    const firstDrawerControl = drawerControls()[0];
    (firstDrawerControl ?? drawer).focus({ preventScroll: true });
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const controls = trappedControls();
      if (controls.length === 0) {
        event.preventDefault();
        drawer.focus({ preventScroll: true });
        return;
      }
      const activeIndex = controls.indexOf(document.activeElement);
      if (event.shiftKey && activeIndex <= 0) {
        event.preventDefault();
        controls[controls.length - 1].focus();
      } else if (!event.shiftKey && (activeIndex === -1 || activeIndex === controls.length - 1)) {
        event.preventDefault();
        controls[0].focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      backgroundState.forEach(({ element, hadInert, ariaHidden }) => {
        if (!hadInert) element.removeAttribute("inert");
        if (ariaHidden === null) element.removeAttribute("aria-hidden");
        else element.setAttribute("aria-hidden", ariaHidden);
      });
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("nav", { className: "site-nav", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "nav-brand", children: [
        /* @__PURE__ */ jsx(HelmMark, {}),
        " Helm"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "nav-right", children: [
        /* @__PURE__ */ jsxs("div", { className: "nav-links", children: [
          /* @__PURE__ */ jsxs(
            "details",
            {
              className: `nav-menu${productActive ? " active" : ""}`,
              onToggle: keepDesktopMenusExclusive,
              children: [
                /* @__PURE__ */ jsx("summary", { "aria-current": productActive ? "page" : void 0, children: "Services" }),
                /* @__PURE__ */ jsx("div", { className: "nav-menu-panel", children: services.map((service) => /* @__PURE__ */ jsxs(NavLink$1, { to: canonicalPath(service.to), children: [
                  /* @__PURE__ */ jsx("strong", { children: service.label }),
                  /* @__PURE__ */ jsx("span", { children: service.clue })
                ] }, service.to)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "details",
            {
              className: `nav-menu${industryActive ? " active" : ""}`,
              onToggle: keepDesktopMenusExclusive,
              children: [
                /* @__PURE__ */ jsx("summary", { "aria-current": industryActive ? "page" : void 0, children: "Industries" }),
                /* @__PURE__ */ jsx("div", { className: "nav-menu-panel nav-menu-panel-compact", children: lanes$1.map((lane) => /* @__PURE__ */ jsx(NavLink$1, { to: canonicalPath(lane.to), children: lane.label }, lane.to)) })
              ]
            }
          ),
          /* @__PURE__ */ jsx(NavLink$1, { to: "/resources/", className: resourcesActive ? "active" : "", "aria-current": resourcesActive ? "page" : void 0, children: "Resources" }),
          /* @__PURE__ */ jsx(NavLink$1, { to: "/pricing/", className: pricingActive ? "active" : "", "aria-current": pricingActive ? "page" : void 0, children: "Pricing" }),
          /* @__PURE__ */ jsx("a", { href: `${PORTAL_URL}/login`, children: "Sign in" }),
          /* @__PURE__ */ jsx(ActionLink, { to: "/free-scan/", label: "Free scan", size: "sm", className: "nav-cta" })
        ] }),
        /* @__PURE__ */ jsx(ThemePicker, { compact: true }),
        /* @__PURE__ */ jsx(ActionLink, { to: "/free-scan/", label: "Free scan", size: "sm", className: "nav-cta-mobile" }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            ref: menuButtonRef,
            className: `nav-burger${open ? " open" : ""}`,
            "aria-label": open ? "Close menu" : "Open menu",
            "aria-controls": "site-nav-drawer",
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
    open && /* @__PURE__ */ jsxs(
      "nav",
      {
        ref: drawerRef,
        id: "site-nav-drawer",
        className: "nav-drawer",
        "aria-label": "Mobile navigation",
        tabIndex: -1,
        children: [
          /* @__PURE__ */ jsx(ActionLink, { to: "/free-scan/", label: "Get my free scan", className: "drawer-cta" }),
          /* @__PURE__ */ jsxs("div", { className: "drawer-primary", "aria-label": "Primary navigation", children: [
            /* @__PURE__ */ jsxs("details", { className: `drawer-section drawer-primary-section${productActive ? " active" : ""}`, children: [
              /* @__PURE__ */ jsx("summary", { children: "Services" }),
              /* @__PURE__ */ jsx("div", { className: "drawer-section-links drawer-service-links", children: services.map((service) => /* @__PURE__ */ jsxs(Link, { to: canonicalPath(service.to), "aria-current": pathname.startsWith(service.to) ? "page" : void 0, children: [
                /* @__PURE__ */ jsx("strong", { children: service.label }),
                /* @__PURE__ */ jsx("span", { children: service.clue })
              ] }, service.to)) })
            ] }),
            /* @__PURE__ */ jsxs("details", { className: `drawer-section drawer-primary-section${industryActive ? " active" : ""}`, children: [
              /* @__PURE__ */ jsx("summary", { children: "Industries" }),
              /* @__PURE__ */ jsx("div", { className: "drawer-section-links", children: lanes$1.map((lane) => /* @__PURE__ */ jsx(Link, { to: canonicalPath(lane.to), "aria-current": pathname.startsWith(lane.to) ? "page" : void 0, children: lane.label }, lane.to)) })
            ] }),
            /* @__PURE__ */ jsxs(Link, { className: `drawer-direct${resourcesActive ? " active" : ""}`, to: "/resources/", "aria-current": resourcesActive ? "page" : void 0, children: [
              /* @__PURE__ */ jsx("span", { children: "Resources" }),
              /* @__PURE__ */ jsx(DirectionIcon, {})
            ] }),
            /* @__PURE__ */ jsxs(Link, { className: `drawer-direct${pricingActive ? " active" : ""}`, to: "/pricing/", "aria-current": pricingActive ? "page" : void 0, children: [
              /* @__PURE__ */ jsx("span", { children: "Pricing" }),
              /* @__PURE__ */ jsx(DirectionIcon, {})
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "drawer-sections", children: drawerSecondary.map((col) => /* @__PURE__ */ jsxs(
            "details",
            {
              className: `drawer-section drawer-secondary-section${col.links.some(({ to }) => pathname.startsWith(to)) ? " active" : ""}`,
              children: [
                /* @__PURE__ */ jsx("summary", { children: col.title }),
                /* @__PURE__ */ jsx("div", { className: "drawer-section-links", children: col.links.map((l) => /* @__PURE__ */ jsx(Link, { to: canonicalPath(l.to), "aria-current": pathname.startsWith(l.to) ? "page" : void 0, children: l.label }, l.to)) })
              ]
            },
            col.title
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "drawer-foot", children: [
            /* @__PURE__ */ jsx("a", { href: `${PORTAL_URL}/login`, children: "Sign in" }),
            /* @__PURE__ */ jsx(ThemePicker, {})
          ] })
        ]
      }
    )
  ] });
}
function ScrollCue() {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: "scroll-cue reveal d3",
      "aria-label": "Scroll to the next section",
      onClick: (e) => {
        const next = e.currentTarget.closest(".hero, .japandi-home-hero")?.nextElementSibling;
        if (next) {
          next.scrollIntoView({
            behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
            block: "start"
          });
        }
      },
      children: /* @__PURE__ */ jsx(
        "svg",
        {
          width: "20",
          height: "20",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          "aria-hidden": true,
          children: /* @__PURE__ */ jsx("path", { d: "M6 9l6 6 6-6" })
        }
      )
    }
  );
}
function CtaBand({
  title,
  sub,
  cta = "Get my free scan",
  source,
  mode = "scan"
}) {
  const mailSubject = mode === "book" ? `${cta} (${source})` : "Free security scan request";
  const mailBody = mode === "book" ? "Hi Helm team,\n\nI'd like to book a call.\n\nCompany:\nBest phone (optional):\nAnything you want us to know up front:\n\nThanks!" : "Hi Helm team,\n\nI'd like the free security scan for my company.\n\nCompany:\nWebsite domain:\nBest phone (optional):\n\nThanks!";
  const contactPath = mode === "book" ? `/contact?intent=findings-call&src=${encodeURIComponent(source)}` : "/contact";
  return /* @__PURE__ */ jsx("section", { className: "cta-band", id: "contact", children: /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ jsx("h2", { className: "observe", children: title }),
    /* @__PURE__ */ jsx("p", { className: "observe d1", children: sub }),
    /* @__PURE__ */ jsxs("div", { className: "cta-form observe d2", children: [
      mode === "book" ? /* @__PURE__ */ jsx(ActionLink, { to: canonicalPath(contactPath), label: cta }) : /* @__PURE__ */ jsx(LeadForm, { source, cta }),
      /* @__PURE__ */ jsxs("div", { className: "cta-alt", children: [
        "Have more to tell us?",
        " ",
        /* @__PURE__ */ jsxs(Link, { to: "/contact/", children: [
          "Use the full contact form ",
          /* @__PURE__ */ jsx(DirectionIcon, {})
        ] }),
        /* @__PURE__ */ jsx("br", {}),
        "Prefer email?",
        " ",
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `mailto:hello@helmsecured.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`,
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
  return null;
}
function SiteFooter() {
  const remarketingConfigured = isRemarketingConfigured();
  return /* @__PURE__ */ jsx("footer", { className: "site-footer", children: /* @__PURE__ */ jsxs("div", { className: "wrap footer-layout", children: [
    /* @__PURE__ */ jsxs("div", { className: "footer-identity", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "footer-brand", children: [
        /* @__PURE__ */ jsx(HelmMark, { size: 36 }),
        /* @__PURE__ */ jsx("span", { children: "Helm Security" })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Security that answers to your business." }),
      /* @__PURE__ */ jsxs("div", { className: "footer-contact", children: [
        /* @__PURE__ */ jsx("a", { href: "mailto:hello@helmsecured.com", children: "hello@helmsecured.com" }),
        /* @__PURE__ */ jsx("a", { href: `tel:${businessPhone.e164}`, children: businessPhone.display }),
        /* @__PURE__ */ jsxs("span", { children: [
          "Serving ",
          serviceAreaText
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "footer-cols", "aria-label": "Footer navigation", children: footerCols.map((col) => /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
      /* @__PURE__ */ jsx("div", { className: "footer-col-title", children: col.title }),
      col.links.map((l) => /* @__PURE__ */ jsx(Link, { to: canonicalPath(l.to), children: l.label }, l.to)),
      col.title === "Legal" && remarketingConfigured && /* @__PURE__ */ jsx("button", { type: "button", className: "footer-privacy-button", onClick: openPrivacyChoices, children: "Privacy choices" })
    ] }, col.title)) }),
    /* @__PURE__ */ jsxs("div", { className: "footer-bottom", children: [
      /* @__PURE__ */ jsxs("span", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Helm Security LLC · New Jersey"
      ] }),
      /* @__PURE__ */ jsx("a", { href: linkedInUrl, "aria-label": "Helm Security on LinkedIn", children: "LinkedIn" })
    ] })
  ] }) });
}
function AdConsent() {
  const { pathname } = useLocation();
  const configured = isRemarketingConfigured();
  const [choice, setChoice] = useState(getRemarketingConsent);
  const [open, setOpen] = useState(configured && choice === null);
  useEffect(() => {
    if (!configured) return;
    const reopen = () => setOpen(true);
    document.addEventListener("helm:privacy-choices", reopen);
    return () => document.removeEventListener("helm:privacy-choices", reopen);
  }, [configured]);
  useEffect(() => {
    if (configured && choice === "accepted") {
      trackMetaPageView(pathname);
    }
  }, [choice, configured, pathname]);
  if (!configured || !open) return null;
  const decide = (next) => {
    setRemarketingConsent(next);
    setChoice(next);
    if (next === "declined") stopMetaTracking();
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs("section", { className: "ad-consent", "aria-label": "Advertising privacy choices", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "ad-consent-title", children: "Your privacy choice" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Helm can use Meta's advertising tool to measure visits and show useful follow-up ads. It stays off unless you allow it. We never send your form entries or scanned domain to Meta. ",
        /* @__PURE__ */ jsx(Link, { to: "/privacy/", children: "Details" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ad-consent-actions", children: [
      /* @__PURE__ */ jsx("button", { type: "button", className: "ad-consent-decline", onClick: () => decide("declined"), children: "No thanks" }),
      /* @__PURE__ */ jsx("button", { type: "button", className: "ad-consent-accept", onClick: () => decide("accepted"), children: "Allow remarketing" })
    ] })
  ] });
}
const NavLink = forwardRef(
  function NavLink2({ href = "", children, ...rest }, ref) {
    if (/^(https?:)?\/\//.test(href) || href.startsWith("#") || href.startsWith("mailto:")) {
      return /* @__PURE__ */ jsx("a", { ref, href, ...rest, children });
    }
    return /* @__PURE__ */ jsx(Link, { ref, to: canonicalPath(href), ...rest, children });
  }
);
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
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
    /* @__PURE__ */ jsx(SiteFooter, {}),
    /* @__PURE__ */ jsx(AdConsent, {})
  ] }) });
}
function Layout() {
  return /* @__PURE__ */ jsx(ThemeModeProvider, { children: /* @__PURE__ */ jsx(ThemedShell, {}) });
}
function Meta({
  title,
  desc,
  path,
  jsonLd,
  ogImage = "/og.png",
  ogType = "website",
  publishedTime,
  modifiedTime
}) {
  const canonicalUrl = siteUrl(path);
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_ORIGIN}${ogImage}`;
  return /* @__PURE__ */ jsxs(Head, { children: [
    /* @__PURE__ */ jsx("title", { children: title }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: desc }),
    /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
    /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsx("meta", { property: "og:description", content: desc }),
    /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonicalUrl }),
    /* @__PURE__ */ jsx("meta", { property: "og:type", content: ogType }),
    /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Helm" }),
    publishedTime && /* @__PURE__ */ jsx("meta", { property: "article:published_time", content: publishedTime }),
    modifiedTime && /* @__PURE__ */ jsx("meta", { property: "article:modified_time", content: modifiedTime }),
    /* @__PURE__ */ jsx("meta", { property: "og:image", content: absoluteOgImage }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:width", content: "1200" }),
    /* @__PURE__ */ jsx("meta", { property: "og:image:height", content: "630" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: desc }),
    /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: absoluteOgImage }),
    jsonLd && /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(jsonLd) })
  ] });
}
const productList = [
  {
    slug: "helm-command",
    ctaMode: "book",
    commercialState: "design-partner",
    motif: "command",
    name: "Helm Command",
    metaTitle: "Helm Command: Managed Security Program Leadership",
    tagline: "Keep important security work from getting lost between teams.",
    desc: "Security decisions often get split across IT tickets, insurance forms, vendor projects, and leadership meetings. When nobody owns the whole list, overdue work can stay open until a customer, insurer, or incident exposes it. Helm Command keeps the risks, decisions, evidence, and follow-up in one managed program without taking over help desk or general IT.",
    bestFor: "50 to 249 employee organizations with an incumbent IT provider or internal IT capability but no accountable security-program owner",
    metaDesc: "Helm Command provides managed security program leadership, risk and roadmap management, evidence readiness, and incumbent IT coordination for qualified design partners.",
    price: "Qualified design partners",
    term: "Early access",
    priceDetail: "Scope and pricing are confirmed after a fit and complexity review. Paid delivery begins only after the agreement and insurance gates clear.",
    features: [
      {
        title: "A maintained risk register and 12-month roadmap",
        body: "Each important security issue has an owner, a due date, and a reason it matters. Helm keeps the list current so unfinished work does not disappear into an old assessment or a crowded IT queue."
      },
      {
        title: "Evidence that stays ready",
        body: "When a customer or insurer asks what is protected, the answer should not depend on memory. Helm maintains the agreed evidence and drafts responses from what can be verified. Your organization still reviews and owns every attestation."
      },
      {
        title: "Leadership cadence and incident readiness",
        body: "Quarterly reviews, an annual tabletop, and a written incident path give leaders, internal IT, and outside providers the same plan to follow before a serious problem forces them to coordinate under pressure."
      },
      {
        title: "Coordination without an IT takeover",
        body: "Helm follows the security work through with the people responsible for completing it. Your existing provider or internal team still handles help desk, administration, procurement, and routine IT operations."
      }
    ],
    how: [
      { num: "1", title: "Confirm the fit", body: "We review why the program is needed, who sponsors it, who owns IT today, and whether the work can be clearly bounded for both sides." },
      { num: "2", title: "Build the working plan", body: "We document responsibilities, current risks, available evidence, incident contacts, and the first 12-month roadmap. Every action receives an owner and due date." },
      { num: "3", title: "Keep it moving", body: "Helm runs the agreed monthly, quarterly, annual, and event-driven reviews while the named IT and business owners complete the operational changes assigned to them." }
    ],
    faqs: [
      { q: "Does Helm Command replace our MSP or internal IT team?", a: "No. Command is the accountable security-program layer. Your MSP or internal IT team keeps responsibility for help desk, administration, patching, procurement, backup operations, and other routine IT work." },
      { q: "What is included?", a: "The standard program includes a maintained risk and decision register, a prioritized 12-month roadmap, evidence upkeep, bounded questionnaire and insurance-readiness support, quarterly leadership reviews, an annual tabletop, and coordination with the named IT owner." },
      { q: "Is Helm Command available now?", a: "Qualified design-partner conversations are open now. Paid delivery begins only after the final service agreement and insurance prerequisites are complete." },
      { q: "Why is there no published price yet?", a: "Command is priced by operating complexity, required control coverage, and coordination load rather than headcount alone. We confirm the scope and price after a fit review while the design-partner offer is being validated." },
      { q: "Does Command include 24/7 support?", a: "No. Covered security products may include vendor-operated 24/7 monitoring when stated, but Command does not include Helm-operated 24/7 support, forensic response, breach counsel, or unlimited advisory work." }
    ]
  },
  {
    slug: "helm-mail",
    motif: "mail",
    name: "Helm Mail",
    metaTitle: "Helm Mail: Managed Email and Human-Risk Security",
    tagline: "Protect the inbox. Prepare the person.",
    desc: "A convincing email can lead an employee to enter a password, open a malicious file, or approve a fraudulent payment. Helm Mail combines filtering, phishing and impersonation protection, employee reporting, triage, simulations, and awareness learning in one managed service for compatible Microsoft 365 and Google Workspace environments.",
    bestFor: "businesses that want email-threat protection, phishing response, and ongoing employee readiness managed together",
    metaDesc: "Layered email filtering, phishing protection, triage, simulations, and awareness learning at $50/user/month with a $1,000 monthly account minimum.",
    price: "$50 / protected user / month",
    term: "12-month initial term",
    priceDetail: "$1,000 monthly account minimum, equivalent to 20 protected users. Setup and ongoing Helm management included. 12-month initial term.",
    features: [
      {
        title: "Two layers of email defense",
        body: "Mail-flow filtering blocks malicious, suspicious, and unwanted messages. A second detection layer looks for phishing, business-email compromise, impersonation, and related campaigns that can otherwise appear to be ordinary business email."
      },
      {
        title: "Report, triage, and remove",
        body: "Employees report suspicious messages from Outlook or Gmail instead of deciding alone. Helm Mail triages the report, removes confirmed malicious messages, and explains the result in plain English."
      },
      {
        title: "Training connected to real threats",
        body: "Managed simulations and awareness learning reinforce the decisions attackers are testing, including suspicious sign-ins, payment changes, and urgent requests. Helm reviews the results and reports what needs attention."
      }
    ],
    how: [
      { num: "1", title: "Connect", body: "We confirm compatibility, connect the detection layer, and configure the appropriate mail-flow protection for your Microsoft 365 or Google Workspace environment. Your mailboxes stay where they are." },
      { num: "2", title: "Protect and prepare", body: "We configure filtering, threat detection, employee reporting, triage, simulations, and awareness learning as one program." },
      { num: "3", title: "Review what happens", body: "Helm reviews notable threats and employee-reporting patterns, then explains what happened and what the business should adjust." }
    ],
    faqs: [
      { q: "Do we need to migrate our email?", a: "No. Your mailboxes stay in Microsoft 365 or Google Workspace. Helm configures the appropriate filtering and detection connections for your environment; the exact mail-flow and DNS changes are confirmed before deployment." },
      { q: "Does Helm Mail include security-awareness training?", a: "Yes. Ongoing phishing simulations, awareness learning, employee reporting, and triage are part of Helm Mail. The separate Helm Aware workshop is for teams that need an AI-use policy, live scam-readiness session, and payment-verification protocol." },
      { q: "Does this include encrypted email or secure file transfer?", a: "No. Helm Mail does not include a secure-message portal, encrypted outbound delivery, or secure file transfer. If your legal, healthcare, or financial workflow requires those capabilities, Helm will identify and scope a separate solution before you buy." },
      { q: "Is there a minimum monthly charge?", a: "Yes. Helm Mail is $50 per protected user per month with a $1,000 monthly account minimum, equivalent to 20 protected users. The service has a 12-month initial term." }
    ]
  },
  {
    slug: "helm-aware",
    ctaMode: "book",
    motif: "aware",
    name: "Helm Aware",
    metaTitle: "Helm Aware: AI Scam Readiness Workshop",
    tagline: "Give your team a process that a convincing scam cannot bypass.",
    desc: "A cloned voice or polished email can sound completely legitimate. If the business has no rule for checking payment changes or sensitive AI use, employees have to make high-consequence decisions on their own. Helm Aware is a fixed-fee working session that produces an AI-use policy, live scam training, and a payment-verification protocol the team can use immediately.",
    bestFor: "leadership teams that need an AI-use policy, payment-verification process, and practical live scam training",
    metaDesc: "A fixed-fee AI scam readiness workshop for small and medium-sized businesses, including policy, training, and a payment-verification protocol.",
    price: "$2,500 to $4,000 fixed fee",
    term: "Fixed fee",
    priceDetail: "No subscription required. Targeted executive deepfake drills are separately authorized add-ons from $1,500.",
    features: [
      {
        title: "See where AI is already in the business",
        body: "A focused review identifies which AI tools employees use, what information they put into them, and where the lack of a clear rule could expose client or company information."
      },
      {
        title: "Practice the scams that move money",
        body: "A live session walks through realistic voice-clone, deepfake, impersonation, and payment-change requests so leaders and approvers know when to stop and how to verify them."
      },
      {
        title: "Leave with usable controls",
        body: "You receive a written AI acceptable-use policy and a payment-verification protocol that reflects how your organization actually approves and releases money."
      }
    ],
    how: [
      { num: "1", title: "Discover", body: "We map payment approvals, sensitive AI use, and the people most likely to receive high-consequence requests." },
      { num: "2", title: "Workshop", body: "Helm runs the live scam-readiness session and works through the decisions your policy and callback protocol must cover." },
      { num: "3", title: "Put it in writing", body: "You receive the agreed AI-use policy, payment-verification protocol, and practical next actions. Any targeted drill is separately approved." }
    ],
    faqs: [
      { q: "Is this a subscription?", a: "No. Helm Aware is a fixed-fee workshop and deliverable set. Ongoing simulations and awareness learning are included in Helm Mail." },
      { q: "What do we receive?", a: "The standard engagement includes a shadow-AI review, live scam-readiness workshop, written AI acceptable-use policy, payment-verification protocol, and prioritized next actions." },
      { q: "Are executive deepfake drills included?", a: "No. Targeted executive drills require separate written authorization and start at $1,500. Remediation, HR enforcement, and additional advisory work are also separately scoped." }
    ]
  },
  {
    slug: "helm-ready",
    ctaMode: "book",
    motif: "ready",
    name: "Helm Ready",
    metaTitle: "Helm Ready: Cyber Insurance and CMMC Readiness",
    tagline: "Know which answers you can support before you sign.",
    desc: "An unsupported answer on an insurance form, CMMC assessment, or customer questionnaire can create a problem when the evidence is reviewed. Helm Ready is fixed-fee readiness work that identifies what is in place, what is missing, and what needs to be documented before the business makes a representation.",
    bestFor: "businesses preparing for cyber-insurance, CMMC, or HIPAA readiness work",
    metaDesc: "Fixed-fee cyber insurance, CMMC, and HIPAA readiness for small and medium-sized businesses, with documented findings and a prioritized roadmap.",
    price: "$2,500 to $7,500 fixed fee",
    term: "Fixed fee",
    priceDetail: "Insurance readiness and CMMC Level 1 from $2,500. HIPAA or full CMMC Level 2 gap assessments typically $5,000 to $7,500.",
    features: [
      {
        title: "Cyber-insurance questionnaire, answered",
        body: "We verify the common control questions, identify incomplete answers, and organize the evidence behind what the business can support. Any remediation is agreed separately after the gaps are known."
      },
      {
        title: "CMMC / NIST 800-171 gap assessment",
        body: "For Level 2, the agreed scope is assessed against all 110 requirements and each finding is tied to evidence. Remediation and any formal C3PAO assessment remain separate so the preparation work is not confused with certification."
      },
      {
        title: "HIPAA for practices without an IT department",
        body: "The assessment follows electronic patient information through the systems and workflows used by the practice, then documents the safeguards, gaps, and next decisions without pretending one checklist establishes compliance."
      }
    ],
    how: [
      { num: "1", title: "Assess", body: "We review the agreed systems, requirements, and available evidence, then document what is implemented and what cannot yet be supported." },
      { num: "2", title: "Plan", body: "You receive a prioritized roadmap that names the evidence needed, the responsible owner, and the next practical step for each finding." },
      { num: "3", title: "Decide what to fix", body: "After the assessment, you can address the findings internally or ask Helm to scope specific implementation work separately." }
    ],
    faqs: [
      { q: "Can you certify us for CMMC?", a: "No. A formal certification assessment, when required, is performed by an independent accredited C3PAO. Helm Ready documents your current state and prioritized gaps; Helm Security does not certify or promise an assessor relationship." },
      { q: "What does fixed-fee mean?", a: "One price, agreed before work starts, based on your size and target framework. No hourly meters, no surprise invoices." },
      { q: "Can you help with an insurance questionnaire?", a: "Yes. We verify each answer against the controls actually in place, identify gaps, and organize supporting evidence. Coverage decisions remain with your insurer and the policy language." }
    ]
  },
  {
    slug: "helm-watch",
    motif: "watch",
    name: "Helm Watch",
    metaTitle: "Helm Watch: 24/7 Managed Device Protection",
    tagline: "24/7 detection and response, without the 24/7 payroll.",
    desc: "An alert that appears overnight can sit untouched until morning while an attacker moves to another device or account. Helm Watch gives covered Windows and Mac workstations round-the-clock monitoring, human investigation, and containment when suspicious activity becomes a real threat.",
    bestFor: "businesses that want 24/7 monitoring and response for up to two eligible Windows or Mac workstations per covered user",
    metaDesc: "Managed device detection and response with 24/7 monitoring, human-triaged alerts, and containment from $40 per user monthly for up to two eligible devices.",
    price: "$40 / user / month",
    term: "Month to month",
    priceDetail: "$200 monthly account minimum. Includes up to two eligible Windows or Mac workstations per covered user. Servers and other device classes are separately scoped. Managed device detection and response only at launch, with a 24/7 security operations center monitoring covered devices.",
    features: [
      {
        title: "A SOC on duty when you are not",
        body: "Security alerts do not wait for office hours. A 24/7 security operations center watches covered devices overnight, on weekends, and on holidays so suspicious activity can be investigated when it happens."
      },
      {
        title: "Response, not just another alert",
        body: "Human analysts investigate suspicious activity instead of forwarding every raw alert to the customer. If a covered device is compromised, they can isolate it to help keep the activity from spreading."
      },
      {
        title: "You only hear about what matters",
        body: "Analysts discard false alarms and escalate activity that needs attention. When something is real, you receive a plain-English explanation of what happened, what was done, and what needs to happen next."
      }
    ],
    how: [
      { num: "1", title: "Deploy", body: "A lightweight security agent is installed on covered Windows and Mac devices using the rollout method agreed during qualification." },
      { num: "2", title: "Watch", body: "The security operations center monitors the covered devices around the clock. Human analysts investigate suspicious activity and discard false alarms." },
      { num: "3", title: "Respond", body: "When the activity is malicious, the response may include isolating the affected device. You receive a plain-English account of the incident and the action taken." }
    ],
    faqs: [
      { q: "Do we need to replace our antivirus?", a: "Usually yes, and that is a good thing: the security agent covers what antivirus does and adds detection and response on top. We sort out the specifics during deployment so nothing overlaps or conflicts." },
      { q: "What happens when you find something?", a: "Human analysts investigate first, so false alarms die quietly. Real incidents get contained, the affected device is isolated if needed, and you get a plain-English explanation of what happened and what was done." },
      { q: "Does Helm staff the overnight SOC?", a: "No. A specialist security operations center provides the 24/7 monitoring and containment behind Helm Watch. Helm handles deployment, account management, customer communication, and business-hours follow-up." },
      { q: "Does Helm Watch protect phones and tablets?", a: "Not through the standard Helm Watch security agent. The service includes up to two eligible Windows or Mac workstations per covered user. Phones and tablets need separate identity, email, and device-management controls, which Helm will identify and scope before you buy." },
      { q: "Can you deploy to Macs?", a: "Yes. Small Mac fleets can use the validated guided installation path. Larger fleets use the client's existing mobile device management platform and the current deployment profile. The client's authorized IT owner or MSP pushes the profile and package, and Helm verifies the required permissions and agent readiness after deployment." },
      { q: "Does Helm Watch include identity monitoring, SIEM, or awareness training?", a: "No. Helm Watch focuses on managed device detection and response. Ongoing awareness training and phishing simulations are included in Helm Mail; identity monitoring and SIEM are not included." }
    ]
  }
];
const contactInterests = [
  ...productList.flatMap(
    (product) => product.pricingOptions?.map((option) => option.name) ?? [product.name]
  ),
  "Not sure, help me choose"
];
const products = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  contactInterests,
  productList
}, Symbol.toStringTag, { value: "Module" }));
const japandiHero = "/assets/japandi-hero-B9tC9loB.webp";
const japandiHeroMobile = "/assets/japandi-home-mobile-640-BiIsuRKi.webp";
const lanes = [
  { to: "/manufacturing", name: "Manufacturing & defense", promise: "CMMC without the panic" },
  { to: "/professional-services", name: "Law, CPA & medical", promise: "Client trust is the product" },
  { to: "/contractors", name: "Contractors & trades", promise: "Stop the fake-invoice loss" }
];
function Scan({ source }) {
  return /* @__PURE__ */ jsx("div", { className: "home-scan", children: /* @__PURE__ */ jsx(LeadForm, { source, cta: "Get my free scan", compact: true }) });
}
function Home() {
  return /* @__PURE__ */ jsxs("div", { className: "home-japandi", children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Helm: Cybersecurity for New Jersey Small and Medium Businesses",
        desc: "Leadership-led New Jersey security for small and medium-sized businesses: accountable security program management, email protection, awareness, compliance readiness, and device monitoring.",
        path: "/",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Helm Security LLC",
          alternateName: "Helm",
          url: siteUrl("/"),
          sameAs: [linkedInUrl],
          email: "hello@helmsecured.com",
          telephone: businessPhone.e164,
          areaServed: serviceAreaJsonLd,
          address: { "@type": "PostalAddress", addressRegion: "NJ", addressCountry: "US" },
          description: "Managed security program leadership and focused security services for small and medium-sized businesses."
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "japandi-home-hero", children: [
      /* @__PURE__ */ jsxs("picture", { children: [
        /* @__PURE__ */ jsx("source", { media: "(max-width: 700px)", srcSet: japandiHeroMobile }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: japandiHero,
            className: "japandi-home-art",
            alt: "Deep-pine sculptural helm beside mineral-paper forms in a quiet interior",
            width: "1672",
            height: "941",
            loading: "eager",
            decoding: "async",
            fetchPriority: "high"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "japandi-home-shade", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxs("div", { className: "japandi-home-copy", children: [
        /* @__PURE__ */ jsx("h1", { children: "Security with less noise." }),
        /* @__PURE__ */ jsx("p", { children: "Protect the email, devices, and business processes attackers use to steal money or sensitive information. Helm gives New Jersey businesses clear next steps and someone accountable for following through." }),
        /* @__PURE__ */ jsx(Scan, { source: "home hero" }),
        /* @__PURE__ */ jsx("small", { children: "Free domain scan · no card · no required meeting" })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "services", className: "home-service-section", "aria-labelledby": "home-services-title", children: [
      /* @__PURE__ */ jsxs("div", { className: "home-section-intro", children: [
        /* @__PURE__ */ jsx("h2", { id: "home-services-title", children: "One accountable program. Four focused services." }),
        /* @__PURE__ */ jsx("p", { children: "Choose Command when security work keeps falling between teams. Choose a focused service when the immediate problem is email, devices, fraud readiness, or compliance evidence." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "home-service-list", children: productList.map((service) => /* @__PURE__ */ jsxs(Link, { to: canonicalPath(`/${service.slug}`), className: "home-service-link", children: [
        /* @__PURE__ */ jsx("span", { className: "home-service-name", children: service.name }),
        /* @__PURE__ */ jsx("strong", { children: service.tagline }),
        /* @__PURE__ */ jsx("span", { className: "home-service-price", children: service.price }),
        /* @__PURE__ */ jsx(DirectionIcon, { className: "home-service-arrow" })
      ] }, service.slug)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "home-proof-section", children: [
      /* @__PURE__ */ jsx("blockquote", { children: "When a customer or insurer asks what is protected, you should not have to guess." }),
      /* @__PURE__ */ jsxs("div", { className: "home-proof-list", children: [
        /* @__PURE__ */ jsx("span", { children: "Cyber-insurance questionnaires" }),
        /* @__PURE__ */ jsx("span", { children: "Payment-verification protocols" }),
        /* @__PURE__ */ jsx("span", { children: "CMMC / NIST 800-171 gaps" }),
        /* @__PURE__ */ jsx("span", { children: "HIPAA-ready controls" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "home-industries-section", children: [
      /* @__PURE__ */ jsx("h2", { children: "Start with the problem your business is dealing with." }),
      /* @__PURE__ */ jsx("nav", { className: "home-industry-links", "aria-label": "Industry pages", children: lanes.map((lane) => /* @__PURE__ */ jsxs(Link, { to: canonicalPath(lane.to), children: [
        /* @__PURE__ */ jsx("span", { children: lane.name }),
        /* @__PURE__ */ jsx("strong", { children: lane.promise }),
        /* @__PURE__ */ jsx(DirectionIcon, {})
      ] }, lane.to)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "home-close-section", children: [
      /* @__PURE__ */ jsx("h2", { children: "Find out where you stand." }),
      /* @__PURE__ */ jsx("p", { children: "The first look is free. No meeting required." }),
      /* @__PURE__ */ jsx(Scan, { source: "home close" })
    ] })
  ] });
}
const errorStill = "/assets/japandi-error-still-v1-Biy-X21Z.webp";
const VALID_PAGES = [
  { path: "/", label: "Home" },
  { path: "/manufacturing/", label: "Manufacturing & Defense" },
  { path: "/professional-services/", label: "Professional Services" },
  { path: "/contractors/", label: "Contractors & Trades" },
  { path: "/pricing/", label: "Pricing" },
  { path: "/free-scan/", label: "Free Scan" },
  { path: "/quiz/", label: "AI Scam Readiness Quiz" },
  { path: "/about/", label: "About" },
  { path: "/faq/", label: "FAQ" },
  { path: "/trust/", label: "Trust & Security" },
  { path: "/contact/", label: "Contact" },
  { path: "/resources/", label: "Resources" },
  { path: "/helm-command/", label: "Helm Command" },
  { path: "/helm-mail/", label: "Helm Mail" },
  { path: "/helm-aware/", label: "Helm Aware" },
  { path: "/helm-ready/", label: "Helm Ready" },
  { path: "/helm-watch/", label: "Helm Watch" }
];
function GlobalErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const isMissing = isRouteErrorResponse(error) && error.status === 404;
  const pageTitle = isMissing ? "Page Not Found | Helm Security" : "Something Went Wrong | Helm Security";
  const suggestions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return VALID_PAGES.filter(
      ({ path, label }) => path.toLowerCase().includes(normalized) || label.toLowerCase().includes(normalized)
    ).slice(0, 4);
  }, [query]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (suggestions[0]) {
      navigate(suggestions[0].path);
      return;
    }
    setMessage("We could not match that page. Try Home, Pricing, Resources, or Contact.");
  };
  return /* @__PURE__ */ jsxs("main", { className: "error-page", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "noindex, follow" })
    ] }),
    /* @__PURE__ */ jsxs(Link, { to: "/", className: "error-brand", "aria-label": "Helm Security home", children: [
      /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 32 32", "aria-hidden": "true", children: [
        /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "13" }),
        /* @__PURE__ */ jsx("circle", { cx: "16", cy: "16", r: "5", className: "error-brand-core" }),
        [0, 45, 90, 135, 180, 225, 270, 315].map((angle) => /* @__PURE__ */ jsx(
          "line",
          {
            x1: "16",
            y1: "1",
            x2: "16",
            y2: "7",
            transform: `rotate(${angle} 16 16)`
          },
          angle
        ))
      ] }),
      /* @__PURE__ */ jsx("span", { children: "Helm" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "error-shell", "aria-labelledby": "error-title", children: [
      /* @__PURE__ */ jsxs("div", { className: "error-copy", children: [
        /* @__PURE__ */ jsx("h1", { id: "error-title", children: "We could not open that page." }),
        /* @__PURE__ */ jsx("p", { children: isMissing ? "The address may have changed or the page may no longer exist. Choose one of the links below or search for the page you need." : "The page did not load correctly. Return home, try another page, or contact Helm if the problem continues." }),
        /* @__PURE__ */ jsxs("div", { className: "error-actions", "aria-label": "Recovery options", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "error-action-primary", children: "Return home" }),
          /* @__PURE__ */ jsx(Link, { to: "/contact/", className: "error-action-secondary", children: "Contact Helm" })
        ] }),
        /* @__PURE__ */ jsxs("form", { className: "error-search", onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "error-page-search", children: "Find a page" }),
          /* @__PURE__ */ jsxs("div", { className: "error-search-row", children: [
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "error-page-search",
                name: "q",
                value: query,
                onChange: (event) => {
                  setQuery(event.target.value);
                  setMessage("");
                },
                placeholder: "Try “pricing” or “resources”",
                autoComplete: "off"
              }
            ),
            /* @__PURE__ */ jsx("button", { type: "submit", children: "Search" })
          ] }),
          suggestions.length > 0 && /* @__PURE__ */ jsx("ul", { className: "error-suggestions", "aria-label": "Suggested pages", children: suggestions.map((suggestion) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => navigate(suggestion.path), children: [
            /* @__PURE__ */ jsx("span", { children: suggestion.label }),
            /* @__PURE__ */ jsx("small", { children: suggestion.path })
          ] }) }, suggestion.path)) }),
          message && /* @__PURE__ */ jsx("p", { className: "error-search-message", role: "alert", children: message })
        ] })
      ] }),
      /* @__PURE__ */ jsx("figure", { className: "error-still", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: errorStill,
          alt: "Balanced river stones beside a pine ceramic bowl in a quiet sunlit alcove",
          width: "1216",
          height: "896",
          loading: "eager",
          decoding: "async"
        }
      ) })
    ] })
  ] });
}
const lazyPage = (load) => async () => ({
  Component: (await load()).default
});
const lazyManufacturing = async () => {
  const [{ default: LanePage }, { manufacturing }] = await Promise.all([
    import("./assets/LanePage-D14EdJ2I.js"),
    import("./assets/lanes-BgR10_g3.js")
  ]);
  return { Component: () => /* @__PURE__ */ jsx(LanePage, { lane: manufacturing }) };
};
const lazyProfessionalServices = async () => {
  const [{ default: LanePage }, { professionalServices }] = await Promise.all([
    import("./assets/LanePage-D14EdJ2I.js"),
    import("./assets/lanes-BgR10_g3.js")
  ]);
  return { Component: () => /* @__PURE__ */ jsx(LanePage, { lane: professionalServices }) };
};
const lazyLawFirms = async () => {
  const [{ default: LanePage }, { lawFirms }] = await Promise.all([
    import("./assets/LanePage-D14EdJ2I.js"),
    import("./assets/lanes-BgR10_g3.js")
  ]);
  return { Component: () => /* @__PURE__ */ jsx(LanePage, { lane: lawFirms }) };
};
const lazyAccountingFirms = async () => {
  const [{ default: LanePage }, { accountingFirms }] = await Promise.all([
    import("./assets/LanePage-D14EdJ2I.js"),
    import("./assets/lanes-BgR10_g3.js")
  ]);
  return { Component: () => /* @__PURE__ */ jsx(LanePage, { lane: accountingFirms }) };
};
const lazyMedicalPractices = async () => {
  const [{ default: LanePage }, { medicalPractices }] = await Promise.all([
    import("./assets/LanePage-D14EdJ2I.js"),
    import("./assets/lanes-BgR10_g3.js")
  ]);
  return { Component: () => /* @__PURE__ */ jsx(LanePage, { lane: medicalPractices }) };
};
const lazyContractors = async () => {
  const [{ default: LanePage }, { contractors }] = await Promise.all([
    import("./assets/LanePage-D14EdJ2I.js"),
    import("./assets/lanes-BgR10_g3.js")
  ]);
  return { Component: () => /* @__PURE__ */ jsx(LanePage, { lane: contractors }) };
};
const lazyTerms = async () => {
  const [{ default: LegalPage }, { terms }] = await Promise.all([
    import("./assets/LegalPage-BdTpdrLy.js"),
    import("./assets/legal-C-W1MdG8.js")
  ]);
  return { Component: () => /* @__PURE__ */ jsx(LegalPage, { doc: terms }) };
};
const lazyPrivacy = async () => {
  const [{ default: LegalPage }, { privacy }] = await Promise.all([
    import("./assets/LegalPage-BdTpdrLy.js"),
    import("./assets/legal-C-W1MdG8.js")
  ]);
  return { Component: () => /* @__PURE__ */ jsx(LegalPage, { doc: privacy }) };
};
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(Layout, {}),
    errorElement: /* @__PURE__ */ jsx(GlobalErrorBoundary, {}),
    entry: "src/App.tsx",
    children: [
      { index: true, element: /* @__PURE__ */ jsx(Home, {}) },
      { path: "manufacturing/", lazy: lazyManufacturing },
      { path: "professional-services/", lazy: lazyProfessionalServices },
      { path: "law-firms/", lazy: lazyLawFirms },
      { path: "accounting-firms/", lazy: lazyAccountingFirms },
      { path: "medical-practices/", lazy: lazyMedicalPractices },
      { path: "contractors/", lazy: lazyContractors },
      { path: "pricing/", lazy: lazyPage(() => import("./assets/Pricing-CjbVg2zK.js")) },
      {
        path: ":slug/",
        lazy: lazyPage(() => import("./assets/ProductPage-fM1zdZiV.js")),
        getStaticPaths: async () => (await Promise.resolve().then(() => products)).productList.map((p) => `${p.slug}/`)
      },
      { path: "free-scan/", lazy: lazyPage(() => import("./assets/FreeScan-CddpWHv_.js")) },
      { path: "quiz/", lazy: lazyPage(() => import("./assets/Quiz-CL2l0YbS.js")) },
      { path: "about/", lazy: lazyPage(() => import("./assets/About-B5nCdkkL.js")) },
      { path: "faq/", lazy: lazyPage(() => import("./assets/Faq-E6R81w8h.js")) },
      { path: "trust/", lazy: lazyPage(() => import("./assets/Trust-BWfQYriN.js")) },
      { path: "contact/", lazy: lazyPage(() => import("./assets/Contact-CWZsVmIj.js")) },
      { path: "resources/", lazy: lazyPage(() => import("./assets/Resources-BeUuMdl9.js")) },
      { path: "terms/", lazy: lazyTerms },
      { path: "privacy/", lazy: lazyPrivacy },
      {
        path: "resources/:slug/",
        lazy: lazyPage(() => import("./assets/ArticlePage-iAwZVd2W.js")),
        getStaticPaths: async () => (await import("./assets/articles-BOOF_50T.js")).articles.map((a) => `resources/${a.slug}/`)
      }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  ActionLink as A,
  Band as B,
  CtaBand as C,
  DirectionIcon as D,
  HelmMark as H,
  LeadForm as L,
  Meta as M,
  ScrollCue as S,
  serviceAreaJsonLd as a,
  businessPhone as b,
  canonicalPath as c,
  createRoot,
  serviceAreaText as d,
  contactInterests as e,
  getAttribution as g,
  linkedInUrl as l,
  productList as p,
  siteUrl as s,
  trackConversion as t
};
