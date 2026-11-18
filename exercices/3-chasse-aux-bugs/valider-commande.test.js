import { test } from "node:test";
import assert from "node:assert/strict";
import { validerCommande } from "./valider-commande.js";

test("une commande correcte n'a aucune erreur", () => {
  const commande = { nomClient: "Terry Cotta", pieces: [{ piece: "Bol", quantite: 4 }] };
  assert.deepEqual(validerCommande(commande), []);
});

test("refuse un nom de client vide", () => {
  const commande = { nomClient: "", pieces: [{ piece: "Bol", quantite: 4 }] };
  assert.deepEqual(validerCommande(commande), ["Le nom du client est obligatoire"]);
});

test("refuse une commande sans pièce", () => {
  const commande = { nomClient: "Kiln Eastwood", pieces: [] };
  assert.deepEqual(validerCommande(commande), ["Une commande doit contenir au moins une pièce"]);
});

test("refuse une quantité trop grande", () => {
  const commande = { nomClient: "Emma Taillage", pieces: [{ piece: "Tasse", quantite: 99 }] };
  assert.deepEqual(validerCommande(commande), ["Quantité invalide pour Tasse : entre 1 et 50"]);
});

// À toi : ajoute ici les cas qui manquent.
