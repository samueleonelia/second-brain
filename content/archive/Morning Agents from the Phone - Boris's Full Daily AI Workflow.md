---
title: "Morning Agents from the Phone: Boris's Full Daily AI Workflow"
type: permanent
creator: boris-cherny
sources:
  - https://www.developing.dev/p/boris-cherny-creator-of-claude-code
  - https://karozieminski.substack.com/p/boris-cherny-claude-code-workflow
  - https://getpushtoprod.substack.com/p/how-the-creator-of-claude-code-actually
  - https://alexdharris.substack.com/p/how-the-creator-of-claude-code-ships
  - https://howborisusesclaudecode.com
themes:
  - ai-changes-the-game
  - use-your-own-product-publicly
tags:
  - claude-code
  - ai-workflow
  - mobile-coding
  - voice-dictation
  - parallel-sessions
  - git-worktree
  - opus-model
  - claude-md
  - slash-commands
  - verification
  - maker-manager
created: 2026-04-01
---

# Morning Agents from the Phone: Boris's Full Daily AI Workflow

## The Story

### The morning: phone in hand, work already starting

Every morning, Boris wakes up and opens the Claude mobile app. Before he gets to a computer, he kicks off a few AI agents working on the day's tasks. These aren't vague prompts. He assigns specific, scoped work: fix this bug, implement this feature, refactor this module.

By the time he sits down at his desk, work is already done or in progress. Sometimes he reviews the output and merges it directly. Sometimes he uses the "teleport" feature to pull a mobile session onto his computer and edit locally. But the work is underway before his first coffee.

Six months ago, if you'd told him this is how he'd code, he'd have said "are you crazy?"

He also uses voice dictation for prompts (double-tap the fn key on Mac). His reasoning: "You speak 3x faster than you type, and prompts get way more detailed." The more context you give, the better the output.

### The setup: 5 terminals, 5-10 browser sessions, numbered tabs

Boris runs 5 parallel Claude Code instances in his terminal, each in a separate git worktree (an isolated copy of the codebase so the sessions don't conflict with each other). The tabs are numbered 1-5 and color-coded. He uses system notifications to know when a session needs input.

On top of that, he runs 5-10 additional sessions in the browser on claude.ai/code. Total: 10-15 concurrent AI sessions at any given time.

He treats AI "as a capacity you schedule" rather than a single conversational assistant. Like a manager with a team of 10-15 junior developers who are fast, tireless, and literal.

### The model choice: slow and correct beats fast and wrong

He exclusively uses Opus 4.5 with thinking mode enabled. The slowest, most expensive model available. Why? "A wrong fast answer is slower than a right slow answer." When the model gets it wrong, you spend more time correcting than you saved on speed. He calls this "the correction tax exceeds the compute tax." Over a full day, the slow model is actually faster because it requires less steering and fewer do-overs.

### The workflow: plan, execute, verify

For every non-trivial task, the pattern is the same:

1. **Plan mode first** (shift+tab twice). Boris iterates on the plan with Claude before any code is written. He adjusts, asks questions, pushes back until the approach is solid. "A plan you didn't read is worse than no plan at all."

2. **Auto-accept mode.** Once the plan is solid, he switches to auto-accept and lets Claude execute without interruption. Claude writes the code, runs tests, fixes issues.

3. **Verification.** This is what Boris calls his "#1 tip." He gives Claude a way to verify its own work: running tests, checking the UI in a browser, validating with type checkers and linters. "If Claude has that feedback loop, it will 2-3x the quality of the final result." Without verification, AI output is a rough draft. With verification, it's a finished product.

4. **Small commits.** Maximum 200 lines per commit. This makes review fast and rollbacks clean.

### The institutional memory: CLAUDE.md

The team maintains a single shared file called CLAUDE.md, checked into git. Every time Claude makes a mistake that keeps recurring, they add an entry. Not preemptively. Only after real, repeated failures. The file stays small (roughly 2,500 tokens). It's not a manual. It's a curated list of hard-won lessons.

When Boris reviews pull requests, he tags @.claude on GitHub to update CLAUDE.md automatically. Every session gets smarter because it reads this file first. John Kim calls this "compound engineering: building institutional knowledge directly into the codebase."

### The automation layer: slash commands and hooks

For workflows Boris repeats multiple times a day (commit, push, open PR, run tests), he creates slash commands stored in `.claude/commands/`. One command does what used to take five manual steps.

A post-tool-use hook automatically formats code after every edit. This catches the "last 10%" of formatting issues before they hit CI.

He also connects Claude to Slack, BigQuery, and Sentry via integrations. "I haven't written a line of SQL in 6+ months." Claude queries the data directly.

### The result: 259 PRs in 30 days, 2 bugs

Boris shipped 259 pull requests in a single month. Every line AI-written. 40,000 lines of code. 2 bugs (versus an estimated 20 if hand-coded). His setup is described by multiple sources as "surprisingly vanilla" and "surprisingly unremarkable." No exotic hacks. No secret prompts. Just discipline: plan, execute, verify, ship. Repeat 8-9 times per day.

### The maker/manager shift

Boris no longer needs deep focus blocks for coding. He tends to do hands-on coding on weekends when it's quiet. During the week, the workflow looks more like a manager's: context-switching across 10-15 parallel workstreams, reviewing output, making decisions, merging what's good, sending back what's not.

"Software engineers are becoming more like a manager style of working where you've got a fleet of these Claude Codes and you don't need deep focus to move forward. You need context switching across 20 different things."

## Lesson for Creators

The shift isn't just "use AI." It's a complete restructuring of how productive work happens:

- **Morning routine:** Start work from your phone before sitting at your desk. The productive day begins before the commute.
- **Parallel capacity:** Don't run one session. Run 10-15. Treat AI as a team you manage, not a tool you use.
- **Slow model, fast output:** Invest in the best model. The correction tax on cheap/fast output exceeds the compute tax on expensive/correct output.
- **Plan before executing:** Never let AI start coding before the plan is solid. The 10 minutes spent planning save hours of rework.
- **Verification is everything:** Give AI a way to check its own work. Without feedback loops, you get rough drafts. With them, you get finished work.
- **Compound your lessons:** Document what goes wrong. Every failure teaches the system, not just you. Over time, the system gets better without you doing anything.

---

## Related

- [[259 PRs in 30 Days, 2 Bugs - The Vanilla Setup]] -- prolific AI-powered output
- [[Daisy's 20-Claude Swarm Weekend]] -- parallel AI orchestration
- [[The Manager Who Codes Again]] -- creating in gaps between meetings
- [[Three Modes of Working With AI]] -- choosing the right mode for the task
