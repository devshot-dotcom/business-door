import { PostgrestError } from "@supabase/supabase-js";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { SUPABASE } from "../../config";
import { BoolBacks } from "../../helpers";
import { ProfileData } from "../../pages/types";
import Api from "./api";

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
  async fetchByRoute(route: string, boolBacks: BoolBacks) {
    let { data, error } = await SUPABASE.from("profiles")
      .select()
      .eq("route", route);

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

  async create(profileData: ProfileData, boolBacks: BoolBacks) {
    const { data, error } = await SUPABASE.from("profiles").insert([
      profileData,
    ]);

    this.handleProfile(data, error, boolBacks);
  }
}

export default ProfileApi;
