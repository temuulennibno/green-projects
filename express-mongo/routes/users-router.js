import express from "express";
import { createUser, getUsers } from "../services/users-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getUsers());
});

router.post("/", async (req, res) => {
  const user = req.body;
  res.json(await createUser(user));
});

export default router;
