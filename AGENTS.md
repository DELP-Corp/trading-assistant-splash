# AGENTS.md

This file provides guidance to AI agents when working with code in this repository.

# trading-assistant-splash

Static marketing/landing page for the Trading Assistant product. Hosted on GitHub Pages.

## Stack

- **SSG**: [Eleventy (11ty)](https://www.11ty.dev/) v2
- **CSS**: Tailwind CSS v3 (built separately via CLI, not PostCSS plugin)
- **JS**: Alpine.js v3 (loaded via npm, referenced in templates)
- **Node**: managed via asdf (see `.tool-versions`)

## Running

```bash
npm install
npm run start   # 11ty dev server + Tailwind watch (runs both concurrently)
npm run build   # Production build with minified CSS
```

Output goes to `_site/`.

## Key Files

```
index.njk          Main (and only) page — Nunjucks template
styles/
  tailwind.css     Tailwind input file (@tailwind directives)
  tailwind.config.js Tailwind config (content paths, theme)
_includes/         Nunjucks partials/layouts
_site/             Build output (not committed)
```

## Deployment

Hosted on GitHub Pages — push to `master` deploys automatically (via GitHub Actions or direct `_site` publish, check `.github/` if present).
