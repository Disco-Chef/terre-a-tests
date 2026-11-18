import { test } from "node:test";
import assert from "node:assert/strict";
import { calc } from "./statut-commande.js";

test("une commande sans ticket est à faire", () => {
  assert.equal(calc([]), "a_faire");
});

test("une commande dont aucune pièce n'a commencé est à faire", () => {
  assert.equal(calc([{ etape: "À faire" }, { etape: "À faire" }]), "a_faire");
});

test("une commande dont une pièce a commencé est en cours", () => {
  assert.equal(calc([{ etape: "À faire" }, { etape: "Séchage" }]), "en_cours");
});

test("une commande dont toutes les pièces sont terminées est terminée", () => {
  assert.equal(calc([{ etape: "Terminé" }, { etape: "Terminé" }]), "terminee");
});

test("une commande dont toutes les pièces ont cassé est terminée", () => {
  assert.equal(calc([{ etape: "Perte" }, { etape: "Perte" }]), "terminee");
});

test("une pièce terminée et une pièce cassée : la commande est terminée", () => {
  assert.equal(calc([{ etape: "Terminé" }, { etape: "Perte" }]), "terminee");
});
