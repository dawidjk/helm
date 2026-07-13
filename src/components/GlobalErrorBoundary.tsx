import { useEffect, useRef, useState, useMemo } from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import { productList } from '../pages/products';
import { articles } from '../pages/articles';

const THEME_GREEN = '#38A169';

const VALID_PAGES = [
  { path: '/', label: 'Home' },
  { path: '/manufacturing', label: 'Manufacturing' },
  { path: '/professional-services', label: 'Professional Services' },
  { path: '/contractors', label: 'Contractors' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/free-scan', label: 'Free Scan' },
  { path: '/about', label: 'About' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
  { path: '/resources', label: 'Resources' },
  ...productList.map(p => ({ path: `/${p.slug}`, label: p.slug.replace('-', ' ') })),
  ...articles.map(a => ({ path: `/resources/${a.slug}`, label: a.slug.replace(/-/g, ' ') }))
];

export default function GlobalErrorBoundary() {
  const error = useRouteError();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return VALID_PAGES.filter(p => 
      p.path.toLowerCase().includes(q) || 
      p.label.toLowerCase().includes(q)
    ).slice(0, 4); // Limit to top 4 suggestions
  }, [query]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    function matrix() {
      // @ts-expect-error valid TS for canvas Context
      ctx.fillStyle = '#0001';
      ctx!.fillRect(0, 0, w, h);
      
      ctx!.fillStyle = THEME_GREEN;
      ctx!.font = '15pt monospace';
      
      ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx!.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
      });
    }
    
    const interval = setInterval(matrix, 50);
    
    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, w, h);
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: 'black', color: THEME_GREEN, fontFamily: 'monospace' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.8)', padding: '2.5rem', borderRadius: '12px', border: `1px solid ${THEME_GREEN}`, boxShadow: `0 0 20px ${THEME_GREEN}33`, width: '90%', maxWidth: '500px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', textShadow: `0 0 10px ${THEME_GREEN}`, fontWeight: 'bold' }}>Something went wrong</h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.2rem', opacity: 0.8 }}>The system experienced an unexpected error.</p>
        
        <form onSubmit={(e) => {
          e.preventDefault();
          if (suggestions.length > 0) {
            navigate(suggestions[0].path);
          } else if (query) {
            navigate(`/${query}`);
          }
        }} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'stretch' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <input 
              name="q" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a page..." 
              style={{ padding: '0.75rem', border: `1px solid ${THEME_GREEN}`, backgroundColor: 'rgba(0,0,0,0.5)', color: THEME_GREEN, outline: 'none', flex: 1, borderRadius: '4px', fontSize: '1rem' }} 
              autoComplete="off"
            />
            <button type="submit" style={{ padding: '0.75rem 1.5rem', border: `1px solid ${THEME_GREEN}`, backgroundColor: THEME_GREEN, color: 'black', cursor: 'pointer', fontWeight: 'bold', borderRadius: '4px', fontSize: '1rem', transition: 'all 0.2s' }}>Search</button>
          </div>
          
          {suggestions.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.5rem', textAlign: 'left' }}>
              {suggestions.map((s, idx) => (
                <button
                  key={s.path}
                  type="button"
                  onClick={() => navigate(s.path)}
                  style={{
                    padding: '0.5rem',
                    backgroundColor: 'rgba(56, 161, 105, 0.1)',
                    border: `1px solid ${THEME_GREEN}44`,
                    color: THEME_GREEN,
                    cursor: 'pointer',
                    textAlign: 'left',
                    borderRadius: '4px',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(56, 161, 105, 0.2)')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'rgba(56, 161, 105, 0.1)')}
                >
                  <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{s.label}</span>
                  <span style={{ opacity: 0.6, fontSize: '0.85em', marginLeft: '0.5rem' }}>{s.path}</span>
                </button>
              ))}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
