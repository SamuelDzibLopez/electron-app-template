// Importamos módulos principales de Electron
import { app, BrowserWindow } from "electron/main";

// Importamos módulos internos
import { createWindow } from "./createWindow.js";
import { registerIpcHandlers } from "./ipc.js";

/**
 * Evento cuando Electron está listo
 */
app.whenReady().then(() => {
  registerIpcHandlers();
  createWindow();

  // macOS: recrear ventana si no hay abiertas
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

/**
 * Cierra la app cuando todas las ventanas se cierran (excepto macOS)
 */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
