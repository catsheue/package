import * as actions from "../../app/store/todo/actions";
import * as types from "../../app/store/todo/actionTypes";

describe("actions", () => {
  it("should create an action to add a todo", () => {
    const text = "Finish docs";
    const expectedAction = {
      type: types.ADD_TODO,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});
