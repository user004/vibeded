---
name: modern-css-expert
description: 'Provides guidance for styling the shadcn/ui and Tailwind field guide, including modern native CSS when custom styles are necessary.'
---
Use this skill when styling or refactoring the field guide. The project uses shadcn/ui (Radix Nova) and Tailwind CSS v4; its shared theme lives in `src/index.css`. Prefer existing shadcn/ui primitives and Tailwind utilities for component styling. Use native CSS when utilities cannot express a reusable or complex rule clearly.

This skill focuses on writing clean, maintainable CSS using native browser features such as:
- CSS nesting
- Custom properties
- Logical properties
- Modern layout primitives like Grid and Flexbox
- Functions like `clamp()`, `min()`, `max()`, and `color-mix()`
- Layered backgrounds, media queries, and container-friendly responsive patterns when appropriate

Workflow:
1. Read the existing styles and match the codebase’s current naming, structure, and formatting conventions.
2. Reuse shadcn/ui primitives from `src/components/ui/` for controls and compose them in the field-guide components. Add missing primitives with `npx shadcn@latest add <component>`.
3. Use Tailwind utilities and existing theme colors for layouts and local styling; put shared token changes in `src/index.css`.
4. When custom CSS is needed, prefer native CSS over extra wrappers or JavaScript-driven styling. Reuse existing custom properties, adding new ones only when they improve consistency or readability.
5. Use nesting to keep related selectors together, but avoid deep selector chains that make styles brittle.
6. Prefer Grid or Flexbox based on the layout problem rather than forcing one pattern everywhere.
7. Use logical properties and scalable sizing where they improve adaptability across layouts and writing modes.
8. Keep selectors intentional and scoped to the component or feature being changed.
9. When refactoring, preserve behavior and appearance unless the task explicitly calls for visual changes.

Guidelines:
- Favor composable, readable utility classes and CSS over clever shortcuts.
- Avoid preprocessors, mixins, or CSS-in-JS patterns unless the codebase already requires them.
- Prefer Tailwind's spacing scale and the shadcn/ui theme's custom properties for shared color and radius values.
- Use modern CSS features that are already consistent with the project’s tooling and browser support expectations.
- Do not duplicate declarations when a shared variable or existing pattern already covers the need.
- Do not reintroduce Open Props or the removed component CSS files.
