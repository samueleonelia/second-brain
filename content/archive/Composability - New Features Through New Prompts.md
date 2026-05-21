---
title: "Composability: New Features Through New Prompts"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - core-principle
  - composability
  - prompt-engineering
  - ai-agents
created: 2026-05-21
---

# Composability: New Features Through New Prompts

## The Idea

With atomic tools and parity in place, new features stop being code you write and become prompts you compose. Want a "weekly review" feature in a notes app? That's just a prompt: "Review files modified this week. Summarize key changes. Based on incomplete items and approaching deadlines, suggest three priorities for next week." The agent uses `list_files`, `read_file`, and its judgment. You described an outcome; the agent loops until it's achieved.

Composability works for both developers and users. Developers ship new features by adding prompts. Users customize behavior by modifying prompts or creating their own. This collapses the gap between product team and end user — both are operating on the same surface.

## The Constraint

Composability only holds if two conditions are met: tools must be atomic enough to compose in unanticipated ways, and the agent must have parity with what users can do. If tools encode too much logic, composition breaks down because each "tool" already presupposes a workflow. If parity is incomplete, prompts will silently fail at the missing capability.

---

## Related

- [[Parity - Agents Need Tools for Everything the UI Can Do]] -- composability collapses without parity
- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- atomic granularity is the precondition for composition
- [[Emergent Capability - Agents Do What You Didn't Design For]] -- emergent capability is what composability unlocks at scale
- [[Improvement Over Time Without Shipping Code]] -- composability means improvement is a prompt edit, not a release
- [[From Primitives to Domain Tools]] -- domain tools must preserve composability, not gate it
