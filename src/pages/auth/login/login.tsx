import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useInput, useAuthenticator, useApi, useToast } from "../../../hooks";
import { getProfileRoute, routes } from "../../../config";
import { ProfileApi } from "../../../hooks/use-api";
import { User } from "@supabase/supabase-js";
import LoginView from "./login-view";
import { TOAST_UPTIME } from "../../../components/toast";
import { ProfileData } from "../../profile";

function Login() {
  const [emailState, dispatchEmail] = useInput();
  const [pswdState, dispatchPswd] = useInput();

  const makeToast = useToast();
  const navigate = useNavigate();
  const authenticator = useAuthenticator();
  const profiles = useApi("profile") as ProfileApi;

  /**
   * So the user has logged in successfully,
   * we need to see if they're logging in for
   * the first time or not.
   *
   * If they are, we need to create a profile for them.
   *
   * To check this, we fetch their profile.
   *
   * If a 404 error is returned, we know that
   * the profile simply doesn't exist.
   *
   * If the profile is returned, we don't do anything,
   * and simply take the user to the page they came from.
   *
   * This is a bit of a hack, but it works.
   */
  function onSuccess(user: User) {
    profiles.fetchById(user.id, {
      onSuccess: () => navigate(-1),
      onFailure: (error) => {
        if (error?.code && error?.code === 404) {
          // So the user doesn't have a profile,
          // yet they're logged in.
          //
          // That means that either it's the first time login,
          // or there was an error creating the profile.
          //
          // Otherwise there'd be a profile already.
          // Now, we need to create a profile for them.
          makeToast({
            title: "Logging in for the first time?",
            subTitle:
              "Let's create a profile for you. This will only be visible to you, and will be used to store your data.",
            variant: "loading",
            upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
          });

          profiles.create(user);
        }
      },
    });
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    authenticator.login({
      email: emailState.value,
      password: pswdState.value,
      boolBacks: {
        onSuccess: onSuccess,
      },
    });
  }

  return (
    <LoginView
      onSubmit={onSubmit}
      emailState={emailState}
      dispatchEmail={dispatchEmail}
      pswdState={pswdState}
      dispatchPswd={dispatchPswd}
    />
  );
}

export default Login;
