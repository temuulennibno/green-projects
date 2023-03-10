import express from "express";
import { shorten } from "../services/link-service.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("Hello link router");
});

router.post("/", async (req, res) => {
  const { url } = req.body;
  res.json(await shorten(url));
});

export default router;
