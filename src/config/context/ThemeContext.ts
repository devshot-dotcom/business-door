import { createContext } from "react";
import { themeNames } from "../theme";

/**
 * There were some issues with the `setTheme` prop,
 * follow the link below in case you see them again.
 * @see https://stackoverflow.com/a/54588791/14716989 */
interface ThemeContextProps {
  theme: themeNames;
  setTheme: (theme: themeNames) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});
