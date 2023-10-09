import { List } from "./AppModules/list";
import { createListUIon, displayChoreUI } from "./AppModules/ui";
import { replaceUnderScores } from "./AppModules/helpers";

const tablon = document.getElementById("board");

//------- MockupList
const myList = new List("mockup list");
myList.addChore("regar las matas");
myList.addChore("comprar cigarros");
myList.addChore("llamar a oriana");
const currentList = myList.getList();
const listName = myList.getName();
//-------

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
