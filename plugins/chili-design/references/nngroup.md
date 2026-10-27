# Nielsen Norman Group — key guidance (summary)

Own-words summary of widely known NN/g research and guidelines (nngroup.com/articles). Cite in output simply as **(NN/g)** — titles below are for orientation only, don't put them in the output. Use only what's relevant to the change.

## Foundations
- **10 Usability Heuristics for User Interface Design** (Jakob Nielsen): visibility of system status · match between system and real world · user control and freedom (undo, exit) · consistency and standards · error prevention · recognition rather than recall · flexibility and efficiency (shortcuts for experts) · aesthetic and minimalist design · help users recognize, diagnose, recover from errors · help and documentation.
- **Response Times: The 3 Important Limits** — 0.1 s feels instant; 1 s keeps the flow of thought (show something is happening); 10 s is the attention limit (show progress, allow cancel).
- **Jakob's Law** — users spend most time in other apps; follow conventions they already know.
- **Progressive Disclosure** — show the essential first, advanced options on request; keep the number of levels low.
- **Recognition vs. Recall** — make options, recent items and context visible instead of making users remember.

## Content and reading
- **F-Shaped Pattern of Reading on the Web** — users scan: front-load headings and first words, use subheads, bullets, bold key terms.
- **How Users Read on the Web** — users scan rather than read; concise, objective, scannable text.
- **Microcopy / UX writing** — specific labels, verbs on buttons, user's vocabulary, no jargon.

## Forms and errors
- **Website Forms Usability: Top 10 Recommendations** — single column, visible labels above fields (not placeholders), group related fields, mark optional (or required) fields consistently, don't split one value across fields without need, clear primary action.
- **Placeholders in Form Fields Are Harmful** — placeholders disappear, strain memory and look like filled values; use persistent labels and helper text.
- **Error-Message Guidelines** — visible next to the problem, explicit and human-readable, polite, precise, constructive (how to fix), preserve the user's input.
- **Inline validation** — validate on leaving the field, not on every keystroke; confirm success where useful.
- **Confirmation Dialogs** — only for consequential, irreversible actions; name the action on the button («Удалить»), not «OK/Да»; overuse makes people click through — prefer undo where possible.

## Feedback and states
- **Skeleton Screens** — for full-page/content loads of ~2–10 s; spinners for short actions; progress bars for long ones.
- **Designing Empty States** — explain why it's empty, what will appear, and the next action; use as onboarding/teaching moment.
- **Visibility of System Status** — always show where the user is and what's happening (progress, saved state, sync).
- **Toast / snackbar notifications** — for low-priority, non-blocking feedback; don't hide critical info in auto-dismissing toasts.

## Navigation and layout
- **Modal & Nonmodal Dialogs** — modals interrupt; use only for critical, short, focused tasks; always an obvious way to close.
- **Hamburger menus / hidden navigation** — hidden navigation is used less; show top-priority destinations visibly (tab bar on mobile).
- **Tabs, Used Right** — tabs for switching between related views of the same level; clear selected state; short labels.
- **Accordions** — good on mobile for long content; bad when users need most of the content at once.
- **Cards** — for heterogeneous, browsable content; not for dense comparison (use lists/tables).
- **Breadcrumbs / wayfinding** — show location and a path back in hierarchical structures (mostly web).
- **Wizards** — for infrequent, linear tasks with dependent steps; show progress and allow going back without losing data.

## Mobile
- **Touch targets** — at least ~1 cm × 1 cm physical size; spacing prevents mis-taps.
- **Bottom sheets** — good for contextual actions/details; keep them dismissible and avoid stacking.
- **Mobile onboarding** — skip deck-of-cards tutorials where possible; teach in context, at the moment of need.
- **Push / in-app notifications** — relevant, timely, actionable; let users control them.

## Visual design
- **Visual hierarchy** — size, colour, contrast, spacing and position signal importance; one focal point per screen.
- **Gestalt principles** (proximity, similarity, common region) — grouping communicates relationships.
- **Aesthetic-Usability Effect** — attractive UI is perceived as easier to use and can mask problems in tests.
- **Flat UI and signifiers** — interactive elements must look interactive (weak signifiers lower clickability).

## Research and process (for analysis / QA)
- **Why You Only Need to Test with 5 Users** — small iterative tests find most issues; test early and often.
- **Severity ratings for usability problems** — frequency × impact × persistence → use to prioritise QA findings (matches blocker / should fix / optional).
- **Design critiques** — tie feedback to goals and principles, not taste.
