import HeroBackdrop from '../components/HeroBackdrop';
import {useParams, Link} from 'react-router-dom';
import {ActionLink, Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import LeadForm from '../components/LeadForm';
import ProductMotif from '../components/ProductMotif';
import {productList} from './products';
import {BOOK_CTA} from './ctaCopy';
import {siteUrl} from '../lib/urls';
import './ProductPage.css';

export default function ProductPage() {
  const {slug} = useParams();
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
              description: p.metaDesc,
              provider: {'@type': 'Organization', name: 'Helm Security LLC', url: siteUrl('/')},
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
                {'@type': 'ListItem', position: 1, name: 'Products', item: siteUrl('/')},
                {'@type': 'ListItem', position: 2, name: p.name, item: siteUrl(`/${p.slug}`)},
              ],
            },
          ],
        }}
      />
      <header className="hero lane brand-hero product-hero hero-fit-dense">
        <HeroBackdrop kind="brand-static" />
        <div className="wrap">
          <h1 className="reveal d1 hero-title-compact">
            {p.name}: {p.tagline}
          </h1>
          <p className="sub reveal d2">{p.desc}</p>
          <div className="hero-ctas reveal d3">
            {p.ctaMode === 'book' ? (
              <ActionLink
                to="/contact/"
                label="Discuss Command"
              />
            ) : (
              <LeadForm source={`product ${p.slug}`} cta="Get my free scan" compact />
            )}
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
          </div>
        </div>
      </Band>

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
      </Band>

      <Band variant="raised">
        <div className="band-head observe">
          <h2>Common questions</h2>
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

      {p.ctaMode === 'book' ? (
        <CtaBand
          title={BOOK_CTA.title}
          sub={BOOK_CTA.sub}
          cta={BOOK_CTA.label}
          source={`product ${p.slug} cta`}
          mode="book"
        />
      ) : (
        <CtaBand
          title="Check your public email controls. Free."
          sub="The free scan reports on your domain's public email and web configuration, with plain-English findings and next steps."
          source={`product ${p.slug} cta`}
        />
      )}
    </>
  );
}
