import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

test("displays error for invalid email", () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByText("Login");

  fireEvent.change(emailInput, { target: { value: "invalid-email" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.click(submitButton);

  expect(screen.getByText("Invalid email")).toBeInTheDocument();
});

test("displays error for short password", () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByText("Login");

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "123" } });
  fireEvent.click(submitButton);

  expect(
    screen.getByText("Password must be at least 6 characters")
  ).toBeInTheDocument();
});

test("submits the form without errors", () => {
  render(<LoginForm />);
  const emailInput = screen.getByPlaceholderText("Email");
  const passwordInput = screen.getByPlaceholderText("Password");
  const submitButton = screen.getByText("Login");

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "password123" } });
  fireEvent.click(submitButton);

  expect(screen.queryByText("Invalid email")).not.toBeInTheDocument();
  expect(
    screen.queryByText("Password must be at least 6 characters")
  ).not.toBeInTheDocument();
});
