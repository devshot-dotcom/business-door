import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isObjectValid } from "../helpers/functions";
import { supabase } from "../config/Database";

/** Only authorized users can access the child of this route. */
function AuthorizedRoute() {
  // If the user is logged in.
  if (isObjectValid(supabase.auth.user())) {
    return <Outlet />;
  }

  // Otherwise.
  return <Navigate to="/auth" />;
}

export { AuthorizedRoute };
