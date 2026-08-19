import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import { M as Meta, s as siteUrl, S as ScrollCue, B as Band, C as CtaBand } from "../main.mjs";
import { B as BOOK_CTA } from "./ctaCopy-Zcyc_nKq.js";
import "react";
import "vite-react-ssg";
import "react-router-dom";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
import "@astryxdesign/core/Button";
import "./lanes-BgR10_g3.js";
const subprocessors = [
  {
    service: "Vercel",
    does: "Hosting, private customer-report storage, and application logs",
    sees: "Application traffic, logs, and customer report PDFs stored for portal delivery"
  },
  { service: "Turso", does: "Portal database", sees: "All stored customer records" },
  {
    service: "Stripe",
    does: "Billing",
    sees: "Card data through its own hosted fields; we store only a customer identifier"
  },
  {
    service: "Resend",
    does: "Transactional email",
    sees: "Recipient addresses and bodies of sign-in and alert emails"
  },
  {
    service: "Huntress",
    does: "24/7 SOC-backed device detection and response for Helm Watch",
    sees: "Security telemetry from protected devices"
  },
  {
    service: "MailProtector",
    does: "Mail-flow filtering and email traffic controls for Helm Mail",
    sees: "Email content, metadata, sender and recipient information, and filtering decisions for protected accounts, once live"
  },
  {
    service: "Doppel",
    does: "Social-engineering detection, phishing triage, simulations, and awareness learning for Helm Mail",
    sees: "Mailbox and reported-message content, metadata, user information, and program activity for protected accounts, once live"
  }
];
const gaps = [
  "No SOC 2 or ISO 27001 audit: we are two people, and an audit of that scope is not something we can honestly represent as in place",
  "No multi-factor authentication on portal accounts yet. Today the control is the magic link itself, sent only to the mailbox you gave us",
  "Backups and disaster recovery rely on our hosting and database providers' own resilience, not on a process we have independently documented and tested ourselves"
];
function Trust() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: "Trust & Security: How We Protect Your Data | Helm",
        desc: "How Helm protects data, manages access and subprocessors, and documents current controls and gaps for prospects, customers, and brokers.",
        path: "/trust",
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Helm", item: siteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Trust & Security", item: siteUrl("/trust") }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane brand-hero trust-hero", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "brand-static" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap", children: [
        /* @__PURE__ */ jsx("h1", { className: "reveal d1 hero-title-readable", children: "Trust and security, answered directly." }),
        /* @__PURE__ */ jsx("p", { className: "sub reveal d2", children: "Before you trust Helm with account records, scan findings, or security alerts, you should know who can access them, which vendors are involved, and which controls are not in place yet." })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsx(Band, { children: /* @__PURE__ */ jsxs("article", { className: "article-body trust-article", children: [
      /* @__PURE__ */ jsxs("section", { className: "trust-summary", "aria-labelledby": "trust-summary-title", children: [
        /* @__PURE__ */ jsxs("div", { className: "trust-summary-intro", children: [
          /* @__PURE__ */ jsx("h2", { id: "trust-summary-title", children: "Helm at a glance" }),
          /* @__PURE__ */ jsx("p", { children: "The facts we would want to know before choosing a security provider: who delivers the service, what data is stored, and which limitations still need to be considered." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "trust-summary-grid", children: [
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h3", { children: "What Helm does" }),
            /* @__PURE__ */ jsx("p", { children: "We resell and configure Huntress, MailProtector, and Doppel services; we do not claim to build the underlying detection technology. Helm Watch focuses on managed device detection and response at launch." })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Who delivers it" }),
            /* @__PURE__ */ jsx("p", { children: "Helm is a two-operator team. Platform vendors supply the detection and response capability; Helm reviews and acts on alerts during published weekday business hours." })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h3", { children: "What data is held" }),
            /* @__PURE__ */ jsx("p", { children: "We store account records, scan findings, and security alerts. Stripe handles card details in its hosted fields, and Helm Mail reporting uses aggregate counters rather than message bodies." })
          ] }),
          /* @__PURE__ */ jsxs("section", { children: [
            /* @__PURE__ */ jsx("h3", { children: "Known gaps today" }),
            /* @__PURE__ */ jsx("p", { children: "We do not have a SOC 2 or ISO 27001 audit or portal MFA yet. Backup and recovery rely on provider resilience rather than a process we have independently documented and tested." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "observe", children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { children: "Who we are" }),
          /* @__PURE__ */ jsx("p", { children: "Helm Security is a New Jersey LLC with an EIN and business bank account. Kelly and Dawid Kluszczynski are the entire operating team today. Dawid is VP, Product & Delivery. Kelly Kluszczynski is VP, Growth & Partnerships. Material pricing, scope, legal, and service commitments require both of them to agree." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { children: "How we deliver, and who actually does the monitoring" }),
          /* @__PURE__ */ jsx("p", { children: "Helm configures and manages technology supplied by specialist vendors. We do not claim to have built the underlying detection systems or to staff an overnight security desk ourselves. Huntress provides the monitoring and response platform behind Helm Watch. Helm Mail combines MailProtector filtering with Doppel's email-threat and human-risk capabilities. Helm Watch focuses on managed device detection and response at launch. We do not describe identity monitoring, SIEM, encrypted-message delivery, or secure file transfer as included." }),
          /* @__PURE__ */ jsx("p", { children: "We review and act on alerts Monday through Friday, 9:00 a.m. to 5:00 p.m. Eastern Time, excluding federal holidays. We do not sell a response-time guarantee we cannot hold." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { children: "What you can verify before buying" }),
          /* @__PURE__ */ jsx("p", { children: "We will show you a sample scan report, the relevant statement of work, and a redacted example of the deliverable before you sign. We publish our starting prices and our known control gaps. We do not publish invented testimonials, customer counts, or certifications we have not earned." }),
          /* @__PURE__ */ jsx("p", { children: "Vendor platform names describe who supplies the underlying technology. They are not presented as Helm certifications or as proof that those vendors endorse every Helm service." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { children: "What data we hold about you, and where" }),
          /* @__PURE__ */ jsx("p", { children: "Your portal runs on Next.js (Vercel) with a Turso database, reached over an authenticated connection, all traffic over HTTPS/TLS. Encryption at rest is Turso's and Vercel's; we do not add our own layer on top." }),
          /* @__PURE__ */ jsx("p", { children: "Stripe's hosted fields handle card details, so Helm stores only a Stripe customer identifier. Helm does not copy mailbox content into its portal. MailProtector processes mail-flow data and Doppel processes mailbox and reported-message data to provide Helm Mail. Helm reporting uses security and program activity, not message bodies. We do store scan findings, security alerts, user and organization records, billing status, and the scan or deployment requests you submit because those records are needed to provide and track the service." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { children: "Our subprocessors" }),
          /* @__PURE__ */ jsx("p", { children: "Who else touches your data, and what each one actually sees." }),
          /* @__PURE__ */ jsx("div", { className: "subproc-scroll", children: /* @__PURE__ */ jsxs("table", { className: "subproc-table", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsx("tr", { children: ["Service", "What it does", "What it sees"].map((h) => /* @__PURE__ */ jsx("th", { children: h }, h)) }) }),
            /* @__PURE__ */ jsx("tbody", { children: subprocessors.map((row) => /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { children: row.service }),
              /* @__PURE__ */ jsx("td", { children: row.does }),
              /* @__PURE__ */ jsx("td", { children: row.sees })
            ] }, row.service)) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { children: "Access control on our side" }),
          /* @__PURE__ */ jsx("p", { children: "Portal users sign in through a one-time link sent by email, so there is no portal password to reuse or expose. Sessions are tracked on the server, and every administrator page and action checks the user’s role before proceeding." }),
          /* @__PURE__ */ jsx("p", { children: "Multi-factor authentication is not yet available on portal accounts. Today the control is the magic link itself, sent only to the mailbox you gave us. We plan to add MFA and will update this page when we do." })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { children: "What we do not have yet" }),
          /* @__PURE__ */ jsx("p", { children: "These limitations may affect whether Helm is the right fit for your requirements today." }),
          /* @__PURE__ */ jsx("ul", { className: "check-list", children: gaps.map((g) => /* @__PURE__ */ jsx("li", { children: g }, g)) })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsx("h2", { children: "What our free scan actually does" }),
          /* @__PURE__ */ jsx("p", { children: "The scan checks public SPF, DMARC, MX, DNSSEC, MTA-STS, and TLS-RPT records; DKIM records under a defined set of common selectors; HTTPS reachability and certificate status; and a limited unauthenticated SMTP probe. It never logs into your systems, attempts exploitation, searches breach datasets, or looks for similar domain registrations. It is a useful starting signal, and it is not a penetration test." }),
          /* @__PURE__ */ jsx("p", { children: "One thing worth knowing: a scan report has a shareable link containing a long random token, and anyone holding that link can read the report without signing in. That is deliberate, so you can forward a report to a colleague or your broker, but treat the link like an attachment rather than a logged-in page. Reports inside your portal account require sign-in." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: BOOK_CTA.title,
        sub: BOOK_CTA.sub,
        cta: BOOK_CTA.label,
        source: "trust cta",
        mode: "book"
      }
    )
  ] });
}
export {
  Trust as default
};
