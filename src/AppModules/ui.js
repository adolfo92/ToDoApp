import { _setIndex, _addClasses, replaceWhiteSpace } from "./helpers";
function createListUIon(parent, listName) {
  const listDiv = document.createElement("div");
  const addChoreButton = document.createElement("button");
  _addClasses(listDiv, "list");
  listDiv.id = replaceWhiteSpace(listName);
  addChoreButton.classList.add("addChore");
  listDiv.appendChild(addChoreButton);

  parent.appendChild(listDiv);
}

function displayChoreUI(choreObj, index = 0) {
  const choreContainer = _makeChoreContainer();

  for (let key in choreObj) {
    if (key === "done") {
      choreContainer.dataset.done = `${choreObj[key]}`;
      continue;
    }

    _setIndex(choreContainer, index);
    const propertyContainer = document.createElement("div");
    _addClasses(propertyContainer, "property", `${key}`);
    propertyContainer.textContent = `${choreObj[key]}`;
    choreContainer.appendChild(propertyContainer);
  }

  return choreContainer;
}

function _makeChoreContainer() {
  const choreContainer = document.createElement("div");
  const deleteButton = document.createElement("button");

  choreContainer.classList.add("choreContainer");
  deleteButton.classList.add("delete");

  choreContainer.appendChild(deleteButton);

  return choreContainer;
}

export { createListUIon, displayChoreUI };
