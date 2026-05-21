---
title: "CRUD Completeness Audit for Every Entity"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - parity
  - crud
  - audit
  - tool-design
created: 2026-05-21
---

# CRUD Completeness Audit for Every Entity

## The Idea

For every entity in your system, verify the agent has the full four — create, read, update, delete:

- **Create.** Can the agent make new instances?
- **Read.** Can the agent see what exists?
- **Update.** Can the agent modify instances?
- **Delete.** Can the agent remove instances?

The audit is mechanical: list every entity, verify all four operations are available. Do it on a checklist; don't trust memory.

## The Most Common Failure

You build `create_note` and `read_notes` because those are the first features anyone needs. You forget `update_note` and `delete_note` because individually they feel less urgent. Then a user asks the agent to "fix that typo in my meeting notes," and the agent has no way to help. The capability gap doesn't surface until the moment a user runs into it.

## Why It Matters

CRUD audits are the cheapest parity insurance. Every gap they catch is a request the agent would otherwise have failed silently — and silent agent failures erode trust faster than visible ones do.

---

## Related

- [[Parity - Agents Need Tools for Everything the UI Can Do]] -- the audit is the operational version of parity
- [[Entity-Scoped Directories for Agent-Native Apps]] -- the entities in the directory shape are the same entities to audit
- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- CRUD primitives are the atomic unit of entity access
- [[Dynamic Capability Discovery Over Static Tool Mapping]] -- discovery and CRUD interact: with discovery, CRUD coverage falls out of the API
- [[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]] -- missing CRUD is the most common form of "orphan UI actions"
