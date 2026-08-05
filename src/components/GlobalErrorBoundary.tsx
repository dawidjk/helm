import {useMemo, useState} from 'react';
import {
  isRouteErrorResponse,
  Link,
  useNavigate,
  useRouteError,
} from 'react-router-dom';
import {Head} from 'vite-react-ssg';
import errorStill from '../assets/brand/japandi-error-still-v1.webp';

const VALID_PAGES = [
  {path: '/', label: 'Home'},
  {path: '/manufacturing/', label: 'Manufacturing & Defense'},
  {path: '/professional-services/', label: 'Professional Services'},
  {path: '/contractors/', label: 'Contractors & Trades'},
  {path: '/pricing/', label: 'Pricing'},
  {path: '/free-scan/', label: 'Free Scan'},
  {path: '/quiz/', label: 'AI Scam Readiness Quiz'},
  {path: '/about/', label: 'About'},
  {path: '/faq/', label: 'FAQ'},
  {path: '/trust/', label: 'Trust & Security'},
  {path: '/contact/', label: 'Contact'},
  {path: '/resources/', label: 'Resources'},
  {path: '/helm-command/', label: 'Helm Command'},
  {path: '/helm-mail/', label: 'Helm Mail'},
  {path: '/helm-aware/', label: 'Helm Aware'},
  {path: '/helm-ready/', label: 'Helm Ready'},
  {path: '/helm-watch/', label: 'Helm Watch'},
];

export default function GlobalErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const isMissing = isRouteErrorResponse(error) && error.status === 404;
  const pageTitle = isMissing
    ? 'Page Not Found | Helm Security'
    : 'Something Went Wrong | Helm Security';

  const suggestions = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return VALID_PAGES.filter(({path, label}) =>
      path.toLowerCase().includes(normalized) ||
      label.toLowerCase().includes(normalized),
    ).slice(0, 4);
  }, [query]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (suggestions[0]) {
      navigate(suggestions[0].path);
      return;
    }
    setMessage('We could not match that page. Try Home, Pricing, Resources, or Contact.');
  };

  return (
    <main className="error-page">
      <Head>
        <title>{pageTitle}</title>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <Link to="/" className="error-brand" aria-label="Helm Security home">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <circle cx="16" cy="16" r="13" />
          <circle cx="16" cy="16" r="5" className="error-brand-core" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="16"
              y1="1"
              x2="16"
              y2="7"
              transform={`rotate(${angle} 16 16)`}
            />
          ))}
        </svg>
        <span>Helm</span>
      </Link>

      <section className="error-shell" aria-labelledby="error-title">
        <div className="error-copy">
          <h1 id="error-title">Everything will be okay.</h1>
          <p>
            {isMissing
              ? 'This path does not lead anywhere, but you have not lost your place. Choose a familiar route and we will get you moving again.'
              : 'Something interrupted this page. Take a breath, choose a familiar route, and we will get you moving again.'}
          </p>

          <div className="error-actions" aria-label="Recovery options">
            <Link to="/" className="error-action-primary">Return home</Link>
            <Link to="/contact/" className="error-action-secondary">Contact Helm</Link>
          </div>

          <form className="error-search" onSubmit={handleSubmit}>
            <label htmlFor="error-page-search">Find a page</label>
            <div className="error-search-row">
              <input
                id="error-page-search"
                name="q"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setMessage('');
                }}
                placeholder="Try “pricing” or “resources”"
                autoComplete="off"
              />
              <button type="submit">Search</button>
            </div>

            {suggestions.length > 0 && (
              <ul className="error-suggestions" aria-label="Suggested pages">
                {suggestions.map((suggestion) => (
                  <li key={suggestion.path}>
                    <button type="button" onClick={() => navigate(suggestion.path)}>
                      <span>{suggestion.label}</span>
                      <small>{suggestion.path}</small>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {message && <p className="error-search-message" role="alert">{message}</p>}
          </form>
        </div>

        <figure className="error-still">
          <img
            src={errorStill}
            alt="Balanced river stones beside a pine ceramic bowl in a quiet sunlit alcove"
            width="1216"
            height="896"
            loading="eager"
            decoding="async"
          />
        </figure>
      </section>
    </main>
  );
}
