import mongoose from "mongoose";
import { nanoid } from "nanoid";

export const TodoCategory = {
  _id: { type: String, default: nanoid() },
  name: {
    type: String,
    required: true,
  },
};

export const todoCategorySchema = new mongoose.Schema(TodoCategory, {
  timestamps: true,
});
