import {Head} from 'vite-react-ssg';
import {SITE_ORIGIN, siteUrl} from '../lib/urls';

export default function Meta({
  title,
  desc,
  keywords,
  path,
  jsonLd,
  ogImage = '/og.png',
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
}: {
  title: string;
  desc: string;
  keywords?: string[];
  path: string;
  jsonLd?: object;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: {name: string; url: string};
}) {
  const canonicalUrl = siteUrl(path);
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE_ORIGIN}${ogImage}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      {keywords?.length ? <meta name="keywords" content={keywords.join(', ')} /> : null}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Helm Security" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta name="author" content={author.name} />}
      {author && <meta property="article:author" content={author.url} />}
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={absoluteOgImage} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  );
}
