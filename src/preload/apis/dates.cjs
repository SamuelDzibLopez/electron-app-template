/**
 * API de datos generales y funciones asincrónicas
 * Nota: el nombre "dates" se conserva para no romper el renderer
 */
module.exports = (ipcRenderer) => ({
  ping: () => ipcRenderer.invoke("ping"),
  author: "Samuel Dzib López",
});
