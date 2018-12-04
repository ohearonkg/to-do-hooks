import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ToDoListContainer from "./containers/ToDoListContainer/ToDoListContainer";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

export default () => {
  return (
    <Provider store={store}>
      <div>
        <h1> To Do List </h1>
        <ToDoListContainer />
        <h2> Done </h2>
      </div>
    </Provider>
  );
};
