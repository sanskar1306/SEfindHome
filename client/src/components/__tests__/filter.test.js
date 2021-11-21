import { render, screen, cleanup } from "@testing-library/react";
import Filter from "../filter";
import { Provider } from "react-redux";
import store from "../../Redux/store";

test("Should render filter component", () => {
  render(
    <Provider store={store}>
      <Filter />
    </Provider>
  );
  const filterElement = screen.getByTestId("filter");
  expect(filterElement).toBeInTheDocument();
});
