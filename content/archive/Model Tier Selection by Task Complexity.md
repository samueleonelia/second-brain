---
title: "Model Tier Selection by Task Complexity"
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - model-selection
  - cost-optimization
  - agent-design
  - ai-agents
created: 2026-05-21
---

# Model Tier Selection by Task Complexity

## The Idea

Not all agent operations need the same intelligence level. Defaulting to "the most powerful model" for everything is a cost mistake and often a quality mistake — large models can be slower and worse at high-volume simple tasks.

A working tier map:

| Task type | Tier | Reasoning |
|---|---|---|
| Research agent | Balanced | Tool loops, good reasoning |
| Chat | Balanced | Fast enough for conversation |
| Complex synthesis | Powerful | Multi-source analysis |
| Quick classification | Fast | High volume, simple task |

## The Discipline

When you add a new agent or sub-agent, explicitly choose its tier based on task complexity. Don't let "use the best model" be the silent default. The decision belongs in your design notes, not in your bill at the end of the month.

---

## Related

- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- tier selection is finer-grained when the agent loop is itself decomposed
- [[Partial Completion with Task-Level Tracking]] -- different sub-tasks can be routed to different tiers
- [[Design Tools for Bounded Context Windows]] -- a smaller model with a tighter context can outperform a larger model with bloat
- [[From Primitives to Domain Tools]] -- as primitives mature, tier choice for routine domain tools becomes obvious
- [[Why Agent-Native Software Works Now]] -- model capability is the substrate that makes tier choice meaningful at all
