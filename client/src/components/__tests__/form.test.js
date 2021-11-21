import { render, screen, cleanup } from "@testing-library/react";
import Form from "../form";
import { Provider } from "react-redux";
import store from "../../Redux/store";

test("Should render form component", () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const formElement = screen.getByTestId("form");
  expect(formElement).toBeInTheDocument();
});
