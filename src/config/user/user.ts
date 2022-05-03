import { UserLevel } from "./user-types";

export const userLevels: Record<string, UserLevel> = {
  levelOne: {
    CODE: 1,
    LABEL: "Beginner",
    COLOR: "link",
  },
  levelTwo: {
    CODE: 2,
    LABEL: "Intern",
    COLOR: "valid",
  },
  levelThree: {
    CODE: 3,
    LABEL: "Businessman",
    COLOR: "invalid",
  },
  levelFour: {
    CODE: 4,
    LABEL: "Millionaire",
    COLOR: "brand",
  },
};

/**
 * Get the properties of a user level from a number.
 * @param levelCode The number to match to the levels.
 * @returns {UserLevel | null}
 */
export function getPropsOfLevel(levelCode?: number): UserLevel | null {
  if (!levelCode) return null;

  let userLevel: UserLevel | null = null;

  Object.values(userLevels).forEach((level) => {
    if (levelCode === level.CODE) userLevel = level;
  });

  return userLevel;
}

/**
 * Function that extracts the route to the user's profile page from their `id`.
 *
 * @param id The user's id.
 * @returns {string} The route to the user's profile page.
 */
export function getProfileRoute(id: string): string {
  return id.split("-")[0];
}
