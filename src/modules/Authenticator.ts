/* Module that serves as a bridge between the database & the Auth components. See the tsdocs for the class Authenticator below. */

import { supabase } from "../config/database";
import { ToastDataset } from "../helpers/types";

interface Response {
  user?: Object | null;
  data?: Object | null;
  error?: null | {
    message: string;
  };
}

interface AuthenticatorData {
  email?: string;
  password?: string;
}

/**
 * @since v1.0
 * @author https://devshot-dotcom.github.io/
 *
 * @param {Function} makeToast The function retrived from `useToast` hook that provides the sandwich with toasts.
 * @param {Object} data The object containing the data that needs to be sent to the database.
 * @param {Function} onSuccess The callback for a successful request.
 * @param {Function} onFailure The callback for a failed request.
 *
 * @returns {Object} An object containing the supported auth functionalities.
 */
interface AuthenticatorProps {
  makeToast?: (toast: ToastDataset) => void;
  data?: AuthenticatorData;
  onSuccess?: () => void;
  onFailure?: () => void;
}

/**
 * Class-like entity that handles the database functionalities through a REST based api. Read the whole jsDoc to understand the what's, why's and how's.
 *
 * Every single method that's returned i.e `login`, `createAccount`, etc, automatically requests the API & sends relevant toasts.
 *
 * - Why is `makeToast` not retrieved from `useToast` and retrived as a param?
 * Answer: Cuz hooks are allowed at the top-level of React Components. This ain't a react component, hence, hooks can't be used here.
 *
 * @since v1.0
 * @author https://devshot-dotcom.github.io/
 * @example
 * <pre><code>
 * new Authenticator({
 *    makeToast: makeToast;
 *    data: data;
      onSuccess: callback // Optional;
      onFailure: callback // Optional;
 * }).login()
 * </code></pre>
 */
class Authenticator implements AuthenticatorProps {
  readonly makeToast?: (toast: ToastDataset) => void;
  readonly data: AuthenticatorData | undefined;
  readonly onSuccess: (() => void) | undefined;
  readonly onFailure: (() => void) | undefined;

  constructor({ makeToast, data, onSuccess, onFailure }: AuthenticatorProps) {
    this.makeToast = makeToast;
    this.data = data;
    this.onSuccess = onSuccess;
    this.onFailure = onFailure;
  }

  private handleResponse(
    { user, error }: Response,
    toastDataset: ToastDataset
  ) {
    if (error !== null) {
      if (!this.makeToast) {
        alert(`❌ ${error?.message}`);
      } else {
        this.makeToast({
          variant: "invalid",
          title: error?.message,
        });
      }

      this.onFailure && this.onFailure();
      return;
    }

    if (user !== null) {
      if (!this.makeToast) {
        alert(`✅ ${toastDataset.title} - ${toastDataset.subTitle}`);
      } else {
        this.makeToast({
          variant: toastDataset.variant || "valid",
          title: toastDataset.title,
          subTitle: toastDataset.subTitle,
          icon: toastDataset.icon,
          onRemove: toastDataset.onRemove,
        });
      }

      this.onSuccess && this.onSuccess();
    }
  }

  private handleException(e: Error) {
    console.error(e.message);

    const title = "Internal server error";
    const subTitle = "An error occured on our side, please try again.";

    if (!this.makeToast) {
      alert(`❌ ${title} - ${subTitle}`);
      return;
    }

    this.makeToast({
      variant: "invalid",
      title: title,
      subTitle: subTitle,
    });
  }

  login = async () => {
    if (!this.makeToast) {
      alert("🚀 Trying to log you in");
    } else {
      this.makeToast({
        variant: "loading",
        title: "Trying to log you in",
        upTime: "REMOVE_ON_PUSH",
      });
    }

    try {
      this.handleResponse(
        await supabase.auth.signIn({
          email: this.data?.email!,
          password: this.data?.password!,
        }),
        {
          title: "Successfully logged in",
          subTitle: "Welcome to business door, redirecting to homepage.",
        }
      );
    } catch (e: any) {
      this.handleException(e);
    }
  };

  createAccount = async () => {
    if (!this.makeToast) {
      alert("🚀 Creating your account");
    } else {
      this.makeToast({
        variant: "loading",
        title: "Creating your account",
        upTime: "REMOVE_ON_PUSH",
      });
    }

    try {
      this.handleResponse(
        await supabase.auth.api.signUpWithEmail(
          this.data?.email!,
          this.data?.password!,
          {
            redirectTo: `${window.location.origin}/auth`,
          }
        ),
        {
          title: "Account created successfully",
          subTitle: `A verification link has been mailed to ${this.data
            ?.email!}, please verify and log in.`,
        }
      );
    } catch (e: any) {
      this.handleException(e);
    }
  };

  verifyEmail = async () => {
    if (!this.makeToast) {
      alert("🚀 Mailing you a verification link");
    } else {
      this.makeToast({
        variant: "loading",
        title: "Mailing you a verification link",
        upTime: "REMOVE_ON_PUSH",
      });
    }

    try {
      this.handleResponse(
        await supabase.auth.api.resetPasswordForEmail(this.data?.email!, {
          redirectTo: `${window.location.origin}/auth/reset/renew`,
        }),
        {
          title: "Ready to reset!",
          subTitle: `A password reset link has been mailed to ${this.data
            ?.email!}.`,
        }
      );
    } catch (e: any) {
      this.handleException(e);
    }
  };

  renewPassword = async () => {
    if (!this.makeToast) {
      alert("🚀 Resetting your password");
    } else {
      this.makeToast({
        variant: "loading",
        title: "Resetting your password",
        upTime: "REMOVE_ON_PUSH",
      });
    }

    try {
      this.handleResponse(
        await supabase.auth.update({
          password: this.data?.password!,
        }),
        {
          title: "Password updated successfully",
          subTitle: "You've been logged in with the new password.",
        }
      );
    } catch (e: any) {
      this.handleException(e);
    }
  };

  /**
   * Logs out a user.
   * informs the status of the request using alerts
   * in case the `makeToast` function is absent.
   */
  logout = async () => {
    if (!this.makeToast) {
      alert("🚀 Logging you out");
    } else {
      this.makeToast({
        variant: "loading",
        title: "Logging you out",
        upTime: "REMOVE_ON_PUSH",
      });
    }

    try {
      this.handleResponse(await supabase.auth.signOut(), {
        title: "Successfully logged out",
      });
    } catch (e: any) {
      this.handleException(e);
    }
  };
}

export { Authenticator };
