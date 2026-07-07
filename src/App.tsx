import {forwardRef, useEffect} from 'react';
import {Outlet, Link as RouterLink, useLocation} from 'react-router-dom';
import {Theme} from '@astryxdesign/core/theme';
import {LinkProvider} from '@astryxdesign/core/Link';
import {helmTheme} from './helm';
import {SiteNav, SiteFooter, RevealManager} from './components/Site';
import './theme.css';
import './index.css';

/** Adapter: Astryx passes href; react-router wants `to`. External URLs fall back to <a>. */
const NavLink = forwardRef<HTMLAnchorElement, React.ComponentProps<'a'>>(
  function NavLink({href = '', children, ...rest}, ref) {
    if (/^(https?:)?\/\//.test(href) || href.startsWith('#') || href.startsWith('mailto:')) {
      return (
        <a ref={ref} href={href} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <RouterLink ref={ref} to={href} {...rest}>
        {children}
      </RouterLink>
    );
  },
);

function ScrollToTop() {
  const {pathname} = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function Layout() {
  return (
    <Theme theme={helmTheme} mode="dark">
      <LinkProvider component={NavLink}>
        <ScrollToTop />
        <RevealManager />
        <SiteNav />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </LinkProvider>
    </Theme>
  );
}
