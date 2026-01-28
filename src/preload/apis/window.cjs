/**
 * API para controlar la ventana actual
 */
module.exports = (ipcRenderer) => ({
  toggleFullscreen: () => ipcRenderer.send("toggle-fullscreen"),
});
