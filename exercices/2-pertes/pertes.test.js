import { test } from "node:test";
import assert from "node:assert/strict";
import { pertesParEtape } from "./pertes.js";

test("aucun ticket, aucune perte", () => {
  assert.deepEqual(pertesParEtape([]), {});
});

test("ignore les pièces qui n'ont pas cassé", () => {
  const tickets = [
    { id: 1, piece: "Vase", historique: ["À faire", "Façonnage", "Séchage", "Terminé"] },
    { id: 2, piece: "Tasse", historique: ["À faire", "Façonnage"] },
  ];
  assert.deepEqual(pertesParEtape(tickets), {});
});

test("compte l'étape juste avant la perte", () => {
  const tickets = [
    { id: 1, piece: "Bol", historique: ["À faire", "Façonnage", "Séchage", "Perte"] },
    { id: 2, piece: "Assiette", historique: ["À faire", "Façonnage", "Séchage", "Perte"] },
    { id: 3, piece: "Vase", historique: ["À faire", "Façonnage", "Séchage", "Cuisson biscuit", "Perte"] },
    { id: 4, piece: "Tasse", historique: ["À faire", "Façonnage", "Séchage", "Terminé"] },
  ];
  assert.deepEqual(pertesParEtape(tickets), { "Séchage": 2, "Cuisson biscuit": 1 });
});

test("une pièce perdue sans historique est rangée dans « Inconnue »", () => {
  const tickets = [{ id: 1, piece: "Bol", historique: ["Perte"] }];
  assert.deepEqual(pertesParEtape(tickets), { Inconnue: 1 });
});
