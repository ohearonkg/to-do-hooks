import React from "react";

interface ITodoItem {
  /**
   * Text to be displayed
   */
  text: string;
}

const ToDoItem: React.SFC<ITodoItem> = ({ text }) => <div>{text}</div>;

export default ToDoItem;
