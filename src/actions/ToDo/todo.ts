import { action } from "typesafe-actions";
import { ADD_TO_DO } from "./constants";

export const addToDo = (text: string) => action(ADD_TO_DO, text);
