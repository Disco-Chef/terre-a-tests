// Une étape : { id: 3, nom: "Séchage", ordre: 3, estPerte: false }
//
// Variables suggérées :
//   actuelle     l'étape dont l'id vaut etapeActuelleId
//   candidates   les étapes qui viennent après `actuelle` et qui ne sont pas une perte
//
// 1. Trouve `actuelle`. Si elle n'existe pas, lève l'erreur "Étape inconnue : <etapeActuelleId>".
// 2. Construis `candidates`.
// 3. Si `candidates` est vide, renvoie null.
// 4. Sinon, renvoie la candidate qui vient en premier dans l'atelier, c'est-à-dire la plus proche (plus petit ordre).

export function etapeSuivante(etapes, etapeActuelleId) {
  throw new Error("À implémenter");
}
