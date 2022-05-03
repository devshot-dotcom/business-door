import { ThemeColors } from "..";

export type UserLevelCode = 1 | 2 | 3 | 4;

export type UserLevel = {
  /**
   * The numerical level of the user.
   *
   * @type {UserLevelCode}
   */
  CODE: UserLevelCode;

  /**
   * The name of the user's level.
   *
   * @type {string}
   */
  LABEL: string;

  /**
   * The color of the user's level.
   *
   * @type {ThemeColors}
   */
  COLOR: ThemeColors;
};

export type UserMetaData = {
  /**
   * The state of the user's account.
   *
   * @type {string}
   */
  state: "EMAIL_CHANGED";

  /**
   * The data to be used by the state.
   *
   * @type {Object}
   */
  payload?: { [key: string]: any };
};
