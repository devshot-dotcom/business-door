import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components";
import { duration, routes, SUPABASE, UserMetaData } from "../../config";
import { useApi, useToast } from "../../hooks";
import { AuthApi } from "../../hooks/use-api";
import styles from "./splash.module.scss";

export const Splash = () => {
  const makeToast = useToast();
  const navigate = useNavigate();
  const user = SUPABASE.auth.user();
  const api = useApi("auth") as AuthApi;
  const defaultPath = routes.landing.PATH;

  useEffect(() => {
    /**
     * Function that handles the change of an email address.
     *
     * The API mails the user a confirmation link at their new email, upon confirming which their email gets changed automatically and they're left at the index page.
     *
     * To handle this situation, this function redirects the user to their edit profile page in case they changed their email address.
     *
     * But how do we know if the user is here after confirming the email?
     * Whenever the email address is changed, an object with the new email is set in the user's session, which we call the `state` of the user. Existence of the state and the value of the state is used to determine if the user is here after confirming the email.
     * @returns {void}
     * @since 1.0.0
     * @version 1.0.0
     * @author Kashan Ahmad
     */
    function handleEmailChange(): void {
      const { email } = user!.user_metadata.payload;

      if (user!.email !== email) {
        interval = setTimeout(
          () => navigate(defaultPath),
          duration.SPLASH_SCREEN
        );
        return;
      }

      // This confirms that the user is returning after confirming the email change. How? Because the email stored in the payload is the new email.
      // If that matches the user's email, that means the server has changed the email.
      // So we clear the metadata to ensure that the required action is taken.
      api.clearMetaData({
        onSuccess: () => {
          makeToast({
            title: "Email changed successfully",
            variant: "valid",
          });

          navigate(routes.editProfile.PATH);
        },
        onFailure: () => navigate(defaultPath),
      });
    }

    let interval: NodeJS.Timeout;

    //  TODO: Step by step guide to navigate to the next page.
    //  1. Check if the user is logged in.
    //  2. If they're not logged in, navigate to the default path.
    if (!user) {
      interval = setTimeout(
        () => navigate(defaultPath),
        duration.SPLASH_SCREEN
      );
      return;
    }

    // 3. So they're logged in, check if the `user.user_metadata.state` exists, if it doesn't, there is no action to perform. Navigate to the default path.
    if (!user.user_metadata.state) {
      interval = setTimeout(
        () => navigate(defaultPath),
        duration.SPLASH_SCREEN
      );
      return;
    }

    // 4. So there is an action to be taken, let's handle that.
    switch (user.user_metadata.state as UserMetaData["state"]) {
      // case: "EMAIL_CHANGED": This happens when the user is returning right from the mailed link to confirm their new email address.
      // This ensures that the email has been changed successfully. So we inform the user of the success and navigate to their profile.
      case "EMAIL_CHANGED":
        handleEmailChange();
        break;
    }

    return () => clearTimeout(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.splash}>
      <div>
        <Logo size="large" />
        <p className="text-paragraph">Loading...</p>
      </div>
    </div>
  );
};
