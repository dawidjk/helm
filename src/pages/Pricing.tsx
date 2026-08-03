import HeroBackdrop from '../components/HeroBackdrop';
import {Link} from 'react-router-dom';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {siteUrl} from '../lib/urls';
import ProductMotif from '../components/ProductMotif';
import {productList} from './products';

export default function Pricing() {
  return (
    <>
      <Meta
        title="Pricing: Published, No Surprises | Helm"
        desc="Helm pricing: managed email security $15/user/month, managed awareness $10/active learner/month, AI scam workshops from $2,500, compliance from $2,500, and endpoint monitoring $15/endpoint/month."
        path="/pricing"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {'@type': 'ListItem', position: 1, name: 'Helm', item: siteUrl('/')},
            {'@type': 'ListItem', position: 2, name: 'Pricing', item: siteUrl('/pricing')},
          ],
        }}
      />
      <header className="hero lane brand-hero">
        <HeroBackdrop kind="brand-static" />
        <div className="wrap">
          <div className="eyebrow reveal">Pricing</div>
          <h1 className="reveal d1" style={{maxWidth: '18ch'}}>
            Published starting prices. Scope in writing.
          </h1>
          <p className="sub reveal d2">
            Mail, Aware Managed, and Watch use clear monthly unit pricing.
            Aware workshops and Ready projects use a fixed fee, with the final
            scope written down before work starts.
          </p>
        </div>
        <ScrollCue />
      </header>

      <Band variant="raised">
        <div className="product-grid four">
          {productList.map((p, i) => (
            <div key={p.slug} className={`product-tile observe d${i + 1}`}>
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
                  <h3 style={{fontSize: 24}}>{p.price}</h3>
                  <p>{p.priceDetail}</p>
                </>
              )}
              <ul className="check-list" style={{marginBottom: 8}}>
                {p.features.map((f) => (
                  <li key={f.title}>{f.title}</li>
                ))}
              </ul>
              <Link to={`/${p.slug}/`} className="price" style={{textDecoration: 'none', color: 'light-dark(#0c7a44, #AAE2C4)'}}>
                Learn more about {p.name} →
              </Link>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="band-head">
          <h2 className="observe">How the numbers work</h2>
          <p className="observe d1">
            A 20-person business runs $300/month on Helm Mail, which is also
            the monthly account minimum. Ten covered endpoints run $150/month
            on Helm Watch. Helm Aware Managed is $10 per active learner with no
            customer minimum. Aware workshops and Ready projects have defined
            scope bands so a smaller engagement does not subsidize a larger one.
          </p>
        </div>
        <div className="pricing-terms">
          <article className="pricing-term observe">
            <div className="pricing-term-kicker">Mail and Watch</div>
            <h3>Month to month</h3>
            <p>For Mail and Watch, with setup included and no cancellation fee.</p>
          </article>
          <article className="pricing-term observe d1">
            <div className="pricing-term-kicker">Aware Managed</div>
            <h3>12-month initial term</h3>
            <p>Monthly billing at $10 per active learner, with setup included and no customer account minimum.</p>
          </article>
          <article className="pricing-term observe d2">
            <div className="pricing-term-kicker">Aware workshops and Ready</div>
            <h3>Fixed fee</h3>
            <p>Deliverables, exclusions, and separately priced follow-on work are written down before the project starts.</p>
          </article>
        </div>
      </Band>

      <CtaBand
        title="Not sure which one you need?"
        sub="Start with the free scan: the report flags gaps in your public domain configuration and explains the next steps."
        source="pricing cta"
      />
    </>
  );
}
