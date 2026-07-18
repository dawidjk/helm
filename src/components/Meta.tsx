import {Head} from 'vite-react-ssg';

const SITE = 'https://helmsecured.com';

export default function Meta({
  title,
  desc,
  path,
  jsonLd,
  ogImage = '/og.png',
  ogType = 'website',
  publishedTime,
  modifiedTime,
}: {
  title: string;
  desc: string;
  path: string;
  jsonLd?: object;
  ogImage?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}) {
  const url = `${SITE}${path === '/' ? '' : path}`;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${SITE}${ogImage}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url === SITE ? `${SITE}/` : url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Helm" />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
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
