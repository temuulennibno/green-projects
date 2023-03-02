import pool from "../config/mysql-config.js";

export const getCategories = async () => {
  const [result] = await pool.query("SELECT * FROM category");
  return result;
};

export const createCategory = async (name, slug, imgUrl) => {
  const [result] = await pool.query(
    `INSERT INTO category (name, slug, imgUrl) VALUES (?,?,?)`,
    [name, slug, imgUrl]
  );
  return result;
};
