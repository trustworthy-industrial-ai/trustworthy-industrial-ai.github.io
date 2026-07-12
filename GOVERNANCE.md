| Status           | Meaning                                                                                                                                             | Stability | Can change?                        |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ---------------------------------- |
| **Foundational** | Core principles that define the long-term vision and identity of the research initiative. Expected to remain stable for many years.                 | Very High | Rarely                             |
| **Canonical**    | Officially adopted concepts, frameworks, terminology, or architectural patterns that have been formally introduced and are recommended for use.     | High      | Occasionally, with version history |
| **Emerging**     | Concepts that have been introduced publicly but are still evolving through research, feedback, and practical application.                           | Medium    | Yes                                |
| **Working**      | Active research ideas under development. Shared to stimulate discussion but not yet recommended as stable terminology.                              | Low       | Frequently                         |
| **Experimental** | Early hypotheses, prototypes, or speculative ideas. Included for transparency and collaboration, but should not be treated as established guidance. | Very Low  | Expected                           |
| **Deprecated**   | Concepts or terminology retained for historical context but no longer recommended for new work.                                                     | Frozen    | No                                 |


# Versioning Policy

The Engineering Trustworthy Industrial Decisions in the Age of AI research initiative treats ideas, frameworks, and reference architectures as evolving engineering artifacts.

Each major artifact (framework, terminology, reference architecture, research volume, etc.) maintains an independent version number.

Version numbers communicate the maturity of the artifact—not necessarily the maturity of the overall research program.

---

## Versioning Scheme

The project follows Semantic Versioning principles adapted for research.

### Major Version (X.0)

Increment when there are significant conceptual or structural changes that may affect previous interpretations.

Examples:

- A framework is substantially redesigned.
- Core terminology changes.
- Foundational assumptions change.

---

### Minor Version (1.X)

Increment when new concepts, examples, diagrams, or sections are added without changing the overall meaning.

Examples:

- New canonical terms.
- Additional case studies.
- Expanded reference architecture.

---

### Patch Version (1.0.X)

Increment for editorial improvements that do not change the technical meaning.

Examples:

- Typographical corrections.
- Improved wording.
- Updated references.
- Diagram formatting.

---

## Artifact Independence

Each artifact evolves independently.

Examples:

Engineering Trustworthy Industrial Decisions in the Age of AI
Version: 1.0

The Governed Decision Layer
Version: 1.2

ASSET-grade Framework
Version: 1.1

Reference Architecture
Version: 0.9 (Emerging)

---

## Status vs Version

Research Status and Version are independent.

Example:

Status: Canonical
Version: 1.3

or

Status: Emerging
Version: 0.7

Status describes research maturity.

Version describes artifact evolution.

---

## Change Log

Significant conceptual changes should be documented in the corresponding artifact's revision history.
