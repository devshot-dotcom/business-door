import { supabase } from "../../config/database";

export default async function login(data, makeToast) {
  makeToast({ variant: "loading", title: "Trying to log you in" });

  try {
    const { error } = await supabase.auth.signIn({
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
      title: "Successfully logged in",
      subtitle: "Redirecting to homepage instantly",
    });
    data.onSuccess && data.onSuccess();
  } catch (e) {
    console.error(e);
  }
}
