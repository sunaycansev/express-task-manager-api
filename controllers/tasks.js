import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (e) {
    res.status(500).send({ msg: e });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (e) {
    res.status(500).send({ msg: e });
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
