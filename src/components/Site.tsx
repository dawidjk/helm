import {useEffect, type ReactNode} from 'react';
import {NavLink as RouterNavLink, Link, useLocation} from 'react-router-dom';
import {Button} from '@astryxdesign/core/Button';
import LeadForm from './LeadForm';

export function HelmMark({size = 28}: {size?: number}) {
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

const footerCols = [
  {
    title: 'Products',
    links: [
      {to: '/helm-mail', label: 'Helm Mail'},
      {to: '/helm-aware', label: 'Helm Aware'},
      {to: '/helm-ready', label: 'Helm Ready'},
      {to: '/pricing', label: 'Pricing'},
    ],
  },
  {
    title: 'Industries',
    links: lanes.map((l) => ({to: l.to, label: l.label})),
  },
  {
    title: 'Company',
    links: [
      {to: '/about', label: 'About'},
      {to: '/resources', label: 'Resources'},
      {to: '/faq', label: 'FAQ'},
      {to: '/contact', label: 'Contact'},
      {to: '/free-scan', label: 'Free scan'},
    ],
  },
];

export function SiteNav() {
  const {pathname} = useLocation();
  return (
    <>
      {pathname === '/manufacturing' && (
        <div className="urgency">
          CMMC Phase 2 enforcement begins Nov 10, 2026 — fewer than 2% of
          defense contractors are certified. <a href="#contact">Check your readiness →</a>
        </div>
      )}
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
            <RouterNavLink to="/pricing" className={({isActive}) => (isActive ? 'active' : '')}>
              Pricing
            </RouterNavLink>
            <Link to="/free-scan" className="nav-cta">
              <Button label="Free scan" variant="primary" size="sm" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export function CtaBand({
  title,
  sub,
  cta = 'Get my free scan',
  source,
}: {
  title: string;
  sub: string;
  cta?: string;
  source: string;
}) {
  return (
    <section className="cta-band" id="contact">
      <div className="wrap">
        <h2 className="observe">{title}</h2>
        <p className="observe">{sub}</p>
        <div className="cta-form observe">
          <LeadForm source={source} cta={cta} />
          <div className="cta-alt">
            Have more to tell us? <Link to="/contact">Use the full contact form →</Link>
            <br />
            Prefer email?{' '}
            <a
              href={`mailto:hello@helmsecured.com?subject=${encodeURIComponent('Free security scan request')}&body=${encodeURIComponent(
                "Hi Helm team,\n\nI'd like the free security scan for my company.\n\nCompany:\nWebsite domain:\nBest phone (optional):\n\nThanks!",
              )}`}
            >
              hello@helmsecured.com
            </a>
          </div>
        </div>
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

/** Adds .in to .observe elements as they scroll into view (Apple-style reveals). */
export function RevealManager() {
  const {pathname} = useLocation();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.observe'));
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add('in');
            io.unobserve(e.target);
          }
        }
      },
      {threshold: 0.15, rootMargin: '0px 0px -8% 0px'},
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div>
          © {new Date().getFullYear()} HelmSecure LLC · New Jersey
          <br />
          Security that answers to your business.
          <br />
          <a href="mailto:hello@helmsecured.com">hello@helmsecured.com</a>
        </div>
        <div className="footer-cols">
          {footerCols.map((col) => (
            <div key={col.title} className="footer-col">
              <div className="footer-col-title">{col.title}</div>
              {col.links.map((l) => (
                <Link key={l.to} to={l.to}>
                  {l.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
