import { supabase } from "../../config/database";

/**
 * Request the database API to create a user's account.
 * @param {Object} data An object containing the email & password, as well as the success and failure callbacks.
 * @param {Function} makeToast Function returned by the `useToast` hook. Used to push a toast to the sandwich.
 */
export default async function create(data, makeToast) {
  makeToast({ variant: "loading", title: "Creating your account" });

  try {
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (error !== null) {
      makeToast({
        variant: "invalid",
        title: error.message,
      });
      data.onFailure && data.onFailure();
      return;
    }

    makeToast({
      variant: "valid",
      title: "Account created successfully",
      subtitle: "Redirecting to login page in 5 seconds",
    });
    data.onSuccess && data.onSuccess();
  } catch (e) {
    makeToast({
      variant: "invalid",
      title: "An error occured on our side, please try again",
    });
    console.error(e);
  }
}
