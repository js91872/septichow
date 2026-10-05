import Link from 'next/link';
import { articles, type HomeownerArticle as Article } from '@/lib/articles';
import { origin, sources } from '@/lib/sources';
import Diagram from '@/components/Diagram';
import JsonLd from '@/components/JsonLd';
import PageHead from '@/components/PageHead';
import SourceList from '@/components/SourceList';

export function articleWordCount(article: Article) {
  return [article.summary, ...article.sections.flatMap(s => [s.title, ...s.paragraphs, ...(s.bullets || []), ...(s.table?.rows.flat() || [])]), ...article.faqs.flatMap(f => [f.question, f.answer])].join(' ').split(/\s+/).length;
}

export default function HomeownerArticle({ path }: { path: string }) {
  const article = articles[path];
  const url = origin + '/' + path;
  const wordCount = articleWordCount(article);
  const breadcrumbs = [{ '@type': 'ListItem', position: 1, name: 'Home', item: origin }, ...(path.startsWith('guides/') ? [{ '@type': 'ListItem', position: 2, name: 'Septic guides', item: origin + '/guides' }] : []), { '@type': 'ListItem', position: path.startsWith('guides/') ? 3 : 2, name: article.title, item: url }];
  return <>
    <PageHead title={article.title} description={article.description} />
    <div className="container page-body article-shell">
      <article className="article rich-article">
        <p className="article-meta">By <Link href="/about">SepticHow editorial team</Link> · Updated October 5, 2026 · {Math.ceil(wordCount / 220)} min read</p>
        <div className="quick-answer"><strong>The quick answer</strong><p>{article.summary}</p></div>
        <nav className="article-toc" aria-label="On this page"><h2>On this page</h2><ul>{article.sections.map(s => <li key={s.id}><a href={'#' + s.id}>{s.title}</a></li>)}<li><a href="#questions">Frequently asked questions</a></li></ul></nav>
        {path === 'guides/how-septic-system-works' && <figure><Diagram /><figcaption>A conventional septic system: house, tank and drain field.</figcaption></figure>}
        {article.sections.map(section => <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((text, index) => <p key={index}>{text}</p>)}
          {section.bullets && <ul>{section.bullets.map(text => <li key={text}>{text}</li>)}</ul>}
          {section.table && <div className="article-table" tabIndex={0} role="region" aria-label={section.title + ' table'}><table><caption>{section.title}</caption><thead><tr>{section.table.headers.map(h => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, column) => column === 0 ? <th key={column} scope="row">{cell}</th> : <td key={column}>{cell}</td>)}</tr>)}</tbody></table></div>}
          {section.links && <div className="article-next">{section.links.map(link => <Link key={link.href} href={link.href}>{link.label} →</Link>)}</div>}
        </section>)}
        <section id="questions" className="article-faq"><h2>Frequently asked questions</h2>{article.faqs.map(f => <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</section>
        <section className="related-reading"><h2>Keep reading</h2><ul>{article.related.map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></section>
        <SourceList ids={article.sourceIds} />
      </article>
    </div>
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', '@id': url + '#article', headline: article.title, description: article.description, datePublished: '2026-10-04T00:00:00Z', dateModified: '2026-10-05T00:00:00Z', author: { '@type': 'Organization', name: 'SepticHow editorial team', url: origin + '/about' }, publisher: { '@id': origin + '/#organization' }, mainEntityOfPage: { '@type': 'WebPage', '@id': url }, inLanguage: 'en-US', isAccessibleForFree: true, wordCount, keywords: article.keywords.join(', '), articleSection: article.sections.map(s => s.title), citation: sources.filter(s => article.sourceIds.includes(s.id)).map(s => s.url) }} />
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: breadcrumbs }} />
    <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': url + '#faq', mainEntity: article.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }} />
  </>;
}
