import React from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  showCompleted: boolean;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, showCompleted }) => {
  const filteredTasks = showCompleted
    ? tasks
    : tasks.filter((task) => !task.completed);

  return (
    <ul>
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.title}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
