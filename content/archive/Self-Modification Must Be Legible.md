---
title: "Self-Modification Must Be Legible"
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - self-modification
  - safety
  - legibility
  - ai-agents
created: 2026-05-21
---

# Self-Modification Must Be Legible

## The Idea

When agents can modify their own behavior — changing prompts, updating preferences, adjusting workflows — three things need to be true:

- **Visibility into what changed.** The change is recorded somewhere the user can read.
- **Understanding the effects.** It's clear what the change is supposed to do.
- **Ability to roll back.** Reverting is cheap and obvious.

Approval flows are one way to achieve this. Audit logs with easy rollback are another. The mechanism is negotiable; the principle isn't. Make self-modification legible.

## Why It Matters

Self-modifying agents are the most powerful version of agent-native software and the most failure-prone. Behavior can drift in ways that aren't visible until something obvious breaks — by which point the system has accumulated many small changes you can't untangle. Legibility is what turns "the agent has been changing itself for a week" from a horror story into a normal Tuesday.

The article is explicit that self-modification is still emerging. Context persistence and prompt refinement are proven. Self-modification needs more validation, and the safety frame (approval gates, checkpoints, rollback, health checks) is the price of admission.

---

## Related

- [[Improvement Over Time Without Shipping Code]] -- self-modification is the most advanced rung in this ladder
- [[Approval Stakes vs Reversibility Matrix]] -- the matrix is one mechanism for making self-modification legible
- [[No Silent Agent Actions - UI Reflects Activity Immediately]] -- visibility on actions, applied to the most consequential ones
- [[The context.md Pattern for Agent Memory]] -- a context file is a natural place to record what the agent changed about itself
- [[Compound Engineering - Only Document Mistakes]] -- the discipline of only recording what failed is itself a legibility practice
