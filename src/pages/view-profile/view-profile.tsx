import { Navigate, useOutletContext } from "react-router-dom";
import { routes, SUPABASE } from "../../config";
import { isObjectValid } from "../../helpers";
import Profile from "../profile";
import { ProfileState } from "../profile";
import { Button, NextToNav } from "../../components";

function ViewProfile() {
  const { data } = useOutletContext<ProfileState>();

  if (!data) return <Navigate to="/error" />;

  const isLogged = isObjectValid(SUPABASE.auth.user());

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
              <h2 className="text-h2">Your Profile</h2>
              <Button
                as="Link"
                variant="primary"
                to={routes.editProfile.PATH}
                style={{ width: "auto" }}
              >
                Edit
              </Button>
            </div>
          ) : (
            <h2 className="text-h2">User's Profile</h2>
          )}
          {data.aboutMe && <Profile.Bio bio={data.aboutMe} />}
          <div className="profile__grid">
            <Profile.Personal isLogged={isLogged} data={data} />
            <Profile.Additional data={data.additionalInfo} />
          </div>
        </div>
      </NextToNav>
    </>
  );
}

export default ViewProfile;
