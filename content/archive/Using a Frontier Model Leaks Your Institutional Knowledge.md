---
title: Using a Frontier Model Leaks Your Institutional Knowledge
sources:
  - https://www.linkedin.com/pulse/stop-renting-your-intelligence-technical-guide-own-loop-goku-mohandas-bu8mf
  - https://x.com/gokumohandas/status/2066853420326384055
tags:
  - ai-strategy
  - vendor-lock-in
  - institutional-knowledge
  - reinforcement-learning
  - goku-mohandas
created: 2026-06-20
---

# Using a Frontier Model Leaks Your Institutional Knowledge

Goku Mohandas argues that every interaction with a rented frontier model is a one-way transfer of signal out of your company. The prompts, the traces, the edge cases, and the workflows you feed the model are exactly the data the lab uses to make the next model serve those situations better. As he puts it, "that alone helps the lab build its loop against yours."

The deepest version of the leak is the forward-deployed engineer (FDE) relationship, where labs embed engineers inside your company, build on your proprietary processes, and "gather exactly the context they need to construct reinforcement learning environments that improve the next generation of their models." Whether the touch is light (API calls) or deep (embedded engineers), Mohandas frames it the same way: "you are funding the extraction of your own institutional knowledge into a model you'll then keep renting."

He concedes this is rational in the short run on both sides: the lab gets the data to keep climbing the capability curve, and the customer gets scarce implementation expertise and fast ROI. But the long run has only two exits, get hooked renting back a model trained on traces of your own work, or learn to build the learning loop yourself.

## Related

- [[The Moat Is the Learning Loop Not the Model]] -- the positive move this risk motivates: capture your own traces into your own loop instead of donating them
- [[The Market Rewards Asymmetrical, Scarce Insight]] -- the scarce insight that is your moat is precisely what gets commoditized when you pipe it into a shared model
- [[AI doesn't make you replaceable, it makes everyone the same]] -- the homogenization mechanism: shared models trained on everyone's residue converge to sameness; this note shows you are one of the donors
- [[An RL Environment Is a Programmable Simulator of Your Business]] -- the asset the lab is trying to build from your context; you can build it in-house instead
