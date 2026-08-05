import {useEffect, useRef, useState, type ReactNode} from 'react';
import {NavLink as RouterNavLink, Link, useLocation} from 'react-router-dom';
import LeadForm, {PORTAL_URL} from './LeadForm';
import ThemePicker from './ThemePicker';
import {canonicalPath} from '../lib/urls';
import {isRemarketingConfigured, openPrivacyChoices} from '../lib/adTracking';
import {businessPhone, linkedInUrl, serviceAreaText} from '../lib/business';
import './SiteNav.css';

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

const lanes = [
  {to: '/manufacturing', label: 'Manufacturing & Defense'},
  {to: '/professional-services', label: 'Professional Services'},
  {to: '/contractors', label: 'Contractors & Trades'},
];

const services = [
  {to: '/helm-command', label: 'Helm Command', clue: 'Security program ownership'},
  {to: '/helm-mail', label: 'Helm Mail', clue: 'Managed email protection'},
  {to: '/helm-aware', label: 'Helm Aware', clue: 'Training and scam readiness'},
  {to: '/helm-ready', label: 'Helm Ready', clue: 'Insurance and compliance'},
  {to: '/helm-watch', label: 'Helm Watch', clue: '24/7 endpoint monitoring'},
];

const footerCols = [
  {
    title: 'Products',
    links: [
      {to: '/helm-command', label: 'Helm Command'},
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

const drawerSecondary = [
  {
    title: 'Company',
    links: [
      {to: '/about', label: 'About'},
      {to: '/quiz', label: 'AI scam quiz'},
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
              <details className={`nav-menu${productActive ? ' active' : ''}`}>
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
              <details className={`nav-menu${industryActive ? ' active' : ''}`}>
                <summary aria-current={industryActive ? 'page' : undefined}>Industries</summary>
                <div className="nav-menu-panel nav-menu-panel-compact">
                  {lanes.map((lane) => (
                    <RouterNavLink key={lane.to} to={canonicalPath(lane.to)}>{lane.label}</RouterNavLink>
                  ))}
                </div>
              </details>
              <RouterNavLink to="/resources/" className={resourcesActive ? 'active' : ''} aria-current={resourcesActive ? 'page' : undefined}>
                Resources
              </RouterNavLink>
              <RouterNavLink to="/pricing/" className={pricingActive ? 'active' : ''} aria-current={pricingActive ? 'page' : undefined}>
                Pricing
              </RouterNavLink>
              <a href={`${PORTAL_URL}/login`}>Sign in</a>
              <ActionLink to="/free-scan/" label="Free scan" size="sm" className="nav-cta" />
            </div>
            <ThemePicker compact />
            <ActionLink to="/free-scan/" label="Free scan" size="sm" className="nav-cta-mobile" />
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
          <ActionLink to="/free-scan/" label="Get my free scan" className="drawer-cta" />
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
            <Link className={`drawer-direct${resourcesActive ? ' active' : ''}`} to="/resources/" aria-current={resourcesActive ? 'page' : undefined}>
              <span>Resources</span>
              <DirectionIcon />
            </Link>
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
          <div className="drawer-foot">
            <a href={`${PORTAL_URL}/login`}>Sign in</a>
            <ThemePicker />
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
            <ActionLink to={canonicalPath(contactPath)} label={cta} />
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
