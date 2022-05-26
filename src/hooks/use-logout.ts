import { SUPABASE } from "../config";
import { AuthApi, useApi } from "./use-api";
import { useToast } from "./use-toast";

/**
 * Logs out the user once it's sure that the user is logged in.
 * @returns {Function} A function that logs out the user.
 * @version 1.0.0
 * @author [kashan-ahmad](https://github.com/kashan-ahmad)
 */
function useLogout(): Function {
  const makeToast = useToast();
  const api = useApi("auth") as AuthApi;

  return function () {
    // If the user isn't even logged in.
    if (!SUPABASE.auth.user()) {
      makeToast({
        icon: "😅",
        title: "Already logged out",
      });

      // Dismiss.
      return;
    }

    // Otherwise.
    api.logout({}, true);
  };
}

export default useLogout;
