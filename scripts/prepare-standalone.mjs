import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();
const nextDir = join(root, '.next');
const standalone = join(nextDir, 'standalone');
const server = join(standalone, 'server.js');
const staticSource = join(nextDir, 'static');
const staticDestination = join(standalone, '.next', 'static');

if (!existsSync(server)) {
  console.error('Standalone server.js missing. Refusing to prepare an incomplete build.');
  process.exit(1);
}
if (!existsSync(staticSource)) {
  console.error('Next.js static assets missing. Refusing to prepare an incomplete build.');
  process.exit(1);
}

mkdirSync(join(standalone, '.next'), { recursive: true });
cpSync(staticSource, staticDestination, { recursive: true, force: true });

const publicDir = join(root, 'public');
if (existsSync(publicDir)) {
  cpSync(publicDir, join(standalone, 'public'), { recursive: true, force: true });
}
console.log('Standalone assets ready: .next/static and public copied to .next/standalone.');
