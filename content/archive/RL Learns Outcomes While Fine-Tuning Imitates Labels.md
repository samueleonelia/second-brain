---
title: RL Learns Outcomes While Fine-Tuning Imitates Labels
sources:
  - https://www.linkedin.com/pulse/stop-renting-your-intelligence-technical-guide-own-loop-goku-mohandas-bu8mf
  - https://x.com/gokumohandas/status/2066853420326384055
tags:
  - reinforcement-learning
  - fine-tuning
  - learning-loop
  - mlops
  - goku-mohandas
created: 2026-06-20
---

# RL Learns Outcomes While Fine-Tuning Imitates Labels

Goku Mohandas names "conflating fine-tuning with reinforcement learning" as the single biggest source of confusion in the "own your intelligence" conversation, and says the difference is the whole reason owning your loop matters.

Supervised fine-tuning (for example LoRA on collected data) is imitation: you hand the model a static dataset of (input, desired_output) pairs and it learns to reproduce the labels. The flaw is staleness. "The day your fraud patterns change, your product launches or your tool APIs evolve, the model is stale until you re-label and re-train." That relabeling is expensive and constant.

Reinforcement learning changes the target. "The model isn't learning to imitate examples but instead, it's learning to achieve outcomes." Crucially, the training signal regenerates itself: "Every new rollout, every chargeback, every passing test, every successful agent session generates fresh training signal automatically and this loop just keeps compounding." Mohandas frames it as one-shot versus cycle. A fine-tune is a snapshot that decays; an RL loop is a process that compounds with use, which is why it, not the fine-tune, is the thing worth owning.

## Related

- [[An RL Environment Is a Programmable Simulator of Your Business]] -- the structure RL trains inside (state, action, transition, reward); this note explains why that beats imitation
- [[The Moat Is the Learning Loop Not the Model]] -- "compounding with use" is exactly the property that turns a loop into IP a competitor can't rent
- [[Loops Make Sense Only With a Fixed Feedback Signal]] -- the reward is the objective signal; without it RL has nothing to optimize, the same boundary condition agent loops face
- [[AI doesn't make you replaceable, it makes everyone the same]] -- a fine-tune on a shared base drifts toward the same average; learning from your own outcomes is what diverges
- [[Give the Agent a Way to Verify Its Own Work]] -- Boris Cherny's coding-agent version of the same law: an RL reward is a verification signal, and quality tracks the feedback loop you build, not the worker's raw skill
