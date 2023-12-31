/* eslint-disable quotes */
class List {
  choreList = [];
  constructor(name) {
    this.name = name;
  }

  changeName(newName) {
    this.name = newName;
  }

  getName() {
    return this.name;
  }

  getList() {
    return this.choreList;
  }

  addChore(chore) {
    if (typeof chore !== "string") {
      throw new Error(
        "El metodo addChore() de la clase List debe recibir un numero"
      );
    }
    const lowercaseChore = chore.toLowerCase();
    this.choreList.push(new Chore(lowercaseChore));
  }

  removeChore(listIndex) {
    if (typeof listIndex !== "number") {
      throw new Error(
        "El metodo removeChore() de la clase List debe recibir un numero"
      );
    }
    const arrayIndex = listIndex - 1;
    this.choreList.splice(arrayIndex, 1);
  }
}

class Chore {
  done = false;
  constructor(name) {
    this.name = name;
  }

  changeName(newName) {
    this.name = newName;
  }
  changeStatus() {
    this.done === true ? (this.done = false) : (this.done = true);
  }
  setDescription(text) {
    this.description = text;
  }
  setDueDate(date) {
    this.dueDate = date;
  }
  setPriority(urgency) {
    this.priority = urgency;
  }
}

export { List };
