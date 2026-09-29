# Copilot instructions for vibeded

## Project summary
This repository is a Vite + React app for a Grounded 2 field guide. The app presents category-based collections (Armor, Creatures, Mutations, Resources, Statuses, Trinkets, Weapons) from static JSON data, with search and filter controls layered on top.

## Commands
Use the scripts from `package.json`:

- `npm install`
- `npm run dev` — starts the Vite dev server
- `npm run build` — runs the production build
- `npm run lint` — runs the repository linter with Oxlint

There is no dedicated test runner configured in this repo right now, so there is no single-test command to use yet. When linting a single file in this codebase, use the repo linter directly, for example:

- `npx oxlint src/components/ArmorList/ArmorList.jsx`

## Architecture
The app is intentionally data-driven and split between declarative data files and reusable UI components:

- `src/main.jsx` is the app entry point and mounts the React tree.
- `src/components/App/App.jsx` sets up the top-level layout and wraps the app in `FieldGuideProvider`.
- `src/context/FieldGuideContext.jsx` holds the checkbox state for item toggles and persists it to `localStorage` under `grounded2FieldGuideData`.
- `src/data/*.json` contains the actual content for each catalog category; list components read from these files instead of embedding data inline.
- `src/components/Tabs/Tabs.jsx` is the primary navigation shell. Each tab renders a category-specific list component (`ArmorList`, `CreatureList`, etc.).
- `src/utils/listFilterUtils.js` centralizes normalization, unique-value extraction, facet counts, and filter matching for the lists.
- `src/styles/*.css` contains shared CSS tokens and app-wide styling; component-specific styling is kept near each component in its own CSS file.

## Conventions
- Keep category data in `src/data/*.json` and keep the UI presentational. If a new catalog entry is added, prefer matching the existing JSON structure used by the current list components.
- When building filters, use the existing helpers in `src/utils/listFilterUtils.js` (`normalizeValue`, `getUniqueFilterValues`, `getFilterValueCounts`, `filterBySelectedFilters`) rather than duplicating inline logic per list.
- Item "crafted"/checkbox state keys are derived from names via a slug-like pattern (`name.toLowerCase().replace(/[^a-z0-9]+/g, '-')`). Preserve that pattern when adding new checkbox-backed UI.
- The app uses a shared React context for cross-component checkbox state; avoid introducing a parallel global state mechanism for simple item toggles.
- Styling follows the existing Vite + Open Props approach: import `open-props/style` at the app root and keep component-local styles near the component they belong to.
- The codebase is JavaScript-first; keep new files in the same `.jsx`/`.js` conventions unless the repo has already moved to a different language.

## Working style for this repo
- Prefer extending existing list/filter patterns instead of creating one-off patterns for each category.
- For new categories, mirror the established combination of: source data JSON, a list component, filter configuration, and a component render entry in `Tabs.jsx`.
- Keep changes small and consistent with the current structure; this app is composed of many focused components rather than a deeply nested page framework.
