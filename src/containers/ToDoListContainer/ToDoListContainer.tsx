import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addToDo } from "../../actions/ToDo/todo";
import CreationForm from "../../components/CreationForm/CreationForm";
import { IToDo } from "../../components/ToDoItem/ToDoItem";
import ToDoList from "../../components/ToDoList/ToDoList";
import { RootState } from "../../reducers";

interface ITodoListContainer {
  /**
   * Function used to add
   * to do item
   */
  addToDo: (text: string) => void;

  /**
   * The current list of to do items
   */
  toDos: IToDo[];
}

const ToDoListContainer: React.SFC<ITodoListContainer> = ({
  // tslint:disable-next-line:no-shadowed-variable
  addToDo,
  toDos
}) => (
  <>
    <CreationForm onSubmitFunction={addToDo} />
    <ToDoList toDos={toDos} itemSelectedFunction={() => ({})} />
  </>
);

const mapStateToProps = (state: RootState) => {
  return {
    toDos: state.todo.toDos
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addToDo: (text: string) =>
      dispatch(addToDo(`${Math.random()}-${Date.now()}`, text))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoListContainer);
