/**
 * SSR smoke test: renders every route through Vite's module loader to catch
 * runtime errors (undefined data, bad JSX, etc.) without a browser.
 * Run: node scripts/smoke.mjs
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const nm = (pkg) => path.join(root, 'node_modules', pkg);

const routes = [
  '/',
  '/about',
  '/products',
  '/how-it-works',
  '/delivery-pricing',
  '/quality-standards',
  '/demand-insights',
  '/gallery',
  '/testimonials',
  '/contact',
  '/does-not-exist',
];

const server = await createServer({
  root,
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
  resolve: {
    // Node's "node" export condition resolves these to CJS (no named exports
    // for ESM). Force their ESM builds so the SSR pipeline can load them.
    alias: [
      { find: /^react-router-dom$/, replacement: nm('react-router-dom/dist/index.mjs') },
      { find: /^react-router$/, replacement: nm('react-router/dist/development/index.mjs') },
      { find: /^react-router\/dom$/, replacement: nm('react-router/dist/development/dom-export.mjs') },
    ],
  },
  ssr: { noExternal: ['react-router-dom', 'react-router'] },
});

try {
  const { render } = await server.ssrLoadModule('/scripts/ssr-entry.jsx');

  let failures = 0;
  for (const route of routes) {
    try {
      const html = render(route);
      if (!html || html.length < 200) throw new Error('rendered output too small');
      console.log(`OK   ${route} (${html.length} chars)`);
    } catch (error) {
      failures += 1;
      console.error(`FAIL ${route}: ${error.message}`);
    }
  }
  console.log(failures === 0 ? 'ALL ROUTES RENDERED' : `${failures} ROUTE(S) FAILED`);
  process.exitCode = failures === 0 ? 0 : 1;
} finally {
  await server.close();
}
