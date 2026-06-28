---
title: The Orchestration Tax - Cognitive Bandwidth Doesn't Parallelize
sources:
  - https://x.com/addyosmani/status/2059844244907696186
tags:
  - ai-agents
  - parallelism
  - cognitive-load
  - orchestration
  - addy-osmani
created: 2026-06-11
---

# The Orchestration Tax - Cognitive Bandwidth Doesn't Parallelize

Addy Osmani's "The Orchestration Tax" names the hidden cost of multi-agent workflows: "Starting more AI agents is easy now. However, more agents running doesn't mean there's more of you available - your cognitive bandwidth doesn't parallelize. All the judgement to actually steer them..." remains serial, bottlenecked on one human.

The asymmetry is the point. Agent execution scales horizontally (spin up five, ten, twenty sessions), but the framing, reviewing, and steering each one needs comes from a single human attention budget that does not scale at all. Past some number of parallel agents, each additional one subtracts quality from the supervision of all the others. The tax is paid in judgment, the one resource automation cannot mint.

> Source returned limited text — captured what was available (article preview only; full article behind X login).

## Related

- [[Morning Agents from the Phone - Boris's Full Daily AI Workflow]] -- the workflow this tax applies to: 15 parallel sessions only work if the orchestration overhead stays affordable
- [[Your automation isn't set and forget, every agent needs a human on both ends]] -- the per-agent version of the same constraint: every agent needs a human framing and judging, and those humans don't multiply
- [[Daisy's 20-Claude Swarm Weekend]] -- the optimistic counterpoint: a 20-agent swarm that worked, worth re-reading with the orchestration tax in mind
