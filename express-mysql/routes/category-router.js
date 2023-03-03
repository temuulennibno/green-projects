import express from "express";
import {
  getCategories,
  createCategory,
  getCategory,
} from "../services/category-service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.json(await getCategories());
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getCategory(id));
});

router.post("/", async (req, res) => {
  const { name, slug, imgUrl } = req.body;
  try {
    res.json(await createCategory(name, slug, imgUrl));
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

export default router;
