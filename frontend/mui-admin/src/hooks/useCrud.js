import axios from "axios";
import { useEffect, useState } from "react";
import { useToast } from "./useToast";

/**
 *
 * @param {string} path of request
 */
export const useCrud = (path) => {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const showToast = useToast();

  useEffect(() => {
    axios.get("http://localhost:8000/" + path).then((res) => {
      setItems(res.data);
    });
  }, [path]);

  const showErrorToast = (status) => {
    switch (status) {
      case 400:
      case 404:
        showToast("Буруу хүсэлт", "error");
        break;
      case 401:
        showToast("Нэвтрээгүй хэрэглэгч", "error");
        break;
      case 403:
        showToast("Эрх хүрэлцэхгүй байна", "error");
        break;
      case 500:
        showToast("Сервер дээр алдаа гарлаа", "error");
        break;
      default:
        showToast("Алдаа гарлаа", "error");
    }
  };

  const deleteItem = (id) => {
    axios
      .delete("http://localhost:8000/" + path + "/" + id)
      .then((res) => {
        setItems(items.filter((items) => items.id !== id));
        showToast("Амжилттай устгалаа", "success");
      })
      .catch((err) => {
        showErrorToast(err.status.code);
      });
  };

  const updateItem = (id, item) => {
    axios
      .put("http://localhost:8000/" + path + "/" + id, item)
      .then((res) => {
        setItems(items.map((item) => (item.id === id ? res.data : item)));
        showToast("Амжилттай заслаа", "success");
      })
      .catch((err) => {
        showErrorToast(err.status.code);
      });
  };

  const createItem = (item) => {
    axios
      .post("http://localhost:8000/" + path, item)
      .then((res) => {
        setItems([...items, res.data]);
        showToast("Амжилттай нэмлээ", "success");
      })
      .catch((err) => {
        showErrorToast(err.status.code);
      });
  };

  return { items, pageSize, setPageSize, deleteItem, updateItem, createItem };
};
