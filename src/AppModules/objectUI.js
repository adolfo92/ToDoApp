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
    parent.appendChild(this.container);
  }

  addThisChore(chore) {
    this.list.addChore(chore);
    this.paintChores();
  }

  paintChores() {
    const choreList = this.list.getList();

    removePreviousDataFrom(this.container);
    for (let i = 0; i < choreList.length; i++) {
      const currentChore = choreList[i];
      const choreContainer = paintThisChore(
        currentChore.name,
        currentChore.status
      );
      this.container.appendChild(choreContainer);
    }
  }
}

function paintThisChore(choreName, choreStatus) {
  const container = document.createElement("div");

  container.classList.add("chore");
  container.dataset.status = choreStatus;
  container.textContent = choreName;

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

function retrieveDataFrom(choreList) {}

export { ListMaker };
