import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { SUPABASE } from "../../config";
import { BoolBacks } from "../../helpers";
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
      .from("public/avatars")
      .download(fileName);

    if (error) {
      boolBacks?.onFailure?.(error);
      console.error(error);
      return;
    }

    boolBacks?.onSuccess?.(data);
  }
}

export default StorageApi;
