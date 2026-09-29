# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Storybook

Storybook documents and previews the component library independently from the main application. The configuration lives in `.storybook/`, and the component stories live in `src/stories/Components.stories.jsx`.

### Run Storybook locally

Install dependencies, then start the Storybook development server:

```bash
npm install
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006). Changes to components and stories are reflected through Vite hot module replacement.

### Build Storybook

Create a static Storybook build for deployment or review:

```bash
npm run build-storybook
```

The generated site is written to `storybook-static/`. This directory is ignored by Git. Serve it with any static web server when you need to preview the production build.

### Story coverage

The current story collection includes:

- The complete application and all catalog/list views.
- Data-backed armor, armor set, creature, mutation, resource, status, trinket, and weapon cards.
- Shared UI components such as cards, headers, lists, tags, tiers, accordions, filters, checkboxes, tooltips, recipes, recipe lists, and repair lists.
- Important variations including open and closed accordions, checked and unchecked checkboxes, numeric and string tiers, empty repair data, tooltip fallback content, multiple recipes, and selected filter values.

Stories use the JSON fixtures from `src/data/` so the documented examples stay aligned with the application. Components that use checkbox state are wrapped with `FieldGuideProvider` by the story-level decorator.

### Add or update a story

Add stories to `src/stories/Components.stories.jsx`, or create another `*.stories.jsx` file below `src/`. Storybook discovers JavaScript, JSX, MJS, TypeScript, and TSX story files through the pattern configured in `.storybook/main.js`.

When adding a component story:

1. Import the component and any representative fixture data.
2. Render the component with its required props and context providers.
3. Add stories for meaningful prop, empty, interactive, and boundary states.
4. Run `npm run storybook` to review the story and `npm run build-storybook` to verify the production build.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
