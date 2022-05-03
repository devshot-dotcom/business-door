import { ReactElement } from "react";

export type Route = {
  path: string;
  basename: string;
  title?: string;
  Page: ReactElement;
};
