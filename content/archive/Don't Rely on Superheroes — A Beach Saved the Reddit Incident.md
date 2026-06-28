---
title: "Don't Rely on Superheroes — A Beach Saved the Reddit Incident"
creator: matt-johansen
sources:
  - https://www.mattjay.com/blog/superhero-incident-response
  - https://www.tines.com/blog/podcast-reddit-matt-johansen/
tags:
  - incident-response
  - team-design
  - documentation
  - automation
  - resilience
  - leadership
created: 2026-05-26
---

# Don't Rely on Superheroes — A Beach Saved the Reddit Incident

## The Story

Matt's argument against single-point-of-failure security teams started in a Twitter thread, then became an essay. The thesis: "many are relying on a few individuals with specialized knowledge who act as their rock stars when shit hits the fan. This approach is not sustainable nor effective" (Source 1).

The fix has three components. Playbooks: "well documented playbooks for different incident types... detailed steps on how to declare an incident, what lines of communication need to be opened, how to quickly identify and contain what is going on, and finally how to eradicate the issue and recover" (Source 1). Automation via SOAR: "killing sessions across multiple platforms for a compromised account... automate huge swaths of incident response away with the push of a button by any team member, not just an expert" (Source 1). And a system of record: "What takes many teams hours, should take them minutes and anyone on the team should be able to look the info up without need for specialized superheroes" (Source 1).

The argument got a live test during Reddit's February 2023 security incident. One of Matt's most relied-on engineers — the kind he calls a "superhero" in the essay — was unreachable. "It was actually a blessing for us that one of our superheroes on our security team that winds up taking on a whole lot, was sitting on a beach with his family at the time of that incident, so we couldn't call him. That was a blessing honestly for us, because it was like, 'Hey, this is life without him, let's go'" (Source 2).

The takeaway he generalized from it: "Every team I've ever worked on has those superheroes that it's like, no matter what, you wind up calling that person - don't! Figure out how not to. They're gonna leave at some point" (Source 2).

Documentation was the other lever that mattered in the same incident: "Document the sh*t out of everything... It was a wake up in the middle of night situation. You have shifts. so you're handing off to next shift, 'cause you have to go take a nap. If you didn't write anything down that whole time, that handoff is gonna be super hard... I was incident command on this incident you're talking about, and the highest praise I got was, 'This running incident doc that you had just made everything so much easier'" (Source 2).

On automation, Matt is blunt about the timing: "If you don't have that automation before the incident, you're toast. These threat actors are very fast. They're very, very fast. I've read incident reports that said we had them shut down within 5 hours - too slow. Their goal was done in the first 30 min. Automate beforehand, practice before it happens" (Source 2).

## Lesson for Creators

The pattern generalizes well beyond incident response. Most small operations have a "superhero" — the one person who knows where the bodies are buried, holds the launch playbook in their head, is the only one who can fix the broken thing. They feel like an asset. They are a single point of failure. The right test isn't whether they're brilliant; it's whether the operation survives them going to the beach. If the answer is no, the operation has bought brittleness at the price of comfort. The fix is the same as Matt's: write down the playbook before you need it, automate the repeatable parts, and make information findable by anyone on the team. The superhero stays just as valuable — they just stop being load-bearing.

## Related

- [[The One-Person Media Empire]] -- Lenny Rachitsky: the opposite extreme — deliberate single-operator design — for contrast
- [[Mostly Media at Three Million With No Full-Time Employees]] -- CJ Gustafson: lean contractor-stack as another way to avoid load-bearing people
