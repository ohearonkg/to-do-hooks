import React, { Component } from "react";

import ToDoList from "./components/ToDoList/ToDoList";

class App extends Component {
  public render() {
    return (
      <div>
        <h1> To Do </h1>
        <ToDoList
          toDos={[
            {
              id: "a",
              text: "Buy Milk"
            }
          ]}
          itemSelectedFunction={() => ({})}
        />
      </div>
    );
  }
}

export default App;
