import HeroBackdrop from '../components/HeroBackdrop';
import {useParams, Navigate, Link} from 'react-router-dom';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import LeadForm from '../components/LeadForm';
import ProductMotif from '../components/ProductMotif';
import {productList} from './products';
import {BOOK_CTA} from './ctaCopy';
import {siteUrl} from '../lib/urls';

export default function ProductPage() {
  const {slug} = useParams();
  const p = productList.find((x) => x.slug === slug);
  if (!p) return <Navigate to="/" replace />;

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
      <header className="hero lane">
        <HeroBackdrop kind="rain" />
        <div className="wrap">
          <div className="eyebrow reveal">{p.name}</div>
          <h1 className="reveal d1" style={{maxWidth: '18ch'}}>
            {p.tagline}
          </h1>
          <p className="sub reveal d2">{p.desc}</p>
          <div className="hero-ctas reveal d3">
            <LeadForm source={`product ${p.slug}`} cta="Get my free scan" compact />
          </div>
          <div className="hero-note reveal d3">
            {p.price} · <Link to="/pricing/" style={{color: 'light-dark(#0c7a44, #AAE2C4)'}}>full pricing</Link>
          </div>
        </div>
        <ScrollCue />
      </header>

      <Band variant="raised">
        <div className="split">
          <div>
            <h3 className="observe">What you get</h3>
            {p.features.map((f, i) => (
              <div key={f.title} className={`observe d${(i % 3) + 1}`} style={{marginBottom: 24}}>
                <h3 style={{fontSize: 20, marginBottom: 8}}>{f.title}</h3>
                <p style={{marginBottom: 0}}>{f.body}</p>
              </div>
            ))}
          </div>
          <div className="product-tile observe d1" style={{alignSelf: 'start'}}>
            <ProductMotif kind={p.motif} />
            <div className="kicker">{p.name}</div>
            {p.pricingOptions ? (
              <div className="price-options">
                {p.pricingOptions.map((option) => (
                  <div className="price-option" key={option.name}>
                    <div className="price-option-name">{option.name}</div>
                    <h3>{option.price}</h3>
                    <p>{option.detail}</p>
                  </div>
                ))}
              </div>
            ) : (
              <>
                <h3 style={{fontSize: 22}}>{p.price}</h3>
                <p>{p.priceDetail}</p>
              </>
            )}
          </div>
        </div>
      </Band>

      <Band>
        <div className="band-head observe">
          <h2>How it works</h2>
        </div>
        <ol className="steps-flow">
          {p.how.map((s, i) => (
            <li key={s.num} className={`observe d${i + 1}`}>
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
            <div key={f.q} className={`faq-item observe d${(i % 3) + 1}`}>
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
