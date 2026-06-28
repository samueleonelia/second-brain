---
title: "Background Execution Within iOS Time Limits"
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - mobile-agents
  - ios
  - background-execution
  - long-running-agents
created: 2026-05-21
---

# Background Execution Within iOS Time Limits

## The Idea

iOS gives a backgrounded app roughly 30 seconds before it's suspended or killed. For an agent in the middle of a loop, that 30 seconds is your only window to land things safely. Use it for three jobs in order:

1. Complete the current tool call if it can finish in time.
2. Checkpoint the session state so it can be resumed.
3. Transition gracefully to a `backgrounded` status.

A working shape:

```swift
func prepareForBackground() {
    backgroundTaskId = UIApplication.shared
        .beginBackgroundTask(withName: "AgentProcessing") {
            handleBackgroundTimeExpired()
        }
}

func handleBackgroundTimeExpired() {
    for session in sessions where session.status == .running {
        session.status = .backgrounded
        Task { await saveSession(session) }
    }
}

func handleForeground() {
    for session in sessions where session.status == .backgrounded {
        Task { await resumeSession(session) }
    }
}
```

## For Truly Long-Running Agents

If a task genuinely needs hours, mobile alone isn't enough. The pattern is a server-side orchestrator that can run for as long as it needs, with the mobile app acting as a viewer and input mechanism. The phone becomes the cockpit; the engine runs elsewhere.

The article flags this as Claude's contribution from building — it works in practice, but it's "one way to do it" rather than a battle-tested standard.

---

## Related

- [[Checkpoint and Resume for Long-Running Agents on Mobile]] -- the 30-second window is when the checkpoint gets written
- [[iCloud-First Storage with Local Fallback for Mobile Agents]] -- where the saved session lives
- [[Partial Completion with Task-Level Tracking]] -- knowing which tasks finished is what makes a graceful background possible
- [[No Silent Agent Actions - UI Reflects Activity Immediately]] -- when the app comes back to foreground, the user needs to see what happened
- [[Morning Agents from the Phone - Boris's Full Daily AI Workflow]] -- real-world workflow that depends on this kind of background discipline
