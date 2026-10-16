import {useEffect, useRef, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {getCookiePreferences, setCookiePreferences, resetVolatilePreferences, needsAnalyticsChoiceRefresh, PREFERENCES_EVENT, PREFERENCES_KEY, LEGACY_AD_KEY, type CookiePreferences} from '../lib/cookiePreferences';
import {syncTrackingPreferences, trackPage} from '../lib/trackingFrames';

const initial: CookiePreferences = {version: 2, analytics: false, advertising: false, decided: false};
function preferenceDraft(): CookiePreferences {
  const preferences = getCookiePreferences();
  // Keep earlier choices operating within their original scope, while asking
  // explicitly before adding HubSpot to an earlier Google-only permission.
  return {...preferences, analytics: needsAnalyticsChoiceRefresh() ? false : preferences.analytics};
}
function CookieCategory({name, descriptionId, children, checked, disabled, onChange}: {
  name: string;
  descriptionId: string;
  children: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  return <div className="cookie-category">
    <div className="cookie-category-head">
      <label><input type="checkbox" checked={checked} disabled={disabled} onChange={event => onChange?.(event.target.checked)} aria-describedby={descriptionId} />{name}</label>
      <button type="button" className="cookie-details-toggle" aria-label={`${expanded ? 'Hide' : 'Show'} details: ${name}`} aria-expanded={expanded} aria-controls={descriptionId} onClick={() => setExpanded(!expanded)}>{expanded ? 'Hide details' : 'Details'}</button>
    </div>
    <p id={descriptionId} hidden={!expanded}>{children}</p>
  </div>;
}
export default function AdConsent() {
  const {pathname} = useLocation();
  const [preferences, setPreferences] = useState(initial);
  // Keep the SSG and first client render hidden until storage is checked.
  const [banner, setBanner] = useState(false);
  const [panel, setPanel] = useState(false);
  const [draft, setDraft] = useState(initial);
  const dialog = useRef<HTMLDialogElement>(null);
  const close = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const update = () => {
      const next = getCookiePreferences();
      syncTrackingPreferences();
      setPreferences(next); setBanner(!next.decided || needsAnalyticsChoiceRefresh());
    };
    const storage = (event: StorageEvent) => {
      if (event.key === PREFERENCES_KEY || event.key === LEGACY_AD_KEY || event.key === null) {resetVolatilePreferences(); update();}
    };
    const open = () => {opener.current = document.activeElement as HTMLElement; setDraft(preferenceDraft()); setPanel(true);};
    update(); document.addEventListener(PREFERENCES_EVENT, update);
    document.addEventListener('helm:privacy-choices', open); window.addEventListener('storage', storage);
    return () => {document.removeEventListener(PREFERENCES_EVENT, update); document.removeEventListener('helm:privacy-choices', open); window.removeEventListener('storage', storage);};
  }, []);
  useEffect(() => {
    syncTrackingPreferences();
    trackPage('analytics', pathname); trackPage('advertising', pathname);
  }, [pathname, preferences.analytics, preferences.advertising, preferences.analyticsScope]);
  useEffect(() => {
    const element = dialog.current; if (!element) return;
    if (panel && !element.open) {element.showModal(); close.current?.focus();}
    else if (!panel && element.open) {
      element.close();
      const target = opener.current?.isConnected ? opener.current : document.getElementById('main-content');
      target?.focus({preventScroll: true});
    }
  }, [panel]);
  const manage = () => {opener.current = document.activeElement as HTMLElement; setDraft(preferenceDraft()); setPanel(true);};
  const save = (analytics: boolean, advertising: boolean) => {
    setCookiePreferences(analytics, advertising); setBanner(false); setPanel(false);
    if (!panel) requestAnimationFrame(() => document.getElementById('main-content')?.focus({preventScroll: true}));
  };
  return (
    <>
      {banner && <section className="ad-consent" aria-label="Cookie choices">
        <div>
          <div className="ad-consent-title">Cookies</div>
          <p>We use cookies to make our site work and to analyze how it's used. You can choose to accept all cookies or manage your preferences below.</p>
          <noscript><p>Optional cookies are off when JavaScript is unavailable.</p></noscript>
        </div>
        <div className="ad-consent-actions">
          <button type="button" onClick={() => save(true, true)}>Accept all</button>
          <button type="button" onClick={manage}>Manage preferences</button>
          <button type="button" onClick={() => save(false, false)}>Reject optional</button>
        </div>
      </section>}
      <dialog ref={dialog} className="cookie-dialog" aria-labelledby="cookie-preferences-title" aria-describedby="cookie-preferences-description" onCancel={event => {event.preventDefault(); setPanel(false);}} onKeyDown={event => {
        if (event.key !== 'Tab') return;
        const nodes = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button, input:not(:disabled), a[href]')).filter(element => element.checkVisibility());
        const target = event.shiftKey ? nodes.at(-1) : nodes[0];
        if ((event.shiftKey && document.activeElement === nodes[0]) || (!event.shiftKey && document.activeElement === nodes.at(-1))) {event.preventDefault(); target?.focus();}
      }}>
        <div className="cookie-dialog-head">
          <h2 id="cookie-preferences-title">Cookie preferences</h2>
          <button ref={close} type="button" onClick={() => setPanel(false)}>Close</button>
        </div>
        <p id="cookie-preferences-description">Choose which optional cookies and similar storage this site can use. You can change or withdraw your choices through Privacy choices in the footer.</p>
        <CookieCategory name="Necessary (always on)" descriptionId="cookie-necessary-description" checked disabled>Supports your privacy choice, theme preference and secure form submission. The customer portal uses a separate sign-in cookie.</CookieCategory>
        <CookieCategory name="Analytics" descriptionId="cookie-analytics-description" checked={draft.analytics} onChange={analytics => setDraft({...draft, analytics})}>Allows Google Analytics and HubSpot to help us understand which pages people use and which actions lead to an enquiry. These services can receive page, browser, device and approximate-location information, cookie identifiers and your IP address. A random identifier can connect scan and enquiry steps within this browser tab.</CookieCategory>
        <CookieCategory name="Advertising" descriptionId="cookie-advertising-description" checked={draft.advertising} onChange={advertising => setDraft({...draft, advertising})}>Helps measure advertising and show you ads based on your visit. Advertising services may receive page, browser and device information and your IP address. They may connect that information with their own account or browser records.</CookieCategory>
        <p><Link to="/privacy/" onClick={() => setPanel(false)}>Privacy policy</Link> describes the services involved and the data they receive.</p>
        <p>If your browser blocks storage, your choice applies only to this page.</p>
        <div className="cookie-dialog-actions">
          <button type="button" onClick={() => save(true, true)}>Accept all</button>
          <button type="button" onClick={() => save(false, false)}>Reject optional</button>
          <button type="button" onClick={() => save(draft.analytics, draft.advertising)}>Save preferences</button>
        </div>
      </dialog>
    </>
  );
}
