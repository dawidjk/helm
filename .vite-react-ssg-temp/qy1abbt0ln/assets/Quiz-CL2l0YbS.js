import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import { L as LeadForm, M as Meta, S as ScrollCue, B as Band } from "../main.mjs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@astryxdesign/core/Button";
import "vite-react-ssg";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
const QUESTIONS = [
  {
    id: "payment_verification",
    category: "Payment verification",
    text: "When someone requests a payment or a change to payment details by email, what happens?",
    options: [
      { label: "We verify by phone using a known number before sending any money", points: 10 },
      { label: "We usually check, but it depends who is asking", points: 5 },
      { label: "We act on the email as written", points: 0 }
    ]
  },
  {
    id: "wire_approval",
    category: "Wire transfer approvals",
    text: "How many people need to approve a wire transfer or large ACH payment before it goes out?",
    options: [
      { label: "Two or more people, with one independent of the request", points: 10 },
      { label: "One person, but they double-check unusual requests", points: 5 },
      { label: "One person can approve and send without a second check", points: 0 }
    ]
  },
  {
    id: "deepfake_awareness",
    category: "Deepfake awareness",
    text: "Has your team been shown real examples of AI voice-clone or deepfake video scams?",
    options: [
      { label: "Yes, with a live or recorded training session", points: 10 },
      { label: "We have talked about it informally", points: 5 },
      { label: "No, this has never come up", points: 0 }
    ]
  },
  {
    id: "mfa",
    category: "Multi-factor authentication",
    text: "Is multi-factor authentication (MFA) required for company email and financial accounts?",
    options: [
      { label: "Yes, required for everyone, everywhere", points: 10 },
      { label: "Required for some accounts or some employees", points: 5 },
      { label: "Not required, or we are not sure", points: 0 }
    ]
  },
  {
    id: "email_auth",
    category: "Email authentication (DMARC/SPF/DKIM)",
    text: "Do you know whether your company domain has SPF, DKIM, and DMARC set up to stop email spoofing?",
    options: [
      { label: "Yes, all three are configured and enforced", points: 10 },
      { label: "Some are set up, or we are not fully sure", points: 5 },
      { label: "No, or we do not know what these are", points: 0 }
    ]
  },
  {
    id: "ai_tool_policy",
    category: "AI tool policy",
    text: "Do you have a written policy on which AI tools (ChatGPT, Copilot, notetakers, etc.) employees can use and what data they can enter?",
    options: [
      { label: "Yes, a written policy exists and employees know it", points: 10 },
      { label: "We have informal guidance but nothing written", points: 5 },
      { label: "No policy, employees use whatever they want", points: 0 }
    ]
  },
  {
    id: "training_cadence",
    category: "Training cadence",
    text: "How often does your team get security or scam-awareness training?",
    options: [
      { label: "Ongoing, at least quarterly", points: 10 },
      { label: "Once, when someone was hired, or rarely", points: 5 },
      { label: "Never", points: 0 }
    ]
  },
  {
    id: "vendor_bank_change",
    category: "Vendor bank-change handling",
    text: "If a vendor emails to say their bank account changed, what is your process?",
    options: [
      { label: "We call the vendor directly, using a number we already have on file, to confirm", points: 10 },
      { label: "We might email back to confirm, but that is it", points: 5 },
      { label: "We update our records and pay as instructed", points: 0 }
    ]
  },
  {
    id: "insurance_questionnaire",
    category: "Cyber insurance questionnaire status",
    text: "Where do you stand on your cyber insurance security questionnaire (if you have a policy)?",
    options: [
      { label: "We have completed it and meet the requirements it lists", points: 10 },
      { label: "We have a policy but have not reviewed the questionnaire closely", points: 5 },
      { label: "We do not have cyber coverage or have not looked at this", points: 0 }
    ]
  },
  {
    id: "incident_plan",
    category: "Incident response plan",
    text: "If you discovered a fraudulent transfer or compromised email account today, would your team know whom to call and what not to touch?",
    options: [
      { label: "Yes, we have a written incident plan and know the first steps", points: 10 },
      { label: "Somewhat, we would figure it out", points: 5 },
      { label: "No, we have no plan", points: 0 }
    ]
  }
];
function getTier(score) {
  if (score <= 40) {
    return {
      key: "risk",
      label: "At Risk",
      headline: "Several basic fraud controls are missing",
      copy: "A convincing payment request could reach one employee with no required callback, second approval, or written first step. Start with those process gaps before adding more tools."
    };
  }
  if (score <= 70) {
    return {
      key: "exposed",
      label: "Exposed",
      headline: "Some controls are in place, but important exceptions remain",
      copy: "A payment, account, or employee that falls outside the current process may still rely on someone noticing a convincing fake. Review the partial answers first and make the rule consistent."
    };
  }
  return {
    key: "prepared",
    label: "Prepared",
    headline: "The main controls are in place",
    copy: "Keep them current as payment processes, employees, vendors, and AI tools change. Make sure insurance and customer-security answers continue to match the controls the business is using."
  };
}
function Recommendation({ tier }) {
  if (tier === "risk") {
    return /* @__PURE__ */ jsxs("p", { className: "quiz-recommendation-text", children: [
      "Start with the ",
      /* @__PURE__ */ jsx(Link, { to: "/helm-aware/", children: "Helm Aware workshop" }),
      ": deepfake awareness, a payment-verification protocol your team can use immediately, and a written AI acceptable-use policy, all in one engagement."
    ] });
  }
  if (tier === "exposed") {
    return /* @__PURE__ */ jsxs("p", { className: "quiz-recommendation-text", children: [
      "If you use a compatible Microsoft 365 or Google Workspace environment, ",
      /* @__PURE__ */ jsx(Link, { to: "/helm-mail/", children: "Helm Mail" }),
      " adds managed phishing and impersonation protection, suspicious-message triage, simulations, and awareness learning. Pair it with",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/helm-aware/", children: "Helm Aware" }),
      " for a focused workshop on modern scams, safe AI use, and payment verification."
    ] });
  }
  return /* @__PURE__ */ jsxs("p", { className: "quiz-recommendation-text", children: [
    /* @__PURE__ */ jsx(Link, { to: "/helm-ready/", children: "Helm Ready" }),
    " documents your existing controls, gaps, and prioritized action plan for insurers, auditors, or CMMC purposes. Any remediation is quoted separately after the assessment."
  ] });
}
function flagFor(points) {
  if (points >= 10) return { text: "Strong", cls: "quiz-flag-good" };
  if (points >= 5) return { text: "Partial", cls: "quiz-flag-warn" };
  return { text: "Gap", cls: "quiz-flag-bad" };
}
function QuizWidget() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(() => Array(QUESTIONS.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const question = QUESTIONS[currentIndex];
  const isLast = currentIndex === QUESTIONS.length - 1;
  const selectedIndex = answers[currentIndex];
  const selectOption = (optIndex) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[currentIndex] = optIndex;
      return next;
    });
  };
  const goBack = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };
  const goNext = () => {
    if (selectedIndex === null) return;
    if (isLast) {
      setSubmitted(true);
      return;
    }
    setCurrentIndex((i) => i + 1);
  };
  if (submitted) {
    const score = answers.reduce((sum, optIndex, i) => {
      if (optIndex === null) return sum;
      return sum + QUESTIONS[i].options[optIndex].points;
    }, 0);
    const tier = getTier(score);
    return /* @__PURE__ */ jsx("div", { className: "quiz-root", children: /* @__PURE__ */ jsxs("div", { className: "quiz-card quiz-results", children: [
      /* @__PURE__ */ jsxs("div", { className: "quiz-results-head", children: [
        /* @__PURE__ */ jsx("div", { className: `quiz-tier-badge quiz-tier-${tier.key}`, children: tier.label }),
        /* @__PURE__ */ jsxs("div", { className: `quiz-score-circle quiz-score-circle-${tier.key}`, children: [
          /* @__PURE__ */ jsx("div", { className: "quiz-score-num", children: score }),
          /* @__PURE__ */ jsx("div", { className: "quiz-score-max", children: "out of 100" })
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "quiz-tier-headline", children: tier.headline }),
        /* @__PURE__ */ jsx("p", { className: "quiz-tier-copy", children: tier.copy })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "quiz-recommendation", children: [
        /* @__PURE__ */ jsx("h3", { className: "quiz-recommendation-title", children: "Recommended next step" }),
        /* @__PURE__ */ jsx(Recommendation, { tier: tier.key })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "quiz-breakdown", children: [
        /* @__PURE__ */ jsx("h3", { className: "quiz-breakdown-title", children: "What to review" }),
        /* @__PURE__ */ jsx("div", { className: "quiz-breakdown-list", children: QUESTIONS.map((q, i) => {
          const optIndex = answers[i];
          const points = optIndex === null ? 0 : q.options[optIndex].points;
          const flag = flagFor(points);
          return /* @__PURE__ */ jsxs("div", { className: "quiz-breakdown-item", children: [
            /* @__PURE__ */ jsx("span", { className: "quiz-breakdown-category", children: q.category }),
            /* @__PURE__ */ jsx("span", { className: `quiz-flag ${flag.cls}`, children: flag.text })
          ] }, q.id);
        }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "quiz-cta", children: [
        /* @__PURE__ */ jsx("p", { className: "quiz-cta-intro", children: "Check the public email controls behind your score with the free domain scan." }),
        /* @__PURE__ */ jsx(LeadForm, { source: "quiz", cta: "Run my free scan", compact: true }),
        /* @__PURE__ */ jsxs("p", { className: "quiz-cta-alt", children: [
          "Prefer to talk it through? ",
          /* @__PURE__ */ jsx(Link, { to: "/contact/", children: "Contact us." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "quiz-fine-print", children: "This tool provides a general readiness estimate and is not a substitute for a full security assessment." })
    ] }) });
  }
  const progressPct = currentIndex / QUESTIONS.length * 100;
  return /* @__PURE__ */ jsx("div", { className: "quiz-root", children: /* @__PURE__ */ jsxs("div", { className: "quiz-card", children: [
    /* @__PURE__ */ jsxs("div", { className: "quiz-progress-label", children: [
      "Question ",
      currentIndex + 1,
      " of ",
      QUESTIONS.length
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "quiz-progress-track",
        role: "progressbar",
        "aria-valuenow": Math.round(progressPct),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": "Quiz progress",
        children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "quiz-progress-fill",
            style: { transform: `scaleX(${progressPct / 100})` }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "quiz-question", children: [
      /* @__PURE__ */ jsx("div", { className: "quiz-question-category", children: question.category }),
      /* @__PURE__ */ jsx("h2", { className: "quiz-question-text", children: question.text }),
      /* @__PURE__ */ jsx("div", { className: "quiz-options", children: question.options.map((opt, optIndex) => /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          className: `quiz-option-btn${selectedIndex === optIndex ? " quiz-selected" : ""}`,
          onClick: () => selectOption(optIndex),
          "aria-pressed": selectedIndex === optIndex,
          children: opt.label
        },
        opt.label
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "quiz-nav-row", children: [
      /* @__PURE__ */ jsx(Button, { label: "Back", variant: "secondary", onClick: goBack, isDisabled: currentIndex === 0 }),
      /* @__PURE__ */ jsx(
        Button,
        {
          label: isLast ? "See My Score" : "Next",
          variant: "primary",
          onClick: goNext,
          isDisabled: selectedIndex === null
        }
      )
    ] })
  ] }) });
}
function Quiz() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "AI Scam Readiness Quiz: Score Your Business | Helm",
        desc: "10 questions, about 3 minutes. Score how exposed your business is to AI-powered scams and get a plain-English action plan.",
        path: "/quiz"
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane brand-hero", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "brand-static" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("h1", { className: "reveal d1 hero-title-compact", children: "How exposed is your business to AI-powered scams?" }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "Answer 10 quick questions about payment verification, training, and email security. You get a score out of 100 and a plain-English list of what to fix first, no email address required to see your result." })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsx(Band, { variant: "raised", children: /* @__PURE__ */ jsx(QuizWidget, {}) })
  ] });
}
export {
  Quiz as default
};
