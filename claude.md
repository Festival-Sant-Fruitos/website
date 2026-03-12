# Festival Sant Fruitos Website

Rebuilding festivalsantfruitos.com from legacy WordPress to Next.js 16 + React 19 + Tailwind CSS 4 + Framer Motion. This is a Catalan local festival site — all user-facing content is in Catalan.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (run before pushing to catch type/build errors)
- `npm run lint` — ESLint
- `npx shadcn@latest add <component>` — install shadcn components
- `npx shadcn@latest add "https://magicui.design/r/<component>"` — install Magic UI components (magicui npm package does NOT exist; always use the shadcn registry URL)
- `npx playwright test` — run all E2E tests
- `npx playwright test --ui` — interactive test runner

## Architecture

- `src/app/` — App Router pages and layouts
- `src/components/ui/` — shadcn + Magic UI installed components (CLI only, never hand-create)
- `src/components/` — custom project components
- `src/lib/` — utilities and shared logic
- `public/` — static assets (images, fonts, favicon)
- `tests/` — Playwright E2E tests (`.spec.ts`)

## Component Rules

- Check `src/components/ui/` before installing a shadcn/Magic UI component — it may already exist.
- Never manually write files in `src/components/ui/`. Use the CLI.
- Use `cn()` from `src/lib/utils` for all conditional Tailwind classes.
- Do NOT install `@radix-ui/*` directly — shadcn bundles Radix. Direct installs cause version conflicts.
- Magic UI components depend on `framer-motion` (already installed). If a new animation component errors, check the import.

## Tailwind CSS 4

- This project uses Tailwind v4 with CSS-based config, NOT `tailwind.config.ts`. Do not create a JS/TS config file.
- Custom theme values are defined in `src/app/globals.css` using `@theme`, not in a config file.
- If you need to extend the theme, add `@theme` directives in `globals.css`.
- **Standard rem (1rem = 16px)**. Do NOT use the 62.5% font-size hack. Use standard Tailwind utility classes (`text-sm`, `text-base`, `p-4`, etc.) or `[Xpx]` arbitrary values.

## Content & i18n

- All user-facing text is in Catalan. Do not write placeholder content in English.
- If you don't know the Catalan translation, use a placeholder like `[CA: description of text needed]` and flag it.

## Testing

- Every new user-facing page/feature needs a Playwright test in `tests/`.
- Use locators (`getByRole`, `getByText`, `getByTestId`) — never raw CSS selectors.
- Run `npx playwright test` after UI changes before considering the task done.
- Do not delete or skip tests to make the suite green.

## Gotchas

- Next.js App Router: components are Server Components by default. Only add `"use client"` when you actually use hooks, event handlers, or browser APIs.
- Framer Motion components require `"use client"` — any component wrapping `motion.*` must be a Client Component.
- This is `npm`, not `pnpm`. Do not use `pnpm` commands.

## Git Workflow

- Uri (omorros) is the sole maintainer and supervisor. All PRs go through him.
- Feature branches: `feat/<short-description>`
- Conventional commits: `feat:`, `fix:`, `test:`, `refactor:`, `content:`
- Never commit to `main` directly.

## When Compacting

Preserve: modified file list, failing test output, current task objective, and any Catalan content decisions.