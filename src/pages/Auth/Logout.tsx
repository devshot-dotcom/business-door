import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../config/database";
import { isObjectValid } from "../../helpers/functions";
import { useToast } from "../../hooks/useToast";
import { Authenticator } from "../../modules/Authenticator";

function Logout() {
  const makeToast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Navigate to previous page
    const onLogout = () => navigate(-1);

    /**
     * Logs out the user if they're logged in.
     */
    if (isObjectValid(supabase.auth.user())) {
      new Authenticator({
        makeToast: makeToast,
        onSuccess: onLogout,
        onFailure: onLogout,
      }).logout();
    }
  }, [makeToast, navigate]);

  if (!isObjectValid(supabase.auth.user()))
    makeToast({ title: "You're not even logged in" });

  return null;
}

export { Logout };
