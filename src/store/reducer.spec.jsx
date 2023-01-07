import reducer from "./reducer";

describe("log reducer", () => {
  const state = ["Button1 14:20:22 14:20:23 (1 sec) "];

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it("should add to log list", () => {
    expect(
      reducer(state, {
        type: "ADD_LOGS",
        payload: "Button2 14:30:24 14:30:27 (3 sec) ",
      })
    ).toEqual([
      "Button1 14:20:22 14:20:23 (1 sec) ",
      "Button2 14:30:24 14:30:27 (3 sec) ",
    ]);
  });

  it("should clear log list", () => {
    expect(
      reducer(state, {
        type: "CLEAR_LOGS",
        payload: [],
      })
    ).toEqual([]);
  });
});
