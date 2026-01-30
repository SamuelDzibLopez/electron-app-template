// Importación de módulos de Electron
import { app, BrowserWindow } from "electron/main";

// Importamos módulos internos
import { createWindow } from "./createWindow.js";
import { registerIpcHandlers } from "./ipc.js";

// Inicializar electron (Evento cuando Electron está listo)
app.whenReady().then(() => {

  // Inicializar handlers y listeners IPC
  registerIpcHandlers();


  // Inicializar la ventana de la App 
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Cerrar la app cuando todas las ventanas se cierran (excepto macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
