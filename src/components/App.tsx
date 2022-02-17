import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Auth, Login, Create } from "../pages/Auth/Auth";
import { Reset, Verify, Renew } from "../pages/Auth/Reset/Reset";
import { Error, Error403, Error404, Error419 } from "../pages/Error/Error";
import { Home } from "../pages/Home";
import { AuthorizedRoute } from "../modules/modules";
import { ThemeContext, ToastContext } from "../config/context/context";
import { ToastOptions } from "../helpers/types";
import { Navbar, ToastSandwich } from "./components";
import { Landing } from "../pages/Landing/Landing";
import { defaultTheme } from "../config/theme";
import "../sass/index.scss";

export function App(): JSX.Element {
  const [theme, setTheme] = useState(defaultTheme);
  const [toasts, setToasts] = useState([] as ToastOptions[]);

  useEffect(() => {
    // Default theme is either the one
    // that the user prefers, the one
    // he/she has selected, or the default,
    // light theme. If it's dark, we need to
    // apply it, otherwise, we do nothing.
    if (defaultTheme === "dark")
      document.body.setAttribute("data-theme", "dark");
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ToastContext.Provider value={{ toasts, setToasts }}>
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Outlet />}>
                <Route element={<Navbar />}>
                  <Route index={true} element={<Landing />} />
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
                  <Route path="*" element={<Error />}>
                    <Route path="403" element={<Error403 />} />
                    <Route path="419" element={<Error419 />} />
                    <Route path="*" element={<Error404 />} />
                  </Route>
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
          <ToastSandwich toasts={toasts} setToasts={setToasts} />
        </>
      </ToastContext.Provider>
    </ThemeContext.Provider>
  );
}
