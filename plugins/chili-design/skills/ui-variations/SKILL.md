---
name: ui-variations
description: Explore client-facing design alternatives (number set by the designer, default 3) for a feature, in an existing product or a new one. Choose when asked for concepts/options, not a direct Jira implementation.
argument-hint: "[feature or Jira URL] [Figma source URL (optional — output goes to «Playground AI»)] [variants=N (default 3, max 5)] [ui=system|extend|free] [refs=...] [creative=safe|bold|wild]"
---

# UI variations

Writing: short, no filler — `../../references/writing.md` (applies to chat, plans, reports, annotations).

Input: $ARGUMENTS

UX quality: when designing, apply `../../references/ux-principles.md` (relative to this SKILL.md — read only the sections relevant to the change: states, forms, navigation, accessibility, content). Project design system and approved patterns take priority. If the project DS lacks a token/style/state, propose it in Chili DS template naming (`../../references/chili-ds-template.md`) as `Proposal`. Accessibility target: WCAG 2.2 AA (`../../references/wcag-2.2.md`). Use NN/g guidance (`../../references/nngroup.md`) for patterns. If the change touches a flow covered by the taste library (`../../references/taste/index.md` — forms, search/filters, onboarding, auth, permissions, subscriptions/paywall, payment/checkout), read that pattern file: use its flow, must-have states and platform notes (iOS / Android / Flutter); the project's approved patterns still win. Whenever the design opens anything over a screen (sheet, modal, dialog, menu, toast) follow `../../references/taste/platform/surfaces.md` — one bottom sheet at a time, further steps continue inside the same sheet, otherwise a full-screen modal or push screen; for navigation changes also `platform/navigation.md`; for platform behaviour the stack file (`ios-native.md` / `android-native.md` / `flutter.md`). Build variants with `../../references/taste/creative.md`: each variant changes ≥ 2 axes (layout model, interaction, density, content strategy, tone, signature moment), spread across creativity levels (at least one `safe` and one `bold`; `wild` only if allowed), label `Variant A — safe`. Use `taste/chili/ideas.md` / `craft.md` only if «Chili projects» was chosen as a reference. Back every notable design decision with a short source in parentheses — (NN/g), (WCAG …), (… law) — as described in «How to argue decisions» — in the plan (analyze) and in the result report (build).

UI approach and references (from new-task): `ui=system` (default for existing projects) — only the project's design system; `ui=extend` — design system first, new components/tokens allowed and labelled `Proposal`; `ui=free` — new visual (default for greenfield). For `extend`/`free`, invoke skill `ui-craft` (goal `screen`) for the visual direction before drawing, using `refs` (designer's references, Mobbin results, taste guide). If a wireframe was approved in chat, use its structure spec as the layout source.

Language in Figma: copy inside mockups in the project UI language (`language.ui`); page, section, frame and layer names, annotations and labels (`Variant A`, `Proposal`) always in English. Never write Russian in Figma unless it is a UI language of the project.

1. Define the fixed requirements, allowed variation boundaries and decision criteria.
2. Inspect existing app style and relevant components (if any). Use Mobbin (skill `pattern-research`) only when chosen as a reference source or asked; cite borrowed patterns (Mobbin).
3. Determine `variants` (from the input or the designer; default 3, range 1–5). Before expensive Figma work, propose exactly that many **meaningfully distinct** options in a short table: idea (one line), axes changed, creativity level, benefits, trade-offs, risks, source. If the boundaries allow fewer genuinely different approaches than requested, say so and propose fewer rather than padding with cosmetic differences.
4. If the user has instructed direct creation, produce variations on the output page (`output.page_name`, default «Playground AI») — task Section, labelled `Variant A`, `Variant B`… with existing design tokens/components. Otherwise ask for option selection before full build.
5. Present comparable variants, not different business rules. Mark any concept requiring new components or engineering effort.
6. Final step of `build`: run skill `design-validate` on the frames created in this task (report first, fixes only after the designer confirms) and include its result in the report.

Efficiency: one representative screen per option initially; expand the chosen option into a flow later. Avoid building several complete flows without explicit request.
