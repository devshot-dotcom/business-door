import React from "react";
import { supabase } from "../config/database";
import { Navigate, Outlet } from "react-router-dom";
import { isObjectValid } from "../helpers/functions";

/** Only unauthorized users can access the child of this route. */
function UnAuthorizedRoute() {
  /* // If user is logged in.
  return isObjectValid(supabase.auth.user()) ? (
    <Navigate to="/home" replace={true} />
  ) : (
    // Otherwise.
    <Outlet />
  ); */

  return <Outlet />;
}

export { UnAuthorizedRoute };
