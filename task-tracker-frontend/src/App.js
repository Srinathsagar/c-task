import React, { useState } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { addTask, updateTask } from "./api";

const App = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = async (task) => {
    await addTask(task);
    setIsFormOpen(false);
  };

  const handleEditTask = async (task) => {
    await updateTask(task._id, task);
    setIsFormOpen(false);
  };

  const handleOpenForm = (task = null) => {
    setTaskToEdit(task);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-6">
        <button
          onClick={() => handleOpenForm()}
          className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
        >
          Add Task
        </button>
        <TaskList onEdit={handleOpenForm} />
      </div>
      {isFormOpen && (
        <TaskForm
          onSubmit={taskToEdit ? handleEditTask : handleAddTask}
          taskToEdit={taskToEdit}
          closeForm={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
