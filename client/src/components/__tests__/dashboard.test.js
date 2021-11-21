import { render, screen, cleanup } from "@testing-library/react";
import Dashboard from "../dashboard";
import { Provider } from "react-redux";
import store from "../../Redux/store";

test("Should render dashboard component", () => {
  render(
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
  const dashElement = screen.getByTestId("dash");
  expect(dashElement).toBeInTheDocument();
});
