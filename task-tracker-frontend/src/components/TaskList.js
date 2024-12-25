import React, { useEffect, useState } from "react";
import { fetchTasks, deleteTask } from "../api";
import TaskItem from "./TaskItem";

const TaskList = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const { data } = await fetchTasks();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
