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

export const getSingleTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).send({ msg: `No task found by id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (e) {
    res.status(500).send({ msg: e });
  }
};

export const updateTask = (req, res) => {
  res.send("update task");
};

export const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).send({ msg: `No task found by id ${taskID}` });
    }
    res.status(200).json({ msg: "Task deleted successfully" });
  } catch (e) {
    res.status(500).send({ msg: e });
  }
  res.send("delete task");
};
