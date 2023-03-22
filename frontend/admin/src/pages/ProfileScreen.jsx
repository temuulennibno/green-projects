import { useState } from "react";
import axios from "axios";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        background: "rgba(0,0,0,.3)",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="spinner">
        <FaSpinner />
      </div>
    </div>
  );
};

export default function ProfielScreen() {
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);

  const uploadImg = (e) => {
    setLoading(true);
    const fd = new FormData();
    fd.append("image", e.target.files[0]);
    axios
      .post("http://localhost:8080/files", fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setImg(res.data.secure_url);
        setLoading(false);
      });
  };
  return (
    <>
      <div className="container-sm body-container my-5">
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "#ccc",
            overflow: "hidden",
            border: "1px solid #f0f0f0",
            position: "relative",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={img}
            alt=""
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png";
            }}
          />
          <input
            type="file"
            onChange={uploadImg}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              opacity: 0,
              cursor: "pointer",
            }}
          />
          {loading && <Loading />}
        </div>
      </div>
    </>
  );
}
