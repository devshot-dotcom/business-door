import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen";
import Auth, { Login, Create } from "../pages/Auth/Auth";
import Reset, { Verify, Renew } from "../pages/Auth/Reset/Reset";
import Dashboard from "../pages/Dashboard";
import AuthorizedRoute from "./AuthorizedRoute";
import { defaultTheme, ThemeContext, ToastContext } from "../config/config";
import { AuthContext } from "../config/Context";
import { ToastSandwich } from "./Toast/ToastSandwich";
import "normalize.css";
import "../sass/index.scss";
import "../sass/Toast.scss";

export function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [user, setUser] = useState(null);
  const [toasts, setToasts] = useState([]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AuthContext.Provider value={{ user, setUser }}>
        <ToastContext.Provider value={{ toasts, setToasts }}>
          <>
            <BrowserRouter>
              <Routes>
                <Route path="" element={<SplashScreen />} />
                <Route path="auth" element={<Auth />}>
                  <Route path="login" element={<Login />} />
                  <Route path="create" element={<Create />} />
                  <Route path="reset" element={<Reset />}>
                    <Route path="verify" element={<Verify />} />
                    <Route
                      path="renew"
                      element={
                        <AuthorizedRoute>
                          <Renew />
                        </AuthorizedRoute>
                      }
                    />
                  </Route>
                </Route>
                <Route path="dashboard" element={<Dashboard />} />
              </Routes>
            </BrowserRouter>
            <ToastSandwich toasts={toasts} setToasts={setToasts} />
          </>
        </ToastContext.Provider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
}
