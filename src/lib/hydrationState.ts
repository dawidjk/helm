// Effects mark the initial document ready. This is never set during SSG.
let hydrated = false;
export const isDocumentHydrated = () => hydrated;
export const markDocumentHydrated = () => { hydrated = true; };
