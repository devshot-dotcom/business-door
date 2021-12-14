import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import RegisterAccount from "./pages/Auth/RegisterAccount";
import ResetPassword from "./pages/Auth/ResetPassword/index";
import VerifyAccount from "./pages/Auth/ResetPassword/VerifyAccount";
import OTP from "./pages/Auth/ResetPassword/OTP";
import AuthorizedRoute from "./components/AuthorizedRoute";
import RenewPassword from "./pages/Auth/ResetPassword/RenewPassword";
import "normalize.css";
import "./sass/index.scss";

const setDefaultTheme = () => {
  // If system preference is dark theme.
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("doorTheme", "dark");
    return "dark";
  }

  // Otherwise.
  localStorage.setItem("doorTheme", "light");
  return "light";
};

// Set default theme if not already set.
const defaultTheme = localStorage.getItem("doorTheme") || setDefaultTheme();

// Apply the set theme.
defaultTheme === "dark" && document.body.setAttribute("data-theme", "dark");

// Create the context.
export const Context = createContext({
  themeContext: {
    theme: defaultTheme,
    setTheme: () => {},
  },
  authContext: {
    user: {},
    setUser: () => {},
  },
});

function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [user, setUser] = useState({ isLogged: false });

  return (
    <Context.Provider
      value={{
        themeContext: { theme, setTheme },
        authContext: { user, setUser },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/account-creation" element={<RegisterAccount />} />
          <Route path="/reset-password" element={<ResetPassword />}>
            <Route path="" element={<VerifyAccount />} />
            <Route path="otp" element={<OTP />} />
            <Route
              path="renew"
              element={
                <AuthorizedRoute>
                  <RenewPassword />
                </AuthorizedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
