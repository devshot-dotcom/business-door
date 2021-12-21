import React from "react";

export const ThemeContext = React.createContext({
  theme: "",
  setTheme: () => {},
});

export const ToastContext = React.createContext({
  toasts: [],
  setToasts: () => {},
});
