import env from "./env";
import routes from "./router/routes";

// Internal modules
export { env, routes };

// External modules
export * from "./router";
export * from "./database";
export * from "./context";

// Theme.
export type {
  ThemeNames,
  ThemeColors,
  ThemeSizes,
  ThemeSizesCompact,
  ThemeSpeeds,
} from "./theme";
export { duration, DEFAULT_THEME, BREAKPOINTS } from "./theme";
// User.
export {
  userLevels,
  getPropsOfLevel,
  setAppMetaData,
  getAppMetaData,
  clearAppMetaData,
  getProfileRoute,
  getAvatarName,
} from "./user";
export type { UserLevel, UserLevelCode, UserMetaData } from "./user";
