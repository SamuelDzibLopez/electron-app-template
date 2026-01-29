import { ipcMain } from "electron";
import {
  createPersonaje,
  getPersonajes,
  updatePersonaje,
  deletePersonaje,
} from "../services/personajes.service.js";

export function registerPersonajesIpc() {

  ipcMain.handle("personajes:create", (_e, data) => {
    return createPersonaje(data);
  });

  ipcMain.handle("personajes:read", () => {
    return getPersonajes();
  });

  ipcMain.handle("personajes:update", (_e, data) => {
    return updatePersonaje(data);
  });

  ipcMain.handle("personajes:delete", (_e, id) => {
    return deletePersonaje(id);
  });

}
