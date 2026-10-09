import {useEffect, useRef} from 'react';
import {markDocumentHydrated} from './hydrationState';

/** Mark the point at which a form can safely handle native submission. */
export function useHydratedForm(replayPending = false) {
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => {
    const form = ref.current;
    if (!form) return;
    markDocumentHydrated();
    form.dataset.helmHydrated = 'true';
    const pending = form.dataset.helmPendingSubmit === 'true';
    delete form.dataset.helmPendingSubmit;
    // Scan entry and recovery search can replay. Contact requires Turnstile.
    if (replayPending && pending) form.requestSubmit();
    return () => { delete form.dataset.helmHydrated; };
  }, [replayPending]);
  return ref;
}
