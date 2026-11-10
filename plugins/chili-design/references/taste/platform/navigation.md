# Navigation — cross-platform rules

## 1. App structure
- **3–5 top-level destinations → tab bar / navigation bar** at the bottom. Labels always visible, icons from one set.
- 6+ destinations or rarely used sections → keep 4–5 tabs, put the rest in «Profile / More / Menu». Drawer only for apps with many equal sections (rare on mobile today).
- Top-level destinations are peers; don't put a «Create» action as a tab unless it's the core of the product (then a prominent center action / FAB is a project decision).
- Each tab keeps its own stack and scroll position; tapping the active tab → scroll to top / pop to root.

## 2. Moving inside a section
- Drill-down (list → details → sub-details) = **push**. Show back with the previous screen's title (iOS) or back arrow (Android).
- Max ~3–4 levels deep; deeper → rethink structure (filters, tabs inside the screen, search).
- Segmented control / top tabs for 2–5 views of the **same** content (Upcoming / Past). Not for unrelated sections.
- Hide the tab bar only on full-screen tasks (player, camera, checkout) — not on every detail screen; follow the project.

## 3. Back
- Back always goes to the previous state the user saw, with data, filters and scroll preserved.
- Android system back / predictive back gesture and iOS edge swipe must work everywhere except mid-payment or where data would be lost (then confirm).
- Back from a deep link with no history → the logical parent (e.g. list of items), not app exit.
- Order of back on Android: close keyboard → close sheet/menu/search → previous screen → (top level) exit.

## 4. Modal vs push (see `surfaces.md`)
- Push = «go deeper»; modal = «do a task and come back». Modal flows can have internal steps; they end by returning the user to the origin with the result.
- Never push a top-level destination from inside another tab — switch tabs instead.

## 5. Deep links and notifications
- Land on the exact content, with a usable back path. Auth required → sign in → continue to target.
- Content not found / no access → explain and offer the closest useful screen.

## 6. Must-have states
Tab with badge · offline per tab · empty section · first-time vs returning · deep link while signed out · long titles in nav bar (truncate, large title wraps on iOS).

## Anti-patterns
Hamburger menu as the only navigation for core sections · tabs that change content type unpredictably · back that resets filters · modal flows that end on a dead-end screen · custom back gestures conflicting with system ones · different navigation models on iOS and Android without a reason.

## QA checklist
3–5 tabs with labels · state kept per tab · back works with gesture and button · deep links have parent · predictive back not blocked · no dead ends.

Sources: (HIG), (Material), (NN/g).
