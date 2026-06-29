---
title: Skills Are the Unit of Reusable Expertise
sources:
  - https://arps18.github.io/posts/claude-code-mastery/
tags:
  - claude-code
  - skills
  - ai-workflow
  - institutional-knowledge
created: 2026-06-11
---

# Skills Are the Unit of Reusable Expertise

A Claude Code skill is a folder containing a `SKILL.md` (instructions plus frontmatter) that becomes a slash command. The Claude Code mastery guide's rule for when to write one: "If you do something more than once a day, turn it into a skill. Anything you repeat is a skill waiting to be written."

What makes skills more than saved prompts is that they package team conventions, gotchas, and templates into one invokable unit. The guide's Go-handler example lets a new developer ship a fully conventional endpoint on day one without spelunking through the codebase. Checked into git, skills become institutional knowledge: new engineers clone the repo and inherit the team's accumulated practice for free.

They are also cheap to carry. Through progressive disclosure, the agent reads only each skill's one-line description (about 100 tokens) at session start and loads the full instructions only when the skill fires, so a large library costs almost nothing until used.

The underlying idea: expertise compounds only when it is externalized into a reusable, versionable artifact instead of staying in someone's head or in scattered prompts.

## Related

- [[Compound Engineering - Only Document Mistakes]] -- the same compounding move applied to failures: every mistake becomes a permanent rule, every repeated prompt becomes a skill
- [[Build a Claude skill that rewrites itself when it's wrong]] -- the self-improving extension of the skill-as-artifact idea
- [[Composability - New Features Through New Prompts]] -- the agent-native parallel: when behavior lives in prompts, shipping new capability means writing text, not code
- [[Own Your Embeddings Before You Own Your Model]] -- the same build-once-reuse-everywhere compounding moved into the data layer: a single owned embedding lifts every downstream consumer the way a skill lifts every session
