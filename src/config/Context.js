import React from "react";

// Create the context.
export const Context = React.createContext({
  themeContext: {
    theme: "",
    setTheme: () => {},
  },
  authContext: {
    user: {},
    setUser: () => {},
  },
});
