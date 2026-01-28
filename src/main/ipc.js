import { app, BrowserWindow, ipcMain } from "electron/main";

/**
 * Registra todos los handlers y listeners IPC
 */
export function registerIpcHandlers() {

  ipcMain.handle("ping", () => "pong");

  ipcMain.handle("app:close", () => {
    app.quit();
  });

  ipcMain.on("toggle-fullscreen", () => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) {
      win.setFullScreen(!win.isFullScreen());
    }
  });
}
