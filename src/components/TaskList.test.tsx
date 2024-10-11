import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList";

const tasks = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
];

test("renders all tasks when showCompleted is true", () => {
  render(<TaskList tasks={tasks} showCompleted={true} />);

  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});

test("renders only incomplete tasks when showCompleted is false", () => {
  render(<TaskList tasks={tasks} showCompleted={false} />);

  expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.queryByText("Task 2")).not.toBeInTheDocument();
});
