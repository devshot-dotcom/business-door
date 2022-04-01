import { useReducer, useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { profileReducer, ProfileState } from ".";
import { Footer, Loader, Sidebar } from "../../components";
import { SUPABASE } from "../../config";
import { ApiError } from "../../helpers/types";
import { useApi, useAuthenticator } from "../../hooks";

export const Profile = () => {
  const api = useApi();
  const navigate = useNavigate();

  // Get the URL params.
  const { username = "" } = useParams();

  // Note the initial state [fetching].
  const [profile, dispatchProfile] = useReducer(profileReducer, {
    status: "fetching",
  });

  const onSuccess = (data: any) => {
    dispatchProfile({ type: "successful", data: data });
    console.log(data);
  };

  const onFailure = (error?: ApiError) =>
    dispatchProfile({
      type: "failed",
      error: error,
    });

  useEffect(() => {
    const user = SUPABASE.auth.user();

    // If user is logged in but no username is provided.
    if (username === "" && user?.email) {
      // Every user's username is auto-generated
      // from the first part of their email.
      navigate(`/profile/${user.email.split("@")[0]}`);
      return;
    }

    api.profile.fetchByUsername(username, {
      onSuccess: onSuccess,
      onFailure: onFailure,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <>
      {profile.status === "fetching" && <Loader />}
      {profile.status === "fetched" && <Outlet context={{ profile }} />}
      <Sidebar className="hide show-when-sidebar-appears" />
      <Footer />
    </>
  );
};
