import { createContext, Dispatch, SetStateAction } from "react";
import { ToastOptions } from "../../components/toast";

type ToastContextProps = {
  toasts: ToastOptions[];
  setToasts: Dispatch<SetStateAction<ToastOptions[]>>;
};

export const ToastContext = createContext<ToastContextProps>({
  toasts: [] as ToastOptions[],
  setToasts: () => {},
});
