---
layout: page
title: Canonical Terminology
nav_title: Terms
permalink: /terms/
---

This page defines the authoritative vocabulary used across this research program — in articles, the book, talks, and reference architectures. Definitions here supersede earlier informal usage.

### Status legend

| Status | Meaning |
|---|---|
| **Foundational** | Core principles defining the initiative's long-term vision. Expected to remain stable for years. |
| **Canonical** | Official concepts, frameworks, or terminology formally introduced and recommended for use. |
| **Emerging** | Publicly introduced concepts that continue to evolve through research and feedback. |
| **Working** | Active research ideas under refinement — open for discussion, not yet stable. |
| **Experimental** | Early hypotheses or prototypes shared to stimulate discussion. |
| **Deprecated** | Historical terminology retained for context but no longer recommended. |

### Foundational concepts

**Engineering Trustworthy Industrial AI** — *Foundational*
An engineering discipline focused on designing Industrial AI systems that earn trust through engineering knowledge, grounded reasoning, decision governance, human accountability, and operational rigor.
{: #engineering-trustworthy-industrial-ai}

**Engineering Knowledge** — *Foundational*
The body of engineering expertise — standards, procedures, physical principles, operational practices, asset knowledge, failure mechanisms, and institutional experience — that provides the foundation for trustworthy Industrial AI.
{: #engineering-knowledge}

**Grounded Reasoning** — *Foundational*
Reasoning constrained by engineering knowledge, standards, physical principles, and operational context, rather than statistical correlation alone. Grounded reasoning precedes trustworthy operational decisions.
{: #grounded-reasoning}

### Canonical frameworks

**The Governed Decision Layer** — *Canonical* &middot; first introduced in [Volume I]({{ "/volume-i/" | relative_url }})
The architectural layer between reasoning and operational action, responsible for validating, governing, explaining, authorizing, and recording industrial decisions.
{: #governed-decision-layer}

**ASSET-grade** — *Canonical*
A benchmark describing Industrial AI outputs that are Auditable, Specific, Standards-aligned, Explainable, and Tested — tested meaning the output's grounds can be interrogated and the decision rehearsed before anyone commits. ASSET-grade is what makes an output deserve trust; trusted is the outcome it earns, not a letter in the benchmark. The acronym is fixed — additional letters should not be appended. *(Revised 2026-07-10: T previously read "Trusted"; changed to remove the circularity of defining trust by trust.)*
{: #asset-grade}

**Trustworthy Decision** — *Canonical*
A decision that is sufficiently grounded, explainable, governed, auditable, and operationally appropriate for industrial use. Trustworthiness is an emergent engineering property, not a model characteristic.
{: #trustworthy-decision}

**"Who Signs?"** — *Canonical*
A recurring design test asking whether responsibility for an AI-assisted operational decision has been clearly assigned. If nobody signs, the decision is not operationally ready.
{: #who-signs}

### Emerging concepts

**Earned Autonomy** — *Emerging*
The principle that autonomous capability should be granted progressively through demonstrated evidence of trustworthy performance. Autonomy is earned — not configured.
{: #earned-autonomy}

### Working concepts

**Deterministic Decision Envelope** — *Working*
A deterministic operational boundary surrounding non-deterministic AI reasoning, ensuring predictable and accountable operational commitments. This term refers to operational decisions — not deterministic AI.
{: #deterministic-decision-envelope}

### Reserved terms

The following are reserved for future research; definitions will be added when formally introduced.

Engineering Trust &middot; Industrial Decision Intelligence &middot; Decision Provenance &middot; Decision Ledger &middot; Engineering Memory &middot; Trust Calibration &middot; Industrial Cognitive Architecture &middot; Operational Confidence &middot; Engineering Assurance

---

Changes to canonical terminology follow the process described in [GOVERNANCE.md](https://github.com/trustworthy-industrial-decisions/trustworthy-industrial-decisions.github.io/blob/main/GOVERNANCE.md). Please cite the originating article or framework when referencing these terms.
