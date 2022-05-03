export const PATTERNS = {
  EMAIL:
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
  LOWERCASE: /(?=.*[a-z])/,
  UPPERCASE: /(?=.*[A-Z])/,
  NUMBERS: /(?=.*\d)/,
  NUMBERS_ONLY: /^\d+$/,
};
