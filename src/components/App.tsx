import { useState, useContext } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { SplashScreen } from "../pages/SplashScreen";
import { Auth, Login, Create } from "../pages/Auth/Auth";
import { Reset, Verify, Renew } from "../pages/Auth/Reset/Reset";
import { Error, Error403, Error404, Error419 } from "../pages/Error/Error";
import { Home } from "../pages/Home";
import { AuthorizedRoute } from "../modules/modules";
import { ThemeContext, ToastContext } from "../config/context/context";
import { ToastOptions } from "../helpers/types";
import { ToastSandwich } from "./components";
import "normalize.css";
import "../sass/index.scss";

export function App(): JSX.Element {
  const [theme, setTheme] = useState(useContext(ThemeContext).theme);
  const [toasts, setToasts] = useState([] as ToastOptions[]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ToastContext.Provider value={{ toasts, setToasts }}>
        <>
          <BrowserRouter basename="/business-door">
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route index={true} element={<SplashScreen />} />
                <Route path="auth" element={<Auth />}>
                  <Route index={true} element={<Login />} />
                  <Route path="create" element={<Create />} />
                  <Route path="reset" element={<Reset />}>
                    <Route index={true} element={<Verify />} />
                    <Route element={<AuthorizedRoute />}>
                      <Route path="renew" element={<Renew />} />
                    </Route>
                  </Route>
                </Route>
                <Route path="home" element={<Home />} />
              </Route>
              <Route path="*" element={<Error />}>
                <Route path="403" element={<Error403 />} />
                <Route path="419" element={<Error419 />} />
                <Route path="*" element={<Error404 />} />
              </Route>
            </Routes>
          </BrowserRouter>
          <ToastSandwich toasts={toasts} setToasts={setToasts} />
        </>
      </ToastContext.Provider>
    </ThemeContext.Provider>
  );
}
