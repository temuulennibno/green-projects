import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodo,
  getTodoById,
  updateTodo,
} from "../services/todo-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getTodo());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getTodoById(id));
});

router.post("/", async (req, res) => {
  const todo = req.body;
  res.json(await createTodo(todo));
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const todo = req.body;
  res.json(await updateTodo(id, todo));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteTodo(id));
});

export default router;
