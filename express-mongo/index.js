import express from "express";
import "./configs/mongoose-config.js";
import userRouter from "./routes/users-router.js";

const PORT = 8080;
const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
