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

export { isObjectValid, isAccessToken };
