// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";
import fs from "node:fs";
import path from "node:path";

/**
 * Serves Lovable CDN assets (/__l5e/assets-v1/*) from local public/images/ files.
 * This is a fallback for local development when LOVABLE_PREVIEW_HOST is not set.
 * Images must be downloaded first with: scripts/download-assets.sh
 */
function localAssetsPlugin(): Plugin {
  return {
    name: "local-assets-fallback",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const match = req.url?.match(/^\/__l5e\/assets-v1\/[^/]+\/(.+)$/);
        if (!match) return next();
        const filename = match[1];
        const localPath = path.resolve("public/images", filename);
        if (fs.existsSync(localPath)) {
          const ext = path.extname(filename).toLowerCase();
          const mime =
            ext === ".png"
              ? "image/png"
              : ext === ".webp"
                ? "image/webp"
                : ext === ".jpg" || ext === ".jpeg"
                  ? "image/jpeg"
                  : "application/octet-stream";
          res.setHeader("Content-Type", mime);
          res.setHeader("Cache-Control", "public, max-age=86400");
          fs.createReadStream(localPath).pipe(res);
        } else {
          next();
        }
      });
    },
  };
}

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    preset: "github_pages",
    output: {
      publicDir: "docs",
    },
    publicAssets: [
      {
        dir: "public",
        maxAge: 0,
        baseURL: "/",
        fallthrough: true,
      },
    ],
  },
  vite: {
    plugins: [localAssetsPlugin()],
  },
});
