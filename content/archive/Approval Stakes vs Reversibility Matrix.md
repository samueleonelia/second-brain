---
title: "Approval Stakes vs Reversibility Matrix"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - approval-flows
  - user-agency
  - safety
  - ai-agents
created: 2026-05-21
---

# Approval Stakes vs Reversibility Matrix

## The Idea

When agents take *unsolicited* actions — doing things on their own rather than responding to explicit requests — you need to decide how much autonomy to grant. The framing is a 2x2: stakes (low/high) by reversibility (easy/hard).

| Stakes | Reversibility | Pattern | Example |
|---|---|---|---|
| Low | Easy | Auto-apply | Organizing files |
| Low | Hard | Quick confirm | Publishing to feed |
| High | Easy | Suggest + apply | Code changes |
| High | Hard | Explicit approval | Sending emails |

The matrix gives you a default for each cell. Tune from there, but start with these.

## The Crucial Caveat

This applies to *unsolicited* agent actions only. If the user explicitly asks the agent to do something ("send that email"), that's already approval — the agent just does it. Wrapping every explicit request in a confirmation dialog is friction without value; it trains users to dismiss approvals without reading them, which is worse than no approval at all.

The article flags this framework as one that emerged during building but hasn't been battle-tested. Treat it as a starting heuristic, not a settled standard.

---

## Related

- [[Self-Modification Must Be Legible]] -- the same principle (visibility + control) applied to the most sensitive case
- [[No Silent Agent Actions - UI Reflects Activity Immediately]] -- visibility is the precondition for any approval flow
- [[Parity - Agents Need Tools for Everything the UI Can Do]] -- the matrix decides *when* the agent acts, parity decides *whether it can*
- [[Improvement Over Time Without Shipping Code]] -- approval flows are where shipping behavior change without code requires the most care
- [[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]] -- "artificial capability limits" is what happens when you over-apply this matrix
