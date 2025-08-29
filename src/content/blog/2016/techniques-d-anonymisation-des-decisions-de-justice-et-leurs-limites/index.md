---
tags: ["Law", "Privacy"]
title: "Techniques d'anonymisation des décisions de justice et leurs limites"
description: "Techniques d'anonymisation des décisions de justice et leurs limites Michael BENESTY Head Of Research And Development at Lefebvre Sarrut (Dalloz, Francis Lefebvre, Éditions Législa"
pubDatetime: 2016-09-05T00:00:00.000Z
draft: false
author: "Michaël Benesty"

---

> Article d'origine: https://www.linkedin.com/pulse/techniques-danonymisation-des-d%C3%A9cisions-de-justice-et-michael-benesty
![Techniques d'anonymisation des décisions de justice et leurs limites](./img-01.jpg)

Le projet de loi pour une République numérique est sur le point d’être adopté. Parmi les mesures phares se trouve l’ouverture de bases de données publiques. L’initiative est très attendue (le site Supralegem.fr qui a permis de révéler d’importantes “variations” dans les pratiques de certains magistrats administratifs en matière d’éloignement des étrangers utilise ce type de données publiques), et vient avec quelques défis. Le principal concerne certainement la sensibilité des données distribuées.

Le projet de loi prévoit notamment la mise en open data de l’ensemble de décisions produites par les tribunaux et cours françaises (minus quelques exceptions), alors qu’aujourd’hui seule une partie du stock l’est (cf. Peut on faire des statistiques fiables sur un juge lorsque l'on ne dispose pas de toutes les décisions émises ?).

1/ Les enjeux

Parmi les décisions nouvellement ouvertes, on trouvera par exemple les jugements de divorce rendus par les tribunaux de grande instance (1er degré, c’est à dire des décisions qui tendent à inclure nombre de détails sur les faits jugés). Ces décisions contiennent des informations manifestement sensibles. Sur la base d’une délibération de la CNIL de 2001, toutes les décisions mise en open data sont pseudo-anonymisées avant leur mise à disposition sur Légifrance (les juges et auxiliaires de justice sont exclus).

La pseudo-anonymisation consiste à retirer les noms des personnes et à les remplacer par une expression sans lien, comme par exemple une lettre de l’alphabet.

Ex:

“M. Bidule donnait rendez vous chaque semaine à Madame Truc dans un hôtel du centre de Paris.”

devient :

“M. X. donnait rendez vous chaque semaine à Mme Y. dans un hôtel du centre de Paris.”

Cette méthode est loin d’être parfaite. Un arrêt bien connu illustre les limites de l’approche en se référant à :

“Nicolas S., ancien ministre de l’Intérieur devenu la suite président de la République” (plus d’information ici ou là).

Pour cette raison, le projet de loi visée plus haut introduit la notion de risque de réidentification (pour plus d’informations sur cette notion, voir Mise au point sur l’open data des décisions de justice au 22 juin 2016).

2/ Les différentes solutions existantes

Il existe peu de documentation sur les techniques utilisées pour pseudo-anonymiser les décisions. Comme on peut s’en douter, eu égard à la masse de mentions à remplacer, la pseudo-anonymisation est réalisée informatiquement.

On peut identifier deux approches pour pseudo-anonymiser :

“Rule based” : Il s’agit pour un opérateur humain d’écrire des règles pour identifier les mentions recherchées. Les règles définissent souvent des suites de mots ayant certaines caractéristiques, par exemple “\[M./Mme./Mlle.\] \[Mention\] $VERBE” qu’on comprendra par la mention à remplacer est précédée par un titre de civilité et suivie d’un verbe. C’est l’approche la plus ancienne. “Machine learning” : Il s’agit de montrer des exemples de documents annotés à un algorithme. C’est ce dernier qui va écrire lui même les règles nécessaires pour retrouver ces exemples. Cette approche fait actuellement l’objets de tests par différents grands acteurs du droit.

3/ Critique de la solution basée sur des règles

Les grands acteurs du droit (dont la Dila qui est entre autres en charge du site Légifrance) utilisent la première approche, et certains pensent à basculer sur la seconde.

En effet, la technique basée sur des règles est très critiquée. Parce que la langue française est riche, il faut au minimum des dizaines (et souvent des centaines) de règles pour gérer les ambiguïtés les plus courantes. Par ailleurs, le temps d’écriture des règles par l’opérateur humain étant un coût, le nombre de règles mises en place est en général insuffisant.

En pratique, le défaut principal est son taux d’erreur, notamment les nombreuses mentions à anonymiser qui sont oubliées faute d’une règle dédiée pour tel ou tel cas rare.

Il faut impérativement un second opérateur humain pour relire la décision pseudo-anonymisée, identifier les erreurs restantes, et éventuellement mettre à jour le jeu de règles.

On le comprendra, avec cette approche, il y a un arbitrage entre le coût de configuration (création des règles) et le coût de vérification des documents pseudo-anonymisés.

Par ailleurs, plus on en a de règles, plus l’exécution est lente. Enfin, les nouvelles règles sont appliquées aux nouveaux documents, mais peut être ne conviennent plus aux anciens déjà anonymisés (l’impossibilité de reproduire certains résultats est un vrai problème dans les environnements en production).

4/ Les ateliers Open Law

C’est dans ce contexte que l’association Open Law organise le programme “Open Case law” pour aider les tribunaux et les cours à mettre en place des solutions moins coûteuses qui permettent de pseudo-anonymiser massivement les décisions de justices passées et futures.

La description est la suivante :

“Co-organisé par la DILA, Etalab, le ministère de la Justice, la Cour de Cassation, la Cour des Comptes, le Conseil d’Etat, l'Ordre des Avocats de Paris et l'association Open Law\*le Droit Ouvert, ce nouveau programme d’innovation se déroulera de septembre au sommet mondial du PGO (Partenariat pour le gouvernement ouvert) les 7, 8 et 9 décembre prochain sur le thème de l'ouverture des jurisprudences du fond.”

Le premier rendez-vous aura lieu le jeudi 15 septembre.

Les détails sont sur ce lien.
