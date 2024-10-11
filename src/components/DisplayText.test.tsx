import { render, screen } from "@testing-library/react";
import DisplayText from "./DisplayText";

test("should render text passed as prop", () => {
  render(<DisplayText text="Hello World" />);
  const element = screen.getByText(/Hello World/i);
  expect(element).toBeInTheDocument();
});
