import { List } from "./list";

class ListMaker {
  constructor(name) {
    this.name = name;
    this.container = makeListContainer();
    this.list = new List(this.name);
  }

  paintListOn(parent) {
    const listTitle = addTitleFrom(this.list.getName());
    this.container.appendChild(listTitle);
    //this.container.appendChild(this.deleteList(parent));
    parent.appendChild(this.container);
  }

  addThisChore(chore) {
    this.list.addChore(chore);
    this.paintChores();
  }

  deleteThisChore(index) {
    this.list.removeChore(index);
    this.paintChores();
  }

  paintChores() {
    const retieveThisChores = retrieveChores.bind(this);
    removePreviousDataFrom(this.container);
    retieveThisChores();
  }
  // Codigo comentado porque creo que mi problema tiene que ver con las
  // referencias en memoria
  /*deleteList(parent) {
    const deleteListBtn = document.createElement("button");
    deleteListBtn.classList.add("delete-list");
    deleteListBtn.textContent = "Delete list";
    deleteListBtn.addEventListener("click", () => {
      console.log("Deleting:\n", this.list);
      delete this.list;
      removePreviousDataFrom(parent);
      retrieveThisLists();
      return;
    });
    return deleteListBtn;
  }*/
}

function retrieveChores() {
  const myList = this.list.getList();
  for (let i = 0; i < myList.length; i++) {
    const currentChore = myList[i];
    const choreContainer = paintThisChore(currentChore);
    addDeleteButtonTo(choreContainer, i, this);
    this.container.appendChild(choreContainer);
  }
}

function addDeleteButtonTo(container, index, context) {
  const button = document.createElement("button");
  button.classList.add("delteButton");
  button.textContent = "Delete";
  button.addEventListener("click", () => {
    context.deleteThisChore(index + 1);
  });
  container.appendChild(button);
}

function paintThisChore(currentChore) {
  const container = document.createElement("div");
  container.classList.add("chore");

  container.dataset.status = currentChore.done;
  container.textContent = currentChore.name;

  return container;
}

function makeListContainer() {
  const container = document.createElement("div");
  container.classList.add("list");

  return container;
}

function removePreviousDataFrom(container) {
  while (container.hasChildNodes()) {
    if (container.lastChild.localName === "div") {
      container.removeChild(container.lastChild);
    } else {
      return;
    }
  }
}

function addTitleFrom(listName) {
  const titleContainer = document.createElement("h1");
  titleContainer.classList.add("listTitle");
  titleContainer.textContent = listName;
  return titleContainer;
}

export { ListMaker };
