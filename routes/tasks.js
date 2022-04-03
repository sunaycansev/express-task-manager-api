import express from "express";
import {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";
const router = express.Router();

router.get("/", getAllTasks);
router.post("/", createTask);
router.get("/:id", getSingleTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
