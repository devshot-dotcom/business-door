import { patterns } from "./regex";

// Functions.
/** @see https://stackoverflow.com/a/32108184/14716989 */
function isObjectValid(object) {
  return (
    object &&
    Object.keys(object).length > 0 &&
    Object.getPrototypeOf(object) === Object.prototype
  );
}

/** Retrive the access token from the window.location.hash (if it exists). */
function isAccessToken(type) {
  const hash = window.location.hash;
  return hash && hash.split("&").map((index) => index === `type=${type}`);
}

/**
 * Checks whether an email address is of the valid syntax.
 * @param {String} email The email to be tested.
 * @return {Boolean} `true` if the email is valid and `false` otherwise.
 */
function isEmailValid(email) {
  return patterns.EMAIL.test(email);
}

/**
 * Checks whether a password matches the required syntax.
 * @param {String} password The password to be tested.
 * @return {Boolean} `true` if the password is valid and `false` otherwise.
 */
function isPasswordValid(password) {
  return patterns.PASSWORD.test(password);
}

export { isObjectValid, isAccessToken, isEmailValid, isPasswordValid };
