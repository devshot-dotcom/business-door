import { supabase } from "../config/database";
import { Navigate, Outlet } from "react-router-dom";
import { isObjectValid } from "../helpers/functions";

/** Only unauthorized users can access the child of this route. */
function UnAuthorizedRoute() {
  // If user isn't logged in.
  if (!isObjectValid(supabase.auth.user())) {
    return <Outlet />;
  }

  // Otherwise.
  return <Navigate to="/419" />;
}

export { UnAuthorizedRoute };
