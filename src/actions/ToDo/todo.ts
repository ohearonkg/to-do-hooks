import { action } from "typesafe-actions";
import { ADD_TO_DO } from "./constants";

export const addToDo = (id: string, text: string) =>
  action(ADD_TO_DO, { id, text });
