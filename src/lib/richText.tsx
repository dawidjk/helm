import type {ReactNode} from 'react';
import {Link} from 'react-router-dom';
import {canonicalPath} from './urls';

/**
 * A paragraph that is either plain text, or text with one or more phrases
 * that should render as in-app links. Shared between long-form article
 * copy (articles.ts) and any other short-form copy (e.g. Faq.tsx) that
 * needs the same "plain text with a couple of linked phrases" shape.
 */
export type LinkedParagraph = {
  text: string;
  codePhrases?: string[];
  links: {phrase: string; to: string; className?: string; start?: number}[];
};

export type Paragraph = string | LinkedParagraph;

/**
 * Renders a Paragraph as plain text, or as text with the matched phrases
 * swapped for <Link> elements. Safe to drop directly inside a <p>.
 */
function renderCodePhrases(text: string, phrases: string[] = []): ReactNode {
  if (!phrases.length) return text;
  const parts: ReactNode[] = [];
  let remaining = text;
  while (remaining) {
    const next = phrases.map(phrase => ({phrase, index: remaining.indexOf(phrase)}))
      .filter(item => item.phrase.length > 0 && item.index >= 0).sort((a, b) => a.index - b.index || b.phrase.length - a.phrase.length)[0];
    if (!next) { parts.push(remaining); break; }
    if (next.index) parts.push(remaining.slice(0, next.index));
    parts.push(<code key={parts.length}>{next.phrase}</code>);
    remaining = remaining.slice(next.index + next.phrase.length);
  }
  return parts;
}

export function renderParagraph(p: Paragraph): ReactNode {
  if (typeof p === 'string') return p;
  const parts: ReactNode[] = [];
  let remaining = p.text;
  let consumed = 0;
  let keyIdx = 0;
  // Copy changes can move a phrase ahead of another linked phrase. Render
  // in text order without changing the source descriptors or their targets.
  const links = [...p.links].sort((a, b) => (a.start ?? p.text.indexOf(a.phrase)) - (b.start ?? p.text.indexOf(b.phrase)));
  for (const link of links) {
    const idx = link.start === undefined ? remaining.indexOf(link.phrase) : link.start - consumed;
    if (idx < 0 || remaining.slice(idx, idx + link.phrase.length) !== link.phrase) continue;
    if (idx > 0) parts.push(renderCodePhrases(remaining.slice(0, idx), p.codePhrases));
    parts.push(
      <Link key={keyIdx++} to={canonicalPath(link.to)} className={link.className} reloadDocument={link.to.startsWith('/downloads/')}>
        {link.phrase}
      </Link>
    );
    remaining = remaining.slice(idx + link.phrase.length);
    consumed += idx + link.phrase.length;
  }
  if (remaining) parts.push(renderCodePhrases(remaining, p.codePhrases));
  return parts;
}

/** Flattens a Paragraph back to plain text, for JSON-LD or other non-JSX contexts. */
export function paragraphText(p: Paragraph): string {
  return typeof p === 'string' ? p : p.text;
}
