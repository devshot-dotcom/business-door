import { InputActions } from "../helpers/types";

/**
 * Module that tests if two passwords match and,
 * assigns the fields containing the passwords,
 * corresponding visual states.
 *
 * @param dispatchers The dispatchers that handle the password states.
 * States won't be handled in case the dispatchers:
 * - aren't provided.
 * - count more or less than the passwords.
 */
function doPasswordsMatch(
  passwords: string[],
  dispatchers?: React.Dispatch<InputActions>[]
): boolean {
  let passwordCount = passwords.length;

  // Empty list is unacceptable.
  if (passwordCount === 0)
    throw new Error("Can't match passwords from an empty list.");

  let matches = true;

  passwords.forEach((password, i) => {
    // If the next password in the list exists
    // & doesn't match the current one;
    //=> Passwords don't match.
    if (passwords[i + 1] && passwords[i + 1] !== password) matches = false;
  });

  if (dispatchers && !matches) {
    if (dispatchers.length !== passwordCount)
      throw new Error(
        "Can't dispatch password states. Dispatchers are more or less than the passwords."
      );

    // Dispatch all the inputs to be invalid.
    dispatchers.forEach((dispatch) =>
      dispatch({
        type: "invalid",
        tooltip: {
          label: "Passwords don't match 😥",
          isShownForever: true,
        },
      })
    );
  }

  return matches;
}

export { doPasswordsMatch };
