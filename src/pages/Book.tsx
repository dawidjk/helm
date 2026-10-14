import {useEffect, useRef, useState, type FormEvent} from 'react';
import {Link} from 'react-router-dom';
import {ActionLink, Band} from '../components/Site';
import BrandHeroBackdrop from '../components/BrandHeroBackdrop';
import Meta from '../components/Meta';
import {BOOKING_DESTINATION, BOOKING_PATH, BOOKING_PREVIEW_ENABLED, verifiedBookingSettings} from '../lib/booking';
import {companySizes} from '../lib/companySizes';
import {bookingCopy as copy} from './bookingCopy';
import './Book.css';

export default function Book() {
  return (
    <>
      <Meta title={copy.metaTitle} desc={copy.metaDescription} path={BOOKING_PATH} noIndex={BOOKING_PREVIEW_ENABLED} />
      <header className="hero lane brand-hero booking-hero">
        <BrandHeroBackdrop />
        <div className="wrap">
          {BOOKING_PREVIEW_ENABLED && <p className="booking-preview-note">{copy.previewNotice}</p>}
          <h1 className="hero-title-compact">{copy.pageTitle}</h1>
          <p className="sub">{copy.intro}</p>
          {BOOKING_DESTINATION ? (
            <div className="booking-action">
              <a className="action-link action-link-lg" href={BOOKING_DESTINATION}
                target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
                aria-describedby="booking-external-hint">
                {BOOKING_PREVIEW_ENABLED ? copy.previewBookingAction : copy.bookingAction}
              </a>
              <p id="booking-external-hint" className="booking-hint">
                {BOOKING_PREVIEW_ENABLED ? copy.previewBookingExternalHint : copy.bookingExternalHint}
              </p>
            </div>
          ) : (
            <div className="booking-unavailable">
              <h2>{copy.bookingUnavailableTitle}</h2>
              <p>{copy.bookingUnavailableBody}</p>
              <ActionLink to="/contact/" label={copy.contactLabel} />
            </div>
          )}
        </div>
      </header>
      <Band>
        <div className="booking-details">
          <section aria-labelledby="booking-purpose">
            <h2 id="booking-purpose">{copy.callPurposeTitle}</h2>
            <p>{copy.callPurposeBody}</p>
            <p>{copy.scopeBody}</p>
          </section>
          {(BOOKING_PREVIEW_ENABLED || (verifiedBookingSettings?.companySizeRequired && verifiedBookingSettings.discussionOptional)) && <section aria-labelledby="booking-qualification">
            <h2 id="booking-qualification">{copy.qualificationTitle}</h2>
            <p>{copy.qualificationBody}</p>
            <p>{copy.discussionHelp}</p>
          </section>}
        </div>
      </Band>
      <Band variant="raised">
        <div className="booking-next">
          <h2>{copy.scanTitle}</h2>
          <p>{copy.scanBody}</p>
          <ActionLink to="/free-scan/" label={copy.scanLabel} />
        </div>
      </Band>
      <Band>
        <div className="booking-contact">
          <h2>{copy.contactTitle}</h2>
          <Link to="/contact/">{copy.contactLabel}</Link>
        </div>
      </Band>
    </>
  );
}

/** Development-only interaction fixture. No calendar, time slots or network writes. */
export function BookingCalendarPreview() {
  const [complete, setComplete] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => { if (complete) headingRef.current?.focus(); }, [complete]);
  function continuePreview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setComplete(true);
  }
  return (
    <>
      <Meta title={copy.previewCalendarTitle} desc={copy.previewCalendarBody}
        path="/booking-preview/calendar/" noIndex />
      <Band>
        <div className="booking-fixture">
          <p className="booking-preview-note">{copy.previewNotice}</p>
          {complete ? (
            <div>
              <h1 ref={headingRef} tabIndex={-1}>{copy.previewCompletionTitle}</h1>
              <p>{copy.previewCompletionBody}</p>
              <ActionLink to={BOOKING_PATH} label={copy.previewReturnLabel} />
            </div>
          ) : (
            <>
              <h1>{copy.previewCalendarTitle}</h1>
              <p>{copy.previewCalendarBody}</p>
              <form className="booking-fixture-form" onSubmit={continuePreview}>
                <label htmlFor="preview-company-size">{copy.companySizeLabel}</label>
                <select id="preview-company-size" name="companySize" required defaultValue=""
                  aria-describedby="preview-company-size-help">
                  <option value="" disabled>{copy.companySizePlaceholder}</option>
                  {companySizes.map(size => <option value={size} key={size}>{size}</option>)}
                </select>
                <p id="preview-company-size-help" className="booking-hint">{copy.companySizeRequiredHelp}</p>
                <label htmlFor="preview-discussion">{copy.discussionLabel}</label>
                <textarea id="preview-discussion" name="discussion" maxLength={500} rows={4}
                  placeholder={copy.discussionPlaceholder} aria-describedby="preview-discussion-help" />
                <p id="preview-discussion-help" className="booking-hint">{copy.discussionHelp}</p>
                <button className="action-link action-link-lg" type="submit">{copy.previewSubmitLabel}</button>
              </form>
            </>
          )}
        </div>
      </Band>
    </>
  );
}
