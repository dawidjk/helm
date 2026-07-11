import {createContext, useContext, useEffect, useState, type ReactNode} from 'react';

/**
 * Shared light/dark/auto theme state for the marketing site.
 *
 * The value is mapped to the Astryx <Theme mode> prop in App.tsx, so the
 * Astryx wrapper's `color-scheme` (and therefore every `light-dark()` token,
 * for both Astryx components and our marketing CSS that lives inside the
 * wrapper) flips to match. Astryx's own root sync mirrors the mode onto
 * <html data-theme> for browser chrome and content outside the wrapper.
 *
 * SSG/hydration-safe: the initial render always assumes Auto (matching the
 * static HTML). localStorage is read only in useEffect, after mount. A tiny
 * pre-paint script in index.html applies the saved choice to <html> before
 * first paint, so there is no flash while this effect catches up.
 */

export type ThemeMode = 'auto' | 'light' | 'dark';

const STORAGE_KEY = 'helm-theme';

type ThemeModeCtx = {mode: ThemeMode; setMode: (m: ThemeMode) => void};

const ThemeModeContext = createContext<ThemeModeCtx | null>(null);

export function useThemeMode(): ThemeModeCtx {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error('useThemeMode must be used within ThemeModeProvider');
  return ctx;
}

export function ThemeModeProvider({children}: {children: ReactNode}) {
  const [mode, setModeState] = useState<ThemeMode>('auto');

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === 'light' || v === 'dark' || v === 'auto') setModeState(v);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const setMode = (m: ThemeMode) => {
    setModeState(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
    } catch {
      /* ignore */
    }
  };

  return <ThemeModeContext.Provider value={{mode, setMode}}>{children}</ThemeModeContext.Provider>;
}
