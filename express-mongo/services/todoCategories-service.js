import { todoCategorySchema } from "../models/todoCategory-model.js";
import mongoose from "mongoose";

const todoCategoryModel = mongoose.model("TodoCategory", todoCategorySchema);

export const getTodoCategories = async () => {
  const todoCategories = await todoCategoryModel.find({});
  return todoCategories;
};

export const getTodoCategoryById = async (id) => {
  return await todoCategoryModel.findById(id);
};

export const createTodoCategory = async (todoCategory) => {
  return await todoCategoryModel.create(todoCategory);
};

export const updateTodoCategory = async (id, todoCategory) => {
  return await todoCategoryModel.findByIdAndUpdate(id, todoCategory, {
    new: true,
  });
};

export const deleteTodoCategory = async (id) => {
  return await todoCategoryModel.findByIdAndDelete(id);
};
