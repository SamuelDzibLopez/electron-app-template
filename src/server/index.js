import Database from "better-sqlite3";
import { app } from "electron";
import path from "path";
import pc from "picocolors";

const dbPath = path.join(app.getPath("userData"), "personajes.db");

console.log(pc.green("DB path:"), pc.blue(dbPath));

const db = new Database(dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS personajes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    edad INTEGER
  )
`).run();

console.log(pc.green("BD lista y preparada"));

export default db;
