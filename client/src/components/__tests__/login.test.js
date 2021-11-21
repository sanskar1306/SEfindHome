import { render, screen, cleanup } from "@testing-library/react";
import Login from "../login";
import { Provider } from "react-redux";
import store from "../../Redux/store";

test("Should render login component", () => {
  render(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  const loginElement = screen.getByTestId("login");
  expect(loginElement).toBeInTheDocument();
});
