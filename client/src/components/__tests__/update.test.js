import { render, screen, cleanup } from "@testing-library/react";
import Update from "../update";
import { Provider } from "react-redux";
import store from "../../Redux/store";

test("Should render update component", () => {
  render(
    <Provider store={store}>
      <Update />
    </Provider>
  );
  const updateElement = screen.getByTestId("update");
    expect(updateElement).toBeInTheDocument();
});
