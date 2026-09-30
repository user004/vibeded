# Copilot instructions for vibeded

## Project overview
This repo is a Vite + React app for a Grounded 2 field guide. The app is data-driven: each catalog category (Armor, Creatures, Mutations, Resources, Statuses, Trinkets, Weapons) is backed by static JSON under `src/data/`, and the UI renders reusable list/card components on top of those fixtures.

The project is intentionally organized around a few shared patterns rather than deep page nesting:
- `src/components/Tabs/Tabs.jsx` orchestrates the category navigation.
- `src/context/FieldGuideContext.jsx` owns checkbox/toggle state for crafted items and persists it to `localStorage` under `grounded2FieldGuideData`.
- `src/utils/listFilterUtils.js` centralizes normalization, unique values, counts, and selected-filter matching.
- `src/components/ui/*.jsx` contains shadcn/ui primitives; the field-guide components under `src/components/` compose them.
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
- `src/main.jsx` mounts the app and imports `src/index.css`, which loads Tailwind CSS v4, shadcn/ui styles, and the theme.
- `src/components/App/App.jsx` wraps the app in `TooltipProvider` and `FieldGuideProvider` and renders the hero plus tabbed catalog shell.
- `src/components/Tabs/Tabs.jsx` uses shadcn/ui tabs for navigation; each tab renders a category-specific list component.
- `src/data/*.json` is the source of truth for list content and item metadata; keep new content there instead of hard-coding data in components.
- `src/components/*List/*.jsx` components read the JSON, build derived filter values, and render the UI for a given category.
- `src/utils/listFilterUtils.js` handles the shared normalization and filter logic so list code stays consistent across categories.
- `components.json` configures the shadcn/ui Radix Nova preset and `@/` aliases; `jsconfig.json` and `vite.config.js` resolve those aliases.
- `src/components/ui/*.jsx` contains CLI-generated primitives; `src/index.css` defines the shared design tokens, and Tailwind utilities handle component layouts.
- `src/stories/Components.stories.jsx` is a living catalog of important examples and edge states for the UI.

## Key conventions
- Keep category data in `src/data/*.json` and keep the UI presentational. If you add a new catalog entry, match the existing structure used by the current list components.
- Prefer extending the existing list/filter patterns instead of introducing one-off logic for each category. Reuse `normalizeValue`, `getUniqueFilterValues`, `getFilterValueCounts`, and `filterBySelectedFilters` from `src/utils/listFilterUtils.js`.
- Preserve the slug-like checkbox key pattern used throughout the app: `name.toLowerCase().replace(/[^a-z0-9]+/g, '-')`. This is how crafted/checked state is mapped back to items.
- Use the shared React context for item toggles instead of creating another global state mechanism for simple checkbox-backed features.
- Follow the [shadcn/ui Vite guide](https://ui.shadcn.com/docs/installation/vite) for setup context. The project is already initialized: add missing primitives with `npx shadcn@latest add <component>`, then compose them in the existing field-guide components rather than rebuilding equivalent controls.
- Prefer shadcn/ui components for interactive controls and Tailwind utilities for layout and local presentation. Use theme tokens from `src/index.css` (such as `bg-muted` and `text-muted-foreground`) instead of hard-coded colors. Do not reintroduce Open Props or the removed component-local CSS stylesheets.
- Keep Storybook coverage current for UI changes; Storybook loads `src/index.css` and provides `TooltipProvider` in `.storybook/preview.jsx`.
- This codebase is JavaScript-first; keep new files in `.jsx`/`.js` unless the repo has already moved to a different language.
- For new categories, mirror the established pattern: source JSON -> list component -> filter configuration -> tab registration in `Tabs.jsx`.

## Working style for this repo
Keep changes small and consistent with the application’s existing structure. The app is composed of many focused components rather than a deeply nested framework, so prefer incremental additions that match established patterns instead of introducing new architectural layers.
