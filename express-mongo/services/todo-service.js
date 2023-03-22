import { TodoSchema } from "../models/todo-model.js";
import mongoose from "mongoose";

const TodoModel = mongoose.model("Todo", TodoSchema);

export const getTodo = async () => {
  const todo = await TodoModel.find({}).populate("category");
  return todo;
};

export const getTodoById = async (id) => {
  return await TodoModel.findById(id).populate("category");
};

export const createTodo = async (Todo) => {
  return await (await TodoModel.create(Todo)).populate("category");
};

export const updateTodo = async (id, todo) => {
  return await TodoModel.findByIdAndUpdate(id, todo, {
    new: true,
  }).populate("category");
};

export const deleteTodo = async (id) => {
  return await TodoModel.findByIdAndDelete(id);
};
