import React, { ChangeEvent, FormEvent } from "react";

interface ICreationFormProps {
  /**
   * Function to be called
   * when the user submits
   * the form
   */
  onSubmitFunction: (toDoText: string) => void;
}

interface ICreationFormState {
  /**
   * Current value of the input
   */
  inputValue: string;
}

export default class CreationForm extends React.Component<
  ICreationFormProps,
  ICreationFormState
> {
  public state = {
    inputValue: ""
  };

  /**
   * Handling updating use the event provided
   * via the change handler of the input
   */
  public handleTextUpdate = (event: ChangeEvent<HTMLInputElement>) =>
    this.setState({ inputValue: event.target.value });

  /**
   * Submitting our form
   */
  public handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const { onSubmitFunction } = this.props;
    event.preventDefault();
    onSubmitFunction(this.state.inputValue);
  };

  public render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          To Do:
          <input
            type="text"
            value={inputValue}
            onChange={this.handleTextUpdate}
          />
        </label>
        <button type="submit">ADD</button>
      </form>
    );
  }
}
