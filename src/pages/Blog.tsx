import {Link} from 'react-router-dom';
import BrandHeroBackdrop from '../components/BrandHeroBackdrop';
import {Band, DirectionIcon, ScrollCue} from '../components/Site';
import Meta from '../components/Meta';
import {articleCatalog} from './articleCatalog';
import {articlePath} from '../lib/articlePaths';
import {blogAuthor} from '../lib/blogAuthor';
import {siteUrl} from '../lib/urls';
import './Resources.css';
import './Blog.css';

const posts = articleCatalog
  .filter((article) => article.collection === 'blog')
  .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));

function displayDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC'})
    .format(new Date(`${date}T00:00:00Z`));
}

export default function Blog() {
  return (
    <>
      <Meta
        title="Blog: Security Updates for Your Business | Helm"
        desc="Recent security advisories and developments, explained for business owners working with an existing IT provider."
        path="/blog"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Helm Security Blog',
          url: siteUrl('/blog'),
          blogPost: posts.map((post) => ({'@type': 'BlogPosting', headline: post.title, url: siteUrl(articlePath(post)), datePublished: post.date, author: {'@type': 'Person', name: blogAuthor.name, url: siteUrl(blogAuthor.path)}})),
        }}
      />
      <header className="hero lane brand-hero resources-hero">
        <BrandHeroBackdrop />
        <div className="wrap">
          <h1 className="reveal d1 hero-title-compact">Security updates, explained.</h1>
          <p className="sub reveal d2">Recent advisories and developments, with the checks and decisions to discuss with your IT provider.</p>
        </div>
        <ScrollCue />
      </header>
      <Band>
        <div className="blog-index">
          <h2>Latest posts</h2>
          <div className="blog-posts">
            {posts.map((post) => (
              <Link key={post.slug} to={articlePath(post)} className="blog-post">
                <div className="blog-post-copy">
                  <h3>{post.title}</h3>
                  <p>{post.metaDesc}</p>
                  <span className="blog-post-meta"><time dateTime={post.date}>{displayDate(post.date ?? '')}</time> · {post.readMin} min read</span>
                </div>
                <DirectionIcon />
              </Link>
            ))}
          </div>
          <p className="blog-resources-link">For ongoing security work, <Link to="/resources/">browse the Resources guides</Link>.</p>
        </div>
      </Band>
    </>
  );
}
