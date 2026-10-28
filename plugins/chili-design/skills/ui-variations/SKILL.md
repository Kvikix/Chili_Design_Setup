---
name: ui-variations
description: Explore client-facing design alternatives (number set by the designer, default 3) for a feature, in an existing product or a new one. Choose when asked for concepts/options, not a direct Jira implementation.
argument-hint: "[feature or Jira URL] [Figma source URL (optional — output goes to «Playground AI»)] [variants=N (default 3, max 5)] [ui=system|extend|free] [refs=...]"
---

# UI variations

Input: $ARGUMENTS

UX quality: when designing, apply `../../references/ux-principles.md` (relative to this SKILL.md — read only the sections relevant to the change: states, forms, navigation, accessibility, content). Project design system and approved patterns take priority. Accessibility target: WCAG 2.2 AA (`../../references/wcag-2.2.md`). Use NN/g guidance (`../../references/nngroup.md`) for patterns. Back every notable design decision with a short source in parentheses — (NN/g), (WCAG …), (закон …) — as described in «How to argue decisions» — in the plan (analyze) and in the result report (build).

UI approach and references (from new-task): `ui=system` (default for existing projects) — only the project's design system; `ui=extend` — design system first, new components/tokens allowed and labelled `Proposal`; `ui=free` — new visual (default for greenfield). For `extend`/`free`, invoke skill `ui-craft` (goal `screen`) for the visual direction before drawing, using `refs` (designer's references, Mobbin results, taste guide). If a wireframe was approved in chat, use its structure spec as the layout source.

Language in Figma: copy inside mockups in the project UI language (`language.ui`); page, section, frame and layer names, annotations and labels (`Variant A`, `Proposal`) always in English. Never write Russian in Figma unless it is a UI language of the project.

1. Define the fixed requirements, allowed variation boundaries and decision criteria.
2. Inspect existing app style and relevant components (if any). Use Mobbin (skill `pattern-research`) only when chosen as a reference source or asked; cite borrowed patterns (Mobbin).
3. Determine `variants` (from the input or the designer; default 3, range 1–5). Before expensive Figma work, propose exactly that many **meaningfully distinct** options in a short table: approach, benefits, trade-offs, risks, source. If the boundaries allow fewer genuinely different approaches than requested, say so and propose fewer rather than padding with cosmetic differences.
4. If the user has instructed direct creation, produce variations on the output page (`output.page_name`, default «Playground AI») — task Section, labelled `Variant A`, `Variant B`… with existing design tokens/components. Otherwise ask for option selection before full build.
5. Present comparable variants, not different business rules. Mark any concept requiring new components or engineering effort.

Efficiency: one representative screen per option initially; expand the chosen option into a flow later. Avoid building several complete flows without explicit request.
