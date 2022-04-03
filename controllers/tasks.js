import Task from "../models/Task.js";

export const getAllTasks = (req, res) => {
  res.send("all tasks");
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (e) {
    res.status(500).send({ message: e });
  }
};

export const getSingleTask = (req, res) => {
  const { id } = req.params;
  res.json({ success: true, data: { id } });
};

export const updateTask = (req, res) => {
  res.send("update task");
};

export const deleteTask = (req, res) => {
  res.send("delete task");
};
