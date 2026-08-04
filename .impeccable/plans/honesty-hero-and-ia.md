# Plan: Honesty-to-Hero Homepage + Services/IA Fix + A/B Variant Directions

Status: shape brief — planning only. Grounded in the 2026-08-04 critique
(`.impeccable/critique/2026-08-04T17-41-03Z__src-pages.md`) and current source.
Note for builders: `Home.tsx`, `Trust.tsx`, `About.tsx`, and `lanes.ts` carry
uncommitted edits from concurrent agents — rebase on the file as it exists when
you build, not on line numbers quoted here.

## 0. Job, audience, and the one argument

- Audience: NJ small-business owners (law/CPA, manufacturing/defense,
  contractors, medical/dental) in "prove you're protected" mode — skeptical of
  security vendors by instruction.
- Product truth that nothing may violate: two operators; reseller/integrator
  (Huntress, MailProtector); business-hours alert review (M–F 9–5 ET); no SOC 2
  / ISO 27001; no portal MFA yet; scan is public-signals only, not a pentest;
  prices exactly as in `src/pages/products.ts`; no testimonials, customer
  counts, or certifications. No new claims, prices, or capabilities may be
  invented in any variant.
- The argument: **"We publish our prices and our gaps."** Honesty is already
  operationalized (prices on tiles, Trust gap list, About.tsx code comment
  forbidding unearned claims) — the homepage's job is to lead with it instead
  of burying it in the footer.
- Helm metaphor: **keep**. Reconciliation, used everywhere below: *taking the
  helm means seeing the instruments.* Honesty = uncovered gauges. The wheel
  (HelmMark) stays the brand device; honesty becomes what the wheel steers by.

---

## 1. BASE homepage (`src/pages/Home.tsx`)

This is the new default Home; variants in §3 diverge from it.

### 1.1 Hero

- Composition: split hero (reuse the existing `.split` pattern or a new
  `.hero-split` class). Left: eyebrow, H1, sub, `LeadForm`, hero-note. Right:
  `PanelVisual` — promoted from band 3 into the hero. The mock scan report is
  the site's strongest proof artifact; it belongs at first paint. On mobile it
  stacks below the form (form first — conversion above the artifact).
- Copy (voice: plain, first-person plural, no fear selling):
  - Eyebrow: `Published prices · Published gaps · Plain English`
  - H1 (keep the authored line): `Take the helm of your security.`
  - Sub (the honesty argument, replacing the generic confidence sub):
    `We publish our prices, our vendors, and the gaps in our own controls —
    because a security company that surprises you has already failed. Sized
    for law firms, manufacturers, medical offices, and the trades.`
  - Hero-note — set the ~1-minute promise and the portal handoff honestly
    (fixes critique P1, "unannounced cross-origin handoff"):
    `Free scan of your email domain's public records. Next step: confirm your
    domain on our secure portal (app.helmsecured.com) — plain-English report
    usually in about a minute. No meeting, no login.`
    Do not promise "in a minute" flat; keep "usually in about a minute" (the
    phrasing Trust and lanes already use).
- `PanelVisual` gains an optional footer link slot: `See a full sample report →`
  → `/sample-report/` (§1.3). Add prop `sampleLink?: boolean` to
  `src/components/PanelVisual.tsx` so lane pages can opt in later without a
  second component.

### 1.2 Band order (base)

1. **Hero** (above).
2. **NEW — Honesty ledger strip** (new component `HonestyStrip` in
   `src/components/HonestyStrip.tsx`; render inside a `Band variant="raised"`).
   Three or four linked cards, each a claim + a destination — every claim
   verifiable one click away:
   - `Prices, published` → `/pricing/` — "Every service has its starting price
     on the tile. You should not have to book a call to learn a number."
   - `Gaps, published` → `/trust/#gaps` — "No SOC 2 audit. No portal MFA yet.
     We list what we don't have before you find out the hard way."
   - `Vendors, named` → `/trust/#subprocessors` — "Huntress runs the 24/7 SOC.
     MailProtector runs the filtering. We configure, manage, and explain — and
     we say so."
   - `Hours, honest` → `/trust/` — "We review alerts Monday–Friday, 9–5
     Eastern. We don't sell a response-time guarantee we can't hold."
   All four sentences are restatements of live Trust/Pricing copy — builders
   must not strengthen them.
3. **Products** — existing four-tile grid, unchanged mechanics, new band head:
   H2 `Four services. Prices on the tiles.` Sub: keep current sentence, append
   nothing.
4. **Proof split** — the current "Built for the questions you're actually being
   asked" split. Since `PanelVisual` moved to the hero, the right column
   becomes a **sample-report teaser card**: static excerpt (three finding rows)
   + `Read the full sample report →` → `/sample-report/`. Simplest build: a
   small `SampleReportTeaser` in the same file as the page, or reuse
   `PanelVisual` with `sampleLink`.
5. **Operating facts** stats band — unchanged (fix the acronym wall only if the
   clarify agent hasn't already: gloss "SPF, DKIM, DMARC" as "the public email
   records scammers check").
6. **Lanes strip** — now four rows (§2.3 adds Medical & Dental). Keep
   `lane-row` pattern; fix the `d${(i % 3) + 1}` stagger jumble by using
   `d${Math.min(i + 1, 3)}`.
7. **CtaBand** — keep, but sub must repeat the portal-handoff sentence from the
   hero-note so the last impression matches the first (peak-end).
- Meta title: change to `Helm: Security for New Jersey Small Business` (page
  sells four services, not just email — critique Riley flag). Keep meta desc's
  email-first phrasing.

### 1.3 The sample report artifact (fixes Trust.tsx:117 dangling promise)

- New page `src/pages/SampleReport.tsx`, route `sample-report/` in
  `src/routes.tsx` (lazy, like other pages). Content: a full-length rendering
  of a Helm scan report for the fictional domain `acme-mfg.com` (already the
  `PanelVisual` default).
- Hard honesty rules: banner at top — `Sample report · acme-mfg.com is a
  fictional domain · your report is generated from your real DNS records.`
  Findings limited to exactly the scan's actual scope as Trust states it:
  SPF, DMARC, MX, DNSSEC, MTA-STS, TLS-RPT, DKIM under common selectors,
  HTTPS/certificate status, limited unauthenticated SMTP probe. Include one
  "what this scan does NOT do" section mirroring Trust's list (no login, no
  exploitation, no breach-dataset search, no lookalike-domain search). Include
  the shareable-link caveat sentence from Trust.
- Link it from: hero `PanelVisual` footer, band 4 teaser, `Trust.tsx` "What
  you can verify before buying" (turn "We will show you a sample scan report"
  into a live link), and `FreeScan.tsx` if it has a natural slot.
- Add anchor ids to `Trust.tsx`: `id="gaps"` on the "What we do not have yet"
  section, `id="subprocessors"` on the subprocessors section (coordinate with
  the concurrent Trust editor).

---

## 2. Services / IA fix (`src/components/Site.tsx`)

### 2.1 Desktop nav

Replace the three lane links with two grouped items. Final top bar (≤5 + CTA):

`Helm | Services ▾ · Industries ▾ · Pricing · Sign in · [Free scan]`

- **Services** disclosure menu: Helm Mail, Helm Aware, Helm Ready, Helm Watch
  (each with its one-line price, e.g. "Helm Mail — from $15/user/mo" — the nav
  itself practices published pricing). Footer of menu: `Compare pricing →
  /pricing/`.
- **Industries** disclosure menu: Manufacturing & Defense, Professional
  Services (Law · CPA), Contractors & Trades, **Medical & Dental** (new, §2.3).
- **Pricing** stays top-level — it is the differentiator; do not bury it.
- Implementation: accessible disclosure pattern — `<button aria-expanded>` +
  menu, open on click (not hover-only), close on Escape/route change/outside
  click. Parent item shows `active` state when the current route is any of its
  children (use `useLocation` prefix match, since `NavLink` can't). Keep the
  existing `nav-links` hide-at-≤760px breakpoint.

### 2.2 Mobile

- Pin a compact `Free scan` button in the mobile top bar next to the burger
  (fixes critique P2 — CTA currently vanishes ≤760px). Small `Button size="sm"`
  outside `.nav-links`.
- Drawer hierarchy (replaces dumping `footerCols`): order = **Services** (4
  products + Pricing), **Industries** (4 lanes), **Company** (About, Trust &
  Security, Resources, FAQ, Contact — drop the quiz and free-scan from this
  group; free scan is now pinned), **Account** (Sign in). Free scan appears
  once, as the pinned button — not as link #12 of 18.
- Footer columns: keep as-is except add Medical & Dental under Industries.

### 2.3 Fourth lane: Medical & Dental

- Add `export const medicalDental: Lane` to `src/pages/lanes.ts`; route
  `medical-dental/` in `src/routes.tsx` (lazy, same pattern as the other
  three); add to nav/footer/home lane strip.
- Content constraints (nothing new may be claimed): slug `medical-dental`;
  backdrop: reuse `skyline` (a bespoke backdrop is a nice-to-have, see asset
  briefs); `reportDomain`: a plausible fictional practice, e.g.
  `brightsmile-dental.com`; eyebrow `NJ Medical & Dental Practices`; headline
  direction: *"The same HIPAA obligations as a hospital. Not the same budget."*
  (adapted from the existing Helm Ready feature copy). Pains: PHI in email /
  phishing, HIPAA Security Rule evidence expectations, no IT department.
  Steps: Helm Mail → Helm Aware → Helm Ready (HIPAA gap assessment, "typically
  $5,000 to $7,500" — the published number). Do not state HIPAA violation
  fine amounts or breach statistics we haven't sourced. `ctaMode`: default
  scan. Resources: link existing relevant articles only; invent no new slugs
  without writing the articles.
- Once live, trim "Medical" out of the professional-services kicker on the
  homepage lane strip (`Law · CPA · Medical` → `Law · CPA`) so the two lanes
  don't compete for the same click.

---

## 3. A/B variants (plug into the `src/ab/` registry)

The variant-comparison bar is being built concurrently (registry-based,
runtime-switched, `src/ab/`). `src/ab/` does not exist yet — build variants to
whatever registration API that agent lands; each variant below is a full Home
page component, e.g. `src/ab/variants/HomeLedger.tsx`, `HomeLiveProof.tsx`,
`HomeHelm.tsx`, sharing bands via imports from `Home.tsx`/components rather
than copy-paste (extract shared bands into `src/pages/homeBands.tsx` if the
base refactor makes that clean). **Base = §1.** All variants keep the §1
hero-note portal honesty and product-truth rules.

### Variant A — "Ledger" (honesty-forward)

- Thesis: the homepage IS the ledger — prices, gaps, and vendors above the
  fold; the reader audits us before we pitch them.
- Hero: left copy — eyebrow `The only security company that leads with its
  gaps`; H1 `We publish our prices and our gaps.`; sub carries the helm line:
  `That's what taking the helm means: you steer by real instruments, not by a
  brochure. Security for NJ law firms, manufacturers, practices, and trades.`
  Right: a **ledger card** (new `src/ab/components/LedgerCard.tsx`), styled
  like `PanelVisual` but typographic: three rows — `Starting prices ·
  $10–$15 per unit/mo, projects from $2,500` / `Known control gaps · 3, listed
  publicly` / `Subprocessors · 6, named` — each row deep-linking
  (/pricing, /trust#gaps, /trust#subprocessors). LeadForm below the copy.
- Band order: hero → products (prices prominent) → **gaps excerpt band** (the
  three `gaps` strings quoted verbatim from `Trust.tsx`, with `Read the whole
  list →`) → proof split with PanelVisual + sample link → lanes → CtaBand.
  Honesty strip is absorbed by the hero ledger card; omit it.
- Delta vs base: new hero copy + LedgerCard; PanelVisual returns to band 4;
  adds gaps excerpt band.
- Assets: none required (typographic by design). Optional Higgsfield brief:
  "open ship's logbook, engraved line-art style, deep racing-green field,
  calm and precise mood, wide hero background, no text, works dimmed to ~10%
  opacity behind text" — decorative only.

### Variant B — "Live proof" (inline scan demo hero)

- Thesis: the free scan is the demo, so demo it — the report assembles itself
  in the hero while you watch.
- Hero: full-bleed split; right panel is `src/ab/components/LiveReportDemo.tsx`
  — an animated `PanelVisual`: finding rows type/slide in one at a time,
  badges resolve ✓/!, the score ring fills to 68, then the panel cycles to the
  next fictional domain (reuse the three lane `reportDomain`s +
  `brightsmile-dental.com`). Honesty guard: persistent small caption `Sample
  data — fictional domains. Run it on yours:` pointing at the LeadForm under
  the left copy. Must honor `prefers-reduced-motion` (render the static final
  state). H1 direction: `Watch what a scammer can see.` Sub: `This is the
  report our free scan builds from your public email records — usually in
  about a minute, no login, no meeting.`
- Band order: hero(demo) → products → honesty strip → operating facts → lanes
  → CtaBand. (Proof split dropped; the hero already is the proof.)
- Delta vs base: LiveReportDemo component + CSS keyframe/JS sequencing; band 4
  removed; band 2 (honesty strip) moves down one slot.
- Assets: none — pure code animation. No Higgsfield need.

### Variant C — "Helm" (metaphor sharpened)

- Thesis: taking the helm means seeing the instruments — the wheel becomes a
  gauge cluster where every gauge is a published fact.
- Hero: centered composition. Enlarged HelmMark evolved into an **instrument
  cluster** graphic; around/below it four small gauge chips: `Prices —
  published`, `Gaps — 3, listed`, `Vendors — named`, `Scan — free, ~1 min`.
  H1 `Take the helm. Read the instruments.` Sub: `A helm is only useful if the
  gauges tell the truth. Ours are public: our prices, our vendors, and the
  gaps we haven't closed yet.` LeadForm centered below.
- Band order: base order unchanged, plus band 3 head rewritten to extend the
  metaphor (`Four instruments. One steady hand.`); honesty strip cards get
  gauge-styled icons.
- Delta vs base: hero composition + one hero graphic + honesty-strip icon
  styling; everything else shared with base.
- Assets (Higgsfield briefs for later generation):
  1. Hero cluster — "ship's helm wheel fused with a marine instrument gauge
     cluster (compass, pressure gauges), engraved technical line-art, single
     accent green #38A169 on deep green-black, calm/precise/nautical-industrial
     mood, wide 16:9, transparent background, no text, must read at 40%
     opacity behind a headline; SVG or high-res PNG, light- and dark-viable."
  2. Four gauge tiles (optional, else keep `ProductMotif`) — "single brass-
     and-steel marine gauge, green needle, one per concept (envelope/shield/
     clipboard/eye motif on the dial), square 1:1, transparent bg, same
     engraved style, no text."
  Fallback if assets aren't ready: build the cluster as inline SVG extending
  `HelmMark` (spokes → gauge ticks) so the variant ships without waiting on
  imagery.

---

## 4. Build order & file map

1. `src/pages/SampleReport.tsx` + route + Trust link/anchors (independent,
   unblocks everything).
2. `src/pages/lanes.ts` medicalDental + route (independent).
3. `src/components/Site.tsx` nav IA + mobile drawer + pinned mobile CTA.
4. Base `src/pages/Home.tsx` rework + `HonestyStrip.tsx` + `PanelVisual`
   `sampleLink` prop (extract shared bands if going straight to variants).
5. Variants in `src/ab/variants/` once the registry API lands.

Anti-goals: no fear-selling copy, no invented statistics/testimonials, no
strengthening of any Trust sentence, no removal of the theme toggle or
`prefers-reduced-motion` paths, no fifth nav item, and the About.tsx:83
commented-out claim stays commented until earned.

Assumptions marked (correct me before build if wrong): "Services"+"Industries"
as two disclosure menus (not a single mega-menu); sample report lives at
`/sample-report/` as a page (not a PDF); the medical/dental lane may reuse the
`skyline` backdrop at launch.
