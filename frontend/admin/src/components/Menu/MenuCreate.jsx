import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { toast } from "react-toastify";

import axios from "axios";

export default function MenuCreate({ afterSubmit, positionId }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("#");
  const [ordering, setOrdering] = useState("0");
  const [newTab, setNewTab] = useState(false);

  const submit = () => {
    axios
      .post("http://localhost:8000/menus", {
        name,
        link,
        ordering,
        positionId: Number(positionId),
        newTab,
      })
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
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Name of the menu..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Link</Form.Label>
        <Form.Control
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          type="text"
          placeholder="Link of the menu..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Ordering</Form.Label>
        <Form.Control
          value={ordering}
          onChange={(e) => {
            setOrdering(e.target.value);
          }}
          type="number"
          placeholder="Ordering of the menu..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>New Tab?</Form.Label>
        <Form.Check
          type="checkbox"
          label="Yes"
          value={newTab}
          onChange={(e) => {
            setNewTab(e.target.checked);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
