import HeroBackdrop from '../components/HeroBackdrop';
import {useParams, Navigate, Link} from 'react-router-dom';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {articles} from './articles';

export default function ArticlePage() {
  const {slug} = useParams();
  const a = articles.find((x) => x.slug === slug);
  if (!a) return <Navigate to="/resources" replace />;

  return (
    <>
      <Meta
        title={`${a.title} | Helm`}
        desc={a.metaDesc}
        path={`/resources/${a.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: a.title,
              description: a.metaDesc,
              datePublished: a.date,
              author: {'@type': 'Organization', name: 'Helm'},
              publisher: {'@type': 'Organization', name: 'HelmSecure LLC', url: 'https://helmsecured.com'},
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {'@type': 'ListItem', position: 1, name: 'Resources', item: 'https://helmsecured.com/resources'},
                {'@type': 'ListItem', position: 2, name: a.title, item: `https://helmsecured.com/resources/${a.slug}`},
              ],
            },
          ],
        }}
      />
      <header className="hero lane">
        <HeroBackdrop kind="rain" />
        <div className="wrap article-head">
          <div className="eyebrow reveal">
            <Link to="/resources" style={{color: 'inherit', textDecoration: 'none'}}>
              Resources
            </Link>{' '}
            · {a.lane} · {a.readMin} min
          </div>
          <h1 className="reveal d1">{a.title}</h1>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <article className="article-body">
          <div className="observe">
            <p className="article-intro">{a.intro}</p>
            {a.sections.map((s) => (
              <section key={s.h}>
                <h2>{s.h}</h2>
                {s.ps.map((p, i) => {
                  if (typeof p === 'string') return <p key={i}>{p}</p>;
                  const parts: React.ReactNode[] = [];
                  let remaining = p.text;
                  let keyIdx = 0;
                  for (const link of p.links) {
                    const idx = remaining.indexOf(link.phrase);
                    if (idx === -1) continue;
                    if (idx > 0) parts.push(remaining.slice(0, idx));
                    parts.push(<Link key={keyIdx++} to={link.to}>{link.phrase}</Link>);
                    remaining = remaining.slice(idx + link.phrase.length);
                  }
                  if (remaining) parts.push(remaining);
                  return <p key={i}>{parts}</p>;
                })}
              </section>
            ))}
          </div>
          <div className="article-takeaway observe d1">
            <h2>The takeaway</h2>
            <p>{a.takeaway}</p>
          </div>
          <nav className="article-related observe d2" aria-label="Related pages">
            <span>Related:</span>
            <Link to={a.laneTo}>{a.lane === 'All industries' ? 'How Helm works' : `Helm for ${a.lane}`}</Link>
            <Link to="/free-scan">Free email security scan</Link>
            <Link to="/pricing">Pricing</Link>
          </nav>
        </article>
      </Band>

      <CtaBand
        title="Get your actual numbers."
        sub="The free scan reads your domain's real security posture and reports back in plain English, in about a minute."
        source={`article ${a.slug}`}
      />
    </>
  );
}
