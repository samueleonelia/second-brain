---
title: "The Ultimate Test: Outcomes You Didn't Build a Feature For"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - success-criteria
  - emergent-capability
  - architecture-test
  - ai-agents
created: 2026-05-21
---

# The Ultimate Test: Outcomes You Didn't Build a Feature For

## The Idea

There's a single test that distinguishes agent-native architecture from a chatbot wrapped around a normal app. Describe an outcome to the agent that is *within your application's domain* but for which you *didn't build a specific feature*.

Can the agent figure out how to accomplish it, operating in a loop until it succeeds?

- **If yes** — you've built something agent-native.
- **If no** — your architecture is too constrained. Somewhere, a principle is being violated: parity is incomplete, tools are too coarse, the agent doesn't know what exists, or domain tools have quietly become gates.

## How to Run the Test

Make a list of plausible domain requests you didn't explicitly design for. Try them. Where the agent succeeds, you've earned the architecture. Where it fails, the failure is a map: trace which principle wasn't honored and fix that, not the specific request.

This is the test you can run repeatedly as the product evolves. New tools and prompts shouldn't degrade emergence; if they do, you've added a gate or bundled judgment into a tool when you didn't mean to.

## Why It Matters

Most architecture tests are about whether the thing you built works. This one is about whether the thing you *didn't* build works. That's the load-bearing difference between agent-native and agent-flavored.

---

## Related

- [[Parity - Agents Need Tools for Everything the UI Can Do]] -- the first principle the test exercises
- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- the second
- [[Composability - New Features Through New Prompts]] -- the third
- [[Emergent Capability - Agents Do What You Didn't Design For]] -- the property the test directly measures
- [[Improvement Over Time Without Shipping Code]] -- the fifth principle, indirectly tested by re-running the audit over time
- [[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]] -- a failed test points you to one of these
- [[Latent Demand Discovery Through Agent Usage]] -- the same instinct, run by real users instead of by you
