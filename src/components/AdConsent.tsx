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
  const [choice, setChoice] = useState(getRemarketingConsent);
  const [open, setOpen] = useState(configured && choice === null);

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
        <div className="ad-consent-title">Your privacy choice</div>
        <p>
          Helm can use Meta&apos;s advertising tool to measure visits and show
          useful follow-up ads. It stays off unless you allow it. We never send
          your form entries or scanned domain to Meta. <Link to="/privacy/">Details</Link>
        </p>
      </div>
      <div className="ad-consent-actions">
        <button type="button" className="ad-consent-decline" onClick={() => decide('declined')}>
          No thanks
        </button>
        <button type="button" className="ad-consent-accept" onClick={() => decide('accepted')}>
          Allow remarketing
        </button>
      </div>
    </section>
  );
}
