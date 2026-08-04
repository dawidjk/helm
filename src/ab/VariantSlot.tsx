import type {ComponentType, ReactNode} from 'react';
import {useVariant} from './VariantContext';
import type {SlotName} from './variants';

interface VariantSlotProps {
  /** Slot identifier a variant's `overrides` map can target. */
  name: SlotName;
  /** Baseline UI, rendered whenever the active variant doesn't override this slot. */
  fallback: ReactNode;
}

/**
 * Render point for the A/B harness. The active variant's override for `name`
 * wins; otherwise the baseline `fallback` renders untouched. During SSG and
 * on first client paint the baseline always renders (see VariantProvider),
 * so static pages never change.
 */
export default function VariantSlot({name, fallback}: VariantSlotProps) {
  const {variant} = useVariant();
  const Override: ComponentType | undefined = variant.overrides[name];
  return Override ? <Override /> : <>{fallback}</>;
}
