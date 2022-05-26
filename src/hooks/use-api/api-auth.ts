import { ReasonPhrases } from "http-status-codes";
import { TOAST_UPTIME } from "../../components/toast";
import { routes, SUPABASE, UserMetaData } from "../../config";
import { BoolBacks } from "../../helpers";
import Api from "./api";

class AuthApi extends Api {
  /**
   * Requests the API at `supabase.auth.update()` to change the user's current email address.
   * @param email The new email address.
   * @param boolBacks The callbacks to use for the request.
   */
  async changeEmail(email: string, boolBacks: BoolBacks) {
    this.makeToast({
      title: "Verifying email address...",
      variant: "loading",
      upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
    });

    try {
      this.handleResponse({
        response: await SUPABASE.auth.update({ email: email }),
        successToast: {
          title: "A confirmation email has been sent.",
          subTitle: `Please check your email at ${email} for a confirmation link.`,
          variant: "valid",
        },
        failureToast: {
          title: "Failed to change email address.",
          subTitle: ReasonPhrases.INTERNAL_SERVER_ERROR,
          variant: "invalid",
        },
        boolBacks: {
          ...boolBacks,
          onSuccess: () =>
            // The metadata needs to be set when the email is changed.
            this.setMetaData(
              {
                state: "EMAIL_CHANGED",
                payload: { email },
              },
              boolBacks
            ),
        },
      });
    } catch (e) {
      console.error(e);
      this.handleError({ boolBacks });
    }
  }

  async createAccount(email: string, password: string, boolBacks: BoolBacks) {
    this.makeToast({
      variant: "loading",
      title: "Creating your account",
      upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
    });

    try {
      this.handleResponse({
        response: await SUPABASE.auth.api.signUpWithEmail(email, password, {
          redirectTo: `${window.location.origin}${routes.login.PATH}`,
        }),
        successToast: {
          title: "Account created successfully",
          subTitle: `A verification link has been mailed to ${email}, please verify and log in.`,
          upTime: TOAST_UPTIME.ELONGATED,
        },
        failureToast: {
          title: ReasonPhrases.INTERNAL_SERVER_ERROR,
          subTitle: "Failed to create account, please try again.",
          variant: "invalid",
        },
        boolBacks,
      });
    } catch (e: any) {
      console.error(e);
      this.handleError({ boolBacks });
    }
  }

  async clearMetaData(boolBacks: BoolBacks) {
    try {
      this.handleResponse({
        response: await SUPABASE.auth.update({
          data: {
            state: "",
            payload: {},
          },
        }),
        boolBacks,
      });
    } catch (e) {
      console.error(e);
      this.handleError({ boolBacks });
    }
  }

  async setMetaData(data: UserMetaData, boolBacks: BoolBacks) {
    try {
      this.handleResponse({
        boolBacks,
        response: await SUPABASE.auth.update({ data: data }),
      });
    } catch (e) {
      console.error(e);
      this.handleError({ boolBacks });
    }
  }

  /**
   * Log out the user.
   * @param {BoolBacks} boolBacks The callbacks to use for the request.
   * @version 1.0.0
   * @author [kashan-ahmad](https://github.com/kashan-ahmad)
   */
  async logout(boolBacks?: BoolBacks, shouldToast?: boolean) {
    shouldToast &&
      this.makeToast({
        variant: "loading",
        title: "Logging out...",
        upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
      });

    const { error } = await SUPABASE.auth.signOut();

    if (error) {
      console.error(error);

      // Inform the user.
      shouldToast &&
        this.makeToast({
          variant: "invalid",
          title: "Failed to log out",
        });

      // Report back.
      boolBacks?.onFailure?.();

      // Dismiss.
      return;
    }

    // Inform the user.
    shouldToast &&
      this.makeToast({
        variant: "valid",
        title: "Successfully Logged out",
      });

    // Report back.
    boolBacks?.onSuccess?.();
  }
}

export default AuthApi;
