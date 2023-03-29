import express from "express";
import "./configs/mongoose-config.js";
import userRouter from "./routes/users-router.js";
import todoCategoriesRouter from "./routes/todoCategories-router.js";
import todoRouter from "./routes/todo-router.js";
import multer from "multer";
import { nanoid } from "nanoid";
import cloudinary from "cloudinary";
import cors from "cors";

import {
  createRestaurant,
  findNearest,
  findAllRestaurants,
} from "./services/restaurantService.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp");
  },
  filename: (req, file, cb) => {
    const fileName = nanoid();
    const splittedPath = file.originalname.split(".");
    const fileExtention = splittedPath[splittedPath.length - 1];
    cb(null, `${fileName}.${fileExtention}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes("image") || file.mimetype.includes("video")) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

const PORT = 8080;
const app = express();

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/todo/categories", todoCategoriesRouter);
app.use("/api/todo", todoRouter);
app.use(cors());

cloudinary.config({
  cloud_name: "dv3q9baga",
  api_key: "721463138334633",
  api_secret: "9bvLCa4o2UFxy2PjlrpKpWuW_4Y",
});

app.post("/files", upload.single("image"), async (req, res) => {
  const uploadedFile = await cloudinary.v2.uploader.upload(req.file.path);
  res.json(uploadedFile);
});

app.use("/uploads", express.static("uploads"));

app.post("/restaurants", async (req, res) => {
  const { name, location } = req.body;
  const response = await createRestaurant({ name, location });
  res.json(response);
});

app.get("/restaurants", async (req, res) => {
  try {
    const response = await findAllRestaurants();
    res.json(response);
  } catch (e) {
    console.log(e);
    res.json("Error");
  }
});

app.get("/restaurants/find", async (req, res) => {
  const { longitude, latitude } = req.body;
  try {
    console.log([longitude, latitude]);
    const response = await findNearest([longitude, latitude]);
    res.json(response);
  } catch (e) {
    console.log(e);
    res.json("Error");
  }
});

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
