import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { TOAST_CONFIG } from "../utils/configs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitSingIn = () => {
    axios
      .post("http://localhost:8080/api/login", { email, password })
      .then((res) => {
        if (res.status !== 200) {
          toast.error(res.data.message, TOAST_CONFIG);
        } else {
          toast.success(res.data.message, TOAST_CONFIG);
          localStorage.setItem("token", res.data.body.token);
          navigate("/signin/success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="col-sm-4">
        <div className="card">
          <div className="card-body">
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                submitSingIn();
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Link to={"/signup"}>
                  <Button
                    variant="outline-success"
                    type="button"
                    className="me-3"
                  >
                    Sign up
                  </Button>
                </Link>
                <Button variant="primary" type="submit">
                  Sign in
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
