import type {ComponentType} from 'react';

/**
 * Slot names a variant may override. "home" is the whole home page today;
 * future slots (whole pages or individual sections) are added by placing a
 * <VariantSlot name="..."> at the call site — nothing here needs to change.
 * The `string & {}` arm keeps the type open while preserving autocomplete
 * for the known slots.
 */
export type SlotName = 'home' | (string & {});

export interface VariantDefinition {
  /** URL-safe identifier; appears in `?variant=` and localStorage. */
  id: string;
  /** Short name shown on the comparison bar's segmented control. */
  label: string;
  /** One-liner shown as the segment's tooltip and in compare-mode pickers. */
  description?: string;
  /**
   * Component overrides keyed by slot name. A slot the variant does not
   * override falls back to the baseline UI passed to <VariantSlot>.
   */
  overrides?: Readonly<Partial<Record<SlotName, ComponentType>>>;
}

/** A registered variant with all optional fields normalized. */
export interface Variant {
  id: string;
  label: string;
  description: string;
  overrides: Readonly<Partial<Record<SlotName, ComponentType>>>;
}

export const BASELINE_VARIANT_ID = 'current';

const registry = new Map<string, Variant>();
const order: string[] = [];
const listeners = new Set<() => void>();
let snapshot: readonly Variant[] = [];

/**
 * Register a design variant. Safe to call from any module (including a
 * lazily-loaded one) — the comparison bar and slots pick up new entries
 * live. Re-registering an id replaces it in place.
 *
 * @example
 *   registerVariant({
 *     id: 'ledger',
 *     label: 'Ledger',
 *     description: 'Editorial, ledger-ruled rework of the home page.',
 *     overrides: {home: LedgerHome},
 *   });
 */
export function registerVariant(definition: VariantDefinition): void {
  if (!registry.has(definition.id)) order.push(definition.id);
  registry.set(definition.id, {
    id: definition.id,
    label: definition.label,
    description: definition.description ?? '',
    overrides: definition.overrides ?? {},
  });
  snapshot = order.map((id) => registry.get(id) as Variant);
  for (const notify of listeners) notify();
}

export function getVariant(id: string): Variant | undefined {
  return registry.get(id);
}

/** Stable-reference list of registered variants, in registration order. */
export function listVariants(): readonly Variant[] {
  return snapshot;
}

/** Subscribe to registry changes (shape matches useSyncExternalStore). */
export function subscribeVariants(onChange: () => void): () => void {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

// The baseline: the production design exactly as shipped. No overrides, so
// every <VariantSlot> renders its fallback.
registerVariant({
  id: BASELINE_VARIANT_ID,
  label: 'Current',
  description: 'The production design as it ships today.',
});
