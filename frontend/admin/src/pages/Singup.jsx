import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { TOAST_CONFIG } from '../utils/configs';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Singup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const navigate = useNavigate();

  const submitSignup = () => {
    // STATUS INFO
    let status = 200;

    fetch('https://demo-api-one.vercel.app/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, repassword }),
    })
      .then((res) => {
        status = res.status;
        return res.json();
      })
      .then((data) => {
        if (status !== 200) {
          toast.error(data.message, TOAST_CONFIG);
        } else {
          toast.success(data.message, TOAST_CONFIG);
          setTimeout(() => {
            navigate('/signin');
          }, 1000);
        }
      })
      .catch((err) => {
        toast.error(err.message, TOAST_CONFIG);
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
                submitSignup();
              }}
            >
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password repeat</Form.Label>
                <Form.Control type="password" placeholder="Password repeat" value={repassword} onChange={(e) => setRepassword(e.target.value)} />
              </Form.Group>
              <div className="d-flex justify-content-end">
                <Link to={'/signin'}>
                  <Button variant="outline-success" type="button" className="me-3">
                    Sign in
                  </Button>
                </Link>
                <Button variant="primary" type="submit">
                  Sign up
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
