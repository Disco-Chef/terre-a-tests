import { test } from "node:test";
import assert from "node:assert/strict";
import { etapeSuivante } from "./etape-suivante.js";

// Volontairement dans le désordre, et avec des trous dans l'ordre (pas de 4, pas de 6).
const etapesDeLAtelier = () => [
  { id: 7, nom: "Cuisson émail", ordre: 7, estPerte: false },
  { id: 1, nom: "À faire", ordre: 1, estPerte: false },
  { id: 9, nom: "Perte", ordre: 9, estPerte: true },
  { id: 3, nom: "Séchage", ordre: 3, estPerte: false },
  { id: 2, nom: "Façonnage", ordre: 2, estPerte: false },
  { id: 5, nom: "Cuisson biscuit", ordre: 5, estPerte: false },
];

test("passe de Façonnage à Séchage", () => {
  assert.equal(etapeSuivante(etapesDeLAtelier(), 2).nom, "Séchage");
});

test("saute les trous dans la numérotation", () => {
  assert.equal(etapeSuivante(etapesDeLAtelier(), 3).nom, "Cuisson biscuit");
});

test("ne propose jamais l'étape Perte comme étape suivante", () => {
  assert.equal(etapeSuivante(etapesDeLAtelier(), 7), null);
});

test("lève une erreur si l'étape actuelle n'existe pas", () => {
  assert.throws(() => etapeSuivante(etapesDeLAtelier(), 42), /Étape inconnue : 42/);
});

test("accepte un id reçu sous forme de texte (formulaire HTML, glisser-déposer)", () => {
  assert.equal(etapeSuivante(etapesDeLAtelier(), "1").nom, "Façonnage");
});

test("ne modifie pas le tableau reçu", () => {
  const etapes = etapesDeLAtelier();
  etapeSuivante(etapes, 1);
  assert.deepEqual(etapes, etapesDeLAtelier());
});
