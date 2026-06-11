---
title: Loops Make Sense Only With a Fixed Feedback Signal
type: permanent
sources:
  - https://youtu.be/7clJ8IH784Q
tags:
  - ai-coding
  - loops
  - feedback-loops
  - code-review
  - ras-mic
created: 2026-06-11
---

# Loops Make Sense Only With a Fixed Feedback Signal

On Greg Isenberg's Startup Ideas Podcast, Ras Mic draws the boundary for when autonomous agent loops work: "the only place a loop makes sense is in a very confined, constrained process with a very fixed feedback loop." His working example is code review. Every push to GitHub triggers a review agent (Greptile) that returns a score out of five; a "gp loop" skill tells the coding agent to read the review, fix the issues, push again, and repeat until the score reaches at least four out of five or five turns pass. Nothing ships below the threshold.

The loop works because there is a feedback engine producing a number the agent can optimize against. Greg's synthesis generalizes it: where "the output is binary, meaning black or white with no creativity, there is a room for loops" (code review, templated SEO pages at scale). Building an app fails the test: the builder cannot fully visualize the product yet, so there is no fixed signal to loop against, only taste that lives in the human's head.

## Related

- [[Give the Agent a Way to Verify Its Own Work]] -- Boris Cherny's verify principle; this note adds its boundary condition: a loop is only as autonomous as its feedback signal is objective
- [[Everyone Says Loop, Nobody Defines It]] -- the definitional fight this episode resolves in practice: a "loop" without a defined feedback engine is just the word
- [[The Thousand Line Review Ceiling]] -- where even this working loop breaks: past 1k lines the review signal itself degrades
- [[Agent Loops Only Work When the Output Is Binary]] -- essay candidate that relays this note's criterion for LinkedIn/X
- [[The One Agent Loop Worth Copying Scores Its Own Work]] -- essay candidate built on the gp-loop example described here
