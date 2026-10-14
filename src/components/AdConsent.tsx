import {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
  getRemarketingConsent,
  isRemarketingConfigured,
  setRemarketingConsent,
  stopMetaTracking,
  trackMetaPageView,
} from '../lib/adTracking';

export default function AdConsent() {
  const {pathname} = useLocation();
  const configured = isRemarketingConfigured();
  // Match static HTML on the first client render. Reading a saved choice in
  // the initializer would remove the banner during hydration and force React
  // to rebuild the root for returning visitors.
  const [choice, setChoice] = useState<ReturnType<typeof getRemarketingConsent>>(null);
  const [open, setOpen] = useState(configured);

  useEffect(() => {
    if (!configured) return;
    const savedChoice = getRemarketingConsent();
    setChoice(savedChoice);
    setOpen(savedChoice === null);
  }, [configured]);

  useEffect(() => {
    if (!configured) return;
    const reopen = () => setOpen(true);
    document.addEventListener('helm:privacy-choices', reopen);
    return () => document.removeEventListener('helm:privacy-choices', reopen);
  }, [configured]);

  useEffect(() => {
    if (configured && choice === 'accepted') {
      trackMetaPageView(pathname);
    }
  }, [choice, configured, pathname]);

  if (!configured || !open) return null;

  const decide = (next: 'accepted' | 'declined') => {
    setRemarketingConsent(next);
    setChoice(next);
    if (next === 'declined') stopMetaTracking();
    setOpen(false);
  };

  return (
    <section className="ad-consent" aria-label="Advertising privacy choices">
      <div>
        <div className="ad-consent-title">Advertising cookies</div>
        <p>
          We use optional advertising cookies to measure ad performance and show you ads based on your visit.
          You can change your choice anytime. <Link to="/privacy/">Privacy details</Link>
        </p>
      </div>
      <div className="ad-consent-actions">
        <button type="button" className="ad-consent-decline" onClick={() => decide('declined')}>
          Reject advertising cookies
        </button>
        <button type="button" className="ad-consent-accept" onClick={() => decide('accepted')}>
          Allow advertising cookies
        </button>
      </div>
    </section>
  );
}
