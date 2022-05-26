import { Navigate, useOutletContext } from "react-router-dom";
import { routes, SUPABASE } from "../../config";
import Profile from "../profile";
import { ProfileState } from "../profile";
import { Button, NextToNav } from "../../components";
import { Layout } from "../../modules";

function ViewProfile() {
  const { data } = useOutletContext<ProfileState>();

  if (!data) return <Navigate to="/error" />;

  const isLogged = SUPABASE.auth.user()?.id === data.id;

  return (
    <>
      <Profile.Header data={data} isLogged={isLogged} />
      <NextToNav>
        <div className="profile__data">
          {isLogged ? (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Layout.Title isUnderlined>Your Profile</Layout.Title>
              <Button
                as="Link"
                variant="primary"
                to={routes.editProfile.PATH}
                style={{ width: "auto" }}
                className="profile__button hide show-when-vertical-nav-appears"
              >
                Edit
              </Button>
            </div>
          ) : (
            <Layout.Title isUnderlined>User's Profile</Layout.Title>
          )}
          {data.aboutMe && <Profile.Bio bio={data.aboutMe} />}
          <div className="profile__grid">
            <Profile.Personal isLogged={isLogged} data={data} />
            <Profile.Additional
              data={data.additionalInfo}
              isLogged={isLogged}
            />
          </div>
        </div>
      </NextToNav>
    </>
  );
}

export default ViewProfile;
