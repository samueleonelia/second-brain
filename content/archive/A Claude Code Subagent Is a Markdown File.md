---
title: A Claude Code Subagent Is a Markdown File
sources:
  - https://x.com/0x_rody/status/2061019244595233135
tags:
  - claude-code
  - subagents
  - ai-workflow
created: 2026-06-11
---

# A Claude Code Subagent Is a Markdown File

An X article by rody (@0x_rody), "How to Build Your First Claude Code Subagent in 15 Minutes," makes the barrier-to-entry point: a working subagent (a code reviewer, a test writer, a security scanner, a documentation generator) can be built in under 15 minutes, because "each one is a markdown file with instructions at the top and a prompt at the bottom."

The idea worth keeping is the demystification. Subagents sound like infrastructure, but the entire artifact is a text file: frontmatter declaring name, description, tools, and model, followed by the prompt that defines how the worker behaves. The cost of trying one is minutes, not days.

> Source returned limited text — captured what was available (article preview only; full thread behind X login).

## Related

- [[Subagents Keep the Main Context Clean]] -- the why behind the how: what you gain once that markdown file exists is context isolation and scoped permissions
- [[Skills Are the Unit of Reusable Expertise]] -- the sibling artifact: skills and subagents are both expertise externalized as version-controlled text files
