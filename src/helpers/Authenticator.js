import { supabase } from "../config/Database";

/**
 * Class-like entity that handles the database functionalities through a REST based api.
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
 *    onFailure: null (// Or omit if you don't need a callback)
 * }).login()
 * </code></pre>
 */
function Authenticator({ makeToast, data, onSuccess, onFailure }) {
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
      upTime: "show-till-push",
    });

    try {
      const response = await supabase.auth.signIn({
        email: data.email,
        password: data.password,
      });

      handleResponse(response, {
        title: "Successfully logged in",
        subtitle: "Immediately redirecting to homepage.",
      });
    } catch (e) {
      handleException(e);
    }
  };

  const createAccount = async () => {
    makeToast({ variant: "loading", title: "Creating your account" });

    try {
      const response = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      handleResponse(response, {
        title: "Account created successfully",
        subtitle: `A verification link has been mailed to ${data.email}, please verify and log in.`,
      });
    } catch (e) {
      handleException(e);
    }
  };

  const verifyEmail = async () => {
    makeToast({ variant: "loading", title: "Mailing you a verification link" });

    try {
      const response = await supabase.auth.api.resetPasswordForEmail(
        data.email
      );

      handleResponse(response, {
        title: "Reset link sent successfully",
        subtitle: `Follow the reset link sent to ${data.email}.`,
      });
    } catch (e) {
      handleException(e);
    }
  };

  const renewPassword = async () => {
    makeToast({ variant: "loading", title: "Resetting your password" });

    try {
      const response = await supabase.auth.update({
        password: data.password,
      });

      handleResponse(response, {
        title: "Password updated successfully",
        subtitle: "You've been logged in with the new password, save it.",
      });
    } catch (e) {
      handleException(e);
    }
  };

  return { login, createAccount, verifyEmail, renewPassword };
}

export { Authenticator };
