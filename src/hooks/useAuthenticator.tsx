import { ApiError, Session, User } from "@supabase/supabase-js";
import { supabase } from "../config/database";
import { isObjectValid } from "../helpers/functions";
import { BoolBacks, ToastOptions } from "../helpers/types";
import { useToast } from "./useToast";

/* Module that serves as a bridge between
the database & the Auth components.
See the tsdocs below. */

/** Database API Response. */
interface Response {
  /** The logged-in user's data, if they're logged in. */
  user?: User | null;

  /** The response-data, retrived instead of user, at times. */
  data?: User | Session | {} | null;

  /** Obvious. Null when there ain't an error. */
  error: ApiError | null;
}

/** Requirements of an API-response handler */
interface ResponseHandler {
  response: Response;
  toastOptions: ToastOptions;
  boolBacks?: BoolBacks;
}

/** Requirements for user logging and registeration. */
interface AuthOptions {
  email: string;
  password: string;
  boolBacks?: BoolBacks;
}

/**
 * Class that handles the database functionalities 
 * through a REST based api.
 *
 * Every single method that's returned i.e 
 * `login`, `createAccount`, etc, automatically 
 * requests the API & sends relevant toasts.
 *
 * - Why is `makeToast` not retrieved from `useToast` 
 * and retrived as a param?
 * Answer: Cuz hooks are allowed at the top-level 
 * of React Components. This ain't a react component, 
 * hence, hooks can't be used here.
 *
 * @since v1.0
 * @author https://devshot-dotcom.github.io/
 * @example
 * <pre><code>
 * new Authenticator({
 *    makeToast: makeToast;
      onSuccess: callback // Optional;
      onFailure: callback // Optional;
 * }).login(email, password)
 * </code></pre>
 */
class Authenticator {
  readonly makeToast: (toast: ToastOptions) => void;
  constructor(makeToast: (toast: ToastOptions) => void) {
    this.makeToast = makeToast;
  }

  private readonly handleResponse = ({
    response,
    toastOptions,
    boolBacks,
  }: ResponseHandler) => {
    // When the response is erred.
    if (response.error !== null) {
      // Inform the user.
      this.makeToast({
        variant: "invalid",
        title: response.error?.message,
      });

      // And call the failure callback.
      boolBacks?.onFailure?.();
      return;
    }

    /* A question might be "The former conditional
    returns in the truthy scenario, why use another
    conditional?" 
    Well, cuz there is either response.user OR 
    response.data, both don't co-exist, that's just
    how the current auth API works. */

    // When the response is valid.
    if (response.user !== null || response.data === {}) {
      // Inform the user.
      this.makeToast({
        variant: toastOptions.variant || "valid",
        title: toastOptions.title,
        subTitle: toastOptions.subTitle,
        icon: toastOptions.icon,
        onRemove: toastOptions.onRemove,
      });

      // And call the success callback.
      boolBacks?.onSuccess?.();
    }
  };

  private readonly handleException = (e: Error) => {
    console.error(e.message);

    this.makeToast({
      variant: "invalid",
      title: "Internal server error",
      subTitle: "An error occured on our side, please try again.",
    });
  };

  login = async ({ email, password, boolBacks }: AuthOptions) => {
    this.makeToast({
      variant: "loading",
      title: "Logging you in",
      upTime: "REMOVE_ON_PUSH",
    });

    try {
      this.handleResponse({
        response: await supabase.auth.signIn({
          email: email,
          password: password,
        }),
        toastOptions: {
          title: "Successfully logged in",
          subTitle: "Welcome to business door.",
        },
        boolBacks: boolBacks,
      });
    } catch (e: any) {
      this.handleException(e);
    }
  };

  createAccount = async ({ email, password, boolBacks }: AuthOptions) => {
    this.makeToast({
      variant: "loading",
      title: "Creating your account",
      upTime: "REMOVE_ON_PUSH",
    });

    try {
      this.handleResponse({
        response: await supabase.auth.api.signUpWithEmail(email, password, {
          redirectTo: `${window.location.origin}/auth`,
        }),
        toastOptions: {
          title: "Account created successfully",
          subTitle: `A verification link has been mailed to ${email}, please verify and log in.`,
        },
        boolBacks: boolBacks,
      });
    } catch (e: any) {
      this.handleException(e);
    }
  };

  verifyEmail = async ({
    email,
    boolBacks,
  }: {
    email: string;
    boolBacks?: BoolBacks;
  }) => {
    this.makeToast({
      variant: "loading",
      title: "Mailing you a verification link",
      upTime: "REMOVE_ON_PUSH",
    });

    try {
      this.handleResponse({
        response: await supabase.auth.api.resetPasswordForEmail(email, {
          redirectTo: `${window.location.origin}/auth/reset/renew`,
        }),
        toastOptions: {
          title: "Ready to reset!",
          subTitle: `A password reset link has been mailed to ${email}.`,
        },
        boolBacks: boolBacks,
      });
    } catch (e: any) {
      this.handleException(e);
    }
  };

  renewPassword = async ({
    password,
    boolBacks,
  }: {
    password: string;
    boolBacks?: BoolBacks;
  }) => {
    this.makeToast({
      variant: "loading",
      title: "Resetting your password",
      upTime: "REMOVE_ON_PUSH",
    });

    try {
      this.handleResponse({
        response: await supabase.auth.update({
          password: password,
        }),
        toastOptions: {
          title: "Password updated successfully",
          subTitle: "You've been logged in with the new password.",
        },
        boolBacks: boolBacks,
      });
    } catch (e: any) {
      this.handleException(e);
    }
  };

  logout = async (boolBacks?: BoolBacks) => {
    /* User isn't even logged in & asking to log out. */
    if (!isObjectValid(supabase.auth.user())) {
      boolBacks?.onFailure?.();

      this.makeToast({
        title: "You aren't even logged in",
        icon: "😐",
      });

      return;
    }

    /* User is logged so let's log him/her out. */
    this.makeToast({
      variant: "loading",
      title: "Logging you out",
      upTime: "REMOVE_ON_PUSH",
    });

    try {
      this.handleResponse({
        response: await supabase.auth.signOut(),
        toastOptions: {
          title: "Successfully logged out",
        },
        boolBacks: boolBacks,
      });
    } catch (e: any) {
      this.handleException(e);
    }
  };
}

/** A hook to grab the `Authenticator` with. */
function useAuthenticator(): Authenticator {
  return new Authenticator(useToast());
}

export { useAuthenticator };
