---
name: Helm Security Marketing Site
description: A composed, hospitality-minded security experience built from mineral paper, deep pine, warm oak, and plain-spoken clarity.
colors:
  deep-pine: "#214B3B"
  mineral-paper: "light-dark(#eee9df, #0f1712)"
  paper-surface: "light-dark(#f7f3eb, #18221b)"
  strong-ink: "light-dark(#16211a, #f7f3ea)"
  body-ink: "light-dark(#263129, #e7e9e2)"
  muted-ink: "light-dark(#4d5a50, #b7c1b9)"
  warm-oak: "light-dark(#9c7f5b, #d2b993)"
  pine-field: "light-dark(#214b3b, #cfc1a7)"
  on-pine: "light-dark(#f5f1e8, #162019)"
  hairline: "light-dark(rgba(31, 41, 34, 0.18), rgba(231, 236, 229, 0.17))"
  action-fill: "light-dark(#214b3b, #d2b993)"
  action-text: "light-dark(#fffdf7, #132019)"
typography:
  display:
    fontFamily: "Tenor Sans, Helvetica Neue, sans-serif"
    fontSize: "clamp(3rem, 6.5vw, 5.5rem)"
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Tenor Sans, Helvetica Neue, sans-serif"
    fontSize: "clamp(2.375rem, 5vw, 4rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.1em"
rounded:
  subtle: "6px"
  control: "12px"
  surface: "16px"
  asymmetric: "112px 16px 112px 16px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  container-gutter: "24px"
  section: "clamp(88px, 10vw, 132px)"
components:
  button-primary:
    backgroundColor: "{colors.action-fill}"
    textColor: "{colors.action-text}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "52px"
  button-primary-compact:
    backgroundColor: "{colors.action-fill}"
    textColor: "{colors.action-text}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "0 18px"
    height: "46px"
  input:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.strong-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "13px 16px"
    height: "52px"
  card:
    backgroundColor: "{colors.paper-surface}"
    textColor: "{colors.body-ink}"
    rounded: "{rounded.surface}"
    padding: "32px"
  nav:
    backgroundColor: "{colors.mineral-paper}"
    textColor: "{colors.muted-ink}"
    typography: "{typography.label}"
    height: "72px"
---

# Design System: Helm Security Marketing Site

## Overview

**Creative North Star: "The Quiet Helm House"**

Helm should feel like a composed security partner welcoming a business owner into a calm, considered room. The production world is the user-pinned Japandi direction (`user-pinned-japandi-2026-08-04`): mineral paper, deep pine, warm oak, generous breathing room, tactile surfaces, and editorial restraint. It communicates steadiness and care without making security feel soft or vague.

The visual system is persuasive but never theatrical. A left-aligned, high-contrast message and a concrete action anchor the first viewport; candid proof, ruled choices, and published details carry the story afterward. Helm explicitly rejects neon command centers, sci-fi dashboards, fear-driven spectacle, and anonymous enterprise gloss.

**Key Characteristics:**

- Quiet Japanese-modern hospitality with a credible security backbone.
- Mineral-paper and deep-pine tonal fields with warm-oak highlights.
- Tenor Sans display type paired with precise, readable Manrope.
- Ruled lists, asymmetric curves, sparse borders, and restrained lift.
- Still, sculptural photography for the homepage and architectural photography for secondary heroes.
- Motion concentrated in industry context, with content visible by default everywhere else.
- Light and dark themes that preserve the same materials, hierarchy, and contrast.

## Colors

The palette is botanical, mineral, and warm: pine provides authority, paper provides calm, oak provides a rare tactile accent, and ink remains softer than pure black.

### Primary

- **Deep Pine:** The identity anchor for the Helm mark, key links, proof fields, and decisive actions.
- **Action Pine / Oak:** Theme-aware primary-button fill; pine leads in light mode and warm oak carries equivalent prominence in dark mode.

### Secondary

- **Warm Oak:** A scarce material accent for focus, hover borders, footer labels, and the warm side of dark mode.
- **Pine Field:** Large proof and call-to-action bands; it reverses to a warm light field in dark mode while keeping the same hierarchy.

### Neutral

- **Mineral Paper:** The site canvas and default quiet atmosphere.
- **Paper Surface:** Cards, form fields, and raised content bands.
- **Strong Ink:** Headlines and high-priority copy.
- **Body Ink:** Default reading text.
- **Muted Ink:** Supporting copy, prices, notes, and secondary navigation.
- **Hairline:** Low-contrast rules that structure lists and surfaces without boxing everything in.
- **On Pine:** Text placed over pine fields and their dark-theme counterpart.

### Named Rules

**The Material, Not Neon Rule.** Security is expressed through pine, paper, oak, clarity, and evidence—never electric cyan, matrix grids, glowing command centers, or generic hacker imagery.

**The Oak Is Rare Rule.** Warm oak appears as a precise accent or theme counterpart, not a broad decorative wash competing with pine.

**The Theme Continuity Rule.** Dark mode changes material values, not the visual identity: hierarchy, legibility, imagery roles, and action contrast remain intact.

## Typography

**Display Font:** Tenor Sans (with Helvetica Neue and sans-serif fallbacks)  
**Body Font:** Manrope (with system sans-serif fallbacks)

**Character:** Tenor Sans gives Helm a calm, architectural voice without turning ornamental. Manrope keeps scope, pricing, evidence, and form interactions direct and modern.

### Hierarchy

- **Display** (400, `clamp(3rem, 6.5vw, 5.5rem)`, 0.98): Hero headlines and the largest brand statements; the homepage may extend to `clamp(3.625rem, 7.4vw, 6rem)` with a 0.94 line height.
- **Headline** (400, `clamp(2.375rem, 5vw, 4rem)`, 1): Major section openings and call-to-action statements.
- **Title** (600, 20px, 1.3): Card titles, risk labels, FAQ questions, and structured supporting headings.
- **Body** (400, 16px, 1.65): Plain-English explanations; keep long reading surfaces near 60–72 characters per line.
- **Label** (700, 12px, 0.1em tracking): Compact product names, footer column titles, and concise metadata within established structures; do not add standalone eyebrow or kicker labels.

### Named Rules

**The Two-Voice Rule.** Tenor Sans speaks only for the brand and major hierarchy; Manrope does the explanatory, transactional, and evidentiary work.

**The Calm Display Rule.** Display type stays regular-weight and tightly composed. Do not simulate authority with heavy, compressed, all-caps headlines.

## Layout

The site uses a centered 1200px maximum canvas with 24px desktop gutters, broad section spacing, and strong left alignment where visitors make decisions. Full-width pine fields and photographic heroes punctuate the paper canvas; content-heavy pages return to bounded, readable measures.

Homepage storytelling follows four clear movements after the hero: the four offers in a ruled service list, candid proof, an industry choice, and a closing scan action. Secondary pages use a distinct architectural photographic hero before structured bands. Industry pages alone use large, code-native contextual SVG scenes on a right-aligned desktop stage: Aero for manufacturing and defense, Skyline for professional services, large balancing scales for law firms, a full reconciliation workspace for accounting and tax firms, a raised portable bedside monitor for medical and dental practices, and Construction for contractors and trades. On phones, the matching scene moves into its own in-flow panel between the headline and supporting copy so imagery never sits behind the text.

Desktop layouts commonly use asymmetric two-column proportions rather than equal card grids. At 980px, large two-column compositions and the footer collapse; at 700px, heroes and lists stack, image crops shift, and the asymmetric closing panel tightens. Navigation changes to a 44px menu control at 760px. Small-screen content gutters reduce to 16px where needed without shrinking interactive targets.

**The First-Viewport Rule.** The first viewport presents one left-aligned, high-contrast message, its explanatory line, and the relevant scan or founder action; imagery supports that decision instead of competing with it.

**The Ruled-Choice Rule.** Repeated choices and risks use edge-to-edge hairlines and generous row padding, not floating stacks of lookalike cards. Risk lists remain unnumbered.

## Elevation & Depth

The system is flat by default and gains depth through tonal layering, photographic shading, borders, and very restrained ambient shadows. Cards use a low, diffuse shadow; hover may add a slightly deeper pine-tinted lift. Lead-form buttons receive the strongest elevation in the system so they remain visibly actionable against both paper and pine fields.

### Shadow Vocabulary

- **Surface Whisper** (`0 18px 42px -36px light-dark(rgba(20,35,27,.38), rgba(0,0,0,.74))`): Resting cards and informational containers.
- **Pine Lift** (`0 28px 64px -42px light-dark(rgba(33,75,59,.65), rgba(0,0,0,.9))`): Hover feedback on an interactive card.
- **Action Lift** (`0 12px 28px -14px light-dark(rgba(20,48,37,.9), rgba(0,0,0,.92))`): High-contrast lead-form buttons.
- **Oak Focus** (`0 0 0 4px light-dark(rgba(156,127,91,.17), rgba(210,185,147,.15))`): Keyboard and form-field focus against theme-aware surfaces.

### Named Rules

**The Flat-by-Default Rule.** A section earns separation through tone, whitespace, or a hairline before it earns a shadow.

**The Action Gets the Lift Rule.** Strong elevation belongs to conversion controls, not decorative containers.

## Shapes

The base language uses gently rounded 12px controls and 16px surfaces, with pills reserved for compact status or term labels. The signature gesture is a sparse asymmetric curve—most visible in the closing action panel—combining one generous architectural arc with a restrained opposing corner. Hairline borders should remain quiet and material-like.

Photography follows the same silhouette discipline: still sculptural imagery fills the homepage; a separate, simple pine-and-oak architectural image supports secondary brand heroes. Directional affordances use thin inline SVG arrows rather than text glyphs or icon-font shortcuts.

**The One Curve Gesture Rule.** Use the asymmetric curve as a deliberate focal silhouette, not as a default radius for every card.

**The Honest Edge Rule.** Default surfaces use 12–16px rounding; pills belong only to genuinely compact labels and controls.

## Components

### Buttons

Buttons feel tactile, calm, and unmistakably actionable.

- **Shape:** Gently rounded controls (12px) with at least a 44px interactive height; lead-form variants are 46px compact or 52px full-size.
- **Primary:** Theme-aware pine/oak fill, high-contrast text, a defined border, and 600–650 weight.
- **Hover / Focus:** Translate upward by at most 1px, deepen the ambient action shadow, and use a visible focus ring. Motion stays in the 180–220ms range.
- **Secondary:** Quiet surface or transparent treatment with a hairline border; never compete visually with the primary action.

### Chips

- **Style:** Compact pill labels use a faint pine tint, a quiet pine border, bold 12–13px text, and no ornamental icon.
- **State:** Status and commercial-term chips are informational, never faux buttons. Let long deadline text wrap on narrow screens.

### Cards / Containers

- **Corner Style:** Soft architectural surfaces (16px); supporting visual insets use 14px.
- **Background:** Paper Surface on Mineral Paper, or a low pine wash for selected takeaways.
- **Shadow Strategy:** Surface Whisper at rest and Pine Lift only for genuinely interactive cards.
- **Border:** One-pixel Hairline; hover may shift toward Warm Oak.
- **Internal Padding:** 28–32px on primary cards, reduced proportionally on mobile.

### Inputs / Fields

- **Style:** Paper Surface fill, one-pixel Hairline stroke, 12px radius, and 15.5–16px Manrope text.
- **Focus:** Warm Oak border plus Oak Focus ring.
- **Error / Disabled:** Errors sit directly below the field in legible red; disabled and busy states preserve labels and contrast.

### Navigation

The 72px sticky navigation is opaque enough to retain material continuity and uses no blur in the production Japandi layer. Tenor Sans identifies Helm; compact Manrope links use muted ink and shift to the accent on hover or active state. Mobile keeps the free-scan action visible, uses a 44px menu control, and presents secondary taxonomy in native collapsed sections.

### Ruled Directional Lists

Service, industry, resource, proof, FAQ, and risk patterns favor ruled rows over repeated cards. Rows use generous vertical padding, a subtle background response, and thin SVG direction icons that move only a few pixels on hover. Risks are deliberately unnumbered so hierarchy comes from candid wording, not manufactured severity scores.

### Hero Imagery

The homepage uses the original still sculptural helm image as its singular brand statement. Product, pricing, trust, contact, and other secondary brand heroes share a different, simpler pine-and-oak architectural still, with a left-side shade and explicit light- and dark-theme text contrast. Only industry heroes animate, using large code-native SVG scenes at a scale comparable to Aero. Manufacturing and defense use Aero; professional services use Skyline; law firms use large balancing scales that settle into an even resting state, with a stronger stroke treatment in light mode; accounting and tax firms use a full reconciliation workspace with a sidebar, summary cards, paired entries, a scan, trend chart, total, and verification state; medical and dental practices use a raised portable bedside monitor with a handle, controls, pulse, right-side medical-cross and tooth-care status nodes, records, a privacy shield, and a thick telescoping support that continues into the bottom of the desktop hero; contractors and trades use Construction. Desktop keeps each scene bounded and right-aligned so the left copy field stays calm. Phones place the scene in a dedicated in-flow panel between the headline and supporting copy. Every scene pauses when off-screen and resolves to a complete static composition when reduced motion is requested.

### Footer

The footer is a fixed dark-pine conclusion with a clear Helm identity block, direct contact details, four navigation columns, and a separated legal line. It collapses to two columns and then one without hiding links or compressing touch targets.

## Do's and Don'ts

### Do:

- **Do** preserve the two-image hierarchy: sculptural homepage, separate architectural secondary hero.
- **Do** lead first viewports with a left-aligned, high-contrast message and one obvious scan or founder action.
- **Do** keep each approved code-native SVG scene on its matching industry hero—Aero, Skyline, law balancing scales, accounting reconciliation workspace, medical and dental bedside monitor, or Construction—at large scale, right-aligned away from desktop copy, placed in-flow between headline and supporting copy on phones, paused off-screen, and static under reduced motion.
- **Do** keep section content visible by default and reserve the restrained rise reveal for first-viewport hero content.
- **Do** use ruled, unnumbered rows for risks and SVG arrows for direction.
- **Do** preserve 44px minimum interactive targets, dark-mode continuity, and elevated lead-form button contrast.
- **Do** keep the footer complete, legible, and structurally intact at every breakpoint.

### Don't:

- **Don't** introduce neon, command-center dashboards, hacker clichés, or fear-selling visual effects.
- **Don't** replace candid proof with invented testimonials, badges, customer counts, or outcome claims.
- **Don't** animate ordinary content sections or hide them behind scroll-observer state.
- **Don't** reuse the homepage sculpture as a generic background for every page.
- **Don't** turn every section into a rounded card grid or every label into a pill.
- **Don't** weaken primary lead-form buttons into low-contrast flat fills on elevated or pine backgrounds.
