---
title: Agent-Native Software
created: 2026-05-21
---

# Agent-Native Software

Software where AI agents are first-class citizens. The agent isn't a feature inside the app; the agent is one of the two principal users (alongside the human), and the app is shaped so both can reach the same outcomes through the same data.

Most of the notes in this cluster come from Dan Shipper and Claude's [Agent-Native Architectures](https://every.to/guides/agent-native) guide (Every.to, January 17, 2026), which synthesizes patterns from the Every team's Reader and Anecdote apps. The cluster is directly load-bearing for [[now]] — SOS Focus is being built as an agentic app.

## Why Now

[[Why Agent-Native Software Works Now]] -- Claude Code proved the loop + bash + files architecture works, and the Claude Code SDK makes it accessible

## Core Principles

[[Parity - Agents Need Tools for Everything the UI Can Do]] -- foundational principle: any UI outcome must be reachable through tools
[[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- features are prompts, not code; tools stay atomic
[[Composability - New Features Through New Prompts]] -- atomic tools + parity = new features ship as prompts
[[Emergent Capability - Agents Do What You Didn't Design For]] -- the agent accomplishes things you never explicitly built
[[Improvement Over Time Without Shipping Code]] -- agent-native apps get better through context, prompts, and (advanced) self-modification

## Tool Design

[[From Primitives to Domain Tools]] -- start with bash and files; graduate to domain tools only as patterns emerge
[[Domain Tools Should Be Shortcuts, Not Gates]] -- keep primitives accessible so composability survives
[[Graduating Hot Paths to Optimized Code While Preserving Parity]] -- optimize the hot path, but the agent must still be able to trigger and fall back

## Files-First Design

[[Files Are the Universal Interface for Agents]] -- bash + filesystem is the most battle-tested agent interface
[[Entity-Scoped Directories for Agent-Native Apps]] -- one folder per entity; legible to humans and agents
[[The context.md Pattern for Agent Memory]] -- a single file as portable agent memory
[[Files for Legibility, Databases for Structure]] -- when to leave the filesystem
[[Conflict Models When Agents and Users Share Files]] -- the cost of sharing files is having to design for conflicts

## Execution Patterns

[[Explicit Completion Signals Beat Heuristic Detection]] -- agents must explicitly say "done"; heuristics are fragile
[[Model Tier Selection by Task Complexity]] -- don't default to the most powerful model; pick the tier per task
[[Partial Completion with Task-Level Tracking]] -- per-task status enables real resume
[[Design Tools for Bounded Context Windows]] -- context will fill up; design for it from the start

## Implementation Patterns

[[Shared Workspace Over Separate Agent Sandboxes]] -- agent and user in the same data space, not parallel ones
[[Context Injection in the System Prompt]] -- tell the agent what exists, what it can do, what just happened
[[No Silent Agent Actions - UI Reflects Activity Immediately]] -- visible progress is the foundation of trust

## Product Implications

[[Progressive Disclosure - Simple to Start, Endlessly Powerful]] -- Excel-like depth: simple entry, no ceiling
[[Latent Demand Discovery Through Agent Usage]] -- agent requests are the cleanest signal of latent demand
[[Approval Stakes vs Reversibility Matrix]] -- decide autonomy based on stakes and reversibility, not vibes
[[Self-Modification Must Be Legible]] -- visibility, understanding, rollback when agents modify themselves

## Mobile

[[Checkpoint and Resume for Long-Running Agents on Mobile]] -- mobile interrupts; agents need to survive that
[[iCloud-First Storage with Local Fallback for Mobile Agents]] -- free cross-device sync, no server needed
[[Background Execution Within iOS Time Limits]] -- ~30 seconds to checkpoint and transition gracefully

## Advanced Patterns

[[Dynamic Capability Discovery Over Static Tool Mapping]] -- two tools instead of fifty; the agent discovers what's available
[[CRUD Completeness Audit for Every Entity]] -- the cheapest parity insurance

## Anti-Patterns and the Test

[[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]] -- the named failure modes, each the shadow of a principle
[[The Ultimate Test - Outcomes You Didn't Build a Feature For]] -- if the agent can accomplish what you didn't build, you've succeeded

## See Also

- [[@Dan Shipper]] -- creator index for the lead author
- [[@Boris Cherny]] -- Claude Code's creator; many cross-links into this cluster
- [[now]] -- SOS Focus is the live agent-native project this material informs
