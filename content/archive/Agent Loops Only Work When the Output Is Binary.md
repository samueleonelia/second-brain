---
title: "Agent Loops Only Work When the Output Is Binary"
type: atomic-essay
status: ready
pillar: AI
platforms: [linkedin, x]
seed_source: https://youtu.be/7clJ8IH784Q
sources:
  - https://youtu.be/7clJ8IH784Q
  - https://www.youtube.com/watch?v=SlGRN8jh2RI
  - https://ghuntley.com/loop/
  - https://www.humanlayer.dev/blog/brief-history-of-ralph
  - https://the-decoder.com/for-1-3-million-a-month-openclaw-founder-peter-steinberger-runs-100-ai-agents-that-code-review-prs-and-find-bugs/
tags: [ai-coding, loops, feedback-loops, agentic, ras-mic, greg-isenberg]
created: 2026-06-11
---

# Agent Loops Only Work When the Output Is Binary

## Idea
Autonomous agent loops succeed only in confined processes with a fixed, objective feedback signal (a score, a pass/fail); for creative work like building a product there is no signal to loop against, so the human stays in the loop.

## Notes & Verified Quotes
> QUOTE: "the only place a loop makes sense is in a very confined, constrained process with a very fixed feedback loop" — src: scratch/sources/ai-agent-loops-genius-or-hype.txt | source: https://youtu.be/7clJ8IH784Q t=1003
> QUOTE: "where the output is binary, meaning black or white with no creativity, there is a room for loops" — src: scratch/sources/ai-agent-loops-genius-or-hype.txt | source: https://youtu.be/7clJ8IH784Q t=1195
> QUOTE: "loops just don't make sense right now, especially for building apps. They make sense for code review" — src: scratch/sources/ai-agent-loops-genius-or-hype.txt | source: https://youtu.be/7clJ8IH784Q t=1066
> QUOTE: "Human in the loop is the best loop." — src: scratch/sources/ai-agent-loops-genius-or-hype.txt | source: https://youtu.be/7clJ8IH784Q t=1308

- Attribution: Ras Mic (guest) on Greg Isenberg's Startup Ideas Podcast. The "binary output" framing is Greg's synthesis; the "confined constrained process" boundary is Mic's.
- The working example: code review with a scored reviewer (Greptile gives a score out of five) — the loop has a number to optimize against. SEO page generation at scale is the other cited fit (300 templated pages, did-the-job-or-didn't).
- The anti-example: building an app. Mic says he can't fully visualize the product in the moment, so there is no fixed signal, only taste in the human's head. The agent fills gaps with assumptions and most of them miss.
- Angle for the essay: the test to run before automating anything with a loop is "can I write down the success signal as a number or a pass/fail?" If not, it's a human-in-the-loop task. This maps directly to client automation work: invoice matching loops, content QA loops yes; "build my funnel" loops no.

### Research dossier (added 2026-06-11, /ae-research)

**The pro-loop side actually confirms the criterion (Boris Cherny, creator of Claude Code, Sequoia talk):**
> QUOTE: "I sort of feel like loops are the future at this point. If you haven't experimented with it, highly highly recommend it." — src: scratch/sources/boris-cherny-coding-solved.txt | source: https://www.youtube.com/watch?v=SlGRN8jh2RI t=515
> QUOTE: "I have one that's babysitting my PRs, like fixing CI, auto-rebasing. I have another one that keeps CI healthy." — src: scratch/sources/boris-cherny-coding-solved.txt | source: https://www.youtube.com/watch?v=SlGRN8jh2RI t=498
> QUOTE: "I have another one that grabs uh feedback from Twitter and kind of clusters it for me every 30 minutes." — src: scratch/sources/boris-cherny-coding-solved.txt | source: https://www.youtube.com/watch?v=SlGRN8jh2RI t=509
> QUOTE: "it can just hill climb anything. So, if you give it a target and you tell it to iterate until it's done, it will just do it." — src: scratch/sources/boris-cherny-coding-solved.txt | source: https://www.youtube.com/watch?v=SlGRN8jh2RI t=713

- Key observation: every loop Boris actually runs is a confined task with a checkable outcome (CI green, PR rebased, feedback clustered). And his own formula starts with "if you give it a target". Even the loudest pro-loop voice presupposes a fixed signal. The essay can use Boris as confirmation, not as the villain.

**The Ralph loop creator says the same thing from the other side (Geoffrey Huntley, "everything is a ralph loop", Jan 2026):**
> QUOTE: "performs one task per loop" — src: scratch/sources/ghuntley-everything-is-a-ralph-loop.txt | source: https://ghuntley.com/loop/
> QUOTE: "Ralph is an orchestrator pattern where you allocate the array with the required backing specifications and then give it a goal then looping the goal." — src: scratch/sources/ghuntley-everything-is-a-ralph-loop.txt | source: https://ghuntley.com/loop/
> QUOTE: "When you see a failure domain – put on your engineering hat and resolve the problem so it never happens again." — src: scratch/sources/ghuntley-everything-is-a-ralph-loop.txt | source: https://ghuntley.com/loop/
> QUOTE: "300 lines of code running in a loop with LLM tokens. You just keep throwing tokens at the loop, and then you've got yourself an agent." — src: scratch/sources/ghuntley-everything-is-a-ralph-loop.txt | source: https://ghuntley.com/loop/

- Huntley also insists "It's important to watch the loop" (engineer stays present). Ralph is not fire-and-forget in its creator's hands: one task per loop, backed by specifications, watched.

**Field-tested boundary from a Ralph practitioner (Dex Horthy, HumanLayer, "A Brief History of Ralph"):**
> QUOTE: "if the specs are bad, the results will be meh" — src: scratch/sources/humanlayer-brief-history-of-ralph.txt | source: https://www.humanlayer.dev/blog/brief-history-of-ralph
> QUOTE: "if you are iterating/exploring, you probably don't want ralph in the first place" — src: scratch/sources/humanlayer-brief-history-of-ralph.txt | source: https://www.humanlayer.dev/blog/brief-history-of-ralph
> QUOTE: "carve off small bits of work into independent context windows" — src: scratch/sources/humanlayer-brief-history-of-ralph.txt | source: https://www.humanlayer.dev/blog/brief-history-of-ralph
> QUOTE: "dumb things can work surprisingly well" — src: scratch/sources/humanlayer-brief-history-of-ralph.txt | source: https://www.humanlayer.dev/blog/brief-history-of-ralph
> QUOTE: "Waking up to one small refactor every morning is better than both a) waking up to none and b) waking up to 50." — src: scratch/sources/humanlayer-brief-history-of-ralph.txt | source: https://www.humanlayer.dev/blog/brief-history-of-ralph

- Dex's GTD-app experiment is the perfect anti-example: he ralphed specs AND implementation without reading either, output "sucked" because he was exploring (no defined end state = no signal). His refactor experiment worked: a written REACT_CODING_STANDARDS.md was the fixed signal. Same person, same tool, opposite outcomes, only the feedback signal changed.

**Token-budget supporting context (THE DECODER on Peter Steinberger / OpenClaw):**
> QUOTE: "In 30 days, the OpenAI API bill hit $1.3 million for 603 billion tokens and 7.6 million requests." — src: scratch/sources/decoder-steinberger-100-agents.txt | source: https://the-decoder.com/for-1-3-million-a-month-openclaw-founder-peter-steinberger-runs-100-ai-agents-that-code-review-prs-and-find-bugs/
> QUOTE: "he's exploring how software would be built if token costs didn't matter" — src: scratch/sources/decoder-steinberger-100-agents.txt | source: https://the-decoder.com/for-1-3-million-a-month-openclaw-founder-peter-steinberger-runs-100-ai-agents-that-code-review-prs-and-find-bugs/
> QUOTE: "Turning off "Fast Mode" alone, he says, would cut costs by 70 percent." — src: scratch/sources/decoder-steinberger-100-agents.txt | source: https://the-decoder.com/for-1-3-million-a-month-openclaw-founder-peter-steinberger-runs-100-ai-agents-that-code-review-prs-and-find-bugs/

- Facts: ~100 Codex instances, 3-person team, OpenAI pays the bill; the agents' jobs are again confined-signal tasks (review PRs, find security holes, dedupe issues, monitor benchmarks). Folded-in angle from the sibling note [[Stop Copying AI Workflows From People With Unlimited Tokens]]: without Steinberger's budget, a loop with no fixed signal is a slot machine; with a fixed signal, even a retail budget buys convergence because the loop knows when to stop.

**Attribution correction (factual):** the Startup Ideas Podcast guest is **Ras Mic** (Professor Ras Mic, x.com/Rasmic, youtube.com/@rasmic); auto-captions render it "Ross Mike". The review tool is **Greptile** (captions: "Gravile/Grapile"). Episode published June 9, 2026. Source: scratch/sources/startup-ideas-pod-loop-episode-description.txt.

**Candidate angles for the outline:**
1. The criterion, triangulated: skeptic (Mic), believer (Boris), and inventor (Huntley) all converge on the same boundary — a loop needs a target it can check. Strongest version: use the believer's own words as proof.
2. The same-person experiment: Dex's two Ralph runs (exploring → failure, written standard → success) as the cleanest natural experiment for the one idea.
3. The cost multiplier as stakes: with no signal the loop burns Steinberger-grade money for slot-machine odds; the binary test is what makes loops affordable for everyone else.

## Outline
**Headline:** Before you run an AI agent in a loop, ask one question: can a machine score the result?
**Variant:** relay-an-idea
**Hook pattern:** 9. The borrowed insight, in reliable-researcher voice — open with the viral quote (loops are the future), then "I traced it to its sources". Frame: claim going around → I did the research → findings (what's true, what's hype) → my verdict/test.
**Key points:**
1. **The criterion (borrowed idea + credit):** Ras Mic, on Greg Isenberg's Startup Ideas Podcast, draws the boundary: a loop only makes sense in "a very confined, constrained process with a very fixed feedback loop" — Greg's synthesis: where output is binary, there's room for loops. The working case is code review: Greptile scores every push out of five, the loop optimizes against the number. — draws on: Mic quotes t=1003, t=1195 (seed source) + Greg's "binary" quote.
2. **The believer confirms it:** Boris Cherny (creator of Claude Code) says "loops are the future", but every loop he runs is a machine-checkable chore — babysitting PRs, fixing CI, clustering Twitter feedback — and his own formula starts with "if you give it a target". — draws on: Boris quotes t=515, t=498, t=713 (Sequoia talk).
3. **The natural experiment:** Dex Horthy (HumanLayer) ran the same Ralph loop twice. Exploring a GTD app with no defined end state: output sucked ("if you are iterating/exploring, you probably don't want ralph in the first place"). Refactoring against a written coding standard: it worked. Same person, same tool; only the feedback signal changed. — draws on: HumanLayer quotes.
4. **The stakes + the test (my angle):** without a score, the loop fills gaps with assumptions and burns money — Peter Steinberger's signal-rich agent fleet costs $1.3M a month and OpenAI pays the bill; you don't have that backstop. So before automating anything, write the success signal as a number or a pass/fail. If you can't, that job still needs a human in the loop. — draws on: decoder quote ($1.3M / 30 days) + Mic "Human in the loop is the best loop." t=1308.
**Takeaway/CTA:** Write the success signal as a number before you launch any loop. Can't? Then it's your job, not the agent's. (closing question to readers: which process in your work could a machine already grade?)

## Draft — LinkedIn (master)

["Loops are the future"](https://www.youtube.com/watch?v=SlGRN8jh2RI)  this quote from the creator of Claude Code is all over my feed this week.

Strong claim. Before resharing it, I traced it back: the original talk, the daily practitioners, the failed experiments.

Three findings.

𝟭. 𝗧𝗵𝗲 𝗯𝗲𝗹𝗶𝗲𝘃𝗲𝗿'𝘀 𝗹𝗼𝗼𝗽𝘀 𝗮𝗹𝗹 𝗵𝗮𝘃𝗲 𝗮 𝘀𝗰𝗼𝗿𝗲.
In the full talk, Boris Cherny lists his actual loops: babysitting pull requests, fixing CI, clustering Twitter feedback. Every one is a chore a machine can grade. The reshares skip this detail.

𝟮. 𝗧𝗵𝗲 𝘀𝗸𝗲𝗽𝘁𝗶𝗰 𝗻𝗮𝗺𝗲𝘀 𝘁𝗵𝗲 𝗰𝗿𝗶𝘁𝗲𝗿𝗶𝗼𝗻.
Ras Mic, on Greg Isenberg's Startup Ideas Podcast: the only place a loop makes sense is ["a very confined, constrained process with a very fixed feedback loop"](https://youtu.be/7clJ8IH784Q). His daily case is code review, where Greptile scores every push out of five. The loop has a number to climb.

𝟯. 𝗧𝗵𝗲 𝗳𝗶𝗲𝗹𝗱 𝘁𝗲𝘀𝘁 𝗰𝗼𝗻𝗳𝗶𝗿𝗺𝘀 𝗶𝘁.
Dex Horthy of HumanLayer ran the same autonomous loop twice. Exploring an app with no defined end state: a mess. Refactoring against a written coding standard: it worked. His words: ["if you are iterating/exploring, you probably don't want ralph in the first place"](https://www.humanlayer.dev/blog/brief-history-of-ralph).

𝗠𝘆 𝘃𝗲𝗿𝗱𝗶𝗰𝘁: the claim is half true.
Loops are real, but they pay off only where a machine can score the result. Without that score, the agent guesses and burns tokens. Fine when you are Peter Steinberger and OpenAI covers your $1.3M monthly bill. Nobody covers yours.

My test from now on: write the success signal as a number or pass/fail before launching any loop. If I can't, the job stays human. As Mic puts it: ["Human in the loop is the best loop"](https://youtu.be/7clJ8IH784Q).

Which viral claim should I trace next?

Sources: Boris Cherny at Sequoia · Ras Mic on the Startup Ideas Podcast · Dex Horthy, HumanLayer

## Draft — X (variant)

Thread:

1/ Everyone is resharing the Claude Code creator's line that ["loops are the future"](https://www.youtube.com/watch?v=SlGRN8jh2RI). I traced the claim to its sources. It is half true.

2/ Finding 1: in the full talk, Boris Cherny's own loops are all gradeable chores — babysitting PRs, fixing CI, clustering feedback. The reshares skip that detail.

3/ Finding 2: Ras Mic names the criterion. Loops only make sense in ["a very confined, constrained process with a very fixed feedback loop"](https://youtu.be/7clJ8IH784Q). His case: code review, scored out of five by Greptile.

4/ Finding 3: Dex Horthy ran the same loop twice. No defined end state: a mess. A written coding standard as the target: it worked. ["if you are iterating/exploring, you probably don't want ralph in the first place"](https://www.humanlayer.dev/blog/brief-history-of-ralph)

5/ Verdict: loops pay off only where a machine can score the result. No score means guesses and token burn. Steinberger's fleet costs $1.3M a month, covered by OpenAI. Yours isn't.

6/ My test: write the success signal as a number before launching any loop. Can't? Then ["Human in the loop is the best loop"](https://youtu.be/7clJ8IH784Q) — Ras Mic, on Greg Isenberg's Startup Ideas Podcast.

## Final

**LinkedIn (master):**

"Loops are the future": this quote from Boris is all over my feed this week. And as of today I call it over-hype

First of all, for Boris Cherny and Peter Steinberger (the other big cantor of the loops) exploring the most extreme use cases of AI agent is their job and they don't have real limits on the number of tokens they consume.

If you try to run multiple loops, I would predict significant costs before you achieve valid results.

When it comes to regular users, the best approach seems the one defined by Ras Mic: "the only place a loop makes sense is in a very confined constrained process with a very fixed feedback loop". His example is code review, where Greptile (an AI-powered code review agent) analyzes and scores every push. If it's not good enough, the loop send it back to the coding agent that has to fix it and re-submit it for evaluation.

Loops are real, but they pay off only where a machine can score the result. Without that score, the agent guesses and burns tokens. 



## Related
- [[Loops Make Sense Only With a Fixed Feedback Signal]] -- the permanent note distilling this exact argument from the same episode; the essay relays it
- [[Give the Agent a Way to Verify Its Own Work]] -- Boris Cherny's verify principle is the same law from the builder's side: delegated quality tracks the feedback loop
- [[A Plan Document Can't Hold Your Product Vision]] -- why the creative case fails: the missing signal is judgment that no spec.md can carry
- [[Everyone Says Loop, Nobody Defines It]] -- the definitional confusion this essay cuts through with one criterion
- [[The One Agent Loop Worth Copying Scores Its Own Work]] -- sibling essay candidate: this note is the criterion, that one is the concrete case
- [[Morning Agents from the Phone - Boris's Full Daily AI Workflow]] -- the believer's actual loops (finding 1 of the essay): every one is a gradeable chore
- [[Loops Are Priced for Unlimited Token Budgets]] -- the stakes in the verdict: without a fixed signal, only a Steinberger-grade budget survives the guessing
