import {useEffect} from 'react';

/** Finish keyboard-focus scrolling after the browser's own scroll settles.
 * Pointer and anchor activation keep their normal navigation behavior. */
export default function FocusClearance() {
  useEffect(() => {
    let keyboard = false, frame = 0;
    let observedBanner: HTMLElement | null = null;
    const eligible = (control: Element | null): control is HTMLElement => control instanceof HTMLElement &&
      control.matches('a, button, input, select, textarea, [data-focus-clearance]') &&
      Boolean(document.getElementById('main-content')?.contains(control) || control.closest('.site-footer, .ad-consent'));
    const measureBanner = () => {
      const banner = document.querySelector<HTMLElement>('.ad-consent');
      if (banner !== observedBanner) {
        if (observedBanner) resize.unobserve(observedBanner);
        observedBanner = banner;
        if (banner) resize.observe(banner);
      }
      const inset = banner && getComputedStyle(banner).position === 'fixed' ? Math.max(0, window.innerHeight - banner.getBoundingClientRect().top + 12) : 0;
      document.documentElement.style.setProperty('--consent-focus-clearance', `${Math.ceil(inset)}px`);
    };
    const clear = (control: HTMLElement) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!control.isConnected || document.activeElement !== control) return;
        const nav = document.querySelector('.site-nav');
        if (!(nav instanceof HTMLElement)) return;
        const rect = control.getBoundingClientRect();
        let top = rect.top;
        if (control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement) {
          for (const label of Array.from(control.labels ?? [])) {
            const labelRect = label.getBoundingClientRect();
            if (labelRect.width > 2 && labelRect.height > 2) top = Math.min(top, labelRect.top);
          }
        }
        const style = getComputedStyle(control);
        const outline = Math.max(0, parseFloat(style.outlineWidth) + parseFloat(style.outlineOffset)) || 0;
        const gap = Math.max(8, outline + 4), upper = Math.max(0, nav.getBoundingClientRect().bottom) + gap;
        let lower = window.innerHeight - gap;
        const banner = document.querySelector<HTMLElement>('.ad-consent');
        if (banner && getComputedStyle(banner).position === 'fixed' && !banner.contains(control)) {
          const covered = banner.getBoundingClientRect();
          if (rect.right > covered.left && rect.left < covered.right) lower = Math.min(lower, covered.top - gap);
        }
        // Keep the control itself visible when a long label cannot also fit.
        if (rect.bottom - top > lower - upper) top = rect.top;
        if (top < upper) window.scrollBy({top: top - upper, behavior: 'instant'});
        else if (rect.bottom > lower) window.scrollBy({top: Math.min(rect.bottom - lower, top - upper), behavior: 'instant'});
      });
    };
    const refresh = () => {
      measureBanner();
      if (keyboard && eligible(document.activeElement)) clear(document.activeElement);
    };
    const resize = new ResizeObserver(refresh);
    const changes = new MutationObserver(refresh);
    const key = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        keyboard = true;
        // Native focus scrolling must settle before clearance is measured.
        document.documentElement.classList.add('keyboard-focus-scroll');
      }
    };
    const pointer = () => { keyboard = false; document.documentElement.classList.remove('keyboard-focus-scroll'); };
    const focus = (event: FocusEvent) => {
      const control = event.target;
      if (keyboard && eligible(control instanceof Element ? control : null)) clear(control as HTMLElement);
    };
    measureBanner(); changes.observe(document.body, {childList: true, subtree: true});
    document.addEventListener('keydown', key); document.addEventListener('pointerdown', pointer); document.addEventListener('focusin', focus);
    window.addEventListener('resize', refresh); window.visualViewport?.addEventListener('resize', refresh);
    return () => {
      document.documentElement.classList.remove('keyboard-focus-scroll'); document.documentElement.style.removeProperty('--consent-focus-clearance');
      cancelAnimationFrame(frame); resize.disconnect(); changes.disconnect();
      document.removeEventListener('keydown', key); document.removeEventListener('pointerdown', pointer); document.removeEventListener('focusin', focus);
      window.removeEventListener('resize', refresh); window.visualViewport?.removeEventListener('resize', refresh);
    };
  }, []);
  return null;
}
