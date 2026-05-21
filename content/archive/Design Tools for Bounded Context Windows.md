---
title: "Design Tools for Bounded Context Windows"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - context-window
  - tool-design
  - long-running-agents
  - ai-agents
created: 2026-05-21
---

# Design Tools for Bounded Context Windows

## The Idea

Agent sessions can extend indefinitely. Context windows can't. Even with million-token models, long runs will eventually fill the window — and when they do, the agent's reasoning degrades or it loses access to its own earlier work. Design for this from the start, don't bolt it on after the first OOM.

Three concrete design rules:

- **Tools should support iterative refinement.** Offer summary → detail → full views, not just all-or-nothing reads. A `read_file_summary` alongside `read_file` lets the agent scan widely without dragging full bodies into context.
- **Give agents a way to consolidate.** "Summarize what I've learned and continue" should be a callable move, not an emergent hack.
- **Assume context will fill up.** Treat finite context as a load-bearing constraint, the same way you'd treat finite memory in embedded systems.

## Why It Matters

If you design tools assuming infinite context, your agent works fine in demos and fails on real workloads. The failure mode is silent: the agent stops noticing its own oldest messages and starts behaving as if they never happened, with no error to catch.

---

## Related

- [[Explicit Completion Signals Beat Heuristic Detection]] -- finishing cleanly is part of how you stay within context
- [[Partial Completion with Task-Level Tracking]] -- per-task state survives context resets
- [[Model Tier Selection by Task Complexity]] -- different tiers have different context budgets; tier choice and context design interact
- [[The context.md Pattern for Agent Memory]] -- externalized memory in a file is the cheapest way to relieve context pressure
- [[Checkpoint and Resume for Long-Running Agents on Mobile]] -- checkpoints often double as context offloading points
