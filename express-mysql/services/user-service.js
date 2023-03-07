import pool from "../config/mysql-config.js";
// npm i nanoid;
import { nanoid } from "nanoid";

export const getUsers = async () => {
  const [result] = await pool.query("SELECT * FROM user");
  return result;
};

export const getUser = async (id) => {
  const [result] = await pool.query("SELECT * FROM user where userId=?", [id]);
  const user = result.length ? result[0] : null;
  return user;
};

export const deleteUser = async (id) => {
  try {
    await pool.query("DELETE FROM user WHERE userId=?", [id]);
    return id;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const createUser = async (user) => {
  const id = nanoid();
  try {
    await pool.query(
      `INSERT INTO user (userId, firstName, lastName, birthDate, email, phone, password,imageUrl,createdAt) 
                VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        id,
        user.firstName,
        user.lastName,
        user.birthDate,
        user.email,
        user.phone,
        user.password,
        user.imageUrl,
        new Date(),
      ]
    );
    const result = await getUser(id);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const updateUser = async (user) => {
  try {
    await pool.query(
      `update user set firstName=?, lastName=?, birthDate=?, email=?, phone=?, password=?, imageUrl=?,updatedAt=? where userId=?`,
      [
        user.firstName,
        user.lastName,
        user.birthDate,
        user.email,
        user.phone,
        user.password,
        user.imageUrl,
        new Date(),
        user.id,
      ]
    );
    const result = await getUser(id);
    return result;
  } catch (e) {
    console.error(e);
    return null;
  }
};
