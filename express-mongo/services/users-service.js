import { UserSchema } from "../models/UserModel.js";
import mongoose from "mongoose";

const userModel = mongoose.model("User", UserSchema);

export const getUsers = async () => {
  return await userModel.find({});
};

export const createUser = async (user) => {
  return await userModel.create(user);
};
