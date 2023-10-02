function createListUIon(parent) {
  const listDiv = document.createElement("div");
  const addChoreButton = document.createElement("button");
  listDiv.classList.add("list");
  addChoreButton.classList.add("addChore");
  listDiv.appendChild(addChoreButton);

  parent.appendChild(listDiv);
}
export { createListUIon };
