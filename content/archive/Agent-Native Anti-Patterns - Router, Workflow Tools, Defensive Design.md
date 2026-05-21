---
title: "Agent-Native Anti-Patterns: Router, Workflow Tools, Defensive Design"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - anti-pattern
  - tool-design
  - architecture
  - ai-agents
created: 2026-05-21
---

# Agent-Native Anti-Patterns: Router, Workflow Tools, Defensive Design

## The Idea

Several common ways of "adding an agent" produce something that isn't really agent-native. They aren't necessarily wrong — they may be appropriate for a narrow use case — but they're worth naming so you can recognize when you've drifted.

**Agent as router.** The agent figures out what the user wants, then calls the right function. Its intelligence is used to *route*, not to *act*. Works, but uses a fraction of what agents can do.

**Build the app, then add agent.** Features are built the traditional way, then exposed to the agent. The agent can only do what the existing features do, so there's no emergent capability — you've added a chatbot that wraps a normal app.

**Request/response thinking.** Agent gets input, does one thing, returns output. This misses the *loop*: the agent should get an outcome to achieve, operate until it's done, and handle unexpected situations along the way.

**Defensive tool design.** Over-constrained tool inputs because that's what defensive programming feels like — strict enums, validation at every layer. Safe, but it stops the agent from doing things you didn't anticipate.

**Happy path in code, agent just executes.** Traditional software handles edge cases in code. Agent-native lets the agent handle them with judgment. If your code already handles all the edge cases, the agent is just a caller.

**Workflow-shaped tools.** `analyze_and_organize` bundles judgment into the tool. Break it into primitives and let the agent compose them.

**Orphan UI actions.** Something the user can do that the agent can't. The fix is parity.

**Context starvation.** The agent doesn't know what exists, so "organize my notes" runs against an apparently empty workspace. The fix is context injection.

**Gates without reason.** A domain tool is the only path to a capability, with no specific reason for the restriction. Default to open.

**Artificial capability limits.** Restricting what the agent can do out of vague safety concerns rather than specific risks. Use approval flows for destructive actions instead of removing capabilities.

**Static mapping when dynamic would serve better.** 50 tools for 50 API endpoints when a discover-and-access pattern would give more flexibility.

**Heuristic completion detection.** Detecting "done" by counting iterations or watching for expected files. Fragile. Require explicit completion signals.

## Why It Matters

Each anti-pattern is the shadow of a principle. Naming them gives you a vocabulary for the architectural slips that are easy to make and hard to see until they've already shaped the system.

---

## Related

- [[Parity - Agents Need Tools for Everything the UI Can Do]] -- orphan UI actions invert this principle
- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- workflow-shaped tools invert this principle
- [[Composability - New Features Through New Prompts]] -- gates-without-reason kill composability
- [[Emergent Capability - Agents Do What You Didn't Design For]] -- build-then-add-agent forecloses emergence
- [[Dynamic Capability Discovery Over Static Tool Mapping]] -- the explicit alternative to the static-mapping anti-pattern
- [[Context Injection in the System Prompt]] -- the fix for context starvation
- [[Explicit Completion Signals Beat Heuristic Detection]] -- the fix for heuristic completion detection
