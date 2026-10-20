import type { MetadataRoute } from 'next';
import { tools, pages } from '@/lib/content';
import { origin } from '@/lib/sources';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/tools', '/guides', '/sources', '/my-septic-schedule'];
  const toolRoutes = tools.map(t => '/tools/' + t.slug);
  const pageRoutes = Object.keys(pages).map(s => '/' + s);

  const allPaths = Array.from(new Set([...staticRoutes, ...toolRoutes, ...pageRoutes]));

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
      lastModified: new Date('2026-10-20T00:00:00Z'),
      changeFrequency: (isRoot || isTool ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority
    };
  });
}
