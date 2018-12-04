import "jest-dom/extend-expect";

import React, { ChangeEvent } from "react";
import { cleanup, fireEvent, render } from "react-testing-library";

import CreationForm from "./CreationForm";

afterEach(cleanup);

describe("Creation Form", () => {
  /**
   * Snapshot
   */
  it("Should match its snapshot", () => {
    const { asFragment } = render(
      <CreationForm onSubmitFunction={() => ({})} />
    );
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
    const sampleEvent = new Event("change");

    const { getByText, getByLabelText, debug } = render(
      <CreationForm onSubmitFunction={sampleFunction} />
    );

    fireEvent.change(getByLabelText(/To Do/i), {
      target: {
        value: sampleToDoText
      }
    });

    fireEvent.click(getByText("ADD"));
    expect(sampleFunction).toHaveBeenCalledWith(sampleToDoText);
  });
});
