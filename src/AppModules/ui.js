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
}

function displayChoreUI(choreObj) {
  const choreContainer = _makeChoreContainer();

  for (let key in choreObj) {
    const propertyContainer = document.createElement("div");
    propertyContainer.classList.add("property");
    propertyContainer.classList.add(`${key}`);
    propertyContainer.textContent = `${choreObj[key]}`;

    choreContainer.appendChild(propertyContainer);
  }

  return choreContainer;
}

export { createListUIon, displayChoreUI };
