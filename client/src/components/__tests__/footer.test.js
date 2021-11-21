import { render, screen, cleanup } from "@testing-library/react";
import Footer from "../footer";


test("Should render footer component", () => {
  render(
    
      <Footer />
    
  );
    const footerElement = screen.getByTestId("footer");
  expect(footerElement).toBeInTheDocument();
});
