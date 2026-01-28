// Importacion de modulos nativos de electron
import { app, BrowserWindow, ipcMain, Menu } from 'electron/main';

// Importacion de modulos nativos de Node
import path from "node:path";
import { fileURLToPath } from "node:url";

// Reemplazo de __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Creación de una arrow function para crear una nueva ventana
const createWindow = () => {

  // Creacion de nueva ventana, con sus dimensiones
  const win = new BrowserWindow({
    width: 800,
    height: 600,

    //Activar este atributo si desea que al iniciar la App, sea fullscreen
    // fullscreen: true,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      
      // Activar en versión final para Build
      // devTools: false,

    },
  });


    //Activar si desea eliminar el navbar de ventana default de la App
    // Menu.setApplicationMenu(null);

    // Activar en versión final para Build
    // win.webContents.on("before-input-event", (event, input) => {
    //     if (
    //     (input.control && input.shift && input.key.toLowerCase() === "i") ||
    //     input.key === "F12"
    //     ) {
    //     event.preventDefault();
    //     }   
    // });

  // Define que archivo renderizar al iniciar
  win.loadFile("index.html");
};

// Promesa que al prepararse ejecuta la funcion createWindow
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  // Ejecucion de funcion createWindow
  createWindow();

  // Para MacOS
  app.on("activate", () => {
    // Si no existen ventanas abiertas, crea una nueva ventana
    if (BrowserWindow.getAllWindows().length === 0) {
      // Ejecucion de funcion createWindow
      createWindow();
    }
  });
});

ipcMain.handle("app:close", () => {
  app.quit(); // 👈 cierra la app
});

// Al cerrar todas las ventanas
app.on("window-all-closed", () => {
  // Si no se ejecuta en MacOS
  if (process.platform !== "darwin") {
    // Cerrar la app
    app.quit();
  }
});

//Funcionamiento de FullScreem
ipcMain.on("toggle-fullscreen", () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    win.setFullScreen(!win.isFullScreen());
  }
});

