---
layout: post
title: "The Ungoverned Middle"
description: "AI predicts. Agents act. The decision between them is where trust is won or lost — and today, almost nobody engineers it."
date: 2026-07-11
author: "Dr. Sanjay K Prasad"
tags: [governed-decision-layer, who-signs]
excerpt_separator: <!--more-->
---

Watch where the money and talent flow in industrial AI, and you will see them pour onto two fronts — often from the same companies.

The first front is **prediction**. Anomaly detection, prognostics, foundation models, digital twins — remarkable work, and getting better every quarter.

The second front is **execution**. Agents, orchestration frameworks, tool use, workflow engines — if you need something *done*, the tooling has never been richer.

Between the two fronts sits the most consequential step in the whole chain, and almost nobody engineers it: **the decision**.

<!--more-->

## From prediction to commitment

A prediction, by itself, costs nothing and gives nothing. *Bearing temperature trending anomalous; elevated probability of failure within thirty days.* Interesting — but nothing in the plant has changed yet.

The plant changes when someone, or something, commits: advance the inspection or defer it. Change the setpoint or hold it. Approve the work order or escalate it. A decision is a prediction that has acquired consequences.

And at the moment of commitment, the questions change character. A prediction asks: *is this likely?* A commitment asks: *Is this allowed? Under which procedure? By whose authority? Within what limits? And who answers for it if it goes wrong?*

Model capability answers none of those questions. It was never supposed to.

## The gap nobody owns

The prediction front stops at a confidence score. It hands over an "insight" and considers the job done — reasonably, because the model team's remit ends at accuracy.

The execution front picks up at the action. An agent that can raise a work order treats the decision as little more than a parameter in an API call — also reasonably, because the framework's remit begins at execution.

Between the two remits, the decision falls through. It belongs to everyone and is engineered by no one.

The informed objection arrives right here: surely this is solved — decision management, BPM, policy-as-code, human-in-the-loop checkpoints.

Look at what each of them actually governs. Workflow tools govern *what happens next*. Policy engines govern *who may call what*. Decision engines govern the decisions you can enumerate into rules in advance. A checkpoint can collect a signature — but it cannot supply the grounds. None of them governs the commitment itself: whether *this* recommendation, on *this* asset, under *this* procedure, is allowed, within what limits, and who answers for it. A BPM system can route a decision to the right inbox. It cannot ground one.

## Automation is not autonomy

Here is what makes this strange: industry already knows the point of commitment is where risk concentrates. It has governed that point twice over.

For people, it built standard operating procedures, permit-to-work, management of change, escalation chains — decades of hard-won discipline, all placed at the moment a person commits the plant to something.

For machines, the control and OT community has been automating shop-floor decisions for sixty years: control loops, interlocks, safety-instrumented systems — thousands of commitments a second, deterministic, and superbly engineered.

Respect how that second regime works, and you can see its boundary. It governs by enumeration: every condition-action pair specified in advance, exhaustively verifiable before commissioning, frozen until a formal change process reopens it. And when the world strays outside the enumerated space, it has one conservative answer — trip to a safe state and call a human. These are not flaws. They are exactly the design choices that make safety verifiable against defined risk targets, in a decision space that is narrow, closed, and static.

There is a word for what that layer does, and it is not the word for what AI promises. The control layer *automates*: it executes, at speed and without fatigue, decisions that humans already made — at design time, in the control narrative, in the cause-and-effect matrix. The interlock does not decide anything; the engineer who wrote it decided, years ago. What AI has opened up is categorically different: *autonomy* — systems that can make decisions nobody pre-made, in situations nobody enumerated. *Should this inspection be deferred? Which failure mechanism explains this vibration signature? Is today's permit deviation acceptable?* Open-ended, contextual, reasoning-shaped. They fit neither regime: too open-ended for the interlock, too many and too fast for the committee.

That potential is worth wanting. Deep operational expertise is scarce and getting scarcer as a generation of engineers retires. Autonomy is how the judgment of the few can reach every asset, on every shift, at every site — including the night shift, where the best corrosion engineer has never worked. It is how decisions can move at the pace of the process rather than the pace of the meeting, and how fewer people spend their working lives in harm's way.

But autonomy cannot borrow automation's trust. Automation earned its licence through enumeration and systematic verification; autonomy, by definition, operates where enumeration ends. Its trust has to be [earned a different way]({{ "/terms/#earned-autonomy" | relative_url }}) — decision by decision, with evidence.

## Unsigned

Autonomy carries exactly these new decisions into regimes built for something else. We bolt it onto the old ones, or worse, route around them entirely. This, more than model quality, is why pilots stall. The pilot works, the value case is real, and the rollout dies in a meeting where someone asks who is accountable when the AI is wrong — and the room goes quiet.

I have lived a version of this. Years ago — classical optimization, well before the current AI wave — we replaced a blanket ten-days-of-stock policy at a global electronics manufacturer with recommendations tuned to each item: 15.5 days of cover here, 2.7 days there, every number defensible from the data — computed using analytics algorithms taking into account supply and demand side uncertainties. The planners were not convinced. They asked for an override capability — for exceptions, a reasonable ask. Within weeks, nearly everything had been overridden back to ten days. Our numbers were not wrong; they were unsigned. Ten days was the number a planner could trust and would defend. Winning real adoption took two more years.

## Naming the layer

What the middle needs is not a better model or a faster agent. It needs an engineered layer of its own — this program calls it the [**Governed Decision Layer**]({{ "/terms/#governed-decision-layer" | relative_url }}): the architectural layer between reasoning and operational action, responsible for five duties.

- **Validate** — is this recommendation grounded in the asset, the data, and the standard that governs them, or is it merely fluent?
- **Govern** — which procedure applies to this decision, and what does it require?
- **Explain** — can the reasoning be examined by the person accountable, in their terms, *before* they are asked to commit?
- **Authorize** — may this proceed, must it hold, must it escalate, or must it abort? And under whose authority?
- **Record** — is there a decision record that meets a standard an incident review would accept, years from now?

Every one of these duties exists today — scattered across SOPs, review meetings, and the judgment of experienced engineers. The engineering act is to make the layer explicit, so that AI-assisted decisions pass through it by construction rather than by goodwill.

In sequence, the five duties are also how a recommendation becomes signable. Validate and explain turn a raw output into evidence. Govern supplies the applicable procedure and its limits. Authorize is the signature itself. Record closes the loop — which is exactly the shape the next test asks for.

## The test: who signs?

The fastest way to find the ungoverned middle in any system is a [one-line test]({{ "/terms/#who-signs" | relative_url }}): **who signs?**

<figure style="margin:2.2rem 0;">
<svg viewBox="0 0 760 310" role="img" aria-labelledby="signs-title" style="width:100%;height:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
<title id="signs-title">The who-signs test: an AI recommendation, together with the grounds the system supplies — evidence, applicable procedure, limits, record — reaches the question: can a named person sign? Yes leads to a signed, recorded decision. No means not operationally ready: the ungoverned middle.</title>
<defs>
<marker id="signs-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="var(--faint,#8b93a1)"/></marker>
</defs>
<g font-size="11" fill="var(--ink,#1a1f2b)">
<rect x="186" y="14" width="76" height="26" rx="13" fill="var(--bg-subtle,#f6f7f9)" stroke="var(--border,#e3e6ea)"/>
<text x="224" y="31" text-anchor="middle">evidence</text>
<rect x="270" y="14" width="150" height="26" rx="13" fill="var(--bg-subtle,#f6f7f9)" stroke="var(--border,#e3e6ea)"/>
<text x="345" y="31" text-anchor="middle">applicable procedure</text>
<rect x="428" y="14" width="58" height="26" rx="13" fill="var(--bg-subtle,#f6f7f9)" stroke="var(--border,#e3e6ea)"/>
<text x="457" y="31" text-anchor="middle">limits</text>
<rect x="494" y="14" width="64" height="26" rx="13" fill="var(--bg-subtle,#f6f7f9)" stroke="var(--border,#e3e6ea)"/>
<text x="526" y="31" text-anchor="middle">record</text>
</g>
<text x="380" y="58" text-anchor="middle" font-size="10" letter-spacing="1.5" fill="var(--faint,#8b93a1)">THE GROUNDS THE SYSTEM MUST SUPPLY</text>
<line x1="380" y1="64" x2="380" y2="82" stroke="var(--faint,#8b93a1)" stroke-width="1.5" marker-end="url(#signs-arrow)"/>
<rect x="22" y="122" width="160" height="54" rx="6" fill="var(--accent-light,#eef2f7)" stroke="var(--accent,#1e3a5f)" stroke-width="1"/>
<text x="102" y="153" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--ink,#1a1f2b)">AI recommendation</text>
<line x1="186" y1="149" x2="252" y2="149" stroke="var(--faint,#8b93a1)" stroke-width="1.5" marker-end="url(#signs-arrow)"/>
<polygon points="380,90 504,149 380,208 256,149" fill="var(--bg,#ffffff)" stroke="var(--accent,#1e3a5f)" stroke-width="1.2"/>
<text x="380" y="145" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink,#1a1f2b)">Can a named person</text>
<text x="380" y="162" text-anchor="middle" font-size="12" font-weight="600" fill="var(--ink,#1a1f2b)">sign — with grounds?</text>
<line x1="508" y1="149" x2="558" y2="149" stroke="var(--faint,#8b93a1)" stroke-width="1.5" marker-end="url(#signs-arrow)"/>
<text x="531" y="141" text-anchor="middle" font-size="11" font-style="italic" fill="var(--muted,#5b6472)">yes</text>
<rect x="562" y="122" width="180" height="54" rx="6" fill="var(--accent,#1e3a5f)"/>
<text x="652" y="145" text-anchor="middle" font-size="12.5" font-weight="600" fill="#ffffff">Signed decision</text>
<text x="652" y="163" text-anchor="middle" font-size="11" fill="#ffffff" opacity="0.85">act — and record it</text>
<line x1="380" y1="212" x2="380" y2="240" stroke="var(--faint,#8b93a1)" stroke-width="1.5" marker-end="url(#signs-arrow)"/>
<text x="392" y="230" font-size="11" font-style="italic" fill="var(--muted,#5b6472)">no</text>
<rect x="246" y="244" width="268" height="54" rx="6" fill="var(--amber-bg,#fdf6e8)" stroke="var(--border,#e3e6ea)"/>
<text x="380" y="267" text-anchor="middle" font-size="12.5" font-weight="600" fill="var(--amber-text,#8a5a00)">Not operationally ready</text>
<text x="380" y="285" text-anchor="middle" font-size="11" fill="var(--amber-text,#8a5a00)" opacity="0.85">this is the ungoverned middle</text>
</svg>
<figcaption style="font-size:0.82rem;color:var(--muted,#5b6472);text-align:center;margin-top:0.6rem;">The who-signs test: a decision is operationally ready only when a named person can sign it — because the system supplied the grounds.</figcaption>
</figure>

Take any AI-assisted operational decision and ask whose name is on it. If the answer is "the model," the system is not ready. If the answer is "nobody," the system is not ready. The system is ready when a named person — or a named authority acting under explicit delegation — can sign, *because the system gives them grounds to sign*: the evidence, the applicable procedure, the limits, and the record.

One boundary should be stated plainly: some signatures never delegate. Decisions that create, modify, or bypass a SIL-rated barrier are signed by a human — at design time and at every change, by standard and, in most jurisdictions, by law — no matter how strong the grounds. That is not a limitation of the layer; it is one of its jobs: knowing which decisions can be progressively delegated as trust is earned, which never can, and saying *never* with the same confidence as *proceed*.

Signing is not a formality. It is trust, compressed into accountability. A signature says: I have seen the grounds, I accept the consequences, and I can defend this decision to anyone who asks. An industrial AI system that cannot support that sentence is a prediction engine with good marketing.

## Where this volume goes

This article opens [Volume I]({{ "/volume-i/" | relative_url }}), which stays in the middle and goes deep. Ahead:

- What a decision must *carry* — the anatomy of an auditable decision record.
- The four verdicts — proceed, hold, escalate, abort — and how a governed layer renders them.
- The counterintuitive one: how governance *expands* AI autonomy rather than restricting it.

Prediction will keep getting better. Execution will keep getting faster. Neither will answer the plant manager's questions — *Can I act on this? Will it hold up in the audit? Who is accountable if it's wrong?* Those are answered in the middle. Govern it, and capability becomes trust. Leave it ungoverned, and industrial AI remains what it too often is today: impressive, and unsigned.
