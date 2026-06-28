---
title: "From Primitives to Domain Tools"
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - tool-design
  - primitives
  - domain-tools
  - ai-agents
created: 2026-05-21
---

# From Primitives to Domain Tools

## The Idea

Start with pure primitives: bash, file operations, basic storage. This proves the architecture works and reveals what the agent actually needs. Only as patterns emerge do you add domain-specific tools, and you add them deliberately, with reason.

Domain tools earn their place by doing one of three jobs:

- **Vocabulary.** A `create_note` tool teaches the agent what "note" means in your system, so it stops inventing its own conventions.
- **Guardrails.** Some operations need validation that shouldn't be left to agent judgment (e.g., enforcing a schema, checking permissions).
- **Efficiency.** Common operations can be bundled for speed and cost, replacing a five-tool dance with one call.

The rule for a domain tool: it represents *one conceptual action from the user's perspective*. It can include mechanical validation, but judgment about *what to do* or *whether to do it* belongs in the prompt — never in the tool.

## Why It Matters

This sequencing — primitives first, domain tools second — preserves emergent capability while still giving you the efficiency and vocabulary of a curated API. Reversed, you over-fit the tool surface to features you imagined and lose the ability to discover features you didn't.

---

## Related

- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- the principle this practice operationalizes
- [[Domain Tools Should Be Shortcuts, Not Gates]] -- the constraint that keeps domain tools from collapsing composability
- [[Graduating Hot Paths to Optimized Code While Preserving Parity]] -- the next step after a pattern proves itself
- [[Latent Demand Discovery Through Agent Usage]] -- patterns that justify a domain tool surface here first
- [[Files Are the Universal Interface for Agents]] -- the primitive layer most agent-native apps start from
- [[Stop Feeding AI PDFs - Markdown Is Its Native Format]] -- same principle at the input layer: meet the model in the format it reasons about
- [[Don't tell Claude to make a skill - use the skill that makes skills]] -- the skill-creator is a domain tool whose job is to bake the best-practice format in
