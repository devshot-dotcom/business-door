import React from "react";
import { ToastOptions } from "../../helpers/types";

interface ToastContextProps {
  toasts: ToastOptions[];
  setToasts: React.Dispatch<React.SetStateAction<ToastOptions[]>>;
}

export const ToastContext = React.createContext<ToastContextProps>({
  toasts: [] as ToastOptions[],
  setToasts: () => {},
});
