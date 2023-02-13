import axios from "axios";
import { useState } from "react";

const API_URL = "http://localhost:8000";

export default function useApi({ method = "GET", path = "/" }) {
  const [response, setResponse] = useState(null);

  axios({
    method,
    url: API_URL + path,
  }).then((res) => {
    setResponse(res);
  });

  return response.data;
}
