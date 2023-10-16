import { List } from "../src/AppModules/list";
describe("***List", () => {
  test("Create one list", () => {
    const list = new List("Tareas de casa");
    const expected = "Tareas de casa";
    expect(list.getName()).toEqual(expected);
  });
});

describe("***Object Chore", () => {
  const newList = new List("randomName");
  const listItem = newList.getList();

  test("add Object Chore", () => {
    newList.addChore("test");
    const expected = [{ name: "test", done: false }];
    expect(newList.getList()).toEqual(expected);
  });

  test("Change Object chore status", () => {
    const item1 = listItem[0];
    item1.changeStatus();
    const expected = [{ name: "test", done: true }];
    expect(newList.getList()).toEqual(expected);
  });

  test("Add property to object Chore", () => {
    const item1 = listItem[0];
    item1.setDescription("Some random text");
    const expected = [
      { name: "test", done: true, description: "Some random text" },
    ];
    expect(newList.getList()).toEqual(expected);
  });

  test("Remove chore by list index", () => {
    newList.removeChore(1);
    const expected = [];
    expect(newList.getList()).toEqual(expected);
  });
});
