import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import viteReact from '@vitejs/plugin-react';
import type { Plugin } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Serves TanStack Start CDN assets (/__l5e/assets-v1/*) from local public/images/ files.
 * This is a fallback for local development when the TanStack Start dev server is not available.
 * Images must be downloaded first with: scripts/download-assets.sh
 */
function localAssetsPlugin(): Plugin {
  return {
    name: 'local-assets-fallback',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const match = req.url?.match(/^\/__l5e\/assets-v1\/[^/]+\/(.+)$/);
        if (!match) return next();
        const filename = match[1];
        const localPath = path.resolve('public/images', filename);
        if (fs.existsSync(localPath)) {
          const ext = path.extname(filename).toLowerCase();
          const mime =
            ext === '.png'
              ? 'image/png'
              : ext === '.webp'
                ? 'image/webp'
                : ext === '.jpg' || ext === '.jpeg'
                  ? 'image/jpeg'
                  : 'application/octet-stream';
          res.setHeader('Content-Type', mime);
          res.setHeader('Cache-Control', 'public, max-age=86400');
          fs.createReadStream(localPath).pipe(res);
        } else {
          next();
        }
      });
    },
  };
}

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
    tanstackStart({
      // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
      server: { entry: 'server' },
    }),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
    localAssetsPlugin(),
  ],
  nitro: {
    preset: 'github_pages',
    output: {
      publicDir: 'docs',
    },
    publicAssets: [
      {
        dir: 'public',
        maxAge: 0,
        baseURL: '/',
        fallthrough: true,
      },
    ],
  },
});
