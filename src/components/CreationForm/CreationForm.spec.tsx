import "jest-dom/extend-expect";

import { cleanup, fireEvent, render } from "react-testing-library";

import React from "react";
import CreationForm from "./CreationForm";

afterEach(cleanup);

describe("Creation Form", () => {
  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    const { asFragment } = render(<CreationForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  /**
   * Calling its onSubmitFunction
   */
  it("Should call its onSubmitFunction when the form is submitted", () => {
    const sampleFunction = jest.fn();
    const { getByText } = render(
      <CreationForm onSubmitFunction={sampleFunction} />
    );
    fireEvent.click(getByText("ADD"));
    expect(sampleFunction).toHaveBeenCalledTimes(1);
  });

  /**
   * Passing text to onSubmitFunction
   */
  it("Should pass the text from its input to its onSubmitFunction when called", () => {
    const sampleToDoText = "BUY MILK";
    const sampleFunction = jest.fn();

    const { getByText, getByLabelText } = render(
      <CreationForm onSubmitFunction={sampleFunction} />
    );

    getByLabelText(/To Do/i).nodeValue = sampleToDoText;

    fireEvent.click(getByText("ADD"));
    expect(sampleFunction).toHaveBeenCalledWith(sampleToDoText);
  });
});
