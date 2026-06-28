---
title: "Context Injection in the System Prompt"
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - implementation-pattern
  - system-prompt
  - context-injection
  - ai-agents
created: 2026-05-21
---

# Context Injection in the System Prompt

## The Idea

The agent needs to know what it's working with. The system prompt is the cleanest place to tell it. Three sections do most of the work:

**Available resources** — what exists in the workspace:
```
## Available Data
- 12 notes in /notes
- Most recent: "Project kickoff"
- three projects in /projects
- Preferences at /preferences.md
```

**Capabilities** — what the agent can do:
```
## What You Can Do
- Create, edit, tag, delete notes
- Organize files into projects
- Search across all content
- Set reminders (write_file)
```

**Recent activity** — relevant context:
```
## Recent Context
- User created "Project kickoff" (two hours ago)
- User asked about Q3 deadlines yesterday
```

For long sessions, provide a way to refresh context mid-loop so the agent stays current as the workspace evolves underneath it.

## Why It Matters

Without context injection, the agent operates on guesses. The most common failure isn't that the agent can't do something — it's that the agent doesn't know it *can* do something, or doesn't know the thing the user just asked about exists. Injection costs a few hundred tokens and prevents most of those failures.

---

## Related

- [[The context.md Pattern for Agent Memory]] -- context.md is typically what gets injected
- [[Files Are the Universal Interface for Agents]] -- injection works because the resources are file paths the agent can act on
- [[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]] -- "context starvation" is the inverse of this pattern
- [[Shared Workspace Over Separate Agent Sandboxes]] -- a shared workspace is what makes the injected list of resources accurate
- [[Design Tools for Bounded Context Windows]] -- injection is a context cost worth measuring
