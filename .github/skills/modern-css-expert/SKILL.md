---
name: modern-css-expert
description: 'Provides guidance for writing modern native CSS with nesting and custom properties, and should be used when styling or refactoring CSS.'
---
Use this skill when working on styling tasks that should rely on modern native CSS features instead of preprocessors or utility abstractions.

This skill focuses on writing clean, maintainable CSS using native browser features such as:
- CSS nesting
- Custom properties
- Logical properties
- Modern layout primitives like Grid and Flexbox
- Functions like `clamp()`, `min()`, `max()`, and `color-mix()`
- Layered backgrounds, media queries, and container-friendly responsive patterns when appropriate

Workflow:
1. Read the existing styles and match the codebase’s current naming, structure, and formatting conventions.
2. Prefer native CSS solutions before introducing extra wrappers, JavaScript-driven styling, or repeated one-off values.
3. Reuse existing custom properties when available, and add new ones only when they improve consistency or readability.
4. Use nesting to keep related selectors together, but avoid deep selector chains that make styles brittle.
5. Prefer Grid or Flexbox based on the layout problem rather than forcing one pattern everywhere.
6. Use logical properties and scalable sizing where they improve adaptability across layouts and writing modes.
7. Keep selectors intentional and scoped to the component or feature being changed.
8. When refactoring, preserve behavior and appearance unless the task explicitly calls for visual changes.

Guidelines:
- Favor composable, readable CSS over clever shortcuts.
- Avoid preprocessors, mixins, or CSS-in-JS patterns unless the codebase already requires them.
- Prefer custom properties for shared spacing, color, radius, and sizing tokens.
- Use modern CSS features that are already consistent with the project’s tooling and browser support expectations.
- Do not duplicate declarations when a shared variable or existing pattern already covers the need.
