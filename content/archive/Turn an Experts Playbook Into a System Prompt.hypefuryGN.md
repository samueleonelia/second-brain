---
title: "Turn an Expert's Playbook Into a System Prompt"
pipeline: hypefuryGN-v1
creator: duncan-rogoff
identity_anchor: https://www.youtube.com/@duncanrogoff
mechanism: "Take a respected expert's proven framework (even a copy-protected one, captured via screenshots), have an LLM read and internalize it, then distill it into a reusable system prompt that powers all your content generation."
mechanism_tags: [reverse-engineer-winners, ai-pattern-analysis, borrow-proven-framework, system-prompt]
quotes:
  - text: "what I did is I just went ahead and I took a bunch of screenshots of every single one of these pages"
  - text: "You are an expert in social media, especially LinkedIn. I'm going to give you some images that describe what makes effective LinkedIn posts. I need you to thoroughly read and understand these, then wait for further instruction."
  - text: "You are an expert LinkedIn content strategist specializing in creating viral, highconverting LinkedIn posts. Your task is to transform any given topic and context into a compelling LinkedIn post that drives maximum engagement, builds authority, and generates leads."
tags: [ai-content, prompting, linkedin, creator-systems]
created: 2026-06-15
---

# Turn an Expert's Playbook Into a System Prompt

## The Story

Rather than invent a content formula, Duncan Rogoff borrowed a proven one. He took the LinkedIn authority playbook by Jesse Van Bugal, a creator with over 56,000 followers, and converted it into an AI system prompt. The playbook was locked down; you could not copy or download it. So he got around the restriction the manual way: _"what I did is I just went ahead and I took a bunch of screenshots of every single one of these pages."_

He fed the screenshots into Claude with a deliberately patient instruction, spending the entire first interaction on comprehension before asking for any output: _"You are an expert in social media, especially LinkedIn. I'm going to give you some images that describe what makes effective LinkedIn posts. I need you to thoroughly read and understand these, then wait for further instruction."_ It read 40 images across two batches. Only then did he ask it to compress the principles into a reusable agent prompt.

That distilled prompt became the engine of his entire posting system: _"You are an expert LinkedIn content strategist specializing in creating viral, highconverting LinkedIn posts. Your task is to transform any given topic and context into a compelling LinkedIn post that drives maximum engagement, builds authority, and generates leads."_ Every post his automation writes now runs through this captured framework, so a one-time study of one expert became a permanent, automatable asset.

## Lesson for Creators

You do not need to invent a content formula from scratch. Find one that already works, have an LLM read and internalize it in full before generating anything, then compress it into a system prompt you reuse on every piece. The leverage is converting a single careful study of an expert into a template that runs on autopilot forever after.

## Sources

- https://www.youtube.com/watch?v=jTtgPsLK6Yc

---

## Related (matched on mechanism)
- [[Reverse-Engineer Your Best Notes With AI]] — olivia-wickstrom, matched: reverse-engineer-winners, ai-pattern-analysis
