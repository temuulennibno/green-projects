import mongoose from "mongoose";
import { nanoid } from "nanoid";

export const Todo = {
  _id: { type: String, default: nanoid() },
  name: {
    type: String,
    required: true,
  },
  checked: { type: Boolean, default: false },
  category: { type: String, ref: "TodoCategory" },
};

export const TodoSchema = new mongoose.Schema(Todo, {
  timestamps: true,
});
