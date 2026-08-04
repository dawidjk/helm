# A/B comparison harness

A retired development harness for the alternate designs explored before
Japandi became the production direction. Direct `?variant=<id>` previews remain
available for reference, but the selector banner and side-by-side comparison
interface have been removed.

## Opening a direct preview

Visit the homepage with a registered variant, for example
`http://localhost:5173/?variant=akari`. The production homepage remains the
default when the parameter is absent.

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

Then import the module once from `src/ab/designs/index.ts` so the registration
runs when a direct preview is requested.

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
2. Register it, open its direct `?variant=` preview, and compare it manually
   against production in both themes and at desktop and mobile widths.
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
