import HeroBackdrop from '../components/HeroBackdrop';
import {useParams, Link} from 'react-router-dom';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {articles} from './articles';
import {articleSupport} from './articleSupport';
import {renderParagraph} from '../lib/richText';
import {bookCta} from './ctaCopy';
import {canonicalPath, siteUrl} from '../lib/urls';
import ArticleVisual from '../components/ArticleVisual';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}

function sectionId(heading: string, index: number) {
  const slug = heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  return `${slug || 'section'}-${index + 1}`;
}

export default function ArticlePage() {
  const {slug} = useParams();
  const a = articles.find((x) => x.slug === slug);
  if (!a) throw new Response('Resource not found', {status: 404, statusText: 'Not Found'});
  const support = articleSupport[a.slug];
  const relatedArticles = support.relatedSlugs
    .map((relatedSlug) => articles.find((article) => article.slug === relatedSlug))
    .filter((article) => article !== undefined);
  const displayedDate = formatDate(a.date);
  const displayedUpdatedDate = a.updated ? formatDate(a.updated) : undefined;
  const wordCount = [
    a.intro,
    a.takeaway,
    ...a.sections.flatMap((section) => section.ps.map((paragraph) => (
      typeof paragraph === 'string' ? paragraph : paragraph.text
    ))),
  ].join(' ').trim().split(/\s+/).filter(Boolean).length;

  return (
    <>
      <Meta
        title={`${a.title} | Helm`}
        desc={a.metaDesc}
        path={`/resources/${a.slug}`}
        ogType="article"
        publishedTime={a.date}
        modifiedTime={a.updated}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              headline: a.title,
              description: a.metaDesc,
              datePublished: a.date,
              ...(a.updated ? {dateModified: a.updated} : {}),
              inLanguage: 'en-US',
              articleSection: a.sections.map((section) => section.h),
              wordCount,
              timeRequired: `PT${a.readMin}M`,
              citation: support.sources.map((source) => source.href),
              mainEntityOfPage: {'@type': 'WebPage', '@id': siteUrl(`/resources/${a.slug}`)},
              image: 'https://helmsecured.com/og.png',
              author: {
                '@type': 'Person',
                name: 'Dawid Kluszczynski',
                url: siteUrl('/about#dawid-kluszczynski'),
              },
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
      <header className="hero lane brand-hero">
        <HeroBackdrop kind="brand-static" />
        <div className="wrap article-head">
          <h1 className="reveal d1">{a.title}</h1>
          <div className="article-meta reveal d2">
            <span>
              <Link to="/resources/">Resources</Link> · {a.lane} · {a.readMin} min
            </span>
            <span>
              By <Link to="/about/#dawid-kluszczynski">Dawid Kluszczynski</Link>
            </span>
            <span aria-hidden="true">·</span>
            {displayedUpdatedDate ? (
              <span>
                Updated <time dateTime={a.updated}>{displayedUpdatedDate}</time>
              </span>
            ) : (
              <time dateTime={a.date}>{displayedDate}</time>
            )}
          </div>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <article className="article-body">
          <div className="observe">
            <p className="article-intro">{a.intro}</p>
            <aside className="article-quick-answer" aria-labelledby="article-quick-answer-heading">
              <h2 id="article-quick-answer-heading">Quick answer</h2>
              <p>{a.takeaway}</p>
            </aside>
            <ArticleVisual slug={a.slug} />
            <nav className="article-on-page" aria-labelledby="article-on-page-heading">
              <h2 id="article-on-page-heading">On this page</h2>
              <ol>
                {a.sections.map((section, index) => (
                  <li key={section.h}>
                    <a href={`#${sectionId(section.h, index)}`}>{section.h}</a>
                  </li>
                ))}
              </ol>
            </nav>
            {a.sections.map((s, index) => (
              <section key={s.h} aria-labelledby={sectionId(s.h, index)}>
                <h2 id={sectionId(s.h, index)}>{s.h}</h2>
                {s.ps.map((p, i) => (
                  <p key={i}>{renderParagraph(p)}</p>
                ))}
              </section>
            ))}
          </div>
          <section className="article-trust observe d1" aria-labelledby="article-trust-heading">
            <h2 id="article-trust-heading">How this guide was checked</h2>
            <p>
              Written by <Link to="/about/#dawid-kluszczynski">Dawid Kluszczynski</Link>, first published{' '}
              <time dateTime={a.date}>{displayedDate}</time>
              {displayedUpdatedDate && (
                <> and materially reviewed on <time dateTime={a.updated}>{displayedUpdatedDate}</time></>
              )}. The recommendations are supported by {support.sources.length} primary or authoritative sources listed below.
            </p>
          </section>
          <section className="article-sources observe d2" aria-labelledby="article-sources-heading">
            <h2 id="article-sources-heading">Primary sources</h2>
            <p>These official references support the guidance in this article.</p>
            <ul>
              {support.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href}>{source.title}</a>
                </li>
              ))}
            </ul>
          </section>
          <nav className="article-related observe d2" aria-label="Related pages">
            <span>Read next:</span>
            {relatedArticles.map((article) => (
              <Link key={article.slug} to={canonicalPath(`/resources/${article.slug}`)}>
                {article.title}
              </Link>
            ))}
            <Link to={canonicalPath(a.laneTo)}>{a.lane === 'All industries' ? 'How Helm works' : `Helm for ${a.lane}`}</Link>
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
