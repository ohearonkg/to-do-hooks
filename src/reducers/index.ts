import { combineReducers } from "redux";
import { StateType } from "typesafe-actions";
import toDoReducer from "./ToDo/todo";

const rootReducer = combineReducers({
  todo: toDoReducer
});

export type RootState = StateType<typeof rootReducer>;
export default rootReducer;
