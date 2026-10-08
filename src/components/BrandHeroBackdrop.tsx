import japandiSecondaryHero from '../assets/brand/japandi-secondary-hero.webp';
import japandiSecondaryHero1536 from '../assets/brand/japandi-secondary-hero-1536.webp';

export default function BrandHeroBackdrop() {
  return (
    <div className="hero-backdrop brand-static" aria-hidden>
      <picture className="backdrop-picture japandi-backdrop-picture">
        <source
          media="(min-width: 361px) and (max-width: 700px) and (min-height: 621px)"
          srcSet={`${japandiSecondaryHero1536} 1536w, ${japandiSecondaryHero} 2048w`}
          sizes="max(100vw, 178svh)"
        />
        <img
          src={japandiSecondaryHero}
          width="2048"
          height="1152"
          alt=""
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
}
