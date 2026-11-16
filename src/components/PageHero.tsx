import type {ComponentPropsWithoutRef} from 'react';
import './PageHero.css';

/** Shared header layout; each page retains its own artwork, content and actions. */
export default function PageHero({className, ...props}: ComponentPropsWithoutRef<'header'>) {
  return <header {...props} className={`${className ?? ''} page-hero`.trim()} />;
}
