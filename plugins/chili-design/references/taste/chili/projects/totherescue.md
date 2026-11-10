# ToTheRescue — search & rescue coordination (B2B / professional)

Figma (approved screens): https://www.figma.com/design/5L8UBFxoXx1nFHvZsgDPyL/Untitled?node-id=5-4009
Source: 11 screens; tokens from Figma variables, layout from layers. Opt-in reference — see `../craft.md`, `../ideas.md`.

## Product
Coordination platform for search and rescue teams: sessions, people of interest (missing persons), map with tasks and pins, updates/chat with voice messages. Field use: outdoors, stress, bad network.

## Visual (from Figma tokens)
- Light warm: base #F2EFEB, surfaces white / #F5F4F4, primary #2F4D2D, text #1C1C1C / #636363, danger #E00000.
- Inter, Regular + Medium only; 22/28 titles, 15/20 subhead. Spacing tokens 2–64, radius tokens 8–24; search & chips 40 h r 12; person card r 20; tab bar top r 32 with warm shadow, central map button 56.
- Full specs: `../craft.md`.

## Signature patterns
- **Tab bar** with a central round map button (map is the core tool).
- **Session details**: date/time and sector rows with icons, «Session updates» row, map preview with «View on map», people list, «Pins» with empty state + «Add pin».
- **People of interest**: search + filter icon, segmented «Missing 27 / Completed 5» with counts; two view modes (big photo cards / compact list).
- **Person details**: large photo, attribute chips (gender, age, height, weight), last seen / missing since / place rows, «Appearance» list with icons and right-aligned labels.
- **Full-screen map**: top status chip «Location will be sent in 30s» + close; floating controls column; tapped point → callout card (coordinates, task text, «Cancel task» in red); bottom floating «Details» chip with avatars + primary «Add pin».
- **Add pin form**: location card with coordinates, description, **hold-to-record voice**, photo/video upload with progress %, CTA disabled until valid.
- **Updates chat**: text + voice bubbles, own messages green, timestamps and read ticks, composer with «+» and mic.
- **No connection**: full-screen state with icon, one line, «Try again».

## Ideas worth remixing (principle, not look)
Counts in segmented controls · voice input for field users · status chip over map · offline as a first-class state · strong single accent on a calm light base.

## Watch out
Coordinates are shown raw (many decimals) — in new work round them or offer copy. Map + floating controls + bottom chips: keep the bottom area free of extra sheets (one sheet max, see `platform/surfaces.md`).
