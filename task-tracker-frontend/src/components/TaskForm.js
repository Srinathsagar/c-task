import React, { useState } from "react";

const TaskForm = ({ onSubmit, taskToEdit, closeForm }) => {
  const [task, setTask] = useState(
    taskToEdit || {
      name: "",
      description: "",
      dueDate: "",
      priority: "Low",
      status: "Pending",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4">
          {taskToEdit ? "Edit Task" : "Add Task"}
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Task Name"
          value={task.name}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={task.description}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        />
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
          required
          className="w-full p-2 mb-4 border rounded"
        >
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={closeForm}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
