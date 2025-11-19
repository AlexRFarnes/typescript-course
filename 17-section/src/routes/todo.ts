import express, { Request, Response } from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from "../data.js";

const router = express.Router();

router.get("/todos/:id", (req: Request, res: Response) => {
  const todoId = req.params.id;
  const todo = getTodo(todoId);
  res.json({ todo });
});

router.get("/todos", (req: Request, res: Response) => {
  const todos = getAllTodos();
  res.json({ todos });
});

router.post("/todos", (req: Request, res: Response) => {
  const text = req.body.text;
  const newTodo = addTodo(text);
  res.status(201).json({ message: "Todo created successfully", todo: newTodo });
});

router.patch("/todos/:id", (req: Request, res: Response) => {
  const todoId = req.params.id;
  const text = req.body.text;
  const updatedTodo = updateTodo(todoId, text);
  res.json({ message: "Todo updated successfully", todo: updatedTodo });
});

router.delete("/todos/:id", (req: Request, res: Response) => {
  const todoId = req.params.id;
  deleteTodo(todoId);
  res.json({ message: "Todo deleted successfully" });
});

export default router;
