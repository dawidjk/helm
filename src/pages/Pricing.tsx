import HeroBackdrop from '../components/HeroBackdrop';
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
  'helm-core': '$2,500 / month account',
  'helm-command': '$8,000 / month account',
};

export default function Pricing() {
  return (
    <>
      <Meta
        title="Pricing: Helm Core and Helm Command | Helm"
        desc="Two managed security offers: Helm Core at $125 per user each month with a $2,500 minimum, and Helm Command from $8,000 to $15,000 per month."
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
        <HeroBackdrop kind="brand-static" />
        <div className="wrap">
          <h1 className="reveal d1 hero-title-compact">
            Two offers. One complete security foundation.
          </h1>
          <p className="sub reveal d2">
            Core gives a 20 to 75 person organization a standardized managed
            security stack. Command adds hands-on program ownership for larger
            or more complex organizations. Both keep general IT with your
            current provider or internal team.
          </p>
        </div>
        <ScrollCue />
      </header>

      <section className="pricing-ledger" aria-labelledby="pricing-ledger-title">
        <div className="wrap">
          <div className="pricing-ledger-head">
            <h2 id="pricing-ledger-title" className="observe">Compare the two offers</h2>
            <p className="observe d1">
              Start with the service model that matches the organization&apos;s
              size and the amount of ongoing leadership it needs.
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
                <h3>{product.price}</h3>
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
            Core is priced by covered user. Command is one all-in monthly price
            based on the systems, evidence, and coordination load confirmed in
            the fit review.
          </p>
        </div>
        <div className="price-math">
          <article className="price-math-tile observe">
            <div className="price-math-eq">20 people × $125</div>
            <div className="price-math-result">$2,500 / month</div>
            <p>Helm Core&apos;s minimum relationship, including the complete standardized protection stack and monthly reporting.</p>
          </article>
          <article className="price-math-tile observe d1">
            <div className="price-math-eq">75 to 250 people</div>
            <div className="price-math-result">$8,000 to $15,000 / month</div>
            <p>Helm Command includes the covered Core stack plus hands-on security-program ownership and quarterly leadership cadence.</p>
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
          </article>
          <article className="pricing-term observe d2">
            <h3>Paid discovery is credited</h3>
            <p>When a separately scoped assessment is needed, its fee is credited toward the first year after a Core or Command agreement starts.</p>
          </article>
        </div>
      </Band>

      <CtaBand
        title="Which service model fits?"
        sub="Tell us how many people you protect, who owns IT today, and what is creating pressure. We will confirm whether Core or Command is the right fit."
        cta="Talk to us"
        source="pricing cta"
        mode="book"
      />
    </>
  );
}
