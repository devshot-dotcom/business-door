import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { defaultTheme } from "./config/theme";
import { ToastOptions } from "./helpers/types";
import { ThemeContext } from "./config/context/ThemeContext";
import { ToastContext } from "./config/context/ToastContext";
import { AuthorizedRoute } from "./modules/AuthorizedRoute";
import { Auth, Create, Login } from "./pages/Auth/Auth";
import { Reset, Renew, Verify } from "./pages/Auth/Reset/Reset";
import { Error, Error403, Error404, Error419 } from "./pages/Error/Error";
import { Home } from "./pages/Home";
import { Landing } from "./pages/landing/landing";
import { App, Container, ToastSandwich } from "./components";
import "./sass/index.scss";

export function Root(): JSX.Element {
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
    <App>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ToastContext.Provider value={{ toasts, setToasts }}>
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Outlet />}>
                  <Route element={<Container />}>
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
    </App>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
