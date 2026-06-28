---
title: "Conflict Models When Agents and Users Share Files"
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - files-first
  - concurrency
  - conflict-resolution
  - mobile-agents
created: 2026-05-21
---

# Conflict Models When Agents and Users Share Files

## The Idea

If agents and users write to the same files, you need a conflict model. There's no neutral default — every choice trades simplicity for safety.

A working menu of options:

- **Last write wins.** Simple, but changes can be lost. Atomic writes are the baseline implementation.
- **Check before writing.** Skip the write if the file changed since the agent read it. Safer, more complex.
- **Separate spaces.** Agent writes to `drafts/`, user promotes to canonical. Avoids conflicts by avoiding the shared zone.
- **Append-only logs.** Additive only, never overwrites. Works great for `agent_log.md` and status files.
- **File locking.** Prevent edits while a file is open. Safest, but blocks the user.

## Practical Guidance

Logs and status files rarely conflict — append-only is fine. For user-edited content, consider explicit conflict handling or keep agent output in a separate space. iCloud adds its own twist: sync conflicts produce filenames like `{name} (conflict).md` and you have to decide how to resolve them.

The conflict model is one of the costs of going file-first. You don't get it for free the way you would from a transactional database, so you have to design for it deliberately rather than discover it in production.

---

## Related

- [[Files for Legibility, Databases for Structure]] -- the design choice that creates the need for a conflict model
- [[Files Are the Universal Interface for Agents]] -- the broader principle that this trade-off lives inside
- [[Shared Workspace Over Separate Agent Sandboxes]] -- a shared workspace is exactly where conflicts arise
- [[iCloud-First Storage with Local Fallback for Mobile Agents]] -- iCloud's conflict copies are the most common failure mode in practice
- [[Checkpoint and Resume for Long-Running Agents on Mobile]] -- checkpoints are themselves a place to think about conflicts across sessions
