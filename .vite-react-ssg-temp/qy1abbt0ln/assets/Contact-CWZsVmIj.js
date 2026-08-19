import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import { useRef, useState, useEffect } from "react";
import { Button } from "@astryxdesign/core/Button";
import { t as trackConversion, M as Meta, S as ScrollCue, B as Band, b as businessPhone, d as serviceAreaText, e as contactInterests, g as getAttribution } from "../main.mjs";
import "vite-react-ssg";
import "react-router-dom";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
const SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let scriptPromise = null;
function loadTurnstile() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.addEventListener(
      "load",
      () => window.turnstile ? resolve(window.turnstile) : reject(new Error("Turnstile did not initialize")),
      { once: true }
    );
    script.addEventListener(
      "error",
      () => {
        script.remove();
        reject(new Error("Turnstile script failed to load"));
      },
      { once: true }
    );
    script.src = SCRIPT_URL;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  });
  scriptPromise.catch(() => {
    scriptPromise = null;
  });
  return scriptPromise;
}
function Turnstile({
  action,
  onToken,
  resetKey = 0
}) {
  const containerRef = useRef(null);
  const callbackRef = useRef(onToken);
  const [unavailable, setUnavailable] = useState(false);
  callbackRef.current = onToken;
  const siteKey = "0x4AAAAAAEDOJAr59bKlzhEx";
  useEffect(() => {
    if (!containerRef.current) {
      setUnavailable(true);
      callbackRef.current("");
      return;
    }
    let active = true;
    let widgetId = null;
    setUnavailable(false);
    callbackRef.current("");
    void loadTurnstile().then((api) => {
      if (!active || !containerRef.current) return;
      widgetId = api.render(containerRef.current, {
        sitekey: siteKey,
        action,
        theme: "auto",
        callback: (token) => callbackRef.current(token),
        "expired-callback": () => callbackRef.current(""),
        "error-callback": () => callbackRef.current("")
      });
    }).catch(() => {
      if (active) {
        setUnavailable(true);
        callbackRef.current("");
      }
    });
    return () => {
      active = false;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [action, resetKey, siteKey]);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { ref: containerRef }),
    unavailable && /* @__PURE__ */ jsx("p", { className: "lead-form-error", role: "alert", children: "The security check is unavailable. Please refresh and try again." })
  ] });
}
const CONTACT_ENDPOINT = "https://app.helmsecured.com/api/contact";
function Contact() {
  const [state, setState] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [intent, setIntent] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const [turnstileTimedOut, setTurnstileTimedOut] = useState(false);
  const sent = state === "sent";
  useEffect(() => {
    if (turnstileToken) {
      setTurnstileTimedOut(false);
      return;
    }
    const timer = window.setTimeout(() => setTurnstileTimedOut(true), 15e3);
    return () => window.clearTimeout(timer);
  }, [turnstileToken, turnstileResetKey]);
  useEffect(() => {
    const requestedIntent = new URLSearchParams(window.location.search).get("intent");
    setIntent(requestedIntent);
    if (requestedIntent === "findings-call") {
      trackConversion("findings_call_selected");
    }
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (state === "busy") return;
    setErrorMessage("");
    setState("busy");
    try {
      const body = new FormData(e.currentTarget);
      const attribution = getAttribution(intent ? void 0 : "contact page");
      const payload = {
        name: body.get("name"),
        company: body.get("company"),
        email: body.get("email"),
        phone: body.get("phone"),
        interest: body.get("interest"),
        message: body.get("message"),
        turnstileToken,
        journeyId: attribution.journeyId,
        source: attribution.source,
        utmSource: attribution.utmSource,
        utmMedium: attribution.utmMedium,
        utmCampaign: attribution.utmCampaign,
        utmContent: attribution.utmContent,
        utmTerm: attribution.utmTerm
      };
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) {
        const response = await res.json().catch(() => null);
        throw new Error(
          typeof response?.error === "string" ? response.error : "Something went wrong. Please try again."
        );
      }
      trackConversion("contact_submitted", intent ? void 0 : "contact page");
      setState("sent");
    } catch (error) {
      setTurnstileToken("");
      setTurnstileResetKey((value) => value + 1);
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
      setState("error");
    }
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Contact Helm: Talk to an Executive",
        desc: "Contact Helm about email security, AI scam defense, or compliance readiness in Monmouth, Ocean, and Middlesex counties, New Jersey.",
        path: "/contact"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane brand-hero", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "brand-static" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("h1", { className: "reveal hero-h1-sm", children: "Talk to a human." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d1", children: "Tell us a little about your business. A Helm executive will respond during business hours with a straight answer." })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsxs(Band, { children: [
      /* @__PURE__ */ jsxs("div", { className: "contact-public-details observe in", "aria-label": "Helm contact details", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { children: "Call" }),
          /* @__PURE__ */ jsx("a", { href: `tel:${businessPhone.e164}`, children: businessPhone.display })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { children: "Email" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:hello@helmsecured.com", children: "hello@helmsecured.com" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("span", { children: "Service area" }),
          /* @__PURE__ */ jsx("strong", { children: serviceAreaText })
        ] })
      ] }),
      sent ? /* @__PURE__ */ jsxs("div", { className: "contact-done reveal", role: "status", children: [
        /* @__PURE__ */ jsx("h3", { children: "✓ Message received." }),
        /* @__PURE__ */ jsx("p", { children: "A Helm executive will reply during business hours from hello@helmsecured.com." })
      ] }) : /* @__PURE__ */ jsxs("form", { className: "contact-form observe in", onSubmit, children: [
        /* @__PURE__ */ jsxs("div", { className: "cf-row", children: [
          /* @__PURE__ */ jsxs("label", { children: [
            "Name",
            /* @__PURE__ */ jsx("input", { type: "text", name: "name", required: true, maxLength: 100, autoComplete: "name", placeholder: "Jane Rivera" })
          ] }),
          /* @__PURE__ */ jsxs("label", { children: [
            "Company",
            /* @__PURE__ */ jsx("input", { type: "text", name: "company", required: true, maxLength: 150, autoComplete: "organization", placeholder: "Rivera Machining Co." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "cf-row", children: [
          /* @__PURE__ */ jsxs("label", { children: [
            "Work email",
            /* @__PURE__ */ jsx("input", { type: "email", name: "email", required: true, maxLength: 254, autoComplete: "email", placeholder: "jane@company.com" })
          ] }),
          /* @__PURE__ */ jsxs("label", { children: [
            "Phone ",
            /* @__PURE__ */ jsx("span", { className: "cf-opt", children: "(optional)" }),
            /* @__PURE__ */ jsx("input", { type: "tel", name: "phone", maxLength: 50, autoComplete: "tel", placeholder: "(555) 555-5555" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("label", { children: [
          "What do you need help with?",
          /* @__PURE__ */ jsxs("select", { name: "interest", required: true, defaultValue: "", children: [
            /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Choose one…" }),
            contactInterests.map((o) => /* @__PURE__ */ jsx("option", { value: o, children: o }, o))
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
              maxLength: 2e3,
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
              type: "submit",
              isDisabled: state === "busy" || !turnstileToken
            }
          ),
          /* @__PURE__ */ jsx(
            Turnstile,
            {
              action: "marketing_contact",
              onToken: setTurnstileToken,
              resetKey: turnstileResetKey
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "cf-note", role: "status", "aria-live": "polite", children: turnstileToken || turnstileTimedOut ? "A Helm executive reviews every message." : "Verifying you’re human… Send unlocks in a moment." })
        ] }),
        !turnstileToken && turnstileTimedOut && /* @__PURE__ */ jsxs("div", { className: "lead-form-error", role: "alert", children: [
          "Verification is taking longer than usual. If no check appeared above, a privacy extension or slow connection may be blocking it. You can email us directly instead:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:hello@helmsecured.com", children: "hello@helmsecured.com" })
        ] }),
        state === "error" && /* @__PURE__ */ jsxs("div", { className: "lead-form-error", role: "alert", children: [
          errorMessage,
          " Email us directly:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:hello@helmsecured.com", children: "hello@helmsecured.com" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Contact as default
};
