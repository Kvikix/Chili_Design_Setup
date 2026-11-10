---
name: flow-builder
description: Build or revise multi-screen user flows (existing product or new product) from the task and current patterns. Use when navigation, steps, branching or several connected screens change.
argument-hint: "[Jira URL] [Figma source URL (optional — output goes to «Playground AI»)] [mode=analyze|build] [ui=system|extend|free] [refs=...]"
---

# Flow builder

Writing: short, no filler — `../../references/writing.md` (applies to chat, plans, reports, annotations).

Input: $ARGUMENTS

UX quality: when designing, apply `../../references/ux-principles.md` (relative to this SKILL.md — read only the sections relevant to the change: states, forms, navigation, accessibility, content). Project design system and approved patterns take priority. If the project DS lacks a token/style/state, propose it in Chili DS template naming (`../../references/chili-ds-template.md`) as `Proposal`. Accessibility target: WCAG 2.2 AA (`../../references/wcag-2.2.md`). Use NN/g guidance (`../../references/nngroup.md`) for patterns. If the change touches a flow covered by the taste library (`../../references/taste/index.md` — forms, search/filters, onboarding, auth, permissions, subscriptions/paywall, payment/checkout), read that pattern file: use its flow, must-have states and platform notes (iOS / Android / Flutter); the project's approved patterns still win. Whenever the design opens anything over a screen (sheet, modal, dialog, menu, toast) follow `../../references/taste/platform/surfaces.md` — one bottom sheet at a time, further steps continue inside the same sheet, otherwise a full-screen modal or push screen; for navigation changes also `platform/navigation.md`; for platform behaviour the stack file (`ios-native.md` / `android-native.md` / `flutter.md`). Back every notable design decision with a short source in parentheses — (NN/g), (WCAG …), (… law) — as described in «How to argue decisions» — in the plan (analyze) and in the result report (build).

UI approach and references (from new-task): `ui=system` (default for existing projects) — only the project's design system; `ui=extend` — design system first, new components/tokens allowed and labelled `Proposal`; `ui=free` — new visual (default for greenfield). For `extend`/`free`, invoke skill `ui-craft` (goal `screen`) for the visual direction before drawing, using `refs` (designer's references, Mobbin results, taste guide). If a wireframe was approved in chat, use its structure spec as the layout source.

Language in Figma: copy inside mockups in the project UI language (`language.ui`); page, section, frame and layer names, annotations and labels (`Variant A`, `Proposal`) always in English. Never write Russian in Figma unless it is a UI language of the project.

1. Default to `analyze`. Read task, affected flow context, related approved Figma frames, and directly relevant design-system sections. No global Figma scan.
2. Produce a compact flow map with steps, entry/exit, branches and screen reuse. Mark documented states versus suggestions and missing requirements.
3. Estimate the number of screens to add/change. If the task is ambiguous in high-impact product behavior, present decision points before writing.
4. For `build` mode, implement **one representative screen** first if significant new UI is required; then reuse approved patterns/components (or, for `extend`/`free`, the agreed direction) across remaining agreed steps. Only on the output page (`output.page_name`, default «Playground AI»), in the task Section.
5. Check navigation continuity, labels, touched error/loading/empty states, and task coverage. Report unknowns and Figma links when verified.
6. Final step of `build`: run skill `design-validate` on the frames created in this task (report first, fixes only after the designer confirms) and include its result in the report.

Efficiency: prefer reusing existing screens and copying instances over constructing from primitives. Avoid full project crawling, repeated end-to-end redesign, or unrelated external research. Use checkpoints for large flows.
