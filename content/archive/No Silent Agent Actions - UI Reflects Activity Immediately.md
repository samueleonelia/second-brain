---
title: "No Silent Agent Actions: UI Reflects Activity Immediately"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - ui-design
  - agent-transparency
  - trust
  - ai-agents
created: 2026-05-21
---

# No Silent Agent Actions: UI Reflects Activity Immediately

## The Idea

When an agent acts, the UI should reflect it immediately. Silent agents feel broken; visible progress builds trust. The rule is absolute: no silent actions.

A working event vocabulary for chat-style integration:

```swift
enum AgentEvent {
    case thinking(String)          // → show as thinking indicator
    case toolCall(String, String)  // → show tool being used
    case toolResult(String)        // → show result (optional)
    case textResponse(String)      // → stream to chat
    case statusChange(Status)      // → update status bar
}
```

In practice this means: show thinking progress as the agent considers options; show the current tool being executed; stream text incrementally rather than waiting for completion; update task-list progress in real time.

Some tools are noisy — internal checks, repeated lookups — and showing every one of them adds friction instead of trust. An `ephemeralToolCalls` flag lets you hide internal noise while still showing meaningful actions.

## Why It Matters

This is mostly a trust problem, not a technical one. Users assume an agent that's quiet is either stuck, lying, or doing something they wouldn't approve of. The cheapest way to defuse all three is to show, in real time, what's happening. Visible progress is the foundation for users letting the agent take on bigger jobs.

---

## Related

- [[Shared Workspace Over Separate Agent Sandboxes]] -- a shared workspace amplifies the cost of silence
- [[Approval Stakes vs Reversibility Matrix]] -- visibility is the precondition for any approval flow
- [[Partial Completion with Task-Level Tracking]] -- per-task progress is the most useful thing to surface
- [[Self-Modification Must Be Legible]] -- the same legibility principle applied to the most sensitive case
- [[Progressive Disclosure - Simple to Start, Endlessly Powerful]] -- progress visibility is what lets power users dare to push further
