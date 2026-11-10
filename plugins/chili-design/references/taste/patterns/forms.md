# Forms and input

## When
Any screen where the user types, picks or submits data: profile, address, booking, application, settings, multi-step forms.

## Flow
1. Ask only what the task needs now; defer optional fields (progressive disclosure) (NN/g).
2. Group fields by meaning; one column on mobile; order follows the user's mental model (name → contact → address).
3. Long forms → steps with a progress indicator and a clear step title; save progress between steps.
4. Review step before irreversible submit (payment, application, booking).
5. Submit → button shows loading and blocks double-tap → success state or inline errors.

## Fields
- Visible label above the field; placeholder only as an example, never as the label (NN/g).
- Helper text for format rules *before* the error happens (password rules, IBAN format).
- Mark the minority: if most fields are required, mark «optional» ones, not every «*».
- Right input type: email, phone (with country code), numeric, decimal, URL, date picker, OTP.
- Autofill and content types: name, email, phone, address, new/current password, one-time code.
- Masks only for fixed formats (card, phone); never block paste.
- Choice: 2–5 options → radio / segmented; 6–15 → picker or sheet list; more → searchable list.
- Toggles apply instantly; checkboxes need a submit. Don't mix in one form.
- Dates: native picker for near dates; for birth dates → three fields or wheel/year-first, not a calendar from today.

## Validation
- Inline validation on blur / after the field is finished, not on every keystroke; re-validate live once an error is shown so it disappears as soon as it's fixed.
- Error under the field, red + icon + text (not colour only, WCAG 1.4.1), says how to fix: «Enter 8 digits», not «Invalid input».
- On submit with errors: scroll to and focus the first error; show a summary for long forms.
- Server errors map to a field when possible; otherwise a banner on top with retry.
- Primary button: keep it enabled and explain errors on tap, *or* disabled with a visible reason — pick one rule per project. Disabled-without-reason is an anti-pattern.

## Must-have states
Empty · focused · filled · error · disabled/read-only · loading on submit · success · server error · offline (keep entered data) · very long values · keyboard open (nothing important hidden).

## Platform notes
- **iOS:** keyboard «Return» key labelled per field (Next/Done/Go); toolbar «Done» above numeric keypad; sheets for pickers; wheel/compact `DatePicker`; swipe-down on a sheet with unsaved changes → confirm discard (HIG).
- **Android:** IME action (Next/Done/Search); Material 3 text fields (filled or outlined — follow the project DS); date picker dialog / modal; system back with unsaved changes → confirm discard (Material).
- **Flutter:** `TextFormField` + `Form` validation; set `keyboardType`, `textInputAction`, `autofillHints`; `showDatePicker` is Material on both platforms — iOS look needs `CupertinoDatePicker` in a modal popup; check `resizeToAvoidBottomInset` / scroll so the focused field and CTA stay visible.

## Copy
Labels are nouns («Email»), buttons are verbs with object («Save address», «Send code»). Errors: what + how to fix, no blame, no codes.

## Anti-patterns
Placeholder-only labels · clearing the form on error · validation while typing the first character · «Submit» / «OK» buttons · splitting phone/card into many boxes without paste support · asking the same data twice · CTA hidden behind the keyboard.

## QA checklist
Labels visible · correct keyboards · autofill hints · error copy per field · first error focused · data survives back/offline · CTA reachable with keyboard open · touch targets ≥ 44/48 · contrast of borders/errors (WCAG 1.4.11).
