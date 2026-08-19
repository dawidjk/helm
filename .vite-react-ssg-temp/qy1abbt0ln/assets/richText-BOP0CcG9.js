import { jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { c as canonicalPath } from "../main.mjs";
function renderParagraph(p) {
  if (typeof p === "string") return p;
  const parts = [];
  let remaining = p.text;
  let keyIdx = 0;
  for (const link of p.links) {
    const idx = remaining.indexOf(link.phrase);
    if (idx === -1) continue;
    if (idx > 0) parts.push(remaining.slice(0, idx));
    parts.push(
      /* @__PURE__ */ jsx(Link, { to: canonicalPath(link.to), children: link.phrase }, keyIdx++)
    );
    remaining = remaining.slice(idx + link.phrase.length);
  }
  if (remaining) parts.push(remaining);
  return parts;
}
function paragraphText(p) {
  return typeof p === "string" ? p : p.text;
}
export {
  paragraphText as p,
  renderParagraph as r
};
