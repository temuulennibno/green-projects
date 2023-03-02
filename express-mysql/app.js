const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "MySQ7Admin",
    database: "green",
  })
  .promise();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const [result, columns] = await pool.query("SELECT * FROM category");
  console.log(result);
  res.json(result);
});

app.post("/", async (req, res) => {
  const { name, slug, imgUrl } = req.body;
  try {
    const [result] = await pool.query(
      `INSERT INTO category (name, slug, imgUrl) VALUES (?,?,?)`,
      [name, slug, imgUrl]
    );
    res.json(result);
  } catch (err) {
    res.status(400).json("Something went wrong");
  }
});

app.listen(8000, () => {
  console.log("http://localhost:8000");
});
