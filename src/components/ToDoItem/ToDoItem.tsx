import React from "react";

interface ITodoItem {
  /**
   * The id for this to do
   */
  id: string;

  /**
   * Text to be displayed
   */
  text: string;

  /**
   * Function to be called
   * when the user clicks upon
   * this item
   */
  onClickFunction: () => void;
}

const ToDoItem: React.SFC<ITodoItem> = ({ text, onClickFunction, id }) => (
  <div onClick={() => onClickFunction(id)}>{text}</div>
);

export default ToDoItem;
