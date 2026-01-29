// Inputs
const inputId = document.getElementById("id");
const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const output = document.getElementById("output");

// Botones
const btnCreate = document.getElementById("btn-create");
const btnRead = document.getElementById("btn-read");
const btnUpdate = document.getElementById("btn-update");
const btnDelete = document.getElementById("btn-delete");

/* ======================
   CREATE
====================== */
btnCreate.addEventListener("click", async () => {
  try {
    const personaje = {
      nombre: inputNombre.value,
      edad: Number(inputEdad.value),
    };

    const res = await window.electron.personajes.create(personaje);
    output.textContent = JSON.stringify(res, null, 2);
  } catch (err) {
    output.textContent = err.message;
  }
});

/* ======================
   READ
====================== */
btnRead.addEventListener("click", async () => {
  try {
    const res = await window.electron.personajes.read();
    output.textContent = JSON.stringify(res, null, 2);
  } catch (err) {
    output.textContent = err.message;
  }
});

/* ======================
   UPDATE
====================== */
btnUpdate.addEventListener("click", async () => {
  try {
    const personaje = {
      id: Number(inputId.value),
      nombre: inputNombre.value,
      edad: Number(inputEdad.value),
    };

    const res = await window.electron.personajes.update(personaje);
    output.textContent = JSON.stringify(res, null, 2);
  } catch (err) {
    output.textContent = err.message;
  }
});

/* ======================
   DELETE
====================== */
btnDelete.addEventListener("click", async () => {
  try {
    const id = Number(inputId.value);

    const res = await window.electron.personajes.delete(id);
    output.textContent = JSON.stringify(res, null, 2);
  } catch (err) {
    output.textContent = err.message;
  }
});
