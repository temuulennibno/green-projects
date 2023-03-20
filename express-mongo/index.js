import express from "express";
import "./configs/mongoose-config.js";
import userRouter from "./routes/users-router.js";
import multer from "multer";
import { nanoid } from "nanoid";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const mimeType = file.mimetype;
    console.log("mimeType:", mimeType);
    let dest = "";
    if (mimeType.includes("image")) {
      dest += "/images";
    } else if (mimeType.includes("video")) {
      dest += "/videos";
    } else if (mimeType.includes("pdf")) {
      dest += "/docs";
    } else if (mimeType.includes("audio")) {
      dest += "/audios";
    } else {
      dest += "/others";
    }
    cb(null, "./uploads" + dest);
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
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    // hadgalna
    cb(null, true);
    // hadgalkue
    cb(null, false);
  },
});

const PORT = 8080;
const app = express();

app.use(express.json());

app.use("/api/users", userRouter);

app.post("/files", upload.single("image"), (req, res) => {
  res.json(req.file);
});

app.use("/uploads", express.static("uploads"));

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
