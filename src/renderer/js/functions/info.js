/**
 * Maneja la información mostrada en la UI
 */

export function setAppInfo(infoElement) {
  infoElement.innerHTML =
    `Esta aplicación está usando <span class="text-bold">Chrome (v${window.versions.chrome()})</span>, <span class="text-bold">Node.js (v${window.versions.node()})</span>, <span class="text-bold">Electron (v${window.versions.electron()})</span>.`;
}


export function setAppAuthor(infoElement) {
  infoElement.innerText =
    `${window.dates.author}.`;
}

/**
 * Ejemplo de comunicación IPC asincrónica
 */
export async function pingMain() {
  const response = await window.dates.ping();
  console.log(response); // 'pong'
}
