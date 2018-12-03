import React from "react";

export interface IToDo {
  /**
   * The id for this to do
   */
  id: string;

  /**
   * Text to be displayed
   */
  text: string;
}

export interface IToDoItem extends IToDo {
  /**
   * Function to be called
   * when the user clicks upon
   * this item
   */
  onClickFunction: (toDoId: string) => void;
}

const ToDoItem: React.SFC<IToDoItem> = ({ text, onClickFunction, id }) => (
  <div onClick={() => onClickFunction(id)}>{text}</div>
);

export default ToDoItem;
