import type { MetadataRoute } from 'next';
import { tools, pages } from '@/lib/content';
import { origin } from '@/lib/sources';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/tools', '/guides', '/sources', '/my-septic-schedule'];
  const toolRoutes = tools.map(t => '/tools/' + t.slug);
  // State and tank reference shells stay crawlable to users but out of the
  // index until each contains verified jurisdiction/model-specific facts.
  const pageRoutes = Object.keys(pages).filter(s => !s.startsWith('states/') && !s.startsWith('tanks/')).map(s => '/' + s);

  const allPaths = Array.from(new Set([...staticRoutes, ...toolRoutes, ...pageRoutes]));
  const modifiedNovember14 = new Set([
    '/',
    '/tools',
    '/guides',
    '/sources',
    '/maintenance',
    '/about',
    '/contact',
    '/privacy',
    '/privacy-choices',
    '/terms',
    '/editorial-policy',
    '/methodology',
    '/corrections',
    ...toolRoutes,
    ...pageRoutes.filter(path => path.startsWith('/guides/')),
  ]);

  return allPaths.map(path => {
    const isRoot = path === '';
    const isTool = path.startsWith('/tools/');
    const isGuide = path.startsWith('/guides/') || path === '/maintenance' || path === '/problems';

    let priority = 0.6;
    if (isRoot) priority = 1.0;
    else if (isTool || isGuide) priority = 0.8;
    else if (path === '/tools' || path === '/guides' || path === '/my-septic-schedule') priority = 0.7;

    return {
      url: origin + path,
      lastModified: new Date(modifiedNovember14.has(path) ? '2026-11-14T00:00:00Z' : '2026-10-20T00:00:00Z'),
      changeFrequency: (isRoot || isTool ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority
    };
  });
}
