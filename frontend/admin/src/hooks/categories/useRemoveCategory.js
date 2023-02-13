import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export const useRemoveCategory = (id) => {
  const [deleted, setDeleted] = useState(false);
  const deleteItem = () => {
    axios
      .delete("http://localhost:8000/categories/" + id)
      .then(() => {
        toast.success("Амжилттай устгалаа");
        setDeleted(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Алдаа гарлаа");
      });
  };
  return { deleteItem, deleted };
};
