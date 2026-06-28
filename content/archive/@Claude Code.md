---
title: Claude Code
created: 2026-06-11
---

# Claude Code

Working with AI coding agents in practice: workflows, configuration artifacts (skills, subagents, CLAUDE.md), and the human costs and limits of orchestrating them. Centered on Claude Code but the patterns generalize to any agentic coding tool.

## Workflow Principles

[[Give the Agent a Way to Verify Its Own Work]] -- Boris Cherny's most-repeated advice: a verification loop is worth a 2-3x quality bump
[[Three Modes of Working With AI]] -- vibe coding, pairing, by hand: match the mode to the task
[[Delegate vs Collaborate as the Meta-Skill of Knowledge Work]] -- Katie Parrott's sibling taxonomy: sort tasks by autonomy level before opening the agent
[[The Orchestration Tax - Cognitive Bandwidth Doesn't Parallelize]] -- agents scale horizontally, your judgment doesn't; the hidden cost of parallelism
[[Everyone Says Loop, Nobody Defines It]] -- AI-coding vocabulary spreads faster than its meaning; copy the workflow, not the slogan
[[Loops Make Sense Only With a Fixed Feedback Signal]] -- the boundary for autonomous loops: a confined process with an objective score to optimize against
[[A Plan Document Can't Hold Your Product Vision]] -- why fire-and-forget loops fail for real products: specs can't carry judgment that isn't formed yet
[[Loops Are Priced for Unlimited Token Budgets]] -- loop advice inherits the advocate's cost structure; check the price tag before copying the workflow
[[The Thousand Line Review Ceiling]] -- automated review stops being a reliable signal past ~1k lines; small batches keep machine review honest
[[Agent Loops Only Work When the Output Is Binary]] -- atomic essay distilling the loop criterion: no machine-checkable score, no loop

## Configuration Artifacts

[[Skills Are the Unit of Reusable Expertise]] -- repeated prompts become versionable, shareable skills; institutional knowledge in git
[[Subagents Keep the Main Context Clean]] -- isolated contexts and scoped permissions; separate concerns into separate workers
[[A Claude Code Subagent Is a Markdown File]] -- the demystification: a working subagent is a 15-minute text file
[[Compound Engineering - Only Document Mistakes]] -- the CLAUDE.md discipline: every real failure becomes a permanent rule
[[The Three Prompt Rule for Promoting Prompts to Persistent Context]] -- the trigger for writing one: stop typing the third repetition and put it in a goal, skill, or CLAUDE.md
[[Coding Agents Are Knowledge Work Agents in Disguise]] -- why these primitives matter beyond engineering: a non-developer needs goals, skills, and CLAUDE.md just as much

## In Practice

[[259 PRs in 30 Days, 2 Bugs - The Vanilla Setup]] -- what disciplined agent use produces at full throughput
[[Morning Agents from the Phone - Boris's Full Daily AI Workflow]] -- a full day built around parallel agent sessions
[[Daisy's 20-Claude Swarm Weekend]] -- a 20-agent swarm building plugins over a weekend

## See Also

- [[@Boris Cherny]] -- creator of Claude Code; his index holds the origin stories behind these patterns
- [[@Agent-Native Software]] -- the building-apps-for-agents counterpart to this using-agents cluster
