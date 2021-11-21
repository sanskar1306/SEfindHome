import { render, screen, cleanup } from "@testing-library/react";
import Explore from "../explore";
import { Provider } from "react-redux";
import store from "../../Redux/store";

test("Should render explore component", () => {
  render(
    <Provider store={store}>
      <Explore />
    </Provider>
  );
  const exploreElement = screen.getByTestId("explore");
  expect(exploreElement).toBeInTheDocument();
});
