import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SigninSuccess({ setMe }) {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/users/me", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setMe(res.data);
          localStorage.setItem("me", JSON.stringify(res.data));
          navigate("/");
        } else {
          console.log(res.data.message);
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-100 m-vh-100 d-flex align-items-center justify-content-center"></div>
  );
}
