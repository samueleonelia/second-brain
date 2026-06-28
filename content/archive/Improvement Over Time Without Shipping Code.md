---
title: "Improvement Over Time Without Shipping Code"
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - core-principle
  - improvement-loop
  - prompt-engineering
  - context-files
created: 2026-05-21
---

# Improvement Over Time Without Shipping Code

## The Idea

Unlike traditional software, agent-native applications can improve without shipping code. The system gets better through three mechanisms:

- **Accumulated context.** State persists across sessions via context files. The agent learns what exists, what the user has done, and what worked, and uses that on every subsequent run.
- **Developer-level prompt refinement.** The team ships updated prompts to all users without a release. Changing the agent's behavior is a config edit, not a deploy.
- **User-level customization.** Users modify prompts to fit their own workflow without waiting on the product team.

A more advanced (and still emerging) layer is self-modification: agents that edit their own prompts or code based on feedback. This requires safety rails — approval gates, checkpoints, rollback paths, health checks — because behavior can drift in ways that aren't immediately visible.

## Why It Matters

Traditional software improves on the cadence of release cycles. Agent-native software improves on the cadence of conversations. The compounding is different in kind: every interaction can leave the system better tuned for the next one.

---

## Related

- [[The context.md Pattern for Agent Memory]] -- the mechanism behind accumulated context
- [[Compound Engineering - Only Document Mistakes]] -- the same compounding principle applied to CLAUDE.md in Boris Cherny's workflow
- [[Self-Modification Must Be Legible]] -- the safety frame for the most advanced layer of improvement
- [[Composability - New Features Through New Prompts]] -- composability is the substrate that lets prompt edits ship behavior change
- [[Three Modes of Working With AI]] -- prompt refinement is the surface where the modes meet
