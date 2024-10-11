import React, { useState } from "react";
import DisplayText from "./components/DisplayText";
import TaskList from "./components/TaskList";
import LoginForm from "./components/LoginForm";
import useDebouncedValue from "./hooks/useDebouncedValue";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 500);

  const tasks = [
    { id: 1, title: "Complete the React project", completed: false },
    { id: 2, title: "Submit the task report", completed: true },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>React TDD Enhanced Example</h1>

      {/* DisplayText Component */}
      <DisplayText text="Welcome to the TDD App!" />

      {/* Task List Component with Filtering */}
      <h2>Tasks</h2>
      <TaskList tasks={tasks} showCompleted={true} />

      {/* Debounced Search Term (using custom hook) */}
      <h2>Search</h2>
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Searching for: {debouncedSearchTerm}</p>

      {/* LoginForm Component */}
      <h2>Login Form</h2>
      <LoginForm />
    </div>
  );
};

export default App;
