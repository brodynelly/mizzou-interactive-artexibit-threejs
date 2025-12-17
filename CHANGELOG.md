# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- Added `.editorconfig` for consistent editor settings.
- Added Prettier for code formatting.
- Added Vitest and React Testing Library for testing.
- Added CI workflow via GitHub Actions.
- Added `docs/migration.md` for refactoring details.
- Added tests for `App` and `UI` components.

### Changed
- Renamed `src/vite-env.d.ts` to `src/viteEnv.d.ts` to follow naming convention.
- Refactored `src/components/ThreeScene.tsx` to fix React Hook warnings.
- Updated `package.json` scripts to include `format` and `test`.
- Updated `eslint.config.js` to include Prettier integration.
