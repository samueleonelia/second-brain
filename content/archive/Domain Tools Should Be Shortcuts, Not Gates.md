---
title: "Domain Tools Should Be Shortcuts, Not Gates"
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - tool-design
  - domain-tools
  - composability
  - ai-agents
created: 2026-05-21
---

# Domain Tools Should Be Shortcuts, Not Gates

## The Idea

When you add a domain tool, keep the underlying primitives available. The domain tool is a shortcut for the common case, not the only path to the capability. Unless there's a specific reason to restrict access — security, data integrity, irreversible side effects — the agent should still be able to drop down to the primitives for edge cases the domain tool doesn't cover.

This preserves two things that matter:

- **Composability.** New behaviors can still be assembled from primitives without waiting for a new domain tool to ship.
- **Emergent capability.** The agent can handle requests you never anticipated, because the full primitive surface is still in reach.

The default is open. Gating is a conscious decision, made for a stated reason, not a side effect of "I built a nicer tool so I removed the lower one."

## A Quick Heuristic

`analyze_and_publish(input)` bundles judgment into the tool — it decides what to analyze and what to publish, hiding both behind a single call. `publish(content)` is a domain shortcut: one action, with the agent deciding what to publish based on its own analysis. The second composes; the first dictates.

---

## Related

- [[From Primitives to Domain Tools]] -- the prior step that this rule constrains
- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- the foundational principle that gating violates
- [[Composability - New Features Through New Prompts]] -- what gating quietly destroys
- [[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]] -- gates-without-reason and defensive design are the anti-pattern versions
- [[Graduating Hot Paths to Optimized Code While Preserving Parity]] -- the same principle applied when moving to optimized code
