---
title: Give the Agent a Way to Verify Its Own Work
sources:
  - https://arps18.github.io/posts/claude-code-mastery/
tags:
  - claude-code
  - verification
  - feedback-loops
  - ai-workflow
  - boris-cherny
created: 2026-06-11
---

# Give the Agent a Way to Verify Its Own Work

The single most-repeated piece of advice from Boris Cherny and the Claude Code team: "Give Claude a way to verify its output. Once you do that, Claude will iterate until the result is great." Without a verification loop (tests, type checks, a browser it can drive, a command whose exit code means success), the human is the only feedback signal, and every iteration has to pass through them. With one, the agent self-corrects until the work actually runs. Boris pegs this single move at a 2-3x quality improvement.

The same logic explains the guide's companion rule: never let the agent claim success without evidence such as test output, screenshots, or real command results. An agent that cannot verify is guessing; an agent that can verify is iterating.

The deeper principle generalizes beyond coding: the quality of delegated work tracks the quality of the feedback loop you build around it, not the raw skill of the worker.

## Related

- [[259 PRs in 30 Days, 2 Bugs - The Vanilla Setup]] -- the throughput that a tight verify loop makes possible: volume without quality collapse
- [[Compound Engineering - Only Document Mistakes]] -- the complementary loop: verification catches today's error, CLAUDE.md makes sure it never recurs
- [[Three Modes of Working With AI]] -- verification is what lets a task move from "pairing" toward autonomous mode safely
- [[Your automation isn't set and forget, every agent needs a human on both ends]] -- a self-verify loop shrinks the judging end of the human sandwich but never removes it
- [[Agent Loops Only Work When the Output Is Binary]] -- the boundary condition as essay candidate: verification needs an objective signal to exist at all
- [[The One Agent Loop Worth Copying Scores Its Own Work]] -- a full worked example of this principle: scored review as the verify step
- [[Loops Make Sense Only With a Fixed Feedback Signal]] -- the boundary condition for this principle: verification only delegates safely when the signal it checks against is objective
- [[RL Learns Outcomes While Fine-Tuning Imitates Labels]] -- the enterprise-scale version of "verification beats raw skill": an RL reward is a self-regenerating verify signal, so the loop compounds where a static fine-tune decays
