---
title: "The context.md Pattern for Agent Memory"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - context-files
  - agent-memory
  - context-md
  - improvement-loop
created: 2026-05-21
---

# The context.md Pattern for Agent Memory

## The Idea

A single file — `context.md` — acts as the agent's portable working memory. The agent reads it at the start of each session and updates it as state changes. No database, no schema, no embeddings layer. Just a human-readable markdown file the agent owns.

A working shape used in the Every team's Reader app:

```markdown
# Context

## Who I Am
Reading assistant for the Every app.

## What I Know About This User
- Interested in military history and Russian literature
- Prefers concise analysis
- Currently reading *War and Peace*

## What Exists
- 12 notes in /notes
- three active projects
- User preferences at /preferences.md

## Recent Activity
- User created "Project kickoff" (two hours ago)
- Analyzed passage about Austerlitz (yesterday)

## My Guidelines
- Don't spoil books they're reading
- Use their interests to personalize insights

## Current State
- No pending tasks
- Last sync: 10 minutes ago
```

## Why It Matters

`context.md` is the cheapest possible mechanism for stateful agents. It survives across sessions, it's editable by the user, it's auditable, and it requires zero code change to evolve. The agent's behavior compounds because every session leaves the file richer.

This is the same idea behind Boris Cherny's CLAUDE.md — a curated, growing context file that makes every subsequent run smarter. Different name, same pattern.

---

## Related

- [[Compound Engineering - Only Document Mistakes]] -- the CLAUDE.md instance of this pattern, used to compound institutional knowledge from real failures
- [[Improvement Over Time Without Shipping Code]] -- accumulated context in this file is one of the three mechanisms that make this true
- [[Context Injection in the System Prompt]] -- context.md is typically the thing that gets injected
- [[Files Are the Universal Interface for Agents]] -- context.md is the file pattern's most-load-bearing instance
- [[Shared Workspace Over Separate Agent Sandboxes]] -- the user can read and edit context.md directly, which is the point
- [[Build a Claude skill that rewrites itself when it's wrong]] -- the auto-updating cousin: a skill that revises itself the way context.md accumulates corrections
