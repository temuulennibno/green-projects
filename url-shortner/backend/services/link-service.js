import pool from "../configs/mysql-config.js";
import shortid from "shortid";

export const shorten = async (url) => {
  const id = shortid.generate();
  console.log("url", url);
  await pool.query(`INSERT INTO links VALUES (?,?)`, [id, url]);
  return id;
};

export const findOneById = async (id) => {
  console.log("id", id);
  const [result] = await pool.query(`SELECT * FROM links WHERE id =?`, [id]);
  return result.length ? result[0] : null;
};
