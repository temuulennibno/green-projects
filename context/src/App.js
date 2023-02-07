import "./App.css";
import { useState } from "react";
import Footer from "./components/Footer";
import { createContext } from "react";

export const ThemeContext = createContext("");

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <div className={"wrapper " + theme}>
        <button
          onClick={() => {
            setTheme("light");
          }}
        >
          ☀️
        </button>
        <button
          onClick={() => {
            setTheme("dark");
          }}
        >
          🌙
        </button>
        <h1>My blog</h1>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
