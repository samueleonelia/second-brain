---
title: "The One Agent Loop Worth Copying Scores Its Own Work"
type: atomic-essay
status: idea
pillar: Automation
platforms: [linkedin, x]
seed_source: https://youtu.be/7clJ8IH784Q
sources:
  - https://youtu.be/7clJ8IH784Q
tags: [automation, code-review, loops, quality-gates, ras-mic]
created: 2026-06-11
---

# The One Agent Loop Worth Copying Scores Its Own Work

## Idea
Ras Mic's code-review loop works because it is built like a quality gate, not a wish: a reviewer agent scores every push out of five, nothing ships below the threshold, the loop retries at most five turns, and every batch stays under 1,000 lines — a copyable blueprint for any automation (feedback engine + exit criteria + batch limit).

## Notes & Verified Quotes
> QUOTE: "I will not push anything to production, meaning I will not allow code to go live unless the score is greater than four out of five" — src: scratch/sources/ai-agent-loops-genius-or-hype.txt | source: https://youtu.be/7clJ8IH784Q t=860
> QUOTE: "It won't stop unless it's taken five turns, and then it'll give up, or it won't stop until it gets a five out of five." — src: scratch/sources/ai-agent-loops-genius-or-hype.txt | source: https://youtu.be/7clJ8IH784Q t=940
> QUOTE: "anytime I push over 1,000 lines of code" — src: scratch/sources/ai-agent-loops-genius-or-hype.txt | source: https://youtu.be/7clJ8IH784Q t=1023

- Attribution: Ras Mic on Greg Isenberg's Startup Ideas Podcast. The mechanics: Cursor writes code, push to GitHub triggers a review agent (Greptile; Code Rabbit and Macroscope named as alternatives) that returns a score out of five; a "gp loop" skill tells Cursor to read the review, fix, push again, and repeat.
- The three design elements that make it work: (1) a feedback engine that emits a number, (2) explicit exit criteria (score reached OR five turns), (3) a batch-size limit — past ~1,000 lines the reviewer can't hold the diff and "almost never" gives five out of five, so the loop stops converging.
- Mic is honest that even this loop breaks at times; the fix is input discipline (split into multiple PRs), not a smarter agent.
- Angle for the essay: most automations fail not because the AI is weak but because nobody defined when the loop is done. Score threshold, max retries, batch limit: three lines of spec that separate an automation from a slot machine. Directly reusable in n8n error-handling and client workflows.

## Outline

## Draft — LinkedIn (master)

## Draft — X (variant)

## Final

## Related
- [[Loops Make Sense Only With a Fixed Feedback Signal]] -- the principle this loop instantiates: a number to optimize against is what makes autonomy safe
- [[The Thousand Line Review Ceiling]] -- the failure mode and the batch-size rule, distilled from the same episode
- [[Give the Agent a Way to Verify Its Own Work]] -- the same architecture stated as a principle: delegated quality tracks the feedback loop you build
- [[Automate Your Code Reviews - The Lint Rule Spreadsheet]] -- a complementary code-review automation: compounding rules instead of a scored loop
- [[Agent Loops Only Work When the Output Is Binary]] -- sibling essay candidate: this note is the concrete case, that one is the criterion
