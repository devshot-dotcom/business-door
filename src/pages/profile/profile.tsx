import { useReducer, useEffect, FC } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { profileReducer } from ".";
import { Footer, Loader, Sidebar } from "../../components";
import { ROUTES, SUPABASE } from "../../config";
import { ApiError } from "../../helpers/types";
import { useApi } from "../../hooks";

export const ProfileComponent: FC = () => {
  const api = useApi();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the URL params.
  const { username = "" } = useParams();

  // Note the initial state [fetching].
  const [profile, dispatchProfile] = useReducer(profileReducer, {
    status: "fetching",
  });

  function onSuccess(data: any) {
    dispatchProfile({ type: "successful", data: data });
  }

  function onFailure(error?: ApiError) {
    dispatchProfile({
      type: "failed",
      error: error,
    });
  }

  useEffect(() => {
    /* const user = SUPABASE.auth.user();
    const pathNames = location.pathname.split("/");

    // In case the edit page is requested,
    // we need to check if the user is logged in,
    // and fetch the profile of the logged in user.
    // Otherwise slap them with a 403.
    if (pathNames[pathNames.length - 1] === "edit") {
      if (!user) {
        navigate(ROUTES.error403.path);
        return;
      }

      api.profile.fetchById(user.id, {
        onSuccess: onSuccess,
        onFailure: onFailure,
      });

      return;
    }

    // In the the view profile page is requested
    // and the user is logged in but no username is provided.
    if (username === "" && user?.email) {
      // Every user's username is auto-generated
      // from the first part of their email.
      // Since a logged user's username is unknown
      // unless their profile is fetched, we use
      // this strategy to navigate to their profile.
      navigate(`/profile/${user.email.split("@")[0]}`);
      return;
    }

    api.profile.fetchByUsername(username, {
      onSuccess: onSuccess,
      onFailure: onFailure,
    }); */

    const additionalInfo: any[] = [
      {
        label: "YouTube",
        url: "https://www.youtube.com",
      },
      {
        label: "Github",
        url: "https://www.github.com",
      },
      {
        label: "Dribble",
        url: "https://www.dribble.com",
      },
      {
        label: "Tumblr",
        url: "https://www.tumblr.comhttps://www.tumblr.com",
      },
      {
        label: "Facebook",
        url: "https://www.facebook.com",
      },
      {
        label: "Spotify",
        url: "https://www.spotify.com",
      },
    ];

    // Manual dispatch for debugging purposes.
    dispatchProfile({
      type: "successful",
      data: {
        email: "kashan1588@gmail.com",
        aboutMe:
          "Aspernatur sed nisi. Nobis tempora voluptate et qui explicabo rerum dignissimos cumque beatae. Ex ut voluptas ducimus quis sunt suscipit ducimus consequatur earum. Earum suscipit ab tenetur enim eaque odit molestias vel quis. Officiis dicta deleniti ut dolor velit. Rerum reprehenderit laborum nobis corrupti nesciunt.",
        additionalInfo: "",
        avatar: "kashan1588-avatar.png",
        cover: "background-05.png",
        city: "Port Frankstad",
        country: "Niger",
        fullName: "Morissette Renee",
        organization: "Blanda - Frami",
        profession: "Chief Engineer",
        username: "kashan1588",
        cards: "[]",
        level: 1,
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);

  return (
    <>
      <div className="profile">
        {profile.status === "fetching" && <Loader />}
        {profile.status === "fetched" && <Outlet context={profile} />}
      </div>
      <Sidebar className="hide show-when-sidebar-appears" />
      <Footer />
    </>
  );
};
