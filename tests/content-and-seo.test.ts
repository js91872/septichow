import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { articles } from '../src/lib/articles.ts';
import { sources } from '../src/lib/sources.ts';
import { articleImages } from '../src/lib/articleImages.ts';
import { toolGuidance } from '../src/lib/toolGuidance.ts';

test('all homeowner articles have complete metadata, substantive content, and valid sources', () => {
  const articlePaths = Object.keys(articles);
  assert.ok(articlePaths.length >= 10, `Expected at least 10 articles, found ${articlePaths.length}`);

  const sourceMap = Object.fromEntries(sources.map((s) => [s.id, s]));

  for (const path of articlePaths) {
    const article = articles[path];
    assert.ok(article.title, `Missing title for ${path}`);
    assert.ok(article.description, `Missing description for ${path}`);
    assert.ok(article.description.length >= 70, `Meta description too short for ${path}: ${article.description.length} chars`);
    assert.ok(article.description.length <= 175, `Meta description too long for ${path}: ${article.description.length} chars`);
    assert.ok(article.summary, `Missing summary for ${path}`);
    assert.ok(article.sections.length >= 3, `Expected at least 3 sections for ${path}, found ${article.sections.length}`);
    assert.ok(article.faqs.length >= 3, `Expected at least 3 FAQs for ${path}, found ${article.faqs.length}`);

    // Verify all source IDs resolve in the sources dictionary
    for (const sourceId of article.sourceIds) {
      assert.ok(sourceMap[sourceId], `Unrecognized source ID "${sourceId}" referenced in article "${path}"`);
    }

    // Verify featured image mapping and file existence
    const imageInfo = articleImages[path];
    assert.ok(imageInfo, `Missing articleImage mapping for "${path}"`);
    assert.ok(imageInfo.src, `Missing image src for "${path}"`);
    const diskPath = join(process.cwd(), 'public', imageInfo.src.replace(/^\//, ''));
    assert.ok(existsSync(diskPath), `Featured image file does not exist on disk: ${diskPath}`);

    // Verify substantive word count (> 600 words minimum)
    let totalWords = 0;
    totalWords += article.title.split(/\s+/).length;
    totalWords += article.summary.split(/\s+/).length;
    for (const sec of article.sections) {
      totalWords += sec.title.split(/\s+/).length;
      totalWords += (sec.paragraphs || []).join(' ').split(/\s+/).filter(Boolean).length;
      totalWords += (sec.bullets || []).join(' ').split(/\s+/).filter(Boolean).length;
      totalWords += (sec.steps || []).join(' ').split(/\s+/).filter(Boolean).length;
      if (sec.table) {
        totalWords += (sec.table.headers || []).join(' ').split(/\s+/).filter(Boolean).length;
        for (const row of sec.table.rows || []) {
          totalWords += row.join(' ').split(/\s+/).filter(Boolean).length;
        }
      }
    }
    for (const faq of article.faqs) {
      totalWords += faq.question.split(/\s+/).length;
      totalWords += faq.answer.split(/\s+/).length;
    }

    assert.ok(
      totalWords >= 600,
      `Article "${path}" has only ${totalWords} words; expected substantive depth (>= 600 words)`
    );
  }
});

test('sitemap.ts is configured with complete routes and https://septichow.com domain', () => {
  const sitemapFile = readFileSync(join(process.cwd(), 'src/app/sitemap.ts'), 'utf-8');
  assert.ok(sitemapFile.includes('origin + path'), 'Sitemap must construct URLs with origin prefix');
  assert.ok(sitemapFile.includes("lastModified: new Date('2026-10-20T00:00:00Z')"), 'Sitemap must use updated date');

  // Key routes must be accounted for in articles registry
  const requiredGuideSlugs = [
    'maintenance',
    'guides/how-to-fix-septic-drain-field',
    'guides/septic-inspection-cost',
    'guides/septic-drain-field-replacement-cost',
    'guides/septic-tank-alarm-going-off',
    'guides/clogged-septic-drain-field',
    'guides/septic-tank-pumping-cost',
    'guides/septic-system-installation-cost',
    'guides/septic-tank-filter-cleaning',
    'guides/septic-tank-backing-up-after-rain',
  ];

  for (const slug of requiredGuideSlugs) {
    assert.ok(articles[slug], `Required slug "${slug}" must exist in articles registry`);
  }
});

test('tool guidance contains necessary legal/state distinctions and quote walkthroughs', () => {
  const tankGuide = toolGuidance['septic-tank-size-calculator'];
  assert.ok(tankGuide, 'Missing tank size calculator guidance');
  assert.ok(
    tankGuide.sections.some((s) => s.title.toLowerCase().includes('minnesota') || s.paragraphs.some((p) => p.includes('Minnesota Rule 7080'))),
    'Tank size guide must clarify Minnesota Rule 7080 as state-specific'
  );
  assert.ok(
    tankGuide.sections.some((s) => s.paragraphs.some((p) => p.toLowerCase().includes('wastewater flow') && p.toLowerCase().includes('capacity'))),
    'Tank size guide must distinguish estimated daily flow from required tank capacity'
  );

  const costGuide = toolGuidance['septic-pumping-cost-calculator'];
  assert.ok(costGuide, 'Missing pumping cost calculator guidance');
  assert.ok(
    costGuide.sections.some((s) => s.paragraphs.some((p) => p.toLowerCase().includes('written contractor quotes') || p.toLowerCase().includes('line items'))),
    'Cost guide must clarify that calculator totals user-entered figures'
  );
});
