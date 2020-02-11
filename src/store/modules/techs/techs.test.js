import reducer, {INITIAL_STATE} from "./reducer";
import * as Techs from "./actions";

describe("Techs reducer tests", () => {
  it("ADD_TECH", () => {
    const state = reducer(INITIAL_STATE, Techs.addTech("React"));

    expect(state).toStrictEqual(["React"]);
  });
});