import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { H as HeroBackdrop } from "./HeroBackdrop-Df6dV91h.js";
import { useParams, Link } from "react-router-dom";
import { M as Meta, s as siteUrl, S as ScrollCue, B as Band, c as canonicalPath, C as CtaBand } from "../main.mjs";
import { articles } from "./articles-BOOF_50T.js";
import { r as renderParagraph } from "./richText-BOP0CcG9.js";
import { b as bookCta } from "./ctaCopy-Zcyc_nKq.js";
import "react";
import "vite-react-ssg";
import "@astryxdesign/core/theme";
import "@astryxdesign/core/Link";
import "@astryxdesign/core/Button";
import "./lanes-BgR10_g3.js";
const sources = {
  cisaMfa: {
    title: "CISA: Require Multifactor Authentication",
    href: "https://www.cisa.gov/audiences/small-and-medium-businesses/secure-your-business/require-multifactor-authentication"
  },
  microsoftDefaults: {
    title: "Microsoft: Security defaults in Microsoft Entra ID",
    href: "https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults"
  },
  microsoftBaseline: {
    title: "Microsoft: Baseline security mode settings",
    href: "https://learn.microsoft.com/en-us/microsoft-365/baseline-security-mode/baseline-security-mode-settings?view=o365-worldwide"
  },
  dodCmmc: {
    title: "U.S. Department of Defense: About CMMC",
    href: "https://dodcio.defense.gov/CMMC/About/-DoD/"
  },
  nist171r2: {
    title: "NIST: Protecting Controlled Unclassified Information, SP 800-171 Rev. 2",
    href: "https://csrc.nist.gov/pubs/sp/800/171/r2/upd1/final"
  },
  dodAssessmentMethodology: {
    title: "U.S. Department of Defense: NIST SP 800-171 DoD Assessment Methodology",
    href: "https://www.acq.osd.mil/asda/dpc/cp/cyber/docs/safeguarding/NIST-SP-800-171-Assessment-Methodology-Version-1.2.1-6.24.2020.pdf"
  },
  dfars7020: {
    title: "Acquisition.gov: DFARS 252.204-7020 assessment requirements",
    href: "https://www.acquisition.gov/dfars/252.204-7020-nist-sp-800-171dod-assessment-requirements."
  },
  dojMorse: {
    title: "U.S. Department of Justice: MORSECORP cybersecurity settlement",
    href: "https://www.justice.gov/opa/pr/defense-contractor-morsecorp-inc-agrees-pay-46-million-settle-cybersecurity-fraud"
  },
  nist115: {
    title: "NIST: Technical Guide to Information Security Testing and Assessment",
    href: "https://csrc.nist.gov/pubs/sp/800/115/final"
  },
  nistSsp: {
    title: "NIST: Developing Security Plans for Information Systems",
    href: "https://csrc.nist.gov/pubs/sp/800/18/r2/final"
  },
  nistAi: {
    title: "NIST: AI Risk Management Framework",
    href: "https://www.nist.gov/itl/ai-risk-management-framework"
  },
  nistCsf: {
    title: "NIST: Cybersecurity Framework",
    href: "https://www.nist.gov/cyberframework"
  },
  cuiRegistry: {
    title: "National Archives: CUI Registry category list",
    href: "https://www.archives.gov/cui/registry/category-list"
  },
  cisaPasswords: {
    title: "CISA: Use a password manager",
    href: "https://www.cisa.gov/resources-tools/training/cyb3rsmrt-use-password-manager-create-and-remember-strong-passwords"
  },
  cisaPhishing: {
    title: "CISA: Recognize and report phishing",
    href: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing"
  },
  cisaTravel: {
    title: "CISA: Traveling with internet-enabled devices",
    href: "https://www.cisa.gov/news-events/news/holiday-traveling-personal-internet-enabled-devices"
  },
  cisaRansomware: {
    title: "CISA: StopRansomware Guide",
    href: "https://www.cisa.gov/stopransomware/ransomware-guide"
  },
  fbiBec: {
    title: "FBI: Business Email Compromise",
    href: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams/business-email-compromise"
  },
  fbiIc3: {
    title: "FBI: 2025 Internet Crime Report",
    href: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf"
  },
  ftcInsurance: {
    title: "FTC: Cyber insurance for small business",
    href: "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/cyber-insurance"
  },
  nyDfsInsurance: {
    title: "New York DFS: Cyber Insurance Risk Framework",
    href: "https://www.dfs.ny.gov/industry_guidance/circular_letters/cl2021_02"
  },
  hhsEmail: {
    title: "HHS: Sending electronic protected health information by email",
    href: "https://www.hhs.gov/hipaa/for-professionals/faq/2006/does-the-security-rule-allow-for-sending-electronic-phi-in-an-email/index.html"
  },
  hhsRisk: {
    title: "HHS: HIPAA Security Rule risk analysis guidance",
    href: "https://www.hhs.gov/hipaa/for-professionals/security/guidance/guidance-risk-analysis/index.html"
  },
  abaTechReport: {
    title: "ABA: 2023 Cybersecurity TechReport",
    href: "https://www.americanbar.org/groups/law_practice/resources/tech-report/2023/2023-cybersecurity-techreport/"
  },
  abaCyberDuties: {
    title: "ABA: Cybersecurity legal and ethical duties for attorneys",
    href: "https://www.americanbar.org/groups/law_practice/resources/law-practice-today/2019/cybersecurity-attorneys-legal-ethical/"
  },
  abaSecureCommunications: {
    title: "ABA: Formal Opinion 477R on securing protected client information",
    href: "https://www.americanbar.org/products/ecd/chapter/348777154/"
  },
  njReasonableCare: {
    title: "New Jersey Courts: Opinion 701 on reasonable care for client information",
    href: "https://www.njcourts.gov/sites/default/files/notices/2006/03/ACPE_Opinion701_ElectronicStorage_12022005.pdf"
  },
  irsWisp: {
    title: "IRS: Tax professionals are required to maintain a WISP",
    href: "https://www.irs.gov/newsroom/tax-professional-tips-for-creating-a-data-security-plan"
  },
  irsTaxBreaches2025: {
    title: "IRS: First-half 2025 tax-professional breach reports",
    href: "https://www.irs.gov/newsroom/security-summit-irs-reminds-tax-pros-to-guard-against-identity-theft-as-summer-series-wraps-up"
  },
  ftcSafeguards: {
    title: "FTC: Safeguards Rule guidance for covered businesses",
    href: "https://www.ftc.gov/business-guidance/resources/ftc-safeguards-rule-what-your-business-needs-know"
  },
  hhsNprm: {
    title: "HHS: HIPAA Security Rule proposed update and breach trends",
    href: "https://www.hhs.gov/hipaa/for-professionals/security/hipaa-security-rule-nprm/index.html"
  },
  hhsSraGuide: {
    title: "HHS: Security Risk Assessment Tool user guide for smaller practices",
    href: "https://www.hhs.gov/guidance/sites/default/files/hhs-guidance-documents//attachmenta-security_risk_assessment_tool_user_guide_v6.pdf"
  },
  healthItProviderResources: {
    title: "HealthIT.gov: Privacy and security resources for providers",
    href: "https://healthit.gov/privacy-security/health-it-privacy-and-security-resources-providers/"
  },
  dmarc: {
    title: "IETF: DMARC standard, RFC 9989",
    href: "https://datatracker.ietf.org/doc/html/rfc9989"
  }
};
const articleSupport = {
  "mfa-methods-compared": {
    relatedSlugs: ["m365-security-baseline", "password-managers-small-teams", "employee-offboarding-checklist"],
    sources: [sources.cisaMfa, sources.microsoftDefaults]
  },
  "m365-security-baseline": {
    relatedSlugs: ["mfa-methods-compared", "employee-offboarding-checklist", "what-is-dmarc"],
    sources: [sources.microsoftDefaults, sources.microsoftBaseline]
  },
  "sprs-score-explained": {
    relatedSlugs: ["cmmc-level-1-vs-level-2", "cmmc-deadline-checklist", "ssp-poam-explained"],
    sources: [sources.dodAssessmentMethodology, sources.dfars7020, sources.dojMorse]
  },
  "password-managers-small-teams": {
    relatedSlugs: ["mfa-methods-compared", "employee-offboarding-checklist", "m365-security-baseline"],
    sources: [sources.cisaPasswords, sources.cisaMfa]
  },
  "cmmc-level-1-vs-level-2": {
    relatedSlugs: ["cmmc-deadline-checklist", "sprs-score-explained", "cui-handling-shop-floor"],
    sources: [sources.dodCmmc, sources.nist171r2, sources.dfars7020]
  },
  "invoice-fraud-red-flags": {
    relatedSlugs: ["vendor-email-compromise-contractors", "wire-fraud-prevention-law-firms", "what-is-dmarc"],
    sources: [sources.fbiBec, sources.cisaPhishing]
  },
  "what-a-soc-actually-does": {
    relatedSlugs: ["incident-response-plan-small-business", "backup-testing-insurers", "pen-test-vs-vulnerability-scan"],
    sources: [sources.nistCsf, sources.cisaRansomware]
  },
  "cyber-insurance-claim-denied": {
    relatedSlugs: ["cyber-insurance-application-walkthrough", "cyber-insurance-questionnaire", "backup-testing-insurers"],
    sources: [sources.ftcInsurance, sources.nyDfsInsurance]
  },
  "vendor-email-compromise-contractors": {
    relatedSlugs: ["invoice-fraud-red-flags", "job-site-devices-public-wifi", "what-is-dmarc"],
    sources: [sources.fbiBec, sources.cisaPhishing]
  },
  "shadow-ai-at-work": {
    relatedSlugs: ["ai-phishing-red-flags", "deepfake-ceo-fraud", "incident-response-plan-small-business"],
    sources: [sources.nistAi, sources.nistCsf]
  },
  "cyber-insurance-application-walkthrough": {
    relatedSlugs: ["cyber-insurance-questionnaire", "cyber-insurance-claim-denied", "backup-testing-insurers"],
    sources: [sources.ftcInsurance, sources.nyDfsInsurance]
  },
  "hipaa-email-rules-small-practices": {
    relatedSlugs: ["m365-security-baseline", "mfa-methods-compared", "incident-response-plan-small-business"],
    sources: [sources.hhsEmail, sources.hhsRisk]
  },
  "ai-phishing-red-flags": {
    relatedSlugs: ["deepfake-ceo-fraud", "shadow-ai-at-work", "invoice-fraud-red-flags"],
    sources: [sources.cisaPhishing, sources.fbiIc3]
  },
  "cmmc-deadline-checklist": {
    relatedSlugs: ["cmmc-level-1-vs-level-2", "sprs-score-explained", "ssp-poam-explained"],
    sources: [sources.dodCmmc, sources.dfars7020, sources.dojMorse]
  },
  "job-site-devices-public-wifi": {
    relatedSlugs: ["vendor-email-compromise-contractors", "invoice-fraud-red-flags", "mfa-methods-compared"],
    sources: [sources.cisaTravel, sources.cisaMfa]
  },
  "employee-offboarding-checklist": {
    relatedSlugs: ["password-managers-small-teams", "m365-security-baseline", "incident-response-plan-small-business"],
    sources: [sources.nist171r2, sources.cisaPasswords]
  },
  "backup-testing-insurers": {
    relatedSlugs: ["cyber-insurance-questionnaire", "incident-response-plan-small-business", "cyber-insurance-claim-denied"],
    sources: [sources.cisaRansomware, sources.ftcInsurance]
  },
  "cyber-insurance-questionnaire": {
    relatedSlugs: ["cyber-insurance-application-walkthrough", "cyber-insurance-claim-denied", "backup-testing-insurers"],
    sources: [sources.ftcInsurance, sources.nyDfsInsurance]
  },
  "ssp-poam-explained": {
    relatedSlugs: ["sprs-score-explained", "cmmc-level-1-vs-level-2", "cmmc-deadline-checklist"],
    sources: [sources.dodCmmc, sources.nist171r2, sources.nistSsp]
  },
  "wire-fraud-prevention-law-firms": {
    relatedSlugs: ["invoice-fraud-red-flags", "ai-phishing-red-flags", "what-is-dmarc"],
    sources: [sources.fbiBec, sources.abaSecureCommunications, sources.njReasonableCare]
  },
  "cui-handling-shop-floor": {
    relatedSlugs: ["cmmc-level-1-vs-level-2", "ssp-poam-explained", "sprs-score-explained"],
    sources: [sources.cuiRegistry, sources.nist171r2]
  },
  "pen-test-vs-vulnerability-scan": {
    relatedSlugs: ["what-a-soc-actually-does", "incident-response-plan-small-business", "cyber-insurance-questionnaire"],
    sources: [sources.nist115, sources.nistCsf]
  },
  "what-is-dmarc": {
    relatedSlugs: ["invoice-fraud-red-flags", "vendor-email-compromise-contractors", "wire-fraud-prevention-law-firms"],
    sources: [sources.dmarc, sources.fbiBec]
  },
  "incident-response-plan-small-business": {
    relatedSlugs: ["backup-testing-insurers", "what-a-soc-actually-does", "employee-offboarding-checklist"],
    sources: [sources.cisaRansomware, sources.nistCsf]
  },
  "deepfake-ceo-fraud": {
    relatedSlugs: ["ai-phishing-red-flags", "shadow-ai-at-work", "wire-fraud-prevention-law-firms"],
    sources: [sources.fbiIc3, sources.nistAi]
  },
  "law-firm-device-security-checklist": {
    relatedSlugs: ["wire-fraud-prevention-law-firms", "what-a-soc-actually-does", "employee-offboarding-checklist"],
    sources: [sources.abaTechReport, sources.abaCyberDuties, sources.abaSecureCommunications, sources.njReasonableCare, sources.cisaRansomware]
  },
  "wisp-checklist-accounting-firms": {
    relatedSlugs: ["employee-offboarding-checklist", "backup-testing-insurers", "m365-security-baseline"],
    sources: [sources.irsWisp, sources.irsTaxBreaches2025, sources.ftcSafeguards]
  },
  "hipaa-risk-analysis-medical-practices": {
    relatedSlugs: ["hipaa-email-rules-small-practices", "what-a-soc-actually-does", "incident-response-plan-small-business"],
    sources: [sources.hhsRisk, sources.hhsSraGuide, sources.healthItProviderResources, sources.hhsNprm]
  }
};
const visualGroups = {
  identity: {
    src: "/images/resources/identity.svg",
    alt: "Identity and access diagram showing a password, a strong authentication factor, and limited access as three security layers.",
    caption: "Strong identity controls combine a safer sign-in with access limited to what each person needs."
  },
  email: {
    src: "/images/resources/email-fraud.svg",
    alt: "Email and payment fraud diagram showing three steps: inspect the sender, verify outside email, then approve.",
    caption: "A verification step outside the email thread breaks the path from a convincing message to a bad payment."
  },
  compliance: {
    src: "/images/resources/compliance.svg",
    alt: "Compliance readiness diagram showing a requirement connected to a control, evidence, and a prioritized action.",
    caption: "Readiness work turns requirements into controls, evidence, and owned next actions."
  },
  resilience: {
    src: "/images/resources/resilience.svg",
    alt: "Incident readiness diagram showing the sequence detect, contain, and recover.",
    caption: "A useful security program prepares for detection, containment, and recovery before an incident begins."
  },
  ai: {
    src: "/images/resources/ai-fraud.svg",
    alt: "AI-enabled fraud diagram showing three steps: pause, verify identity through another channel, then approve.",
    caption: "Urgency is a reason to pause and verify identity through a known, separate channel."
  },
  field: {
    src: "/images/resources/field-security.svg",
    alt: "Field security diagram showing a work device using a protected connection to reach the office.",
    caption: "Field security protects the device, the connection, and the route back to company systems."
  }
};
const groupBySlug = {
  "mfa-methods-compared": "identity",
  "m365-security-baseline": "identity",
  "password-managers-small-teams": "identity",
  "employee-offboarding-checklist": "identity",
  "law-firm-device-security-checklist": "field",
  "invoice-fraud-red-flags": "email",
  "vendor-email-compromise-contractors": "email",
  "wire-fraud-prevention-law-firms": "email",
  "what-is-dmarc": "email",
  "ai-phishing-red-flags": "ai",
  "deepfake-ceo-fraud": "ai",
  "shadow-ai-at-work": "ai",
  "sprs-score-explained": "compliance",
  "cmmc-level-1-vs-level-2": "compliance",
  "cmmc-deadline-checklist": "compliance",
  "hipaa-email-rules-small-practices": "compliance",
  "hipaa-risk-analysis-medical-practices": "compliance",
  "wisp-checklist-accounting-firms": "compliance",
  "ssp-poam-explained": "compliance",
  "cui-handling-shop-floor": "compliance",
  "what-a-soc-actually-does": "resilience",
  "cyber-insurance-claim-denied": "resilience",
  "cyber-insurance-application-walkthrough": "resilience",
  "backup-testing-insurers": "resilience",
  "cyber-insurance-questionnaire": "resilience",
  "pen-test-vs-vulnerability-scan": "resilience",
  "incident-response-plan-small-business": "resilience",
  "job-site-devices-public-wifi": "field"
};
function ArticleVisual({ slug }) {
  const visual = visualGroups[groupBySlug[slug] ?? "resilience"];
  return /* @__PURE__ */ jsxs("figure", { className: "article-visual", children: [
    /* @__PURE__ */ jsx("img", { src: visual.src, alt: visual.alt, width: "1200", height: "630", loading: "lazy" }),
    /* @__PURE__ */ jsx("figcaption", { children: visual.caption })
  ] });
}
function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(/* @__PURE__ */ new Date(`${date}T00:00:00Z`));
}
function sectionId(heading, index) {
  const slug = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${slug || "section"}-${index + 1}`;
}
function ArticlePage() {
  const { slug } = useParams();
  const a = articles.find((x) => x.slug === slug);
  if (!a) throw new Response("Resource not found", { status: 404, statusText: "Not Found" });
  const support = articleSupport[a.slug];
  const relatedArticles = support.relatedSlugs.map((relatedSlug) => articles.find((article) => article.slug === relatedSlug)).filter((article) => article !== void 0);
  const displayedDate = formatDate(a.date);
  const displayedUpdatedDate = a.updated ? formatDate(a.updated) : void 0;
  const wordCount = [
    a.intro,
    a.takeaway,
    ...a.sections.flatMap((section) => section.ps.map((paragraph) => typeof paragraph === "string" ? paragraph : paragraph.text))
  ].join(" ").trim().split(/\s+/).filter(Boolean).length;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      Meta,
      {
        title: `${a.title} | Helm`,
        desc: a.metaDesc,
        path: `/resources/${a.slug}`,
        ogType: "article",
        publishedTime: a.date,
        modifiedTime: a.updated,
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              headline: a.title,
              description: a.metaDesc,
              datePublished: a.date,
              ...a.updated ? { dateModified: a.updated } : {},
              inLanguage: "en-US",
              articleSection: a.sections.map((section) => section.h),
              wordCount,
              timeRequired: `PT${a.readMin}M`,
              citation: support.sources.map((source) => source.href),
              mainEntityOfPage: { "@type": "WebPage", "@id": siteUrl(`/resources/${a.slug}`) },
              image: "https://helmsecured.com/og.png",
              author: {
                "@type": "Person",
                name: "Dawid Kluszczynski",
                url: siteUrl("/about#dawid-kluszczynski")
              },
              publisher: {
                "@type": "Organization",
                name: "Helm Security LLC",
                url: siteUrl("/"),
                logo: { "@type": "ImageObject", url: "https://helmsecured.com/og.png" }
              }
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Resources", item: siteUrl("/resources") },
                { "@type": "ListItem", position: 2, name: a.title, item: siteUrl(`/resources/${a.slug}`) }
              ]
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsxs("header", { className: "hero lane brand-hero", children: [
      /* @__PURE__ */ jsx(HeroBackdrop, { kind: "brand-static" }),
      /* @__PURE__ */ jsxs("div", { className: "wrap article-head", children: [
        /* @__PURE__ */ jsx("h1", { className: "reveal d1", children: a.title }),
        /* @__PURE__ */ jsxs("div", { className: "article-meta reveal d2", children: [
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsx(Link, { to: "/resources/", children: "Resources" }),
            " · ",
            a.lane,
            " · ",
            a.readMin,
            " min"
          ] }),
          /* @__PURE__ */ jsxs("span", { children: [
            "By ",
            /* @__PURE__ */ jsx(Link, { to: "/about/#dawid-kluszczynski", children: "Dawid Kluszczynski" })
          ] }),
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", children: "·" }),
          displayedUpdatedDate ? /* @__PURE__ */ jsxs("span", { children: [
            "Updated ",
            /* @__PURE__ */ jsx("time", { dateTime: a.updated, children: displayedUpdatedDate })
          ] }) : /* @__PURE__ */ jsx("time", { dateTime: a.date, children: displayedDate })
        ] })
      ] }),
      /* @__PURE__ */ jsx(ScrollCue, {})
    ] }),
    /* @__PURE__ */ jsx(Band, { children: /* @__PURE__ */ jsxs("article", { className: "article-body", children: [
      /* @__PURE__ */ jsxs("div", { className: "observe", children: [
        /* @__PURE__ */ jsx("p", { className: "article-intro", children: a.intro }),
        /* @__PURE__ */ jsxs("aside", { className: "article-quick-answer", "aria-labelledby": "article-quick-answer-heading", children: [
          /* @__PURE__ */ jsx("h2", { id: "article-quick-answer-heading", children: "Quick answer" }),
          /* @__PURE__ */ jsx("p", { children: a.takeaway })
        ] }),
        /* @__PURE__ */ jsx(ArticleVisual, { slug: a.slug }),
        /* @__PURE__ */ jsxs("nav", { className: "article-on-page", "aria-labelledby": "article-on-page-heading", children: [
          /* @__PURE__ */ jsx("h2", { id: "article-on-page-heading", children: "On this page" }),
          /* @__PURE__ */ jsx("ol", { children: a.sections.map((section, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${sectionId(section.h, index)}`, children: section.h }) }, section.h)) })
        ] }),
        a.sections.map((s, index) => /* @__PURE__ */ jsxs("section", { "aria-labelledby": sectionId(s.h, index), children: [
          /* @__PURE__ */ jsx("h2", { id: sectionId(s.h, index), children: s.h }),
          s.ps.map((p, i) => /* @__PURE__ */ jsx("p", { children: renderParagraph(p) }, i))
        ] }, s.h))
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "article-trust observe d1", "aria-labelledby": "article-trust-heading", children: [
        /* @__PURE__ */ jsx("h2", { id: "article-trust-heading", children: "How this guide was checked" }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Written by ",
          /* @__PURE__ */ jsx(Link, { to: "/about/#dawid-kluszczynski", children: "Dawid Kluszczynski" }),
          ", first published",
          " ",
          /* @__PURE__ */ jsx("time", { dateTime: a.date, children: displayedDate }),
          displayedUpdatedDate && /* @__PURE__ */ jsxs(Fragment, { children: [
            " and materially reviewed on ",
            /* @__PURE__ */ jsx("time", { dateTime: a.updated, children: displayedUpdatedDate })
          ] }),
          ". We checked the factual guidance against the ",
          support.sources.length,
          " primary or authoritative sources listed below."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "article-sources observe d2", "aria-labelledby": "article-sources-heading", children: [
        /* @__PURE__ */ jsx("h2", { id: "article-sources-heading", children: "Primary sources" }),
        /* @__PURE__ */ jsx("p", { children: "These official references support the guidance in this article." }),
        /* @__PURE__ */ jsx("ul", { children: support.sources.map((source) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: source.href, children: source.title }) }, source.href)) })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "article-related observe d2", "aria-label": "Related pages", children: [
        /* @__PURE__ */ jsx("span", { children: "Read next:" }),
        relatedArticles.map((article) => /* @__PURE__ */ jsx(Link, { to: canonicalPath(`/resources/${article.slug}`), children: article.title }, article.slug)),
        /* @__PURE__ */ jsx(Link, { to: canonicalPath(a.laneTo), children: a.lane === "All industries" ? "How Helm works" : `Helm for ${a.lane}` })
      ] })
    ] }) }),
    a.ctaMode === "book" || a.ctaMode === "book-cmmc" ? /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: bookCta(a.ctaMode).title,
        sub: bookCta(a.ctaMode).sub,
        cta: bookCta(a.ctaMode).label,
        source: `article ${a.slug}`,
        mode: "book"
      }
    ) : /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "See what your public domain configuration shows.",
        sub: "The free scan checks public email and web configuration and returns a plain-English report, usually in about a minute.",
        source: `article ${a.slug}`
      }
    )
  ] });
}
export {
  ArticlePage as default
};
