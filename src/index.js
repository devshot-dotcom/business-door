import React, { createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recover from "./pages/Recover";
import "normalize.css";
import "./sass/index.scss";
import { useState } from "react";

// Set default theme if not already set.
const defaultTheme =
  localStorage.getItem("doorTheme") ||
  localStorage.setItem("doorTheme", "light") ||
  "light";

// Apply the set theme.
defaultTheme === "dark" && document.body.setAttribute("data-theme", "dark");

// Create the theme context.
export const ThemeContext = createContext({
  theme: defaultTheme,
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth/account-creation" element={<Register />} />
          <Route path="/auth/recover-password" element={<Recover />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
