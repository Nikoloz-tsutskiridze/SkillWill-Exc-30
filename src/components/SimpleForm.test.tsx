import { render, screen, fireEvent } from "@testing-library/react";
import SimpleForm from "./SimpleForm";

test("should update input value and display it", () => {
  render(<SimpleForm />);
  const inputElement = screen.getByPlaceholderText("Enter text");

  fireEvent.change(inputElement, { target: { value: "Test input" } });

  expect(inputElement).toHaveValue("Test input");
  const displayedValue = screen.getByText("Test input");
  expect(displayedValue).toBeInTheDocument();
});
