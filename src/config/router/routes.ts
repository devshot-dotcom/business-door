import { Route } from ".";
import { env } from "..";
import {
  Auth,
  CreateAccount,
  Error403,
  Error404,
  Login,
  Profile,
  ViewProfile,
  ResetPassword,
  VerifyAccount,
  EditProfile,
  CardTemplates,
  CardNew,
  Cards,
  CardEdit,
  CardPrinter,
  CardPrinterOutput,
} from "../../pages";
import { Error, Error400 } from "../../pages/error";
import Landing from "../../pages/landing";

export const routes: Record<string, Route> = {
  landing: {
    PATH: "/landing",
    BASENAME: "landing",
    TITLE: `${env.app.NAME} | Digitalize yourself with modern business cards that stand out`,
    Page: Landing,
  },
  auth: {
    PATH: "/auth",
    BASENAME: "/auth",
    Page: Auth,
  },
  login: {
    // Index route to auth;
    PATH: "/auth",
    BASENAME: "",
    TITLE: `${env.app.NAME} | Log in to your account`,
    Page: Login,
  },
  createAccount: {
    PATH: "/auth/create-account",
    BASENAME: "create-account",
    TITLE: `${env.app.NAME} | Create a new account`,
    Page: CreateAccount,
  },
  verifyAccount: {
    PATH: "/auth/verify-account",
    BASENAME: "verify-account",
    TITLE: `${env.app.NAME} | Verify your account ownership`,
    Page: VerifyAccount,
  },
  resetPassword: {
    PATH: "/auth/reset-password",
    BASENAME: "reset-password",
    TITLE: `${env.app.NAME} | Reset your account's password`,
    Page: ResetPassword,
  },
  profile: {
    PATH: "/profile",
    BASENAME: "profile",
    Page: Profile,
  },
  viewProfile: {
    PATH: "/profile/:route",
    BASENAME: ":route",
    Page: ViewProfile,
  },
  editProfile: {
    PATH: "/profile/edit",
    BASENAME: "edit",
    Page: EditProfile,
  },
  cardTemplates: {
    PATH: "/cards/templates",
    BASENAME: "templates",
    Page: CardTemplates,
  },
  cardNew: {
    PATH: "/cards/new",
    BASENAME: "new",
    Page: CardNew,
  },
  cardEdit: {
    PATH: "/cards/edit",
    BASENAME: "edit",
    Page: CardEdit,
  },
  cardPrinter: {
    PATH: "/cards/printer",
    BASENAME: "printer",
    Page: CardPrinter,
  },
  cardPrinterOutput: {
    PATH: "/cards/printer/output",
    BASENAME: "output",
    Page: CardPrinterOutput,
  },
  cards: {
    PATH: "/cards",
    BASENAME: "cards",
    Page: Cards,
  },
  error: {
    PATH: "*",
    BASENAME: "*",
    Page: Error,
  },
  error403: {
    PATH: "/403",
    BASENAME: "403",
    TITLE: "Authorization required, why you acting sus?",
    Page: Error403,
  },
  error404: {
    PATH: "*",
    BASENAME: "*",
    TITLE: "You've come to the wrong house fool, even we don't come here.",
    Page: Error404,
  },
  error400: {
    PATH: "/400",
    BASENAME: "400",
    TITLE: "That's what you get when you mess with the peaky blinders!",
    Page: Error400,
  },
};
