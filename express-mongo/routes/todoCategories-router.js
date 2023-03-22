import express from "express";
import {
  createTodoCategory,
  deleteTodoCategory,
  getTodoCategories,
  getTodoCategoryById,
  updateTodoCategory,
} from "../services/todoCategories-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getTodoCategories());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getTodoCategoryById(id));
});

router.post("/", async (req, res) => {
  const todoCategory = req.body;
  res.json(await createTodoCategory(todoCategory));
});

router.put("/:id", async (req, res) => {
  const { id } = req.params.id;
  const todoCategory = req.body;
  res.json(await updateTodoCategory(id, todoCategory));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteTodoCategory(id));
});

export default router;
