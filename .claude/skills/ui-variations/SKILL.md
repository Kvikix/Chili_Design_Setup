---
name: ui-variations
description: Explore 2–3 client-facing design alternatives for a specific feature within an existing mobile app. Choose when asked for concepts/options, not a direct Jira implementation.
argument-hint: "[feature or Jira URL] [Figma source URL (optional — output goes to «AI-концепты»)] [number of variants]"
disable-model-invocation: true
---

# UI variations

Input: $ARGUMENTS

1. Define the fixed requirements, allowed variation boundaries and decision criteria.
2. Inspect existing app style and relevant components. Consult Mobbin only if specifically asked or if the user wants external pattern research, and cite the source of borrowed patterns.
3. Before expensive Figma work, propose 2–3 **meaningfully distinct** options in a short table: approach, benefits, trade-offs, risks.
4. If the user has instructed direct creation, produce variations on the «AI-концепты» page (task Section) with existing design tokens/components. Otherwise ask for option selection before full build.
5. Present comparable variants, not different business rules. Mark any concept requiring new components or engineering effort.

Efficiency: one representative screen per option initially; expand the chosen option into a flow later. Avoid building three complete flows without explicit request.
