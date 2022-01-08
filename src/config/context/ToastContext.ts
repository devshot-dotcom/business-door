import React from "react";
import { ToastDataset } from "../../helpers/types";

interface ToastContextProps {
  toasts: ToastDataset[];
  setToasts: React.Dispatch<React.SetStateAction<ToastDataset[]>>;
}

export const ToastContext = React.createContext<ToastContextProps>({
  toasts: [] as ToastDataset[],
  setToasts: () => {},
});
