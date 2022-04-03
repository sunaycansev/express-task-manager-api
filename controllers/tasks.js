import asyncWrapper from "../middleware/async.js";
import Task from "../models/Task.js";
import { createCustomError } from "../errors/custom-error.js";

export const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

export const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

export const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomError("Task not found", 404));
  }
  res.status(200).json({ task });
});

export const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomError("Task not found", 404));
  }
  res.status(200).json({ msg: "Task deleted successfully", task });
});

export const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const body = req.body;
  const task = await Task.findOneAndUpdate({ _id: taskID }, body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError("Task not found", 404));
  }
  res.json({ msg: "Task updated successfully", task });
});
