// Importamos BrowserWindow y Menu desde Electron
import { BrowserWindow, Menu } from "electron/main";

// Módulos nativos de Node
import path from "node:path";
import { fileURLToPath } from "node:url";

// Reemplazo de __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Crea y configura la ventana principal de la aplicación
 * @returns {BrowserWindow}
 */
export function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,

    //Activar si desea inicar la App con FullScreen
    fullscreen: false,

    webPreferences: {
      preload: path.join(__dirname, "../preload/index.cjs"),
      contextIsolation: true, // explícito

      //Desactivar en versión final build
      devTools: true,
    },
  });

  // const template = [
  //   {
  //     label: "Archivo",
  //     submenu: [
  //       { role: "quit" }
  //     ]
  //   }
  // ];

  // const menu = Menu.buildFromTemplate(template);

  //Descomentar si desea eliminar (null) el menu navito default o uno personalizado (template)
  // Menu.setApplicationMenu(null);

  // Bloquear Ctrl + Shift + i o F12 (Descomentar para producción)
  // win.webContents.on("before-input-event", (event, input) => {
  //   if (
  //     (input.control && input.shift && input.key.toLowerCase() === "i") ||
  //     input.key === "F12"
  //   ) {
  //     event.preventDefault();
  //   }
  // });

  win.loadFile("src/renderer/index.html");

  return win;
}
