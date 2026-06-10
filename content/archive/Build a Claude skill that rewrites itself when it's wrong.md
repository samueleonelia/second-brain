---
title: "Build a Claude skill that rewrites itself when it's wrong"
type: atomic-essay
status: drafting
pillar: Automation
platforms: [linkedin, x]
seed_source: https://youtu.be/quYKZushRPo
sources:
  - https://youtu.be/quYKZushRPo
  - https://www.youtube.com/watch?v=wQ0duoTeAAU
  - https://www.mager.co/blog/2026-03-14-autoresearch-pattern/
  - https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it
  - https://github.com/karpathy/autoresearch
tags: [automation, claude-skills, self-updating, compounding, karpathy, curation]
created: 2026-06-02
---

# Build a Claude skill that rewrites itself when it's wrong

## Idea
A Claude skill isn't a static file; when its output is off you correct it once and it rewrites itself so it never repeats the mistake, and it can do this automatically in the background.

## Notes & Verified Quotes
> QUOTE: "they update in real time" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=495
> QUOTE: "you tell it to make changes and right there on the spot, it updates that skill where it will never make those mistakes again" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=505
> QUOTE: "you can have an automatic skill updating system where you don't have to take that extra step and say update the skill" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=514
> QUOTE: "It'll just automatically update the skill for you in the background" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=519

- Source: Ryan Dozer on The Kerner Office (TKO Pod). The part of the creation process people miss: the skill keeps changing after you make it.
  - Manual loop: while using a skill, when something's off you tell it to fix it, and it edits the skill itself so the mistake doesn't recur.
  - Auto loop: he name-checks "Karpathy's auto research" style — an automatic skill-updating system that revises the skill in the background, no explicit "update the skill" step.
- (Attribution note: Dozer credits Andrej Karpathy as the inspiration for the auto-updating idea; the host confirms the name. Treat "Karpathy's auto research" as Dozer's framing, not a formal product.)
- Angle (mine): this reframes a skill from a document you write to a system that learns. A normal prompt forgets your correction the moment the chat ends; a skill that rewrites itself turns every correction into a permanent upgrade. That's the difference between re-explaining yourself forever and teaching once.
- Honest tension: "auto-updates in the background" is exactly the set-and-forget promise that usually backfires. A skill silently rewriting itself can drift or bake in a wrong "fix." Someone still has to judge whether the update was right - the human belongs on both ends.

### Research — corroboration & mechanism (added /ae-research)

**The "Karpathy auto research" reference is real and verifiable.** Dozer's offhand name-drop checks out: Andrej Karpathy open-sourced `autoresearch` (~March 2026). The README quote, sourced via mager.co:
> QUOTE: "The core idea is that you're not touching any of the Python files like you normally would as a researcher. Instead, you are programming the program.md Markdown files" — src: scratch/sources/karpathy-autoresearch-mager.txt | source: https://www.mager.co/blog/2026-03-14-autoresearch-pattern/
- The autoresearch loop in one line: an agent makes one change, runs a fixed test, keeps it if a single metric improved, reverts if not, and loops while you sleep. Three files: `prepare.py` (read-only), `train.py` (the one file the agent edits), `program.md` (the file *you* edit).
- The bridge to skills is explicit: Karpathy calls `program.md` a "super lightweight skill," and a skill (`SKILL.md`) is the same kind of file. So the maintenance loop is: swap `train.py` for `SKILL.md` and the metric for an eval score.
> QUOTE: "skills are agent instructions — so you'd have an agent improving the instructions that other agents follow" — src: scratch/sources/karpathy-autoresearch-mager.txt | source: https://www.mager.co/blog/2026-03-14-autoresearch-pattern/
> QUOTE: "the human's job shifts from doing the research to writing the program" — src: scratch/sources/karpathy-autoresearch-mager.txt | source: https://www.mager.co/blog/2026-03-14-autoresearch-pattern/

**A second creator demonstrates the exact self-improving-skill loop** (YouTube, "Build Self-Improving Claude Code Skills"). Frames the manual pain Dozer describes, then automates it Karpathy-style:
> QUOTE: "you run the skill, you spot something wrong, you open up the skill.md file and make a change, and it's pretty repetitive. It's slow and it's inconsistent" — src: scratch/sources/self-improving-claude-skills.txt | source: https://www.youtube.com/watch?v=wQ0duoTeAAU t=12
> QUOTE: "You give an AI system something to improve and one clear way to measure if it got better. Then it just loops." — src: scratch/sources/self-improving-claude-skills.txt | source: https://www.youtube.com/watch?v=wQ0duoTeAAU t=29
> QUOTE: "if the results improves, it keeps the change. If not, it rolls it back and tries something else" — src: scratch/sources/self-improving-claude-skills.txt | source: https://www.youtube.com/watch?v=wQ0duoTeAAU t=39
> QUOTE: "it keeps going all night so you get to sleep and wake up to a better system" — src: scratch/sources/self-improving-claude-skills.txt | source: https://www.youtube.com/watch?v=wQ0duoTeAAU t=44
- Key mechanism detail: the loop needs a **measurable** signal. He uses binary true/false assertions (e.g. "under 300 words," "no em dashes," "final line isn't a question") so the agent can score itself. The honest limit, in his own words:
> QUOTE: "The binary loop handles structure, format, word counts, forbidden patterns, but it does not handle tone of voice, creative quality" — src: scratch/sources/self-improving-claude-skills.txt | source: https://www.youtube.com/watch?v=wQ0duoTeAAU t=605
> QUOTE: "Those still need a bit of human judgment." — src: scratch/sources/self-improving-claude-skills.txt | source: https://www.youtube.com/watch?v=wQ0duoTeAAU t=615

**The serious-engineering version of the same idea = "compounding engineering"** (Kieran Klaassen, Every / Cora). This is the credibility anchor: not a side-hustle pitch but a shipping team's practice.
> QUOTE: "every pull request teaches the system, every bug becomes a permanent lesson, and every code review updates the defaults" — src: scratch/sources/compounding-engineering-every.txt | source: https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it
> QUOTE: "Create systems that create systems, then get out of the way." — src: scratch/sources/compounding-engineering-every.txt | source: https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it
> QUOTE: "Every bug fix feels half-done if it doesn't prevent its entire category going forward" — src: scratch/sources/compounding-engineering-every.txt | source: https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it
> QUOTE: "Claude had learned from three prior months of code reviews and applied those lessons without being asked" — src: scratch/sources/compounding-engineering-every.txt | source: https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it

**Candidate angles for the outline:**
1. *Teach once, not forever* (recommended). The contrast that lands: a normal prompt forgets your correction at the end of the chat; a self-rewriting skill turns one correction into a permanent rule. Lead with the relatable pain (re-explaining the same fix), pay off with the loop. Strongest because every reader has re-corrected an AI.
2. *You need a number, not a vibe.* The mechanism angle: self-improvement only works where "better" is measurable (binary assertions). Honest and practical, separates this from hype, but more technical and less emotional.
3. *Set-and-forget is a trap, even here.* The contrarian angle: an auto-updating skill is the seductive "set it and forget it," and it still needs a human to judge the fix. Differentiates from the breathless "improves while you sleep" takes; pairs with [[Your automation isn't set and forget, every agent needs a human on both ends]].

**Attribution plan for the essay:** lead-credit can go to Karpathy (autoresearch / "program.md is a skill") as the origin of the loop, with Kieran Klaassen / Every's "compounding engineering" as the proof it works on real shipping teams. Ryan Dozer is the seed but the weakest citation; use Karpathy + Every as the spine.

**Where evidence is thin:** Dozer's specific "Karpathy's auto research" phrasing is loose (it's his framing of the pattern, not a named Anthropic feature). No primary Karpathy quote was captured from his own page — the verbatim README line is quoted via mager.co, so attribute as "via" that source unless the README is fetched directly later.

## Outline
**Headline:** Your AI forgets every correction. Build a skill that doesn't.
**Variant:** relay-an-idea (relaying Karpathy's autoresearch loop + Kieran Klaassen / Every's "compounding engineering"; Ryan Dozer is the seed but the weakest citation, so the spine is Karpathy + Every)
**Hook pattern:** 7. The reframe — open by reframing "AI keeps making the same mistake" into "your correction never gets saved." Draft first line: "You don't have a prompting problem. Your AI just has no memory."
**Key points:**
1. **The real cost is repetition, not the mistake.** A normal chat forgets your fix the second the session ends, so you re-teach the same thing forever. — draws on: "you run the skill, you spot something wrong, you open up the skill.md file and make a change, and it's pretty repetitive. It's slow and it's inconsistent" (self-improving-skills creator, YouTube wQ0duoTeAAU); contrast with Every's framing that the alternative is a system where every correction sticks.
2. **A skill is an editable file, so a correction can be written back as a permanent rule.** This is the borrowed idea + credit: Andrej Karpathy's autoresearch loop (change → test → keep if better, revert if not), and his line that program.md is itself a skill. — draws on: "The core idea is that you're not touching any of the Python files like you normally would as a researcher. Instead, you are programming the program.md Markdown files" (Karpathy, via mager.co); "Create systems that create systems, then get out of the way." (Kieran Klaassen, Every). Credit by name to both.
3. **It compounds: every correction makes the next run better.** The payoff line of curation here is Klaassen's. — draws on: "every pull request teaches the system, every bug becomes a permanent lesson, and every code review updates the defaults" (Kieran Klaassen, Every); reinforce with "it keeps going all night so you get to sleep and wake up to a better system" (YouTube wQ0duoTeAAU).
4. **Honest catch: it only self-improves where "better" is measurable.** My angle adds the limit the hype skips: structure/format yes, taste no. — draws on: "The binary loop handles structure, format, word counts, forbidden patterns, but it does not handle tone of voice, creative quality" + "Those still need a bit of human judgment." (YouTube wQ0duoTeAAU); ties to [[Your automation isn't set and forget, every agent needs a human on both ends]].
**Takeaway/CTA:** Stop re-explaining yourself to AI. Write the correction into the skill once, give it a clear way to measure "better," and let your fixes compound while you sleep.

## Draft — LinkedIn (master)
Is your AI repeating the same mistake every other day?
I did a bit of research on this, and the most common cause is the memory. Or the lack of it.

You fix the error, but then the chat ends, and the lesson is gone. And tomorrow we have to type it again.

That is the real cost. Not the mistake. The re-explaining.

A creator who builds Claude skills described the loop plainly: ["it's pretty repetitive, it's slow, and it's inconsistent"](https://www.youtube.com/watch?v=wQ0duoTeAAU).

𝗦𝘁𝗼𝗽 𝗰𝗼𝗿𝗿𝗲𝗰𝘁𝗶𝗻𝗴 𝘁𝗵𝗲 𝗼𝘂𝘁𝗽𝘂𝘁. 𝗖𝗼𝗿𝗿𝗲𝗰𝘁 𝘁𝗵𝗲 𝗳𝗶𝗹𝗲.

A skill is just a markdown file of instructions. So a correction can be written back into it as a permanent rule.

Andrej Karpathy's autoresearch loop does exactly this: the agent makes one change, tests it, keeps it if a number improved, reverts if not. In his words, ["you are programming the program.md Markdown files"](https://www.mager.co/blog/2026-03-14-autoresearch-pattern/) instead of redoing the work yourself.

𝗧𝗵𝗲 𝗽𝗮𝘆𝗼𝗳𝗳 𝗶𝘀 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗰𝗼𝗺𝗽𝗼𝘂𝗻𝗱𝘀.

Kieran Klaassen's team at Every calls it compounding engineering, where ["every pull request teaches the system, every bug becomes a permanent lesson, and every code review updates the defaults"](https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it). Each fix makes the next run better. ["Create systems that create systems, then get out of the way"](https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it).

𝗧𝗵𝗲 𝗰𝗮𝘁𝗰𝗵: 𝗶𝘁 𝗼𝗻𝗹𝘆 𝘄𝗼𝗿𝗸𝘀 𝘄𝗵𝗲𝗿𝗲 *𝗯𝗲𝘁𝘁𝗲𝗿* 𝗶𝘀 𝗺𝗲𝗮𝘀𝘂𝗿𝗮𝗯𝗹𝗲.

A self-improving loop needs a clear yes/no test. Word count, forbidden phrases, structure: easy. Tone and taste: ["Those still need a bit of human judgment"](https://www.youtube.com/watch?v=wQ0duoTeAAU).

So write the fix into the skill once. Give it a way to measure *better*. Then let your corrections compound while you sleep.

(Idea relayed from Andrej Karpathy's autoresearch and Kieran Klaassen's compounding engineering at Every.)

## Draft — X (variant)
Thread:

1/ You don't have a prompting problem. Your AI just has no memory.

You fix the same mistake every week. The chat ends. The lesson is gone. Tomorrow you type it again.

The real cost isn't the mistake. It's the re-explaining.

2/ A creator who builds Claude skills said it plainly: ["it's pretty repetitive, it's slow, and it's inconsistent"](https://www.youtube.com/watch?v=wQ0duoTeAAU).

3/ The fix: stop correcting the output. Correct the file.

A skill is just a markdown file of instructions. A correction can be written back into it as a permanent rule.

4/ Andrej Karpathy's autoresearch loop: the agent makes one change, tests it, keeps it if a number improved, reverts if not. ["you are programming the program.md Markdown files"](https://www.mager.co/blog/2026-03-14-autoresearch-pattern/) instead of redoing the work.

5/ The payoff compounds. Kieran Klaassen (Every) calls it compounding engineering: ["every pull request teaches the system, every bug becomes a permanent lesson, and every code review updates the defaults"](https://every.to/source-code/my-ai-had-already-fixed-the-code-before-i-saw-it).

6/ The catch: it only works where *better* is measurable. Word count and structure, easy. Tone and taste? ["Those still need a bit of human judgment"](https://www.youtube.com/watch?v=wQ0duoTeAAU).

7/ Write the fix into the skill once. Give it a way to measure *better*. Let your corrections compound while you sleep.

(Idea via Andrej Karpathy + Kieran Klaassen / Every.)

## Final

## Related
- [[Don't tell Claude to make a skill - use the skill that makes skills]] -- sibling from the same talk: how the skill gets created in the first place
- [[Building a Claude skill is a voice note and one sentence]] -- sibling: the creation step this maintenance loop runs on top of
- [[Automate Your Code Reviews - The Lint Rule Spreadsheet]] -- the same compounding pattern: each recurring correction becomes a permanent, automated rule ("free leverage")
- [[The context.md Pattern for Agent Memory]] -- a growing context file that makes every later run smarter; the hand-curated cousin of an auto-updating skill
- [[Your automation isn't set and forget, every agent needs a human on both ends]] -- the honest counterweight: even a self-updating skill needs a human to judge when its "fix" is actually wrong
