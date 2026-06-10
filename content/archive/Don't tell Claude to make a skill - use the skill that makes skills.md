---
title: "Don't tell Claude to make a skill - use the skill that makes skills"
type: atomic-essay
status: idea
pillar: AI
platforms: [linkedin, x]
seed_source: https://youtu.be/quYKZushRPo
sources:
  - https://youtu.be/quYKZushRPo
tags: [ai, claude-skills, skill-creator, meta-tool, workflow, curation]
created: 2026-06-02
---

# Don't tell Claude to make a skill - use the skill that makes skills

## Idea
Don't cold-prompt "create a skill" and hope; install Anthropic's free skill-creator skill, which bakes in the correct format so the output is a proper, reusable skill instead of a guess.

## Notes & Verified Quotes
> QUOTE: "I would install the skill creator skill" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=716
> QUOTE: "It's already built with best practices in mind on how to properly create" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=720
> QUOTE: "create a skill and expecting this like perfect output" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=726
> QUOTE: "use the skill creator skill to transform or repurpose this project into a into a skill markdown file" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=754
> QUOTE: "a clawed skill is essentially an SOP or a standard operating procedure for AI" — src: scratch/sources/claude-skills-side-hustle.txt | source: https://youtu.be/quYKZushRPo t=252

- Source: Ryan Dozer on The Kerner Office (TKO Pod). The process he recommends:
  1. Install the **skill-creator skill** from Anthropic's free GitHub skills repo.
  2. Open the Claude project that already holds the relevant context/chat history.
  3. Run the skill-creator on it: "transform/repurpose this project into a skill markdown file, keep the instructions, the memory, look at my recent chat history."
  4. It outputs a properly formatted skill `.md` you can copy/download/transfer.
- The whole point of the meta-tool: a skill is "an SOP for AI," and SOPs have a correct structure. Asking Claude cold to "make a skill" gets you something skill-shaped; the skill-creator gets you something that actually loads and behaves like one.
- Angle (mine): this is the boring, real lesson hiding under the "make money" headline. The leverage isn't prompting harder — it's using a tool whose only job is to encode best practices so you don't have to know them. The first skill worth having is the one that produces good skills.
- Caveat: "best practices baked in" still produces a generic skill; it's a scaffold, not a finished product. The context and judgment are still yours (see the sibling note on giving it your own style).

## Outline

## Draft — LinkedIn (master)

## Draft — X (variant)

## Final

## Related
- [[Building a Claude skill is a voice note and one sentence]] -- sibling from the same talk: the input method that feeds this meta-tool
- [[Build a Claude skill that rewrites itself when it's wrong]] -- sibling: what happens to the skill after the skill-creator produces it
- [[From Primitives to Domain Tools]] -- the skill-creator is itself a domain tool that bakes a best-practice format in, so the agent stops inventing its own
- [[Your years of expertise are one file away from being a product]] -- the skill-creator is the "how" behind producing that sellable file
