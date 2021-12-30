import { supabase } from "../config/Database";
import { strings } from "../helpers/strings";

/**
 * Class-like entity that handles the database functionalities through a REST based api. Read the whole jsDoc to understand the what's, why's and how's.
 *
 * Every single method that's returned i.e `login`, `createAccount`, etc, automatically requests the API & sends relevant toasts.
 *
 * - Why is `makeToast` not retrieved from `useToast` and retrived as a param?
 * Answer: Cuz hooks are allowed at the top-level of React Components. This ain't a react component, hence, hooks can't be used here.
 *
 * @since v1.0
 * @author https://devshot-dotcom.github.io/
 *
 * @param {Function} makeToast The function retrived from `useToast` hook that provides the sandwich with toasts.
 * @param {Object} data The object containing the data that needs to be sent to the database.
 * @param {Function} onSuccess The callback for a successful request.
 * @param {Function} onFailure The callback for a failed request.
 *
 * @returns {Object} An object containing the supported auth functionalities.
 * @example
 * <pre><code>
 * Authenticator({
 *    data: data,
 *    onSuccess: () => {// Do something},
 *    onFailure: null (// Omit if you don't need a callback)
 * }).login()
 * </code></pre>
 */
function Authenticator({ makeToast, data, onSuccess, onFailure }) {
  /**
   * @param toastOptions An object that contains the metadeta of a toast.
   * Refer to `Toast` data class (located in useToast.js) for complete information.
   */
  function handleResponse({ user, error }, toastOptions) {
    if (error !== null) {
      makeToast({
        variant: "invalid",
        title: error.message,
      });
      onFailure && onFailure();
      return;
    }

    if (user !== null) {
      makeToast({
        variant: toastOptions.variant || "valid",
        title: toastOptions.title,
        subtitle: toastOptions.subtitle,
        icon: toastOptions.icon,
        onRemove: toastOptions.onRemove,
      });
      onSuccess && onSuccess(user);
    }
  }

  function handleException(e) {
    console.error(e);
    makeToast({
      variant: "invalid",
      title: "Internal server error",
      subtitle: "An error occured on our side, please try again.",
    });
  }

  const login = async () => {
    makeToast({
      variant: "loading",
      title: "Trying to log you in",
      upTime: strings.REMOVE_ON_PUSH,
    });

    try {
      handleResponse(
        await supabase.auth.signIn({
          email: data.email,
          password: data.password,
        }),
        {
          title: "Successfully logged in",
          subtitle: "Welcome to business door, redirecting to homepage.",
        }
      );
    } catch (e) {
      handleException(e);
    }
  };

  const createAccount = async () => {
    makeToast({
      variant: "loading",
      title: "Creating your account",
      upTime: strings.REMOVE_ON_PUSH,
    });

    try {
      handleResponse(
        await supabase.auth.api.signUpWithEmail(data.email, data.password, {
          redirectTo: `${window.location.origin}/auth`,
        }),
        {
          title: "Account created successfully",
          subtitle: `A verification link has been mailed to ${data.email}, please verify and log in.`,
        }
      );
    } catch (e) {
      handleException(e);
    }
  };

  const verifyEmail = async () => {
    makeToast({
      variant: "loading",
      title: "Mailing you a verification link",
      upTime: strings.REMOVE_ON_PUSH,
    });

    try {
      handleResponse(
        await supabase.auth.api.resetPasswordForEmail(data.email, {
          redirectTo: `${window.location.origin}/auth/reset/renew`,
        }),
        {
          title: "Ready to reset!",
          subtitle: `A password reset link has been mailed to ${data.email}.`,
        }
      );
    } catch (e) {
      handleException(e);
    }
  };

  const renewPassword = async () => {
    makeToast({
      variant: "loading",
      title: "Resetting your password",
      upTime: strings.REMOVE_ON_PUSH,
    });

    try {
      handleResponse(
        await supabase.auth.update({
          password: data.password,
        }),
        {
          title: "Password updated successfully",
          subtitle:
            "You've been logged in with the new password, redirecting to homepage.",
        }
      );
    } catch (e) {
      handleException(e);
    }
  };

  return { login, createAccount, verifyEmail, renewPassword };
}

export { Authenticator };
