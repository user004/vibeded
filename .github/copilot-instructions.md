# Copilot instructions for vibeded

## Project overview
This repo is a Vite + React app for a Grounded 2 field guide. The app is data-driven: each catalog category (Armor, Creatures, Mutations, Resources, Statuses, Trinkets, Weapons) is backed by static JSON under `src/data/`, and the UI renders reusable list/card components on top of those fixtures.

The project is intentionally organized around a few shared patterns rather than deep page nesting:
- `src/components/Tabs/Tabs.jsx` orchestrates the category navigation.
- `src/context/FieldGuideContext.jsx` owns checkbox/toggle state for crafted items and persists it to `localStorage` under `grounded2FieldGuideData`.
- `src/utils/listFilterUtils.js` centralizes normalization, unique values, counts, and selected-filter matching.
- `src/stories/Components.stories.jsx` documents the component library in Storybook.

## Build, lint, and validation commands
Use the scripts from `package.json`:

- `npm install`
- `npm run dev` — start the Vite dev server
- `npm run build` — production build
- `npm run lint` — repository lint via Oxlint
- `npm run storybook` — run Storybook locally
- `npm run build-storybook` — generate a production Storybook build

There is no dedicated test runner configured in this repo right now, so there is no single-test command to use. For targeted validation, lint a specific file directly:

- `npx oxlint src/components/ArmorList/ArmorList.jsx`

For UI changes, prefer Storybook review (`npm run storybook`) plus the app build (`npm run build`) when the change affects shared render logic or category data.

## High-level architecture
- `src/main.jsx` mounts the app, imports `@mantine/core/styles.css`, and wraps the app in Mantine's dark-mode `MantineProvider`.
- `src/theme.js` defines the shared dark-first Mantine theme and green primary palette.
- `src/components/App/App.jsx` wraps the app in `FieldGuideProvider` and renders the hero plus tabbed catalog shell.
- `src/components/Tabs/Tabs.jsx` is the primary nav shell; each tab renders a category-specific list component.
- `src/data/*.json` is the source of truth for list content and item metadata; keep new content there instead of hard-coding data in components.
- `src/components/*List/*.jsx` components read the JSON, build derived filter values, and render the UI for a given category.
- `src/utils/listFilterUtils.js` handles the shared normalization and filter logic so list code stays consistent across categories.
- Mantine Core provides the shared UI components and styling; Storybook is wrapped in `MantineProvider` as well.
- `src/stories/Components.stories.jsx` is a living catalog of important examples and edge states for the UI.

## Key conventions
- Keep category data in `src/data/*.json` and keep the UI presentational. If you add a new catalog entry, match the existing structure used by the current list components.
- Prefer extending the existing list/filter patterns instead of introducing one-off logic for each category. Reuse `normalizeValue`, `getUniqueFilterValues`, `getFilterValueCounts`, and `filterBySelectedFilters` from `src/utils/listFilterUtils.js`.
- Preserve the slug-like checkbox key pattern used throughout the app: `name.toLowerCase().replace(/[^a-z0-9]+/g, '-')`. This is how crafted/checked state is mapped back to items.
- Use the shared React context for item toggles instead of creating another global state mechanism for simple checkbox-backed features.
- Compose UI from appropriate Mantine components such as `Card`, `Tabs`, `Accordion`, `Group`, `Stack`, `SimpleGrid`, `Text`, and Mantine form controls. Do not add custom CSS or Open Props styling.
- Keep Mantine's core stylesheet imported at the application and Storybook roots, with a `MantineProvider` around each React tree.
- Reuse `src/theme.js` in both providers; preserve the dark default color scheme and use the `fieldGuideGreen` primary color for accent UI.
- Use the official [Mantine getting started guide](https://mantine.dev/getting-started/) for setup and API reference.
- This codebase is JavaScript-first; keep new files in `.jsx`/`.js` unless the repo has already moved to a different language.
- For new categories, mirror the established pattern: source JSON -> list component -> filter configuration -> tab registration in `Tabs.jsx`.

## Working style for this repo
Keep changes small and consistent with the application's existing structure. The app is composed of many focused components rather than a deeply nested framework, so prefer incremental additions that match established patterns instead of introducing new architectural layers.
