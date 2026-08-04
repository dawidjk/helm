# A/B comparison harness

A dev-only harness for trying alternate designs ("variants") against the live
site, side by side, without touching production markup. Real visitors get the
baseline: the bar and its CSS live in a lazy chunk that is only fetched after
an explicit `?ab=1` opt-in, and the SSG build renders the baseline exactly as
before.

## Opening the bar

Visit any page with `?ab=1`, e.g. `http://localhost:5173/?ab=1`.

- The flag persists in `sessionStorage` (`helm-ab`) across client-side
  navigation for the rest of the tab session; `?ab=0` turns it off again.
- The bar sits above the site header (the sticky nav is offset via
  `body.ab-bar-active`, so nothing is covered). The chevron button collapses
  it to a floating "Variants" chip; the chip brings it back.
- The segmented control switches the active variant instantly and syncs both
  `?variant=` in the URL and `localStorage` (`helm-ab-variant`), so a variant
  choice survives reloads and can be shared as a link.

## Compare mode

The **Compare** button opens two labeled iframes (A / B) of the current route,
each pinned to a variant via `?variant=<id>&ab=1`. Each pane has its own
picker; panes sit side by side and stack vertically below 760px. Close with
**Exit compare** or `Escape`. The bar never renders inside the panes (iframes
are detected and skipped).

## Registering a variant

One call, zero harness changes:

```tsx
// src/ab/variants/ledger.tsx  (any module that gets imported)
import {registerVariant} from '../variants';
import LedgerHome from './LedgerHome';

registerVariant({
  id: 'ledger',                 // appears in ?variant= and localStorage
  label: 'Ledger',              // segmented-control label
  description: 'Editorial, ledger-ruled rework of the home page.',
  overrides: {home: LedgerHome} // slot name -> component
});
```

Then import the module once (e.g. from `ABRoot.tsx` or a variants index) so
the registration runs. The registry is live: variants registered from a
lazily-loaded module appear on the bar as soon as the module executes.

A slot is any `<VariantSlot name="..." fallback={...} />` placement. Today
there is one, wired in `src/routes.tsx`:

```tsx
{index: true, element: <VariantSlot name="home" fallback={<Home />} />}
```

A variant that doesn't override a slot falls through to the baseline, so
partial variants (say, hero-only) are fine — add a narrower slot at the call
site and target it.

## Intended flow for the upcoming "bolder" variants

1. Build the variant page/section as a self-contained component under
   `src/ab/variants/` — don't edit `src/pages/*`; the baseline must keep
   shipping byte-identical.
2. Register it (above), open `/?ab=1`, and use compare mode to hold it against
   **Current** on the same route, both themes, desktop and mobile widths.
3. When a variant wins, promote its component into `src/pages/` as the new
   baseline and delete the registration. The harness itself never ships to
   visitors either way.

## SSR/SSG safety rules

- The server render and the client's first paint always show the baseline
  (`current`); the visitor's stored choice is applied post-mount, so there is
  never a hydration mismatch. Variant components must follow the same rule:
  no `window` access during render.
- `ABRoot` gates everything: during SSG it renders only the provider and the
  page, and the bar chunk is never imported unless the flag check passes in a
  real top-level browser window.
