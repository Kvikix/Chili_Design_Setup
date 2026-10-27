---
name: ui-variations
description: Explore client-facing design alternatives (number set by the designer, default 3) for a specific feature within an existing mobile app. Choose when asked for concepts/options, not a direct Jira implementation.
argument-hint: "[feature or Jira URL] [Figma source URL (optional — output goes to «AI-концепты»)] [variants=N (default 3, max 5)]"
---

# UI variations

Input: $ARGUMENTS

UX quality: when designing, apply `../../references/ux-principles.md` (relative to this SKILL.md — read only the sections relevant to the change: states, forms, navigation, accessibility, content). Project design system and approved patterns take priority. Accessibility target: WCAG 2.2 AA (`../../references/wcag-2.2.md`). Use NN/g guidance (`../../references/nngroup.md`) for patterns. Back every notable design decision with a short source in parentheses — (NN/g), (WCAG …), (закон …) — as described in «How to argue decisions» — in the plan (analyze) and in the result report (build).

1. Define the fixed requirements, allowed variation boundaries and decision criteria.
2. Inspect existing app style and relevant components. Consult Mobbin only if specifically asked or if the user wants external pattern research, and cite the source of borrowed patterns.
3. Determine `variants` (from the input or the designer; default 3, range 1–5). Before expensive Figma work, propose exactly that many **meaningfully distinct** options in a short table: approach, benefits, trade-offs, risks, source. If the boundaries allow fewer genuinely different approaches than requested, say so and propose fewer rather than padding with cosmetic differences.
4. If the user has instructed direct creation, produce variations on the «AI-концепты» page (task Section, labelled «Вариант A», «Вариант B»…) with existing design tokens/components. Otherwise ask for option selection before full build.
5. Present comparable variants, not different business rules. Mark any concept requiring new components or engineering effort.

Efficiency: one representative screen per option initially; expand the chosen option into a flow later. Avoid building several complete flows without explicit request.
