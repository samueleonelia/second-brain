---
title: "Checkpoint and Resume for Long-Running Agents on Mobile"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - mobile-agents
  - checkpointing
  - resumability
  - ios
created: 2026-05-21
---

# Checkpoint and Resume for Long-Running Agents on Mobile

## The Idea

Mobile apps get interrupted. Agents need to survive that. An agent might need 30 seconds, five minutes, or an hour to complete a task — but iOS will background your app after seconds of inactivity and may kill it entirely to reclaim memory. The user might switch apps, take a call, or lock their phone mid-task. Without checkpointing, the work is gone.

What to checkpoint: agent type, messages, iteration count, task list, custom state, timestamp.

When to checkpoint: on app backgrounding, after each tool result, periodically during long operations.

The resume flow:
1. `loadInterruptedSessions()` scans the checkpoint directory
2. Filter by `isValid(maxAge:)` (one hour is a sane default)
3. Show the user a resume prompt
4. Restore messages and continue the agent loop
5. On dismiss, delete the checkpoint

The architecture decision worth weighing: store the full agent configuration in the checkpoint, or store only `agentType` and recreate from a registry. The latter is simpler; the cost is that config changes can break old checkpoints.

## The Gap to Watch

If the system kills the app between checkpoints, recovery depends on how often you save. Checkpointing after each tool result gives maximum robustness at the cost of more disk I/O. This pattern is flagged in the article as Claude's contribution during building — it works, but better solutions almost certainly exist.

---

## Related

- [[Background Execution Within iOS Time Limits]] -- the 30-second background window is when the checkpoint must be written
- [[iCloud-First Storage with Local Fallback for Mobile Agents]] -- checkpoints live in the same storage layer as the rest
- [[Partial Completion with Task-Level Tracking]] -- per-task state is what makes a checkpoint meaningfully resumable
- [[Morning Agents from the Phone - Boris's Full Daily AI Workflow]] -- a real-world mobile-first agent workflow this pattern supports
- [[Files Are the Universal Interface for Agents]] -- checkpoints as `.checkpoint` files keep the agent's state inspectable
