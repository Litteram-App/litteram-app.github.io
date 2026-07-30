/**
 * Generates docs/index.html and docs/404.html for GitHub Pages SPA deployment.
 * Runs after `vite build` to create the HTML entry points from the built assets.
 */
import { readdirSync, writeFileSync, readFileSync } from "node:fs";
import { resolve, join } from "node:path";

const docsDir = resolve(import.meta.dirname, "../docs");
const assetsDir = join(docsDir, "assets");

// Find the built JS and CSS entry files
const assets = readdirSync(assetsDir);
const mainJs = assets.find((f) => f.startsWith("index-") && f.endsWith(".js"));
const routesJs = assets.find((f) => f.startsWith("routes-") && f.endsWith(".js"));
const mainCss = assets.find((f) => f.startsWith("styles-") && f.endsWith(".css"));

if (!mainJs) {
  console.error("Could not find main JS bundle in docs/assets/");
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Litteram</title>
    ${mainCss ? `<link rel="stylesheet" crossorigin href="/assets/${mainCss}" />` : ""}
    ${routesJs ? `<script type="module" crossorigin src="/assets/${routesJs}"></script>` : ""}
    <script type="module" crossorigin src="/assets/${mainJs}"></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
`;

writeFileSync(join(docsDir, "index.html"), html);
writeFileSync(join(docsDir, "404.html"), html);

console.log("Generated docs/index.html and docs/404.html");
