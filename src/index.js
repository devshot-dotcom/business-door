import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import RegisterAccount from "./pages/Auth/RegisterAccount";
import ResetPassword from "./pages/Auth/ResetPassword/index";
import VerifyAccount from "./pages/Auth/ResetPassword/VerifyAccount";
import OTP from "./pages/Auth/ResetPassword/OTP";
import RenewPassword from "./pages/Auth/ResetPassword/RenewPassword";
import "normalize.css";
import "./sass/index.scss";

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
          <Route path="/account-creation" element={<RegisterAccount />} />
          <Route path="/reset-password" element={<ResetPassword />}>
            <Route path="" element={<VerifyAccount />} />
            <Route path="otp" element={<OTP />} />
            <Route path="renew" element={<RenewPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
