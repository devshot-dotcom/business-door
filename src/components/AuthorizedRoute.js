import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isObjectValid } from "../helpers/functions";
import { supabase } from "../config/database";

function AuthorizedRoute() {
  // TODO: Invert the condition.
  return !isObjectValid(supabase.auth.user()) ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" />
  );
}

export default AuthorizedRoute;
