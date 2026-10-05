import Link from 'next/link';
import { tools } from '@/lib/content';
import { origin } from '@/lib/sources';
import PageHead from '@/components/PageHead';
import JsonLd from '@/components/JsonLd';
const title = 'Free Septic Tank Calculators & Troubleshooting Tools';
const description = 'Plan septic pumping dates, add up pumping costs, explore tank water use and check symptoms such as smells, slow drains, backups and alarms.';
export const metadata = { title, description, alternates: { canonical: '/tools' } };
export default function Tools() { return <><PageHead title={title} description={description} /><div className="container page-body listing">{tools.map(t => <Link href={'/tools/' + t.slug} key={t.slug}><div className="eyebrow">FREE HOMEOWNER TOOL</div><h2>{t.title}</h2><p>{t.description}</p><span className="text-link">Open tool →</span></Link>)}</div><JsonLd data={{ '@context': 'https://schema.org', '@type': 'CollectionPage', name: title, description, url: origin + '/tools', mainEntity: { '@type': 'ItemList', itemListElement: tools.map((t, index) => ({ '@type': 'ListItem', position: index + 1, name: t.title, url: origin + '/tools/' + t.slug })) } }} /></>; }
