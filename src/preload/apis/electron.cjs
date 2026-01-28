/**
 * API relacionada al ciclo de vida de la app
 */
module.exports = (ipcRenderer) => ({
  closeApp: () => ipcRenderer.invoke("app:close"),
});
