import React from "react";
import CreationForm from "./components/CreationForm/CreationForm";
import ToDoList from "./components/ToDoList/ToDoList";

export default () => {
  return (
    <div>
      <h1> To Do List </h1>
      <CreationForm onSubmitFunction={() => ({})} />
      <ToDoList
        toDos={[
          {
            id: "a",
            text: "Buy Milk"
          }
        ]}
        itemSelectedFunction={() => ({})}
      />
      <h2> Done </h2>
    </div>
  );
};
