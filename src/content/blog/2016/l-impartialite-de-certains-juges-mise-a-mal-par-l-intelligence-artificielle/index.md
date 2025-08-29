---
tags: ["Ethics", "Judicial Analytics", "Law", "LLMs"]
title: "L’impartialité de certains juges mise à mal par l’intelligence artificielle"
description: "L’impartialité de certains juges mise à mal par l’intelligence artificielle Michael BENESTY Head Of Research And Development at Lefebvre Sarrut (Dalloz, Francis Lefebvre, Éditions "
pubDatetime: 2016-03-24T02:03:00.000Z
draft: false
author: mbenesty

---

> Article d'origine: https://www.village-justice.com/articles/impartialite-certains-juges-mise,21760.html

<blockquote >
<p>Le juge administratif se doit d’être indépendant et impartial (art L721-1, R721-1 et s. du Code de justice administrative sur la récusation ou le fameux article 6 de la Convention européenne des droits de l’homme). Est-il sérieusement envisageable d’attendre d’un homme, aussi vertueux soit-il, une impartialité parfaite&nbsp;? Probablement pas, et c’est ce que nous montrent les algorithmes &#171;&nbsp;prédictifs&nbsp;&#187;.</p>
</blockquote>  

<p>Dans le cadre de sa politique <i>open data</i>, l&#8217;État français<span class="spip_note_ref">&nbsp;[<a href='#nb3-1' class='spip_note' rel='appendix' title='Via le site de la mission Etalab' id='nh3-1'>1</a>]</span> a mis à disposition de tous plus de 350 000 décisions de justice correspondant au contenu du site Légifrance<span class="spip_note_ref">&nbsp;[<a href='#nb3-2' class='spip_note' rel='appendix' title='Les décisions disponibles en open data représentent un à deux tiers de&nbsp;(...)' id='nh3-2'>2</a>]</span>. Face à cette quantité de textes, les outils de recherche existants sont parfois inadaptés.</p>
<p>Parallèlement, la communauté technologique (universités, centre de recherche, petites et grandes sociétés) a fait évoluer de façon spectaculaire les algorithmes prédictifs dédiés à la compréhension du langage humain. L’état de l’art nous permet d’extraire des informations fiables et précises à partir de documents comme un humain le ferait.</p>
<p>Cette combinaison nouvelle, où données juridiques et algorithmes puissants sont disponibles, offre la possibilité de traiter massivement la jurisprudence en vue d&#8217;en extraire une vision synthétique et inédite.</p>
<p><a href="http://supralegem.fr" class='spip_out' rel='external'>Supralegem.fr</a> applique ces algorithmes pour extraire entre autres la qualité du demandeur<span class="spip_note_ref">&nbsp;[<a href='#nb3-3' class='spip_note' rel='appendix' title='Personne privée, gouvernement, puissance publique...' id='nh3-3'>3</a>]</span> et du défendeur, la nature du dispositif<span class="spip_note_ref">&nbsp;[<a href='#nb3-4' class='spip_note' rel='appendix' title='Annulation, rejet, décharge d’impôts, sursis à statuer...' id='nh3-4'>4</a>]</span> ou le thème de la décision<span class="spip_note_ref">&nbsp;[<a href='#nb3-5' class='spip_note' rel='appendix' title='Parmi une quarantaine, comme droit des étrangers, fiscalité, urbanisme...' id='nh3-5'>5</a>]</span>.</p>
<p>Pour cela, nous faisons lire de nombreux textes aux algorithmes puis nous leur posons plusieurs millions de questions, tous textes confondus. Lorsque la réponse est fausse, les algorithmes s’adaptent de manière à ce que cette erreur n’arrive plus (ou qu’elle arrive moins souvent). La procédure est répétée une centaine de fois. Un serveur spécialement équipé, dont la puissance brute équivaut approximativement à une cinquantaine d’ordinateurs classiques, met entre 5 et 6 jours pour tout exécuter. Enfin, les résultats sont mis à disposition pour être interrogés par les juristes en quelques secondes.</p>
<p>La précision de nos résultats se situe entre 90% et 99% en fonction du champ extrait. C&#8217;est à  notre connaissance la première fois que des algorithmes ayant une forme de compréhension du sens des mots et des phrases sont appliqués à la jurisprudence francaise.</p>
<p>La suite de la méthodologie est simple. Les décisions qui traitent d&#8217;une question de droit sont sélectionnées puis agrégées afin de calculer des statistiques par juge ou par cour. Cela permet de comparer, par exemple, le taux de rejet entre plusieurs juges.</p>
<p>Cette approche est véritablement innovante dans la mesure où les tendances sont dégagées à partir de données objectives et vérifiables et non des points de vue subjectifs et des rumeurs. C’est un vrai changement de paradigme.</p>
<h2 class="spip">2/ Le cas des Obligations de Quitter le Territoire Français (OQTF).</h2>
<p>Une possible application de cette démarche concerne les demandes d’annulation d’<a href="https://www.service-public.fr/particuliers/vosdroits/F18362" class='spip_out' rel='external'>Obligation de Quitter le Territoire Français</a> (OQTF ci-après).  Il s’agit de la mesure d’éloignement dont peuvent être frappés les étrangers en situation irrégulière ayant pour conséquence la reconduite à la frontière. Lorsque la demande est rejetée, cela signifie que l’étranger doit quitter le territoire français. Ce contentieux est le plus important en quantité dans les juridictions administratives<span class="spip_note_ref">&nbsp;[<a href='#nb3-6' class='spip_note' rel='appendix' title='Plus d’informations sur ce contentieux ici.' id='nh3-6'>6</a>]</span>.</p>
<p>La partialité de certains juges en matière d&#8217;OQTF est un sujet sensible plusieurs fois dénoncé par différents acteurs du système juridique comme l’assistant de justice <a href="https://twitter.com/bismatoj" class='spip_out' rel='external'>@bismatoj</a> sur Twitter en  2015<span class="spip_note_ref">&nbsp;[<a href='#nb3-7' class='spip_note' rel='appendix' title='Les Tweets en question sont disponibles via ce lien.' id='nh3-7'>7</a>]</span>.</p>
<p>L’<a href="http://www.metiers.justice.gouv.fr/la-justice-hors-de-la-fonction-publique-12684/assistant-de-justice-26855.html" class='spip_out' rel='external'>assistant de justice</a> est un jeune juriste qui assiste un magistrat en rédigeant des projets de décision. L’assistant de justice se voit confier des dossiers par le magistrat rapporteur, et est lui-même chargé d’analyser les échanges d’écritures et les pièces produites devant la juridiction. Dès lors, il se forge une conviction juridique à l’instar du magistrat, et propose un sens du jugement que le magistrat administratif est libre de suivre. Ce sont les magistrats qui ont le dernier mot, mais sur les cas simples, ils reprendront le plus souvent le travail de l’assistant.</p>
<p>Selon cet assistant de justice, certains présidents de chambre demandent, pour les dossiers de demande d’annulation d’OQTF, à ce qu’un projet de jugement de rejet de la demande d’annulation soit systématiquement rédigé <strong>avant</strong> même d’avoir étudié le dossier au fond et en maîtriser le contexte juridique et factuel. Un jugement de rejet est proposé par l’assistant de justice, y compris lorsqu’il est contraire à sa conviction et que le dossier semble solide et à l’avantage de l’étranger. Pour ces juges, le rejet serait effectivement prononcé dans 90% des cas.</p>
<p>Les algorithmes de <a href="http://supralegem.fr/" class='spip_out' rel='external'>Supralegem.fr</a> nous permettent de vérifier cette affirmation en sélectionnant les décisions qui concernent les demandes d’annulation d’OQTF et en calculant les taux de rejet par année, par juge et par cour.</p>
<p>Nous sélectionnons les décisions dont le thème est le droit des étrangers qui contiennent les expressions &#8220;quitter le territoire&#8221;, &#8220;étranger&#8221; et &#8220;asile&#8221;. Nous ne gardons que les affaires où le requérant est un particulier et où le défendeur est l’administration.</p>
<p>Nous pouvons extraire les taux de rejet les plus bas et les plus hauts parmi les juges qui ont émis le plus de décisions. Par &#8220;juge&#8221;, il faut comprendre président de la chambre qui a statué dans la suite de cet article.</p>
<table class="table table-bordered table-striped" summary="Demandeur&amp;nbsp;: particulier / Défendeur&amp;nbsp;: administration">
<caption>Sélection des 3 juges ayant le taux de rejet le plus haut ou le plus bas parmi les 20% de juges administratifs d&#8217;appel qui émettent le plus de décisions relatives à l’OQTF</caption>
<thead><tr class='row_first'><th id='id09e0_c0'>Chambre présidée par...</th><th id='id09e0_c1'>Cour adm. d’appel</th><th id='id09e0_c2'>% 2012</th><th id='id09e0_c3'>% 2013</th><th id='id09e0_c4'>% 2014</th><th id='id09e0_c5'>% 2015</th><th id='id09e0_c6'>
Nb. décisions 
[12-15]</th></tr></thead>
<tbody>
<tr class='row_odd odd'>
<td headers='id09e0_c0'>Guerrive</td>
<td headers='id09e0_c1'>Marseille</td>
<td headers='id09e0_c2'>78%</td>
<td headers='id09e0_c3'>47%</td>
<td headers='id09e0_c4'>43%</td>
<td headers='id09e0_c5'>60%</td>
<td class='numeric ' headers='id09e0_c6'>455</td></tr>
<tr class='row_even even'>
<td headers='id09e0_c0'>Cherrier</td>
<td headers='id09e0_c1'>Marseille</td>
<td headers='id09e0_c2'>NA</td>
<td headers='id09e0_c3'>NA</td>
<td headers='id09e0_c4'>67%</td>
<td headers='id09e0_c5'>63%</td>
<td class='numeric ' headers='id09e0_c6'>233</td></tr>
<tr class='row_odd odd'>
<td headers='id09e0_c0'>Krulic</td>
<td headers='id09e0_c1'>Paris</td>
<td headers='id09e0_c2'>NA</td>
<td headers='id09e0_c3'>NA</td>
<td headers='id09e0_c4'>60%</td>
<td headers='id09e0_c5'>73%</td>
<td class='numeric ' headers='id09e0_c6'>199</td></tr>
<tr class='row_even even'>
<td headers='id09e0_c0'>Tandonnet Turot</td>
<td headers='id09e0_c1'>Paris</td>
<td headers='id09e0_c2'>90%</td>
<td headers='id09e0_c3'>97%</td>
<td headers='id09e0_c4'>98%</td>
<td headers='id09e0_c5'>100%*</td>
<td class='numeric ' headers='id09e0_c6'>228</td></tr>
<tr class='row_odd odd'>
<td headers='id09e0_c0'>Pellissier</td>
<td headers='id09e0_c1'>Nancy</td>
<td headers='id09e0_c2'>NA</td>
<td headers='id09e0_c3'>93%</td>
<td headers='id09e0_c4'>92%</td>
<td headers='id09e0_c5'>96%</td>
<td class='numeric ' headers='id09e0_c6'>302</td></tr>
<tr class='row_even even'>
<td headers='id09e0_c0'>Mortelecq</td>
<td headers='id09e0_c1'>Douai</td>
<td headers='id09e0_c2'>92%</td>
<td headers='id09e0_c3'>92%</td>
<td headers='id09e0_c4'>92%</td>
<td headers='id09e0_c5'>0%*</td>
<td class='numeric ' headers='id09e0_c6'>419</td></tr>
</tbody>
</table>

<p>Dans ce premier tableau, les présidents de chambre Tandonnet Turot et Mortelecq <strong>ont des taux de rejet exceptionnels</strong> supérieurs à 90% durant 3 années consécutives. Et même si ces résultats peuvent être améliorés –lorsque les données sur 2012 et 2013 ne sont pas disponibles – on peut d’ores et déjà être étonné. Les autres résultats présentés sont moins saisissants mais méritent de faire l’objet d’une <a href="http://supralegem.fr/" class='spip_out' rel='external'>analyse plus poussée</a>. Plusieurs facteurs peuvent expliquer ces taux de rejet : un afflux de dossiers particuliers dans ces juridictions ou des juges simplement plus rigoureux sur l’application de la loi. Il est toutefois difficile d’écarter complètement l’existence d’un biais.</p>
<p>Pour vérifier si  le phénomène n’est pas le même quel que soit le sens du dossier, on a réalisé le même traitement en inversant les parties : requérant = administration, défendeur = particulier. Dans ce cas, aucun enjeu éthique ne tient au fait qu’un magistrat préfère l’intérêt général à la situation individuelle d’un étranger en particulier.</p>

<table class="table table-bordered table-striped" summary="Demandeur&amp;nbsp;: administration / Défendeur&amp;nbsp;: particulier">
<caption>Sélection des 3 juges ayant le taux de rejet le plus haut ou le plus bas parmi les 20% de juges administratifs d&#8217;appel qui émettent le plus de décisions relatives à l’OQTF</caption>
<thead><tr class='row_first'><th id='id85b3_c0'>Chambre présidée par...</th><th id='id85b3_c1'>Cour adm. d’appel</th><th id='id85b3_c2'>% 2012</th><th id='id85b3_c3'>% 2013</th><th id='id85b3_c4'>% 2014</th><th id='id85b3_c5'>% 2015</th><th id='id85b3_c6'>
Nb. décisions 
[12-15]</th></tr></thead>
<tbody>
<tr class='row_odd odd'>
<td headers='id85b3_c0'>Guerrive</td>
<td headers='id85b3_c1'>Marseille</td>
<td headers='id85b3_c2'>16%*</td>
<td headers='id85b3_c3'>64%</td>
<td headers='id85b3_c4'>55%</td>
<td headers='id85b3_c5'>89%*</td>
<td class='numeric ' headers='id85b3_c6'>37</td></tr>
<tr class='row_even even'>
<td headers='id85b3_c0'>Cherrier</td>
<td headers='id85b3_c1'>Marseille</td>
<td headers='id85b3_c2'>NA</td>
<td headers='id85b3_c3'>NA</td>
<td headers='id85b3_c4'>71%</td>
<td headers='id85b3_c5'>12%*</td>
<td class='numeric ' headers='id85b3_c6'>29</td></tr>
<tr class='row_odd odd'>
<td headers='id85b3_c0'>Krulic</td>
<td headers='id85b3_c1'>Paris</td>
<td headers='id85b3_c2'>NA</td>
<td headers='id85b3_c3'>NA</td>
<td headers='id85b3_c4'>78%</td>
<td headers='id85b3_c5'>65%</td>
<td class='numeric ' headers='id85b3_c6'>61</td></tr>
<tr class='row_even even'>
<td headers='id85b3_c0'>Tandonnet Turot</td>
<td headers='id85b3_c1'>Paris</td>
<td headers='id85b3_c2'>0%</td>
<td headers='id85b3_c3'>6%</td>
<td headers='id85b3_c4'>5%</td>
<td headers='id85b3_c5'>NA</td>
<td class='numeric ' headers='id85b3_c6'>121</td></tr>
<tr class='row_odd odd'>
<td headers='id85b3_c0'>Pellissier</td>
<td headers='id85b3_c1'>Nancy</td>
<td headers='id85b3_c2'>NA</td>
<td headers='id85b3_c3'>0%</td>
<td headers='id85b3_c4'>50%*</td>
<td headers='id85b3_c5'>60%*</td>
<td class='numeric ' headers='id85b3_c6'>16</td></tr>
<tr class='row_even even'>
<td headers='id85b3_c0'>Mortelecq</td>
<td headers='id85b3_c1'>Douai</td>
<td headers='id85b3_c2'>50%*</td>
<td headers='id85b3_c3'>22%</td>
<td headers='id85b3_c4'>23%</td>
<td headers='id85b3_c5'>NA</td>
<td class='numeric ' headers='id85b3_c6'>80</td></tr>
</tbody>
</table>

<p>Dans ce second tableau, nous retrouvons les juges Tandonnet Turot et Mortelecq parmi les juridictions qui ont <strong>les plus faibles taux de rejet</strong>, alors qu’ils ont les plus forts taux de rejet lorsque le demandeur est un particulier. La conclusion semble suggérer que le sens du jugement varie selon la personne qui demande, et non selon la nature du dossier.</p>
<p>Ces résultats ne suffisent pas à affirmer que ces juges ne sont pas impartiaux. Cependant, ils méritent d’attirer l’attention et d’être investigués par les juridictions concernées.</p>


<p>Nous mettons à disposition les données et les méthodes d’analyse afin que chacun puisse reproduire et discuter ces résultats.</p>

<p class="h4 add-mg-top">Notes de l'article: </p>
                <p class="article-notes">
                  <small><div id='nb3-1'>
<p><span class="spip_note_ref">[<a href='#nh3-1' class='spip_note' title='Notes 3-1' rev='appendix'>1</a>]&nbsp;</span>Via le <a href="https://www.data.gouv.fr/fr/datasets/jade/" class='spip_out' rel='external'>site</a> de la mission Etalab</p>
</div><div id='nb3-2'>
<p><span class="spip_note_ref">[<a href='#nh3-2' class='spip_note' title='Notes 3-2' rev='appendix'>2</a>]&nbsp;</span>Les décisions disponibles en <i>open data</i> représentent un à deux tiers de l&#8217;ensemble des décisions émises par chaque cour d&#8217;appel sur la période étudiée.</p>
</div><div id='nb3-3'>
<p><span class="spip_note_ref">[<a href='#nh3-3' class='spip_note' title='Notes 3-3' rev='appendix'>3</a>]&nbsp;</span>Personne privée, gouvernement, puissance publique...</p>
</div><div id='nb3-4'>
<p><span class="spip_note_ref">[<a href='#nh3-4' class='spip_note' title='Notes 3-4' rev='appendix'>4</a>]&nbsp;</span>Annulation, rejet, décharge d’impôts, sursis à statuer...</p>
</div><div id='nb3-5'>
<p><span class="spip_note_ref">[<a href='#nh3-5' class='spip_note' title='Notes 3-5' rev='appendix'>5</a>]&nbsp;</span>Parmi une quarantaine, comme droit des étrangers, fiscalité, urbanisme...</p>
</div><div id='nb3-6'>
<p><span class="spip_note_ref">[<a href='#nh3-6' class='spip_note' title='Notes 3-6' rev='appendix'>6</a>]&nbsp;</span>Plus d&#8217;informations sur ce contentieux <a href="https://www.village-justice.com/articles/Recours-contre-OQTF,19227.html">ici</a>.</p>
</div><div id='nb3-7'>
<p><span class="spip_note_ref">[<a href='#nh3-7' class='spip_note' title='Notes 3-7' rev='appendix'>7</a>]&nbsp;</span>Les Tweets en question sont disponibles via <a href="https://storify.com/De_lege_lata/oqtf-on-rejette" class='spip_out' rel='external'>ce lien</a>.</p>
</div><div id='nb3-8'>
<p><span class="spip_note_ref">[<a href='#nh3-8' class='spip_note' title='Notes 3-8' rev='appendix'>8</a>]&nbsp;</span>Le taux moyen élevé de rejets s’explique par la nature du contentieux et le fait que l’administration émet des OQTF pour une grande partie fondées.</p>
</div><div id='nb3-9'>
<p><span class="spip_note_ref">[<a href='#nh3-9' class='spip_note' title='Notes 3-9' rev='appendix'>9</a>]&nbsp;</span>Elle n’est qu’apparente car nous ne disposons pas de plus d’éléments que ces statistique.</p>
</div><div id='nb3-10'>
<p><span class="spip_note_ref">[<a href='#nh3-10' class='spip_note' title='Notes 3-10' rev='appendix'>10</a>]&nbsp;</span>De 2000 à aujourd’hui.</p>
</div><div id='nb3-11'>
<p><span class="spip_note_ref">[<a href='#nh3-11' class='spip_note' title='Notes 3-11' rev='appendix'>11</a>]&nbsp;</span>Le site est en constante évolution et nous invitons le lecteur à faire des retours aux auteurs (sur Twitter <a href="https://twitter.com/supralegem" class='spip_out' rel='external'>@supralegem</a> ou par courriel <a href="https://www.village-justice.com/articles/Mentions-legales,16300.html#droits" class='spip txt-bleu'>contact</a> ). Nous sommes autant intéressés par les usages que vous envisagez qu&#8217;une critique constructive des fonctionalités existantes.</p>
<p>Si vous trouvez d’autres situations étonnantes dans les décisions, n’hésitez pas non plus à nous en faire part. Si notre équipe trouve votre sujet pertinent, nous pourrons vous aider à creuser plus loin dans vos recherches.</p>
<p>Le projet est mené avec Anthony Sypniewski. Supralegem.fr est un projet sans lien avec les employeurs des membres du projet.</p>
</div></small>
                </p>
