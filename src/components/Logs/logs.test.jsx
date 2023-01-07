import { render } from "@testing-library/react";
import { legacy_createStore as createStore } from "redux";
import { reducer } from "../../store/store";
import { Provider } from "react-redux";
import LogsList from "./Logs";

describe("<LogsList> component", () => {
  it("should render log list", () => {
    const store = createStore(reducer, {
      logs: ["Button# 1 14:30:30 14:30:33"],
    });
    render(
      <Provider store={store}>
        <LogsList />
      </Provider>
    );
  });
});
