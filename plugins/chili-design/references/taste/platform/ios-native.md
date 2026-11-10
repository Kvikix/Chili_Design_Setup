# iOS native (SwiftUI / UIKit) — behaviour reference

Apply when the project ships native iOS or a Flutter app with an iOS-specific look. Rules from `surfaces.md` and `navigation.md` apply first.
Visual style of the current OS changes yearly (e.g. iOS 26 «Liquid Glass» materials, floating tab bar) — follow the project DS; use system look only where the project already does (check: Nov 2026).

## Navigation
- **Tab bar** at the bottom, 3–5 items, SF Symbols + label. Each tab has its own navigation stack.
- **Navigation bar:** large title on top-level screens, collapses to inline title on scroll; standard title on detail screens. Back button shows previous title or «Back», swipe from left edge goes back — never disable it without a reason.
- Trailing bar buttons: 1–2 actions max (Edit, Add, More «…» menu).
- **Toolbar** at the bottom for screen-specific actions only when there's no tab bar (editor screens).

## Modal presentation
- **Sheet** (`.sheet` with detents `.medium` / `.large` / custom): grabber visible when resizable; background stays visible at medium; swipe down dismisses. `interactiveDismissDisabled` + confirm only when there are unsaved changes.
- **Full-screen cover** for immersive tasks (camera, onboarding, player) — needs an explicit close.
- Page-sheet style modal (large detent) for create/edit tasks: «Cancel» leading, «Done»/«Save» trailing, title in the middle.
- One sheet at a time (`surfaces.md` §2); content changes inside the sheet use its own `NavigationStack`, not a second sheet.
- **Popover** on iPhone adapts to a sheet — design it as a sheet.

## Alerts, action sheets, menus
- **Alert:** title + optional message, 2 buttons side by side (3+ stack vertically); cancel bold/default; destructive red.
- **Confirmation dialog (action sheet):** from the bottom, list of actions + Cancel; for «choose an action» and destructive confirmation of a visible element.
- **Context menu:** long press on items, with preview; same actions must exist elsewhere (discoverability).
- **Pull-down menus** from buttons (`Menu`) for sort, filter options, «…» actions.

## Controls
- Switch for instant on/off; segmented control for 2–5 views; stepper for small numeric changes; `Picker` styles: menu (compact), wheel (in sheet), inline list in forms.
- **Date picker:** compact (tap → popover calendar), inline calendar, or wheel. Don't build custom calendars unless the product needs ranges/availability.
- **Lists / Forms** (`List`, `Form`): inset grouped style for settings, section headers/footers for explanations, disclosure chevrons for push rows, swipe actions on rows (destructive trailing, red).
- **Search:** `.searchable` in nav bar, scope bar, suggestions; Cancel returns to the list state.
- Text fields: `textContentType` (email, password, oneTimeCode, address), Return key types, clear button.

## System UI you can't restyle (design around it)
Permission alerts, Apple Pay sheet, StoreKit purchase sheet, Sign in with Apple, passkey/AutoFill sheet, share sheet, photo picker, document picker, Face ID prompt, App Tracking Transparency.

## Feedback
- No native toast — use a short banner/HUD, inline confirmation or haptic + state change; follow project DS.
- Haptics: success/warning/error notification feedback, selection feedback on pickers, light impact on toggles — subtle.
- Pull to refresh (`refreshable`), activity indicator for short waits, skeletons for content.

## Layout and accessibility
- Safe areas: content clears Dynamic Island, status bar and home indicator; CTA above home indicator.
- Touch targets ≥ 44×44 pt; standard margins 16–20 pt.
- **Dynamic Type:** text scales up to accessibility sizes — layouts must wrap, not truncate key info; test XXXL.
- Dark mode, Increase Contrast, Reduce Motion, Reduce Transparency (glass/blur surfaces need a solid fallback), VoiceOver labels.

## Anti-patterns on iOS
Android-style FAB · hamburger as main nav · custom back button that breaks the swipe · snackbar copied from Material without adaptation · system alerts restyled as custom popups · sheets stacked on sheets · bottom tab bar hidden on every push.

Sources: (HIG).
