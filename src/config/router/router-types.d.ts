export type Route = {
  PATH: string;
  BASENAME: string;
  TITLE?: string;
  Page: (props?: any) => JSX.Element | FC;
};
