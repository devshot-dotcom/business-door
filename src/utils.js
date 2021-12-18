// ENV variables.
const email = process.env.REACT_APP_EMAIL;
const databaseUrl = process.env.REACT_APP_SUPABASE_URL;
const databasePublicKey = process.env.REACT_APP_SUPABASE_ANON;

// Props.
const patterns = {
  EMAIL:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  LOWERCASE: /(?=.*[a-z])/,
  UPPERCASE: /(?=.*[A-Z])/,
  NUMBERS: /(?=.*\d)/,
  NUMBERS_ONLY: /^\d+$/,
};

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

export {
  patterns,
  email,
  databaseUrl,
  databasePublicKey,
  isObjectValid,
  isAccessToken,
};
