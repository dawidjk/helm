import {useCallback, useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useVariant, useVariantList} from './VariantContext';
import type {Variant} from './variants';
import './ab.css';

const COLLAPSE_KEY = 'helm-ab-collapsed';

/* Icons: single 16px grid, 1.5px stroke, round caps — one drawing voice. */

function IconColumns() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1.75" y="2.75" width="12.5" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 2.75v10.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function IconCollapse() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 5.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface CompareState {
  a: string;
  b: string;
}

function paneSrc(pathname: string, variantId: string): string {
  return `${pathname}?variant=${encodeURIComponent(variantId)}&ab=1`;
}

function ComparePane({
  side,
  variantId,
  variants,
  pathname,
  onPick,
}: {
  side: 'A' | 'B';
  variantId: string;
  variants: readonly Variant[];
  pathname: string;
  onPick: (id: string) => void;
}) {
  const active = variants.find((v) => v.id === variantId);
  return (
    <section className="ab-pane" aria-label={`Pane ${side}: ${active?.label ?? variantId}`}>
      <header className="ab-pane-head">
        <span className="ab-pane-badge" aria-hidden="true">{side}</span>
        <select
          className="ab-pane-select"
          aria-label={`Variant shown in pane ${side}`}
          value={variantId}
          onChange={(e) => onPick(e.target.value)}
        >
          {variants.map((v) => (
            <option key={v.id} value={v.id}>
              {v.label}
            </option>
          ))}
        </select>
        {active?.description ? <span className="ab-pane-note">{active.description}</span> : null}
      </header>
      <iframe src={paneSrc(pathname, variantId)} title={`Pane ${side}: ${active?.label ?? variantId}`} />
    </section>
  );
}

export default function ComparisonBar() {
  const {variantId, setVariantId} = useVariant();
  const variants = useVariantList();
  const {pathname} = useLocation();

  // This component only ever mounts in the browser, so reading storage in the
  // initializer is safe (and avoids a collapsed-state flash).
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(COLLAPSE_KEY) === '1';
    } catch {
      return false;
    }
  });
  const [compare, setCompare] = useState<CompareState | null>(null);

  const collapse = useCallback((next: boolean) => {
    setCollapsed(next);
    if (next) setCompare(null); // no controls on screen → no orphaned overlay
    try {
      sessionStorage.setItem(COLLAPSE_KEY, next ? '1' : '0');
    } catch {
      // Storage unavailable — collapse still works for this page view.
    }
  }, []);

  const toggleCompare = useCallback(() => {
    setCompare((open) => {
      if (open) return null;
      const other = variants.find((v) => v.id !== variantId);
      return {a: variantId, b: (other ?? variants[0]).id};
    });
  }, [variants, variantId]);

  // Offset the page (and the sticky site nav) while the bar is on screen.
  useEffect(() => {
    if (collapsed) return;
    document.body.classList.add('ab-bar-active');
    return () => document.body.classList.remove('ab-bar-active');
  }, [collapsed]);

  // Compare mode: lock page scroll, close on Escape.
  useEffect(() => {
    if (!compare) return;
    document.body.classList.add('ab-compare-open');
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setCompare(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.classList.remove('ab-compare-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [compare]);

  if (collapsed) {
    return (
      <button type="button" className="ab-chip" onClick={() => collapse(false)}>
        <IconColumns />
        <span>Variants</span>
      </button>
    );
  }

  return (
    <>
      <div className="ab-bar" role="toolbar" aria-label="Design variants">
        <span className="ab-brand">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 1.75l5.25 2.6v3.4c0 3.1-2.1 5.6-5.25 6.5-3.15-.9-5.25-3.4-5.25-6.5v-3.4L8 1.75z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span>A/B</span>
        </span>
        <div className="ab-seg" role="group" aria-label="Active variant">
          {variants.map((v) => (
            <button
              key={v.id}
              type="button"
              aria-pressed={v.id === variantId}
              title={v.description || undefined}
              onClick={() => setVariantId(v.id)}
            >
              {v.label}
            </button>
          ))}
        </div>
        <div className="ab-actions">
          <button type="button" className="ab-ghost" aria-pressed={compare !== null} onClick={toggleCompare}>
            {compare ? <IconClose /> : <IconColumns />}
            <span>{compare ? 'Exit compare' : 'Compare'}</span>
          </button>
          <button type="button" className="ab-icon" aria-label="Hide variant bar" onClick={() => collapse(true)}>
            <IconCollapse />
          </button>
        </div>
      </div>
      {compare ? (
        <div className="ab-compare" role="region" aria-label="Side-by-side variant comparison">
          <ComparePane
            side="A"
            variantId={compare.a}
            variants={variants}
            pathname={pathname}
            onPick={(id) => setCompare({...compare, a: id})}
          />
          <ComparePane
            side="B"
            variantId={compare.b}
            variants={variants}
            pathname={pathname}
            onPick={(id) => setCompare({...compare, b: id})}
          />
        </div>
      ) : null}
    </>
  );
}
