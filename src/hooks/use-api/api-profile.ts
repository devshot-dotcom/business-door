import { PostgrestError, User } from "@supabase/supabase-js";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { TOAST_UPTIME } from "../../components/toast";
import { getProfileRoute, routes, SUPABASE } from "../../config";
import { BoolBacks } from "../../helpers";
import { isArrayValid } from "../../helpers/functions";
import { EditProfileState } from "../../pages/edit-profile";
import { ProfileData } from "../../pages/profile";
import Api from "./api";

class ProfileApi extends Api {
  handleProfile(
    data: any,
    error: PostgrestError | null,
    boolBacks: BoolBacks,
    shouldToast: boolean = true
  ) {
    // Network error, or database errors.
    if (error) {
      shouldToast &&
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

  /**
   * Fetches a specific column by the `id` of the user.
   * @param {string} id The `uuid` of the user's profile.
   * @param {string} column The name of the column to fetch.
   * @param {BoolBacks} boolBacks The callback functions.
   * @param {boolean} shouldToast Whether to toast the updates or not.
   *
   * @version 1.0.0
   * @author [kashan-ahmad](https://github.com/kashan-ahmad)
   */
  async fetchColumnById(
    id: string,
    column: string,
    boolBacks: BoolBacks,
    shouldToast?: boolean
  ) {
    const { data, error } = await SUPABASE.from("profiles")
      .select(column)
      .eq("id", id);

    this.handleProfile(data, error, boolBacks, shouldToast);
  }

  /**
   * Creates a new profile in the `supabase.profiles` table.
   * @param {User} user The user data to create a profile with.
   *
   * @author kashan-ahmad
   * @version 2.0.0
   * @changelog
   * - 1.0.1: Added paramer `shouldToast`
   * - 2.0.0: Reworked the whole method. Removed the parameters `profileData`, `boolBacks`, and `shouldToast`. Added a new parameter `user`. The method is now self sufficient.
   */
  async create(user: User) {
    const { data, error } = await SUPABASE.from("profiles").insert([
      {
        id: user.id,
        email: user.email,
        route: getProfileRoute(user.id),
      },
    ]);

    this.handleProfile(
      data,
      error,
      {
        onSuccess: (data: ProfileData) => {
          this.makeToast({
            title: "Say hello to your new profile!",
            subTitle:
              "You can edit your profile at any time by clicking the edit button in the top right corner of the page.",
            variant: "valid",
          });

          this.navigate?.(`${routes.profile.PATH}/${data.route}`);
        },
        onFailure: () =>
          this.makeToast({
            title: "Sorry, we couldn't create your profile.",
            subTitle:
              "Please log back in and try again. If the problem persists, please contact support.",
            variant: "invalid",
          }),
      },
      false
    );
  }

  /**
   * Updates a profile in the `supabase.profiles` table.
   * @param {ProfileData} profileData The profile data to update.
   * @param {BoolBacks} boolBacks The callback functions called to extend response handling functionalities.
   * @returns {Promise<void>} The promise to be resolved.
   *
   * @version 1.0.1
   * @author kashan-ahmad
   *
   * @changelog
   * 1.0.1: Changed parameter `state`'s type from `ProfileData` to `EditProfileState`.
   */
  async update(
    state: EditProfileState,
    boolBacks: BoolBacks,
    shouldToast: boolean = true
  ): Promise<void> {
    // Initialization toast.
    shouldToast &&
      this.makeToast({
        title: "Updating profile...",
        variant: "loading",
        upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
      });

    try {
      const { data, error } = await SUPABASE.from("profiles")
        .update([state])
        .eq("id", SUPABASE.auth.user()?.id);

      if (error) {
        this.handleError({ error, shouldToast: true, boolBacks });
        return;
      }

      if (isArrayValid(data)) {
        shouldToast &&
          this.makeToast({
            title: "Profile updated successfully!",
            variant: "valid",
          });
        boolBacks?.onSuccess?.(data![0] as ProfileData);
        return;
      }

      this.handleError({ error, shouldToast: true, boolBacks });
    } catch (e) {
      console.error(e);
      this.handleError({ boolBacks });
    }
  }

  /**
   * Update a column of the profile by the user's id.
   * @param {string} id The user's id.
   * @param {string} column The column to update.
   * @param {string} value The value to update the column with.
   * @param {BoolBacks} boolBacks The callback functions called to extend response handling functionalities.
   * @param {boolean} shouldToast Whether to toast the updates or not.
   *
   * @version 1.0.0
   * @author [kashan-ahmad](https://github.com/kashan-ahmad)
   */
  async updateColumnById(
    id: string,
    column: string,
    value: any,
    boolBacks: BoolBacks,
    shouldToast?: boolean
  ) {
    shouldToast &&
      this.makeToast({
        title: "Updating profile...",
        variant: "loading",
        upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
      });

    const { data: profile, error } = await SUPABASE.from("profiles")
      .update([{ [column]: value }])
      .eq("id", id);

    this.handleProfile(profile, error, boolBacks, shouldToast);
  }
}

export default ProfileApi;
