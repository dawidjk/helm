import {useEffect} from 'react';

/** Finish keyboard-focus scrolling after the browser's own scroll settles.
 * Pointer and anchor activation keep their normal navigation behavior. */
export default function FocusClearance() {
  useEffect(() => {
    let keyboard = false, frame = 0;
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
      if (!keyboard || !(control instanceof HTMLElement) || !control.matches('a, button, input, select, textarea') || (!document.getElementById('main-content')?.contains(control) && !control.closest('.site-footer, .ad-consent'))) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (!control.isConnected || document.activeElement !== control) return;
        const nav = document.querySelector('.site-nav');
        if (!(nav instanceof HTMLElement)) return;
        let top = control.getBoundingClientRect().top;
        if (control instanceof HTMLInputElement || control instanceof HTMLSelectElement || control instanceof HTMLTextAreaElement) {
          for (const label of Array.from(control.labels ?? [])) {
            const rect = label.getBoundingClientRect();
            if (rect.width > 2 && rect.height > 2) top = Math.min(top, rect.top);
          }
        }
        const style = getComputedStyle(control);
        const outline = Math.max(0, parseFloat(style.outlineWidth) + parseFloat(style.outlineOffset)) || 0;
        const clearance = nav.getBoundingClientRect().bottom + Math.max(8, outline + 4);
        if (top < clearance) window.scrollBy({top: top - clearance, behavior: 'instant'});
      });
    };
    document.addEventListener('keydown', key); document.addEventListener('pointerdown', pointer); document.addEventListener('focusin', focus);
    return () => {document.documentElement.classList.remove('keyboard-focus-scroll'); cancelAnimationFrame(frame); document.removeEventListener('keydown', key); document.removeEventListener('pointerdown', pointer); document.removeEventListener('focusin', focus);};
  }, []);
  return null;
}
