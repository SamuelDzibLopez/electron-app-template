let personajes = [];
let idCounter = 1;

export function createPersonaje(data) {
  const personaje = {
    id: idCounter++,
    ...data,
  };

  personajes.push(personaje);
  return personaje;
}

export function getPersonajes() {
  return personajes;
}

export function updatePersonaje(data) {
  const index = personajes.findIndex(p => p.id === data.id);
  if (index === -1) return null;

  personajes[index] = { ...personajes[index], ...data };
  return personajes[index];
}

export function deletePersonaje(id) {
  const index = personajes.findIndex(p => p.id === id);
  if (index === -1) return false;

  personajes.splice(index, 1);
  return true;
}
