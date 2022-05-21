import { useNavigate } from "react-router-dom";
import { useToast } from "..";
import { StorageApi, ProfileApi, AuthApi, CardsApi, Api } from ".";

/**
 * The hook that serves as a bridge between the client app and the cloud database.
 * @param {string} api The name of the api to use.
 * @returns {Api} A child class of the Api class, based on the `api` property.
 */
const useApi = (api: "storage" | "profile" | "auth" | "cards"): Api => {
  const makeToast = useToast();
  const navigate = useNavigate();

  return {
    storage: new StorageApi(makeToast),
    profile: new ProfileApi(makeToast, navigate),
    auth: new AuthApi(makeToast),
    cards: new CardsApi(makeToast),
  }[api];
};

export default useApi;
