// Importación de módulos de Electron
import { BrowserWindow, Menu } from "electron/main";

// Importación de módulos de Node
import path from "node:path";
import { fileURLToPath } from "node:url";

// Reemplazo de __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Creación y configuración de ventana principal de la aplicación
export function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 650,
    icon: path.join(__dirname, "../assets/icons/favicon.ico"),

    fullscreen: false,

    webPreferences: {
      preload: path.join(__dirname, "../preload/index.cjs"),
      contextIsolation: true,

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

  //Archivo de renderización
  win.loadFile("src/renderer/pages/index.html");

  return win;
}
