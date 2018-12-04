import * as actions from "./todo";

import { ADD_TO_DO } from "./constants";

describe("To Do Actions", () => {
  /**
   * Adding to do action
   */
  it("Should dispatch an ADD_TO_DO action with the corresponding text of the to do item", () => {
    const sampleToDoText = "SAMPLE TEXT";
    const sampleId = "123";
    const sampleAction = actions.addToDo(sampleId, sampleToDoText);
    expect(sampleAction).toMatchObject({
      type: ADD_TO_DO,
      payload: {
        id: sampleId,
        text: sampleToDoText
      }
    });
  });
});
