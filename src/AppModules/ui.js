function createListUIon(parent) {
  const listDiv = document.createElement("div");
  const addChoreButton = document.createElement("button");

  listDiv.classList.add("list");
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

// Create data-key
function _setIndex(container, number) {
  console.log(number);
  container.dataset.choreIndex = `${number}`;
}

function _addClasses(container, ...classes) {
  for (let i = 0; i < classes.length; i++) {
    container.classList.add(classes[i]);
  }
}

export { createListUIon, displayChoreUI };
