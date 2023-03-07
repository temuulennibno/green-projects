import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
} from "../services/user-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getUsers());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getUser(id));
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await deleteUser(id));
});

router.post("/", async (req, res) => {
  const { firstName, lastName, birthDate, email, phone, password, imageUrl } =
    req.body;
  res.json(
    await createUser({
      firstName,
      lastName,
      birthDate,
      email,
      phone,
      password,
      imageUrl,
    })
  );
});

export default router;
