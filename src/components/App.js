import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SplashScreen from "../pages/SplashScreen";
import Auth, { Login, Create } from "../pages/Auth/Auth";
import Reset, { Verify, Renew } from "../pages/Auth/Reset/Reset";
import Home from "../pages/Home";
import { UnAuthorizedRoute, AuthorizedRoute } from "../modules/modules";
import { ThemeContext, ToastContext } from "../config/context";
import { defaultTheme } from "../config/theme";
import { ToastSandwich } from "./Toast/ToastSandwich";
import "normalize.css";
import "../sass/index.scss";

export function App() {
  const [theme, setTheme] = useState(defaultTheme);
  const [toasts, setToasts] = useState([]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ToastContext.Provider value={{ toasts, setToasts }}>
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="auth" element={<Auth />}>
                <Route element={<UnAuthorizedRoute />}>
                  <Route index={true} element={<Login />} />
                  <Route path="create" element={<Create />} />
                </Route>
                <Route path="reset" element={<Reset />}>
                  <Route index={true} element={<Verify />} />
                  <Route path="renew" element={<Renew />} />
                </Route>
              </Route>
              <Route path="home" element={<Home />} />
            </Routes>
          </BrowserRouter>
          <ToastSandwich toasts={toasts} setToasts={setToasts} />
        </>
      </ToastContext.Provider>
    </ThemeContext.Provider>
  );
}
