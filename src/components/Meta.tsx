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
      <meta name="twitter:card" content="summary" />
      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  );
}
