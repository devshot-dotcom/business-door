import { useEffect } from "react";

// Copied from;
// https://stackoverflow.com/a/64352116
export function useTitle(title?: string) {
  useEffect(() => {
    if (!title) return;

    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  });
}
