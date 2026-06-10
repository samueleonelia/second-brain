---
title: "Granularity: Tools Are Atomic Primitives, Features Are Outcomes"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - core-principle
  - tool-design
  - granularity
  - ai-agents
created: 2026-05-21
---

# Granularity: Tools Are Atomic Primitives, Features Are Outcomes

## The Idea

In agent-native software, a tool is a primitive capability. A feature is an outcome described in a prompt, achieved by an agent with tools, operating in a loop until the outcome is reached. The agent makes the decisions; prompts describe the outcome.

The key shift: the agent is pursuing an outcome with judgment, not executing a choreographed sequence. It can encounter unexpected cases, adjust its approach, or ask clarifying questions — the loop continues until the outcome is achieved.

The rule of thumb: the more atomic your tools, the more flexibly the agent can use them. If you bundle decision logic into tools, you've moved judgment back into code. A `classify_and_organize_files` tool encodes *your* logic for what classification means; an agent given `read_file`, `write_file`, and `move_file` can pursue the outcome with its own judgment and adapt to cases you didn't anticipate.

## The Test

To change behavior, do you edit prompts or refactor code? If the answer is "refactor code," your tools are too coarse — judgment is hardcoded where it should be in the prompt.

---

## Related

- [[Parity - Agents Need Tools for Everything the UI Can Do]] -- granularity is how parity is achieved without bloating the tool surface
- [[From Primitives to Domain Tools]] -- start with pure primitives; add domain tools only as patterns emerge
- [[Composability - New Features Through New Prompts]] -- atomic tools are the precondition for new features being just new prompts
- [[Domain Tools Should Be Shortcuts, Not Gates]] -- when you add a domain tool, keep the underlying primitives accessible
- [[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]] -- workflow-shaped tools are the most common granularity failure
- [[Your automation isn't set and forget, every agent needs a human on both ends]] -- agents act well only when a human frames them with the right primitives; bad framing is bad output
