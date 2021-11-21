import { render, screen, cleanup } from "@testing-library/react";
import Home from "../homeComponent";
import { Provider } from "react-redux";
import store from "../../Redux/store";

test("Should render HomeComponent component", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const homeElement = screen.getByTestId("home");
  expect(homeElement).toBeInTheDocument();
});
