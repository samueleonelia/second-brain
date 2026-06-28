---
title: Hosting Is Table Stakes Extending Is the Moat
sources:
  - https://www.linkedin.com/pulse/stop-renting-your-intelligence-technical-guide-own-loop-goku-mohandas-bu8mf
  - https://x.com/gokumohandas/status/2066853420326384055
tags:
  - ai-strategy
  - open-source
  - self-hosting
  - moat
  - dario-amodei
  - goku-mohandas
created: 2026-06-20
---

# Hosting Is Table Stakes Extending Is the Moat

Goku Mohandas answers the most credible argument against owning your AI stack, Dario Amodei's claim that open source is "a red herring" because you still have to host the model, inference on big models is hard, and making it fast is real engineering. Mohandas concedes the surface mechanics are correct but rejects the "therefore just rent" conclusion, because it ignores three things.

First, the hosting problem now has well-mapped OSS solutions: Ray, vLLM, HuggingFace, KubeRay, SGLang have closed the gaps that were genuinely hard a year ago (xAI runs Grok Imagine on Ray; he cites DigitalOcean, Tripadvisor, Apple, BMW, Adobe). Second, the open models are genuinely good now (Qwen, Llama, DeepSeek, Mistral, Gemma, Kimi, NVIDIA Cosmos). Third, and the part the red-herring framing never addresses: "Hosting is now table stakes and extending is the moat." Once you can host a model you can post-train it on your own data, wrap it in an RL environment that rewards your outcomes, and build a loop that compounds with every use.

He adds a fourth point about ownership: the runtime has to be open, not just the weights. If the orchestration layer is proprietary "you've traded model lock-in for runtime lock-in." Real portability means your weights, your data, and your code run unchanged on whatever infrastructure you choose, which requires a community-owned OSS runtime underneath the production platform.

## Related

- [[The Moat Is the Learning Loop Not the Model]] -- "extending is the moat" is the engineering restatement of the strategic thesis: the loop, not the model, is the durable asset
- [[An RL Environment Is a Programmable Simulator of Your Business]] -- the specific way you "extend" once hosting is solved, and the thing the rented stack can't give you
- [[Own Your Embeddings Before You Own Your Model]] -- the most accessible first step up the extending staircase this note describes
- [[Loops Are Priced for Unlimited Token Budgets]] -- the cost lens: Mohandas argues renting is more expensive than owning at scale, which is what eventually forces the migration off rented APIs
