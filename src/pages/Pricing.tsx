import HeroBackdrop from '../components/HeroBackdrop';
import {Link} from 'react-router-dom';
import {Band, CtaBand, DirectionIcon, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {siteUrl} from '../lib/urls';
import ProductMotif from '../components/ProductMotif';
import {productList} from './products';
import './Pricing.css';

/**
 * Command leads as the flagship. The four standardized offers retain their
 * 2x2 scan order beneath it.
 */
const tileOrder = ['helm-command', 'helm-mail', 'helm-watch', 'helm-ready', 'helm-aware'];
const tileRank = (slug: string) => {
  const i = tileOrder.indexOf(slug);
  return i === -1 ? tileOrder.length : i;
};
const pricingTiles = [...productList].sort((a, b) => tileRank(a.slug) - tileRank(b.slug));

/**
 * The term chip beside each price already says "Fixed fee", so a trailing
 * "fixed fee" in the published price string would read twice on this page.
 */
const displayPrice = (price: string) => price.replace(/\s+fixed fee$/i, '');

type PricingLedgerRow = {
  offer: string;
  slug: string;
  bestFor: string;
  price: string;
  commitment: string;
  minimum: string;
};

/**
 * One row per purchasable offer. Values below restate facts already published
 * in the product catalog and FAQs; the ledger introduces no new terms.
 */
const pricingLedger: PricingLedgerRow[] = pricingTiles.flatMap((product) => {
  if (product.slug === 'helm-aware' && product.pricingOptions) {
    return product.pricingOptions.map((option) => ({
      offer: option.name,
      slug: product.slug,
      bestFor: option.name === 'Helm Aware Managed'
        ? 'Teams that need managed monthly learning and phishing'
        : 'Teams that need an AI scam readiness workshop',
      price: displayPrice(option.price),
      commitment: option.term,
      minimum: option.name === 'Helm Aware Managed'
        ? 'No account minimum'
        : '$2,500 project fee',
    }));
  }

  const minimumBySlug: Record<string, string> = {
    'helm-command': 'Qualified fit required',
    'helm-mail': 'No seat minimum',
    'helm-watch': '$150 / month account',
    'helm-ready': '$2,500 project fee',
  };

  return [{
    offer: product.name,
    slug: product.slug,
    bestFor: product.bestFor,
    price: product.commercialState === 'design-partner' ? 'Fit review' : displayPrice(product.price),
    commitment: product.term,
    minimum: minimumBySlug[product.slug] ?? 'See offer details',
  }];
});

export default function Pricing() {
  return (
    <>
      <Meta
        title="Pricing: Clear Scope, No Surprises | Helm"
        desc="Fit-priced security program leadership through Helm Command, plus published pricing for email security, awareness, compliance readiness, and endpoint monitoring."
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
            Clear pricing. Scope in writing.
          </h1>
          <p className="sub reveal d2">
            Command begins with a fit and complexity review while qualified
            design-partner enrollment is open. Mail, Aware, Ready, and Watch
            retain published unit or project pricing.
          </p>
        </div>
        <ScrollCue />
      </header>

      <section className="pricing-ledger" aria-labelledby="pricing-ledger-title">
        <div className="wrap">
          <div className="pricing-ledger-head">
            <h2 id="pricing-ledger-title" className="observe">Compare every offer</h2>
            <p className="observe d1">
              Start with fit, price, and commitment. Then open the offer for
              included services, exclusions, and frequently asked questions.
            </p>
          </div>
          <div className="pricing-ledger-scroll observe d2">
            <table>
              <thead>
                <tr>
                  <th scope="col">Offer</th>
                  <th scope="col">Best for</th>
                  <th scope="col">Price approach</th>
                  <th scope="col">Commitment</th>
                  <th scope="col">Minimum</th>
                  <th scope="col"><span className="sr-only">Offer details</span></th>
                </tr>
              </thead>
              <tbody>
                {pricingLedger.map((row) => (
                  <tr key={row.offer}>
                    <th scope="row" data-label="Offer">{row.offer}</th>
                    <td data-label="Best for">{row.bestFor}</td>
                    <td data-label="Price approach" className="pricing-ledger-price">{row.price}</td>
                    <td data-label="Commitment">{row.commitment}</td>
                    <td data-label="Minimum">{row.minimum}</td>
                    <td className="pricing-ledger-action">
                      <a href={`#pricing-${row.slug}`}>
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
        <div className="product-grid four pricing-product-grid">
          {pricingTiles.map((p, i) => (
            <div
              id={`pricing-${p.slug}`}
              key={p.slug}
              className={`product-tile observe d${Math.min(i + 1, 5)}${p.commercialState === 'design-partner' ? ' pricing-flagship' : ''}`}
            >
              <ProductMotif kind={p.motif} />
              <h2 className="product-tile-title">{p.name}</h2>
              <p><strong>Best for</strong> {p.bestFor}.</p>
              {p.pricingOptions ? (
                <div className="price-options">
                  {p.pricingOptions.map((option) => (
                    <div className="price-option" key={option.name}>
                      <div className="price-option-name">{option.name}</div>
                      <div className="price-row">
                        <h3>{displayPrice(option.price)}</h3>
                        <span className="term-chip">{option.term}</span>
                      </div>
                      <p>{option.detail}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="price-row">
                    <h3>{displayPrice(p.price)}</h3>
                    <span className="term-chip">{p.term}</span>
                  </div>
                  <p>{p.priceDetail}</p>
                </>
              )}
              <ul className="check-list pricing-feature-list">
                {p.features.map((f) => (
                  <li key={f.title}>{f.title}</li>
                ))}
              </ul>
              <Link to={`/${p.slug}/`} className="tile-link">
                Learn more about {p.name} <DirectionIcon />
              </Link>
            </div>
          ))}
        </div>
      </Band>

      <Band>
        <div className="band-head">
          <h2 className="observe">How the numbers work</h2>
          <p className="observe d1">
            Standardized services multiply out in the open. Command is the
            exception while its design-partner operating model is validated:
            scope and pricing follow the fit and complexity review.
          </p>
        </div>
        <div className="price-math">
          <article className="price-math-tile observe">
            <div className="price-math-eq">20 people × $15</div>
            <div className="price-math-result">$300 / month</div>
            <p>Helm Mail for a 20-person business.</p>
          </article>
          <article className="price-math-tile observe d1">
            <div className="price-math-eq">10 endpoints × $15</div>
            <div className="price-math-result">$150 / month</div>
            <p>Helm Watch across ten covered endpoints.</p>
          </article>
          <article className="price-math-tile observe d2">
            <div className="price-math-eq">Active learners × $10</div>
            <div className="price-math-result">No minimum</div>
            <p>Helm Aware Managed, billed monthly for the learners you actually have.</p>
          </article>
        </div>
        <div className="pricing-terms">
          <article className="pricing-term observe">
            <h3>Mail and Watch: month to month</h3>
            <p>For Mail and Watch, with setup included and no cancellation fee.</p>
          </article>
          <article className="pricing-term observe d1">
            <h3>Aware Managed: 12-month initial term</h3>
            <p>Monthly billing at $10 per active learner, with setup included and no customer account minimum.</p>
          </article>
          <article className="pricing-term observe d2">
            <h3>Aware workshops and Ready: fixed fee</h3>
            <p>Deliverables, exclusions, and separately priced follow-on work are written down before the project starts.</p>
          </article>
        </div>
      </Band>

      <CtaBand
        title="Need an accountable security owner?"
        sub="Tell us what is creating pressure and who owns IT today. We will confirm whether Command or a focused service is the better fit."
        cta="Talk to us"
        source="pricing cta"
        mode="book"
      />
    </>
  );
}
