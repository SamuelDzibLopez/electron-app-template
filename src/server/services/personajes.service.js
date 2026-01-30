import db from "../index.js";

export function createPersonaje({ nombre, edad }) {
  const result = db
    .prepare("INSERT INTO personajes (nombre, edad) VALUES (?, ?)")
    .run(nombre, edad);

  return { id: result.lastInsertRowid, nombre, edad };
}

export function getPersonajes() {
  return db.prepare("SELECT * FROM personajes").all();
}

export function updatePersonaje({ id, nombre, edad }) {
  db.prepare(
    "UPDATE personajes SET nombre = ?, edad = ? WHERE id = ?"
  ).run(nombre, edad, id);

  return { id, nombre, edad };
}

export function deletePersonaje(id) {
  db.prepare("DELETE FROM personajes WHERE id = ?").run(id);
  return { success: true };
}
