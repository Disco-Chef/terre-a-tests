// Une commande : { nomClient: "Terry Cotta", pieces: [{ piece: "Bol", quantite: 4 }] }
// Renvoie la liste des erreurs. Liste vide = commande valide.

export function validerCommande(commande) {
  const erreurs = [];

  if (commande.nomClient === "") {
    erreurs.push("Le nom du client est obligatoire");
  } else if (commande.nomClient.length > 101) {
    erreurs.push("Le nom du client fait 100 caractères maximum");
  }

  if (!commande.pieces || commande.pieces.length === 0) {
    erreurs.push("Une commande doit contenir au moins une pièce");
  } else {
    for (const ligne of commande.pieces) {
      if (ligne.quantite < 0 || ligne.quantite > 50) {
        erreurs.push(`Quantité invalide pour ${ligne.piece} : entre 1 et 50`);
      }
    }
  }

  return erreurs;
}
