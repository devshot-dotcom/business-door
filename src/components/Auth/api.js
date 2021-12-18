import { supabase } from "../../config/Database";
import { makeToast } from "../../components/Toast/ToastWrapper";

/**
 * Log in to the cloud database. Automatically sends toast notifications related to the activity.
 *
 * @param toasts The list of toasts that's used to display the toasts.
 * @param setToasts The stateful method that sets the list of toasts.
 * @param onError The callback method to be called when the request fails.
 * @param onSuccess The callback method to be called when the request succeeds.
 */
async function login({
  email,
  password,
  toasts,
  setToasts,
  onError,
  onSuccess,
}) {
  makeToast(toasts, setToasts, {
    title: "Trying to log you in",
    state: "loading",
  });

  let { user, error } = await supabase.auth.signIn({
    email: email,
    password: password,
  });

  // In case of an error.
  if (error !== null) {
    makeToast(toasts, setToasts, {
      title: error.message,
      state: "invalid",
    });

    // Called only if not undefined.
    onError && onError();
    return;
  }

  // In case of success.
  if (user !== null) {
    makeToast(toasts, setToasts, {
      title: "Successfully logged in!",
      state: "valid",
    });

    // Called only if not undefined.
    onSuccess && onSuccess(user);
  }
}

/**
 * Create an account on the cloud database. Automatically sends toast notifications related to the activity.
 *
 * @param toasts The list of toasts that's used to display the toasts.
 * @param setToasts The stateful method that sets the list of toasts.
 * @param onError The callback method to be called when the request fails.
 * @param onSuccess The callback method to be called when the request succeeds.
 */
async function createAccount({
  email,
  password,
  toasts,
  setToasts,
  onError,
  onSuccess,
}) {
  makeToast(toasts, setToasts, {
    title: "Creating your account",
    state: "loading",
  });

  let { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  // In case of an error.
  if (error !== null) {
    makeToast(toasts, setToasts, {
      title: error.message,
      state: "invalid",
    });

    // Called only if not undefined.
    onError && onError();
    return;
  }

  // In case of success.
  if (user !== null) {
    makeToast(toasts, setToasts, {
      title: "Account created successfully!",
      subtitle: `A verification email has been sent to ${email}`,
      state: "valid",
    });

    // Called only if not undefined.
    onSuccess && onSuccess();
  }
}

/** Update a user account's email or password */
async function updateAccount({
  email,
  password,
  toasts,
  setToasts,
  onError,
  onSuccess,
}) {
  makeToast(toasts, setToasts, {
    title: "Updating your account",
    state: "loading",
  });

  /** Check whether the request was successful and notify the user. */
  function notify(user, error, toastData) {
    // If request didn't succeed.
    if (error !== null) {
      makeToast(toasts, setToasts, {
        title: error.message,
        state: "invalid",
      });

      // Callback (if exists).
      onError && onError();
      return;
    }

    // If request succeeded.
    makeToast(toasts, setToasts, toastData);

    // Callback (if exists).
    onSuccess && onSuccess(user);
  }

  // Update email.
  if (email !== null) {
    const { user, error } = await supabase.auth.update({
      email: email,
    });

    return notify(user, error, {
      title: "Email updated successfully",
      state: "valid",
    });
  }

  // Update password
  if (password !== null) {
    const { user, error } = await supabase.auth.update({
      password: password,
    });

    return notify(user, error, {
      title: "Password updated successfully",
      state: "valid",
      subtitle: "You've been logged in automatically",
    });
  }
}

export { login, createAccount, updateAccount };
