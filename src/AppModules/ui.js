import { _setIndex, _addClasses, replaceWhiteSpace } from "./helpers";
import { List } from "./list";
function listMaker(listName, container) {
  const myListObj = new List(listName);
  const listID = replaceWhiteSpace(listName);
  createListUIon(container, myListObj);
  const listdiv = document.querySelector(`#${listID}`);
  const listHeader = document.createElement("h1");
  listHeader.textContent = `${listName}`;
  listdiv.appendChild(listHeader);
  const bundle = { myListObj, listID, listdiv };

  return { myListObj, listID, listdiv };
}

// Agrega tareas y/o actualiza la UI de la lista
function choreMaker(list, chore) {
  // Requiere la lista instanciada
  // Se alimenta del objeto lista y del div lista
  if (chore) list.myListObj.addChore(chore);
  resetListUI(list.listdiv); // !!!!
  const currentList = list.myListObj.getList();
  for (let i = 0; i < currentList.length; i++) {
    list.listdiv.appendChild(displayChoreUI(currentList[i], i));
  }
}

// resetea la lista, procurar que los divs en la lista sean los ultimos contenedores
function resetListUI(listDiv) {
  // Requiere solamente el div de la lista
  const listNode = listDiv;
  while (listNode.hasChildNodes()) {
    if (listNode.lastChild.localName === "div") {
      listNode.removeChild(listNode.lastChild);
    } else {
      return;
    }
  }
}

function createListUIon(parent, listObject) {
  const listDiv = document.createElement("div");
  const addChoreButton = document.createElement("button");

  _addClasses(listDiv, "list");
  listDiv.id = replaceWhiteSpace(listObject.getName());

  addChoreButton.classList.add("addChore");
  addChoreEvent(addChoreButton, listObject, listDiv);

  listDiv.appendChild(addChoreButton);

  parent.appendChild(listDiv);
}

function addChoreEvent(buttonNode, listObject, listDiv) {
  const listBundle = { myListObj: listObject, listdiv: listDiv };
  buttonNode.addEventListener("click", (e) => {
    choreMaker(listBundle, "chore test");
  });
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

export { createListUIon, displayChoreUI, listMaker, choreMaker };
