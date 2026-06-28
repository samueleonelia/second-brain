---
title: Subagents Keep the Main Context Clean
sources:
  - https://arps18.github.io/posts/claude-code-mastery/
tags:
  - claude-code
  - subagents
  - context-window
  - ai-workflow
created: 2026-06-11
---

# Subagents Keep the Main Context Clean

A subagent in Claude Code is a markdown file (in `.claude/agents/`) that defines a worker with its own isolated context window, its own scoped tool permissions, and its own blast radius. The point is not just delegation; it is context hygiene. A debugging hunt or a fifty-file exploration can burn an entire context window, and doing it in the main session degrades everything that comes after. Hand it to a subagent and only a tidy summary comes back.

The guide's `/pr-review` example shows two design choices that make subagents work well. First, deliberately read-only tools: "a reviewer that can patch code starts rationalizing its own fixes instead of flagging them." Second, an explicit "Do NOT flag" list, because without it the useful findings drown in nitpicks.

The general principle: separate concerns into separate contexts. Each worker sees only what its task needs, so per-task quality goes up while the orchestrating session stays lean enough to keep judging.

## Related

- [[A Claude Code Subagent Is a Markdown File]] -- the how-to companion: the entire mechanism is a markdown file with instructions and a prompt
- [[Daisy's 20-Claude Swarm Weekend]] -- the scaled-up version of the same idea: many isolated agents working in parallel
- [[Morning Agents from the Phone - Boris's Full Daily AI Workflow]] -- Boris's daily workflow leans on parallel isolated sessions for the same context-hygiene reason
- [[Design Tools for Bounded Context Windows]] -- the agent-native-architecture version of the same constraint: context is finite, design around it
