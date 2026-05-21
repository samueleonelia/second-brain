---
title: "iCloud-First Storage with Local Fallback for Mobile Agents"
type: permanent
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - mobile-agents
  - icloud
  - storage
  - ios
created: 2026-05-21
---

# iCloud-First Storage with Local Fallback for Mobile Agents

## The Idea

One working approach to mobile agent storage: try iCloud first, fall back to local Documents if iCloud isn't available, and provide a migration layer that promotes local files to iCloud when it comes back online.

```
1. iCloud Container (preferred)
   iCloud.com.{bundleId}/Documents/
   ├── Library/
   ├── Research/books/
   ├── Chats/
   └── Profile/

2. Local Documents (fallback)
   ~/Documents/

3. Migration layer
   Auto-migrate local → iCloud
```

What this gives you:
- Automatic sync across the user's devices, without you building infrastructure
- Backup without user action
- Graceful degradation when iCloud is unavailable
- Users can access their data outside the app if they want to

Two practical patterns that go alongside:

- **Cloud file states.** Files may exist in iCloud but not be downloaded locally yet. Always ensure availability before reading.
- **Storage abstraction.** Don't use raw `FileManager` everywhere. Wrap iCloud vs. local in a single layer so the rest of your code doesn't care which is active.

The article flags this as an approach the Every team is exploring rather than a settled recipe. Better solutions may exist; this is one that's working so far.

## Why It Matters

For mobile-first agent apps, sync is one of the unsung superpowers. The same `context.md` and the same `agent_log.md` appearing on every device with no infrastructure is what makes the user feel like they have one assistant, not three.

---

## Related

- [[Checkpoint and Resume for Long-Running Agents on Mobile]] -- checkpoints share this storage layer
- [[Files Are the Universal Interface for Agents]] -- iCloud sync is a primary reason files-first is so strong on mobile
- [[Conflict Models When Agents and Users Share Files]] -- iCloud introduces its own conflict copies; the model has to account for them
- [[Background Execution Within iOS Time Limits]] -- background time is often spent flushing to iCloud
- [[Entity-Scoped Directories for Agent-Native Apps]] -- the directory shape that syncs cleanly across devices
