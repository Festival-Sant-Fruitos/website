# Festival Sant Fruitos - Website

[![CI](https://github.com/Festival-Sant-Fruitos/website/actions/workflows/ci.yml/badge.svg)](https://github.com/Festival-Sant-Fruitos/website/actions/workflows/ci.yml)
[![Node](https://img.shields.io/badge/node-22-green)](.nvmrc)
[![Next.js](https://img.shields.io/badge/next.js-16-black)](https://nextjs.org)

Rebuilding the [Festival Sant Fruitos website](https://www.festivalsantfruitos.com/) from the ground up, migrating from the legacy WordPress site to a modern stack.

## Tech Stack

- **Next.js 16** with TypeScript
- **Tailwind CSS 4**
- **Framer Motion** for animations
- **React 19**

## Getting Started

```bash
npm install
npm run dev
```

## Development

Every PR runs CI: ESLint, TypeScript, `next build`, and Playwright E2E
tests on Chromium + WebKit. Merges to `main` are blocked until all
checks pass. See [`.github/workflows/ci.yml`](.github/workflows/ci.yml).
