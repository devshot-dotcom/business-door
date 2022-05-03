import { useState } from "react";
import { useApi, useToast } from ".";
import { SUPABASE, getAppMetaData, routes, clearAppMetaData } from "../config";

/**
 * Hook to get the app meta data.
 */
export function useMetaData() {
  const api = useApi("profile");
  const makeToast = useToast();
  const [path, setPath] = useState(routes.landing.PATH);

  /**
   * Perform the action stated in the app meta data.
   * And return the path to navigate to based on the action.
   * @returns {string} The path to navigate to.
   */
  function getPathForMetaDataAction(): string {
    const user = SUPABASE.auth.user();
    const appMetaData = getAppMetaData();

    // If the app meta data is not set, return the default path.
    if (!appMetaData) return path;

    // If the action is EMAIL_CHANGED,
    // - Check if the meta data has a new email.
    // - If it does, check if the new email matches the user's email.
    // - If it doesn't, return the default path.
    // If the emails match, that means the server has already confirmed the email change.
    // So, clear the app meta data, make a confirmation toast, and return the path to the edit profile page.
    if (appMetaData.action === "EMAIL_CHANGED") {
      if (!user?.email || !appMetaData.payload) return path;

      // This confirms that the user is returning after confirming the email change. How? Because the email stored in the payload is the new email. If that matches the user's email, that means the server has changed the email.
      if (user.email === appMetaData.payload.email) {
        clearAppMetaData();

        makeToast({
          title: "Email changed successfully",
          variant: "valid",
        });

        return routes.editProfile.PATH;
      }
    }

    // If the action is ACCOUNT_CREATED,
    // Check if the user is logged in, this is how the API works:
    // - The user isn't logged in once they create an account.
    // - The user is logged in automatically after they confirm their email.
    // So we are going to check if the action is ACCOUNT_CREATED  and the user is logged in. Then we will request the user's profile which will indicate two possibilities.
    // 1. The user has logged in for the first time and we have to create a profile.
    // 2. The user is returning and their profile is already set.
    // In case of the first possibility, we'll create the user's profile and take them to their profile page.
    // In case of the second possibility, we'll do nothing.
    if (appMetaData.action === "ACCOUNT_CREATED") {
      if (!user) return path;
    }

    return path;
  }

  return { getPathForMetaDataAction };
}
