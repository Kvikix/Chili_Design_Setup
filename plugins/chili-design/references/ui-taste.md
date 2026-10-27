# UI taste guide (built-in reference base for ui-craft)

Own-words craft principles. Cite as (UI craft) or the underlying law/guideline. Extend this file with the team's favourite references and external taste skills.

## Hierarchy and layout
- Squint test: the primary element and action must stand out at a glance; at most 3 levels of emphasis per screen.
- Use size, weight and colour together sparingly — contrast comes from difference, so keep most text calm.
- Consistent spacing scale (4/8 pt), larger gaps between groups than within (Gestalt proximity).
- Align to a clear grid; optical alignment for icons and text with icons.
- Whitespace is structure, not emptiness — remove dividers when spacing can group.

## Typography
- 1 family (2 max), a modular type scale (e.g. 12/14/16/20/24/32), 2–3 weights.
- Body 16 pt+ on mobile, line height ~1.4–1.5 for body, tighter for headings.
- Limit line length on web (~60–80 characters).
- Numbers that are compared (marks, prices, stats): tabular figures, aligned.

## Colour
- Roles, not paints: background, surface, primary, text primary/secondary, border, status (success/warning/error/info).
- 60/30/10 balance; one accent for primary actions; status colours never decorative.
- Design dark theme with its own values (not inverted): lower-saturation accents, elevated surfaces lighter.
- Contrast per WCAG 2.2 in every theme.

## Components and detail
- Same radius family across components (e.g. 8/12/16); nested radii = outer − padding.
- Shadows subtle and consistent; prefer surface colour steps over heavy shadows.
- Icons from one set, one stroke weight, aligned to text baseline.
- Every interactive element has hover/pressed/focus/disabled where the platform needs them.
- Real, varied content in mockups (long names, empty values, many items) — design for the extremes.

## Motion
- Purposeful: explains change of state or place; 150–300 ms for UI transitions; respect «reduce motion».

## Avoid the «AI-generic» look
- No default purple–blue gradients, random glassmorphism, emoji as icons, centred everything, identical card grids for unlike content, decorative 3D blobs, over-rounded pills everywhere.
- No lorem ipsum, no fake perfect data; no more than one visual trick per screen.

## Platform feel
- iOS: large titles, sheets, SF-style spacing, native controls where possible (HIG).
- Android: Material components and motion, FAB only for a single main action (Material).
- Web: hover states, keyboard focus, responsive grid, max content width.
