import HeroBackdrop from '../components/HeroBackdrop';
import {Link} from 'react-router-dom';
import {Band, CtaBand, DirectionIcon, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {siteUrl} from '../lib/urls';
import ProductMotif from '../components/ProductMotif';
import {productList} from './products';

/**
 * Pricing-page scan order (2x2 grid): the two month-to-month unit-priced
 * services share the top row, the committed and fixed-fee offers share the
 * bottom row, and Helm Aware's heavier two-option tile closes the grid
 * instead of interrupting it mid-scan. Product pages keep catalog order.
 */
const tileOrder = ['helm-mail', 'helm-watch', 'helm-ready', 'helm-aware'];
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

export default function Pricing() {
  return (
    <>
      <Meta
        title="Pricing: Published, No Surprises | Helm"
        desc="Published Helm pricing for managed email security, awareness training, AI scam workshops, compliance readiness, and endpoint monitoring."
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
          <h1 className="reveal d1 hero-title-compact">
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
          {pricingTiles.map((p, i) => (
            <div key={p.slug} className={`product-tile observe d${Math.min(i + 1, 5)}`}>
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
            Unit prices multiply out in the open. Aware workshops and Ready
            projects have defined scope bands so a smaller engagement does
            not subsidize a larger one.
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
        title="Not sure which one you need?"
        sub="Start with the free scan: the report flags gaps in your public domain configuration and explains the next steps."
        source="pricing cta"
      />
    </>
  );
}
