import { render, screen, cleanup } from "@testing-library/react";
import MainComponent from "../main";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import { BrowserRouter } from "react-router-dom";

test("Should render header component", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
      <MainComponent />
      </BrowserRouter>
    </Provider>
  );
  const mainElement = screen.getByTestId("main");
  expect(mainElement).toBeInTheDocument();
});
