//Preload necesita CommonJS
const { contextBridge, ipcRenderer } = require("electron");




//Expone variables globales en la precarga
contextBridge.exposeInMainWorld("versions", {

  //Funciones nativas de Node
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
});





contextBridge.exposeInMainWorld("dates", {
  //Funciones asincronas
  ping: () => ipcRenderer.invoke('ping'),

  //Variables globales
  author: "Samuel Dzib López",});





contextBridge.exposeInMainWorld("windowAPI", {
  toggleFullscreen: () => ipcRenderer.send("toggle-fullscreen"),
});






contextBridge.exposeInMainWorld("electronAPI", {
  closeApp: () => ipcRenderer.invoke("app:close"),
});
