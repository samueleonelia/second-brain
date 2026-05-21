---
title: "Parity: Agents Need Tools for Everything the UI Can Do"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - core-principle
  - tool-design
  - parity
  - ai-agents
created: 2026-05-21
---

# Parity: Agents Need Tools for Everything the UI Can Do

## The Idea

Parity is the foundational principle of agent-native software: whatever a user can do through the UI, the agent must be able to achieve through tools. Without parity, nothing else in the architecture matters — the moment the agent hits a UI-only capability, the loop breaks and the user has to pick up the work themselves.

Parity is not a one-to-one mapping of buttons to tools. It's about outcomes. If the UI lets you "tag a note as urgent," the agent doesn't need a `click_urgent_button` tool — it needs `update_file` metadata, or a `tag_note` tool, or some combination that achieves the same outcome.

The discipline lives at the moment you add any UI capability: ask "can the agent achieve this outcome?" If not, add the primitives or domain tool that close the gap. A capability map (UI action → how the agent achieves it) makes the audit explicit.

## The Test

Pick any action a user can take in the UI. Describe it to the agent in plain language. Can it accomplish the outcome? If not, you have a parity gap — and every gap is a place where the agent's loop will silently fail.

---

## Related

- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- parity provides the *what*; granularity governs *how* the tools are shaped
- [[Composability - New Features Through New Prompts]] -- composability only works when parity is already in place
- [[Orphan UI Actions Anti-Pattern]] -- the failure mode parity prevents (covered in [[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]])
- [[CRUD Completeness Audit for Every Entity]] -- the most common parity failure is missing one CRUD operation per entity
- [[Claude Code - The Side Project That Got 2 Likes]] -- Claude Code achieves parity by giving the agent the same shell a developer would use
