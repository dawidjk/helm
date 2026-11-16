# Shared page headers

`PageHero` renders the existing semantic `header` and adds a layout class. Pages
continue to own their artwork, text, links, tracking and optional scroll cue.
The component does not add or remove content or conversion actions.

On narrow screens (up to 700px) and short landscape windows (up to 1000px wide
and 480px high), the content and cue share normal document flow. The header can
grow instead of clipping enlarged text or placing the cue over content. Short
landscape headings use a smaller, rem-bounded display size. Explanatory text is
not reduced. The next section reserves clearance for the sticky navigation when
ScrollCue moves to it. Desktop layout rules remain with the existing templates.

## Coverage

The November 16 audit covers all 135 public sitemap routes. The 133 migrated
routes use 17 source templates:

| Source | Routes |
| --- | --- |
| ProductPage | `/helm-core/`, `/helm-command/` |
| LanePage | `/manufacturing/`, `/professional-services/`, `/law-firms/`, `/accounting-firms/`, `/medical-practices/`, `/contractors/` |
| ArticlePage | All 90 published Resources and Blog articles |
| CountyPage | All 21 `/service-areas/{county}/` routes |
| ServiceAreas | `/service-areas/` |
| Resources, Blog | `/resources/`, `/blog/` |
| About, Book, Contact, Faq, FreeScan, Pricing, Quiz, SecureAiAdoption, Trust | `/about/`, `/book/`, `/contact/`, `/faq/`, `/free-scan/`, `/pricing/`, `/quiz/`, `/secure-ai-adoption/`, `/trust/` |
| LegalPage | `/terms/`, `/privacy/` (legal content unchanged) |

The homepage retains its separate sculptural grid and existing mobile repair.
The static password checker has no landing header and remains separate. Industry
scenes and compact reading/contact headers retain their variants; the shared
primitive only owns layout behavior. Internal report headers, error screens and
the development-only booking fixture are not landing-page migrations.

## Regression

After `npm run build`, run `npm run test:hero-layout`. It starts a GET-only
loopback fixture, blocks nonlocal requests and submissions, and writes
`hero-layout-report.json`. The report includes every sitemap route, its variant,
and whether it uses the shared component. Newly added sitemap routes are audited
automatically; representative templates also receive the detailed matrix.

The matrix covers 320px and 390px portrait, 568px/844px/932px short landscape,
doubled computed text sizes, both themes, focus visibility, CTA reachability,
cue placement and activation, and a 1440px desktop comparison when a baseline is
provided. Text-size and viewport emulation are not native device tests.

Optional environment variables:

- `HELM_HERO_BASELINE`: previous production `dist`, for exact desktop geometry.
- `HELM_TEST_REPORT`: report destination outside the checkout.
- `HELM_HERO_SCREENSHOTS`: screenshot directory.
- `HELM_PUPPETEER_MODULE` and `HELM_CHROME`: installed browser tooling overrides.

No real forms, scans or external booking actions are submitted. Native iPhone
Safari/Android behavior, including dynamic browser toolbars, requires a separate
real-device check when those devices are available.
