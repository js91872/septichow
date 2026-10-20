#!/usr/bin/env node
// Run after deployment: npm run check:live
const origin = (process.env.SITE_URL || 'https://septichow.com').replace(/\/$/, '');
const pages = [
  '/',
  '/maintenance',
  '/tools',
  '/tools/septic-tank-size-calculator',
  '/tools/septic-pumping-cost-calculator',
  '/tools/septic-pumping-frequency-calculator',
  '/tools/septic-troubleshooter',
  '/my-septic-schedule',
  '/guides',
  '/guides/how-to-fix-septic-drain-field',
  '/guides/septic-inspection-cost',
  '/guides/septic-drain-field-replacement-cost',
  '/guides/septic-tank-alarm-going-off',
  '/guides/clogged-septic-drain-field',
  '/guides/septic-tank-pumping-cost',
  '/guides/septic-system-installation-cost',
  '/guides/septic-tank-filter-cleaning',
  '/guides/septic-tank-backing-up-after-rain',
  '/robots.txt',
  '/sitemap.xml',
];
let failed = false;
const htmls = [];
async function check(url, label, contentType) {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(12000), redirect: 'follow' });
    const type = response.headers.get('content-type') || '';
    const ok = response.ok && (!contentType || type.includes(contentType));
    console.log(`${ok ? 'PASS' : 'FAIL'} ${response.status} ${label} [${type}]`);
    if (!ok) failed = true;
    return ok ? response : null;
  } catch (error) {
    console.error(`FAIL ${label}: ${error.message}`);
    failed = true;
    return null;
  }
}
for (const path of pages) {
  const response = await check(origin + path, path, path.endsWith('.xml') ? 'xml' : path.endsWith('.txt') ? 'text/plain' : 'text/html');
  if (response && !path.endsWith('.xml') && !path.endsWith('.txt')) htmls.push(await response.text());
}
const cssAssets = [...new Set(htmls.flatMap(html =>
  [...html.matchAll(/(?:href|src)=["']([^"']*\/_next\/static\/[^"']+\.css(?:\?[^"']*)?)["']/g)].map(match => match[1])
))];
if (!cssAssets.length) {
  console.error('FAIL no Next.js stylesheet links found in HTML');
  failed = true;
}
for (const asset of cssAssets.slice(0, 12)) {
  await check(new URL(asset, origin).href, asset, 'text/css');
}
if (failed) {
  console.error('Live smoke check FAILED. Check standalone assets, service and reverse proxy.');
  process.exitCode = 1;
} else {
  console.log('Live smoke check PASSED.');
}
