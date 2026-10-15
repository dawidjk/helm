import {CommandReadinessSection} from './CommandReadinessSection';
import BrandHeroBackdrop from '../components/BrandHeroBackdrop';
import {useParams, Link} from 'react-router-dom';
import {Band, BookCallLink, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import ServicePreview from './ServicePreview';
import ProductMotif from '../components/ProductMotif';
import {productList} from './products';
import {siteUrl} from '../lib/urls';
import './ProductPage.css';

export default function ProductPage({slug: publishedSlug}: {slug?: string}) {
  const {slug: routeSlug} = useParams();
  const slug = publishedSlug ?? routeSlug;
  const p = productList.find((x) => x.slug === slug);
  if (!p) throw new Response('Product not found', {status: 404, statusText: 'Not Found'});

  return (
    <>
      <Meta
        title={`${p.metaTitle} | Helm`}
        desc={p.metaDesc}
        path={`/${p.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: p.name,
              url: siteUrl(`/${p.slug}`),
              serviceType: p.slug === 'helm-core' ? 'Managed cybersecurity' : 'vCISO leadership and managed cybersecurity',
              areaServed: {'@type': 'State', name: 'New Jersey'},
              description: p.metaDesc,
              provider: {'@type': 'Organization', '@id': siteUrl('/#organization'), name: 'Helm Security LLC', url: siteUrl('/')},
            },
            {
              '@type': 'FAQPage',
              mainEntity: p.faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: {'@type': 'Answer', text: f.a},
              })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {'@type': 'ListItem', position: 1, name: 'Services', item: siteUrl('/')},
                {'@type': 'ListItem', position: 2, name: p.name, item: siteUrl(`/${p.slug}`)},
              ],
            },
          ],
        }}
      />
      <header className="hero lane brand-hero product-hero hero-fit-dense">
        <BrandHeroBackdrop />
        <div className="wrap">
          <h1 className="reveal d1 hero-title-compact">
            {p.name}: {p.tagline}
          </h1>
          <p className="sub reveal d2">{p.desc}</p>
          <div className="hero-ctas reveal d3">
            <BookCallLink label={p.slug === 'helm-core' ? 'Discuss Core' : 'Discuss Command'} />
          </div>
          <div className="hero-note reveal d3">
            {p.price} · <Link to="/pricing/">full pricing</Link>
          </div>
        </div>
        <ScrollCue />
      </header>

      <Band variant="raised">
        <h2 className="sr-only">Service details</h2>
        <div className="split">
          <div>
            <h3 className="observe">What you get</h3>
            {p.features.map((f, i) => (
              <div key={f.title} className={`product-feature observe d${Math.min(i + 1, 5)}`}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
          <div className="product-tile product-summary observe d1">
            <ProductMotif kind={p.motif} />
            <h2 className="product-tile-title">{p.name}</h2>
            <h3 className="product-summary-price">{p.price}</h3>
            <p>{p.priceDetail}</p>
            <p>{p.term}</p>
          </div>
        </div>
      </Band>

      <ServicePreview command={p.slug === 'helm-command'} />

      {p.slug === 'helm-command' && <CommandReadinessSection />}

      <Band>
        <div className="band-head observe">
          <h2>How it works</h2>
        </div>
        <ol className="steps-flow product-steps-flow">
          {p.how.map((s, i) => (
            <li key={s.num} className={`observe d${Math.min(i + 1, 5)}`}>
              <div className="step-dot">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="observe">
          {p.slug === 'helm-core' ? (
            <>Plan inventory checks, installation and verification with your IT owner using the <Link to="/resources/managed-endpoint-protection-rollout/">endpoint rollout guide</Link>.</>
          ) : (
            <>The <Link to="/resources/virtual-ciso-service-evaluation/">vCISO evaluation guide</Link> explains how to compare deliverables, meeting cadence and the responsibilities your firm keeps.</>
          )}
        </p>
      </Band>

      <Band variant="raised">
        <div className="band-head observe">
          <h2>Common questions</h2>
          <p>Before deciding, review <Link to="/about/">who operates Helm</Link> and the <Link to="/trust/">current security disclosures</Link>, including vendor roles and known control gaps.</p>
        </div>
        <div className="faq-list">
          {p.faqs.map((f, i) => (
            <div key={f.q} className={`faq-item observe d${Math.min(i + 1, 5)}`}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </Band>

      <CtaBand
        title={p.slug === 'helm-core' ? 'Discuss managed protection for your firm.' : 'Discuss security leadership for your firm.'}
        sub={p.slug === 'helm-core' ? "Choose a time to talk about your current IT setup and whether Core's coverage fits your firm." : 'Tell us about your firm and current IT provider. We will confirm the service fit, coverage and next steps before you commit.'}
        cta={p.slug === 'helm-core' ? 'Discuss Core' : 'Discuss Command'}
        source={`product ${p.slug} cta`}
      />
    </>
  );
}
