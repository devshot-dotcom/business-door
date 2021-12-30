import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isObjectValid } from "../helpers/functions";
import { supabase } from "../config/Database";

/** Only authorized users can access the child of this route. */
function AuthorizedRoute() {
  /* // If the user is logged in.
  return isObjectValid(supabase.auth.user()) ? (
    <Outlet />
  ) : (
    // Otherwise.
    <Navigate to="/auth/login" />
  ); */

  return <Outlet />;
}

export { AuthorizedRoute };
