import React from "react";
import { supabase } from "../config/Database";
import { Navigate, Outlet } from "react-router-dom";
import { isObjectValid } from "../helpers/functions";

/** Only unauthorized users can access the child of this route. */
function UnAuthorizedRoute() {
  // If user is logged in.
  if (isObjectValid(supabase.auth.user())) {
    return <Navigate to="/home" />;
  }

  // Otherwise.
  return <Outlet />;
}

export { UnAuthorizedRoute };
