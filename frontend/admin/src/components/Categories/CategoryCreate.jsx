import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

import axios from "axios";
import { useEffect, useRef } from "react";

export default function CategoryCreate({ afterSubmit }) {
  const nameRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const submit = () => {
    axios
      .post("http://localhost:8000/categories", { name: nameRef.current.value })
      .then((res) => {
        toast.success("Амжилттай нэмэгдлээ");
        afterSubmit(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Алдаа гарлаа");
      });
  };

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name of the category..."
          ref={nameRef}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
