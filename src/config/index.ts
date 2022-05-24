import env from "./env";

// Internal modules
export { env };

// External modules
export { routes } from "./router";
export type { Route } from "./router";
export { SUPABASE } from "./database";
export { ToastContext, ThemeContext } from "./context";
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
