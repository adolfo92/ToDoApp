import { List, toDoList } from "../AppModules/list";
describe("***List", () => {
  test("Create one list", () => {
    const expected = "Tareas de casa";
    expect(new List("Tareas de casa").getName()).toBe(expected);
  });
});

describe("***List chore adding", () => {
  const newList = new List("random name");

  test("Add one Chore", () => {
    newList.addChore("test1");
    const expected = ["test1"];
    expect(newList.getList()).toEqual(expected);
  });

  test("Add two more chores", () => {
    newList.addChore("test2");
    newList.addChore("test3");
    const expected = ["test1", "test2", "test3"];
    expect(newList.getList()).toEqual(expected);
  });

  test("Add mixed uppercase chores", () => {
    newList.addChore("teST4");
    const expected = ["test1", "test2", "test3", "test4"];
    expect(newList.getList()).toEqual(expected);
  });

  test("Error if add chore is passed other than a string", () => {
    expect(() => {
      newList.addChore(1254);
    }).toThrow(/addChore/);
  });

  test("Remove chore by list index", () => {
    newList.removeChore(3);
    const expected = ["test1", "test2", "test4"];
    expect(newList.getList()).toEqual(expected);
  });

  test("Error if remove chore is passed other than a number", () => {
    expect(() => {
      newList.removeChore("abcdef");
    }).toThrow(/removeChore/);
  });
});

describe("***Object Chore", () => {
  const newList = new List("randomName");

  test("add Object Chore", () => {
    newList.addObjectChore("test");
    const expected = [{ name: "test", done: false }];
    expect(newList.getList()).toEqual(expected);
  });

  test("Change Object chore status", () => {
    const item1 = newList.getList()[0];
    item1.changeStatus();
    const expected = [{ name: "test", done: true }];
    expect(newList.getList()).toEqual(expected);
  });

  test("Add property to object Chore", () => {
    const item1 = newList.getList()[0];
    item1.setDescription("Some random text");
    const expected = [
      { name: "test", done: true, description: "Some random text" },
    ];
    expect(newList.getList()).toEqual(expected);
  });

  test("Remove chore by list index", () => {
    newList.removeObjectChore(1);
    const expected = [];
    expect(newList.getList()).toEqual(expected);
  });
});
