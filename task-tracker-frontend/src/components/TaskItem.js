import React from "react";

const TaskItem = ({ task, onEdit, onDelete }) => (
  <div className="border p-4 rounded mb-2 flex justify-between items-center">
    <div>
      <h3 className="font-bold">{task.name}</h3>
      <p>{task.description}</p>
      <p className="text-sm text-gray-500">
        Due: {new Date(task.dueDate).toLocaleDateString()}
      </p>
      <p
        className={`text-sm ${
          task.status === "Completed" ? "text-green-600" : "text-yellow-600"
        }`}
      >
        {task.status}
      </p>
    </div>
    <div className="flex space-x-2">
      <button
        onClick={() => onEdit(task)}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(task._id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  </div>
);

export default TaskItem;
