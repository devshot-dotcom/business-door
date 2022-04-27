import { useToast } from ".";
import {
  SUPABASE,
  getUserMetaData,
  routes,
  clearUserMetaData,
} from "../config";

/**
 * Hook to get the user meta data.
 */
export function useMetaData() {
  const makeToast = useToast();

  /**
   * Perform the action stated in the user meta data.
   * And return the path to navigate to based on the action.
   * @returns {string} The path to navigate to.
   */
  function getPathForUserAction(): string {
    const user = SUPABASE.auth.user();
    const userMetaData = getUserMetaData();
    const defaultPath = routes.landing.PATH;

    // If the user meta data is not set, return the default path.
    if (!userMetaData) return defaultPath;

    // If the action is EMAIL_CHANGED,
    // - Check if the meta data has a new email.
    // - If it does, check if the new email matches the user's email.
    // - If it doesn't, return the default path.
    // If the emails match, that means the server has already confirmed the email change.
    // So, clear the user meta data, make a confirmation toast, and return the path to the edit profile page.
    if (userMetaData.action === "EMAIL_CHANGED") {
      if (!user?.email || !userMetaData.payload) return defaultPath;

      // This confirms that the user is returning after confirming the email change. How? Because the email stored in the payload is the new email. If that matches the user's email, that means the server has changed the email.
      if (user.email === userMetaData.payload.email) {
        clearUserMetaData();

        makeToast({
          title: "Email changed successfully",
          variant: "valid",
        });

        return routes.editProfile.PATH;
      }
    }

    return defaultPath;
  }

  return { getPathForUserAction };
}
