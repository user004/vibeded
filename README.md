# Vibeded

Vibeded is a Vite + React field guide for Grounded 2. It presents category-based catalog data for armor, creatures, mutations, resources, statuses, trinkets, and weapons with search, filters, and persistent crafted-item state.

## Features
- Category tabs for the main Grounded 2 collections
- Search and facet-style filtering across item metadata
- Crafted-state tracking persisted in `localStorage`
- Data-driven rendering from static JSON files
- Storybook coverage for the shared UI and catalog components

## Quick start

Install dependencies:

```bash
npm install
```

Start the app locally:

```bash
npm run dev
```

Run a production build:

```bash
npm run build
```

Run the repository linter:

```bash
npm run lint
```

Run Storybook locally:

```bash
npm run storybook
```

Build Storybook for deployment or review:

```bash
npm run build-storybook
```

There is no dedicated automated test runner configured in this repository. For targeted linting of a single file, run the repo linter directly:

```bash
npx oxlint src/components/ArmorList/ArmorList.jsx
```

## Architecture

The app is intentionally organized around reusable list components and shared data helpers:

- `src/main.jsx` mounts the React app and loads the global Open Props style layer.
- `src/components/App/App.jsx` renders the app shell and wraps it in `FieldGuideProvider`.
- `src/components/Tabs/Tabs.jsx` controls the category navigation.
- `src/context/FieldGuideContext.jsx` stores checkbox state and persists it to `localStorage` under `grounded2FieldGuideData`.
- `src/data/*.json` is the source of truth for item content for each catalog section.
- `src/components/*List/*.jsx` read JSON data, derive filter values, and render category views.
- `src/utils/listFilterUtils.js` centralizes filtering and normalization logic used by multiple lists.
- `src/stories/Components.stories.jsx` documents important UI states and uses the same fixtures as the app.

## Conventions

- Keep catalog data in `src/data/*.json` and keep presentation logic in components.
- Reuse the shared filter helpers in `src/utils/listFilterUtils.js` instead of repeating inline logic in each list.
- Preserve the checkbox key naming pattern used across the app: `name.toLowerCase().replace(/[^a-z0-9]+/g, '-')`.
- Use the shared React context for crafted-item toggles rather than introducing another global state layer for simple checkboxes.
- Keep styling consistent with the existing Vite + Open Props setup: import `open-props/style` at the app root and keep local styles near the component they affect.
- This repo is JavaScript-first; new files should follow the existing `.jsx` and `.js` conventions unless a different language is already in use.

## Contribution patterns

When adding new content or tabs, follow this pattern:

1. Add or update the category data in `src/data/*.json`
2. Create or extend a matching list component under `src/components/`
3. Reuse the shared filter helpers for the new category
4. Register the category in `src/components/Tabs/Tabs.jsx`

This keeps the app consistent with the existing data-driven structure.

## Adding a new category

To add a new catalog section, mirror the established combination of data + list UI + filters + tab registration:

1. Add the source data file under `src/data/` with the same JSON shape used by neighboring categories.
2. Create a list component such as `src/components/ExampleList/ExampleList.jsx` that imports the JSON, derives filter values, and renders the item cards.
3. Reuse `src/utils/listFilterUtils.js` for normalization, unique filter values, facet counts, and matching logic rather than hard-coding custom logic in the list.
4. Wire the new list into `src/components/Tabs/Tabs.jsx` and add any category-specific styling alongside the component or in the shared stylesheet pattern.
5. Validate with `npm run lint` and, for UI changes, run `npm run build` or review in `npm run storybook` when the change affects rendering or shared filters.
