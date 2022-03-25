import { Navigate, Outlet } from "react-router-dom";
import { isObjectValid } from "../helpers/functions";
import { SUPABASE } from "../config";

/** Only authorized users can access the child of this route. */
export const AuthorizedRoute = () => {
  // If the user is logged in.
  if (isObjectValid(SUPABASE.auth.user())) {
    return <Outlet />;
  }

  // Otherwise.
  return <Navigate to="/403" />;
};
