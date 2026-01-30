// Importación de módulos de Electron
import { app, BrowserWindow, ipcMain } from "electron/main";
import { createPersonaje, getPersonajes, updatePersonaje, deletePersonaje } from "../server/services/personajes.service.js";
 
import pc from "picocolors";

// Registra todos los handlers y listeners IPC
export function registerIpcHandlers() {

  // handle personalizado llamado "ping"
  ipcMain.handle("ping", () => {
    return "pong";
  });

  // handle para cerrar la app
  ipcMain.handle("app:close", () => {
    app.quit();
  });

  // handle para fullScreen
  ipcMain.on("toggle-fullscreen", () => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) {
      win.setFullScreen(!win.isFullScreen());
    }
  });

  // ---- BACKEND ----

  ipcMain.handle("personajes:create", (_e, data) => {
    return createPersonaje(data);
  });

  ipcMain.handle("personajes:read", () => {
    return getPersonajes();
  });

  ipcMain.handle("personajes:update", (_e, data) => {
    return updatePersonaje(data);
  });

  ipcMain.handle("personajes:delete", (_e, id) => {
    return deletePersonaje(id);
  });

  console.log(pc.green("IPC handlers cargados..."));
}
