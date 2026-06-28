---
title: The Thousand Line Review Ceiling
sources:
  - https://youtu.be/7clJ8IH784Q
tags:
  - ai-coding
  - code-review
  - context-limits
  - pull-requests
  - ras-mic
created: 2026-06-11
---

# The Thousand Line Review Ceiling

Even Ras Mic's working code-review loop has a hard failure mode: size. "Anytime I push over 1,000 lines of code... I can almost never get a five out of five cuz it's too much code for the agent to fully review and contextualize and understand." Past that ceiling the review agent's score stops being a reliable signal, so the loop that depends on it stops converging.

His workaround is discipline at the input: keep every push under roughly 1k lines, or have the coding agent split the work into multiple pull requests so the reviewer can actually hold each one. The general lesson is that a feedback signal is only trustworthy within the judge's context capacity, so any agent loop built on automated review inherits a batch-size limit. Small units of work aren't just human-reviewer etiquette; they are what keeps machine review honest too.

## Related

- [[Loops Make Sense Only With a Fixed Feedback Signal]] -- the loop this ceiling constrains: the fixed signal degrades exactly when the unit of work outgrows the judge
- [[259 PRs in 30 Days, 2 Bugs - The Vanilla Setup]] -- Boris's high-throughput shipping is built on many small PRs, the same small-batch discipline arrived at from the other direction
- [[The One Agent Loop Worth Copying Scores Its Own Work]] -- essay candidate that packages this ceiling as the loop's batch-size rule
