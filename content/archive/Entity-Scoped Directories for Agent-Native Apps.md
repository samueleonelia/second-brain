---
title: "Entity-Scoped Directories for Agent-Native Apps"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - files-first
  - directory-structure
  - conventions
  - ai-agents
created: 2026-05-21
---

# Entity-Scoped Directories for Agent-Native Apps

## The Idea

One working convention for organizing files in an agent-native app: scope directories to entities, keep collections at the type level, use lowercase-with-underscores for paths.

```
{entity_type}/{entity_id}/
├── primary content
├── metadata
└── related materials
```

A concrete example from the Every team's Reader app: `Research/books/{bookId}/` contains the full text, notes, sources, and per-entity agent logs for one book. Everything that belongs to one book lives in one folder.

A working file-naming scheme alongside it:

| File | Pattern | Example |
|---|---|---|
| Entity data | `{entity}.json` | `library.json`, `status.json` |
| Human-readable content | `{content_type}.md` | `introduction.md`, `profile.md` |
| Agent reasoning | `agent_log.md` | per-entity agent history |
| Primary content | `full_text.txt` | downloaded/extracted text |
| External sources | `{source_name}.md` | `wikipedia.md`, `sparknotes.md` |
| Checkpoints | `{sessionId}.checkpoint` | UUID-based |

Markdown for human-readable content; JSON for structured data. The shape isn't sacred — it's a starting point that's worked, not a prescription. Better solutions almost certainly exist; this is one of the patterns the article explicitly flags as needing more validation.

## Why It Matters

When the agent can `cd Research/books/{bookId}/ && ls`, it gets the full picture of one entity in two commands. A flat layout, or a deeply abstract one, forces the agent to make many calls just to assemble context.

---

## Related

- [[Files Are the Universal Interface for Agents]] -- the principle this convention operationalizes
- [[The context.md Pattern for Agent Memory]] -- the per-app companion to per-entity folders
- [[Shared Workspace Over Separate Agent Sandboxes]] -- entity-scoped dirs work because agent and user share them
- [[CRUD Completeness Audit for Every Entity]] -- the entities in this directory shape are the same entities that need CRUD parity
- [[Conflict Models When Agents and Users Share Files]] -- entity-scoped layouts make conflict zones easier to reason about
