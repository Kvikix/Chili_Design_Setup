# Flutter — what designers need to know

Flutter draws its own UI (it doesn't use native iOS/Android controls). Consequences for design:
- What you design is what gets built — on both platforms — unless you explicitly design per-platform differences.
- System-look updates of iOS/Android don't arrive automatically. E.g. iOS 26 Liquid Glass is not part of Flutter's Cupertino widgets; it needs custom work or native plugins — design without it unless developers confirm (check: Nov 2026).
- System UI (permissions, payment sheets, purchase sheets, sign-in sheets, pickers from plugins, share sheet) is still native — design around it, don't mock it.
Rules from `surfaces.md` and `navigation.md` apply first.

## Choose the platform strategy per project (record in `context/design-system.md`)
1. **One brand UI on both platforms** (most common, cheapest): Material-based or custom DS; adapt only behaviour (back, gestures, system UI, haptics).
2. **Adaptive:** same layout, platform-specific controls where users notice (switches, alerts, date pickers, navigation transitions) — via `.adaptive` constructors and `Cupertino*` widgets.
3. **Fully platform-specific screens:** rarely worth it — roughly doubles UI work. Propose only with a reason.

## Cheap vs expensive (talk to devs before designing the expensive column)
| Usually cheap (built-in) | Costs more (custom or plugin) |
|---|---|
| Material 3 components themed with project tokens | Pixel-perfect native iOS look everywhere |
| `showModalBottomSheet` with drag handle, content-sized or scroll-controlled | Sheets with custom multi-detent snapping and background interaction |
| `CupertinoAlertDialog`, `CupertinoActionSheet`, `showAdaptiveDialog`, `Switch.adaptive` | Glass/blur materials, complex shared-element transitions |
| `NavigationBar`, `TabBar`, `AppBar`, `SliverAppBar` (collapsing) | Hero animations across nested navigators, custom gestures |
| `showDatePicker` (Material), `CupertinoDatePicker` in a modal popup | Custom calendars with availability/ranges |
| Lists with `ListView`, pull-to-refresh, skeletons | Complex charts, maps with custom clustering |
| Theme light/dark from tokens (`ThemeData`, `ThemeExtension`) | Per-screen dynamic theming, Material You dynamic colour on brand apps |

## Navigation
- Router (`go_router` or similar) with nested navigation per tab (`StatefulShellRoute`) keeps each tab's stack — specify this in flows.
- Page transitions: Cupertino slide + edge swipe-back on iOS, Material/predictive-back transitions on Android — set per platform in the theme, don't draw one custom transition for both.
- Android system back and predictive back must work (`PopScope` only to confirm data loss).
- Deep links land on routes; define parent route for back.

## Sheets, dialogs, feedback in Flutter
- One sheet at a time (`surfaces.md` §2). Multi-step inside a sheet = content switch inside the same sheet (internal `Navigator` or state) — specify «step 2 replaces content, back arrow in sheet header».
- Tall sheets: `isScrollControlled: true`, `useSafeArea: true`, max height ~90%; keyboard handled with view insets — specify CTA sticky above keyboard.
- `showCupertinoModalPopup` for iOS-style pickers/action sheets; `showModalBottomSheet` for Material.
- Snackbar via `ScaffoldMessenger` (Material). On iOS-adaptive projects, consider a top banner or inline confirmation instead.
- Dialogs: `AlertDialog` (Material) vs `CupertinoAlertDialog`; `showAdaptiveDialog` picks per platform.

## Text, layout, accessibility
- Text scales with system settings (`TextScaler`) — design for 200% on key screens; avoid fixed-height text containers.
- Safe areas (`SafeArea`): notch, Dynamic Island, home indicator, Android nav bar, edge-to-edge.
- Touch targets ≥ 48 dp (Material default) — also fine for iOS 44 pt.
- Semantics labels for icons/images (VoiceOver/TalkBack); contrast in both themes.
- Fonts: SF Pro isn't available on Android; ship the brand font or use platform defaults deliberately.

## Handoff tips for Flutter teams
- Name components as in the Flutter codebase / Widgetbook when known; mark platform differences explicitly: `iOS: CupertinoSwitch · Android: Switch`.
- Mark system/provider UI as «native, not designed» in annotations.
- Spacing/radii/colours as tokens (they map to `ThemeData`/`ThemeExtension`); avoid one-off values.

## Anti-patterns in Flutter projects
Designing iOS and Android screens differently without agreement · mocking native permission/payment/purchase sheets as custom UI · Material ripple + iOS chevrons mixed randomly · relying on iOS-26-only visuals · custom sheets stacked on sheets · ignoring Android back.

Sources: (Flutter docs), (HIG), (Material).
