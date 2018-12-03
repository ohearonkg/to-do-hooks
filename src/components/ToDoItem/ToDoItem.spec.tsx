import "jest-dom/extend-expect";

import { cleanup, fireEvent, render } from "react-testing-library";

import React from "react";
import ToDoItem from "./ToDoItem";

afterEach(cleanup);

/**
 * Variables for testing
 */
const sampleText = "ABC";
const sampleOnClickFunction = () => ({});
const sampleID = "a1b2c3";

const sampleProps = {
  text: sampleText,
  onClickFunction: sampleOnClickFunction,
  id: sampleID
};

describe("To Do Item", () => {
  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    const { asFragment } = render(<ToDoItem {...sampleProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  /**
   * Rendering text
   */
  it("Should render to text passed to its text prop", () => {
    const { getByText } = render(<ToDoItem {...sampleProps} />);
    expect(getByText(sampleText)).toBeInTheDocument();
  });

  /**
   * Calling onClickFunction
   */
  it("Should call its the function passed to its onClickFunction when clicked", () => {
    const sampleFunction = jest.fn();
    const altProps = { ...sampleProps, onClickFunction: sampleFunction };
    const { getByText } = render(<ToDoItem {...altProps} />);
    fireEvent.click(getByText(sampleText));
    expect(sampleFunction).toHaveBeenCalledTimes(1);
  });

  it("Should call its the function passed to its onClickFunction with this items id", () => {
    const sampleFunction = jest.fn();
    const altProps = { ...sampleProps, onClickFunction: sampleFunction };
    const { getByText } = render(<ToDoItem {...altProps} />);
    fireEvent.click(getByText(sampleText));
    expect(sampleFunction).toHaveBeenCalledWith(sampleID);
  });
});
