import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { ROUTES, ThemeContext, ToastContext, DEFAULT_THEME } from "./config";
import { AuthorizedRoute, Meta } from "./modules";
import { App, Container, ToastSandwich } from "./components";
import { ToastOptions } from "./components/toast";
import { Splash } from "./pages";
import "./sass/index.scss";

export function Root(): JSX.Element {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [toasts, setToasts] = useState([] as ToastOptions[]);

  useEffect(() => {
    // Default theme is either the one
    // that the user prefers, the one
    // he/she has selected, or the default;
    // light theme. If it's dark, we need to
    // apply it, otherwise, we do nothing.
    if (DEFAULT_THEME === "dark")
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
                    {/* Splash Page */}
                    <Route index={true} element={<Splash />} />

                    {/* Landing Page */}
                    <Route element={<Meta title={ROUTES.landing.title} />}>
                      <Route
                        path={ROUTES.landing.basename}
                        element={ROUTES.landing.Page}
                      />
                    </Route>

                    {/* Auth Page */}
                    <Route
                      path={ROUTES.auth.basename}
                      element={ROUTES.auth.Page}
                    >
                      {/* Login */}
                      <Route element={<Meta title={ROUTES.login.title} />}>
                        <Route index={true} element={ROUTES.login.Page} />
                      </Route>

                      {/* Create Account */}
                      <Route
                        element={<Meta title={ROUTES.createAccount.title} />}
                      >
                        <Route
                          path={ROUTES.createAccount.basename}
                          element={ROUTES.createAccount.Page}
                        />
                      </Route>

                      {/* Verify Account */}
                      <Route
                        element={<Meta title={ROUTES.verifyAccount.title} />}
                      >
                        <Route
                          path={ROUTES.verifyAccount.basename}
                          element={ROUTES.verifyAccount.Page}
                        />
                      </Route>

                      {/* Reset Password */}
                      <Route
                        element={<Meta title={ROUTES.resetPassword.title} />}
                      >
                        <Route element={<AuthorizedRoute />}>
                          <Route
                            path={ROUTES.resetPassword.basename}
                            element={ROUTES.resetPassword.Page}
                          />
                        </Route>
                      </Route>
                    </Route>

                    {/* User Profile Page */}
                    <Route
                      path={ROUTES.profile.basename}
                      element={ROUTES.profile.Page}
                    >
                      {/* View Profile Page */}
                      <Route
                        path={ROUTES.viewProfile.basename}
                        element={ROUTES.viewProfile.Page}
                      />
                      {/* Edit Profile Page */}
                      <Route
                        path={ROUTES.editProfile.basename}
                        element={ROUTES.editProfile.Page}
                      />
                    </Route>

                    {/* Error */}
                    <Route
                      path={ROUTES.error.basename}
                      element={ROUTES.error.Page}
                    >
                      {/* Error 404 */}
                      <Route element={<Meta title={ROUTES.error404.title} />}>
                        <Route
                          path={ROUTES.error404.basename}
                          element={ROUTES.error404.Page}
                        />
                      </Route>

                      {/* Error 403 */}
                      <Route element={<Meta title={ROUTES.error403.title} />}>
                        <Route
                          path={ROUTES.error403.basename}
                          element={ROUTES.error403.Page}
                        />
                      </Route>
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
