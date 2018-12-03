import ToDoItem, { IToDo } from "../ToDoItem/ToDoItem";

import React from "react";

interface IToDoList {
  /**
   * List of to do items
   */
  toDos: IToDo[];

  /**
   * Function to be called
   * when the user clicks
   * on a to do item
   */
  itemSelectedFunction: (selectedId: string) => void;
}
const ToDoList: React.SFC<IToDoList> = ({ toDos, itemSelectedFunction }) => (
  <div>
    {toDos.map((toDo: IToDo) => (
      <ToDoItem
        key={toDo.id}
        {...toDo}
        onClickFunction={itemSelectedFunction}
      />
    ))}
  </div>
);

export default ToDoList;
