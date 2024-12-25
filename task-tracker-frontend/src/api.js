import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/tasks" });

export const fetchTasks = () => API.get("/");
export const addTask = (task) => API.post("/", task);
export const updateTask = (id, updatedTask) => API.patch(`/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/${id}`);
