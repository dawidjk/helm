import {canonicalPath} from './urls';

export function articlePath(article: {slug: string; collection?: string}) {
  return canonicalPath(`/${article.collection === 'blog' ? 'blog' : 'resources'}/${article.slug}`);
}
