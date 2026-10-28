---
name: ui-craft
description: Strong visual UI craft — hierarchy, typography, colour, spacing, detail and states — driven by the chosen UI approach (strict design system, design system + improvements, or new visual) and reference sources (designer's own references, Mobbin, built-in taste). Use for «Создание UI-основы», when new-task passes ui=extend or ui=free, or when the designer asks to make a screen look stronger.
argument-hint: "[screen or goal] [ui=system|extend|free] [refs=...] [goal=direction|screen|foundation]"
---

# UI craft

Input: $ARGUMENTS (task context, `ui`, `refs`, platforms, project type).

Always: UX principles (`../../references/ux-principles.md`), WCAG 2.2 AA (`../../references/wcag-2.2.md`), taste guide (`../../references/ui-taste.md`). Short sources in parentheses for notable decisions.

Language in Figma: copy inside mockups in the project UI language (`language.ui`); page, section, frame and layer names, annotations and labels (`Variant A`, `Proposal`) always in English. Never write Russian in Figma unless it is a UI language of the project.

## 1. Collect references (only the chosen sources)
- **Мои референсы** — analyse each link/image: what exactly to take (layout, hierarchy, typography, colour, density, components, motion) and what not to take. If a link can't be opened, say so and ask for a screenshot.
- **Mobbin** — use skill `pattern-research` (short mode) if not already done.
- **Вкус ui-craft** — use `ui-taste.md` as the reference base.
- None → design system + UX principles only.

## 2. Visual direction (before drawing)
3–6 lines: tone, density, type scale, colour roles (60/30/10), spacing scale, radii/elevation, iconography, imagery — and how it maps to the chosen `ui`:
- `system` — polish only within the design system: hierarchy, alignment, spacing rhythm, consistent states. No new components or styles.
- `extend` — design system first; propose new components/variants/tokens where they clearly improve UX; label each `Proposal` with a one-line reason.
- `free` — new visual language allowed; still accessible, consistent and buildable. Present as a direction the designer approves.

## 3. Goals
- `direction` — return the direction (and, if asked, a small style tile in chat or on the output page).
- `screen` — apply the direction to the screen(s) the workflow skill builds.
- `foundation` (work type «Создание UI-основы», greenfield) — on the output page, in the task Section: colour palette with roles (light/dark), type scale, spacing/grid, radii/elevation, and 6–10 core components (button set, input, card, list item, tab bar/nav, chip, toast, empty state) with states. Use Figma variables/styles when tooling allows; **do not publish a library** — propose it to the designer.

## 4. Self-check before reporting
Hierarchy readable in 3 seconds · one primary action · aligned to grid · consistent radii/spacing · contrast in every theme (WCAG 1.4.3, 1.4.11) · real content · states covered · nothing that looks «AI-generic» (see taste guide).
