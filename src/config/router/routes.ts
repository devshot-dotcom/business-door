import { Route } from ".";
import { env } from "../env";
import {
  Auth,
  CreateAccount,
  Error403,
  Error404,
  Landing,
  Login,
  Profile,
  ViewProfile,
  ResetPassword,
  VerifyAccount,
  EditProfile,
} from "../../pages";
import { Error } from "../../pages/error";

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
    PATH: "/profile/:username",
    BASENAME: ":username",
    Page: ViewProfile,
  },
  editProfile: {
    PATH: "/profile/edit",
    BASENAME: "edit",
    Page: EditProfile,
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
};
