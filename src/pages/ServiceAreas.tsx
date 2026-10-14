import {Link} from 'react-router-dom';
import Meta from '../components/Meta';
import BrandHeroBackdrop from '../components/BrandHeroBackdrop';
import {ActionLink, Band, DirectionIcon} from '../components/Site';
import {countyCatalog} from './countyCatalog';
import './Resources.css';

// Hub labels and coverage sentence reuse reviewed county copy and breadcrumbs.
export default function ServiceAreas() {
  return <>
    <Meta title="Service areas | Helm" desc="On-site visits are available across New Jersey." path="/service-areas/" jsonLd={{'@context':'https://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Helm',item:'https://helmsecured.com/'},{'@type':'ListItem',position:2,name:'Service areas',item:'https://helmsecured.com/service-areas/'}]}} />
    <header className="hero lane brand-hero article-read-hero"><BrandHeroBackdrop /><div className="wrap article-head"><h1>Service areas</h1><p className="sub">On-site visits are available across New Jersey.</p><ActionLink to="/contact/" label="Discuss your security needs" /></div></header>
    <Band><nav className="lane-strip" aria-label="Service areas">
      {countyCatalog.map(page => <Link key={page.slug} to={`/service-areas/${page.slug}/`} className="lane-row"><span className="lane-title">{page.county} County</span><DirectionIcon className="lane-arrow" /></Link>)}
    </nav></Band>
  </>;
}
