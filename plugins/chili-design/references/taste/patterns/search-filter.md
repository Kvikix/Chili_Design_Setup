# Search, lists and filters

## When
Catalogues, feeds, history, contacts, transactions, schedules — any list the user needs to narrow down or find one item in.

## Search
- Entry: visible search field on the list screen if search is a primary task; icon in the app bar if secondary.
- On focus: recent searches (with clear), popular/suggested queries, or categories — never an empty white screen.
- Results: live (debounced ~300 ms) for local/fast data; on «Search» key for heavy server queries. Highlight matched text.
- Scope: if several types (people, items, messages), use tabs or sections in results, not a separate filter step.
- Typos/synonyms: say «Showing results for X» rather than nothing.
- Keep the query and scroll position when the user opens a result and comes back.

## Filters and sorting
- 1–3 key filters → chips / segmented control above the list (instant apply).
- 4+ filters → «Filters» button with badge count → full-screen sheet; apply with «Show N results» (live count if cheap), «Reset» secondary.
- Show active filters as removable chips above the results; one tap to clear all.
- Sort is separate from filters: a small control («Sort: Newest») opening a short sheet/menu.
- Defaults that make sense (e.g. upcoming first, current period) and state them.
- Never filter to zero silently: disable or show counts for options that would return nothing, when data allows.

## Lists
- Row = one primary line (what), one secondary (key detail), optional trailing value/status; consistent row height per type.
- Group by date/category with sticky headers for long time-based lists.
- Pagination: infinite scroll with loading row for feeds; «Load more» or pages when the user needs to reach the end/footer.
- Pull-to-refresh where data changes; show «Updated 2 min ago» if freshness matters.
- Swipe actions only as shortcuts — the same action must exist inside the item (discoverability).

## Must-have states
Initial (before search) · typing/suggestions · loading (skeleton rows) · results · no results (what was searched + how to widen: clear filters, check spelling) · error with retry · offline (cached results labelled) · one result · very many results · long names.

## Platform notes
- **iOS:** search field in the navigation bar (`.searchable`), cancel button, scope bar for segments; large title collapses on scroll; swipe actions on rows; filters in a sheet with detents (HIG).
- **Android:** Material 3 search bar → search view (full screen) with suggestions; filter chips; sort in a menu or bottom sheet; system back closes search first (Material).
- **Flutter:** `SearchAnchor`/`SearchBar` (Material 3) or custom field; iOS feel needs `CupertinoSearchTextField`; filter sheet via `showModalBottomSheet` (`isScrollControlled: true` for tall content, `useSafeArea`); `Dismissible`/`flutter_slidable` for swipe rows.

## Copy
No results: «No results for "abc"» + action («Clear filters»). Filter button: «Filters (2)». Apply: «Show 24 results».

## Anti-patterns
Search that requires exact match · filters that reset on back · hidden active filters · spinner instead of skeleton for list loads · swipe-only actions · «No data» without explanation.

## QA checklist
Recent/suggestions on focus · query and filters persist · active filters visible and removable · counts correct in copy · all list states · back closes search/sheet before leaving screen.
