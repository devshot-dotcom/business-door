import { NavigateFunction, useNavigate } from "react-router-dom";
import { useToast } from ".";
import { ToastOptions } from "../components/toast";
import { SUPABASE } from "../config";
import { BoolBacks } from "../helpers";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { PostgrestError } from "@supabase/supabase-js";

/**
 * A general purpose API wrapper.
 * Can be extended to inherit the base hooks
 * that can be used to send toasts or navigate to other routes.
 */
class Api {
  /**
   * Function retrieved from the `useToast` hook.
   * Used to send toasts to notify API responses.
   */
  readonly makeToast: (toast: ToastOptions) => void;

  /**
   * Function retrived from the `useNavigate` hook.
   * Used to navigate to other routes. `useNavigate`
   * comes from the `react-router` dependency.
   */
  readonly navigate?: NavigateFunction;

  /**
   * @param makeToast Function retrieved from the `useToast` hook.
   * Used to send toasts to notify API responses.
   *
   * @param navigate Function retrived from the `useNavigate` hook.
   * Used to navigate to other routes. `useNavigate`
   * comes from the `react-router` dependency.
   */
  constructor(
    makeToast: (toast: ToastOptions) => void,
    navigate?: NavigateFunction
  ) {
    this.makeToast = makeToast;
    this.navigate = navigate;
  }
}

/*
async function createProfile(profileData: ProfileData) {
  const { data, error } = await SUPABASE.from("profiles").insert([profileData]);

  if (error) throw new Error(error.message);

  console.log(data);
} */

class ProfileApi extends Api {
  handleProfile(data: any, error: PostgrestError | null, boolBacks: BoolBacks) {
    // Network error, or database errors.
    if (error) {
      this.makeToast({
        subTitle: error.message,
        variant: "invalid",
      });

      boolBacks.onFailure?.(error);
      console.error(error);
      return;
    }

    // When a profile isn't found, data is empty.
    if (!data || data?.length === 0) {
      boolBacks.onFailure?.({
        message: ReasonPhrases.NOT_FOUND,
        code: StatusCodes.NOT_FOUND,
      });

      console.error(`${StatusCodes.NOT_FOUND} - ${ReasonPhrases.NOT_FOUND}`);

      // 404 - Profile not found.
      this.navigate?.("/error");
      return;
    }

    // The first index of data is our profile.
    boolBacks.onSuccess?.(data[0]);
  }

  /**
   * Method that fetches a profile from the `supabase.profiles`
   * table. Self-intuitive and self-handling in the sense that
   * it handles all errors by itself.
   *
   * @param username The username to fetch a profile with.
   * @param boolBacks The callback functions called to extend
   * response handling functionalities.
   *
   * @example
   * <pre><code>
   * fetchByUsername('john-doe', {
   *    onSuccess: data => // do something with data.
   *    onFailure: error => // do something and display error.
   * })
   * </pre></code>
   */
  async fetchByUsername(username: string, boolBacks: BoolBacks) {
    let { data, error } = await SUPABASE.from("profiles")
      .select()
      .eq("username", username);

    this.handleProfile(data, error, boolBacks);
  }

  /**
   * See docs of the above-written method. Only difference between
   * the two is that this method fetches a profile by it's `uuid`
   *
   * @param id The uuid to fetch a profile with.
   * @param boolBacks The callback functions called to extend
   * response handling functionalities.
   *
   * @example
   * <pre><code>
   * fetchById('based-business-door-123', {
   *    onSuccess: data => // do something with data.
   *    onFailure: error => // do something and display error.
   * })
   * </pre></code>
   */
  async fetchById(id: string, boolBacks: BoolBacks) {
    let { data, error } = await SUPABASE.from("profiles").select().eq("id", id);

    this.handleProfile(data, error, boolBacks);
  }
}

/**
 * Call this hook to gain access to the classes that
 * serve as a bridge between the client and the cloud API.
 *
 * @returns Object containing instances of the different
 * API classes, each containing relevant methods.
 */
export const useApi = () => {
  const makeToast = useToast();
  const navigate = useNavigate();

  return { profile: new ProfileApi(makeToast, navigate) };
};
