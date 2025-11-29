# Migration Guide

This document details the changes made during the `refactor/quality-upgrade` branch.

## Naming Conventions

- **Repositories**: `kebab-case` (Already compliant).
- **JS/TS Files & Variables**: `camelCase`.
- **Components & Classes**: `PascalCase`.

Changes:
- `src/vite-env.d.ts` was renamed to `src/viteEnv.d.ts`.

## Tooling

- **Formatting**: Prettier is now enforced. Run `npm run format` to format code.
- **Linting**: ESLint is updated to include Prettier rules. Run `npm run lint` to check for issues.
- **Testing**: Vitest is set up. Run `npm test` to run tests.
- **CI**: GitHub Actions workflow added to run lint, test, and build on push/PR.

## Component Changes

- **ThreeScene**: Refactored `useEffect` to safely handle ref cleanup.
