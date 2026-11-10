# Surfaces: screen, sheet, dialog, menu, toast — which one and how

Cross-platform rules. Platform specifics → `ios-native.md`, `android-native.md`, `flutter.md`.
These are **hard rules** for design workflows and `design-qa`: breaking one needs a written reason in the annotation.

## 1. Choose the surface
| Need | Use | Not |
|---|---|---|
| Main content, a new level of hierarchy (item details, settings section) | **Push screen** in the current stack | Sheet |
| Self-contained task the user starts and finishes (create, edit, compose, multi-step flow, checkout) | **Full-screen modal** (iOS) / full-screen dialog or new screen (Android) | Stack of sheets |
| Short, focused action tied to the current screen: pick an option, quick form (≤ 3–4 fields), details preview, share, filters | **Bottom sheet** (modal) | Dialog with a long form |
| Content that stays visible while the user works with the screen behind (map + list, player) | **Non-modal / persistent sheet** | Modal sheet |
| Critical decision that blocks progress: confirm destructive action, unsaved changes, required choice | **Alert / dialog** (2 actions, max 3) | Sheet, toast |
| 2–7 actions on an element | **Context menu / dropdown menu / action sheet** | Full bottom sheet with one list |
| Result of an action, no decision needed («Saved», «Copied») | **Toast / snackbar** (+ Undo when reversible) | Dialog with «OK» |
| Persistent problem or status (offline, payment failed, verify email) | **Inline banner** on the screen | Toast that disappears |
| Help or explanation of a field | Inline helper text or a small sheet/popover | Navigating away |

## 2. Bottom sheet rules
- **One sheet at a time. Never open a sheet from a sheet.** If the task inside a sheet needs another step, **continue inside the same sheet**: replace its content (step 2 of 2) with a back/close control in the sheet header, animate height if detents allow.
- If the flow inside a sheet grows beyond ~2 steps, needs a keyboard-heavy form, or its own navigation/search → it's not a sheet: use a **full-screen modal** or a **push screen**.
- A sheet may open: a system picker (date/time — ideally inline in the sheet), a system share sheet, or an alert to confirm discard/destructive action. Nothing else on top.
- Height: content-sized or detents (medium ~50% / large); never a «sheet» that is 100% height with no visible context behind — that's a full-screen modal, design it as one.
- Header: title + close (or grabber + swipe), back arrow when inside step 2+. Primary CTA sticky at the bottom, above the keyboard and safe area.
- Dismiss: swipe down / tap scrim / close / system back (Android). **Unsaved input → confirm discard** instead of losing data silently.
- Scrolling content: the sheet expands to large first, then content scrolls; the CTA never scrolls away.
- Keyboard: sheet rises with the keyboard; focused field and CTA stay visible. Long forms → full-screen modal.
- Don't put tabs, a second bottom navigation or a search-with-results-list in a small sheet.
- Destructive action inside a sheet → confirm with an alert (allowed exception) or Undo after.

## 3. Dialog / alert rules
- Title states the question («Delete lesson?»); buttons name the actions («Delete» / «Cancel»), never «OK / Yes / No».
- Max one dialog at a time; never a dialog that opens another dialog.
- No forms, scrolling lists or images in alerts (exception: one text field for rename on iOS-style prompts).
- Destructive button styled as destructive, not primary; on iOS the safe action is the default.
- Don't use dialogs for information that could be inline or a toast.

## 4. Full-screen modal rules
- For a task with its own beginning and end; close (X) or «Cancel» on the leading side, primary action («Save», «Next») on the trailing side or as a bottom CTA — follow the project DS.
- Inside it the user may push steps (step navigation) — that's correct; sheets on top follow rule 2 (one sheet, no stacking).
- Closing with changes → confirm discard.
- After completion: return to the screen that started it and show the result (updated item + toast).

## 5. Toast / snackbar rules
- One at a time, short text (≤ 1 line + optional action), 4–7 s, not covering the primary CTA or tab bar.
- Never the only place for an error that needs action — use inline error or banner.
- Accessible: announced by screen readers; action also reachable elsewhere.

## 6. Menus and action sheets
- Context/dropdown menu for actions on an element (Edit, Share, Delete) — destructive last, separated.
- iOS action sheet / Android menu or small modal sheet for «choose one of N actions» — not a custom full sheet with a giant list.

## 7. Layering limits (summary for QA)
Max depth on top of a screen: **screen → (full-screen modal →) one sheet → one alert.**
Flag as defects: sheet over sheet · dialog over dialog · toast used for blocking errors · sheet with its own tab bar · dismiss that loses input · CTA hidden by keyboard or home indicator.

Sources: (NN/g), (HIG), (Material).
