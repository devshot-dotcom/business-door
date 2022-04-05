import { useReducer, useEffect, FC } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { profileReducer, ProfileState } from ".";
import { Footer, Loader, Sidebar } from "../../components";
import { SUPABASE } from "../../config";
import { ApiError } from "../../helpers/types";
import { useApi, useAuthenticator } from "../../hooks";

export const ProfileComponent: FC = () => {
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
  };

  const onFailure = (error?: ApiError) =>
    dispatchProfile({
      type: "failed",
      error: error,
    });

  useEffect(() => {
    // Using template data for debugging purposses.
    /* const user = SUPABASE.auth.user();

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
    }); */

    // Manual dispatch for debugging purposes.
    dispatchProfile({
      type: "successful",
      data: {
        aboutMe:
          "Aspernatur sed nisi. Nobis tempora voluptate et qui explicabo rerum dignissimos cumque beatae. Ex ut voluptas ducimus quis sunt suscipit ducimus consequatur earum. Earum suscipit ab tenetur enim eaque odit molestias vel quis. Officiis dicta deleniti ut dolor velit. Rerum reprehenderit laborum nobis corrupti nesciunt.",
        additionalInfo: undefined,
        avatar: "kashan1588-avatar.png",
        cover: "background-05.png",
        city: "Port Frankstad",
        country: "Niger",
        fullName: "Morissette Renee",
        organization: "Blanda - Frami",
        profession: "Chief Engineer",
        username: "kashan1588",
        website: "https://kylee.org",
        level: 1,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <>
      {profile.status === "fetching" && <Loader />}
      {profile.status === "fetched" && <Outlet context={profile} />}
      <Sidebar className="hide show-when-sidebar-appears" />
      <Footer />
    </>
  );
};
