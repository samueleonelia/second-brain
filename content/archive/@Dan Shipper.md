---
title: Dan Shipper
type: index
scope: creator
created: 2026-05-21
---

# Dan Shipper

Dan Shipper is the co-founder and CEO of Every, a media and software company building agent-native applications (Reader, Anecdote, and others) alongside an editorial operation focused on the AI frontier. He writes the Chain of Thought column and hosts the AI & I podcast. Together with Claude, he authored the [Agent-Native Architectures](https://every.to/guides/agent-native) playbook, which synthesizes the principles his team has learned from shipping agent-first apps.

## Key Themes

- **Agent-native design.** Building applications where the agent is a first-class citizen with parity to the UI, not a chatbot bolted on.
- **Files as the universal interface.** Bash + filesystem is the most fluent agent surface; everything else is built on top of that.
- **Latent demand through the agent.** Watching what users ask the agent to do is the cleanest product research available.

## Agent-Native Architectures (Jan 2026)

### Why Now

[[Why Agent-Native Software Works Now]] -- the conditions that make this category buildable in 2026

### Core Principles

[[Parity - Agents Need Tools for Everything the UI Can Do]] -- foundational principle
[[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- tools stay atomic; features are prompts
[[Composability - New Features Through New Prompts]] -- ship features by writing prompts
[[Emergent Capability - Agents Do What You Didn't Design For]] -- the architectural payoff
[[Improvement Over Time Without Shipping Code]] -- the third payoff: compounding without releases

### Tool Design

[[From Primitives to Domain Tools]] -- the staging path
[[Domain Tools Should Be Shortcuts, Not Gates]] -- the constraint that protects composability
[[Graduating Hot Paths to Optimized Code While Preserving Parity]] -- the optimization path

### Files-First Design

[[Files Are the Universal Interface for Agents]] -- why files dominate as the agent interface
[[Entity-Scoped Directories for Agent-Native Apps]] -- a directory shape that's working
[[The context.md Pattern for Agent Memory]] -- portable agent memory in one file
[[Files for Legibility, Databases for Structure]] -- when to choose each
[[Conflict Models When Agents and Users Share Files]] -- the trade-offs you take on by going files-first

### Execution Patterns

[[Explicit Completion Signals Beat Heuristic Detection]] -- agents need to say "done" explicitly
[[Model Tier Selection by Task Complexity]] -- right-size the model to the task
[[Partial Completion with Task-Level Tracking]] -- per-task state survives interruption
[[Design Tools for Bounded Context Windows]] -- context is finite; design for it

### Implementation Patterns

[[Shared Workspace Over Separate Agent Sandboxes]] -- agent and user in the same data space
[[Context Injection in the System Prompt]] -- tell the agent what exists and what it can do
[[No Silent Agent Actions - UI Reflects Activity Immediately]] -- visibility builds trust

### Product Implications

[[Progressive Disclosure - Simple to Start, Endlessly Powerful]] -- Excel-like product shape
[[Latent Demand Discovery Through Agent Usage]] -- agents as a continuous product research instrument
[[Approval Stakes vs Reversibility Matrix]] -- a starting heuristic for unsolicited agent actions
[[Self-Modification Must Be Legible]] -- the safety frame for self-modifying agents

### Mobile

[[Checkpoint and Resume for Long-Running Agents on Mobile]] -- surviving iOS interruptions
[[iCloud-First Storage with Local Fallback for Mobile Agents]] -- free cross-device sync
[[Background Execution Within iOS Time Limits]] -- the ~30-second discipline

### Advanced Patterns

[[Dynamic Capability Discovery Over Static Tool Mapping]] -- the most-atomic version of tool design
[[CRUD Completeness Audit for Every Entity]] -- the cheapest parity insurance

### Anti-Patterns and the Test

[[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]] -- the named failure modes
[[The Ultimate Test - Outcomes You Didn't Build a Feature For]] -- the single test that distinguishes agent-native from agent-flavored

## See Also

- [[@Agent-Native Software]] -- the topic sub-index this material lives in
- [[@Boris Cherny]] -- Claude Code is the canonical reference Dan builds on
