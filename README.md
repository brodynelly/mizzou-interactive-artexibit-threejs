# Interactive Three.js Exhibit

[![CI](https://github.com/brodynelly/mizzou-interactive-artexibit-threejs/actions/workflows/ci.yml/badge.svg)](https://github.com/brodynelly/mizzou-interactive-artexibit-threejs/actions/workflows/ci.yml)

A small React and Three.js scene that arranges five animated geometric meshes around a center point. OrbitControls supports rotation, zoom, and pan. The overlay provides the scene controls and a link to this repository.

No live demo URL is configured in this repository yet. The project can be run locally with the steps below.

## Run locally

Requirements: Node.js 18 or newer and npm.

```sh
git clone https://github.com/brodynelly/mizzou-interactive-artexibit-threejs.git
cd mizzou-interactive-artexibit-threejs
npm ci
npm run dev
```

Use the local URL printed by Vite. To check the project:

```sh
npm run lint
npm test
npm run build
```

## Implementation

- `src/components/ThreeScene.tsx` creates and animates the Three.js scene, lights, meshes, and orbit controls.
- `src/components/UI.tsx` renders the HTML overlay.
- `src/App.test.tsx` and `src/components/UI.test.tsx` cover the React interface with Vitest and Testing Library. The WebGL scene itself is mocked in the app test and is not covered by browser-based rendering tests.
- Vite, React, TypeScript, Three.js, Tailwind CSS, ESLint, and Prettier provide the application toolchain.

## CI

GitHub Actions runs formatting, ESLint, Vitest, and a production build on pull requests targeting `main` or `master`, and on pushes to the configured branches.

## License

MIT. See [LICENSE](LICENSE).
