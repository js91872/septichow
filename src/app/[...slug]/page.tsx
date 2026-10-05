import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { pages } from '@/lib/content';
import { articles } from '@/lib/articles';
import { sources, origin } from '@/lib/sources';
import PageHead from '@/components/PageHead';
import SourceList from '@/components/SourceList';
import HomeownerArticle from '@/components/HomeownerArticle';
import JsonLd from '@/components/JsonLd';

const hubs = {
  sources: { title: 'Septic System Information & Official Sources', description: 'Explore the public agency and university references used in our septic tank guides and calculators.' },
  guides: { title: 'Septic Tank Guides: How It Works, Maintenance & Problems', description: 'Simple septic system guides for homeowners. Learn how your tank works, plan pumping and find the next step for smells, slow drains and backups.' }
};
export function generateStaticParams() { return [...Object.keys(pages), 'sources', 'guides'].map(path => ({ slug: path.split('/') })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join('/');
  const page = pages[path] || hubs[path as keyof typeof hubs];
  if (!page) return {};
  return { title: page.title, description: page.description, alternates: { canonical: '/' + path }, openGraph: { title: page.title, description: page.description, url: '/' + path, type: articles[path] ? 'article' : 'website', ...(articles[path] ? { publishedTime: '2026-10-04T00:00:00Z', modifiedTime: '2026-10-05T00:00:00Z' } : {}) }, twitter: { card: 'summary', title: page.title, description: page.description } };
}
export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = slug.join('/');
  if (articles[path]) return <HomeownerArticle path={path} />;
  if (path === 'sources') return <><PageHead {...hubs.sources} /><div className="container page-body article"><SourceList ids={sources.map(s => s.id)} /></div></>;
  if (path === 'guides') return <><PageHead {...hubs.guides} /><div className="container page-body guide-list">{Object.entries(articles).map(([articlePath, article], index) => <Link key={articlePath} href={'/' + articlePath}><span className="guide-number">0{index + 1}</span><div><h2>{article.title}</h2><p>{article.description}</p><span className="text-link">Read the guide →</span></div></Link>)}</div><JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: hubs.guides.title, description: hubs.guides.description, url: origin + '/guides', mainEntity: { '@type': 'ItemList', itemListElement: Object.entries(articles).map(([articlePath, article], index) => ({ '@type': 'ListItem', position: index + 1, name: article.title, url: origin + '/' + articlePath })) } }} /></>;
  const page = pages[path];
  if (!page) notFound();
  return <><PageHead title={page.title} description={page.description} /><div className="container page-body"><article className="article">{page.sections.map(([title, text]) => <section key={title}><h2>{title}</h2><p>{text}</p></section>)}{page.sourceIds && <SourceList ids={page.sourceIds} />}<div className="source-list"><Link href="/tools">Explore free septic tools →</Link></div></article></div></>;
}
