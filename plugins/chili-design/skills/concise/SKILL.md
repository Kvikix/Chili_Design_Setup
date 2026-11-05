---
name: concise
description: Rewrite any text short and without filler — design rationale, Jira comment, Figma annotation, message to PM/client, handoff notes. Use when the designer asks to shorten text or cut filler (in any language, e.g. «make it shorter») or pastes text to tighten.
argument-hint: "[text] [optional: target — jira | figma | slack | client] [optional: lang]"
---

# Concise

Input: $ARGUMENTS — the text (or the last text in the chat if none given).

1. Apply `../../references/writing.md`. Keep the language of the original unless asked otherwise.
2. Keep every fact, number, link, requirement, open question and source. Remove filler, repetition, hedging, intros and outros.
3. Target format: `jira` — short title + bullets; `figma` — ≤ 2 lines, English; `slack` — 1–4 lines; `client` — polite but direct, no jargon. No target → same format, ~40–60% shorter.
4. Return only the rewritten text. If something was ambiguous and you removed nothing because of it, add one line «Not shortened: …» (in `language.chat`).
