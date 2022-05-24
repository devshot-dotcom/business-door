import { Navigate, Outlet } from "react-router-dom";
import { isObjectValid } from "../helpers/functions";
import { routes, SUPABASE } from "../config";
import { useToast } from "../hooks";

/** Only authorized users can access the child of this route. */
export const AuthorizedRoute = () => {
  const makeToast = useToast();
  const user = SUPABASE.auth.user();

  // If the user is logged in.
  if (isObjectValid(user)) {
    return <Outlet context={{ userId: user?.id }} />;
  }

  // Otherwise.
  makeToast({
    title: "Please log in to continue!",
    variant: "invalid",
  });
  return <Navigate to={routes.login.PATH} />;
};
