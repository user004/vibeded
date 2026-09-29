# Copilot instructions for vibeded

## Project overview
This repo is a Vite + React app for a Grounded 2 field guide. The app is data-driven: each catalog category (Armor, Creatures, Mutations, Resources, Statuses, Trinkets, Weapons) is backed by static JSON under `src/data/`, and the UI renders reusable list/card components on top of those fixtures.

The project is intentionally organized around a few shared patterns rather than deep page nesting:
- `src/components/Tabs/Tabs.jsx` orchestrates the category navigation.
- `src/components/Card`, `List`, `Filters`, `Accordion`, `Title`, and `Tooltip` wrap Material UI primitives; reuse these rather than building parallel controls.
- `src/components/Checkbox/Checkbox.jsx` shows an emoji beside the checkbox and a Material UI tooltip for its accessible label.
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
- `src/main.jsx` mounts the app with Material UI's `ThemeProvider` and `CssBaseline`; `.storybook/preview.jsx` supplies the same providers for stories.
- `src/components/App/App.jsx` wraps the app in `FieldGuideProvider` and renders the hero plus tabbed catalog shell.
- `src/components/Tabs/Tabs.jsx` is the primary nav shell; each tab renders a category-specific list component.
- `src/data/*.json` is the source of truth for list content and item metadata; keep new content there instead of hard-coding data in components.
- `src/components/*List/*.jsx` components read the JSON, build derived filter values, and render the UI for a given category.
- `src/utils/listFilterUtils.js` handles the shared normalization and filter logic so list code stays consistent across categories.
- `src/theme.js` defines the shared dark Material UI palette. `@mui/material` and Emotion replace Open Props and the old application CSS; components use Material UI primitives and `sx` for local layout.
- `src/stories/Components.stories.jsx` is a living catalog of important examples and edge states for the UI.

## Key conventions
- Keep category data in `src/data/*.json` and keep the UI presentational. If you add a new catalog entry, match the existing structure used by the current list components.
- Prefer extending the existing list/filter patterns instead of introducing one-off logic for each category. Reuse `normalizeValue`, `getUniqueFilterValues`, `getFilterValueCounts`, and `filterBySelectedFilters` from `src/utils/listFilterUtils.js`.
- Preserve the slug-like checkbox key pattern used throughout the app: `name.toLowerCase().replace(/[^a-z0-9]+/g, '-')`. This is how crafted/checked state is mapped back to items.
- Use the shared React context for item toggles instead of creating another global state mechanism for simple checkbox-backed features.
- Prefer the shared component wrappers and Material UI controls over new raw styled elements. Use `sx` for local layout and keep shared palette changes in `src/theme.js`; do not restore Open Props or the removed component CSS.
- When a checkbox has a visible emoji instead of text, retain its accessible label and show that label with a Material UI `Tooltip` on hover or focus. Preserve the existing controlled/uncontrolled checkbox behavior.
- This codebase is JavaScript-first; keep new files in `.jsx`/`.js` unless the repo has already moved to a different language.
- For new categories, mirror the established pattern: source JSON -> list component -> filter configuration -> tab registration in `Tabs.jsx`.

## Working style for this repo
Keep changes small and consistent with the application’s existing structure. The app is composed of many focused components rather than a deeply nested framework, so prefer incremental additions that match established patterns instead of introducing new architectural layers.
