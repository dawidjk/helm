import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {ActionLink, Band} from '../components/Site';
import BrandHeroBackdrop from '../components/BrandHeroBackdrop';
import Meta from '../components/Meta';
import {renderParagraph} from '../lib/richText';
import type {CountyPageCopy} from './countyPages';
import './Resources.css';

export default function CountyPage({page}: {page: CountyPageCopy}) {
  return <>
    <Meta title={page.title} desc={page.description} path={`/service-areas/${page.slug}/`} jsonLd={page.schema} />
    <header className="hero lane brand-hero article-read-hero">
      <BrandHeroBackdrop />
      <div className="wrap article-head">
        <nav className="county-breadcrumb" aria-label="Breadcrumb"><Link to="/">Helm</Link><span aria-hidden> / </span><Link to="/service-areas/">Service areas</Link><span aria-hidden> / </span><span aria-current="page">{page.county} County</span></nav>
        <h1>{page.h1}</h1>
        <p className="sub">{page.intro}</p>
        <ActionLink to="/contact/" label={page.cta} />
      </div>
    </header>
    <Band><article className="article-body article-read-body county-reading">
      {page.blocks.map((block,index) => <Fragment key={index}>
        {block.kind==='paragraph' ? <p>{renderParagraph(block.paragraph)}</p> : block.level===2 ? <h2>{block.text}</h2> : <h3>{block.text}</h3>}
      </Fragment>)}
    </article></Band>
  </>;
}
