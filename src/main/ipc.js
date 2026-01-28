// Importación de módulos de Electron
import { app, BrowserWindow, ipcMain } from "electron/main";


 // Registra todos los handlers y listeners IPC
export function registerIpcHandlers() {

  //handle personalizado llamado "ping"
  ipcMain.handle("ping", () => "pong");

  //handle para cerrar la app
  ipcMain.handle("app:close", () => {
    app.quit();
  });

  //handle para fullScreen
  ipcMain.on("toggle-fullscreen", () => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) {
      win.setFullScreen(!win.isFullScreen());
    }
  });
}
