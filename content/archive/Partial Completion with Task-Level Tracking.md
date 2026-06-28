---
title: "Partial Completion with Task-Level Tracking"
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - agent-loop
  - task-tracking
  - resumability
  - ai-agents
created: 2026-05-21
---

# Partial Completion with Task-Level Tracking

## The Idea

For multi-step agent runs, track progress at the level of individual tasks, not just the overall session. Each task has its own status (pending, in_progress, completed, failed, skipped) and its own notes (why it failed, what was done). The session is complete when every task is either completed or skipped.

Surfacing this to the UI lets the user see exactly where the agent is:

```
Progress: 3/5 tasks complete (60%)
✓ [1] Find source materials
✓ [2] Download full text
✓ [3] Extract key passages
✗ [4] Generate summary - Error: context limit
○ [5] Create outline
```

## Why It Matters

Without task-level tracking, three common failure modes go silent:

- **Agent hits max iterations.** Some tasks done, some pending. A checkpoint saves; a resume continues from where it left off.
- **Agent fails on one task.** That task is marked failed with a reason; other tasks may still continue based on the agent's judgment.
- **Network error mid-task.** The current iteration throws, the session is marked failed, the checkpoint preserves the messages up to that point.

In all three cases, the user keeps everything that did get done, and you have a precise place to resume from.

---

## Related

- [[Checkpoint and Resume for Long-Running Agents on Mobile]] -- task-level tracking is what gives checkpoints something meaningful to restore
- [[Explicit Completion Signals Beat Heuristic Detection]] -- per-task completion uses the same separation of concerns
- [[Design Tools for Bounded Context Windows]] -- task-level state is one way to survive context limits
- [[No Silent Agent Actions - UI Reflects Activity Immediately]] -- task progress is the cleanest thing to surface in real time
- [[Background Execution Within iOS Time Limits]] -- on mobile, task-level state is what fits inside the 30-second window
