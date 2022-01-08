import React from "react";
import { defaultTheme } from "../theme";

/**
 * There were some issues with the `setTheme` prop,
 * follow the link below in case you see them again.
 * @see https://stackoverflow.com/a/54588791/14716989 */
interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: defaultTheme,
  setTheme: () => {},
});
