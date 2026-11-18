// Un ticket : { id: 12, piece: "Bol", historique: ["À faire", "Façonnage", "Séchage", "Perte"] }
// `historique` liste les étapes par lesquelles la pièce est passée, de la plus ancienne à la plus récente.
//
// Renvoie le nombre de pièces perdues par étape, par exemple :
//   { "Séchage": 2, "Cuisson biscuit": 1 }
//
// Les règles :
// - Une pièce est perdue quand la dernière étape de son historique est "Perte".
// - Elle a cassé à l'étape juste avant "Perte".
// - S'il n'y a pas d'étape avant "Perte", compte-la dans "Inconnue".
// - Les pièces qui n'ont pas été perdues ne sont pas comptées.

// Ta démarche, avant le code :
//

export function pertesParEtape(tickets) {
  throw new Error("À implémenter");
}
