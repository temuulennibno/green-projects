import "./styles/bootstrap.min.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import { createContext, useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Signin from "./pages/Signin";
import SignInError from "./pages/SignInError";
import Singup from "./pages/Singup";
import SigninSuccess from "./pages/SinginSuccess";
import Categories from "./pages/Categories";
import Signout from "./pages/Signout";
import MenuPositions from "./pages/MenuPositions";
import Menus from "./pages/Menus";
import axios from "axios";
import DynamicModal from "./components/utils/DynamicModal";
import { ModalProvider } from "./contexts/ModalContext";

export default function App() {
  const [menuShow, setMenuShow] = useState(false);

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/menus/admin").then((res) => {
      setMenus(res.data);
    });
  }, []);

  // const [me, setMe] = useState(undefined);

  // useEffect(() => {
  //   const myData = localStorage.getItem('me');
  //   if (myData !== 'undefined') {
  //     setMe(JSON.parse(myData));
  //   }
  // }, []);

  // if (!me) {
  //   return (
  //     <Routes>
  //       <Route path="/signin" element={<Signin />} />
  //       <Route path="/signin/success" element={<SigninSuccess setMe={setMe} />} />
  //       <Route path="/signup" element={<Singup />} />
  //       <Route path="*" element={<SignInError />} />
  //     </Routes>
  //   );
  // }

  return (
    <ModalProvider>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && "show"}`}>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {menus.map((menu) => {
              return (
                <li key={menu.id}>
                  <Link to={menu.link}>{menu.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu-positions" element={<MenuPositions />} />
            <Route path="/menu-positions/:id" element={<Menus />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/articles" element={<Articles />} />
            {/* <Route path="/signout" element={<Signout setMe={setMe} />} /> */}
          </Routes>
        </div>
      </div>
    </ModalProvider>
  );
}
