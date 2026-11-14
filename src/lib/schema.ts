/** Shared JSON-LD builders for SepticHow pages, tools, guides, and FAQs. */

import { origin } from '@/lib/sources';

export const SITE_CONFIG = {
  name: 'SepticHow',
  url: origin.replace(/\/$/, ''),
  email: 'info@septichow.com',
  logoUrl: `${origin.replace(/\/$/, '')}/apple-touch-icon.png`,
  description:
    'Free septic tank calculators, maintenance planners, and homeowner guides grounded in U.S. EPA and university extension references.',
  publisher: {
    name: 'Daniel L. Murray',
    jobTitle: 'Publisher',
    locality: 'Massillon',
    region: 'OH',
    postalCode: '44646',
    country: 'US',
    sameAs: [] as string[],
  },
} as const;

export const SCHEMA_IDS = {
  organization: `${SITE_CONFIG.url}/#organization`,
  website: `${SITE_CONFIG.url}/#website`,
  publisher: `${SITE_CONFIG.url}/#publisher`,
} as const;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ToolSchemaInput {
  path: string;
  name: string;
  description: string;
  applicationSubCategory?: string;
  featureList?: string[];
  datePublished?: string;
  dateModified?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  citations?: string[];
}

export interface ArticleSchemaInput {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  imageUrl?: string;
  section?: string | string[];
  citations?: string[];
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  wordCount?: number;
  keywords?: string[];
}

function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  const normalized = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_CONFIG.url}${normalized}`;
}

/** Prevent an embedded closing script tag in JSON-LD data. */
export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function getCoreEntityNodes(): Record<string, unknown>[] {
  const personNode: Record<string, unknown> = {
    '@type': 'Person',
    '@id': SCHEMA_IDS.publisher,
    name: SITE_CONFIG.publisher.name,
    url: `${SITE_CONFIG.url}/about`,
    jobTitle: SITE_CONFIG.publisher.jobTitle,
    worksFor: { '@id': SCHEMA_IDS.organization },
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_CONFIG.publisher.locality,
      addressRegion: SITE_CONFIG.publisher.region,
      postalCode: SITE_CONFIG.publisher.postalCode,
      addressCountry: SITE_CONFIG.publisher.country,
    },
  };

  if (SITE_CONFIG.publisher.sameAs.length > 0) {
    personNode.sameAs = SITE_CONFIG.publisher.sameAs;
  }

  return [
    {
      '@type': 'Organization',
      '@id': SCHEMA_IDS.organization,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      email: SITE_CONFIG.email,
      logo: { '@type': 'ImageObject', url: SITE_CONFIG.logoUrl },
      founder: { '@id': SCHEMA_IDS.publisher },
      publishingPrinciples: `${SITE_CONFIG.url}/editorial-policy`,
      correctionsPolicy: `${SITE_CONFIG.url}/corrections`,
    },
    personNode,
    {
      '@type': 'WebSite',
      '@id': SCHEMA_IDS.website,
      url: SITE_CONFIG.url,
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      publisher: { '@id': SCHEMA_IDS.organization },
      inLanguage: 'en-US',
    },
  ];
}

export function buildCoreJsonLd(): Record<string, unknown> {
  return { '@context': 'https://schema.org', '@graph': getCoreEntityNodes() };
}

export function buildBreadcrumbNode(
  pageUrl: string,
  items: BreadcrumbItem[],
): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function buildFaqNode(
  pageUrl: string,
  faqs: FaqItem[],
): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function buildHomeJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      ...getCoreEntityNodes(),
      {
        '@type': 'WebPage',
        '@id': `${SITE_CONFIG.url}/#webpage`,
        url: SITE_CONFIG.url,
        name: 'SepticHow: Septic System Calculators, Troubleshooting & Care',
        description: SITE_CONFIG.description,
        isPartOf: { '@id': SCHEMA_IDS.website },
        about: { '@id': SCHEMA_IDS.organization },
        inLanguage: 'en-US',
      },
    ],
  };
}

export function buildToolJsonLd(input: ToolSchemaInput): Record<string, unknown> {
  const pageUrl = toAbsoluteUrl(input.path);
  const graph: Record<string, unknown>[] = [...getCoreEntityNodes()];
  const webPage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: input.name,
    description: input.description,
    isPartOf: { '@id': SCHEMA_IDS.website },
    mainEntity: { '@id': `${pageUrl}#app` },
    inLanguage: 'en-US',
  };

  if (input.datePublished) webPage.datePublished = input.datePublished;
  if (input.dateModified) webPage.dateModified = input.dateModified;
  if (input.breadcrumbs?.length) {
    webPage.breadcrumb = { '@id': `${pageUrl}#breadcrumb` };
    graph.push(buildBreadcrumbNode(pageUrl, input.breadcrumbs));
  }
  graph.push(webPage);

  const appNode: Record<string, unknown> = {
    '@type': 'SoftwareApplication',
    '@id': `${pageUrl}#app`,
    name: input.name,
    description: input.description,
    url: pageUrl,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    isAccessibleForFree: true,
    inLanguage: 'en-US',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@id': SCHEMA_IDS.publisher },
    publisher: { '@id': SCHEMA_IDS.organization },
  };
  if (input.applicationSubCategory) appNode.applicationSubCategory = input.applicationSubCategory;
  if (input.featureList?.length) appNode.featureList = input.featureList;
  if (input.citations?.length) appNode.citation = input.citations;
  graph.push(appNode);
  if (input.faqs?.length) graph.push(buildFaqNode(pageUrl, input.faqs));

  return { '@context': 'https://schema.org', '@graph': graph };
}

export function buildArticleJsonLd(input: ArticleSchemaInput): Record<string, unknown> {
  const pageUrl = toAbsoluteUrl(input.path);
  const graph: Record<string, unknown>[] = [...getCoreEntityNodes()];
  const webPage: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: input.headline,
    description: input.description,
    isPartOf: { '@id': SCHEMA_IDS.website },
    mainEntity: { '@id': `${pageUrl}#article` },
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: 'en-US',
  };
  if (input.breadcrumbs?.length) {
    webPage.breadcrumb = { '@id': `${pageUrl}#breadcrumb` };
    graph.push(buildBreadcrumbNode(pageUrl, input.breadcrumbs));
  }
  graph.push(webPage);

  const articleNode: Record<string, unknown> = {
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: input.headline,
    description: input.description,
    url: pageUrl,
    mainEntityOfPage: { '@id': `${pageUrl}#webpage` },
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: { '@id': SCHEMA_IDS.publisher },
    publisher: { '@id': SCHEMA_IDS.organization },
    isAccessibleForFree: true,
    inLanguage: 'en-US',
  };
  if (input.imageUrl) articleNode.image = toAbsoluteUrl(input.imageUrl);
  if (input.section) articleNode.articleSection = input.section;
  if (input.citations?.length) articleNode.citation = input.citations;
  if (input.wordCount !== undefined) articleNode.wordCount = input.wordCount;
  if (input.keywords?.length) articleNode.keywords = input.keywords;
  graph.push(articleNode);
  if (input.faqs?.length) graph.push(buildFaqNode(pageUrl, input.faqs));

  return { '@context': 'https://schema.org', '@graph': graph };
}
