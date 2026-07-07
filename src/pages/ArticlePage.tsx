import {useParams, Navigate, Link} from 'react-router-dom';
import {Band, CtaBand} from '../components/Site';
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
          '@type': 'Article',
          headline: a.title,
          description: a.metaDesc,
          datePublished: a.date,
          author: {'@type': 'Organization', name: 'Helm'},
          publisher: {'@type': 'Organization', name: 'HelmSecure LLC', url: 'https://helmsecured.com'},
        }}
      />
      <header className="hero lane" style={{padding: '88px 0 40px'}}>
        <div className="wrap article-head">
          <div className="eyebrow reveal">
            <Link to="/resources" style={{color: 'inherit', textDecoration: 'none'}}>
              Resources
            </Link>{' '}
            · {a.lane} · {a.readMin} min
          </div>
          <h1 className="reveal d1">{a.title}</h1>
        </div>
      </header>

      <Band>
        <article className="article-body">
          <p className="article-intro">{a.intro}</p>
          {a.sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.ps.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </section>
          ))}
          <div className="article-takeaway">
            <h2>The takeaway</h2>
            <p>{a.takeaway}</p>
          </div>
        </article>
      </Band>

      <CtaBand
        title="Get your actual numbers."
        sub="The free scan reads your domain's real security posture and reports back in plain English, within 24 hours."
        source={`article ${a.slug}`}
      />
    </>
  );
}
