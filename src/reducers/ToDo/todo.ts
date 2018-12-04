import * as actions from "../../actions/ToDo/todo";

import { ActionType, getType } from "typesafe-actions";

import { ADD_TO_DO } from "../../actions/ToDo/constants";
import { IToDo } from "../../components/ToDoItem/ToDoItem";

/**
 * Defining the availabe types of actions
 */
type ToDoActions = ActionType<typeof actions>;

export interface IToDoReducerState {
  /**
   * The list of to do items
   */
  toDos: IToDo[];
}

export const ToDoReducerInitialState: IToDoReducerState = {
  toDos: []
};

export default (
  state: IToDoReducerState = ToDoReducerInitialState,
  action: ToDoActions
) => {
  switch (action.type) {
    case ADD_TO_DO:
      const { id, text } = action.payload;
      return {
        ...state,
        toDos: [...state.toDos, { id, text }]
      };
    default:
      return state;
  }
};
