import { List } from "./AppModules/list";
import { createListUIon, displayChoreUI } from "./AppModules/ui";

//------- MockupList
const myList = new List("mockup list");
myList.addObjectChore("regar las matas");
myList.addObjectChore("comprar cigarros");
myList.addObjectChore("llamar a oriana");
const currentList = myList.getList();
const listName = myList.getName();
//-------

const tablon = document.getElementById("board");

createListUIon(tablon, "mockup list");

const listdiv = document.querySelector(".list");
const listHeader = document.createElement("h1");
listHeader.textContent = `${listName}`;
listdiv.appendChild(listHeader);

for (let i = 0; i < currentList.length; i++) {
  listdiv.appendChild(displayChoreUI(currentList[i], i));
}

function listMaker(listName, container = tablon) {
  const myList = new List(listName);
  createListUIon(container, listName);
}
