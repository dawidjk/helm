import {StrictMode, forwardRef, useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Link as RouterLink, useLocation} from 'react-router-dom';
import {Theme} from '@astryxdesign/core/theme';
import {LinkProvider} from '@astryxdesign/core/Link';
import {helmTheme} from './theme';
import App from './App';
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme theme={helmTheme} mode="dark">
      <LinkProvider component={NavLink}>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </LinkProvider>
    </Theme>
  </StrictMode>,
);
