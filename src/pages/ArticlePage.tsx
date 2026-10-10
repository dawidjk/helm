import BrandHeroBackdrop from '../components/BrandHeroBackdrop';
import {Fragment} from 'react';
import {useLoaderData, Link} from 'react-router-dom';
import {ActionLink, Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {articleCatalog} from './articleCatalog';
import type {Article} from './articles';
import type {ArticleSupport} from './articleSupport';
import {renderParagraph} from '../lib/richText';
import {bookCta} from './ctaCopy';
import {canonicalPath, siteUrl} from '../lib/urls';
import {articlePath} from '../lib/articlePaths';
import {blogAuthor} from '../lib/blogAuthor';
import ArticleVisual from '../components/ArticleVisual';
import './Resources.css';

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
  const data = useLoaderData() as {article: Article; support: ArticleSupport} | null;
  // Static-loader lookup returns null for an address without a generated
  // article. Render the same missing-page boundary as the static fallback.
  if (!data?.article) throw new Response('Resource not found', {status: 404});
  const {article: a, support} = data;
  const isBlog = a.collection === 'blog';
  const collectionName = a.collection === 'blog' ? 'Blog' : 'Resources';
  const collectionPath = a.collection === 'blog' ? '/blog/' : '/resources/';
  const path = articlePath(a);
  const isBuyingGuide = a.readingLayout || ['managed-service-providers-new-jersey', 'managed-service-provider-security-models', 'cyber-insurance-cybersecurity-vendors'].includes(a.slug);
  const relatedArticles = support.relatedSlugs
    .map((relatedSlug) => articleCatalog.find((article) => article.slug === relatedSlug))
    .filter((article) => article !== undefined);
  const displayedDate = formatDate(a.date);
  const displayedUpdatedDate = a.updated ? formatDate(a.updated) : undefined;
  const organizationByline = !isBlog && a.organizationByline;
  const authorName = organizationByline ? 'Helm Security' : blogAuthor.name;
  const authorPath = organizationByline ? '/about/' : blogAuthor.path;
  const wordCount = [
    typeof a.intro === 'string' ? a.intro : a.intro.text,
    ...(a.lead ?? []).map((paragraph) => typeof paragraph === 'string' ? paragraph : paragraph.text),
    a.takeaway,
    ...a.sections.flatMap((section) => section.ps.map((paragraph) => (
      typeof paragraph === 'string' ? paragraph : 'list' in paragraph ? paragraph.list.map((item) => typeof item === 'string' ? item : item.text).join(' ') : paragraph.text
    ))),
    ...a.sections.flatMap((section) => section.table ? [section.table.caption, ...section.table.headers, ...section.table.rows.flat()] : []),
  ].join(' ').trim().split(/\s+/).filter(Boolean).length;

  return (
    <>
      <Meta
        title={a.metaTitle ?? `${a.title} | Helm`}
        desc={a.metaDesc}
        path={path}
        ogType="article"
        publishedTime={a.date}
        modifiedTime={a.updated}
        author={isBlog ? {name: authorName, url: siteUrl(authorPath)} : undefined}
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
              mainEntityOfPage: {'@type': 'WebPage', '@id': siteUrl(path)},
              image: 'https://helmsecured.com/og.png',
              author: {
                '@type': organizationByline ? 'Organization' : 'Person',
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
                {'@type': 'ListItem', position: 1, name: collectionName, item: siteUrl(collectionPath)},
                {'@type': 'ListItem', position: 2, name: a.title, item: siteUrl(path)},
              ],
            },
          ],
        }}
      />
      <header className={`hero lane brand-hero${isBuyingGuide ? ' article-read-hero' : ''}`}>
        <BrandHeroBackdrop />
        <div className="wrap article-head">
          <h1 className="reveal d1">{a.title}</h1>
          <div className="article-meta reveal d2">
            <span>
              <Link to={collectionPath}>{collectionName}</Link> · {a.lane} · {a.readMin} min
            </span>
            <span>
              By <Link to={authorPath}>{authorName}</Link>
            </span>
            <span aria-hidden="true">·</span>
            {displayedUpdatedDate && !isBlog ? (
              <span>
                Updated <time dateTime={a.updated}>{displayedUpdatedDate}</time>
              </span>
            ) : (
              <time dateTime={a.date}>{displayedDate}</time>
            )}
            {isBlog && displayedUpdatedDate && (
              <span>Updated <time dateTime={a.updated}>{displayedUpdatedDate}</time></span>
            )}
          </div>
        </div>
        <ScrollCue />
      </header>

      <Band>
        <article className={`article-body${isBuyingGuide ? ' article-read-body' : ''}`}>
          <div className="observe">
            <p className="article-intro">{renderParagraph(a.intro)}</p>
            {a.lead?.map((paragraph, index) => <p key={index}>{renderParagraph(paragraph)}</p>)}
            {isBlog ? (a.takeaway ? <p>{a.takeaway}</p> : null) : <aside className="article-quick-answer" aria-labelledby="article-quick-answer-heading">
              <h2 id="article-quick-answer-heading">Quick answer</h2>
              <p>{a.takeaway}</p>
            </aside>}
            {!a.hideVisual && <ArticleVisual slug={a.slug} />}
            {!isBlog && <nav className="article-on-page" aria-labelledby="article-on-page-heading">
              <h2 id="article-on-page-heading">On this page</h2>
              <ol>
                {a.sections.map((section, index) => (
                  <li key={section.h}>
                    <a href={`#${sectionId(section.h, index)}`}>{section.h.replace(/^\d+[.)]\s*/, '')}</a>
                  </li>
                ))}
              </ol>
            </nav>}
            {a.sections.map((s, index) => (
              <section key={s.h} aria-labelledby={sectionId(s.h, index)}>
                <h2 id={sectionId(s.h, index)}>{s.h}</h2>
                {s.ps.map((p, i) => (
                  <Fragment key={i}>
                    {typeof p !== 'string' && 'list' in p ? (
                      p.ordered ? <ol className="article-checklist">{p.list.map((item, itemIndex) => <li key={itemIndex}>{renderParagraph(item)}</li>)}</ol>
                        : <ul className="article-checklist">{p.list.map((item, itemIndex) => <li key={itemIndex}>{renderParagraph(item)}</li>)}</ul>
                    ) : <p>{renderParagraph(p)}</p>}
                  </Fragment>
                ))}
                {s.figure && (
                  <figure className="article-explainer">
                    <img src={s.figure.src} alt={s.figure.alt} width="400" height="530" loading="lazy" decoding="async" />
                    <figcaption>{s.figure.caption}</figcaption>
                  </figure>
                )}
                {s.table && (
                  <>
                  <p className="article-table-hint" id={`table-help-${index}`}>On a narrow screen, scroll the table sideways to compare the columns. Keyboard users can focus the table and use the arrow keys.</p>
                  <div className="subproc-scroll article-comparison" role="region" aria-label={s.table.caption} aria-describedby={`table-help-${index}`} tabIndex={0}>
                    <table className="subproc-table">
                      <caption>{s.table.caption}</caption>
                      <thead><tr>{s.table.headers.map((heading) => <th scope="col" key={heading}>{heading}</th>)}</tr></thead>
                      <tbody>{s.table.rows.map((row) => (
                        <tr key={row[0]}>{row.map((cell, i) => i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i}>{cell}</td>)}</tr>
                      ))}</tbody>
                    </table>
                  </div>
                  </>
                )}
              </section>
            ))}
          </div>
          <section className="article-trust observe d1" aria-labelledby="article-trust-heading">
            <h2 id="article-trust-heading">About this {a.collection === 'blog' ? 'post' : 'guide'}</h2>
            <p>
              By <Link to={authorPath}>{authorName}</Link>, first published{' '}
              <time dateTime={a.date}>{displayedDate}</time>
              {displayedUpdatedDate && (
                <> and materially reviewed on <time dateTime={a.updated}>{displayedUpdatedDate}</time></>
              )}{isBlog
                ? '. The references below support this post’s factual guidance.'
                : '. The references below support this guide’s factual guidance.'}
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
              <Link key={article.slug} to={articlePath(article)}>
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
