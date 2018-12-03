import "jest-dom/extend-expect";

import { cleanup, fireEvent, render } from "react-testing-library";

import React from "react";
import { IToDo } from "../ToDoItem/ToDoItem";
import ToDoList from "./ToDoList";

afterEach(cleanup);

/**
 * Variables for testing
 */
const sampleItemSelectedFunction = () => ({});

const sampleToDos: IToDo[] = [
  {
    id: "1",
    text: "a"
  },
  {
    id: "2",
    text: "b"
  }
];

describe("To Do List", () => {
  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    const { asFragment } = render(
      <ToDoList
        toDos={sampleToDos}
        itemSelectedFunction={sampleItemSelectedFunction}
      />
    );
    expect(asFragment()).toThrowErrorMatchingSnapshot();
  });

  /**
   * Rendering <ToDoItem />
   */
  it("Should render a <ToDoItem /> for each item passed to its toDos prop", () => {
    const { getByText } = render(
      <ToDoList
        toDos={sampleToDos}
        itemSelectedFunction={sampleItemSelectedFunction}
      />
    );
    sampleToDos.forEach((toDo: IToDo) =>
      expect(getByText(toDo.text)).toBeInTheDocument()
    );
  });

  /**
   * Calling its itemSelectedFunction
   */
  it("Should call its itemSelectedFunction when the user clicks upon a <ToDoItem />", () => {
    const sampleFunction = jest.fn();
    const { getByText } = render(
      <ToDoList toDos={sampleToDos} itemSelectedFunction={sampleFunction} />
    );
    sampleToDos.forEach((toDo: IToDo, index: number) => {
      fireEvent.click(getByText(toDo.text));
      expect(sampleFunction).toHaveBeenCalledTimes(index + 1);
    });
  });

  it("Should call its itemSeletedFunction with the id of the todo clicked", () => {
    const sampleFunction = jest.fn();
    const { getByText } = render(
      <ToDoList toDos={sampleToDos} itemSelectedFunction={sampleFunction} />
    );
    sampleToDos.forEach((toDo: IToDo) => {
      fireEvent.click(getByText(toDo.text));
      expect(sampleFunction).toHaveBeenLastCalledWith(toDo.id);
    });
  });
});
