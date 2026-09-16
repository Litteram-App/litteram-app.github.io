# Litteram website

This repository contains the static website for Litteram, a native Markdown editor for macOS.

## Local preview

```sh
python3 -m http.server 4173 --directory static
```

Open <http://localhost:4173> in a browser.

## Deployment

GitHub Actions publishes the contents of `static/` to GitHub Pages whenever `main` changes. The site is available at <https://litteram-app.github.io>.
