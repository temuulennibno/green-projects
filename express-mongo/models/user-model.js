import mongoose from "mongoose";

export const User = {
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
  },
};

export const userSchema = new mongoose.Schema(User, { timestamps: true });
