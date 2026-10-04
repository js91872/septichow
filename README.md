# SepticHow — Phase 1

Next.js 16 / React 19 / TypeScript / Tailwind 4. Portable Debian VPS build.

## Run

Requires Node.js 20.9+ (Node 22 LTS recommended).

```bash
npm ci
npm run dev
```

## Verify

```bash
npm run typecheck
npm test
npm run build
```

Includes homepage, 3 calculators, troubleshooting foundation, browser-local schedule and ICS download, eight trust pages, source registry, introduction guide, metadata, schema, sitemap and robots.

Sources checked October 4, 2026. Tank planner supports a Minnesota-specific rule reference and general arithmetic illustration, not a national tank requirement. Schedule uses explicit user-selected intervals. Cost planner requires entered quote prices; no invented local benchmarks.

## Deploy

See DEPLOY.md. No analytics property IDs, Search Console verification token, email inbox, advertising or contact integration has been fabricated. Configure these before public launch. The corrections page transparently identifies the missing contact route. Detailed 15-page content cluster belongs to the next phase; the launch guide here is an introduction, not a finished long-form SEO article.

## Structure

- src/lib/calculations.ts — shared pure functions
- src/lib/sources.ts — source provenance and origin
- src/lib/content.ts — structured page and tool data
- src/components/Calculator.tsx — browser interaction
- src/app — server-rendered, statically generated routes

Saved schedules use localStorage key septichow-schedule-v1. They are not uploaded or synchronized. All input changes clear stale results.
