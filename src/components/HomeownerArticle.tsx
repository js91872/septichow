import Link from 'next/link';
import { articles, type HomeownerArticle as Article } from '@/lib/articles';
import { origin, sources } from '@/lib/sources';
import { articleImages } from '@/lib/articleImages';
import ShareButtons from '@/components/ShareButtons';
import Diagram from '@/components/Diagram';
import JsonLd from '@/components/JsonLd';
import PageHead from '@/components/PageHead';
import SourceList from '@/components/SourceList';
import { buildArticleJsonLd, type BreadcrumbItem } from '@/lib/schema';

export function articleWordCount(article: Article) {
  return [article.summary, ...article.sections.flatMap(s => [s.title, ...s.paragraphs, ...(s.bullets || []), ...(s.steps || []), ...(s.table?.rows.flat() || [])]), ...article.faqs.flatMap(f => [f.question, f.answer])].join(' ').split(/\s+/).length;
}

export default function HomeownerArticle({ path }: { path: string }) {
  const article = articles[path];
  const feature = articleImages[path];
  const url = origin + '/' + path;
  const wordCount = articleWordCount(article);
  const batch3Guides = ["guides/septic-tank-pumping-cost","guides/septic-system-installation-cost","guides/septic-tank-filter-cleaning","guides/septic-tank-backing-up-after-rain"];
  const batch2Guides = ["guides/signs-septic-tank-is-full","guides/how-to-fix-septic-drain-field","guides/septic-drain-field-replacement-cost","guides/septic-inspection-cost","guides/septic-tank-alarm-going-off","guides/clogged-septic-drain-field"];
  const publishDate = batch3Guides.includes(path) ? '2026-10-20T00:00:00Z' : batch2Guides.includes(path) ? '2026-10-10T00:00:00Z' : '2026-10-04T00:00:00Z';
  const wasUpdatedNov14 = path === 'maintenance' || path === 'guides/septic-tank-pumping-cost';
  const modifiedDate = wasUpdatedNov14 ? '2026-11-14T00:00:00Z' : '2026-10-20T00:00:00Z';
  const breadcrumbs: BreadcrumbItem[] = [{ name: 'Home', path: '/' }, ...(path.startsWith('guides/') ? [{ name: 'Septic guides', path: '/guides' }] : []), { name: article.title, path: `/${path}` }];
  return <>
    <PageHead title={article.title} description={article.description} />
    <div className="container page-body article-shell">
      <article className="article rich-article">
        <p className="article-meta">Published by <Link href="/about">Daniel L. Murray</Link>, Publisher · Updated {wasUpdatedNov14 ? 'November 14, 2026' : 'October 20, 2026'} · {Math.ceil(wordCount / 220)} min read</p>
        <figure className="article-feature"><img src={feature.src} alt={feature.alt} width={1200} height={630} fetchPriority="high" /><figcaption>{feature.caption}</figcaption></figure>
        <ShareButtons title={article.title} url={url} />
        <div className="quick-answer"><strong>The quick answer</strong><p>{article.summary}</p></div>
        <nav className="article-toc" aria-label="On this page"><h2>On this page</h2><ul>{article.sections.map(s => <li key={s.id}><a href={'#' + s.id}>{s.title}</a></li>)}<li><a href="#questions">Frequently asked questions</a></li></ul></nav>
        {path === 'guides/how-septic-system-works' && <figure><Diagram /><figcaption>A conventional septic system: house, tank and drain field.</figcaption></figure>}
        {article.sections.map((section, sectionIndex) => <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((text, index) => <p key={index}>{text}</p>)}
          {section.bullets && <ul>{section.bullets.map(text => <li key={text}>{text}</li>)}</ul>}
          {section.steps && <ol>{section.steps.map(text => <li key={text}>{text}</li>)}</ol>}
          {section.table && <div className="article-table" tabIndex={0} role="region" aria-label={section.title + ' table'}><table><caption>{section.title}</caption><thead><tr>{section.table.headers.map(h => <th key={h} scope="col">{h}</th>)}</tr></thead><tbody>{section.table.rows.map((row, index) => <tr key={index}>{row.map((cell, column) => column === 0 ? <th key={column} scope="row">{cell}</th> : <td key={column}>{cell}</td>)}</tr>)}</tbody></table></div>}
          {section.links && <div className="article-next">{section.links.map(link => <Link key={link.href} href={link.href}>{link.label} →</Link>)}</div>}
          {sectionIndex === 2 && article.related.length > 0 && <nav className="article-next" aria-label="Helpful related septic resources">{article.related.slice(0, 2).map(link => <Link key={link.href} href={link.href}>{link.label} →</Link>)}</nav>}
        </section>)}
        <section id="questions" className="article-faq"><h2>Frequently asked questions</h2>{article.faqs.map(f => <details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</section>
        <section className="related-reading"><h2>Keep reading</h2><ul>{article.related.slice(2).map(link => <li key={link.href}><Link href={link.href}>{link.label}</Link></li>)}</ul></section>
        <SourceList ids={article.sourceIds} />
      </article>
    </div>
    <JsonLd data={buildArticleJsonLd({
      path: `/${path}`,
      headline: article.title,
      description: article.description,
      datePublished: publishDate,
      dateModified: modifiedDate,
      imageUrl: feature.src,
      section: article.sections.map(section => section.title),
      citations: sources.filter(s => article.sourceIds.includes(s.id)).map(s => s.url),
      breadcrumbs,
      faqs: article.faqs,
      wordCount,
      keywords: article.keywords,
    })} />
  </>;
}
