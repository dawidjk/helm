import {manufacturing} from './lanes';

/**
 * The two book-a-call CTA copy blocks used by pages whose reader has already
 * self-selected into a consultative journey (item 105). No new copy is written
 * here: both blocks are the wording already live on the site, single-sourced so
 * an edit lands everywhere it is used rather than drifting.
 *
 * BOOK_CTA is the general one, first written for /trust, which asks the reader
 * to send a question or a questionnaire. Use it when the page could be read by
 * an insurance, HIPAA or general-security reader.
 *
 * BOOK_CTA_CMMC is the manufacturing lane's own CTA, re-exported from lanes.ts.
 * It names the 110 controls and an assessor or a prime, so it fits only pages
 * whose reader is a defense contractor. Do not widen it: on a HIPAA page the
 * prime-contractor line is wrong.
 */
export const BOOK_CTA = {
  title: 'Have more questions?',
  sub: 'Send us your vendor-security questionnaire or ask directly: a human replies within one business day.',
  label: 'Talk to us',
};

export const BOOK_CTA_CMMC = {
  title: manufacturing.cta.title,
  sub: manufacturing.cta.sub,
  label: manufacturing.cta.label,
};

export type BookCtaMode = 'book' | 'book-cmmc';

export function bookCta(mode: BookCtaMode) {
  return mode === 'book-cmmc' ? BOOK_CTA_CMMC : BOOK_CTA;
}
