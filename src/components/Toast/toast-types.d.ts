import { IconSource } from "../icon";

export type ToastOptions = {
  /** Visual state of the toast. */
  variant?: "default" | "valid" | "invalid" | "loading";

  title?: string;
  subTitle?: string;
  icon?: IconSource;

  /**
   * For how long the toast will be displayed.
   */
  upTime?: number;

  /** Callback that's called when a toast is removed */
  onRemove?: () => void;
};

export type ToastProps = {
  index: number;
  toastOptions: ToastOptions;
  removeToast: (index: number) => void;
};
