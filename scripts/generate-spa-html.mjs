/**
 * Generates docs/index.html and docs/404.html for GitHub Pages SPA deployment.
 * Runs after `vite build` to SSR-render the root route using the built nitro
 * SSR handler and write the output to the docs directory.
 *
 * TanStack Start uses hydrateRoot(document), which requires SSR-rendered HTML
 * (a full <html>…</html> document). A bare <div id="app"> shell causes the
 * "Invariant failed" error at startup.
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const docsDir = resolve(import.meta.dirname, "../docs");
const ssrHandlerPath = resolve(
  import.meta.dirname,
  "../node_modules/.nitro/vite/services/ssr/index.js",
);

console.log("Loading SSR handler from:", ssrHandlerPath);

const { default: handler } = await import(
  pathToFileURL(ssrHandlerPath).toString()
);

// Render the root route
const req = new Request("http://localhost/");
const res = await handler.fetch(req, {}, {});

if (!res.ok) {
  const body = await res.text();
  console.error(`SSR handler returned ${res.status} for /:\n${body}`);
  process.exit(1);
}

let html = await res.text();

// Fix image URLs - Lovable CDN paths (__l5e/assets-v1/...) don't exist on GitHub Pages
// Replace with local /images/ path since images were copied there
html = html.replace(/__l5e\/assets-v1\/[a-f0-9-]+\/([a-zA-Z0-9-]+\.(png|jpg|jpeg|webp|svg|gif))/g, "/images/$1");

if (!html.includes("<!DOCTYPE html") && !html.includes("<!doctype html")) {
  console.error("SSR output does not look like a full HTML document:");
  console.error(html.substring(0, 300));
  process.exit(1);
}

writeFileSync(resolve(docsDir, "index.html"), html);
writeFileSync(resolve(docsDir, "404.html"), html);

console.log(`Generated docs/index.html and docs/404.html (${html.length} bytes)`);
