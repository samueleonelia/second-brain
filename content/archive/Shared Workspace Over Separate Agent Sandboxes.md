---
title: "Shared Workspace Over Separate Agent Sandboxes"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - implementation-pattern
  - shared-workspace
  - files-first
  - ai-agents
created: 2026-05-21
---

# Shared Workspace Over Separate Agent Sandboxes

## The Idea

Agents and users should work in the same data space, not separate sandboxes. The default layout:

```
UserData/
├── notes/           ← Both agent and user read/write here
├── projects/        ← Agent can organize, user can override
└── preferences.md   ← Agent reads, user can edit
```

This gives four properties that separate sandboxes can't:

- **Users can inspect and modify agent work** directly, with no export step.
- **Agents can build on what users create**, without an ingestion pipeline.
- **No synchronization layer** is needed between agent state and user state.
- **Complete transparency** — what the agent sees is what the user sees.

## When to Sandbox

Sandbox only when there's a specific reason: security boundaries, preventing corruption of critical data, isolating an experiment. Make sandboxing a conscious decision, not the default. The cost of a sandbox is the cost of building the bridge back.

---

## Related

- [[Files Are the Universal Interface for Agents]] -- a shared workspace is most natural when both sides use files
- [[Conflict Models When Agents and Users Share Files]] -- the price of sharing is having to think about conflicts
- [[The context.md Pattern for Agent Memory]] -- context.md is the most-shared file of all
- [[Entity-Scoped Directories for Agent-Native Apps]] -- entity-scoped dirs are what the shared workspace looks like in practice
- [[No Silent Agent Actions - UI Reflects Activity Immediately]] -- a shared workspace requires that the user see changes immediately
