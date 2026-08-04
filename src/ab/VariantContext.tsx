import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from 'react';
import {
  BASELINE_VARIANT_ID,
  getVariant,
  listVariants,
  subscribeVariants,
  type Variant,
} from './variants';

export const VARIANT_STORAGE_KEY = 'helm-ab-variant';
const VARIANT_PARAM = 'variant';

interface VariantContextValue {
  /** The requested variant id (may be unregistered if a variant module hasn't loaded). */
  variantId: string;
  /** The resolved variant; falls back to the baseline when the id is unknown. */
  variant: Variant;
  /** Switch variants instantly — also syncs `?variant=` and localStorage. */
  setVariantId: (id: string) => void;
}

const VariantContext = createContext<VariantContextValue | null>(null);

/** Live list of registered variants. SSR-safe; updates if a variant registers late. */
export function useVariantList(): readonly Variant[] {
  return useSyncExternalStore(subscribeVariants, listVariants, listVariants);
}

export function VariantProvider({children}: {children: ReactNode}) {
  // The SSG build (no window) and the client's first paint both render the
  // baseline, so hydration always matches; the visitor's real choice —
  // ?variant= first, then localStorage — is applied right after mount.
  const [variantId, setVariantIdState] = useState<string>(BASELINE_VARIANT_ID);

  useEffect(() => {
    let requested = new URLSearchParams(window.location.search).get(VARIANT_PARAM);
    if (!requested) {
      try {
        requested = localStorage.getItem(VARIANT_STORAGE_KEY);
      } catch {
        // Storage unavailable (privacy mode) — stay on the baseline.
      }
    }
    if (requested && requested !== BASELINE_VARIANT_ID) setVariantIdState(requested);
  }, []);

  const setVariantId = useCallback((id: string) => {
    setVariantIdState(id);
    try {
      localStorage.setItem(VARIANT_STORAGE_KEY, id);
    } catch {
      // Storage unavailable — the in-memory switch still works.
    }
    const url = new URL(window.location.href);
    if (id === BASELINE_VARIANT_ID) url.searchParams.delete(VARIANT_PARAM);
    else url.searchParams.set(VARIANT_PARAM, id);
    history.replaceState(history.state, '', url);
  }, []);

  // Subscribe to the registry so a late-registering variant module (loaded
  // lazily) re-resolves the id on arrival; the lookup itself is cheap.
  useVariantList();
  const variant: Variant = getVariant(variantId) ?? (getVariant(BASELINE_VARIANT_ID) as Variant);

  const value = useMemo(
    () => ({variantId, variant, setVariantId}),
    [variantId, variant, setVariantId],
  );

  return <VariantContext.Provider value={value}>{children}</VariantContext.Provider>;
}

export function useVariant(): VariantContextValue {
  const ctx = useContext(VariantContext);
  if (!ctx) {
    throw new Error('useVariant must be used inside <VariantProvider> (mounted in src/routes.tsx).');
  }
  return ctx;
}
