---
title: The Three Prompt Rule for Promoting Prompts to Persistent Context
sources:
  - https://every.to/guides/codex-for-knowledge-work
tags:
  - codex
  - claude-code
  - skills
  - claude-md
  - ai-workflow
  - prompts
created: 2026-06-12
---

# The Three Prompt Rule for Promoting Prompts to Persistent Context

Katie Parrott's heuristic for when to stop re-briefing the agent and start using Codex's `/goal` command: "If you'd type the same sentence into three prompts in a row, 'cite every factual claim, match the house style, never send without my review,' make it a goal instead." The rule generalises beyond Codex. Once an instruction has earned its third repetition, it is no longer prompt material; it is context, and it belongs somewhere the agent will read by default.

The rule is also useful because Codex distinguishes Goals from Skills, and the distinction is worth importing. A **goal** is a persistent objective that shapes one session until the outcome is met. It guides "what done looks like, how success gets checked, which constraints to respect" for this stretch of work. A **skill** is a reusable packaged set of instructions, sometimes with scripts, that teaches the agent how to handle a recurring kind of task. Goals live and die with a session; skills outlive any single task.

The Claude Code translations map cleanly. A goal-shaped instruction becomes a plan-mode brief, an agent-loop spec, or a long-lived `/goal`-equivalent at the top of the conversation. A skill-shaped instruction becomes a `.claude/skills/` skill or a CLAUDE.md rule. The three-prompt trigger is the same: notice yourself typing the same sentence a third time and stop typing.

## Related

- [[Skills Are the Unit of Reusable Expertise]] -- the Claude Code analogue of Codex skills, with the same compounding logic: any repeated prompt is a skill waiting to be written
- [[Compound Engineering - Only Document Mistakes]] -- CLAUDE.md is the third home for repeated instructions, but populated by failure rather than foresight; the three-prompt rule and the post-mortem rule are two triggers for the same artifact
- [[A Claude Code Subagent Is a Markdown File]] -- another permanent home for "instructions I'd otherwise repeat", scoped to a recurring task type
- [[Coding Agents Are Knowledge Work Agents in Disguise]] -- goals and skills are coding-agent primitives that turn out to be the right primitives for any persistent agent context
