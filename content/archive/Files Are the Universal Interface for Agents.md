---
title: "Files Are the Universal Interface for Agents"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - files-first
  - bash
  - interface-design
  - ai-agents
created: 2026-05-21
---

# Files Are the Universal Interface for Agents

## The Idea

Agents are naturally good at files. Claude Code works because bash + filesystem is the most battle-tested agent interface there is. Pick any LLM trained on internet-scale data and it already knows `cat`, `grep`, `mv`, `mkdir`. File operations are the primitives agents are most fluent with.

Files give an agent-native app five compounding properties:

- **Already known.** No tool-use training required; the agent has read millions of file-based examples.
- **Inspectable.** Users can see what the agent created, edit it, move it, delete it. No black box.
- **Portable.** Export is trivial. Backup is trivial. Users own their data.
- **Syncs across devices.** With iCloud or Dropbox, all devices share the same filesystem. The agent's work appears everywhere without you building a server.
- **Self-documenting.** `/projects/acme/notes/` is legible in a way that `SELECT * FROM notes WHERE project_id = 123` isn't.

## The General Principle

Design for what agents can reason about. The best proxy for that is what would make sense to a human. If a human can look at your file structure and understand what's going on, an agent probably can too.

---

## Related

- [[Entity-Scoped Directories for Agent-Native Apps]] -- the directory shape that makes files even more legible
- [[The context.md Pattern for Agent Memory]] -- the single most important file in an agent-native app
- [[Files for Legibility, Databases for Structure]] -- when to leave the filesystem
- [[Shared Workspace Over Separate Agent Sandboxes]] -- the corollary: agent and user share the same files
- [[Claude Code - The Side Project That Got 2 Likes]] -- the canonical proof that bash + files is enough
