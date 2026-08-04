import {useEffect, useState} from 'react';
import {useThemeMode, type ThemeMode} from './ThemeMode';

/**
 * Explicit three-mode theme control in the nav: Auto (follow system), Light,
 * and Dark. The actual theme is applied by ThemeModeProvider / the Astryx
 * <Theme> wrapper; this control only reads and updates that shared state.
 *
 * SSG/hydration-safe: renders the Auto default until mounted (matching the
 * static HTML), then reflects the real stored mode.
 */

const LABEL: Record<ThemeMode, string> = {auto: 'Auto', light: 'Light', dark: 'Dark'};
const MODES: ThemeMode[] = ['auto', 'light', 'dark'];

function Icon({mode}: {mode: ThemeMode}) {
  if (mode === 'light') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8" />
        <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M12 2.5v2.5M12 19v2.5M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M2.5 12h2.5M19 12h2.5M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8" />
        </g>
      </svg>
    );
  }
  if (mode === 'dark') {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M20 14.2A8 8 0 1 1 9.8 4 6.2 6.2 0 0 0 20 14.2Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  // auto: half-filled disc (contrast)
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 3.5a8.5 8.5 0 0 0 0 17Z" fill="currentColor" />
    </svg>
  );
}

export default function ThemePicker() {
  const {mode, setMode} = useThemeMode();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  // Before mount, show the Auto default so SSR/hydration markup matches.
  const current = mounted ? mode : 'auto';

  return (
    <div className="theme-picker" role="group" aria-label="Color theme">
      {MODES.map((option) => (
        <button
          key={option}
          type="button"
          className={`theme-choice${current === option ? ' active' : ''}`}
          onClick={() => setMode(option)}
          aria-pressed={current === option}
          title={`${LABEL[option]} theme`}
        >
          <Icon mode={option} />
          <span>{LABEL[option]}</span>
        </button>
      ))}
    </div>
  );
}
