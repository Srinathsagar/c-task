# Task Tracker Application

This is a full-stack task-tracking application built with the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to manage tasks by creating, editing, deleting, and filtering tasks dynamically.

---

## Features

### Frontend
- **Task Listing**: Displays tasks with fields such as Task Name, Description, Due Date, Status, and Priority.
- **Add Task**: Modal form to add new tasks.
- **Edit Task**: Edit existing tasks via the modal form.
- **Delete Task**: Delete tasks with confirmation.
- **Filter Tasks**: Filter tasks based on their status (Pending, In Progress, Completed).
- **Responsive Design**: Fully functional across desktops and mobile devices.

### Backend
- **API Endpoints**:
  - `GET /tasks`: Fetch all tasks.
  - `POST /tasks`: Add a new task.
  - `PATCH /tasks/:id`: Update a task.
  - `DELETE /tasks/:id`: Delete a task.
- **Database**: MongoDB stores tasks with fields like `name`, `description`, `dueDate`, `status`, and `priority`.

---

## Bonus Features
- **Search Functionality**: Filter tasks by name or description.
- **Overdue Tasks Highlight**: Automatically highlights overdue tasks.
- **User Authentication**: Secure endpoints with JWT-based authentication (if implemented).
- **Real-Time Updates**: Uses WebSockets for real-time task updates (if implemented).

---

## Tech Stack
- **Frontend**: React, Axios, React Modal, and React Router.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (NoSQL).
- **Styling**: Tailwind CSS or any other preferred UI framework.

---

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB installed or access to a MongoDB Atlas database.

---

### Setup Instructions

#### Backend
1. Navigate to the `backend` folder:
   ```bash
   cd task-tracker-backend
