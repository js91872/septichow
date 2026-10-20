import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { pages } from '@/lib/content';
import { articleImages } from '@/lib/articleImages';
import ShareButtons from '@/components/ShareButtons';
import { articles } from '@/lib/articles';
import { sources, origin } from '@/lib/sources';
import PageHead from '@/components/PageHead';
import SourceList from '@/components/SourceList';
import HomeownerArticle from '@/components/HomeownerArticle';
import JsonLd from '@/components/JsonLd';

const hubs = {
  sources: { title: 'Septic System Information & Official Sources', description: 'Explore the public agency and university references used in our septic tank guides and calculators.' },
  guides: { title: 'Septic Tank Guides: Maintenance, Costs and Common Problems', description: 'Simple septic system guides for homeowners. Learn how your tank works, plan pumping and find the next step for smells, slow drains and backups.' }
};
const batch3Guides = ["guides/septic-tank-pumping-cost","guides/septic-system-installation-cost","guides/septic-tank-filter-cleaning","guides/septic-tank-backing-up-after-rain"];
const batch2Guides = ["guides/signs-septic-tank-is-full","guides/how-to-fix-septic-drain-field","guides/septic-drain-field-replacement-cost","guides/septic-inspection-cost","guides/septic-tank-alarm-going-off","guides/clogged-septic-drain-field"];

export function generateStaticParams() { return [...Object.keys(pages), 'sources', 'guides'].map(path => ({ slug: path.split('/') })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join('/');
  const page = pages[path] || hubs[path as keyof typeof hubs];
  if (!page) return {};
  const isArticle = Boolean(articles[path]);
  const pubDate = batch3Guides.includes(path) ? '2026-10-20T00:00:00Z' : batch2Guides.includes(path) ? '2026-10-10T00:00:00Z' : '2026-10-04T00:00:00Z';
  const modDate = '2026-10-20T00:00:00Z';
  const image = articleImages[path];
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: '/' + path },
    openGraph: {
      title: page.title,
      description: page.description,
      url: '/' + path,
      type: isArticle ? 'article' : 'website',
      ...(isArticle && image ? {
        publishedTime: pubDate,
        modifiedTime: modDate,
        images: [{ url: image.src, width: 1200, height: 630, alt: image.alt }]
      } : {})
    },
    twitter: {
      card: isArticle && image ? 'summary_large_image' : 'summary',
      title: page.title,
      description: page.description,
      ...(isArticle && image ? { images: [image.src] } : {})
    }
  };
}
export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = slug.join('/');
  if (articles[path]) return <HomeownerArticle path={path} />;
  if (path === 'sources') return <><PageHead {...hubs.sources} /><div className="container page-body article"><p>Our references include EPA septic maintenance and malfunction guidance, university cooperative extension resources and an explicitly labeled Minnesota tank-capacity rule. Check the original publication for details and consult local health authorities for permits and site-specific installation requirements.</p><SourceList ids={sources.map(s => s.id)} /></div></>;
  if (path === 'guides') return <><PageHead {...hubs.guides} /><div className="container page-body"><div className="article tool-reading"><h2>Practical answers to common septic tank questions</h2><p>Explore practical septic system guides for homeowners: how septic tanks work, drain field repairs, replacement costs, inspection costs, pumping fees, effluent filter cleaning, and emergency backups after heavy storms. For routine service planning, read <Link href="/maintenance">how often you should pump your septic tank</Link>. For odors, backups and slow drains, visit <Link href="/problems">septic tank troubleshooting</Link>. Use our <Link href="/tools">free septic calculators</Link> to plan a service date or compare an itemized contractor quote.</p></div><div className="guide-list">{Object.entries(articles).map(([articlePath, article]) => <Link key={articlePath} href={'/' + articlePath}><img className="guide-thumbnail" src={articleImages[articlePath].src} alt={articleImages[articlePath].alt} width={1200} height={630} loading="lazy" /><div><h2>{article.title}</h2><p>{article.description}</p><span className="text-link">Read the guide →</span></div></Link>)}</div></div><JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: hubs.guides.title, description: hubs.guides.description, url: origin + '/guides', mainEntity: { '@type': 'ItemList', itemListElement: Object.entries(articles).map(([articlePath, article], index) => ({ '@type': 'ListItem', position: index + 1, name: article.title, url: origin + '/' + articlePath })) } }} /></>;
  const page = pages[path];
  if (!page) notFound();
  return <><PageHead title={page.title} description={page.description} /><div className="container page-body article-shell"><article className="article rich-article">{path === 'contact' && <div className="contact-card"><span className="eyebrow">EMAIL SEPTICHOW</span><a href="mailto:info@septichow.com">info@septichow.com</a><p>Questions, feedback and content corrections.</p></div>}{page.sections.map(([title, text]) => <section key={title}><h2>{title}</h2>{text.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}</section>)}{page.sourceIds && <SourceList ids={page.sourceIds} />}{path === 'corrections' && <p><Link href="/contact">Contact SepticHow →</Link></p>}<div className="source-list"><Link href="/tools">Explore free septic tools →</Link><p><Link href="/guides">Read the septic homeowner guides →</Link></p></div></article></div><JsonLd data={{ '@context': 'https://schema.org', '@type': path === 'about' ? 'AboutPage' : path === 'contact' ? 'ContactPage' : 'WebPage', '@id': origin + '/' + path + '#page', name: page.title, description: page.description, url: origin + '/' + path, inLanguage: 'en-US', dateModified: '2026-10-20', isPartOf: { '@type': 'WebSite', name: 'SepticHow', url: origin }, ...(path === 'about' ? { mainEntity: { '@id': origin + '/#organization' } } : {}) }} /><JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: page.title, item: origin + '/' + path }] }} /></>;
}
