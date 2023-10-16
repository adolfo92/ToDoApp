import { ListMaker } from "./AppModules/objectUI";

const tablon = document.getElementById("board");
const makeListButton = document.getElementById("createList");

// --- Agrega evento de crear lista al boton del nav
makeListButton.addEventListener("click", () => {
  const nameOfNewList = prompt("Nombre de nueva lista: ", "");
  const newList = new ListMaker(nameOfNewList);
  newList.paintListOn(tablon);
  testListTwo.addThisChore("test4");
  newList.addThisChore("test5");
});

// ----------- Wishful code -----------

const testListTwo = new ListMaker("test");

testListTwo.paintListOn(tablon);

testListTwo.addThisChore("comprar cambures");
testListTwo.addThisChore("Pie de limon");
testListTwo.addThisChore("otra tarea");
