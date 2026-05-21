---
title: "Files for Legibility, Databases for Structure"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - files-first
  - databases
  - storage-design
  - ai-agents
created: 2026-05-21
---

# Files for Legibility, Databases for Structure

## The Idea

Files and databases aren't competitors — they're tools for different jobs. The agent-native default leans toward files for anything humans should read, edit, or own, and toward databases for anything that needs high-volume structured access.

Use files for:
- Content users should read or edit
- Configuration that benefits from version control
- Agent-generated content
- Anything that benefits from transparency
- Large text content

Use a database for:
- High-volume structured data
- Data that needs complex queries
- Ephemeral state (sessions, caches)
- Data with relationships
- Data that needs indexing

The principle: **files for legibility, databases for structure.** When in doubt, files — they're more transparent and users can always inspect them.

## When the File-First Default Works (and Doesn't)

The file-first approach works when scale is small (one user's library, not millions of records), transparency is valued over query speed, and cloud sync handles the heavy lifting (iCloud, Dropbox). This framing is informed by mobile app development; for web apps the tradeoffs differ and the Every team is explicit that they don't have a strong opinion there yet.

A hybrid is often correct: even if you need a database for performance, consider maintaining a file-based "source of truth" that the agent works with, then syncing to the database for the UI.

---

## Related

- [[Files Are the Universal Interface for Agents]] -- the principle behind the file-first default
- [[Entity-Scoped Directories for Agent-Native Apps]] -- the directory shape this design assumes
- [[The context.md Pattern for Agent Memory]] -- the single most important file in the file-first approach
- [[Conflict Models When Agents and Users Share Files]] -- the cost of files: you have to think about conflicts
- [[259 PRs in 30 Days, 2 Bugs - The Vanilla Setup]] -- the same "stay vanilla" instinct applied to engineering workflow
