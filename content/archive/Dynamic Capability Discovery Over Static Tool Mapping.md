---
title: "Dynamic Capability Discovery Over Static Tool Mapping"
creator: dan-shipper
sources:
  - https://every.to/guides/agent-native
tags:
  - agent-native
  - tool-design
  - dynamic-discovery
  - external-apis
  - ai-agents
created: 2026-05-21
---

# Dynamic Capability Discovery Over Static Tool Mapping

## The Idea

Instead of building one tool per endpoint in an external API — `read_steps`, `read_heart_rate`, `read_sleep`, and 47 more — give the agent two tools and let it discover what's available at runtime:

```
list_available_types() → returns ["steps", "heart_rate", "sleep", ...]
read_data(type)         → reads any discovered type
```

When the API adds a new data type, the agent picks it up automatically. No code change required. The agent can access things you didn't anticipate when you shipped.

This is granularity taken to its logical conclusion. Tools become so atomic that they work with types you didn't know existed when you built them.

## When to Use This

- External APIs where you want the agent to have full user-level access (HealthKit, HomeKit, GraphQL endpoints)
- Systems that add capabilities over time
- Anywhere you want the agent to be able to do anything the API supports

## When Static Mapping Is Fine

- Intentionally constrained agents with a narrow scope
- Cases where you need tight control over exactly what the agent can access
- Simple APIs with stable, well-known endpoints

Let the API validate inputs rather than duplicating validation in your own enum definitions. You'll fall behind the API; the API won't fall behind itself.

---

## Related

- [[Granularity - Tools Are Atomic Primitives, Features Are Outcomes]] -- this is granularity at its most extreme
- [[Emergent Capability - Agents Do What You Didn't Design For]] -- dynamic discovery is what unlocks emergence against external APIs
- [[CRUD Completeness Audit for Every Entity]] -- with discovery, CRUD is enforced by the API rather than by your enum
- [[From Primitives to Domain Tools]] -- dynamic discovery delays the moment you need to graduate to domain tools
- [[Agent-Native Anti-Patterns - Router, Workflow Tools, Defensive Design]] -- "static mapping where dynamic would serve better" is the named anti-pattern this avoids
