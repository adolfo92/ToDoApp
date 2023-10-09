import { List } from "./AppModules/list";
import { createListUIon, displayChoreUI } from "./AppModules/ui";
import { replaceUnderScores, replaceWhiteSpace } from "./AppModules/helpers";

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

const testList = listMaker("test");

choreMaker(testList, "comprar ajo");
choreMaker(testList, "barrer piso");

function listMaker(listName, container = tablon) {
  const myListObj = new List(listName);
  createListUIon(container, listName);
  const listID = replaceWhiteSpace(listName);
  const listdiv = document.querySelector(`#${listID}`);
  const listHeader = document.createElement("h1");
  listHeader.textContent = `${listName}`;
  listdiv.appendChild(listHeader);

  return { myListObj, listID, listdiv };
}

function choreMaker(list, chore) {
  if (chore) list.myListObj.addChore(chore);

  resetListUI(list);
  const currentList = list.myListObj.getList();
  for (let i = 0; i < currentList.length; i++) {
    list.listdiv.appendChild(displayChoreUI(currentList[i], i));
  }
}

function updateUI() {
  //location.reload();
  return;
}

// resetea la lista, procurar que los divs en la lista sean los ultimos contenedores
function resetListUI(list) {
  const listNode = list.listdiv;
  while (listNode.hasChildNodes()) {
    if (listNode.lastChild.localName === "div") {
      listNode.removeChild(listNode.lastChild);
    } else {
      return;
    }
  }
}
