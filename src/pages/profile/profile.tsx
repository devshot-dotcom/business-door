import "./profile.scss";
import * as React from "react";
import { useApi } from "../../hooks";
import { ApiError } from "../../helpers/types";
import { ProfileData, profileReducer } from ".";
import { ProfileApi } from "../../hooks/use-api";
import { Footer, Loader, Sidebar } from "../../components";
import { getProfileRoute, routes, SUPABASE } from "../../config";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

/**
 * Profile page component.
 *
 * @returns {JSX.Element}
 *
 * @version 1.0.2
 * @author [kashan-ahmad](https://github.com/kashan-ahmad)
 */
function Profile(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const api = useApi("profile") as ProfileApi;

  // Get the URL params.
  const { route = "" } = useParams();

  // Note the initial state [fetching].
  const [profile, dispatchProfile] = React.useReducer(profileReducer, {
    status: "fetching",
  });

  React.useEffect(() => {
    const user = SUPABASE.auth.user();
    const pathNames = location.pathname.split("/");

    /**
     * The callback that sets the profile data.
     * @param {ProfileData} data The profile data.
     * @returns {void}
     */
    const onSuccess = (data: ProfileData): void =>
      dispatchProfile({ type: "successful", data: data });

    /**
     * The callback that sets the error.
     * @param {ApiError} error The error that shows a failed request.
     * @returns {void}
     */
    const onFailure = (error?: ApiError): void =>
      dispatchProfile({
        type: "failed",
        error: error,
      });

    // This is the case where the edit profile page is requested but this page also parsed since its the parent route.
    // The term `edit` could have also been taken as a route parameter by the router, but that didn't happen, and the
    if (pathNames[pathNames.length - 1] === "edit") {
      // Only authorized users can access the edit profile page.
      if (!user) {
        navigate(routes.error403.PATH);
        return;
      }

      api.fetchById(user.id, {
        onSuccess: onSuccess,
        onFailure: onFailure,
      });

      return;
    }

    // If the the view profile page is requested and the user is logged in but no route is provided, we redirect the user to their profile page.
    if (route === "" && user) {
      navigate(getProfileRoute(user.id));
      return;
    }

    // By default, we fetch the profile data for the provided route.
    api.fetchByRoute(route, {
      onSuccess: onSuccess,
      onFailure: onFailure,
    });

    /* const additionalInfo: any[] = [
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
    ];

    // Manual dispatch for debugging purposes.
    dispatchProfile({
      type: "successful",
      data: {
        route: "123",
        email: "lanaven774@wowcg.com",
        aboutMe:
          "Aspernatur sed nisi. Nobis tempora voluptate et qui explicabo rerum dignissimos cumque beatae. Ex ut voluptas ducimus quis sunt suscipit ducimus consequatur earum. Earum suscipit ab tenetur enim eaque odit molestias vel quis. Officiis dicta deleniti ut dolor velit. Rerum reprehenderit laborum nobis corrupti nesciunt.",
        avatar: "kashan1588-avatar.png",
        cover: "background-05.png",
        city: "Port Frankstad",
        country: "Niger",
        fullName: "Morissette Renee",
        profession: "Chief Engineer",
        organization: "Blanda",
        additionalInfo: JSON.stringify(additionalInfo),
        level: 1,
      },
    }); */

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route]);

  return (
    <>
      <div className="profile">
        {profile.status === "fetching" && (
          <Loader style={{ height: "100vh" }} />
        )}
        {profile.status === "fetched" && <Outlet context={profile} />}
      </div>
      <Sidebar className="hide show-when-sidebar-appears" />
      <Footer />
    </>
  );
}

export default Profile;
