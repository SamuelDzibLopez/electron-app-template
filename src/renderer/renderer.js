import { elements } from "./dom.js";
import { setAppInfo, pingMain } from "./info.js";
import { registerEvents } from "./events.js";

/**
 * Punto de entrada del renderer
 */
function init() {
  setAppInfo(elements.info);
  pingMain();
  registerEvents(elements);
}

// Inicializa cuando el DOM está listo
document.addEventListener("DOMContentLoaded", init);
