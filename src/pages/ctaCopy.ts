import {manufacturing} from './lanes';
import {bookingCallCopy} from './bookingCallCopy';

/**
 * Shared booking invitations for general and manufacturing articles.
 *
 * BOOK_CTA uses the reviewed general booking invitation.
 *
 * BOOK_CTA_CMMC is the manufacturing lane's own CTA, re-exported from lanes.ts.
 * It names the 110 controls and an assessor or a prime, so it fits only pages
 * whose reader is a defense contractor. Do not widen it: on a HIPAA page the
 * prime-contractor line is wrong.
 *
 * Terminology note: the public-domain tool is called the "free scan". Do not
 * introduce synonyms like "free check", "free assessment", or "free email
 * scan" in CTA labels; one noun, one concept.
 */
export const BOOK_CTA = bookingCallCopy;

export const BOOK_CTA_CMMC = {
  title: manufacturing.cta.title,
  sub: manufacturing.cta.sub,
  label: manufacturing.cta.label,
};

export type BookCtaMode = 'book' | 'book-cmmc';

export function bookCta(mode: BookCtaMode) {
  return mode === 'book-cmmc' ? BOOK_CTA_CMMC : BOOK_CTA;
}
