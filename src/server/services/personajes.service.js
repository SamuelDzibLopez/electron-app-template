import db from "../db/index.js";

/* =========================
   CREATE
========================= */
export function createPersonaje({ nombre, edad }) {
  if (!nombre || edad == null) {
    throw new Error("nombre y edad son requeridos");
  }

  const result = db.prepare(
    "INSERT INTO personajes (nombre, edad) VALUES (?, ?)"
  ).run(nombre, edad);

  return {
    id: result.lastInsertRowid,
    nombre,
    edad,
  };
}

/* =========================
   READ
========================= */
export function getPersonajes() {
  return db.prepare(
    "SELECT * FROM personajes"
  ).all();
}

/* =========================
   UPDATE
========================= */
export function updatePersonaje({ id, nombre, edad }) {
  if (!id) {
    throw new Error("id es requerido");
  }

  const result = db.prepare(
    "UPDATE personajes SET nombre = ?, edad = ? WHERE id = ?"
  ).run(nombre, edad, id);

  if (result.changes === 0) {
    throw new Error("Personaje no encontrado");
  }

  return {
    id,
    nombre,
    edad,
  };
}

/* =========================
   DELETE
========================= */
export function deletePersonaje(id) {
  if (!id) {
    throw new Error("id es requerido");
  }

  const result = db.prepare(
    "DELETE FROM personajes WHERE id = ?"
  ).run(id);

  if (result.changes === 0) {
    throw new Error("Personaje no encontrado");
  }

  return { success: true };
}
