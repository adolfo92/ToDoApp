import { List } from "./AppModules/list";
import { createListUIon, displayChoreUI } from "./AppModules/ui";

//------- MockupList
const myList = new List("mockup list");
myList.addObjectChore("regar las matas");
myList.addObjectChore("comprar cigarros");
myList.addObjectChore("llamar a oriana");
const currentList = myList.getList();
//-------

const tablon = document.getElementById("board");

createListUIon(tablon);

const listdiv = document.querySelector(".list");

console.log(currentList.length);

for (let i = 0; i < currentList.length; i++) {
  listdiv.appendChild(displayChoreUI(currentList[i]));
}
