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

export const ROUTES: Record<string, Route> = {
  landing: {
    path: "/landing",
    basename: "landing",
    title: `${env.APP.NAME} | Digitalize yourself with modern business cards that stand out`,
    Page: <Landing />,
  },
  auth: {
    path: "/auth",
    basename: "/auth",
    Page: <Auth />,
  },
  login: {
    // Index route to auth;
    path: "/auth",
    basename: "",
    title: `${env.APP.NAME} | Log in to your account`,
    Page: <Login />,
  },
  createAccount: {
    path: "/auth/create-account",
    basename: "create-account",
    title: `${env.APP.NAME} | Create a new account`,
    Page: <CreateAccount />,
  },
  verifyAccount: {
    path: "/auth/verify-account",
    basename: "verify-account",
    title: `${env.APP.NAME} | Verify your account ownership`,
    Page: <VerifyAccount />,
  },
  resetPassword: {
    path: "/auth/reset-password",
    basename: "reset-password",
    title: `${env.APP.NAME} | Reset your account's password`,
    Page: <ResetPassword />,
  },
  profile: {
    path: "/profile",
    basename: "profile",
    Page: <Profile />,
  },
  viewProfile: {
    path: "/profile/:username",
    basename: ":username",
    Page: <ViewProfile />,
  },
  editProfile: {
    path: "/profile/edit/:username",
    basename: "edit/:username",
    Page: <EditProfile />,
  },
  error: {
    path: "*",
    basename: "*",
    Page: <Error />,
  },
  error403: {
    path: "/403",
    basename: "403",
    title: "Authorization required, why you acting sus?",
    Page: <Error403 />,
  },
  error404: {
    path: "*",
    basename: "*",
    title: "You've come to the wrong house fool, even we don't come here.",
    Page: <Error404 />,
  },
};
