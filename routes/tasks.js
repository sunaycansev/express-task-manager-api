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
router.get("/:id", getSingleTask);
router.post("/", createTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
