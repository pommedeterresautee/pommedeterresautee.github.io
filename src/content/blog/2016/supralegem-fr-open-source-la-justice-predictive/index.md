---
tags: ["Judicial Analytics", "Law"]
title: "SupraLegem.fr open source la justice prédictive !"
description: "Fantasia, allégorie de la justice prédictive ? SupraLegem.fr open source la justice prédictive ! Michael BENESTY Head Of Research And Development at Lefebvre Sarrut (Dalloz, Franci"
pubDatetime: 2016-11-02T00:00:00.000Z
draft: false
author: "Michaël Benesty"

---

> Article d'origine: https://www.linkedin.com/pulse/supralegemfr-open-source-la-justice-pr%C3%A9dictive-michael-benesty
![SupraLegem.fr open source la justice prédictive !](./img-01.jpg)

Lors du colloque La jurisprudence dans le mouvement de l’open data organisé le 14 octobre 2016 par la Cour de cassation, le thème de la justice prédictive a été évoqué par nombre d’intervenants.

La justice prédictive consiste à utiliser des algorithmes de machine learning pour “prédire” l’issue d’un procès ou détecter les arguments qui sont les plus déterminants. Il s’agit d’un thème omniprésent dans les médias. Certains imaginent déjà que les juges seront remplacés…

Des sociétés françaises souhaitent proposer ce type de prestations (calculer “les probabilités de résolution, le montant des indemnités et identifie les moyens les plus influents”). A ce jour aucun produit n’est proposé publiquement et nous ne savons donc pas ce qu’ils recouvrent exactement.

Malgré le nombre d’articles traitant du sujet, des points essentiels ne sont pas abordés. En particulier, la transparence dans la mise en oeuvre des algorithmes et la compréhension des résultats ne sont jamais discutées dans le cadre de la justice prédictive.

Nous pensons que les résultats générés par des solutions commerciales opaques présentent, en justice prédictive, un intérêt limité. Donner accès au code source et aux données est une manière de permettre aux utilisateurs (juristes, avocats, ou justiciables) de mesurer objectivement et de façon indépendante la qualité et la pertinence du résultat généré. Même si nombre d’entre eux ne le feront probablement pas (par exemple par manque de connaissances techniques), au moins ceux qui le peuvent pourront y procéder. Par ailleurs, certains aspects clés de l’algorithme liés à des questions juridiques peuvent bénéficier de contributions extérieures.

Pour faire un parallèle avec le droit, l’algorithme prédictif opaque est comme un juge qui motiverait ses décisions en citant des lois auxquelles personne d’autre que lui n’aurait accès.

C’est un vrai problème et il ne nous semble pas raisonnable qu’un professionnel du droit puisse un jour utiliser de quelque manière que ce soit une “prédiction” sur laquelle il n’a pas de contrôle. Ce serait similaire à un avocat qui cite dans ses conclusions des arrêts qu’il n’a jamais lus (il est bien connu que cela n’existe pas !). Cette question touche directement la déontologie et la qualité des travaux rendus aux justiciables.

Se pose aussi le problème de l’éviction mécanique de l’avocat de la justice prédictive :

d’un côté il lui est interdit l’acte commercial à titre principal (il ne peut donc pas proposer ce type de services à titre onéreux et à grande échelle via un site web) ; de l’autre il devrait financer la croissance de sociétés qui ont vocation à exercer une activité qui se confond avec la sienne. En effet, les clients qui consultent un avocat lui demandent d’évaluer les probabilités de résolution de leurs contentieux, le montant des indemnités éventuelles et d’identifier les arguments les plus influents pour faire valoir leurs droits, le tout en se basant sur la loi et la jurisprudence. Pourtant, à notre connaissance, l’article 54 de la loi du 31 décembre 1971 (exercice illégal de la profession d’avocat lorsque le conseil juridique est donné à titre onéreux) n’a pas encore été abrogé et la justice prédictive ne rentre pas par définition dans le champ de l’article 66-1 (exception relative à la diffusion de documentations juridiques ne nécessitant “aucun travail de réflexion qui permettrait de dégager \[quelle\] information serait la plus pertinente”). Il reviendra aux instances ordinales, au juge pénal, et au législateur de décider s’il existe (ou devrait exister) une exception à la loi de 1971 au bénéfice des algorithmes.

Les honoraires de l’avocat se retrouvent finalement coincés entre la déontologie et des sociétés commerciales de justice prédictive.

Afin de poser des bases saines, et proposer la justice prédictive dans le respect du monopole des avocats, nous annonçons la mise à disposition de tous, gratuitement, en open source d’un algorithme de justice prédictive au travers du projet OPJ (pour Open Predictive Justice bien sûr :-).

Nous l’avons appliqué à la délicate question des mesures d’éloignement des étrangers. Il s’agit du contentieux le plus volumineux en droit administratif et certainement l’un des plus graves (être renvoyé dans un pays où vous n’êtes pas le bienvenu peut être lourd de conséquences).

L’algorithme permet de prédire l’issue de ce contentieux à hauteur de 87,2%. Il nous a entre autres permis de découvrir que les décisions faisant figurer que l’étranger bénéficie de l’aide juridictionnelle (avocat payé par l’État) augmente sensiblement la probabilité de voir la décision d’éloignement annulée. Par contre, notre analyse montre que connaître l’identité du juge n’aide pas de façon significative à prédire l’issue du contentieux.

Ce second point est à mettre en perspective avec notre article sur l’impartialité des magistrats où grâce à notre moteur de recherche Supralegem.fr, nous avons montré d’importantes variations entre magistrats dans le traitement des contentieux en matière d’éloignement des étrangers (quelques-uns ayant un taux de rejet des demandes des étrangers proche de 100%). Nous expliquons plus bas comment ces deux constats s’articulent.

Le projet OPJ inclut le code source ainsi que le jeu de données associé (plus de 18 000 décisions de justice récentes annotées). Le projet est accessible à cette adresse. Nous prévoyons de rendre les résultats du projet facilement exploitables pour une personne n’ayant aucune connaissance particulière en informatique.

Nous plaçons le code sous licence permissive Apache 2.0 de façon à ce que toute personne puisse le réutiliser de la façon dont elle le souhaite. L’initiative est inspirée de celle menée par l’entrepreneur américain Elon Musk appelée OpenAI : "there is always some risk that in actually trying to advance (friendly) AI we may create the thing we are concerned about ; nonetheless, the best defense is to empower as many people as possible to have AI. If everyone has AI powers, then there's not any one person or a small set of individuals who can have AI superpower".

Le projet est applicable à toutes les questions de droit, qu’il s’agisse, par exemple, de fiscalité ou d’indemnités de licenciement. De par sa simplicité, l’approche choisie est transposable aux décisions rendues dans les droits d’autres pays.

Dans cet article nous expliquons la démarche que nous avons utilisée de manière à ce qu’elle puisse être répliquée par tout juriste sur toutes les questions de droit.

Nous lançons par ailleurs un appel à tous les juristes qui souhaitent voir une question spécifique traitée. N’hésitez pas à nous la signaler via les commentaires de l’article. Nous en tiendrons compte.

Si vous êtes praticien du droit et souhaitez participer à ce projet, signalez-le nous aussi via les commentaires (aucune connaissance en programmation n’est requise).

Enfin, n’hésitez pas non plus à partager notre démarche avec votre entourage qui serait susceptible d'être intéressé.

1/ Qu’est-ce que le machine learning ?

Il s’agit d’une expression vague qui regroupe toute une famille d’algorithmes qui ont en commun d’apprendre par eux même en observant des données. Ces algorithmes sont inspirés de différentes sciences et notamment des statistiques.

En matière de justice prédictive, c’est la sous-famille des algorithmes supervisés qui est utilisée. Ces algorithmes sont alimentés par des données (ex : des décisions de justice) et apprennent à prédire un résultat (ex : l’issue d’un contentieux).

L’essence du fonctionnement de ces algorithmes est de chercher dans les différentes propriétés des données celles qui sont le mieux corrélées avec le résultat. Par exemple, on peut imaginer que l’algorithme cherche dans chaque décision de justice les arguments soulevés qui sont les plus à même d’obtenir une victoire dans un contentieux.

Grâce à ce procédé, l’algorithme apprend à imiter les données, donc ici, imiter la façon qu’ont les juges de trancher les contentieux au regard des arguments avancés par les parties.

2/ Comment mesurer la qualité des prédictions d’un algorithme de justice prédictive ?

La façon la plus évidente de procéder à cette mesure est de fournir des données à l’algorithme et de mesurer la proportion des décisions dont il prédit correctement l’issue.

Dans notre cas, les données sont des descriptions du contenu des décisions (pour chaque décision, un peu moins d’une centaine de caractéristiques est fournie). On indique par exemple si le demandeur est une personne physique, si tel numéro d’article est cité ou si tel nom de pays apparaît. Ainsi, l’algorithme comprendra peut être que les décisions qui mentionnent Algérie et l'accord franco-algérien modifié du 27 décembre 1969 ont plus ou moins de chance d’être rejetés comparée à une argumentation basée sur le regroupement familial (article 8 de la CEDH).

L’expérience est menée sur plus de 18 000 arrêts de cours administratives d’appel (2012 à 2015) dont nous disposons une version non anonymisée relative au contentieux des mesures d’éloignement des étrangers (Obligation de Quitter le Territoire Français, OQTF ci-après). Bien entendu nous ne mettons en ligne que le texte des décisions anonymisées tel qu’il apparaît sur Légifrance. Certaines décisions sont exclues, en particulier celles se prononçant explicitement sur l’aide juridictionnelle.

Ci-après quand nous parlerons de demandeur personne physique il faudra donc comprendre que c’est un contentieux qui oppose un étranger à l’administration et que l’étranger demande à rester en France. Si c’est l’administration qui est en demande, c’est en général que l’administration a tenté d’éloigner l’étranger mais que le juge du premier degré a cassé la mesure d’éloignement.

L’algorithme apprend à “prédire” s’il y a eu un rejet de la demande ou non. Comme il est de coutume en machine learning, nous mesurerons les résultats sur un jeu de données que l’algorithme n’aura pas vu pendant la phase d’apprentissage.

3/ Quelle méthode utiliser pour prédire l’issue du contentieux ?

Il existe différentes familles d’algorithmes supervisés.

Pour notre projet, nous utiliserons XGBoost.

Cet algorithme :

représente l’état de l’art en apprentissage de données structurées ; est utilisé en production, entre autres, chez plusieurs des GAFA ; produit un modèle interprétable ; est disponible en open source sous licence permissive Apache 2.0 ; est mentionné dans plus de 180 conclusions de recherches scientifiques.

Disclaimer : l’auteur de cet article est l’un des principaux développeurs d’XGBoost.

4/ Comment avons-nous extrait les descriptions des arrêts ?

Le fonctionnement de notre algorithme repose sur l’extraction de certains éléments contenus dans les décisions de justice :

la description des faits ; la description des arguments utilisés par les parties ; les numéros d’articles présents dans la décision ; la nature des parties (personne physique ou administration) ; le nom du magistrat qui a présidé la chambre qui a rendu la décision.

Cette étape est spécifique à chaque question de droit traitée. Pour extraire ces éléments nous avons simplement cherché des chaînes de caractères dans les décisions.

Le texte a été extrait des décisions en open data, mis en minuscule et les retours à la ligne sont indiqués par la mention @L. Les points et les virgules ont été retirés. Ces traitements sont standards en machine learning appliqué au langage.

Toutes les mentions qui sont présentes moins de 200 fois sont retirées (il s’agit d’éviter le bruit dans les données). Plus de 29 000 caractéristiques ont été générées en combinant les caractéristiques existantes.

N’étant pas experts en droit des étrangers, nous sommes allés sur le site du GISTI (Groupe d’information et de soutien des immigré⋅e⋅s) et nous avons consulté le guide “Contester une obligation de quitter le territoire français, la procédure !” qui présente sur 10 pages des arguments juridiques à opposer à l’administration pour faire annuler une mesure d’éloignement. Pour chaque argument présenté, nous avons recherché via Supralegem.fr la façon dont il est rédigé dans les décisions et via les statistiques calculées par le site nous avons vérifié que la chaîne de caractères avait un effet sur les pourcentages de rejets de chaque cour administrative d’appel. En fonction de l’élément, nous cherchons sa présence dans tout le texte de la décision ou seulement dans les demandes.

Concernant les numéros d’article, l’extraction est faite automatiquement. La recherche des numéros pouvant donner une information sur l’issue du contentieux (ex : article L. 761-1 du Code de Justice Administrative concernant la condamnation aux dépens) est limitée aux demandes. De nos essais, il est apparu que l’extraction automatique des numéros donne les mêmes résultats que la sélection manuelle mais est beaucoup plus rapide à mettre en oeuvre (quelques minutes, nettoyage inclus, contre plusieurs heures).

Notre approche est simple et nous permet de garantir que les éléments extraits ont du sens. Une approche reposant exclusivement sur des extractions automatisées depuis le texte est possible mais n’offrirait pas le même degré de contrôle, de transparence et d’interprétabilité.

Il y a un compromis à trouver entre coût de mise en place de l’algorithme (en temps notamment) et qualité des résultats.

Ce choix emporte un certain nombre de conséquences. Il est possible d’imaginer que des questions de droit moins importantes (en volume et en enjeux par exemple) soient traitées davantage de façon automatisée. Cette question n’est pas spécifique à la justice prédictive mais concerne le machine learning en général. L’approche open source permet de poser la question de façon transparente (les procédés utilisés sont connus de tous) et permet à plusieurs personnes d’y répondre de différentes manières.

5/ Quels sont les résultats ?

Notre algorithme est capable de prévoir correctement 87% des rejets en se basant sur des extractions depuis le texte de plusieurs milliers de décisions. Les paramètres de l’algorithme n’ont pas été optimisés et nous pensons qu’il n’est pas difficile d’obtenir une amélioration significative des résultats. Pour comparaison, le taux de rejet moyen dans notre jeu de données est de 75%.

XGBoost a des fonctions avancées qui permettent d’étudier le modèle qu’il a généré sur la base des données qui lui ont été fournies. Il est ainsi possible de connaître les éléments qui sont les plus déterminants pour la prédiction, c’est-à-dire les arguments ou les faits les plus corrélés à l’issue du contentieux.

Plusieurs types d’analyses sont possibles :

identifier les caractéristiques les plus décisives pour déterminer l’issue d’un contentieux ; identifier les combinaisons (faits + arguments) les plus pertinentes ; calculer les pourcentages de réussite pour une combinaison donnée.

Dans le présent article, nous ne nous intéresserons qu’au premier point. Les deux autres seront traités postérieurement.

Nous avons listé les caractéristiques qui ont été utilisées par l’algorithme pour prédire le dispositif. Les deux plus importantes sont la nature du demandeur et du défendeur. Comme nous l’avons vu dans notre article sur l’impartialité des magistrats, les étrangers ont une forte probabilité (de l’ordre de 80%) de se faire rejeter leur demande d’annulation d’une mesure d’éloignement.

Un grand nombre de caractéristiques qui remontent ont trait au type de moyens soulevés. En particulier, savoir si une défense fondée sur le regroupement familial est décisive pour la prédiction. C’est un moyen bien connu et ce n’est donc pas une surprise.

La caractéristique suivante concerne l’insuffisance de motivation de l’OQTF lorsque le demandeur est l’administration. En faisant quelques recherches sur Supralegem.fr, on constate que lorsque l’administration est en demande et que la décision traite d’insuffisance de motivation de l’OQTF, l’administration gagne 90% du temps (25 points de plus que la moyenne) ! Cette solution est conforme aux dispositions de l’article L. 511-1 du CESDA et, de la lecture des décisions, il semble que quelques magistrats de tribunaux administratifs relevant principalement des cours administratives d’appel de Paris et de Lyon n’en tiennent pas compte. En appel ces jugements sont infirmés. L’enseignement que les avocats doivent en tirer, c’est que ce moyen ne fonctionne pas en appel. Notons tout de même que pratiquement 1 000 décisions du jeu de données y font référence...

La mention de l’aide juridictionnelle (avocat payé par l’État) lorsque le demandeur est une personne privée est très importante pour l’algorithme. Rappelons que les décisions se prononçant sur l’aide juridictionnelle ont été retirées du jeu de données. On pourrait penser que les décisions mentionnant l’Aide Juridictionnelle (AJ) présentent un taux de rejet moyen plus haut car les avocats qui la recevront sont objectivement mal rémunérés par l’État. Une recherche sur Supralegem.fr montre que c’est en fait le contraire, ces dossiers ont un de rejet 5 points inférieurs à la moyenne. Bien que la preuve de la résidence en France ne soit pas exigée pour obtenir l’AJ en cas d’OQTF, il y a des obligations documentaires à satisfaire. Il se pourrait que cela donne au juge une certaine confiance dans le dossier et aboutisse à un taux de rejet un plus bas. Une possible conséquence serait d’inviter les conseils à bien insister sur ce point dans leurs conclusions.

Exemple d’analyse graphique à venir

Il y a 1620 caractéristiques remontées. Les plus intéressantes seront traités dans un autre article.

6/ Connaître l’identité de son juge aide t-il à prédire la décision en OQTF ?

La technique utilisée en machine learning pour déterminer si une information est critique ou non pour un algorithme s’appelle l’ablation. Il s’agit simplement de comparer le score de prédiction avant et après le retrait de l’information dont on souhaite mesurer l’importance.

Nous avons donc retiré le nom des magistrats des descriptions des décisions. Dans ce contexte, la variation du taux de prédiction est d’un demi-point.

Si certains magistrats ont des taux de rejet en OQTF très élevés par rapport à la moyenne (voire proche de 100% comme nous l’avions expliqué), ils sont peu. C’est pour cela que la connaissance du nom du magistrat n’aide pas de façon statistiquement significative l’algorithme lorsque l’on considère le jeu de données dans son ensemble. Cependant, une étude du modèle généré montre que l’algorithme a trouvé de façon autonome les juges qui ont des taux de rejet particulièrement élevés et il s’en sert dans ses prédictions.

7/ Pourquoi avons-nous besoin de transparence en justice prédictive ?

La transparence est l’objet même de cet article. Sans transparence il n’est pas possible de mener une analyse critique du résultat. Sans analyse critique, il est impossible de savoir si un algorithme est fiable ou si l’approche est biaisée (même par une erreur faite de bonne foi).

Pourtant, la transparence sera difficile à obtenir de la part de sociétés commerciales françaises de justice prédictive.

Il faut savoir que dans l’industrie du machine learning, tous les grands acteurs (Google, Facebook, Stanford University, etc.) mettent en open source leurs principaux algorithmes (avec quelques exceptions) et publient les résultats de leurs recherches dans des dépôts gratuits comme arxiv.org (la référence mondiale, maintenue par l’Université de Cornell) ou HAL (la référence en France, maintenue par le CNRS). Il est communément admis que cette pratique a permis les évolutions fascinantes en machine learning auxquelles nous assistons.

Partager le code source n’est pas un problème pour ces acteurs, car ils possèdent des quantités de données brutes que les autres acteurs n’ont pas. Ils conservent donc un avantage concurrentiel malgré l’ouverture de leur code.

En legaltech, en France, cet avantage via l’accès aux données brutes ne sera pas possible car toutes les décisions seront mises en open data. Cela inclut même des bases antérieures à la Loi Lemaire comme Jurica, c’est-à-dire 100% de la jurisprudence des cours d’appel judiciaires depuis 2007. On disposera d’1,5 million de décisions par an issues de l’ordre judiciaire selon la Cour de cassation. Seules les décisions des tribunaux de commerce ne sont pas dans le champ du dispositif en matière civile.

Nous “prédisons” donc qu’il sera difficile aux sociétés commerciales en France d’ouvrir leurs algorithmes car elles n’auraient alors plus aucun avantage concurrentiel qui justifierait que leurs clients payent un abonnement. Pourtant, l’ouverture du code source est un moyen de permettre la transparence nécessaire pour comprendre d’où vient le résultat.

8/ Est-il pertinent d’apprendre à prédire l’issue d’un contentieux en analysant des décisions de justice ?

Les conclusions d’un avocat soutenant les prétentions de son client font souvent une dizaine de pages (annexes exclues). Dans de nombreux contentieux il y a deux parties dans un procès. Chaque conclusion propose une certaine vision de la réalité qui ne sont en général pas concordantes. La version présentée est souvent très “favorable” aux intérêts de chaque justiciable.

Seuls les éléments jugés pertinents à la compréhension des motifs et du dispositif sont rappelés dans la décision publiée. Dans les contentieux de masse (comme l’OQTF, le licenciement, etc.) cette tendance est encore plus forte (les décisions de cette matière sont très semblables les unes aux autres).

Les décisions de justice rendues en France sont connues pour être faiblement motivées. Elles tiennent souvent sur une ou deux pages (hors entête, etc.). En comparaison, aux États-Unis, une décision rendue par une cour fédérale fait en moyenne 9,1 pages.

Le problème, c’est que les éléments contenus dans les décisions sont par essence corrélés au dispositif. Une partie des moyens soulevés par un avocat ne sont pas vraiment examinés dans la décision (ils l’ont bien entendu été par le magistrat mais il ne va pas tout reprendre dans le texte de la décision). Parfois le moyen est surabondant (un autre moyen était plus efficace, ce n’est pas la peine d’étudier les autres), d’autres fois un problème sur la forme empêche l’examen sur le fond, etc. C’est tellement courant que l’absence de motivation est un des principaux motif de cassation.

Bien entendu, il ne s’agit pas ici de critiquer la manière dont les décisions sont écrites (chaque pays a ses traditions), mais uniquement de comprendre ce qui manque à ce document pour permettre à un algorithme prédictif de fonctionner efficacement.

Or, l’objet d’un algorithme de machine learning est de rechercher la corrélation entre les données et le résultat à prédire. Le simple fait que les données contenues dans les décisions sont par essence corrélées avec le dispositif introduit un biais de sélection qu’il nous semble difficile de mesurer. Pour éliminer ce biais, il nous faudrait accéder à des données extérieures à la décision comme les pièces du dossier (ces données ne sont pas en open data). La quantité des décisions utilisées pour chaque question de droit traitée permet certainement, dans une certaine mesure, de limiter ce biais (sans mesure objective pour comparer on ne peut que spéculer).

Les informations latentes dans la décision présentent une autre difficulté. Par exemple, en matière de licenciement d’un manager, est-il pertinent de comparer le sort réservé par un conseil des prud’hommes à un manager d’un restaurant Mcdonald's avec celui d’un manager d’un cabinet de consultants comme Deloitte ? Comment l’algorithme peut-il comprendre que ces situations ne sont pas comparables si une partie des décisions (notamment celles qui tiennent sur une demi-page A4) ne mentionne pas explicitement la différence de situation (que nous, humains, devinons au travers du nom de l’employeur) ?

Un autre point à considérer est qu’il est possible qu’en fonction du dispositif le juge choisisse une rédaction spécifique. Il est par exemple envisageable que les juges utilisent l’expression “atteinte disproportionnée” lorsqu’ils veulent expliquer que dans le cas jugé il n’y en a pas. Si tel est le cas, il faudra en tenir compte pendant la phase d’extraction des caractéristiques des données.

Enfin, rappelons que si un algorithme peut prédire une grande partie des dispositifs, c’est aussi parce que les juges appliquent avant tout la loi qui est la même d’un cas à un autre (nous aimerions lire plus souvent cette évidence dans les articles de presse qui parlent de justice prédictive).

Il faut donc rester vigilant sur les promesses de la justice prédictive. Il s’agit assurément d’un outil puissant qui nous apprendra beaucoup sur notre justice mais il faudra nous assurer que les différents biais possibles sont parfaitement connus et pris au mieux en compte dans les résultats produits. Seule la transparence dans la démarche est à même d’atteindre ces objectifs. Autrement, quand on ne sait pas comment l’algorithme fonctionne, comment les données sont préparées, la liste des postulats utilisés, il est facile de réaliser des prédictions qui ne valent pas mieux que celles des voyants et autres professionnels des arts divinatoires.

Vendeuse de poudre entourée de justiciables crédules.
