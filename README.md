# Terre à tests 🏺

Petit kata d'entretien technique. Le décor : un atelier de céramique qui suit ses
pièces à travers les étapes de fabrication (façonnage, séchage, cuisson…).

Il n'y a pas de piège caché dans l'installation, et pas besoin de tout finir.
Ce qui compte, c'est **comment tu réfléchis** : dis à voix haute ce que tu penses,
ce que tu essaies, et ce qui te surprend.

## Installation

Il te faut seulement [Node.js](https://nodejs.org) 20 ou plus. Aucune dépendance à installer.

```bash
git clone <url-de-ce-repo>
cd terre-a-tests
node --version   # v20 ou plus
npm test         # lance tous les tests (certains échouent au départ, c'est normal)
```

Chaque exercice a sa commande : `npm run test:1`, `npm run test:2`, etc.

## Exercice 0 : avant de commencer

1. Crée une branche pour ton travail, et dis-nous pourquoi tu la nommes ainsi : quelle
   convention tu suis, et à quoi elle sert dans une équipe.
2. Fais un commit à la fin de chaque exercice, avec un message qui dira quelque chose
   à la personne qui relira ton travail dans six mois.

## Exercice 1 : l'étape suivante

📁 `exercices/1-etape-suivante/`

Quand une pièce est prête, on la fait passer à l'étape suivante. Le pseudo-code est
déjà écrit dans `etape-suivante.js` : à toi de le transformer en code qui marche.

Lance `npm run test:1` souvent. Si un test échoue alors que tu pensais avoir
fini, lis bien son message : il te dit quelque chose sur les données réelles.

## Exercice 2 : où casse-t-on ?

📁 `exercices/2-pertes/`

Ella Gile, qui dirige l'atelier, veut savoir **à quelle étape** les pièces cassent,
pour savoir quoi améliorer en premier.

Chaque ticket garde l'historique des étapes par lesquelles la pièce est passée.
Quand une pièce casse, sa dernière étape est `"Perte"`. L'étape où elle a cassé est
donc celle juste avant.

**Avant d'écrire du code**, explique ta démarche : à voix haute, en commentaire ou
en pseudo-code. Ensuite seulement, implémente `pertesParEtape` (`npm run test:2`).

## Exercice 3 : chasse aux bugs

📁 `exercices/3-chasse-aux-bugs/`

`validerCommande` vérifie une commande avant de l'enregistrer. Les règles métier :

| Champ | Règle |
|---|---|
| `nomClient` | obligatoire, pas seulement des espaces, 100 caractères maximum |
| `pieces` | au moins une ligne |
| `quantite` (de chaque ligne) | nombre entier, entre 1 et 50 inclus |

Tous les tests passent… et pourtant, le code contient plusieurs bugs.

1. Liste d'abord tes cas de test (un tableau, ou des scénarios Gherkin) **sans lire le code**.
2. Écris-les dans `valider-commande.test.js` : ils doivent faire apparaître les bugs.
3. Corrige le code, jusqu'à ce que tous les tests passent.

## Exercice 4 : le ménage

📁 `exercices/4-menage/`

`statut-commande.js` marche (les tests passent), mais personne n'ose y toucher.
Rends-le lisible pour la prochaine personne, **sans changer son comportement** :
les tests doivent rester verts du début à la fin (`npm run test:4`).

Question bonus : en relisant les tests, y a-t-il une règle métier qui te semble
bizarre ? Qu'est-ce que tu ferais ?
