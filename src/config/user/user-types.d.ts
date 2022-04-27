import { ThemeColors } from "..";

export type UserLevelCodes = 1 | 2 | 3 | 4;

export type UserLevel = {
  CODE: UserLevelCodes;
  LABEL: string;
  COLOR: ThemeColors;
};

/**
 * A type that represents the action that needs
 * to be performed based on the user's activity.
 */
export type UserAction = "EMAIL_CHANGED";

/**
 * An type representing the user's metadata.
 * Current, it contains just an action property.
 * The action property is a string constant that
 * defines the type of action that is to be
 * performed based on the user's activity.
 */
export type UserMeta = {
  action: UserAction;
  payload?: {
    [key: string]: any;
  };
};
