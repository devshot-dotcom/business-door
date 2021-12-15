import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Auth/Login";
import RegisterAccount from "../pages/Auth/RegisterAccount";
import ResetPassword from "../pages/Auth/ResetPassword/index";
import VerifyAccount from "../pages/Auth/ResetPassword/VerifyAccount";
import OTP from "../pages/Auth/ResetPassword/OTP";
import AuthorizedRoute from "./AuthorizedRoute";
import RenewPassword from "../pages/Auth/ResetPassword/RenewPassword";
import { ThemeContext, AuthContext } from "../config/Context";
import { defaultTheme } from "../config/Theme";
import "normalize.css";
import "../sass/index.scss";

export function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [user, setUser] = useState(null);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthContext.Provider value={{ user, setUser }}>
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
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
