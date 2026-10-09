// Warm the existing React hydration module after the hero can paint, or when
// a visitor tries a control. This fetches code; it does not execute it, replay
// input, change focus, or alter analytics and consent.
(() => {
  // Never let an unhydrated form fall back to a GET containing an email.
  // Coalesce early scan/search submits, then let normal React validation run
  // once its handler mounts. Contact cannot replay without its security check.
  document.addEventListener('submit', (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement) ||
        !form.matches('.lead-form, .contact-form, .error-search') || form.dataset.helmHydrated === 'true') return;
    event.preventDefault();
    if (form.matches('.lead-form, .error-search')) form.dataset.helmPendingSubmit = 'true';
    warm();
  }, true);
  let warmed = false;
  function warm() {
    if (warmed) return;
    warmed = true;
    document.removeEventListener('load', onImageLoad, true);
    for (const type of ['pointerdown', 'keydown', 'focusin']) {
      document.removeEventListener(type, onControl, true);
    }
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = '__HELM_HYDRATION_URL__';
    link.crossOrigin = '';
    link.setAttribute('fetchpriority', 'low');
    document.head.appendChild(link);
  }
  function afterImage(image) {
    if (warmed) return;
    const decoded = typeof image.decode === 'function' ? image.decode() : Promise.resolve();
    decoded.catch(() => {}).then(() => {
      // Let the decoded image have a paint opportunity before another fetch.
      requestAnimationFrame(() => requestAnimationFrame(warm));
    });
  }
  function onImageLoad(event) {
    const image = event.target;
    if (image instanceof HTMLImageElement && image.getAttribute('fetchpriority') === 'high') {
      afterImage(image);
    }
  }
  function onControl(event) {
    if (event.target instanceof Element && event.target.closest('button, input, select, textarea, summary')) {
      warm();
    }
  }
  document.addEventListener('load', onImageLoad, true);
  for (const type of ['pointerdown', 'keydown', 'focusin']) {
    document.addEventListener(type, onControl, {capture: true, passive: true});
  }
  document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('img[fetchpriority="high"]');
    if (image?.complete && image.naturalWidth > 0) afterImage(image);
  }, {once: true});
})();
