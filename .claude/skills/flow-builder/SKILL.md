---
name: flow-builder
description: Build or revise multi-screen user flows for an existing mobile app from Jira and current approved patterns. Use when navigation, steps, branching or several connected screens change.
argument-hint: "[Jira URL] [Figma source URL (optional — output goes to «AI-концепты»)] [mode=analyze|build]"
disable-model-invocation: true
---

# Flow builder

Input: $ARGUMENTS

1. Default to `analyze`. Read task, affected flow context, related approved Figma frames, and directly relevant design-system sections. No global Figma scan.
2. Produce a compact flow map with steps, entry/exit, branches and screen reuse. Mark documented states versus suggestions and missing requirements.
3. Estimate the number of screens to add/change. If the task is ambiguous in high-impact product behavior, present decision points before writing.
4. For `build` mode, implement **one representative screen** first if significant new UI is required; then reuse approved patterns/components across remaining agreed steps. Only on the «AI-концепты» page, in the task Section.
5. Check navigation continuity, labels, touched error/loading/empty states, and task coverage. Report unknowns and Figma links when verified.

Efficiency: prefer reusing existing screens and copying instances over constructing from primitives. Avoid full project crawling, repeated end-to-end redesign, or unrelated external research. Use checkpoints for large flows.
