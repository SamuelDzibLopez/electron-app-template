/**
 * Maneja la información mostrada en la UI
 */

export function setAppInfo(infoElement) {
  infoElement.innerText =
    `Esta aplicación está usando Chrome (v${window.versions.chrome()}), ` +
    `Node.js (v${window.versions.node()}), ` +
    `Electron (v${window.versions.electron()}), ` +
    `Creador de app ${window.dates.author}`;
}

/**
 * Ejemplo de comunicación IPC asincrónica
 */
export async function pingMain() {
  const response = await window.dates.ping();
  console.log(response); // 'pong'
}
