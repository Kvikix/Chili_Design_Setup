# Android native (Jetpack Compose / Views, Material 3) — behaviour reference

Apply when the project ships native Android or a Flutter app with Material look. Rules from `surfaces.md` and `navigation.md` apply first.
Material evolves (Material 3, «Expressive» updates) — follow the project DS; borrow new components only as `Proposal` (check: Nov 2026).

## Navigation
- **Navigation bar** at the bottom, 3–5 destinations, icon + label, active indicator pill. Each destination keeps its state.
- **Top app bar:** small (detail screens), medium/large (top-level, collapses on scroll); back arrow (navigation icon) on the left; 1–2 action icons + overflow «⋮» menu.
- **Navigation drawer** only for many equal sections; **navigation rail** on tablets/foldables.
- **System back** (button or gesture) must always work; **predictive back** shows a preview of the destination — don't intercept back except to confirm data loss.
- Edge-to-edge is the default on recent Android: content draws behind status and navigation bars; pad for system insets.

## Modal presentation
- **Modal bottom sheet:** drag handle, scrim, dismiss by swipe down, scrim tap or back. Partial height → expands on drag/scroll. One sheet at a time (`surfaces.md` §2); step 2 replaces content inside the same sheet.
- **Standard (persistent) bottom sheet** coexists with screen content (maps, players).
- **Full-screen dialog** (or a new screen) for create/edit tasks: close X on the left, «Save» text button on the right.
- **Side sheet** on large screens instead of bottom sheet for secondary content.

## Dialogs, menus, feedback
- **Basic dialog:** title, supporting text, text buttons on the right («Cancel» · «Delete»); optional icon. Not for forms or long lists.
- **Menus:** dropdown from overflow or a field (exposed dropdown); context actions via long press are not discoverable alone — keep them elsewhere too.
- **Snackbar** at the bottom, above the navigation bar/FAB, one line + optional action («Undo»), 4–10 s. Errors that need action → inline or dialog.
- **Progress:** linear (determinate when possible) for page/load, circular for short actions; skeletons for content; pull-to-refresh indicator.

## Actions
- **FAB / extended FAB** only for the single most important constructive action of a screen (Create, Compose); bottom-right; hides on scroll if needed. No FAB for secondary or destructive actions.
- Buttons hierarchy: filled (primary) → tonal → outlined → text. One filled per area.
- **Chips:** filter (multi-select), input, assist, suggestion — use the right type.
- **Segmented buttons** for 2–5 options; **tabs** (primary/secondary) under the top app bar for content views.

## Controls and input
- Text fields filled or outlined (one style per project), label floats, supporting text below, error replaces supporting text; trailing icon for clear/show password.
- Date/time pickers: modal date picker (calendar), docked, or input mode; time picker dial or input.
- Switch for instant settings; checkboxes for lists/forms; radio for single choice in lists or dialogs.
- IME actions (Next/Done/Search); autofill hints; numeric keyboards.

## System UI you can't restyle (design around it)
Runtime permission dialogs, Credential Manager / Google sign-in sheet, Google Pay sheet, Play Billing sheet, BiometricPrompt, photo picker, share sheet, notification permission (Android 13+).

## Layout and accessibility
- Touch targets ≥ 48×48 dp; spacing 8 dp grid; margins 16 dp (compact).
- Font scaling up to 200%: layouts reflow, no clipped text.
- Dynamic colour (Material You) only if the project uses it — brand apps usually keep brand palette.
- Dark theme, TalkBack labels, colour contrast in both themes.
- Window size classes: compact / medium / expanded — define behaviour on foldables/tablets if the project supports them.

## Anti-patterns on Android
iOS-style back chevron + «Back» text · intercepting back to show «Are you sure you want to exit?» · FAB for every screen · snackbar covering the navigation bar · dialogs with forms · ignoring system insets (content under nav bar) · stacking bottom sheets.

Sources: (Material).
