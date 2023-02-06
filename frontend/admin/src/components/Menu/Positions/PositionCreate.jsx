import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';

import axios from 'axios';

export default function MenuPositionCreate({ afterSubmit }) {
  const [name, setName] = useState('');
  const [alias, setAlias] = useState('');

  const submit = () => {
    axios
      .post('http://localhost:8000/menu-positions', { name, alias })
      .then((res) => {
        toast.success('Амжилттай нэмэгдлээ');
        afterSubmit(res.data);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Алдаа гарлаа');
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
          placeholder="Name of the position..."
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Alias</Form.Label>
        <Form.Control
          value={alias}
          onChange={(e) => {
            setAlias(e.target.value);
          }}
          type="text"
          placeholder="Alias of the position..."
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
