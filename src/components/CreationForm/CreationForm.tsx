import React, { ChangeEvent, FormEvent, useState } from "react";

interface ICreationForm {
  /**
   * Function to be called
   * when the user submits
   * the form
   */
  onSubmitFunction: (toDoText: string) => void;
}

const CreationForm: React.SFC<ICreationForm> = ({ onSubmitFunction }) => {
  /**
   * The value of the form, and appropriate
   * function to update
   */
  const [text, setText] = useState("");

  /**
   * Handling updating use the event provided
   * via the change handler of the input
   */
  const handleTextUpdate = (event: ChangeEvent<HTMLInputElement>) =>
    setText(event.target.value);

  /**
   * Submitting our form
   */
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmitFunction(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To Do:
        <input type="text" value={text} onChange={handleTextUpdate} />
      </label>
      <button type="submit">ADD</button>
    </form>
  );
};

export default CreationForm;
