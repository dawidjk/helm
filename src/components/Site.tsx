import {useEffect, useRef, useState, type ReactNode, type SyntheticEvent} from 'react';
import {NavLink as RouterNavLink, Link, useLocation} from 'react-router-dom';
import {PORTAL_URL} from './LeadForm';
import ThemePicker from './ThemePicker';
import {canonicalPath} from '../lib/urls';
import {openPrivacyChoices} from '../lib/adTracking';
import {BOOKING_DESTINATION, BOOKING_ENABLED} from '../lib/booking';
import {bookingCopy} from '../pages/bookingCopy';
import {bookingCallCopy} from '../pages/bookingCallCopy';
import {
  businessPhone,
  facebookUrl,
  instagramUrl,
  linkedInUrl,
  serviceAreaText,
} from '../lib/business';
import './SiteNav.css';
import './BookingActions.css';

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

export function ActionLink({
  to,
  label,
  size = 'lg',
  className = '',
}: {
  to: string;
  label: string;
  size?: 'sm' | 'lg';
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`action-link action-link-${size}${className ? ` ${className}` : ''}`}
    >
      {label}
    </Link>
  );
}

export function BookCallLink({label = bookingCopy.navLabel, size = 'lg', className = ''}: {
  label?: string; size?: 'sm' | 'lg'; className?: string;
}) {
  return BOOKING_ENABLED && BOOKING_DESTINATION ? (
    <a href={BOOKING_DESTINATION} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer"
      className={`action-link action-link-${size}${className ? ` ${className}` : ''}`}>
      {label}<span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : null;
}

const lanes = [
  {to: '/manufacturing', label: 'Manufacturing & Defense'},
  {to: '/professional-services', label: 'Professional Services'},
  {to: '/law-firms', label: 'Law Firms'},
  {to: '/accounting-firms', label: 'Accounting & Tax Firms'},
  {to: '/medical-practices', label: 'Medical & Dental Practices'},
  {to: '/contractors', label: 'Contractors & Trades'},
];

const services = [
  {to: '/helm-core', label: 'Helm Core', clue: 'Complete managed protection'},
  {to: '/helm-command', label: 'Helm Command', clue: 'Security program ownership'},
  {to: '/secure-ai-adoption', label: 'Secure AI Adoption', clue: 'Scoped workflow consulting'},
];

function keepDesktopMenusExclusive(event: SyntheticEvent<HTMLDetailsElement>) {
  const openedMenu = event.currentTarget;
  if (!openedMenu.open) return;

  openedMenu
    .closest('.nav-links')
    ?.querySelectorAll<HTMLDetailsElement>('.nav-menu[open]')
    .forEach((menu) => {
      if (menu !== openedMenu) menu.open = false;
    });
}

const footerCols = [
  {
    title: 'Services',
    links: [
      {to: '/helm-core', label: 'Helm Core'},
      {to: '/helm-command', label: 'Helm Command'},
      {to: '/secure-ai-adoption', label: 'Secure AI Adoption'},
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
      {to: '/service-areas/', label: 'Service areas'},
      {to: '/about', label: 'About'},
      {to: '/resources', label: 'Resources'},
      {to: '/blog', label: 'Blog'},
      {to: '/quiz', label: 'Email and scam check'},
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

const drawerSecondary = [
  {
    title: 'Company',
    links: [
      {to: '/about', label: 'About'},
      {to: '/faq', label: 'FAQ'},
      {to: '/trust', label: 'Trust & Security'},
      {to: '/contact', label: 'Contact'},
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
  const productActive = services.some(({to}) => pathname.startsWith(to));
  const industryActive = lanes.some(({to}) => pathname.startsWith(to));
  const resourcesActive = pathname.startsWith('/resources');
  const blogActive = pathname.startsWith('/blog');
  const learnActive = resourcesActive || blogActive || pathname.startsWith('/free-scan') || pathname.startsWith('/quiz');
  const pricingActive = pathname.startsWith('/pricing');
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const wasOpenRef = useRef(false);
  useEffect(() => {
    setOpen(false);
    document.querySelectorAll<HTMLDetailsElement>('.site-nav .nav-menu[open]')
      .forEach((menu) => menu.removeAttribute('open'));
  }, [pathname]);

  useEffect(() => {
    const closeOutside = (event: Event) => {
      const target = event.target;
      document.querySelectorAll<HTMLDetailsElement>('.site-nav .nav-menu[open]').forEach(menu => {
        if (target instanceof Node && !menu.contains(target)) menu.open = false;
      });
    };
    const escapeMenu = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const active = document.activeElement;
      const menu = active?.closest<HTMLDetailsElement>('.site-nav .nav-menu[open]');
      if (!menu) return;
      event.preventDefault();
      menu.open = false;
      menu.querySelector<HTMLElement>('summary')?.focus();
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('focusin', closeOutside);
    document.addEventListener('keydown', escapeMenu);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('focusin', closeOutside);
      document.removeEventListener('keydown', escapeMenu);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) {
        wasOpenRef.current = false;
        menuButtonRef.current?.focus({preventScroll: true});
      }
      return;
    }

    wasOpenRef.current = true;
    const drawer = drawerRef.current;
    const menuButton = menuButtonRef.current;
    if (!drawer || !menuButton) return;

    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'summary',
      '[tabindex]:not([tabindex="-1"])',
    ].join(',');
    const visibleControls = (root: ParentNode) =>
      Array.from(root.querySelectorAll<HTMLElement>(focusableSelector))
        .filter((element) => element.getClientRects().length > 0);
    const drawerControls = () => visibleControls(drawer);
    const trappedControls = () => [menuButton, ...drawerControls()]
      .filter((element) => element.getClientRects().length > 0);

    const originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const backgroundState = Array.from(document.querySelectorAll<HTMLElement>('main, footer'))
      .map((element) => ({
        element,
        hadInert: element.hasAttribute('inert'),
        ariaHidden: element.getAttribute('aria-hidden'),
      }));
    backgroundState.forEach(({element}) => {
      element.setAttribute('inert', '');
      element.setAttribute('aria-hidden', 'true');
    });

    const firstDrawerControl = drawerControls()[0];
    (firstDrawerControl ?? drawer).focus({preventScroll: true});

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;

      const controls = trappedControls();
      if (controls.length === 0) {
        event.preventDefault();
        drawer.focus({preventScroll: true});
        return;
      }

      const activeIndex = controls.indexOf(document.activeElement as HTMLElement);
      if (event.shiftKey && activeIndex <= 0) {
        event.preventDefault();
        controls[controls.length - 1].focus();
      } else if (!event.shiftKey && (activeIndex === -1 || activeIndex === controls.length - 1)) {
        event.preventDefault();
        controls[0].focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalBodyOverflow;
      backgroundState.forEach(({element, hadInert, ariaHidden}) => {
        if (!hadInert) element.removeAttribute('inert');
        if (ariaHidden === null) element.removeAttribute('aria-hidden');
        else element.setAttribute('aria-hidden', ariaHidden);
      });
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
              <details
                className={`nav-menu${productActive ? ' active' : ''}`}
                onToggle={keepDesktopMenusExclusive}
              >
                <summary aria-current={productActive ? 'page' : undefined}>Services</summary>
                <div className="nav-menu-panel">
                  {services.map((service) => (
                    <RouterNavLink key={service.to} to={canonicalPath(service.to)}>
                      <strong>{service.label}</strong>
                      <span>{service.clue}</span>
                    </RouterNavLink>
                  ))}
                </div>
              </details>
              <details
                className={`nav-menu${industryActive ? ' active' : ''}`}
                onToggle={keepDesktopMenusExclusive}
              >
                <summary aria-current={industryActive ? 'page' : undefined}>Industries</summary>
                <div className="nav-menu-panel nav-menu-panel-compact">
                  {lanes.map((lane) => (
                    <RouterNavLink key={lane.to} to={canonicalPath(lane.to)}>{lane.label}</RouterNavLink>
                  ))}
                </div>
              </details>
              <details className={`nav-menu${learnActive ? ' active' : ''}`} onToggle={keepDesktopMenusExclusive}>
                <summary aria-current={learnActive ? 'page' : undefined}>Learn</summary>
                <div className="nav-menu-panel nav-menu-panel-compact">
                  <RouterNavLink to="/resources/">Resources</RouterNavLink>
                  <RouterNavLink to="/blog/">Blog</RouterNavLink>
                  <RouterNavLink to="/free-scan/">Free scan</RouterNavLink>
                  <RouterNavLink to="/quiz/">Email and scam check</RouterNavLink>
                </div>
              </details>
              <RouterNavLink to="/pricing/" className={pricingActive ? 'active' : ''} aria-current={pricingActive ? 'page' : undefined}>
                Pricing
              </RouterNavLink>
              <BookCallLink size="sm" className="nav-cta" />
            </div>
            <a className="nav-sign-in" href={`${PORTAL_URL}/login`}>Sign in</a>
            <button
              ref={menuButtonRef}
              className={`nav-burger${open ? ' open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-controls="site-nav-drawer"
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
        <nav
          ref={drawerRef}
          id="site-nav-drawer"
          className="nav-drawer"
          aria-label="Mobile navigation"
          tabIndex={-1}
        >
          <BookCallLink className="drawer-cta" />
          <div className="drawer-primary" aria-label="Primary navigation">
            <details className={`drawer-section drawer-primary-section${productActive ? ' active' : ''}`}>
              <summary>Services</summary>
              <div className="drawer-section-links drawer-service-links">
                {services.map((service) => (
                  <Link key={service.to} to={canonicalPath(service.to)} aria-current={pathname.startsWith(service.to) ? 'page' : undefined}>
                    <strong>{service.label}</strong>
                    <span>{service.clue}</span>
                  </Link>
                ))}
              </div>
            </details>
            <details className={`drawer-section drawer-primary-section${industryActive ? ' active' : ''}`}>
              <summary>Industries</summary>
              <div className="drawer-section-links">
                {lanes.map((lane) => (
                  <Link key={lane.to} to={canonicalPath(lane.to)} aria-current={pathname.startsWith(lane.to) ? 'page' : undefined}>
                    {lane.label}
                  </Link>
                ))}
              </div>
            </details>
            <details className={`drawer-section drawer-primary-section${learnActive ? ' active' : ''}`}>
              <summary>Learn</summary>
              <div className="drawer-section-links">
                <Link to="/resources/">Resources</Link>
                <Link to="/blog/">Blog</Link>
                <Link to="/free-scan/">Free scan</Link>
                <Link to="/quiz/">Email and scam check</Link>
              </div>
            </details>
            <Link className={`drawer-direct${pricingActive ? ' active' : ''}`} to="/pricing/" aria-current={pricingActive ? 'page' : undefined}>
              <span>Pricing</span>
              <DirectionIcon />
            </Link>
          </div>
          <div className="drawer-sections">
            {drawerSecondary.map((col) => (
              <details
                key={col.title}
                className={`drawer-section drawer-secondary-section${col.links.some(({to}) => pathname.startsWith(to)) ? ' active' : ''}`}
              >
                <summary>{col.title}</summary>
                <div className="drawer-section-links">
                  {col.links.map((l) => (
                    <Link key={l.to} to={canonicalPath(l.to)} aria-current={pathname.startsWith(l.to) ? 'page' : undefined}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </nav>
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
        const next = (e.currentTarget.closest('.hero, .japandi-home-hero') as HTMLElement | null)?.nextElementSibling;
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
  title = bookingCallCopy.title,
  sub = bookingCallCopy.sub,
  cta = bookingCallCopy.label,
  source,
}: {
  title?: string;
  sub?: string;
  cta?: string;
  source: string;
}) {
  return (
    <section className="cta-band" id="contact" data-cta-source={source}>
      <div className="wrap">
        <h2 className="observe">{title}</h2>
        <p className="observe d1">{sub}</p>
        <div className="cta-form observe d2">
          <BookCallLink label={cta} />
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

export function MailingAddress() {
  return (
    <address className="mailing-address">
      <a href="https://www.google.com/maps/search/?api=1&query=865%20NJ%2033%20Ste%203%20Unit%20%23256%2C%20Freehold%2C%20NJ%2007728" target="_blank" rel="noopener noreferrer">
        Helm Security<br />
        865 NJ 33<br />
        Ste 3, Unit #256<br />
        Freehold, NJ 07728
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </address>
  );
}

export function SiteFooter() {
  const [year, setYear] = useState<number>(import.meta.env.HELM_BUILD_YEAR);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);
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
            <div className="footer-mailing-address">
              <strong>Mailing address</strong>
              <MailingAddress />
            </div>
          </div>
        </div>
        <nav className="footer-cols" aria-label="Footer navigation">
          {footerCols.map((col) => (
            <div key={col.title} className="footer-col">
              <div className="footer-col-title">{col.title}</div>
              {col.title === 'Company' && <BookCallLink size="sm" className="footer-booking-link" />}
              {col.links.map((l) => (
                <Link key={l.to} to={canonicalPath(l.to)}>
                  {l.label}
                </Link>
              ))}
              {col.title === 'Legal' && (
                <button type="button" className="footer-privacy-button" onClick={openPrivacyChoices}>
                  Privacy choices
                </button>
              )}
            </div>
          ))}
        </nav>
        <div className="footer-bottom">
          <span>© {year} Helm Security LLC · New Jersey</span>
          <div className="footer-theme"><ThemePicker /></div>
          <div className="footer-social" aria-label="Helm Security social media">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="Helm Security on LinkedIn (opens in a new tab)">LinkedIn</a>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Helm Security on Facebook (opens in a new tab)">Facebook</a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Helm Security on Instagram (opens in a new tab)">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
