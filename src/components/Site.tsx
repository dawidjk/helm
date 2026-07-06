import type {ReactNode} from 'react';
import {NavLink as RouterNavLink, Link} from 'react-router-dom';
import {Button} from '@astryxdesign/core/Button';

export function HelmMark({size = 26}: {size?: number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="13" stroke="#4C8DFF" strokeWidth="2.5" />
      <circle cx="16" cy="16" r="5" fill="#4C8DFF" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line
          key={a}
          x1="16"
          y1="1"
          x2="16"
          y2="7"
          stroke="#4C8DFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${a} 16 16)`}
        />
      ))}
    </svg>
  );
}

const lanes = [
  {to: '/manufacturing', label: 'Manufacturing & Defense'},
  {to: '/professional-services', label: 'Professional Services'},
  {to: '/contractors', label: 'Contractors & Trades'},
];

export function SiteNav() {
  return (
    <>
      <div className="urgency">
        CMMC Phase 2 enforcement begins Nov 10, 2026 — fewer than 2% of defense
        contractors are certified. <Link to="/manufacturing">Check your readiness →</Link>
      </div>
      <nav className="site-nav">
        <div className="wrap">
          <Link to="/" className="nav-brand">
            <HelmMark /> Helm
          </Link>
          <div className="nav-links">
            {lanes.map((l) => (
              <RouterNavLink key={l.to} to={l.to} className={({isActive}) => (isActive ? 'active' : '')}>
                {l.label}
              </RouterNavLink>
            ))}
            <a href="#contact" className="nav-cta">
              <Button label="Free assessment" variant="primary" size="sm" />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export function CtaBand({
  title,
  sub,
  cta = 'Get your free security assessment',
}: {
  title: string;
  sub: string;
  cta?: string;
}) {
  return (
    <section className="cta-band" id="contact">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{sub}</p>
        <a href="mailto:hello@helmsecure.com">
          <Button label={cta} variant="primary" size="lg" />
        </a>
      </div>
    </section>
  );
}

export function Band({
  children,
  variant,
  id,
}: {
  children: ReactNode;
  variant?: 'light' | 'raised';
  id?: string;
}) {
  return (
    <section id={id} className={`band${variant ? ` ${variant}` : ''}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          © {new Date().getFullYear()} HelmSecure LLC · New Jersey
          <br />
          Security that answers to your business.
        </div>
        <div className="footer-links">
          {lanes.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
          <a href="mailto:hello@helmsecure.com">hello@helmsecure.com</a>
        </div>
      </div>
    </footer>
  );
}
