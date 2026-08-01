import {useEffect, useRef, useState} from 'react';

const SCRIPT_URL =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
const DEVELOPMENT_SITE_KEY = '1x00000000000000000000AA';

interface TurnstileApi {
  render(
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      callback: (token: string) => void;
      'expired-callback': () => void;
      'error-callback': () => void;
      theme: 'auto';
    },
  ): string;
  remove(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.addEventListener(
      'load',
      () =>
        window.turnstile
          ? resolve(window.turnstile)
          : reject(new Error('Turnstile did not initialize')),
      {once: true},
    );
    script.addEventListener(
      'error',
      () => {
        script.remove();
        reject(new Error('Turnstile script failed to load'));
      },
      {once: true},
    );
    script.src = SCRIPT_URL;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  });
  // A failed load must not stick: drop the cached rejection so a remount or
  // resetKey bump retries with a fresh script tag instead of failing forever.
  scriptPromise.catch(() => {
    scriptPromise = null;
  });
  return scriptPromise;
}

export default function Turnstile({
  action,
  onToken,
  resetKey = 0,
}: {
  action: string;
  onToken: (token: string) => void;
  resetKey?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const callbackRef = useRef(onToken);
  const [unavailable, setUnavailable] = useState(false);
  callbackRef.current = onToken;

  const siteKey =
    import.meta.env.VITE_TURNSTILE_SITE_KEY ||
    (import.meta.env.DEV ? DEVELOPMENT_SITE_KEY : '');

  useEffect(() => {
    if (!siteKey || !containerRef.current) {
      setUnavailable(true);
      callbackRef.current('');
      return;
    }

    let active = true;
    let widgetId: string | null = null;
    setUnavailable(false);
    callbackRef.current('');

    void loadTurnstile()
      .then((api) => {
        if (!active || !containerRef.current) return;
        widgetId = api.render(containerRef.current, {
          sitekey: siteKey,
          action,
          theme: 'auto',
          callback: (token) => callbackRef.current(token),
          'expired-callback': () => callbackRef.current(''),
          'error-callback': () => callbackRef.current(''),
        });
      })
      .catch(() => {
        if (active) {
          setUnavailable(true);
          callbackRef.current('');
        }
      });

    return () => {
      active = false;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [action, resetKey, siteKey]);

  return (
    <div>
      <div ref={containerRef} />
      {unavailable && (
        <p className="lead-form-error" role="alert">
          The security check is unavailable. Please refresh and try again.
        </p>
      )}
    </div>
  );
}

