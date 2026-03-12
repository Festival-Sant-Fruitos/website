# CLAUDE.md

## UI Components
- Use `npx shadcn@latest add <component>` to install shadcn components. Never create them manually.
- Use `npx magicui@latest add <component>` for Magic UI components.
- After adding components, they land in `src/components/ui/`. Import from there.

## Testing
- Run tests with `npx playwright test`
- Generate test scaffolds with `npx playwright codegen <url>`
- Before committing, always run `npx playwright test` to verify nothing broke.
- Test files go in `tests/` directory with `.spec.ts` extension.

## General
- Always check existing components in `src/components/ui/` before adding new ones.
- Use pnpm, not npm.
