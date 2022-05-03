import { patterns } from "./regex";

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

export {
  isObjectValid,
  isAccessToken,
  isEmailValid,
  isPasswordValid,
  isString,
};
