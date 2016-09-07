---
title: "La qualité de l'anonymisation des décisions de justice par machine learning baisse de façon drastique en fonction du nombre de mentions à anonymiser"
description: "La qualité de l'anonymisation des décisions de justice par machine learning baisse de façon drastique en fonction du nombre de mentions à anonymiser Michael BENESTY Head Of Researc"
pubDatetime: 2016-09-07T00:00:00.000Z
draft: false
author: "Michaël Benesty"
tags: ["Anonymisation", "Machine Learning", "Données juridiques", "Statistiques", "NLP"]
---

> Article d'origine: https://www.linkedin.com/pulse/les-obstacles-%C3%A0-une-parfaite-anonymisation-des-de-justice-benesty
![La qualité de l'anonymisation des décisions de justice par machine learning baisse de façon drastique en fonction du nombre de mentions à anonymiser](./img-01.jpg)

Dans un précédent article, nous avons expliqué les enjeux entourant l’anonymisation des décisions de justice (qui vont bientôt être massivement disponibles) et les différentes techniques existantes pour approcher cette tâche.

Le projet Open Law organise des ateliers visant à aider les juridictions à ouvrir les décisions du fonds. Ce n’est pas un secret, les membres du projet Supralegem.fr sont des passionnés de machine learning. Il nous a semblé évident de faire quelques rapides tests d’application des derniers algorithmes de Name Entity Recognition (NER) aux décisions de justice, pour se faire une idée de la tâche à mener. Les résultats nous ont paru suffisamment pertinents pour les partager.

Nous avons obtenu en mai 2016 un lot de décisions non anonymisées en droit des étrangers (mesures d'éloignement mis à disposition par une association spécialisée sur ce sujet). Dans ce lot, nous en avons identifié un millier que l’on retrouve sur Légifrance (depuis un décret de 2014, les décisions Légifrance sont librement accessibles sous forme XML).

1/ Présentation du protocole et des outils

Après OCR des décisions originales (les décisions sont en PDF de bonne qualité), nous avons comparé le texte de chaque décision avec celui issu de Légifrance. Nous avons ensuite identifié les différences. Pour ne pas introduire d’erreur, nous avons conservé uniquement les différences qui portaient sur des noms pseudo anonymisés, concrètement, pour chaque différence identifiée, on a gardé que celles qui portent sur M. X, Mme. Y, etc. Les autres informations personnelles comme les adresses, téléphones, etc. sont hors du périmètre de notre expérience. Enfin, les mentions M. X. (Y., Z. ...) dans le texte issu de Légifrance sont remplacées par les noms originaux. Ces données serviront de base à notre expérience.

Tout ce travail a pour objet de “dé-anonymiser” temporairement un millier de décisions Légifrance et créer un jeu de données pour l’entraînement de nos algorithmes pour anonymiser les autres décisions dans le cadre particulier des ateliers Open Law (nous ne pourrons pas diffuser ce jeu de données conformément au CAVEAT de la Dila, à la loi CADA, et la loi Informatique et Libertés).

On dénombre en moyenne par décision entre 10 et 20 mentions à anonymiser dans cet échantillon en droit des étrangers. Les ateliers Open Law porteront entre autres sur les décisions judiciaires qui comptent beaucoup plus de mentions à anonymiser par décision. On le verra, ce point est important.

Pour l’ensemble du corpus, nous avons un peu plus de 15 900 mentions marquées que notre algorithme devra retrouver.

Comme algorithme, nous avons choisi celui qui représente aujourd’hui l’état de l’art en matière de NER (présentation ici). Ses auteurs ont mis à disposition le code en open source pour le tester. Sans rentrer dans les détails, il s’agit en fait d’un algorithme classique (CRF) auquel est adjoint une couche “deep learning” relativement standard et dans l’air du temps (représentation vectorielle des caractères en plus des mots, Bi-LSTM…). Les résultats rapportés sont censés être légèrement meilleurs que les algorithmes classiques (1 point de F1).

Les auteurs insistent principalement sur le fait que l’algorithme n’a pas besoin de données linguistiquement enrichies (c’est le cas pour certains autres algorithmes). Cela semble être un bon point, car cela signifie que l’algorithme est agnostique de la langue utilisée, il fonctionnera donc sur le français sans nécessiter de modification.

Comme toujours en machine learning, nous avons divisé notre jeu de données en 3 :

le premier est utilisé par l’algorithme  pour apprendre (70%, soit 700 décisions) ; le second n’est pas vu par l’algorithme pendant l'entraînement et sert à définir les meilleurs paramètres (10%, soit 100 décisions) ; le dernier n’est utilisé qu’à la fin de l’expérience pour tester la qualité de l’apprentissage une fois que tous les choix techniques ont été faits (20%, soit 200 décisions).

Les mesures rapportées ne sont faites que sur le 3ème jeu.

Cette façon de procéder permet de vérifier le fonctionnement d’un algorithme sur des données qu’il n’a jamais vues et pour lesquelles les paramètres n’ont pas été optimisés. On mesure alors le caractère générique du modèle calculé.

Suite à quelques adaptations du code en open source (les codes open source qui accompagnent les papiers sont rarement pensés pour être utilisés par quelqu’un d’autre que l’auteur), nous l’avons lancé sur notre jeu de données.

2/ Présentation des résultats

Quelques réglages (jours...) plus tard, nous découvrons un taux F1 de 89% sur le jeu de test. C’est un score tout à fait honorable dans la fourchette de nos attentes. Les auteurs de l'algorithme rapporte, sur d'autres données, un taux F1 de 90% en anglais et 85% en allemand.

Nous avons ensuite étudié un échantillon d’erreurs pour mieux comprendre leurs origines.

Certaines erreurs ont des causes apparentes : il y a une faute dans la phrase, deux mots sont collés, le nom de famille ressemble à un nom commun ou la majuscule est manquante… D’autre fois, la cause ne semble pas évidente.

Il y a plusieurs autres intervenants personnes physiques dans ce type de décisions (une femme ou un mari, des enfants, des cousins, un employeur, etc.).

Une astuce simple pour réduire le nombre d’erreurs repose sur le fait que dans les décisions originales (en PDF), le nom des parties figure en en-tête.

On a donc appliqué un premier traitement pour identifier de façon déterministe (c’est-à-dire sans machine learning) les mentions des parties en nous basant sur le nom indiqué en en-tête de la décision. Puis nous avons combiné les résultats avec ceux de l’algorithme.

Enfin, nous avons retiré des résultats :

tous les mots marqués comme mentions à anonymiser qui ne commencent pas par une majuscule et qui sont présents dans une liste de mots en français (il y en a peu, mais puisque les noms étrangers ne ressemblent pas aux mots français, l’approche est sans risque et ne peut donc qu’améliorer notre score, elle ne marcherait peut être pas avec des décisions hors du droit des étrangers), les noms de juges, rapporteurs, et autres auxiliaires de justice (détectés via des règles manuelles et l’utilisation des informations de l’en-tête).

Avec l’ajout de toutes ces règles manuelles, le taux de mentions correctement identifiées grimpe à 96%, ce qui représente une belle progression.

À cette étape, pratiquement toutes les erreurs restantes sont des mentions oubliées (il n’y a plus de nom commun marqué comme mention à anonymiser par exemple).

3/ Un score effectif très insuffisant

Nous avons décompté un peu moins de 80 documents (sur 200 du jeu de test) comportant une erreur au minimum (il y a 137 oublis sur les 3268 mentions à trouver).

Dans un problème d’anonymisation, utiliser le taux de mentions correctement identifiées comme mesure n’a pas de sens.

Si dans une décision anonymisée, il y a 19 fois M. X et une fois M. Martin (mention oubliée du fait d’une erreur de l’algorithme), les 19 pseudo “M. X.” sont sans effet, la décision dans son ensemble ne peut pas être considérée comme anonymisée.

Par exemple, si l’on sait que le jugement de divorce date de novembre 2015, qu’il est rendu par le TGI de Lille, et concerne M. Martin, chauffeur de taxi à Lille, et Mme Y, secrétaire de direction, que M. Martin a eu une aventure avec Mme Z., il est tout à fait envisageable que l’identité de Mme. Y. et Mme Z. soient déduites avec celle de M. Martin, enfin non..., de M. X. :-)

Dit autrement, même en affichant un taux de 96% de mentions correctement identifiées, on se retrouve avec un taux de décisions effectivement (c’est-à-dire complètement) anonymisées d’à peine plus de 60% !

4/ Comment expliquer ce score médiocre ?

Le taux de mentions correctement identifiées est de 96% par mention. Si on a deux mentions dans un document, il y a donc 96% de chance de trouver la première, puis 96% de trouver la seconde (avec quelques limites évoquées ci-dessous). Comme les deux évènements (identifier une mention) sont quasiment indépendants, la probabilité d’identifier simultanément les deux mentions est approximativement : 0.96 X 0.96 = 0.92

Si on généralise, pour N mentions il y a 0.96^N chances en théorie de trouver toutes les mentions.

Dans notre jeu de données il y a en moyenne 16 mentions par documents, le taux par document devrait donc être de 0.96^16 = 0.52 (ce qui est proche du taux constaté).

L’écart entre le taux constaté (0.6) et le taux calculé (0.52) est certainement lié au fait que notre hypothèse d’indépendance n'est pas parfaitement respectée. En particulier, le modèle utilisé intègre une couche CRF. Or, l'une des forces des CRF est d'optimiser le problème à l'échelle de la phrase et non de chaque mot. Dans le cas où plusieurs mentions sont présentes dans la même phrase (un nom et un prénom par exemple), il n'y a pas indépendance entre les deux prédictions de l'algorithme, c’est à dire qu’on ne peut plus simplement multiplier les probabilités de chaque événement pour avoir la probabilité de leur survenance simultanée. Plus exactement, dans une phrase comportant deux mentions à anonymiser, la probabilité de trouver la seconde est augmentée lorsque la première est identifiée. En revanche, cette dépendance n'existe pas entre les phrases, c'est pourquoi l'effet reste limité dans notre cas.  Enfin, prendre 0.96 comme taux est très simplificateur, le taux est mesuré globalement, mais le taux par mention est différent en fonction du nombre de mentions par phrases, etc. Notre but est uniquement de mettre en avant la mécanique baissière de la qualité de l'anonymisation.

Il serait intéressant de mesurer ce taux sur des décisions longues comportant plus de 50 mentions à identifier. Il est fort possible que dans ce cadre, certaines phrases se ressemblent suffisament pour que le postulat de pseudo indépendance ne tienne plus du tout, et que la baisse soit moins prononcée que celle que nous calculons.

Faute de plus d'information, l’approximation de la transformation du taux calculée semble suffisante pour avoir une idée de la conversion du taux par mention en taux par document.

On gardera à l'esprit que la mesure théorique présentée ci-dessous est basée sur certains postulats (indépendance, etc.)

Surtout, au-delà des chiffres exacts qui sont certainement propres à notre échantillon, elle indique que la tâche d'anonymisation est un problème dont la qualité baisse de façon drastique en fonction du nombre de mentions par document avec un algorithme qui travaille au niveau des mots ou des phrases (et non au niveau du document), ce qui le rend difficilement soluble par l'application des algorithmes de machine learning connus.

On le comprend, il y a deux éléments clés qui influent sur la qualité de l’anonymisation :

Le taux de réussite d’identification par mention ; Le nombre de mentions à identifier par document.

Nous avons produit ci-dessous un graphique montrant, pour un taux fixe de réussite d’identification de 96%, le rapport théorique entre le nombre de mentions à identifier par document et le taux d’anonymisation parfaite du document.

Comme on peut le constater, dès 10 mentions à anonymiser par document, le taux théorique d’anonymisation parfaite est déjà à 60%, ce qui nous semble très insuffisant au regard des enjeux. À 40 mentions, le taux théorique d’anonymisation parfaite est ridiculement bas (en judiciaire, 40 mentions et plus par décision est une situation tout à fait commune).

La question qui se pose alors est de déterminer à quel taux d’identification par mention le taux d’anonymisation parfaite du document est acceptable (même si la notion d’acceptabilité reste à définir). On a donc tracé cette courbe en prenant comme hypothèse 16 mentions à anonymiser par document.

Pour avoir un taux d’erreur de 10% (qui est déjà important), il faudrait un algorithme ayant un taux d’identification par mention de plus de 99% (en théorie). L’état de l’art en septembre 2016 des algorithmes mis au point dans les universités (donc en avance sur les systèmes utilisés dans l’industrie) est à 92%. Même en “trichant” par l’ajout de règles manuelles, on arrive péniblement à 96%. Or, d’une manière générale en machine learning, plus le taux est haut, plus il faut d’efforts pour progresser.

En matière de bases de données en santé (où le problème de l’anonymisation des données se pose aussi), le taux de rappel (différent de l'accuracy, on en parle ici pour comparaison des grandeurs) rapporté en anglais (langue plus facile à traiter pour les machines, car morphologiquement pauvre) est de 94%.

On voit bien que l’approche anonymisation à 100% via le machine learning (c’est-à-dire sans aucune intervention humaine) se heurte à un plafond de verre.

5/ Les autres défauts de notre approche

L’autre grand défaut de notre approche c’est que nous avons utilisé les décisions Légifrance comme référentiel. Ces décisions ont été anonymisées via un système “rule based” (voir ce lien pour plus d'information) et (partiellement) corrigées à la main par le personnel de la Dila. Nous avons noté qu’il reste un certain nombre d’erreurs du type “Mme. A., née Tartenpion”, par ailleurs des noms étrangers composés sont complètement ignorés dans les décisions supposées anonymisées. Enfin, le système rule based est facile à apprendre pour un algorithme, nous soupçonnons fortement notre modèle d’être biaisé sur ces règles (qui sont très régulières) par rapport aux corrections humaines (qui ne le sont pas).

Sans avoir été exhaustifs, nous estimons à 10% le taux d’erreur sur notre échantillon. Il est possible que ce taux soit particulièrement élevé dans notre cas car les noms étrangers sont difficiles à identifier pour des systèmes basés sur des règles (plusieurs composants dans le nom, etc.).

Cependant, comme on l’a vu plus haut, la moindre baisse dans le taux de mentions correctement identifiées entraîne une baisse drastique du taux de décisions complètement anonymisées.

Enfin, nous avons complètement ignoré les autres informations personnelles qui apporteront leur lot d’erreurs. Certes, sur ces mentions le taux de détection sera sûrement très bon (les adresses sont simples à reconnaître, car elles suivent une structure bien définie), et l’ajout de ces mentions fera monter mécaniquement le taux global (97, 98, voire 99%?) mais pour chaque ratage de plus du fait de ces mentions, ce sera une décision complète et toutes ses autres mentions qui ne pourront plus être considérées comme parfaitement anonymisées.

6/ Quelques pistes ?

De tout cela, il ressort que le machine learning, même à l’état de l’art, n’est peut-être pas une solution autosuffisante (c'est-à-dire sans règle manuelle) au problème de pseudo-anonymisation. Les résultats devront être vérifiés par un humain avec le coût que cela représente.

Pour les décisions de justice futures, la solution la plus simple sera certainement de les annoter pendant qu’elles sont écrites par les greffes/magistrats (via un logiciel dédié).

Cette idée n’est pas sans rappeler une interview il y a quelques années du directeur du machine learning du site Booking.com qui expliquait que la façon la plus simple d’identifier si un commentaire d’un client sur un hôtel était positif ou négatif était de mettre à disposition de ce dernier deux cases, une pour les commentaires positifs, et l’autres pour les commentaires négatifs (au lieu d’utiliser des algorithmes sophistiqués pour identifier la nature du sentiment du commentaire).

Concernant les décisions de justice du passé, la question reste entière.

L’un des intérêts de cet article est de présenter le lien qui existe entre le taux par mention et le taux par document. De la relation identifiée on sait que pour améliorer le taux par document, il faut :

soit augmenter le taux d'identification par mention ; soit réduire le nombre de mentions. 7/ Stratégie basée sur la réduction du nombre de mentions

Une idée simple (que nous n’avons pas testé) nous semble prometteuse :

pour chaque décision, il faudrait stocker les mentions identifiées ; dans un second temps, il faudrait rechercher d’autres occurrences non détectées de ces mention dans le même texte ; on pourrait aussi  étendre la procédure aux occurrences comportant une faute d’orthographe (distance Levenshtein <= 1, une distance plus grande pourrait introduire trop de bruit). Par cette astuce, on ne cherche plus toutes les mentions, mais au moins une occurrence de chaque mention.

Plus une mention est répétée, plus elle a de chance d’être trouvée. C'est la variété des mentions qui doit être considérée pour évaluer la variation de la qualité de l'anonymisation et non plus simplement la quantité.

Quelques approximations rapides sur un coin de table laissent penser que le taux minimum par document qu'on est censé atteindre tourne autour de 85% (certainement insuffisant pour la CNIL mais bien meilleur que celui de notre expérience). Un taux de 90% nous semble accessible. Au delà, il semble difficile de pouvoir se passer de la correction par des opérateurs humains.

8/ Stratégies basées sur l'amélioration du taux d'identification de chaque mention

Une autre stratégie (moins prometteuses selon nous) serait d’utiliser plusieurs algorithmes aux biais non corrélés. Ceci rendrait l’approche beaucoup plus compliquée en améliorant les choses à la marge seulement.

Un dernier point concernant l'algorithme choisi : il nous semble être un mauvais choix. Nous avons troqué la souplesse d'un modèle linéaire classique contre un gain qui semble négligeable par rapport aux taux habituellement constatés pour un NER en français.

Les auteurs de l'algorithme que nous avons utilisé disent que les résultats qu'ils obtiennent sont sans enrichissement des données et présente cela comme un avantage. Ce qu'ils omettent de signaler, c'est que les enrichissements (en tout cas ceux que nous avons tenté) ne produisent aucun effet sur le score final. C'est un comportement typique des black boxes basées sur le deep learning. Une piste serait donc d'adopter un autre algorithme et d'enrichir les données notamment via l'usage d'un gazeeter. Encore mieux, ce serait d'avoir un algorithme qui traite le problème à l'échelle de la décision. Nous n'en connaissons pas (n'hésitez pas à commenter si vous avez un lien à partager).

Reste alors le problème des erreurs dans le jeu d’entraînement qui nécessite de retravailler les anonymisations à la main.

Nous sommes impatients de découvrir quelles seront les propositions des personnes qui participeront aux ateliers Open Case Law !!!

Nota bene 7/9/16 - 15:00 : il nous a été signalé qu'il était difficile de comparer les différentes mesures que nous avons fournies, car elles sont de natures différentes (F1, recall et accuracy par mention notamment). Il est signalé dans l'article que ces mesures sont fournies pour comparaison des grandeurs. Elles sont fournies, car ce sont celles que nous trouvons dans les papiers. C'est une erreur de notre part car dans les cas extrêmes elles peuvent être complètement déconnectées. Par ailleurs, l'article a été modifié pour remplacer le terme complexité exponentielle par baisse drastique de qualité.
