import toDoReducer, { IToDoReducerState } from "./todo";

import { addToDo } from "../../actions/ToDo/todo";

describe("To Do Reducer", () => {
  let initialState: IToDoReducerState;
  beforeEach(() => {
    initialState = toDoReducer(undefined, {} as any);
  });

  /**
   * Initial State
   */
  it("Should return the initial state", () => {
    expect(initialState).toMatchObject({
      toDos: []
    });
  });

  /**
   * Adding to do
   */
  it("Should correctly add a to do", () => {
    const sampleId = "123";
    const sampleToDoText = "BUY MILK";
    const action = addToDo(sampleId, sampleToDoText);
    const state = toDoReducer(initialState, action);
    expect(state).toMatchObject({
      toDos: [{ id: sampleId, text: sampleToDoText }]
    });
  });
});
