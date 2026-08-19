import { manufacturing } from "./lanes-BgR10_g3.js";
const BOOK_CTA = {
  title: "Need to check a requirement before you decide?",
  sub: "Send the question or vendor-security form. A Helm executive will review it and respond during business hours.",
  label: "Talk to us"
};
const BOOK_CTA_CMMC = {
  title: manufacturing.cta.title,
  sub: manufacturing.cta.sub,
  label: manufacturing.cta.label
};
function bookCta(mode) {
  return mode === "book-cmmc" ? BOOK_CTA_CMMC : BOOK_CTA;
}
export {
  BOOK_CTA as B,
  bookCta as b
};
