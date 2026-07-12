---
layout: post
title: "The Next Industrial Catastrophe Will Involve an Overconfident AI"
description: "It won't be the cause. It will be the reason nobody caught the cause. Why the cost of a confident wrong answer is not the same as the cost of a refusal — and why almost no AI system is built to know the difference."
author: "Dr. Sanjay K Prasad"
date: 2026-07-10 08:00:00 +0530
tags: [foundations]
excerpt_separator: <!--more-->
---



Every major industrial accident report has a chapter structure you can recite from memory: the physical failure, the missed warnings, the organizational drift, the recommendations. 

I believe the next generation of those reports will have a new chapter — the AI chapter. And it won't say the AI caused the accident.
It will say the AI was confidently wrong at some points along the way, and everyone believed it, because it had been right so many times before. An AI that was working properly but suddenly hallucinated. An operator who was supposed to oversee AI work did not see the hallucination coming or did not anticipate. Like the AI in "Minority Report" - it's so useful and correct so many times that challenging it is seen as heresy.



## We have been here before — with instruments

The uncomfortable truth about industrial catastrophes is that they are almost never caused by an absence of data. They are caused by misplaced confidence in what the data means.

At Texas City in 2005, operators overfilled a distillation tower during startup. The level transmitter told them the level was comfortably in range — and falling. The tower was in fact filling far beyond the instrument's calibrated span, and the display kept reassuring the control room right up until liquid went out the top of the stack. Fifteen people died. The instrument didn't fail loudly. It failed *fluently* — it kept producing a plausible number.

At Buncefield the same year, a gasoline storage tank overfilled because the level gauge stuck and the independent high-level switch was inoperative. Again: not silence, not an alarm flood. A steady, reassuring, wrong signal.

Process industries learned an expensive lesson from a century of accidents like these: **a confident wrong indication is more dangerous than a dead instrument.** A dead instrument gets a work order. A confident wrong one gets believed. Our entire discipline of safety instrumentation — redundancy, voting logic, proof testing, independent protection layers — exists because we accepted that measurements lie, and we engineered for the lie.

Now we are installing a new instrument on top of everything. It reads the historian, the maintenance records, the inspection reports, the P&IDs. It answers questions in fluent, structured, unit-correct prose. And it has one property that should terrify anyone who has read an accident report:

**It always has an answer.**

## Fluency is not competence

The failure mode that should worry an industrial engineer is not the one people joke about — an AI inventing something obviously absurd - like a person with multiple hands. Those are easy to catch; nobody acts on an answer that sounds insane. The dangerous failure is quieter: an answer that is plausible, well-formatted, cites something real, uses the right vocabulary — and is wrong in a way that only a specialist with the primary evidence in front of them could catch.

The wrong damage mechanism for that service. The right inspection interval for the wrong material. A root cause that matches the last three failures but not this one. Each answer arrives in the same confident tone and the same clean structure, whether it is grounded in this asset's actual history or assembled from everything the model has read about other people's plants. Nothing in *how* the answer is delivered tells you which one you're looking at.

In consumer applications, that's a nuisance — you retry the prompt. In ours, it is something else entirely, because of a property industrial engineers understand in their bones and that almost no AI benchmark measures:

**The cost of being wrong is radically asymmetric.**

## The asymmetry that changes everything

Consider the two ways an AI advisor can fail an engineer:

**It refuses or hedges when it actually knew the answer.** Cost: minutes to hours. The engineer does what engineers have always done — pulls the file, calls the specialist, walks the line. Annoying. Recoverable. Bounded.

**It answers confidently when it should have refused.** Cost: potentially a deferred inspection on a corroding line, a repair crew sent to the wrong asset while the real culprit degrades, a startup decision made on a reassurance that had no evidentiary basis. Unbounded. Sometimes unrecoverable.

<figure style="margin:2.2rem 0;">
<svg viewBox="0 0 700 232" role="img" aria-labelledby="asym-title" style="width:100%;height:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<title id="asym-title">The asymmetric-cost matrix. When evidence exists and the AI answers, or evidence is absent and it refuses, the outcome is correct. When evidence exists and it refuses, the cost is bounded — an hour lost. When evidence is absent and it answers anyway, the cost is unbounded — the quadrant accident reports are written about.</title>
<text x="294" y="20" text-anchor="middle" font-size="10" letter-spacing="1.5" fill="var(--faint,#8b93a1)">AI ANSWERED</text>
<text x="562" y="20" text-anchor="middle" font-size="10" letter-spacing="1.5" fill="var(--faint,#8b93a1)">AI REFUSED</text>
<text x="16" y="84" dominant-baseline="middle" font-size="12.5" font-weight="600" fill="var(--ink,#1a1f2b)">Evidence</text>
<text x="16" y="100" dominant-baseline="middle" font-size="12.5" font-weight="600" fill="var(--ink,#1a1f2b)">existed</text>
<text x="16" y="180" dominant-baseline="middle" font-size="12.5" font-weight="600" fill="var(--ink,#1a1f2b)">Evidence</text>
<text x="16" y="196" dominant-baseline="middle" font-size="12.5" font-weight="600" fill="var(--ink,#1a1f2b)">absent</text>
<!-- Evidence existed x Answered: good -->
<rect x="164" y="40" width="260" height="88" rx="6" fill="var(--accent-light,#eef2f7)" stroke="var(--accent,#1e3a5f)" stroke-width="1"/>
<text x="184" y="68" font-size="12.5" font-weight="600" fill="var(--ink,#1a1f2b)">✓ Right call</text>
<text x="184" y="88" font-size="10" fill="var(--muted,#5b6472)">grounded, correct, confident</text>
<text x="184" y="104" font-size="10" fill="var(--muted,#5b6472)">this is what should happen</text>
<!-- Evidence existed x Refused: bounded cost -->
<rect x="432" y="40" width="260" height="88" rx="6" fill="var(--amber-bg,#fdf6e8)" stroke="var(--border,#e3e6ea)" stroke-width="1"/>
<text x="452" y="68" font-size="12.5" font-weight="600" fill="var(--amber-text,#8a5a00)">✕ Unnecessary caution</text>
<text x="452" y="88" font-size="10" fill="var(--amber-text,#8a5a00)" opacity="0.85">engineer loses an hour, pulls the file</text>
<text x="452" y="104" font-size="10" fill="var(--amber-text,#8a5a00)" opacity="0.85">annoying, but bounded and safe</text>
<!-- Evidence absent x Answered: critical -->
<rect x="164" y="136" width="260" height="88" rx="6" fill="var(--critical-bg,#fbeae7)" stroke="var(--critical-text,#8a3226)" stroke-width="1"/>
<text x="184" y="164" font-size="12.5" font-weight="600" fill="var(--critical-text,#8a3226)">✕ The dangerous quadrant</text>
<text x="184" y="184" font-size="10" fill="var(--critical-text,#8a3226)" opacity="0.85">confident, plausible, and wrong</text>
<text x="184" y="200" font-size="10" fill="var(--critical-text,#8a3226)" opacity="0.85">accident reports are written about this</text>
<!-- Evidence absent x Refused: good -->
<rect x="432" y="136" width="260" height="88" rx="6" fill="var(--accent-light,#eef2f7)" stroke="var(--accent,#1e3a5f)" stroke-width="1"/>
<text x="452" y="164" font-size="12.5" font-weight="600" fill="var(--ink,#1a1f2b)">✓ Correctly declined</text>
<text x="452" y="184" font-size="10" fill="var(--muted,#5b6472)">names exactly what's missing</text>
<text x="452" y="200" font-size="10" fill="var(--muted,#5b6472)">a work instruction, not a dead end</text>
</svg>
<figcaption style="font-size:0.82rem;color:var(--muted,#5b6472);text-align:center;margin-top:0.6rem;">Two ways to be wrong, and they are not the same size of wrong.</figcaption>
</figure>

In statistics these are Type I (False Positives) and Type II (False Negatives) errors, and every general-purpose AI system you can buy today is optimized to minimize the first at the expense of the second. Benchmarks reward answering. Users reward answering. Engagement metrics reward answering. Refusal reads as product failure.

That optimization is exactly backwards for process industries. We are deploying systems tuned for a cost model — *wrong answers are cheap, refusals are expensive* — into the one domain where that cost model is inverted most violently.

We would never accept this from any other instrument. A pressure transmitter that guessed when its impulse line was plugged, rather than flagging bad quality, would be ripped out of the loop. We built entire signal-quality disciplines — sensor validation, bad-PV flagging, out-of-range detection — on the principle that *an instrument must know when it doesn't know.* *Yet we are wiring in an advisory layer with no equivalent concept, and pointing it at decisions that matter more than any single control loop.*

## "Humans are overconfident too"

The standard rebuttal is that human experts are also confidently wrong, and the AI merely has to beat the human baseline. It's a fair point, and it misses everything important.

We know humans are fallible — so we spent a century building scaffolding around that fallibility. Permit-to-work systems. Independent verification. Management of change. The requirement that safety-critical calculations carry a stamp from someone accountable for them. Shift handover protocols written in blood. Our safety culture is not built on trusting the expert; it is built on *never letting a single confident judgment go unchecked* when the consequences are severe.

AI advisory systems are entering the plant *around* that scaffolding, not through it. They arrive as software — as a chat window, a copilot, a search box — and software gets deployed with an IT checklist, not a process hazard analysis. Nobody would let a new engineer make unreviewed recommendations about equipment integrity in their first week. We are extending exactly that privilege to systems whose confidence has no relationship to their knowledge, precisely because they don't look like a new engineer. They look like a tool. Tools don't get overconfident.

This one does.

## What the bar should be

I am not arguing against AI in industrial operations. I have spent years building toward it, and the potential is real: the context an engineer needs for a decision is scattered across historians, inspection records, failure databases, and the memories of people who retire next year. A system that assembles that context faithfully is worth a great deal.

But "faithfully" is the entire game, and it implies a bar most current systems don't attempt. Three properties, none optional:

**1. It must refuse — specifically.** When the evidentiary basis for an answer is absent, the system says so, and says *what is missing*: no inspection data on this circuit since the material change; no failure history for this mechanism on this asset class; the standard this recommendation would rest on doesn't cover this service. A refusal of that shape is not a dead end. It is a work instruction. It tells the engineer exactly which gap to close — which is often the most valuable output an advisor can produce.

**2. Every claim must carry its receipts.** Not "sources at the bottom." Every load-bearing statement traceable to a specific measurement, a specific record, a specific clause of a specific standard — so the engineer can check the chain in the same way they'd check a junior colleague's calculation, and so an auditor can check it three years later. If a claim cannot be traced, it should not be uttered.

**3. Confidence must be calibrated to consequence, not just probability.** "85% confident" is not one thing. Being 85% confident in the likely cause of a nuisance trip and 85% confident that a line is fit for continued service are different statements, because the cost of the remaining 15% differs by orders of magnitude. A system that reports uncertainty without regard to what the error would cost has not understood the domain it operates in. The threshold for volunteering an answer must rise with the severity of being wrong — the same logic that governs every safety integrity level we assign.

None of this is exotic research. It is the transposition of instrument-engineering discipline — signal validation, traceability, proof testing, integrity levels — onto a new kind of instrument. The industry has done this transposition before, each time a new technology moved into the safety-relevant layer. It is due again.

## The question to ask on Monday

If there is an AI assistant anywhere near your operations today — a pilot, a copilot, a vendor demo — ask it something you know it cannot know. Something whose answer would require data you're certain it doesn't have.

If it answers anyway, fluently and plausibly, you have learned the most important thing about it: **it is not measuring its knowledge. It is measuring its fluency.** And every correct answer it has given you was, in a sense, an accident of coverage — right because the data happened to be there, not because the system knew the difference.

An instrument that cannot distinguish "I know" from "I can produce words" is not an instrument. It has no place in the causal chain of decisions that keep hydrocarbons inside pipes.

The accident report chapter I opened with is not inevitable. But avoiding it requires us to demand from AI what we learned — expensively — to demand from every other device in the plant: not brilliance, not fluency, but the engineering humility to know what it doesn't know, and the honesty to say so.

This is why plant engineers and operators do not trust a black-box AI system near their operations — and they are right not to.

This program exists to take that mistrust seriously rather than argue it away: to look closely, one factor at a time, at what makes it reasonable, and to build toward a way of engineering trust into industrial AI deliberately — not hoping for it as a side effect of a bigger model.

The next article takes on one of those factors directly: what happens once a recommendation exists, and who is accountable for acting on it. [The Ungoverned Middle]({{ "/articles/2026/07/12/the-ungoverned-middle/" | relative_url }}).
