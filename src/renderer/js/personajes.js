// Inputs
import { inputs, buttons } from "./functions/dom.js";

// Desestructuración de elementos buttons
const { btnCreate, btnRead, btnUpdate, btnDelete } = buttons;

/* ======================
   CREATE
====================== */
btnCreate.addEventListener("click", async () => {
  try {
    const personaje = {
      nombre: inputs.inputNombre.value,
      edad: Number(inputs.inputEdad.value),
    };

    const res = await window.electron.personajes.create(personaje);
    inputs.output.textContent = JSON.stringify(res, null, 2);
  } catch (err) {
    inputs.output.textContent = err.message;
  }
});

/* ======================
   READ
====================== */
btnRead.addEventListener("click", async () => {
  try {
    const res = await window.electron.personajes.read();
    inputs.output.textContent = JSON.stringify(res, null, 2);
  } catch (err) {
    inputs.output.textContent = err.message;
  }
});

/* ======================
   UPDATE
====================== */
btnUpdate.addEventListener("click", async () => {
  try {
    const personaje = {
      id: Number(inputs.inputId.value),
      nombre: inputs.inputNombre.value,
      edad: Number(inputs.inputEdad.value),
    };

    const res = await window.electron.personajes.update(personaje);
    inputs.output.textContent = JSON.stringify(res, null, 2);
  } catch (err) {
    inputs.output.textContent = err.message;
  }
});

/* ======================
   DELETE
====================== */
btnDelete.addEventListener("click", async () => {
  try {
    const id = Number(inputs.inputId.value);

    const res = await window.electron.personajes.delete(id);
    inputs.output.textContent = JSON.stringify(res, null, 2);
  } catch (err) {
    inputs.output.textContent = err.message;
  }
});
