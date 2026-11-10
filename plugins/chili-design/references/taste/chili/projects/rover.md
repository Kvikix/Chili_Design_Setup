# Rover — hiking routes, trips and challenges (B2C)

Figma (approved screens): https://www.figma.com/design/5L8UBFxoXx1nFHvZsgDPyL/Untitled?node-id=5-16916
Source: 14 screens; tokens from Figma variables, layout from layers. Opt-in reference — see `../craft.md`, `../ideas.md`. UI language: Latvian.

## Product
Discover and buy hiking routes, trips and events; map search; challenges with leaderboard and prizes; profile with km walked.

## Visual (from Figma tokens)
- Dark: #181818 / #0E0E0E, glass fills white 5%, tab bar rgba(15,15,15,.7) + blur 25, primary #EE7A40, secondary text #D3D3D3, CTA glow 0 4 20 primary 20%.
- SF Pro Text/Display; 25/34 Semibold titles, 16/22 body. Search 48 h r 32, cells 56 h r 32, filter chips r 24, cards r 24–32, sheet top r 30–32, CTA 56 h pill.
- Full specs: `../craft.md`.

## Signature patterns
- **Home**: greeting + avatar, notification bell with count, search, **filter dropdown chips** (Veids / Tips / Grūtība), horizontal carousels of photo cards (tags on top, title + place, price block «Cena 15€»).
- **Map search**: dark map, photo pins and cluster counts, horizontal card carousel at the bottom; collapsed bottom sheet «21 maršruti» to open the list.
- **Filter as one bottom sheet per filter**: title, «Notīrīt» (clear) in accent, radio list or from–to fields, CTA with live count «Parādīt 8 rezultātus».
- **No results**: illustration + «Nekas nav atrasts» + hint to change keywords or filters.
- **Detail page**: hero image carousel with dots, content card overlapping the hero, tags, description with «Read More», accordions (Programma / Kas iekļauts / Papildus informācija), «included» carousel, checklist «Ceļojumā noderēs» partly faded + note «buy to access full list» (teaser of paid content), **sticky bottom bar: price + «Nopirkt»**.
- **Challenge**: prize card, stats tiles (13 routes / 6 events), leaderboard list with rank, avatar, progress, points.
- **Profile**: orange stats card (152 km walked), settings list with icons, «Dzēst kontu» as red text, avatar picker as bottom sheet grid.

## Ideas worth remixing (principle, not look)
Live result count on filter CTA · sticky price + buy bar · locked-content teaser · stats card in profile · avatar picker sheet.

## Watch out
Each filter chip opens its own sheet — fine, but never chain them (one sheet at a time). Faded locked list must still say clearly what's locked.
