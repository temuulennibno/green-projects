import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

const placeHolder = "https://via.placeholder.com/150";
const spinner = "https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif";
export default function OpenAi() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(placeHolder);

  const submit = (e) => {
    e.preventDefault();
    setImage(spinner);
    setPrompt(e.target.prompt.value);
    const params = new URLSearchParams();
    params.set("prompt", e.target.prompt.value);
    params.set("sizeVariant", e.target.size.value);
    axios
      .get("http://localhost:8000/openai/generate?" + params.toString())
      .then((res) => {
        setImage(res.data);
      });
  };
  return (
    <>
      <h1 className="text-center my-3">Image generater</h1>
      <div className="container-sm body-container">
        <div>
          <Form
            onSubmit={submit}
            className="d-flex align-items-end justify-content-between"
          >
            <Form.Group className="me-3 w-75">
              <Form.Label>Prompt</Form.Label>
              <Form.Control
                name="prompt"
                type="text"
                placeholder="What do want to draw by DALL-E?"
                required="true"
              />
            </Form.Group>
            <Form.Group className="me-3">
              <Form.Label>Size</Form.Label>
              <Form.Select name="size">
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </Form.Select>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <hr className="my-5" />
        <div className="d-flex align-items-center justify-content-center">
          <img src={image} alt={prompt} />
        </div>
      </div>
    </>
  );
}
