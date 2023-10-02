import { List, toDoList } from "../AppModules/list";
describe("***List", () => {
  test("Create one list", () => {
    const expected = "Tareas de casa";
    expect(new List("Tareas de casa").getName()).toBe(expected);
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
