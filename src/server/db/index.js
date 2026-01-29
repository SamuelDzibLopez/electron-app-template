import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

// Compatibilidad con ES Modules (__dirname)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta del archivo DB
const dbPath = path.join(__dirname, "app.db");

// Crear / abrir DB
const db = new Database(dbPath);

// Crear tabla personajes (si no existe)
db.prepare(`
  CREATE TABLE IF NOT EXISTS personajes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    edad INTEGER NOT NULL
  )
`).run();

console.log("📦 DB inicializada correctamente");

export default db;
