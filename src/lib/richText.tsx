import type {ReactNode} from 'react';
import {Link} from 'react-router-dom';

/**
 * A paragraph that is either plain text, or text with one or more phrases
 * that should render as in-app links. Shared between long-form article
 * copy (articles.ts) and any other short-form copy (e.g. Faq.tsx) that
 * needs the same "plain text with a couple of linked phrases" shape.
 */
export type LinkedParagraph = {
  text: string;
  links: {phrase: string; to: string}[];
};

export type Paragraph = string | LinkedParagraph;

/**
 * Renders a Paragraph as plain text, or as text with the matched phrases
 * swapped for <Link> elements. Safe to drop directly inside a <p>.
 */
export function renderParagraph(p: Paragraph): ReactNode {
  if (typeof p === 'string') return p;
  const parts: ReactNode[] = [];
  let remaining = p.text;
  let keyIdx = 0;
  for (const link of p.links) {
    const idx = remaining.indexOf(link.phrase);
    if (idx === -1) continue;
    if (idx > 0) parts.push(remaining.slice(0, idx));
    parts.push(
      <Link key={keyIdx++} to={link.to}>
        {link.phrase}
      </Link>
    );
    remaining = remaining.slice(idx + link.phrase.length);
  }
  if (remaining) parts.push(remaining);
  return parts;
}

/** Flattens a Paragraph back to plain text, for JSON-LD or other non-JSX contexts. */
export function paragraphText(p: Paragraph): string {
  return typeof p === 'string' ? p : p.text;
}
