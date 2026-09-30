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

- `src/main.jsx` mounts the React app and imports `src/index.css` for Tailwind CSS v4 and the shadcn/ui theme.
- `src/components/App/App.jsx` renders the app shell and wraps it in `TooltipProvider` and `FieldGuideProvider`.
- `src/components/Tabs/Tabs.jsx` controls the category navigation with shadcn/ui tabs.
- `src/components/ui/*.jsx` holds the shadcn/ui primitives composed by field-guide components under `src/components/`.
- `components.json` configures the Radix Nova preset; `jsconfig.json` and `vite.config.js` resolve the `@/` import alias.
- `src/context/FieldGuideContext.jsx` stores checkbox state and persists it to `localStorage` under `grounded2FieldGuideData`.
- `src/data/*.json` is the source of truth for item content for each catalog section.
- `src/components/*List/*.jsx` read JSON data, derive filter values, and render category views.
- `src/utils/listFilterUtils.js` centralizes filtering and normalization logic used by multiple lists.
- `src/stories/Components.stories.jsx` documents important UI states and uses the same fixtures as the app.

## UI and styling

The project is already configured with [shadcn/ui for Vite](https://ui.shadcn.com/docs/installation/vite). To add a primitive, run:

```bash
npx shadcn@latest add <component>
```

The CLI writes JavaScript components to `src/components/ui/`. Compose these in the existing field-guide components rather than editing generated primitives for one-off layouts. Use Tailwind utilities for component layout and theme colors (for example, `bg-muted` or `text-muted-foreground`); change shared theme tokens in `src/index.css`. The default theme is dark with green primary and accent colors; the app and Storybook both enable the `dark` class so shadcn/ui's dark variants apply. Storybook's preview also provides `TooltipProvider`. Review UI changes in Storybook and run `npm run build` for changes to shared rendering.

## Conventions

- Keep catalog data in `src/data/*.json` and keep presentation logic in components.
- Reuse the shared filter helpers in `src/utils/listFilterUtils.js` instead of repeating inline logic in each list.
- Preserve the checkbox key naming pattern used across the app: `name.toLowerCase().replace(/[^a-z0-9]+/g, '-')`.
- Use the shared React context for crafted-item toggles rather than introducing another global state layer for simple checkboxes.
- Use the installed shadcn/ui primitives for controls and Tailwind utilities for layouts. Do not add Open Props or component-local CSS back into the app.
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
4. Wire the new list into `src/components/Tabs/Tabs.jsx` and use shadcn/ui primitives and Tailwind utilities for its presentation.
5. Validate with `npm run lint` and, for UI changes, run `npm run build` or review in `npm run storybook` when the change affects rendering or shared filters.
