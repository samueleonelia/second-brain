---
title: "Graduating Hot Paths to Optimized Code While Preserving Parity"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - tool-design
  - performance
  - parity
  - ai-agents
created: 2026-05-21
---

# Graduating Hot Paths to Optimized Code While Preserving Parity

## The Idea

Some operations will eventually need to move from agent-orchestrated to optimized code for performance or reliability. The path is staged:

1. Agent uses primitives in a loop — flexible, proves the concept.
2. Add domain tools for common operations — faster, still agent-orchestrated.
3. For hot paths, implement in optimized code — fast and deterministic.

The caveat that protects the architecture: even when an operation graduates to code, the agent must still be able to *trigger* the optimized operation itself, and *fall back* to primitives for edge cases the optimized path doesn't handle. Graduation is about efficiency. Parity still holds.

## Why It Matters

Without the fallback rule, optimization quietly becomes ossification. The hot-path code handles the 80% case, and everything else stops working because the primitives have been hidden or removed. The agent loses the ability to handle exactly the edge cases you optimized away from.

---

## Related

- [[Domain Tools Should Be Shortcuts, Not Gates]] -- the same shortcut-not-gate rule applied to optimized code
- [[Parity - Agents Need Tools for Everything the UI Can Do]] -- the principle that graduation must not violate
- [[From Primitives to Domain Tools]] -- the prior stage in the same maturation arc
- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- the underlying design rule
- [[259 PRs in 30 Days, 2 Bugs - The Vanilla Setup]] -- evidence that staying close to primitives often beats heavy optimization
