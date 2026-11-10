# Creative exploration

Use when: `ui=extend` or `ui=free`, `ui-variations`, `ui-craft goal=direction`, work type «Research and directions», or the designer asks for bolder / more creative / unexpected options (any language).
Goal: options that are **different in idea, not in colour**, and still usable, accessible and buildable.

## Creativity level (`creative=`)
Ask once if not given (header `Creativity`), default by `ui`:
- `safe` (default for `ui=system`) — within the DS: new layout, hierarchy, content strategy, microcopy, micro-interactions. No new components.
- `bold` (default for `ui=extend`) — DS base + 1–2 new components or a signature moment per screen, labelled `Proposal`.
- `wild` (default for `ui=free`; only as one variant when `ui=extend`) — new interaction model or visual language; must still pass the guardrails.

## 1. Frame (2 lines, before ideas)
- Job: what the user must achieve on this screen, and the one feeling it should leave (calm, confident, playful, fast…).
- Constraints that can't move: business rules, platform, DS (per `ui`), states, `surfaces.md`.

## 2. Diverge — vary the axes, not the paint
Every option changes **at least 2 axes** vs the current screen and vs the other options:
| Axis | Examples |
|---|---|
| Layout model | list ↔ cards ↔ grid ↔ map ↔ timeline ↔ single focus (one item per screen) ↔ conversational |
| Interaction model | tap through ↔ inline morphing controls ↔ swipe/drag ↔ step-by-step ↔ presets-first ↔ voice/camera |
| Information density | glanceable hero number ↔ detailed table; progressive disclosure |
| Content strategy | outcome-first («≈ for 10 people»), comparison, social proof (only real), personalisation |
| Visual tone | calm / premium (2 weights, light numbers) ↔ energetic (bold type, accent fills) ↔ warm (texture, tinted shadows) |
| Signature moment | one memorable detail: a metaphor in a component, a morph, a progress-as-CTA, a re-tint by section |

## 3. Techniques (pick 2–3 per task)
- **Cross-domain borrow** — take a pattern from another app category (stories progress in insurance). Mobbin: search the *pattern*, not the domain.
- **Make it tangible** — translate abstract values into everyday units.
- **Morph instead of open** — can the control transform in place instead of opening a sheet/screen?
- **Exaggerate one thing** — one element 2× more prominent (the number, the photo, the CTA), everything else calmer.
- **Reverse an assumption** — presets before input, result before form, map before list, defaults before choices.
- **Metaphor** — one domain object shapes one component (bag handle on cart sheet).
- **Constraint card** — design it one-handed / in 5 seconds / with no text / for a stressed user.
- **Idea bank** — if «Chili projects» is a chosen reference, remix principles from `chili/ideas.md`.

## 4. Converge
Score each option 1–3 on: clarity (3-second test) · fit to job and feeling · distinctiveness · feasibility (DS reuse; Flutter/native cost — see `platform/flutter.md`) · accessibility. Drop anything with clarity 1.
For N variants, spread them: at least one `safe`, one `bold`; one `wild` only if the level allows. Label each in Figma (`Variant A — safe`), with a one-line idea and its trade-off.

## Guardrails (creativity never breaks these)
`surfaces.md` rules (one sheet at a time…) · WCAG 2.2 AA in every theme · platform back/gestures · confirmed business rules and copy · one primary action per screen · ≤ 1 signature moment per screen · real content.

## Anti-generic check
No: purple-blue gradient by default, glass everywhere, random 3D blobs, identical card grids for unlike content, emoji as icons, «hero + 3 features» layouts, decoration without a job. If an option could belong to any app, it is not done — add the domain-specific idea.
