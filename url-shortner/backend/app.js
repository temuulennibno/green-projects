import express from "express";
import linkRouter from "./routes/link-router.js";
import { findOneById } from "./services/link-service.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await findOneById(id);
  if (result === null) res.status(404).json("Url not found");
  else res.redirect(result.url);
});

app.use("/links", linkRouter);

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
