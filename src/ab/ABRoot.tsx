import {useEffect, type ReactNode} from 'react';
import {VariantProvider} from './VariantContext';

/**
 * Compatibility boundary for direct, shareable `?variant=` previews. The
 * comparison selector was retired after Japandi became the production
 * direction, so this wrapper never adds interface chrome or layout offsets.
 */
export default function ABRoot({children}: {children: ReactNode}) {
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).has('variant');
    if (requested) void import('./designs');
  }, []);

  return <VariantProvider>{children}</VariantProvider>;
}
