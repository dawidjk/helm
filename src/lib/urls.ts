export const SITE_ORIGIN = 'https://helmsecured.com';

/**
 * GitHub Pages serves this site's generated directory pages at trailing-slash
 * URLs. Keep links and canonical signals aligned with the final served URL so
 * crawlers do not have to pass through a redirect.
 */
export function canonicalPath(value: string): string {
  if (!value.startsWith('/') || value.startsWith('//')) return value;

  const match = value.match(/^([^?#]*)(.*)$/);
  if (!match) return value;

  const [, pathname, suffix] = match;
  if (pathname === '/' || pathname.endsWith('/') || /\.[a-z0-9]+$/i.test(pathname)) {
    return value;
  }

  return `${pathname}/${suffix}`;
}

export function siteUrl(path = '/'): string {
  return `${SITE_ORIGIN}${canonicalPath(path)}`;
}
