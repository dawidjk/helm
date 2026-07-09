import {Head} from 'vite-react-ssg';

const SITE = 'https://helmsecured.com';

export default function Meta({
  title,
  desc,
  path,
  jsonLd,
}: {
  title: string;
  desc: string;
  path: string;
  jsonLd?: object;
}) {
  const url = `${SITE}${path}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Helm" />
      <meta property="og:image" content={`${SITE}/og.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={`${SITE}/og.png`} />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  );
}
