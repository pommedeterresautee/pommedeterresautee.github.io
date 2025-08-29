---
tags: ["Open Data"]
title: "Pushing open data from inside a legal publisher (2019): two pro bono partnerships"
description: "In 2019 we ran two pro bono partnerships to open up court decisions - with Etalab/Cour de cassation and Luxembourg’s Prosecutor General - focusing on engineering speedups for anonymization and an end-to-end PoC."
pubDatetime: 2020-01-15T00:00:00.000Z
draft: false
featured: true
author: "Michaël Benesty"

postSlug: 2020/pushing-open-data-from-inside-a-legal-publisher
---

# Pushing open data from inside a legal publisher (2019): two pro bono partnerships

Announcements: [Etalab announcement][1] - [Luxembourg press release][2] [3]

**TL;DR.** From spring to autumn **2019**, we ran two pro bono partnerships to help open up court decisions. With **Etalab / Cour de cassation (France)** we shared methodology and, above all, made **Flair** fast enough for large-scale anonymization (about **10× faster**: ~30 days -> **<3 days** on a single 2080Ti for instance). With the **Luxembourg Prosecutor General’s Office**, we tested the whole pipeline **end-to-end**, produced a working PoC, and handed it over to de-risk future rollout. I’m genuinely happy we did both - pushing open data *from an editor* isn’t obvious, but it’s the direction the field is taking and the results were concrete. ([Etalab][1], [Justice Luxembourg][2])

> UPDATE 2022: You can see the **follow-through**: by **July 4, 2022**, the Prosecutor General launched **JUANO**, an application to help pseudonymize decisions for publication. Different team, different time - but a clear continuation of the same arc. [Communiqué de presse][3]

<!-- more -->

## Why this matters (and why do it from an editor?)

I’ve said it elsewhere: **I believe in the virtues of open data**. It attracts talent, speeds up research, and lets real-world users build on top. From a publisher’s seat, that vision isn’t automatic - you have to align people on the fact that opening up is **positive-sum** for everyone, especially at a time when some “modern” legaltech try to *sell* what should be open. Our bet was simple: contribute engineering and methods in the open, and let the ecosystem benefit.

## Partnership #1 - Etalab × Lefebvre Sarrut (Cour de cassation), spring 2019

We signed with **Etalab** to collaborate together, which led to **publish our pseudonymization code under a free license** and to work with the **Cour de cassation** on the methodology of pseudonymization. The point was to compare methods and accelerate what worked. Practically: Etalab bridged our team and the Court’s team; approaches could be combined if that improved results.

**What we brought** was largely **engineering**. On our side we kept the model intact and rewired how computation was done in **Flair**. Net effect: **~10×** faster inference (**1m16s -> 11s per 100 cases**) which turns a full inventory pass from **~30 days** into **<3 days** on a single 2080Ti - the kind of small box you actually have. That changes the operational game: re-processing the whole backlog becomes a week-end task, not a month-long project. This is why engineering sits at the heart of applied ML.

Style-wise, this aligned well with the Court’s **strong, dedicated team** on the subject (via Etalab’s OpenJustice/EIG effort): we shared methodology, made the speed-ups available, and let their team push accuracy and evaluation on their side. Positive-sum, in public.

## Partnership #2 - Luxembourg Prosecutor General’s Office, autumn 2019

In November we signed a **six-month, no-money** partnership with the **Parquet général** (with Larcier Luxembourg): evaluate AI anonymization for mass publication and accelerate their open-justice policy.

Here we **ran the pipeline end-to-end** - there wasn’t a standing anonymization team yet - so we focused on getting something that **worked** in their context, measured it, and then **handed the PoC back** to the institution. The goal was explicit: **de-risk** the “can this run here?” question so the office could staff and scale later. (Martine Solovieff was Prosecutor General at the time.)

## How we convinced people internally

* **Align on the “why.”** This is where the world is going: open decisions, modern tooling, reproducible pipelines. The job was to align everyone on the fact that it’s **a good thing with positive spillovers** - for institutions, for citizens, and yes, for an editor operating in a healthier ecosystem.
* **Reassure by measurement.** Publish code, publish metrics (speed, accuracy, throughput), and show the delta in plain numbers. Reliability is not a promise; it’s a benchmark and a CI run.

## What actually came out (beyond slides)

* **Open code & methods** that others could evaluate and build on (Etalab/Cour de cassation).
* **A 10× speed-up** that made “full-inventory anonymization in a couple of days” realistic on commodity GPUs.
* **An in-context PoC** at the Luxembourg Prosecutor General’s Office that answered the hard, local questions before any procurement or staffing. (And later, a homegrown tool.)

Pro bono always carries the usual risk: **no money -> no value**. Here, both projects produced **real effects** - usable code, measurable performance, and institutional learning that stuck. That was the point.

---

If you want the technical backstory on anonymization itself, the two long posts from that period cover it: **why we switched from spaCy to Flair and made it 10× faster**, and a **benchmark (spaCy, Flair, mBERT, CamemBERT) on messy, OCR’d commercial cases**.

[1]: https://www.etalab.gouv.fr/la-mission-etalab-et-le-groupe-lefebvre-sarrut-collaborent-accelerer-louverture-des-decisions-de-justice/ "La mission Etalab et le groupe Lefebvre-Sarrut collaborent pour accélérer l’ouverture des décisions de justice – Etalab"
[2]: https://justice.public.lu/content/dam/justice/fr/actualites/2019/COMMUNIQUE-DE-PRESSE-Accord-de-partenariat-Parquet-general-du-Grand-Duche-de-Luxembourg%2C-Lefebvre-Sarrut-et-Larcier-Luxembourg.pdf "Communiqué de presse du Parquet général, de Lefebvre Sarrut et Larcier Luxembourg"
[3]: https://justice.public.lu/fr/actualites/2022/07/communique-parquet-general-juano.html "Communiqué de presse du Parquet général" 