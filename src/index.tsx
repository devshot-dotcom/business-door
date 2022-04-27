import ReactDOM from "react-dom";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { routes, ThemeContext, ToastContext, DEFAULT_THEME } from "./config";
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
                    <Route element={<Meta title={routes.landing.TITLE} />}>
                      <Route
                        path={routes.landing.BASENAME}
                        element={<routes.landing.Page />}
                      />
                    </Route>

                    {/* Auth Page */}
                    <Route
                      path={routes.auth.BASENAME}
                      element={<routes.auth.Page />}
                    >
                      {/* Login */}
                      <Route element={<Meta title={routes.login.TITLE} />}>
                        <Route index={true} element={<routes.login.Page />} />
                      </Route>

                      {/* Create Account */}
                      <Route
                        element={<Meta title={routes.createAccount.TITLE} />}
                      >
                        <Route
                          path={routes.createAccount.BASENAME}
                          element={<routes.createAccount.Page />}
                        />
                      </Route>

                      {/* Verify Account */}
                      <Route
                        element={<Meta title={routes.verifyAccount.TITLE} />}
                      >
                        <Route
                          path={routes.verifyAccount.BASENAME}
                          element={<routes.verifyAccount.Page />}
                        />
                      </Route>

                      {/* Reset Password */}
                      <Route
                        element={<Meta title={routes.resetPassword.TITLE} />}
                      >
                        <Route element={<AuthorizedRoute />}>
                          <Route
                            path={routes.resetPassword.BASENAME}
                            element={<routes.resetPassword.Page />}
                          />
                        </Route>
                      </Route>
                    </Route>

                    {/* User Profile Page */}
                    <Route
                      path={routes.profile.BASENAME}
                      element={<routes.profile.Page />}
                    >
                      {/* View Profile Page */}
                      <Route
                        path={routes.viewProfile.BASENAME}
                        element={<routes.viewProfile.Page />}
                      />
                      {/* Edit Profile Page */}
                      <Route
                        path={routes.editProfile.BASENAME}
                        element={<routes.editProfile.Page />}
                      />
                    </Route>

                    {/* Error */}
                    <Route
                      path={routes.error.BASENAME}
                      element={<routes.error.Page />}
                    >
                      {/* Error 404 */}
                      <Route element={<Meta title={routes.error404.TITLE} />}>
                        <Route
                          path={routes.error404.BASENAME}
                          element={<routes.error404.Page />}
                        />
                      </Route>

                      {/* Error 403 */}
                      <Route element={<Meta title={routes.error403.TITLE} />}>
                        <Route
                          path={routes.error403.BASENAME}
                          element={<routes.error403.Page />}
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
