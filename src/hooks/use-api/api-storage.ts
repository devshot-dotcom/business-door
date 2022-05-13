import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { TOAST_UPTIME } from "../../components/toast";
import { getAvatarName, SUPABASE } from "../../config";
import { BoolBacks } from "../../helpers";
import { StorageApiResponse } from "../../helpers/types";
import Api from "./api";

class StorageApi extends Api {
  getAvatarUrl(fileName: string): string | Error {
    const { publicURL, error } = SUPABASE.storage
      .from("avatars")
      .getPublicUrl(fileName);

    if (error) {
      console.error(error);
      return error;
    }

    if (!publicURL) {
      console.error(`${StatusCodes.NOT_FOUND} - ${ReasonPhrases.NOT_FOUND}`);
      return {
        name: ReasonPhrases.NOT_FOUND,
        message: ReasonPhrases.NOT_FOUND,
      };
    }

    return publicURL;
  }

  async fetchAvatar(fileName: string, boolBacks?: BoolBacks) {
    const { data, error } = await SUPABASE.storage
      .from("avatars")
      .download(fileName);

    if (error) {
      console.error(error);
      boolBacks?.onFailure?.(error);
      return;
    }

    if (data) {
      boolBacks?.onSuccess?.(data);
      return;
    }

    console.error(`${StatusCodes.NOT_FOUND} - ${ReasonPhrases.NOT_FOUND}`);
  }

  /**
   * Upserts an avatar to the storage.
   *! The user must be logged in to perform this operation.
   *
   * The method uses a recursive strategy to decide between `INSERT` and `UPDATE` SQL operations. If the file already exists, it will be updated.
   *
   * @param {File} file The file to be uploaded.
   * @param {BoolBacks} boolBacks The callback functions to be called on success or failure.
   * @param {boolean} isRecursive `true` to update the avatar and `false` to insert.
   * @author kashan-ahmad
   * @version 1.0.0
   */
  async uploadAvatar(file: File, boolBacks?: BoolBacks, isRecursive?: boolean) {
    /**
     * Both of the `INSERT` and `UPDATE` SQL operations are handled by this function.
     * @param {StorageApiResponse} response The response from the API.
     * @returns {void}
     */
    const responseHandler = ({ data, error }: StorageApiResponse): void => {
      if (error) {
        // @ts-ignore
        // Yes, the response fucks things up and returns an `ApiError` object instead of `Error` sometimes.
        if (error.statusCode && error.statusCode === "23505") {
          // This represents that the `INSERT` operation failed because the file already exists. We need to update the file instead. So we call the function again with `isRecursive` set to `true`. This will trigger the `UPDATE` operation.
          this.uploadAvatar(file, boolBacks, true);
          return;
        }

        // Otherwise.
        this.makeToast({
          variant: "invalid",
          title: "Failed to upload avatar",
        });

        console.error(error);
        boolBacks?.onFailure?.(error);
        return;
      }

      if (data) {
        this.makeToast({
          variant: "valid",
          title: "Avatar uploaded successfully",
        });

        boolBacks?.onSuccess?.(data);
        return;
      }

      // No response means erred response.
      console.error(
        `${StatusCodes.SERVICE_UNAVAILABLE} - ${ReasonPhrases.SERVICE_UNAVAILABLE}`
      );
      boolBacks?.onFailure?.();
    };

    // The logged in user.
    const user = SUPABASE.auth.user();

    // The file name is the first segment of the user's `id` + `-avatar.png`.
    const fileName = getAvatarName(user!.id);

    try {
      if (isRecursive) {
        // This represents that the file already exists and the `INSERT` operation returned a `23505` error.
        this.makeToast({
          variant: "loading",
          upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
          title: "Existing avatar found, updating...",
        });

        // The `UPDATE` operation.
        responseHandler(
          await SUPABASE.storage.from("avatars").update(fileName, file)
        );

        return;
      }

      // The default way to go is to `INSERT` the file.
      this.makeToast({
        variant: "loading",
        title: "Uploading avatar...",
        upTime: TOAST_UPTIME.REMOVE_ON_PUSH,
      });

      // The `INSERT` operation.
      responseHandler(
        await SUPABASE.storage.from("avatars").upload(fileName, file)
      );
    } catch (e) {
      console.error(e);
      boolBacks?.onFailure?.();
    }
  }
}

export default StorageApi;
