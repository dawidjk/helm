import {lazy, Suspense, useEffect, useState, type ReactNode} from 'react';
import {VariantProvider} from './VariantContext';

// The bar (and its CSS) live in a lazy chunk: real visitors never download it.
const ComparisonBar = lazy(() => import('./ComparisonBar'));

export const AB_FLAG_KEY = 'helm-ab';

/**
 * The bar is opt-in only: `?ab=1` arms it (persisted in sessionStorage so it
 * survives client-side navigation), `?ab=0` disarms it. It never shows inside
 * the compare-mode iframes, and never renders during the SSG build.
 */
function readAbFlag(): boolean {
  try {
    if (window.self !== window.top) return false; // compare-mode iframe
  } catch {
    return false; // cross-origin frame — definitely not our harness
  }
  const ab = new URLSearchParams(window.location.search).get('ab');
  try {
    if (ab === '0') {
      sessionStorage.removeItem(AB_FLAG_KEY);
      return false;
    }
    if (ab === '1') {
      sessionStorage.setItem(AB_FLAG_KEY, '1');
      return true;
    }
    return sessionStorage.getItem(AB_FLAG_KEY) === '1';
  } catch {
    return ab === '1'; // storage unavailable — the URL alone decides
  }
}

/**
 * Mount point for the A/B harness, wrapped around the site layout in
 * src/routes.tsx. Renders nothing extra for real visitors beyond the
 * context provider and a one-time flag check after mount.
 */
export default function ABRoot({children}: {children: ReactNode}) {
  const [barEnabled, setBarEnabled] = useState(false);

  // Deliberately post-mount: keeps SSG markup and hydration identical.
  useEffect(() => {
    setBarEnabled(readAbFlag());
  }, []);

  return (
    <VariantProvider>
      {children}
      {barEnabled ? (
        <Suspense fallback={null}>
          <ComparisonBar />
        </Suspense>
      ) : null}
    </VariantProvider>
  );
}
