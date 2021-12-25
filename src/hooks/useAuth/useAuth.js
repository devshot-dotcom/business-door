import { useToast } from "../hooks";
import login from "./_login";
import create from "./_create";
import reset from "./_reset";
import renew from "./_renew";

/**
 * @param {String} action The auth action to be performed.
 * @returns {Function} The auth function based on the desired action.
 */
function useAuth(action) {
  const makeToast = useToast();

  // Match the action using object literals.
  const method = {
    login: (data) => login(data, makeToast),
    create: (data) => create(data, makeToast),
    reset: (data) => reset(data, makeToast),
    renew: (data) => renew(data, makeToast),
  }[action];

  // Return the function in case an action was found.
  if (method) return method;

  // In case no method was found.
  throw new Error(`No suitable action found for '${action}'`);
}

export { useAuth };
