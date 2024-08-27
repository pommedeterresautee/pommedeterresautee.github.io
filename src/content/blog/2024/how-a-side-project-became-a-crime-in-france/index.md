---
title: How a Side Project Became a Crime (in France)
description: How open-data work became criminally risky in France under Article 33; context, what is banned, and lessons learned.
pubDatetime: 2024-08-27T00:00:00.000Z
draft: false
featured: true
author: "Michaël Benesty"
tags: ["Open data", "Justice prédictive"]
postSlug: 2024/how-a-side-project-became-a-crime-in-france
---

# How a Side Project Became a Crime (in France)

In 2016, I was a tax lawyer who liked to ship small ML tools on evenings and weekends. One of those tools scraped and enriched case law so I could quickly find the (rare) decisions where the French tax administration had lost—a goldmine in my practice. The code worked well enough that I tried it on something outside tax: rumors about uneven treatment of asylum and immigration cases. What started as a debugging exercise turned into a dataset showing very large disparities across administrative judges, stable year after year.

Those first explorations became **SupraLegem**—a free, non‑commercial website built with a friend (an ML engineer in New York) so anyone could verify the numbers and audit the methods. No ads, no black box, only open data and a design that let you click through to the underlying decisions and check every aggregation by hand. We weren’t trying to “rate judges.” We were testing whether the law was applied consistently. We pressed **publish**. A few hours later, the storm arrived.

<!-- more -->

The content was provocative because we included names, as newspapers routinely do when reporting on decisions read in open court. Before posting, we had even sent our slides to the Conseil d’État for feedback. Nobody answered—because, as I later learned, the court’s browser couldn’t open Slideshare. So we shipped, with names. Then came the emails, calls, and op‑eds. Some judges argued that exposing disparities would threaten their independence. Others conceded there was a signal, but were uncomfortable with naming individuals. My employers at the time (Deloitte) didn’t want to be dragged into a media cycle about “predictive justice.” We closed the site. The story could have ended there. It didn’t.

## From open data to a prohibition

In parallel, France was formalizing **open data** for judicial decisions. The *Loi pour une République numérique* (2016) had set the principle: publish judicial and administrative decisions online, free of charge, with privacy‑preserving measures. The ministry asked Prof. Loïc Cadiet to lead a mission on how to do this safely and well. His 2017 report became the intellectual scaffolding for what followed. ([Ministère de la justice][2])

Two years later, Parliament passed a major justice reform. Tucked inside was **Article 33**—the rule that would make our kind of work, if tied to named individuals, a **crime**. The text says, in substance: identity data of magistrates or court clerks **cannot be reused** with the aim or effect of *evaluating, analyzing, comparing or predicting* their professional practices. Violations are punished under the Penal Code (notably Article 226‑18 and related provisions). Five years in prison and a €300,000 fine are on the table. That’s not a metaphor. ([Légifrance][3])

If you’re wondering how reusing lawfully published information leads to a criminal risk, you’re not alone. The ministry summarized it plainly at the time: open data would continue, with pseudonymization and safety valves; but **profiling magistrates** would be prohibited and criminally sanctioned. Commentators quickly noted the paradox: you could legally access the decisions, but you could not **reuse** the judge identity fields to build or publish comparative statistics about individual judges. ([Ministère de la justice][4])

## What exactly is banned (and what isn’t)

France did **not** forbid publishing decisions that naturally mention magistrates and clerks. Those names remain in many public decisions (especially in the administrative order and higher courts), and the open‑data roll‑out has continued with large volumes via Judilibre and other portals. What Article 33 criminalizes is the *reuse of identity data* for the purpose—or with the effect—of evaluating or predicting a magistrate’s practices. Aggregated analytics at the level of a court, chamber, matter, or time period are not targeted; it’s the *per‑judge leaderboard* that crosses the line. ([Ministère de la justice][6])

If you’re thinking “that sounds like a targeting‑avoidance rule,” that’s the idea. The justification is judicial independence and safety: legislators wanted transparency of decisions *without* performance scoring of human decision‑makers. Whether that balance is right is a debate. But the legal consequence is clear, and it is **penal**. The hook is Article 226‑18 of the Penal Code (personal‑data offenses), to which Article 33 explicitly refers, with its five‑year maximum and complementary sanctions. ([Légifrance][3])

## The original dataset, the pushback, and the lesson

Back in 2016, I had published a first analysis about **OQTF** (obligations to leave the French territory) cases. It showed striking disparities in rejection rates by judge and chamber—exactly the type of disparity that, if it persisted after you control for case mix, might point to a systemic issue worth discussing publicly. The article triggered a lively exchange with practitioners who disagreed on method and interpretation. That scientific friction was the point: *show your data; let others falsify it*. But once the law changed, repeating the exercise with names attached became legally risky. ([Village de la Justice][7])

## Epilogue: a misconfigured browser and a law

One detail from 2016 explains how close this came to a quieter ending. Before publishing, we had sent our slides to the Conseil d’État contact. Silence. Later I learned the court’s browser couldn’t open our Slideshare link. Had it opened, they would have asked us to remove names, and perhaps the story would have stopped there. It didn’t; Parliament later wrote the ban into law.

---

### References & further reading

* My 2016 analysis on OQTF disparities and the ensuing discussion (Village de la Justice). ([Village de la Justice][7])
* Ministry page summarizing France’s open‑data framework for judicial decisions (laws, decrees, calendar). ([Ministère de la justice][6])
* Article 33 of the 23 March 2019 justice reform (text and penal cross‑references). ([Légifrance][3])
* Penal Code Art. 226‑18 (5 years; €300,000), and complementary sanctions. ([Légifrance][8])


[2]: https://www.justice.gouv.fr/publications-10047/rapports-thematiques-10049/remise-du-rapport-sur-lopen-data-des-decisions-de-justice-31165.html "Rapport sur l'open data des décisions de Justice | Ministère de la justice"
[3]: https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000038261761 "Article 33 - LOI n° 2019-222 du 23 mars 2019 de ..."
[4]: https://www.justice.gouv.fr/sites/default/files/migrations/textes/art_pix/Article_33_Diffusion_decisions_justice_190324_V1_OK.pdf "Article 33"
[5]: https://blog.landot-avocats.net/2020/03/02/anonymisation-des-decisions-de-justice-justice-predictive-par-algorithme-commercialisation-de-ces-donnees-ou-va-le-projet-de-decret/ "Anonymisation des décisions de Justice, Justice prédictive ..."
[6]: https://www.justice.gouv.fr/documentation/open-data-decisions-justice "Open data des décisions de justice | Ministère de la justice"
[7]: https://www.village-justice.com/articles/impartialite-certains-juges-mise%2C21760.html "L'impartialité de certains juges mise à mal par l'intelligence artificielle. Par Michaël Benesty, Fiscaliste."
[8]: https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006417968 "Article 226-18 - Code pénal"

