import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addNewTask,
  deleteTask,
  getUsersTasks,
} from "../controllers/taskController.js";

const router = express.Router();

// Apply auth middleware
router.use(authMiddleware);

// POST /api/tasks
router.post("/", addNewTask);

// GET /api/tasks
router.get("/", getUsersTasks);

// DELETE /api/tasks/:id
router.delete("/:id", deleteTask);

export default router;
