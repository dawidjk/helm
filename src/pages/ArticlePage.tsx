import HeroBackdrop from '../components/HeroBackdrop';
import {useParams, Link} from 'react-router-dom';
import {ActionLink, Band, CtaBand, ScrollCue} from '../components/Site';
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
  const authorName = a.organizationByline ? 'Helm Security' : 'Dawid Kluszczynski';
  const authorPath = a.organizationByline ? '/about/' : '/about/#dawid-kluszczynski';
  const wordCount = [
    a.intro,
    a.takeaway,
    ...a.sections.flatMap((section) => section.ps.map((paragraph) => (
      typeof paragraph === 'string' ? paragraph : paragraph.text
    ))),
    ...a.sections.flatMap((section) => section.table ? [section.table.caption, ...section.table.headers, ...section.table.rows.flat()] : []),
  ].join(' ').trim().split(/\s+/).filter(Boolean).length;

  return (
    <>
      <Meta
        title={a.metaTitle ?? `${a.title} | Helm`}
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
                '@type': a.organizationByline ? 'Organization' : 'Person',
                name: authorName,
                url: siteUrl(authorPath),
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
              By <Link to={authorPath}>{authorName}</Link>
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
            {!a.hideVisual && <ArticleVisual slug={a.slug} />}
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
                {s.table && (
                  <div className="subproc-scroll" role="region" aria-label={s.table.caption} tabIndex={0}>
                    <table className="subproc-table">
                      <caption>{s.table.caption}</caption>
                      <thead><tr>{s.table.headers.map((heading) => <th scope="col" key={heading}>{heading}</th>)}</tr></thead>
                      <tbody>{s.table.rows.map((row) => (
                        <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i}>{cell}</td>)}</tr>
                      ))}</tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
          </div>
          <section className="article-trust observe d1" aria-labelledby="article-trust-heading">
            <h2 id="article-trust-heading">How this guide was checked</h2>
            <p>
              By <Link to={authorPath}>{authorName}</Link>, first published{' '}
              <time dateTime={a.date}>{displayedDate}</time>
              {displayedUpdatedDate && (
                <> and materially reviewed on <time dateTime={a.updated}>{displayedUpdatedDate}</time></>
              )}. We checked the factual guidance against the {support.sources.length} primary or authoritative sources listed below.
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

      {a.consultation ? (
        <section className="cta-band">
          <div className="wrap">
            <h2 className="observe">{a.consultation.title}</h2>
            <p className="observe d1">{a.consultation.sub}</p>
            <div className="cta-form observe d2">
              <ActionLink to={a.consultation.to} label={a.consultation.label} />
            </div>
          </div>
        </section>
      ) : a.ctaMode === 'book' || a.ctaMode === 'book-cmmc' ? (
        <CtaBand
          title={bookCta(a.ctaMode).title}
          sub={bookCta(a.ctaMode).sub}
          cta={bookCta(a.ctaMode).label}
          source={`article ${a.slug}`}
          mode="book"
        />
      ) : (
        <CtaBand
          title="See what your public domain configuration shows."
          sub="The free scan checks public email and web configuration and returns a plain-English report, usually in about a minute."
          source={`article ${a.slug}`}
        />
      )}
    </>
  );
}
