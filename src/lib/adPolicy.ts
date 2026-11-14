/** Paths that must never receive manual or Auto Ads placements. */
export const adExcludedRoutes = [
  '/my-septic-schedule',
  '/contact',
  '/privacy',
  '/privacy-choices',
  '/terms',
  '/disclaimer',
  '/editorial-policy',
  '/methodology',
  '/corrections'
] as const;

export function isAdEligibleRoute(pathname: string): boolean {
  const path = pathname.split(/[?#]/, 1)[0].replace(/\/+$/, '') || '/';
  return !adExcludedRoutes.includes(path as (typeof adExcludedRoutes)[number]);
}
