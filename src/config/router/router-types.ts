export type Route = {
  PATH: string;
  BASENAME: string;
  TITLE?: string;
  Page: (props?: any) => JSX.Element;
};

export type PageName =
  | "landing"
  | "auth"
  | "login"
  | "createAccount"
  | "verifyAccount"
  | "resetPassword"
  | "profile"
  | "viewProfile"
  | "editProfile"
  | "cardTemplates"
  | "cardNew"
  | "cardEdit"
  | "cardPrinter"
  | "cardPrinterOutput"
  | "cards"
  | "settings"
  | "error"
  | "error400"
  | "error403"
  | "error404";
