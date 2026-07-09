import HeroBackdrop from '../components/HeroBackdrop';
import {useParams, Navigate, Link} from 'react-router-dom';
import {Band, CtaBand} from '../components/Site';
import Meta from '../components/Meta';
import LeadForm from '../components/LeadForm';
import ProductMotif from '../components/ProductMotif';
import {productList} from './products';

export default function ProductPage() {
  const {slug} = useParams();
  const p = productList.find((x) => x.slug === slug);
  if (!p) return <Navigate to="/" replace />;

  return (
    <>
      <Meta
        title={`${p.name}: ${p.tagline} | Helm`}
        desc={p.metaDesc}
        path={`/${p.slug}`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: p.name,
          description: p.metaDesc,
          provider: {'@type': 'Organization', name: 'HelmSecure LLC', url: 'https://helmsecured.com'},
          areaServed: 'US',
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
            {p.price} · <Link to="/pricing" style={{color: '#8db4ff'}}>full pricing</Link>
          </div>
        </div>
      </header>

      <Band variant="raised">
        <div className="split">
          <div className="observe">
            <h3>What you get</h3>
            {p.features.map((f) => (
              <div key={f.title} style={{marginBottom: 24}}>
                <h3 style={{fontSize: 20, marginBottom: 8}}>{f.title}</h3>
                <p style={{marginBottom: 0}}>{f.body}</p>
              </div>
            ))}
          </div>
          <div className="product-tile observe d1" style={{alignSelf: 'start'}}>
            <ProductMotif kind={p.motif} />
            <div className="kicker">{p.name}</div>
            <h3 style={{fontSize: 22}}>{p.price}</h3>
            <p>{p.priceDetail}</p>
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
          {p.faqs.map((f) => (
            <div key={f.q} className="faq-item observe">
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </Band>

      <CtaBand
        title="See what a scammer sees. Free."
        sub="The free scan checks your email domain's real exposure: the report shows exactly what we'd fix."
        source={`product ${p.slug} cta`}
      />
    </>
  );
}
