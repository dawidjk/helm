import {forwardRef, useEffect} from 'react';
import {Outlet, Link as RouterLink, useLocation} from 'react-router-dom';
import {Theme} from '@astryxdesign/core/theme';
import {LinkProvider} from '@astryxdesign/core/Link';
import {helmTheme} from './helm';
import {SiteNav, SiteFooter, RevealManager} from './components/Site';
import {ThemeModeProvider, useThemeMode} from './components/ThemeMode';
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

/** Bridges the shared theme-mode state into the Astryx <Theme> wrapper, whose
 *  color-scheme drives every `light-dark()` token (Astryx + marketing layer). */
function ThemedShell() {
  const {mode} = useThemeMode();
  const astryxMode = mode === 'auto' ? 'system' : mode;
  return (
    <Theme theme={helmTheme} mode={astryxMode}>
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

export default function Layout() {
  return (
    <ThemeModeProvider>
      <ThemedShell />
    </ThemeModeProvider>
  );
}
