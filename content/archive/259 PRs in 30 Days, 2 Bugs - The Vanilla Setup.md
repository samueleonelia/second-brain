---
title: "259 PRs in 30 Days, 2 Bugs: The \"Vanilla\" Setup"
type: permanent
creator: boris-cherny
sources:
  - https://alexdharris.substack.com/p/how-the-creator-of-claude-code-ships
  - https://simonwillison.net/2025/Dec/27/boris-cherny/
  - https://getpushtoprod.substack.com/p/how-the-creator-of-claude-code-actually
  - https://howborisusesclaudecode.com
themes:
  - ai-changes-the-game
  - simple-systems-beat-complex-ones
tags:
  - claude-code
  - pull-requests
  - ai-coding
  - opus-model
  - vanilla-setup
  - productivity
  - verification
  - simon-willison
  - correction-tax
created: 2026-04-01
---

# 259 PRs in 30 Days, 2 Bugs: The "Vanilla" Setup

## The Story

### What's a pull request (and why 259 is absurd)

For non-technical readers: a pull request (PR) is a finished unit of work. A developer writes code, packages it up, and submits it for review before it goes live. Each PR does one thing: fixes a bug, adds a feature, improves performance. It's the basic unit of shipping in software.

A typical developer at a tech company ships maybe 1-3 PRs per day on a productive day. Some ship less. Some days you ship zero because you're planning, reviewing, or stuck on a problem.

Boris shipped 259 in 30 days. That's 8-9 per day, every day, for a month. 40,000 lines of code total. Every single line written by AI. He introduced 2 bugs the entire month (versus an estimated 20 if he'd written the code by hand).

That's not just fast. It's a different category of output.

### What his setup actually looks like

Here's the part that surprises everyone. Multiple sources describe Boris's setup as "surprisingly vanilla" and "surprisingly unremarkable." People expect the creator of Claude Code to have an elaborate, heavily customized system with secret techniques and exotic configurations.

He doesn't.

**What he uses:**
- The Claude Code tool, mostly with default settings
- Opus 4.5 (the most capable, slowest, most expensive model) for everything
- 5 terminal windows running in parallel, numbered 1-5 with color-coded tabs
- 5-10 additional browser sessions running simultaneously
- A shared text file (CLAUDE.md) where the team documents recurring AI mistakes
- Automated formatting that cleans up code after every edit
- A few shortcut commands for workflows he repeats daily (commit, push, open PR)
- System notifications that ping him when a session needs input

**What he does NOT use:**
- No elaborate prompt engineering or secret prompts
- No custom AI fine-tuning
- No complex multi-agent architectures
- No model-routing systems that try to use cheaper models for "simple" tasks
- No exotic techniques or clever hacks

That's it. The person who built the tool uses it almost exactly the way it comes out of the box.

### Why "vanilla" works better than complex

Boris's philosophy: "The correction tax exceeds the compute tax."

Translation: paying for the best, most capable model (even though it's slower and more expensive per use) saves time overall because it gets things right more often. When a cheap, fast model gets it wrong, you spend more time fixing the output than you saved on speed. Over a full day of work, the expensive model is actually cheaper because it needs less babysitting.

This is why he rejects the common approach of using different models for different tasks (a cheap model for easy stuff, an expensive model for hard stuff). He uses the same expensive model for everything. Less decision-making. Fewer errors. More consistent output.

The same logic applies to his entire setup. Every piece of complexity you add (custom configs, elaborate prompt chains, multi-model routing) is another thing that can break, another thing to maintain, another decision to make. Boris removes decisions. He uses one model. One setup. One workflow. Repeated 8-9 times per day.

### The workflow: plan, execute, verify, ship

Every non-trivial PR follows the same 4 steps:

1. **Plan.** Before any code is written, Boris aligns with the AI on what needs to happen. He iterates on the plan until it's solid.
2. **Execute.** He lets the AI write the code without interruption.
3. **Verify.** The AI runs its own tests, checks the output, validates that it works. Boris calls verification his "#1 tip": it 2-3x the quality of the output.
4. **Ship.** Small commits, maximum 200 lines. This makes review fast and mistakes easy to undo.

Same quality bar regardless of source. "If the code sucks, we're not going to merge it." Whether AI or a human wrote it, the standard is identical.

### The context: one year earlier

A year before Boris shipped those 259 PRs, Claude could barely run basic terminal commands. Simon Willison (co-creator of the Django web framework, a respected independent developer) curated the contrast between then and now as evidence of the staggering pace of AI improvement. The tool that could barely function 12 months ago is now producing 8-9 finished units of work per day with fewer errors than a human.

## Lesson for Creators

Prolific output doesn't require a complex system. It requires a simple system applied consistently. Boris's "surprisingly vanilla" setup proves that mastery comes from disciplined repetition of fundamentals (plan, execute, verify, ship), not from sophisticated tool configuration.

The trap most people fall into: spending weeks perfecting their AI workflow, tweaking settings, testing different models, building elaborate prompt libraries. Boris skips all of that. One model. One workflow. Ship 8-9 times per day.

The person who ships 259 finished pieces in 30 days with a vanilla setup beats the person who spends 30 days building the perfect system. Stop customizing. Start shipping.

---

## Related

- [[Morning Agents from the Phone - Boris's Full Daily AI Workflow]] -- AI-powered daily workflow
- [[Daisy's 20-Claude Swarm Weekend]] -- parallel AI execution
- [[Compound Engineering - Only Document Mistakes]] -- simple systems, consistent discipline
- [[The Headlights Philosophy - No Five-Year Plans]] -- simple process, repeated consistently
