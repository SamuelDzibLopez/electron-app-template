// Importación de módulos de Electron
const { contextBridge, ipcRenderer } = require("electron");

/**
 * API de versiones
 */
const versionsAPI = {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
};

/**
 * API de datos generales
 */
const datesAPI = {
  ping: () => ipcRenderer.invoke("ping"),
  author: "Samuel Dzib López (DZEL21S)",
};

/**
 * API de ventana
 */
const windowAPI = {
  toggleFullscreen: () => ipcRenderer.send("toggle-fullscreen"),
};

/**
 * API de la app
 */
const electronAPI = {
  closeApp: () => ipcRenderer.invoke("app:close"),
};

/**
 * Exposición segura al renderer
 */
contextBridge.exposeInMainWorld("versions", versionsAPI);
contextBridge.exposeInMainWorld("dates", datesAPI);
contextBridge.exposeInMainWorld("windowAPI", windowAPI);
contextBridge.exposeInMainWorld("electronAPI", electronAPI);
