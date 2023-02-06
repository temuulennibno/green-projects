const express = require("express");

const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());

const port = 8000;

let categories = JSON.parse(fs.readFileSync("categoryData.json", "utf8"));

let nextCatId = categories.length;

const updateCategoriesFile = () => {
  fs.writeFileSync("categoryData.json", JSON.stringify(categories));
};

app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  let category = null;

  for (const row of categories) {
    if (id == row.id) {
      category = row;
      break;
    }
  }

  res.json(category);
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  categories = categories.filter((row) => row.id !== Number(id));
  updateCategoriesFile();
  res.json(id);
});

const bodyParser = require("body-parser");
const { match } = require("assert");
const jsonParser = bodyParser.json();

app.post("/categories", jsonParser, (req, res) => {
  const { name } = req.body;
  const newCategory = { id: nextCatId++, name };
  categories.push(newCategory);
  updateCategoriesFile();
  res.json(newCategory);
});

app.put("/categories/:id", jsonParser, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  let updatedCat;
  categories = categories.map((row) => {
    if (row.id === Number(id)) {
      updatedCat = { id: Number(id), name };
      return updatedCat;
    }
    return row;
  });
  updateCategoriesFile();
  res.json(updatedCat);
});

let products = JSON.parse(fs.readFileSync("MOCK_DATA.json", "utf-8"));

app.get("/products", (req, res) => {
  let { pageSize, page, priceTo, priceFrom, q } = req.query;
  pageSize = Number(pageSize) || 10;
  page = Number(page) || 1;
  let start, end;

  start = (page - 1) * pageSize;
  end = page * pageSize;

  const newProducts = products.filter((product) => {
    let matching = true;
    if (q) {
      matching = product.name.toLowerCase().includes(q.toLowerCase());
    }
    return matching;
  });

  const items = newProducts.slice(start, end);

  res.json({
    total: newProducts.length,
    totalPages: Math.ceil(newProducts.length / pageSize),
    page,
    pageSize,
    items,
  });
});

let menuPositions = JSON.parse(fs.readFileSync("menuPositions.json", "utf-8"));

app.get("/menu-positions", (req, res) => {
  res.json(menuPositions);
});

app.get("/menu-positions/:id", (req, res) => {
  const { id } = req.params;
  let position = null;

  for (const row of menuPositions) {
    if (id == row.id) {
      position = row;
      break;
    }
  }
  res.json(position);
});

let nextPosId = menuPositions.length + 1;

app.post("/menu-positions", jsonParser, (req, res) => {
  const { name, alias } = req.body;
  const newPosition = { id: nextPosId++, name, alias };
  menuPositions.push(newPosition);
  fs.writeFileSync("menuPositions.json", JSON.stringify(menuPositions));
  res.json(newPosition);
});

app.delete("/menu-positions/:id", (req, res) => {
  const { id } = req.params;
  menuPositions = menuPositions.filter((row) => row.id !== Number(id));
  fs.writeFileSync("menuPositions.json", JSON.stringify(menuPositions));
  res.json(id);
});

let menus = JSON.parse(fs.readFileSync("menus.json", "utf-8"));
let nextMenuId = menus.length + 1;

app.get("/menus", (req, res) => {
  const { positionId } = req.query;
  if (!positionId) return res.statusCode(400).json("PositionId required!");

  const result = menus.filter((menu) => {
    return menu.positionId === Number(positionId);
  });
  return res.json(result);
});

app.get("/menus/:positionAlias", (req, res) => {
  const { positionAlias } = req.params;
  let position = null;

  for (const row of menuPositions) {
    if (positionAlias == row.alias) {
      position = row;
      break;
    }
  }

  if (!position) return res.status(400).json("Position not found");

  const result = menus.filter((menu) => {
    return menu.positionId === position.id;
  });
  return res.json(result);
});

app.post("/menus", jsonParser, (req, res) => {
  const { name, link, newTab, positionId, ordering } = req.body;
  const newMenu = { id: nextMenuId, name, link, newTab, positionId, ordering };
  menus = [...menus, newMenu];
  fs.writeFileSync("menus.json", JSON.stringify(menus));
  return res.json(newMenu);
});

app.delete("/menus/:id", (req, res) => {
  const { id } = req.params;
  menus = menus.filter((row) => row.id !== Number(id));
  fs.writeFileSync("menus.json", JSON.stringify(menus));
  res.json(id);
});

app.listen(port, () => {
  console.log("http://localhost:" + port);
});
