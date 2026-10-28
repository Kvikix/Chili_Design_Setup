---
name: flow-builder
description: Build or revise multi-screen user flows (existing product or new product) from the task and current patterns. Use when navigation, steps, branching or several connected screens change.
argument-hint: "[Jira URL] [Figma source URL (optional — output goes to «Playground AI»)] [mode=analyze|build] [ui=system|extend|free] [refs=...]"
---

# Flow builder

Input: $ARGUMENTS

UX quality: when designing, apply `../../references/ux-principles.md` (relative to this SKILL.md — read only the sections relevant to the change: states, forms, navigation, accessibility, content). Project design system and approved patterns take priority. Accessibility target: WCAG 2.2 AA (`../../references/wcag-2.2.md`). Use NN/g guidance (`../../references/nngroup.md`) for patterns. Back every notable design decision with a short source in parentheses — (NN/g), (WCAG …), (закон …) — as described in «How to argue decisions» — in the plan (analyze) and in the result report (build).

UI approach and references (from new-task): `ui=system` (default for existing projects) — only the project's design system; `ui=extend` — design system first, new components/tokens allowed and labelled `Proposal`; `ui=free` — new visual (default for greenfield). For `extend`/`free`, invoke skill `ui-craft` (goal `screen`) for the visual direction before drawing, using `refs` (designer's references, Mobbin results, taste guide). If a wireframe was approved in chat, use its structure spec as the layout source.

Language in Figma: copy inside mockups in the project UI language (`language.ui`); page, section, frame and layer names, annotations and labels (`Variant A`, `Proposal`) always in English. Never write Russian in Figma unless it is a UI language of the project.

1. Default to `analyze`. Read task, affected flow context, related approved Figma frames, and directly relevant design-system sections. No global Figma scan.
2. Produce a compact flow map with steps, entry/exit, branches and screen reuse. Mark documented states versus suggestions and missing requirements.
3. Estimate the number of screens to add/change. If the task is ambiguous in high-impact product behavior, present decision points before writing.
4. For `build` mode, implement **one representative screen** first if significant new UI is required; then reuse approved patterns/components (or, for `extend`/`free`, the agreed direction) across remaining agreed steps. Only on the output page (`output.page_name`, default «Playground AI»), in the task Section.
5. Check navigation continuity, labels, touched error/loading/empty states, and task coverage. Report unknowns and Figma links when verified.

Efficiency: prefer reusing existing screens and copying instances over constructing from primitives. Avoid full project crawling, repeated end-to-end redesign, or unrelated external research. Use checkpoints for large flows.
