---
title: "Stop Feeding AI PDFs - Markdown Is Its Native Format"
type: atomic-essay
status: idea
pillar: AI
platforms: [linkedin, x]
seed_source: https://youtu.be/quYKZushRPo
sources:
  - https://youtu.be/quYKZushRPo
tags: [ai, context, markdown, file-formats, prompting, curation]
created: 2026-06-02
---

# Stop Feeding AI PDFs - Markdown Is Its Native Format

## Idea
AI models read markdown and plain text far more reliably than PDFs, so converting your knowledge into the model's native format makes its answers more accurate, not just cheaper.

## Notes & Verified Quotes
> QUOTE: "there are particular types of files that they just find easier to read with markdown being one of them" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=1214
> QUOTE: "they struggle with PDFs more than they do markdown" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=1224
> QUOTE: "You're making it more accurate and more efficient." — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=1627
> QUOTE: "They just understand markdown better." — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=1630
> QUOTE: "A skill markdown file is just a recipe for an AI agent to follow for a particular task." — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=1192

- Source: Ryan Dozer on The Kerner Office (TKO Pod). His habit: after a podcast he saves the transcript as a markdown file and feeds *that* to Claude Code, not a PDF.
- Reason given: models "miss things" reading PDFs; markdown (and HTML) is what they process most cleanly. He couldn't quote an exact efficiency %, but says a .txt or .md beats a PDF "by a lot."
- Reframe in the interview: feeding markdown is "translating it to its own language" — accuracy gain, not only a token/cost gain.
- Angle (mine): most people dump a PDF and blame the model when the answer is wrong. The fix is upstream and free — change the *format*, not the prompt. PDFs are a layout format built for human eyes/printers; the text order, tables and columns get mangled on extraction. Plain markdown is structure the model was trained on.
- Caveat to be honest about: modern models do have decent PDF/vision pipelines, so "never use PDFs" is too strong. The reliable rule: when the content is text you control, give it as markdown/txt; reserve PDFs for when layout itself is the information.

## Outline

## Draft — LinkedIn (master)

## Draft — X (variant)

## Final

## Related
- [[Files Are the Universal Interface for Agents]] -- why models are fluent in plain text/markdown but choke on opaque, layout-bound formats
- [[From Primitives to Domain Tools]] -- agent-native design: meet the model in the format and primitives it actually reasons about
- [[Your years of expertise are one file away from being a product]] -- sibling from the same talk: a Claude skill is itself just a markdown file
