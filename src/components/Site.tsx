import {useEffect, useState, type ReactNode} from 'react';
import {NavLink as RouterNavLink, Link, useLocation} from 'react-router-dom';
import {Button} from '@astryxdesign/core/Button';
import LeadForm, {PORTAL_URL} from './LeadForm';
import ThemePicker from './ThemePicker';
import {canonicalPath} from '../lib/urls';
import {isRemarketingConfigured, openPrivacyChoices} from '../lib/adTracking';
import {businessPhone, linkedInUrl, serviceAreaText} from '../lib/business';

export function HelmMark({size = 28}: {size?: number}) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="16" cy="16" r="5" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line
          key={a}
          x1="16"
          y1="1"
          x2="16"
          y2="7"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          transform={`rotate(${a} 16 16)`}
        />
      ))}
    </svg>
  );
}

export function DirectionIcon({
  className,
  external = false,
}: {
  className?: string;
  external?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={external ? 'M5 15 15 5M7 5h8v8' : 'M4 10h12M11 5l5 5-5 5'}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      {to: '/helm-watch', label: 'Helm Watch'},
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
      {to: '/quiz', label: 'AI scam quiz'},
      {to: '/faq', label: 'FAQ'},
      {to: '/trust', label: 'Trust & Security'},
      {to: '/contact', label: 'Contact'},
      {to: '/free-scan', label: 'Free scan'},
    ],
  },
  {
    title: 'Legal',
    links: [
      {to: '/terms', label: 'Terms of Service'},
      {to: '/privacy', label: 'Privacy Policy'},
    ],
  },
];

/* Mobile drawer IA: one pinned conversion action, a short primary group
   (lanes + Pricing + Contact), then the rest of the taxonomy collapsed. */
const drawerPrimary = [
  ...lanes,
  {to: '/pricing', label: 'Pricing'},
  {to: '/contact', label: 'Contact'},
];

const drawerSecondary = [
  {
    title: 'Products',
    links: [
      {to: '/helm-mail', label: 'Helm Mail'},
      {to: '/helm-aware', label: 'Helm Aware'},
      {to: '/helm-ready', label: 'Helm Ready'},
      {to: '/helm-watch', label: 'Helm Watch'},
    ],
  },
  {
    title: 'Company',
    links: [
      {to: '/about', label: 'About'},
      {to: '/resources', label: 'Resources'},
      {to: '/quiz', label: 'AI scam quiz'},
      {to: '/faq', label: 'FAQ'},
      {to: '/trust', label: 'Trust & Security'},
    ],
  },
  {
    title: 'Legal',
    links: [
      {to: '/terms', label: 'Terms of Service'},
      {to: '/privacy', label: 'Privacy Policy'},
    ],
  },
];

export function SiteNav() {
  const {pathname} = useLocation();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  // Close the drawer on Escape so keyboard users are not trapped in it.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className="site-nav">
        <div className="wrap">
          <Link to="/" className="nav-brand">
            <HelmMark /> Helm
          </Link>
          <div className="nav-right">
            <div className="nav-links">
              {lanes.map((l) => (
                <RouterNavLink key={l.to} to={canonicalPath(l.to)} className={({isActive}) => (isActive ? 'active' : '')}>
                  {l.label}
                </RouterNavLink>
              ))}
              <RouterNavLink to="/pricing/" className={({isActive}) => (isActive ? 'active' : '')}>
                Pricing
              </RouterNavLink>
              <a href={`${PORTAL_URL}/login`}>Sign in</a>
              <Link to="/free-scan/" className="nav-cta">
                <Button label="Free scan" variant="primary" size="sm" />
              </Link>
            </div>
            <ThemePicker />
            <Link to="/free-scan/" className="nav-cta-mobile">
              <Button label="Free scan" variant="primary" size="sm" />
            </Link>
            <button
              className={`nav-burger${open ? ' open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>
      {open && (
        <div className="nav-drawer">
          <Link to="/free-scan/" className="drawer-cta">
            <Button label="Get my free scan" variant="primary" size="lg" />
          </Link>
          <div className="drawer-group">
            {drawerPrimary.map((l) => (
              <Link key={l.to} to={canonicalPath(l.to)}>
                {l.label}
              </Link>
            ))}
          </div>
          <div className="drawer-sections">
            {drawerSecondary.map((col) => (
              <details key={col.title} className="drawer-section">
                <summary>{col.title}</summary>
                <div className="drawer-section-links">
                  {col.links.map((l) => (
                    <Link key={l.to} to={canonicalPath(l.to)}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </div>
          <div className="drawer-foot">
            <a href={`${PORTAL_URL}/login`}>Sign in</a>
            <ThemePicker />
          </div>
        </div>
      )}
    </>
  );
}

export function ScrollCue() {
  return (
    <button
      type="button"
      className="scroll-cue reveal d3"
      aria-label="Scroll to the next section"
      onClick={(e) => {
        const next = (e.currentTarget.closest('.hero') as HTMLElement | null)?.nextElementSibling;
        if (next) {
          next.scrollIntoView({
            behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
            block: 'start',
          });
        }
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
    </button>
  );
}

export function CtaBand({
  title,
  sub,
  cta = 'Get my free scan',
  source,
  mode = 'scan',
}: {
  title: string;
  sub: string;
  cta?: string;
  source: string;
  /** 'scan' (default) shows the instant-scan LeadForm; 'book' links to /contact. */
  mode?: 'scan' | 'book';
}) {
  const mailSubject = mode === 'book' ? `${cta} (${source})` : 'Free security scan request';
  const mailBody =
    mode === 'book'
      ? "Hi Helm team,\n\nI'd like to book a call.\n\nCompany:\nBest phone (optional):\nAnything you want us to know up front:\n\nThanks!"
      : "Hi Helm team,\n\nI'd like the free security scan for my company.\n\nCompany:\nWebsite domain:\nBest phone (optional):\n\nThanks!";
  const contactPath =
    mode === 'book'
      ? `/contact?intent=findings-call&src=${encodeURIComponent(source)}`
      : '/contact';
  return (
    <section className="cta-band" id="contact">
      <div className="wrap">
        <h2 className="observe">{title}</h2>
        <p className="observe d1">{sub}</p>
        <div className="cta-form observe d2">
          {mode === 'book' ? (
            <Link to={canonicalPath(contactPath)}>
              <Button label={cta} variant="primary" size="lg" />
            </Link>
          ) : (
            <LeadForm source={source} cta={cta} />
          )}
          <div className="cta-alt">
            Have more to tell us?{' '}
            <Link to="/contact/">Use the full contact form <DirectionIcon /></Link>
            <br />
            Prefer email?{' '}
            <a
              href={`mailto:hello@helmsecured.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`}
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

/** Content remains visible by default; first-viewport hero motion is handled by .reveal. */
export function RevealManager() {
  return null;
}

export function SiteFooter() {
  const remarketingConfigured = isRemarketingConfigured();
  return (
    <footer className="site-footer">
      <div className="wrap footer-layout">
        <div className="footer-identity">
          <Link to="/" className="footer-brand">
            <HelmMark size={36} />
            <span>Helm Security</span>
          </Link>
          <p>Security that answers to your business.</p>
          <div className="footer-contact">
            <a href="mailto:hello@helmsecured.com">hello@helmsecured.com</a>
            <a href={`tel:${businessPhone.e164}`}>{businessPhone.display}</a>
            <span>Serving {serviceAreaText}</span>
          </div>
        </div>
        <nav className="footer-cols" aria-label="Footer navigation">
          {footerCols.map((col) => (
            <div key={col.title} className="footer-col">
              <div className="footer-col-title">{col.title}</div>
              {col.links.map((l) => (
                <Link key={l.to} to={canonicalPath(l.to)}>
                  {l.label}
                </Link>
              ))}
              {col.title === 'Legal' && remarketingConfigured && (
                <button type="button" className="footer-privacy-button" onClick={openPrivacyChoices}>
                  Privacy choices
                </button>
              )}
            </div>
          ))}
        </nav>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Helm Security LLC · New Jersey</span>
          <a href={linkedInUrl} aria-label="Helm Security on LinkedIn">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
