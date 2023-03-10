import express from "express";
import { shorten, isValidURL } from "../services/link-service.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hello link router");
});

router.post("/", async (req, res) => {
  const { url } = req.body;
  if (isValidURL(url)) res.json(await shorten(url));
  else res.status(400).json("Invalid URL");
});

export default router;
