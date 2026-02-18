# WebGL Three.js Project

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![CI](https://github.com/brodynelly/mizzou-interactive-artexibit-threejs/actions/workflows/ci.yml/badge.svg)](https://github.com/brodynelly/mizzou-interactive-artexibit-threejs/actions/workflows/ci.yml) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)

A WebGL application using React, Three.js, and Tailwind CSS. This project demonstrates a 3D scene with interactive controls and a clean UI overlay.

## Demo



## Stack

- **Framework**: [React](https://reactjs.org/) (with [Vite](https://vitejs.dev/))
- **3D Engine**: [Three.js](https://threejs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Linting & Formatting**: ESLint, Prettier
- **Testing**: Vitest, React Testing Library

## Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/webgl-threejs-project.git
    cd webgl-threejs-project
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```

4.  **Run tests:**
    ```bash
    npm test
    ```

5.  **Build for production:**
    ```bash
    npm run build
    ```

## Architecture

- `src/components/`: Reusable React components (`ThreeScene`, `UI`).
- `src/main.tsx`: Entry point.
- `src/viteEnv.d.ts`: TypeScript environment definitions.
- `eslint.config.js`: ESLint configuration.
- `vite.config.ts`: Vite configuration.

## License

MIT
