import { render, screen, cleanup } from "@testing-library/react";
import Logout from "../logout";
import { Provider } from "react-redux";
import store from "../../Redux/store";

test("Should render logout component", () => {
  render(
    <Provider store={store}>
      <Logout />
    </Provider>
  );
  const logoutElement = screen.getByTestId("logout");
  expect(logoutElement).toBeInTheDocument();
});
