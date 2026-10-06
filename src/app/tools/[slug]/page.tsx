import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { tools } from '@/lib/content';
import { toolGuidance } from '@/lib/toolGuidance';
import { origin, sources } from '@/lib/sources';
import ShareButtons from '@/components/ShareButtons';
import Calculator, { Kind } from '@/components/Calculator';
import PageHead from '@/components/PageHead';
import SourceList from '@/components/SourceList';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() { return tools.map(t => ({ slug: t.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  return tool ? { title: tool.title, description: tool.description, alternates: { canonical: '/tools/' + slug }, openGraph: { title: tool.title, description: tool.description, url: '/tools/' + slug }, twitter: { card: 'summary', title: tool.title, description: tool.description } } : {};
}
export default async function Tool({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  if (!tool) notFound();
  const guidance = toolGuidance[slug];
  const url = origin + '/tools/' + slug;
  return <>
    <PageHead title={tool.title} description={tool.description} />
    <section className="container page-body"><Calculator kind={tool.kind as Kind} />
      <div className="tool-reading article rich-article"><ShareButtons title={tool.title} url={url} />
        {guidance.sections.map(section => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}{section.steps && <ol>{section.steps.map(step => <li key={step}>{step}</li>)}</ol>}</section>)}
        <section className="article-faq"><h2>Frequently asked questions</h2>{guidance.faqs.map(f => <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</section>
        <section className="related-reading"><h2>Helpful septic guides and tools</h2><ul>{guidance.related.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></section>
        <details className="calculation-details"><summary>Calculation details and sources</summary><p>{tool.method}</p>{tool.sources.length > 0 && <SourceList ids={tool.sources} />}</details>
      </div>
    </section>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebApplication', '@id': url + '#tool', name: tool.title, url, applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web browser', browserRequirements: 'JavaScript enabled', description: tool.description, inLanguage: 'en-US', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, publisher: { '@id': origin + '/#organization' }, citation: sources.filter(s => (tool.sources as readonly string[]).includes(s.id)).map(s => s.url) }} />
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: origin }, { '@type': 'ListItem', position: 2, name: 'Septic tools', item: origin + '/tools' }, { '@type': 'ListItem', position: 3, name: tool.title, item: url }] }} />
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: guidance.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }} />
  </>;
}
