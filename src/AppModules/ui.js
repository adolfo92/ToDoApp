function createListUIon(parent) {
  const listDiv = document.createElement("div");
  const addChoreButton = document.createElement("button");
  listDiv.classList.add("list");
  addChoreButton.classList.add("addChore");
  listDiv.appendChild(addChoreButton);

  parent.appendChild(listDiv);
}

function _makeChoreContainer() {
  const choreContainer = document.createElement("div");
  const deleteButton = document.createElement("button");

  choreContainer.classList.add("choreContainer");
  deleteButton.classList.add("delete");

  choreContainer.appendChild(deleteButton);

  return choreContainer;
  // Resumen: crea el div y el button
  // Le agrega una clase a ambos
  // mete el boton en el div
  // retorna el div
}

function displayChoreUI(choreObj) {
  const choreContainer = _makeChoreContainer();

  for (let key in choreObj) {
    if (key === "done") {
      choreContainer.dataset.done = `${choreObj[key]}`;
      continue;
    }
    const propertyContainer = document.createElement("div");
    propertyContainer.classList.add("property");
    propertyContainer.classList.add(`${key}`);
    propertyContainer.textContent = `${choreObj[key]}`;

    choreContainer.appendChild(propertyContainer);
  }

  return choreContainer;
  // Resumen: recibe Objeto
  // Crea el contenedor
  // Pasa por cada uno de las propiedades del objeto
  //  Si es la propiedad es "done" se la asigna como data-key al contenedor
  //  Si no es done, crea un div, le agrega dos clases, property y la propiedad
  //  el contenido de la propiedad se agrega como texto dentro del div
  //  Se mete el nuevo div dentro del contenedor
  // Retorna el contenedor
}

export { createListUIon, displayChoreUI };
