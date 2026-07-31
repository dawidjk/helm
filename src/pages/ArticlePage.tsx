import HeroBackdrop from '../components/HeroBackdrop';
import {useParams, Navigate, Link} from 'react-router-dom';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {articles} from './articles';
import {renderParagraph} from '../lib/richText';
import {bookCta} from './ctaCopy';
import {canonicalPath, siteUrl} from '../lib/urls';

export default function ArticlePage() {
  const {slug} = useParams();
  const a = articles.find((x) => x.slug === slug);
  if (!a) return <Navigate to="/resources/" replace />;

  return (
    <>
      <Meta
        title={`${a.title} | Helm`}
        desc={a.metaDesc}
        path={`/resources/${a.slug}`}
        ogType="article"
        publishedTime={a.date}
        modifiedTime={a.date}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: a.title,
              description: a.metaDesc,
              datePublished: a.date,
              dateModified: a.date,
              inLanguage: 'en-US',
              mainEntityOfPage: {'@type': 'WebPage', '@id': siteUrl(`/resources/${a.slug}`)},
              image: 'https://helmsecured.com/og.png',
              author: {'@type': 'Organization', name: 'Helm', url: siteUrl('/')},
              publisher: {
                '@type': 'Organization',
                name: 'Helm Security LLC',
                url: siteUrl('/'),
                logo: {'@type': 'ImageObject', url: 'https://helmsecured.com/og.png'},
              },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {'@type': 'ListItem', position: 1, name: 'Resources', item: siteUrl('/resources')},
                {'@type': 'ListItem', position: 2, name: a.title, item: siteUrl(`/resources/${a.slug}`)},
              ],
            },
          ],
        }}
      />
      <header className="hero lane">
        <HeroBackdrop kind="rain" />
        <div className="wrap article-head">
          <div className="eyebrow reveal">
            <Link to="/resources/" style={{color: 'inherit', textDecoration: 'none'}}>
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
                {s.ps.map((p, i) => (
                  <p key={i}>{renderParagraph(p)}</p>
                ))}
              </section>
            ))}
          </div>
          <div className="article-takeaway observe d1">
            <h2>The takeaway</h2>
            <p>{a.takeaway}</p>
          </div>
          <nav className="article-related observe d2" aria-label="Related pages">
            <span>Related:</span>
            <Link to={canonicalPath(a.laneTo)}>{a.lane === 'All industries' ? 'How Helm works' : `Helm for ${a.lane}`}</Link>
            <Link to="/free-scan/">Free email security scan</Link>
            <Link to="/pricing/">Pricing</Link>
          </nav>
        </article>
      </Band>

      {a.ctaMode === 'book' || a.ctaMode === 'book-cmmc' ? (
        <CtaBand
          title={bookCta(a.ctaMode).title}
          sub={bookCta(a.ctaMode).sub}
          cta={bookCta(a.ctaMode).label}
          source={`article ${a.slug}`}
          mode="book"
        />
      ) : (
        <CtaBand
          title="Get your actual numbers."
          sub="The free scan reads your domain's public email and web configuration and reports back in plain English, usually in about a minute."
          source={`article ${a.slug}`}
        />
      )}
    </>
  );
}
