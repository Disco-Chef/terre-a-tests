// Une étape : { id: 3, nom: "Séchage", ordre: 3, estPerte: false }
//
// FONCTION etapeSuivante(etapes, etapeActuelleId)
//   actuelle ← l'étape de `etapes` dont l'id vaut etapeActuelleId
//   SI actuelle n'existe pas
//     LEVER une erreur "Étape inconnue : <etapeActuelleId>"
//   candidates ← les étapes dont l'ordre est plus grand que actuelle.ordre
//                ET qui ne sont pas une étape de perte
//   SI candidates est vide
//     RENVOYER null
//   RENVOYER la candidate qui a le plus petit ordre

export function etapeSuivante(etapes, etapeActuelleId) {
  throw new Error("À implémenter");
}
