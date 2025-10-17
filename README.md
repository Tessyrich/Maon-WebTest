<!-- @format -->

# maon-webtest

Short interview-friendly README for the `maon-webtest` React + Vite project.

## Summary

This is a small React application scaffolded with Vite. It demonstrates:

- A component-based React layout with pages and shared components
- Tailwind CSS utility classes for styling
- A production-friendly dev setup using Vite for fast HMR
- Basic unit tests using Jest and React Testing Library

## Live demo

View the deployed site: https://maon-web-test.vercel.app/

## Why this repository is a good interview submission

- Self-contained: contains app code, tests, and configs needed to run locally.
- Tests included: component tests demonstrate how the UI behaves under success/failure/loading states.
- Clear structure: `src/pages`, `src/components`, and `src/layouts` separate responsibilities.
- Modern toolchain: Vite, Babel (for tests), Jest, React Testing Library, and Tailwind.

## Getting started

Requirements:

- Node.js (LTS recommended)

Quick install and run:

1. Install dependencies

   npm install

2. Start the dev server

   npm run dev

3. Build for production

   npm run build

4. Run tests

   npm test

## Project layout

- `src/`
  - `pages/` — route/page components (e.g. `Home.jsx`)
  - `components/` — shared UI components (Navbar, Footer)
  - `layouts/` — layout wrappers
  - `assets/` — static images used by the app
  - `main.jsx` and `App.jsx` — app entry and router wiring

## Key files added for testing and compatibility

- `jest.config.cjs` — Jest configuration (uses `jsdom`, `babel-jest`, and `@testing-library/jest-dom`).
- `babel.config.js` — Babel config to transform JSX/modern JS when running tests in Jest.

## Testing

- Tests are written using Jest and React Testing Library. Example test: `src/pages/home/Home.test.jsx`.
- To run tests and see coverage (if added later):

  npm test

## Design and implementation notes

- Home page (`src/pages/home/Home.jsx`) fetches news from the Finnhub API and presents:

  - Loading state
  - Rendered news grid with image, headline, source, and date
  - Error state when fetch fails

- Error & loading states are tested to show robust UI behavior under network variability.
- Tests mock `axios` to control API responses and assert UI updates.

<!-- Link to live demo -->

## Decisions & trade-offs

- Using Vite keeps the dev experience fast and simple. Vite is opinionated but works well for small to medium React apps.
- Babel is included for Jest transformations. The production app doesn't rely on Babel for bundling because Vite handles compilation; Babel is used to support Jest's transform pipeline and the project's ESM setup.
- Tailwind provides quick layout and styling; utility classes limit the need for custom CSS in this small project.

## Next steps / suggestions for enhancement

- Move secrets (API keys) out of the source into environment variables. Right now `Home.jsx` contains an API key string; replace it with process.env or a secure store.
- Add CI workflow (GitHub Actions) to run tests and linting on push.
- Add TypeScript for stronger typing and more robust linting rules.
- Add end-to-end tests (Playwright or Cypress) for real-world flows.
- Add storybook for visual component documentation.

## Contact / interview notes

If you review this in an interview, I'm happy to walk through these design decisions, trade-offs, and testing strategies. I can also demonstrate changes live (e.g., add a new test, convert a component to TypeScript, or wire up CI) if requested.

## License

This project is provided for demonstration purposes. Include an appropriate license if you plan to publish it publicly.
