---
title: "Explicit Completion Signals Beat Heuristic Detection"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - agent-loop
  - completion-signals
  - tool-design
  - ai-agents
created: 2026-05-21
---

# Explicit Completion Signals Beat Heuristic Detection

## The Idea

Agents need an explicit way to say "I'm done." Don't try to detect completion through heuristics — like counting consecutive iterations without a tool call, or checking whether an expected output file exists. Heuristics are fragile and silently wrong: the agent thinks it's still working while the orchestrator has already stopped the loop, or vice versa.

A simple shape for tool results that separates the two concerns:

```swift
struct ToolResult {
  let success: Bool
  let output: String
  let shouldContinue: Bool
}

.success("Result")  // continue
.error("Message")   // continue (retry)
.complete("Done")   // stop loop
```

Completion is separate from success or failure. A tool can succeed and stop the loop, or fail and signal "continue" so the agent can recover. The orchestrator just reads the signal.

## What's Still Missing

Richer control-flow signals are still being figured out. Things like `pause` (agent needs user input before continuing), `escalate` (needs a human decision outside its scope), and `retry` (transient failure the orchestrator should handle) don't yet have a standard. Right now, if the agent needs input it just asks in its text response — there's no formal "blocked waiting" state. Worth knowing about; not yet a settled pattern.

---

## Related

- [[Partial Completion with Task-Level Tracking]] -- completion at the task level uses the same separation of concerns
- [[Checkpoint and Resume for Long-Running Agents on Mobile]] -- explicit signals matter even more when sessions can be interrupted
- [[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]] -- heuristic completion detection is one of the named anti-patterns
- [[Design Tools for Bounded Context Windows]] -- explicit completion is part of how you survive a finite context
- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- atomic tools need a clean way to declare an outcome reached
