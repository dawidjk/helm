import {CommandReadinessSection} from './CommandReadinessSection';
import BrandHeroBackdrop from '../components/BrandHeroBackdrop';
import {Link} from 'react-router-dom';
import {Band, CtaBand, DirectionIcon, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {siteUrl} from '../lib/urls';
import ProductMotif from '../components/ProductMotif';
import {productList} from './products';
import './Pricing.css';

const pricingTiles = [...productList].sort((a, b) =>
  ['helm-core', 'helm-command'].indexOf(a.slug) - ['helm-core', 'helm-command'].indexOf(b.slug));

const minimumBySlug: Record<string, string> = {
  'helm-core': '$500 / month account',
};

export default function Pricing() {
  return (
    <>
      <Meta
        title="Pricing: Helm Core and Helm Command | Helm"
        desc="Two managed security offers: Helm Core at $125 per covered user each month with a $500 monthly account minimum, and Helm Command."
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
      <header className="hero lane brand-hero pricing-hero">
        <BrandHeroBackdrop />
        <div className="wrap">
          <h1 className="reveal d1 hero-title-compact">
            Managed protection, with leadership when you need it.
          </h1>
          <p className="sub reveal d2">
            If your organization has 20 to 75 people and already owns its security decisions, Core provides standardized managed protection. Command adds ongoing security-program leadership for larger or more complex organizations. Both work alongside your current IT provider or internal team.
          </p>
        </div>
        <ScrollCue />
      </header>

      <section className="pricing-ledger" aria-labelledby="pricing-ledger-title">
        <div className="wrap">
          <div className="pricing-ledger-head">
            <h2 id="pricing-ledger-title" className="observe">Compare the two offers</h2>
            <p className="observe d1">
              Compare the work each offer covers, then consider your organization's size and how much ongoing security leadership it needs.
            </p>
          </div>
          <div className="pricing-ledger-scroll observe d2">
            <table>
              <thead>
                <tr>
                  <th scope="col">Offer</th>
                  <th scope="col">Best for</th>
                  <th scope="col">Monthly price</th>
                  <th scope="col">Commitment</th>
                  <th scope="col">Minimum</th>
                  <th scope="col"><span className="sr-only">Offer details</span></th>
                </tr>
              </thead>
              <tbody>
                {pricingTiles.map((product) => (
                  <tr key={product.slug}>
                    <th scope="row" data-label="Offer">{product.name}</th>
                    <td data-label="Best for">{product.bestFor}</td>
                    <td data-label="Monthly price" className="pricing-ledger-price">{product.price}</td>
                    <td data-label="Commitment">{product.term}</td>
                    <td data-label="Minimum">{minimumBySlug[product.slug]}</td>
                    <td className="pricing-ledger-action">
                      <a href={`#pricing-${product.slug}`}>
                        View details <DirectionIcon />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Band variant="raised">
        <div className="product-grid pricing-product-grid">
          {pricingTiles.map((product, index) => (
            <div
              id={`pricing-${product.slug}`}
              key={product.slug}
              className={`product-tile pricing-full-width observe d${index + 1}`}
            >
              <ProductMotif kind={product.motif} />
              <h2 className="product-tile-title">{product.name}</h2>
              <p><strong>Best for</strong> {product.bestFor}.</p>
              <div className="price-row">
                {product.price && <h3>{product.price}</h3>}
                <span className="term-chip">{product.term}</span>
              </div>
              <p>{product.priceDetail}</p>
              <ul className="check-list pricing-feature-list">
                {product.features.map((feature) => (
                  <li key={feature.title}>{feature.title}</li>
                ))}
              </ul>
              <Link to={`/${product.slug}/`} className="tile-link">
                Learn more about {product.name} <DirectionIcon />
              </Link>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="band-head">
          <h2 className="observe">What the price looks like in practice</h2>
          <p className="observe d1">
            Core is priced by covered user. Final quotes depend on covered users and agreed scope, including the systems, evidence work and coordination required.
          </p>
        </div>
        <div className="price-math">
          <article className="price-math-tile observe">
            <div className="price-math-eq">4 covered users × $125</div>
            <div className="price-math-result">$500 / month</div>
            <p>At Helm Core's monthly minimum, you get the covered Core protection stack and monthly reporting.</p>
          </article>
          <article className="price-math-tile observe d1">
            <div className="price-math-eq">75 to 250 people</div>
            <p>Helm Command includes the covered Core stack plus hands-on security-program ownership and quarterly leadership reviews.</p>
          </article>
        </div>
        <div className="pricing-terms">
          <article className="pricing-term observe">
            <h3>Core term choice</h3>
            <p>Choose a 12-month Core term at the current rate or a 36-month term that locks the starting price for all three years.</p>
          </article>
          <article className="pricing-term observe d1">
            <h3>Clear service boundaries</h3>
            <p>Help desk, routine IT, patching, and remediation stay with your IT provider unless a separate written scope says otherwise.</p>
            <p>Include your existing IT charges and any separately scoped work in the total budget. The <Link to="/resources/managed-service-provider-security-models/">comparison of provider models</Link> explains the responsibilities to check in each proposal.</p>
          </article>
          <article className="pricing-term observe d2">
            <h3>Assessment credit, when agreed</h3>
            <p>A separately scoped paid assessment may be credited toward the first year of Core or Command when the service order states that credit.</p>
          </article>
        </div>
      </Band>

      <CommandReadinessSection />

      <CtaBand
        title="Which service model fits?"
        sub="Talk with Helm about your security needs and whether Core or Command fits alongside your existing IT team."
        cta="Book a call"
        source="pricing cta"
      />
    </>
  );
}
