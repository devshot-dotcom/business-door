import { supabase } from "../config/database";
import { patterns } from "./regex";
import { ToastDataset } from "./types";
import { Authenticator } from "../modules/Authenticator";

// Functions.
/** @see https://stackoverflow.com/a/32108184/14716989 */
function isObjectValid(object: any) {
  return (
    object &&
    Object.keys(object).length > 0 &&
    Object.getPrototypeOf(object) === Object.prototype
  );
}

/** Retrive the access token from window.location.hash (if it exists). */
function isAccessToken(tokenName: string) {
  const hash = window.location.hash;
  return hash && hash.split("&").map((index) => index === `type=${tokenName}`);
}

function isEmailValid(email: string): boolean {
  return patterns.EMAIL.test(email);
}

function isPasswordValid(password: string): boolean {
  return patterns.PASSWORD.test(password);
}

/** @see https://stackoverflow.com/a/9436948/14716989 */
function isString(value: any): boolean {
  return typeof value === "string" || value instanceof String;
}

/**
 * Logs out a logged in user and insults the one
 * who isn't even logged in & making the call.
 *
 * @param makeToast Alerts will be thrown instead of
 * gorgeous toasts if you don't provide it.
 */
function logout(makeToast?: (toast: ToastDataset) => void) {
  /* User isn't logged in */
  if (!isObjectValid(supabase.auth.user())) {
    if (!makeToast) {
      alert("😐 You aren't even logged in");
      return;
    }

    // Regular alerts suck in front of our toasts.
    makeToast({
      title: "You aren't even logged in",
      icon: "😐",
    });
    return;
  }

  /* User is logged in */
  new Authenticator({ makeToast: makeToast }).logout();
}

export {
  isObjectValid,
  isAccessToken,
  isEmailValid,
  isPasswordValid,
  isString,
  logout,
};
