import HeroBackdrop from '../components/HeroBackdrop';
import {Link} from 'react-router-dom';
import {Band, CtaBand, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import ProductMotif from '../components/ProductMotif';
import {productList} from './products';

export default function Pricing() {
  return (
    <>
      <Meta
        title="Pricing: Published, No Surprises | Helm"
        desc="Helm pricing: email security from $15/user/month, AI scam defense from $1,500, compliance from $2,500, 24/7 endpoint monitoring $15/endpoint/month. Published prices."
        path="/pricing"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {'@type': 'ListItem', position: 1, name: 'Helm', item: 'https://helmsecured.com'},
            {'@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://helmsecured.com/pricing'},
          ],
        }}
      />
      <header className="hero lane">
        <HeroBackdrop kind="rain" />
        <div className="wrap">
          <div className="eyebrow reveal">Pricing</div>
          <h1 className="reveal d1" style={{maxWidth: '18ch'}}>
            Published prices. No "call us."
          </h1>
          <p className="sub reveal d2">
            Every customer pays the same published rates, on auto-pay, cancel
            anytime. If a vendor won't show you a price, they're pricing you.
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
              <h3 style={{fontSize: 24}}>{p.price}</h3>
              <p>{p.priceDetail}</p>
              <ul className="check-list" style={{marginBottom: 8}}>
                {p.features.map((f) => (
                  <li key={f.title}>{f.title}</li>
                ))}
              </ul>
              <Link to={`/${p.slug}`} className="price" style={{textDecoration: 'none', color: 'light-dark(#0c7a44, #AAE2C4)'}}>
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
            A typical 20-person business runs $300/month on Helm Mail. Add
            Helm Aware and you're under what one hour of incident-response
            lawyering costs, per year. Compliance projects are scoped and
            priced in writing before any work starts.
          </p>
        </div>
        <div className="stats">
          <div className="stat observe">
            <div className="num">$0</div>
            <div className="lbl">onboarding fees, setup fees, or cancellation fees, ever</div>
          </div>
          <div className="stat observe d1">
            <div className="num">1 page</div>
            <div className="lbl">our agreements fit on. Auto-pay monthly, cancel anytime</div>
          </div>
          <div className="stat observe d2">
            <div className="num">100%</div>
            <div className="lbl">of pricing published on this page: verticals change the pitch, never the price</div>
          </div>
        </div>
      </Band>

      <CtaBand
        title="Not sure which one you need?"
        sub="Start with the free scan: the report tells you exactly which gaps exist, and which product (if any) closes them."
        source="pricing cta"
      />
    </>
  );
}
