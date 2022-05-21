import { ThemeBackground } from "../config/theme/theme-types";
import { PATTERNS } from "./regex";

// Functions.
/** @see https://stackoverflow.com/a/32108184/14716989 */
function isObjectValid(object: any): boolean {
  return (
    object &&
    Object.keys(object).length > 0 &&
    Object.getPrototypeOf(object) === Object.prototype
  );
}

/**
 * Function that checks if an array isn't null or undefined or empty.
 * @param {any[]} arr The array to be tested.
 * @returns {boolean}
 * @version 1.0.0
 */
const isArrayValid = (arr?: any[] | null): boolean =>
  arr !== undefined &&
  arr !== null &&
  arr.constructor === Array &&
  arr.length > 0;

/**
 * Checks if a string is considered valid or not.
 *
 * Tests perfomed:
 * - Checks if the string is not undefined or null.
 * - Checks if the string contains atleast one character.
 *
 * @param {string} str The string to be tested.
 * @returns {boolean}
 *
 * @author kashan-ahmad
 * @version 1.0.0
 */
const isStringValid = (str?: string): boolean =>
  str !== undefined &&
  str !== null &&
  typeof str === "string" &&
  str.length > 0;

/** Retrive the access token from window.location.hash (if it exists). */
function isAccessToken(tokenName: string) {
  const hash = window.location.hash;
  return hash && hash.split("&").map((index) => index === `type=${tokenName}`);
}

function isEmailValid(email: string): boolean {
  return PATTERNS.EMAIL.test(email);
}

function isPasswordValid(password: string): boolean {
  return PATTERNS.PASSWORD.test(password);
}

/** @see https://stackoverflow.com/a/9436948/14716989 */
function isString(value: any): boolean {
  return typeof value === "string" || value instanceof String;
}

/**
 * Check whether an array contains an empty value or not.
 * @param arr The array to be tested.
 * @returns {boolean}
 */
function hasEmptyIndex(arr?: any[]): boolean {
  if (!arr) return false;

  let isEmpty = false;

  arr.forEach((value) => {
    if (!value) {
      isEmpty = true;
      return;
    }
  });

  return isEmpty;
}

const getRandomIndex = (arr: any[]): number =>
  Math.floor(Math.random() * arr.length);

/**
 * Get a random color from the list of colors.
 * @returns {string} The random color.
 */
function getRandomBackground(): ThemeBackground {
  const backgrounds = [
    "bg-brand",
    "bg-secondary",
    "bg-tertiary",
    "bg-link",
    "bg-valid",
    "bg-invalid",
  ];

  return backgrounds[getRandomIndex(backgrounds)] as ThemeBackground;
}

export {
  isObjectValid,
  isArrayValid,
  isAccessToken,
  isEmailValid,
  isPasswordValid,
  isString,
  hasEmptyIndex,
  isStringValid,
  getRandomIndex,
  getRandomBackground,
};
